// Build all campaign levels and write js/levels.js.
// Run: node tools/generate.mjs [--sizes 4,5,6,7] [--workers 4] [--time 30] [--fresh]
//   --sizes    only these board sizes (a quick test run)
//   --workers  cases made at once (default: CPUs, at most 8)
//   --time     seconds for one case before it is left out (default 900)
//   --seed     add this to every seed: a retry tries other boards (default 0)
//   --fresh    make every case new. Without it, cases in js/levels.js that fit
//              a group are kept (their "what if" steps pick the group).
// The generator itself is in js/generator.js.
//
// Each campaign has four groups (Beginner, Medium, Hard, Expert).
// Each group has one case per board size. The cases are made in parallel,
// one worker per CPU. A case that can not be made in time is left out.
// js/levels.js is saved after every new case.

import { writeFileSync } from 'node:fs';
import { cpus } from 'node:os';
import { Worker, isMainThread, parentPort } from 'node:worker_threads';
import { THEMES } from '../js/themes.js';
import { encodeLevel } from '../js/levelCodec.js';
import { makeLevel, SIZES, DIFFICULTY, difficultyIndex } from '../js/generator.js';
import { CAMPAIGNS as OLD } from '../js/levels.js';

// The campaign groups: indexes into DIFFICULTY.
export const GROUPS = [0, 1, 2, 3];
// Board sizes per group. Beginner stops at 10x10: bigger boards with no
// "what if" step need very many clues.
const GROUP_SIZES = { 0: SIZES.filter(n => n <= 10) };
const sizesOf = g => GROUP_SIZES[g] || SIZES;

if (!isMainThread) {
  parentPort.on('message', ({ ti, li, g, timeLimit, seed }) => {
    const theme = THEMES[ti], n = SIZES[li];
    const rules = theme.mix ? theme.mix[li] : theme.rules || [];
    const t0 = Date.now();
    let raw = null;
    try {
      const level = makeLevel(theme, n, 1000 * (ti + 1) + n + 100000 * g + seed, rules, null, { tries: DIFFICULTY[g], timeLimit });
      raw = { ...encodeLevel(theme, level), group: g };
    } catch { /* none found in time */ }
    parentPort.postMessage({ ti, li, g, raw, ms: Date.now() - t0 });
  });
} else {
  const arg = name => { const k = process.argv.indexOf(name); return k > 0 ? process.argv[k + 1] : null; };
  const only = arg('--sizes') ? arg('--sizes').split(',').map(Number) : SIZES;
  const timeLimit = 1000 * (Number(arg('--time')) || 900);
  const key = (ti, g, li) => `${ti}:${g}:${li}`;
  // Cases we have: key -> raw level. Start with the cases in js/levels.js that fit a group.
  const results = new Map();
  if (!process.argv.includes('--fresh')) {
    for (const c of OLD) {
      const ti = THEMES.findIndex(t => t.id === c.theme);
      if (ti < 0) continue;
      const theme = THEMES[ti];
      for (const raw of c.levels) {
        const li = SIZES.indexOf(raw.size);
        const g = raw.group ?? (raw.tries >= 0 ? difficultyIndex(raw.tries) : -1);
        const rules = theme.mix ? theme.mix[li] : theme.rules || [];
        if (li < 0 || !GROUPS.includes(g) || !sizesOf(g).includes(raw.size) || JSON.stringify(raw.rules || []) !== JSON.stringify(rules)) continue;
        if (!results.has(key(ti, g, li))) results.set(key(ti, g, li), { ...raw, group: g });
      }
    }
    console.log(`reused ${results.size} cases from js/levels.js`);
  }
  // Order: holes first (a missing size below a size the group already has),
  // then small boards before big ones, so the campaigns fill up fast.
  const jobs = [];
  for (const g of GROUPS) THEMES.forEach((_, ti) => SIZES.forEach((n, li) => {
    if (!only.includes(n) || !sizesOf(g).includes(n) || results.has(key(ti, g, li))) return;
    const hole = SIZES.some((_, lj) => lj > li && results.has(key(ti, g, lj)));
    jobs.push({ ti, li, g, hole });
  }));
  jobs.sort((a, b) => b.hole - a.hole || a.li - b.li || a.g - b.g);
  console.log(`${jobs.filter(j => j.hole).length} holes first, then ${jobs.filter(j => !j.hole).length} more`);
  const total = jobs.length;
  let done = 0, missing = 0;

  // Write js/levels.js (and the bundle) with all cases so far, after every new case.
  // A run that stops early keeps its work, and the next run reuses it.
  const { buildBundle, BUNDLE_PATH } = await import('./bundle.mjs');
  const save = () => {
    const campaigns = THEMES.map((theme, ti) => ({
      theme: theme.id,
      levels: GROUPS.flatMap(g => SIZES.map((_, li) => results.get(key(ti, g, li))).filter(Boolean)),
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
        if (!job) { worker.terminate(); if (--running === 0) resolve(); return; }
        worker.postMessage({ ...job, timeLimit, seed: 1000000 * (Number(arg('--seed')) || 0) });
      };
      worker.on('message', ({ ti, li, g, raw, ms }) => {
        done++;
        if (raw) { results.set(key(ti, g, li), raw); save(); } else missing++;
        const name = `${THEMES[ti].id} ${DIFFICULTY[g].name} ${SIZES[li]}x${SIZES[li]}`;
        console.log(`[${done}/${total}] ${name}: ${raw ? `${raw.tries} tries, ${raw.clues.length} clues` : 'NONE'}, ${ms} ms`);
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
