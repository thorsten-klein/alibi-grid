# Alibi Grid

Logic murder mysteries on a grid. Static site, plain JavaScript and CSS. No build step.

## Rules

- Each row and each column holds exactly one person.
- Nobody stands on blocking furniture (shelves, pianos, …). Chairs, seats, sofas and beds are fine.
- Every clue is true. "Next to" means up, down, left or right, in the same room. Walls block it.
  Someone on a chair is never "next to a chair" (same for every object).
- The murderer is the only person in the same room as the victim.

## Doors and windows

Every board has doors (in the walls between rooms) and windows (in the outer wall).
Clues can say "A was in front of a door" (a cell on either side of a door)
or "B was in front of a window" (the cell inside a window).

## Special rules

Some campaigns add one special rule. The Time Rift mixes two or three per case.

| Campaign | Rule |
| --- | --- |
| 👑 Ravenhold Castle | Ranks. Nobles stand in a 👑 court room. Commoners never do. Knights go anywhere. |
| 🏜️ The Sand Tomb | Seals. On a 🌙 moon seal the person is alone in the room. On a ☀️ sun seal they are not. |
| 🦣 Ember Valley | Trades. Only a person with the matching trade may stand on a work spot. |
| 🤠 Dustwater Gulch | Bandits. The case gives the number of bandits, but not who. No bandit is in a ⭐ room. The victim is no bandit. |
| 🏴‍☠️ The Black Reef | Sea. The sea is not a room: anyone in the sea is alone. Each ship is a room. |
| 🌀 The Time Rift | A mix of the rules above. |

More rules for **Custom level…** only:

| Rule | Meaning |
| --- | --- |
| ↔️ Keep distance | No two people in one room touch, not even at a corner. |
| 🏠 Full house | Every room (not the sea) holds at least one person. |
| 💞 Couples | Each 💞 couple stands diagonally next to each other, in the same room. Never the victim or the murderer. Does not go with Keep distance. |
| ⚖️ Even & odd | A room marked even or odd holds an even or odd number of people. |
| 🏞️ River | A river winds across the board. The case says how many people stand on each side. |
| 🧰 Tasks | Hidden tasks like "2 hunters, 1 gatherer". Whoever stands on a task spot does that task. Clues: "was a hunter", "was a hunter or a gatherer", "had no task". |

## Case facts

Most cases also have up to three **case facts**: statements about the whole case.
On **Custom level…** you pick which kinds a case must show.

| Kind | Example |
| --- | --- |
| 🪑 On an object | Only one person was sitting on a chair. |
| 👋 Next to an object | Exactly 2 people were right next to a piano. |
| 🚪 In a room | Nobody was in the Library. |
| 🛋️ On furniture | Exactly 3 people were on a piece of furniture. |
| 🧱 Outer wall | Exactly 4 people stood along the outer wall. |
| 📐 Room corners | Only one person stood in a corner of a room. |
| 🧍 Alone | Exactly 2 people were alone in a room. |
| 🏚️ Empty rooms | Exactly one room was empty. |
| 🤝 Touching | No two people in one room touched at a corner. |
| 🚪 Doors | Exactly 2 people were in front of a door. |
| 🪟 Windows | Only one person was in front of a window. |
| 🎭 Apart | No two people of the same rank were in the same room (needs Ranks or Trades). |

The generator keeps a case only if every clue, case fact and special rule is needed to solve it.
The murderer must not be obvious before the board is solved: no clue ties someone to the victim's room,
and no one's clues alone put them in the only room the victim can be in.
`node tools/check.mjs` checks this for every level.

## Play

Same words everywhere (on a touch screen, tap instead of click):

- **Click** a cell with the Default tool: note who can or can't be there.
  Notes show as small dots (up to 4), more as a color wheel; "can't be there" is greyed out with a red cross.
  You can add free text too.
- **Click** a cell with the Place tool: choose who stands there.
- **Click** a cell with the Cross out tool: cross it out or remove the cross.
- **Long press** a cell: choose who stands there.
- **Right-click** a cell: cross it out or remove the cross.
- **Drag** a person onto cells: note them there. Pause on several cells to note them all
  (on touch: hold the card first). A drag never places anyone.
- **Drag** a placed person off the board: take them off.
- **Click** a person: light up their cell and notes. Click again to turn it off.
- While a person is selected: **click** a cell to note them there (click again to change or clear the note).
  Click the person again to stop.
- **Double-click** a person (or 🔍): mark on a board where they can or can't be.
- The boxes next to each row and column take notes too.
- A placed person puts an automatic ✕ on the rest of their row and column.
- Option "Use "can't be here" notes" (off by default) turns the whole "can't be here" feature on:
  the greyed out, crossed dots, the "Who cannot be here?" list, the ✕ in the person dialog,
  and clicks that cycle can be here → can't be here → clear. When off, those notes stay saved but are not used.
- Option "Show separate board for placing" (off by default): the floor plan on top only shows the placed
  people and can not be clicked. Everything else happens on the "Placing board" below it,
  a plain sheet with white cells, hatched blocked cells, walls, doors and windows.
- **Submit:** active once everyone is placed. Asks for the room and the murderer, then shows the result.
- **Get hints:** your next step from your own board. "Show full deduction story" shows the whole solution.
- **Share:** links to the empty board or to your board with notes.
- Each board has its own zoom buttons next to its heading. Fullscreen is top right.
- **Custom level…** (card on the home screen): pick the board size, difficulty, special rules and case facts, then Generate.
  "Import from other game" copies the rules from another case link.
  The case lives in its link, so you can share it.

## Run

Open `index.html` in a browser. A double-click works.

Browsers block ES modules on `file://`, so the page loads `js/bundle.js` there.
Over http(s) it loads the modules in `js/` directly. Any static file server works:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000. GitHub Pages can serve the folder as is.

## Levels

There are 41 campaigns. Each has four groups: Beginner, Medium, Hard and Expert.
Each group has one case per board size, from 4×4 up to 12×12.
Beginner stops at 10×10. A size the generator can not make is left out, but only at the ends:
a group has no gaps between its sizes.

The difficulty is the number of "what if" steps the hints need.
A "what if" step tries a cell and follows it until something breaks.

| Difficulty | "What if" steps |
| --- | --- |
| Beginner | 0 |
| Medium | 1–2 |
| Hard | 3–5 |
| Expert | 6–10 |
| Extreme | 11 or more (Custom level only) |

Each case shows its difficulty as a badge. Its tooltip gives the exact number.

Below the four groups, "Additional Extra Levels" holds more cases of any difficulty:
older cases that fit no group any more, and cases made with `--extra`.

A script makes the levels and writes one file per case to `levels/<theme>/`.
`js/levels.js` and `js/bundle.js` are made from these files.
It makes the cases in parallel. A case it can not make in time is left out:

```sh
node tools/generate.mjs           # fill missing cases (also rebuilds the bundle)
node tools/generate.mjs --extra   # make more extra cases (20 on 4×4 down to 3 on 12×12, per campaign)
node tools/generate.mjs --extra --sizes 5,6 --groups 0,1 --count 200   # 200 extra cases of these sizes and difficulties
node tools/compile-levels.mjs      # compile individual levels/ into js/levels.js
node tools/bundle.mjs             # rebuild js/levels.js and js/bundle.js after editing js/ or levels/
node tools/check.mjs              # check levels/, and that js/levels.js and the bundle are fresh
```

The generator keeps the cases in `levels/` and checks each one again.
See the top of `tools/generate.mjs` for its options (sizes, time limit, seeds).

Each level has exactly one solution. The step-by-step deduction (`js/hints.js`) must solve it
without a long search, so every case can be solved by reasoning. Rooms have at least 3 cells, and an n×n board has at most n rooms.
The generator drops clues while the solution stays unique and the case stays in its difficulty range.
A search budget per size (`BUDGET` in `js/generator.js`) keeps puzzles solvable by logic.

## Tests

```sh
npm install
npx playwright install chromium
npm test                  # unit tests (Node) and browser tests (Playwright)
npm run coverage          # the same with coverage: fails below 100%
```

- `tests/unit/`: the engine: rules, solver, hints, generator, level codec and texts.
- `tests/e2e/`: the screens in Chromium. `hints-scenario.spec.js` replays a player's own
  way of solving a case and checks that the hints follow it.
- `tests/fixtures/`: saved cases, so new levels do not change the tests.
- Coverage counts `js/*.js` (not the bundle and the level data). A line the tests can not
  reach yet is marked `/* v8 ignore next */` with the reason.

GitHub Actions runs it all on every push to `master`: unit tests and 4 shards of browser
tests in parallel, then one job that merges the coverage.

## Files

| Path | What it does |
| --- | --- |
| `index.html` | Page shell |
| `css/style.css` | All styles, light and dark |
| `js/main.js` | Routing, home and campaign screens |
| `js/game.js` | Game screen |
| `js/rules.js` | Rules and solver (used by browser and generator) |
| `js/hints.js` | Step-by-step deduction for hints |
| `js/generator.js` | Level generator (used by `tools/generate.mjs` and the case maker) |
| `js/themes.js` | Campaign themes: rooms, cast, objects, clue text |
| `js/levelCodec.js` | Compact level format |
| `js/storage.js` | Progress in `localStorage` |
| `levels/` | Individual level files per campaign (`levels/<campaign>/<case>.json`) |
| `js/levels.js` | Compiled levels bundle |
| `js/bundle.js` | All of `js/` in one file, for `file://` |
| `tools/` | Generator and checker (Node) |
| `tests/` | Unit and browser tests, coverage |
| `.github/workflows/test.yml` | Runs the tests on every push |

## Add a campaign

1. Add a theme to `THEMES` in `js/themes.js`: 12 rooms, 12 people (first letters A–L), 2 spot objects, 4 blocking objects.
   Optional: `rules` (special rules), `mix` (rules per case), `floors` (floor patterns), `seaName`.
2. Run `node tools/generate.mjs` and `node tools/check.mjs`.
