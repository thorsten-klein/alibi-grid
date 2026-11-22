// Theme texts: every kind of clue, case fact and special rule reads right.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  THEMES, themeById, themeRules, blockingSet, article, colName, clueText, factText, ruleText, TRADES, tradeById,
} from '../../js/themes.js';

const theme = themeById('manor');
const level = {
  people: [{ name: 'Alma' }, { name: 'Basil' }, { name: 'Vera', victim: true }],
  roomNames: ['Cellar', 'Library'],
};

test('every clue kind has its text', () => {
  const t = cl => clueText(theme, level, { p: 0, ...cl });
  assert.equal(t({ t: 'room', v: 1 }), 'Alma was in the Library.');
  assert.equal(t({ t: 'notRoom', v: 0 }), 'Alma was not in the Cellar.');
  assert.equal(t({ t: 'on', v: 'sofa' }), `Alma ${theme.objects.sofa.on}.`);
  assert.equal(t({ t: 'next', v: 'piano' }), 'Alma was right next to a piano.');
  assert.equal(t({ t: 'row', v: 2 }), 'Alma was in row 3.');
  assert.equal(t({ t: 'col', v: 1 }), 'Alma was in column B.');
  assert.equal(t({ t: 'same', v: 1 }), 'Alma was in the same room as Basil.');
  assert.equal(t({ t: 'alone' }), 'Alma was alone in a room.');
  assert.equal(t({ t: 'door' }), 'Alma was in front of a door.');
  assert.equal(t({ t: 'window' }), 'Alma was in front of a window.');
  assert.equal(t({ t: 'bandit' }), 'Alma was a bandit.');
  assert.equal(t({ t: 'notBandit' }), 'Alma was not a bandit.');
  assert.equal(t({ t: 'withBandit' }), 'Alma was in the same room as a bandit.');
  assert.equal(t({ t: 'task', v: 'hunter' }), 'Alma was a hunter.');
  assert.equal(t({ t: 'taskEither', v: ['fisher', 'healer'] }), 'Alma was a fisher or a healer.');
  assert.equal(t({ t: 'noTask' }), 'Alma had no task.');
  assert.equal(t({ t: 'unknown' }), '');
});

test('every case fact kind has its text, for 0, 1 and more people', () => {
  const f = (t, k, v) => factText(theme, level, { t, k, v });
  assert.equal(f('onCount', 0, 'sofa'), `Nobody ${theme.objects.sofa.on}.`);
  assert.match(f('onCount', 2, 'sofa'), /^Exactly 2 people /);
  assert.equal(f('nextCount', 1, 'piano'), 'Only one person was right next to a piano.');
  assert.equal(f('nextCount', 3, 'piano'), 'Exactly 3 people were right next to a piano.');
  assert.equal(f('roomCount', 0, 1), 'Nobody was in the Library.');
  assert.equal(f('furniture', 2), 'Exactly 2 people were on a piece of furniture.');
  assert.equal(f('edge', 1), 'Only one person stood along the outer wall.');
  assert.equal(f('corner', 0), 'Nobody stood in a corner of a room.');
  assert.equal(f('doorCount', 3), 'Exactly 3 people were in front of a door.');
  assert.equal(f('windowCount', 0), 'Nobody was in front of a window.');
  assert.equal(f('alone', 2), 'Exactly 2 people were alone in a room.');
  assert.equal(f('emptyRooms', 0), 'No room was empty.');
  assert.equal(f('emptyRooms', 1), 'Exactly one room was empty.');
  assert.equal(f('emptyRooms', 2), 'Exactly 2 rooms were empty.');
  assert.equal(f('touch', 0), 'No two people in one room touched at a corner.');
  assert.equal(f('touch', 1), 'Exactly one pair of people in one room touched at a corner.');
  assert.equal(f('touch', 2), 'Exactly 2 pairs of people in one room touched at a corner.');
  assert.equal(f('task', 1, 'hunter'), 'There was exactly one hunter.');
  assert.equal(f('task', 2, 'fisher'), 'There were exactly 2 fishers.');
  assert.equal(f('apart', undefined, 'rank'), 'No two people of the same rank were in the same room.');
  assert.equal(f('apart', undefined, 'trade'), 'No two people with the same trade were in the same room.');
  assert.equal(f('unknown', 1), '');
});

test('every special rule has its text, with and without case details', () => {
  for (const r of ['ranks', 'trades', 'glyphs', 'sea', 'tasks', 'distance', 'fullhouse', 'couples', 'river', 'parity', 'bandits']) {
    assert.ok(ruleText(r).length > 10, r);
  }
  assert.equal(ruleText('unknown'), '');
  const lv = {
    people: [{ name: 'Alma' }, { name: 'Basil' }, { name: 'Celia' }],
    tasks: [['hunter', 1], ['fisher', 2]],
    couples: [[0, 1]],
    bandits: 1,
  };
  assert.match(ruleText('tasks', lv), /there were 1 🏹 hunter, 2 🎣 fishers\./);
  assert.match(ruleText('couples', lv), /Alma and Basil stand diagonally/);
  assert.match(ruleText('bandits', lv), /exactly 1 person was a bandit/);
  assert.match(ruleText('bandits', { ...lv, bandits: 2 }), /exactly 2 people were bandits/);
  assert.match(ruleText('river', { ...lv, river: { dir: 'v', first: 1 } }), /1 person stands west \(left\) of the river, 2 east/);
  assert.match(ruleText('river', { ...lv, river: { dir: 'h', first: 2 } }), /2 people stand north \(above\) of the river, 1 south/);
});

test('themes, objects and small helpers', () => {
  assert.equal(THEMES.length, 41);
  for (const t of THEMES) {
    assert.equal(themeById(t.id), t);
    assert.ok(blockingSet(t).size > 0, t.id);
  }
  assert.equal(themeById('nope'), undefined);
  assert.deepEqual(themeRules(themeById('manor')), []);
  assert.deepEqual(themeRules(themeById('castle')), ['ranks']);
  assert.ok(themeRules(themeById('rift')).length > 2);
  assert.equal(article('apple'), 'an apple');
  assert.equal(article('sofa'), 'a sofa');
  assert.equal(colName(0), 'A');
  assert.equal(tradeById(TRADES[0].id), TRADES[0]);
});
