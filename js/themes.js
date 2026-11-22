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

const makeRoles = str => Object.fromEntries('ABCDEFGHIJKV'.split('').map((k, i) => [k, str.split(',')[i].split('/')]));

export const THEMES = [
  {
    id: 'manor',
    floors: ['wood', 'carpet', 'herring', 'tile', 'stone', 'dots'],
    title: "Blackwood Manor",
    tagline: "A stormy weekend at an old country house.",
    icon: "🏰",
    hue: 30,
    rooms: [
      "Hall", "Library", "Study", "Kitchen", "Dining Room", "Ballroom",
      "Conservatory", "Billiard Room", "Gallery", "Pantry", "Chapel", "Cellar",
    ],
    objects: {
      chair: { icon: "🪑", name: "chair", spot: true, on: "was sitting on a chair" },
      sofa: { icon: "🛋️", name: "sofa", spot: true, on: "was resting on a sofa" },
      shelf: { icon: "📚", name: "bookshelf" },
      piano: { icon: "🎹", name: "piano" },
      plant: { icon: "🪴", name: "plant" },
      clock: { icon: "🕰️", name: "grandfather clock" },
    },
    roles: makeRoles('author/architect,butler/banker,cook/colonel,doctor/dealer,editor/envoy,florist/footman,gardener/guest,heir/housekeeper,illustrator/inspector,jeweller/judge,knitter/keeper,valet/vicar'),
  },
  {
    id: 'train',
    floors: ['carpet', 'wood', 'dots', 'metal', 'herring'],
    title: "The Midnight Express",
    tagline: "A sleeper train crossing the mountains at night.",
    icon: "🚂",
    hue: 215,
    rooms: [
      "Dining Car", "Lounge Car", "Sleeper A", "Sleeper B", "Baggage Car", "Observation Car",
      "Galley", "Bar Car", "Mail Car", "Guard's Van", "Sleeper C", "Corridor",
    ],
    objects: {
      seat: { icon: "💺", name: "seat", spot: true, on: "was sitting in a seat" },
      bunk: { icon: "🛏️", name: "bunk", spot: true, on: "was lying in a bunk" },
      suitcase: { icon: "🧳", name: "suitcase" },
      crate: { icon: "📦", name: "crate" },
      lamp: { icon: "🏮", name: "lantern" },
      wine: { icon: "🍷", name: "wine rack" },
    },
    roles: makeRoles('attendant/accordionist,bookseller/banker,courier/conductor,diplomat/dentist,engineer/envoy,fiddler/firefighter,guard/governor,hairdresser/hatter,inspector/importer,journalist/jockey,knife grinder/kitchen hand,violinist/vendor'),
  },
  {
    id: 'space',
    floors: ['metal', 'tile', 'dots', 'carpet'],
    title: "Station Kepler-9",
    tagline: "Twelve crew members. One airlock. No way home.",
    icon: "🛰️",
    hue: 265,
    rooms: [
      "Bridge", "Lab", "Hydroponics", "Airlock", "Mess Hall", "Med Bay",
      "Engine Room", "Crew Quarters", "Observatory", "Cargo Bay", "Comms", "Gym",
    ],
    objects: {
      seat: { icon: "💺", name: "seat", spot: true, on: "was strapped into a seat" },
      pod: { icon: "🛏️", name: "sleep pod", spot: true, on: "was in a sleep pod" },
      console: { icon: "🖥️", name: "console" },
      scope: { icon: "🔬", name: "microscope" },
      plant: { icon: "🌱", name: "plant tray" },
      tank: { icon: "🛢️", name: "fuel tank" },
    },
    roles: makeRoles('astronaut/analyst,biologist/botanist,chemist/captain,doctor/driller,engineer/electrician,farmer/flight officer,geologist/gunner,hacker/hull technician,instructor/intern,janitor/journalist,keeper/kitchen chief,volunteer/visitor'),
  },
  {
    id: 'theater',
    floors: ['wood', 'carpet', 'herring', 'dots', 'tile'],
    title: "Curtain Call",
    tagline: "Opening night. The lead never takes a bow.",
    icon: "🎭",
    hue: 345,
    rooms: [
      "Stage", "Wings", "Orchestra Pit", "Dressing Room", "Green Room", "Box Office",
      "Foyer", "Prop Store", "Costume Room", "Balcony", "Lighting Booth", "Bar",
    ],
    objects: {
      seat: { icon: "💺", name: "seat", spot: true, on: "was sitting in a seat" },
      sofa: { icon: "🛋️", name: "sofa", spot: true, on: "was lounging on a sofa" },
      piano: { icon: "🎹", name: "piano" },
      mirror: { icon: "🪞", name: "mirror" },
      rack: { icon: "👗", name: "costume rack" },
      light: { icon: "💡", name: "spotlight" },
    },
    roles: makeRoles('author/agent,baritone/bass player,critic/choreographer,director/dancer,electrician/extra,flautist/fan,guitarist/ghost writer,hairdresser/harpist,impresario/illusionist,juggler/jester,keyboardist/kettle drummer,violinist/ventriloquist'),
  },
  {
    id: 'lodge',
    floors: ['wood', 'stone', 'carpet', 'herring', 'tile'],
    title: "Snowbound Lodge",
    tagline: "The pass is closed. The killer is still inside.",
    icon: "🏔️",
    hue: 190,
    rooms: [
      "Lobby", "Fireside Lounge", "Ski Room", "Sauna", "Kitchen", "Dining Hall",
      "Bar", "Suite", "Games Room", "Boot Room", "Terrace", "Spa",
    ],
    objects: {
      chair: { icon: "🪑", name: "chair", spot: true, on: "was sitting on a chair" },
      sofa: { icon: "🛋️", name: "sofa", spot: true, on: "was resting on a sofa" },
      skis: { icon: "🎿", name: "pair of skis" },
      fire: { icon: "🔥", name: "fireplace" },
      tree: { icon: "🌲", name: "pine tree" },
      wood: { icon: "🪵", name: "woodpile" },
    },
    roles: makeRoles('athlete/avalanche guard,bartender/baker,cook/climber,doctor/driver,explorer/engineer,forester/fisher,guide/glacier expert,hotelier/hiker,instructor/ice climber,journalist/jogger,kayaker/knitter,vet/vlogger'),
  },
  {
    id: 'castle',
    floors: ['stone', 'carpet', 'wood', 'tile', 'herring'],
    title: "Ravenhold Castle",
    tagline: "A royal feast. The taster never tasted dessert.",
    icon: "👑",
    hue: 50,
    rules: ['ranks'],
    rooms: [
      "Throne Room", "Great Hall", "Armory", "Chapel", "Kitchen", "Stables",
      "Solar", "Dungeon", "Gatehouse", "Tower", "Smithy", "Courtyard",
    ],
    objects: {
      bench: { icon: "🪑", name: "bench", spot: true, on: "was sitting on a bench" },
      cot: { icon: "🛏️", name: "straw bed", spot: true, on: "was lying on a straw bed" },
      barrel: { icon: "🛢️", name: "barrel" },
      candles: { icon: "🕯️", name: "candle stand" },
      swords: { icon: "🗡️", name: "weapon rack" },
      urn: { icon: "🏺", name: "urn" },
    },
    roles: makeRoles('archer/alchemist,baker/bard,cupbearer/chronicler,dancer/doorkeeper,envoy/embroiderer,falconer/farrier,groom/glassmaker,herbalist/herald,innkeeper/illuminator,jester/juggler,kennel keeper/keykeeper,vintner/verger'),
  },
  {
    id: 'tomb',
    floors: ['sand', 'stone', 'tile', 'dirt'],
    title: "The Sand Tomb",
    tagline: "The tomb was sealed for a reason.",
    icon: "🏜️",
    hue: 38,
    rules: ['glyphs'],
    rooms: [
      "Burial Chamber", "Antechamber", "Treasury", "Shrine", "Hall of Pillars", "Workshop",
      "Granary", "Scribe Room", "Sun Court", "Well Shaft", "Statue Hall", "Boat Pit",
    ],
    objects: {
      stool: { icon: "🪑", name: "stool", spot: true, on: "was sitting on a stool" },
      couch: { icon: "🛏️", name: "couch", spot: true, on: "was lying on a couch" },
      urn: { icon: "⚱️", name: "urn" },
      statue: { icon: "🗿", name: "statue" },
      rubble: { icon: "🪨", name: "pile of rubble" },
      jar: { icon: "🏺", name: "jar" },
    },
    roles: makeRoles('architect/astrologer,brewer/boat builder,chanter/carpenter,diviner/dancer,embalmer/envoy,fanbearer/fisher,guard/goldsmith,harpist/herder,inspector/incense maker,jeweller/juggler,keeper/kohl maker,vizier/vintner'),
  },
  {
    id: 'camp',
    floors: ['grass', 'dirt', 'stone', 'sand'],
    title: "Ember Valley",
    tagline: "The first cold night of the year. One fire went out.",
    icon: "🦣",
    hue: 15,
    rules: ['trades'],
    rooms: [
      "Cave", "Fire Pit", "River Bank", "Hunting Ground", "Berry Grove", "Lookout Rock",
      "Flint Pit", "Hide Tent", "Elder Hut", "Bone Yard", "Spring", "Painted Wall",
    ],
    objects: {
      log: { icon: "🪵", name: "log", spot: true, on: "was sitting on a log" },
      leaves: { icon: "🍂", name: "bed of leaves", spot: true, on: "was lying on a bed of leaves" },
      boulder: { icon: "🪨", name: "boulder" },
      fire: { icon: "🔥", name: "fire" },
      tree: { icon: "🌳", name: "tree" },
      bones: { icon: "🦴", name: "pile of bones" },
    },
    roles: makeRoles('artist/acrobat,builder/beekeeper,carrier/carver,drummer/dancer,elder/elk tamer,firekeeper/flute player,guard/grinder,hornblower/hide tanner,ice cutter/idol carver,joker/jumper,keeper/knot tier,visionary/valley guide'),
  },
  {
    id: 'gulch',
    floors: ['wood', 'dirt', 'sand', 'herring'],
    title: "Dustwater Gulch",
    tagline: "A town with one sheriff and too many outlaws.",
    icon: "🤠",
    hue: 25,
    rules: ['bandits'],
    rooms: [
      "Saloon", "Bank", "Sheriff Office", "General Store", "Livery", "Hotel",
      "Jail", "Barber", "Church", "Mine", "Corral", "Telegraph Office",
    ],
    objects: {
      chair: { icon: "🪑", name: "chair", spot: true, on: "was sitting on a chair" },
      bed: { icon: "🛏️", name: "bed", spot: true, on: "was lying on a bed" },
      barrel: { icon: "🛢️", name: "barrel" },
      cactus: { icon: "🌵", name: "cactus" },
      piano: { icon: "🎹", name: "piano" },
      horse: { icon: "🐎", name: "horse" },
    },
    roles: makeRoles('auctioneer/attorney,banker/blacksmith,cattle driver/cook,dancer/deputy,editor/engineer,farrier/farmer,gambler/gunsmith,hatmaker/homesteader,innkeeper/inventor,jailer/judge,knife thrower/keg maker,vet/vaquero'),
  },
  {
    id: 'reef',
    floors: ['wood', 'sand', 'herring', 'stone'],
    title: "The Black Reef",
    tagline: "Three ships, one treasure, and a body on deck.",
    icon: "🏴‍☠️",
    hue: 200,
    seaName: "Open Sea",
    rules: ['sea'],
    rooms: [
      "Sloop", "Brig", "Galleon", "Frigate", "Tavern", "Fort",
      "Cove", "Lighthouse", "Dock", "Market", "Sea Cave", "Longboat",
    ],
    objects: {
      stool: { icon: "🪑", name: "stool", spot: true, on: "was sitting on a stool" },
      hammock: { icon: "🛏️", name: "hammock", spot: true, on: "was lying in a hammock" },
      anchor: { icon: "⚓", name: "anchor" },
      crate: { icon: "📦", name: "crate" },
      map: { icon: "🗺️", name: "map table" },
      cannon: { icon: "💣", name: "pile of cannonballs" },
    },
    roles: makeRoles('armorer/admiral,boatswain/barkeep,captain/cook,deckhand/diver,explorer/engineer,first mate/fiddler,gunner/gold digger,harbor pilot/harpooner,islander/island guide,jailbird/jeweller,knot maker/kettle cook,voyager/vintner'),
  },
  {
    id: 'rift',
    floors: ['stone', 'wood', 'sand', 'grass', 'carpet', 'metal'],
    title: "The Time Rift",
    tagline: "A crack in time. Every case mixes the old rules.",
    icon: "🌀",
    hue: 290,
    seaName: "Sea of Ages",
    mix: [
      ['ranks', 'glyphs'],
      ['trades', 'sea'],
      ['bandits', 'glyphs'],
      ['ranks', 'sea'],
      ['trades', 'bandits'],
      ['glyphs', 'sea'],
      ['ranks', 'trades'],
      ['bandits', 'sea'],
      ['ranks', 'glyphs', 'trades'],
    ],
    rooms: [
      "Throne Room", "Saloon", "Burial Chamber", "Cave", "Captain Cabin", "Bank",
      "Shrine", "Fire Pit", "Fort", "Great Hall", "Hide Tent", "Jail",
    ],
    objects: {
      chair: { icon: "🪑", name: "chair", spot: true, on: "was sitting on a chair" },
      log: { icon: "🪵", name: "log", spot: true, on: "was sitting on a log" },
      statue: { icon: "🗿", name: "statue" },
      barrel: { icon: "🛢️", name: "barrel" },
      boulder: { icon: "🪨", name: "boulder" },
      clock: { icon: "🕰️", name: "clock" },
    },
    roles: makeRoles('archivist/astronomer,bard/bookbinder,chronicler/clockmaker,drifter/dreamer,engineer/explorer,fortune teller/falconer,gladiator/guardian,historian/herald,inventor/illusionist,jester/juggler,keeper/kite maker,voyager/visionary'),
  },
  {
    id: 'farm',
    floors: ['wood', 'grass', 'dirt', 'stone'],
    title: "Golden Acre Farm",
    tagline: "Harvest season has arrived, but the farmer will not live to see the crop.",
    icon: "🚜",
    hue: 85,
    rooms: [
      "Big Barn", "Milking Shed", "Grain Silo", "Farmhouse Kitchen", "Root Cellar", "Hayloft",
      "Tractor Garage", "Fruit Orchard", "Pig Pen", "Hen House", "Tool Shed", "Farmstand",
    ],
    objects: {
      bale: { icon: "🌾", name: "hay bale", spot: true, on: "was sitting on a hay bale" },
      rocker: { icon: "🪑", name: "rocking chair", spot: true, on: "was resting on a rocking chair" },
      tractor: { icon: "🚜", name: "tractor" },
      scarecrow: { icon: "🌽", name: "scarecrow" },
      churn: { icon: "🥛", name: "milk churn" },
      anvil: { icon: "🔨", name: "anvil" },
    },
    roles: makeRoles('apple picker/agronomist,beekeeper/barn hand,cattle rancher/cider presser,dairy maid/ditcher,equipment operator/entomologist,farmer/farrier,grain miller/greenhouse tender,harvester/horse trainer,inspector/irrigation worker,jam maker/jumper trainer,kennel master/knife sharpener,vineyard leaseholder/veterinarian'),
  },
  {
    id: 'atoll',
    floors: ['sand', 'wood', 'tile', 'dots'],
    title: "Paradise Atoll",
    tagline: "All-inclusive luxury. One guest checked in and will never check out.",
    icon: "🌺",
    hue: 175,
    rooms: [
      "Open Beach", "Overwater Bungalow", "Tiki Bar", "Infinity Pool", "Spa Pavilion", "Dive Shop",
      "Coral Lagoon", "Coconut Grove", "Reception Lobby", "Luau Grounds", "Yacht Marina", "Staff Quarters",
    ],
    objects: {
      towel: { icon: "🏖️", name: "beach towel", spot: true, on: "was sunbathing on a towel" },
      hammock: { icon: "🌴", name: "hammock", spot: true, on: "was relaxing in a hammock" },
      surfboard: { icon: "🏄", name: "surfboard rack" },
      idol: { icon: "🗿", name: "tiki idol" },
      jetski: { icon: "🚤", name: "jet ski" },
      cart: { icon: "🍹", name: "cocktail cart" },
    },
    roles: makeRoles('activities director/animator,bartender/boat captain,concierge/chef,divemaster/disc jockey,excursion guide/entertainer,fitness coach/fire dancer,guest of honor/golf pro,hotel manager/housekeeper,island pilot/instructor,jet ski renter/jeweller,kayak instructor/kitchen hand,vacationer/vip influencer'),
  },
  {
    id: 'speakeasy',
    floors: ['wood', 'carpet', 'tile', 'herring'],
    title: "The Velvet Speakeasy",
    tagline: "Prohibition Chicago. Jazz, gin, and a silenced pistol in the dark.",
    icon: "🍸",
    hue: 42,
    rooms: [
      "Tailor Front", "Hidden Alleyway", "Main Lounge", "Jazz Stage", "Distillery", "Private Booths",
      "VIP Poker Den", "Bar Counter", "Cold Storage", "Safe Room", "Coat Check", "Manager Office",
    ],
    objects: {
      booth: { icon: "🛋️", name: "velvet booth", spot: true, on: "was sitting in a velvet booth" },
      stool: { icon: "🪑", name: "bar stool", spot: true, on: "was perched on a bar stool" },
      sax: { icon: "🎷", name: "saxophone stand" },
      cask: { icon: "🪵", name: "whiskey cask" },
      roulette: { icon: "🎰", name: "roulette table" },
      safe: { icon: "🗄️", name: "iron safe" },
    },
    roles: makeRoles('accordionist/attorney,bartender/bootlegger,crooner/card sharp,drummer/distiller,enforcer/emcee,flapper/forger,gangster/gun runner,horn player/hat check girl,informant/inspector,jazz pianist/journalist,kingpin/key keeper,voice of syndicate/valued patron'),
  },
  {
    id: 'circus',
    floors: ['dirt', 'carpet', 'wood', 'dots'],
    title: "Circus Fantastico",
    tagline: "Under the big top, the clown smile hides a deadly secret.",
    icon: "🎪",
    hue: 350,
    rooms: [
      "Big Top", "Ringmaster Wagon", "Menagerie Tent", "Trapeze Rig", "Dressing Trailer", "Fortune Tent",
      "Prop Tent", "Ticket Booth", "Funhouse", "Carousel", "Sideshow Alley", "Hay Barn",
    ],
    objects: {
      chair: { icon: "🪑", name: "folding chair", spot: true, on: "was sitting on a folding chair" },
      mat: { icon: "🛏️", name: "acrobat mat", spot: true, on: "was resting on a tumble mat" },
      cannon: { icon: "💣", name: "cannon" },
      cage: { icon: "🦁", name: "lion cage" },
      trunk: { icon: "🎪", name: "juggling trunk" },
      crystal: { icon: "🔮", name: "crystal ball table" },
    },
    roles: makeRoles('acrobat/animal tamer,barker/balloon artist,clown/contortionist,daredevil/drummer,escape artist/electrician,fire eater/fortune teller,giant/gymnast,hypnotist/horse trickster,illusionist/iron jaw,juggler/jester,knife thrower/key holder,ventriloquist/veteran ringmaster'),
  },
  {
    id: 'liner',
    floors: ['carpet', 'wood', 'tile', 'herring'],
    title: "The Grand Empress",
    tagline: "Four days from Southampton to New York. One passenger lost at sea.",
    icon: "🚢",
    hue: 210,
    rooms: [
      "Grand Ballroom", "First Class Lounge", "Bridge", "Telegraph Cabin", "Promenade Deck", "Galley",
      "Boiler Room", "Turkish Bath", "Dining Saloon", "Library", "Stateroom A", "Steerage Quarters",
    ],
    objects: {
      deckchair: { icon: "💺", name: "deckchair", spot: true, on: "was lounging on a deckchair" },
      berth: { icon: "🛏️", name: "cabin berth", spot: true, on: "was lying in a cabin berth" },
      piano: { icon: "🎹", name: "grand piano" },
      lifeboat: { icon: "🛶", name: "lifeboat" },
      telegraph: { icon: "🧭", name: "ship telegraph" },
      luggage: { icon: "🧳", name: "luggage stack" },
    },
    roles: makeRoles('admiral/aristocrat,boatswain/bartender,captain/chief engineer,deckhand/doctor,electrician/envoy,first mate/fireman,guest of honor/governess,helmsman/heiress,immigrant/inspector,journalist/jeweller,kitchen chief/kettle tender,voyage sponsor/valet'),
  },
  {
    id: 'studio',
    floors: ['wood', 'carpet', 'tile', 'metal'],
    title: "Silver Screen Studios",
    tagline: "Hollywood, 1952. The starlet collapsed before the final cut.",
    icon: "🎬",
    hue: 48,
    rooms: [
      "Soundstage A", "Director Trailer", "Wardrobe Vault", "Green Room", "Editing Suite", "Makeup Room",
      "Prop Armory", "Writers Room", "Screening Room", "Studio Commissary", "Sound Booth", "Catwalk",
    ],
    objects: {
      chair: { icon: "💺", name: "director chair", spot: true, on: "was seated in a director chair" },
      couch: { icon: "🛋️", name: "makeup couch", spot: true, on: "was relaxing on a makeup couch" },
      camera: { icon: "🎥", name: "studio camera" },
      boom: { icon: "🎙️", name: "boom microphone" },
      trunk: { icon: "👗", name: "costume trunk" },
      light: { icon: "💡", name: "spotlight tower" },
    },
    roles: makeRoles('actor/assistant director,boom operator/body double,cinematographer/choreographer,director/diva,editor/extra,focus puller/fashion designer,grip/gaffer,hairdresser/headliner,ingenue/intimacy coordinator,journalist/juvenile lead,key grip/kitchen caterer,voice actor/veteran producer'),
  },
  {
    id: 'museum',
    floors: ['stone', 'tile', 'carpet', 'herring'],
    title: "The Antiquities Museum",
    tagline: "The midnight heist was flawless. The murder was not in the plan.",
    icon: "🏛️",
    hue: 30,
    rooms: [
      "Grand Rotunda", "Egyptian Wing", "Greek Antiquities", "Restoration Lab", "Security Control", "Curator Study",
      "Vault", "Gift Shop", "Sculpture Court", "Medieval Hall", "Boiler Cellar", "Loading Bay",
    ],
    objects: {
      bench: { icon: "🪑", name: "marble bench", spot: true, on: "was resting on a marble bench" },
      cot: { icon: "🛏️", name: "guard cot", spot: true, on: "was resting on a guard cot" },
      sarcophagus: { icon: "⚱️", name: "sarcophagus" },
      statue: { icon: "🗿", name: "classical statue" },
      display: { icon: "💎", name: "display case" },
      turnstile: { icon: "🚧", name: "turnstile" },
    },
    roles: makeRoles('archaeologist/archivist,benefactor/bookkeeper,curator/conservator,director/docent,egyptologist/evaluator,forger/floor warden,guard/goldsmith,historian/heist mastermind,intern/iconographer,janitor/jeweller,key master/keepsake seller,valuer/visiting donor'),
  },
  {
    id: 'vineyard',
    floors: ['stone', 'wood', 'dirt', 'herring'],
    title: "Chateau Vignoble",
    tagline: "A century-old vintage is uncorked. A deadly poison is poured.",
    icon: "🍷",
    hue: 330,
    rooms: [
      "Tasting Salon", "Fermentation Hall", "Oak Barrel Cellar", "Grape Press", "Manor Terrace", "Master Bedroom",
      "Bottling Line", "Manor Library", "Wine Cave", "Kitchen", "Vineyard Plot", "Gatehouse",
    ],
    objects: {
      chair: { icon: "🪑", name: "tasting chair", spot: true, on: "was seated at a tasting chair" },
      bench: { icon: "🪑", name: "terrace bench", spot: true, on: "was resting on a terrace bench" },
      barrel: { icon: "🪵", name: "oak wine barrel" },
      press: { icon: "🍇", name: "grape press" },
      rack: { icon: "🍷", name: "bottle rack" },
      still: { icon: "🛢️", name: "copper still" },
    },
    roles: makeRoles('agronomist/apprentice,barrel cooper/bottler,cellar master/cook,distributor/driver,estate manager/enologist,field laborer/fermenter,grape picker/groundskeeper,harvest coordinator/hostess,importer/inspector,jug filler/journalist,kitchen chief/keg cooper,vintner/vineyard owner'),
  },
  {
    id: 'sanatorium',
    floors: ['tile', 'stone', 'dots', 'carpet'],
    title: "St. Jude Sanatorium",
    tagline: "Behind locked ward doors, the cure was deadlier than the disease.",
    icon: "🏥",
    hue: 160,
    rooms: [
      "Reception Hall", "Pharmacy", "Ward A", "Ward B", "Operating Theater", "Morgue",
      "Doctor Office", "Hydrotherapy Room", "Solarium", "Records Archive", "Boiler Room", "Kitchen",
    ],
    objects: {
      wheelchair: { icon: "🦼", name: "wheelchair", spot: true, on: "was seated in a wheelchair" },
      bed: { icon: "🛏️", name: "hospital bed", spot: true, on: "was resting in a hospital bed" },
      cabinet: { icon: "💊", name: "medicine cabinet" },
      cart: { icon: "🧪", name: "anesthesia cart" },
      xray: { icon: "☢️", name: "x-ray machine" },
      archive: { icon: "🗄️", name: "filing cabinet" },
    },
    roles: makeRoles('anesthetist/attendant,biochemist/bacteriologist,chief surgeon/caregiver,doctor/dentist,epidemiologist/examiner,first responder/forensic pathologist,groundskeeper/gerontologist,head nurse/hospitalier,intern/inspector,janitor/journalist,kinship visitor/kitchen aide,victim of illness/visiting superintendent'),
  },
  {
    id: 'casino',
    floors: ['carpet', 'tile', 'wood', 'herring'],
    title: "Neon Fortune Casino",
    tagline: "The house always wins. Except tonight, in the high-stakes suite.",
    icon: "🎰",
    hue: 280,
    rooms: [
      "Main Casino Floor", "High Roller Lounge", "Cashier Cage", "Security Surveillance", "The Vault", "Penthouse Suite",
      "Rooftop Pool", "Showgirl Dressing Room", "Cocktail Bar", "Kitchen", "Parking Garage", "Valet Booth",
    ],
    objects: {
      stool: { icon: "💺", name: "gaming stool", spot: true, on: "was perched on a gaming stool" },
      chaise: { icon: "🛋️", name: "vip chaise", spot: true, on: "was lounging on a vip chaise" },
      wheel: { icon: "🎡", name: "roulette wheel" },
      slots: { icon: "🎰", name: "slot machine" },
      safe: { icon: "💰", name: "cash safe" },
      table: { icon: "🃏", name: "card table" },
    },
    roles: makeRoles('accountant/armored driver,baccarat dealer/bartender,croupier/casino manager,dice inspector/dancer,entertainer/electrician,floor manager/fixer,gambler/guard,high roller/hostess,investigator/illusionist,janitor/jockey,kitchen hand/key holder,vip gambler/vegas mogul'),
  },
  {
    id: 'biolab',
    floors: ['metal', 'tile', 'dots', 'stone'],
    title: "Apex Bio-Labs",
    tagline: "Sub-level 4 is on lockdown. The pathogen was not an accident.",
    icon: "🔬",
    hue: 120,
    rooms: [
      "Cleanroom 1", "Cleanroom 2", "Centrifuge Bay", "Chemical Vault", "Cryo Storage", "Decon Airlock",
      "Control Center", "Specimen Nursery", "Server Farm", "Breakroom", "Autopsy Suite", "Generator Core",
    ],
    objects: {
      stool: { icon: "🪑", name: "lab stool", spot: true, on: "was seated on a lab stool" },
      pod: { icon: "🛏️", name: "sleep pod", spot: true, on: "was resting in a sleep pod" },
      hood: { icon: "🧪", name: "fume hood" },
      chamber: { icon: "❄️", name: "cryogenic chamber" },
      centrifuge: { icon: "🌀", name: "centrifuge" },
      rack: { icon: "🖥️", name: "server rack" },
    },
    roles: makeRoles('analyst/algorithm engineer,biochemist/bioethicist,chief scientist/cryo technician,dna sequencer/data architect,epidemiologist/ecologist,facility director/forensic chemist,geneticist/guard,hazard responder/hardware tech,intern/immunologist,janitor/junior researcher,keycard admin/kinetic specialist,virology head/venture backer'),
  },
  {
    id: 'pier',
    floors: ['wood', 'sand', 'dirt', 'dots'],
    title: "Wonderland Pier",
    tagline: "The carnival closed ten years ago. Tonight, the carousel spun once more.",
    icon: "🎡",
    hue: 15,
    rooms: [
      "Ghost Train", "Carousel Pavilion", "Hall of Mirrors", "Arcade Alley", "Coaster Shed", "Boardwalk Plankway",
      "Cotton Candy Stand", "Fortune Booth", "Ferris Wheel Base", "Pier Edge", "Maintenance Hut", "Souvenir Shack",
    ],
    objects: {
      bench: { icon: "🪑", name: "pier bench", spot: true, on: "was sitting on a pier bench" },
      cart: { icon: "🏎️", name: "bumper car", spot: true, on: "was sitting in a bumper car" },
      horse: { icon: "🎠", name: "carousel horse" },
      claw: { icon: "🕹️", name: "claw machine" },
      automaton: { icon: "🔮", name: "fortune automaton" },
      generator: { icon: "⚙️", name: "broken generator" },
    },
    roles: makeRoles('arcade repairman/antiquarian,boardwalk walker/barker,caretaker/cotton candy vendor,drifter/daredevil,electrician/urban explorer,fortune teller/fisherman,ghost hunter/groundskeeper,historian/hobo,investigator/insurer,juggler/junk dealer,key keeper/kayaker,vagrant/venture developer'),
  },
  {
    id: 'sub',
    floors: ['metal', 'dots', 'tile', 'stone'],
    title: "The Abyssal Trench",
    tagline: "Five thousand meters deep. Hull creaking. Oxygen dropping. One body.",
    icon: "🌊",
    hue: 195,
    rooms: [
      "Conning Tower", "Sonar Room", "Pilot Cockpit", "Hydrothermal Lab", "Pressure Airlock", "Galley",
      "Crew Quarters", "Ballast Control", "Reactor Chamber", "Specimen Bay", "Torpedo Tube", "Observation Dome",
    ],
    objects: {
      seat: { icon: "💺", name: "pilot seat", spot: true, on: "was strapped into a pilot seat" },
      bunk: { icon: "🛏️", name: "crew bunk", spot: true, on: "was resting in a crew bunk" },
      sonar: { icon: "📻", name: "sonar console" },
      tank: { icon: "🛢️", name: "oxygen tank" },
      valve: { icon: "⚙️", name: "pressure valve" },
      freezer: { icon: "🧊", name: "specimen freezer" },
    },
    roles: makeRoles('aquanaut/acoustic analyst,bathymetry tech/biologist,captain/chief diver,drill operator/doctor,electrical engineer/environmentalist,first officer/flight pilot,geochemist/gyro tech,hydrophone operator/helmsman,instrument tech/intern,junior officer/journeyman,kitchen chief/kinetic engineer,vessel designer/vip expedition funder'),
  },
  {
    id: 'paddock',
    floors: ['tile', 'metal', 'stone', 'carpet'],
    title: "Monaco Grand Prix",
    tagline: "Lap 78. The championship favorite crashed, but the fuel line was cut in the pit.",
    icon: "🏎️",
    hue: 0,
    rooms: [
      "Pit Lane", "Team Garage A", "Team Garage B", "Telemetry Room", "Hospitality Suite", "VIP Balcony",
      "Tire Bay", "Scrutineering Shed", "Fuel Storage", "Media Center", "Drivers Lounge", "Paddock Walkway",
    ],
    objects: {
      bucket: { icon: "💺", name: "racing bucket seat", spot: true, on: "was sitting in a racing bucket seat" },
      sofa: { icon: "🛋️", name: "lounge sofa", spot: true, on: "was relaxing on a lounge sofa" },
      chassis: { icon: "🏎️", name: "race car chassis" },
      tires: { icon: "🛞", name: "tire stack" },
      fuelrig: { icon: "⛽", name: "fuel rig" },
      toolbox: { icon: "🧰", name: "tool cabinet" },
    },
    roles: makeRoles('aerodynamicist/apprentice,brake tech/broadcast commentator,chief mechanic/crew chief,driver/data telemetry lead,engine tuner/electrician,fuel specialist/flag marshal,gearbox tech/grid coordinator,head of team/hospitality host,inspector/international steward,journalist/jack operator,karting prodigy/kitchen chef,veteran champion/vip team owner'),
  },
  {
    id: 'kitchen',
    floors: ['tile', 'metal', 'stone', 'herring'],
    title: "Le Festin Royal",
    tagline: "Three Michelin stars. The critic took one bite of soup and hit the floor.",
    icon: "🍳",
    hue: 20,
    rooms: [
      "Main Dining Room", "Plating Line", "Pastry Kitchen", "Wine Cellar", "Saute Station", "Walk In Cooler",
      "Dishwashing Pit", "Chef Private Office", "Butcher Larder", "Herb Garden", "Hostess Foyer", "Staff Locker",
    ],
    objects: {
      stool: { icon: "🪑", name: "kitchen stool", spot: true, on: "was seated on a kitchen stool" },
      banquette: { icon: "🛋️", name: "dining banquette", spot: true, on: "was sitting in a plush booth" },
      cooktop: { icon: "🍳", name: "copper cooktop" },
      block: { icon: "🪵", name: "butcher block" },
      espresso: { icon: "☕", name: "espresso machine" },
      fridge: { icon: "🧊", name: "industrial fridge" },
    },
    roles: makeRoles('apprentice chef/appetizer cook,baker/butcher,chef de cuisine/chocolatier,dishwasher/dessert chef,expediter/executive chef,fishmonger/fromager,garde manger/grill cook,host/head sommelier,inspector/inventory manager,junior cook/jam maker,kitchen porter/knife sharpener,vip dining critic/veteran restaurateur'),
  },
  {
    id: 'abbey',
    floors: ['stone', 'tile', 'wood', 'carpet'],
    title: "Blackbriar Abbey",
    tagline: "Matins bell rang at midnight. The abbot was found murdered before the altar.",
    icon: "🕯️",
    hue: 45,
    rooms: [
      "Abbey Church", "Scriptorium", "Cloister Walk", "Chapter House", "Refectory", "Cellar",
      "Herb Garden", "Infirmary", "Bell Tower", "Prior Cell", "Dormitory", "Crypt",
    ],
    objects: {
      stall: { icon: "💺", name: "choir stall", spot: true, on: "was praying in a wooden stall" },
      palliasse: { icon: "🛏️", name: "straw bed", spot: true, on: "was kneeling on a straw bed" },
      altar: { icon: "⛪", name: "altar stone" },
      lectern: { icon: "📖", name: "book lectern" },
      reliquary: { icon: "🏺", name: "reliquary" },
      bellrope: { icon: "🔔", name: "bell rope" },
    },
    roles: makeRoles('abbot/almoner,bellringer/brewer,cellarer/cantor,doorkeeper/document copyist,exorcist/elder brother,forester/friar,gardener/glass painter,herbalist/hospitaler,illuminator/inquisitor,journeyman mason/junior novice,kitchener/keeper of keys,visiting cardinal/vicar general'),
  },
  {
    id: 'campground',
    floors: ['grass', 'dirt', 'wood', 'stone'],
    title: "Camp Whispering Pines",
    tagline: "The legend of the lake monster is fake. The killer in the woods is real.",
    icon: "🏕️",
    hue: 140,
    rooms: [
      "Mess Hall", "Counselor Cabin", "Bunkhouse Alpha", "Bunkhouse Beta", "Campfire Clearing", "Canoe Dock",
      "Arts Shed", "Archery Range", "Shower Block", "Infirmary", "Lake Shore", "Director Office",
    ],
    objects: {
      chair: { icon: "🪑", name: "camp chair", spot: true, on: "was sitting in a camp chair" },
      bunk: { icon: "🛏️", name: "bunk bed", spot: true, on: "was resting on a top bunk" },
      table: { icon: "🪵", name: "picnic table" },
      canoes: { icon: "🛶", name: "stack of canoes" },
      fire: { icon: "🔥", name: "fire ring" },
      board: { icon: "📋", name: "bulletin board" },
    },
    roles: makeRoles('archery instructor/arts counselor,boating coach/bugler,camp counselor/cook,drama coach/director,ecology guide/eagle scout,fisher/first aid counselor,groundskeeper/guitar player,head counselor/hiker,instructor/intern,junior counselor/jumper,kayak guide/kitchen helper,veteran camp owner/visitor'),
  },
  {
    id: 'mars',
    floors: ['sand', 'metal', 'tile', 'dots'],
    title: "New Olympus Colony",
    tagline: "Dust storm outside. Six months until the next shuttle. One broken helmet.",
    icon: "🪐",
    hue: 10,
    rooms: [
      "Command Hub", "Hydroponic Dome", "Oxygen Scrubber", "Airlock Module", "Geology Lab", "Habitat Quarters",
      "Rover Bay", "Solar Array Control", "Comms Array", "Gymnasium", "Medical Bay", "Water Reclamation",
    ],
    objects: {
      seat: { icon: "💺", name: "rec chair", spot: true, on: "was strapped into a recreation chair" },
      pod: { icon: "🛏️", name: "sleep cubicle", spot: true, on: "was resting in a sleep cubicle" },
      tank: { icon: "🛢️", name: "oxygen tank" },
      rover: { icon: "🚙", name: "rover chassis" },
      drill: { icon: "⚙️", name: "rock drill" },
      tower: { icon: "🌱", name: "hydroponic tower" },
    },
    roles: makeRoles('astrobiologist/agronomist,botanist/biosphere tech,commander/chemist,drill operator/doctor,environmental engineer/electrician,flight specialist/farmer,geologist/ground controller,habitat architect/hydroponics chief,it specialist/instrument mechanic,janitor/junior colonist,kinetic operator/kitchen hand,venture sponsor/visiting inspector'),
  },
  {
    id: 'london',
    floors: ['stone', 'wood', 'carpet', 'dirt'],
    title: "Baker Street Rogues",
    tagline: "Thick smog blankets the Thames. A body is found beneath the streetlamps.",
    icon: "🕵️",
    hue: 220,
    rooms: [
      "Parlor Study", "Cobblestone Alley", "Pawn Shop", "Opium Den", "Police Desk", "Cab Stand",
      "Tenement Attic", "Newsstand Corner", "Pub Taproom", "Thames Wharf", "Mortuary", "Apothecary",
    ],
    objects: {
      armchair: { icon: "🪑", name: "worn armchair", spot: true, on: "was smoking in a worn armchair" },
      cot: { icon: "🛏️", name: "narrow cot", spot: true, on: "was resting on a narrow cot" },
      streetlamp: { icon: "🏮", name: "gas streetlamp" },
      hansom: { icon: "🐎", name: "hansom cab" },
      fireplace: { icon: "🔥", name: "chimney hearth" },
      kiosk: { icon: "📰", name: "news kiosk" },
    },
    roles: makeRoles('apothecary/aristocrat,blackmailer/bowler hat seller,constable/chimney sweep,detective/doctor,engraver/errand boy,forger/fishmonger,gentlemen valet/grave robber,hansom cabbie/hawker,informer/inspector,jeweller/journalist,knife sharpener/keg tapster,victim of nobility/vagabond'),
  },
  {
    id: 'market',
    floors: ['stone', 'wood', 'sand', 'dots'],
    title: "Lantern Festival",
    tagline: "Red lanterns float across the river. A shadow strikes before the fireworks.",
    icon: "🏮",
    hue: 35,
    rooms: [
      "Lantern Bridge", "Tea Pavilion", "Silk Stall", "Fireworks Barge", "Calligraphy Shop", "River Pagoda",
      "Noodle Court", "Dragon Boat", "Fortune Teller", "Garden Courtyard", "Bell Tower", "Shadow Stage",
    ],
    objects: {
      stool: { icon: "🪑", name: "bamboo stool", spot: true, on: "was sitting on a bamboo stool" },
      cushion: { icon: "🛋️", name: "silk cushion", spot: true, on: "was reclining on a silk cushion" },
      lantern: { icon: "🏮", name: "stone lantern" },
      fireworks: { icon: "🎆", name: "firework crate" },
      gong: { icon: "🔔", name: "gong stand" },
      teacart: { icon: "🍵", name: "tea cart" },
    },
    roles: makeRoles('acrobat/astrologer,boatman/bamboo carver,calligrapher/cook,drummer/dancer,embroiderer/elder,firework master/fan painter,gong striker/guard,herbalist/harbor guide,instrument maker/imperial envoy,jade carver/juggler,kite maker/kitchen cook,village magistrate/visiting noble'),
  },
  {
    id: 'venice',
    floors: ['tile', 'stone', 'carpet', 'herring'],
    title: "Doge Masquerade",
    tagline: "Behind the gilded masks and velvet cloaks, an assassin smiles.",
    icon: "🏰",
    hue: 315,
    rooms: [
      "Grand Ballroom", "Gondola Dock", "Casino Ridotto", "Mask Atelier", "Canal Balcony", "Mirrored Gallery",
      "Wine Cellar", "Private Boudoir", "Palazzo Chapel", "Servants Mezzanine", "Courtyard", "Armory",
    ],
    objects: {
      throne: { icon: "💺", name: "gilded chair", spot: true, on: "was seated on a gilded chair" },
      daybed: { icon: "🛋️", name: "silk daybed", spot: true, on: "was resting on a silk daybed" },
      gondola: { icon: "🛶", name: "gondola" },
      harpsichord: { icon: "🎹", name: "harpsichord" },
      fountain: { icon: "⛲", name: "marble fountain" },
      maskstand: { icon: "🎭", name: "mask display" },
    },
    roles: makeRoles('aristocrat/alchemist,barcarolle singer/boat builder,courtesan/carnival poet,doge/diplomat,envoy/embroiderer,fencing master/falconer,gondolier/goldsmith,harlequin/herald,inquisitor/illusionist,jester/jeweller,knight of malta/key master,venetian senator/visiting merchant'),
  },
  {
    id: 'mine',
    floors: ['dirt', 'stone', 'wood', 'sand'],
    title: "Iron Lode Deep",
    tagline: "Three hundred feet underground. The air line cut. The mother lode claim stolen.",
    icon: "⛏️",
    hue: 40,
    rooms: [
      "Shaft Elevator", "Main Drift", "Dynamite Magazine", "Smelting Oven", "Assay Office", "Timber Storage",
      "Water Sump", "Mule Stables", "Tool Crib", "Shift Boss Office", "Miners Mess", "Deep Winze",
    ],
    objects: {
      keg: { icon: "🪑", name: "nail keg", spot: true, on: "was sitting on an upturned nail keg" },
      bunk: { icon: "🛏️", name: "canvas bunk", spot: true, on: "was resting on a rough canvas bunk" },
      orecart: { icon: "🛒", name: "ore cart" },
      hoist: { icon: "⚙️", name: "steam hoist" },
      dynamite: { icon: "🧨", name: "dynamite crate" },
      drill: { icon: "⛏️", name: "rock drill" },
    },
    roles: makeRoles('assayer/axeman,blacksmith/blaster,cart driver/carpenter,driller/dynamite handler,engineer/hoist operator,foreman/farrier,geologist/gold panner,hoistman/healer,inspector/iron worker,jackhammer man/junior skinner,keg maker/kitchen cook,vein claimant/venture capitalist'),
  },
  {
    id: 'funicular',
    floors: ['wood', 'stone', 'metal', 'tile'],
    title: "The Alpine Funicular",
    tagline: "The cable snapped between stations. Eleven passengers trapped midway.",
    icon: "🚡",
    hue: 205,
    rooms: [
      "Valley Terminal", "Upper Engine Room", "Funicular Car A", "Funicular Car B", "Sheave Tower", "Observation Terrace",
      "Ski Patrol Shack", "Ticket Hall", "Transformer Vault", "Souvenir Kiosk", "Glacier Overlook", "Staff Bunkhouse",
    ],
    objects: {
      bench: { icon: "💺", name: "passenger bench", spot: true, on: "was sitting on a passenger bench" },
      stool: { icon: "🪑", name: "operator stool", spot: true, on: "was resting on an operator stool" },
      winch: { icon: "⚙️", name: "cable winch" },
      skirack: { icon: "🎿", name: "ski rack" },
      generator: { icon: "🛢️", name: "generator unit" },
      luggage: { icon: "🧳", name: "luggage cart" },
    },
    roles: makeRoles('avalanche controller/alpine guide,brake operator/billeter,conductor/cable splicer,dispatcher/doctor,electrical engineer/excursionist,funicular driver/first aider,glaciologist/gearbox tech,hotelier/hiker,inspector/instructor,journalist/junior patrol,kitchen cook/knot rigger,veteran mountaineer/visiting vip'),
  },
  {
    id: 'library',
    floors: ['stone', 'tile', 'wood', 'carpet'],
    title: "Alexandria Atheneum",
    tagline: "The scroll of lost secrets is gone. The chief librarian lies among burning papyrus.",
    icon: "📚",
    hue: 52,
    rooms: [
      "Great Peristyle", "Papyrus Vault", "Observatory", "Translation Chamber", "Scribes Hall", "Philosopher Garden",
      "Geometry Hall", "Map Archive", "Courtyard Fountain", "Mosaic Gallery", "Lecture Theater", "Archivist Sanctum",
    ],
    objects: {
      bench: { icon: "🪑", name: "stone bench", spot: true, on: "was seated on a carved stone bench" },
      mat: { icon: "🛏️", name: "reed mat", spot: true, on: "was resting on a woven reed mat" },
      cupboard: { icon: "📜", name: "scroll cupboard" },
      sphere: { icon: "🪐", name: "armillary sphere" },
      bust: { icon: "🗿", name: "marble bust" },
      burner: { icon: "🏺", name: "incense burner" },
    },
    roles: makeRoles('astronomer/archivist,botanist/bookbinder,chronicler/cartographer,dialectician/doctor,epigrapher/educator,folklorist/fanbearer,grammarian/geometer,historian/herbalist,illuminator/interpreter,jurist/junior scribe,keeper of scrolls/knot reader,visiting philosopher/veteran sage'),
  },
  {
    id: 'festival',
    floors: ['grass', 'dirt', 'wood', 'dots'],
    title: "Riff Valley Festival",
    tagline: "Eighty thousand screaming fans. The headliner dropped dead before the encore.",
    icon: "🎸",
    hue: 300,
    rooms: [
      "Main Stage", "Backstage VIP", "Mixing Tower", "Artist Trailer", "Guitar Tech Tent", "Merch Pavilion",
      "First Aid Tent", "Beer Garden", "Green Room", "Security Checkpoint", "Campers Field", "Port-a-Jon Alley",
    ],
    objects: {
      chair: { icon: "💺", name: "lawn chair", spot: true, on: "was chilling in a lawn chair" },
      sofa: { icon: "🛋️", name: "trailer sofa", spot: true, on: "was resting on a trailer sofa" },
      amp: { icon: "🔊", name: "amp stack" },
      drums: { icon: "🥁", name: "drum kit" },
      roadcase: { icon: "📦", name: "road case" },
      lighttower: { icon: "💡", name: "light tower" },
    },
    roles: makeRoles('audio engineer/artist agent,bass player/bodyguard,crew chief/cameraman,drummer/disc jockey,electrician/event producer,frontman/fan president,guitarist/groupie coordinator,headliner/head of security,instrument tech/influencer,journalist/junior stagehand,keyboardist/key grip,vip record exec/vocal coach'),
  },
  {
    id: 'shogunate',
    floors: ['wood', 'stone', 'dots', 'herring'],
    title: "Shadows of the Shogunate",
    tagline: "The nightingale floors chirped once. The daimyo did not wake.",
    icon: "🏯",
    hue: 10,
    rooms: [
      "Daimyo Hall", "Tea Ceremony Room", "Zen Garden", "Guard Gate", "Armory", "Kitchen",
      "Falconry Yard", "Ninja Loft", "Stables", "Shrine", "Moon Balcony", "Sentry Tower",
    ],
    objects: {
      tatami: { icon: "🪑", name: "tatami cushion", spot: true, on: "was kneeling on a tatami mat" },
      futon: { icon: "🛏️", name: "silk futon", spot: true, on: "was resting on a silk futon" },
      armor: { icon: "🥷", name: "samurai armor" },
      shoji: { icon: "🚪", name: "shoji screen" },
      bonsai: { icon: "🪴", name: "bonsai table" },
      taiko: { icon: "🥁", name: "taiko drum" },
    },
    roles: makeRoles('archer/artisan,bushi warrior/bowyer,calligrapher/cook,daimyo/drummer,envoy/embroiderer,falconer/foot soldier,geisha/guard,hatamoto retainer/herbalist,inquisitor/iron smith,jester/junior samurai,kendo master/kitchen hand,veteran general/visiting monk'),
  },
  {
    id: 'airship',
    floors: ['metal', 'carpet', 'wood', 'dots'],
    title: "Stratosphere One",
    tagline: "Floating over the Atlantic at eight thousand feet. The steering wheel was jammed.",
    icon: "✈️",
    hue: 215,
    rooms: [
      "Promenade Deck", "Smoking Lounge", "Cockpit Bridge", "Dining Saloon", "Radio Cabin", "Port Engine Gondola",
      "Starboard Gondola", "Gas Catwalk", "Stateroom Alpha", "Galley", "Cargo Hold", "Rigging Loft",
    ],
    objects: {
      armchair: { icon: "💺", name: "wicker armchair", spot: true, on: "was seated in a wicker chair" },
      berth: { icon: "🛏️", name: "overhead bunk", spot: true, on: "was resting in an overhead bunk" },
      ballast: { icon: "🛢️", name: "ballast tank" },
      column: { icon: "🧭", name: "steering column" },
      winch: { icon: "⚙️", name: "mooring winch" },
      luggage: { icon: "🧳", name: "luggage pile" },
    },
    roles: makeRoles('aeronaut/aristocrat,barman/boatswain,captain/chief rigger,dirigible pilot/doctor,engine mechanic/envoy,first officer/flight steward,gas bag inspector/ground crew chief,helmsman/hostess,instrument tech/industrialist,journalist/junior steward,kitchen chef/knot rigger,vessel inventor/vip diplomat'),
  },
  {
    id: 'mall',
    floors: ['tile', 'stone', 'carpet', 'dots'],
    title: "Starlight Galleria",
    tagline: "Closing time at the mall. The security grates are down, and someone is trapped inside.",
    icon: "🛍️",
    hue: 320,
    rooms: [
      "Food Court", "Arcade", "Record Store", "Photo Studio", "Department Store", "Security Office",
      "Atrium Fountain", "Service Corridors", "Cinema Lobby", "Toy Emporium", "Skate Shop", "Escalator Hub",
    ],
    objects: {
      plasticchair: { icon: "🪑", name: "plastic chair", spot: true, on: "was sitting on a plastic chair" },
      photobench: { icon: "🛋️", name: "photo booth bench", spot: true, on: "was seated inside a photo booth" },
      fountain: { icon: "⛲", name: "mall fountain" },
      gumball: { icon: "🍬", name: "gumball machine" },
      gate: { icon: "🚧", name: "security gate" },
      mannequin: { icon: "👗", name: "clothing mannequin" },
    },
    roles: makeRoles('arcade manager/aerobics instructor,barista/boutique clerk,cinema projectionist/cashier,department manager/disc jockey,escalator mechanic/eyewear stylist,fry cook/fashionista,greeter/guard,hair stylist/head of security,ice cream scooper/informant,janitor/jewel kiosk seller,key cutter/kitchen hand,veteran mall owner/visiting store inspector'),
  },
  {
    id: 'derby',
    floors: ['grass', 'dirt', 'wood', 'carpet'],
    title: "Ascot Royal Derby",
    tagline: "The Gold Cup race was won by a nose. The winning jockey died in the winner circle.",
    icon: "🐎",
    hue: 135,
    rooms: [
      "Winner Enclosure", "Royal Box", "Betting Ring", "Paddock Ring", "Weighing Room", "Jockeys Room",
      "Vet Clinic", "Saddling Boxes", "Stables", "Grandstand Terrace", "Stewards Room", "Members Bar",
    ],
    objects: {
      turfchair: { icon: "🪑", name: "turf chair", spot: true, on: "was watching from a turf chair" },
      stablebench: { icon: "🪑", name: "stable bench", spot: true, on: "was resting on a stable bench" },
      float: { icon: "🐎", name: "horse float" },
      trophy: { icon: "🏆", name: "trophy case" },
      board: { icon: "📊", name: "bookmaker board" },
      haystack: { icon: "🌾", name: "hay bale stack" },
    },
    roles: makeRoles('apprentice jockey/aristocrat,bookmaker/breeder,champion jockey/clerk of scales,derby steward/doper,equine therapist/owner envoy,farrier/form analyst,groom/groundskeeper,horse trainer/head stableman,inspector/investor,jockey/judge,kennel master/kitchen caterer,veteran horse owner/visiting royalty'),
  },
  {
    id: 'halloween',
    floors: ['stone', 'wood', 'dirt', 'carpet'],
    title: "All Hallows Eve",
    tagline: "Costumes, candlelight, and candy. But one guest was not wearing a disguise.",
    icon: "🎃",
    hue: 25,
    rooms: [
      "Haunted Conservatory", "Pumpkin Patch", "Costume Ballroom", "Witch Parlor", "Crypt", "Spider Attic",
      "Occult Library", "Cellar Maze", "Front Porch", "Black Cat Alley", "Cemetery Gate", "Apple Bobbing Hall",
    ],
    objects: {
      coffin: { icon: "⚰️", name: "decorative coffin", spot: true, on: "was resting in a decorative coffin" },
      swing: { icon: "🪑", name: "porch swing", spot: true, on: "was sitting on the porch swing" },
      pumpkin: { icon: "🎃", name: "jack-o-lantern" },
      tombstone: { icon: "🪦", name: "tombstone" },
      cauldron: { icon: "🍲", name: "cauldron" },
      web: { icon: "🕸️", name: "spider web" },
    },
    roles: makeRoles('astrologer/actor,black cat breeder/baker,costume designer/candy maker,diviner/decorator,embalmer/entertainer,fortune teller/florist,ghost enthusiast/gravedigger,haunted house host/herbalist,illusionist/investigator,juggler/jack-o-lantern carver,keepsake collector/key keeper,veteran manor heir/visiting storyteller'),
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
