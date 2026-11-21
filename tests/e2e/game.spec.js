// The game screen: notes, placing, crosses, selection, drag and drop, long press,
// undo, reset, submit, share, zoom, options and the person board.
// Case: Blackwood Manor, Medium case 3 (tests/fixtures/manor-medium-3.json).
// People: 0 A (Alma), 1 B (Basil), 2 V (Victor, victim), 3 C (Celia), 4 D (Dexter), 5 E (Elias).
// Solution: A F1, B A2, V C3, C B4, D D5, E E6. Blocked cells: D1 (plant), E1 (shelf), C2 (plant).

import { test, expect } from './fixtures.js';
import { caseLink, seedStorage, caseKey } from './helpers.js';

const FILE = '../fixtures/manor-medium-3.json';
const SOLUTION = [5, 6, 14, 19, 27, 34];
const open = (page, board = null) => page.goto(caseLink(FILE, 'manor', board ? Buffer.from(JSON.stringify(board)).toString('base64url') : null));
const cell = (page, i) => page.locator(`.board-frame:not(.view-only) button.cell[data-i="${i}"]`);
const person = (page, name) => page.locator('li.person', { hasText: name });
const dialog = page => page.locator('#dialog');
const closeDialog = page => page.evaluate(() => document.getElementById('dialog').close(''));
const flash = page => page.locator('.flash');
const mid = b => [b.x + b.width / 2, b.y + b.height / 2];

test.describe('notes and placing', () => {
  test('a click opens the notes of a cell: mark people, write text, clear', async ({ page }) => {
    await open(page);
    await cell(page, 0).click();
    await expect(dialog(page).locator('h2')).toHaveText('Cell A1');
    await dialog(page).locator('.note-pick', { hasText: 'Alma' }).click();
    await dialog(page).locator('.note-pick', { hasText: 'Basil' }).click();
    await dialog(page).locator('.note-pick', { hasText: 'Basil' }).click(); // off again
    await dialog(page).locator('textarea.note-text').fill('maybe Alma');
    await closeDialog(page);
    await expect(cell(page, 0).locator('.notes .mini')).toHaveText(['A']);
    await expect(cell(page, 0)).toHaveClass(/has-text/);
    await expect(cell(page, 0)).toHaveAttribute('aria-label', /could be: A/);
    // Clear the list with its red x, then everything with "Clear notes".
    await cell(page, 0).click();
    await dialog(page).locator('.clear-x').first().click();
    await dialog(page).getByRole('button', { name: 'Clear notes' }).click();
    await closeDialog(page);
    await expect(cell(page, 0).locator('.notes')).toHaveCount(0);
    await expect(cell(page, 0)).not.toHaveClass(/has-text/);
  });

  test('from the notes to the place picker, then remove the person again', async ({ page }) => {
    await open(page);
    await cell(page, 5).click();
    await dialog(page).getByRole('button', { name: 'Place person…' }).click();
    await expect(dialog(page).locator('h2')).toHaveText('Who stands on F1?');
    await dialog(page).locator('.note-pick', { hasText: 'Alma' }).click();
    await expect(cell(page, 5).locator('.token')).toHaveText('A');
    await expect(person(page, 'Alma').locator('.where')).toHaveText('F1');
    // The notes of an occupied cell offer "Remove".
    await cell(page, 5).click();
    await dialog(page).getByRole('button', { name: 'Remove Alma the architect' }).click();
    await expect(cell(page, 5).locator('.token')).toHaveCount(0);
  });

  test('Place tool: pick, move someone here, remove, cancel', async ({ page }) => {
    await open(page);
    await page.getByRole('button', { name: '👤 Place' }).click();
    await cell(page, 6).click();
    await dialog(page).locator('.note-pick', { hasText: 'Basil' }).click();
    await cell(page, 7).click();
    await expect(dialog(page).locator('.note-pick', { hasText: 'Basil' })).toContainText('at A2');
    await dialog(page).locator('.note-pick', { hasText: 'Basil' }).click(); // moves Basil to B2
    await expect(cell(page, 7).locator('.token')).toHaveText('B');
    await cell(page, 0).click();
    await dialog(page).locator('.note-pick', { hasText: 'Alma' }).click();
    await cell(page, 0).click();
    await expect(dialog(page).locator('.note-pick', { hasText: 'Alma' })).toContainText('here');
    await dialog(page).locator('.note-pick', { hasText: 'Basil' }).click(); // Basil replaces Alma
    await expect(cell(page, 0).locator('.token')).toHaveText('B');
    await cell(page, 0).click();
    await dialog(page).getByRole('button', { name: 'Remove Basil the banker' }).click();
    await expect(cell(page, 0).locator('.token')).toHaveCount(0);
    await cell(page, 1).click();
    await dialog(page).locator('button', { hasText: 'Cancel' }).click();
    await expect(cell(page, 1).locator('.token')).toHaveCount(0);
  });

  test('blocked cells say so; noted people show as noted in the picker', async ({ page }) => {
    await open(page);
    await cell(page, 3).click(); // D1: a plant
    await expect(flash(page)).toContainText('Nobody can stand on a');
    await cell(page, 0).click();
    await dialog(page).locator('.note-pick', { hasText: 'Alma' }).click();
    await closeDialog(page);
    await page.getByRole('button', { name: '👤 Place' }).click();
    await cell(page, 0).click();
    await expect(dialog(page).locator('.note-pick', { hasText: 'Alma' })).toContainText('noted');
    await closeDialog(page);
    await cell(page, 3).click();
    await expect(flash(page)).toContainText('Nobody can stand on a');
  });

  test('Cross out tool and right-click cross out a cell; a placed person can not be crossed', async ({ page }) => {
    await open(page, { pos: [5, -1, -1, -1, -1, -1] });
    await page.getByRole('button', { name: '✕ Cross out' }).click();
    await cell(page, 7).click();
    await expect(cell(page, 7).locator('.mark')).toHaveText('✕');
    await cell(page, 7).click();
    await expect(cell(page, 7).locator('.mark')).toHaveCount(0);
    await cell(page, 5).click(); // Alma stands there: nothing happens
    await expect(cell(page, 5).locator('.token')).toHaveText('A');
    await page.getByRole('button', { name: '✎ Default' }).click();
    await cell(page, 8).click({ button: 'right' });
    await expect(cell(page, 8).locator('.mark')).toHaveText('✕');
    // A cross hides the notes; notes come back without it.
    await expect(cell(page, 0).locator('.mark.auto')).toHaveText('✕'); // row 1 is taken by Alma
  });

  test('row and column boxes take notes too, and show who fills them', async ({ page }) => {
    await open(page, { pos: [5, -1, -1, -1, -1, -1] });
    const rowBox = k => page.locator('.note-lane.rows .note-cell').nth(k);
    const colBox = k => page.locator('.note-lane.cols .note-cell').nth(k);
    await expect(rowBox(0).locator('.token')).toHaveText('A');
    await rowBox(3).click();
    await expect(dialog(page).locator('h2')).toHaveText('Row 4');
    await dialog(page).locator('.note-pick', { hasText: 'Celia' }).click();
    await dialog(page).locator('textarea.note-text').fill('C here');
    await closeDialog(page);
    await expect(rowBox(3).locator('.mini')).toHaveText('C');
    await expect(rowBox(3)).toHaveClass(/has-text/);
    await expect(colBox(1).locator('.pen')).toHaveText('✎');
  });

  test('two people in one row show a clash', async ({ page }) => {
    await open(page, { pos: [0, 1, -1, -1, -1, -1] });
    await expect(page.locator('.note-lane.rows .note-cell').first()).toHaveClass(/clash/);
    await expect(cell(page, 0).locator('.token')).toHaveClass(/bad/);
  });

  test('more than four noted people show as a wheel with a count', async ({ page }) => {
    await open(page, { pos: [-1, -1, -1, -1, -1, -1], notes: { 0: [0, 1, 2, 3, 4] }, nots: { 0: [5], 1: [0, 1, 2, 3, 4, 5] } });
    await expect(cell(page, 0).locator('.notes.wheel span').first()).toHaveText('5');
    await page.getByText('Use "can\'t be here" notes').click();
    await expect(cell(page, 0).locator('.not-badge')).toHaveText('✕1');
    await expect(cell(page, 1).locator('.notes.wheel.none')).toHaveText('✕6');
  });
});

test.describe('selected person', () => {
  test('a click on a person lights up their notes; a click on a cell notes them there', async ({ page }) => {
    await open(page, { pos: [-1, -1, -1, -1, -1, -1], notes: { 0: [0] } });
    await person(page, 'Alma').locator('.person-head').click();
    await expect(person(page, 'Alma')).toHaveClass(/sel/);
    await expect(cell(page, 0)).toHaveClass(/pulse/);
    await expect(page.locator('.tool-help')).toContainText('note Alma there');
    await cell(page, 1).click();
    await expect(cell(page, 1).locator('.mini')).toHaveText('A');
    await cell(page, 1).click(); // again: clear
    await expect(cell(page, 1).locator('.mini')).toHaveCount(0);
    // The row box too.
    await page.locator('.note-lane.rows .note-cell').nth(2).click();
    await expect(page.locator('.note-lane.rows .note-cell').nth(2).locator('.mini')).toHaveText('A');
    // Click on the card (not the head) toggles too; Enter on the head as well.
    await person(page, 'Alma').locator('ul.clues li').first().click(); // "Was alone in a room." has no link
    await expect(person(page, 'Alma')).not.toHaveClass(/sel/);
    await person(page, 'Alma').locator('.person-head').focus();
    await page.keyboard.press('Enter');
    await expect(person(page, 'Alma')).toHaveClass(/sel/);
    await person(page, 'Alma').locator('.person-head').focus(); // the redraw made a new head
    await page.keyboard.press(' ');
    await expect(person(page, 'Alma')).not.toHaveClass(/sel/);
  });

  test('with "can\'t be here" notes a click goes yes, no, clear', async ({ page }) => {
    await open(page);
    await page.getByText('Use "can\'t be here" notes').click();
    await person(page, 'Basil').locator('.person-head').click();
    await expect(page.locator('.tool-help')).toContainText("again: can't be there");
    await cell(page, 0).click();
    await expect(cell(page, 0).locator('.mini:not(.not)')).toHaveText('B');
    await cell(page, 0).click();
    await expect(cell(page, 0).locator('.mini.not')).toHaveText('B');
    await cell(page, 0).click();
    await expect(cell(page, 0).locator('.mini')).toHaveCount(0);
  });

  test('notes on a crossed cell, or for a placed person, are refused with a reason', async ({ page }) => {
    await open(page, { pos: [5, -1, -1, -1, -1, -1], marks: [7] });
    await person(page, 'Basil').locator('.person-head').click();
    await cell(page, 7).click();
    await expect(flash(page)).toContainText('crossed out');
    await cell(page, 0).click(); // row 1 is taken by Alma
    await expect(flash(page)).toContainText('crossed out');
    await person(page, 'Alma').locator('.person-head').click();
    await cell(page, 9).click();
    await expect(flash(page)).toContainText('Alma the architect is placed already');
    // The selected person's own cell pulses.
    await expect(cell(page, 5)).toHaveClass(/pulse/);
  });

  test('a link in a clue selects the person; a person link selects the other one', async ({ page }) => {
    await open(page);
    await person(page, 'Elias').locator('.ref').first().click();
    await expect(person(page, 'Elias')).toHaveClass(/sel/);
    await expect(page.locator('button.cell.hl').first()).toBeVisible();
    await person(page, 'Elias').locator('.ref').first().click(); // still selected, light off
    await expect(person(page, 'Elias')).toHaveClass(/sel/);
    await expect(page.locator('button.cell.hl')).toHaveCount(0);
  });
});

test.describe('pointer gestures', () => {
  test('drag a person onto cells notes them; dragging a placed token off the board removes it', async ({ page }) => {
    await open(page, { pos: [-1, -1, -1, -1, -1, 34] });
    const from = await person(page, 'Alma').locator('.token').boundingBox();
    const a = await cell(page, 0).boundingBox(), b = await cell(page, 1).boundingBox();
    await page.mouse.move(...mid(from));
    await page.mouse.down();
    await page.mouse.move(a.x + 10, a.y + 10, { steps: 5 });
    await page.mouse.move(a.x + 12, a.y + 12); // still inside: wait again
    await page.waitForTimeout(600);
    await page.mouse.move(b.x + 10, b.y + 10, { steps: 5 });
    await page.waitForTimeout(600);
    await page.mouse.up();
    await expect(cell(page, 0).locator('.mini')).toHaveText('A');
    await expect(cell(page, 1).locator('.mini')).toHaveText('A');
    await expect(flash(page)).toContainText('2 cells noted');
    // A single cell: just the drop target.
    await page.mouse.move(...mid(from));
    await page.mouse.down();
    const c = await cell(page, 2).boundingBox();
    await page.mouse.move(c.x + 10, c.y + 10, { steps: 5 });
    await page.mouse.up();
    await expect(flash(page)).toContainText('Alma the architect can be here');
    // Onto a blocked cell: refused.
    await page.mouse.move(...mid(from));
    await page.mouse.down();
    const d = await cell(page, 3).boundingBox();
    await page.mouse.move(d.x + 10, d.y + 10, { steps: 5 });
    await page.mouse.up();
    await expect(flash(page)).toContainText('Nobody can stand on a');
    // A placed token dragged off the board.
    const e = await cell(page, 34).locator('.token').boundingBox();
    await page.mouse.move(...mid(e));
    await page.mouse.down();
    await page.mouse.move(5, 5, { steps: 8 });
    await page.mouse.up();
    await expect(cell(page, 34).locator('.token')).toHaveCount(0);
  });

  test('a long press on a cell opens the place picker, with the selected person chosen', async ({ page }) => {
    await open(page);
    await person(page, 'Dexter').locator('.person-head').click();
    const box = await cell(page, 27).boundingBox();
    await page.mouse.move(box.x + 10, box.y + 10);
    await page.mouse.down();
    await page.waitForTimeout(1100);
    await page.mouse.up();
    await expect(dialog(page).locator('h2')).toHaveText('Who stands on D5?');
    await expect(dialog(page).locator('.note-pick[aria-pressed="true"]')).toContainText('Dexter');
    await expect(dialog(page).locator('.place-chosen')).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(cell(page, 27).locator('.token')).toHaveText('D');
    // A short press that moves away does nothing.
    const b2 = await cell(page, 0).boundingBox();
    await page.mouse.move(b2.x + 10, b2.y + 10);
    await page.mouse.down();
    await page.mouse.move(b2.x + 40, b2.y + 40);
    await page.mouse.up();
    await expect(dialog(page)).not.toBeVisible();
    // With a cancel in the picker.
    await page.mouse.move(b2.x + 10, b2.y + 10);
    await page.mouse.down();
    await page.waitForTimeout(1100);
    await page.mouse.up();
    await dialog(page).getByRole('button', { name: 'Cancel' }).click();
    await expect(cell(page, 0).locator('.token')).toHaveCount(0);
  });

  test('double-click a person opens their board: ✓, ✕ and clear', async ({ page }) => {
    await open(page, { pos: [-1, -1, -1, -1, -1, 34], marks: [7] });
    await page.getByText('Use "can\'t be here" notes').click();
    await person(page, 'Alma').locator('.person-head').dblclick();
    await expect(dialog(page).locator('h2')).toHaveText('Where can Alma the architect be?');
    const pc = i => dialog(page).locator('.person-board .board > button').nth(i);
    await pc(0).click();
    await expect(pc(0).locator('.pmark.yes')).toHaveText('✓');
    await pc(0).click();
    await expect(pc(0).locator('.pmark.no')).toHaveCount(1);
    await pc(0).click();
    await expect(pc(0).locator('.pmark')).toHaveCount(0);
    await pc(1).click();
    await closeDialog(page);
    await expect(cell(page, 1).locator('.mini')).toHaveText('A');
    // The magnifier opens the same board. A clue link lights up cells on this board only.
    await person(page, 'Elias').locator('.person-zoom').click();
    await expect(dialog(page).locator('.person-board .token').first()).toHaveText('E');
    await expect(dialog(page)).toContainText('Was resting on a sofa');
    await dialog(page).locator('.ref').first().click();
    await expect(dialog(page).locator('.person-board button.hl').first()).toBeVisible();
    await dialog(page).locator('.ref').first().click();
    await expect(dialog(page).locator('.person-board button.hl')).toHaveCount(0);
    await closeDialog(page);
    await person(page, 'Victor').locator('.person-zoom').click();
    await expect(dialog(page)).toContainText('💀 victim');
    await closeDialog(page);
  });
});

test.describe('undo, reset and options', () => {
  test('undo and redo', async ({ page }) => {
    await open(page);
    const undo = page.getByRole('button', { name: 'Undo' }), redo = page.getByRole('button', { name: 'Redo' });
    await expect(undo).toBeDisabled();
    await cell(page, 0).click({ button: 'right' });
    await undo.click();
    await expect(cell(page, 0).locator('.mark')).toHaveCount(0);
    await redo.click();
    await expect(cell(page, 0).locator('.mark')).toHaveText('✕');
    await expect(redo).toBeDisabled();
  });

  test('reset: cancel, clear the board, exit', async ({ page }) => {
    await open(page, { pos: [5, -1, -1, -1, -1, -1] });
    await page.getByRole('button', { name: 'Reset', exact: true }).click();
    await page.evaluate(() => document.getElementById('dialog').close('cancel'));
    await expect(cell(page, 5).locator('.token')).toHaveText('A');
    await page.getByRole('button', { name: 'Reset', exact: true }).click();
    await page.evaluate(() => document.getElementById('dialog').close('reset'));
    await expect(cell(page, 5).locator('.token')).toHaveCount(0);
    await page.getByRole('button', { name: 'Reset', exact: true }).click();
    await page.evaluate(() => document.getElementById('dialog').close('exit'));
    await expect(page.locator('.hero h1')).toBeVisible(); // a player-made case goes back to the menu
  });

  test('reset: a similar case opens the maker with this case\'s settings', async ({ page }) => {
    await open(page);
    await page.getByRole('button', { name: 'Reset', exact: true }).click();
    await page.evaluate(() => document.getElementById('dialog').close('similar'));
    await expect(page.locator('.maker-status')).toContainText('of your last case are set');
    await expect(page.getByLabel('Board size')).toHaveValue('6');
  });

  test('reset: a new case with the same rules', async ({ page }) => {
    await open(page);
    const before = page.url();
    await page.getByRole('button', { name: 'Reset', exact: true }).click();
    await page.evaluate(() => document.getElementById('dialog').close('new'));
    await expect.poll(() => page.url(), { timeout: 60000 }).not.toBe(before);
    await expect(page.locator('.case-head h1')).toContainText('Your case');
  });

  test('every option switches, and Reset brings the defaults back', async ({ page }) => {
    await open(page, { pos: [5, -1, -1, 19, -1, -1], notes: { 9: [0] } });
    await person(page, 'Alma').locator('.person-head').click();
    await page.getByText('Shade used rows & columns').click();
    await expect(page.locator('button.cell.shaded')).toHaveCount(0);
    await page.getByText('Mark broken rules in people list').click();
    await expect(person(page, 'Celia').locator('li.ok')).toHaveText('Was in row 4.');
    await page.getByText('Auto-hide placed persons at other cells').click();
    await expect(cell(page, 9).locator('.mini')).toHaveText('A');
    await page.getByText('Also blink cells with hidden person dots').click();
    await page.getByText('Show separate board for placing').click();
    await expect(page.locator('.board-frame.view-only')).toHaveCount(1);
    await expect(page.locator('.board-frame.plain')).toHaveCount(1);
    await page.getByRole('button', { name: '↺ Reset' }).click();
    await expect(flash(page)).toContainText('back to their defaults');
    await expect(page.locator('.board-frame.view-only')).toHaveCount(0);
  });

  test('hidden dots of a placed person blink only with the option on', async ({ page }) => {
    await open(page, { pos: [5, -1, -1, -1, -1, -1], notes: { 9: [0], r1: [0], c1: [0] } });
    await person(page, 'Alma').locator('.person-head').click();
    await expect(cell(page, 9)).not.toHaveClass(/pulse/);
    await page.getByText('Also blink cells with hidden person dots').click();
    await expect(cell(page, 9)).toHaveClass(/pulse/);
  });

  test('zoom buttons make the board bigger and smaller, and remember it', async ({ page }) => {
    await page.setViewportSize({ width: 1400, height: 900 });
    await open(page);
    const frame = page.locator('.board-frame').first();
    const out = page.getByRole('button', { name: 'Smaller board' }).first();
    for (let k = 0; k < 8; k++) if (await out.isEnabled()) await out.click();
    await expect(out).toBeDisabled();
    await expect(frame).toHaveCSS('zoom', '0.5');
    await page.getByRole('button', { name: 'Bigger board' }).first().click();
    await expect(frame).toHaveCSS('zoom', '0.6');
    await page.setViewportSize({ width: 500, height: 900 });
    await page.reload();
    await expect(page.locator('.board-frame').first()).toHaveCSS('zoom', '0.6');
    for (let k = 0; k < 15; k++) {
      const b = page.getByRole('button', { name: 'Bigger board' }).first();
      if (await b.isDisabled()) break;
      await b.click();
    }
    await expect(page.getByRole('button', { name: 'Bigger board' }).first()).toBeDisabled();
  });

  test('legend: rooms and objects light up their cells', async ({ page }) => {
    await open(page);
    await page.locator('.legend button.chip').first().click();
    await expect(page.locator('button.cell.hl').first()).toBeVisible();
    await page.locator('.legend button.chip').first().click();
    await expect(page.locator('button.cell.hl')).toHaveCount(0);
    for (const k of await page.locator('.object-legend button.key').all()) {
      await k.click();
      await expect(page.locator('button.cell.hl').first()).toBeVisible();
    }
    await page.locator('.rules-box.facts-box .ref').first().click();
    await expect(page.locator('button.cell.hl').first()).toBeVisible();
  });
});

test.describe('submit', () => {
  test('a wrong board: what is wrong, the solution, then Continue', async ({ page }) => {
    // Alma and Basil swapped rows: two people in the wrong place.
    await open(page, { pos: [6, 5, 14, 19, 27, 34] });
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(dialog(page).locator('h2')).toHaveText('Submit your answer');
    await dialog(page).locator('.note-pick', { hasText: 'Dexter' }).click();
    await dialog(page).locator('.room-pick', { hasText: 'Cellar' }).click();
    await dialog(page).getByRole('button', { name: 'Submit answer' }).click();
    await expect(dialog(page).locator('h2')).toContainText('Sorry, that is wrong');
    await expect(dialog(page).locator('.result-list')).toContainText('2 people are in the wrong place');
    await expect(dialog(page).locator('.result-list')).toContainText('Dexter the dealer has an alibi');
    await expect(dialog(page).locator('.result-list')).toContainText('Room: the Cellar is wrong');
    await dialog(page).locator('summary', { hasText: 'Show the solution' }).click();
    await expect(dialog(page).locator('.token.wrong').first()).toBeVisible();
    await page.evaluate(() => document.getElementById('dialog').close('continue'));
    await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled();
  });

  test('one wrong person, right answers; Restart clears the board', async ({ page }) => {
    await open(page, { pos: [5, 6, 14, 19, 27, 33] });
    await page.getByRole('button', { name: 'Submit' }).click();
    await dialog(page).locator('.note-pick', { hasText: 'Celia' }).click();
    await dialog(page).locator('.room-pick', { hasText: 'Gallery' }).click();
    await dialog(page).getByRole('button', { name: 'Submit answer' }).click();
    await expect(dialog(page).locator('.result-list')).toContainText('One person is in the wrong place');
    await expect(dialog(page).locator('.result-list')).toContainText('is right');
    await page.evaluate(() => document.getElementById('dialog').close('restart'));
    await expect(page.locator('button.cell .token')).toHaveCount(0);
  });

  test('the right board, preselected answers: case closed, then Exit', async ({ page }) => {
    await open(page, { pos: SOLUTION });
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(dialog(page).locator('.note-pick:not(.room-pick)[aria-pressed="true"]')).toContainText('Celia');
    await expect(dialog(page).locator('.room-pick[aria-pressed="true"]')).toContainText('Gallery');
    await dialog(page).getByRole('button', { name: 'Submit answer' }).click();
    await expect(dialog(page).locator('h2')).toContainText('Case closed!');
    await expect(dialog(page)).toContainText('Brilliant detective work');
    await expect(dialog(page).locator('.dialog-buttons button').first()).toHaveText('Continue'); // a player-made case has no next case
    await closeDialog(page);
    await expect(page.locator('.story.closed')).toContainText('Case closed. Celia the cook did it.');
    await expect(page.getByRole('button', { name: '✓ Solved' })).toBeVisible();
    // The board is locked now.
    await cell(page, 0).click();
    await expect(dialog(page)).not.toBeVisible();
    await page.locator('button.submit').click(); // now named "✓ Solved"
    await dialog(page).getByRole('button', { name: 'Submit answer' }).click();
    await expect(dialog(page).locator('.result-title')).toBeVisible(); // the result dialog is open
    await page.evaluate(() => document.getElementById('dialog').close('exit'));
    await expect(page.locator('.hero h1')).toBeVisible();
  });

  test('cancel the submit dialog', async ({ page }) => {
    await open(page, { pos: [5, 6, 14, 22, 27, 31] }); // Victor alone in the Gallery: no murderer to preselect
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(dialog(page).getByRole('button', { name: 'Submit answer' })).toBeDisabled();
    await dialog(page).getByRole('button', { name: 'Cancel' }).click();
    await expect(dialog(page)).not.toBeVisible();
  });

  test('a solved campaign case goes on to the next case', async ({ page }) => {
    const { CAMPAIGNS } = await import('../../js/levels.js');
    await seedStorage(page, { levels: { [caseKey(0)]: { pos: CAMPAIGNS[0].levels[0].solution } } });
    await page.goto('/index.html#/c/manor/0');
    await page.getByRole('button', { name: 'Submit' }).click();
    await dialog(page).getByRole('button', { name: 'Submit answer' }).click();
    await expect(dialog(page).locator('.dialog-buttons button').first()).toHaveText('Next case →');
    await page.evaluate(() => document.getElementById('dialog').close('continue'));
    await expect(page).toHaveURL(/#\/c\/manor\/1$/);
  });
});

test.describe('share and help', () => {
  test('share offers two links that copy', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    await open(page, { pos: [5, -1, -1, -1, -1, -1] });
    await page.getByRole('button', { name: 'Share this case' }).click();
    await expect(dialog(page).locator('textarea').nth(1)).toHaveValue(/\?b=/);
    await dialog(page).getByRole('button', { name: 'Copy: Empty board' }).click();
    await expect(dialog(page).locator('.status')).toHaveText('Copied to clipboard.');
  });

  test('help opens from the game', async ({ page }) => {
    await open(page);
    await page.getByRole('button', { name: 'Help: how to play' }).click();
    await expect(dialog(page).locator('h2')).toHaveText('How to play');
    // The × in the corner closes it.
    await dialog(page).locator('.dialog-x').click();
    await expect(dialog(page)).toBeHidden();
  });
});
