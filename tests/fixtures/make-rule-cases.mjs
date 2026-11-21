// Make one small case per special rule (and one with every kind of case fact)
// for the browser tests. Fixed seeds, so the cases are the same every time.
// Run: node tests/fixtures/make-rule-cases.mjs   (writes tests/fixtures/rule-cases.json)

import { writeFileSync } from 'node:fs';
import { THEMES, themeById, themeRules } from '../../js/themes.js';
import { RULES } from '../../js/rules.js';
import { makeLevel, FACT_KINDS } from '../../js/generator.js';
import { encodeLevel } from '../../js/levelCodec.js';

const themeFor = rules => (rules.length === 1 && THEMES.find(t => !t.mix && themeRules(t).join() === rules[0])) || themeById('rift');
const any = { tries: { min: 0, max: Infinity } };
const out = {};
for (const rule of RULES) {
  const theme = themeFor([rule]);
  out[rule] = { theme: theme.id, level: encodeLevel(theme, makeLevel(theme, 6, 4242, [rule], null, any)) };
}
// Every kind of case fact that fits without special rules.
const kinds = FACT_KINDS.filter(k => k !== 'apart');
for (const kind of kinds) {
  out[`fact-${kind}`] = { theme: 'manor', level: encodeLevel(themeById('manor'), makeLevel(themeById('manor'), 6, 99, [], [kind], any)) };
}
out['fact-apart'] = { theme: 'camp', level: encodeLevel(themeById('camp'), makeLevel(themeById('camp'), 6, 99, ['trades'], ['apart'], any)) };
writeFileSync(new URL('./rule-cases.json', import.meta.url), `${JSON.stringify(out, null, 1)}\n`);
console.log(`wrote ${Object.keys(out).length} cases`);
