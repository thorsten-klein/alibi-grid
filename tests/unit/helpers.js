// Shared helpers for the unit tests.

import { colName, clueText, factText, themeById } from '../../js/themes.js';

// Text helpers for deduce(), like the game's (people as their names).
export function plainT(level, theme = null) {
  const n = level.size;
  const t = theme || themeById('manor');
  return {
    name: p => level.people[p].name,
    cell: i => `${colName(i % n)}${Math.floor(i / n) + 1}`,
    col: colName,
    room: i => `the ${level.roomNames[level.rooms[i]]}`,
    rooms: cells => [...new Set(cells.map(i => level.roomNames[level.rooms[i]]))].map(x => `the ${x}`).join(' or '),
    clue: cl => clueText(t, level, cl),
    people: ps => ps.map(p => level.people[p].name).join(' and '),
    fact: f => factText(t, level, f),
  };
}

import { THEMES, themeRules, blockingSet } from '../../js/themes.js';
import { RULES } from '../../js/rules.js';
import { makeLevel, FACT_KINDS } from '../../js/generator.js';

// The theme the case maker uses for a set of rules.
export const themeFor = rules => (rules.length === 1 && THEMES.find(t => !t.mix && themeRules(t).join() === rules[0])) || themeById('rift');

// One small generated case per special rule (and one with every kind of fact), made once.
let made = null;
export function sampleLevels() {
  if (made) return made;
  made = RULES.map(rule => {
    const theme = themeFor([rule]);
    return { label: rule, theme, blocking: blockingSet(theme), level: makeLevel(theme, 6, 4242, [rule], null, { tries: { min: 0, max: Infinity } }) };
  });
  for (const kind of FACT_KINDS) {
    const rules = kind === 'apart' ? ['trades'] : [];
    const theme = rules.length ? themeFor(rules) : themeById('manor');
    made.push({ label: kind, theme, blocking: blockingSet(theme), level: makeLevel(theme, 6, 99, rules, [kind], { tries: { min: 0, max: Infinity } }) });
  }
  return made;
}

// Small random numbers that are the same on every run.
export function rng(seed) {
  let a = seed >>> 0;
  return k => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), a | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return Math.floor((((t ^ (t >>> 14)) >>> 0) / 4294967296) * k);
  };
}
