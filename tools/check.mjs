// Check every level: one solution, deducible step by step with the "what if"
// steps of its group, every clue and
// special rule needed, at least one clue per person (not the victim),
// murderer not obvious without solving,
// rooms of 3+ cells, at most n rooms.
// Extra cases (older cases that fit no group) need not fit a range or have
// every part needed.
// The levels come from levels/. Also check that js/levels.js and js/bundle.js
// are up to date. This check writes no files.
// Run: node tools/check.mjs

import { themeById, blockingSet } from '../js/themes.js';
import { decodeLevel } from '../js/levelCodec.js';
import { solve, murdererOf } from '../js/rules.js';
import { isDeducible, trialCount, caseScore } from '../js/hints.js';
import { unneededParts, peopleWithoutClue, murdererTooEasy, fitsLimit, DIFFICULTY, campaignCaseName } from '../js/generator.js';
import { readFileSync } from 'node:fs';
import { buildBundle, BUNDLE_PATH } from './bundle.mjs';
import { readCampaigns, compileLevels, LEVELS_PATH } from './compile-levels.mjs';

const CAMPAIGNS = readCampaigns();

// Rooms: at most n, each of 3 cells or more.
function roomProblems(L) {
  const sizes = {};
  L.rooms.forEach(k => { sizes[k] = (sizes[k] || 0) + 1; });
  const counts = Object.values(sizes);
  const out = [];
  if (counts.length > L.size) out.push(`${counts.length} rooms`);
  if (Math.min(...counts) < 3) out.push('room under 3 cells');
  return out;
}

// One solution, the stored one, with a murderer.
function solutionProblems(L, blocking) {
  const res = solve(L, blocking, { limit: 2 });
  const out = [];
  if (res.count !== 1) out.push(`${res.count} solutions`);
  else if (res.first.join() !== L.solution.join()) out.push('stored solution differs');
  if (murdererOf(L, L.solution) < 0) out.push('no murderer');
  return { out, unique: res.count === 1 };
}

// Deducible step by step, with the stored tries, within its group (range).
function deductionProblems(L, blocking, range) {
  const out = [];
  if (!isDeducible(L, blocking, Infinity)) out.push('not deducible step by step');
  const tries = trialCount(L, blocking);
  if (L.tries !== tries) out.push('stored tries differ');
  const score = caseScore(L, blocking);
  if (score && JSON.stringify(L.score) !== JSON.stringify({ hard: score.hard, hardest: score.hardest, steps: score.steps })) out.push('stored step score differs');
  if (tries < 0) return out;
  if (tries < range.min || tries > range.max) out.push(`${tries} tries, not in its group`);
  else if (!fitsLimit(L, blocking, range)) out.push('too hard for its group (step budget)');
  return out;
}

// All problems of one case.
function caseProblems(theme, raw) {
  const L = decodeLevel(theme, raw);
  const blocking = blockingSet(theme);
  // The case's group sets how many "what if" steps it may need, and its step budget.
  // Extra cases (older cases that fit no group) need not fit a range,
  // and may have a part that is no longer needed.
  const range = (!raw.extra && DIFFICULTY[raw.group]) || { min: 0, max: Infinity };
  const solution = solutionProblems(L, blocking);
  const problems = [...roomProblems(L), ...solution.out];
  if (solution.unique) problems.push(...deductionProblems(L, blocking, range));
  if (murdererTooEasy(L, blocking)) problems.push('the murderer is obvious without solving');
  const bare = peopleWithoutClue(L);
  if (bare.length) problems.push(`no clue for ${bare.map(p => L.people[p].name).join(', ')}`);
  if (!problems.length && !raw.extra) {
    const extra = unneededParts(L, blocking, range);
    if (extra.length) problems.push(`not needed: ${extra.join(', ')}`);
  }
  return problems;
}

let failed = 0;
for (const c of CAMPAIGNS) {
  const theme = themeById(c.theme);
  c.levels.forEach((raw, i) => {
    const problems = caseProblems(theme, raw);
    if (!problems.length) return;
    failed++;
    console.log(`FAIL ${c.theme} ${campaignCaseName(c.levels, i)} (${raw.size}x${raw.size}): ${problems.join(', ')}`);
  });
}
// A missing file counts as out of date.
const isStale = (path, text) => { try { return readFileSync(path, 'utf8') !== text; } catch { return true; } };
const levels = compileLevels(CAMPAIGNS);
for (const [path, text] of [[LEVELS_PATH, levels], [BUNDLE_PATH, buildBundle(levels)]]) {
  if (!isStale(path, text)) continue;
  failed++;
  console.log(`FAIL js/${path.pathname.split('/').pop()} is out of date. Run: node tools/bundle.mjs`);
}
console.log(failed ? `${failed} levels failed` : 'all levels ok');
process.exit(failed ? 1 : 0);
