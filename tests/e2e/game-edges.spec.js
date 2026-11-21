// Rarer paths of the game screen: touch gestures, edge scrolling, a cancelled drag,
// the undo limit, odd names, boards without doors, and cases the hints can not solve.

import { test, expect } from './fixtures.js';
import { caseLink, levelLink, seedStorage, RULE_CASES, caseKey } from './helpers.js';
import { readFileSync } from 'node:fs';

const FILE = '../fixtures/manor-medium-3.json';
const LEVEL = JSON.parse(readFileSync(new URL(FILE, import.meta.url), 'utf8'));
const SOLUTION = [5, 6, 14, 19, 27, 34];
const open = (page, board = null, level = LEVEL) => page.goto(levelLink('manor', level, board));
const cell = (page, i) => page.locator(`.board-frame:not(.view-only) button.cell[data-i="${i}"]`);
const person = (page, name) => page.locator('li.person', { hasText: name });
const dialog = page => page.locator('#dialog');
const closeDialog = page => page.evaluate(() => document.getElementById('dialog').close(''));
const mid = b => [b.x + b.width / 2, b.y + b.height / 2];

// Pointer events as a finger makes them (Playwright's mouse is always a mouse).
async function touch(page, type, target, [x, y]) {
  await page.evaluate(({ type, target, x, y }) => {
    const el = target ? document.querySelector(target) : window;
    el.dispatchEvent(new PointerEvent(type, { bubbles: true, cancelable: true, pointerType: 'touch', clientX: x, clientY: y, button: 0 }));
  }, { type, target, x, y });
}

test.describe('touch', () => {
  test('hold a card, then drag it onto a cell: notes them there', async ({ page }) => {
    await open(page);
    const head = await person(page, 'Basil').locator('.person-name').boundingBox();
    const target = await cell(page, 6).boundingBox();
    await touch(page, 'pointerdown', 'li.person:nth-child(2) .person-name', mid(head));
    await page.waitForTimeout(400); // the hold arms the drag
    await touch(page, 'pointermove', null, mid(target));
    // The page must not scroll while dragging.
    expect(await page.evaluate(() => { const e = new Event('touchmove', { cancelable: true }); window.dispatchEvent(e); return e.defaultPrevented; })).toBe(true);
    await page.waitForTimeout(600);
    await touch(page, 'pointerup', null, mid(target));
    await expect(cell(page, 6).locator('.mini')).toHaveText('B');
  });

  test('a swipe before the hold is a scroll, not a drag', async ({ page }) => {
    await open(page);
    const head = await person(page, 'Basil').locator('.person-name').boundingBox();
    const [x, y] = mid(head);
    await touch(page, 'pointerdown', 'li.person:nth-child(2) .person-name', [x, y]);
    await touch(page, 'pointermove', null, [x + 2, y + 2]); // a small move is fine
    await touch(page, 'pointermove', null, [x, y + 40]);
    await touch(page, 'pointerup', null, [x, y + 40]);
    await expect(page.locator('.drag-ghost')).toHaveCount(0);
  });

  test('on touch the card does not open the browser menu', async ({ page }) => {
    await open(page);
    const prevented = await page.evaluate(() => {
      const e = new PointerEvent('contextmenu', { bubbles: true, cancelable: true, pointerType: 'touch' });
      document.querySelector('li.person').dispatchEvent(e);
      return e.defaultPrevented;
    });
    expect(prevented).toBe(true);
  });
});

test.describe('mouse drags', () => {
  test('the drag ghost scrolls the page near the edges; a cancelled drag does nothing', async ({ page }) => {
    await page.setViewportSize({ width: 900, height: 500 });
    await open(page);
    await person(page, 'Victor').scrollIntoViewIfNeeded();
    const tok = await person(page, 'Victor').locator('.token').boundingBox();
    await page.mouse.move(...mid(tok));
    await page.mouse.down();
    await page.mouse.move(tok.x + 30, 480, { steps: 4 }); // near the bottom edge
    await expect(page.locator('.drag-ghost.victim')).toBeVisible();
    await page.waitForTimeout(200);
    await page.mouse.move(tok.x + 30, 10, { steps: 4 }); // near the top edge
    await page.waitForTimeout(200);
    await page.evaluate(() => window.dispatchEvent(new PointerEvent('pointercancel', { bubbles: true })));
    await expect(page.locator('.drag-ghost')).toHaveCount(0);
    await page.mouse.up();
  });

  test('a cell counts once; moving inside it again does not count it twice', async ({ page }) => {
    await open(page, { pos: [-1, -1, -1, -1, -1, -1], nots: { 0: [0, 1], 1: [0] } });
    const tok = await person(page, 'Alma').locator('.token').boundingBox();
    const a = await cell(page, 0).boundingBox();
    await page.mouse.move(...mid(tok));
    await page.mouse.down();
    await page.mouse.move(a.x + 10, a.y + 10, { steps: 4 });
    await page.waitForTimeout(600);
    await page.mouse.move(a.x + 25, a.y + 25, { steps: 2 });
    const b = await cell(page, 1).boundingBox();
    await page.mouse.move(b.x + 10, b.y + 10, { steps: 4 });
    await page.mouse.up();
    await expect(cell(page, 0).locator('.mini')).toHaveText('A');
    // "can't be here" for Alma is gone there; Basil's stays.
    await page.getByText('Use "can\'t be here" notes').click();
    await expect(cell(page, 0).locator('.mini.not')).toHaveText('B');
    await expect(cell(page, 1).locator('.mini.not')).toHaveCount(0);
  });

  test('a token dropped on its own cell, or a card dropped off the board, changes nothing', async ({ page }) => {
    await open(page, { pos: [5, -1, -1, -1, -1, -1] });
    const tok = await cell(page, 5).locator('.token').boundingBox();
    await page.mouse.move(...mid(tok));
    await page.mouse.down();
    await page.mouse.move(tok.x + 90, tok.y + 30, { steps: 3 }); // far enough to start a drag
    await expect(page.locator('.drag-ghost')).toHaveCount(1);
    await page.mouse.move(...mid(tok), { steps: 3 });
    await page.mouse.up();
    await expect(cell(page, 5).locator('.token')).toHaveText('A');
    await expect(page.locator('.flash.show')).toHaveCount(0);
    const card = await person(page, 'Basil').locator('.token').boundingBox();
    await page.mouse.move(...mid(card));
    await page.mouse.down();
    await page.mouse.move(5, 5, { steps: 6 });
    await page.mouse.up();
    await expect(page.locator('button.cell .mini')).toHaveCount(0);
  });

  test('right button and solved boards do not start a drag', async ({ page }) => {
    await open(page, { pos: SOLUTION, solved: false });
    const tok = await person(page, 'Alma').locator('.token').boundingBox();
    await page.mouse.move(...mid(tok));
    await page.mouse.down({ button: 'right' });
    await page.mouse.move(tok.x + 40, tok.y + 40, { steps: 3 });
    await expect(page.locator('.drag-ghost')).toHaveCount(0);
    await page.mouse.up({ button: 'right' });
  });
});

test.describe('state', () => {
  test('undo keeps the last 200 steps', async ({ page }) => {
    await open(page);
    await page.evaluate(() => {
      const c = () => document.querySelector('button.cell[data-i="0"]');
      for (let k = 0; k < 205; k++) c().dispatchEvent(new MouseEvent('contextmenu', { bubbles: true, cancelable: true }));
    });
    let undos = 0;
    const undo = page.getByRole('button', { name: 'Undo' });
    while (await undo.isEnabled()) { await page.evaluate(() => document.querySelector('[aria-label="Undo"]').click()); undos++; }
    expect(undos).toBe(200);
  });

  test('a saved zoom that is not on the list falls back to 100%', async ({ page }) => {
    await seedStorage(page, { settings: { zoom: 7 } });
    await open(page);
    await expect(page.locator('.board-frame').first()).toHaveCSS('zoom', '1');
  });

  test('a solved case: row boxes do not open', async ({ page }) => {
    await seedStorage(page, { levels: {} });
    await open(page, { pos: SOLUTION });
    await page.locator('button.submit').click();
    await dialog(page).getByRole('button', { name: 'Submit answer' }).click();
    await expect(dialog(page).locator('.result-title')).toBeVisible(); // the result dialog is open
    await closeDialog(page);
    await page.locator('.note-lane.rows .note-cell').first().click();
    await expect(dialog(page)).not.toBeVisible();
  });

  test('the notes dialog has a "can\'t be here" list when that option is on', async ({ page }) => {
    await open(page, { pos: [-1, -1, -1, -1, -1, -1], nots: { r0: [0] } });
    await page.getByText('Use "can\'t be here" notes').click();
    await cell(page, 0).click();
    await dialog(page).locator('.note-pick:not(.not)', { hasText: 'Alma' }).click();
    await dialog(page).locator('.note-pick.not', { hasText: 'Alma' }).click(); // moves Alma to "can't"
    await expect(dialog(page).locator('.note-pick:not(.not)', { hasText: 'Alma' })).toHaveAttribute('aria-pressed', 'false');
    await closeDialog(page);
    await expect(cell(page, 0).locator('.mini.not')).toHaveText('A');
  });
});

test.describe('odd cases', () => {
  test('names not starting with A to K get letters by their order; no doors or windows; a north-south river', async ({ page }) => {
    const { theme, level } = RULE_CASES.river;
    const odd = { ...level, people: level.people.map((nm, p) => (p === level.victim ? nm : `Zed ${nm}`)), doors: undefined, windows: undefined,
      river: [level.river[0] === 'v' ? 'h' : 'v', level.river[1], level.river[2]] }; // the other way round
    await page.goto(levelLink(theme, odd));
    const letters = await page.locator('li.person .person-head .token').allTextContents();
    expect(letters).toContain('A');
    await expect(page.locator('.board .features')).toHaveCount(0);
    await expect(page.locator('.board .river')).toHaveCount(1);
  });

  test('a case the hints can not solve step by step: no badge, and "similar" leaves the difficulty', async ({ page }) => {
    await open(page, null, { ...LEVEL, tries: -1 });
    await expect(page.locator('.case-head .difficulty')).toHaveCount(0);
    await page.getByRole('button', { name: 'Reset', exact: true }).click();
    await page.evaluate(() => document.getElementById('dialog').close('similar'));
    await expect(page.locator('.maker-status')).toContainText('of your last case are set');
  });

  test('a new case with the same rules that can not be found', async ({ page }) => {
    // 4×4 with 11 "what if" steps (Extreme): no such case exists.
    const small = JSON.parse(JSON.stringify(RULE_CASES['fact-edge'].level));
    await open(page, null, { ...LEVEL, tries: 11, size: 4, rooms: '0001000122223333', objects: '................', solution: [1, 6, 8, 15, 2, 12],
      people: LEVEL.people.slice(0, 4), victim: 2, clues: [[0, 'row', 0], [1, 'row', 1], [3, 'row', 3]], doors: [], windows: [], facts: undefined, roomNames: ['A', 'B', 'C', 'D'] });
    expect(small.size).toBe(6);
    await page.getByRole('button', { name: 'Reset', exact: true }).click();
    await page.evaluate(() => document.getElementById('dialog').close('new'));
    await expect(page.locator('.flash')).toContainText('No new case found', { timeout: 60000 });
  });

  test('right board, wrong murderer: the board is right, the answer is not', async ({ page }) => {
    await open(page, { pos: SOLUTION });
    await page.locator('button.submit').click();
    await dialog(page).locator('.note-pick:not(.room-pick)', { hasText: 'Dexter' }).click();
    await dialog(page).getByRole('button', { name: 'Submit answer' }).click();
    await expect(dialog(page).locator('.result-list')).toContainText('Your board is right.');
    await expect(dialog(page).locator('.result-list')).toContainText('Dexter the dealer has an alibi');
  });

  test('the last case of a campaign goes back to the campaign', async ({ page }) => {
    const { CAMPAIGNS } = await import('../../js/levels.js');
    const levels = CAMPAIGNS[0].levels, last = levels.length - 1;
    await seedStorage(page, { levels: { [caseKey(last)]: { pos: levels[last].solution } } });
    await page.goto(`/index.html#/c/manor/${last}`);
    await page.locator('button.submit').click();
    await dialog(page).getByRole('button', { name: 'Submit answer' }).click();
    await expect(dialog(page).locator('.dialog-buttons button').first()).toHaveText('Continue');
    await page.evaluate(() => document.getElementById('dialog').close('continue'));
    await expect(page.locator('.campaign-head h1')).toHaveText('Blackwood Manor');
  });

  test('a link to an old case without a stored difficulty works it out', async ({ page }) => {
    const { tries, ...old } = LEVEL;
    await page.goto(levelLink('manor', old));
    await expect(page.locator('.case-head .difficulty')).toHaveAttribute('title', /"what if" step/);
  });
});

test.describe('dialogs and sharing', () => {
  test('a click on the backdrop closes a dialog, but not right after opening', async ({ page }) => {
    await open(page);
    await page.getByRole('button', { name: 'Help: how to play' }).click();
    await page.mouse.click(3, 3); // too soon: stays
    await expect(dialog(page)).toBeVisible();
    await page.waitForTimeout(600);
    await page.mouse.click(3, 3);
    await expect(dialog(page)).not.toBeVisible();
  });

  test('a double-click that opens a dialog does not click inside it', async ({ page }) => {
    await open(page);
    await person(page, 'Alma').locator('.person-head').dblclick();
    await expect(dialog(page).locator('h2')).toContainText('Where can Alma');
    // A click with a click count of 2, right after opening: swallowed.
    await page.evaluate(() => {
      const b = document.querySelector('#dialog .person-board .board > button');
      b.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, detail: 2 }));
      b.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, detail: 2 }));
    });
    await expect(dialog(page).locator('.person-board .pmark')).toHaveCount(0);
    // Later the same click counts.
    await page.waitForTimeout(800);
    await page.evaluate(() => {
      const b = document.querySelector('#dialog .person-board .board > button');
      b.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, detail: 2 }));
      b.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, detail: 2 }));
    });
    await expect(dialog(page).locator('.person-board .pmark')).toHaveCount(1);
  });

  test('copy without clipboard access selects the text to copy by hand', async ({ page }) => {
    await open(page);
    await page.evaluate(() => { Object.defineProperty(navigator, 'clipboard', { value: { writeText: () => Promise.reject(new Error('no')) } }); });
    await page.getByRole('button', { name: 'Share this case' }).click();
    await dialog(page).getByRole('button', { name: 'Copy: Empty board' }).click();
    await expect(dialog(page).locator('.status')).toHaveText('Copy failed. The text is selected: copy it by hand.');
    const selected = await page.evaluate(() => {
      const box = document.activeElement;
      return box.value.slice(box.selectionStart, box.selectionEnd) === box.value && box.value.length > 0;
    });
    expect(selected).toBe(true);
  });

  test('fullscreen on and off', async ({ page }) => {
    await open(page);
    await page.getByRole('button', { name: 'Fullscreen' }).click();
    await expect(page.getByRole('button', { name: 'Leave fullscreen' })).toBeVisible();
    await page.getByRole('button', { name: 'Leave fullscreen' }).click();
    await expect(page.getByRole('button', { name: 'Fullscreen' })).toBeVisible();
    // Leaving the game screen: the listeners stop.
    await page.goto('/index.html#/');
    await page.evaluate(() => document.dispatchEvent(new Event('fullscreenchange')));
    await page.setViewportSize({ width: 700, height: 700 });
    await expect(page.locator('.hero h1')).toBeVisible();
  });
});

test('the game works when the browser blocks saving', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', { get() { throw new Error('blocked'); } });
  });
  await open(page);
  await cell(page, 0).click({ button: 'right' });
  await expect(cell(page, 0).locator('.mark')).toHaveText('✕');
  await page.goto('/index.html#/c/manor');
  await expect(page.locator('.case-card').first()).toBeVisible();
});
