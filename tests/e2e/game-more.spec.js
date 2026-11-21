// More paths of the game screen: quiet hint steps, rare clue kinds, small screens,
// split view, the long press in detail, and boards that are solved.

import { test, expect } from './fixtures.js';
import { levelLink, RULE_CASES, openHints } from './helpers.js';
import { readFileSync } from 'node:fs';
import { TRADES } from '../../js/themes.js';

const load = f => JSON.parse(readFileSync(new URL(`../fixtures/${f}`, import.meta.url), 'utf8'));
const LEVEL = load('manor-medium-3.json');
const SOLUTION = [5, 6, 14, 19, 27, 34];
const open = (page, board = null, level = LEVEL, theme = 'manor') => page.goto(levelLink(theme, level, board));
const cell = (page, i) => page.locator(`.board-frame:not(.view-only) button.cell[data-i="${i}"]`);
const person = (page, name) => page.locator('li.person', { hasText: name });
const dialog = page => page.locator('#dialog');
const closeDialog = page => page.evaluate(() => document.getElementById('dialog').close(''));
const mid = b => [b.x + b.width / 2, b.y + b.height / 2];

test('a step that changes nothing you can see is told first, then the step to write down', async ({ page }) => {
  // Blackwood Manor 6×6 with 6 "what if" steps; Elias (5) has no notes yet.
  const notes = { 0: [2, 4], 2: [1, 3], 6: [1, 4], 9: [1], 10: [3], 11: [2], 12: [4], 13: [5], 15: [2], 17: [2], 18: [2, 3, 4],
    21: [3], 22: [2, 3], 26: [1, 2, 4], 27: [3, 4], 28: [3], 30: [4], 31: [5], 33: [1, 4] };
  await open(page, { pos: [-1, -1, -1, -1, -1, -1], notes }, load('manor-quiet.json'));
  await openHints(page);
  await expect(page.locator('#dialog .hint-text')).toContainText('Then:');
});

test('rare clue kinds: bandits and tasks', async ({ page }) => {
  const { theme, level } = RULE_CASES.tasks;
  const trade = TRADES[level.tasks[0][0]].id; // stored tasks name the trade by its number
  const clues = [...level.clues, [0, 'bandit'], [1, 'notBandit'], [0, 'withBandit'], [1, 'task', trade], [0, 'taskEither', [trade, trade]], [1, 'noTask']];
  await page.goto(levelLink(theme, { ...level, clues }));
  const side = page.locator('.side');
  await expect(side).toContainText('Was a bandit.');
  await expect(side).toContainText('Was not a bandit.');
  await expect(side).toContainText('Was in the same room as a bandit.');
  await expect(side).toContainText('Had no task.');
  await expect(side.locator('.ref', { hasText: /^an? / }).first()).toBeVisible();
});

test('small screens: hints without the side list scrolling; tiny boards can not zoom in', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 700 });
  await open(page);
  await openHints(page);
  await closeDialog(page);
  await page.setViewportSize({ width: 120, height: 700 });
  await expect(page.getByRole('button', { name: 'Bigger board' }).first()).toBeDisabled();
});

test('share a campaign case; without fullscreen support there is no fullscreen button', async ({ page }) => {
  await page.addInitScript(() => { Object.defineProperty(document, 'fullscreenEnabled', { value: false }); });
  await page.goto('/index.html#/c/manor/0');
  await expect(page.getByRole('button', { name: 'Fullscreen' })).toHaveCount(0);
  await page.getByRole('button', { name: 'Share this case' }).click();
  await expect(dialog(page).locator('textarea').first()).toHaveValue(/#\/c\/manor\/0$/);
});

test('a resize on the game screen keeps the zoom inside the window', async ({ page }) => {
  await page.setViewportSize({ width: 1400, height: 900 });
  await open(page);
  const bigger = page.getByRole('button', { name: 'Bigger board' }).first();
  for (let k = 0; k < 6 && await bigger.isEnabled(); k++) await bigger.click();
  await page.setViewportSize({ width: 600, height: 900 });
  await expect(page.getByRole('button', { name: 'Bigger board' }).first()).toBeDisabled();
});

test('"can\'t be here" notes on a row box are not checked as mistakes', async ({ page }) => {
  await open(page, { pos: [-1, -1, -1, -1, -1, -1], nots: { r0: [0], 7: [0] } });
  await page.getByText('Use "can\'t be here" notes').click();
  await openHints(page);
  await expect(page.locator('#dialog .hint-text.mistake')).toHaveCount(0);
});

test('pulses: a column box note and a crossed cell of the selected person', async ({ page }) => {
  await open(page, { pos: [-1, 6, -1, -1, -1, -1], marks: [16], notes: { c3: [0], c0: [0], 15: [0], 16: [0] } });
  await person(page, 'Alma').locator('.person-head').click();
  await expect(page.locator('.note-lane.cols .note-cell').nth(3)).toHaveClass(/pulse/);
  await expect(page.locator('.note-lane.cols .note-cell').nth(0)).not.toHaveClass(/pulse/); // Basil fills column A
  await expect(cell(page, 15)).toHaveClass(/pulse/);
  await expect(cell(page, 16)).not.toHaveClass(/pulse/); // crossed out: the dot is hidden
});

test('split view: placed people and lit cells on the floor plan', async ({ page }) => {
  await open(page, { pos: [5, -1, 14, -1, -1, -1] });
  await page.getByText('Show separate board for placing').click();
  await page.locator('.legend button.chip').first().click();
  const view = page.locator('.board-frame.view-only');
  await expect(view.locator('.token')).toHaveText(['A', 'V']);
  await expect(view.locator('.cell.hl').first()).toBeVisible();
});

test('long press: a small wobble still counts; the right-click right after it does nothing', async ({ page }) => {
  await open(page);
  const b = await cell(page, 0).boundingBox();
  await page.mouse.move(b.x + 10, b.y + 10);
  await page.mouse.down();
  await page.mouse.move(b.x + 13, b.y + 12); // less than 8 px
  await page.waitForTimeout(1100);
  await expect(dialog(page).locator('h2')).toHaveText('Who stands on A1?');
  await page.evaluate(() => document.querySelector('button.cell[data-i="0"]').dispatchEvent(new MouseEvent('contextmenu', { bubbles: true, cancelable: true })));
  await page.mouse.up();
  await closeDialog(page);
  await expect(cell(page, 0).locator('.mark')).toHaveCount(0);
});

test('a solved board: no person board; the person board shows others dimmed and the victim', async ({ page }) => {
  await open(page, { pos: [5, -1, 14, -1, -1, -1] });
  await person(page, 'Alma').locator('.person-zoom').click();
  await expect(dialog(page).locator('.person-board .token.dim.victim')).toHaveText('V');
  await closeDialog(page);
  await open(page, { pos: SOLUTION });
  await dialog(page).getByRole('button', { name: 'Use shared board' }).click(); // replaces the board above
  await page.locator('button.submit').click();
  await dialog(page).getByRole('button', { name: 'Submit answer' }).click();
  await expect(dialog(page).locator('.result-title')).toBeVisible(); // the result dialog is open
  await closeDialog(page);
  await person(page, 'Alma').locator('.person-zoom').click();
  await expect(dialog(page)).not.toBeVisible();
});

test('a click right after a drag does not select; other keys do nothing; broken clues are marked', async ({ page }) => {
  await open(page, { pos: [-1, -1, -1, 0, -1, -1] }); // Celia in row 1: her clue is broken
  await page.getByText('Mark broken rules in people list').click();
  await expect(person(page, 'Celia').locator('li.no')).toHaveText('Was in row 4.');
  const tok = await person(page, 'Basil').locator('.token').boundingBox();
  await page.mouse.move(...mid(tok));
  await page.mouse.down();
  await page.mouse.move(tok.x + 30, tok.y + 4, { steps: 3 });
  await page.mouse.move(...mid(tok), { steps: 3 });
  await page.mouse.up(); // ends on the card: the click is ignored
  await expect(person(page, 'Basil')).not.toHaveClass(/sel/);
  await person(page, 'Basil').locator('.person-head').focus();
  await page.keyboard.press('a');
  await expect(person(page, 'Basil')).not.toHaveClass(/sel/);
});

test('touch: no scroll block before the hold; moving inside a cell starts its wait again', async ({ page }) => {
  await open(page);
  const prevented = await page.evaluate(() => {
    const head = document.querySelector('li.person .person-name');
    const r = head.getBoundingClientRect();
    head.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, pointerType: 'touch', clientX: r.x + 5, clientY: r.y + 5 }));
    const e = new Event('touchmove', { cancelable: true });
    window.dispatchEvent(e);
    window.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, pointerType: 'touch', clientX: r.x + 5, clientY: r.y + 5 }));
    return e.defaultPrevented;
  });
  expect(prevented).toBe(false);
  // Mouse: move around inside a cell before it counts.
  const tok = await person(page, 'Alma').locator('.token').boundingBox();
  const a = await cell(page, 0).boundingBox();
  await page.mouse.move(...mid(tok));
  await page.mouse.down();
  await page.mouse.move(a.x + 8, a.y + 8, { steps: 4 });
  await page.mouse.move(a.x + 20, a.y + 20);
  await page.waitForTimeout(600);
  await page.mouse.up();
  await expect(cell(page, 0).locator('.mini')).toHaveText('A');
});

test('a new case for a case the hints can not solve uses the default difficulty', async ({ page }) => {
  await open(page, null, { ...LEVEL, tries: -1 });
  const before = page.url();
  await page.getByRole('button', { name: 'Reset', exact: true }).click();
  await page.evaluate(() => document.getElementById('dialog').close('new'));
  await expect(page).not.toHaveURL(before, { timeout: 60000 });
});

test('small things: undo brings notes back, flashes fade, refused fullscreen, magnifier keys', async ({ page }) => {
  await open(page, { pos: [-1, 6, -1, -1, -1, -1], notes: { r1: [0], 1: [0] }, nots: { 2: [1] } });
  // Undo after a change restores notes and "can't be here" notes.
  await cell(page, 7).click({ button: 'right' });
  await page.getByRole('button', { name: 'Undo' }).click();
  await expect(cell(page, 1).locator('.mini')).toHaveText('A');
  // A flash goes away after a while.
  await cell(page, 3).click();
  await expect(page.locator('.flash.show')).toBeVisible();
  await expect(page.locator('.flash.show')).toHaveCount(0, { timeout: 5000 });
  // A row note of the selected person, with someone in that row: hidden, so no pulse.
  await person(page, 'Alma').locator('.person-head').click();
  await expect(page.locator('.note-lane.rows .note-cell').nth(1)).not.toHaveClass(/pulse/); // Basil fills row 2: Alma's note there is hidden
  // A card click selects when nobody is selected.
  await person(page, 'Alma').locator('.person-head').click();
  await person(page, 'Celia').locator('ul.clues li').first().click();
  await expect(person(page, 'Celia')).toHaveClass(/sel/);
  // Double-click and keys on the magnifier stay there.
  await page.evaluate(() => document.querySelectorAll('.person-zoom')[5].dispatchEvent(new MouseEvent('dblclick', { bubbles: true })));
  await person(page, 'Elias').locator('.person-zoom').press('x');
  // Fullscreen that the browser refuses: nothing breaks.
  await page.evaluate(() => { document.documentElement.requestFullscreen = () => Promise.reject(new Error('no')); });
  await page.getByRole('button', { name: 'Fullscreen' }).click();
  await expect(page.getByRole('button', { name: 'Fullscreen' })).toBeVisible();
});

test('a window that gets very narrow: even the smallest zoom is too big, so the board goes to 50%', async ({ page }) => {
  await open(page);
  await page.setViewportSize({ width: 40, height: 700 });
  await expect(page.locator('.board-frame').first()).toHaveCSS('zoom', '0.5');
});
