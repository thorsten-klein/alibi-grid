// Campaign themes. Each theme has 12 rooms, its roles and its own objects.
// People are alliterations: "Name the role", both with the same first letter.
// Suspects get the letters A, B, C, … in order; the victim is always V.
// "spot" objects can be stood or sat on. Others block the cell.
// A theme may add special rules (see js/rules.js):
//   rules  the same rules for every case
//   mix    one list of rules per case instead
// floors: floor patterns for the rooms, used in turn (see css/style.css).

// Icons and names for the special rules. Shared by all themes.
export const RANKS = {
  noble: { icon: '⚜️', name: 'Noble' },
  knight: { icon: '🛡️', name: 'Knight' },
  commoner: { icon: '🌾', name: 'Commoner' },
};
export const COURT = { icon: '👑', name: 'court room' };
export const GLYPHS = {
  lone: { icon: '🌙', name: 'moon seal' },
  crowd: { icon: '☀️', name: 'sun seal' },
};
export const TRADES = [
  { id: 'hunter', icon: '🏹', name: 'Hunter' },
  { id: 'fisher', icon: '🎣', name: 'Fisher' },
  { id: 'toolmaker', icon: '🪓', name: 'Toolmaker' },
  { id: 'gatherer', icon: '🫐', name: 'Gatherer' },
  { id: 'healer', icon: '🌿', name: 'Healer' },
];
export const tradeById = id => TRADES.find(t => t.id === id);
export const SEA = { icon: '🌊' };
export const LAWFUL = { icon: '⭐', name: 'star room' };

export const THEMES = [
  {
    id: 'manor',
    floors: ['wood', 'carpet', 'herring', 'tile', 'stone', 'dots'],
    title: 'Blackwood Manor',
    tagline: 'A stormy weekend at an old country house.',
    icon: '🏰',
    hue: 30,
    rooms: ['Hall', 'Library', 'Study', 'Kitchen', 'Dining Room', 'Ballroom',
      'Conservatory', 'Billiard Room', 'Gallery', 'Pantry', 'Chapel', 'Cellar'],
    objects: {
      chair: { icon: '🪑', name: 'chair', spot: true, on: 'was sitting on a chair' },
      sofa: { icon: '🛋️', name: 'sofa', spot: true, on: 'was resting on a sofa' },
      shelf: { icon: '📚', name: 'bookshelf' },
      piano: { icon: '🎹', name: 'piano' },
      plant: { icon: '🪴', name: 'plant' },
      clock: { icon: '🕰️', name: 'grandfather clock' },
    },
    // Roles per letter. A case picks one first name and one role per letter.
    roles: {
      A: ['author', 'architect'],
      B: ['butler', 'banker'],
      C: ['cook', 'colonel'],
      D: ['doctor', 'dealer'],
      E: ['editor', 'envoy'],
      F: ['florist', 'footman'],
      G: ['gardener', 'guest'],
      H: ['heir', 'housekeeper'],
      I: ['illustrator', 'inspector'],
      J: ['jeweller', 'judge'],
      K: ['knitter', 'keeper'],
      V: ['valet', 'vicar'],
    },
  },
  {
    id: 'train',
    floors: ['carpet', 'wood', 'dots', 'metal', 'herring'],
    title: 'The Midnight Express',
    tagline: 'A sleeper train crossing the mountains at night.',
    icon: '🚂',
    hue: 215,
    rooms: ['Dining Car', 'Lounge Car', 'Sleeper A', 'Sleeper B', 'Baggage Car',
      'Observation Car', 'Galley', 'Bar Car', 'Mail Car', "Guard's Van", 'Sleeper C', 'Corridor'],
    objects: {
      seat: { icon: '💺', name: 'seat', spot: true, on: 'was sitting in a seat' },
      bunk: { icon: '🛏️', name: 'bunk', spot: true, on: 'was lying in a bunk' },
      suitcase: { icon: '🧳', name: 'suitcase' },
      crate: { icon: '📦', name: 'crate' },
      lamp: { icon: '🏮', name: 'lantern' },
      wine: { icon: '🍷', name: 'wine rack' },
    },
    // Roles per letter. A case picks one first name and one role per letter.
    roles: {
      A: ['attendant', 'accordionist'],
      B: ['bookseller', 'banker'],
      C: ['courier', 'conductor'],
      D: ['diplomat', 'dentist'],
      E: ['engineer', 'envoy'],
      F: ['fiddler', 'firefighter'],
      G: ['guard', 'governor'],
      H: ['hairdresser', 'hatter'],
      I: ['inspector', 'importer'],
      J: ['journalist', 'jockey'],
      K: ['knife grinder', 'kitchen hand'],
      V: ['violinist', 'vendor'],
    },
  },
  {
    id: 'space',
    floors: ['metal', 'tile', 'dots', 'carpet'],
    title: 'Station Kepler-9',
    tagline: 'Twelve crew members. One airlock. No way home.',
    icon: '🛰️',
    hue: 265,
    rooms: ['Bridge', 'Lab', 'Hydroponics', 'Airlock', 'Mess Hall', 'Med Bay',
      'Engine Room', 'Crew Quarters', 'Observatory', 'Cargo Bay', 'Comms', 'Gym'],
    objects: {
      seat: { icon: '💺', name: 'seat', spot: true, on: 'was strapped into a seat' },
      pod: { icon: '🛏️', name: 'sleep pod', spot: true, on: 'was in a sleep pod' },
      console: { icon: '🖥️', name: 'console' },
      scope: { icon: '🔬', name: 'microscope' },
      plant: { icon: '🌱', name: 'plant tray' },
      tank: { icon: '🛢️', name: 'fuel tank' },
    },
    // Roles per letter. A case picks one first name and one role per letter.
    roles: {
      A: ['astronaut', 'analyst'],
      B: ['biologist', 'botanist'],
      C: ['chemist', 'captain'],
      D: ['doctor', 'driller'],
      E: ['engineer', 'electrician'],
      F: ['farmer', 'flight officer'],
      G: ['geologist', 'gunner'],
      H: ['hacker', 'hull technician'],
      I: ['instructor', 'intern'],
      J: ['janitor', 'journalist'],
      K: ['keeper', 'kitchen chief'],
      V: ['volunteer', 'visitor'],
    },
  },
  {
    id: 'theater',
    floors: ['wood', 'carpet', 'herring', 'dots', 'tile'],
    title: 'Curtain Call',
    tagline: 'Opening night. The lead never takes a bow.',
    icon: '🎭',
    hue: 345,
    rooms: ['Stage', 'Wings', 'Orchestra Pit', 'Dressing Room', 'Green Room', 'Box Office',
      'Foyer', 'Prop Store', 'Costume Room', 'Balcony', 'Lighting Booth', 'Bar'],
    objects: {
      seat: { icon: '💺', name: 'seat', spot: true, on: 'was sitting in a seat' },
      sofa: { icon: '🛋️', name: 'sofa', spot: true, on: 'was lounging on a sofa' },
      piano: { icon: '🎹', name: 'piano' },
      mirror: { icon: '🪞', name: 'mirror' },
      rack: { icon: '👗', name: 'costume rack' },
      light: { icon: '💡', name: 'spotlight' },
    },
    // Roles per letter. A case picks one first name and one role per letter.
    roles: {
      A: ['author', 'agent'],
      B: ['baritone', 'bass player'],
      C: ['critic', 'choreographer'],
      D: ['director', 'dancer'],
      E: ['electrician', 'extra'],
      F: ['flautist', 'fan'],
      G: ['guitarist', 'ghost writer'],
      H: ['hairdresser', 'harpist'],
      I: ['impresario', 'illusionist'],
      J: ['juggler', 'jester'],
      K: ['keyboardist', 'kettle drummer'],
      V: ['violinist', 'ventriloquist'],
    },
  },
  {
    id: 'lodge',
    floors: ['wood', 'stone', 'carpet', 'herring', 'tile'],
    title: 'Snowbound Lodge',
    tagline: 'The pass is closed. The killer is still inside.',
    icon: '🏔️',
    hue: 190,
    rooms: ['Lobby', 'Fireside Lounge', 'Ski Room', 'Sauna', 'Kitchen', 'Dining Hall',
      'Bar', 'Suite', 'Games Room', 'Boot Room', 'Terrace', 'Spa'],
    objects: {
      chair: { icon: '🪑', name: 'chair', spot: true, on: 'was sitting on a chair' },
      sofa: { icon: '🛋️', name: 'sofa', spot: true, on: 'was resting on a sofa' },
      skis: { icon: '🎿', name: 'pair of skis' },
      fire: { icon: '🔥', name: 'fireplace' },
      tree: { icon: '🌲', name: 'pine tree' },
      wood: { icon: '🪵', name: 'woodpile' },
    },
    // Roles per letter. A case picks one first name and one role per letter.
    roles: {
      A: ['athlete', 'avalanche guard'],
      B: ['bartender', 'baker'],
      C: ['cook', 'climber'],
      D: ['doctor', 'driver'],
      E: ['explorer', 'engineer'],
      F: ['forester', 'fisher'],
      G: ['guide', 'glacier expert'],
      H: ['hotelier', 'hiker'],
      I: ['instructor', 'ice climber'],
      J: ['journalist', 'jogger'],
      K: ['kayaker', 'knitter'],
      V: ['vet', 'vlogger'],
    },
  },
  {
    id: 'castle',
    floors: ['stone', 'carpet', 'wood', 'tile', 'herring'],
    title: 'Ravenhold Castle',
    tagline: 'A royal feast. The taster never tasted dessert.',
    icon: '👑',
    hue: 50,
    rules: ['ranks'],
    rooms: ['Throne Room', 'Great Hall', 'Armory', 'Chapel', 'Kitchen', 'Stables',
      'Solar', 'Dungeon', 'Gatehouse', 'Tower', 'Smithy', 'Courtyard'],
    objects: {
      bench: { icon: '🪑', name: 'bench', spot: true, on: 'was sitting on a bench' },
      cot: { icon: '🛏️', name: 'straw bed', spot: true, on: 'was lying on a straw bed' },
      barrel: { icon: '🛢️', name: 'barrel' },
      candles: { icon: '🕯️', name: 'candle stand' },
      swords: { icon: '🗡️', name: 'weapon rack' },
      urn: { icon: '🏺', name: 'urn' },
    },
    // Roles per letter. A case picks one first name and one role per letter.
    roles: {
      A: ['archer', 'alchemist'],
      B: ['baker', 'bard'],
      C: ['cupbearer', 'chronicler'],
      D: ['dancer', 'doorkeeper'],
      E: ['envoy', 'embroiderer'],
      F: ['falconer', 'farrier'],
      G: ['groom', 'glassmaker'],
      H: ['herbalist', 'herald'],
      I: ['innkeeper', 'illuminator'],
      J: ['jester', 'juggler'],
      K: ['kennel keeper', 'keykeeper'],
      V: ['vintner', 'verger'],
    },
  },
  {
    id: 'tomb',
    floors: ['sand', 'stone', 'tile', 'dirt'],
    title: 'The Sand Tomb',
    tagline: 'The tomb was sealed for a reason.',
    icon: '🏜️',
    hue: 38,
    rules: ['glyphs'],
    rooms: ['Burial Chamber', 'Antechamber', 'Treasury', 'Shrine', 'Hall of Pillars', 'Workshop',
      'Granary', 'Scribe Room', 'Sun Court', 'Well Shaft', 'Statue Hall', 'Boat Pit'],
    objects: {
      stool: { icon: '🪑', name: 'stool', spot: true, on: 'was sitting on a stool' },
      couch: { icon: '🛏️', name: 'couch', spot: true, on: 'was lying on a couch' },
      urn: { icon: '⚱️', name: 'urn' },
      statue: { icon: '🗿', name: 'statue' },
      rubble: { icon: '🪨', name: 'pile of rubble' },
      jar: { icon: '🏺', name: 'jar' },
    },
    // Roles per letter. A case picks one first name and one role per letter.
    roles: {
      A: ['architect', 'astrologer'],
      B: ['brewer', 'boat builder'],
      C: ['chanter', 'carpenter'],
      D: ['diviner', 'dancer'],
      E: ['embalmer', 'envoy'],
      F: ['fanbearer', 'fisher'],
      G: ['guard', 'goldsmith'],
      H: ['harpist', 'herder'],
      I: ['inspector', 'incense maker'],
      J: ['jeweller', 'juggler'],
      K: ['keeper', 'kohl maker'],
      V: ['vizier', 'vintner'],
    },
  },
  {
    id: 'camp',
    floors: ['grass', 'dirt', 'stone', 'sand'],
    title: 'Ember Valley',
    tagline: 'The first cold night of the year. One fire went out.',
    icon: '🦣',
    hue: 15,
    rules: ['trades'],
    rooms: ['Cave', 'Fire Pit', 'River Bank', 'Hunting Ground', 'Berry Grove', 'Lookout Rock',
      'Flint Pit', 'Hide Tent', 'Elder Hut', 'Bone Yard', 'Spring', 'Painted Wall'],
    objects: {
      log: { icon: '🪵', name: 'log', spot: true, on: 'was sitting on a log' },
      leaves: { icon: '🍂', name: 'bed of leaves', spot: true, on: 'was lying on a bed of leaves' },
      boulder: { icon: '🪨', name: 'boulder' },
      fire: { icon: '🔥', name: 'fire' },
      tree: { icon: '🌳', name: 'tree' },
      bones: { icon: '🦴', name: 'pile of bones' },
    },
    // Roles per letter. A case picks one first name and one role per letter.
    roles: {
      A: ['artist', 'acrobat'],
      B: ['builder', 'beekeeper'],
      C: ['carrier', 'carver'],
      D: ['drummer', 'dancer'],
      E: ['elder', 'elk tamer'],
      F: ['firekeeper', 'flute player'],
      G: ['guard', 'grinder'],
      H: ['hornblower', 'hide tanner'],
      I: ['ice cutter', 'idol carver'],
      J: ['joker', 'jumper'],
      K: ['keeper', 'knot tier'],
      V: ['visionary', 'valley guide'],
    },
  },
  {
    id: 'gulch',
    floors: ['wood', 'dirt', 'sand', 'herring'],
    title: 'Dustwater Gulch',
    tagline: 'A town with one sheriff and too many outlaws.',
    icon: '🤠',
    hue: 25,
    rules: ['bandits'],
    rooms: ['Saloon', 'Bank', 'Sheriff Office', 'General Store', 'Livery', 'Hotel',
      'Jail', 'Barber', 'Church', 'Mine', 'Corral', 'Telegraph Office'],
    objects: {
      chair: { icon: '🪑', name: 'chair', spot: true, on: 'was sitting on a chair' },
      bed: { icon: '🛏️', name: 'bed', spot: true, on: 'was lying on a bed' },
      barrel: { icon: '🛢️', name: 'barrel' },
      cactus: { icon: '🌵', name: 'cactus' },
      piano: { icon: '🎹', name: 'piano' },
      horse: { icon: '🐎', name: 'horse' },
    },
    // Roles per letter. A case picks one first name and one role per letter.
    roles: {
      A: ['auctioneer', 'attorney'],
      B: ['banker', 'blacksmith'],
      C: ['cattle driver', 'cook'],
      D: ['dancer', 'deputy'],
      E: ['editor', 'engineer'],
      F: ['farrier', 'farmer'],
      G: ['gambler', 'gunsmith'],
      H: ['hatmaker', 'homesteader'],
      I: ['innkeeper', 'inventor'],
      J: ['jailer', 'judge'],
      K: ['knife thrower', 'keg maker'],
      V: ['vet', 'vaquero'],
    },
  },
  {
    id: 'reef',
    floors: ['wood', 'sand', 'herring', 'stone'],
    title: 'The Black Reef',
    tagline: 'Three ships, one treasure, and a body on deck.',
    icon: '🏴‍☠️',
    hue: 200,
    rules: ['sea'],
    seaName: 'Open Sea',
    rooms: ['Sloop', 'Brig', 'Galleon', 'Frigate', 'Tavern', 'Fort',
      'Cove', 'Lighthouse', 'Dock', 'Market', 'Sea Cave', 'Longboat'],
    objects: {
      stool: { icon: '🪑', name: 'stool', spot: true, on: 'was sitting on a stool' },
      hammock: { icon: '🛏️', name: 'hammock', spot: true, on: 'was lying in a hammock' },
      anchor: { icon: '⚓', name: 'anchor' },
      crate: { icon: '📦', name: 'crate' },
      map: { icon: '🗺️', name: 'map table' },
      cannon: { icon: '💣', name: 'pile of cannonballs' },
    },
    // Roles per letter. A case picks one first name and one role per letter.
    roles: {
      A: ['armorer', 'admiral'],
      B: ['boatswain', 'barkeep'],
      C: ['captain', 'cook'],
      D: ['deckhand', 'diver'],
      E: ['explorer', 'engineer'],
      F: ['first mate', 'fiddler'],
      G: ['gunner', 'gold digger'],
      H: ['harbor pilot', 'harpooner'],
      I: ['islander', 'island guide'],
      J: ['jailbird', 'jeweller'],
      K: ['knot maker', 'kettle cook'],
      V: ['voyager', 'vintner'],
    },
  },
  {
    id: 'rift',
    floors: ['stone', 'wood', 'sand', 'grass', 'carpet', 'metal'],
    title: 'The Time Rift',
    tagline: 'A crack in time. Every case mixes the old rules.',
    icon: '🌀',
    hue: 290,
    mix: [['ranks', 'glyphs'], ['trades', 'sea'], ['bandits', 'glyphs'], ['ranks', 'sea'],
      ['trades', 'bandits'], ['glyphs', 'sea'], ['ranks', 'trades'], ['bandits', 'sea'],
      ['ranks', 'glyphs', 'trades']],
    seaName: 'Sea of Ages',
    rooms: ['Throne Room', 'Saloon', 'Burial Chamber', 'Cave', 'Captain Cabin', 'Bank',
      'Shrine', 'Fire Pit', 'Fort', 'Great Hall', 'Hide Tent', 'Jail'],
    objects: {
      chair: { icon: '🪑', name: 'chair', spot: true, on: 'was sitting on a chair' },
      log: { icon: '🪵', name: 'log', spot: true, on: 'was sitting on a log' },
      statue: { icon: '🗿', name: 'statue' },
      barrel: { icon: '🛢️', name: 'barrel' },
      boulder: { icon: '🪨', name: 'boulder' },
      clock: { icon: '🕰️', name: 'clock' },
    },
    // Roles per letter. A case picks one first name and one role per letter.
    roles: {
      A: ['archivist', 'astronomer'],
      B: ['bard', 'bookbinder'],
      C: ['chronicler', 'clockmaker'],
      D: ['drifter', 'dreamer'],
      E: ['engineer', 'explorer'],
      F: ['fortune teller', 'falconer'],
      G: ['gladiator', 'guardian'],
      H: ['historian', 'herald'],
      I: ['inventor', 'illusionist'],
      J: ['jester', 'juggler'],
      K: ['keeper', 'kite maker'],
      V: ['voyager', 'visionary'],
    },
  },
];

// First names per letter, shared by all themes.
export const FIRST_NAMES = {
  A: ['Ada', 'Albert', 'Alma', 'Arthur', 'Astrid'],
  B: ['Bea', 'Bruno', 'Bella', 'Basil', 'Birgit'],
  C: ['Clara', 'Carl', 'Cora', 'Cedric', 'Celia'],
  D: ['Dora', 'Dexter', 'Daisy', 'Dmitri', 'Della'],
  E: ['Edith', 'Elias', 'Elsa', 'Edgar', 'Ena'],
  F: ['Freya', 'Felix', 'Fiona', 'Frank', 'Flora'],
  G: ['Greta', 'Gus', 'Gwen', 'Gideon', 'Grace'],
  H: ['Hilda', 'Hugo', 'Hazel', 'Henrik', 'Hana'],
  I: ['Ivy', 'Igor', 'Ines', 'Ivo', 'Isla'],
  J: ['Jade', 'Jasper', 'Juno', 'Jonas', 'Jutta'],
  K: ['Kitty', 'Klaus', 'Kira', 'Konrad', 'Kai'],
  V: ['Vera', 'Victor', 'Viola', 'Vince', 'Vivian'],
};
export const SUSPECT_LETTERS = 'ABCDEFGHIJK';

// Names for a case: suspects A, B, C, … in order, the victim V.
// pick(list) chooses one item. Returns one name per person.
export function castNames(theme, count, victim, pick) {
  let k = 0;
  return [...new Array(count).keys()].map(p => {
    const L = p === victim ? 'V' : SUSPECT_LETTERS[k++];
    return `${pick(FIRST_NAMES[L])} the ${pick(theme.roles[L])}`;
  });
}

export function themeById(id) {
  return THEMES.find(t => t.id === id);
}

export function blockingSet(theme) {
  return new Set(Object.entries(theme.objects).filter(([, o]) => !o.spot).map(([id]) => id));
}

const COLS = 'ABCDEFGHIJKL';
export const article = word => `${/^[aeiou]/i.test(word) ? 'an' : 'a'} ${word}`;
export const colName = c => COLS[c];

// Clue as plain text.
export function clueText(theme, level, clue) {
  const who = level.people[clue.p].name;
  const o = id => theme.objects[id];
  switch (clue.t) {
    case 'room': return `${who} was in the ${level.roomNames[clue.v]}.`;
    case 'notRoom': return `${who} was not in the ${level.roomNames[clue.v]}.`;
    case 'on': return `${who} ${o(clue.v).on}.`;
    case 'next': return `${who} was right next to ${article(o(clue.v).name)}.`;
    case 'row': return `${who} was in row ${clue.v + 1}.`;
    case 'col': return `${who} was in column ${colName(clue.v)}.`;
    case 'same': return `${who} was in the same room as ${level.people[clue.v].name}.`;
    case 'alone': return `${who} was alone in a room.`;
    case 'door': return `${who} was in front of a door.`;
    case 'window': return `${who} was in front of a window.`;
    case 'bandit': return `${who} was a bandit.`;
    case 'notBandit': return `${who} was not a bandit.`;
    case 'withBandit': return `${who} was in the same room as a bandit.`;
    case 'task': return `${who} was ${article(tradeById(clue.v).name.toLowerCase())}.`;
    case 'taskEither': return `${who} was ${article(tradeById(clue.v[0]).name.toLowerCase())} or ${article(tradeById(clue.v[1]).name.toLowerCase())}.`;
    case 'noTask': return `${who} had no task.`;
  }
  return '';
}

// One of three texts by a count: for 0, for 1, or for more.
function byCount(k, zero, one, many) {
  if (k === 0) return zero;
  if (k === 1) return one;
  return many;
}

// A case fact as plain text.
export function factText(theme, level, f) {
  const qty = (k, one, many) => byCount(k, `Nobody ${one}`, `Only one person ${one}`, `Exactly ${k} people ${many}`);
  const plural = text => text.replace(/^was /, 'were ');
  switch (f.t) {
    case 'onCount': { const on = theme.objects[f.v].on; return `${qty(f.k, on, plural(on))}.`; }
    case 'nextCount': { const t = `was right next to ${article(theme.objects[f.v].name)}`; return `${qty(f.k, t, plural(t))}.`; }
    case 'roomCount': { const t = `was in the ${level.roomNames[f.v]}`; return `${qty(f.k, t, plural(t))}.`; }
    case 'furniture': return `${qty(f.k, 'was on a piece of furniture', 'were on a piece of furniture')}.`;
    case 'edge': return `${qty(f.k, 'stood along the outer wall', 'stood along the outer wall')}.`;
    case 'corner': return `${qty(f.k, 'stood in a corner of a room', 'stood in a corner of a room')}.`;
    case 'doorCount': return `${qty(f.k, 'was in front of a door', 'were in front of a door')}.`;
    case 'windowCount': return `${qty(f.k, 'was in front of a window', 'were in front of a window')}.`;
    case 'alone': return `${qty(f.k, 'was alone in a room', 'were alone in a room')}.`;
    case 'emptyRooms': return byCount(f.k, 'No room was empty.', 'Exactly one room was empty.', `Exactly ${f.k} rooms were empty.`);
    case 'touch': return byCount(f.k, 'No two people in one room touched at a corner.', 'Exactly one pair of people in one room touched at a corner.',
      `Exactly ${f.k} pairs of people in one room touched at a corner.`);
    case 'task': {
      const t = tradeById(f.v);
      return f.k === 1 ? `There was exactly one ${t.name.toLowerCase()}.` : `There were exactly ${f.k} ${t.name.toLowerCase()}s.`;
    }
    case 'apart': return f.v === 'rank' ? 'No two people of the same rank were in the same room.' : 'No two people with the same trade were in the same room.';
  }
  return '';
}

// Rules a theme uses, over all its cases.
export function themeRules(theme) {
  if (theme.mix) return [...new Set(theme.mix.flat())];
  return theme.rules || [];
}

// Short text for each special rule. `level` adds case details.
export function ruleText(rule, level) {
  switch (rule) {
    case 'ranks': return `${COURT.icon} Ranks: ${RANKS.noble.icon} nobles stand in a court room. ` +
      `${RANKS.commoner.icon} Commoners never do. ${RANKS.knight.icon} Knights can be anywhere.`;
    case 'trades': return 'Trades: only a person with the matching trade may stand on a work spot ' +
      `(${TRADES.map(t => t.icon).join(' ')}). People with a trade may still stand anywhere else.`;
    case 'glyphs': return `Seals: on a ${GLYPHS.lone.icon} moon seal the person is alone in their room. ` +
      `On a ${GLYPHS.crowd.icon} sun seal they share their room with someone.`;
    case 'sea': return `${SEA.icon} Sea: the sea is not a room. Anyone in the sea is alone. Each ship is its own room.`;
    case 'tasks': return tasksText(level);
    case 'distance': return '↔️ Keep distance: no two people in one room touch, not even at a corner.';
    case 'fullhouse': return '🏠 Full house: every room holds at least one person. The sea does not count.';
    case 'couples': return couplesText(level);
    case 'river': return riverText(level);
    case 'parity': return '⚖️ Even & odd: a room marked "even" holds an even number of people (0 counts as even). A room marked "odd" holds an odd number.';
    case 'bandits': return banditsText(level);
  }
  return '';
}

// Rule texts with case details (level may be missing).
function tasksText(level) {
  const list = level?.tasks?.map(([id, k]) => {
    const t = tradeById(id);
    const s = k === 1 ? '' : 's';
    return `${k} ${t.icon} ${t.name.toLowerCase()}${s}`;
  });
  const counts = list ? `there were ${list.join(', ')}. ` : '';
  return `🧰 Tasks: ${counts}Tasks are hidden. Whoever stands on a task spot does that task. People without a task never stand on one.`;
}

function couplesText(level) {
  const pairs = level?.couples?.map(([p, q]) => `${level.people[p].name} and ${level.people[q].name}`);
  const who = pairs ? `${pairs.join('; ')} stand` : 'each couple stands';
  return `💞 Couples: ${who} diagonally next to each other, in the same room.`;
}

function riverText(level) {
  const rv = level?.river;
  if (!rv) return '🏞️ River: a river winds across the board. The case tells you how many people stand on each side.';
  const [a, b] = rv.dir === 'v' ? ['west (left)', 'east (right)'] : ['north (above)', 'south (below)'];
  const stand = rv.first === 1 ? 'person stands' : 'people stand';
  return `🏞️ River: ${rv.first} ${stand} ${a} of the river, ${level.people.length - rv.first} ${b}.`;
}

function banditsText(level) {
  const k = level?.bandits;
  const many = k === 1 ? 'person was a bandit' : 'people were bandits';
  const who = k ? `exactly ${k} ${many}` : 'some people were bandits';
  return `${LAWFUL.icon} Bandits: ${who}. ` +
    'Nobody tells you who. No bandit was in a star room. The victim was not a bandit. The murderer may be one.';
}
