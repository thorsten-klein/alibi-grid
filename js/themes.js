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
  {
    "id": "farm",
    "floors": [
      "wood",
      "grass",
      "dirt",
      "stone"
    ],
    "title": "Golden Acre Farm",
    "tagline": "Harvest season has arrived, but the farmer will not live to see the crop.",
    "icon": "🚜",
    "hue": 85,
    "rooms": [
      "Big Barn",
      "Milking Shed",
      "Grain Silo",
      "Farmhouse Kitchen",
      "Root Cellar",
      "Hayloft",
      "Tractor Garage",
      "Fruit Orchard",
      "Pig Pen",
      "Hen House",
      "Tool Shed",
      "Farmstand"
    ],
    "objects": {
      "bale": {
        "icon": "🌾",
        "name": "hay bale",
        "spot": true,
        "on": "was sitting on a hay bale"
      },
      "rocker": {
        "icon": "🪑",
        "name": "rocking chair",
        "spot": true,
        "on": "was resting on a rocking chair"
      },
      "tractor": {
        "icon": "🚜",
        "name": "tractor"
      },
      "scarecrow": {
        "icon": "🌽",
        "name": "scarecrow"
      },
      "churn": {
        "icon": "🥛",
        "name": "milk churn"
      },
      "anvil": {
        "icon": "🔨",
        "name": "anvil"
      }
    },
    "roles": {
      "A": [
        "apple picker",
        "agronomist"
      ],
      "B": [
        "beekeeper",
        "barn hand"
      ],
      "C": [
        "cattle rancher",
        "cider presser"
      ],
      "D": [
        "dairy maid",
        "ditcher"
      ],
      "E": [
        "equipment operator",
        "entomologist"
      ],
      "F": [
        "farmer",
        "farrier"
      ],
      "G": [
        "grain miller",
        "greenhouse tender"
      ],
      "H": [
        "harvester",
        "horse trainer"
      ],
      "I": [
        "inspector",
        "irrigation worker"
      ],
      "J": [
        "jam maker",
        "jumper trainer"
      ],
      "K": [
        "kennel master",
        "knife sharpener"
      ],
      "V": [
        "vineyard leaseholder",
        "veterinarian"
      ]
    }
  },
  {
    "id": "atoll",
    "floors": [
      "sand",
      "wood",
      "tile",
      "dots"
    ],
    "title": "Paradise Atoll",
    "tagline": "All-inclusive luxury. One guest checked in and will never check out.",
    "icon": "🌺",
    "hue": 175,
    "rooms": [
      "Open Beach",
      "Overwater Bungalow",
      "Tiki Bar",
      "Infinity Pool",
      "Spa Pavilion",
      "Dive Shop",
      "Coral Lagoon",
      "Coconut Grove",
      "Reception Lobby",
      "Luau Grounds",
      "Yacht Marina",
      "Staff Quarters"
    ],
    "objects": {
      "towel": {
        "icon": "🏖️",
        "name": "beach towel",
        "spot": true,
        "on": "was sunbathing on a towel"
      },
      "hammock": {
        "icon": "🌴",
        "name": "hammock",
        "spot": true,
        "on": "was relaxing in a hammock"
      },
      "surfboard": {
        "icon": "🏄",
        "name": "surfboard rack"
      },
      "idol": {
        "icon": "🗿",
        "name": "tiki idol"
      },
      "jetski": {
        "icon": "🚤",
        "name": "jet ski"
      },
      "cart": {
        "icon": "🍹",
        "name": "cocktail cart"
      }
    },
    "roles": {
      "A": [
        "activities director",
        "animator"
      ],
      "B": [
        "bartender",
        "boat captain"
      ],
      "C": [
        "concierge",
        "chef"
      ],
      "D": [
        "divemaster",
        "disc jockey"
      ],
      "E": [
        "excursion guide",
        "entertainer"
      ],
      "F": [
        "fitness coach",
        "fire dancer"
      ],
      "G": [
        "guest of honor",
        "golf pro"
      ],
      "H": [
        "hotel manager",
        "housekeeper"
      ],
      "I": [
        "island pilot",
        "instructor"
      ],
      "J": [
        "jet ski renter",
        "jeweller"
      ],
      "K": [
        "kayak instructor",
        "kitchen hand"
      ],
      "V": [
        "vacationer",
        "vip influencer"
      ]
    }
  },
  {
    "id": "speakeasy",
    "floors": [
      "wood",
      "carpet",
      "tile",
      "herring"
    ],
    "title": "The Velvet Speakeasy",
    "tagline": "Prohibition Chicago. Jazz, gin, and a silenced pistol in the dark.",
    "icon": "🍸",
    "hue": 42,
    "rooms": [
      "Tailor Front",
      "Hidden Alleyway",
      "Main Lounge",
      "Jazz Stage",
      "Distillery",
      "Private Booths",
      "VIP Poker Den",
      "Bar Counter",
      "Cold Storage",
      "Safe Room",
      "Coat Check",
      "Manager Office"
    ],
    "objects": {
      "booth": {
        "icon": "🛋️",
        "name": "velvet booth",
        "spot": true,
        "on": "was sitting in a velvet booth"
      },
      "stool": {
        "icon": "🪑",
        "name": "bar stool",
        "spot": true,
        "on": "was perched on a bar stool"
      },
      "sax": {
        "icon": "🎷",
        "name": "saxophone stand"
      },
      "cask": {
        "icon": "🪵",
        "name": "whiskey cask"
      },
      "roulette": {
        "icon": "🎰",
        "name": "roulette table"
      },
      "safe": {
        "icon": "🗄️",
        "name": "iron safe"
      }
    },
    "roles": {
      "A": [
        "accordionist",
        "attorney"
      ],
      "B": [
        "bartender",
        "bootlegger"
      ],
      "C": [
        "crooner",
        "card sharp"
      ],
      "D": [
        "drummer",
        "distiller"
      ],
      "E": [
        "enforcer",
        "emcee"
      ],
      "F": [
        "flapper",
        "forger"
      ],
      "G": [
        "gangster",
        "gun runner"
      ],
      "H": [
        "horn player",
        "hat check girl"
      ],
      "I": [
        "informant",
        "inspector"
      ],
      "J": [
        "jazz pianist",
        "journalist"
      ],
      "K": [
        "kingpin",
        "key keeper"
      ],
      "V": [
        "voice of syndicate",
        "valued patron"
      ]
    }
  },
  {
    "id": "circus",
    "floors": [
      "dirt",
      "carpet",
      "wood",
      "dots"
    ],
    "title": "Circus Fantastico",
    "tagline": "Under the big top, the clown smile hides a deadly secret.",
    "icon": "🎪",
    "hue": 350,
    "rooms": [
      "Big Top",
      "Ringmaster Wagon",
      "Menagerie Tent",
      "Trapeze Rig",
      "Dressing Trailer",
      "Fortune Tent",
      "Prop Tent",
      "Ticket Booth",
      "Funhouse",
      "Carousel",
      "Sideshow Alley",
      "Hay Barn"
    ],
    "objects": {
      "chair": {
        "icon": "🪑",
        "name": "folding chair",
        "spot": true,
        "on": "was sitting on a folding chair"
      },
      "mat": {
        "icon": "🛏️",
        "name": "acrobat mat",
        "spot": true,
        "on": "was resting on a tumble mat"
      },
      "cannon": {
        "icon": "💣",
        "name": "cannon"
      },
      "cage": {
        "icon": "🦁",
        "name": "lion cage"
      },
      "trunk": {
        "icon": "🎪",
        "name": "juggling trunk"
      },
      "crystal": {
        "icon": "🔮",
        "name": "crystal ball table"
      }
    },
    "roles": {
      "A": [
        "acrobat",
        "animal tamer"
      ],
      "B": [
        "barker",
        "balloon artist"
      ],
      "C": [
        "clown",
        "contortionist"
      ],
      "D": [
        "daredevil",
        "drummer"
      ],
      "E": [
        "escape artist",
        "electrician"
      ],
      "F": [
        "fire eater",
        "fortune teller"
      ],
      "G": [
        "giant",
        "gymnast"
      ],
      "H": [
        "hypnotist",
        "horse trickster"
      ],
      "I": [
        "illusionist",
        "iron jaw"
      ],
      "J": [
        "juggler",
        "jester"
      ],
      "K": [
        "knife thrower",
        "key holder"
      ],
      "V": [
        "ventriloquist",
        "veteran ringmaster"
      ]
    }
  },
  {
    "id": "liner",
    "floors": [
      "carpet",
      "wood",
      "tile",
      "herring"
    ],
    "title": "The Grand Empress",
    "tagline": "Four days from Southampton to New York. One passenger lost at sea.",
    "icon": "🚢",
    "hue": 210,
    "rooms": [
      "Grand Ballroom",
      "First Class Lounge",
      "Bridge",
      "Telegraph Cabin",
      "Promenade Deck",
      "Galley",
      "Boiler Room",
      "Turkish Bath",
      "Dining Saloon",
      "Library",
      "Stateroom A",
      "Steerage Quarters"
    ],
    "objects": {
      "deckchair": {
        "icon": "💺",
        "name": "deckchair",
        "spot": true,
        "on": "was lounging on a deckchair"
      },
      "berth": {
        "icon": "🛏️",
        "name": "cabin berth",
        "spot": true,
        "on": "was lying in a cabin berth"
      },
      "piano": {
        "icon": "🎹",
        "name": "grand piano"
      },
      "lifeboat": {
        "icon": "🛶",
        "name": "lifeboat"
      },
      "telegraph": {
        "icon": "🧭",
        "name": "ship telegraph"
      },
      "luggage": {
        "icon": "🧳",
        "name": "luggage stack"
      }
    },
    "roles": {
      "A": [
        "admiral",
        "aristocrat"
      ],
      "B": [
        "boatswain",
        "bartender"
      ],
      "C": [
        "captain",
        "chief engineer"
      ],
      "D": [
        "deckhand",
        "doctor"
      ],
      "E": [
        "electrician",
        "envoy"
      ],
      "F": [
        "first mate",
        "fireman"
      ],
      "G": [
        "guest of honor",
        "governess"
      ],
      "H": [
        "helmsman",
        "heiress"
      ],
      "I": [
        "immigrant",
        "inspector"
      ],
      "J": [
        "journalist",
        "jeweller"
      ],
      "K": [
        "kitchen chief",
        "kettle tender"
      ],
      "V": [
        "voyage sponsor",
        "valet"
      ]
    }
  },
  {
    "id": "studio",
    "floors": [
      "wood",
      "carpet",
      "tile",
      "metal"
    ],
    "title": "Silver Screen Studios",
    "tagline": "Hollywood, 1952. The starlet collapsed before the final cut.",
    "icon": "🎬",
    "hue": 48,
    "rooms": [
      "Soundstage A",
      "Director Trailer",
      "Wardrobe Vault",
      "Green Room",
      "Editing Suite",
      "Makeup Room",
      "Prop Armory",
      "Writers Room",
      "Screening Room",
      "Studio Commissary",
      "Sound Booth",
      "Catwalk"
    ],
    "objects": {
      "chair": {
        "icon": "💺",
        "name": "director chair",
        "spot": true,
        "on": "was seated in a director chair"
      },
      "couch": {
        "icon": "🛋️",
        "name": "makeup couch",
        "spot": true,
        "on": "was relaxing on a makeup couch"
      },
      "camera": {
        "icon": "🎥",
        "name": "studio camera"
      },
      "boom": {
        "icon": "🎙️",
        "name": "boom microphone"
      },
      "trunk": {
        "icon": "👗",
        "name": "costume trunk"
      },
      "light": {
        "icon": "💡",
        "name": "spotlight tower"
      }
    },
    "roles": {
      "A": [
        "actor",
        "assistant director"
      ],
      "B": [
        "boom operator",
        "body double"
      ],
      "C": [
        "cinematographer",
        "choreographer"
      ],
      "D": [
        "director",
        "diva"
      ],
      "E": [
        "editor",
        "extra"
      ],
      "F": [
        "focus puller",
        "fashion designer"
      ],
      "G": [
        "grip",
        "gaffer"
      ],
      "H": [
        "hairdresser",
        "headliner"
      ],
      "I": [
        "ingenue",
        "intimacy coordinator"
      ],
      "J": [
        "journalist",
        "juvenile lead"
      ],
      "K": [
        "key grip",
        "kitchen caterer"
      ],
      "V": [
        "voice actor",
        "veteran producer"
      ]
    }
  },
  {
    "id": "museum",
    "floors": [
      "stone",
      "tile",
      "carpet",
      "herring"
    ],
    "title": "The Antiquities Museum",
    "tagline": "The midnight heist was flawless. The murder was not in the plan.",
    "icon": "🏛️",
    "hue": 30,
    "rooms": [
      "Grand Rotunda",
      "Egyptian Wing",
      "Greek Antiquities",
      "Restoration Lab",
      "Security Control",
      "Curator Study",
      "Vault",
      "Gift Shop",
      "Sculpture Court",
      "Medieval Hall",
      "Boiler Cellar",
      "Loading Bay"
    ],
    "objects": {
      "bench": {
        "icon": "🪑",
        "name": "marble bench",
        "spot": true,
        "on": "was resting on a marble bench"
      },
      "cot": {
        "icon": "🛏️",
        "name": "guard cot",
        "spot": true,
        "on": "was resting on a guard cot"
      },
      "sarcophagus": {
        "icon": "⚱️",
        "name": "sarcophagus"
      },
      "statue": {
        "icon": "🗿",
        "name": "classical statue"
      },
      "display": {
        "icon": "💎",
        "name": "display case"
      },
      "turnstile": {
        "icon": "🚧",
        "name": "turnstile"
      }
    },
    "roles": {
      "A": [
        "archaeologist",
        "archivist"
      ],
      "B": [
        "benefactor",
        "bookkeeper"
      ],
      "C": [
        "curator",
        "conservator"
      ],
      "D": [
        "director",
        "docent"
      ],
      "E": [
        "egyptologist",
        "evaluator"
      ],
      "F": [
        "forger",
        "floor warden"
      ],
      "G": [
        "guard",
        "goldsmith"
      ],
      "H": [
        "historian",
        "heist mastermind"
      ],
      "I": [
        "intern",
        "iconographer"
      ],
      "J": [
        "janitor",
        "jeweller"
      ],
      "K": [
        "key master",
        "keepsake seller"
      ],
      "V": [
        "valuer",
        "visiting donor"
      ]
    }
  },
  {
    "id": "vineyard",
    "floors": [
      "stone",
      "wood",
      "dirt",
      "herring"
    ],
    "title": "Chateau Vignoble",
    "tagline": "A century-old vintage is uncorked. A deadly poison is poured.",
    "icon": "🍷",
    "hue": 330,
    "rooms": [
      "Tasting Salon",
      "Fermentation Hall",
      "Oak Barrel Cellar",
      "Grape Press",
      "Manor Terrace",
      "Master Bedroom",
      "Bottling Line",
      "Manor Library",
      "Wine Cave",
      "Kitchen",
      "Vineyard Plot",
      "Gatehouse"
    ],
    "objects": {
      "chair": {
        "icon": "🪑",
        "name": "tasting chair",
        "spot": true,
        "on": "was seated at a tasting chair"
      },
      "bench": {
        "icon": "🪑",
        "name": "terrace bench",
        "spot": true,
        "on": "was resting on a terrace bench"
      },
      "barrel": {
        "icon": "🪵",
        "name": "oak wine barrel"
      },
      "press": {
        "icon": "🍇",
        "name": "grape press"
      },
      "rack": {
        "icon": "🍷",
        "name": "bottle rack"
      },
      "still": {
        "icon": "🛢️",
        "name": "copper still"
      }
    },
    "roles": {
      "A": [
        "agronomist",
        "apprentice"
      ],
      "B": [
        "barrel cooper",
        "bottler"
      ],
      "C": [
        "cellar master",
        "cook"
      ],
      "D": [
        "distributor",
        "driver"
      ],
      "E": [
        "estate manager",
        "enologist"
      ],
      "F": [
        "field laborer",
        "fermenter"
      ],
      "G": [
        "grape picker",
        "groundskeeper"
      ],
      "H": [
        "harvest coordinator",
        "hostess"
      ],
      "I": [
        "importer",
        "inspector"
      ],
      "J": [
        "jug filler",
        "journalist"
      ],
      "K": [
        "kitchen chief",
        "keg cooper"
      ],
      "V": [
        "vintner",
        "vineyard owner"
      ]
    }
  },
  {
    "id": "sanatorium",
    "floors": [
      "tile",
      "stone",
      "dots",
      "carpet"
    ],
    "title": "St. Jude Sanatorium",
    "tagline": "Behind locked ward doors, the cure was deadlier than the disease.",
    "icon": "🏥",
    "hue": 160,
    "rooms": [
      "Reception Hall",
      "Pharmacy",
      "Ward A",
      "Ward B",
      "Operating Theater",
      "Morgue",
      "Doctor Office",
      "Hydrotherapy Room",
      "Solarium",
      "Records Archive",
      "Boiler Room",
      "Kitchen"
    ],
    "objects": {
      "wheelchair": {
        "icon": "🦼",
        "name": "wheelchair",
        "spot": true,
        "on": "was seated in a wheelchair"
      },
      "bed": {
        "icon": "🛏️",
        "name": "hospital bed",
        "spot": true,
        "on": "was resting in a hospital bed"
      },
      "cabinet": {
        "icon": "💊",
        "name": "medicine cabinet"
      },
      "cart": {
        "icon": "🧪",
        "name": "anesthesia cart"
      },
      "xray": {
        "icon": "☢️",
        "name": "x-ray machine"
      },
      "archive": {
        "icon": "🗄️",
        "name": "filing cabinet"
      }
    },
    "roles": {
      "A": [
        "anesthetist",
        "attendant"
      ],
      "B": [
        "biochemist",
        "bacteriologist"
      ],
      "C": [
        "chief surgeon",
        "caregiver"
      ],
      "D": [
        "doctor",
        "dentist"
      ],
      "E": [
        "epidemiologist",
        "examiner"
      ],
      "F": [
        "first responder",
        "forensic pathologist"
      ],
      "G": [
        "groundskeeper",
        "gerontologist"
      ],
      "H": [
        "head nurse",
        "hospitalier"
      ],
      "I": [
        "intern",
        "inspector"
      ],
      "J": [
        "janitor",
        "journalist"
      ],
      "K": [
        "kinship visitor",
        "kitchen aide"
      ],
      "V": [
        "victim of illness",
        "visiting superintendent"
      ]
    }
  },
  {
    "id": "casino",
    "floors": [
      "carpet",
      "tile",
      "wood",
      "herring"
    ],
    "title": "Neon Fortune Casino",
    "tagline": "The house always wins. Except tonight, in the high-stakes suite.",
    "icon": "🎰",
    "hue": 280,
    "rooms": [
      "Main Casino Floor",
      "High Roller Lounge",
      "Cashier Cage",
      "Security Surveillance",
      "The Vault",
      "Penthouse Suite",
      "Rooftop Pool",
      "Showgirl Dressing Room",
      "Cocktail Bar",
      "Kitchen",
      "Parking Garage",
      "Valet Booth"
    ],
    "objects": {
      "stool": {
        "icon": "💺",
        "name": "gaming stool",
        "spot": true,
        "on": "was perched on a gaming stool"
      },
      "chaise": {
        "icon": "🛋️",
        "name": "vip chaise",
        "spot": true,
        "on": "was lounging on a vip chaise"
      },
      "wheel": {
        "icon": "🎡",
        "name": "roulette wheel"
      },
      "slots": {
        "icon": "🎰",
        "name": "slot machine"
      },
      "safe": {
        "icon": "💰",
        "name": "cash safe"
      },
      "table": {
        "icon": "🃏",
        "name": "card table"
      }
    },
    "roles": {
      "A": [
        "accountant",
        "armored driver"
      ],
      "B": [
        "baccarat dealer",
        "bartender"
      ],
      "C": [
        "croupier",
        "casino manager"
      ],
      "D": [
        "dice inspector",
        "dancer"
      ],
      "E": [
        "entertainer",
        "electrician"
      ],
      "F": [
        "floor manager",
        "fixer"
      ],
      "G": [
        "gambler",
        "guard"
      ],
      "H": [
        "high roller",
        "hostess"
      ],
      "I": [
        "investigator",
        "illusionist"
      ],
      "J": [
        "janitor",
        "jockey"
      ],
      "K": [
        "kitchen hand",
        "key holder"
      ],
      "V": [
        "vip gambler",
        "vegas mogul"
      ]
    }
  },
  {
    "id": "biolab",
    "floors": [
      "metal",
      "tile",
      "dots",
      "stone"
    ],
    "title": "Apex Bio-Labs",
    "tagline": "Sub-level 4 is on lockdown. The pathogen was not an accident.",
    "icon": "🔬",
    "hue": 120,
    "rooms": [
      "Cleanroom 1",
      "Cleanroom 2",
      "Centrifuge Bay",
      "Chemical Vault",
      "Cryo Storage",
      "Decon Airlock",
      "Control Center",
      "Specimen Nursery",
      "Server Farm",
      "Breakroom",
      "Autopsy Suite",
      "Generator Core"
    ],
    "objects": {
      "stool": {
        "icon": "🪑",
        "name": "lab stool",
        "spot": true,
        "on": "was seated on a lab stool"
      },
      "pod": {
        "icon": "🛏️",
        "name": "sleep pod",
        "spot": true,
        "on": "was resting in a sleep pod"
      },
      "hood": {
        "icon": "🧪",
        "name": "fume hood"
      },
      "chamber": {
        "icon": "❄️",
        "name": "cryogenic chamber"
      },
      "centrifuge": {
        "icon": "🌀",
        "name": "centrifuge"
      },
      "rack": {
        "icon": "🖥️",
        "name": "server rack"
      }
    },
    "roles": {
      "A": [
        "analyst",
        "algorithm engineer"
      ],
      "B": [
        "biochemist",
        "bioethicist"
      ],
      "C": [
        "chief scientist",
        "cryo technician"
      ],
      "D": [
        "dna sequencer",
        "data architect"
      ],
      "E": [
        "epidemiologist",
        "ecologist"
      ],
      "F": [
        "facility director",
        "forensic chemist"
      ],
      "G": [
        "geneticist",
        "guard"
      ],
      "H": [
        "hazard responder",
        "hardware tech"
      ],
      "I": [
        "intern",
        "immunologist"
      ],
      "J": [
        "janitor",
        "junior researcher"
      ],
      "K": [
        "keycard admin",
        "kinetic specialist"
      ],
      "V": [
        "virology head",
        "venture backer"
      ]
    }
  },
  {
    "id": "pier",
    "floors": [
      "wood",
      "sand",
      "dirt",
      "dots"
    ],
    "title": "Wonderland Pier",
    "tagline": "The carnival closed ten years ago. Tonight, the carousel spun once more.",
    "icon": "🎡",
    "hue": 15,
    "rooms": [
      "Ghost Train",
      "Carousel Pavilion",
      "Hall of Mirrors",
      "Arcade Alley",
      "Coaster Shed",
      "Boardwalk Plankway",
      "Cotton Candy Stand",
      "Fortune Booth",
      "Ferris Wheel Base",
      "Pier Edge",
      "Maintenance Hut",
      "Souvenir Shack"
    ],
    "objects": {
      "bench": {
        "icon": "🪑",
        "name": "pier bench",
        "spot": true,
        "on": "was sitting on a pier bench"
      },
      "cart": {
        "icon": "🏎️",
        "name": "bumper car",
        "spot": true,
        "on": "was sitting in a bumper car"
      },
      "horse": {
        "icon": "🎠",
        "name": "carousel horse"
      },
      "claw": {
        "icon": "🕹️",
        "name": "claw machine"
      },
      "automaton": {
        "icon": "🔮",
        "name": "fortune automaton"
      },
      "generator": {
        "icon": "⚙️",
        "name": "broken generator"
      }
    },
    "roles": {
      "A": [
        "arcade repairman",
        "antiquarian"
      ],
      "B": [
        "boardwalk walker",
        "barker"
      ],
      "C": [
        "caretaker",
        "cotton candy vendor"
      ],
      "D": [
        "drifter",
        "daredevil"
      ],
      "E": [
        "electrician",
        "urban explorer"
      ],
      "F": [
        "fortune teller",
        "fisherman"
      ],
      "G": [
        "ghost hunter",
        "groundskeeper"
      ],
      "H": [
        "historian",
        "hobo"
      ],
      "I": [
        "investigator",
        "insurer"
      ],
      "J": [
        "juggler",
        "junk dealer"
      ],
      "K": [
        "key keeper",
        "kayaker"
      ],
      "V": [
        "vagrant",
        "venture developer"
      ]
    }
  },
  {
    "id": "sub",
    "floors": [
      "metal",
      "dots",
      "tile",
      "stone"
    ],
    "title": "The Abyssal Trench",
    "tagline": "Five thousand meters deep. Hull creaking. Oxygen dropping. One body.",
    "icon": "🌊",
    "hue": 195,
    "rooms": [
      "Conning Tower",
      "Sonar Room",
      "Pilot Cockpit",
      "Hydrothermal Lab",
      "Pressure Airlock",
      "Galley",
      "Crew Quarters",
      "Ballast Control",
      "Reactor Chamber",
      "Specimen Bay",
      "Torpedo Tube",
      "Observation Dome"
    ],
    "objects": {
      "seat": {
        "icon": "💺",
        "name": "pilot seat",
        "spot": true,
        "on": "was strapped into a pilot seat"
      },
      "bunk": {
        "icon": "🛏️",
        "name": "crew bunk",
        "spot": true,
        "on": "was resting in a crew bunk"
      },
      "sonar": {
        "icon": "📻",
        "name": "sonar console"
      },
      "tank": {
        "icon": "🛢️",
        "name": "oxygen tank"
      },
      "valve": {
        "icon": "⚙️",
        "name": "pressure valve"
      },
      "freezer": {
        "icon": "🧊",
        "name": "specimen freezer"
      }
    },
    "roles": {
      "A": [
        "aquanaut",
        "acoustic analyst"
      ],
      "B": [
        "bathymetry tech",
        "biologist"
      ],
      "C": [
        "captain",
        "chief diver"
      ],
      "D": [
        "drill operator",
        "doctor"
      ],
      "E": [
        "electrical engineer",
        "environmentalist"
      ],
      "F": [
        "first officer",
        "flight pilot"
      ],
      "G": [
        "geochemist",
        "gyro tech"
      ],
      "H": [
        "hydrophone operator",
        "helmsman"
      ],
      "I": [
        "instrument tech",
        "intern"
      ],
      "J": [
        "junior officer",
        "journeyman"
      ],
      "K": [
        "kitchen chief",
        "kinetic engineer"
      ],
      "V": [
        "vessel designer",
        "vip expedition funder"
      ]
    }
  },
  {
    "id": "paddock",
    "floors": [
      "tile",
      "metal",
      "stone",
      "carpet"
    ],
    "title": "Monaco Grand Prix",
    "tagline": "Lap 78. The championship favorite crashed, but the fuel line was cut in the pit.",
    "icon": "🏎️",
    "hue": 0,
    "rooms": [
      "Pit Lane",
      "Team Garage A",
      "Team Garage B",
      "Telemetry Room",
      "Hospitality Suite",
      "VIP Balcony",
      "Tire Bay",
      "Scrutineering Shed",
      "Fuel Storage",
      "Media Center",
      "Drivers Lounge",
      "Paddock Walkway"
    ],
    "objects": {
      "bucket": {
        "icon": "💺",
        "name": "racing bucket seat",
        "spot": true,
        "on": "was sitting in a racing bucket seat"
      },
      "sofa": {
        "icon": "🛋️",
        "name": "lounge sofa",
        "spot": true,
        "on": "was relaxing on a lounge sofa"
      },
      "chassis": {
        "icon": "🏎️",
        "name": "race car chassis"
      },
      "tires": {
        "icon": "🛞",
        "name": "tire stack"
      },
      "fuelrig": {
        "icon": "⛽",
        "name": "fuel rig"
      },
      "toolbox": {
        "icon": "🧰",
        "name": "tool cabinet"
      }
    },
    "roles": {
      "A": [
        "aerodynamicist",
        "apprentice"
      ],
      "B": [
        "brake tech",
        "broadcast commentator"
      ],
      "C": [
        "chief mechanic",
        "crew chief"
      ],
      "D": [
        "driver",
        "data telemetry lead"
      ],
      "E": [
        "engine tuner",
        "electrician"
      ],
      "F": [
        "fuel specialist",
        "flag marshal"
      ],
      "G": [
        "gearbox tech",
        "grid coordinator"
      ],
      "H": [
        "head of team",
        "hospitality host"
      ],
      "I": [
        "inspector",
        "international steward"
      ],
      "J": [
        "journalist",
        "jack operator"
      ],
      "K": [
        "karting prodigy",
        "kitchen chef"
      ],
      "V": [
        "veteran champion",
        "vip team owner"
      ]
    }
  },
  {
    "id": "kitchen",
    "floors": [
      "tile",
      "metal",
      "stone",
      "herring"
    ],
    "title": "Le Festin Royal",
    "tagline": "Three Michelin stars. The critic took one bite of soup and hit the floor.",
    "icon": "🍳",
    "hue": 20,
    "rooms": [
      "Main Dining Room",
      "Plating Line",
      "Pastry Kitchen",
      "Wine Cellar",
      "Saute Station",
      "Walk In Cooler",
      "Dishwashing Pit",
      "Chef Private Office",
      "Butcher Larder",
      "Herb Garden",
      "Hostess Foyer",
      "Staff Locker"
    ],
    "objects": {
      "stool": {
        "icon": "🪑",
        "name": "kitchen stool",
        "spot": true,
        "on": "was seated on a kitchen stool"
      },
      "banquette": {
        "icon": "🛋️",
        "name": "dining banquette",
        "spot": true,
        "on": "was sitting in a plush booth"
      },
      "cooktop": {
        "icon": "🍳",
        "name": "copper cooktop"
      },
      "block": {
        "icon": "🪵",
        "name": "butcher block"
      },
      "espresso": {
        "icon": "☕",
        "name": "espresso machine"
      },
      "fridge": {
        "icon": "🧊",
        "name": "industrial fridge"
      }
    },
    "roles": {
      "A": [
        "apprentice chef",
        "appetizer cook"
      ],
      "B": [
        "baker",
        "butcher"
      ],
      "C": [
        "chef de cuisine",
        "chocolatier"
      ],
      "D": [
        "dishwasher",
        "dessert chef"
      ],
      "E": [
        "expediter",
        "executive chef"
      ],
      "F": [
        "fishmonger",
        "fromager"
      ],
      "G": [
        "garde manger",
        "grill cook"
      ],
      "H": [
        "host",
        "head sommelier"
      ],
      "I": [
        "inspector",
        "inventory manager"
      ],
      "J": [
        "junior cook",
        "jam maker"
      ],
      "K": [
        "kitchen porter",
        "knife sharpener"
      ],
      "V": [
        "vip dining critic",
        "veteran restaurateur"
      ]
    }
  },
  {
    "id": "abbey",
    "floors": [
      "stone",
      "tile",
      "wood",
      "carpet"
    ],
    "title": "Blackbriar Abbey",
    "tagline": "Matins bell rang at midnight. The abbot was found murdered before the altar.",
    "icon": "🕯️",
    "hue": 45,
    "rooms": [
      "Abbey Church",
      "Scriptorium",
      "Cloister Walk",
      "Chapter House",
      "Refectory",
      "Cellar",
      "Herb Garden",
      "Infirmary",
      "Bell Tower",
      "Prior Cell",
      "Dormitory",
      "Crypt"
    ],
    "objects": {
      "stall": {
        "icon": "💺",
        "name": "choir stall",
        "spot": true,
        "on": "was praying in a wooden stall"
      },
      "palliasse": {
        "icon": "🛏️",
        "name": "straw bed",
        "spot": true,
        "on": "was kneeling on a straw bed"
      },
      "altar": {
        "icon": "⛪",
        "name": "altar stone"
      },
      "lectern": {
        "icon": "📖",
        "name": "book lectern"
      },
      "reliquary": {
        "icon": "🏺",
        "name": "reliquary"
      },
      "bellrope": {
        "icon": "🔔",
        "name": "bell rope"
      }
    },
    "roles": {
      "A": [
        "abbot",
        "almoner"
      ],
      "B": [
        "bellringer",
        "brewer"
      ],
      "C": [
        "cellarer",
        "cantor"
      ],
      "D": [
        "doorkeeper",
        "document copyist"
      ],
      "E": [
        "exorcist",
        "elder brother"
      ],
      "F": [
        "forester",
        "friar"
      ],
      "G": [
        "gardener",
        "glass painter"
      ],
      "H": [
        "herbalist",
        "hospitaler"
      ],
      "I": [
        "illuminator",
        "inquisitor"
      ],
      "J": [
        "journeyman mason",
        "junior novice"
      ],
      "K": [
        "kitchener",
        "keeper of keys"
      ],
      "V": [
        "visiting cardinal",
        "vicar general"
      ]
    }
  },
  {
    "id": "campground",
    "floors": [
      "grass",
      "dirt",
      "wood",
      "stone"
    ],
    "title": "Camp Whispering Pines",
    "tagline": "The legend of the lake monster is fake. The killer in the woods is real.",
    "icon": "🏕️",
    "hue": 140,
    "rooms": [
      "Mess Hall",
      "Counselor Cabin",
      "Bunkhouse Alpha",
      "Bunkhouse Beta",
      "Campfire Clearing",
      "Canoe Dock",
      "Arts Shed",
      "Archery Range",
      "Shower Block",
      "Infirmary",
      "Lake Shore",
      "Director Office"
    ],
    "objects": {
      "chair": {
        "icon": "🪑",
        "name": "camp chair",
        "spot": true,
        "on": "was sitting in a camp chair"
      },
      "bunk": {
        "icon": "🛏️",
        "name": "bunk bed",
        "spot": true,
        "on": "was resting on a top bunk"
      },
      "table": {
        "icon": "🪵",
        "name": "picnic table"
      },
      "canoes": {
        "icon": "🛶",
        "name": "stack of canoes"
      },
      "fire": {
        "icon": "🔥",
        "name": "fire ring"
      },
      "board": {
        "icon": "📋",
        "name": "bulletin board"
      }
    },
    "roles": {
      "A": [
        "archery instructor",
        "arts counselor"
      ],
      "B": [
        "boating coach",
        "bugler"
      ],
      "C": [
        "camp counselor",
        "cook"
      ],
      "D": [
        "drama coach",
        "director"
      ],
      "E": [
        "ecology guide",
        "eagle scout"
      ],
      "F": [
        "fisher",
        "first aid counselor"
      ],
      "G": [
        "groundskeeper",
        "guitar player"
      ],
      "H": [
        "head counselor",
        "hiker"
      ],
      "I": [
        "instructor",
        "intern"
      ],
      "J": [
        "junior counselor",
        "jumper"
      ],
      "K": [
        "kayak guide",
        "kitchen helper"
      ],
      "V": [
        "veteran camp owner",
        "visitor"
      ]
    }
  },
  {
    "id": "mars",
    "floors": [
      "sand",
      "metal",
      "tile",
      "dots"
    ],
    "title": "New Olympus Colony",
    "tagline": "Dust storm outside. Six months until the next shuttle. One broken helmet.",
    "icon": "🪐",
    "hue": 10,
    "rooms": [
      "Command Hub",
      "Hydroponic Dome",
      "Oxygen Scrubber",
      "Airlock Module",
      "Geology Lab",
      "Habitat Quarters",
      "Rover Bay",
      "Solar Array Control",
      "Comms Array",
      "Gymnasium",
      "Medical Bay",
      "Water Reclamation"
    ],
    "objects": {
      "seat": {
        "icon": "💺",
        "name": "rec chair",
        "spot": true,
        "on": "was strapped into a recreation chair"
      },
      "pod": {
        "icon": "🛏️",
        "name": "sleep cubicle",
        "spot": true,
        "on": "was resting in a sleep cubicle"
      },
      "tank": {
        "icon": "🛢️",
        "name": "oxygen tank"
      },
      "rover": {
        "icon": "🚙",
        "name": "rover chassis"
      },
      "drill": {
        "icon": "⚙️",
        "name": "rock drill"
      },
      "tower": {
        "icon": "🌱",
        "name": "hydroponic tower"
      }
    },
    "roles": {
      "A": [
        "astrobiologist",
        "agronomist"
      ],
      "B": [
        "botanist",
        "biosphere tech"
      ],
      "C": [
        "commander",
        "chemist"
      ],
      "D": [
        "drill operator",
        "doctor"
      ],
      "E": [
        "environmental engineer",
        "electrician"
      ],
      "F": [
        "flight specialist",
        "farmer"
      ],
      "G": [
        "geologist",
        "ground controller"
      ],
      "H": [
        "habitat architect",
        "hydroponics chief"
      ],
      "I": [
        "it specialist",
        "instrument mechanic"
      ],
      "J": [
        "janitor",
        "junior colonist"
      ],
      "K": [
        "kinetic operator",
        "kitchen hand"
      ],
      "V": [
        "venture sponsor",
        "visiting inspector"
      ]
    }
  },
  {
    "id": "london",
    "floors": [
      "stone",
      "wood",
      "carpet",
      "dirt"
    ],
    "title": "Baker Street Rogues",
    "tagline": "Thick smog blankets the Thames. A body is found beneath the streetlamps.",
    "icon": "🕵️",
    "hue": 220,
    "rooms": [
      "Parlor Study",
      "Cobblestone Alley",
      "Pawn Shop",
      "Opium Den",
      "Police Desk",
      "Cab Stand",
      "Tenement Attic",
      "Newsstand Corner",
      "Pub Taproom",
      "Thames Wharf",
      "Mortuary",
      "Apothecary"
    ],
    "objects": {
      "armchair": {
        "icon": "🪑",
        "name": "worn armchair",
        "spot": true,
        "on": "was smoking in a worn armchair"
      },
      "cot": {
        "icon": "🛏️",
        "name": "narrow cot",
        "spot": true,
        "on": "was resting on a narrow cot"
      },
      "streetlamp": {
        "icon": "🏮",
        "name": "gas streetlamp"
      },
      "hansom": {
        "icon": "🐎",
        "name": "hansom cab"
      },
      "fireplace": {
        "icon": "🔥",
        "name": "chimney hearth"
      },
      "kiosk": {
        "icon": "📰",
        "name": "news kiosk"
      }
    },
    "roles": {
      "A": [
        "apothecary",
        "aristocrat"
      ],
      "B": [
        "blackmailer",
        "bowler hat seller"
      ],
      "C": [
        "constable",
        "chimney sweep"
      ],
      "D": [
        "detective",
        "doctor"
      ],
      "E": [
        "engraver",
        "errand boy"
      ],
      "F": [
        "forger",
        "fishmonger"
      ],
      "G": [
        "gentlemen valet",
        "grave robber"
      ],
      "H": [
        "hansom cabbie",
        "hawker"
      ],
      "I": [
        "informer",
        "inspector"
      ],
      "J": [
        "jeweller",
        "journalist"
      ],
      "K": [
        "knife sharpener",
        "keg tapster"
      ],
      "V": [
        "victim of nobility",
        "vagabond"
      ]
    }
  },
  {
    "id": "market",
    "floors": [
      "stone",
      "wood",
      "sand",
      "dots"
    ],
    "title": "Lantern Festival",
    "tagline": "Red lanterns float across the river. A shadow strikes before the fireworks.",
    "icon": "🏮",
    "hue": 35,
    "rooms": [
      "Lantern Bridge",
      "Tea Pavilion",
      "Silk Stall",
      "Fireworks Barge",
      "Calligraphy Shop",
      "River Pagoda",
      "Noodle Court",
      "Dragon Boat",
      "Fortune Teller",
      "Garden Courtyard",
      "Bell Tower",
      "Shadow Stage"
    ],
    "objects": {
      "stool": {
        "icon": "🪑",
        "name": "bamboo stool",
        "spot": true,
        "on": "was sitting on a bamboo stool"
      },
      "cushion": {
        "icon": "🛋️",
        "name": "silk cushion",
        "spot": true,
        "on": "was reclining on a silk cushion"
      },
      "lantern": {
        "icon": "🏮",
        "name": "stone lantern"
      },
      "fireworks": {
        "icon": "🎆",
        "name": "firework crate"
      },
      "gong": {
        "icon": "🔔",
        "name": "gong stand"
      },
      "teacart": {
        "icon": "🍵",
        "name": "tea cart"
      }
    },
    "roles": {
      "A": [
        "acrobat",
        "astrologer"
      ],
      "B": [
        "boatman",
        "bamboo carver"
      ],
      "C": [
        "calligrapher",
        "cook"
      ],
      "D": [
        "drummer",
        "dancer"
      ],
      "E": [
        "embroiderer",
        "elder"
      ],
      "F": [
        "firework master",
        "fan painter"
      ],
      "G": [
        "gong striker",
        "guard"
      ],
      "H": [
        "herbalist",
        "harbor guide"
      ],
      "I": [
        "instrument maker",
        "imperial envoy"
      ],
      "J": [
        "jade carver",
        "juggler"
      ],
      "K": [
        "kite maker",
        "kitchen cook"
      ],
      "V": [
        "village magistrate",
        "visiting noble"
      ]
    }
  },
  {
    "id": "venice",
    "floors": [
      "tile",
      "stone",
      "carpet",
      "herring"
    ],
    "title": "Doge Masquerade",
    "tagline": "Behind the gilded masks and velvet cloaks, an assassin smiles.",
    "icon": "🏰",
    "hue": 315,
    "rooms": [
      "Grand Ballroom",
      "Gondola Dock",
      "Casino Ridotto",
      "Mask Atelier",
      "Canal Balcony",
      "Mirrored Gallery",
      "Wine Cellar",
      "Private Boudoir",
      "Palazzo Chapel",
      "Servants Mezzanine",
      "Courtyard",
      "Armory"
    ],
    "objects": {
      "throne": {
        "icon": "💺",
        "name": "gilded chair",
        "spot": true,
        "on": "was seated on a gilded chair"
      },
      "daybed": {
        "icon": "🛋️",
        "name": "silk daybed",
        "spot": true,
        "on": "was resting on a silk daybed"
      },
      "gondola": {
        "icon": "🛶",
        "name": "gondola"
      },
      "harpsichord": {
        "icon": "🎹",
        "name": "harpsichord"
      },
      "fountain": {
        "icon": "⛲",
        "name": "marble fountain"
      },
      "maskstand": {
        "icon": "🎭",
        "name": "mask display"
      }
    },
    "roles": {
      "A": [
        "aristocrat",
        "alchemist"
      ],
      "B": [
        "barcarolle singer",
        "boat builder"
      ],
      "C": [
        "courtesan",
        "carnival poet"
      ],
      "D": [
        "doge",
        "diplomat"
      ],
      "E": [
        "envoy",
        "embroiderer"
      ],
      "F": [
        "fencing master",
        "falconer"
      ],
      "G": [
        "gondolier",
        "goldsmith"
      ],
      "H": [
        "harlequin",
        "herald"
      ],
      "I": [
        "inquisitor",
        "illusionist"
      ],
      "J": [
        "jester",
        "jeweller"
      ],
      "K": [
        "knight of malta",
        "key master"
      ],
      "V": [
        "venetian senator",
        "visiting merchant"
      ]
    }
  },
  {
    "id": "mine",
    "floors": [
      "dirt",
      "stone",
      "wood",
      "sand"
    ],
    "title": "Iron Lode Deep",
    "tagline": "Three hundred feet underground. The air line cut. The mother lode claim stolen.",
    "icon": "⛏️",
    "hue": 40,
    "rooms": [
      "Shaft Elevator",
      "Main Drift",
      "Dynamite Magazine",
      "Smelting Oven",
      "Assay Office",
      "Timber Storage",
      "Water Sump",
      "Mule Stables",
      "Tool Crib",
      "Shift Boss Office",
      "Miners Mess",
      "Deep Winze"
    ],
    "objects": {
      "keg": {
        "icon": "🪑",
        "name": "nail keg",
        "spot": true,
        "on": "was sitting on an upturned nail keg"
      },
      "bunk": {
        "icon": "🛏️",
        "name": "canvas bunk",
        "spot": true,
        "on": "was resting on a rough canvas bunk"
      },
      "orecart": {
        "icon": "🛒",
        "name": "ore cart"
      },
      "hoist": {
        "icon": "⚙️",
        "name": "steam hoist"
      },
      "dynamite": {
        "icon": "🧨",
        "name": "dynamite crate"
      },
      "drill": {
        "icon": "⛏️",
        "name": "rock drill"
      }
    },
    "roles": {
      "A": [
        "assayer",
        "axeman"
      ],
      "B": [
        "blacksmith",
        "blaster"
      ],
      "C": [
        "cart driver",
        "carpenter"
      ],
      "D": [
        "driller",
        "dynamite handler"
      ],
      "E": [
        "engineer",
        "hoist operator"
      ],
      "F": [
        "foreman",
        "farrier"
      ],
      "G": [
        "geologist",
        "gold panner"
      ],
      "H": [
        "hoistman",
        "healer"
      ],
      "I": [
        "inspector",
        "iron worker"
      ],
      "J": [
        "jackhammer man",
        "junior skinner"
      ],
      "K": [
        "keg maker",
        "kitchen cook"
      ],
      "V": [
        "vein claimant",
        "venture capitalist"
      ]
    }
  },
  {
    "id": "funicular",
    "floors": [
      "wood",
      "stone",
      "metal",
      "tile"
    ],
    "title": "The Alpine Funicular",
    "tagline": "The cable snapped between stations. Eleven passengers trapped midway.",
    "icon": "🚡",
    "hue": 205,
    "rooms": [
      "Valley Terminal",
      "Upper Engine Room",
      "Funicular Car A",
      "Funicular Car B",
      "Sheave Tower",
      "Observation Terrace",
      "Ski Patrol Shack",
      "Ticket Hall",
      "Transformer Vault",
      "Souvenir Kiosk",
      "Glacier Overlook",
      "Staff Bunkhouse"
    ],
    "objects": {
      "bench": {
        "icon": "💺",
        "name": "passenger bench",
        "spot": true,
        "on": "was sitting on a passenger bench"
      },
      "stool": {
        "icon": "🪑",
        "name": "operator stool",
        "spot": true,
        "on": "was resting on an operator stool"
      },
      "winch": {
        "icon": "⚙️",
        "name": "cable winch"
      },
      "skirack": {
        "icon": "🎿",
        "name": "ski rack"
      },
      "generator": {
        "icon": "🛢️",
        "name": "generator unit"
      },
      "luggage": {
        "icon": "🧳",
        "name": "luggage cart"
      }
    },
    "roles": {
      "A": [
        "avalanche controller",
        "alpine guide"
      ],
      "B": [
        "brake operator",
        "billeter"
      ],
      "C": [
        "conductor",
        "cable splicer"
      ],
      "D": [
        "dispatcher",
        "doctor"
      ],
      "E": [
        "electrical engineer",
        "excursionist"
      ],
      "F": [
        "funicular driver",
        "first aider"
      ],
      "G": [
        "glaciologist",
        "gearbox tech"
      ],
      "H": [
        "hotelier",
        "hiker"
      ],
      "I": [
        "inspector",
        "instructor"
      ],
      "J": [
        "journalist",
        "junior patrol"
      ],
      "K": [
        "kitchen cook",
        "knot rigger"
      ],
      "V": [
        "veteran mountaineer",
        "visiting vip"
      ]
    }
  },
  {
    "id": "library",
    "floors": [
      "stone",
      "tile",
      "wood",
      "carpet"
    ],
    "title": "Alexandria Atheneum",
    "tagline": "The scroll of lost secrets is gone. The chief librarian lies among burning papyrus.",
    "icon": "📚",
    "hue": 52,
    "rooms": [
      "Great Peristyle",
      "Papyrus Vault",
      "Observatory",
      "Translation Chamber",
      "Scribes Hall",
      "Philosopher Garden",
      "Geometry Hall",
      "Map Archive",
      "Courtyard Fountain",
      "Mosaic Gallery",
      "Lecture Theater",
      "Archivist Sanctum"
    ],
    "objects": {
      "bench": {
        "icon": "🪑",
        "name": "stone bench",
        "spot": true,
        "on": "was seated on a carved stone bench"
      },
      "mat": {
        "icon": "🛏️",
        "name": "reed mat",
        "spot": true,
        "on": "was resting on a woven reed mat"
      },
      "cupboard": {
        "icon": "📜",
        "name": "scroll cupboard"
      },
      "sphere": {
        "icon": "🪐",
        "name": "armillary sphere"
      },
      "bust": {
        "icon": "🗿",
        "name": "marble bust"
      },
      "burner": {
        "icon": "🏺",
        "name": "incense burner"
      }
    },
    "roles": {
      "A": [
        "astronomer",
        "archivist"
      ],
      "B": [
        "botanist",
        "bookbinder"
      ],
      "C": [
        "chronicler",
        "cartographer"
      ],
      "D": [
        "dialectician",
        "doctor"
      ],
      "E": [
        "epigrapher",
        "educator"
      ],
      "F": [
        "folklorist",
        "fanbearer"
      ],
      "G": [
        "grammarian",
        "geometer"
      ],
      "H": [
        "historian",
        "herbalist"
      ],
      "I": [
        "illuminator",
        "interpreter"
      ],
      "J": [
        "jurist",
        "junior scribe"
      ],
      "K": [
        "keeper of scrolls",
        "knot reader"
      ],
      "V": [
        "visiting philosopher",
        "veteran sage"
      ]
    }
  },
  {
    "id": "festival",
    "floors": [
      "grass",
      "dirt",
      "wood",
      "dots"
    ],
    "title": "Riff Valley Festival",
    "tagline": "Eighty thousand screaming fans. The headliner dropped dead before the encore.",
    "icon": "🎸",
    "hue": 300,
    "rooms": [
      "Main Stage",
      "Backstage VIP",
      "Mixing Tower",
      "Artist Trailer",
      "Guitar Tech Tent",
      "Merch Pavilion",
      "First Aid Tent",
      "Beer Garden",
      "Green Room",
      "Security Checkpoint",
      "Campers Field",
      "Port-a-Jon Alley"
    ],
    "objects": {
      "chair": {
        "icon": "💺",
        "name": "lawn chair",
        "spot": true,
        "on": "was chilling in a lawn chair"
      },
      "sofa": {
        "icon": "🛋️",
        "name": "trailer sofa",
        "spot": true,
        "on": "was resting on a trailer sofa"
      },
      "amp": {
        "icon": "🔊",
        "name": "amp stack"
      },
      "drums": {
        "icon": "🥁",
        "name": "drum kit"
      },
      "roadcase": {
        "icon": "📦",
        "name": "road case"
      },
      "lighttower": {
        "icon": "💡",
        "name": "light tower"
      }
    },
    "roles": {
      "A": [
        "audio engineer",
        "artist agent"
      ],
      "B": [
        "bass player",
        "bodyguard"
      ],
      "C": [
        "crew chief",
        "cameraman"
      ],
      "D": [
        "drummer",
        "disc jockey"
      ],
      "E": [
        "electrician",
        "event producer"
      ],
      "F": [
        "frontman",
        "fan president"
      ],
      "G": [
        "guitarist",
        "groupie coordinator"
      ],
      "H": [
        "headliner",
        "head of security"
      ],
      "I": [
        "instrument tech",
        "influencer"
      ],
      "J": [
        "journalist",
        "junior stagehand"
      ],
      "K": [
        "keyboardist",
        "key grip"
      ],
      "V": [
        "vip record exec",
        "vocal coach"
      ]
    }
  },
  {
    "id": "shogunate",
    "floors": [
      "wood",
      "stone",
      "dots",
      "herring"
    ],
    "title": "Shadows of the Shogunate",
    "tagline": "The nightingale floors chirped once. The daimyo did not wake.",
    "icon": "🏯",
    "hue": 10,
    "rooms": [
      "Daimyo Hall",
      "Tea Ceremony Room",
      "Zen Garden",
      "Guard Gate",
      "Armory",
      "Kitchen",
      "Falconry Yard",
      "Ninja Loft",
      "Stables",
      "Shrine",
      "Moon Balcony",
      "Sentry Tower"
    ],
    "objects": {
      "tatami": {
        "icon": "🪑",
        "name": "tatami cushion",
        "spot": true,
        "on": "was kneeling on a tatami mat"
      },
      "futon": {
        "icon": "🛏️",
        "name": "silk futon",
        "spot": true,
        "on": "was resting on a silk futon"
      },
      "armor": {
        "icon": "🥷",
        "name": "samurai armor"
      },
      "shoji": {
        "icon": "🚪",
        "name": "shoji screen"
      },
      "bonsai": {
        "icon": "🪴",
        "name": "bonsai table"
      },
      "taiko": {
        "icon": "🥁",
        "name": "taiko drum"
      }
    },
    "roles": {
      "A": [
        "archer",
        "artisan"
      ],
      "B": [
        "bushi warrior",
        "bowyer"
      ],
      "C": [
        "calligrapher",
        "cook"
      ],
      "D": [
        "daimyo",
        "drummer"
      ],
      "E": [
        "envoy",
        "embroiderer"
      ],
      "F": [
        "falconer",
        "foot soldier"
      ],
      "G": [
        "geisha",
        "guard"
      ],
      "H": [
        "hatamoto retainer",
        "herbalist"
      ],
      "I": [
        "inquisitor",
        "iron smith"
      ],
      "J": [
        "jester",
        "junior samurai"
      ],
      "K": [
        "kendo master",
        "kitchen hand"
      ],
      "V": [
        "veteran general",
        "visiting monk"
      ]
    }
  },
  {
    "id": "airship",
    "floors": [
      "metal",
      "carpet",
      "wood",
      "dots"
    ],
    "title": "Stratosphere One",
    "tagline": "Floating over the Atlantic at eight thousand feet. The steering wheel was jammed.",
    "icon": "✈️",
    "hue": 215,
    "rooms": [
      "Promenade Deck",
      "Smoking Lounge",
      "Cockpit Bridge",
      "Dining Saloon",
      "Radio Cabin",
      "Port Engine Gondola",
      "Starboard Gondola",
      "Gas Catwalk",
      "Stateroom Alpha",
      "Galley",
      "Cargo Hold",
      "Rigging Loft"
    ],
    "objects": {
      "armchair": {
        "icon": "💺",
        "name": "wicker armchair",
        "spot": true,
        "on": "was seated in a wicker chair"
      },
      "berth": {
        "icon": "🛏️",
        "name": "overhead bunk",
        "spot": true,
        "on": "was resting in an overhead bunk"
      },
      "ballast": {
        "icon": "🛢️",
        "name": "ballast tank"
      },
      "column": {
        "icon": "🧭",
        "name": "steering column"
      },
      "winch": {
        "icon": "⚙️",
        "name": "mooring winch"
      },
      "luggage": {
        "icon": "🧳",
        "name": "luggage pile"
      }
    },
    "roles": {
      "A": [
        "aeronaut",
        "aristocrat"
      ],
      "B": [
        "barman",
        "boatswain"
      ],
      "C": [
        "captain",
        "chief rigger"
      ],
      "D": [
        "dirigible pilot",
        "doctor"
      ],
      "E": [
        "engine mechanic",
        "envoy"
      ],
      "F": [
        "first officer",
        "flight steward"
      ],
      "G": [
        "gas bag inspector",
        "ground crew chief"
      ],
      "H": [
        "helmsman",
        "hostess"
      ],
      "I": [
        "instrument tech",
        "industrialist"
      ],
      "J": [
        "journalist",
        "junior steward"
      ],
      "K": [
        "kitchen chef",
        "knot rigger"
      ],
      "V": [
        "vessel inventor",
        "vip diplomat"
      ]
    }
  },
  {
    "id": "mall",
    "floors": [
      "tile",
      "stone",
      "carpet",
      "dots"
    ],
    "title": "Starlight Galleria",
    "tagline": "Closing time at the mall. The security grates are down, and someone is trapped inside.",
    "icon": "🛍️",
    "hue": 320,
    "rooms": [
      "Food Court",
      "Arcade",
      "Record Store",
      "Photo Studio",
      "Department Store",
      "Security Office",
      "Atrium Fountain",
      "Service Corridors",
      "Cinema Lobby",
      "Toy Emporium",
      "Skate Shop",
      "Escalator Hub"
    ],
    "objects": {
      "plasticchair": {
        "icon": "🪑",
        "name": "plastic chair",
        "spot": true,
        "on": "was sitting on a plastic chair"
      },
      "photobench": {
        "icon": "🛋️",
        "name": "photo booth bench",
        "spot": true,
        "on": "was seated inside a photo booth"
      },
      "fountain": {
        "icon": "⛲",
        "name": "mall fountain"
      },
      "gumball": {
        "icon": "🍬",
        "name": "gumball machine"
      },
      "gate": {
        "icon": "🚧",
        "name": "security gate"
      },
      "mannequin": {
        "icon": "👗",
        "name": "clothing mannequin"
      }
    },
    "roles": {
      "A": [
        "arcade manager",
        "aerobics instructor"
      ],
      "B": [
        "barista",
        "boutique clerk"
      ],
      "C": [
        "cinema projectionist",
        "cashier"
      ],
      "D": [
        "department manager",
        "disc jockey"
      ],
      "E": [
        "escalator mechanic",
        "eyewear stylist"
      ],
      "F": [
        "fry cook",
        "fashionista"
      ],
      "G": [
        "greeter",
        "guard"
      ],
      "H": [
        "hair stylist",
        "head of security"
      ],
      "I": [
        "ice cream scooper",
        "informant"
      ],
      "J": [
        "janitor",
        "jewel kiosk seller"
      ],
      "K": [
        "key cutter",
        "kitchen hand"
      ],
      "V": [
        "veteran mall owner",
        "visiting store inspector"
      ]
    }
  },
  {
    "id": "derby",
    "floors": [
      "grass",
      "dirt",
      "wood",
      "carpet"
    ],
    "title": "Ascot Royal Derby",
    "tagline": "The Gold Cup race was won by a nose. The winning jockey died in the winner circle.",
    "icon": "🐎",
    "hue": 135,
    "rooms": [
      "Winner Enclosure",
      "Royal Box",
      "Betting Ring",
      "Paddock Ring",
      "Weighing Room",
      "Jockeys Room",
      "Vet Clinic",
      "Saddling Boxes",
      "Stables",
      "Grandstand Terrace",
      "Stewards Room",
      "Members Bar"
    ],
    "objects": {
      "turfchair": {
        "icon": "🪑",
        "name": "turf chair",
        "spot": true,
        "on": "was watching from a turf chair"
      },
      "stablebench": {
        "icon": "🪑",
        "name": "stable bench",
        "spot": true,
        "on": "was resting on a stable bench"
      },
      "float": {
        "icon": "🐎",
        "name": "horse float"
      },
      "trophy": {
        "icon": "🏆",
        "name": "trophy case"
      },
      "board": {
        "icon": "📊",
        "name": "bookmaker board"
      },
      "haystack": {
        "icon": "🌾",
        "name": "hay bale stack"
      }
    },
    "roles": {
      "A": [
        "apprentice jockey",
        "aristocrat"
      ],
      "B": [
        "bookmaker",
        "breeder"
      ],
      "C": [
        "champion jockey",
        "clerk of scales"
      ],
      "D": [
        "derby steward",
        "doper"
      ],
      "E": [
        "equine therapist",
        "owner envoy"
      ],
      "F": [
        "farrier",
        "form analyst"
      ],
      "G": [
        "groom",
        "groundskeeper"
      ],
      "H": [
        "horse trainer",
        "head stableman"
      ],
      "I": [
        "inspector",
        "investor"
      ],
      "J": [
        "jockey",
        "judge"
      ],
      "K": [
        "kennel master",
        "kitchen caterer"
      ],
      "V": [
        "veteran horse owner",
        "visiting royalty"
      ]
    }
  },
  {
    "id": "halloween",
    "floors": [
      "stone",
      "wood",
      "dirt",
      "carpet"
    ],
    "title": "All Hallows Eve",
    "tagline": "Costumes, candlelight, and candy. But one guest was not wearing a disguise.",
    "icon": "🎃",
    "hue": 25,
    "rooms": [
      "Haunted Conservatory",
      "Pumpkin Patch",
      "Costume Ballroom",
      "Witch Parlor",
      "Crypt",
      "Spider Attic",
      "Occult Library",
      "Cellar Maze",
      "Front Porch",
      "Black Cat Alley",
      "Cemetery Gate",
      "Apple Bobbing Hall"
    ],
    "objects": {
      "coffin": {
        "icon": "⚰️",
        "name": "decorative coffin",
        "spot": true,
        "on": "was resting in a decorative coffin"
      },
      "swing": {
        "icon": "🪑",
        "name": "porch swing",
        "spot": true,
        "on": "was sitting on the porch swing"
      },
      "pumpkin": {
        "icon": "🎃",
        "name": "jack-o-lantern"
      },
      "tombstone": {
        "icon": "🪦",
        "name": "tombstone"
      },
      "cauldron": {
        "icon": "🍲",
        "name": "cauldron"
      },
      "web": {
        "icon": "🕸️",
        "name": "spider web"
      }
    },
    "roles": {
      "A": [
        "astrologer",
        "actor"
      ],
      "B": [
        "black cat breeder",
        "baker"
      ],
      "C": [
        "costume designer",
        "candy maker"
      ],
      "D": [
        "diviner",
        "decorator"
      ],
      "E": [
        "embalmer",
        "entertainer"
      ],
      "F": [
        "fortune teller",
        "florist"
      ],
      "G": [
        "ghost enthusiast",
        "gravedigger"
      ],
      "H": [
        "haunted house host",
        "herbalist"
      ],
      "I": [
        "illusionist",
        "investigator"
      ],
      "J": [
        "juggler",
        "jack-o-lantern carver"
      ],
      "K": [
        "keepsake collector",
        "key keeper"
      ],
      "V": [
        "veteran manor heir",
        "visiting storyteller"
      ]
    }
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
