// The full deduction story of Blackwood Manor, Medium case 3
// (saved in tests/fixtures/manor-medium-3.json, so new levels do not change it).

import { test, expect } from './fixtures.js';
import { openHints, caseLink } from './helpers.js';

// Open the story and go to step k (1-based).
async function storyStep(page, k) {
  await page.goto(caseLink('../fixtures/manor-medium-3.json', 'manor'));
  await openHints(page);
  await page.getByRole('button', { name: '📖 Show full deduction story' }).click();
  for (let j = 1; j < k; j++) await page.getByRole('button', { name: 'Next →' }).click();
  await expect(page.locator('#dialog .hint-count')).toContainText(`Step ${k} of`);
}

const cell = (page, i) => page.locator('#dialog .hint-board .board > div').nth(i);

test('step 6 notes A on the two cells of column F and says why the others can not be there', async ({ page }) => {
  await storyStep(page, 6);
  await expect(page.locator('#dialog .hint-text')).toHaveText(
    /^Remember: .*So they can not stand in column F\. Only A can still stand in column F\. So A can only be on F1 and F5\.$/);
  // A's two cells carry A's note; nothing else is taken from A.
  await expect(cell(page, 5).locator('.notes .mini')).toHaveText('A');
  await expect(cell(page, 29).locator('.notes .mini')).toHaveText('A');
  await expect(page.locator('#dialog .hint-board .struck')).toHaveCount(0);
});

test('step 7 places E on E6 and names the clues that keep the others out of row 6', async ({ page }) => {
  await storyStep(page, 7);
  await expect(page.locator('#dialog .hint-text')).toHaveText(
    'Remember: V was in front of a door. C was in row 4. D was in front of a door. So they can not stand in row 6. ' +
    'Only E can still stand in row 6. There, E can only be on E6. Place E on E6.');
});

test('step 8 places A once only one cell is left', async ({ page }) => {
  await storyStep(page, 8);
  await expect(page.locator('#dialog .hint-text')).toHaveText(/So A is not there\. Now A has only one cell left: F1\. Place A there\.$/);
});

test('step 10 places C on B4 and crosses out the rest of row 4 and column B', async ({ page }) => {
  await storyStep(page, 10);
  await expect(page.locator('#dialog .hint-text')).toContainText('Place C on B4.');
  await expect(cell(page, 19).locator('.token.ghost')).toHaveText('C');
  // C4 was still open: this step crosses it out. A4 and E4 were crossed before
  // (B is in column A, E in column E). So all of row 4 shows ✕ now.
  await expect(cell(page, 20).locator('.act-x')).toHaveText('✕');
  for (const i of [18, 22]) await expect(cell(page, i).locator('.mark')).toHaveText('✕');
});
