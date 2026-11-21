// Coverage settings shared by the browser tests and tests/coverage.mjs.
// Source files: js/*.js. Not counted: js/bundle.js (a copy of the others)
// and js/levels.js (generated data).

const SKIP = ['bundle.js', 'levels.js'];
const ours = path => /(^|\/)js\/[^/]+\.js$/.test(path) && !SKIP.some(f => path.endsWith(`js/${f}`));

export const coverageOptions = {
  name: 'Alibi Grid coverage',
  outputDir: './coverage/report', // the parts go to coverage/parts (tests/coverage.mjs)
  // Browser files come as http://localhost:8123/js/x.js, Node files as file:///…/js/x.js.
  entryFilter: entry => ours(new URL(entry.url).pathname),
  sourceFilter: path => ours(path),
  sourcePath: path => path.replace(/^.*?(js\/[^/]+\.js)$/, '$1'),
  reports: ['console-details', 'v8', 'lcovonly'],
  // Files no test loads count as 0%.
  all: { dir: ['./js'], filter: path => ours(path) },
};
