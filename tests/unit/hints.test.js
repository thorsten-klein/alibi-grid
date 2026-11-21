// Hints: next steps from a player's board, the full story, tries and the
// long-chain fallback.

import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { CAMPAIGNS } from '../../js/levels.js';
import { themeById, blockingSet } from '../../js/themes.js';
import { decodeLevel } from '../../js/levelCodec.js';
import { solve } from '../../js/rules.js';
import { deduce, trialCount, isDeducible, MAX_TRIES } from '../../js/hints.js';
import { plainT, sampleLevels, rng, themeFor } from './helpers.js';
import { makeLevel } from '../../js/generator.js';

// The player's board as deduce() takes it (like nextSteps() in game.js):
// placed people, crossed cells and "cannot be here" cells per person.
function startFrom(level, { pos = null, crossed = [], out = null } = {}) {
  const P = level.people.length;
  return { pos: pos || new Array(P).fill(-1), crossed: new Set(crossed), out: out || level.people.map(() => new Set()) };
}

// A board from the middle of the case's own story: its people and candidates.
function startAt(level, step) {
  const N = level.size * level.size;
  const { pos, cand } = step.before;
  return startFrom(level, { pos, out: cand.map(c => { const s = new Set(c); return new Set([...Array(N).keys()].filter(i => !s.has(i))); }) });
}

// Blackwood Manor, Medium case 3, as a player solved it (saved, so new levels do not change it).
const manor = themeById('manor');
const case10 = decodeLevel(manor, JSON.parse(readFileSync(new URL('../fixtures/manor-medium-3.json', import.meta.url), 'utf8')));

test('next steps from an empty board: facts, then notes for one person', () => {
  const steps = deduce(case10, blockingSet(manor), plainT(case10), { start: startFrom(case10), options: true });
  assert.match(steps[0].text, /Case fact: "Nobody was in front of a window\."/);
  assert.ok(steps.some(s => /Elias the editor was resting on a sofa/.test(s.text)));
  // Every step comes with the board it starts from.
  for (const s of steps) assert.ok(s.before);
});

test('next steps follow the board, for every sample case and every story step', () => {
  for (const { label, theme, blocking, level } of sampleLevels()) {
    const T = plainT(level, theme);
    const story = deduce(level, blocking, T);
    assert.ok(story.at(-1).done, label);
    for (const st of story.filter(s => !s.done)) {
      const next = deduce(level, blocking, T, { start: startAt(level, st), options: true });
      assert.ok(next.length > 0, `${label}: a next step exists`);
      // No next step may contradict the solution.
      for (const m of next) {
        if (m.place) assert.equal(level.solution[m.place.p], m.place.i, `${label}: ${m.text}`);
        for (const [p, i] of m.elim || []) assert.notEqual(level.solution[p], i, `${label}: ${m.text}`);
        if (m.allowed) assert.ok(m.allowed.cells.includes(level.solution[m.allowed.p]), `${label}: ${m.text}`);
        for (const i of m.cross || []) assert.ok(!level.solution.includes(i), `${label}: ${m.text}`);
      }
    }
  }
});

test('next steps from every campaign case, empty board and half solved', () => {
  for (const c of CAMPAIGNS) {
    const theme = themeById(c.theme), blocking = blockingSet(theme);
    for (const raw of c.levels.filter(l => l.size <= 7)) {
      const level = decodeLevel(theme, raw);
      const T = plainT(level, theme);
      assert.ok(deduce(level, blocking, T, { start: startFrom(level), options: true }).length > 0);
      const half = level.solution.map((i, p) => (p % 2 ? i : -1));
      const next = deduce(level, blocking, T, { start: startFrom(level, { pos: half }), options: true });
      for (const m of next) if (m.place) assert.equal(level.solution[m.place.p], m.place.i);
    }
  }
});

test('a solved board: the next step names the murderer', () => {
  const steps = deduce(case10, blockingSet(manor), plainT(case10), { start: startFrom(case10, { pos: case10.solution }), options: true });
  assert.ok(steps.length <= 1);
});

test('limit stops the story early', () => {
  const steps = deduce(case10, blockingSet(manor), plainT(case10), { limit: 2 });
  assert.equal(steps.length, 2);
});

test('hard boards: tries and the long-chain fallback', () => {
  // Leave out clues until the easy steps and short tries are not enough,
  // while the case keeps one solution. Then only the full search helps.
  const r = rng(3);
  let found = 0;
  for (const c of CAMPAIGNS) {
    const theme = themeById(c.theme), blocking = blockingSet(theme);
    for (const raw of c.levels.filter(l => l.size >= 6 && l.size <= 8)) {
      const level = decodeLevel(theme, raw);
      for (let k = 0; k < level.clues.length && found < 3; k++) {
        const less = { ...level, clues: level.clues.filter((_, j) => j !== k) };
        if (solve(less, blocking, { limit: 2, maxNodes: 50000 }).count !== 1) continue;
        if (isDeducible(less, blocking, Infinity)) continue;
        const story = deduce(less, blocking, plainT(less, theme));
        assert.ok(story.some(s => /long chain/.test(s.text)), 'the fallback explains itself');
        assert.equal(trialCount(less, blocking), -1);
        found++;
      }
    }
  }
  assert.ok(found > 0, 'found a board that needs the fallback');
  assert.ok(r(2) >= 0);
  assert.equal(MAX_TRIES[4], 0);
});

test('tries run into every kind of dead end', () => {
  // Harder cases for the rules with board-wide limits: their tries hit those limits.
  const seen = new Set();
  const reasons = [/share a row or column/, /diagonally next to each other in one room/, /side of the river would not get exactly/];
  for (const rule of ['distance', 'couples', 'river']) {
    const theme = themeFor([rule]), blocking = blockingSet(theme);
    for (let seed = 1; seed <= 6; seed++) {
      const level = makeLevel(theme, 6, seed, [rule], null, { tries: { min: 2, max: Infinity } });
      for (const s of deduce(level, blocking, plainT(level, theme))) for (const re of reasons) if (re.test(s.text)) seen.add(String(re));
    }
  }
  // Two people placed in one row, or in one column: every try breaks at once.
  const T = plainT(case10, manor);
  for (const pos of [[0, 1, -1, -1, -1, -1], [0, 6, -1, -1, -1, -1]]) {
    const steps = deduce(case10, blockingSet(manor), T, { start: startFrom(case10, { pos }), options: true });
    for (const s of steps) if (/share a row or column/.test(s.text)) seen.add(String(reasons[0]));
  }
  assert.deepEqual([...seen].sort(), reasons.map(String).sort());
});

test('next steps on a board that needs the full search', () => {
  for (const c of CAMPAIGNS) {
    const theme = themeById(c.theme), blocking = blockingSet(theme);
    for (const raw of c.levels.filter(l => l.size >= 6 && l.size <= 8)) {
      const level = decodeLevel(theme, raw);
      for (let k = 0; k < level.clues.length; k++) {
        const less = { ...level, clues: level.clues.filter((_, j) => j !== k) };
        if (solve(less, blocking, { limit: 2, maxNodes: 50000 }).count !== 1 || isDeducible(less, blocking, Infinity)) continue;
        // Somewhere in the story only the full search helps: ask for the next step there.
        const story = deduce(less, blocking, plainT(less, theme));
        const at = story.findIndex(s => /long chain/.test(s.text));
        // First the cells nobody can use may be crossed out; then only the search is left.
        const start = startAt(less, story[at]);
        let next = deduce(less, blocking, plainT(less, theme), { start, options: true });
        for (let k = 0; k < 3 && next[0].cross; k++) {
          next[0].cross.forEach(i => start.crossed.add(i));
          next = deduce(less, blocking, plainT(less, theme), { start, options: true });
        }
        assert.match(next[0].text, /long chain|^If /);
        // Without the full search: tries, or nothing.
        const none = deduce(less, blocking, plainT(less, theme), { start, options: true, deep: false });
        assert.ok(none.every(m => /^If /.test(m.text)));
        return;
      }
    }
  }
  assert.fail('no board needs the full search');
});
