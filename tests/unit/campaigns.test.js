// Every campaign case: the solver finds its one solution, the step-by-step
// deduction solves it, and its stored difficulty fits.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CAMPAIGNS } from '../../js/levels.js';
import { themeById, blockingSet } from '../../js/themes.js';
import { decodeLevel } from '../../js/levelCodec.js';
import { solve, murdererOf, boardRuleProblems } from '../../js/rules.js';
import { deduce, trialCount, isDeducible } from '../../js/hints.js';
import { DIFFICULTY, difficultyIndex, campaignCaseName } from '../../js/generator.js';
import { plainT } from './helpers.js';

for (const c of CAMPAIGNS) {
  const theme = themeById(c.theme);
  const blocking = blockingSet(theme);
  test(`${c.theme}: every case is unique and deducible`, () => {
    c.levels.forEach((raw, i) => {
      const level = decodeLevel(theme, raw);
      const name = `${c.theme} ${campaignCaseName(c.levels, i)}`;
      const res = solve(level, blocking, { limit: 2 });
      assert.equal(res.count, 1, `${name}: one solution`);
      assert.deepEqual(res.first, level.solution, name);
      assert.ok(murdererOf(level, level.solution) >= 0, `${name}: has a murderer`);
      assert.deepEqual(boardRuleProblems(level, level.solution), [], `${name}: no rule broken`);
      // The story ends with everyone placed and the murderer named.
      const steps = deduce(level, blocking, plainT(level, theme));
      assert.ok(steps.at(-1).done, `${name}: story ends`);
      const tries = trialCount(level, blocking);
      assert.equal(tries, raw.tries, `${name}: stored tries`);
      // Extra cases fit no group; the others fit theirs.
      if (!raw.extra) {
        assert.equal(difficultyIndex(tries), raw.group, `${name}: group fits`);
        assert.ok(isDeducible(level, blocking, DIFFICULTY[raw.group].max));
      }
    });
  });
}
