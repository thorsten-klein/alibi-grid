// Join the browser modules into one classic script: js/bundle.js.
// Browsers block ES modules on file://, so index.html loads this file there.
// Run: node tools/bundle.mjs   (generate.mjs also runs it)

import { readFileSync, writeFileSync } from 'node:fs';

// Order matters: a file comes after the files it imports.
const FILES = ['levels', 'themes', 'rules', 'levelCodec', 'hints', 'generator', 'storage', 'ui', 'game', 'main'];

export function buildBundle() {
  const parts = FILES.map(name => {
    const src = readFileSync(new URL(`../js/${name}.js`, import.meta.url), 'utf8')
      .replace(/^import .*;\n/gm, '')
      .replace(/^export (?=(const|function|async|let|class) )/gm, '');
    return `// ---- js/${name}.js ----\n${src}`;
  });
  return `// Made by tools/bundle.mjs from the files in js/. Do not edit by hand.\n(() => {\n'use strict';\n${parts.join('\n')}\n})();\n`;
}

export const BUNDLE_PATH = new URL('../js/bundle.js', import.meta.url);

if (import.meta.url === `file://${process.argv[1]}`) {
  writeFileSync(BUNDLE_PATH, buildBundle());
  console.log('wrote js/bundle.js');
}
