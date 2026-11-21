// Rules and solver: right boards pass, wrong boards show their problems.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  solve, boardRuleProblems, clueState, unaryOk, murdererOf, banditSet, factValue, factHolds,
  allFacts, taskFacts, victimIndex, CELL_FACTS, factCells, hasRule,
} from '../../js/rules.js';
import { encodeLevel, decodeLevel } from '../../js/levelCodec.js';
import { sampleLevels, rng } from './helpers.js';

test('every sample case: the solution breaks no rule, and the codec keeps it', () => {
  for (const { label, theme, blocking, level } of sampleLevels()) {
    assert.deepEqual(boardRuleProblems(level, level.solution), [], label);
    for (const cl of level.clues) assert.notEqual(clueState(level, blocking, cl, level.solution), false, `${label} ${cl.t}`);
    for (const f of allFacts(level)) assert.ok(factHolds(level, f, level.solution), `${label} ${f.t}`);
    assert.ok(murdererOf(level, level.solution) >= 0, label);
    if (hasRule(level, 'bandits')) assert.ok(banditSet(level, level.solution), label);
    const raw = encodeLevel(theme, level);
    assert.deepEqual(encodeLevel(theme, decodeLevel(theme, raw)), raw, `${label}: codec`);
  }
});

test('random wrong boards: problems, clue states and fact values', () => {
  const r = rng(7);
  for (const { label, blocking, level } of sampleLevels()) {
    const N = level.size * level.size, P = level.people.length;
    let problems = 0;
    for (let k = 0; k < 400; k++) {
      // A random board, some people not placed yet.
      const pos = Array.from({ length: P }, () => (r(5) ? r(N) : -1));
      const full = pos.map(i => (i < 0 ? r(N) : i));
      problems += boardRuleProblems(level, full, p => `P${p}`, k2 => `R${k2}`).length;
      for (const cl of level.clues) {
        const s = clueState(level, blocking, cl, pos);
        assert.ok(s === true || s === false || s === null, `${label} ${cl.t}`);
      }
      for (const f of allFacts(level)) {
        const v = factValue(level, f, full);
        assert.ok(typeof v === 'number' || typeof v === 'boolean', `${label} ${f.t}`);
      }
      murdererOf(level, full);
      banditSet(level, full);
    }
    // boardRuleProblems checks these rules and the case facts.
    const checked = ['distance', 'couples', 'fullhouse', 'parity', 'river', 'tasks'].some(x => hasRule(level, x)) || level.facts.length;
    if (checked) assert.ok(problems > 0, `${label}: wrong boards show problems`);
  }
});

test('solver: limit, node budget and restricted cells', () => {
  const { level, blocking } = sampleLevels()[0];
  assert.equal(solve(level, blocking, { limit: 1 }).count, 1);
  assert.equal(solve(level, blocking, { maxNodes: 1 }).aborted, true);
  const restrict = level.solution.map(i => new Set([i]));
  assert.deepEqual(solve(level, blocking, { restrict }).first, level.solution);
  const wrong = level.solution.map((i, p) => new Set(p === 0 ? [level.solution[1]] : [i]));
  assert.equal(solve(level, blocking, { restrict: wrong }).count, 0);
});

test('small rule helpers', () => {
  const { level, blocking } = sampleLevels()[0];
  assert.equal(unaryOk(level, blocking, { p: 0, t: 'unknown' }, 0), true);
  assert.equal(factValue(level, { t: 'unknown' }, level.solution), null);
  assert.deepEqual(taskFacts(level), []);
  assert.ok(victimIndex(level) >= 0);
  assert.ok(CELL_FACTS.includes('edge'));
  assert.equal(factCells(level, { t: 'unknown' }).filter(Boolean).length, 0);
  // A clue about someone not placed yet is not decided.
  assert.equal(clueState(level, blocking, { p: 0, t: 'row', v: 0 }, level.solution.map(() => -1)), null);
});

test('edge cases: missing parts of a level count as empty', () => {
  const { level, blocking } = sampleLevels()[0];
  const bare = { ...level, facts: undefined, doors: undefined, windows: undefined, lawful: undefined, rules: ['tasks', 'bandits'], tasks: undefined, bandits: 1 };
  assert.deepEqual(allFacts(bare), []);
  assert.deepEqual(taskFacts(bare), []);
  assert.equal(unaryOk(bare, blocking, { p: 0, t: 'door' }, 0), false);
  assert.equal(unaryOk(bare, blocking, { p: 0, t: 'bandit' }, 0), true);
  assert.equal(clueState(bare, blocking, { p: 0, t: 'notBandit' }, level.solution), null);
  assert.equal(clueState(bare, blocking, { p: 0, t: 'withBandit' }, level.solution), null);
  // Two "is a bandit" clues, but only one bandit: no set fits.
  const two = { ...bare, clues: [{ p: 0, t: 'bandit' }, { p: 1, t: 'bandit' }] };
  assert.equal(banditSet(two, level.solution), null);
  assert.ok(banditSet({ ...bare, clues: [] }, level.solution));
});

test('edge cases: a north-south river counts people north of it', () => {
  const { level } = sampleLevels().find(x => x.label === 'river');
  const n = level.size;
  // Rows above the river: the top half of every column.
  const h = { ...level, river: { dir: 'h', cut: new Array(n).fill(n / 2), first: 99 } };
  assert.match(boardRuleProblems(h, level.solution).join(), /people would stand north of the river, not 99/);
  const v = { ...level, river: { ...level.river, dir: 'v', first: 99 } };
  assert.match(boardRuleProblems(v, level.solution).join(), /people would stand west of the river, not 99/);
});

test('solver: stops at the limit when there are many solutions', () => {
  const { level, blocking } = sampleLevels()[0];
  const open = { ...level, clues: [], facts: [], rules: [] };
  const res = solve(open, blocking, { limit: 3 });
  assert.equal(res.count, 3);
});

test('rule problems name people and rooms by default', () => {
  const { level } = sampleLevels().find(x => x.label === 'fullhouse');
  const crowded = level.solution.map((_, p) => level.solution[0] + (p % 2) * 0); // everyone on one cell
  const problems = boardRuleProblems(level, crowded);
  assert.ok(problems.some(t => new RegExp(`the (${level.roomNames.join('|')})`).test(t)));
  const couples = sampleLevels().find(x => x.label === 'couples').level;
  const apart = couples.solution.map((i, p) => (couples.couples[0].includes(p) ? couples.solution[couples.couples[0][0]] : i));
  assert.ok(boardRuleProblems(couples, apart).some(t => t.includes(couples.people[couples.couples[0][0]].name)));
});
