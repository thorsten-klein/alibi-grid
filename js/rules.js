// Game rules and solver. Shared by the browser and the level generator.
//
// A level:
//   size     board is size x size
//   rooms    room index per cell (array, row by row)
//   objects  object id per cell or null
//   people   [{ name, victim? }]
//   clues    [{ p, t, v }]  person index, clue type, value
//   solution cell index per person
//
// Special rules (optional, listed in level.rules):
//   ranks    court  room ids with a crown
//            rank   per person: 'noble', 'knight' or 'commoner'
//            Nobles stand in a court room. Commoners never do. Knights can go anywhere.
//   trades   trade  per person: trade id or null
//            tags   per cell: 't:<id>' marks a work spot
//            Only a person with that trade may stand on its work spot.
//   glyphs   tags   per cell: 'lone' or 'crowd'
//            Lone: the person here is alone in their room.
//            Crowd: the person here shares their room with someone.
//   sea      sea    room id of the sea
//            Each sea cell counts as its own room, so people in the sea are alone.
//   bandits  bandits  exact number of hidden bandits
//            lawful   room ids where no bandit stood
//            The victim was never a bandit.
//   distance No two people in one room touch, not even at a corner.
// "Next to" and "touch" always mean: in the same room.
//   fullhouse Every room (not the sea) holds at least one person.
//   couples  couples  pairs [p, q] that stand diagonally next to each other, in the same room
//   parity   parity   [[room, 'even' | 'odd'], ...] number of people in the room
//   river    river    { dir: 'v' | 'h', cut: [..], first }
//            A river winds along cell edges. dir 'v': in row r it runs left of
//            column cut[r]; the west side is columns < cut[r]. dir 'h': in column c
//            it runs above row cut[c]; the north side is rows < cut[c].
//            Exactly `first` people stand on the west (or north) side.
//   tasks    tasks  [[trade id, count], ...]   tags 'k:<id>' mark task spots
//            Tasks are hidden. Whoever stands on a task spot does that task.
//            Exactly `count` people stand on spots of each task.
//
// Case facts (optional, level.facts): statements about the whole case.
// Cell facts count people on certain cells:
//   { t: 'onCount', v: object, k }    exactly k people stood on that object
//   { t: 'nextCount', v: object, k }  exactly k people stood right next to one
//   { t: 'roomCount', v: room, k }    exactly k people were in that room
//   { t: 'furniture', k }             exactly k people stood on any object
//   { t: 'edge', k }                  exactly k people stood on the outer edge
//   { t: 'corner', k }                exactly k people stood in a room corner
// Board facts look at the whole placement:
//   { t: 'alone', k }                 exactly k people were alone in their room
//   { t: 'emptyRooms', k }            exactly k rooms (not the sea) were empty
//   { t: 'touch', k }                 exactly k pairs of people touch at a corner
//   { t: 'apart', v: 'rank' | 'trade' } no two people of one rank (or trade) share a room
//
// Doors and windows (level.doors, level.windows):
//   doors    [[i, j], ...]  a door in the wall between cells i and j (two rooms)
//   windows  [[i, side], ...] a window in the outer wall of edge cell i ('t','r','b','l')
//   A person is "in front of a door" on either cell of a door,
//   and "in front of a window" on the cell of a window.
//
// Core rules:
//   - One person per row and one per column.
//   - Nobody stands on a blocking object.
//   - Every clue is true.
//   - The murderer is the only person in the victim's room.

// Sort compare for strings, by code unit. Same order as a plain .sort().
export function compareText(a, b) {
  if (a < b) return -1;
  return a > b ? 1 : 0;
}

export const CLUE_TYPES = ['room', 'notRoom', 'on', 'next', 'row', 'col', 'same', 'alone', 'door', 'window',
  'bandit', 'notBandit', 'withBandit', 'task', 'taskEither', 'noTask'];

export const RULES = ['ranks', 'trades', 'tasks', 'glyphs', 'sea', 'bandits', 'distance', 'fullhouse', 'couples', 'parity', 'river'];

// Tasks rule as count facts: exactly `count` people on the spots of each task.
export function taskFacts(level) {
  return hasRule(level, 'tasks') ? (level.tasks || []).map(([v, k]) => ({ t: 'task', v, k })) : [];
}
// Case facts plus the task counts. Both are checked the same way.
export const allFacts = level => [...(level.facts || []), ...taskFacts(level)];

// River side per cell: 0 = west/north, 1 = east/south. Null without a river.
export function riverSides(level) {
  const rv = level.river;
  if (!rv || !hasRule(level, 'river')) return null;
  const n = level.size;
  return [...new Array(n * n).keys()].map(i => {
    const r = Math.floor(i / n), c = i % n;
    return rv.dir === 'v' ? (c < rv.cut[r] ? 0 : 1) : (r < rv.cut[c] ? 0 : 1);
  });
}

// True if a person on cell i is right next to object v: a cell above,
// below, left or right, in the same room. Walls block "next to".
// Someone on a v is never "next to a v" (that would be confusing).
export function nextTo(level, i, v) {
  return level.objects[i] !== v && neighbors(i, level.size).some(j => level.objects[j] === v && level.rooms[j] === level.rooms[i]);
}

// True if cells i and j touch at a corner and share a room.
export function touching(level, i, j) {
  const area = areasOf(level);
  return diagonal(i, j, level.size) && area[i] === area[j];
}

// True if cells i and j touch at a corner.
export function diagonal(i, j, n) {
  return Math.abs(Math.floor(i / n) - Math.floor(j / n)) === 1 && Math.abs((i % n) - (j % n)) === 1;
}

// Partner of each person (couples rule), or -1.
export function partners(level) {
  const out = level.people.map(() => -1);
  for (const [p, q] of level.couples || []) { out[p] = q; out[q] = p; }
  return out;
}

// Rooms that must hold people: all rooms but the sea.
export function landRooms(level) {
  return [...new Set(level.rooms)].filter(k => k !== level.sea);
}

export const CELL_FACTS = ['onCount', 'nextCount', 'roomCount', 'furniture', 'edge', 'corner', 'task', 'doorCount', 'windowCount'];

// Cells that count for a cell fact.
export function factCells(level, f) {
  const n = level.size;
  const wall = (i, dr, dc) => {
    const r = Math.floor(i / n) + dr, c = (i % n) + dc;
    return r < 0 || c < 0 || r >= n || c >= n || level.rooms[r * n + c] !== level.rooms[i];
  };
  return level.rooms.map((k, i) => {
    switch (f.t) {
      case 'onCount': return level.objects[i] === f.v;
      case 'nextCount': return nextTo(level, i, f.v);
      case 'roomCount': return k === f.v;
      case 'furniture': return !!level.objects[i];
      case 'edge': return i < n || i >= n * (n - 1) || i % n === 0 || i % n === n - 1;
      case 'corner': return (wall(i, -1, 0) || wall(i, 1, 0)) && (wall(i, 0, -1) || wall(i, 0, 1));
      case 'task': return level.tags?.[i] === `k:${f.v}`;
      case 'doorCount': return featureCells(level).door.has(i);
      case 'windowCount': return featureCells(level).window.has(i);
    }
    return false;
  });
}

// The value of a fact for a full placement: a count, or true/false for 'apart'.
export function factValue(level, f, pos) {
  const area = areasOf(level);
  if (CELL_FACTS.includes(f.t)) { const cells = factCells(level, f); return pos.filter(i => cells[i]).length; }
  if (f.t === 'alone') return pos.filter((i, p) => !pos.some((j, q) => q !== p && area[j] === area[i])).length;
  if (f.t === 'emptyRooms') return landRooms(level).filter(k => !pos.some(i => level.rooms[i] === k)).length;
  if (f.t === 'touch') {
    let c = 0;
    for (let p = 0; p < pos.length; p++) for (let q = p + 1; q < pos.length; q++) if (touching(level, pos[p], pos[q])) c++;
    return c;
  }
  if (f.t === 'apart') {
    return !pos.some((i, p) => { const g = groupOf(level, f, p); return g && pos.some((j, q) => q > p && groupOf(level, f, q) === g && area[j] === area[i]); });
  }
  return null;
}

export const factHolds = (level, f, pos) => (f.t === 'apart' ? factValue(level, f, pos) : factValue(level, f, pos) === f.k);

// The group of person p for an 'apart' fact, or null.
export function groupOf(level, f, p) {
  return f.v === 'rank' ? level.rank?.[p] ?? null : level.trade?.[p] ?? null;
}

// Problems with the rules that need a full board. Returns a list of texts.
export function boardRuleProblems(level, pos, name = p => level.people[p].name, roomName = k => level.roomNames[k]) {
  const n = level.size, out = [];
  if (hasRule(level, 'distance')) {
    for (let p = 0; p < pos.length; p++) for (let q = p + 1; q < pos.length; q++) {
      if (pos[p] >= 0 && pos[q] >= 0 && touching(level, pos[p], pos[q])) out.push(`${name(p)} and ${name(q)} touch`);
    }
  }
  if (hasRule(level, 'couples')) {
    const area = areasOf(level);
    for (const [p, q] of level.couples) {
      if (!diagonal(pos[p], pos[q], n)) out.push(`${name(p)} and ${name(q)} are not diagonally next to each other`);
      else if (area[pos[p]] !== area[pos[q]]) out.push(`${name(p)} and ${name(q)} are not in the same room`);
    }
  }
  const count = k => pos.filter(i => level.rooms[i] === k).length;
  if (hasRule(level, 'fullhouse')) for (const k of landRooms(level)) if (!count(k)) out.push(`nobody is in the ${roomName(k)}`);
  if (hasRule(level, 'parity')) {
    for (const [k, kind] of level.parity) if ((count(k) % 2 === 0) !== (kind === 'even')) out.push(`the ${roomName(k)} does not hold an ${kind} number of people`);
  }
  for (const f of allFacts(level)) {
    if (factHolds(level, f, pos)) continue;
    out.push(f.t === 'apart' ? `two people with the same ${f.v} would share a room` : `a case fact would not hold (${factValue(level, f, pos)} instead of ${f.k})`);
  }
  const side = riverSides(level);
  if (side) {
    const first = pos.filter(i => side[i] === 0).length;
    if (first !== level.river.first) out.push(`${first} people would stand ${level.river.dir === 'v' ? 'west' : 'north'} of the river, not ${level.river.first}`);
  }
  return out;
}

export const hasRule = (level, rule) => !!level.rules && level.rules.includes(rule);

// Cells next to cell i (up, down, left, right).
export function neighbors(i, n) {
  const r = Math.floor(i / n), c = i % n, out = [];
  if (r > 0) out.push(i - n);
  if (r < n - 1) out.push(i + n);
  if (c > 0) out.push(i - 1);
  if (c < n - 1) out.push(i + 1);
  return out;
}

// Cells in front of a door and in front of a window.
const featureCache = new WeakMap();
export function featureCells(level) {
  let f = featureCache.get(level);
  if (!f) {
    f = { door: new Set((level.doors || []).flat()), window: new Set((level.windows || []).map(([i]) => i)) };
    featureCache.set(level, f);
  }
  return f;
}

// Area id per cell. Areas are rooms, but each sea cell is its own area.
const areaCache = new WeakMap();
export function areasOf(level) {
  let a = areaCache.get(level);
  if (!a || a.rooms !== level.rooms) {
    const R = Math.max(...level.rooms) + 1;
    a = level.rooms.map((k, i) => (k === level.sea ? R + i : k));
    a.rooms = level.rooms;
    areaCache.set(level, a);
  }
  return a;
}

// True if person p may stand on cell i, by the board and special rules.
export function cellOk(level, blocking, p, i) {
  if (blocking.has(level.objects[i])) return false;
  const k = level.rooms[i];
  if (level.people[p].victim && k === level.sea) return false;
  if (hasRule(level, 'ranks')) {
    const court = level.court.includes(k);
    const rank = level.rank[p];
    if (rank === 'noble' && !court) return false;
    if (rank === 'commoner' && court) return false;
  }
  const tag = level.tags?.[i];
  if (tag?.startsWith('t:') && level.trade?.[p] !== tag.slice(2)) return false;
  return true;
}

// True if a single-person clue holds for a person on cell i.
export function unaryOk(level, blocking, clue, i) {
  const n = level.size;
  switch (clue.t) {
    case 'room': return level.rooms[i] === clue.v;
    case 'notRoom': return level.rooms[i] !== clue.v;
    case 'on': return level.objects[i] === clue.v;
    case 'next': return nextTo(level, i, clue.v);
    case 'row': return Math.floor(i / n) === clue.v;
    case 'col': return i % n === clue.v;
    case 'bandit': return !(level.lawful || []).includes(level.rooms[i]);
    case 'door': return featureCells(level).door.has(i);
    case 'window': return featureCells(level).window.has(i);
    case 'task': return level.tags?.[i] === `k:${clue.v}`;
    case 'taskEither': return clue.v.some(id => level.tags?.[i] === `k:${id}`);
    case 'noTask': return !level.tags?.[i]?.startsWith('k:');
    default: return true;
  }
}

// Check one clue against a full or partial placement (pos[p] = cell or -1).
// Returns true, false, or null (not decided yet, or hidden).
export function clueState(level, blocking, clue, pos) {
  const i = pos[clue.p];
  if (i < 0) return null;
  const area = areasOf(level);
  if (clue.t === 'same') {
    const j = pos[clue.v];
    if (j < 0) return null;
    return area[i] === area[j];
  }
  if (clue.t === 'alone') {
    const others = pos.filter((j, q) => q !== clue.p && j >= 0 && area[j] === area[i]);
    if (others.length) return false;
    return pos.every(j => j >= 0) ? true : null;
  }
  if (clue.t === 'notBandit' || clue.t === 'withBandit') return null;
  return unaryOk(level, blocking, clue, i);
}

export function victimIndex(level) {
  return level.people.findIndex(p => p.victim);
}

// The murderer for a full placement, or -1 if the rule does not hold.
export function murdererOf(level, pos) {
  const area = areasOf(level);
  const v = victimIndex(level);
  const a = area[pos[v]];
  const mates = pos.map((j, q) => q).filter(q => q !== v && area[pos[q]] === a);
  return mates.length === 1 ? mates[0] : -1;
}

// A set of bandits that fits a full placement, or null if none fits.
export function banditSet(level, pos) {
  const K = level.bandits || 0;
  if (!K) return [];
  const area = areasOf(level);
  const lawful = new Set(level.lawful || []);
  const P = level.people.length;
  const must = new Set(), never = new Set([victimIndex(level)]), want = [];
  for (const cl of level.clues) {
    if (cl.t === 'bandit') must.add(cl.p);
    if (cl.t === 'notBandit') never.add(cl.p);
    if (cl.t === 'withBandit') want.push(cl.p);
  }
  for (let p = 0; p < P; p++) if (lawful.has(level.rooms[pos[p]])) never.add(p);
  for (const p of must) if (never.has(p)) return null;
  const chosen = [...must];
  if (chosen.length > K) return null;
  const free = [...new Array(P).keys()].filter(p => !must.has(p) && !never.has(p));
  const ok = () => want.every(w => chosen.some(b => b !== w && area[pos[b]] === area[pos[w]]));
  function pick(start) {
    if (chosen.length === K) return ok();
    for (let j = start; j < free.length; j++) {
      chosen.push(free[j]);
      if (pick(j + 1)) return true;
      chosen.pop();
    }
    return false;
  }
  return pick(0) ? chosen.sort((a, b) => a - b) : null;
}

// Count solutions, stop at `limit`. Returns { count, nodes, aborted, first }.
// `restrict[p]` (optional) is a Set of cells person p may use.
export function solve(level, blocking, { limit = 2, maxNodes = Infinity, restrict = null } = {}) {
  const n = level.size;
  const P = level.people.length;
  const victim = victimIndex(level);
  const area = areasOf(level);
  const tags = level.tags || [];
  const areaCount = new Array(Math.max(...area) + 1).fill(0);
  const aloneIn = new Array(areaCount.length).fill(false);
  const rowUsed = new Array(n).fill(false);
  const colUsed = new Array(n).fill(false);
  const pos = new Array(P).fill(-1);
  const useBandits = hasRule(level, 'bandits');
  const noTouch = hasRule(level, 'distance');
  const partner = partners(level);
  const full = hasRule(level, 'fullhouse');
  const land = full ? landRooms(level) : [];
  const roomCnt = new Array(Math.max(...level.rooms) + 1).fill(0);
  const occupied = new Array(n * n).fill(false);
  const side = riverSides(level);
  const sideCap = side ? [level.river.first, P - level.river.first] : null;
  const sideCnt = [0, 0];
  // Case facts: counters for the count facts, groups for the apart facts.
  const facts = allFacts(level);
  const countFacts = facts.filter(f => CELL_FACTS.includes(f.t)).map(f => ({ k: f.k, cells: factCells(level, f), got: 0 }));
  const boardFacts = facts.filter(f => !CELL_FACTS.includes(f.t) && f.t !== 'apart');
  const apartGroups = facts.filter(f => f.t === 'apart').map(f => level.people.map((_, p) => groupOf(level, f, p)));

  // Domains from the board, special rules and single-person clues.
  const domain = [];
  const sameWith = [];
  const alone = new Array(P).fill(false);
  for (let p = 0; p < P; p++) { sameWith.push([]); }
  for (const cl of level.clues) {
    if (cl.t === 'same') { sameWith[cl.p].push(cl.v); sameWith[cl.v].push(cl.p); }
    if (cl.t === 'alone') alone[cl.p] = true;
  }
  for (let p = 0; p < P; p++) {
    const mine = level.clues.filter(cl => cl.p === p);
    const d = [];
    for (let i = 0; i < n * n; i++) {
      if (restrict && !restrict[p].has(i)) continue;
      if (!cellOk(level, blocking, p, i)) continue;
      if (mine.every(cl => unaryOk(level, blocking, cl, i))) d.push(i);
    }
    domain.push(d);
  }

  let count = 0, nodes = 0, aborted = false, first = null;

  function canPlace(p, i) {
    const r = Math.floor(i / n), c = i % n, a = area[i];
    if (rowUsed[r] || colUsed[c]) return false;
    if (aloneIn[a]) return false;
    if ((alone[p] || tags[i] === 'lone') && areaCount[a] > 0) return false;
    for (const q of sameWith[p]) if (pos[q] >= 0 && area[pos[q]] !== a) return false;
    if (p === victim) { if (areaCount[a] > 1) return false; }
    else if (pos[victim] >= 0 && area[pos[victim]] === a && areaCount[a] >= 2) return false;
    if (noTouch) {
      for (const dr of [-1, 1]) for (const dc of [-1, 1]) {
        const rr = r + dr, cc = c + dc;
        if (rr >= 0 && rr < n && cc >= 0 && cc < n && occupied[rr * n + cc] && area[rr * n + cc] === a) return false;
      }
    }
    if (partner[p] >= 0 && pos[partner[p]] >= 0 && (!diagonal(i, pos[partner[p]], n) || area[pos[partner[p]]] !== a)) return false;
    if (side && sideCnt[side[i]] >= sideCap[side[i]]) return false;
    for (const cf of countFacts) if (cf.cells[i] && cf.got >= cf.k) return false;
    for (const g of apartGroups) {
      if (!g[p]) continue;
      for (let q = 0; q < P; q++) if (q !== p && pos[q] >= 0 && g[q] === g[p] && area[pos[q]] === a) return false;
    }
    return true;
  }

  function leafOk() {
    if (areaCount[area[pos[victim]]] !== 2) return false;
    if (hasRule(level, 'parity') && !level.parity.every(([k, kind]) => (roomCnt[k] % 2 === 0) === (kind === 'even'))) return false;
    if (full && land.some(k => !roomCnt[k])) return false;
    if (countFacts.some(cf => cf.got !== cf.k)) return false;
    if (boardFacts.some(f => !factHolds(level, f, pos))) return false;
    for (let p = 0; p < P; p++) if (tags[pos[p]] === 'crowd' && areaCount[area[pos[p]]] < 2) return false;
    if (useBandits && !banditSet(level, pos)) return false;
    return true;
  }

  function step(placed) {
    // (coverage: the loops stop at the limit before this call)
    /* v8 ignore next */
    if (count >= limit) return;
    if (++nodes > maxNodes) { aborted = true; return; } // and so on every later call
    if (placed === P) {
      if (leafOk()) {
        count++;
        if (!first) first = pos.slice();
      }
      return;
    }
    // Pick the person with the fewest options. Also check every free row
    // and column can still be reached.
    let best = -1, bestOpts = null;
    const rowHit = new Array(n).fill(false), colHit = new Array(n).fill(false);
    for (let p = 0; p < P; p++) {
      if (pos[p] >= 0) continue;
      const opts = [];
      for (const i of domain[p]) if (canPlace(p, i)) {
        opts.push(i);
        rowHit[Math.floor(i / n)] = true;
        colHit[i % n] = true;
      }
      if (!opts.length) return;
      if (!bestOpts || opts.length < bestOpts.length) { best = p; bestOpts = opts; }
    }
    for (let r = 0; r < n; r++) if (!rowUsed[r] && !rowHit[r]) return;
    for (let c = 0; c < n; c++) if (!colUsed[c] && !colHit[c]) return;
    // Full house: enough people left for the empty rooms.
    if (full && land.filter(k => !roomCnt[k]).length > P - placed) return;

    for (const i of bestOpts) {
      const r = Math.floor(i / n), c = i % n, a = area[i];
      const lone = alone[best] || tags[i] === 'lone';
      pos[best] = i; rowUsed[r] = colUsed[c] = true; areaCount[a]++;
      roomCnt[level.rooms[i]]++; occupied[i] = true;
      if (side) sideCnt[side[i]]++;
      for (const cf of countFacts) if (cf.cells[i]) cf.got++;
      if (lone) aloneIn[a] = true;
      step(placed + 1);
      if (lone) aloneIn[a] = false;
      pos[best] = -1; rowUsed[r] = colUsed[c] = false; areaCount[a]--;
      roomCnt[level.rooms[i]]--; occupied[i] = false;
      if (side) sideCnt[side[i]]--;
      for (const cf of countFacts) if (cf.cells[i]) cf.got--;
      if (aborted || count >= limit) return;
    }
  }

  step(0);
  return { count, nodes, aborted, first };
}
