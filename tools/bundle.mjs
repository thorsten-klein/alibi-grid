// Join the browser modules into one classic script: js/bundle.js.
// Browsers block ES modules on file://, so index.html loads this file there.
// The levels come from levels/, not from js/levels.js.
// Run: node tools/bundle.mjs   (also writes js/levels.js; generate.mjs runs it too)

import { readFileSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { compileLevels, LEVELS_PATH } from './compile-levels.mjs';

// Order matters: a file comes after the files it imports.
const FILES = ['levels', 'oldIds', 'themes', 'rules', 'levelCodec', 'hints', 'generator', 'storage', 'ui', 'game', 'main'];

// No side effects: levels is the text of js/levels.js (made from levels/ when not given).
export function buildBundle(levels = compileLevels()) {
  const parts = FILES.map(name => {
    const src = (name === 'levels' ? levels : readFileSync(new URL(`../js/${name}.js`, import.meta.url), 'utf8'))
      .replace(/^import .*;\n/gm, '')
      .replace(/^export (?=(const|function|async|let|class) )/gm, '');
    return `// ---- js/${name}.js ----\n${src}`;
  });
  return `// Made by tools/bundle.mjs from the files in js/. Do not edit by hand.\n// async: main.js waits for its first route (top-level await).\n(async () => {\n'use strict';\n${parts.join('\n')}\n})();\n`;
}

export const BUNDLE_PATH = new URL('../js/bundle.js', import.meta.url);

// Write js/levels.js and js/bundle.js from levels/.
export function writeBundle() {
  const levels = compileLevels();
  writeFileSync(LEVELS_PATH, levels, 'utf8');
  writeFileSync(BUNDLE_PATH, buildBundle(levels));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  writeBundle();
  console.log('wrote js/levels.js and js/bundle.js');
}
