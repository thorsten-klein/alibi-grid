// App start and screens: home, campaign, game.

import { CAMPAIGNS } from './levels.js';
import { THEMES, themeById, themeRules, ruleText } from './themes.js';
import { loadLevel, levelKey, getSetting, setSetting } from './storage.js';
import { el, decodeData, encodeData, showDialog, icon, logo } from './ui.js';
import { makeLevel, SIZES, FACT_KINDS } from './generator.js';
import { encodeLevel } from './levelCodec.js';
import { RULES } from './rules.js';
import { renderGame, showHelp } from './game.js';

const app = document.getElementById('app');

const RULE_LABEL = {
  ranks: '👑 Ranks', trades: '🏹 Trades', glyphs: '🌙 Seals', sea: '🌊 Sea', bandits: '⭐ Bandits',
  distance: '↔️ Keep distance', fullhouse: '🏠 Full house', couples: '💞 Couples', parity: '⚖️ Even & odd',
  river: '🏞️ River', tasks: '🧰 Tasks',
};

function solvedCount(themeId) {
  const c = CAMPAIGNS.find(x => x.theme === themeId);
  return c.levels.filter((_, i) => loadLevel(levelKey(themeId, i))?.solved).length;
}

// ---- player-made cases ----

// One line per rule for the rule cards.
const RULE_SHORT = {
  ranks: 'Nobles stand in a 👑 court room. Commoners never do. Knights can go anywhere.',
  trades: 'A work spot only takes a person with the matching trade, like a 🏹 hunter.',
  glyphs: 'On a 🌙 moon seal the person is alone in the room. On a ☀️ sun seal they are not.',
  sea: 'The 🌊 sea is not a room: anyone in it is alone. Each ship is its own room.',
  bandits: 'Some people are hidden bandits. You know how many. No bandit is in a ⭐ room.',
  distance: 'No two people in one room touch, not even at a corner of their cells.',
  fullhouse: 'Every room holds at least one person. No room stays empty.',
  couples: 'Some people come in 💞 couples. A couple stands diagonally next to each other, in the same room.',
  parity: 'Some rooms are marked even or odd: that is how many people they hold.',
  river: 'A river winds across the board. You know how many people stand on each side of it.',
  tasks: 'Hidden tasks, like "2 hunters, 1 gatherer". Whoever stands on a 🏹 hunter spot is a hunter.',
};

const RULE_NAME = {
  ranks: 'Ranks', trades: 'Trades', glyphs: 'Seals', sea: 'Sea', bandits: 'Bandits',
  distance: 'Keep distance', fullhouse: 'Full house', couples: 'Couples', parity: 'Even & odd',
  river: 'River', tasks: 'Tasks',
};

// Theme for a rule set: the campaign with exactly these rules, else the Time Rift.
function themeFor(rules) {
  if (!rules.length) return THEMES.filter(t => !themeRules(t).length)[Math.floor(Math.random() * 5)];
  if (rules.length === 1) return THEMES.find(t => !t.mix && themeRules(t).join() === rules[0]) || themeById('rift');
  return themeById('rift');
}

// Rules of a game link: a campaign case or a player-made case.
function rulesFromLink(text) {
  const hash = String(text).trim().split('#')[1];
  if (!hash) return null;
  const [path] = hash.replace(/^\/?/, '').split('?');
  const parts = path.split('/');
  if (parts[0] === 'c') {
    const c = CAMPAIGNS.find(x => x.theme === parts[1]);
    const raw = c?.levels[Number(parts[2])];
    const kinds = l => [...new Set((l.facts || []).map(([t]) => t))];
    if (raw) return { rules: raw.rules || [], facts: kinds(raw), size: raw.size };
    if (c) return { rules: themeRules(themeById(parts[1])), facts: [], size: null };
  }
  if (parts[0] === 'x') {
    const data = decodeData(parts[1] || '');
    if (data?.l) return { rules: data.l.rules || [], facts: [...new Set((data.l.facts || []).map(([t]) => t))], size: data.l.size };
  }
  return null;
}

// Short hash, so each player-made case keeps its own progress.
function hashText(text) {
  let h = 5381;
  for (let i = 0; i < text.length; i++) h = (h * 33 + text.charCodeAt(i)) >>> 0;
  return h.toString(36);
}

// Case fact kinds for the cards on the maker screen.
const FACT_CARDS = {
  onCount: ['🪑 On an object', 'How many people sat or lay on one kind of object, like "Only one person was sitting on a chair."'],
  nextCount: ['👋 Next to an object', 'How many people stood right next to one kind of object in their room, like a piano.'],
  roomCount: ['🚪 In a room', 'How many people were in one room, like "Nobody was in the Library."'],
  furniture: ['🛋️ On furniture', 'How many people stood or sat on any object at all.'],
  edge: ['🧱 Outer wall', 'How many people stood along the outer wall of the board.'],
  corner: ['📐 Room corners', 'How many people stood in a corner of their room.'],
  doorCount: ['🚪 Doors', 'How many people stood in front of a door.'],
  windowCount: ['🪟 Windows', 'How many people stood in front of a window.'],
  alone: ['🧍 Alone', 'How many people were alone in their room.'],
  emptyRooms: ['🏚️ Empty rooms', 'How many rooms nobody was in.'],
  touch: ['🤝 Touching', 'How many pairs of people in one room touched at a corner.'],
  apart: ['🎭 Apart', 'No two people of the same rank (or trade) were in the same room. Needs Ranks or Trades.'],
};

// A selectable card with a hidden checkbox. `set` holds the chosen ids.
function choiceCard(id, title, text, set, key) {
  const input = el('input', {
    type: 'checkbox', checked: set.has(id),
    onchange: () => { input.checked ? set.add(id) : set.delete(id); setSetting(key, [...set]); },
  });
  return { id, input, node: el('label.rule-card', {}, input, el('span.rule-card-title', {}, title), el('span.rule-card-text', {}, text)) };
}

function drawMaker() {
  const chosen = new Set(getSetting('makerRules', []).filter(r => RULES.includes(r)));
  const chosenFacts = new Set(getSetting('makerFacts', []).filter(f => FACT_KINDS.includes(f)));
  let size = getSetting('makerSize', 8);
  const status = el('p.maker-status', { role: 'status' });
  const boxes = RULES.map(r => choiceCard(r, RULE_LABEL[r], RULE_SHORT[r], chosen, 'makerRules'));
  const factBoxes = FACT_KINDS.map(f => choiceCard(f, FACT_CARDS[f][0], FACT_CARDS[f][1], chosenFacts, 'makerFacts'));
  const sizeSelect = el('select', {
    'aria-label': 'Board size',
    onchange: e => { size = Number(e.target.value); setSetting('makerSize', size); },
  }, SIZES.map(n => el('option', { value: n, selected: n === size }, `${n} × ${n}`)));
  const sync = () => {
    boxes.forEach(b => { b.input.checked = chosen.has(b.id); });
    factBoxes.forEach(b => { b.input.checked = chosenFacts.has(b.id); });
    sizeSelect.value = String(size);
  };

  async function importRules() {
    const field = el('textarea.import-field', { rows: 3, placeholder: 'Paste a game link here…' });
    const err = el('p.maker-error', { role: 'alert' });
    let result = null;
    const apply = el('button.btn.primary', {
      type: 'button',
      onclick: () => {
        result = rulesFromLink(field.value);
        if (!result) { err.textContent = 'This is not a link to an Alibi Grid case.'; return; }
        document.getElementById('dialog').close('');
      },
    }, 'Apply');
    await showDialog({
      title: 'Import from other game',
      body: [el('p', {}, 'Paste the link of another case. Its board size, special rules and kinds of case facts are copied.'), field, err,
        el('div.dialog-buttons', {}, apply)],
      buttons: [{ label: 'Cancel', value: false }],
    });
    if (!result) return;
    chosen.clear();
    result.rules.forEach(r => chosen.add(r));
    chosenFacts.clear();
    result.facts.forEach(f => chosenFacts.add(f));
    if (result.size) size = result.size;
    setSetting('makerRules', [...chosen]);
    setSetting('makerFacts', [...chosenFacts]);
    setSetting('makerSize', size);
    sync();
    const parts = [
      result.rules.length ? `rules: ${result.rules.map(r => RULE_NAME[r]).join(', ')}` : 'no special rules',
      result.facts.length ? `facts: ${result.facts.map(f => FACT_CARDS[f][0].replace(/^\S+ /, '')).join(', ')}` : 'no case facts',
    ];
    status.textContent = `Copied ${parts.join('; ')}.`;
  }

  // Pick 1 or 2 random cards in one section. Skips pairs that can not work.
  function randomPick(set, ids, key, ok) {
    for (let tries = 0; tries < 50; tries++) {
      const pick = ids.slice().sort(() => Math.random() - 0.5).slice(0, 1 + Math.floor(Math.random() * 2));
      if (!ok(pick)) continue;
      set.clear();
      pick.forEach(id => set.add(id));
      setSetting(key, [...set]);
      sync();
      return;
    }
  }
  const randomRules = () => randomPick(chosen, RULES, 'makerRules', pick => !(pick.includes('distance') && pick.includes('couples')));
  const randomFacts = () => randomPick(chosenFacts, FACT_KINDS, 'makerFacts',
    pick => !pick.includes('apart') || chosen.has('ranks') || chosen.has('trades'));
  const sectionHead = (title, onRandom) => el('div.section-head', {},
    el('h2.maker-section', {}, title),
    onRandom ? el('button.btn.small', { type: 'button', onclick: onRandom, title: `Pick 1 or 2 random ${title.toLowerCase()}` }, '🎲 Random') : null);

  // Stays in the bottom right corner while the page scrolls.
  const go = el('button.btn.success.generate', {
    type: 'button',
    onclick: () => {
      const rules = RULES.filter(r => chosen.has(r));
      const facts = FACT_KINDS.filter(f => chosenFacts.has(f));
      if (rules.includes('distance') && rules.includes('couples')) {
        status.textContent = 'Keep distance and Couples do not go together: a couple always touches at a corner.';
        return;
      }
      if (facts.includes('apart') && !rules.includes('ranks') && !rules.includes('trades')) {
        status.textContent = 'The "Apart" fact needs the Ranks or the Trades rule.';
        return;
      }
      const theme = themeFor(rules);
      go.disabled = true;
      status.textContent = 'Building your case…';
      // Let the page paint before the work starts.
      setTimeout(() => {
        try {
          const seed = Math.floor(Math.random() * 2 ** 31);
          const level = makeLevel(theme, size, seed, rules, facts);
          const data = encodeData({ t: theme.id, l: encodeLevel(theme, level) });
          location.hash = `#/x/${data}`;
        } catch {
          status.textContent = 'No case found with these settings. Try a bigger board, fewer rules or fewer facts.';
          go.disabled = false;
        }
      }, 30);
    },
  }, 'Generate');

  return el('section.maker', {},
    el('div.maker-head', {},
      el('h1', {}, '🛠️ Make your own case'),
      el('button.btn', { type: 'button', onclick: importRules }, 'Import from other game')),
    el('p.lede', {}, 'Every case has exactly one solution and can be solved step by step. Each rule and fact you pick is needed to solve it.'),
    el('h2.maker-section', {}, 'Board settings'),
    el('label.maker-size', {}, el('span', {}, 'Board size'), sizeSelect),
    sectionHead('Special rules', randomRules),
    el('div.maker-rules', { role: 'group', 'aria-label': 'Special rules' }, boxes.map(b => b.node)),
    sectionHead('Case facts', randomFacts),
    el('p.hint', {}, 'Each fact you pick shows up at least once in the case. Pick none for a case without facts.'),
    el('div.maker-rules', { role: 'group', 'aria-label': 'Case facts' }, factBoxes.map(b => b.node)),
    go,
    status);
}

function renderHome() {
  document.title = 'Alibi Grid';
  app.replaceChildren(
    el('header.hero', {},
      logo('.hero-logo', true),
      el('h1', {}, 'Alibi Grid'),
      el('p.lede', {}, 'Logic murder mysteries. Place every suspect. Find the one who was alone with the victim.'),
      el('button.btn', { onclick: showHelp }, 'How to play')),
    el('section.campaigns', {},
      THEMES.map(theme => {
        const total = CAMPAIGNS.find(c => c.theme === theme.id).levels.length;
        const done = solvedCount(theme.id);
        return el('a.campaign-card', { href: `#/c/${theme.id}`, style: { '--h': theme.hue } },
          el('span.campaign-icon', { 'aria-hidden': 'true' }, theme.icon),
          el('span.campaign-text', {},
            el('strong', {}, theme.title),
            el('span', {}, theme.tagline),
            themeRules(theme).length ? el('span.rule-tags', {}, themeRules(theme).map(r => el('span.badge', {}, RULE_LABEL[r]))) : null),
          el('span.progress', {},
            el('span.progress-bar', {}, el('span', { style: { width: `${(100 * done) / total}%` } })),
            el('small', {}, `${done} / ${total} solved`)));
      }),
      // Opens the screen for player-made cases.
      el('a.campaign-card.custom-card', { href: '#/make', style: { '--h': 35 } },
        el('span.campaign-icon', { 'aria-hidden': 'true' }, '🛠️'),
        el('span.campaign-text', {},
          el('strong', {}, 'Custom level…'),
          el('span', {}, 'Pick special rules and a board size. Get a fresh case.')))),
    el('footer.foot', {}, 'Every case has exactly one solution. No guessing needed.'),
  );
}

// Screen for player-made cases. fromCase: the rules came from the last case.
function renderMaker(fromCase = false) {
  document.title = 'Custom level · Alibi Grid';
  const maker = drawMaker();
  app.replaceChildren(
    el('nav.topbar', {},
      el('a.btn.icon.back', { href: '#/', title: 'Back to all campaigns', 'aria-label': 'Back to all campaigns' }, icon('back')),
      el('span.topbar-title', {}, logo('.bar-logo'), 'Alibi Grid')),
    maker);
  if (fromCase) {
    maker.classList.add('flash-in');
    maker.querySelector('.maker-status').textContent = 'The board size, rules and facts of your last case are set. Change them if you like, then press Generate.';
  }
}

function renderCampaign(theme) {
  const campaign = CAMPAIGNS.find(c => c.theme === theme.id);
  document.title = `${theme.title} · Alibi Grid`;
  app.replaceChildren(
    el('nav.topbar', {},
      el('a.btn.icon.back', { href: '#/', title: 'Back to all campaigns', 'aria-label': 'Back to all campaigns' }, icon('back')),
      el('span.topbar-title', {}, logo('.bar-logo'), 'Alibi Grid')),
    el('header.campaign-head', { style: { '--h': theme.hue } },
      el('span.campaign-icon.big', { 'aria-hidden': 'true' }, theme.icon),
      el('div', {}, el('h1', {}, theme.title), el('p.lede', {}, theme.tagline))),
    themeRules(theme).length
      ? el('ul.rule-list', {}, theme.mix
        ? [el('li', {}, 'Each case mixes two or three of these special rules:'), ...themeRules(theme).map(r => el('li', {}, ruleText(r)))]
        : themeRules(theme).map(r => el('li', {}, ruleText(r))))
      : null,
    el('ol.cases', {},
      campaign.levels.map((lv, i) => {
        const state = loadLevel(levelKey(theme.id, i));
        const status = state?.solved ? 'solved' : state?.pos?.some(x => x >= 0) ? 'started' : 'new';
        return el('li', {}, el(`a.case-card.${status}`, { href: `#/c/${theme.id}/${i}`, style: { '--h': theme.hue } },
          el('span.case-num', {}, `Case ${i + 1}`),
          el('span.case-size', {}, `${lv.size} × ${lv.size}`),
          el('span.case-victim', {}, `Victim: ${lv.people[lv.victim]}`),
          theme.mix ? el('span.case-victim', {}, lv.rules.map(r => RULE_LABEL[r]).join(' · ')) : null,
          el('span.case-status', {}, status === 'solved' ? '✓ Closed' : status === 'started' ? 'In progress' : 'Open')));
      })),
  );
}

async function route() {
  const [path, query = ''] = location.hash.replace(/^#\/?/, '').split('?');
  const parts = path.split('/').filter(Boolean);
  window.scrollTo(0, 0);
  if (parts[0] === 'x') {
    const data = decodeData(parts[1] || '');
    const theme = data && themeById(data.t);
    if (theme && data.l) {
      const id = hashText(parts[1]);
      const shared = decodeData(new URLSearchParams(query).get('b') || '');
      let use = null;
      if (shared && Array.isArray(shared.pos)) {
        const mine = loadLevel(`x:${id}`);
        const busy = mine && (mine.pos?.some(x => x >= 0) || mine.marks?.length || Object.keys(mine.notes || {}).length);
        use = !busy || await showDialog({
          title: 'Open shared board?',
          body: el('p', {}, 'This link holds a board for this case. It replaces your board here.'),
          buttons: [{ label: 'Keep mine', value: false }, { label: 'Use shared board', value: true, primary: true }],
        }) ? { ...shared, solved: false } : null;
        history.replaceState(null, '', `#/x/${parts[1]}`);
      }
      return renderGame(app, theme, { theme: theme.id, levels: [data.l] }, 0, use, { id, data: parts[1] });
    }
  }
  if (parts[0] === 'c') {
    const theme = themeById(parts[1]);
    const campaign = CAMPAIGNS.find(c => c.theme === parts[1]);
    if (theme && campaign) {
      const i = Number(parts[2]);
      if (parts.length > 2 && campaign.levels[i]) {
        // A shared board comes as ?b=<data>. Ask before it replaces progress.
        const shared = decodeData(new URLSearchParams(query).get('b') || '');
        let use = null;
        if (shared && Array.isArray(shared.pos)) {
          const mine = loadLevel(levelKey(theme.id, i));
          const busy = mine && (mine.pos?.some(x => x >= 0) || mine.marks?.length || Object.keys(mine.notes || {}).length);
          use = !busy || await showDialog({
            title: 'Open shared board?',
            body: el('p', {}, 'This link holds a board for this case. It replaces your board here.'),
            buttons: [{ label: 'Keep mine', value: false }, { label: 'Use shared board', value: true, primary: true }],
          }) ? { ...shared, solved: false } : null;
          history.replaceState(null, '', `#/c/${theme.id}/${i}`);
        }
        return renderGame(app, theme, campaign, i, use);
      }
      return renderCampaign(theme);
    }
  }
  if (parts[0] === 'make') return renderMaker(new URLSearchParams(query).get('from') === 'case');
  renderHome();
}

window.addEventListener('hashchange', route);
route();
