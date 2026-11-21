// Level generator. Used by tools/generate.mjs and by the browser
// for player-made cases.
//
// Each level has exactly one solution. The step-by-step deduction in
// js/hints.js must solve it without a long search.

import { blockingSet, TRADES, castNames } from './themes.js';
import { solve, neighbors, factValue, groupOf, cellOk, unaryOk, areasOf, compareText } from './rules.js';
import { isDeducible, trialCount, caseScore, MAX_TRIES } from './hints.js';

export const SIZES = [4, 5, 6, 7, 8, 9, 10, 11, 12];

// Difficulty levels: how many "what if" steps the hints may need.
// min, max: "what if" steps. hard, hardest: the step budget, so a case
// does not feel harder than its group (see caseScore in hints.js):
// at most this many steps of weight 3 or more, and no step heavier than this.
export const DIFFICULTY = [
  { name: 'Beginner', min: 0, max: 0, hard: 3, hardest: 4 },
  { name: 'Medium', min: 1, max: 2, hard: 5, hardest: 5 },
  { name: 'Hard', min: 3, max: 5, hard: 7, hardest: 6 },
  { name: 'Expert', min: 6, max: 10, hard: 9, hardest: 7 },
  { name: 'Extreme', min: 11, max: Infinity, hard: Infinity, hardest: Infinity },
];
// Name of campaign case i, e.g. "Medium case 3" (counted within its group).
// Extra cases (older cases that fit no group) are "Extra case 2".
export function campaignCaseName(levels, i) {
  const g = levels[i].extra ? 'extra' : levels[i].group;
  const num = levels.slice(0, i + 1).filter(l => (l.extra ? 'extra' : l.group) === g).length;
  return `${g === 'extra' ? 'Extra' : DIFFICULTY[g].name} case ${num}`;
}
// Index into DIFFICULTY for a number of "what if" steps.
export const difficultyIndex = k => DIFFICULTY.findIndex(d => k >= d.min && k <= d.max);

// Rooms per board size. Never more than n.
const ROOMS = { 4: 3, 5: 4, 6: 5, 7: 5, 8: 6, 9: 7, 10: 8, 11: 8, 12: 9 };
const MIN_ROOM = 3;

// Search budget per size. Lower means easier puzzles.
const BUDGET = { 4: 40, 5: 80, 6: 150, 7: 300, 8: 600, 9: 1200, 10: 2500, 11: 4000, 12: 6000 };

function rng(seed) {
  let a = seed >>> 0;
  const next = () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  next.int = k => Math.floor(next() * k);
  next.pick = arr => arr[next.int(arr.length)];
  next.shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = next.int(i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  return next;
}

// Cuts of rectangle x near its middle that leave both parts MIN_ROOM cells or more.
function cutsOf(x) {
  const near = (k, len) => k >= len / 3 && k <= (2 * len) / 3;
  const cuts = [];
  for (let k = 1; k < x.h; k++) if (near(k, x.h) && k * x.w >= MIN_ROOM && (x.h - k) * x.w >= MIN_ROOM) cuts.push(['h', k]);
  for (let k = 1; k < x.w; k++) if (near(k, x.w) && k * x.h >= MIN_ROOM && (x.w - k) * x.h >= MIN_ROOM) cuts.push(['w', k]);
  return cuts;
}

// Split the board into k rectangles. Always split the biggest one, near its middle.
function splitBoard(n, k, R) {
  let rects = [{ r: 0, c: 0, h: n, w: n }];
  while (rects.length < k) {
    const x = rects.slice(1).reduce((a, b) => (b.h * b.w > a.h * a.w || (b.h * b.w === a.h * a.w && R() < 0.5) ? b : a), rects[0]);
    const cuts = cutsOf(x);
    // (The biggest room can always be cut: checked over 100 000 boards of every size.)
    // Cut across the long side more often.
    const long = cuts.filter(([d]) => (d === 'h') === (x.h >= x.w));
    const [d, at] = R.pick(long.length && R() < 0.75 ? long : cuts);
    rects = rects.filter(y => y !== x);
    if (d === 'h') rects.push({ ...x, h: at }, { ...x, r: x.r + at, h: x.h - at });
    else rects.push({ ...x, w: at }, { ...x, c: x.c + at, w: x.w - at });
  }
  return rects;
}

// Rooms (ids) next to the cells whose room is inside, and not inside themselves.
function roomsAround(n, rooms, inside) {
  const nb = new Set();
  for (let i = 0; i < n * n; i++) if (inside(rooms[i])) for (const j of neighbors(i, n)) if (!inside(rooms[j])) nb.add(rooms[j]);
  return nb;
}

// Cells per room id.
function roomSizes(rooms) {
  const size = new Map();
  rooms.forEach(k => size.set(k, (size.get(k) || 0) + 1));
  return size;
}

// Room ids 0, 1, 2, … in the order they first show up. Returns them and the map old -> new.
function renumber(rooms) {
  const map = new Map();
  const out = rooms.map(k => {
    if (!map.has(k)) map.set(k, map.size);
    return map.get(k);
  });
  return { rooms: out, map };
}

// Split the board into rectangles, then merge some for L-shapes.
function makeRooms(n, count, R) {
  const extra = n >= 6 ? R.int(3) : 0;
  const rects = splitBoard(n, count + extra, R);
  const rooms = new Array(n * n);
  rects.forEach((x, k) => {
    for (let r = x.r; r < x.r + x.h; r++) for (let c = x.c; c < x.c + x.w; c++) rooms[r * n + c] = k;
  });
  // Merge the smallest room into its smallest neighbor until we have `count`.
  // This makes L-shapes and keeps sizes even.
  for (let total = rects.length; total > count; total--) {
    const size = roomSizes(rooms);
    const ids = R.shuffle([...size.keys()]).sort((a, b) => size.get(a) - size.get(b));
    const a = ids[0];
    const b = [...roomsAround(n, rooms, k => k === a)].sort((x, y) => size.get(x) - size.get(y))[0];
    for (let i = 0; i < n * n; i++) if (rooms[i] === a) rooms[i] = b;
  }
  return renumber(rooms).rooms;
}

// Merge rooms into one sea until it covers about a third of the board.
// At least 2 rooms stay dry. Returns the new rooms and the sea room id.
function makeSea(n, rooms, R) {
  const size = roomSizes(rooms);
  const ids = [...size.keys()];
  const first = ids.slice(1).reduce((a, b) => (size.get(b) > size.get(a) ? b : a), ids[0]);
  const sea = new Set([first]);
  let total = size.get(first);
  while (total < 0.35 * n * n && ids.length - sea.size > 2) {
    // The board is connected and at least 3 rooms are dry: the sea always has a dry neighbor.
    const k = R.pick([...roomsAround(n, rooms, x => sea.has(x))]);
    sea.add(k);
    total += size.get(k);
  }
  const { rooms: out, map } = renumber(rooms.map(k => (sea.has(k) ? first : k)));
  return { rooms: out, sea: map.get(first) };
}

function makeObjects(n, rooms, theme, R) {
  const ids = Object.keys(theme.objects);
  const spots = ids.filter(id => theme.objects[id].spot);
  const blocks = ids.filter(id => !theme.objects[id].spot);
  const objects = new Array(n * n).fill(null);
  for (let i = 0; i < n * n; i++) {
    const x = R();
    if (x < 0.17) objects[i] = R.pick(blocks);
    else if (x < 0.31) objects[i] = R.pick(spots);
  }
  // Each room keeps at least 2 free cells.
  const roomCount = Math.max(...rooms) + 1;
  for (let k = 0; k < roomCount; k++) {
    const cells = rooms.map((x, i) => x === k ? i : -1).filter(i => i >= 0);
    let free = cells.filter(i => !blocks.includes(objects[i]));
    while (free.length < 2) {
      const i = R.pick(cells.filter(i => blocks.includes(objects[i])));
      objects[i] = null;
      free.push(i);
    }
  }
  return objects;
}

// Walls between two rooms (not the sea): "a-b" -> list of [i, j] cell pairs.
function wallsBetween(n, rooms, sea) {
  const walls = new Map();
  for (let i = 0; i < n * n; i++) {
    for (const j of [i % n < n - 1 ? i + 1 : -1, i + n < n * n ? i + n : -1]) {
      if (j < 0 || rooms[i] === rooms[j] || rooms[i] === sea || rooms[j] === sea) continue;
      const key = [rooms[i], rooms[j]].sort((a, b) => a - b).join('-');
      if (!walls.has(key)) walls.set(key, []);
      walls.get(key).push([i, j]);
    }
  }
  return walls;
}

// Spots in the outer wall (not at sea): [cell, side t/b/l/r].
function edgeSpots(n, rooms, sea) {
  const edge = [];
  for (let i = 0; i < n * n; i++) {
    if (rooms[i] === sea) continue;
    const r = Math.floor(i / n), c = i % n;
    for (const [side, ok] of [['t', r === 0], ['b', r === n - 1], ['l', c === 0], ['r', c === n - 1]]) if (ok) edge.push([i, side]);
  }
  return edge;
}

// One door for each pair of rooms that touch (not the sea), and some windows
// in the outer wall (not at sea).
function makeDoorsAndWindows(n, rooms, sea, R) {
  const walls = wallsBetween(n, rooms, sea);
  const doors = [...walls.keys()].sort(compareText).map(k => R.pick(walls.get(k)));
  const windows = R.shuffle(edgeSpots(n, rooms, sea)).slice(0, Math.max(2, Math.round(n * 0.6))).sort((a, b) => a[0] - b[0]);
  return { doors, windows };
}

// Random placement: one person per row and column, on free cells.
// noTouch: people in rows next to each other never touch at a corner.
function makePlacement(n, objects, blocking, R, noTouch = false) {
  const cols = new Array(n).fill(-1);
  const used = new Array(n).fill(false);
  function go(r) {
    if (r === n) return true;
    for (const c of R.shuffle([...new Array(n).keys()])) {
      if (used[c] || blocking.has(objects[r * n + c])) continue;
      if (noTouch && r > 0 && Math.abs(cols[r - 1] - c) === 1) continue;
      used[c] = true; cols[r] = c;
      if (go(r + 1)) return true;
      used[c] = false;
    }
    return false;
  }
  if (!go(0)) return null;
  return cols.map((c, r) => r * n + c);
}

function candidateClues(level, pos, area, R) {
  const n = level.size, out = [];
  const roomCount = Math.max(...level.rooms) + 1;
  pos.forEach((i, p) => {
    const k = level.rooms[i];
    out.push({ p, t: 'room', v: k });
    const others = [...new Array(roomCount).keys()].filter(x => x !== k);
    for (const x of R.shuffle(others).slice(0, 2)) out.push({ p, t: 'notRoom', v: x });
    const obj = level.objects[i];
    if (obj) out.push({ p, t: 'on', v: obj });
    // "Next to" only counts objects in the same room.
    const near = new Set(neighbors(i, n).filter(j => level.rooms[j] === level.rooms[i]).map(j => level.objects[j])
      .filter(o => o && o !== level.objects[i]));
    for (const id of near) out.push({ p, t: 'next', v: id });
    // Doors and windows.
    if (level.doors.some(d => d.includes(i))) out.push({ p, t: 'door' });
    if (level.windows.some(([w]) => w === i)) out.push({ p, t: 'window' });
    out.push({ p, t: 'row', v: Math.floor(i / n) }, { p, t: 'col', v: i % n });
    const mates = pos.map((j, q) => q).filter(q => q !== p && area[pos[q]] === area[i]);
    if (!mates.length) out.push({ p, t: 'alone' });
    // No "same room" clue with the victim: it would name the murderer.
    const victimIdx = level.people.findIndex(x => x.victim);
    for (const q of mates) if (q > p && p !== victimIdx && q !== victimIdx) out.push(R() < 0.5 ? { p, t: 'same', v: q } : { p: q, t: 'same', v: p });
  });
  if (level.tasks) {
    // Task clues: "was a hunter", "was a hunter or a gatherer", "had no task".
    const ids = level.tasks.map(([id]) => id);
    pos.forEach((i, p) => {
      const tag = level.tags[i];
      if (tag?.startsWith('k:')) {
        const id = tag.slice(2);
        out.push({ p, t: 'task', v: id });
        const other = ids.filter(x => x !== id);
        if (other.length) out.push({ p, t: 'taskEither', v: [id, R.pick(other)].sort(compareText) });
      } else out.push({ p, t: 'noTask' });
    });
  }
  if (level.bandits) {
    const B = new Set(level.banditSol);
    pos.forEach((i, p) => {
      if (B.has(p)) out.push({ p, t: 'bandit' });
      else if (!level.people[p].victim) out.push({ p, t: 'notBandit' });
      if ([...B].some(b => b !== p && area[pos[b]] === area[i])) out.push({ p, t: 'withBandit' });
    });
  }
  return out;
}

// Kinds of case facts.
export const FACT_KINDS = ['onCount', 'nextCount', 'roomCount', 'furniture', 'edge', 'corner', 'doorCount', 'windowCount', 'alone', 'emptyRooms', 'touch', 'apart'];

// Every case fact of the allowed kinds that holds for the solution, with its count.
function allFactsFor(level, pos, blocking, kinds) {
  const out = [];
  const add = f => { if (kinds.includes(f.t)) out.push({ ...f, k: f.t === 'apart' ? undefined : factValue(level, f, pos) }); };
  for (const id of new Set(level.objects.filter(Boolean))) {
    if (!blocking.has(id)) add({ t: 'onCount', v: id });
    add({ t: 'nextCount', v: id });
  }
  for (const k of new Set(level.rooms)) if (k !== level.sea) add({ t: 'roomCount', v: k });
  for (const t of ['furniture', 'edge', 'corner', 'alone', 'emptyRooms', 'touch']) add({ t });
  // Every board has doors (between its rooms) and at least 2 windows.
  add({ t: 'doorCount' });
  add({ t: 'windowCount' });
  for (const g of ['rank', 'trade']) {
    const f = { t: 'apart', v: g };
    if (pos.some((_, p) => groupOf(level, f, p)) && factValue(level, f, pos)) add(f);
  }
  return out;
}

// Case facts that hold for the solution. `kinds`: allowed kinds.
// At least one of each kind in `must`, then more up to 3.
function candidateFacts(level, pos, blocking, kinds, must, R) {
  const out = R.shuffle(allFactsFor(level, pos, blocking, kinds));
  const picked = [];
  for (const kind of must) { const f = out.find(x => x.t === kind); if (f) picked.push(f); }
  for (const f of out) if (picked.length < Math.max(3, must.length) && !picked.includes(f)) picked.push(f);
  return picked.map(f => (f.k === undefined ? { t: f.t, v: f.v } : f));
}

// Order in which clues are tried for removal. Plain clues go first,
// so the kept clues are the more interesting ones.
const DROP_ORDER = { door: 3, window: 3, row: 0, col: 0, room: 1, notRoom: 2, notBandit: 2, noTask: 2, on: 3, next: 3, same: 3, alone: 3, bandit: 3, withBandit: 3, task: 3, taskEither: 3 };

// A number by board size: v of the first [max, v] with n <= max, else last.
function bySize(n, steps, last) {
  for (const [max, v] of steps) if (n <= max) return v;
  return last;
}

// The special rules below get a context: the level, the solution pos, its areas,
// the random numbers R, the cell tags so far, and helpers. Each returns false
// when the board does not fit the rule.

// Ranks: some rooms with people are court rooms. Nobles stand in them, commoners never do.
function addRanks({ level, pos, R, rooms, sea, roomCount, roomsWithPeople }) {
  const count = Math.max(1, Math.floor((roomCount - (sea >= 0 ? 1 : 0)) / 3));
  level.court = R.shuffle(roomsWithPeople.slice()).slice(0, count).sort((a, b) => a - b);
  level.rank = pos.map(i => {
    const court = level.court.includes(rooms[i]);
    if (R() >= 0.65) return 'knight';
    return court ? 'noble' : 'commoner';
  });
  return true;
}

// Trades: some people have a trade. Work spots of a trade, some with their worker.
function addTrades({ level, pos, R, n, tags, plain, occupied }) {
  const used = R.shuffle(TRADES.map(t => t.id)).slice(0, bySize(n, [[6, 3], [9, 4]], 5));
  level.trade = pos.map(() => (R() < 0.5 ? R.pick(used) : null));
  pos.forEach((i, p) => { if (level.trade[p] && plain(i) && R() < 0.6) tags[i] = `t:${level.trade[p]}`; });
  for (let i = 0; i < n * n; i++) if (!occupied.has(i) && plain(i) && R() < 0.12) tags[i] = `t:${R.pick(used)}`;
  return true;
}

// Seals: moon (alone in the room) and sun (shares the room), under people and on empty cells.
function addGlyphs({ pos, area, R, n, tags, plain, occupied, perArea }) {
  pos.forEach(i => { if (!tags[i] && plain(i) && R() < 0.4) tags[i] = perArea.get(area[i]) === 1 ? 'lone' : 'crowd'; });
  for (let i = 0; i < n * n; i++) if (!occupied.has(i) && !tags[i] && plain(i) && R() < 0.08) tags[i] = R() < 0.5 ? 'lone' : 'crowd';
  return true;
}

// Hidden tasks: some people stand on task spots, more spots stay empty.
function addTasks({ level, pos, R, n, tags, plain, occupied }) {
  const used = R.shuffle(TRADES.map(t => t.id)).slice(0, bySize(n, [[6, 2], [9, 3]], 4));
  const counts = new Map(used.map(id => [id, 0]));
  pos.forEach(i => {
    if (!tags[i] && plain(i) && R() < 0.3) { const id = R.pick(used); tags[i] = `k:${id}`; counts.set(id, counts.get(id) + 1); }
  });
  for (const id of used) {
    const spare = [...new Array(n * n).keys()].filter(i => !occupied.has(i) && !tags[i] && plain(i));
    for (const i of R.shuffle(spare).slice(0, 1 + R.int(3))) tags[i] = `k:${id}`;
  }
  level.tasks = used.filter(id => counts.get(id) > 0).map(id => [id, counts.get(id)]);
  if (!level.tasks.length) return false;
  // Spots of a task nobody does: drop them.
  tags.forEach((t, i) => { if (t?.startsWith('k:') && !counts.get(t.slice(2))) tags[i] = null; });
  return true;
}

// Full house: every land room must hold someone in the solution.
function checkFullHouse({ pos, rooms, sea }) {
  const used = new Set(pos.map(i => rooms[i]));
  return ![...new Set(rooms)].some(k => k !== sea && !used.has(k));
}

// Couples: pairs that already stand diagonally next to each other in one room.
// Never the victim or the murderer: their room holds just the two of them,
// so a partner of either would give the murderer away (or not fit).
function addCouples({ level, pos, area, R, n }) {
  const victim = level.people.findIndex(x => x.victim);
  const killer = pos.findIndex((i, q) => q !== victim && area[i] === area[pos[victim]]);
  const pairs = [];
  pos.forEach((i, p) => pos.forEach((j, q) => {
    if (q > p && ![p, q].some(x => x === victim || x === killer) && area[i] === area[j] &&
      Math.abs(Math.floor(i / n) - Math.floor(j / n)) === 1 && Math.abs((i % n) - (j % n)) === 1) pairs.push([p, q]);
  }));
  const taken = new Set();
  const most = bySize(n, [[5, 1], [8, 2]], 3);
  level.couples = [];
  for (const [p, q] of R.shuffle(pairs)) {
    if (taken.has(p) || taken.has(q) || level.couples.length >= most) continue;
    level.couples.push([p, q]); taken.add(p); taken.add(q);
  }
  return level.couples.length > 0;
}

// Even and odd: some land rooms are marked with the parity of their people.
function addParity({ level, pos, R, n, rooms, sea }) {
  const count = k => pos.filter(i => rooms[i] === k).length;
  const land = [...new Set(rooms)].filter(k => k !== sea);
  level.parity = R.shuffle(land).slice(0, Math.min(land.length, n >= 9 ? 3 : 2))
    .sort((a, b) => a - b).map(k => [k, count(k) % 2 ? 'odd' : 'even']);
  return true;
}

// A river that winds: it moves left or right by up to 2 cells per step.
function addRiver({ level, pos, R, n }) {
  const dir = R() < 0.5 ? 'v' : 'h';
  // Keep it away from the edges, so both sides matter.
  const lo = n >= 6 ? 2 : 1, hi = n >= 6 ? n - 2 : n - 1;
  const cut = [lo + R.int(hi - lo + 1)];
  for (let k = 1; k < n; k++) cut.push(Math.min(hi, Math.max(lo, cut[k - 1] + R.int(5) - 2)));
  if (new Set(cut).size < 3) return false;
  const firstSide = i => (dir === 'v' ? i % n < cut[Math.floor(i / n)] : Math.floor(i / n) < cut[i % n]);
  level.river = { dir, cut, first: pos.filter(firstSide).length };
  return true;
}

// Bandits: a few people (never the victim). Some rooms without one are lawful (star rooms).
function addBandits({ level, pos, R, n, rooms, roomsWithPeople }) {
  const K = bySize(n, [[5, 1], [8, 2]], 3);
  const victim = level.people.findIndex(p => p.victim);
  const bandits = R.shuffle(pos.map((_, p) => p).filter(p => p !== victim)).slice(0, K);
  const clean = roomsWithPeople.filter(k => !bandits.some(b => rooms[pos[b]] === k));
  level.bandits = K;
  level.lawful = R.shuffle(clean).slice(0, n >= 9 ? 2 : 1).sort((a, b) => a - b);
  level.banditSol = bandits;
  return true;
}

// The rules in the order they use random numbers. Tags are set on the level after tasks.
const RULE_STEPS = [
  ['ranks', addRanks], ['trades', addTrades], ['glyphs', addGlyphs], ['tasks', addTasks],
  ['tags', null], ['fullhouse', checkFullHouse], ['couples', addCouples], ['parity', addParity],
  ['river', addRiver], ['bandits', addBandits],
];

// Add the data for special rules to a level. Uses the solution `pos`.
function addRules(level, rules, pos, area, R) {
  const n = level.size, { rooms, objects, sea } = level;
  const perArea = new Map();
  pos.forEach(i => perArea.set(area[i], (perArea.get(area[i]) || 0) + 1));
  const ctx = {
    level, pos, area, R, n, rooms, sea, perArea,
    roomCount: Math.max(...rooms) + 1,
    occupied: new Set(pos),
    plain: i => !objects[i] && rooms[i] !== sea,
    tags: new Array(n * n).fill(null),
    roomsWithPeople: [...new Set(pos.map(i => rooms[i]))].filter(k => k !== sea),
  };
  for (const [rule, add] of RULE_STEPS) {
    if (rule === 'tags') {
      if (['trades', 'glyphs', 'tasks'].some(r => rules.includes(r))) level.tags = ctx.tags;
    } else if (rules.includes(rule) && !add(ctx)) return false;
  }
  return true;
}

// A copy of the level without one special rule (and its clues and marks).
function withoutRule(level, rule) {
  const out = { ...level, rules: level.rules.filter(r => r !== rule) };
  if (rule === 'sea') out.sea = -1;
  if (rule === 'glyphs' && level.tags) out.tags = level.tags.map(t => (t === 'lone' || t === 'crowd' ? null : t));
  if (rule === 'trades') out.tags = level.tags.map(t => (t?.startsWith('t:') ? null : t));
  if (rule === 'couples') out.couples = [];
  if (rule === 'parity') out.parity = [];
  if (rule === 'river') out.river = null;
  if (rule === 'tasks') {
    out.tasks = [];
    out.tags = level.tags.map(t => (t?.startsWith('k:') ? null : t));
    out.clues = level.clues.filter(c => !['task', 'taskEither', 'noTask'].includes(c.t));
  }
  if (rule === 'bandits') {
    out.bandits = 0;
    out.clues = level.clues.filter(c => !['bandit', 'notBandit', 'withBandit'].includes(c.t));
  }
  return out;
}

// A limit: the most "what if" steps (a number), or a group like DIFFICULTY[g]
// with its most tries and its step budget (most hard steps, hardest step).
export function fitsLimit(level, blocking, limit) {
  if (typeof limit === 'number') return isDeducible(level, blocking, limit);
  const r = caseScore(level, blocking);
  return !!r && r.tries <= limit.max && r.hard <= (limit.hard ?? Infinity) && r.hardest <= (limit.hardest ?? Infinity);
}

// True if the case still works: one solution, the stored one, and deducible step by step
// within the limit.
function works(level, blocking, limit) {
  const res = solve(level, blocking, { limit: 2, maxNodes: 200000 });
  return !res.aborted && res.count === 1 && res.first.join() === level.solution.join() && fitsLimit(level, blocking, limit);
}

// True if the case needs this rule: without it, it does not work.
function ruleNeeded(level, rule, blocking, limit) {
  return !works(withoutRule(level, rule), blocking, limit);
}

// Drop the parts of level[key] the case can do without. True if one went.
function dropFrom(level, key, blocking, limit) {
  let changed = false;
  for (const item of level[key].slice()) {
    const rest = level[key].filter(x => x !== item);
    if ((key === 'couples' || key === 'parity') && !rest.length) continue; // the rule itself stays
    if (key === 'clues' && lastClue(level, item, rest)) continue; // everyone keeps a clue
    if (works({ ...level, [key]: rest }, blocking, limit)) { level[key] = rest; changed = true; }
  }
  return changed;
}

// Drop every clue, couple and even/odd mark the case can do without.
// Afterwards each one left is needed. Fixed order, so it needs no random numbers.
function dropUnneeded(level, blocking, limit) {
  // Repeat until nothing more can go: dropping one part can make another one redundant.
  for (let changed = true; changed;) {
    changed = false;
    for (const key of ['clues', 'facts', 'couples', 'parity']) if (level[key] && dropFrom(level, key, blocking, limit)) changed = true;
  }
}

// True if the murderer can be named without solving the board:
//  - a "same room" clue links someone to the victim, or
//  - the victim's own clues allow one room only, and another person's
//    clues allow only that room too.
export function murdererTooEasy(level, blocking) {
  const victim = level.people.findIndex(x => x.victim);
  if (level.clues.some(cl => cl.t === 'same' && (cl.p === victim || cl.v === victim))) return true;
  const area = areasOf(level), n = level.size;
  const UNARY = new Set(['room', 'notRoom', 'on', 'next', 'row', 'col', 'bandit', 'task', 'taskEither', 'noTask', 'door', 'window']);
  const roomsOf = p => {
    const mine = level.clues.filter(cl => cl.p === p && UNARY.has(cl.t));
    const out = new Set();
    for (let i = 0; i < n * n; i++) if (cellOk(level, blocking, p, i) && mine.every(cl => unaryOk(level, blocking, cl, i))) out.add(area[i]);
    return out;
  };
  const vRooms = roomsOf(victim);
  if (vRooms.size !== 1) return false;
  const [room] = vRooms;
  return level.people.some((_, q) => q !== victim && [...roomsOf(q)].every(a => a === room));
}

// True if `clue` is the last clue of a person who is not the victim.
// The victim always has the victim rule, so needs no clue.
function lastClue(level, clue, rest) {
  return !level.people[clue.p].victim && !rest.some(x => x.p === clue.p);
}

// People (not the victim) without any clue.
export function peopleWithoutClue(level) {
  return level.people.map((x, p) => p).filter(p => !level.people[p].victim && !level.clues.some(cl => cl.p === p));
}

// Parts of a case that are not needed within the limit (see fitsLimit).
// Empty when every clue and rule counts.
export function unneededParts(level, blocking, limit) {
  const out = [];
  level.clues.forEach((cl, k) => {
    if (works({ ...level, clues: level.clues.filter((_, j) => j !== k) }, blocking, limit)) out.push(`clue ${cl.p}:${cl.t}`);
  });
  level.facts.forEach((f, k) => {
    if (works({ ...level, facts: level.facts.filter((_, j) => j !== k) }, blocking, limit)) out.push(`fact ${f.t}`);
  });
  for (const key of ['couples', 'parity']) {
    if (!level[key] || level[key].length < 2) continue;
    level[key].forEach((item, k) => {
      if (works({ ...level, [key]: level[key].filter((_, j) => j !== k) }, blocking, limit)) out.push(`${key} ${JSON.stringify(item)}`);
    });
  }
  for (const r of level.rules || []) if (!ruleNeeded(level, r, blocking, limit)) out.push(`rule ${r}`);
  return out;
}

// A random board with its solution, people, doors, windows and special rules
// (attempt: the try number, for the names). Null if it does not fit.
function makeBoard(theme, n, seed, attempt, rules, blocking, R) {
  const hasSea = rules.includes('sea');
  let rooms = makeRooms(n, ROOMS[n] + (hasSea ? 1 : 0), R);
  let sea = -1;
  if (hasSea) ({ rooms, sea } = makeSea(n, rooms, R));
  // Rooms have 3+ cells (cuts keep that, merges only grow rooms), at most n of them,
  // and none is much bigger than the others (checked over 100 000 boards).
  const roomCount = Math.max(...rooms) + 1;
  const objects = makeObjects(n, rooms, theme, R);
  if (hasSea) rooms.forEach((k, i) => { if (k === sea) objects[i] = null; });
  const pos = makePlacement(n, objects, blocking, R, rules.includes('distance'));
  if (!pos) return null;

  // Areas: rooms, but each sea cell is its own area.
  const area = rooms.map((k, i) => (k === sea ? roomCount + i : k));

  // The victim shares an area with exactly one other person.
  const perArea = new Map();
  pos.forEach(i => perArea.set(area[i], (perArea.get(area[i]) || 0) + 1));
  const victims = pos.map((i, p) => p).filter(p => perArea.get(area[pos[p]]) === 2);
  if (!victims.length) return null;
  const victim = R.pick(victims);

  // Names come from their own random numbers, so the board does not depend on them.
  R.shuffle(new Array(12).fill(0)); // keeps the board numbers as they were
  const NR = rng(seed * 7919 + attempt);
  const names = castNames(theme, n, victim, NR.pick);
  const roomNames = R.shuffle(theme.rooms.slice()).slice(0, roomCount);
  if (hasSea) roomNames[sea] = theme.seaName; // the themes with a sea (reef, rift) name it
  const { doors, windows } = makeDoorsAndWindows(n, rooms, sea, R);
  const level = {
    size: n, rooms, objects, roomNames, doors, windows,
    people: names.map((name, p) => (p === victim ? { name, victim: true } : { name })),
    clues: [], solution: pos,
  };
  if (rules.length) {
    level.rules = rules;
    level.sea = sea;
    if (!addRules(level, rules, pos, area, R)) return null;
  }
  return { level, pos, area };
}

// Remove clues while the case keeps one solution (found within the search budget).
// Plain clues go first. Everyone keeps a clue.
function trimClues(level, clues, blocking, budget, R) {
  const order = R.shuffle(clues.slice()).sort((a, b) => DROP_ORDER[a.t] - DROP_ORDER[b.t]);
  let kept = clues;
  for (const cl of order) {
    const rest = kept.filter(x => x !== cl);
    if (!rest.some(x => x.p === cl.p)) continue; // keep one clue per person
    level.clues = rest;
    const res = solve(level, blocking, { limit: 2, maxNodes: budget });
    if (res.count === 1 && !res.aborted) kept = rest;
  }
  kept.sort((a, b) => a.p - b.p);
  level.clues = kept;
}

// True if a finished case is good: every part needed, the facts the player asked
// for there, the murderer not obvious, and solvable within the tries and the budget.
function caseIsGood(level, rules, mustFacts, blocking, limit, minTries, maxTries) {
  // A last clue that was kept but is not needed: try another board.
  if (level.clues.some((cl, k) => {
    const rest = level.clues.filter((_, j) => j !== k);
    return lastClue(level, cl, rest) && works({ ...level, clues: rest }, blocking, limit);
  })) return false;
  // The facts the player asked for must still be there.
  if (mustFacts.some(kind => !level.facts.some(f => f.t === kind))) return false;
  // Every special rule must matter.
  if (!rules.every(r => ruleNeeded(level, r, blocking, limit))) return false;
  // (Every clue, fact and mark is needed now: dropUnneeded went on until none could go.)
  // The murderer must not be obvious before the board is solved.
  if (murdererTooEasy(level, blocking)) return false;
  // A player must be able to solve it step by step, with the wished number of tries
  // and within the step budget.
  const k = trialCount(level, blocking);
  if (k < minTries || k > maxTries || !fitsLimit(level, blocking, limit)) return false;
  level.tries = k;
  return true;
}

// facts: kinds of case facts the case must show (player-made cases).
// Without it, a campaign case gets up to 3 facts of any kind, or none.
// tries: { min, max } "what if" steps the hints may need, and maybe a step budget
// { hard, hardest } (a DIFFICULTY group has both). Default: the campaign limit.
// timeLimit: give up after this many ms.
export function makeLevel(theme, n, seed, rules = [], facts = null, { tries = null, timeLimit = Infinity } = {}) {
  const minTries = tries ? tries.min : 0;
  const maxTries = tries ? tries.max : MAX_TRIES[n];
  const limit = tries || maxTries;
  // Hard cases need fewer clues: let the clue removal search longer.
  const budget = BUDGET[n] * (minTries > 0 ? 20 : 1);
  const t0 = Date.now();
  const mustFacts = facts || [];
  const R = rng(seed);
  const blocking = blockingSet(theme);
  for (let attempt = 0; attempt < 3000; attempt++) {
    if (Date.now() - t0 > timeLimit) break;
    const board = makeBoard(theme, n, seed, attempt, rules, blocking, R);
    if (!board) continue;
    const { level, pos, area } = board;
    level.facts = candidateFacts(level, pos, blocking, facts || FACT_KINDS, mustFacts, R);
    if (mustFacts.some(kind => !level.facts.some(f => f.t === kind))) continue;
    // All candidate clues give one solution: everyone has a row and a column clue.
    const clues = candidateClues(level, pos, area, R);
    level.clues = clues;
    trimClues(level, clues, blocking, budget, R);
    // Every clue, couple and mark must be needed, and everyone keeps a clue.
    // (Everyone keeps a clue: dropUnneeded never takes a person's last one.)
    dropUnneeded(level, blocking, limit);
    if (caseIsGood(level, rules, mustFacts, blocking, limit, minTries, maxTries)) return level;
  }
  throw new Error(`no level for ${theme.id} ${n}`);
}

