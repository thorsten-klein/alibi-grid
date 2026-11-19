// Small DOM helpers.

// el('div.card', { onclick }, child, 'text', ...)
export function el(spec, props = {}, ...children) {
  const [tag, ...classes] = spec.split('.');
  const node = document.createElement(tag || 'div');
  if (classes.length) node.className = classes.join(' ');
  for (const [k, v] of Object.entries(props || {})) {
    if (v === undefined || v === null || v === false) continue;
    if (k.startsWith('on')) node.addEventListener(k.slice(2), v);
    else if (k === 'style' && typeof v === 'object') {
      // setProperty also works for custom properties like --n.
      for (const [name, val] of Object.entries(v)) node.style.setProperty(name.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`), val);
    }
    else if (k in node && k !== 'list') node[k] = v;
    else node.setAttribute(k, v === true ? '' : v);
  }
  for (const c of children.flat()) if (c !== null && c !== undefined && c !== false) node.append(c);
  return node;
}

// Show a modal. buttons: [{ label, value, primary }]. Resolves with the value.
export function showDialog({ title, body, buttons = [{ label: 'OK', value: true, primary: true }], wide = false, stack = false }) {
  const dlg = document.getElementById('dialog');
  // wide: true for a wide dialog, 'x' for an extra wide one.
  dlg.classList.toggle('wide', !!wide);
  dlg.classList.toggle('xwide', wide === 'x');
  const form = dlg.querySelector('form');
  form.replaceChildren(
    // Close button in the top right corner of every dialog.
    el('button.dialog-x', { type: 'button', title: 'Close', 'aria-label': 'Close', onclick: () => dlg.close('') }, '×'),
    el('h2', {}, title),
    ...(Array.isArray(body) ? body.flat(Infinity) : [body]).filter(x => x !== null && x !== undefined && x !== false),
    el(`div.dialog-buttons${stack ? '.stack' : ''}`, {}, buttons.map(b =>
      el(`button.btn${b.primary ? '.primary' : ''}${b.cls || ''}`, { value: String(b.value) }, b.label))),
  );
  dlg.returnValue = '';
  // A click on the backdrop closes the dialog. Not right after opening:
  // the second click of a double-click would close it at once.
  const openedAt = Date.now();
  dlg.onclick = e => { if (e.target === dlg && Date.now() - openedAt > 500) dlg.close(''); };
  // The second click of the double-click that opened this dialog would land inside it.
  // Ignore it (click count 2 or more, right after opening), so it picks nothing.
  const swallow = e => { if (e.detail > 1 && Date.now() - openedAt < 700) { e.stopPropagation(); e.preventDefault(); } };
  // Its press would also select text: block that too, and clear any selection.
  const noSelect = e => { if (e.detail > 1 && Date.now() - openedAt < 700) e.preventDefault(); };
  dlg.addEventListener('click', swallow, true);
  dlg.addEventListener('mousedown', noSelect, true);
  dlg.addEventListener('dblclick', noSelect, true);
  setTimeout(() => window.getSelection()?.removeAllRanges(), 0);
  dlg.addEventListener('close', () => {
    dlg.removeEventListener('click', swallow, true);
    dlg.removeEventListener('mousedown', noSelect, true);
    dlg.removeEventListener('dblclick', noSelect, true);
  }, { once: true });
  dlg.showModal();
  return new Promise(resolve => {
    dlg.addEventListener('close', () => {
      const v = dlg.returnValue;
      const hit = buttons.find(b => String(b.value) === v);
      resolve(hit ? hit.value : null);
    }, { once: true });
  });
}

// Color for each person letter (A–L).
const PERSON_HUES = [0, 210, 120, 280, 35, 175, 330, 60, 250, 15, 145, 300];
export function personColor(letterIndex) {
  return `hsl(${PERSON_HUES[letterIndex % 12]} 65% 42%)`;
}

// Room hue: spread hues so neighbor rooms differ.
export function roomHue(theme, k) {
  return Math.round((theme.hue + k * 137.5) % 360);
}

// Line icons (stroke style).
const ICONS = {
  share: '<circle cx="6" cy="12" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="18" cy="18" r="3"/>' +
    '<line x1="8.6" y1="10.6" x2="15.4" y2="7.4"/><line x1="8.6" y1="13.4" x2="15.4" y2="16.6"/>',
  expand: '<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>',
  shrink: '<polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/>',
  reset: '<path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 3 3 9 9 9"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><line x1="15.5" y1="15.5" x2="21" y2="21"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  back: '<polyline points="15 18 9 12 15 6"/>',
  undo: '<polyline points="9 14 4 9 9 4"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>',
  redo: '<polyline points="15 14 20 9 15 4"/><path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"/>',
  copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
};
export function icon(name) {
  const span = el('span.icon', { 'aria-hidden': 'true' });
  span.innerHTML = `<svg viewBox="0 0 24 24">${ICONS[name]}</svg>`;
  return span;
}

// Copy text. Resolves true on success.
export async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; } catch { /* try the old way */ }
  const ta = el('textarea', { value: text, style: { position: 'fixed', opacity: '0' } });
  document.body.append(ta);
  ta.select();
  let ok = false;
  try { ok = document.execCommand('copy'); } catch { ok = false; }
  ta.remove();
  return ok;
}

// JSON <-> URL-safe base64.
export function encodeData(obj) {
  const bytes = new TextEncoder().encode(JSON.stringify(obj));
  let bin = '';
  bytes.forEach(b => { bin += String.fromCharCode(b); });
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
export function decodeData(text) {
  try {
    let b64 = text.replace(/-/g, '+').replace(/_/g, '/');
    while (b64.length % 4) b64 += '=';
    const bin = atob(b64);
    return JSON.parse(new TextDecoder().decode(Uint8Array.from(bin, ch => ch.charCodeAt(0))));
  } catch { return null; }
}

// App logo: a magnifying glass (handle to the left) with a puzzle piece in the lens.
const LOGO = `<svg viewBox="0 0 64 64" role="img" aria-label="Alibi Grid logo">
  <g class="lg-glass">
    <path class="lg-handle" d="M22.5 41.5 6 58"/>
    <circle class="lg-lens" cx="38" cy="26" r="21"/>
    <circle class="lg-shine" cx="38" cy="26" r="16.5"/>
  </g>
  <path class="lg-piece" transform="translate(12 0)" d="M14.5 14.5H21.4a4.6 4.6 0 1 1 9.2 0H37.5V21.4a4.6 4.6 0 1 1 0 9.2V37.5H30.6a4.6 4.6 0 1 0-9.2 0H14.5V30.6a4.6 4.6 0 1 0 0-9.2Z"/>
</svg>`;

// White sparkles on the glass frame and lens: [x, y, size, delay in s].
// They sit in their own group with the same motion as the glass,
// drawn above the puzzle piece.
const SPARKLES = [[51.5, 9.9, 6, 0], [18.3, 33.2, 4.5, 0.5], [45.2, 45.7, 3.8, 1], [30.8, 6.3, 3.4, 1.35], [29.5, 15.5, 3.6, 0.25], [47, 34, 3, 0.8], [45.5, 15, 2.4, 1.15]];
const star = ([x, y, r, d]) => `<path class="lg-spark" style="animation-delay:${d}s" d="M${x} ${y - r}Q${x} ${y} ${x + r} ${y}Q${x} ${y} ${x} ${y + r}Q${x} ${y} ${x - r} ${y}Q${x} ${y} ${x} ${y - r}Z"/>`;

// `roomy` adds space and sparkles around it, so the moving glass is never cut off.
export function logo(cls = '', roomy = false) {
  const span = el(`span.logo${cls}`, { 'aria-hidden': cls ? 'true' : null });
  span.innerHTML = roomy
    ? LOGO.replace('viewBox="0 0 64 64"', 'viewBox="-12 -12 88 88"')
      .replace('</svg>', `<g class="lg-glass lg-sparks">${SPARKLES.map(star).join('')}</g></svg>`)
    : LOGO;
  return span;
}
