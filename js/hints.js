// Step-by-step deduction for the hint browser.
//
// deduce(level, blocking, T) returns a list of steps. Each step:
//   text     what we learn and why
//   before   { pos, cand } board before the step
//   place    { p, i }        put person p on cell i
//   elim     [[p, i], ...]   person p can not be on cell i
//   allowed  { p, cells }    person p can only be on these cells
//   cross    [i, ...]        nobody can be on these cells
// T holds text helpers: name(p), cell(i), room(i), clue(clue), people(list).
//
// Easy techniques come first. If they get stuck, we try a cell and
// follow the easy techniques until something breaks.

import { areasOf, cellOk, unaryOk, solve, victimIndex, murdererOf, banditSet, hasRule, diagonal, partners, landRooms, boardRuleProblems, riverSides, factCells, groupOf, CELL_FACTS, allFacts, touching } from './rules.js';

const UNARY = ['room', 'notRoom', 'on', 'next', 'row', 'col', 'bandit', 'task', 'taskEither', 'noTask', 'door', 'window'];

// start: begin from the player's board instead of an empty one:
//   { pos, out: [Set of cells per person they can not be on], crossed: Set }
// limit: stop after this many steps (1 = just the next step).
// options: return every step that follows from the start board alone (not one story).
export function deduce(level, blocking, T, { deep = true, start = null, limit = Infinity, options = false } = {}) {
  const n = level.size, P = level.people.length, N = n * n;
  const area = areasOf(level);
  const victim = victimIndex(level);
  const tags = level.tags || [];
  const row = i => Math.floor(i / n), col = i => i % n;
  const noTouch = hasRule(level, 'distance');
  const partner = partners(level);
  const full = hasRule(level, 'fullhouse');
  const land = full ? landRooms(level) : [];
  const roomName = k => `the ${level.roomNames[k]}`;
  const side = riverSides(level);
  const sideCap = side ? [level.river.first, P - level.river.first] : null;
  const sideName = side ? (level.river.dir === 'v' ? ['west', 'east'] : ['north', 'south']) : null;
  // Case facts.
  const countFacts = allFacts(level).filter(f => CELL_FACTS.includes(f.t)).map(f => ({ f, cells: factCells(level, f) }));
  const factLabel = f => (f.t === 'task' ? 'Tasks' : 'Case fact');
  const apartFacts = (level.facts || []).filter(f => f.t === 'apart');
  const boardFacts = (level.facts || []).filter(f => ['alone', 'emptyRooms', 'touch'].includes(f.t));
  const landList = landRooms(level);
  const alone = new Array(P).fill(false);
  const same = [];
  for (const cl of level.clues) {
    if (cl.t === 'alone') alone[cl.p] = true;
    if (cl.t === 'same') same.push([cl.p, cl.v]);
  }

  // ---- state helpers ----

  const clone = s => ({ pos: s.pos.slice(), cand: s.cand.map(c => new Set(c)) });
  const snap = s => ({ pos: s.pos.slice(), cand: s.cand.map(c => [...c]) });
  const unplaced = s => [...Array(P).keys()].filter(p => s.pos[p] < 0);
  const areaPeople = (s, a) => [...Array(P).keys()].filter(p => s.pos[p] >= 0 && area[s.pos[p]] === a);

  function apply(s, move) {
    if (move.place) {
      const { p, i } = move.place;
      s.pos[p] = i;
      s.cand[p] = new Set([i]);
      for (let q = 0; q < P; q++) {
        if (q === p || s.pos[q] >= 0) continue;
        for (const j of [...s.cand[q]]) if (j === i || row(j) === row(i) || col(j) === col(i) || (noTouch && touching(level, i, j))) s.cand[q].delete(j);
      }
    }
    if (move.elim) for (const [p, i] of move.elim) s.cand[p].delete(i);
    if (move.allowed) s.cand[move.allowed.p] = new Set(move.allowed.cells);
  }

  // A reason the state is broken, or null.
  function broken(s) {
    const free = unplaced(s);
    for (const p of free) if (!s.cand[p].size) return `${T.name(p)} would have no cell left`;
    const rowsLeft = new Set(), colsLeft = new Set();
    for (let r = 0; r < n; r++) if (!s.pos.some(i => i >= 0 && row(i) === r)) rowsLeft.add(r);
    for (let c = 0; c < n; c++) if (!s.pos.some(i => i >= 0 && col(i) === c)) colsLeft.add(c);
    for (const r of rowsLeft) if (!free.some(p => [...s.cand[p]].some(i => row(i) === r))) return `nobody could stand in row ${r + 1}`;
    for (const c of colsLeft) if (!free.some(p => [...s.cand[p]].some(i => col(i) === c))) return `nobody could stand in column ${T.col(c)}`;
    // Two placed people in one row or column.
    const placed = s.pos.filter(i => i >= 0);
    if (new Set(placed.map(row)).size < placed.length || new Set(placed.map(col)).size < placed.length) return 'two people would share a row or column';
    // Room rules that can already fail.
    for (let p = 0; p < P; p++) {
      const i = s.pos[p];
      if (i < 0) continue;
      const mates = areaPeople(s, area[i]).filter(q => q !== p);
      if ((alone[p] || tags[i] === 'lone') && mates.length) return `${T.name(p)} would not be alone in ${T.room(i)}`;
    }
    if (s.pos[victim] >= 0 && areaPeople(s, area[s.pos[victim]]).length > 2) {
      return `${T.name(victim)} would not be alone with one person`;
    }
    if (noTouch) {
      for (let p = 0; p < P; p++) for (let q = p + 1; q < P; q++) {
        if (s.pos[p] >= 0 && s.pos[q] >= 0 && touching(level, s.pos[p], s.pos[q])) return `${T.name(p)} and ${T.name(q)} would touch`;
      }
    }
    for (let p = 0; p < P; p++) {
      const q = partner[p];
      if (q > p && s.pos[p] >= 0 && s.pos[q] >= 0) {
        if (!diagonal(s.pos[p], s.pos[q], n)) return `${T.name(p)} and ${T.name(q)} would not stand diagonally next to each other`;
        if (area[s.pos[p]] !== area[s.pos[q]]) return `${T.name(p)} and ${T.name(q)} would not be in the same room`;
      }
    }
    for (const { f, cells } of countFacts) {
      const got = s.pos.filter(i => i >= 0 && cells[i]).length;
      if (got > f.k) return `too many people would match "${T.fact(f)}"`;
      const reach = free.filter(p => [...s.cand[p]].some(i => cells[i])).length;
      if (got + reach < f.k) return `not enough people could match "${T.fact(f)}"`;
    }
    // Board facts: bounds that already fail on a part of the board.
    for (const f of boardFacts) {
      if (f.t === 'emptyRooms') {
        const used = landList.filter(k => s.pos.some(i => i >= 0 && level.rooms[i] === k)).length;
        const dead = landList.filter(k => !s.pos.some(i => i >= 0 && level.rooms[i] === k) && !free.some(p => [...s.cand[p]].some(i => level.rooms[i] === k))).length;
        if (landList.length - used < f.k) return `fewer than ${f.k} rooms could stay empty`;
        if (dead > f.k) return `more than ${f.k} rooms would stay empty`;
      }
      if (f.t === 'touch') {
        let c = 0;
        for (let p = 0; p < P; p++) for (let q = p + 1; q < P; q++) if (s.pos[p] >= 0 && s.pos[q] >= 0 && touching(level, s.pos[p], s.pos[q])) c++;
        if (c > f.k) return 'too many people would touch at a corner';
      }
      if (f.t === 'alone') {
        // Sure not alone: someone else is placed in the same area.
        const notAlone = s.pos.filter((i, p) => i >= 0 && s.pos.some((j, q) => q !== p && j >= 0 && area[j] === area[i])).length;
        // Sure alone: placed, and nobody else is or can come into the area.
        const sure = s.pos.filter((i, p) => i >= 0 && !s.pos.some((j, q) => q !== p && j >= 0 && area[j] === area[i]) &&
          !free.some(q => [...s.cand[q]].some(j => area[j] === area[i]))).length;
        if (notAlone > P - f.k) return 'too few people could be alone in a room';
        if (sure > f.k) return 'too many people would be alone in a room';
      }
    }
    for (const f of apartFacts) {
      for (let p = 0; p < P; p++) for (let q = p + 1; q < P; q++) {
        const g = groupOf(level, f, p);
        if (g && g === groupOf(level, f, q) && s.pos[p] >= 0 && s.pos[q] >= 0 && area[s.pos[p]] === area[s.pos[q]]) {
          return `${T.name(p)} and ${T.name(q)} would share a ${f.v} and a room`;
        }
      }
    }
    if (side) {
      for (const x of [0, 1]) {
        const placedHere = s.pos.filter(i => i >= 0 && side[i] === x).length;
        if (placedHere > sideCap[x]) return `too many people would stand ${sideName[x]} of the river`;
        const canReach = free.filter(p => [...s.cand[p]].some(i => side[i] === x)).length;
        if (placedHere + canReach < sideCap[x]) return `not enough people could stand ${sideName[x]} of the river`;
      }
    }
    if (full) {
      const empty = land.filter(k => !s.pos.some(i => i >= 0 && level.rooms[i] === k));
      for (const k of empty) if (!free.some(p => [...s.cand[p]].some(i => level.rooms[i] === k))) return `nobody could be in ${roomName(k)}`;
      if (empty.length > free.length) return 'not every room could get someone';
    }
    if (!free.length) {
      const pos = s.pos;
      const problem = boardRuleProblems(level, pos, T.name, k => level.roomNames[k])[0];
      if (problem) return problem;
      for (const [p, q] of same) if (area[pos[p]] !== area[pos[q]]) return `${T.name(p)} and ${T.name(q)} would be in different rooms`;
      if (murdererOf(level, pos) < 0) return `${T.name(victim)} would not be alone with exactly one person`;
      for (let p = 0; p < P; p++) if (tags[pos[p]] === 'crowd' && areaPeople(s, area[pos[p]]).length < 2) return `${T.name(p)} would be alone on a sun seal`;
      if (hasRule(level, 'bandits') && !banditSet(level, pos)) return 'the bandit clues could not all hold';
    }
    return null;
  }

  // ---- easy techniques: each returns a move or null ----

  function* single(s) {
    for (const p of unplaced(s)) {
      if (s.cand[p].size === 1) {
        const i = [...s.cand[p]][0];
        yield { place: { p, i }, text: `${T.name(p)} has only one cell left: ${T.cell(i)}. Place ${T.name(p)} there. Nobody else can be in row ${row(i) + 1} or column ${T.col(col(i))}.` +
          (noTouch ? ' Nobody stands on the corner cells next to it in that room either.' : '') };
      }
    }
  }

  function* onlyInLine(s) {
    const free = unplaced(s);
    for (const [kind, f] of [['row', row], ['column', col]]) {
      for (let x = 0; x < n; x++) {
        if (s.pos.some(i => i >= 0 && f(i) === x)) continue;
        const who = free.filter(p => [...s.cand[p]].some(i => f(i) === x));
        if (who.length !== 1) continue;
        const p = who[0];
        const out = [...s.cand[p]].filter(i => f(i) !== x);
        if (!out.length) continue;
        const label = kind === 'row' ? `row ${x + 1}` : `column ${T.col(x)}`;
        yield {
          elim: out.map(i => [p, i]),
          uses: free.filter(q => q !== p),
          text: `Every row and column holds one person. Only ${T.name(p)} can still stand in ${label}. So ${T.name(p)} must be in ${label}.`,
        };
      }
    }
  }

  function* roomRules(s) {
    const free = unplaced(s);
    // Someone placed who must be alone: nobody else in that room.
    for (let p = 0; p < P; p++) {
      const i = s.pos[p];
      if (i < 0 || !(alone[p] || tags[i] === 'lone')) continue;
      const elim = [];
      for (const q of free) for (const j of s.cand[q]) if (area[j] === area[i]) elim.push([q, j]);
      if (elim.length) {
        const why = alone[p] ? `${T.name(p)} was alone in a room` : `${T.name(p)} stands on a moon seal, so they are alone`;
        yield { elim, text: `${why}. So nobody else is in ${T.room(i)}.` };
      }
    }
    // A person who must be alone can not join a room with someone in it.
    for (const p of free) {
      const elim = [];
      for (const j of s.cand[p]) {
        if (!(alone[p] || tags[j] === 'lone')) continue;
        if (areaPeople(s, area[j]).length) elim.push([p, j]);
      }
      if (elim.length) {
        const j = elim[0][1];
        const other = T.name(areaPeople(s, area[j])[0]);
        const text = alone[p]
          ? `${T.name(p)} was alone in a room. ${other} is already in ${T.room(j)}. So ${T.name(p)} is not there.`
          : `A person on a moon seal is alone in their room. ${other} is already in ${T.room(j)}. So ${T.name(p)} can not use the moon seal there.`;
        yield { elim, text };
      }
    }
    // Same room: each one stays in rooms the other can reach.
    for (const [a, b] of same) {
      for (const [p, q] of [[a, b], [b, a]]) {
        if (s.pos[p] >= 0) continue;
        const reach = new Set([...s.cand[q]].map(i => area[i]));
        const elim = [...s.cand[p]].filter(i => !reach.has(area[i]) || (s.pos[q] >= 0 && i === s.pos[q]));
        if (elim.length) {
          const where = s.pos[q] >= 0 ? `${T.name(q)} is in ${T.room(s.pos[q])}` : `${T.name(q)} can only be in ${T.rooms([...s.cand[q]])}`;
          yield { elim: elim.map(i => [p, i]), text: `${T.name(p)} was in the same room as ${T.name(q)}. ${where}. So ${T.name(p)} must be there too.` };
        }
      }
    }
    // Couples stand diagonally next to each other.
    for (const p of free) {
      const q = partner[p];
      if (q < 0) continue;
      const near = [...s.cand[p]].filter(i => [...s.cand[q]].some(j => diagonal(i, j, n) && area[i] === area[j]));
      if (near.length < s.cand[p].size) {
        const elim = [...s.cand[p]].filter(i => !near.includes(i)).map(i => [p, i]);
        const where = s.pos[q] >= 0 ? `${T.name(q)} stands on ${T.cell(s.pos[q])}` : `${T.name(q)} has only a few cells left`;
        yield { elim, text: `${T.name(p)} and ${T.name(q)} are a couple: they stand diagonally next to each other, in the same room. ${where}. So ${T.name(p)} can only be on a corner cell next to them in that room.` };
      }
    }
    // Case facts: a full count takes nobody else; a count that needs everyone who can reach it gets them.
    for (const { f, cells } of countFacts) {
      const got = s.pos.filter(i => i >= 0 && cells[i]).length;
      // People who are surely on these cells: all their cells count.
      const sure = free.filter(q => s.cand[q].size && [...s.cand[q]].every(i => cells[i]));
      if (got + sure.length === f.k) {
        const elim = [];
        for (const q of free) if (!sure.includes(q)) for (const j of s.cand[q]) if (cells[j]) elim.push([q, j]);
        const why = sure.length ? `${T.people(sure)} ${sure.length === 1 ? 'is' : 'are'} surely on the marked cells. ` : got ? 'That number is reached already. ' : '';
        if (elim.length) yield { elim, text: `${factLabel(f)}: "${T.fact(f)}" ${why}So nobody else can stand on the marked cells.` };
      }
      const reach = free.filter(q => [...s.cand[q]].some(i => cells[i]));
      if (got + reach.length === f.k && reach.length) {
        const elim = [];
        for (const q of reach) for (const j of s.cand[q]) if (!cells[j]) elim.push([q, j]);
        if (elim.length) yield { elim, text: `${factLabel(f)}: "${T.fact(f)}" Only ${T.people(reach)} can still make that true. So they must.` };
      }
    }
    // Case facts: people of one rank (or trade) are in different rooms.
    for (const f of apartFacts) {
      for (let p = 0; p < P; p++) {
        const g = groupOf(level, f, p);
        if (!g || s.pos[p] < 0) continue;
        const elim = [];
        for (const q of free) if (groupOf(level, f, q) === g) for (const j of s.cand[q]) if (area[j] === area[s.pos[p]]) elim.push([q, j]);
        if (elim.length) yield { elim, text: `Case fact: "${T.fact(f)}" ${T.name(p)} is already in ${T.room(s.pos[p])}. So no other ${g} is there.` };
      }
    }
    // River: a full side takes nobody else. A side that needs everyone who can reach it gets them.
    if (side) {
      for (const x of [0, 1]) {
        const placedHere = s.pos.filter(i => i >= 0 && side[i] === x).length;
        const sureHere = free.filter(q => s.cand[q].size && [...s.cand[q]].every(i => side[i] === x));
        if (placedHere + sureHere.length === sideCap[x]) {
          const elim = [];
          for (const q of free) if (!sureHere.includes(q)) for (const j of s.cand[q]) if (side[j] === x) elim.push([q, j]);
          const why = sureHere.length ? ` ${T.people(sureHere)} ${sureHere.length === 1 ? 'is' : 'are'} surely there.` : '';
          if (elim.length) yield { elim, text: `Exactly ${sideCap[x]} people stand ${sideName[x]} of the river.${why} That side is full. So nobody else stands there.` };
        }
        const reach = free.filter(q => [...s.cand[q]].some(i => side[i] === x));
        if (placedHere + reach.length === sideCap[x]) {
          const elim = [];
          for (const q of reach) for (const j of s.cand[q]) if (side[j] !== x) elim.push([q, j]);
          if (elim.length) yield { elim, text: `${sideCap[x]} people must stand ${sideName[x]} of the river. Only ${T.people(reach)} can still get there. So they all stand ${sideName[x]} of it.` };
        }
      }
    }
    // Full house: a room nobody else can reach needs this person.
    if (full) {
      for (const k of land) {
        if (s.pos.some(i => i >= 0 && level.rooms[i] === k)) continue;
        const who = free.filter(p => [...s.cand[p]].some(i => level.rooms[i] === k));
        if (who.length !== 1) continue;
        const p = who[0];
        const out = [...s.cand[p]].filter(i => level.rooms[i] !== k);
        if (out.length) {
          yield { elim: out.map(i => [p, i]), text: `Every room holds at least one person. Only ${T.name(p)} can still reach ${roomName(k)}. So ${T.name(p)} must be there.` };
        }
      }
    }
    // The victim's room holds exactly two people.
    if (s.pos[victim] >= 0) {
      const a = area[s.pos[victim]];
      const mates = areaPeople(s, a).filter(q => q !== victim);
      if (mates.length === 1) {
        const elim = [];
        for (const q of free) for (const j of s.cand[q]) if (area[j] === a) elim.push([q, j]);
        if (elim.length) {
          yield { elim, text: `The murderer was alone with ${T.name(victim)}. ${T.name(mates[0])} is already in ${T.room(s.pos[victim])}. So nobody else is there.` };
        }
      }
    } else {
      const elim = [...s.cand[victim]].filter(j => areaPeople(s, area[j]).length >= 2);
      if (elim.length) {
        yield { elim: elim.map(j => [victim, j]), text: `${T.name(victim)} was alone with the murderer. Rooms that already hold two people are out for ${T.name(victim)}.` };
      }
    }
  }

  // One person who can only be in one row (or column) owns it: nobody else is there.
  // only: look at this person only.
  function* claimLine(s, only = null) {
    const free = unplaced(s);
    for (const p of only === null ? free : [only]) {
      for (const [kind, f] of [['row', row], ['column', col]]) {
        const lines = new Set([...s.cand[p]].map(f));
        if (lines.size !== 1) continue;
        const [x] = lines;
        const elim = [];
        for (const q of free) if (q !== p) for (const j of s.cand[q]) if (f(j) === x) elim.push([q, j]);
        if (!elim.length) continue;
        const line = `${kind} ${kind === 'row' ? x + 1 : T.col(x)}`;
        yield { elim, text: `${T.name(p)} can only be in ${line}. Each ${kind} holds one person. So nobody else is in ${line}.` };
      }
    }
  }

  // A clue step that puts a person in one row or column: say in the same step
  // that the rest of that line is crossed out for everyone else.
  // Say simple follow-ups in the same step as the move:
  // a person in one row or column (cross out the rest of it), and
  // a person on two cells (cross out where their lines meet).
  function withClaim(s, move) {
    let p = move.allowed?.p;
    if (p === undefined && move.elim) {
      const ps = new Set(move.elim.map(([q]) => q));
      if (ps.size === 1) [p] = ps;
    }
    if (p === undefined || move.place) return move;
    const t = clone(s);
    apply(t, move);
    if (t.cand[p].size < 2) return move; // the next step places them anyway
    let elim = [], text = move.text;
    const claim = first(claimLine(t, p));
    if (claim) {
      const line = claim.text.match(/can only be in (row \S+|column \S+)\./)[1];
      const lead = move.allowed ? 'These cells are all in' : `Now ${T.name(p)} can only be in`;
      text += ` ${lead} ${line}. Each ${line.split(' ')[0]} holds one person. So nobody else is in ${line}: cross out the rest of it.`;
      apply(t, claim);
      elim = elim.concat(claim.elim);
    }
    const two = first(twoCellCross(t, p));
    if (two) {
      text += ` ${two.text}`;
      apply(t, two);
      elim = elim.concat(two.elim);
    }
    if (!elim.length) return move;
    // Cells where nobody is left get a plain ✕.
    const mine = new Set(t.cand[p]);
    const cross = [...new Set(elim.map(([, i]) => i))].filter(i => !mine.has(i) && !t.cand.some((c, q) => t.pos[q] < 0 && c.has(i)));
    return { ...move, elim: [...(move.elim || []), ...elim], cross: [...(move.cross || []), ...cross], text };
  }


  // k people who share only k rows (or columns) fill them. k = 1: one person owns a row.
  function* lineGroups(s) {
    const free = unplaced(s);
    for (const k of [1, 2, 3]) for (const [kind, f] of [['rows', row], ['columns', col]]) {
      const lines = p => new Set([...s.cand[p]].map(f));
      {
        const groups = combos(free, k);
        for (const g of groups) {
          const u = new Set();
          for (const p of g) for (const x of lines(p)) u.add(x);
          if (u.size !== k) continue;
          const elim = [];
          for (const q of free) if (!g.includes(q)) for (const j of s.cand[q]) if (u.has(f(j))) elim.push([q, j]);
          if (!elim.length) continue;
          const names = T.people(g);
          const xs = [...u].sort((x, y) => x - y).map(x => (kind === 'rows' ? String(x + 1) : T.col(x)));
          if (k === 1) {
            const line = `${kind === 'rows' ? 'row' : 'column'} ${xs[0]}`;
            yield { elim, text: `${names} can only be in ${line}. Each ${kind === 'rows' ? 'row' : 'column'} holds one person. So nobody else is in ${line}.` };
          }
          yield { elim, text: `${names} can only be in ${kind} ${xs.join(' and ')}. Together they fill these ${kind}. So nobody else is in them.` };
        }
      }
    }
  }

  // A person with only a few cells left needs one of them:
  // a placement that would block all of them is out.
  function* personNeeds(s) {
    const free = unplaced(s);
    const blocks = (i, j) => i === j || row(i) === row(j) || col(i) === col(j) || (noTouch && touching(level, i, j));
    for (const q of free.slice().sort((a, b) => s.cand[a].size - s.cand[b].size)) {
      const mine = [...s.cand[q]];
      if (mine.length < 2 || mine.length > 4) continue;
      const elim = [];
      for (const p of free) {
        if (p === q) continue;
        for (const i of s.cand[p]) if (mine.every(j => blocks(i, j))) elim.push([p, i]);
      }
      if (!elim.length) continue;
      const who = [...new Set(elim.map(([p]) => p))];
      yield { elim, text: `${T.name(q)} can only be on ${listText(mine.map(T.cell))}. Someone on a marked cell would block ${mine.length === 2 ? 'both' : 'all of them'} (same row or column). ` +
        `So ${T.people(who)} can not stand there.` };
    }
  }

  // A fact that says "nobody": its cells are empty. One rule, many crosses.
  function* zeroFacts(s) {
    for (const { f, cells } of countFacts) {
      if (f.k !== 0) continue;
      const elim = [];
      for (const q of unplaced(s)) for (const j of s.cand[q]) if (cells[j]) elim.push([q, j]);
      if (!elim.length) continue;
      const cross = [...new Set(elim.map(([, i]) => i))];
      yield { elim, cross, text: `${factLabel(f)}: "${T.fact(f)}" So nobody can stand on the marked cells. Cross them out.` };
    }
  }

  // k rows that still need someone, whose open cells all lie in the same k columns:
  // their people take those columns, so nobody else stands in them (and the same for columns).
  function* lineFish(s) {
    const free = unplaced(s);
    const openIn = (f, x) => {
      const o = new Set();
      for (const q of free) for (const i of s.cand[q]) if (f(i) === x) o.add(i);
      return o;
    };
    for (const [kind, f, g, otherKind] of [['Rows', row, col, 'columns'], ['Columns', col, row, 'rows']]) {
      const need = [...Array(n).keys()].filter(x => !s.pos.some(i => i >= 0 && f(i) === x));
      for (const k of [2, 3]) {
        for (const xs of combos(need, k)) {
          const open = xs.flatMap(x => [...openIn(f, x)]);
          if (xs.some(x => !openIn(f, x).size)) continue;
          const ys = [...new Set(open.map(g))].sort((a, b) => a - b);
          if (ys.length !== k) continue;
          const elim = [];
          for (const q of free) for (const i of s.cand[q]) if (ys.includes(g(i)) && !xs.includes(f(i))) elim.push([q, i]);
          if (!elim.length) continue;
          const name = (x, isF) => ((kind === 'Rows') === isF ? String(x + 1) : T.col(x));
          const xText = xs.map(x => name(x, true)).join(' and ');
          const yText = ys.map(y => name(y, false)).join(' and ');
          const cross = [...new Set(elim.map(([, i]) => i))].filter(i => !free.some(q => s.cand[q].has(i) && !elim.some(([r, j]) => r === q && j === i)));
          yield { elim, cross, text: `${kind} ${xText} still need someone. Their last open cells are all in ${otherKind} ${yText}. ` +
            `Each of these ${kind.toLowerCase()} needs one person, so together they take ${otherKind} ${yText}. ` +
            `So nobody else can stand in ${otherKind} ${yText}: cross out the rest of them.` };
        }
      }
    }
  }

  // A count fact still missing m people, whose open cells lie in just m rows (or columns):
  // those rows go to the missing people, so nobody stands there outside the fact's cells.
  function* countLines(s) {
    const free = unplaced(s);
    for (const { f, cells } of countFacts) {
      if (!f.k) continue;
      const placed = level.people.map((_, q) => q).filter(q => s.pos[q] >= 0 && cells[s.pos[q]]);
      const sure = free.filter(q => s.cand[q].size && [...s.cand[q]].every(i => cells[i]));
      const missing = f.k - placed.length - sure.length;
      if (missing < 1) continue;
      // Open cells for the missing people: not on rows or columns of the sure ones.
      const sureRows = new Set(sure.flatMap(q => { const rs = new Set([...s.cand[q]].map(row)); return rs.size === 1 ? [...rs] : []; }));
      const sureCols = new Set(sure.flatMap(q => { const cs = new Set([...s.cand[q]].map(col)); return cs.size === 1 ? [...cs] : []; }));
      const open = new Set();
      for (const q of free) if (!sure.includes(q)) for (const i of s.cand[q]) if (cells[i] && !sureRows.has(row(i)) && !sureCols.has(col(i))) open.add(i);
      if (!open.size) continue;
      for (const [kind, g] of [['row', row], ['column', col]]) {
        const lines = [...new Set([...open].map(g))].sort((a, b) => a - b);
        if (lines.length !== missing) continue;
        const elim = [];
        for (const q of free) for (const i of s.cand[q]) if (lines.includes(g(i)) && !cells[i]) elim.push([q, i]);
        if (!elim.length) continue;
        const where = f.t === 'roomCount' ? T.room([...open][0]) : 'the marked area';
        const there = [...placed, ...sure];
        const names = lines.map(x => (kind === 'row' ? String(x + 1) : T.col(x)));
        const lineText = `${kind}${lines.length > 1 ? 's' : ''} ${names.join(' and ')}`;
        const cross = [...new Set(elim.map(([, i]) => i))].filter(i => !free.some(q => s.cand[q].has(i) && !elim.some(([r, j]) => r === q && j === i)));
        yield { elim, cross, text: `${factLabel(f)}: "${T.fact(f)}" ` +
          (there.length ? `${T.people(there)} ${there.length === 1 ? 'is' : 'are'} there. ` : '') +
          `So ${missing === 1 ? 'one more person' : `${missing} more people`} must be in ${where}. ` +
          `The last open cells there are all in ${lineText}. So ${missing === 1 ? 'that person takes' : 'they take'} ${lineText}: ` +
          `nobody else can stand in ${lineText} outside ${where}.` };
      }
    }
  }

  // A person with exactly two cells in different rows and columns:
  // the two cells where their lines cross can hold nobody.
  function* twoCellCross(s, only = null) {
    const free = unplaced(s);
    for (const p of only === null ? free : [only]) {
      if (s.cand[p].size !== 2) continue;
      const [a, b] = [...s.cand[p]];
      if (row(a) === row(b) || col(a) === col(b)) continue;
      const corners = [row(a) * n + col(b), row(b) * n + col(a)];
      const elim = [];
      for (const q of free) if (q !== p) for (const i of corners) if (s.cand[q].has(i)) elim.push([q, i]);
      if (!elim.length) continue;
      const cells = [...new Set(elim.map(([, i]) => i))];
      yield { elim, text: `${T.name(p)} is on ${T.cell(a)} or ${T.cell(b)}. ${listText(cells.map(T.cell))} ${cells.length === 1 ? 'shares' : 'share'} a row or column with both. ` +
        `So whoever stood there would block ${T.name(p)}. Cross ${cells.length === 1 ? 'it' : 'them'} out.` };
    }
  }

  // A row (or column) that still needs someone keeps its last open cells free:
  // a placement that would block all of them is out.
  function* lineNeeds(s) {
    const free = unplaced(s);
    for (const [kind, f, g, other] of [['Row', row, col, 'column'], ['Column', col, row, 'row']]) {
      for (let x = 0; x < n; x++) {
        if (s.pos.some(i => i >= 0 && f(i) === x)) continue;
        const open = []; // [person, cell] still possible in this line
        for (const q of free) for (const i of s.cand[q]) if (f(i) === x) open.push([q, i]);
        const cells = [...new Set(open.map(([, i]) => i))].sort((a, b) => a - b);
        if (!cells.length || cells.length > 3) continue;
        const label = `${kind.toLowerCase()} ${kind === 'Row' ? x + 1 : T.col(x)}`;
        // One open cell: everyone in its row (or column) blocks it. One step for all.
        if (cells.length === 1) {
          const c = cells[0];
          const users = new Set(open.map(([q]) => q));
          const elim = [];
          for (const p of free) for (const i of s.cand[p]) if (f(i) !== x && g(i) === g(c) && !(users.size === 1 && users.has(p))) elim.push([p, i]);
          if (elim.length) {
            yield { elim, text: `${kind} ${label.split(' ')[1]} still needs someone. Its last open cell is ${T.cell(c)}. ` +
              `Anyone on a marked cell would block ${T.cell(c)} (same ${other}). So nobody can stand there.` };
          }
          continue;
        }
        for (const p of free) {
          // p on i leaves the line empty: the cells only p can use stay empty,
          // and the rest share a row (or column) with i.
          const bad = [...s.cand[p]].filter(i => f(i) !== x && !open.some(([q, j]) => q !== p && g(j) !== g(i)));
          if (!bad.length) continue;
          const own = cells.filter(j => open.every(([q, k]) => k !== j || q === p));
          const rest = cells.filter(j => !own.includes(j)); // at most one cell
          const ownText = listText(own.map(T.cell));
          // Why nobody else can use p's cells. pending: quiet clues the story still has to tell.
          const blockedOthers = free.filter(q => q !== p);
          const explain = pending => {
            const rooms = new Set(own.map(i => area[i]));
            const why = blockedOthers.map(q => {
              if (pending.has(q)) { const r = pending.get(q); pending.delete(q); return r; }
              if (rooms.size === 1 && ![...s.cand[q]].some(i => area[i] === [...rooms][0])) return `${T.name(q)} can not be in ${T.room(own[0])}.`;
              return null;
            }).filter(Boolean);
            if (!rest.length && pending.has(p)) { why.unshift(pending.get(p)); pending.delete(p); }
            const because = why.length ? ` Remember: ${why.join(' ')}` : '';
            const mine = '';
            if (!rest.length) {
              return `${T.name(p)} is the only one who can be in ${label}.${because}${mine} ` +
                `${kind} ${label.split(' ')[1]} still needs someone. Its last open ${cells.length === 1 ? 'cell is' : 'cells are'} ${ownText}, so ${T.name(p)} must be on one of them. ` +
                `Drop ${T.name(p)} from the marked cells in other ${kind === 'Row' ? 'rows' : 'columns'}.`;
            }
            return `${kind} ${label.split(' ')[1]} still needs someone. Its last open cells are ${listText(cells.map(T.cell))}. ` +
              `Only ${T.name(p)} can use ${ownText}, so ${T.cell(rest[0])} must not be blocked by ${T.name(p)}. Therefore ${T.name(p)} can not stand on the marked cells. ` +
              `${T.name(p)} on a marked cell would block ${T.cell(rest[0])} (same ${other}), and ${ownText} would stay empty.${because}`;
          };
          yield { elim: bad.map(i => [p, i]), explain, text: explain(new Map()) };
        }
      }
    }
  }


  // k empty rows (or columns) that only k people can reach: those people are in them.
  function* hiddenGroups(s) {
    const free = unplaced(s);
    for (const [kind, f] of [['rows', row], ['columns', col]]) {
      const open = [...Array(n).keys()].filter(x => !s.pos.some(i => i >= 0 && f(i) === x));
      for (const k of [2, 3]) {
        for (const g of combos(open, k)) {
          const who = free.filter(p => [...s.cand[p]].some(i => g.includes(f(i))));
          if (who.length !== k) continue;
          const elim = [];
          for (const p of who) for (const i of s.cand[p]) if (!g.includes(f(i))) elim.push([p, i]);
          if (!elim.length) continue;
          const xs = g.map(x => (kind === 'rows' ? String(x + 1) : T.col(x)));
          yield { elim, text: `${kind[0].toUpperCase()}${kind.slice(1)} ${xs.join(' and ')} still need someone, and only ${T.people(who)} can get there. So ${T.people(who)} are in ${kind} ${xs.join(' and ')}.` };
        }
      }
    }
  }

  // Someone who can only be in one room is surely there. Use that for the room rules.
  function* confinedRooms(s) {
    const free = unplaced(s);
    const sureIn = p => {
      if (s.pos[p] >= 0) return area[s.pos[p]];
      const as = new Set([...s.cand[p]].map(i => area[i]));
      return as.size === 1 ? [...as][0] : null;
    };
    const sure = level.people.map((_, p) => sureIn(p));
    // A person who must be alone stays out of a room someone else surely is in.
    for (const p of free) {
      if (!alone[p]) continue;
      for (let q = 0; q < P; q++) {
        if (q === p || sure[q] === null || s.pos[q] >= 0) continue;
        const elim = [...s.cand[p]].filter(i => area[i] === sure[q]).map(i => [p, i]);
        if (elim.length) yield { elim, text: `${T.name(q)} can only be in ${T.room([...s.cand[q]][0])}. ${T.name(p)} was alone in a room. So ${T.name(p)} is not there.` };
      }
    }
    // The victim's room holds exactly two: once two are sure, nobody else goes in.
    const v = sure[victim];
    if (v !== null) {
      const mates = level.people.map((_, q) => q).filter(q => q !== victim && sure[q] === v);
      if (mates.length === 1) {
        const elim = [];
        for (const q of free) if (q !== mates[0] && q !== victim) for (const i of s.cand[q]) if (area[i] === v) elim.push([q, i]);
        if (elim.length) {
          yield { elim, text: `${T.name(victim)} and ${T.name(mates[0])} are surely in ${T.room(s.pos[victim] >= 0 ? s.pos[victim] : [...s.cand[victim]][0])}. The victim was alone with the murderer. So nobody else is there.` };
        }
      }
    }
  }

  // The first move a technique finds, or null.
  const first = gen => { const r = gen.next(); return r.done ? null : r.value; };

  const EASY = [single, onlyInLine, roomRules];

  // Techniques by weight: one rule first, then two rules together, then rarer
  // patterns, then tries. Within a level the step that crosses out most cells wins.
  const TIERS = [
    [zeroFacts, claimLine, single, onlyInLine, twoCellCross],
    [countLines, lineFish, roomRules, confinedRooms, personNeeds, lineNeeds, lineGroups],
    [hiddenGroups],
    [tryCells],
    ...(deep ? [[deepTry]] : []),
  ];
  // How many cells a move leaves without anybody who can stand there.
  const crossedBy = (st, m) => {
    const open = t => { const o = new Set(); t.cand.forEach((c, p) => { if (t.pos[p] < 0) c.forEach(i => o.add(i)); }); return o; };
    const before = open(st);
    const t = clone(st);
    apply(t, m);
    const after = open(t);
    let k = 0;
    for (const i of before) if (!after.has(i) && !t.pos.includes(i)) k++;
    return k;
  };
  // The best move of the first level that has any.
  // ok: only moves that pass this test (e.g. leave a person at most 5 cells).
  // maxTier: stop before tries (3) when a simpler step may still come.
  const bestMove = (st, ok = () => true, maxTier = Infinity) => {
    for (const [lvl, tier] of TIERS.entries()) {
      if (lvl > maxTier) break;
      const moves = [];
      const cap = lvl >= 3 ? 1 : 40; // tries are slow: take the first
      for (const t of tier) { for (const m of t(st)) { if (!ok(m)) continue; moves.push(m); if (moves.length >= cap) break; } if (moves.length >= cap) break; }
      if (!moves.length) continue;
      let best = moves[0], score = -1;
      for (const m of moves) { const c = crossedBy(st, m); if (c > score) { best = m; score = c; } }
      return best;
    }
    return null;
  };
  const TECHNIQUES = TIERS.flat();

  // Follow the easy steps until something breaks. trail collects the forced placements.
  function settle(s, trail = []) {
    for (let guard = 0; guard < 500; guard++) {
      const why = broken(s);
      if (why) return why;
      let move = null;
      for (const t of EASY) if ((move = first(t(s)))) break;
      if (!move) return null;
      if (move.place) trail.push(`${T.name(move.place.p)} must stand on ${T.cell(move.place.i)}`);
      apply(s, move);
    }
    return null;
  }

  // Try each cell of one person. Cells that break are out.
  function* tryCells(s) {
    const free = unplaced(s).sort((a, b) => s.cand[a].size - s.cand[b].size);
    for (const p of free) {
      const bad = [];
      let example = null;
      for (const i of s.cand[p]) {
        const t = clone(s);
        apply(t, { place: { p, i } });
        const trail = [];
        const why = settle(t, trail);
        // Prefer the shortest chain as the example: it is the easiest to follow.
        if (why) { bad.push(i); if (!example || trail.length < example.trail.length) example = { i, why, trail }; }
      }
      if (bad.length) {
        const cells = bad.map(T.cell);
        // Tell the chain forward: what would follow, and what breaks.
        const chain = [...example.trail.slice(0, 3), example.why].join(', then ');
        const head = `If ${T.name(p)} stood on ${T.cell(example.i)}, then ${chain}.`;
        const text = bad.length === 1
          ? `${head} So ${T.name(p)} is not on ${cells[0]}.`
          : `${head} The same happens on ${listText(cells.filter(c => c !== T.cell(example.i)))}. So ${T.name(p)} is not on ${listText(cells)}.`;
        yield { elim: bad.map(i => [p, i]), text };
      }
    }
  }

  // Last resort: the full solver says a cell leads nowhere.
  function* deepTry(s) {
    const free = unplaced(s).sort((a, b) => s.cand[a].size - s.cand[b].size);
    for (const p of free) {
      for (const i of s.cand[p]) {
        const restrict = s.cand.map((c, q) => (q === p ? new Set([i]) : c));
        if (solve(level, blocking, { limit: 1, restrict }).count === 0) {
          yield { elim: [[p, i]], text: `Suppose ${T.name(p)} stood on ${T.cell(i)}. Then the others can not all be placed by the rules (it is a long chain). So ${T.name(p)} is not on ${T.cell(i)}.` };
        }
      }
    }
  }

  // ---- run ----

  const steps = [];
  const s = { pos: new Array(P).fill(-1), cand: [] };
  for (let p = 0; p < P; p++) {
    const c = new Set();
    for (let i = 0; i < N; i++) if (!blocking.has(level.objects[i])) c.add(i);
    s.cand.push(c);
  }
  // Start from the player's board: their people, crosses and "cannot be here" notes.
  const known = new Set(); // cells the player already sees as empty
  if (start) {
    for (let p = 0; p < P; p++) for (const i of start.out[p] || []) s.cand[p].delete(i);
    for (const i of start.crossed) { known.add(i); for (const c of s.cand) c.delete(i); }
    start.pos.forEach((i, p) => { if (i >= 0) apply(s, { place: { p, i } }); });
    start.pos.forEach(i => { if (i < 0) return; for (let j = 0; j < N; j++) if (row(j) === row(i) || col(j) === col(i)) known.add(j); });
  }
  const done = () => steps.length >= limit;

  // 1. What each person's own clues and rules allow.
  const firstDomains = [];
  for (let p = 0; p < P; p++) {
    const mine = level.clues.filter(cl => cl.p === p && UNARY.includes(cl.t));
    const cells = [...s.cand[p]].filter(i => cellOk(level, blocking, p, i) && mine.every(cl => unaryOk(level, blocking, cl, i)));
    if (cells.length === s.cand[p].size) continue;
    const reasons = mine.map(T.clue);
    if (hasRule(level, 'ranks')) {
      const r = level.rank[p];
      if (r === 'noble') reasons.push(`${T.name(p)} is a noble, so they stand in a court room.`);
      if (r === 'commoner') reasons.push(`${T.name(p)} is a commoner, so they never stand in a court room.`);
    }
    if (tags.some(t => t?.startsWith('t:') && t.slice(2) !== level.trade?.[p])) {
      reasons.push(level.trade?.[p] ? `Work spots of other trades are closed to ${T.name(p)}.` : `${T.name(p)} has no trade, so all work spots are closed to them.`);
    }
    if (p === victim && level.sea >= 0) reasons.push(`The victim was with the murderer, so not in the sea.`);
    firstDomains.push({ p, cells, reasons });
  }
  firstDomains.sort((a, b) => a.cells.length - b.cells.length);
  // A hint about one person is only worth it when they have at most 5 cells left after it.
  const MAX_CELLS = 5;
  const leftAfter = m => {
    if (m.allowed) return { p: m.allowed.p, left: m.allowed.cells.length };
    if (!m.elim) return null;
    const ps = new Set(m.elim.map(([q]) => q));
    if (ps.size !== 1) return null;
    const [p] = ps;
    return { p, left: s.cand[p].size - m.elim.length };
  };
  const worthIt = m => { const a = leftAfter(m); return !a || a.left <= MAX_CELLS; };
  const keepGood = list => (list.some(worthIt) ? list.filter(worthIt) : list);
  let vagueClues = []; // clue steps with more than 5 cells: shown only before tries
  if (options && firstDomains.length) {
    // Each person's own clues: all independent next steps.
    const list = firstDomains.map(d => ({ ...withClaim(s, { allowed: { p: d.p, cells: d.cells },
      text: `${d.reasons.join(' ')} So ${T.name(d.p)} can only be on the marked cells.` }), before: snap(s) }));
    // "Nobody" facts first. Too vague (more than 5 cells left)? Then look for better steps first.
    const zero = [...zeroFacts(s)].map(m => ({ ...m, before: snap(s) }));
    if (zero.length || list.some(worthIt)) return [...zero, ...list.filter(worthIt)];
    vagueClues = list.filter(m => m.allowed.cells.length < s.cand[m.allowed.p].size)
      .sort((a, b) => a.allowed.cells.length - b.allowed.cells.length);
  }
  // A clue step for one person, on top of what is known now (null if it adds nothing).
  const clueMove = d => {
    const cells = d.cells.filter(i => s.cand[d.p].has(i));
    if (s.pos[d.p] >= 0 || cells.length === s.cand[d.p].size) return null;
    return withClaim(s, { allowed: { p: d.p, cells }, reason: d.reasons.join(' '), text: `${d.reasons.join(' ')} So ${T.name(d.p)} can only be on the marked cells.` });
  };
  // "Nobody" facts first: they cross out cells right away.
  if (!options) for (const m of [...zeroFacts(s)]) { steps.push({ ...m, before: snap(s) }); apply(s, m); m.cross.forEach(i => known.add(i)); }
  // Clue steps that leave more than 5 cells wait until other steps make them sharper.
  const deferred = [];
  for (const d of firstDomains) {
    if (done()) return steps;
    const move = clueMove(d);
    if (!move) continue;
    if (!options && move.allowed.cells.length > MAX_CELLS) { deferred.push(d); continue; }
    steps.push({ ...move, before: snap(s) });
    apply(s, move);
    (move.cross || []).forEach(i => known.add(i)); // already crossed: not again later
  }

  // 2. Cells nobody can use.
  const used = new Set();
  for (const c of s.cand) for (const i of c) used.add(i);
  const empty = [...Array(N).keys()].filter(i => !blocking.has(level.objects[i]) && !used.has(i) && !known.has(i) && !s.pos.includes(i));
  if (empty.length && !done()) steps.push({ cross: empty, before: snap(s), text: 'Nobody can stand on these cells. Cross them out.' });
  if (options) {
    if (steps.length && !firstDomains.length) return steps;
    if (firstDomains.length) {
      // Only vague clue steps so far: apply them quietly and look for sharper ones.
      for (const d of firstDomains) apply(s, { allowed: { p: d.p, cells: d.cells } });
    }
    // All moves from the start board, easy techniques first. Tries only when nothing easier is left.
    const seen = new Set();
    const key = m => JSON.stringify(m.place || m.elim);
    const collect = (techs, max) => {
      const out = [];
      for (const t of techs) {
        for (const m of t(s)) {
          if (seen.has(key(m))) continue;
          seen.add(key(m));
          out.push({ ...m, before: snap(s) });
          if (out.length >= max) return out;
        }
      }
      return out;
    };
    // Easy steps sorted by weight: level first, then most crossed-out cells.
    const tierOf = new Map();
    TIERS.slice(0, 3).forEach((tier, lvl) => tier.forEach(t => tierOf.set(t, lvl)));
    const easyRaw = [];
    for (const t of TIERS.slice(0, 3).flat()) for (const m of collect([t], 30)) easyRaw.push({ m, lvl: tierOf.get(t), c: crossedBy(s, m) });
    easyRaw.sort((a, b) => a.lvl - b.lvl || b.c - a.c);
    const easy = keepGood(easyRaw.map(x => x.m));
    if (easy.some(worthIt)) return easy;
    // A plain clue step (even with many cells) is easier than a try.
    if (vagueClues.length) return vagueClues;
    const tries = collect([tryCells], 8);
    if (tries.some(worthIt)) return tries.filter(worthIt);
    if (easy.length) return easy;
    if (tries.length) return tries;
    if (steps.length) return steps; // only vague steps were found: better than nothing
    return collect(deep ? [deepTry] : [], 1);
  }

  // 3. Loop until everyone is placed.
  // A waiting clue step that is sharp enough now (5 cells or fewer), else null.
  // last: take the sharpest one anyway.
  const takeDeferred = last => {
    let best = null, bi = -1;
    for (let k = deferred.length - 1; k >= 0; k--) {
      const m = clueMove(deferred[k]);
      if (!m) { deferred.splice(k, 1); continue; }
      if (!best || m.allowed.cells.length < best.allowed.cells.length) { best = m; bi = k; }
    }
    if (!best || (!last && best.allowed.cells.length > MAX_CELLS)) return null;
    deferred.splice(bi, 1);
    return best;
  };
  // Clues used quietly (more than 5 cells): told in the first step about that person.
  const pending = new Map();
  // People a step is about, or whose limits it relies on.
  const involved = m => new Set([m.allowed?.p, m.place?.p, ...(m.elim || []).map(([q]) => q), ...(m.uses || [])].filter(q => q !== undefined));
  for (let guard = 0; guard < 2000 && unplaced(s).length && !done(); guard++) {
    // Order: sharp clue step, simple step, any clue step (quietly), then tries.
    let move = takeDeferred(false) || bestMove(s, worthIt, 2);
    if (!move) {
      const vague = takeDeferred(true);
      if (vague) {
        if (vague.allowed.cells.length > MAX_CELLS) { apply(s, vague); pending.set(vague.allowed.p, vague.reason); continue; }
        move = vague;
      }
    }
    move = move || bestMove(s, () => true, 2) || bestMove(s);
    if (!move) break;
    move = withClaim(s, move);
    // A step that explains itself takes the quiet clues it needs.
    if (move.explain) move = { ...move, text: move.explain(pending) };
    const recall = [];
    if (!move.explain) for (const q of involved(move)) if (pending.has(q)) { recall.push(pending.get(q)); pending.delete(q); }
    if (recall.length) move = { ...move, text: `Remember: ${recall.join(' ')} ${move.text}` };
    steps.push({ ...move, before: snap(s) });
    apply(s, move);
    (move.cross || []).forEach(i => known.add(i)); // already crossed: not again later
  }

  // 4. Name the murderer.
  if (!unplaced(s).length && !done()) {
    const k = murdererOf(level, s.pos);
    if (k >= 0) {
      steps.push({
        before: snap(s), done: true,
        text: `Everyone is placed. ${T.name(victim)} is in ${T.room(s.pos[victim])} with only ${T.name(k)}. So ${T.name(k)} did it.`,
      });
    }
  }
  return steps;
}

function combos(arr, k, start = 0, pick = [], out = []) {
  if (pick.length === k) { out.push(pick.slice()); return out; }
  for (let j = start; j < arr.length; j++) { pick.push(arr[j]); combos(arr, k, j + 1, pick, out); pick.pop(); }
  return out;
}

function listText(items) {
  return items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

// Plain text helpers, for checks where nobody reads the text.
function plainText(level) {
  const n = level.size;
  return {
    name: p => level.people[p].name, cell: i => String(i), col: c => String(c),
    room: i => String(level.rooms[i]), rooms: () => '', clue: () => '', people: () => '', fact: () => '',
  };
}

// True if the deduction solves the case with easy steps and short tries,
// without the long-chain fallback.
export function isDeducible(level, blocking) {
  const steps = deduce(level, blocking, plainText(level), { deep: false });
  const last = steps[steps.length - 1];
  return !!last?.done && last.before.pos.every((i, p) => i === level.solution[p]);
}
