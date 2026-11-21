// Level generator: every special rule and every kind of case fact gives a
// working case, the difficulty range is kept, and the helpers do their job.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { themeById, blockingSet } from '../../js/themes.js';
import { solve, RULES } from '../../js/rules.js';
import { trialCount, MAX_TRIES } from '../../js/hints.js';
import {
  makeLevel, FACT_KINDS, DIFFICULTY, SIZES, difficultyIndex, campaignCaseName,
  unneededParts, peopleWithoutClue, murdererTooEasy, fitsLimit,
} from '../../js/generator.js';

import { themeFor, sampleLevels } from './helpers.js';

// A generated case must work: one solution, the stored one, every part needed,
// everyone (but the victim) has a clue, and the murderer is not obvious.
// maxTries: the "what if" limit the case was made with.
function assertWorks(theme, level, label, maxTries = Infinity) {
  const blocking = blockingSet(theme);
  const res = solve(level, blocking, { limit: 2 });
  assert.equal(res.count, 1, `${label}: one solution`);
  assert.deepEqual(res.first, level.solution, `${label}: stored solution`);
  assert.deepEqual(unneededParts(level, blocking, maxTries), [], `${label}: every part needed`);
  assert.deepEqual(peopleWithoutClue(level), [], `${label}: everyone has a clue`);
  assert.equal(murdererTooEasy(level, blocking), false, `${label}: murderer not obvious`);
  assert.equal(level.tries, trialCount(level, blocking), `${label}: stored tries`);
}

for (const rule of RULES) {
  test(`special rule ${rule}: the case works and needs the rule`, () => {
    const theme = themeFor([rule]);
    const level = makeLevel(theme, 6, 4242, [rule], null, { tries: { min: 0, max: Infinity } });
    assert.deepEqual(level.rules, [rule]);
    assertWorks(theme, level, rule);
  });
}

test('two special rules at once', () => {
  const theme = themeById('rift');
  const level = makeLevel(theme, 7, 77, ['ranks', 'sea'], null, { tries: { min: 0, max: Infinity } });
  assert.deepEqual(level.rules, ['ranks', 'sea']);
  assertWorks(theme, level, 'ranks+sea');
});

for (const kind of FACT_KINDS) {
  test(`case fact ${kind}: the case shows it`, () => {
    const rules = kind === 'apart' ? ['ranks'] : [];
    const theme = rules.length ? themeFor(rules) : themeById('manor');
    const level = makeLevel(theme, 6, 99, rules, [kind], { tries: { min: 0, max: Infinity } });
    assert.ok(level.facts.some(f => f.t === kind), `${kind} is in the case`);
    assertWorks(theme, level, kind);
  });
}

test('the campaign default keeps the "what if" limit of the board size', () => {
  const theme = themeById('train');
  const level = makeLevel(theme, 5, 5);
  assert.ok(level.tries <= MAX_TRIES[5]);
  assertWorks(theme, level, 'default', MAX_TRIES[5]);
});

test('each difficulty gets a case in its range', () => {
  const theme = themeById('manor');
  DIFFICULTY.slice(0, 4).forEach((d, g) => {
    const level = makeLevel(theme, 6, 10 + g, [], null, { tries: d });
    assert.equal(difficultyIndex(level.tries), g, d.name);
  });
});

test('no case in time: makeLevel gives up with an error', () => {
  assert.throws(() => makeLevel(themeById('manor'), 4, 1, [], null, { tries: DIFFICULTY[4], timeLimit: 0 }), /no level/);
});

test('difficulty names and case names', () => {
  assert.equal(difficultyIndex(0), 0);
  assert.equal(difficultyIndex(2), 1);
  assert.equal(difficultyIndex(4), 2);
  assert.equal(difficultyIndex(7), 3);
  assert.equal(difficultyIndex(99), 4);
  const levels = [{ group: 0 }, { group: 0 }, { group: 1 }, { extra: true }, { extra: true }];
  assert.equal(campaignCaseName(levels, 1), 'Beginner case 2');
  assert.equal(campaignCaseName(levels, 2), 'Medium case 1');
  assert.equal(campaignCaseName(levels, 4), 'Extra case 2');
  assert.deepEqual(SIZES, [4, 5, 6, 7, 8, 9, 10, 11, 12]);
});

test('the rules use other numbers on small, mid-sized and big boards', () => {
  // Courts, trades, tasks, couples, marked rooms, river sides and bandits depend on the size.
  for (const rule of ['ranks', 'trades', 'tasks', 'couples', 'parity', 'river', 'bandits']) {
    const theme = themeFor([rule]);
    for (const n of [5, 7, 9]) {
      const level = makeLevel(theme, n, 300 + n, [rule], null, { tries: { min: 0, max: Infinity }, timeLimit: 60000 });
      assert.equal(level.size, n, `${rule} ${n}×${n}`);
      // Big boards have several couples and marked rooms: each one is needed.
      if (n === 9) assert.deepEqual(unneededParts(level, blockingSet(theme), Infinity), [], `${rule} ${n}×${n}`);
    }
  }
  // Trades and tasks use a third set of numbers from 10×10 on.
  for (const rule of ['trades', 'tasks']) assert.equal(makeLevel(themeFor([rule]), 10, 31, [rule], null, { tries: { min: 0, max: Infinity } }).size, 10);
  // The sea has the name its theme gives it.
  assert.ok(makeLevel(themeById('reef'), 7, 7, ['sea'], null, { tries: { min: 0, max: Infinity } }).roomNames.includes('Open Sea'));
  const rift = makeLevel(themeById('rift'), 7, 7, ['sea', 'ranks'], null, { tries: { min: 0, max: Infinity } });
  assert.ok(rift.roomNames.includes('Sea of Ages'));
});

test('a same-room clue with the victim makes the murderer obvious', () => {
  const theme = themeById('manor'), blocking = blockingSet(theme);
  const level = makeLevel(theme, 5, 5);
  const v = level.people.findIndex(x => x.victim);
  const other = (v + 1) % level.people.length;
  assert.equal(murdererTooEasy({ ...level, clues: [...level.clues, { p: v, t: 'same', v: other }] }, blocking), true);
  assert.equal(murdererTooEasy({ ...level, clues: [...level.clues, { p: other, t: 'same', v }] }, blocking), true);
});

test('unneeded parts: an extra clue, fact, couple or mark is found', () => {
  const blocking = blockingSet(themeFor(['couples']));
  const couples = makeLevel(themeFor(['couples']), 6, 4242, ['couples'], null, { tries: { min: 0, max: Infinity } });
  // The same couple twice: one of them is not needed.
  assert.ok(unneededParts({ ...couples, couples: [couples.couples[0], ...couples.couples] }, blocking, Infinity).some(x => x.startsWith('couples')));
  // A second couple that does not fit the solution: the first one stays needed.
  const [a, b] = couples.couples[0];
  const other = couples.people.map((_, p) => p).filter(p => p !== a && p !== b).slice(0, 2);
  assert.ok(!unneededParts({ ...couples, couples: [couples.couples[0], other] }, blocking, Infinity).includes(`couples ${JSON.stringify(couples.couples[0])}`));
  // A clue twice, and a fact twice.
  const theme = themeById('manor');
  const level = makeLevel(theme, 6, 99, [], ['edge'], { tries: { min: 0, max: Infinity } });
  assert.ok(unneededParts({ ...level, clues: [level.clues[0], ...level.clues] }, blockingSet(theme), Infinity).some(x => x.startsWith('clue')));
  assert.ok(unneededParts({ ...level, facts: [level.facts[0], ...level.facts] }, blockingSet(theme), Infinity).some(x => x.startsWith('fact')));
  // A rule that is not needed.
  const parity = makeLevel(themeFor(['parity']), 6, 4242, ['parity'], null, { tries: { min: 0, max: Infinity } });
  assert.ok(unneededParts({ ...parity, rules: ['parity', 'distance'] }, blockingSet(themeFor(['parity'])), Infinity).includes('rule distance') ||
    unneededParts({ ...parity, parity: [...parity.parity, parity.parity[0]] }, blockingSet(themeFor(['parity'])), Infinity).length > 0);
});

test('fitsLimit: a number of tries, or a group with its step budget', () => {
  const { level, blocking } = sampleLevels()[0];
  assert.equal(fitsLimit(level, blocking, Infinity), true);
  assert.equal(fitsLimit(level, blocking, { max: Infinity }), true);
  assert.equal(fitsLimit(level, blocking, DIFFICULTY[4]), true);
  // Too many hard steps, or a step too heavy.
  assert.equal(fitsLimit(level, blocking, { max: Infinity, hard: -1 }), false);
  assert.equal(fitsLimit(level, blocking, { max: Infinity, hardest: 0 }), false);
});
