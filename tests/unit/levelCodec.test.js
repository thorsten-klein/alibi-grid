// Level codec: encode and decode give back the same level.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { encodeLevel, decodeLevel } from '../../js/levelCodec.js';
import { CAMPAIGNS } from '../../js/levels.js';
import { themeById } from '../../js/themes.js';

test('every campaign case survives decode and encode', () => {
  for (const c of CAMPAIGNS) {
    const theme = themeById(c.theme);
    for (const raw of c.levels) {
      const { group, extra, ...rest } = raw;
      assert.deepEqual(encodeLevel(theme, decodeLevel(theme, raw)), rest);
    }
  }
});

test('a level without doors, windows or a stored difficulty, and even and odd rooms', () => {
  const theme = themeById('manor');
  const raw = CAMPAIGNS[0].levels[0];
  const level = decodeLevel(theme, raw);
  const bare = encodeLevel(theme, { ...level, doors: [], windows: [], tries: undefined });
  assert.equal(bare.doors, undefined);
  assert.equal(bare.windows, undefined);
  assert.equal(bare.tries, undefined);
  assert.equal(encodeLevel(theme, { ...level, tries: -1 }).tries, undefined);
  // The step score is stored next to the tries, and only when it is known.
  const { hard, hardest, steps, ...plain } = raw;
  assert.equal(decodeLevel(theme, plain).score, null);
  assert.equal(encodeLevel(theme, { ...level, score: null }).hard, undefined);
  const scored = encodeLevel(theme, { ...level, score: { hard: 2, hardest: 4, steps: 11 } });
  assert.deepEqual([scored.hard, scored.hardest, scored.steps], [2, 4, 11]);
  assert.deepEqual(decodeLevel(theme, scored).score, { hard: 2, hardest: 4, steps: 11 });
  const marked = decodeLevel(theme, { ...raw, rules: ['parity'], parity: [[0, 'e'], [1, 'o']] });
  assert.deepEqual(marked.parity, [[0, 'even'], [1, 'odd']]);
});
