// Assemble levels/<theme>/*.json into js/levels.js.
// levels/ is the source. js/levels.js is made from it.
// Run: node tools/compile-levels.mjs

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { THEMES } from '../js/themes.js';

// The folder of a theme's level files.
export const themeDir = id => new URL(`../levels/${id}/`, import.meta.url);

// Level files are named by their number: 000.json, 001.json, … 1000.json.
const LEVEL_FILE = /^(\d+)\.json$/;

// The level files of a theme, in number order. [] if the folder is missing.
export function levelFiles(id) {
  let names;
  try { names = readdirSync(themeDir(id)); } catch { return []; }
  const files = names.filter(f => f.endsWith('.json'));
  const bad = files.filter(f => !LEVEL_FILE.test(f));
  if (bad.length) throw new Error(`levels/${id}: bad file names: ${bad.join(', ')}`);
  return files.sort((a, b) => Number.parseInt(a, 10) - Number.parseInt(b, 10));
}

// All campaigns read from levels/. A theme with no files gets an empty list.
export function readCampaigns() {
  return THEMES.map(theme => ({
    theme: theme.id,
    levels: levelFiles(theme.id).map(f => JSON.parse(readFileSync(new URL(f, themeDir(theme.id)), 'utf8'))),
  }));
}

// The text of js/levels.js.
export function compileLevels(campaigns = readCampaigns()) {
  const lines = ['// Made from levels/. Do not edit by hand.', 'export const CAMPAIGNS = ['];
  for (const c of campaigns) {
    lines.push(
      '  {',
      `    "theme": ${JSON.stringify(c.theme)},`,
      '    "levels": [',
    );
    for (let i = 0; i < c.levels.length; i++) {
      const comma = i === c.levels.length - 1 ? '' : ',';
      lines.push(`      ${JSON.stringify(c.levels[i])}${comma}`);
    }
    lines.push('    ]', '  },');
  }
  lines.push('];\n');
  return lines.join('\n');
}

export const LEVELS_PATH = new URL('../js/levels.js', import.meta.url);

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  writeFileSync(LEVELS_PATH, compileLevels(), 'utf8');
  console.log('Compiled levels into js/levels.js');
}
