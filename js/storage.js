// Save progress in localStorage. Never crash if storage is blocked.

const KEY = 'alibi-grid-v1';

function readAll() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
}

function writeAll(data) {
  try { localStorage.setItem(KEY, JSON.stringify(data)); } catch { /* ignore */ }
}

// v2: the grouped campaigns. Progress on the old cases does not fit the new ones.
export const levelKey = (themeId, index) => `${themeId}:v2:${index}`;

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
