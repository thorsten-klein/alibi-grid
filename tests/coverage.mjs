// Run the tests with coverage and require 100%.
// Run: npm run coverage                 everything here: unit, browser, merge
//      node tests/coverage.mjs unit     unit tests (tests/unit) -> coverage/parts/unit
//      node tests/coverage.mjs e2e 2/4  browser tests (tests/e2e), shard 2 of 4 -> coverage/parts/e2e-2
//      node tests/coverage.mjs merge    one report from all parts in coverage/; fails below 100%
// The GitHub workflow runs the parts in parallel jobs and merges them at the end.
// UNIT_ONLY=1 skips the browser tests (faster while writing unit tests).

import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync, rmSync } from 'node:fs';
import { CoverageReport } from 'monocart-coverage-reports';
import { coverageOptions } from './coverage-options.js';

const run = (cmd, args, env = {}) => spawnSync(cmd, args, { stdio: 'inherit', env: { ...process.env, ...env } }).status ?? 1;
const part = name => ({ ...coverageOptions, outputDir: `coverage/parts/${name}`, reports: ['raw'] });

async function unit() {
  const dir = 'coverage/parts/unit';
  rmSync(dir, { recursive: true, force: true });
  const status = run(process.execPath, ['--test', 'tests/unit/*.test.js'], { NODE_V8_COVERAGE: `${dir}-v8` });
  const report = new CoverageReport(part('unit'));
  await report.addFromDir(`${dir}-v8`);
  await report.generate();
  rmSync(`${dir}-v8`, { recursive: true, force: true });
  return status;
}

async function e2e(shard = '1/1') {
  const name = `e2e-${shard.split('/')[0]}`;
  rmSync(`coverage/parts/${name}`, { recursive: true, force: true });
  // Each test page adds its coverage to this part (tests/e2e/fixtures.js).
  const status = run('npx', ['playwright', 'test', `--shard=${shard}`], { COVERAGE_PART: name });
  await new CoverageReport(part(name)).generate();
  return status;
}

async function merge() {
  const parts = readdirSync('coverage/parts').map(d => `coverage/parts/${d}/raw`).filter(d => existsSync(d));
  const results = await new CoverageReport({ ...coverageOptions, inputDir: parts }).generate();
  const kinds = ['statements', 'branches', 'functions', 'lines'];
  const low = kinds.filter(k => results.summary[k].pct !== '' && results.summary[k].pct < 100);
  if (low.length) console.log(`\nCoverage below 100%: ${low.map(k => `${k} ${results.summary[k].pct}%`).join(', ')}`);
  return low.length ? 1 : 0;
}

const [cmd, arg] = process.argv.slice(2);
let status;
if (cmd === 'unit') status = await unit();
else if (cmd === 'e2e') status = await e2e(arg);
else if (cmd === 'merge') status = await merge();
else {
  rmSync('coverage', { recursive: true, force: true });
  const u = await unit();
  const e = process.env.UNIT_ONLY ? 0 : await e2e();
  const m = await merge();
  if (u) console.log('\nUnit tests failed.');
  if (e) console.log('\nBrowser tests failed.');
  status = u || e || m;
}
process.exit(status);
