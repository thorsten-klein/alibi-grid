// The `test` for all browser tests. With COVERAGE_PART set (see tests/coverage.mjs)
// it records which code each page ran and adds it to that coverage part.

import { test as base, expect } from '@playwright/test';
import { CoverageReport } from 'monocart-coverage-reports';
import { coverageOptions } from '../coverage-options.js';

const part = process.env.COVERAGE_PART;

export const test = base.extend({
  page: async ({ page }, use) => {
    if (part) await page.coverage.startJSCoverage({ resetOnNavigation: false });
    await use(page);
    if (part) {
      const report = new CoverageReport({ ...coverageOptions, outputDir: `coverage/parts/${part}`, reports: ['raw'] });
      await report.add(await page.coverage.stopJSCoverage());
    }
  },
});

export { expect };
