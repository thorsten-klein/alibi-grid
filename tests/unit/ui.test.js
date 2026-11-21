// The difficulty tooltip: every value that sets the group, with the group's limits.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { difficultyLines } from '../../js/ui.js';

test('difficulty lines: tries, hard steps, hardest step, steps, and the limits', () => {
  const lines = difficultyLines(1, { hard: 1, hardest: 4, steps: 12 });
  assert.deepEqual(lines.slice(0, 4), [
    '1 "what if" step in the hints (Medium: 1 to 2)',
    '1 hard step (Medium: at most 5)',
    'Hardest step: weight 4 (Medium: at most 5)',
    '12 steps in all',
  ]);
  assert.match(lines[4], /Step weights/);
  // Beginner has one value, Extreme has no upper end and no budget.
  assert.match(difficultyLines(0, { hard: 2, hardest: 3, steps: 9 })[0], /^0 "what if" steps in the hints \(Beginner: 0\)$/);
  const extreme = difficultyLines(12, { hard: 9, hardest: 9, steps: 40 });
  assert.match(extreme[0], /Extreme: 11 or more/);
  assert.match(extreme[1], /^9 hard steps \(Extreme: no limit\)$/);
  // No step score (the hints can not solve the case): just the tries, and why.
  assert.deepEqual(difficultyLines(2, null), ['2 "what if" steps in the hints (Medium: 1 to 2)', 'The hints can not work out the other steps of this case.']);
});
