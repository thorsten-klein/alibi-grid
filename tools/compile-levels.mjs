// Assemble levels/<theme>/*.json into js/levels.js
// Run: node tools/compile-levels.mjs

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { THEMES } from '../js/themes.js';

export function compileLevels() {
  const campaigns = [];

  for (const theme of THEMES) {
    const dir = new URL(`../levels/${theme.id}`, import.meta.url);
    let files = [];
    try {
      files = readdirSync(dir).filter(f => f.endsWith('.json')).sort();
    } catch {
      continue;
    }

    const levels = files.map(file => {
      const content = readFileSync(new URL(`${dir.href}/${file}`), 'utf8');
      return JSON.parse(content);
    });

    campaigns.push({
      theme: theme.id,
      levels,
    });
  }

  const lines = ['// Made from levels/. Do not edit by hand.', 'export const CAMPAIGNS = ['];
  for (const c of campaigns) {
    lines.push('  {');
    lines.push(`    "theme": ${JSON.stringify(c.theme)},`);
    lines.push('    "levels": [');
    for (let i = 0; i < c.levels.length; i++) {
      const comma = i === c.levels.length - 1 ? '' : ',';
      lines.push(`      ${JSON.stringify(c.levels[i])}${comma}`);
    }
    lines.push('    ]');
    lines.push('  },');
  }
  lines.push('];\n');

  return lines.join('\n');
}

export const LEVELS_PATH = new URL('../js/levels.js', import.meta.url);

if (import.meta.url === `file://${process.argv[1]}`) {
  writeFileSync(LEVELS_PATH, compileLevels(), 'utf8');
  console.log('Compiled levels into js/levels.js');
}
