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

const UNARY = new Set(['room', 'notRoom', 'on', 'next', 'row', 'col', 'bandit', 'task', 'taskEither', 'noTask', 'door', 'window']);

// "is" for one person, "are" for more.
const isAre = k => (k === 1 ? 'is' : 'are');

// alone[p]: p was alone in a room. same: pairs [p, q] in the same room.
function sameAndAlone(level) {
  const alone = new Array(level.people.length).fill(false);
  const same = [];
  for (const cl of level.clues) {
    if (cl.t === 'alone') alone[cl.p] = true;
    if (cl.t === 'same') same.push([cl.p, cl.v]);
  }
  return { alone, same };
}

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
  const sideCap = side && [level.river.first, P - level.river.first];
  const sideName = side && (level.river.dir === 'v' ? ['west', 'east'] : ['north', 'south']);
  // Case facts.
  const countFacts = allFacts(level).filter(f => CELL_FACTS.includes(f.t)).map(f => ({ f, cells: factCells(level, f) }));
  const factLabel = f => (f.t === 'task' ? 'Tasks' : 'Case fact');
  const apartFacts = level.facts.filter(f => f.t === 'apart');
  const boardFacts = level.facts.filter(f => ['alone', 'emptyRooms', 'touch'].includes(f.t));
  const landList = landRooms(level);
  const { alone, same } = sameAndAlone(level);
  const clueOf = []; // filled in step 1 below

  // ---- state helpers ----

  const clone = s => ({ pos: s.pos.slice(), cand: s.cand.map(c => new Set(c)) });
  const snap = s => ({ pos: s.pos.slice(), cand: s.cand.map(c => [...c]) });
  const unplaced = s => [...new Array(P).keys()].filter(p => s.pos[p] < 0);
  const areaPeople = (s, a) => [...new Array(P).keys()].filter(p => s.pos[p] >= 0 && area[s.pos[p]] === a);
  // [q, j] for each person q of `people` and each of their cells j where test(j, q) holds.
  const pairsWhere = (s, people, test) => {
    const out = [];
    for (const q of people) for (const j of s.cand[q]) if (test(j, q)) out.push([q, j]);
    return out;
  };
  // Cells of elim where nobody is left (a plain ✕).
  const crossedCells = (s, free, elim) => [...new Set(elim.map(([, i]) => i))]
    .filter(i => !free.some(q => s.cand[q].has(i) && !elim.some(([r, j]) => r === q && j === i)));
  // A person on cell i blocks cell j: same cell, row or column (or a corner cell with keep distance).
  const blocksCell = (i, j) => i === j || row(i) === row(j) || col(i) === col(j) || (noTouch && touching(level, i, j));

  // Put p on cell i: their row and column (and corner cells with keep distance) close for the others.
  function placeIn(s, p, i) {
    s.pos[p] = i;
    s.cand[p] = new Set([i]);
    for (let q = 0; q < P; q++) {
      if (q === p || s.pos[q] >= 0) continue;
      for (const j of s.cand[q]) if (blocksCell(i, j)) s.cand[q].delete(j);
    }
  }

  function apply(s, move) {
    if (move.place) placeIn(s, move.place.p, move.place.i);
    if (move.elim) for (const [p, i] of move.elim) s.cand[p].delete(i);
    if (move.allowed) s.cand[move.allowed.p] = new Set(move.allowed.cells);
  }

  // ---- broken boards: each check gives a reason or null ----

  function noCellLeft(s, free) {
    const p = free.find(q => !s.cand[q].size);
    return p === undefined ? null : `${T.name(p)} would have no cell left`;
  }

  // A free row or column nobody can reach.
  function emptyLine(s, free) {
    const open = (f, x) => !s.pos.some(i => i >= 0 && f(i) === x);
    const reached = (f, x) => free.some(p => [...s.cand[p]].some(i => f(i) === x));
    for (let r = 0; r < n; r++) if (open(row, r) && !reached(row, r)) return `nobody could stand in row ${r + 1}`;
    for (let c = 0; c < n; c++) if (open(col, c) && !reached(col, c)) return `nobody could stand in column ${T.col(c)}`;
    return null;
  }

  // Two placed people in one row or column.
  function sharedLine(s) {
    const placed = s.pos.filter(i => i >= 0);
    // (coverage: not reached by the tests yet)
    /* v8 ignore next */
    if (new Set(placed.map(row)).size + new Set(placed.map(col)).size < 2 * placed.length) return 'two people would share a row or column';
    return null;
  }

  // Room rules that can already fail: alone, and the victim's room.
  function roomBroken(s) {
    for (let p = 0; p < P; p++) {
      const i = s.pos[p];
      if (i < 0 || !(alone[p] || tags[i] === 'lone')) continue;
      if (areaPeople(s, area[i]).some(q => q !== p)) return `${T.name(p)} would not be alone in ${T.room(i)}`;
    }
    if (s.pos[victim] >= 0 && areaPeople(s, area[s.pos[victim]]).length > 2) {
      return `${T.name(victim)} would not be alone with one person`;
    }
    // (Keep distance needs no check: placing someone takes the cells around them from the others.)
    return null;
  }

  function coupleBroken(s) {
    for (let p = 0; p < P; p++) {
      const q = partner[p];
      if (q > p && s.pos[p] >= 0 && s.pos[q] >= 0 && !(diagonal(s.pos[p], s.pos[q], n) && area[s.pos[p]] === area[s.pos[q]])) {
        return `${T.name(p)} and ${T.name(q)} would not stand diagonally next to each other in one room`;
      }
    }
    return null;
  }

  function countBroken(s, free) {
    for (const { f, cells } of countFacts) {
      const got = s.pos.filter(i => i >= 0 && cells[i]).length;
      if (got > f.k) return `too many people would match "${T.fact(f)}"`;
      const reach = free.filter(p => [...s.cand[p]].some(i => cells[i])).length;
      if (got + reach < f.k) return `not enough people could match "${T.fact(f)}"`;
    }
    return null;
  }

  // Board facts: bounds that already fail on a part of the board.
  function emptyRoomsBroken(s, free, f) {
    const used = landList.filter(k => s.pos.some(i => i >= 0 && level.rooms[i] === k)).length;
    const dead = landList.filter(k => !s.pos.some(i => i >= 0 && level.rooms[i] === k) && !free.some(p => [...s.cand[p]].some(i => level.rooms[i] === k))).length;
    if (landList.length - used < f.k) return `fewer than ${f.k} rooms could stay empty`;
    if (dead > f.k) return `more than ${f.k} rooms would stay empty`;
    return null;
  }

  function touchBroken(s, free, f) {
    let c = 0;
    for (let p = 0; p < P; p++) for (let q = p + 1; q < P; q++) if (s.pos[p] >= 0 && s.pos[q] >= 0 && touching(level, s.pos[p], s.pos[q])) c++;
    return c > f.k ? 'too many people would touch at a corner' : null;
  }

  function aloneFactBroken(s, free, f) {
    // Sure not alone: someone else is placed in the same area.
    const notAlone = s.pos.filter((i, p) => i >= 0 && s.pos.some((j, q) => q !== p && j >= 0 && area[j] === area[i])).length;
    // Sure alone: placed, and nobody else is or can come into the area.
    const sure = s.pos.filter((i, p) => i >= 0 && !s.pos.some((j, q) => q !== p && j >= 0 && area[j] === area[i]) &&
      !free.some(q => [...s.cand[q]].some(j => area[j] === area[i]))).length;
    if (notAlone > P - f.k) return 'too few people could be alone in a room';
    if (sure > f.k) return 'too many people would be alone in a room';
    return null;
  }

  const BOARD_FACT_CHECKS = { emptyRooms: emptyRoomsBroken, touch: touchBroken, alone: aloneFactBroken };

  function boardFactBroken(s, free) {
    for (const f of boardFacts) {
      const why = BOARD_FACT_CHECKS[f.t](s, free, f);
      if (why) return why;
    }
    return null;
  }

  function apartBroken(s) {
    for (const f of apartFacts) {
      for (let p = 0; p < P; p++) for (let q = p + 1; q < P; q++) {
        const g = groupOf(level, f, p);
        if (g && g === groupOf(level, f, q) && s.pos[p] >= 0 && s.pos[q] >= 0 && area[s.pos[p]] === area[s.pos[q]]) {
          return `${T.name(p)} and ${T.name(q)} would share a ${f.v} and a room`;
        }
      }
    }
    return null;
  }

  function riverBroken(s, free) {
    if (!side) return null;
    for (const x of [0, 1]) {
      const placedHere = s.pos.filter(i => i >= 0 && side[i] === x).length;
      const canReach = free.filter(p => [...s.cand[p]].some(i => side[i] === x)).length;
      if (placedHere > sideCap[x] || placedHere + canReach < sideCap[x]) return `the ${sideName[x]} side of the river would not get exactly ${sideCap[x]} people`;
    }
    return null;
  }

  function fullBroken(s, free) {
    if (!full) return null;
    const empty = land.filter(k => !s.pos.some(i => i >= 0 && level.rooms[i] === k));
    for (const k of empty) if (!free.some(p => [...s.cand[p]].some(i => level.rooms[i] === k))) return `nobody could be in ${roomName(k)}`;
    if (empty.length > free.length) return 'not every room could get someone';
    return null;
  }

  // Everyone placed: the rules of a full board.
  function endBroken(s, free) {
    if (free.length) return null;
    const pos = s.pos;
    const problem = boardRuleProblems(level, pos, T.name, k => level.roomNames[k])[0];
    if (problem) return problem;
    for (const [p, q] of same) if (area[pos[p]] !== area[pos[q]]) return `${T.name(p)} and ${T.name(q)} would be in different rooms`;
    if (murdererOf(level, pos) < 0) return `${T.name(victim)} would not be alone with exactly one person`;
    for (let p = 0; p < P; p++) if (tags[pos[p]] === 'crowd' && areaPeople(s, area[pos[p]]).length < 2) return `${T.name(p)} would be alone on a sun seal`;
    if (hasRule(level, 'bandits') && !banditSet(level, pos)) return 'the bandit clues could not all hold';
    return null;
  }

  const BROKEN_CHECKS = [noCellLeft, emptyLine, sharedLine, roomBroken, coupleBroken, countBroken, boardFactBroken,
    apartBroken, riverBroken, fullBroken, endBroken];

  // A reason the state is broken, or null.
  function broken(s) {
    const free = unplaced(s);
    for (const check of BROKEN_CHECKS) {
      const why = check(s, free);
      if (why) return why;
    }
    return null;
  }

  // ---- easy techniques: each yields moves ----

  function* single(s) {
    for (const p of unplaced(s)) {
      if (s.cand[p].size === 1) {
        const i = [...s.cand[p]][0];
        yield { place: { p, i }, text: `${T.name(p)} has only one cell left: ${T.cell(i)}. Place ${T.name(p)} there. Nobody else can be in row ${row(i) + 1} or column ${T.col(col(i))}.` +
          (noTouch ? ' Nobody stands on the corner cells next to it in that room either.' : '') };
      }
    }
  }

  // Why only one person is left for a line: the clues of the others (cites), or the rule.
  function lineWhy(cites, label) {
    if (!cites.length) return 'Every row and column holds one person. ';
    const who = cites.length === 1 ? T.name(cites[0]) : 'they';
    return `Remember: ${cites.map(q => clueOf[q].reasons.join(' ')).join(' ')} So ${who} can not stand in ${label}. `;
  }

  // The move for line x (row or column by f) if only one person can still stand in it.
  function onlyInLineMove(s, free, kind, f, x) {
    if (s.pos.some(i => i >= 0 && f(i) === x)) return null;
    const who = free.filter(p => [...s.cand[p]].some(i => f(i) === x));
    if (who.length !== 1) return null;
    const p = who[0];
    if (![...s.cand[p]].some(i => f(i) !== x)) return null;
    const label = kind === 'row' ? `row ${x + 1}` : `column ${T.col(x)}`;
    // Others whose own clues keep them out of that line: say so.
    const cites = free.filter(q => q !== p && clueOf[q] && ![...clueOf[q].cells].some(i => f(i) === x));
    const why = lineWhy(cites, label);
    const uses = free.filter(q => q !== p);
    // Only one of their cells is in that line: say where they stand.
    const there = [...s.cand[p]].filter(i => f(i) === x);
    if (there.length === 1) {
      const i = there[0];
      return {
        place: { p, i }, about: [p], cites, uses,
        text: `${why}Only ${T.name(p)} can still stand in ${label}. ` +
          `There, ${T.name(p)} can only be on ${T.cell(i)}. Place ${T.name(p)} on ${T.cell(i)}.`,
      };
    }
    // Note the person on their cells in that line, instead of taking away all
    // their other cells. Same result, so the story and difficulty stay the same.
    return {
      allowed: { p, cells: there }, about: [p], cites, uses,
      text: `${why}Only ${T.name(p)} can still stand in ${label}. ` +
        `So ${T.name(p)} can only be on ${listText(there.map(i => T.cell(i)))}.`,
    };
  }

  function* onlyInLine(s) {
    const free = unplaced(s);
    for (const [kind, f] of [['row', row], ['column', col]]) {
      for (let x = 0; x < n; x++) {
        const move = onlyInLineMove(s, free, kind, f, x);
        if (move) yield move;
      }
    }
  }

  // ---- room rules ----

  // Someone placed who must be alone: nobody else in that room.
  function* alonePlacedMoves(s, free) {
    for (let p = 0; p < P; p++) {
      const i = s.pos[p];
      if (i < 0 || !(alone[p] || tags[i] === 'lone')) continue;
      const elim = pairsWhere(s, free, j => area[j] === area[i]);
      if (!elim.length) continue;
      const why = alone[p] ? `${T.name(p)} was alone in a room` : `${T.name(p)} stands on a moon seal, so they are alone`;
      yield { elim, text: `${why}. So nobody else is in ${T.room(i)}.` };
    }
  }

  // A person who must be alone can not join a room with someone in it.
  function* aloneJoinMoves(s, free) {
    for (const p of free) {
      const elim = [...s.cand[p]].filter(j => (alone[p] || tags[j] === 'lone') && areaPeople(s, area[j]).length).map(j => [p, j]);
      if (!elim.length) continue;
      const j = elim[0][1];
      const other = T.name(areaPeople(s, area[j])[0]);
      const text = alone[p]
        ? `${T.name(p)} was alone in a room. ${other} is already in ${T.room(j)}. So ${T.name(p)} is not there.`
        : `A person on a moon seal is alone in their room. ${other} is already in ${T.room(j)}. So ${T.name(p)} can not use the moon seal there.`;
      yield { elim, text };
    }
  }

  // Same room: each one stays in rooms the other can reach.
  function* sameRoomMoves(s) {
    for (const [a, b] of same) for (const [p, q] of [[a, b], [b, a]]) {
      if (s.pos[p] >= 0) continue;
      const reach = new Set([...s.cand[q]].map(i => area[i]));
      const elim = [...s.cand[p]].filter(i => !reach.has(area[i]) || (s.pos[q] >= 0 && i === s.pos[q]));
      if (!elim.length) continue;
      const where = s.pos[q] >= 0 ? `${T.name(q)} is in ${T.room(s.pos[q])}` : `${T.name(q)} can only be in ${T.rooms([...s.cand[q]])}`;
      yield { elim: elim.map(i => [p, i]), text: `${T.name(p)} was in the same room as ${T.name(q)}. ${where}. So ${T.name(p)} must be there too.` };
    }
  }

  // Couples stand diagonally next to each other.
  function* coupleMoves(s, free) {
    for (const p of free) {
      const q = partner[p];
      if (q < 0) continue;
      const near = [...s.cand[p]].filter(i => [...s.cand[q]].some(j => diagonal(i, j, n) && area[i] === area[j]));
      if (near.length >= s.cand[p].size) continue;
      const elim = [...s.cand[p]].filter(i => !near.includes(i)).map(i => [p, i]);
      const where = s.pos[q] >= 0 ? `${T.name(q)} stands on ${T.cell(s.pos[q])}` : `${T.name(q)} has only a few cells left`;
      yield { elim, text: `${T.name(p)} and ${T.name(q)} are a couple: they stand diagonally next to each other, in the same room. ${where}. So ${T.name(p)} can only be on a corner cell next to them in that room.` };
    }
  }

  // Why a count fact is full: the people surely on its cells, or the count reached already.
  function countWhy(sure, got) {
    if (sure.length) return `${T.people(sure)} ${isAre(sure.length)} surely on the marked cells. `;
    return got ? 'That number is reached already. ' : '';
  }

  // Case facts: a full count takes nobody else; a count that needs everyone who can reach it gets them.
  function* countFactMoves(s, free, { f, cells }) {
    const got = s.pos.filter(i => i >= 0 && cells[i]).length;
    // People who are surely on these cells: all their cells count.
    const sure = free.filter(q => s.cand[q].size && [...s.cand[q]].every(i => cells[i]));
    if (got + sure.length === f.k) {
      const elim = pairsWhere(s, free.filter(q => !sure.includes(q)), j => cells[j]);
      if (elim.length) yield { elim, text: `${factLabel(f)}: "${T.fact(f)}" ${countWhy(sure, got)}So nobody else can stand on the marked cells.` };
    }
    const reach = free.filter(q => [...s.cand[q]].some(i => cells[i]));
    if (got + reach.length === f.k && reach.length) {
      const elim = pairsWhere(s, reach, j => !cells[j]);
      if (elim.length) yield { elim, text: `${factLabel(f)}: "${T.fact(f)}" Only ${T.people(reach)} can still make that true. So they must.` };
    }
  }

  // Case facts: people of one rank (or trade) are in different rooms.
  function* apartMoves(s, free) {
    for (const f of apartFacts) for (let p = 0; p < P; p++) {
      const g = groupOf(level, f, p);
      if (!g || s.pos[p] < 0) continue;
      const a = area[s.pos[p]];
      const elim = pairsWhere(s, free.filter(q => groupOf(level, f, q) === g), j => area[j] === a);
      if (elim.length) yield { elim, text: `Case fact: "${T.fact(f)}" ${T.name(p)} is already in ${T.room(s.pos[p])}. So no other ${g} is there.` };
    }
  }

  // River side x: a full side takes nobody else. A side that needs everyone who can reach it gets them.
  function* riverMoves(s, free, x) {
    const placedHere = s.pos.filter(i => i >= 0 && side[i] === x).length;
    const sureHere = free.filter(q => s.cand[q].size && [...s.cand[q]].every(i => side[i] === x));
    if (placedHere + sureHere.length === sideCap[x]) {
      const elim = pairsWhere(s, free.filter(q => !sureHere.includes(q)), j => side[j] === x);
      const why = sureHere.length ? ` ${T.people(sureHere)} ${isAre(sureHere.length)} surely there.` : '';
      if (elim.length) yield { elim, text: `Exactly ${sideCap[x]} people stand ${sideName[x]} of the river.${why} That side is full. So nobody else stands there.` };
    }
    const reach = free.filter(q => [...s.cand[q]].some(i => side[i] === x));
    if (placedHere + reach.length === sideCap[x]) {
      const elim = pairsWhere(s, reach, j => side[j] !== x);
      if (elim.length) yield { elim, text: `${sideCap[x]} people must stand ${sideName[x]} of the river. Only ${T.people(reach)} can still get there. So they all stand ${sideName[x]} of it.` };
    }
  }

  // Full house: a room nobody else can reach needs this person.
  function* fullHouseMoves(s, free) {
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

  // The victim is placed: their room holds exactly two people.
  function* victimPlacedMoves(s, free) {
    const a = area[s.pos[victim]];
    const mates = areaPeople(s, a).filter(q => q !== victim);
    if (mates.length !== 1) return;
    const elim = pairsWhere(s, free, j => area[j] === a);
    if (elim.length) {
      yield { elim, text: `The murderer was alone with ${T.name(victim)}. ${T.name(mates[0])} is already in ${T.room(s.pos[victim])}. So nobody else is there.` };
    }
  }

  // The victim is not placed: not in a room with two people, not in a room nobody else can get into.
  function* victimOpenMoves(s) {
    const elim = [...s.cand[victim]].filter(j => areaPeople(s, area[j]).length >= 2);
    if (elim.length) {
      yield { elim: elim.map(j => [victim, j]), text: `${T.name(victim)} was alone with the murderer. Rooms that already hold two people are out for ${T.name(victim)}.` };
    }
    // The victim was not alone: the murderer was there too.
    // A room nobody else can still get into is out for the victim.
    const others = level.people.map((_, q) => q).filter(q => q !== victim);
    // Can someone else be in this room with the victim on cell j (not in the same row or column)?
    const company = j => others.some(q => (s.pos[q] >= 0 ? area[s.pos[q]] === area[j]
      : [...s.cand[q]].some(k => area[k] === area[j] && row(k) !== row(j) && col(k) !== col(j))));
    const lonely = [...s.cand[victim]].filter(j => !company(j));
    if (lonely.length) {
      yield { elim: lonely.map(j => [victim, j]), about: [victim],
        text: `${T.name(victim)} was not alone: the murderer was in the same room. Nobody else can still be with ${T.name(victim)} in ${T.rooms(lonely)}. So ${T.name(victim)} is not there.` };
    }
  }

  function* roomRules(s) {
    const free = unplaced(s);
    yield* alonePlacedMoves(s, free);
    yield* aloneJoinMoves(s, free);
    yield* sameRoomMoves(s);
    yield* coupleMoves(s, free);
    for (const fc of countFacts) yield* countFactMoves(s, free, fc);
    yield* apartMoves(s, free);
    if (side) for (const x of [0, 1]) yield* riverMoves(s, free, x);
    if (full) yield* fullHouseMoves(s, free);
    if (s.pos[victim] >= 0) yield* victimPlacedMoves(s, free);
    else yield* victimOpenMoves(s);
  }

  // ---- lines ----

  // Person p in one line (row or column by f): nobody else is in it. Null if not.
  function claimMove(s, free, p, kind, f) {
    const lines = new Set([...s.cand[p]].map(i => f(i)));
    if (lines.size !== 1) return null;
    const [x] = lines;
    const elim = pairsWhere(s, free.filter(q => q !== p), j => f(j) === x);
    if (!elim.length) return null;
    const line = `${kind} ${kind === 'row' ? x + 1 : T.col(x)}`;
    return { elim, text: `${T.name(p)} can only be in ${line}. Each ${kind} holds one person. So nobody else is in ${line}.` };
  }

  // One person who can only be in one row (or column) owns it: nobody else is there.
  // only: look at this person only.
  function* claimLine(s, only = null) {
    const free = unplaced(s);
    for (const p of only === null ? free : [only]) {
      for (const [kind, f] of [['row', row], ['column', col]]) {
        const move = claimMove(s, free, p, kind, f);
        if (move) yield move;
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

  // Moves for the people g if together they share only g.length rows (or columns).
  function* groupMoves(s, free, g, kind, f) {
    const k = g.length;
    const u = new Set();
    for (const p of g) for (const i of s.cand[p]) u.add(f(i));
    if (u.size !== k) return;
    const elim = pairsWhere(s, free.filter(q => !g.includes(q)), j => u.has(f(j)));
    if (!elim.length) return;
    const names = T.people(g);
    const xs = [...u].sort((x, y) => x - y).map(x => (kind === 'rows' ? String(x + 1) : T.col(x)));
    if (k === 1) {
      const one = kind === 'rows' ? 'row' : 'column';
      const line = `${one} ${xs[0]}`;
      yield { elim, text: `${names} can only be in ${line}. Each ${one} holds one person. So nobody else is in ${line}.` };
    }
    yield { elim, text: `${names} can only be in ${kind} ${xs.join(' and ')}. Together they fill these ${kind}. So nobody else is in them.` };
  }

  // k people who share only k rows (or columns) fill them. k = 1: one person owns a row.
  function* lineGroups(s) {
    const free = unplaced(s);
    for (const k of [1, 2, 3]) for (const [kind, f] of [['rows', row], ['columns', col]]) {
      for (const g of combos(free, k)) yield* groupMoves(s, free, g, kind, f);
    }
  }

  // Person q with 2 to 4 cells needs one of them: a placement that blocks all of them is out.
  function needsMove(s, free, q) {
    const mine = [...s.cand[q]];
    if (mine.length < 2 || mine.length > 4) return null;
    const elim = pairsWhere(s, free.filter(p => p !== q), i => mine.every(j => blocksCell(i, j)));
    if (!elim.length) return null;
    // Whoever stood there would leave q no cell: nobody can stand there.
    const cells = [...new Set(elim.map(([, i]) => i))];
    const cross = cells.filter(i => !mine.includes(i));
    const where = cells.length === 1 ? T.cell(cells[0]) : listText(cells.map(i => T.cell(i)));
    const shares = cells.length === 1 ? 'shares' : 'share';
    const all = mine.length === 2 ? 'both' : 'all of them';
    const end = cross.length === cells.length ? `So nobody can stand on ${where}: cross it out.` : `So nobody but ${T.name(q)} can stand on ${where}.`;
    return {
      elim, cross, about: [q],
      text: `${T.name(q)} can only be on ${listText(mine.map(i => T.cell(i)))}. ${where} ${shares} a row or column with ${all}. ` +
        `Whoever else stood there would leave ${T.name(q)} no cell. ` + end,
    };
  }

  // A person with only a few cells left needs one of them:
  // a placement that would block all of them is out.
  function* personNeeds(s) {
    const free = unplaced(s);
    for (const q of free.slice().sort((a, b) => s.cand[a].size - s.cand[b].size)) {
      const move = needsMove(s, free, q);
      if (move) yield move;
    }
  }

  // A fact that says "nobody": its cells are empty. One rule, many crosses.
  function* zeroFacts(s) {
    for (const { f, cells } of countFacts) {
      if (f.k !== 0) continue;
      const elim = pairsWhere(s, unplaced(s), j => cells[j]);
      if (!elim.length) continue;
      const cross = [...new Set(elim.map(([, i]) => i))];
      yield { elim, cross, text: `${factLabel(f)}: "${T.fact(f)}" So nobody can stand on the marked cells. Cross them out.` };
    }
  }

  // Lines xs (rows or columns by f) that still need someone, with all their open cells
  // in xs.length lines the other way (by g): nobody else stands in those.
  function fishMove(s, free, openIn, { kind, f, g, otherKind }, xs) {
    // (Every line that needs someone has open cells: these techniques see only boards that work.)
    const open = xs.flatMap(x => [...openIn(f, x)]);
    const ys = [...new Set(open.map(i => g(i)))].sort((a, b) => a - b);
    if (ys.length !== xs.length) return null;
    const elim = pairsWhere(s, free, i => ys.includes(g(i)) && !xs.includes(f(i)));
    if (!elim.length) return null;
    const name = (x, isF) => ((kind === 'Rows') === isF ? String(x + 1) : T.col(x));
    const xText = xs.map(x => name(x, true)).join(' and ');
    const yText = ys.map(y => name(y, false)).join(' and ');
    return { elim, cross: crossedCells(s, free, elim), text: `${kind} ${xText} still need someone. Their last open cells are all in ${otherKind} ${yText}. ` +
      `Each of these ${kind.toLowerCase()} needs one person, so together they take ${otherKind} ${yText}. ` +
      `So nobody else can stand in ${otherKind} ${yText}: cross out the rest of them.` };
  }

  // k rows that still need someone, whose open cells all lie in the same k columns:
  // their people take those columns, so nobody else stands in them (and the same for columns).
  function* lineFish(s) {
    const free = unplaced(s);
    const openIn = (f, x) => {
      const o = new Set();
      // (coverage: runs so often that its counter overflows)
      /* v8 ignore next */
      for (const q of free) for (const i of s.cand[q]) if (f(i) === x) o.add(i);
      return o;
    };
    for (const [kind, f, g, otherKind] of [['Rows', row, col, 'columns'], ['Columns', col, row, 'rows']]) {
      const need = [...new Array(n).keys()].filter(x => !s.pos.some(i => i >= 0 && f(i) === x));
      for (const k of [2, 3]) for (const xs of combos(need, k)) {
        const move = fishMove(s, free, openIn, { kind, f, g, otherKind }, xs);
        if (move) yield move;
      }
    }
  }

  // Open cells for the people a count fact still misses: not on rows or columns of the sure ones.
  function missingOpen(s, free, sure, cells) {
    const oneLine = (q, f) => { const xs = new Set([...s.cand[q]].map(i => f(i))); return xs.size === 1 ? [...xs] : []; };
    const sureRows = new Set(sure.flatMap(q => oneLine(q, row)));
    const sureCols = new Set(sure.flatMap(q => oneLine(q, col)));
    const open = new Set();
    for (const q of free) if (!sure.includes(q)) for (const i of s.cand[q]) if (cells[i] && !sureRows.has(row(i)) && !sureCols.has(col(i))) open.add(i);
    return open;
  }

  // Text of a count-lines step.
  function countLineText(f, there, missing, kind, lines, open) {
    const where = f.t === 'roomCount' ? T.room([...open][0]) : 'the marked area';
    const names = lines.map(x => (kind === 'row' ? String(x + 1) : T.col(x)));
    const plural = lines.length > 1 ? 's' : '';
    const lineText = `${kind}${plural} ${names.join(' and ')}`;
    const thereText = there.length ? `${T.people(there)} ${isAre(there.length)} there. ` : '';
    const more = missing === 1 ? 'one more person' : `${missing} more people`;
    const take = missing === 1 ? 'that person takes' : 'they take';
    return `${factLabel(f)}: "${T.fact(f)}" ` + thereText +
      `So ${more} must be in ${where}. ` +
      `The last open cells there are all in ${lineText}. So ${take} ${lineText}: ` +
      `nobody else can stand in ${lineText} outside ${where}.`;
  }

  // Moves of one count fact that still misses people (see countLines).
  function* countLineMoves(s, free, { f, cells }) {
    const placed = level.people.map((_, q) => q).filter(q => s.pos[q] >= 0 && cells[s.pos[q]]);
    const sure = free.filter(q => s.cand[q].size && [...s.cand[q]].every(i => cells[i]));
    const missing = f.k - placed.length - sure.length;
    if (missing < 1) return;
    const open = missingOpen(s, free, sure, cells);
    for (const [kind, g] of [['row', row], ['column', col]]) {
      const lines = [...new Set([...open].map(i => g(i)))].sort((a, b) => a - b);
      if (lines.length !== missing) continue;
      const elim = pairsWhere(s, free, i => lines.includes(g(i)) && !cells[i]);
      if (!elim.length) continue;
      yield { elim, cross: crossedCells(s, free, elim), text: countLineText(f, [...placed, ...sure], missing, kind, lines, open) };
    }
  }

  // A count fact still missing m people, whose open cells lie in just m rows (or columns):
  // those rows go to the missing people, so nobody stands there outside the fact's cells.
  function* countLines(s) {
    const free = unplaced(s);
    for (const fc of countFacts) if (fc.f.k) yield* countLineMoves(s, free, fc);
  }

  // Person p on two cells in different rows and columns: the corner cells of the two are out.
  function crossMove(s, free, p) {
    if (s.cand[p].size !== 2) return null;
    const [a, b] = [...s.cand[p]];
    if (row(a) === row(b) || col(a) === col(b)) return null;
    const corners = [row(a) * n + col(b), row(b) * n + col(a)];
    const elim = [];
    for (const q of free) if (q !== p) for (const i of corners) if (s.cand[q].has(i)) elim.push([q, i]);
    if (!elim.length) return null;
    const cells = [...new Set(elim.map(([, i]) => i))];
    const one = cells.length === 1;
    return { elim, text: `${T.name(p)} is on ${T.cell(a)} or ${T.cell(b)}. ${listText(cells.map(i => T.cell(i)))} ${one ? 'shares' : 'share'} a row or column with both. ` +
      `So whoever stood there would block ${T.name(p)}. Cross ${one ? 'it' : 'them'} out.` };
  }

  // A person with exactly two cells in different rows and columns:
  // the two cells where their lines cross can hold nobody.
  function* twoCellCross(s, only = null) {
    const free = unplaced(s);
    for (const p of only === null ? free : [only]) {
      const move = crossMove(s, free, p);
      if (move) yield move;
    }
  }

  // Line x with one open cell c: everyone in its row (or column) blocks it. One step for all.
  function oneCellMove(s, free, { kind, f, g, other, num }, x, open, c) {
    const users = new Set(open.map(([q]) => q));
    const elim = pairsWhere(s, free, (i, p) => f(i) !== x && g(i) === g(c) && !(users.size === 1 && users.has(p)));
    if (!elim.length) return null;
    return { elim, text: `${kind} ${num} still needs someone. Its last open cell is ${T.cell(c)}. ` +
      `Anyone on a marked cell would block ${T.cell(c)} (same ${other}). So nobody can stand there.` };
  }

  // Why q can not use p's cells (own, all in one room or not): a quiet clue still to tell, or the room.
  function whyNotThere(s, q, pending, rooms, own) {
    if (pending.has(q)) { const r = pending.get(q); pending.delete(q); return r; }
    if (rooms.size === 1 && ![...s.cand[q]].some(i => area[i] === [...rooms][0])) return `${T.name(q)} can not be in ${T.room(own[0])}.`;
    return null;
  }

  // Text of a line-needs step for person p. pending: quiet clues the story still has to tell.
  function lineNeedText(s, { kind, other, label, num }, { p, own, rest, cells, others }, pending) {
    const ownText = listText(own.map(i => T.cell(i)));
    const rooms = new Set(own.map(i => area[i]));
    // p's own quiet clue first, then why the others can not use p's cells.
    const why = [p, ...others].map(q => whyNotThere(s, q, pending, rooms, own)).filter(Boolean);
    const because = why.length ? ` Remember: ${why.join(' ')}` : '';
    // Here the line has 2 or 3 open cells (one cell is the case above).
    if (!rest.length) {
      return `${T.name(p)} is the only one who can be in ${label}.${because} ` +
        `${kind} ${num} still needs someone. Its last open cells are ${ownText}, so ${T.name(p)} must be on one of them. ` +
        `Drop ${T.name(p)} from the marked cells in other ${kind === 'Row' ? 'rows' : 'columns'}.`;
    }
    return `${kind} ${num} still needs someone. Its last open cells are ${listText(cells.map(i => T.cell(i)))}. ` +
      `Only ${T.name(p)} can use ${ownText}, so ${T.cell(rest[0])} must not be blocked by ${T.name(p)}. Therefore ${T.name(p)} can not stand on the marked cells. ` +
      `${T.name(p)} on a marked cell would block ${T.cell(rest[0])} (same ${other}), and ${ownText} would stay empty.${because}`;
  }

  // p on a cell outside line x that leaves the line empty: the cells only p can use stay
  // empty, and the rest share a row (or column) with it. Null if p has no such cell.
  function blockLineMove(s, free, line, p, open, cells) {
    const { f, g, x } = line;
    const bad = [...s.cand[p]].filter(i => f(i) !== x && !open.some(([q, j]) => q !== p && g(j) !== g(i)));
    if (!bad.length) return null;
    const own = cells.filter(j => open.every(([q, k]) => k !== j || q === p));
    const rest = cells.filter(j => !own.includes(j)); // at most one cell
    const others = free.filter(q => q !== p);
    const explain = pending => lineNeedText(s, line, { p, own, rest, cells, others }, pending);
    return { elim: bad.map(i => [p, i]), explain, text: explain(new Map()) };
  }

  // Moves for line x that still needs someone and has 1 to 3 open cells.
  function* lineNeedMoves(s, free, line, x) {
    const open = pairsWhere(s, free, i => line.f(i) === x); // [person, cell] still possible in this line
    const cells = [...new Set(open.map(([, i]) => i))].sort((a, b) => a - b);
    if (!cells.length || cells.length > 3) return;
    const num = line.kind === 'Row' ? x + 1 : T.col(x);
    const here = { ...line, x, num, label: `${line.kind.toLowerCase()} ${num}` };
    if (cells.length === 1) {
      const move = oneCellMove(s, free, here, x, open, cells[0]);
      if (move) yield move;
      return;
    }
    for (const p of free) {
      const move = blockLineMove(s, free, here, p, open, cells);
      if (move) yield move;
    }
  }

  // A row (or column) that still needs someone keeps its last open cells free:
  // a placement that would block all of them is out.
  function* lineNeeds(s) {
    const free = unplaced(s);
    for (const [kind, f, g, other] of [['Row', row, col, 'column'], ['Column', col, row, 'row']]) {
      for (let x = 0; x < n; x++) {
        if (!s.pos.some(i => i >= 0 && f(i) === x)) yield* lineNeedMoves(s, free, { kind, f, g, other }, x);
      }
    }
  }

  // Lines g (rows or columns by f) that only g.length people can reach: those people are in them.
  function hiddenMove(s, free, kind, f, g) {
    const who = free.filter(p => [...s.cand[p]].some(i => g.includes(f(i))));
    if (who.length !== g.length) return null;
    const elim = pairsWhere(s, who, i => !g.includes(f(i)));
    if (!elim.length) return null;
    const xs = g.map(x => (kind === 'rows' ? String(x + 1) : T.col(x)));
    const Kind = `${kind[0].toUpperCase()}${kind.slice(1)}`;
    return { elim, text: `${Kind} ${xs.join(' and ')} still need someone, and only ${T.people(who)} can get there. So ${T.people(who)} are in ${kind} ${xs.join(' and ')}.` };
  }

  // k empty rows (or columns) that only k people can reach: those people are in them.
  function* hiddenGroups(s) {
    const free = unplaced(s);
    for (const [kind, f] of [['rows', row], ['columns', col]]) {
      const open = [...new Array(n).keys()].filter(x => !s.pos.some(i => i >= 0 && f(i) === x));
      for (const k of [2, 3]) for (const g of combos(open, k)) {
        const move = hiddenMove(s, free, kind, f, g);
        if (move) yield move;
      }
    }
  }

  // ---- rooms someone is surely in ----

  // The area p is surely in, or null.
  function sureArea(s, p) {
    if (s.pos[p] >= 0) return area[s.pos[p]];
    const as = new Set([...s.cand[p]].map(i => area[i]));
    return as.size === 1 ? [...as][0] : null;
  }

  // A person who must be alone stays out of a room someone else surely is in.
  function* aloneConfined(s, free, sure) {
    for (const p of free) {
      if (!alone[p]) continue;
      for (let q = 0; q < P; q++) {
        if (q === p || sure[q] === null || s.pos[q] >= 0) continue;
        const elim = [...s.cand[p]].filter(i => area[i] === sure[q]).map(i => [p, i]);
        if (elim.length) yield { elim, text: `${T.name(q)} can only be in ${T.room([...s.cand[q]][0])}. ${T.name(p)} was alone in a room. So ${T.name(p)} is not there.` };
      }
    }
  }

  // The victim's room holds exactly two: once two are sure, nobody else goes in.
  function* victimConfined(s, free, sure) {
    const v = sure[victim];
    if (v === null) return;
    const mates = level.people.map((_, q) => q).filter(q => q !== victim && sure[q] === v);
    if (mates.length !== 1) return;
    const elim = pairsWhere(s, free.filter(q => q !== mates[0] && q !== victim), i => area[i] === v);
    if (!elim.length) return;
    const at = s.pos[victim] >= 0 ? s.pos[victim] : [...s.cand[victim]][0];
    yield { elim, text: `${T.name(victim)} and ${T.name(mates[0])} are surely in ${T.room(at)}. The victim was alone with the murderer. So nobody else is there.` };
  }

  // Someone who can only be in one room is surely there. Use that for the room rules.
  function* confinedRooms(s) {
    const free = unplaced(s);
    const sure = level.people.map((_, p) => sureArea(s, p));
    yield* aloneConfined(s, free, sure);
    yield* victimConfined(s, free, sure);
  }

  // ---- choosing moves ----

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

  // Moves of one tier that pass ok, at most cap, each with the name of its technique.
  function tierMoves(st, tier, ok, cap) {
    const moves = [];
    for (const t of tier) {
      for (const m of t(st)) {
        if (!ok(m)) continue;
        moves.push({ ...m, tech: t.name });
        if (moves.length >= cap) return moves;
      }
    }
    return moves;
  }

  // The move that crosses out the most cells (the first one on a tie).
  function widest(st, moves) {
    let best = moves[0], score = -1;
    for (const m of moves) {
      const c = crossedBy(st, m);
      if (c > score) { best = m; score = c; }
    }
    return best;
  }

  // The best move of the first level that has any.
  // ok: only moves that pass this test (e.g. leave a person at most 5 cells).
  // maxTier: stop before tries (3) when a simpler step may still come.
  const bestMove = (st, ok = () => true, maxTier = Infinity) => {
    for (const [lvl, tier] of TIERS.entries()) {
      if (lvl > maxTier) break;
      const moves = tierMoves(st, tier, ok, lvl >= 3 ? 1 : 40); // tries are slow: take the first
      if (moves.length) return widest(st, moves);
    }
    return null;
  };

  // Follow the easy steps until something breaks. trail collects the forced placements.
  // Each step takes cells away, so this ends.
  function settle(s, trail = []) {
    for (;;) {
      const why = broken(s);
      if (why) return why;
      let move = null;
      for (const t of EASY) {
        move = first(t(s));
        if (move) break;
      }
      if (!move) return null;
      if (move.place) trail.push(`${T.name(move.place.p)} must stand on ${T.cell(move.place.i)}`);
      apply(s, move);
    }
  }

  // Try each cell of person p. Cells that break are out. Null if none breaks.
  function tryMove(s, p) {
    const bad = [];
    let example = null;
    for (const i of s.cand[p]) {
      const t = clone(s);
      apply(t, { place: { p, i } });
      const trail = [];
      const why = settle(t, trail);
      if (!why) continue;
      bad.push(i);
      // Prefer the shortest chain as the example: it is the easiest to follow.
      if (!example || trail.length < example.trail.length) example = { i, why, trail };
    }
    if (!bad.length) return null;
    const cells = bad.map(i => T.cell(i));
    // Tell the chain forward: what would follow, and what breaks.
    const chain = [...example.trail.slice(0, 3), example.why].join(', then ');
    const head = `If ${T.name(p)} stood on ${T.cell(example.i)}, then ${chain}.`;
    const text = bad.length === 1
      ? `${head} So ${T.name(p)} is not on ${cells[0]}.`
      : `${head} The same happens on ${listText(cells.filter(c => c !== T.cell(example.i)))}. So ${T.name(p)} is not on ${listText(cells)}.`;
    return { elim: bad.map(i => [p, i]), text, trial: true };
  }

  // Try each cell of one person. Cells that break are out.
  function* tryCells(s) {
    const free = unplaced(s).sort((a, b) => s.cand[a].size - s.cand[b].size);
    for (const p of free) {
      const move = tryMove(s, p);
      if (move) yield move;
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

  // Every person on every cell that is not blocked.
  function startState() {
    const st = { pos: new Array(P).fill(-1), cand: [] };
    for (let p = 0; p < P; p++) {
      const c = new Set();
      for (let i = 0; i < N; i++) if (!blocking.has(level.objects[i])) c.add(i);
      st.cand.push(c);
    }
    return st;
  }

  // Start from the player's board: their people, crosses and "cannot be here" notes.
  function applyStart() {
    for (let p = 0; p < P; p++) for (const i of start.out[p]) s.cand[p].delete(i);
    for (const i of start.crossed) { known.add(i); for (const c of s.cand) c.delete(i); }
    start.pos.forEach((i, p) => { if (i >= 0) apply(s, { place: { p, i } }); });
    start.pos.forEach(i => {
      if (i < 0) return;
      for (let j = 0; j < N; j++) if (row(j) === row(i) || col(j) === col(i)) known.add(j);
    });
  }

  // Why p's own clues and rules leave them only some cells.
  function clueReasons(p, mine) {
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
    return reasons;
  }

  // 1. What each person's own clues and rules allow (when they rule something out),
  // fewest cells first. Also fills clueOf[p]: { cells, reasons }.
  function ownClueDomains() {
    const out = [];
    for (let p = 0; p < P; p++) {
      const mine = level.clues.filter(cl => cl.p === p && UNARY.has(cl.t));
      const cells = [...s.cand[p]].filter(i => cellOk(level, blocking, p, i) && mine.every(cl => unaryOk(level, blocking, cl, i)));
      if (cells.length === s.cand[p].size) continue;
      const reasons = clueReasons(p, mine);
      out.push({ p, cells, reasons });
      clueOf[p] = { cells: new Set(cells), reasons };
    }
    return out.sort((a, b) => a.cells.length - b.cells.length);
  }

  // Steps from the board as it is, by the techniques of the first three tiers (not "nobody" facts).
  // The same result from another technique is another way to see it: keep both.
  function ownMoves(before) {
    const seen = new Set();
    const own = [];
    TIERS.slice(0, 3).forEach((tier, lvl) => tier.forEach(t => {
      if (t === zeroFacts) return;
      for (const m of t(s)) {
        const key = `${t.name}:${JSON.stringify(m.place || m.elim)}`;
        if (seen.has(key)) continue;
        seen.add(key);
        own.push({ m: { ...m, before }, lvl, c: crossedBy(s, m) });
      }
    }));
    return own.sort((a, b) => a.lvl - b.lvl || b.c - a.c);
  }

  // Hints from the player's board use only what it shows. A person's clues count
  // once the player has noted them, so noting a person's cells is a step of its own.
  function boardOptions() {
    const before = snap(s);
    // "Nobody" facts: cross out their cells.
    const zero = [...zeroFacts(s)].map(m => ({ ...m, before }));
    // Each person's own clues: note where they can be. Few cells first; those that
    // also cross out a row or column (or more) before others.
    const clueSteps = firstDomains.map(d => ({ ...withClaim(s, { allowed: { p: d.p, cells: d.cells }, about: [d.p],
      text: `${d.reasons.join(' ')} So ${T.name(d.p)} can only be on the marked cells.` }), before }));
    const sharp = clueSteps.filter(worthIt)
      .sort((a, b) => crossedBy(s, b) - crossedBy(s, a) || a.allowed.cells.length - b.allowed.cells.length);
    const vague = clueSteps.filter(m => !worthIt(m)).sort((a, b) => a.allowed.cells.length - b.allowed.cells.length);
    // Not again what a "nobody" fact already crosses out.
    const zeroCells = new Set(zero.flatMap(m => m.cross));
    const fresh = ownMoves(before).map(x => x.m).filter(m => !(m.elim && !m.place && m.elim.every(([, i]) => zeroCells.has(i))));
    const ownSteps = keepGood(fresh).map(finish);
    // Steps that place someone or cross out a cell come before noting a person with many cells.
    // Steps that only take a cell from someone's notes come after.
    const strong = m => !!(m.place || m.cross?.length);
    return [...zero, ...sharp, ...ownSteps.filter(strong), ...vague, ...ownSteps.filter(m => !strong(m))];
  }

  // Note each person's own clues. Steps that leave more than 5 cells wait (deferred)
  // until other steps make them sharper. False if the step limit was reached.
  function clueStepsFirst(deferred) {
    for (const d of firstDomains) {
      if (done()) return false;
      const move = clueMove(d);
      if (!move) continue;
      if (!options && move.allowed.cells.length > MAX_CELLS) { deferred.push(d); continue; }
      steps.push({ ...move, before: snap(s) });
      apply(s, move);
      (move.cross || []).forEach(i => known.add(i)); // already crossed: not again later
    }
    return true;
  }

  // 2. Cells nobody can use.
  function emptyCellStep() {
    const used = new Set();
    for (const c of s.cand) for (const i of c) used.add(i);
    const empty = [...new Array(N).keys()].filter(i => !blocking.has(level.objects[i]) && !used.has(i) && !known.has(i) && !s.pos.includes(i));
    if (empty.length && !done()) steps.push({ cross: empty, before: snap(s), text: 'The clues and notes of everyone still open leave these cells out. So nobody can stand there. Cross them out.' });
  }

  // Up to max moves of these techniques on the board as it is.
  function collectMoves(techs, max) {
    const out = [];
    for (const t of techs) {
      for (const m of t(s)) {
        out.push({ ...m, before: snap(s) });
        if (out.length >= max) return out;
      }
    }
    return out;
  }

  // Nothing easy from the player's board: tries, then the full search.
  function hardOptions() {
    const tries = collectMoves([tryCells], 8);
    if (tries.length) return keepGood(tries);
    return collectMoves(deep ? [deepTry] : [], 1);
  }

  // A waiting clue step that is sharp enough now (5 cells or fewer), else null.
  // last: take the sharpest one anyway.
  function takeDeferred(deferred, last) {
    let best = null, bi = -1;
    for (let k = deferred.length - 1; k >= 0; k--) {
      const m = clueMove(deferred[k]);
      if (!m) { deferred.splice(k, 1); continue; }
      if (!best || m.allowed.cells.length < best.allowed.cells.length) { best = m; bi = k; }
    }
    if (!best || (!last && best.allowed.cells.length > MAX_CELLS)) return null;
    deferred.splice(bi, 1);
    return best;
  }

  // The next move of the story, or null when none is left. Order: sharp clue step,
  // simple step, any clue step (quietly), then tries. A quiet clue step is used
  // here and gives 'quiet'.
  function pickMove(deferred, pending) {
    const move = takeDeferred(deferred, false) || bestMove(s, worthIt, 2);
    if (move) return move;
    // Only clue steps with more than 5 cells are left (sharper ones came first):
    // use one quietly, and say it with the first step about that person.
    const vague = takeDeferred(deferred, true);
    if (vague) { apply(s, vague); pending.set(vague.allowed.p, vague.reason); return 'quiet'; }
    return bestMove(s, () => true, 2) || bestMove(s);
  }

  // The move with the quiet clues it needs told. A step that explains itself takes them itself.
  function withRecall(move, pending) {
    const m = move.explain ? { ...move, text: move.explain(pending) } : move;
    for (const q of m.cites || []) pending.delete(q); // the step says their clues itself
    if (m.explain) return m;
    const recall = [];
    for (const q of involved(m)) if (pending.has(q)) { recall.push(pending.get(q)); pending.delete(q); }
    // One "Remember:" when the step starts with its own.
    if (!recall.length) return m;
    return { ...m, text: `Remember: ${recall.join(' ')} ${m.text.replace(/^Remember: /, '')}` };
  }

  // 3. Loop until everyone is placed.
  function story(deferred) {
    // Clues used quietly (more than 5 cells): told in the first step about that person.
    const pending = new Map();
    for (let guard = 0; guard < 2000 && unplaced(s).length && !done(); guard++) {
      const picked = pickMove(deferred, pending);
      if (picked === 'quiet') continue;
      if (!picked) break;
      const move = withRecall(withClaim(s, finish(picked)), pending);
      steps.push({ ...move, people: involved(move).size, before: snap(s) });
      apply(s, move);
      (move.cross || []).forEach(i => known.add(i)); // already crossed: not again later
    }
  }

  // "Nobody" facts first: they cross out cells right away.
  function zeroFactSteps() {
    const zero = [...zeroFacts(s)]; // all found first: applying one changes the board
    for (const m of zero) { steps.push({ ...m, before: snap(s) }); apply(s, m); m.cross.forEach(i => known.add(i)); }
  }

  // 4. Name the murderer (a full solution always has one).
  function nameMurderer() {
    if (unplaced(s).length || done()) return;
    const k = murdererOf(level, s.pos);
    steps.push({
      before: snap(s), done: true,
      text: `Everyone is placed. ${T.name(victim)} is in ${T.room(s.pos[victim])} with only ${T.name(k)}. So ${T.name(k)} did it.`,
    });
  }

  const steps = [];
  const s = startState();
  const known = new Set(); // cells the player already sees as empty
  if (start) applyStart();
  const done = () => steps.length >= limit;
  const firstDomains = ownClueDomains();
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
  // A step that leaves one person a single cell also places them.
  const finish = m => {
    if (m.place || !m.elim) return m;
    const ps = new Set(m.elim.map(([q]) => q));
    if (ps.size !== 1) return m;
    const [p] = ps;
    const out = new Set(m.elim.map(([, i]) => i));
    const left = [...s.cand[p]].filter(i => !out.has(i));
    if (left.length !== 1) return m;
    return { ...m, place: { p, i: left[0] }, about: m.about || [p],
      text: `${m.text} Now ${T.name(p)} has only one cell left: ${T.cell(left[0])}. Place ${T.name(p)} there.` };
  };
  // A clue step for one person, on top of what is known now (null if it adds nothing).
  const clueMove = d => {
    const cells = d.cells.filter(i => s.cand[d.p].has(i));
    if (s.pos[d.p] >= 0 || cells.length === s.cand[d.p].size) return null;
    return withClaim(s, { allowed: { p: d.p, cells }, about: [d.p], reason: d.reasons.join(' '), text: `${d.reasons.join(' ')} So ${T.name(d.p)} can only be on the marked cells.` });
  };
  // People a step is about, or whose limits it relies on.
  const involved = m => new Set([m.allowed?.p, m.place?.p, ...(m.elim || []).map(([q]) => q), ...(m.uses || [])].filter(q => q !== undefined));

  if (options) {
    const all = boardOptions();
    if (all.length) return all;
  }
  if (!options) zeroFactSteps();
  const deferred = [];
  if (!clueStepsFirst(deferred)) return steps;
  emptyCellStep();
  // From the player's board: the cells nobody can use, else tries, then the full search.
  if (options) return steps.length ? steps : hardOptions();
  story(deferred);
  nameMurderer();
  return steps;
}

function combos(arr, k, start = 0, pick = [], out = []) {
  if (pick.length === k) { out.push(pick.slice()); return out; }
  for (let j = start; j < arr.length; j++) { pick.push(arr[j]); combos(arr, k, j + 1, pick, out); pick.pop(); }
  return out;
}

function listText(items) {
  return items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items.at(-1)}`;
}

// Plain text helpers, for checks where nobody reads the text.
function plainText(level) {
  return {
    name: p => level.people[p].name, cell: String, col: String,
    room: i => String(level.rooms[i]), rooms: () => '', clue: () => '', people: () => '', fact: () => '',
  };
}

// "What if" steps a case may need, per board size. Fewer means easier hints.
export const MAX_TRIES = { 4: 0, 5: 0, 6: 0, 7: 1, 8: 1, 9: 2, 10: 2, 11: 3, 12: 3 };

// How many short tries ("what if" steps) the deduction needs to solve the case.
// -1 if it can not solve it without the long-chain fallback.
export function trialCount(level, blocking) {
  const steps = deduce(level, blocking, plainText(level), { deep: false });
  const last = steps.at(-1);
  if (!last?.done || !last.before.pos.every((i, p) => i === level.solution[p])) return -1;
  return steps.filter(st => st.trial).length;
}

// Weight of each kind of step: how hard it is for a person to see.
// Steps without a technique (clue notes, crossed cells, the end) weigh 1.
export const STEP_WEIGHTS = {
  single: 1, onlyInLine: 1, claimLine: 1, twoCellCross: 1, zeroFacts: 1,
  roomRules: 2, confinedRooms: 2,
  personNeeds: 3, lineNeeds: 3, countLines: 3,
  lineGroups: 4, lineFish: 4, hiddenGroups: 4,
  tryCells: 6, deepTry: 10,
};

// Weight of one step. Each person beyond three that the step relies on adds 1.
export function stepWeight(step) {
  if (step.done) return 0;
  return (STEP_WEIGHTS[step.tech] ?? 1) + Math.max(0, (step.people ?? 0) - 3);
}

// How hard the case is for a person: the sum of all step weights,
// the hardest step that is not a try, the steps of weight 3 or more
// that are not tries, and the tries.
// null if the deduction can not solve it without the long-chain fallback.
export function caseScore(level, blocking) {
  const steps = deduce(level, blocking, plainText(level), { deep: false });
  const last = steps.at(-1);
  if (!last?.done || !last.before.pos.every((i, p) => i === level.solution[p])) return null;
  const weights = steps.map(stepWeight);
  const logic = steps.filter(st => !st.trial).map(stepWeight);
  return {
    score: weights.reduce((a, b) => a + b, 0),
    hardest: Math.max(...logic),
    hard: logic.filter(w => w >= 3).length,
    tries: steps.filter(st => st.trial).length,
    steps: steps.length,
  };
}

// True if the deduction solves the case with easy steps and at most
// maxTries short tries, without the long-chain fallback.
export function isDeducible(level, blocking, maxTries = MAX_TRIES[level.size]) {
  const k = trialCount(level, blocking);
  return k >= 0 && k <= maxTries;
}
