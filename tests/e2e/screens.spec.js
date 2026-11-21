// Home, campaign and case maker screens, and the routes between them.

import { test, expect } from './fixtures.js';
import { seedStorage, caseLink, caseKey } from './helpers.js';

// A rule or fact card on the case maker (its checkbox is hidden: click the card).
const card = (page, text) => page.locator('label.rule-card', { hasText: text });

test.describe('home', () => {
  test('shows every campaign with one progress bar per group, and the case maker', async ({ page }) => {
    await page.goto('/index.html');
    await expect(page.locator('.hero h1')).toHaveText('Alibi Grid');
    await expect(page.locator('a.campaign-card:not(.custom-card)')).toHaveCount(11);
    const manor = page.locator('a.campaign-card', { hasText: 'Blackwood Manor' });
    await expect(manor.locator('.progress-name')).toHaveText(['Beginner', 'Medium', 'Hard', 'Expert', 'Additional']);
    await expect(manor.locator('.progress').first()).toContainText('0 /');
    await expect(page.locator('a.custom-card')).toContainText('Custom level');
  });

  test('progress bars count closed cases', async ({ page }) => {
    await seedStorage(page, { levels: { [caseKey(0)]: { closed: true }, [caseKey(1)]: { solved: true } } });
    await page.goto('/index.html');
    const bar = page.locator('a.campaign-card', { hasText: 'Blackwood Manor' }).locator('.progress').first();
    await expect(bar).toContainText('2 /');
  });

  test('old saves keyed by place move to the case fingerprint, once', async ({ page }) => {
    const { OLD_IDS } = await import('../../js/oldIds.js');
    await seedStorage(page, { levels: {
      'manor:v2:0': { closed: true }, // moves
      'manor:v2:99999': { closed: true }, 'nowhere:v2:0': { closed: true }, // no such case: dropped
      'x:abc': { pos: [1] }, // a player-made case: stays
    } });
    await page.goto('/index.html');
    const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('alibi-grid-v1')));
    expect(saved.keys).toBe(3);
    expect(Object.keys(saved.levels).sort()).toEqual([`manor:${OLD_IDS.manor[0]}`, 'x:abc'].sort());
  });

  test('"How to play" opens the help', async ({ page }) => {
    await page.goto('/index.html');
    await page.getByRole('button', { name: 'How to play' }).click();
    await expect(page.locator('#dialog')).toBeVisible();
    await expect(page.locator('#dialog h2')).toContainText('How to play');
  });
});

test.describe('campaign', () => {
  test('cases come in four foldable groups, each card with a picture and a badge', async ({ page }) => {
    await page.goto('/index.html#/c/manor');
    await expect(page.locator('.case-group-head h2')).toHaveText(['Beginner', 'Medium', 'Hard', 'Expert', 'Additional Extra Levels']);
    // Extra cases are named by their own count.
    await expect(page.locator('details.case-group').last().locator('.case-num').first()).toHaveText('Case 1');
    const cards = page.locator('.case-card');
    await expect(page.locator('.case-thumb')).toHaveCount(await cards.count());
    await expect(cards.first().locator('.difficulty')).toHaveAttribute('title', /"what if" step/);
    // No stray "null" where a campaign has no rule list.
    await expect(page.locator('#app')).not.toContainText('null');
    // Fold the Medium group: it stays folded after a reload.
    const medium = page.locator('details.case-group').nth(1);
    await medium.locator('summary').click();
    await expect(medium).not.toHaveAttribute('open', '');
    await page.reload();
    await expect(page.locator('details.case-group').nth(1)).not.toHaveAttribute('open', '');
    await page.locator('details.case-group').nth(1).locator('summary').click();
    await expect(page.locator('details.case-group').nth(1)).toHaveAttribute('open', '');
    await page.locator('details.case-group').nth(2).locator('summary').click(); // fold another one
    await expect(page.locator('details.case-group').nth(2)).not.toHaveAttribute('open', '');
  });

  test('the round box closes a case by hand and opens it again', async ({ page }) => {
    await page.goto('/index.html#/c/manor');
    const first = page.locator('li.case-item').first();
    await first.locator('.case-close').check();
    await expect(page.locator('li.case-item').first().locator('.case-card')).toHaveClass(/solved/);
    await expect(page.locator('li.case-item').first().locator('.case-tick')).toBeVisible();
    await expect(page.locator('.case-group-info').first()).toContainText('1 /');
    await page.locator('li.case-item').first().locator('.case-close').uncheck();
    await expect(page.locator('li.case-item').first().locator('.case-card')).not.toHaveClass(/solved/);
  });

  test('a started case says so', async ({ page }) => {
    await seedStorage(page, { levels: { [caseKey(0)]: { pos: [0, -1, -1, -1] } } });
    await page.goto('/index.html#/c/manor');
    await expect(page.locator('.case-card').first().locator('.case-status')).toHaveText('In progress');
  });

  test('campaigns with special rules list them; the Time Rift mixes them per case', async ({ page }) => {
    await page.goto('/index.html#/c/castle');
    await expect(page.locator('.rule-list li')).toHaveCount(1);
    await page.goto('/index.html#/c/rift');
    await expect(page.locator('.rule-list li').first()).toContainText('Each case mixes');
    await expect(page.locator('.case-card').first().locator('.case-victim').nth(1)).toContainText('·');
  });

  test('the logo in the top bar goes home; old files without groups show one list', async ({ page }) => {
    await page.goto('/index.html#/c/reef');
    await page.locator('a.topbar-title').click();
    await expect(page).toHaveURL(/#\/$/);
    await expect(page.locator('.hero h1')).toBeVisible();
  });
});

test.describe('routes', () => {
  test('unknown addresses open the home screen; an unknown case its campaign', async ({ page }) => {
    for (const hash of ['#/nowhere', '#/c/nope', '#/x/garbage']) {
      await page.goto('/index.html#/c/manor');
      await page.goto(`/index.html${hash}`);
      await expect(page.locator('.hero h1')).toBeVisible();
    }
    await page.goto('/index.html#/c/manor/9999');
    await expect(page.locator('.campaign-head h1')).toHaveText('Blackwood Manor');
  });

  test('a shared board asks before it replaces progress: keep mine', async ({ page }) => {
    await seedStorage(page, { levels: { [caseKey(0)]: { pos: [0, -1, -1, -1] } } });
    const board = Buffer.from(JSON.stringify({ pos: [-1, -1, -1, -1], marks: [1], notes: {} })).toString('base64url');
    await page.goto(`/index.html#/c/manor/0?b=${board}`);
    await expect(page.locator('#dialog h2')).toHaveText('Open shared board?');
    await page.locator('#dialog button', { hasText: 'Keep mine' }).click();
    await expect(page).toHaveURL(/#\/c\/manor\/0$/);
    await expect(page.locator('.board .token').first()).toBeVisible();
  });

  test('a shared board asks before it replaces progress: use the shared one', async ({ page }) => {
    await seedStorage(page, { levels: { [caseKey(0)]: { pos: [0, -1, -1, -1] } } });
    const board = Buffer.from(JSON.stringify({ pos: [-1, -1, -1, -1], marks: [1], notes: {} })).toString('base64url');
    await page.goto(`/index.html#/c/manor/0?b=${board}`);
    await page.locator('#dialog button', { hasText: 'Use shared board' }).click();
    await expect(page.locator('.board .token')).toHaveCount(0);
  });

  test('a player-made case link opens the case', async ({ page }) => {
    await page.goto(caseLink('../fixtures/manor-medium-3.json', 'manor'));
    await expect(page.locator('.case-head h1')).toContainText('Your case');
    await expect(page.locator('.case-campaign')).toContainText('made by you');
  });
});

test.describe('case maker', () => {
  test('board settings: size, difficulty range and time limit are kept', async ({ page }) => {
    await page.goto('/index.html#/make');
    await page.getByLabel('Board size').selectOption('5');
    const [lo, hi] = [page.getByLabel('Easiest level'), page.getByLabel('Hardest level')];
    await hi.fill('3');
    await lo.fill('4'); // can not pass the other handle
    await expect(lo).toHaveValue('3');
    await lo.fill('1');
    await hi.fill('0'); // can not pass the other handle
    await expect(hi).toHaveValue('1');
    await expect(lo).toHaveAttribute('aria-valuetext', 'Medium');
    const time = page.getByLabel('Time limit in seconds');
    await time.fill('2');
    await time.blur();
    await expect(time).toHaveValue('5');
    await time.fill('9999');
    await time.blur();
    await expect(time).toHaveValue('600');
    await time.fill('');
    await time.blur();
    await expect(time).toHaveValue('30'); // empty: back to the default
    await page.reload();
    await expect(page.getByLabel('Board size')).toHaveValue('5');
    await expect(page.getByLabel('Easiest level')).toHaveValue('1');
    await expect(page.getByLabel('Hardest level')).toHaveValue('1');
  });

  test('rule and fact cards toggle and are kept; random picks some', async ({ page }) => {
    await page.goto('/index.html#/make');
    await card(page, '👑 Ranks').click();
    await page.reload();
    await expect(card(page, '👑 Ranks').locator('input')).toBeChecked();
    await card(page, '👑 Ranks').click();
    await expect(card(page, '👑 Ranks').locator('input')).not.toBeChecked();
    for (let k = 0; k < 5; k++) {
      await page.getByRole('button', { name: '🎲 Random' }).first().click();
      await page.getByRole('button', { name: '🎲 Random' }).nth(1).click();
    }
    const picked = await page.locator('.maker-rules').first().locator('input:checked').count();
    expect(picked).toBeGreaterThanOrEqual(1);
    expect(picked).toBeLessThanOrEqual(2);
  });

  test('rules that do not fit together are refused', async ({ page }) => {
    await page.goto('/index.html#/make');
    await card(page, 'Keep distance').click();
    await card(page, 'Couples').click();
    await page.getByRole('button', { name: 'Generate' }).click();
    await expect(page.locator('.maker-status')).toContainText('do not go together');
    await card(page, 'Keep distance').click();
    await card(page, 'Couples').click();
    await card(page, 'Apart').click();
    await page.getByRole('button', { name: 'Generate' }).click();
    await expect(page.locator('.maker-status')).toContainText('needs the Ranks or the Trades rule');
  });

  test('Generate makes a case and opens it', async ({ page }) => {
    await page.goto('/index.html#/make');
    await page.getByLabel('Board size').selectOption('4');
    await page.getByLabel('Hardest level').fill('0');
    await page.getByRole('button', { name: 'Generate' }).click();
    await expect(page).toHaveURL(/#\/x\//, { timeout: 30000 });
    await expect(page.locator('.case-head h1')).toContainText('Your case');
  });

  test('Generate with special rules uses their campaign theme', async ({ page }) => {
    await page.goto('/index.html#/make');
    await page.getByLabel('Board size').selectOption('5');
    await card(page, '👑 Ranks').click();
    await page.getByRole('button', { name: 'Generate' }).click();
    await expect(page.locator('.case-campaign')).toContainText('Ravenhold Castle', { timeout: 60000 });
  });

  test('Generate tells when no case was found in time', async ({ page }) => {
    await page.goto('/index.html#/make');
    await page.getByLabel('Board size').selectOption('4');
    await page.getByLabel('Hardest level').fill('4'); // Extreme on 4×4: none exists
    await page.getByLabel('Easiest level').fill('4');
    await page.getByLabel('Time limit in seconds').fill('5');
    await page.getByLabel('Time limit in seconds').blur();
    await page.getByRole('button', { name: 'Generate' }).click();
    await expect(page.locator('.maker-status')).toContainText('No case found in 5 seconds', { timeout: 60000 });
  });

  test('import copies size, rules and facts from another case link', async ({ page }) => {
    await page.goto('/index.html#/make');
    const imp = async text => {
      await page.getByRole('button', { name: 'Import from other game' }).click();
      await page.locator('#dialog textarea').fill(text);
      await page.locator('#dialog button', { hasText: 'Apply' }).click();
    };
    await imp('not a link');
    await expect(page.locator('#dialog .maker-error')).toContainText('not a link');
    await page.locator('#dialog button', { hasText: 'Cancel' }).click();
    await imp('https://example.org/#/c/castle/5');
    await expect(page.locator('.maker-status')).toContainText('Ranks');
    await expect(page.getByLabel('Board size')).toHaveValue(/\d+/);
    await imp('https://example.org/#/c/castle');
    await expect(page.locator('.maker-status')).toContainText('Ranks');
    await imp(`https://example.org${caseLink('../fixtures/manor-medium-3.json', 'manor').replace('/index.html', '')}`);
    await expect(page.locator('.maker-status')).toContainText('no special rules');
    await expect(page.getByLabel('Board size')).toHaveValue('6');
  });
});

test.describe('more maker and route paths', () => {
  test('two special rules use the Time Rift; a bad saved time limit falls back to 30', async ({ page }) => {
    await seedStorage(page, { settings: { makerTimeout: 'x', makerRules: ['ranks', 'sea'], makerSize: 5, makerDifficulty: [0, 4] } });
    await page.goto('/index.html#/make');
    await expect(page.getByLabel('Time limit in seconds')).toHaveValue('30');
    await page.getByRole('button', { name: 'Generate' }).click();
    await expect(page.locator('.case-campaign')).toContainText('Time Rift', { timeout: 60000 });
  });

  test('random facts take "Apart" only with Ranks or Trades', async ({ page }) => {
    for (const rule of [[], ['ranks'], ['trades']]) {
      await seedStorage(page, { settings: { makerRules: rule } });
      await page.goto('/index.html#/make');
      await page.reload();
      for (let k = 0; k < 30; k++) await page.getByRole('button', { name: '🎲 Random' }).nth(1).click();
      if (!rule.length) await expect(card(page, 'Apart').locator('input')).not.toBeChecked();
    }
  });

  test('import: a case link without data, a campaign case without rules or facts', async ({ page }) => {
    await page.goto('/index.html#/make');
    const imp = async text => {
      await page.getByRole('button', { name: 'Import from other game' }).click();
      await page.locator('#dialog textarea').fill(text);
      await page.locator('#dialog button', { hasText: 'Apply' }).click();
    };
    await imp('https://example.org/#/x/');
    await expect(page.locator('#dialog .maker-error')).toContainText('not a link');
    await page.locator('#dialog button', { hasText: 'Cancel' }).click();
    const bare = Buffer.from(JSON.stringify({ t: 'manor', l: { size: 4 } })).toString('base64url');
    await imp(`https://example.org/#/x/${bare}`);
    await expect(page.locator('.maker-status')).toContainText('no special rules; no case facts');
    await imp('https://example.org/#/c/manor/0');
    await expect(page.locator('.maker-status')).toContainText('no special rules');
  });

  test('a shared board asks when there are only crosses, or only notes', async ({ page }) => {
    const board = Buffer.from(JSON.stringify({ pos: [-1, -1, -1, -1] })).toString('base64url');
    for (const mine of [{ pos: [-1, -1, -1, -1], marks: [3] }, { pos: [-1, -1, -1, -1], notes: { 0: [1] } }]) {
      await seedStorage(page, { levels: { [caseKey(0)]: mine } });
      await page.goto('/index.html#/c/manor');
      await page.goto(`/index.html#/c/manor/0?b=${board}`);
      await expect(page.locator('#dialog h2')).toHaveText('Open shared board?');
      await page.locator('#dialog button', { hasText: 'Keep mine' }).click();
    }
  });

  test('a case link without data opens the home screen', async ({ page }) => {
    await page.goto('/index.html#/x');
    await expect(page.locator('.hero h1')).toBeVisible();
  });
});

test.describe('last maker and route paths', () => {
  test('one rule without its own campaign uses the Time Rift', async ({ page }) => {
    await seedStorage(page, { settings: { makerRules: ['distance'], makerSize: 5, makerDifficulty: [0, 4] } });
    await page.goto('/index.html#/make');
    await page.getByRole('button', { name: 'Generate' }).click();
    await expect(page.locator('.case-campaign')).toContainText('Time Rift', { timeout: 60000 });
  });

  test('import: an unknown campaign, campaign cases without facts', async ({ page }) => {
    await page.goto('/index.html#/make');
    const imp = async text => {
      await page.getByRole('button', { name: 'Import from other game' }).click();
      await page.locator('#dialog textarea').fill(text);
      await page.locator('#dialog button', { hasText: 'Apply' }).click();
    };
    await imp('https://example.org/#/c/nope/1');
    await expect(page.locator('#dialog .maker-error')).toContainText('not a link');
    await page.locator('#dialog button', { hasText: 'Cancel' }).click();
    await imp('https://example.org/#/c/castle/0');
    await expect(page.locator('.maker-status')).toContainText('rules: Ranks; no case facts');
    await imp('https://example.org/#/c/manor/1');
    await expect(page.locator('.maker-status')).toContainText('no special rules; no case facts');
  });

  test('a time limit of 0 goes back to 30', async ({ page }) => {
    await page.goto('/index.html#/make');
    const time = page.getByLabel('Time limit in seconds');
    await time.fill('0');
    await time.blur();
    await expect(time).toHaveValue('30');
  });

  test('saved progress with only a "closed" mark does not count as a board', async ({ page }) => {
    await seedStorage(page, { levels: { [caseKey(0)]: { closed: true } } });
    const board = Buffer.from(JSON.stringify({ pos: [-1, -1, -1, -1] })).toString('base64url');
    await page.goto(`/index.html#/c/manor/0?b=${board}`);
    await expect(page.locator('#dialog')).not.toBeVisible();
    await expect(page).toHaveURL(/#\/c\/manor\/0$/);
  });
});

test('extra cases: buttons show only one difficulty, and the choice is kept', async ({ page }) => {
  await page.goto('/index.html#/c/manor');
  const extra = page.locator('details.case-group').last();
  const all = await extra.locator('.case-card').count();
  await expect(extra.locator('.extra-filter button').first()).toHaveText(`All (${all})`);
  await extra.locator('.extra-filter button', { hasText: 'Beginner' }).click();
  const beginner = page.locator('details.case-group').last();
  await expect(beginner.locator('.extra-filter button[aria-pressed="true"]')).toContainText('Beginner');
  const n = await beginner.locator('.case-card').count();
  await expect(beginner.locator('.extra-filter button', { hasText: 'Beginner' })).toHaveText(`Beginner (${n})`);
  expect(n).toBeLessThan(all);
  for (const b of await beginner.locator('.case-card .difficulty').all()) await expect(b).toHaveText('Beginner');
  await page.reload();
  await expect(page.locator('details.case-group').last().locator('.extra-filter button[aria-pressed="true"]')).toContainText('Beginner');
  await page.locator('details.case-group').last().locator('.extra-filter button', { hasText: 'All' }).click();
  await expect(page.locator('details.case-group').last().locator('.case-card')).toHaveCount(all);
});
