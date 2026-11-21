// Short text form for levels, so levels.js stays small.
// rooms:   one base-36 char per cell
// objects: one char per cell, "." for empty, else a letter for the
//          theme's object at that index
// Special rules add fields only when the level uses them:
// rules:   list of rule ids
// court:   court room ids          rank:  one char per person (n, k, c)
// trade:   one char per person, "." or trade index
// tags:    one char per cell: "." none, L lone, C crowd, digit = trade spot,
//          a-e = task spot (trade index)
// tasks:   [[trade index, count], ...]
// sea:     sea room id
// bandits: number of bandits       lawful: room ids without bandits
// couples: pairs [p, q]            parity: [[room, 'e' | 'o'], ...]
// river:   [dir, cuts as base-36 chars, people on the west/north side]
// facts:   case facts [t, v, k] (only when there are some)
// doors:   cell pairs [i, j]        windows: [[cell, side], ...]
// tries:   "what if" steps the hints need (the difficulty)

import { TRADES } from './themes.js';

const RANK_CODE = { noble: 'n', knight: 'k', commoner: 'c' };
const RANK_NAME = { n: 'noble', k: 'knight', c: 'commoner' };
const tradeIndex = id => TRADES.findIndex(t => t.id === id);

// Short fingerprint of a stored case: its board, people and clues, not its group.
// Saved progress is keyed by it, so progress stays with its case when cases move.
export function caseId(raw) {
  const { group, extra, tries, ...rest } = raw;
  const text = JSON.stringify(rest);
  let a = 5381, b = 0;
  for (let i = 0; i < text.length; i++) {
    const c = text.codePointAt(i);
    a = (a * 33 + c) >>> 0;
    b = (b * 65599 + c) >>> 0;
  }
  return a.toString(36) + b.toString(36);
}

// A cell tag as one letter: . none, L lone, C crowd, a-e a task (k:), 0-9 a trade (t:).
function tagCode(t) {
  if (!t) return '.';
  if (t === 'lone') return 'L';
  if (t === 'crowd') return 'C';
  const k = tradeIndex(t.slice(2));
  return t.startsWith('k:') ? String.fromCodePoint(97 + k) : String(k);
}

// The cell tag of one letter (see tagCode).
function tagOf(ch) {
  if (ch === '.') return null;
  if (ch === 'L') return 'lone';
  if (ch === 'C') return 'crowd';
  if (/[a-e]/.test(ch)) return `k:${TRADES[ch.codePointAt(0) - 97].id}`;
  return `t:${TRADES[+ch].id}`;
}

export function encodeLevel(theme, level) {
  const ids = Object.keys(theme.objects);
  const out = {
    size: level.size,
    rooms: level.rooms.map(k => k.toString(36)).join(''),
    objects: level.objects.map(o => (o ? String.fromCodePoint(97 + ids.indexOf(o)) : '.')).join(''),
    roomNames: level.roomNames,
    people: level.people.map(p => p.name),
    victim: level.people.findIndex(p => p.victim),
    clues: level.clues.map(c => (c.v === undefined ? [c.p, c.t] : [c.p, c.t, c.v])),
    solution: level.solution,
  };
  if (level.doors.length) out.doors = level.doors;
  if (level.windows.length) out.windows = level.windows;
  if (level.tries >= 0) out.tries = level.tries;
  if (level.facts?.length) out.facts = level.facts.map(f => (f.k === undefined ? [f.t, f.v] : [f.t, f.v, f.k]));
  const rules = level.rules || [];
  if (!rules.length) return out;
  out.rules = rules;
  if (rules.includes('ranks')) {
    out.court = level.court;
    out.rank = level.rank.map(r => RANK_CODE[r]).join('');
  }
  if (rules.includes('trades')) out.trade = level.trade.map(t => (t ? String(tradeIndex(t)) : '.')).join('');
  if (level.tags?.some(Boolean)) {
    out.tags = level.tags.map(tagCode).join('');
  }
  if (rules.includes('sea')) out.sea = level.sea;
  if (rules.includes('bandits')) { out.bandits = level.bandits; out.lawful = level.lawful; }
  if (rules.includes('couples')) out.couples = level.couples;
  if (rules.includes('parity')) out.parity = level.parity.map(([k, kind]) => [k, kind[0]]);
  if (rules.includes('tasks')) out.tasks = level.tasks.map(([id, k]) => [tradeIndex(id), k]);
  if (rules.includes('river')) out.river = [level.river.dir, level.river.cut.map(c => c.toString(36)).join(''), level.river.first];
  return out;
}

export function decodeLevel(theme, raw) {
  const ids = Object.keys(theme.objects);
  const level = {
    size: raw.size,
    rooms: [...raw.rooms].map(ch => Number.parseInt(ch, 36)),
    objects: [...raw.objects].map(ch => (ch === '.' ? null : ids[ch.codePointAt(0) - 97])),
    roomNames: raw.roomNames,
    people: raw.people.map((name, p) => (p === raw.victim ? { name, victim: true } : { name })),
    clues: raw.clues.map(([p, t, v]) => ({ p, t, v })),
    solution: raw.solution,
    rules: raw.rules || [],
    doors: raw.doors || [],
    windows: raw.windows || [],
    facts: (raw.facts || []).map(([t, v, k]) => ({ t, v, k })),
    sea: raw.sea ?? -1,
    tries: raw.tries ?? null,
  };
  if (raw.rank) { level.court = raw.court; level.rank = [...raw.rank].map(ch => RANK_NAME[ch]); }
  if (raw.trade) level.trade = [...raw.trade].map(ch => (ch === '.' ? null : TRADES[+ch].id));
  if (raw.tags) {
    level.tags = [...raw.tags].map(tagOf);
  }
  if (raw.bandits) { level.bandits = raw.bandits; level.lawful = raw.lawful; }
  if (raw.couples) level.couples = raw.couples;
  if (raw.parity) level.parity = raw.parity.map(([k, c]) => [k, c === 'e' ? 'even' : 'odd']);
  if (raw.tasks) level.tasks = raw.tasks.map(([k, c]) => [TRADES[k].id, c]);
  if (raw.river) level.river = { dir: raw.river[0], cut: [...raw.river[1]].map(ch => Number.parseInt(ch, 36)), first: raw.river[2] };
  return level;
}
