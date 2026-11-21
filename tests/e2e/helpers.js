// Shared steps for the end-to-end tests.

import { readFileSync } from 'node:fs';
import { expect } from '@playwright/test';
import { CAMPAIGNS } from '../../js/levels.js';
import { caseId } from '../../js/levelCodec.js';

// Where campaign case `index` keeps its progress (see levelKey in js/storage.js).
export const caseKey = (index, theme = 'manor') => `${theme}:${caseId(CAMPAIGNS.find(c => c.theme === theme).levels[index])}`;

// Open the hints dialog and wait until the first hint is shown.
export async function openHints(page) {
  await page.getByRole('button', { name: 'Get hints' }).click();
  await expect(page.locator('#dialog .hint-text')).toBeVisible();
}

// All next-step hints in the open hints dialog, in order (→ goes to the next one).
// out: the hints read so far (the function calls itself for the next one).
export async function hintOptions(page, out = []) {
  const next = page.locator('#dialog .hint-nav button', { hasText: '→' });
  out.push((await page.locator('#dialog .hint-text').textContent()).trim());
  if (!(await next.count()) || await next.isDisabled()) return out;
  await next.click();
  await expect(page.locator('#dialog .hint-count')).toContainText(`${out.length + 1} of`);
  return hintOptions(page, out);
}

// Put a saved state into the browser before the next page load (only once, so the
// game's own saving is kept after that). A later call seeds again.
// levels: { [caseKey(9)]: { pos, marks, notes, ... } }, settings: { name: value }.
let seeds = 0;
export async function seedStorage(page, { levels = {}, settings = {} } = {}) {
  await page.addInitScript(({ data, mark }) => {
    if (!sessionStorage.getItem(mark)) {
      localStorage.setItem('alibi-grid-v1', JSON.stringify(data));
      sessionStorage.setItem(mark, '1');
    }
  }, { data: { levels, settings }, mark: `seeded-${++seeds}` });
}

// A link to a case that carries the whole case (a player-made case link),
// so the test does not depend on js/levels.js. board: the ?b= of a shared link.
export function caseLink(file, theme, board = null) {
  return levelLink(theme, JSON.parse(readFileSync(new URL(file, import.meta.url), 'utf8')), board);
}

// The same for a level given as data (as js/levels.js stores it).
export function levelLink(theme, level, board = null) {
  const data = Buffer.from(JSON.stringify({ t: theme, l: level })).toString('base64url');
  const b = board && typeof board !== 'string' ? Buffer.from(JSON.stringify(board)).toString('base64url') : board;
  const query = b ? `?b=${b}` : '';
  return `/index.html#/x/${data}${query}`;
}

// One small case per special rule and per kind of case fact (tests/fixtures/rule-cases.json).
export const RULE_CASES = JSON.parse(readFileSync(new URL('../fixtures/rule-cases.json', import.meta.url), 'utf8'));
export const ruleLink = (name, board = null) => levelLink(RULE_CASES[name].theme, RULE_CASES[name].level, board);
