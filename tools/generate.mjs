// Build all campaign levels and write js/levels.js.
// Run: node tools/generate.mjs [--sizes 4,5,6,7] [--workers 4] [--time 30] [--fresh]
//   --sizes    only these board sizes (a quick test run)
//   --workers  cases made at once (default: CPUs, at most 8)
//   --time     seconds for one case before it is left out (default 900)
//   --seed     add this to every seed: a retry tries other boards (default 0)
//   --fresh    make every case new. Without it, the cases in js/levels.js are kept:
//              each is checked again, and its "what if" steps pick its group.
//              A case that no longer fits a group becomes an extra case.
//   --extra    make only extra cases: per campaign and size as many as EXTRA_PER_SIZE
//              says, of any difficulty, with other seeds (add --seed to make more)
//   --also     another levels file (like an old js/levels.js): its cases are
//              added the same way. Use --sizes 0 to only merge, without new cases.
//
// Extra cases ("Additional Extra Levels" on the campaign screen) are older cases that
// fit no group any more: another case took their place, a clue is no longer needed,
// or their difficulty or size fits no group. They are kept as long as they work.
// The generator itself is in js/generator.js.
//
// Each campaign has four groups (Beginner, Medium, Hard, Expert).
// Each group has one case per board size. The cases are made in parallel,
// one worker per CPU. A case that can not be made in time is left out.
// js/levels.js is saved after every new case.

import { writeFileSync } from 'node:fs';
import { cpus } from 'node:os';
import { Worker, isMainThread, parentPort } from 'node:worker_threads';
import { THEMES, blockingSet } from '../js/themes.js';
import { encodeLevel, decodeLevel } from '../js/levelCodec.js';
import { makeLevel, SIZES, DIFFICULTY, difficultyIndex, unneededParts, fitsLimit } from '../js/generator.js';
import { trialCount } from '../js/hints.js';
import { CAMPAIGNS as OLD } from '../js/levels.js';

// The campaign groups: indexes into DIFFICULTY.
export const GROUPS = [0, 1, 2, 3];
// Board sizes per group. Beginner stops at 10x10: bigger boards with no
// "what if" step need very many clues.
const GROUP_SIZES = { 0: SIZES.filter(n => n <= 10) };
const sizesOf = g => GROUP_SIZES[g] || SIZES;
// --extra: new extra cases per campaign, by board size (big boards take longer).
const EXTRA_PER_SIZE = { 4: 20, 5: 18, 6: 16, 7: 14, 8: 12, 9: 9, 10: 7, 11: 5, 12: 3 };

if (!isMainThread) {
  // g: a group (index into DIFFICULTY), or 'extra' (any difficulty; k: its number).
  parentPort.on('message', ({ ti, li, g, k = 0, timeLimit, seed }) => {
    const theme = THEMES[ti], n = SIZES[li];
    const rules = theme.mix ? theme.mix[li] : theme.rules || [];
    const t0 = Date.now();
    let raw = null;
    try {
      const extra = g === 'extra';
      const s = 1000 * (ti + 1) + n + seed + (extra ? 50000000 + 100000 * k : 100000 * g);
      const level = makeLevel(theme, n, s, rules, null, { tries: extra ? { min: 0, max: Infinity } : DIFFICULTY[g], timeLimit });
      raw = extra ? { ...encodeLevel(theme, level), extra: true } : { ...encodeLevel(theme, level), group: g };
    } catch { /* none found in time */ }
    parentPort.postMessage({ ti, li, g, raw, ms: Date.now() - t0 });
  });
} else {
  const arg = name => { const k = process.argv.indexOf(name); return k > 0 ? process.argv[k + 1] : null; };
  const only = arg('--sizes') ? arg('--sizes').split(',').map(Number) : SIZES;
  const timeLimit = 1000 * (Number(arg('--time')) || 900);
  const key = (ti, g, li) => `${ti}:${g}:${li}`;
  // Cases we have: key -> raw level. Start with the cases in js/levels.js.
  // Each is checked again (the hints may have changed): its "what if" steps pick
  // its group, and every part must still be needed for that group.
  const results = new Map();
  const extras = THEMES.map(() => []); // per theme: extra cases (raw)
  // The same case twice (from two files, or made again) counts once.
  const seen = new Set();
  const id = ({ group, extra, tries, ...rest }) => JSON.stringify(rest);
  if (!process.argv.includes('--fresh')) {
    const fits = [];
    let moved = 0, dropped = 0;
    const sources = [...OLD];
    if (arg('--also')) sources.push(...(await import(new URL(arg('--also'), `file://${process.cwd()}/`))).CAMPAIGNS);
    for (const c of sources) {
      const ti = THEMES.findIndex(t => t.id === c.theme);
      if (ti < 0) continue;
      const theme = THEMES[ti], blocking = blockingSet(theme);
      for (const raw of c.levels) {
        if (seen.has(id(raw))) continue;
        seen.add(id(raw));
        const li = SIZES.indexOf(raw.size);
        const rules = theme.mix ? theme.mix[li] : theme.rules || [];
        if (li < 0 || JSON.stringify(raw.rules || []) !== JSON.stringify(rules)) { dropped++; continue; }
        const level = decodeLevel(theme, raw);
        const tries = trialCount(level, blocking);
        if (tries < 0) { dropped++; continue; } // can not be solved step by step: gone
        const { group, extra, ...plain } = raw;
        const asExtra = { ...plain, tries, extra: true };
        const g = difficultyIndex(tries);
        // Too hard for its group (step budget): an extra case, a new case takes its place.
        if (extra || !GROUPS.includes(g) || !sizesOf(g).includes(raw.size) || !fitsLimit(level, blocking, DIFFICULTY[g]) ||
          unneededParts(level, blocking, DIFFICULTY[g]).length) {
          extras[ti].push(asExtra);
          continue;
        }
        if (g !== raw.group) moved++;
        fits.push({ k: key(ti, g, li), raw: { ...plain, tries, group: g }, extra: asExtra, ti, same: g === raw.group });
      }
    }
    // Two cases for one place: the one that was in that group already stays.
    fits.sort((a, b) => b.same - a.same);
    for (const f of fits) if (!results.has(f.k)) results.set(f.k, f.raw); else extras[f.ti].push(f.extra);
    for (const list of extras) list.sort((a, b) => a.size - b.size || a.tries - b.tries);
    const nx = extras.reduce((a, l) => a + l.length, 0);
    console.log(`kept ${results.size} cases in groups (${moved} moved to another group), ${nx} extra cases, ${dropped} dropped`);
  }
  // Order: holes first (a missing size below a size the group already has),
  // then small boards before big ones, so the campaigns fill up fast.
  const jobs = [];
  if (process.argv.includes('--extra')) {
    THEMES.forEach((_, ti) => SIZES.forEach((n, li) => {
      if (only.includes(n)) for (let k = 0; k < EXTRA_PER_SIZE[n]; k++) jobs.push({ ti, li, g: 'extra', k, hole: false });
    }));
  } else for (const g of GROUPS) THEMES.forEach((_, ti) => SIZES.forEach((n, li) => {
    if (!only.includes(n) || !sizesOf(g).includes(n) || results.has(key(ti, g, li))) return;
    const hole = SIZES.some((_, lj) => lj > li && results.has(key(ti, g, lj)));
    jobs.push({ ti, li, g, hole });
  }));
  jobs.sort((a, b) => b.hole - a.hole || a.li - b.li || String(a.g).localeCompare(String(b.g)));
  console.log(`${jobs.filter(j => j.hole).length} holes first, then ${jobs.filter(j => !j.hole).length} more`);
  const total = jobs.length;
  let done = 0, missing = 0;

  // Write js/levels.js (and the bundle) with all cases so far, after every new case.
  // A run that stops early keeps its work, and the next run reuses it.
  const { buildBundle, BUNDLE_PATH } = await import('./bundle.mjs');
  const save = () => {
    const campaigns = THEMES.map((theme, ti) => ({
      theme: theme.id,
      levels: [...GROUPS.flatMap(g => SIZES.map((_, li) => results.get(key(ti, g, li))).filter(Boolean)), ...extras[ti]],
    }));
    const header = '// Made by tools/generate.mjs. Do not edit by hand.\n';
    writeFileSync(new URL('../js/levels.js', import.meta.url),
      `${header}export const CAMPAIGNS = ${JSON.stringify(campaigns, null, 1)};\n`);
    writeFileSync(BUNDLE_PATH, buildBundle());
  };
  save();

  // Each worker needs about 300 MB: not too many at once.
  const workers = Number(arg('--workers')) || Math.max(1, Math.min(cpus().length - 1, 8));
  await new Promise(resolve => {
    if (!jobs.length) return resolve();
    let running = 0;
    for (let w = 0; w < Math.min(workers, jobs.length); w++) {
      const worker = new Worker(new URL(import.meta.url));
      const next = () => {
        const job = jobs.shift();
        if (!job) {
          worker.terminate();
          running--;
          if (running === 0) resolve();
          return;
        }
        worker.postMessage({ ...job, timeLimit, seed: 1000000 * (Number(arg('--seed')) || 0) });
      };
      worker.on('message', ({ ti, li, g, raw, ms }) => {
        done++;
        // A new extra case counts only if it is not there already.
        if (raw && g === 'extra') {
          if (!seen.has(id(raw))) { seen.add(id(raw)); extras[ti].push(raw); extras[ti].sort((a, b) => a.size - b.size || a.tries - b.tries); save(); }
        } else if (raw) { results.set(key(ti, g, li), raw); save(); } else missing++;
        const name = `${THEMES[ti].id} ${g === 'extra' ? 'Extra' : DIFFICULTY[g].name} ${SIZES[li]}x${SIZES[li]}`;
        const info = raw ? `${raw.tries} tries, ${raw.clues.length} clues` : 'NONE';
        console.log(`[${done}/${total}] ${name}: ${info}, ${ms} ms`);
        next();
      });
      running++;
      next();
    }
  });
  if (missing) console.log(`${missing} cases left out (none found in time)`);
  // Holes: a missing size between the smallest and the biggest size a group has.
  for (const g of GROUPS) THEMES.forEach((theme, ti) => {
    const have = SIZES.map((n, li) => results.has(key(ti, g, li)) ? n : 0).filter(Boolean);
    const holes = sizesOf(g).filter(n => n > Math.min(...have) && n < Math.max(...have) && !have.includes(n));
    if (holes.length) console.log(`HOLE ${theme.id} ${DIFFICULTY[g].name}: ${holes.join(', ')}`);
  });
  console.log('wrote js/levels.js and js/bundle.js');
}
