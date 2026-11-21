// End-to-end tests in a real browser. Run: npx playwright test
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  timeout: 60000,
  reporter: process.env.CI ? 'list' : [['list']],
  use: { baseURL: 'http://localhost:8123', trace: 'retain-on-failure' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: { command: 'node tests/serve.mjs 8123', url: 'http://localhost:8123/index.html', reuseExistingServer: !process.env.CI },
});
