// The hints follow a player's own way of solving a case.
// Blackwood Manor, Medium case 3 (6×6), as it was when the player solved it
// (saved in tests/fixtures/manor-medium-3.json, so new levels do not change it). Each board below is from a link the player shared,
// with the step they took next. The test opens the link, asks for a hint and checks
// that the player's step is the hint (or one of the offered hints, where noted).
//
// People: A Alma (alone in a room), B Basil (next to a sofa), V Victor (victim, in front
// of a door), C Celia (row 4), D Dexter (in front of a door), E Elias (on a sofa).
// Case fact: nobody was in front of a window.

import { test, expect } from './fixtures.js';
import { openHints, hintOptions, caseLink } from './helpers.js';

const CASE = board => caseLink('../fixtures/manor-medium-3.json', 'manor', board);

// [board from the shared link, what the player did, how the hint must match]
// first: the first hint shown is the player's step. offered: it is one of the hints.
const STEPS = [
  ['eyJwb3MiOlstMSwtMSwtMSwtMSwtMSwtMV0sIm1hcmtzIjpbXSwibm90ZXMiOnt9LCJub3RzIjp7fSwidGV4dHMiOnt9fQ',
    'Cross out all cells from the case fact.',
    { first: /Case fact: "Nobody was in front of a window\." So nobody can stand on the marked cells\. Cross them out\./ }],
  ['eyJwb3MiOlstMSwtMSwtMSwtMSwtMSwtMV0sIm1hcmtzIjpbMTEsMTddLCJub3RlcyI6e30sIm5vdHMiOnt9LCJ0ZXh0cyI6e319',
    'C was in row 4. Note C there.',
    { offered: /C was in row 4\. So C can only be on the marked cells\./ }],
  ['eyJwb3MiOlstMSwtMSwtMSwtMSwtMSwtMV0sIm1hcmtzIjpbMTEsMTddLCJub3RlcyI6eyIxOCI6WzNdLCIxOSI6WzNdLCIyMCI6WzNdLCIyMiI6WzNdLCJyMyI6WzNdfSwibm90cyI6e30sInRleHRzIjp7fX0',
    'Note E on each sofa, and B next to each sofa.',
    { first: /E was resting on a sofa\. So E can only be on the marked cells\./, offered: /B was right next to a sofa\. So B can only be on the marked cells\./ }],
  ['eyJwb3MiOlstMSwtMSwtMSwtMSwtMSwtMV0sIm1hcmtzIjpbMTEsMTddLCJub3RlcyI6eyIwIjpbNV0sIjEiOlsxXSwiNiI6WzFdLCIxOCI6WzNdLCIxOSI6WzNdLCIyMCI6WzNdLCIyMiI6WzNdLCIyNCI6WzVdLCIyOCI6WzFdLCIzMCI6WzFdLCIzNCI6WzVdLCJyMyI6WzNdfSwibm90cyI6e30sInRleHRzIjp7fX0',
    'The 3 cells of E all meet A6, so nobody can be there. Cross out A6.',
    { first: /E can only be on A1, A5 and E6\. A6 shares a row or column with all of them\. .*So nobody can stand on A6: cross it out\./ }],
  ['eyJwb3MiOlstMSwtMSwtMSwtMSwtMSwtMV0sIm1hcmtzIjpbMTEsMTcsMzBdLCJub3RlcyI6eyIwIjpbNV0sIjEiOlsxXSwiNiI6WzFdLCIxOCI6WzNdLCIxOSI6WzNdLCIyMCI6WzNdLCIyMiI6WzNdLCIyNCI6WzVdLCIyOCI6WzFdLCIzMCI6WzFdLCIzNCI6WzVdLCJyMyI6WzNdfSwibm90cyI6e30sInRleHRzIjp7fX0',
    'Note V on each cell it can be on.',
    { first: /V was in front of a door\. So V can only be on the marked cells\./ }],
  ['eyJwb3MiOlstMSwtMSwtMSwtMSwtMSwtMV0sIm1hcmtzIjpbMTEsMTcsMzBdLCJub3RlcyI6eyIwIjpbNV0sIjEiOlsxXSwiMiI6WzJdLCI2IjpbMV0sIjkiOlsyXSwiMTQiOlsyXSwiMTUiOlsyXSwiMTgiOlszXSwiMTkiOlszXSwiMjAiOlszXSwiMjIiOlszXSwiMjQiOls1XSwiMjciOlsyXSwiMjgiOlsxLDJdLCIzMCI6WzFdLCIzNCI6WzVdLCJyMyI6WzNdfSwibm90cyI6e30sInRleHRzIjp7fX0',
    'Note D on each cell it can be on.',
    { first: /D was in front of a door\. So D can only be on the marked cells\./ }],
  ['eyJwb3MiOlstMSwtMSwtMSwtMSwtMSwtMV0sIm1hcmtzIjpbMTEsMTcsMzBdLCJub3RlcyI6eyIwIjpbNV0sIjEiOlsxXSwiMiI6WzIsNF0sIjYiOlsxXSwiOSI6WzIsNF0sIjE0IjpbMiw0XSwiMTUiOlsyLDRdLCIxOCI6WzNdLCIxOSI6WzNdLCIyMCI6WzNdLCIyMiI6WzNdLCIyNCI6WzVdLCIyNyI6WzIsNF0sIjI4IjpbMSwyLDRdLCIzMCI6WzFdLCIzNCI6WzVdLCJyMyI6WzNdfSwibm90cyI6e30sInRleHRzIjp7fX0',
    'A is the only person who can be in column F.',
    { first: /Only A can still stand in column F\. So A can only be on F1 and F5\./ }],
  ['eyJwb3MiOlstMSwtMSwtMSwtMSwtMSwtMV0sIm1hcmtzIjpbMTEsMTcsMzBdLCJub3RlcyI6eyIwIjpbNV0sIjEiOlsxXSwiMiI6WzIsNF0sIjUiOlswXSwiNiI6WzFdLCI5IjpbMiw0XSwiMTQiOlsyLDRdLCIxNSI6WzIsNF0sIjE4IjpbM10sIjE5IjpbM10sIjIwIjpbM10sIjIyIjpbM10sIjI0IjpbNV0sIjI3IjpbMiw0XSwiMjgiOlsxLDIsNF0sIjI5IjpbMF0sIjMwIjpbMV0sIjM0IjpbNV0sInIzIjpbM10sImM1IjpbMF19LCJub3RzIjp7fSwidGV4dHMiOnt9fQ',
    'E is the only person who can be in row 6, so E is on E6.',
    { first: /Only E can still stand in row 6\. There, E can only be on E6\. Place E on E6\./ }],
  ['eyJwb3MiOlstMSwtMSwtMSwtMSwtMSwzNF0sIm1hcmtzIjpbMTEsMTcsMzBdLCJub3RlcyI6eyIwIjpbNV0sIjEiOlsxXSwiMiI6WzIsNF0sIjUiOlswXSwiNiI6WzFdLCI5IjpbMiw0XSwiMTQiOlsyLDRdLCIxNSI6WzIsNF0sIjE4IjpbM10sIjE5IjpbM10sIjIwIjpbM10sIjIyIjpbM10sIjI0IjpbNV0sIjI3IjpbMiw0XSwiMjgiOlsxLDIsNF0sIjI5IjpbMF0sIjMwIjpbMV0sIjM0IjpbNV0sInIzIjpbM10sImM1IjpbMF19LCJub3RzIjp7fSwidGV4dHMiOnt9fQ',
    'A must be alone, so A is on F1.',
    { first: /A was alone in a room\. E is already in the Ballroom\. So A is not there\. Now A has only one cell left: F1\. Place A there\./ }],
  ['eyJwb3MiOls1LC0xLC0xLC0xLC0xLDM0XSwibWFya3MiOlsxMSwxNywzMF0sIm5vdGVzIjp7IjAiOls1XSwiMSI6WzFdLCIyIjpbMiw0XSwiNSI6WzBdLCI2IjpbMV0sIjkiOlsyLDRdLCIxNCI6WzIsNF0sIjE1IjpbMiw0XSwiMTgiOlszXSwiMTkiOlszXSwiMjAiOlszXSwiMjIiOlszXSwiMjQiOls1XSwiMjciOlsyLDRdLCIyOCI6WzEsMiw0XSwiMjkiOlswXSwiMzAiOlsxXSwiMzQiOls1XSwicjMiOlszXSwiYzUiOlswXX0sIm5vdHMiOnt9LCJ0ZXh0cyI6e319',
    'Only one cell is left for B. And A is alone, so cross out D2.',
    { first: /B has only one cell left: A2\. Place B there\./, offered: /A was alone in a room\. So nobody else is in the Library\./ }],
  ['eyJwb3MiOls1LDYsLTEsLTEsLTEsMzRdLCJtYXJrcyI6WzExLDE3LDMwXSwibm90ZXMiOnsiMCI6WzVdLCIxIjpbMV0sIjIiOlsyLDRdLCI1IjpbMF0sIjYiOlsxXSwiOSI6WzIsNF0sIjE0IjpbMiw0XSwiMTUiOlsyLDRdLCIxOCI6WzNdLCIxOSI6WzNdLCIyMCI6WzNdLCIyMiI6WzNdLCIyNCI6WzVdLCIyNyI6WzIsNF0sIjI4IjpbMSwyLDRdLCIyOSI6WzBdLCIzMCI6WzFdLCIzNCI6WzVdLCJyMyI6WzNdLCJjNSI6WzBdfSwibm90cyI6e30sInRleHRzIjp7fX0',
    'Only C can be in column B. Place C on B4.',
    { first: /Only C can still stand in column B\. There, C can only be on B4\. Place C on B4\./ }],
  ['eyJwb3MiOls1LDYsLTEsMTksLTEsMzRdLCJtYXJrcyI6WzExLDE3LDMwXSwibm90ZXMiOnsiMCI6WzVdLCIxIjpbMV0sIjIiOlsyLDRdLCI1IjpbMF0sIjYiOlsxXSwiOSI6WzIsNF0sIjE0IjpbMiw0XSwiMTUiOlsyLDRdLCIxOCI6WzNdLCIxOSI6WzNdLCIyMCI6WzNdLCIyMiI6WzNdLCIyNCI6WzVdLCIyNyI6WzIsNF0sIjI4IjpbMSwyLDRdLCIyOSI6WzBdLCIzMCI6WzFdLCIzNCI6WzVdLCJyMyI6WzNdLCJjNSI6WzBdfSwibm90cyI6e30sInRleHRzIjp7fX0',
    'V must not be alone, so V is in the Gallery. Then D is in the other room: D on D5.',
    { offered: /V was not alone: the murderer was in the same room\. Nobody else can still be with V in the Pantry\. So V is not there\./ }],
  ['eyJwb3MiOls1LDYsLTEsMTksMjcsMzRdLCJtYXJrcyI6WzExLDE3LDMwXSwibm90ZXMiOnsiMCI6WzVdLCIxIjpbMV0sIjIiOlsyLDRdLCI1IjpbMF0sIjYiOlsxXSwiOSI6WzIsNF0sIjE0IjpbMiw0XSwiMTUiOlsyLDRdLCIxOCI6WzNdLCIxOSI6WzNdLCIyMCI6WzNdLCIyMiI6WzNdLCIyNCI6WzVdLCIyNyI6WzIsNF0sIjI4IjpbMSwyLDRdLCIyOSI6WzBdLCIzMCI6WzFdLCIzNCI6WzVdLCJyMyI6WzNdLCJjNSI6WzBdfSwibm90cyI6e30sInRleHRzIjp7fX0',
    'Only one cell is left for V.',
    { first: /V has only one cell left: C3\. Place V there\./ }],
];

test('the case opens: 6×6 at Blackwood Manor, Victor is the victim', async ({ page }) => {
  await page.goto(CASE());
  await expect(page.locator('.case-head .case-campaign')).toContainText('Blackwood Manor');
  await expect(page.locator('.case-head h1')).toContainText('6 × 6');
  await expect(page.locator('.case-head .story')).toContainText('Victor the vicar was found dead');
});

STEPS.forEach(([board, step, want], k) => {
  test(`step ${k + 1}: ${step}`, async ({ page }) => {
    await page.goto(CASE(board));
    await openHints(page);
    const options = await hintOptions(page);
    if (want.first) expect(options[0], `first hint of ${options.length}:\n${options.join('\n')}`).toMatch(want.first);
    if (want.offered) expect(options.some(t => want.offered.test(t)), `hints:\n${options.join('\n')}`).toBe(true);
  });
});
