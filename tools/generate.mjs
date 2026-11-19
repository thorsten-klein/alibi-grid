// Build all campaign levels and write js/levels.js.
// Run: node tools/generate.mjs
// The generator itself is in js/generator.js.

import { writeFileSync } from 'node:fs';
import { THEMES } from '../js/themes.js';
import { encodeLevel } from '../js/levelCodec.js';
import { makeLevel, SIZES } from '../js/generator.js';

const campaigns = THEMES.map((theme, ti) => ({
  theme: theme.id,
  levels: SIZES.map((n, li) => {
    const t0 = Date.now();
    const rules = theme.mix ? theme.mix[li] : theme.rules || [];
    const level = makeLevel(theme, n, 1000 * (ti + 1) + n, rules);
    console.log(`${theme.id} ${n}x${n}${rules.length ? ` [${rules.join('+')}]` : ''}: ${level.clues.length} clues, ${Date.now() - t0} ms`);
    return encodeLevel(theme, level);
  }),
}));

const header = '// Made by tools/generate.mjs. Do not edit by hand.\n';
writeFileSync(new URL('../js/levels.js', import.meta.url),
  `${header}export const CAMPAIGNS = ${JSON.stringify(campaigns, null, 1)};\n`);
console.log('wrote js/levels.js');

// Keep the file:// bundle in sync with the new levels.
const { buildBundle, BUNDLE_PATH } = await import('./bundle.mjs');
writeFileSync(BUNDLE_PATH, buildBundle());
console.log('wrote js/bundle.js');
