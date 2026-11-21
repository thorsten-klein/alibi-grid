// The hints dialog: apply a step to the board, move between steps,
// find mistakes on the board, and the full story.
// Case: Blackwood Manor, Medium case 3 (tests/fixtures/manor-medium-3.json).
// People: 0 A, 1 B, 2 V (victim), 3 C, 4 D, 5 E. Solution: A F1, B A2, V C3, C B4, D D5, E E6.

import { test, expect } from './fixtures.js';
import { caseLink, openHints } from './helpers.js';

const FILE = '../fixtures/manor-medium-3.json';
const SOLUTION = [5, 6, 14, 19, 27, 34];
const open = (page, board = null) => page.goto(caseLink(FILE, 'manor', board ? Buffer.from(JSON.stringify(board)).toString('base64url') : null));
const cell = (page, i) => page.locator(`.board-frame:not(.view-only) button.cell[data-i="${i}"]`);
const text = page => page.locator('#dialog .hint-text');
const closeDialog = page => page.evaluate(() => document.getElementById('dialog').close(''));
const nextOption = page => page.locator('#dialog .hint-nav button', { hasText: '→' });

// Boards from the player's own way of solving (see hints-scenario.spec.js).
const NOTES_E_B_C = { 0: [5], 1: [1], 6: [1], 18: [3], 19: [3], 20: [3], 22: [3], 24: [5], 28: [1], 30: [1], 34: [5], r3: [3] };
const STEP4 = { pos: [-1, -1, -1, -1, -1, -1], marks: [11, 17], notes: NOTES_E_B_C };
const NOTES_ALL = { ...NOTES_E_B_C, 2: [2, 4], 5: [0], 9: [2, 4], 14: [2, 4], 15: [2, 4], 27: [2, 4], 28: [1, 2, 4], 29: [0], c5: [0] };
const STEP8 = { pos: [-1, -1, -1, -1, -1, -1], marks: [11, 17, 30], notes: NOTES_ALL };
const STEP12 = { pos: [5, 6, -1, 19, -1, 34], marks: [11, 17, 30], notes: NOTES_ALL };

// Go through the next-step options until one matches.
async function findOption(page, re) {
  for (;;) {
    if (re.test(await text(page).textContent())) return;
    await nextOption(page).click();
  }
}

test('apply: a fact crosses out cells, then → works out the next step', async ({ page }) => {
  await open(page);
  await openHints(page);
  await expect(text(page)).toContainText('Nobody was in front of a window');
  await page.getByRole('button', { name: '✓ Apply' }).click();
  await expect(page.getByRole('button', { name: '✓ Applied' })).toBeDisabled();
  await nextOption(page).click();
  await expect(text(page)).not.toContainText('Nobody was in front of a window');
  await closeDialog(page);
  await expect(cell(page, 11).locator('.mark')).toHaveText('✕'); // F2: a window
  // Apply is one step for Undo.
  await page.getByRole('button', { name: 'Undo' }).click();
  await expect(cell(page, 11).locator('.mark')).toHaveCount(0);
});

test('apply: notes for a person, with the row box when they fit one row', async ({ page }) => {
  await open(page);
  await openHints(page);
  await findOption(page, /C was in row 4\. So C can only be on the marked cells/);
  await page.getByRole('button', { name: '✓ Apply' }).click();
  await closeDialog(page);
  await expect(cell(page, 18).locator('.mini')).toHaveText('C');
  await expect(page.locator('.note-lane.rows .note-cell').nth(3).locator('.mini')).toHaveText('C');
});

test('apply: a cell nobody can use is crossed out; "can\'t be here" notes are written too', async ({ page }) => {
  await open(page, STEP4);
  await page.getByText('Use "can\'t be here" notes').click();
  await openHints(page);
  await expect(text(page)).toContainText('So nobody can stand on A6: cross it out.');
  await page.getByRole('button', { name: '✓ Apply' }).click();
  await closeDialog(page);
  await expect(cell(page, 30).locator('.mark')).toHaveText('✕');
});

test('apply: a placement', async ({ page }) => {
  await open(page, STEP8);
  await openHints(page);
  await expect(text(page)).toContainText('Place E on E6.');
  await page.getByRole('button', { name: 'Next →' }).click(); // another option first, then back
  await page.locator('#dialog .hint-nav button', { hasText: '←' }).click();
  await page.getByRole('button', { name: '✓ Apply' }).click();
  await closeDialog(page);
  await expect(cell(page, 34).locator('.token')).toHaveText('E');
});

test('apply: a placement on a cell where someone else stands moves them away', async ({ page }) => {
  await open(page, { ...STEP12, pos: [5, 6, -1, 19, 14, 34] }); // D on C3, where V belongs
  await openHints(page);
  await expect(text(page)).toContainText('D does not stand on C3');
  await expect(page.locator('#dialog .hint-text.mistake')).toBeVisible();
});

test('mistakes: wrong person, crossed solution cell, wrong "can\'t be here" note, wrong notes', async ({ page }) => {
  await open(page, { pos: [6, -1, -1, -1, -1, -1], marks: [14], nots: { 19: [3] },
    notes: { 0: [5], r0: [3], c0: [4], 2: [1] } });
  await page.getByText('Use "can\'t be here" notes').click();
  await openHints(page);
  const all = [];
  for (;;) {
    all.push(await text(page).textContent());
    if (await nextOption(page).isDisabled()) break;
    await nextOption(page).click();
  }
  expect(all.join('\n')).toContain('A does not stand on A2');
  expect(all.join('\n')).toContain('You crossed out C3, but someone stands there');
  expect(all.join('\n')).toContain('You noted that C cannot be on B4. That note is wrong.');
  expect(all.join('\n')).toContain('Your note says C is in row 1');
  expect(all.join('\n')).toContain('Your note says D is in column A');
  expect(all.join('\n')).toContain('Your "can be here" notes for E leave out a cell');
  expect(all.join('\n')).toContain('Your "can be here" notes for B leave out a cell');
  await expect(page.getByRole('button', { name: '✓ Apply' })).toHaveCount(0);
});

test('everyone placed right: the hint says to submit', async ({ page }) => {
  await open(page, { pos: SOLUTION });
  await openHints(page);
  await expect(page.locator('#dialog .hint-text.done')).toContainText('Everyone is placed. Press Submit');
  await expect(page.locator('#dialog .hint-count')).toHaveText('All placed');
});

test('a step that changes nothing on the board is told first, then the next one', async ({ page }) => {
  // A has no notes: what rules out A's cells is not visible on the board.
  const notes = { ...NOTES_ALL };
  delete notes[5]; delete notes[29]; delete notes.c5;
  await open(page, { pos: [-1, -1, -1, -1, -1, 34], marks: [11, 17, 30], notes });
  await openHints(page);
  await expect(text(page)).toBeVisible();
});

test('story: back, next, and back to the next step', async ({ page }) => {
  await open(page);
  await openHints(page);
  await page.getByRole('button', { name: '📖 Show full deduction story' }).click();
  await page.getByRole('button', { name: 'Next →' }).click();
  await expect(page.locator('#dialog .hint-count')).toHaveText(/^Step 2 of/);
  await page.getByRole('button', { name: '← Back', exact: true }).click();
  await expect(page.locator('#dialog .hint-count')).toHaveText(/^Step 1 of/);
  await page.getByRole('button', { name: '← Back to my next step' }).click();
  await expect(page.locator('#dialog .hint-count')).toHaveText(/Your next step/);
  // The story is worked out once: open it again.
  await page.getByRole('button', { name: '📖 Show full deduction story' }).click();
  await expect(page.locator('#dialog .hint-count')).toHaveText(/^Step 1 of/);
  // The final solution closes with a click on its backdrop too.
  await page.getByRole('button', { name: '🔑 Show final solution' }).click();
  await page.mouse.click(3, 3);
  await expect(page.locator('dialog.solution-dialog')).toHaveCount(0);
});
