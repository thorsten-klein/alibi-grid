// Special rules and case facts on the game screen: every rule shows its text,
// its marks and links; every person board, hint board and result board draws.
// One small case per rule (tests/fixtures/rule-cases.json).

import { test, expect } from './fixtures.js';
import { ruleLink, RULE_CASES, openHints } from './helpers.js';

const closeDialog = page => page.evaluate(() => document.getElementById('dialog').close(''));

// Each test clicks through a whole case and its story: give it time (more with coverage on).
test.describe.configure({ timeout: 120000 });

for (const name of Object.keys(RULE_CASES)) {
  test(`${name}: rules, legend, people, hints and results`, async ({ page }) => {
    const { level } = RULE_CASES[name];
    await page.goto(ruleLink(name));
    await expect(page.locator('.case-head h1')).toContainText('Your case');
    // Special rules and case facts, with their "Show" links.
    if (level.rules?.length) await expect(page.locator('.rules-box h3').first()).toHaveText('Special rules');
    for (const link of await page.locator('.rules-box .ref').all()) {
      await link.click();
      await link.click();
    }
    // Legend: every room and every object or mark.
    for (const b of await page.locator('.legend button.chip, .object-legend button.key').all()) await b.click();
    // Every person's board, and their clue links there.
    const n = await page.locator('li.person').count();
    for (let k = 0; k < n; k++) {
      await page.locator('li.person').nth(k).locator('.person-zoom').click();
      for (const r of await page.locator('#dialog .ref').all()) await r.click();
      await closeDialog(page);
    }
    // Clue links on the people list (room, object, seal, door, person ...).
    for (const r of await page.locator('li.person .ref').all()) await r.click();
    // Hints: next step, then the whole story to the end.
    await openHints(page);
    await page.getByRole('button', { name: '📖 Show full deduction story' }).click();
    const next = page.locator('#dialog .hint-nav button', { hasText: 'Next →' });
    await expect(next).toBeVisible();
    while (await next.isEnabled()) await next.click();
    await expect(page.locator('#dialog .hint-text.done')).toBeVisible();
    await page.getByRole('button', { name: '🔑 Show final solution' }).click();
    await page.locator('dialog.solution-dialog .btn.primary').click();
    await closeDialog(page);
    // A wrong board (everyone one row down) and the result boards.
    const wrong = level.solution.map((i, p) => level.solution[(p + 1) % level.solution.length]);
    await page.goto(ruleLink(name, { pos: wrong }));
    await page.locator('button.submit').click();
    for (const g of ['.note-pick:not(.room-pick)', '.room-pick']) await page.locator(`#dialog ${g}`).first().click();
    await page.getByRole('button', { name: 'Submit answer' }).click();
    await page.locator('#dialog summary', { hasText: 'Show the solution' }).click();
    await expect(page.locator('#dialog .result-boards .board').first()).toBeVisible();
    await closeDialog(page);
  });
}
