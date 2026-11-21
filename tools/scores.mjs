// Print the step score of every campaign case, and a summary per group.
// score: sum of all step weights. hard: steps of weight 3 or more (no tries).
// hardest: weight of the hardest step that is not a try.
// Extra cases are left out unless --extra is given.
// Run: node tools/scores.mjs [theme] [--extra]

import { CAMPAIGNS } from '../js/levels.js';
import { themeById, blockingSet } from '../js/themes.js';
import { decodeLevel } from '../js/levelCodec.js';
import { caseScore } from '../js/hints.js';
import { DIFFICULTY, campaignCaseName } from '../js/generator.js';

const args = process.argv.slice(2);
const extra = args.includes('--extra');
const only = args.find(a => !a.startsWith('--'));
const groups = new Map(); // group name -> list of scores
const pad = (x, k) => String(x).padStart(k);

for (const c of CAMPAIGNS) {
  if (only && c.theme !== only) continue;
  const theme = themeById(c.theme);
  console.log(`\n${c.theme}`);
  console.log('   #  case                 size  tries  steps  score  hard  hardest');
  c.levels.forEach((raw, i) => {
    if (raw.extra && !extra) return;
    const L = decodeLevel(theme, raw);
    const r = caseScore(L, blockingSet(theme));
    const name = campaignCaseName(c.levels, i);
    if (!r) { console.log(`${pad(i, 4)}  ${name.padEnd(20)} ${pad(L.size, 5)}  not solvable without the fallback`); return; }
    console.log(`${pad(i, 4)}  ${name.padEnd(20)} ${pad(L.size, 5)} ${pad(r.tries, 6)} ${pad(r.steps, 6)} ${pad(r.score, 6)} ${pad(r.hard, 5)} ${pad(r.hardest, 8)}`);
    const g = raw.extra ? 'Extra' : DIFFICULTY[raw.group].name;
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g).push(r);
  });
}

// Summary: min / median / max per group.
const stats = xs => {
  const s = [...xs].sort((a, b) => a - b);
  return `${pad(s[0], 4)} ${pad(s[Math.floor(s.length / 2)], 4)} ${pad(s.at(-1), 4)}`;
};
console.log('\ngroup      cases   score (min med max)   hard (min med max)   hardest (min med max)');
for (const g of [...DIFFICULTY.map(d => d.name), 'Extra']) {
  const rs = groups.get(g);
  if (!rs) continue;
  console.log(`${g.padEnd(10)} ${pad(rs.length, 5)}   ${stats(rs.map(r => r.score))}           ${stats(rs.map(r => r.hard))}           ${stats(rs.map(r => r.hardest))}`);
}
