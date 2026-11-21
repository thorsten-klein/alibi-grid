// Save progress in localStorage. Never crash if storage is blocked.

import { caseId } from './levelCodec.js';
import { OLD_IDS } from './oldIds.js';

const KEY = 'alibi-grid-v1';

// Saves from before keyed a case by its place in the campaign (theme:v2:index).
// Move them once to the fingerprint that case had (OLD_IDS). Others stay.
function migrate(all) {
  const levels = {};
  for (const [k, v] of Object.entries(all.levels)) {
    const m = /^(\w+):v2:(\d+)$/.exec(k);
    if (!m) levels[k] = v;
    else if (OLD_IDS[m[1]]?.[Number(m[2])]) levels[`${m[1]}:${OLD_IDS[m[1]][Number(m[2])]}`] = v;
  }
  return { ...all, levels, keys: 3 };
}

function readAll() {
  let all;
  try { all = JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
  if (!all.levels || all.keys === 3) return all;
  all = migrate(all);
  writeAll(all);
  return all;
}

function writeAll(data) {
  try { localStorage.setItem(KEY, JSON.stringify(data)); } catch { /* ignore */ }
}

// Where a campaign case keeps its progress: by its fingerprint (raw: the stored case).
export const levelKey = (themeId, raw) => `${themeId}:${caseId(raw)}`;

// Is the case closed in the campaign? Stays true when the board is reset.
// Old saves only have `solved`.
export const isClosed = state => !!(state?.closed ?? state?.solved);

export function loadLevel(key) {
  return readAll().levels?.[key] || null;
}

export function saveLevel(key, state) {
  const all = readAll();
  all.levels = { ...all.levels, [key]: state };
  writeAll(all);
}

export function getSetting(name, fallback) {
  const v = readAll().settings?.[name];
  return v === undefined ? fallback : v;
}

export function setSetting(name, value) {
  const all = readAll();
  all.settings = { ...all.settings, [name]: value };
  writeAll(all);
}
