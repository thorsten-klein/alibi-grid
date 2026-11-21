// App start and screens: home, campaign, game.

import { CAMPAIGNS } from './levels.js';
import { THEMES, themeById, themeRules, ruleText, blockingSet, tradeById, GLYPHS } from './themes.js';
import { loadLevel, saveLevel, levelKey, isClosed, getSetting, setSetting } from './storage.js';
import { el, decodeData, encodeData, showDialog, icon, logo, difficultyBadge, roomHue } from './ui.js';
import { makeLevel, SIZES, FACT_KINDS, DIFFICULTY, difficultyIndex } from './generator.js';
import { encodeLevel, decodeLevel } from './levelCodec.js';
import { RULES } from './rules.js';
import { renderGame, showHelp } from './game.js';

const app = document.getElementById('app');

const RULE_LABEL = {
  ranks: '👑 Ranks', trades: '🏹 Trades', glyphs: '🌙 Seals', sea: '🌊 Sea', bandits: '⭐ Bandits',
  distance: '↔️ Keep distance', fullhouse: '🏠 Full house', couples: '💞 Couples', parity: '⚖️ Even & odd',
  river: '🏞️ River', tasks: '🧰 Tasks',
};

// Campaign cases by group, in order: [{ g, items: [[level, index], ...] }].
// g: index into DIFFICULTY, or 'extra' for extra cases (older cases that fit no group).
// Heading of a group on the campaign screen, and its label on the home screen.
const groupTitle = g => (g === 'extra' ? 'Additional Extra Levels' : DIFFICULTY[g].name);
const groupLabel = g => (g === 'extra' ? 'Additional' : DIFFICULTY[g].name);

function groupsOf(levels) {
  const out = [];
  levels.forEach((lv, i) => {
    const g = lv.extra ? 'extra' : lv.group;
    if (!out.length || out.at(-1).g !== g) out.push({ g, items: [] });
    out.at(-1).items.push([lv, i]);
  });
  return out;
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

// A small picture of a case, drawn like the board: rooms, walls, striped blocked
// cells, objects on white tiles, marks, doors and windows.
let thumbIds = 0;
function caseThumb(theme, lv) {
  const level = decodeLevel(theme, lv);
  const n = level.size;
  const blocking = blockingSet(theme);
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${n} ${n}`);
  svg.setAttribute('class', 'case-thumb');
  svg.setAttribute('aria-hidden', 'true');
  const add = (tag, attrs, text) => {
    const node = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
    if (text) node.textContent = text;
    (attrs.parent || svg).append(node);
    return node;
  };
  // Stripes for blocked cells, as on the board.
  const stripes = `thumb-stripes-${thumbIds++}`;
  const defs = add('defs', {});
  const pat = add('pattern', { id: stripes, width: 0.16, height: 0.16, patternUnits: 'userSpaceOnUse', patternTransform: 'rotate(45)', parent: defs });
  add('rect', { x: 0.11, y: 0, width: 0.05, height: 0.16, class: 'thumb-stripe', parent: pat });
  // Floor, walls.
  let walls = '';
  for (let i = 0; i < n * n; i++) {
    const r = Math.floor(i / n), c = i % n, k = level.rooms[i];
    add('rect', { x: c, y: r, width: 1, height: 1, class: k === level.sea ? 'thumb-sea' : 'thumb-room', style: `--rh: ${roomHue(theme, k)}` });
    if (level.objects[i] && blocking.has(level.objects[i])) add('rect', { x: c, y: r, width: 1, height: 1, fill: `url(#${stripes})` });
    if (c < n - 1 && k !== level.rooms[i + 1]) walls += `M${c + 1} ${r}v1`;
    if (r < n - 1 && k !== level.rooms[i + n]) walls += `M${c} ${r + 1}h1`;
  }
  add('path', { d: walls, class: 'thumb-wall' });
  add('rect', { x: 0, y: 0, width: n, height: n, class: 'thumb-frame' });
  // Doors in the walls between rooms, windows in the outer wall.
  for (const [i, j] of level.doors) {
    const r = Math.floor(i / n), c = i % n;
    const [x1, y1, x2, y2] = j === i + 1 ? [c + 1, r + 0.22, c + 1, r + 0.78] : [c + 0.22, r + 1, c + 0.78, r + 1];
    add('line', { x1, y1, x2, y2, class: 'thumb-door-gap' });
    add('line', { x1, y1, x2, y2, class: 'thumb-door' });
  }
  for (const [i, side] of level.windows) {
    const r = Math.floor(i / n), c = i % n, d = 0.08;
    const [x1, y1, x2, y2] = side === 't' ? [c + 0.2, d, c + 0.8, d] : side === 'b' ? [c + 0.2, n - d, c + 0.8, n - d]
      : side === 'l' ? [d, r + 0.2, d, r + 0.8] : [n - d, r + 0.2, n - d, r + 0.8];
    add('line', { x1, y1, x2, y2, class: 'thumb-window' });
    add('line', { x1, y1, x2, y2, class: 'thumb-window-glass' });
  }
  // Two sofa (or bed) cells side by side in one room are one wide piece, as on the board.
  const pairable = id => ['🛋️', '🛏️'].includes(theme.objects[id]?.icon) && !blocking.has(id);
  const pairOf = new Map();
  for (const [dir, step] of [['h', 1], ['v', n]]) {
    for (let i = 0; i < n * n; i++) {
      const j = i + step;
      if (dir === 'h' && i % n === n - 1) continue;
      if (j >= n * n || pairOf.has(i) || pairOf.has(j)) continue;
      const o = level.objects[i];
      if (o && o === level.objects[j] && pairable(o) && level.rooms[i] === level.rooms[j]) { pairOf.set(i, dir); pairOf.set(j, 'skip'); }
    }
  }
  // Objects on raised white tiles.
  for (let i = 0; i < n * n; i++) {
    const o = level.objects[i];
    if (!o || pairOf.get(i) === 'skip') continue;
    const r = Math.floor(i / n), c = i % n, pair = pairOf.get(i);
    const w = pair === 'h' ? 1.74 : 0.74, h = pair === 'v' ? 1.74 : 0.74;
    add('rect', { x: c + 0.13, y: r + 0.18, width: w, height: h, rx: 0.16, class: 'thumb-tile-shadow' });
    add('rect', { x: c + 0.13, y: r + 0.13, width: w, height: h, rx: 0.16, class: 'thumb-tile' });
    add('text', { x: c + 0.13 + w / 2, y: r + 0.15 + h / 2, class: 'thumb-obj' }, theme.objects[o].icon);
  }
  // Marks of the special rules: seals, work spots and task spots.
  (level.tags || []).forEach((tag, i) => {
    if (!tag) return;
    const r = Math.floor(i / n), c = i % n;
    const info = tag.startsWith('t:') || tag.startsWith('k:') ? tradeById(tag.slice(2)) : GLYPHS[tag];
    if (tag.startsWith('t:') || tag.startsWith('k:')) add('rect', { x: c + 0.16, y: r + 0.16, width: 0.68, height: 0.68, rx: 0.14, class: 'thumb-work' });
    else add('circle', { cx: c + 0.5, cy: r + 0.5, r: 0.34, class: 'thumb-seal' });
    add('text', { x: c + 0.5, y: r + 0.53, class: 'thumb-obj small' }, info.icon);
  });
  return svg;
}

// A big green tick that covers a whole case card.
function caseTick() {
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 100 100');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  svg.setAttribute('class', 'case-tick');
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', 'Solved');
  for (const cls of ['tick-halo', 'tick-line']) {
    const line = document.createElementNS(NS, 'polyline');
    line.setAttribute('points', '24,54 42,72 78,30');
    line.setAttribute('class', cls);
    svg.append(line);
  }
  return svg;
}

// Short hash, so each player-made case keeps its own progress.
function hashText(text) {
  let h = 5381;
  for (let i = 0; i < text.length; i++) h = (h * 33 + text.codePointAt(i)) >>> 0;
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
  // Seconds the generator may search before it gives up.
  let timeout = Number(getSetting('makerTimeout', 30)) || 30;
  const timeoutInput = el('input', {
    type: 'number', min: 5, max: 600, step: 5, value: timeout, 'aria-label': 'Time limit in seconds',
    onchange: e => {
      timeout = Math.min(600, Math.max(5, Math.round(Number(e.target.value)) || 30));
      e.target.value = timeout;
      setSetting('makerTimeout', timeout);
    },
  });
  const status = el('p.maker-status', { role: 'status' });
  const boxes = RULES.map(r => choiceCard(r, RULE_LABEL[r], RULE_SHORT[r], chosen, 'makerRules'));
  const factBoxes = FACT_KINDS.map(f => choiceCard(f, FACT_CARDS[f][0], FACT_CARDS[f][1], chosenFacts, 'makerFacts'));
  const sizeSelect = el('select', {
    'aria-label': 'Board size',
    onchange: e => { size = Number(e.target.value); setSetting('makerSize', size); },
  }, SIZES.map(n => el('option', { value: n, selected: n === size }, `${n} × ${n}`)));
  // Difficulty: a range of levels, picked with two handles on one slider.
  const top = DIFFICULTY.length - 1;
  const saved = getSetting('makerDifficulty', [0, 1]);
  let range = [0, 1].map(k => Math.min(top, Math.max(0, Number(saved[k]) || 0))).sort((a, b) => a - b);
  const handles = [0, 1].map(k => el('input', {
    type: 'range', min: 0, max: top, step: 1, value: range[k],
    'aria-label': k ? 'Hardest level' : 'Easiest level',
    oninput: e => {
      const v = Number(e.target.value);
      // The handles can not pass each other.
      range[k] = k ? Math.max(v, range[0]) : Math.min(v, range[1]);
      e.target.value = range[k];
      setSetting('makerDifficulty', range);
      drawRange();
    },
  }));
  const fill = el('span.range-fill');
  function drawRange() {
    const [a, b] = range;
    fill.style.left = `${(a / top) * 100}%`;
    fill.style.width = `${((b - a) / top) * 100}%`;
    // Screen readers say the level name, not the number.
    handles.forEach((h, k) => { h.value = range[k]; h.setAttribute('aria-valuetext', DIFFICULTY[range[k]].name); });
  }
  drawRange();
  const difficultyBox = el('div.maker-difficulty', {},
    el('span.maker-label', {}, 'Difficulty'),
    el('div.range', {}, el('span.range-track', {}, fill), ...handles),
    el('div.range-ticks', { 'aria-hidden': 'true' }, DIFFICULTY.map(d => el('span', {}, d.name))));
  const sync = () => {
    drawRange();
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

  // Pick 1 or 2 random cards in one section (half the time each), only from picks that can work.
  function randomPick(set, ids, key, ok) {
    const size = 1 + Math.floor(Math.random() * 2);
    const picks = size === 1 ? ids.map(a => [a]) : ids.flatMap((a, k) => ids.slice(k + 1).map(b => [a, b]));
    const good = picks.filter(ok);
    const pick = good[Math.floor(Math.random() * good.length)];
    set.clear();
    pick.forEach(id => set.add(id));
    setSetting(key, [...set]);
    sync();
  }
  const randomRules = () => randomPick(chosen, RULES, 'makerRules', pick => !(pick.includes('distance') && pick.includes('couples')));
  const randomFacts = () => randomPick(chosenFacts, FACT_KINDS, 'makerFacts',
    pick => !pick.includes('apart') || chosen.has('ranks') || chosen.has('trades'));
  const sectionHead = (title, onRandom) => el('div.section-head', {},
    el('h2.maker-section', {}, title),
    el('button.btn.small', { type: 'button', onclick: onRandom, title: `Pick 1 or 2 random ${title.toLowerCase()}` }, '🎲 Random'));

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
      status.textContent = `Building your case… This can take up to ${timeout} seconds.`;
      // Let the page paint before the work starts.
      setTimeout(() => {
        try {
          const seed = Math.floor(Math.random() * 2 ** 31);
          const tries = { min: DIFFICULTY[range[0]].min, max: DIFFICULTY[range[1]].max };
          const level = makeLevel(theme, size, seed, rules, facts, { tries, timeLimit: timeout * 1000 });
          const data = encodeData({ t: theme.id, l: encodeLevel(theme, level) });
          location.hash = `#/x/${data}`;
        } catch {
          status.textContent = `No case found in ${timeout} seconds. Try a longer time limit, another difficulty, a bigger board, fewer rules or fewer facts.`;
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
    difficultyBox,
    el('label.maker-size.maker-time', {}, el('span', {}, 'Time limit for board generation:'), timeoutInput, el('span', {}, 'seconds')),
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
        const levels = CAMPAIGNS.find(c => c.theme === theme.id).levels;
        return el('a.campaign-card', { href: `#/c/${theme.id}`, style: { '--h': theme.hue } },
          el('span.campaign-icon', { 'aria-hidden': 'true' }, theme.icon),
          el('span.campaign-text', {},
            el('strong', {}, theme.title),
            el('span', {}, theme.tagline),
            themeRules(theme).length ? el('span.rule-tags', {}, themeRules(theme).map(r => el('span.badge', {}, RULE_LABEL[r]))) : null),
          // One progress bar per difficulty group.
          el('span.progress-groups', {}, groupsOf(levels).map(({ g, items }) => {
            const done = items.filter(([, i]) => isClosed(loadLevel(levelKey(theme.id, i)))).length;
            return el(`span.progress.d${g}`, {},
              el('small.progress-name', {}, groupLabel(g)),
              el('span.progress-bar', {}, el('span', { style: { width: `${(100 * done) / items.length}%` } })),
              el('small', {}, `${done} / ${items.length}`));
          })));
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
      el('a.topbar-title', { href: '#/', title: 'Main page' }, logo('.bar-logo'), 'Alibi Grid')),
    maker);
  if (fromCase) {
    maker.classList.add('flash-in');
    maker.querySelector('.maker-status').textContent = 'The board size, rules and facts of your last case are set. Change them if you like, then press Generate.';
  }
}

// Difficulty filter for the extra cases: -1 shows all, else an index into DIFFICULTY.
const extraPick = () => getSetting('extraFilter', -1);
const shownExtra = lv => extraPick() < 0 || difficultyIndex(lv.tries) === extraPick();
function extraFilter(items) {
  const count = d => items.filter(([lv]) => difficultyIndex(lv.tries) === d).length;
  const button = (d, label) => el(`button.chip.filter${extraPick() === d ? '.on' : ''}`, {
    type: 'button', 'aria-pressed': String(extraPick() === d),
    onclick: () => {
      setSetting('extraFilter', d);
      const y = window.scrollY;
      void route();
      window.scrollTo(0, y);
    },
  }, label);
  return el('div.extra-filter', { role: 'group', 'aria-label': 'Show extra cases of one difficulty' },
    button(-1, `All (${items.length})`),
    DIFFICULTY.map((d, k) => button(k, `${d.name} (${count(k)})`)));
}

function renderCampaign(theme) {
  const campaign = CAMPAIGNS.find(c => c.theme === theme.id);
  document.title = `${theme.title} · Alibi Grid`;
  app.replaceChildren(
    el('nav.topbar', {},
      el('a.btn.icon.back', { href: '#/', title: 'Back to all campaigns', 'aria-label': 'Back to all campaigns' }, icon('back')),
      el('a.topbar-title', { href: '#/', title: 'Main page' }, logo('.bar-logo'), 'Alibi Grid')),
    el('header.campaign-head', { style: { '--h': theme.hue } },
      el('span.campaign-icon.big', { 'aria-hidden': 'true' }, theme.icon),
      el('div', {}, el('h1', {}, theme.title), el('p.lede', {}, theme.tagline))),
    themeRules(theme).length
      ? el('ul.rule-list', {}, theme.mix
        ? [el('li', {}, 'Each case mixes two or three of these special rules:'), ...themeRules(theme).map(r => el('li', {}, ruleText(r)))]
        : themeRules(theme).map(r => el('li', {}, ruleText(r))))
      : '', // not null: replaceChildren would show it as the text "null"
    // Cases grouped by difficulty: Beginner, Medium, Hard, Expert.
    // Each group folds open and shut. Folded groups are remembered per campaign.
    el('div.case-groups', {}, groupsOf(campaign.levels).map(({ g, items }) => el('details.case-group', {
      open: !getSetting('foldedGroups', {})[theme.id]?.includes(g),
      ontoggle: e => {
        const all = getSetting('foldedGroups', {});
        const mine = new Set(all[theme.id] || []);
        e.target.open ? mine.delete(g) : mine.add(g);
        setSetting('foldedGroups', { ...all, [theme.id]: [...mine] });
      },
    },
      el('summary.case-group-head', {},
        el('h2', {}, groupTitle(g)),
        el('span.case-group-info', {},
          `${items.filter(([, i]) => isClosed(loadLevel(levelKey(theme.id, i)))).length} / ${items.length} solved`)),
      // Extra cases have every difficulty: buttons show only one.
      g === 'extra' ? extraFilter(items) : '',
      el('ol.cases', {}, items.filter(([lv]) => g !== 'extra' || shownExtra(lv)).map(([lv, i]) => {
        const state = loadLevel(levelKey(theme.id, i));
        const status = isClosed(state) ? 'solved' : state?.pos?.some(x => x >= 0) ? 'started' : 'new';
        // A box in the corner closes (or opens) a case by hand. It sits next to the
        // card's link, not in it, so a tick does not open the case.
        const closeBox = el('input.case-close', {
          type: 'checkbox', checked: status === 'solved',
          title: status === 'solved' ? 'Closed. Untick to open it again.' : 'Tick to close this case',
          'aria-label': `Case ${items.findIndex(([, j]) => j === i) + 1} closed`,
          onchange: e => {
            // Tick: closed. Untick: open again, and the board is no longer locked.
            const old = loadLevel(levelKey(theme.id, i)) || {};
            saveLevel(levelKey(theme.id, i), { ...old, closed: e.target.checked, solved: e.target.checked && !!old.solved });
            const y = window.scrollY;
            renderCampaign(theme);
            window.scrollTo(0, y);
          },
        });
        return el('li.case-item', { style: { '--h': theme.hue } }, closeBox, el(`a.case-card.${status}`, { href: `#/c/${theme.id}/${i}`, style: { '--h': theme.hue } },
          caseThumb(theme, lv),
          el('span.case-num', {}, `Case ${items.findIndex(([, j]) => j === i) + 1}`),
          el('span.case-size', {}, `${lv.size} × ${lv.size} `, difficultyBadge(lv.tries)),
          el('span.case-victim', {}, `Victim: ${lv.people[lv.victim]}`),
          theme.mix ? el('span.case-victim', {}, lv.rules.map(r => RULE_LABEL[r]).join(' · ')) : null,
          status === 'started' ? el('span.case-status', {}, 'In progress') : null,
          // Solved cases get a big green tick over the whole card.
          status === 'solved' ? caseTick() : null));
      }))))),
  );
}

// A shared board comes as ?b=<data>. Ask before it replaces the player's progress
// (key: where that progress is saved). Then drop ?b= from the address (hash).
// Returns the board to use, or null.
async function sharedBoard(query, key, hash) {
  const shared = decodeData(new URLSearchParams(query).get('b') || '');
  if (!shared || !Array.isArray(shared.pos)) return null;
  const mine = loadLevel(key);
  const busy = mine && (mine.pos?.some(x => x >= 0) || mine.marks?.length || Object.keys(mine.notes || {}).length);
  const use = !busy || await showDialog({
    title: 'Open shared board?',
    body: el('p', {}, 'This link holds a board for this case. It replaces your board here.'),
    buttons: [{ label: 'Keep mine', value: false }, { label: 'Use shared board', value: true, primary: true }],
  });
  history.replaceState(null, '', hash);
  return use ? { ...shared, solved: false } : null;
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
      const use = await sharedBoard(query, `x:${id}`, `#/x/${parts[1]}`);
      return renderGame(app, theme, { theme: theme.id, levels: [data.l] }, 0, use, { id, data: parts[1] });
    }
  }
  if (parts[0] === 'c') {
    const theme = themeById(parts[1]);
    const campaign = CAMPAIGNS.find(c => c.theme === parts[1]);
    if (theme && campaign) {
      const i = Number(parts[2]);
      if (parts.length > 2 && campaign.levels[i]) {
        const use = await sharedBoard(query, levelKey(theme.id, i), `#/c/${theme.id}/${i}`);
        return renderGame(app, theme, campaign, i, use);
      }
      return renderCampaign(theme);
    }
  }
  if (parts[0] === 'make') return renderMaker(new URLSearchParams(query).get('from') === 'case');
  renderHome();
}

window.addEventListener('hashchange', route);
void route();
