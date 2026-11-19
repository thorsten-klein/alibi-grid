// Check every level: one solution, deducible step by step, every clue and
// special rule needed, at least one clue per person (not the victim),
// murderer not obvious without solving,
// rooms of 3+ cells, at most n rooms.
// Also check that js/bundle.js is up to date.
// Run: node tools/check.mjs

import { CAMPAIGNS } from '../js/levels.js';
import { themeById, blockingSet } from '../js/themes.js';
import { decodeLevel } from '../js/levelCodec.js';
import { solve, murdererOf } from '../js/rules.js';
import { isDeducible } from '../js/hints.js';
import { unneededParts, peopleWithoutClue, murdererTooEasy } from '../js/generator.js';
import { readFileSync } from 'node:fs';
import { buildBundle, BUNDLE_PATH } from './bundle.mjs';

let failed = 0;
for (const c of CAMPAIGNS) {
  const theme = themeById(c.theme);
  c.levels.forEach((raw, i) => {
    const L = decodeLevel(theme, raw);
    const n = L.size;
    const sizes = {};
    L.rooms.forEach(k => { sizes[k] = (sizes[k] || 0) + 1; });
    const counts = Object.values(sizes);
    const res = solve(L, blockingSet(theme), { limit: 2 });
    const problems = [];
    if (counts.length > n) problems.push(`${counts.length} rooms`);
    if (Math.min(...counts) < 3) problems.push('room under 3 cells');
    if (res.count !== 1) problems.push(`${res.count} solutions`);
    else if (res.first.join() !== L.solution.join()) problems.push('stored solution differs');
    if (murdererOf(L, L.solution) < 0) problems.push('no murderer');
    if (res.count === 1 && !isDeducible(L, blockingSet(theme))) problems.push('not deducible step by step');
    if (murdererTooEasy(L, blockingSet(theme))) problems.push('the murderer is obvious without solving');
    const bare = peopleWithoutClue(L);
    if (bare.length) problems.push(`no clue for ${bare.map(p => L.people[p].name).join(', ')}`);
    if (!problems.length) {
      const extra = unneededParts(L, blockingSet(theme));
      if (extra.length) problems.push(`not needed: ${extra.join(', ')}`);
    }
    if (problems.length) { failed++; console.log(`FAIL ${c.theme} case ${i + 1}: ${problems.join(', ')}`); }
  });
}
let stale = false;
try { stale = readFileSync(BUNDLE_PATH, 'utf8') !== buildBundle(); } catch { stale = true; }
if (stale) { failed++; console.log('FAIL js/bundle.js is out of date. Run: node tools/bundle.mjs'); }
console.log(failed ? `${failed} levels failed` : 'all levels ok');
process.exit(failed ? 1 : 0);
