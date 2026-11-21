// The game screen.

import { decodeLevel, encodeLevel } from './levelCodec.js';
import { makeLevel, DIFFICULTY, difficultyIndex, campaignCaseName } from './generator.js';
import { blockingSet, colName, RANKS, COURT, GLYPHS, SEA, LAWFUL, tradeById, ruleText, clueText, article, factText } from './themes.js';
import { clueState, murdererOf, victimIndex, factCells, CELL_FACTS, featureCells, compareText } from './rules.js';
import { deduce, caseScore } from './hints.js';
import { loadLevel, saveLevel, levelKey, isClosed, getSetting, setSetting } from './storage.js';
import { el, showDialog, personColor, roomHue, icon, copyText, encodeData, logo, difficultyBadge, windowLine, sofaPairs } from './ui.js';

export function showHelp() {
  return showDialog({
    title: 'How to play',
    body: el('div.help', {},
      el('p', {}, 'Someone was murdered. Every person on the list was somewhere in the building. Work out where.'),
      el('ol', {},
        el('li', {}, 'Each row and each column holds exactly one person.'),
        el('li', {}, 'Nobody stands on furniture like shelves or pianos. Chairs, seats, sofas and beds are fine.'),
        el('li', {}, 'Every clue is true. "Next to" means the cell above, below, left or right, in the same room. Walls block it. ',
          'Someone on a chair is never "next to a chair" (same for every object).'),
        el('li', {}, 'The murderer is the only person who was in the same room as the victim.')),
      el('p', {}, 'Some campaigns add special rules, like ranks, seals, trades, the sea or bandits. ',
        'A case shows its special rules above the list of people.'),
      el('h3', {}, 'Controls'),
      el('p.hint', {}, 'On a touch screen, tap instead of click.'),
      el('ul', {},
        el('li', {}, el('strong', {}, 'Click'), ' a cell (Default tool): note who can or can\'t be there.'),
        el('li', {}, el('strong', {}, 'Click'), ' a cell (Place tool): choose who stands there.'),
        el('li', {}, el('strong', {}, 'Click'), ' a cell (Cross out tool): cross it out or remove the cross.'),
        el('li', {}, el('strong', {}, 'Long press'), ' a cell: choose who stands there.'),
        el('li', {}, el('strong', {}, 'Right-click'), ' a cell: cross it out or remove the cross.'),
        el('li', {}, el('strong', {}, 'Drag'), ' a person onto cells: note them there. Pause on several cells to note them all (on touch: hold the card first).'),
        el('li', {}, el('strong', {}, 'Drag'), ' a placed person off the board: take them off.'),
        el('li', {}, el('strong', {}, 'Click'), ' a person: light up their cell and notes. Click again to turn it off.'),
        el('li', {}, 'While a person is selected: ', el('strong', {}, 'click'), ' a cell to note them there (click again to change or clear the note). ',
          'Click the person again to stop.'),
        el('li', {}, el('strong', {}, 'Double-click'), ' a person (or 🔍): mark on a board where they can or can\'t be.'),
        el('li', {}, el('strong', {}, 'Click'), ' a room or object in a clue: light it up on the board.'),
        el('li', {}, 'The boxes next to each row and column take notes too.'),
        el('li', {}, 'With "Show separate board for placing", the floor plan only shows who stands where. Everything else happens on the placing board below it.')),
    ),
  });
}

// Icon and name for a cell mark (seal or work spot).
function tagInfo(tag) {
  if (!tag) return null;
  if (tag.startsWith('t:')) {
    const t = tradeById(tag.slice(2));
    return { icon: t.icon, name: `${t.name.toLowerCase()} spot` };
  }
  if (tag.startsWith('k:')) {
    const t = tradeById(tag.slice(2));
    return { icon: t.icon, name: `${t.name.toLowerCase()} task spot` };
  }
  return GLYPHS[tag];
}

// Look of a mark: trade work spot, hidden task spot, or seal.
function tagClass(tag) {
  if (tag.startsWith('t:')) return 'work';
  return tag.startsWith('k:') ? 'task' : 'seal';
}

// True if a cell's tag fits a highlight: any work spot, any task spot, or this exact mark.
function tagFits(tag, v) {
  if (v === 'trade') return !!tag?.startsWith('t:');
  if (v === 'task') return !!tag?.startsWith('k:');
  return tag === v;
}

// How far to scroll for a pointer at y near the top or bottom edge (0 elsewhere).
function edgeStep(y, h, edge) {
  if (y < edge) return -(edge - y) / 3;
  if (y > h - edge) return (y - (h - edge)) / 3;
  return 0;
}

// The next note after yes / no: can be here → can't be here → nothing.
// Without "can't be here" (showNots off) it just toggles "can be here".
function nextNote(yes, no, showNots) {
  if (!showNots) return yes || no ? null : 'yes';
  if (yes) return 'no';
  return no ? null : 'yes';
}

// Class of a clue by its check: .ok (holds), .no (broken) or none.
function checkClass(ok) {
  if (ok === true) return '.ok';
  return ok === false ? '.no' : '';
}

// Title of a hint page.
function stepLabel(step) {
  if (step.mistake) return 'Check your board';
  return step.done ? 'All placed' : 'Your next step';
}

// A text field with a copy button. status: where to say how the copy went.
function copyField(label, value, status) {
  const box = el('textarea', { rows: 2, readOnly: true, value });
  return el('label.share-field', {}, el('span', {}, label),
    el('div.field-with-copy', {}, box,
      el('button.copy-btn', {
        type: 'button', title: 'Copy', 'aria-label': `Copy: ${label}`,
        onclick: async () => {
          const ok = await copyText(box.value);
          if (!ok) box.select(); // ready to copy by hand
          status.textContent = ok ? 'Copied to clipboard.' : 'Copy failed. The text is selected: copy it by hand.';
        },
      }, icon('copy'))));
}

// custom: { id, data } for a player-made case. It has no campaign.
export function renderGame(app, theme, campaign, index, shared = null, custom = null) {
  const level = decodeLevel(theme, campaign.levels[index]);
  const home = custom ? '#/' : `#/c/${theme.id}`;
  const homeName = custom ? 'Menu' : theme.title;
  const caseName = custom ? 'Your case' : campaignCaseName(campaign.levels, index);
  const n = level.size;
  const P = level.people.length;
  const blocking = blockingSet(theme);
  const victim = victimIndex(level);
  // "What if" steps the hints need. Old links do not store it: work it out once.
  // The step score: null if the hints can not solve it step by step (then tries is -1).
  const score = level.score ?? caseScore(level, blocking);
  const tries = level.tries ?? score?.tries ?? -1;
  const key = custom ? `x:${custom.id}` : levelKey(theme.id, campaign.levels[index]);
  // Letter: A, B, C, … for suspects, V for the victim (the first letter of the name).
  // Old links may have other names: then the letter follows the list order.
  const letter = p => {
    const ch = level.people[p].name[0];
    if (p === victim) return 'V';
    return /[A-K]/.test(ch) ? ch : 'ABCDEFGHIJKL'[p];
  };
  const color = p => personColor(p === victim ? 11 : 'ABCDEFGHIJKL'.indexOf(letter(p)));
  // The token of person p: their letter in their color. extra: more classes ('.dim', '.sel', …).
  const tokenEl = (p, extra = '', props = {}) =>
    el(`span.token${p === victim ? '.victim' : ''}${extra}`, { style: { '--pc': color(p) }, ...props }, letter(p));
  const tags = level.tags || [];
  const court = new Set(level.court || []);
  const lawful = new Set(level.lawful || []);

  // Icon shown before a room name, if the room is special.
  function roomIcon(k) {
    if (k === level.sea) return SEA.icon;
    if (court.has(k)) return COURT.icon;
    if (lawful.has(k)) return LAWFUL.icon;
    return null;
  }

  // Doors (in walls between rooms) and windows (in the outer wall), drawn over the board.
  function featureSvg() {
    const parts = [];
    for (const [i, j] of level.doors) {
      const r = Math.floor(i / n), c = i % n;
      const [x1, y1, x2, y2] = j === i + 1 ? [c + 1, r + 0.22, c + 1, r + 0.78] : [c + 0.22, r + 1, c + 0.78, r + 1];
      parts.push(`<line class="door-gap" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/><line class="door" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`);
    }
    for (const [i, side] of level.windows) {
      const [x1, y1, x2, y2] = windowLine(side, Math.floor(i / n), i % n, n, 0.05);
      parts.push(`<line class="window" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/><line class="window-glass" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`);
    }
    if (!parts.length) return null;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'features');
    svg.setAttribute('viewBox', `0 0 ${n} ${n}`);
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = parts.join('');
    return svg;
  }

  // River rule: a blue line along the cell edges, drawn over the board.
  function riverSvg() {
    const rv = level.river;
    if (!rv || !level.rules.includes('river')) return null;
    const pts = [];
    rv.cut.forEach((c, k) => {
      if (rv.dir === 'v') pts.push(`${c},${k}`, `${c},${k + 1}`);
      else pts.push(`${k},${c}`, `${k + 1},${c}`);
    });
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'river');
    svg.setAttribute('viewBox', `0 0 ${n} ${n}`);
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = `<polyline class="river-bank" points="${pts.join(' ')}"/><polyline class="river-water" points="${pts.join(' ')}"/>`;
    return svg;
  }

  // Even & odd rule: the room's mark, or ''.
  const parityOf = new Map(level.parity || []);
  const parityTag = k => (parityOf.has(k) ? ` · ${parityOf.get(k)}` : '');

  // Room name with its icon and parity mark.
  function roomTitle(k) {
    const icon = roomIcon(k);
    const prefix = icon ? `${icon} ` : '';
    return `${prefix}${level.roomNames[k]}${parityTag(k)}`;
  }

  const saved = shared || loadLevel(key);
  const state = {
    pos: saved?.pos?.length === P ? saved.pos.slice() : new Array(P).fill(-1),
    marks: new Set(saved?.marks || []),
    // Notes: key -> Set of people. Keys: cell index, 'r<row>' or 'c<col>'.
    notes: new Map(Object.entries(saved?.notes || {}).map(([k, v]) => [k, new Set(v)])),
    // People who can not be there, per note key.
    nots: new Map(Object.entries(saved?.nots || {}).map(([k, v]) => [k, new Set(v)])),
    // Free text per note key.
    texts: new Map(Object.entries(saved?.texts || {})),
    solved: !!saved?.solved, // this board is solved: it is locked
    // The case counts as closed in the campaign. A reset keeps it, and a shared board does not change it.
    closed: isClosed(loadLevel(key)),
    selected: null,
    mode: 'note',
    highlight: null,
    history: [],
    future: [], // undone steps, for redo
  };
  // Options and their defaults.
  const OPTION_DEFAULTS = {
    shade: true,
    checks: false,
    hidePlaced: true, // hide the "can be here" dots of people who are already placed
    pulseHidden: false, // also blink cells whose dot is hidden (crossed, taken, placed elsewhere)
    split: false, // two boards: floor plan on top, placing board below
    showNots: false, // the whole "can't be here" feature: dots, dialog parts and hints
  };
  const assists = Object.fromEntries(Object.entries(OPTION_DEFAULTS).map(([k, v]) => [k, getSetting(k, v)]));

  function resetOptions() {
    for (const [k, v] of Object.entries(OPTION_DEFAULTS)) { assists[k] = v; setSetting(k, v); }
    draw();
    flash('Options are back to their defaults.');
  }
  const ZOOMS = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.15, 1.3, 1.5, 1.75, 2, 2.5, 3];
  // Each board has its own zoom: 'zoom' (floor plan) and 'zoomPlacing' (placing board in split view).
  const zooms = {};
  for (const key of ['zoom', 'zoomPlacing']) zooms[key] = ZOOMS.includes(getSetting(key, 1)) ? getSetting(key, 1) : 1;

  if (shared) persist();
  document.title = `${caseName} · ${theme.title}`;

  // ---- state changes ----

  function setsObject(map) {
    return Object.fromEntries([...map].map(([k, v]) => [k, [...v]]));
  }

  function current() {
    return {
      pos: state.pos.slice(), marks: [...state.marks], notes: setsObject(state.notes),
      nots: setsObject(state.nots), texts: Object.fromEntries(state.texts),
    };
  }

  function snapshot(prev = current()) {
    state.history.push(prev);
    if (state.history.length > 200) state.history.shift();
    state.future = [];
  }

  function persist() {
    saveLevel(key, { ...current(), solved: state.solved, closed: state.closed });
  }

  function personAt(i) {
    return state.pos.indexOf(i);
  }

  // ---- drag and drop ----

  // Drag a person from the list (or a token on the board) onto a cell.
  // Pointer events, so it works with mouse and touch.
  let justDragged = false;
  let pressed = false; // a long press just placed someone
  // fromBoard: dropping off the board removes the person.
  // hold: on touch, wait for a long press first, so a swipe still scrolls.
  // While dragging: a cell counts after a short pause on it (passing over does not).
  // Dropping notes "can be here" on every counted cell; a drag never places anyone.
  // A cell counts only while the pointer holds still on it; any movement restarts the wait.
  const DWELL = 450, STILL = 5;
  // Long press on a cell opens the place dialog: the ring shows after a short wait, then fills.
  const PRESS_WAIT = 300, PRESS_FILL = 600, CELL_PRESS = PRESS_WAIT + PRESS_FILL;
  function startDrag(e, p, { fromBoard = false, hold = false } = {}) {
    if (state.solved || e.button > 0) return;
    const sx = e.clientX, sy = e.clientY;
    const touchHold = hold && e.pointerType === 'touch';
    let armed = !touchHold, ghost = null, over = null, timer = null;
    const origin = fromBoard ? state.pos[p] : -1;
    // Targets: board cells (key = cell index) and the row/column note boxes (key 'r3', 'c2').
    const marked = new Map(); // note key -> element
    let dwellTimer = 0, still = { x: 0, y: 0 };
    const keyOf = t => t.dataset.key || t.dataset.i;
    const usable = t => t && (t.dataset.key ? true : !blocking.has(level.objects[Number(t.dataset.i)]) && Number(t.dataset.i) !== origin);
    const enter = cell => {
      clearTimeout(dwellTimer);
      if (!usable(cell)) return;
      const key = keyOf(cell);
      dwellTimer = setTimeout(() => { marked.set(key, cell); cell.classList.add('drop-mark'); }, DWELL);
    };
    let lastY = sy, scroller = 0;
    // Near the top or bottom edge, scroll the page so the board comes into view.
    const edgeScroll = () => {
      const d = edgeStep(lastY, window.innerHeight, 70);
      if (d) window.scrollBy(0, d);
      scroller = requestAnimationFrame(edgeScroll); // runs until the drag ends
    };
    const cellAt = ev => document.elementFromPoint(ev.clientX, ev.clientY)?.closest('.board-frame:not(.view-only) .board .cell, .board-frame .note-cell');
    const showGhost = (x, y) => {
      ghost = el(`span.token.drag-ghost${p === victim ? '.victim' : ''}`, { style: { '--pc': color(p) } }, letter(p));
      document.body.append(ghost);
      ghost.style.left = `${x}px`;
      ghost.style.top = `${y}px`;
    };
    // While dragging on touch, stop the page from scrolling.
    const noScroll = ev => { if (ghost) ev.preventDefault(); };
    if (touchHold) {
      timer = setTimeout(() => {
        armed = true;
        showGhost(sx, sy);
        navigator.vibrate?.(15);
      }, 320);
    }
    const move = ev => {
      if (!armed) {
        // Moved before the long press: it is a scroll, not a drag.
        if (Math.hypot(ev.clientX - sx, ev.clientY - sy) > 8) end(ev, true);
        return;
      }
      if (!ghost) {
        // (coverage: a tiny move before the drag starts is not tested yet)
        /* v8 ignore next */
        if (Math.hypot(ev.clientX - sx, ev.clientY - sy) < 6) return;
        showGhost(ev.clientX, ev.clientY);
      }
      ev.preventDefault();
      ghost.style.left = `${ev.clientX}px`;
      ghost.style.top = `${ev.clientY}px`;
      lastY = ev.clientY;
      if (!scroller) scroller = requestAnimationFrame(edgeScroll);
      const cell = cellAt(ev);
      if (cell !== over) {
        over?.classList.remove('drop'); cell?.classList.add('drop'); over = cell;
        still = { x: ev.clientX, y: ev.clientY };
        enter(cell);
      } else if (cell && Math.hypot(ev.clientX - still.x, ev.clientY - still.y) > STILL) {
        // Still moving inside the cell: start waiting again.
        still = { x: ev.clientX, y: ev.clientY };
        if (!marked.has(keyOf(cell))) enter(cell);
      }
    };
    function end(ev, abort = false) {
      clearTimeout(timer);
      clearTimeout(dwellTimer);
      cancelAnimationFrame(scroller);
      for (const [, c] of marked) c.classList.remove('drop-mark');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', end);
      window.removeEventListener('pointercancel', end);
      window.removeEventListener('touchmove', noScroll);
      if (!ghost) return;
      ghost.remove();
      over?.classList.remove('drop');
      justDragged = true;
      setTimeout(() => { justDragged = false; }, 0);
      if (abort || ev.type === 'pointercancel') return;
      const cell = cellAt(ev);
      if (usable(cell)) marked.set(keyOf(cell), cell); // the drop target always counts
      if (marked.size) return markCanBe(p, [...marked.keys()]);
      if (cell && Number(cell.dataset.i) === origin) return; // back on their own cell: nothing changes
      if (cell) return flash(`Nobody can stand on ${article(theme.objects[level.objects[Number(cell.dataset.i)]].name)}.`);
      if (fromBoard) { snapshot(); state.pos[p] = -1; changed(); }
    }
    window.addEventListener('pointermove', move, { passive: false });
    window.addEventListener('pointerup', end);
    window.addEventListener('pointercancel', end);
    window.addEventListener('touchmove', noScroll, { passive: false });
  }

  // Note "can be here" for person p on all these cells or note boxes (note keys).
  function markCanBe(p, cells) {
    snapshot();
    for (const i of cells) {
      const k = String(i);
      state.notes.set(k, new Set([...(state.notes.get(k) || []), p]));
      const no = state.nots.get(k);
      if (no) { no.delete(p); if (!no.size) state.nots.delete(k); }
    }
    changed();
    flash(cells.length === 1 ? `${level.people[p].name} can be here. Long-press a cell to place someone.`
      : `${level.people[p].name} can be here: ${cells.length} cells noted.`);
  }

  // Write a hint step onto the player's board, as one undo step.
  function applyStep(step) {
    const { pos, cand } = step.before;
    const after = cand.map(c => new Set(c));
    const apos = pos.slice();
    if (step.place) { apos[step.place.p] = step.place.i; after[step.place.p] = new Set([step.place.i]); }
    for (const [q, i] of step.elim || []) after[q].delete(i);
    if (step.allowed) after[step.allowed.p] = new Set(step.allowed.cells);
    snapshot();
    const note = (key, q, on) => {
      const set = state.notes.get(key) || new Set();
      on ? set.add(q) : set.delete(q);
      set.size ? state.notes.set(key, set) : state.notes.delete(key);
    };
    // A placement goes to a free cell: with someone wrong on the board, hints show mistakes instead.
    if (step.place) {
      const { p, i } = step.place;
      state.pos[p] = i;
      state.marks.delete(i);
    }
    if (step.allowed) {
      const { p, cells } = step.allowed;
      for (let i = 0; i < n * n; i++) note(String(i), p, cells.includes(i));
    }
    for (const [q, i] of step.elim || []) {
      note(String(i), q, false);
      if (assists.showNots) { const set = state.nots.get(String(i)) || new Set([q]); set.add(q); state.nots.set(String(i), set); }
    }
    // Cells nobody can use any more get a cross.
    const openOf = (cs, ps) => { const o = new Set(); cs.forEach((c, q) => { if (ps[q] < 0) c.forEach(i => o.add(i)); }); return o; };
    const was = openOf(cand.map(c => new Set(c)), pos), now = openOf(after, apos);
    const used = new Set(apos.filter(i => i >= 0));
    const rowUsed = new Set([...used].map(i => Math.floor(i / n))), colUsed = new Set([...used].map(i => i % n));
    for (const i of [...was, ...(step.cross || [])]) {
      if (now.has(i) || used.has(i) || rowUsed.has(Math.floor(i / n)) || colUsed.has(i % n)) continue; // auto ✕ covers those
      state.marks.add(i);
    }
    // A person now known to be in one row or column gets a note in that box.
    after.forEach((c, q) => {
      if (apos[q] >= 0 || !c.size) return;
      for (const [k, f] of [['r', i => Math.floor(i / n)], ['c', i => i % n]]) {
        const xs = new Set([...c].map(i => f(i)));
        if (xs.size === 1) note(`${k}${[...xs][0]}`, q, true);
      }
    });
    changed();
  }

  function tapCell(i, forceMark = false) {
    if (state.solved || justDragged) return;
    if (forceMark || state.mode === 'mark') {
      if (personAt(i) >= 0) return;
      snapshot();
      state.marks.has(i) ? state.marks.delete(i) : state.marks.add(i);
      return changed();
    }
    if (blocking.has(level.objects[i])) return flash(`Nobody can stand on ${article(theme.objects[level.objects[i]].name)}.`);
    const open = () => (state.mode === 'note' ? openNotes(String(i), `Cell ${colName(i % n)}${Math.floor(i / n) + 1}`, i) : openPlacePicker(i));
    // A person is selected: every click notes them here (no double click).
    if (state.selected !== null) return noteClick(state.selected, String(i));
    return open();
  }

  // A click with a person selected. Never change notes the board would not show:
  // say why instead, so a click never seems to do nothing.
  function noteClick(p, key) {
    const name = level.people[p].name;
    if (state.pos[p] >= 0 && assists.hidePlaced && state.pos[p] !== Number(key)) {
      return flash(`${name} is placed already. Their notes are hidden (see Options).`);
    }
    if (/^\d+$/.test(key)) {
      const i = Number(key), r = Math.floor(i / n), c = i % n;
      const taken = state.pos.some((j, q) => q !== p && j >= 0 && (Math.floor(j / n) === r || j % n === c));
      if (state.marks.has(i) || taken) return flash('That cell is crossed out, so nobody can be noted there.');
    }
    cycleNote(p, key);
  }

  // Next note for person p on a cell or note box: can be here → can't be here → nothing.
  // While "can't be here" dots are hidden, it just toggles "can be here".
  function cycleNote(p, key) {
    const yes = state.notes.get(key)?.has(p), no = state.nots.get(key)?.has(p);
    const next = nextNote(yes, no, assists.showNots);
    snapshot();
    for (const [map, on] of [[state.notes, next === 'yes'], [state.nots, next === 'no']]) {
      const set = new Set(map.get(key) || []);
      if (on) set.add(p); else set.delete(p);
      if (set.size) map.set(key, set); else map.delete(key);
    }
    changed();
  }

  // Picker for the person who stands on cell i.
  async function openPlacePicker(i) {
    const here = personAt(i);
    const order = level.people.map((_, p) => p).sort((a, b) => letter(a).localeCompare(letter(b)));
    const noted = state.notes.get(String(i));
    // The person selected on the board is chosen already: one tap on Place (or Enter) puts them here.
    const chosen = state.selected !== null && state.selected !== undefined && state.selected !== here ? state.selected : -1;
    const pick = p => {
      snapshot();
      if (here >= 0) state.pos[here] = -1;
      state.pos[p] = i;
      state.marks.delete(i);
      document.getElementById('dialog').close('');
    };
    // Where p is now: here, at another cell, or noted here.
    const info = p => {
      if (p === here) return el('small', {}, 'here');
      if (state.pos[p] >= 0) return el('small', {}, `at ${colName(state.pos[p] % n)}${Math.floor(state.pos[p] / n) + 1}`);
      return noted?.has(p) ? el('small', {}, 'noted') : null;
    };
    const buttons = order.map(p => el('button.note-pick', {
      type: 'button', 'aria-pressed': String(chosen >= 0 ? p === chosen : p === here), onclick: () => pick(p),
    },
    tokenEl(p),
    el('span.note-name', {}, level.people[p].name),
    info(p)));
    const shown = showDialog({
      title: `Who stands on ${colName(i % n)}${Math.floor(i / n) + 1}?`,
      body: [
        el('p.hint', {}, 'Tap a person to place them here. Someone placed elsewhere moves here.'),
        el('div.note-picker', {}, buttons),
        here >= 0 ? el('div.note-actions', {}, el('button.btn', {
          type: 'button',
          onclick: () => { snapshot(); state.pos[here] = -1; document.getElementById('dialog').close(''); },
        }, `Remove ${level.people[here].name}`)) : null,
        // Cancel and Place in one row.
        chosen >= 0 ? el('div.dialog-buttons', {},
          el('button.btn', { type: 'button', onclick: () => document.getElementById('dialog').close('') }, 'Cancel'),
          el('button.btn.primary.place-chosen', { type: 'button', onclick: () => pick(chosen) }, `Place ${level.people[chosen].name}`)) : null,
      ],
      buttons: chosen >= 0 ? [] : [{ label: 'Cancel', value: false }],
    });
    // Focus Place, so Enter places the chosen person.
    document.querySelector('#dialog .place-chosen')?.focus();
    await shown;
    changed();
  }

  // Picker for notes on a cell, row or column.
  async function openNotes(noteKey, title, cell = -1) {
    if (state.solved) return;
    const prev = current();
    const yes = new Set(state.notes.get(noteKey) || []);
    const no = new Set(state.nots.get(noteKey) || []);
    const apply = () => {
      for (const [map, set] of [[state.notes, yes], [state.nots, no]]) {
        if (set.size) map.set(noteKey, new Set(set)); else map.delete(noteKey);
      }
      draw();
    };
    const order = level.people.map((_, p) => p).sort((a, b) => letter(a).localeCompare(letter(b)));
    const yesButtons = new Map(), noButtons = new Map();
    const sync = () => {
      for (const [p, b] of yesButtons) b.setAttribute('aria-pressed', String(yes.has(p)));
      for (const [p, b] of noButtons) b.setAttribute('aria-pressed', String(no.has(p)));
    };
    // A person is either "could be here" or "can not be here", never both.
    const picker = (mine, other, store, cls) => order.map(p => {
      const where = state.pos[p] >= 0 ? `${colName(state.pos[p] % n)}${Math.floor(state.pos[p] / n) + 1}` : '';
      const btn = el(`button.note-pick${cls}`, {
        type: 'button',
        onclick: () => {
          if (mine.has(p)) mine.delete(p); else { mine.add(p); other.delete(p); }
          sync();
          apply();
        },
      },
      el(`span.token${p === victim ? '.victim' : ''}`, { style: { '--pc': color(p) } }, letter(p)),
      el('span.note-name', {}, level.people[p].name),
      where ? el('small', {}, `placed ${where}`) : null);
      store.set(p, btn);
      return btn;
    });
    // Heading with a small red x that clears that list.
    const listHead = (text, set, cls) => el(`div.list-head${cls}`, {},
      el('p.hint', {}, text),
      el('button.clear-x', {
        type: 'button', title: 'Clear this list', 'aria-label': 'Clear this list',
        onclick: () => { set.clear(); sync(); apply(); },
      }, '✕'));
    const buttons = picker(yes, no, yesButtons, '');
    const notButtons = picker(no, yes, noButtons, '.not');
    sync();
    const here = cell >= 0 ? personAt(cell) : -1;
    const extra = here < 0 ? null : el('div.note-actions', {},
      el('button.btn.danger.place-btn', {
        type: 'button',
        onclick: () => {
          snapshot();
          state.pos[here] = -1;
          persist();
          document.getElementById('dialog').close('');
        },
      }, `Remove ${level.people[here].name}`));
    // Switch to the place picker for this cell.
    let toPlace = false;
    const placeBtn = cell >= 0 ? el('button.btn.success.place-btn', {
      type: 'button',
      onclick: () => { toPlace = true; document.getElementById('dialog').close(''); },
    }, icon('user'), 'Place person…') : null;
    const text = el('textarea.note-text', {
      rows: 3, placeholder: 'Your own notes…', value: state.texts.get(noteKey) || '',
      'aria-label': 'Free text notes',
    });
    await showDialog({
      title,
      body: [listHead('Who could be here? Tap to mark or unmark.', yes, ''), el('div.note-picker', {}, buttons),
        // "Can't be here" only when that option is on.
        assists.showNots ? [listHead('Who cannot be here? Tap to mark or unmark.', no, '.not-hint'), el('div.note-picker', {}, notButtons)] : null,
        el('div.note-text-label', {},
          el('div.notes-head', {},
            el('span', {}, 'Notes'),
            // Clears both lists and the text.
            el('button.btn.small', {
              type: 'button',
              onclick: () => { yes.clear(); no.clear(); text.value = ''; sync(); apply(); },
            }, 'Clear notes')),
          text),
        placeBtn, extra],
      buttons: [{ label: 'Done', value: true, primary: true }],
    });
    const typed = text.value.trim();
    if (typed) state.texts.set(noteKey, text.value); else state.texts.delete(noteKey);
    const now = current();
    if (JSON.stringify([now.notes, now.nots, now.texts]) !== JSON.stringify([prev.notes, prev.nots, prev.texts])) snapshot(prev);
    persist();
    draw();
    if (toPlace) void openPlacePicker(cell);
  }

  function restore(saved) {
    state.pos = saved.pos;
    state.marks = new Set(saved.marks);
    state.notes = new Map(Object.entries(saved.notes).map(([k, v]) => [k, new Set(v)]));
    state.nots = new Map(Object.entries(saved.nots).map(([k, v]) => [k, new Set(v)]));
    state.texts = new Map(Object.entries(saved.texts));
    changed();
  }

  // Undo and redo: their buttons are off when there is nothing to do (or the case is solved).
  function undo() {
    state.future.push(current());
    restore(state.history.pop());
  }

  function redo() {
    state.history.push(current());
    restore(state.future.pop());
  }

  async function reset() {
    const go = await showDialog({
      title: 'Reset',
      body: el('p', {}, 'Clear this board, or get a new case with the same size and special rules.'),
      buttons: [
        { label: 'Reset current board', value: 'reset', primary: true },
        { label: 'Generate new board with same ruleset', value: 'new', cls: '.warning' },
        { label: 'Generate new board with similar ruleset …', value: 'similar', cls: '.warning-soft' },
        { label: 'Exit', value: 'exit', cls: '.danger' },
        { label: 'Cancel', value: 'cancel' },
      ],
      stack: true,
    });
    if (go === 'reset') restart();
    if (go === 'new') newBoard();
    if (go === 'similar') {
      // Open the case maker with this case's rules and size set.
      setSetting('makerRules', level.rules);
      setSetting('makerFacts', [...new Set(level.facts.map(f => f.t))]);
      setSetting('makerSize', n);
      if (tries >= 0) setSetting('makerDifficulty', [difficultyIndex(tries), difficultyIndex(tries)]);
      location.hash = '#/make?from=case';
    }
    if (go === 'exit') location.hash = home;
  }

  // A fresh case with this case's size, setting and special rules.
  function newBoard() {
    flash('Building a new case…');
    setTimeout(() => {
      try {
        const kinds = [...new Set(level.facts.map(f => f.t))];
        const same = tries >= 0 ? { tries: DIFFICULTY[difficultyIndex(tries)], timeLimit: 30000 } : {};
        const fresh = makeLevel(theme, n, Math.floor(Math.random() * 2 ** 31), level.rules, kinds, same);
        location.hash = `#/x/${encodeData({ t: theme.id, l: encodeLevel(theme, fresh) })}`;
      } catch {
        flash('No new case found. Try again.');
      }
    }, 30);
  }

  function changed() {
    persist();
    draw();
  }

  const allPlaced = () => state.pos.every(i => i >= 0);

  // Submit: show the board as submitted, ask for the room and the murderer.
  // The Submit button is on only when everyone is placed.
  async function submit() {
    const suspects = level.people.map((_, p) => p).filter(p => p !== victim)
      .sort((a, b) => letter(a).localeCompare(letter(b)));
    const roomIds = [...new Set(level.rooms)].filter(k => k !== level.sea);
    // Preselect what follows from the player's board: the victim's room,
    // and the one person alone with the victim there (if there is one).
    let room = level.rooms[state.pos[victim]];
    if (!roomIds.includes(room)) room = -1;
    let who = murdererOf(level, state.pos);
    if (!suspects.includes(who)) who = -1;
    const send = el('button.btn.success', { type: 'button', disabled: room < 0 || who < 0 }, 'Submit answer');
    const ready = () => { send.disabled = room < 0 || who < 0; };
    // Rooms as a list, like the people: a color swatch and the name.
    const roomBtns = roomIds.map(k => el('button.note-pick.room-pick', {
      type: 'button', 'aria-pressed': String(k === room), style: { '--rh': roomHue(theme, k) },
      onclick: e => { room = k; roomBtns.forEach(x => x.setAttribute('aria-pressed', String(x === e.currentTarget))); ready(); },
    }, el('span.swatch', { 'aria-hidden': 'true' }, el(`span.floor.floor-${floorOf(k)}`)), el('span.note-name', {}, level.roomNames[k])));
    const whoBtns = suspects.map(p => el('button.note-pick', {
      type: 'button', 'aria-pressed': String(p === who),
      onclick: e => { who = p; whoBtns.forEach(x => x.setAttribute('aria-pressed', String(x === e.currentTarget))); ready(); },
    }, el('span.token', { style: { '--pc': color(p) } }, letter(p)), el('span.note-name', {}, level.people[p].name)));
    let answer = null;
    send.onclick = () => { answer = { room, who }; document.getElementById('dialog').close(''); };
    await showDialog({
      title: 'Submit your answer',
      wide: true,
      body: [
        el('div.submit-view', {},
          el('figure', {}, el('figcaption', {}, 'Your board'), resultBoard('plain')),
          el('div.submit-questions', {},
            el('h3', {}, 'Who is the murderer?'),
            el('div.note-picker', {}, whoBtns),
            el('h3', {}, `In which room was ${level.people[victim].name} killed?`),
            el('div.note-picker', {}, roomBtns))),
        // Cancel and Submit in one row (Submit can be disabled, so it is not a dialog button).
        // Stays at the bottom of the dialog while the rest scrolls.
        el('div.dialog-buttons.submit-footer', {},
          el('button.btn', { type: 'button', onclick: () => document.getElementById('dialog').close('') }, 'Cancel'),
          send),
      ],
      buttons: [],
    });
    if (!answer) return;
    const boardOk = state.pos.every((i, p) => i === level.solution[p]);
    const roomOk = answer.room === level.rooms[level.solution[victim]];
    const whoOk = answer.who === murdererOf(level, level.solution);
    if (boardOk && roomOk && whoOk && !state.solved) { state.solved = true; state.closed = true; persist(); draw(); }
    return result(boardOk && roomOk && whoOk, { boardOk, roomOk, whoOk, answer });
  }

  // The result for a right answer: who did it, and the board.
  function rightBody() {
    const killer = murdererOf(level, level.solution);
    const roomName = level.roomNames[level.rooms[level.solution[victim]]];
    return [el('p.result-sub', {}, `${level.people[killer].name} was alone with ${level.people[victim].name} in the ${roomName}. Brilliant detective work!`),
      el('figure', {}, el('figcaption', {}, 'Your board'), resultBoard('plain'))];
  }

  // The result for a wrong answer: what is right and wrong, the board, and the solution.
  function wrongBody({ boardOk, roomOk, whoOk, answer }) {
    const wrong = state.pos.filter((i, p) => i !== level.solution[p]).length;
    const wrongText = wrong === 1 ? 'One person is' : `${wrong} people are`;
    const line = (good, text) => el(`li.${good ? 'ok' : 'no'}`, {}, text);
    return [el('ul.result-list', {},
      line(boardOk, boardOk ? 'Your board is right.' : `${wrongText} in the wrong place.`),
      line(whoOk, `Murderer: ${level.people[answer.who].name} ${whoOk ? 'is right.' : 'has an alibi.'}`),
      line(roomOk, `Room: the ${level.roomNames[answer.room]} ${roomOk ? 'is right.' : 'is wrong.'}`)),
    el('figure', {}, el('figcaption', {}, 'Your board as submitted'), resultBoard(boardOk ? 'plain' : 'marked')),
    el('details.result-solution', {},
      el('summary', {}, 'Show the solution'),
      el('p.hint', {}, 'Green: right place. Red: wrong place.'),
      el('div.result-boards', {},
        el('figure', {}, el('figcaption', {}, 'Your board'), resultBoard('marked')),
        el('figure', {}, el('figcaption', {}, 'Solution'), resultBoard('solution'))))];
  }

  // The final dialog: congratulations or sorry, then Continue, Restart or Exit.
  // checks: { boardOk, roomOk, whoOk, answer } (see submit).
  async function result(ok, checks) {
    const next = !custom && index + 1 < campaign.levels.length;
    const go = await showDialog({
      title: el('span.result-title', {}, el('span.result-emoji', {}, ok ? '🎉' : '😞'), ok ? 'Case closed!' : 'Sorry, that is wrong'),
      body: ok ? rightBody() : wrongBody(checks),
      wide: true,
      buttons: [
        { label: ok && next ? 'Next case →' : 'Continue', value: 'continue', cls: '.success' },
        { label: 'Restart', value: 'restart', cls: '.warning' },
        { label: 'Exit', value: 'exit', cls: '.danger' },
      ],
    });
    if (go === 'continue' && ok) location.hash = next ? `#/c/${theme.id}/${index + 1}` : home;
    if (go === 'restart') restart();
    if (go === 'exit') location.hash = home;
  }

  // The final solution in its own modal, on top of the hints dialog.
  // Closing it goes back to the hints.
  function showSolution() {
    const k = murdererOf(level, level.solution);
    const room = level.roomNames[level.rooms[level.solution[victim]]];
    const dlg = el('dialog.wide.solution-dialog');
    const close = () => dlg.close();
    dlg.append(el('div.dialog-body', {},
      el('button.dialog-x', { type: 'button', title: 'Close', 'aria-label': 'Close', onclick: close }, '×'),
      el('h2', {}, '🔑 Final solution'),
      el('p', {}, richText(`⟦${k}⟧ was alone with ⟦${victim}⟧ in the ${room}. So ⟦${k}⟧ did it.`)),
      resultBoard('solution'),
      el('div.dialog-buttons', {}, el('button.btn.primary', { type: 'button', onclick: close }, 'Close'))));
    dlg.addEventListener('close', () => dlg.remove());
    // A click on the backdrop closes it too.
    dlg.addEventListener('click', e => { if (e.target === dlg) close(); });
    document.body.append(dlg);
    dlg.showModal();
  }

  // A read-only board with labels. mode: 'plain' (the player's board),
  // 'marked' (the player's board, right and wrong ringed) or 'solution'.
  function resultBoard(mode) {
    const pos = mode === 'solution' ? level.solution : state.pos;
    const at = new Map(pos.map((i, p) => [i, p]).filter(([i]) => i >= 0));
    const board = el('div.board', { style: { '--n': n } }, riverSvg(), featureSvg());
    for (let i = 0; i < n * n; i++) board.append(resultCell(i, at.has(i) ? at.get(i) : -1, mode));
    return el('div.hint-board.result-board', { style: { '--n': n } }, withLabels(board));
  }

  // One cell of a result board, with person who (or -1) on it. mode: see resultBoard.
  function resultCell(i, who, mode) {
    const b = baseCells[i];
    if (who < 0) return el(`div.${b.cls.join('.')}`, { style: { '--rh': roomHue(theme, b.k) } }, baseParts(i));
    let extra = '';
    if (mode === 'marked') extra = level.solution[who] === i ? '.right' : '.wrong';
    return el(`div.${[...b.cls, 'busy'].join('.')}`, { style: { '--rh': roomHue(theme, b.k) } }, baseParts(i), tokenEl(who, extra));
  }

  // Column letters on top and row numbers on the left of a dialog board.
  // lanes: optional [row boxes, column boxes] next to and below the board.
  function withLabels(board, lanes = null) {
    return el(`div.label-frame${lanes ? '.with-lanes' : ''}`, {},
      el('span'),
      el('div.labels.cols', { style: { '--n': n } }, [...new Array(n).keys()].map(c => el('span', {}, colName(c)))),
      lanes ? el('span') : null,
      el('div.labels.rows', { style: { '--n': n } }, [...new Array(n).keys()].map(r => el('span', {}, String(r + 1)))),
      board,
      lanes ? [lanes[0], el('span'), lanes[1], el('span')] : null);
  }

  // Clear the board without asking (from the result dialog).
  // The case stays closed in the campaign if it was.
  function restart() {
    state.pos.fill(-1);
    state.marks.clear();
    state.notes.clear();
    state.nots.clear();
    state.texts.clear();
    state.history = [];
    state.future = [];
    state.solved = false;
    state.selected = null;
    changed();
  }

  let flashTimer;
  function flash(text) {
    const box = app.querySelector('.flash');
    box.textContent = text;
    box.classList.add('show');
    clearTimeout(flashTimer);
    flashTimer = setTimeout(() => box.classList.remove('show'), 2600);
  }

  // Choosing a person (or none) ends any lit-up objects from an earlier clue link.
  function selectPerson(p) {
    state.highlight = null;
    state.selected = p;
    draw();
  }

  function setHighlight(h) {
    const same = state.highlight && h && state.highlight.kind === h.kind && state.highlight.v === h.v;
    state.highlight = same ? null : h;
    draw();
  }

  // ---- hints ----

  let hintSteps = null;

  // Story boards show dots only for people an earlier step marked
  // ("can only be on the marked cells"). Later steps just shrink those dots.
  function markDotted(steps) {
    const dotted = new Set();
    for (const step of steps) {
      step.dotted = new Set(dotted);
      if (step.allowed) dotted.add(step.allowed.p);
    }
    return steps;
  }

  // Hint texts mark each person as ⟦p⟧; richText() turns that into their colored dot.
  const tagged = { ...level, people: level.people.map((x, p) => ({ ...x, name: `⟦${p}⟧` })) };
  const hintText = {
    name: p => `⟦${p}⟧`,
    cell: i => `${colName(i % n)}${Math.floor(i / n) + 1}`,
    col: colName,
    room: i => `the ${level.roomNames[level.rooms[i]]}`,
    rooms: cells => [...new Set(cells.map(i => level.roomNames[level.rooms[i]]))].map(x => `the ${x}`).join(' or '),
    clue: cl => clueText(theme, tagged, cl),
    people: ps => ps.map(p => `⟦${p}⟧`).join(' and '),
    fact: f => factText(theme, level, f),
  };

  // Mistakes on the player's board, as hint steps (empty when there are none).
  function mistakeSteps(before) {
    const out = [];
    const cell = i => `${colName(i % n)}${Math.floor(i / n) + 1}`;
    state.pos.forEach((i, p) => {
      if (i >= 0 && i !== level.solution[p]) out.push({ focus: [i], before, text: `⟦${p}⟧ does not stand on ${cell(i)}. Take ⟦${p}⟧ off and look at the clues again.` });
    });
    for (const i of state.marks) {
      const p = level.solution.indexOf(i);
      if (p >= 0) out.push({ focus: [i], before, text: `You crossed out ${cell(i)}, but someone stands there. Remove that cross.` });
    }
    for (const [k, set] of assists.showNots ? state.nots : []) {
      if (!/^\d+$/.test(k)) continue;
      for (const p of set) if (level.solution[p] === Number(k)) out.push({ focus: [Number(k)], before, text: `You noted that ⟦${p}⟧ cannot be on ${cell(Number(k))}. That note is wrong.` });
    }
    return out;
  }

  // Row r<x> or column c<x> as text.
  const lineName = (kind, x) => (kind === 'r' ? `row ${x + 1}` : `column ${colName(x)}`);

  // Cells per person from the player's notes on cells: "can be here" (noted)
  // and "can't be here" (out, only while those dots are shown).
  function cellNotes() {
    const out = level.people.map(() => new Set());
    const noted = level.people.map(() => new Set());
    const cellKeys = map => [...map].filter(([k]) => /^\d+$/.test(k));
    if (assists.showNots) for (const [k, set] of cellKeys(state.nots)) for (const p of set) out[p].add(Number(k));
    for (const [k, set] of cellKeys(state.notes)) for (const p of set) noted[p].add(Number(k));
    // "Can be here" notes on cells are what the player knows: the person is on one of them.
    noted.forEach((cells, p) => {
      if (!cells.size || state.pos[p] >= 0) return;
      for (let i = 0; i < n * n; i++) if (!cells.has(i)) out[p].add(i);
    });
    return { out, noted };
  }

  // Row and column boxes: a person noted in just one row box is in that row,
  // and that row is theirs (same for columns). Adds that to out; returns the notes.
  function lineNotesOf(out) {
    const lineNotes = [];
    for (const { kind, f } of [{ kind: 'r', f: i => Math.floor(i / n) }, { kind: 'c', f: i => i % n }]) {
      level.people.forEach((_, p) => {
        if (state.pos[p] >= 0) return;
        const xs = [...state.notes].filter(([k, set]) => k.startsWith(kind) && set.has(p)).map(([k]) => Number(k.slice(1)));
        if (xs.length !== 1) return;
        const x = xs[0];
        lineNotes.push({ p, kind, x, f });
        for (let i = 0; i < n * n; i++) {
          if (f(i) !== x) out[p].add(i);
          else level.people.forEach((_, q) => { if (q !== p) out[q].add(i); });
        }
      });
    }
    return lineNotes;
  }

  // The player's board as the hint board shows it: open cells are those not crossed,
  // not blocked and not in a filled row or column.
  function shownBoard() {
    const rowsUsed = new Set(state.pos.filter(i => i >= 0).map(i => Math.floor(i / n)));
    const colsUsed = new Set(state.pos.filter(i => i >= 0).map(i => i % n));
    const openCells = [...new Array(n * n).keys()].filter(i => !blocking.has(level.objects[i]) && !state.marks.has(i) &&
      !rowsUsed.has(Math.floor(i / n)) && !colsUsed.has(i % n));
    return { pos: state.pos.slice(), cand: level.people.map((_, p) => (state.pos[p] >= 0 ? [state.pos[p]] : openCells)) };
  }

  // Mistakes on the board, and notes that leave out where a person really stands.
  function noteMistakes(before, lineNotes, noted) {
    const wrong = mistakeSteps(before);
    for (const { p, kind, x, f } of lineNotes) {
      if (f(level.solution[p]) === x) continue;
      wrong.push({ focus: [], before, text: `Your note says ⟦${p}⟧ is in ${lineName(kind, x)}. That does not follow from the clues. Look at ⟦${p}⟧'s clues again.` });
    }
    noted.forEach((cells, p) => {
      if (cells.size && state.pos[p] < 0 && !cells.has(level.solution[p])) {
        wrong.push({ focus: [...cells], before, text: `Your "can be here" notes for ⟦${p}⟧ leave out a cell where ⟦${p}⟧ can be. Look at ⟦${p}⟧'s clues again.` });
      }
    });
    return wrong;
  }

  // The step's text, after which of the player's own notes it builds on.
  function withNotesText(step, lineNotes, noted) {
    // step.about: the people whose cells the step reasons from (else everyone it changes).
    // Steps that note cells for a person (allowed) always say who in about.
    const ps = new Set(step.about || [step.place?.p, ...(step.elim || []).map(([q]) => q)].filter(q => q !== undefined));
    const said = [];
    for (const p of ps) {
      const ln = lineNotes.find(l => l.p === p);
      if (ln) said.push(`Your note puts ⟦${p}⟧ in ${lineName(ln.kind, ln.x)}.`);
      // Not when the step says it itself ("⟦p⟧ can only be on …").
      else if (noted[p].size && !step.text.includes(`⟦${p}⟧ can only be on`)) said.push(`Your notes put ⟦${p}⟧ on ${[...noted[p]].map(i => colName(i % n) + (Math.floor(i / n) + 1)).join(', ')}.`);
    }
    return said.length ? `${said.join(' ')} ${step.text}` : step.text;
  }

  // True if a step only takes cells from people's notes and still crosses out a cell
  // or puts someone in one row or column (for the boxes).
  function changesBoard(step) {
    const lineOf = (cells, f) => { const xs = new Set([...cells].map(i => f(i))); return xs.size === 1 ? [...xs][0] : -1; };
    const { pos, cand } = step.before;
    const after = cand.map(c => new Set(c));
    for (const [q, i] of step.elim) after[q].delete(i);
    const openBefore = new Set(), openAfter = new Set();
    cand.forEach((c, q) => { if (pos[q] < 0) c.forEach(i => openBefore.add(i)); });
    after.forEach((c, q) => { if (pos[q] < 0) c.forEach(i => openAfter.add(i)); });
    if ([...openBefore].some(i => !openAfter.has(i))) return true; // a cell to cross out
    return after.some((c, q) => pos[q] < 0 && [i => Math.floor(i / n), i => i % n].some(f => {
      const x = lineOf(c, f);
      // (A row or column box note already narrows cand[q] to that line.)
      return x >= 0 && lineOf(cand[q], f) !== x;
    }));
  }

  // The next steps from the player's own board: their people, crosses and notes.
  // Every step follows from that board alone. Returns a list (mistakes first if there are any).
  function nextSteps() {
    const { out, noted } = cellNotes();
    const lineNotes = lineNotesOf(out);
    const start = { pos: state.pos.slice(), out, crossed: new Set(state.marks) };
    // Everyone still open has notes: a cell nobody is noted on is clearly empty to the player.
    if (state.pos.every((i, p) => i >= 0 || noted[p].size)) {
      // Notes of people who are placed already do not count.
      for (let i = 0; i < n * n; i++) if (!noted.some((c, q) => state.pos[q] < 0 && c.has(i))) start.crossed.add(i);
    }
    const before = shownBoard();
    const wrong = noteMistakes(before, lineNotes, noted);
    if (wrong.length) return wrong.map(w => ({ ...w, mistake: true, own: true }));
    if (allPlaced()) return [{ before, done: true, own: true, text: 'Everyone is placed. Press Submit, then name the room and the murderer.' }];
    const usesNotes = step => withNotesText(step, lineNotes, noted);
    // Steps the player can write down come first: a placement, a cross, new cells for a
    // person, a note to remove, or a person in one row or column (for the boxes).
    const visible = step => {
      if (step.place || step.allowed || step.cross?.length || step.done || step.mistake) return true;
      // Other steps take cells from people (elim).
      if (step.elim.some(([q, i]) => noted[q].has(i) || (assists.showNots))) return true;
      return changesBoard(step);
    };
    let steps = deduce(level, blocking, hintText, { start, options: true });
    // Nothing to write down? Use one such step quietly, tell it first, and look again.
    // Each quiet step takes cells away, so a step to write down comes in the end.
    const lead = [];
    while (!steps.some(visible)) {
      const quiet = steps[0];
      lead.push(usesNotes(quiet));
      for (const [q, i] of quiet.elim) start.out[q].add(i);
      steps = deduce(level, blocking, hintText, { start, options: true });
    }
    // Tries that rule out many cells at once are hard to follow: they come last.
    const size = st => (st.text.startsWith('If ') ? st.elim.length : 0);
    const shown = steps.filter(visible).sort((a, b) => size(a) - size(b));
    const first = lead.length ? `${lead.join(' ')} Then: ` : '';
    // A clue step explains itself; the quiet steps before it only matter for other steps.
    return shown.map(step => ({ ...step, text: (step.allowed ? '' : first) + usesNotes(step), own: true }));
  }

  async function openHints() {
    const body = el('div.hint-view', {}, el('p.hint', {}, 'Working out your next step…'));
    // Buttons on the title line: story and final solution. Each view sets its own.
    const titleButtons = el('span.hint-buttons');
    const dialog = showDialog({ title: el('span.hint-title', {}, 'Hints', titleButtons), body, wide: 'x', buttons: [{ label: 'Close', value: true, primary: true }] });
    await new Promise(r => setTimeout(r, 30));
    const plain = (kind, v, text) => el('span.ref-plain', {}, text);
    const people = level.people.map((_, q) => q).sort((a, b) => letter(a).localeCompare(letter(b)));
    // buttons: shown on the title line.
    const peopleColumn = (step, buttons) => {
      const about = new Set([step.place?.p, step.allowed?.p, ...(step.elim || []).map(([q]) => q)].filter(q => q !== undefined));
      titleButtons.replaceChildren(...[buttons].flat());
      return el('aside.hint-people', {}, drawFacts(false), el('h3', {}, 'People'),
        el('ul', {}, people.map(q => el(`li${about.has(q) ? '.about' : ''}`, {},
          el('div.hint-person', {},
            el(`span.token${q === victim ? '.victim' : ''}`, { style: { '--pc': color(q) } }, letter(q)),
            el('strong', {}, level.people[q].name), badges(q),
            q === victim ? el('span.tag', {}, '💀') : null),
          el('ul.clues', {}, q === victim ? victimRule() : null,
            level.clues.filter(cl => cl.p === q).map(cl => el('li', {}, clueNodes(cl, plain))))))));
    };
    const scrollToPerson = () => {
      // Keep the person of this step in view (desktop: the list scrolls on its own).
      if (window.matchMedia('(min-width: 820px)').matches) body.querySelector('.hint-people li.about')?.scrollIntoView({ block: 'nearest' });
    };

    // Default view: the next steps for the player's board, one page each.
    let options = null, j = 0, applied = false;
    const showNext = () => {
      // Never empty: mistakes, "all placed", or a step (the full search always finds one).
      if (!options) options = nextSteps();
      const step = options[j];
      const label = stepLabel(step);
      // Next (→ and the Next button): after Apply, the next step from the updated board;
      // before it, the next option for this board.
      const noNext = !applied && j >= options.length - 1;
      const goNext = () => {
        if (applied) { options = null; j = 0; applied = false; } else j++;
        showNext();
      };
      body.replaceChildren(el('div.hint-main', {},
        el('div.hint-nav', {},
          el('button.btn', { type: 'button', disabled: applied || j === 0, onclick: () => { j--; showNext(); } }, '←'),
          el('span.hint-count', {}, options.length > 1 ? `${label} ${j + 1} of ${options.length}` : label),
          // After Apply, → works out the next step from the updated board.
          el('button.btn', { type: 'button', disabled: noNext,
            title: applied ? 'Next step from your updated board' : null, onclick: goNext }, '→')),
        hintBoard(step),
        el(`p.hint-text${step.done ? '.done' : ''}${step.mistake ? '.mistake' : ''}`, {}, richText(step.text)),
        step.mistake || step.done ? null : applyButtons(step, noNext, goNext)),
      peopleColumn(step, storyButton()));
      scrollToPerson();
    };
    // Apply (write the step onto the board) and Next.
    const applyButtons = (step, noNext, goNext) => el('div.hint-apply', {},
      el('button.btn.primary', { type: 'button', disabled: applied, title: 'Write this step onto your board (Undo takes it back)',
        onclick: () => { applyStep(step); applied = true; showNext(); } }, applied ? '✓ Applied' : '✓ Apply'),
      el('button.btn', { type: 'button', disabled: noNext,
        title: applied ? 'Next step from your updated board' : 'Show another step for this board', onclick: goNext }, 'Next →'));
    const solutionButton = () => el('button.btn', { type: 'button', onclick: showSolution }, '🔑 Show final solution');
    const storyButton = () => [
      el('button.btn', { type: 'button', onclick: showStory }, '📖 Show full deduction story'),
      solutionButton()];

    // The full story from an empty board.
    let k = 0;
    function showStory() {
      if (!hintSteps) {
        body.replaceChildren(el('p.hint', {}, 'Working out the solution…'));
        return setTimeout(() => { hintSteps = markDotted(deduce(level, blocking, hintText)); showStory(); }, 30);
      }
      const step = hintSteps[k];
      body.replaceChildren(el('div.hint-main', {},
        el('button.btn.small.story-back', { type: 'button', onclick: showNext }, '← Back to my next step'),
        el('div.hint-nav', {},
          el('button.btn', { type: 'button', disabled: k === 0, onclick: () => { k--; showStory(); } }, '← Back'),
          el('span.hint-count', {}, `Step ${k + 1} of ${hintSteps.length}`),
          el('button.btn.primary', { type: 'button', disabled: k === hintSteps.length - 1, onclick: () => { k++; showStory(); } }, 'Next →')),
        hintBoard(step),
        el(`p.hint-text${step.done ? '.done' : ''}`, {}, richText(step.text))),
      peopleColumn(step, solutionButton()));
      scrollToPerson();
    }

    showNext();
    await dialog;
  }


  // Text with ⟦p⟧ marks: each mark becomes the person's colored dot (title: full name).
  function richText(text) {
    return text.split(/(⟦\d+⟧)/).map(part => {
      const m = part.match(/^⟦(\d+)⟧$/);
      if (!m) return part;
      const p = Number(m[1]);
      return el(`span.token.inline${p === victim ? '.victim' : ''}`, { style: { '--pc': color(p) }, title: level.people[p].name }, letter(p));
    });
  }

  // ---- share ----

  function shareUrl(withBoard) {
    const path = custom ? `#/x/${custom.data}` : `#/c/${theme.id}/${index}`;
    const base = `${location.href.split('#')[0]}${path}`;
    return withBoard ? `${base}?b=${encodeData(current())}` : base;
  }

  function openShare() {
    const status = el('p.status', { role: 'status' });
    void showDialog({
      title: 'Share this case',
      body: [
        el('p', {}, 'Anyone who opens a link plays this case.'),
        copyField('Empty board', shareUrl(false), status),
        copyField('Your board (people, crosses and notes)', shareUrl(true), status),
        status,
      ],
      buttons: [{ label: 'Close', value: true, primary: true }],
    });
  }

  // ---- fullscreen ----

  function fullscreenButton() {
    const root = document.documentElement;
    if (!root.requestFullscreen || !document.fullscreenEnabled) return null;
    const on = !!document.fullscreenElement;
    const title = on ? 'Leave fullscreen' : 'Fullscreen';
    return el('button.btn.icon.fs', {
      type: 'button', title, 'aria-label': title,
      onclick: () => (document.fullscreenElement ? document.exitFullscreen() : root.requestFullscreen()).catch(() => {}),
    }, icon(on ? 'shrink' : 'expand'));
  }
  const onFullscreen = () => {
    if (!app.querySelector('.board-frame')) return document.removeEventListener('fullscreenchange', onFullscreen);
    draw();
  };
  document.addEventListener('fullscreenchange', onFullscreen);

  // ---- zoom ----

  const frameOf = key => app.querySelector(`.board-frame[data-zoom="${key}"]`);

  // Largest zoom at which this board still fits its space.
  function maxZoom(key) {
    const frame = frameOf(key);
    const game = app.querySelector('.game');
    const base = frame.getBoundingClientRect().width / zooms[key];
    const wide = window.matchMedia('(min-width: 900px)').matches;
    const room = game.clientWidth - (wide ? 324 : 0);
    return ZOOMS.findLast(z => z * base <= room + 1) || ZOOMS[0];
  }

  function setZoom(key, z, save = true) {
    zooms[key] = z;
    frameOf(key).style.zoom = String(z);
    if (save) setSetting(key, z);
    const box = app.querySelector(`.zoom-box[data-zoom="${key}"]`);
    box.querySelector('.zoom-out').disabled = z <= ZOOMS[0];
    box.querySelector('.zoom-in').disabled = z >= maxZoom(key);
  }

  // The buttons are off at the smallest and the largest zoom that fits.
  function stepZoom(key, d) {
    setZoom(key, ZOOMS[ZOOMS.indexOf(zooms[key]) + d]);
  }

  // Zoom buttons right below the bottom left corner of one board.
  function drawZoom(key) {
    const lens = '<circle cx="10" cy="10" r="6.5"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="7" y1="10" x2="13" y2="10"/>';
    const btn = (cls, title, plus, d) => {
      const b = el(`button.${cls}`, { type: 'button', title, 'aria-label': title, onclick: () => stepZoom(key, d) });
      b.innerHTML = `<svg class="zicon" viewBox="0 0 24 24" aria-hidden="true">${lens}${plus ? '<line x1="10" y1="7" x2="10" y2="13"/>' : ''}</svg>`;
      return b;
    };
    return el('div.zoom-box', { 'data-zoom': key }, btn('zoom-out', 'Smaller board', false, -1), btn('zoom-in', 'Bigger board', true, 1));
  }

  // Shrink when the kept zoom does not fit (smaller window).
  const onResize = () => {
    if (!app.querySelector('.board-frame')) return window.removeEventListener('resize', onResize);
    for (const key of Object.keys(zooms)) if (frameOf(key)) setZoom(key, Math.min(zooms[key], maxZoom(key)), false);
  };
  window.addEventListener('resize', onResize);

  // ---- drawing ----

  function isHighlighted(i, h = state.highlight) {
    if (!h) return false;
    if (h.kind === 'room') return level.rooms[i] === h.v;
    if (h.kind === 'obj') return level.objects[i] === h.v;
    if (h.kind === 'tag') return tagFits(tags[i], h.v);
    if (h.kind === 'court') return court.has(level.rooms[i]);
    if (h.kind === 'lawful') return lawful.has(level.rooms[i]);
    if (h.kind === 'parity') return parityOf.has(level.rooms[i]);
    if (h.kind === 'door') return featureCells(level).door.has(i);
    if (h.kind === 'window') return featureCells(level).window.has(i);
    if (h.kind === 'fact') return !!factMarks[h.v]?.[i];
    return false;
  }

  function conflicts() {
    const bad = new Set();
    for (let p = 0; p < P; p++) for (let q = p + 1; q < P; q++) {
      const a = state.pos[p], b = state.pos[q];
      if (a < 0 || b < 0) continue;
      if (Math.floor(a / n) === Math.floor(b / n) || a % n === b % n) { bad.add(p); bad.add(q); }
    }
    return bad;
  }

  const FLOORS = theme.floors; // every theme has its floor patterns
  const floorOf = k => FLOORS[k % FLOORS.length];

  // Small tokens for up to 4 noted people, else a color wheel.
  // People who can not be there show greyed out with a red cross.
  function noteNodes(noteKey) {
    const byLetter = (a, b) => letter(a).localeCompare(letter(b));
    // Notes stay saved; this only hides the dots of people already placed.
    const shown = p => !assists.hidePlaced || state.pos[p] < 0;
    const yes = [...(state.notes.get(noteKey) || [])].filter(shown).sort(byLetter);
    // "Can't be here" dots only when that option is on (the notes stay saved either way).
    const no = assists.showNots ? [...(state.nots.get(noteKey) || [])].filter(shown).sort(byLetter) : [];
    const total = yes.length + no.length;
    if (!total) return null;
    const mini = (p, not) => el(`span.mini${not ? '.not' : ''}`, { style: { '--pc': color(p) } }, letter(p));
    if (total <= 4) {
      return el(`span.notes.n${total}`, { 'aria-hidden': 'true' },
        yes.map(p => mini(p, false)), no.map(p => mini(p, true)));
    }
    const badge = no.length ? el('span.not-badge', {}, `✕${no.length}`) : null;
    if (!yes.length) return el('span.notes.wheel.none', { 'aria-hidden': 'true' }, el('span', {}, `✕${no.length}`));
    const step = 360 / yes.length;
    const faded = p => `color-mix(in srgb, ${color(p)} 45%, #b9b9b9)`;
    const stops = yes.map((p, k) => `${faded(p)} ${k * step}deg ${(k + 1) * step}deg`).join(', ');
    return el('span.notes.wheel', { 'aria-hidden': 'true', style: { '--wheel': `conic-gradient(${stops})` } },
      el('span', {}, String(yes.length)), badge);
  }

  const noteLabel = noteKey => {
    const yes = state.notes.get(noteKey), no = state.nots.get(noteKey);
    return (yes?.size ? `, could be: ${[...yes].map(letter).sort(compareText).join(' ')}` : '') +
      (no?.size ? `, not: ${[...no].map(letter).sort(compareText).join(' ')}` : '');
  };

  // The selected person's cell and every note that names them pulse.
  function pulses(noteKey, cell = -1) {
    const p = state.selected;
    if (p === null) return false;
    if (cell >= 0 && state.pos[p] === cell) return true; // their own cell always pulses
    if (!state.notes.get(noteKey)?.has(p)) return false;
    return assists.pulseHidden || noteVisible(noteKey, p); // hidden dots blink only if the option is on
  }

  // True if p's note dot is drawn right now: not under a cross, a person or an auto ✕,
  // and not hidden because p is placed elsewhere.
  function noteVisible(noteKey, p) {
    if (assists.hidePlaced && state.pos[p] >= 0) return false;
    const placed = state.pos.filter(i => i >= 0);
    if (noteKey[0] === 'r') return !placed.some(i => Math.floor(i / n) === Number(noteKey.slice(1)));
    if (noteKey[0] === 'c') return !placed.some(i => i % n === Number(noteKey.slice(1)));
    const i = Number(noteKey);
    if (state.marks.has(i) || placed.includes(i)) return false;
    return !placed.some(j => Math.floor(j / n) === Math.floor(i / n) || j % n === i % n);
  }

  // What a row or column box says after its name: the people in it, or its notes.
  function laneLabel(noteKey, inLine) {
    if (inLine.length > 1) return `, more than one person: ${inLine.map(p => level.people[p].name).join(', ')}`;
    if (inLine.length === 1) return `, ${level.people[inLine[0]].name}`;
    return noteLabel(noteKey);
  }

  // What a row or column box shows: a clash, the person in it, its notes, or a pen.
  function laneContent(noteKey, inLine) {
    if (inLine.length > 1) return el('span.clash-mark', { 'aria-hidden': 'true' }, '!');
    if (inLine.length === 1) return tokenEl(inLine[0], '', { 'aria-hidden': 'true' });
    return noteNodes(noteKey) || el('span.pen', { 'aria-hidden': 'true' }, '✎');
  }

  // Box x of the row (kind 'rows') or column ('cols') notes.
  function laneCell(kind, x) {
    const noteKey = `${kind === 'rows' ? 'r' : 'c'}${x}`;
    const name = kind === 'rows' ? `Row ${x + 1}` : `Column ${colName(x)}`;
    const lineOf = i => (kind === 'rows' ? Math.floor(i / n) : i % n);
    // The person placed in this row or column covers the notes.
    const inLine = state.pos.map((i, p) => p).filter(p => state.pos[p] >= 0 && lineOf(state.pos[p]) === x);
    const clash = inLine.length > 1;
    const pulse = pulses(noteKey) || (state.selected !== null && inLine.includes(state.selected));
    return el(`button.note-cell${state.texts.get(noteKey) ? '.has-text' : ''}${pulse ? '.pulse' : ''}${inLine.length ? '.filled' : ''}${clash ? '.clash' : ''}`, {
      type: 'button', 'data-key': noteKey, title: clash ? `${name}: more than one person` : `Notes for ${name.toLowerCase()}`,
      'aria-label': `Notes for ${name.toLowerCase()}${laneLabel(noteKey, inLine)}`,
      onclick: () => (state.selected !== null ? noteClick(state.selected, noteKey) : openNotes(noteKey, name)),
    }, laneContent(noteKey, inLine));
  }

  function noteLane(kind) {
    return el(`div.note-lane.${kind}`, {}, [...new Array(n).keys()].map(x => laneCell(kind, x)));
  }

  // Static look of each cell: walls, floor, room label, object, mark.
  const firstCell = new Map();
  level.rooms.forEach((k, i) => { if (!firstCell.has(k)) firstCell.set(k, i); });
  // Floor pattern class of room k.
  const floorClass = k => (k === level.sea ? 'floor-sea' : `floor-${floorOf(k)}`);
  // Classes of cell i: walls to other rooms, blocked, sea.
  function cellClasses(i) {
    const r = Math.floor(i / n), c = i % n, k = level.rooms[i];
    const edge = (rr, cc) => rr < 0 || cc < 0 || rr >= n || cc >= n || level.rooms[rr * n + cc] !== k;
    const cls = ['cell'];
    for (const [w, rr, cc] of [['wt', r - 1, c], ['wr', r, c + 1], ['wb', r + 1, c], ['wl', r, c - 1]]) if (edge(rr, cc)) cls.push(w);
    if (level.objects[i] && blocking.has(level.objects[i])) cls.push('blocked');
    if (k === level.sea) cls.push('sea');
    return cls;
  }
  // The room name sits in the top half of the room's first cells: their count from i (0 elsewhere).
  function labelWidth(i) {
    const k = level.rooms[i];
    if (firstCell.get(k) !== i) return 0;
    let w = 1;
    while (i % n + w < n && level.rooms[i + w] === k) w++;
    return w;
  }
  const labeled = new Set();
  const baseCells = [...new Array(n * n).keys()].map(i => {
    const r = Math.floor(i / n), c = i % n, k = level.rooms[i];
    const obj = level.objects[i];
    const tag = tagInfo(tags[i]);
    const w = labelWidth(i);
    for (let x = 0; x < w; x++) labeled.add(i + x);
    const name = `${level.roomNames[k]}, ${colName(c)}${r + 1}` +
      (obj ? `, ${theme.objects[obj].name}` : '') + (tag ? `, ${tag.name}` : '');
    return { cls: cellClasses(i), name, w, obj, tag, k, floor: floorClass(k) };
  });
  for (const i of labeled) baseCells[i].cls.push('labeled');

  // Sofas and beds over two cells: first cell -> 'h' | 'v'; second cell -> 'skip'.
  const pairOf = sofaPairs(theme, level, blocking);

  function baseParts(i) {
    const b = baseCells[i];
    return [
      // The floor pattern sits in its own blurred layer under everything else.
      el(`span.floor.${b.floor}`, { 'aria-hidden': 'true' }),
      b.w ? el('span.room-label', { 'aria-hidden': 'true', style: { '--w': b.w } },
        el('span', {}, roomTitle(b.k))) : null,
      b.obj && pairOf.get(i) !== 'skip' ? objectIcon(b.obj, pairOf.get(i)) : null,
      b.tag ? el(`span.obj.${tagClass(tags[i])}`, { 'aria-hidden': 'true' }, b.tag.icon) : null,
    ];
  }

  // pair: 'h' or 'v' for a sofa or bed across two cells (drawn from the first cell).
  function objectIcon(id, pair) {
    const o = theme.objects[id];
    const pairCls = pair ? `.pair-${pair}` : '';
    return el(`span.obj.${blocking.has(id) ? 'furn' : 'spot'}${pairCls}`, { 'aria-hidden': 'true' }, o.icon);
  }

  // Long press on cell i: open the dialog to place someone there (not on the notes board).
  function cellPress(e, i) {
    if (state.solved || e.button > 0 || e.target.closest('.token')) return;
    if (blocking.has(level.objects[i])) return;
    const sx = e.clientX, sy = e.clientY;
    pressed = false;
    // A ring fills up while the press lasts, so it is clear something will happen.
    const cellEl = e.currentTarget;
    const ring = el('span.press-ring', { 'aria-hidden': 'true', style: { '--press': `${PRESS_FILL}ms`, '--wait': `${PRESS_WAIT}ms` } });
    cellEl.append(ring);
    const t = setTimeout(() => {
      ring.remove();
      pressed = true; justDragged = true; navigator.vibrate?.(20);
      void openPlacePicker(i);
      setTimeout(() => { justDragged = false; pressed = false; }, 400);
    }, CELL_PRESS);
    const stop = ev => {
      if (ev.type === 'pointermove' && Math.hypot(ev.clientX - sx, ev.clientY - sy) < 8) return;
      clearTimeout(t);
      ring.remove();
      window.removeEventListener('pointermove', stop);
      window.removeEventListener('pointerup', stop);
      window.removeEventListener('pointercancel', stop);
    };
    window.addEventListener('pointermove', stop);
    window.addEventListener('pointerup', stop);
    window.addEventListener('pointercancel', stop);
  }

  // The ✕ on a cell: auto (taken line or blocked cell), the player's own, or none.
  function crossMark(i, who, autoX) {
    // Blocked cells (furniture nobody can stand on) get a ✕ too.
    if (autoX || blocking.has(baseCells[i].obj)) return el('span.mark.auto', { 'aria-hidden': 'true' }, '✕');
    return who < 0 && state.marks.has(i) ? el('span.mark', { 'aria-hidden': 'true' }, '✕') : null;
  }

  // A cell of the floor plan in split view: just the room, its objects and the placed person.
  function viewCell(i, who, label) {
    const b = baseCells[i];
    return el(`div.${b.cls.concat(who >= 0 ? ['busy'] : [], isHighlighted(i) ? ['hl'] : []).join('.')}`,
      { 'aria-label': label, title: label, style: { '--rh': roomHue(theme, b.k) } },
      baseParts(i),
      who >= 0 ? tokenEl(who, '', { 'aria-hidden': 'true' }) : null);
  }

  // The token of a placed person on the main board: it can be dragged.
  function boardToken(who, bad) {
    const extra = `.draggable${bad.has(who) ? '.bad' : ''}${state.selected === who ? '.sel' : ''}`;
    return tokenEl(who, extra, { 'aria-hidden': 'true', onpointerdown: e => startDrag(e, who, { fromBoard: true }) });
  }

  // A cell of the main board. lines: { usedRows, usedCols } with someone in them.
  function mainCell(i, who, label, { usedRows, usedCols, bad, plain }) {
    const r = Math.floor(i / n), c = i % n, b = baseCells[i];
    const lineTaken = usedRows.has(r) || usedCols.has(c);
    // Row or column already has someone: auto ✕ (not saved, goes away with them).
    const autoX = who < 0 && !blocking.has(b.obj) && lineTaken;
    // A crossed cell hides its notes. They stay saved and come back when the cross goes.
    const notes = who < 0 && !autoX && !state.marks.has(i) ? noteNodes(String(i)) : null;
    const cls = b.cls.slice();
    // Only a placed person makes the object small; notes sit on top of a full-size object.
    if (who >= 0) cls.push('busy');
    if (state.texts.get(String(i))) cls.push('has-text');
    if (isHighlighted(i)) cls.push('hl');
    if (pulses(String(i), i)) cls.push('pulse');
    if (assists.shade && who < 0 && lineTaken) cls.push('shaded');
    return el(`button.${cls.join('.')}`, {
      type: 'button', 'aria-label': label, title: label, 'data-i': i,
      style: { '--rh': roomHue(theme, b.k) },
      onclick: () => tapCell(i),
      oncontextmenu: e => { e.preventDefault(); if (!pressed) void tapCell(i, true); },
      onpointerdown: e => cellPress(e, i),
    },
    plain ? null : baseParts(i),
    notes,
    who >= 0 ? boardToken(who, bad) : null,
    crossMark(i, who, autoX));
  }

  // kind: 'main' (the board for everything) or 'view' (split view: the floor plan
  // on top, which only shows the placed people and can not be clicked).
  function drawBoard(kind = 'main') {
    const view = kind === 'view';
    // Split view: the placing board is plain (white cells, no objects); the floor plan has the details.
    const plain = !view && assists.split;
    const lines = {
      bad: conflicts(), plain,
      usedRows: new Set(state.pos.filter(i => i >= 0).map(i => Math.floor(i / n))),
      usedCols: new Set(state.pos.filter(i => i >= 0).map(i => i % n)),
    };
    const board = el('div.board', { style: { '--n': n }, role: 'grid', 'aria-label': 'Floor plan' }, riverSvg(), featureSvg());
    for (let i = 0; i < n * n; i++) {
      const who = personAt(i);
      const label = baseCells[i].name + (who >= 0 ? `, ${level.people[who].name}` : noteLabel(String(i)));
      board.append(view ? viewCell(i, who, label) : mainCell(i, who, label, lines));
    }
    const colLabels = el('div.labels.cols', { style: { '--n': n } },
      [...new Array(n).keys()].map(c => el('span', {}, colName(c))));
    const rowLabels = el('div.labels.rows', { style: { '--n': n } },
      [...new Array(n).keys()].map(r => el('span', {}, String(r + 1))));
    if (view) {
      // Same size and place as the working board, but without the note boxes.
      return el('div.board-frame.view-only', { 'data-zoom': 'zoom' }, el('span'), colLabels, el('span'), rowLabels, board, el('span'),
        el('span'), el('span'), el('span'));
    }
    return el(`div.board-frame${plain ? '.plain' : ''}`, { 'data-zoom': assists.split ? 'zoomPlacing' : 'zoom' }, el('span'), colLabels, el('span'), rowLabels, board, noteLane('rows'),
      el('span'), noteLane('cols'), el('span'));
  }

  // Board for one person: tap cells to mark where they can or can not be.
  async function openPersonBoard(p) {
    if (state.solved) return;
    const prev = current();
    let hl = null; // highlight from a clue link, only on this board
    const wrap = el('div.person-board-wrap');
    const localLink = (kind, v, text) => {
      const on = hl && hl.kind === kind && hl.v === v;
      return el(`button.ref${on ? '.on' : ''}`, {
        type: 'button',
        onclick: () => { hl = on ? null : { kind, v }; render(); },
      }, text);
    };
    const rankRule = { noble: 'Must be in a court room.', commoner: 'Is never in a court room.', knight: 'Can be in any room.' };
    const setMark = (i, kind) => {
      const k = String(i);
      for (const [map, on] of [[state.notes, kind === 'yes'], [state.nots, kind === 'no']]) {
        const set = new Set(map.get(k) || []);
        if (on) set.add(p); else set.delete(p);
        if (set.size) map.set(k, set); else map.delete(k);
      }
    };
    // Without "Also show who can't be here", only ✓ and empty exist here.
    const withNo = assists.showNots;
    const markOf = i => {
      if (state.notes.get(String(i))?.has(p)) return 'yes';
      return withNo && state.nots.get(String(i))?.has(p) ? 'no' : null;
    };
    const MARK_LABEL = { yes: ', can be here', no: ', cannot be here' };
    // One cell: tap to move on. empty → ✓ → ✕ → empty. Without "can't be here": empty ↔ ✓.
    // The token on a cell: the person, dimmed when it is someone else.
    const cellToken = who => {
      if (who < 0) return null;
      return tokenEl(who, who === p ? '' : '.dim');
    };
    const personCell = i => {
      const b = baseCells[i];
      const who = personAt(i);
      const mark = markOf(i);
      const cls = b.cls.slice();
      if (who >= 0) cls.push('busy'); // objects stay full size under ✓ and ✕
      if (isHighlighted(i, hl)) cls.push('hl');
      return el(`button.${cls.join('.')}`, {
        type: 'button', disabled: blocking.has(b.obj),
        'aria-label': `${b.name}${MARK_LABEL[mark] || ''}`,
        style: { '--rh': roomHue(theme, b.k) },
        onclick: () => {
          const order = withNo ? [null, 'yes', 'no'] : [null, 'yes'];
          setMark(i, order[(order.indexOf(markOf(i)) + 1) % order.length]);
          render();
          draw();
        },
      },
      baseParts(i),
      cellToken(who),
      who < 0 && state.marks.has(i) && !mark ? el('span.mark', {}, '✕') : null,
      mark === 'yes' ? el('span.pmark.yes', { 'aria-hidden': 'true' }, '✓') : null,
      mark === 'no' ? el('span.pmark.no', { 'aria-hidden': 'true' }) : null);
    };
    // The person's clues and rules.
    const personRules = () => {
      const rank = level.rank?.[p];
      const trade = level.trade?.[p];
      const workSpots = tags.some(t => t?.startsWith('t:'));
      const clues = level.clues.filter(cl => cl.p === p);
      return el('div.person-rules', {},
        el('div.person-rules-head', {},
          tokenEl(p),
          el('strong', {}, level.people[p].name), badges(p),
          p === victim ? el('span.tag', {}, '💀 victim') : null),
        el('ul.clues', {},
          p === victim ? victimRule() : null,
          clues.map(cl => el('li', {}, clueNodes(cl, localLink))),
          rank ? el('li', {}, `${RANKS[rank].icon} ${RANKS[rank].name}: ${rankRule[rank]}`) : null,
          trade && workSpots ? el('li', {}, `${tradeById(trade).icon} May use ${tradeById(trade).name.toLowerCase()} work spots only.`) : null,
          !trade && level.rules.includes('trades') && workSpots ? el('li', {}, 'Has no trade: may not stand on work spots.') : null));
    };
    const render = () => {
      const board = el('div.board', { style: { '--n': n } }, riverSvg(), featureSvg());
      for (let i = 0; i < n * n; i++) board.append(personCell(i));
      wrap.replaceChildren(
        personRules(),
        // A legend, not a tool choice.
        el('div.person-legend', {},
          el('span', {}, el('span.legend-yes', {}, '✓'), ' Can be here'),
          withNo ? el('span', {}, el('span.legend-no', {}, '✕'), ' Cannot be here') : null),
        el('div.hint-board.person-board', { style: { '--n': n, '--pc': color(p) } }, withLabels(board)));
    };
    render();
    await showDialog({
      title: `Where can ${level.people[p].name} be?`,
      body: [el('p.hint', {}, withNo ? 'Tap a cell: ✓. Tap again: ✕. A third time: clear.'
        : 'Tap a cell: ✓. Tap again: clear.'), wrap],
      wide: true,
      buttons: [{ label: 'Done', value: true, primary: true }],
    });
    const now = current();
    if (JSON.stringify([now.notes, now.nots]) !== JSON.stringify([prev.notes, prev.nots])) snapshot(prev);
    persist();
    draw();
  }

  // Faded dots for the people who can still be on a cell (hint board). In practice a
  // cell has at most 4 of them (no case has more); more would share the 4-dot layout.
  function candNodes(ps) {
    ps = ps.slice().sort((a, b) => letter(a).localeCompare(letter(b)));
    return el(`span.notes.cand.n${Math.min(ps.length, 4)}`, { 'aria-hidden': 'true' },
      ps.map(p => el('span.mini', { style: { '--pc': color(p) } }, letter(p))));
  }

  // What earlier story steps found: per cell, the people who can still be there.
  // Only people whose cells were narrowed down already show up. Not on the player's own board.
  function knownDots(step) {
    const { pos, cand } = step.before;
    const known = new Map();
    if (step.own) return known; // the player's own board: no dots
    const freeCells = level.objects.filter(o => !blocking.has(o)).length;
    cand.forEach((c, p) => {
      if (pos[p] >= 0 || c.length >= freeCells) return;
      if (!step.dotted?.has(p)) return; // dots only for people an earlier step marked
      for (const i of c) {
        if (!known.has(i)) known.set(i, []);
        known.get(i).push(p);
      }
    });
    return known;
  }

  // Marks for the people a step takes from cells (elim): a ✕ when nobody is left,
  // else their struck dots. Not on cells shown as ✕ or as the person's dot already.
  function elimMarks(step, xed, mark) {
    const { pos, cand } = step.before;
    const byCell = new Map();
    for (const [p, i] of step.elim) {
      if (xed.has(i) || step.cross?.includes(i) || step.allowed?.cells.includes(i)) continue;
      if (!byCell.has(i)) byCell.set(i, []);
      byCell.get(i).push(p);
    }
    for (const [i, ps] of byCell) {
      const rest = cand.some((c, q) => pos[q] < 0 && !ps.includes(q) && c.includes(i));
      if (!rest) mark(i, el('span.mark.act-x', {}, '✕'));
      else mark(i, el(`span.notes.n${Math.min(ps.length, 4)}.struck`, {},
        ps.slice(0, 4).map(p => el('span.mini', { style: { '--pc': color(p) } }, letter(p)))));
    }
  }

  // A placement: the person's ghost token, and a ✕ on the open cells of their row and column.
  // Returns the crossed cells.
  function placeMarks({ p, i: at }, open, mark) {
    const xed = new Set();
    mark(at, el('span.token.ghost', { style: { '--pc': color(p) } }, letter(p)));
    for (const i of open) {
      if (i !== at && (i % n === at % n || Math.floor(i / n) === Math.floor(at / n))) { xed.add(i); mark(i, el('span.mark.act-x', {}, '✕')); }
    }
    return xed;
  }

  // Per cell the mark of what a step does (one per cell). open: cells someone can still use.
  function actionMarks(step, open) {
    const act = new Map();
    const mark = (i, node) => act.set(i, node);
    const xed = step.place ? placeMarks(step.place, open, mark) : new Set(); // cells crossed out by the placement
    if (step.cross) for (const i of step.cross) if (!xed.has(i)) mark(i, el('span.mark.act-x', {}, '✕'));
    if (step.focus) for (const i of step.focus) mark(i, el('span.mark.focus-mark', {}, '!'));
    if (step.allowed) for (const i of step.allowed.cells) mark(i, el('span.notes.n1', {}, el('span.mini', { style: { '--pc': color(step.allowed.p) } }, letter(step.allowed.p))));
    if (step.elim) elimMarks(step, xed, mark);
    return act;
  }

  // One cell of a hint board. who: the person on it (or -1). nodes: the action mark.
  function hintCell(i, who, { step, open, known, nodes }) {
    const b = baseCells[i];
    const cls = b.cls.slice();
    if (who >= 0 || step.place?.i === i) cls.push('busy'); // a person (or the one placed now) sits on the object; marks do not
    if (nodes) cls.push('act');
    const crossed = who < 0 && !open.has(i); // like the main board: blocked cells too
    const autoCls = blocking.has(b.obj) ? '.auto' : '';
    return el(`div.${cls.join('.')}`, { style: { '--rh': roomHue(theme, b.k) } },
      baseParts(i),
      who >= 0 ? tokenEl(who) : null,
      crossed && !nodes ? el(`span.mark${autoCls}`, {}, '✕') : null,
      who < 0 && !nodes && known.has(i) ? candNodes(known.get(i)) : null,
      nodes || null);
  }

  // A small read-only board for one hint step.
  function hintBoard(step) {
    const { pos, cand } = step.before;
    const placedAt = new Map(pos.map((i, p) => [i, p]).filter(([i]) => i >= 0));
    const open = new Set();
    cand.forEach((c, p) => { if (pos[p] < 0) c.forEach(i => open.add(i)); });
    const known = knownDots(step);
    const act = actionMarks(step, open);
    const board = el('div.board', { style: { '--n': n } }, riverSvg(), featureSvg());
    for (let i = 0; i < n * n; i++) {
      board.append(hintCell(i, placedAt.has(i) ? placedAt.get(i) : -1, { step, open, known, nodes: act.get(i) }));
    }
    return el('div.hint-board', { style: { '--n': n } }, withLabels(board, hintLanes(step)));
  }

  // The row and column boxes on a hint board: a person known to be in one row
  // (or column) gets a dot there. A dot this step adds gets a frame.
  function hintLanes(step) {
    const { pos, cand } = step.before;
    // The board after the step.
    const after = cand.map(c => new Set(c));
    const apos = pos.slice();
    if (step.place) {
      const { p, i } = step.place;
      apos[p] = i;
      after[p] = new Set([i]);
    }
    for (const [p, i] of step.elim || []) after[p].delete(i);
    if (step.allowed) after[step.allowed.p] = new Set(step.allowed.cells);
    const lineOf = (set, f) => { const xs = new Set([...set].map(i => f(i))); return xs.size === 1 ? [...xs][0] : -1; };
    const lane = (kind, f) => el(`div.note-lane.${kind}`, {}, [...new Array(n).keys()].map(x => {
      const placed = apos.findIndex(i => i >= 0 && f(i) === x);
      if (placed >= 0) {
        const fresh = pos[placed] < 0;
        return el(`span.note-cell.filled${fresh ? '.act' : ''}`, {},
          el(`span.token${placed === victim ? '.victim' : ''}`, { style: { '--pc': color(placed) } }, letter(placed)));
      }
      const who = [], fresh = [];
      after.forEach((c, p) => {
        if (apos[p] >= 0 || !c.size || lineOf(c, f) !== x) return;
        who.push(p);
        if (pos[p] >= 0 || lineOf(new Set(cand[p]), f) !== x) fresh.push(p);
      });
      return el(`span.note-cell${fresh.length ? '.act' : ''}`, {}, who.length ? candNodes(who) : null);
    }));
    return [lane('rows', i => Math.floor(i / n)), lane('cols', i => i % n)];
  }

  // Another person in a rule: their name, then their colored dot.
  function personRef(p) {
    return el('span.person-ref', {},
      el('strong', { style: { color: color(p) } }, level.people[p].name),
      el('span.token.inline', { style: { '--pc': color(p) }, 'aria-hidden': 'true' }, letter(p)));
  }

  // An object in a rule: its icon right after its name.
  const objIcon = icon => el('span.obj-inline', { 'aria-hidden': 'true' }, icon);

  const linkMain = (kind, v, text) => link(kind, v, text);

  // A clickable name in a rule (text may be several nodes, e.g. name and icon).
  // A person link selects that person; other links light up cells.
  function link(kind, v, text) {
    if (kind === 'person') {
      const on = state.selected === v;
      return el(`button.ref.person-link${on ? '.on' : ''}`, {
        type: 'button', onclick: e => { e.stopPropagation(); state.selected = on ? null : v; draw(); },
      }, text);
    }
    const on = state.highlight && state.highlight.kind === kind && state.highlight.v === v;
    return el(`button.ref${on ? '.on' : ''}`, { type: 'button', onclick: () => setHighlight({ kind, v }) }, text);
  }

  function clueNodes(cl, link = linkMain) {
    const o = theme.objects[cl.v];
    switch (cl.t) {
      case 'room': return ['Was in the ', link('room', cl.v, level.roomNames[cl.v]), '.'];
      case 'notRoom': return ['Was ', el('em', {}, 'not'), ' in the ', link('room', cl.v, level.roomNames[cl.v]), '.'];
      case 'on': return [link('obj', cl.v, [o.on.replace(/^was /, 'Was '), objIcon(o.icon)]), '.'];
      case 'next': return [`Was right next to ${article(o.name).split(' ')[0]} `, link('obj', cl.v, [o.name, objIcon(o.icon)]), '.'];
      case 'row': return [`Was in row ${cl.v + 1}.`];
      case 'col': return [`Was in column ${colName(cl.v)}.`];
      case 'same': return ['Was in the same room as ', link('person', cl.v, personRef(cl.v)), '.'];
      case 'alone': return ['Was alone in a room.'];
      case 'door': return ['Was in front of a ', link('door', 0, ['door', objIcon('🚪')]), '.'];
      case 'window': return ['Was in front of a ', link('window', 0, ['window', objIcon('🪟')]), '.'];
      case 'bandit': return ['Was a ', el('strong', {}, 'bandit'), '.'];
      case 'notBandit': return ['Was ', el('em', {}, 'not'), ' a bandit.'];
      case 'withBandit': return ['Was in the same room as a ', el('strong', {}, 'bandit'), '.'];
      case 'task': return ['Was ', link('tag', `k:${cl.v}`, [article(tradeById(cl.v).name.toLowerCase()), objIcon(tradeById(cl.v).icon)]), '.'];
      case 'taskEither': return ['Was ', link('tag', `k:${cl.v[0]}`, [article(tradeById(cl.v[0]).name.toLowerCase()), objIcon(tradeById(cl.v[0]).icon)]),
        ' or ', link('tag', `k:${cl.v[1]}`, [article(tradeById(cl.v[1]).name.toLowerCase()), objIcon(tradeById(cl.v[1]).icon)]), '.'];
      case 'noTask': return ['Had ', el('em', {}, 'no'), ' task.'];
    }
  }

  // The rule that holds for every victim.
  const victimRule = () => el('li.victim-rule', {}, 'The victim: was alone with the murderer in one and the same room.');

  function badges(p) {
    const out = [];
    const rank = level.rank?.[p];
    if (rank) out.push(el(`span.badge.rank-${rank}`, { title: RANKS[rank].name }, `${RANKS[rank].icon} ${RANKS[rank].name}`));
    const trade = level.trade?.[p];
    if (trade) { const t = tradeById(trade); out.push(el('span.badge', { title: t.name }, `${t.icon} ${t.name}`)); }
    const pair = (level.couples || []).find(c => c.includes(p));
    if (pair) {
      const q = pair[0] === p ? pair[1] : pair[0];
      out.push(el('span.badge.couple', { title: `Couple with ${level.people[q].name}` }, `💞 ${level.people[q].name.split(' ')[0]}`));
    }
    return out.length ? el('span.badges', {}, out) : null;
  }

  // Cells each cell fact counts, for the "Show" links.
  const factMarks = level.facts.map(f => (CELL_FACTS.includes(f.t) ? factCells(level, f) : null));

  // The case facts, with links that light up the cells they count.
  function drawFacts(withLinks = true) {
    if (!level.facts.length) return null;
    return el('div.rules-box.facts-box', {},
      el('h3', {}, 'Case facts'),
      el('ul', {}, level.facts.map((f, k) => el('li', {}, factText(theme, level, f),
        withLinks && factMarks[k] ? [' ', el('span.rule-links', {}, 'Show: ', link('fact', k, 'cells'))] : null))));
  }

  // The special rules of this case, with links that light up the board.
  function drawRules() {
    if (!level.rules.length) return null;
    const links = {
      ranks: link('court', 0, `${COURT.icon} court rooms`),
      glyphs: [link('tag', 'lone', `${GLYPHS.lone.icon} moon`), ' ', link('tag', 'crowd', `${GLYPHS.crowd.icon} sun`)],
      trades: link('tag', 'trade', 'work spots'),
      tasks: link('tag', 'task', 'task spots'),
      sea: link('room', level.sea, `${SEA.icon} sea`),
      bandits: link('lawful', 0, `${LAWFUL.icon} star rooms`),
      parity: link('parity', 0, 'marked rooms'),
    };
    return el('div.rules-box', {},
      el('h3', {}, 'Special rules'),
      el('ul', {}, level.rules.map(r => el('li', {}, ruleText(r, level), ' ',
        links[r] ? el('span.rule-links', {}, 'Show: ', links[r]) : null))));
  }

  function drawPeople() {
    const order = level.people.map((_, p) => p).sort((a, b) => letter(a).localeCompare(letter(b)));
    return el('ul.people', {}, order.map(p => {
      const person = level.people[p];
      const clues = level.clues.filter(cl => cl.p === p);
      const placed = state.pos[p] >= 0;
      // A click anywhere on the card selects or unselects the person.
      return el(`li.person${state.selected === p ? '.sel' : ''}${placed ? '.placed' : ''}`, {
        onclick: e => {
          if (justDragged || e.target.closest('.person-head')) return;
          // A link in a clue lights up cells: it selects, but never unselects.
          if (e.target.closest('.ref')) { if (state.selected !== p) { state.selected = p; draw(); } return; }
          // Anywhere else on the card: select, or unselect if already selected.
          selectPerson(state.selected === p ? null : p);
        },
        ondblclick: e => { e.preventDefault(); state.selected = p; void openPersonBoard(p); },
        // Drag the whole card. The token starts at once, the rest needs a long press on touch.
        onpointerdown: e => startDrag(e, p, { hold: !e.target.closest('.token') }),
        oncontextmenu: e => { if (e.pointerType !== 'mouse') e.preventDefault(); },
      },
        // A div that acts as a button, so the magnifier button can sit inside it.
        el('div.person-head', {
          role: 'button', tabindex: 0,
          'aria-pressed': String(state.selected === p),
          title: 'Click to see their cells. Double-click to mark where they can be.',
          onclick: () => {
            if (justDragged) return;
            selectPerson(state.selected === p ? null : p);
          },
          onkeydown: e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); state.selected = state.selected === p ? null : p; draw(); } },
        },
        el(`span.token.draggable${p === victim ? '.victim' : ''}`, {
          style: { '--pc': color(p) }, title: 'Drag onto a cell to place',
        }, letter(p)),
        el('span.person-name', {}, person.name, badges(p)),
        p === victim ? el('span.tag', {}, '💀 victim') : null,
        placed ? el('span.where', {}, `${colName(state.pos[p] % n)}${Math.floor(state.pos[p] / n) + 1}`) : null),
        // Magnifier in the top right corner: opens "Where can … be?" (same as a double-click).
        el('button.person-zoom', {
          type: 'button', title: `Where can ${person.name} be?`, 'aria-label': `Where can ${person.name} be?`,
          onclick: e => { e.stopPropagation(); state.selected = p; void openPersonBoard(p); },
          ondblclick: e => e.stopPropagation(),
          onpointerdown: e => e.stopPropagation(),
          onkeydown: e => e.stopPropagation(),
        }, icon('search')),
        el('ul.clues', {}, p === victim ? victimRule() : null, clues.map(cl => {
          const ok = assists.checks ? clueState(level, blocking, cl, state.pos) : null;
          return el(`li${checkClass(ok)}`, {}, clueNodes(cl));
        })));
    }));
  }

  function drawLegend() {
    return el('div.legend', {}, level.roomNames.map((name, k) =>
      el(`button.chip${state.highlight?.kind === 'room' && state.highlight.v === k ? '.on' : ''}${k === level.sea ? '.sea' : ''}`,
        { type: 'button', style: { '--rh': roomHue(theme, k) }, onclick: () => setHighlight({ kind: 'room', v: k }) },
        el(`span.swatch${k === level.sea ? '.sea' : ''}`, { 'aria-hidden': 'true' },
          el(`span.floor.${floorClass(k)}`)),
        roomTitle(k))));
  }

  // What a mark on the board means.
  function tagMeaning(t, info) {
    if (t === 'lone') return 'alone in the room';
    if (t === 'crowd') return 'not alone in the room';
    if (!t.startsWith('k:')) return `only a ${info.name.replace(/ spot$/, '')} may stand here`;
    const taskCount = level.tasks.find(([id]) => id === t.slice(2))[1];
    return `whoever stands here is a ${info.name.replace(/ task spot$/, '')} (${taskCount} in all)`;
  }

  // Legend keys for the objects on the board.
  function objectKeys() {
    const onBoard = new Set(level.objects.filter(Boolean));
    return Object.entries(theme.objects).filter(([id]) => onBoard.has(id)).map(([id, o]) => {
      const blocks = blocking.has(id);
      return el(`button.key${state.highlight?.kind === 'obj' && state.highlight.v === id ? '.on' : ''}`,
        { type: 'button', onclick: () => setHighlight({ kind: 'obj', v: id }) },
        el(`span.key-icon.${blocks ? 'furn' : 'spot'}`, {}, o.icon),
        el('span', {}, o.name, el('small', {}, blocks ? 'blocks the cell' : 'can stand here')));
    });
  }

  // Legend keys for the marks on the board: seals, work spots, task spots.
  function tagKeys() {
    return [...new Set(tags.filter(Boolean))].map(t => {
      const info = tagInfo(t);
      return el(`button.key${state.highlight?.kind === 'tag' && state.highlight.v === t ? '.on' : ''}`,
        { type: 'button', onclick: () => setHighlight({ kind: 'tag', v: t }) },
        el(`span.key-icon.${tagClass(t)}`, {}, info.icon),
        el('span', {}, info.name, el('small', {}, tagMeaning(t, info))));
    });
  }

  // Legend keys for doors and windows.
  function featureKeys() {
    return [
      ['door', level.doors?.length, '🚪', 'door', 'a person on either side is "in front of a door"'],
      ['window', level.windows?.length, '🪟', 'window', 'a person on this cell is "in front of a window"'],
    ].filter(([, has]) => has).map(([kind, , sym, name, what]) => el(`button.key${state.highlight?.kind === kind ? '.on' : ''}`,
      { type: 'button', onclick: () => setHighlight({ kind, v: 0 }) },
      el(`span.key-icon.${kind}-key`, {}, sym),
      el('span', {}, name, el('small', {}, what))));
  }

  // Legend for the objects and marks on this board.
  function drawObjectLegend() {
    const items = [...objectKeys(), ...tagKeys(), ...featureKeys()];
    if (!items.length) return null;
    return el('div.object-legend', {}, el('h3', {}, 'On the board'), el('div.keys', {}, items));
  }

  // What the current tool does, shown next to the tool switch.
  function toolHelp() {
    const b = text => el('strong', {}, text);
    const lines = {
      note: [[b('Click'), ' a cell: note who can or can\'t be there.'], [b('Long press'), ': choose who stands there.'],
        [b('Right-click'), ': cross it out or remove the cross.'], [b('Drag'), ' a person onto cells: note them there.']],
      place: [[b('Click'), ' a cell: choose who stands there.'],
        [b('Right-click'), ': cross it out or remove the cross.'], [b('Drag'), ' a person onto cells: note them there.']],
      mark: [[b('Click'), ' a cell: cross it out or remove the cross.'], [b('Long press'), ': choose who stands there.'],
        [b('Drag'), ' a person onto cells: note them there.']],
    }[state.mode];
    // No one selected: a double click on a person opens their board.
    if (state.selected === null) {
      lines.push([b('Double-click'), assists.showNots ? ' a person: mark where they can or can\'t be.' : ' a person: mark where they can be.']);
    }
    if (state.selected !== null && state.mode !== 'mark') {
      // A person is selected: a click notes them, a double click opens the dialog.
      const who = level.people[state.selected].name.split(' ')[0];
      lines.splice(0, 1,
        [b('Click'), assists.showNots ? ` a cell: note ${who} there (again: can't be there, again: clear).` : ` a cell: note ${who} there (again: clear).`],
        ['Click ', who, ' in the list again to stop.']);
    }
    return el('ul.tool-help', {}, lines.map(parts => el('li', {}, parts)));
  }

  function toggle(name, label) {
    return el('label.switch', {},
      el('input', {
        type: 'checkbox', checked: assists[name],
        onchange: e => { assists[name] = e.target.checked; setSetting(name, assists[name]); draw(); },
      }),
      el('span', {}, label));
  }

  // The people column scrolls on its own (wide screens): it keeps its place over a redraw.
  let sideTop = 0;
  function draw() {
    const scrollY = window.scrollY;
    const killer = state.solved ? murdererOf(level, level.solution) : -1;
    app.replaceChildren(
      el('nav.topbar', {},
        el('a.btn.icon.back', { href: home, title: `Back to ${homeName}`, 'aria-label': `Back to ${homeName}` }, icon('back')),
        el('a.topbar-title', { href: '#/', title: 'Main page' }, logo('.bar-logo'), 'Alibi Grid'),

        el('button.btn.icon', { type: 'button', onclick: openShare, title: 'Share this case', 'aria-label': 'Share this case' }, icon('share')),
        el('button.btn', { type: 'button', onclick: openHints, title: 'Step-by-step solution', 'aria-label': 'Get hints' }, '💡', el('span.wide-only', {}, ' Get hints')),
        el('button.btn', { type: 'button', onclick: showHelp, title: 'How to play', 'aria-label': 'Help: how to play' }, el('strong', {}, '?'), el('span.wide-only', {}, 'Help')),
        el('button.btn.icon', { type: 'button', onclick: undo, title: 'Undo', 'aria-label': 'Undo', disabled: !state.history.length || state.solved }, icon('undo')),
        el('button.btn.icon', { type: 'button', onclick: redo, title: 'Redo', 'aria-label': 'Redo', disabled: !state.future.length || state.solved }, icon('redo')),
        el('button.btn', { type: 'button', onclick: reset, title: 'Reset or new board', 'aria-label': 'Reset' }, el('span.wide-only', {}, 'Reset …'), el('span.narrow-only', { 'aria-hidden': 'true' }, icon('reset'))),
        el('button.btn.success.submit', {
          type: 'button', onclick: submit, disabled: !allPlaced(),
          title: allPlaced() ? 'Check your solution' : 'Place everyone first',
        }, state.solved ? '✓ Solved' : 'Submit'),
        fullscreenButton()),
      el('header.case-head', { style: { '--h': theme.hue } },
        el('p.case-campaign', {}, custom ? `${theme.title} · made by you` : theme.title),
        el('h1', {}, `${theme.icon} ${caseName}`, el('small', {}, ` · ${n} × ${n} `), difficultyBadge(tries, score)),
        state.solved
          ? el('p.story.closed', {}, `Case closed. ${level.people[killer].name} did it.`)
          : el('p.story', {}, `${level.people[victim].name} was found dead. Place everyone, then name the person who was alone with the victim.`)),
      el('div.game', { style: { '--h': theme.hue, '--n': n, '--sel': state.selected === null ? 'transparent' : color(state.selected) } },
        el('section.board-side', {},
          // Each board: a heading with its zoom buttons next to it, then the board.
          el('div.board-head', {}, el('h2.board-title', {}, 'Floor plan'), drawZoom('zoom')),
          // Split view: the floor plan only shows who stands where; all work happens on the placing board.
          assists.split ? drawBoard('view') : drawBoard(),
          assists.split ? [el('div.board-head.second', {}, el('h2.board-title', {}, 'Placing board'), drawZoom('zoomPlacing')), drawBoard()] : null,
          el('div.tools', {},
            el('div.segmented', { role: 'group', 'aria-label': 'Tap mode' },
              el(`button${state.mode === 'note' ? '.on' : ''}`, { type: 'button', title: 'Tap a cell to note who could be there', onclick: () => { state.mode = 'note'; draw(); } }, '✎ Default'),
              el(`button${state.mode === 'place' ? '.on' : ''}`, { type: 'button', onclick: () => { state.mode = 'place'; draw(); } }, '👤 Place'),
              el(`button${state.mode === 'mark' ? '.on' : ''}`, { type: 'button', onclick: () => { state.mode = 'mark'; state.selected = null; draw(); } }, '✕ Cross out')),
            toolHelp(),
            el('div.options', {},
              el('div.options-head', {},
                el('h3', {}, 'Options'),
                el('button.btn.small', { type: 'button', onclick: resetOptions, title: 'Set all options back to their defaults' }, '↺ Reset')),
              toggle('shade', 'Shade used rows & columns'),
              toggle('checks', 'Mark broken rules in people list'),
              toggle('hidePlaced', 'Auto-hide placed persons at other cells'),
              toggle('pulseHidden', 'Also blink cells with hidden person dots'),
              toggle('split', 'Show separate board for placing'),
              toggle('showNots', 'Use "can\'t be here" notes'))),
          el('h3.legend-title', {}, 'Rooms'),
          drawLegend(),
          drawObjectLegend(),
          el('div.flash', { role: 'status' })),
        el('section.side', { onscroll: e => { sideTop = e.target.scrollTop; } },
          drawRules(),
          drawFacts(),
          el('h2', {}, 'People'),
          el('p.hint', {}, 'Tap a person to light up their cell and notes on the board. Tap again to turn it off.'),
          drawPeople())),
    );
    for (const key of Object.keys(zooms)) if (frameOf(key)) setZoom(key, Math.min(zooms[key], Math.max(1, maxZoom(key))), false);
    window.scrollTo(0, scrollY);
    app.querySelector('.side').scrollTop = sideTop;
  }

  draw();
}
