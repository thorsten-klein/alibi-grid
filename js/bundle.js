// Made by tools/bundle.mjs from the files in js/. Do not edit by hand.
(() => {
'use strict';
// ---- js/levels.js ----
// Made by tools/generate.mjs. Do not edit by hand.
const CAMPAIGNS = [
 {
  "theme": "manor",
  "levels": [
   {
    "size": 4,
    "rooms": "0011001122222222",
    "objects": "f...b.......a..a",
    "roomNames": [
     "Pantry",
     "Chapel",
     "Ballroom"
    ],
    "people": [
     "Ada the author",
     "Bella the butler",
     "Carl the cook",
     "Vera the valet"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "next",
      "clock"
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "col",
      0
     ],
     [
      3,
      "next",
      "chair"
     ]
    ],
    "solution": [
     1,
     7,
     8,
     14
    ],
    "doors": [
     [
      1,
      2
     ],
     [
      5,
      9
     ],
     [
      7,
      11
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      15,
      "b"
     ]
    ],
    "facts": [
     [
      "touch",
      null,
      0
     ]
    ]
   },
   {
    "size": 5,
    "rooms": "0000011111111112223322233",
    "objects": "ee........f..a.aaf...fa.f",
    "roomNames": [
     "Billiard Room",
     "Dining Room",
     "Hall",
     "Study"
    ],
    "people": [
     "Arthur the author",
     "Bella the butler",
     "Clara the cook",
     "Della the doctor",
     "Viola the vicar"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "col",
      4
     ],
     [
      2,
      "next",
      "chair"
     ],
     [
      2,
      "row",
      2
     ],
     [
      3,
      "on",
      "chair"
     ]
    ],
    "solution": [
     3,
     9,
     12,
     16,
     20
    ],
    "doors": [
     [
      0,
      5
     ],
     [
      10,
      15
     ],
     [
      14,
      19
     ],
     [
      17,
      18
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      19,
      "r"
     ],
     [
      22,
      "b"
     ]
    ],
    "facts": [
     [
      "emptyRooms",
      null,
      1
     ]
    ]
   },
   {
    "size": 6,
    "rooms": "000111000111222233222233444433444433",
    "objects": "b..ec..ae............f.dbf......ccbc",
    "roomNames": [
     "Cellar",
     "Library",
     "Gallery",
     "Ballroom",
     "Pantry"
    ],
    "people": [
     "Alma the architect",
     "Basil the banker",
     "Victor the vicar",
     "Celia the cook",
     "Dexter the dealer",
     "Elias the editor"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "next",
      "sofa"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "row",
      3
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "on",
      "sofa"
     ]
    ],
    "solution": [
     5,
     6,
     14,
     19,
     27,
     34
    ],
    "doors": [
     [
      2,
      3
     ],
     [
      8,
      14
     ],
     [
      9,
      15
     ],
     [
      11,
      17
     ],
     [
      21,
      22
     ],
     [
      19,
      25
     ],
     [
      27,
      28
     ]
    ],
    "windows": [
     [
      11,
      "r"
     ],
     [
      17,
      "r"
     ],
     [
      32,
      "b"
     ],
     [
      35,
      "r"
     ]
    ],
    "facts": [
     [
      "windowCount",
      null,
      0
     ]
    ]
   },
   {
    "size": 7,
    "rooms": "0000111000011100001112223333222333322244442224444",
    "objects": "...e.....a..ec.......c..b.b...fbdb...d.c.....aa..",
    "roomNames": [
     "Hall",
     "Library",
     "Chapel",
     "Ballroom",
     "Study"
    ],
    "people": [
     "Vera the valet",
     "Albert the architect",
     "Basil the banker",
     "Cora the cook",
     "Dexter the dealer",
     "Ena the editor",
     "Felix the florist"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "alone"
     ],
     [
      2,
      "next",
      "shelf"
     ],
     [
      2,
      "row",
      2
     ],
     [
      3,
      "next",
      "shelf"
     ],
     [
      4,
      "on",
      "sofa"
     ],
     [
      4,
      "next",
      "piano"
     ],
     [
      5,
      "notRoom",
      0
     ],
     [
      6,
      "next",
      "piano"
     ]
    ],
    "solution": [
     4,
     10,
     20,
     22,
     33,
     35,
     44
    ],
    "doors": [
     [
      10,
      11
     ],
     [
      14,
      21
     ],
     [
      17,
      24
     ],
     [
      18,
      25
     ],
     [
      30,
      31
     ],
     [
      44,
      45
     ],
     [
      34,
      41
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      5,
      "t"
     ],
     [
      21,
      "l"
     ],
     [
      42,
      "l"
     ]
    ],
    "facts": [
     [
      "nextCount",
      "shelf",
      2
     ],
     [
      "nextCount",
      "chair",
      1
     ]
    ]
   },
   {
    "size": 8,
    "rooms": "0000001100000011222200112222001133334444333344445555444455554444",
    "objects": ".........a..f..bb....ad...fbe.....bc.b..fbc........f...cbc.b.fbd",
    "roomNames": [
     "Kitchen",
     "Library",
     "Billiard Room",
     "Pantry",
     "Gallery",
     "Ballroom"
    ],
    "people": [
     "Alma the author",
     "Bea the butler",
     "Cedric the colonel",
     "Della the doctor",
     "Edith the envoy",
     "Felix the florist",
     "Victor the vicar",
     "Greta the guest"
    ],
    "victim": 6,
    "clues": [
     [
      0,
      "next",
      "clock"
     ],
     [
      0,
      "col",
      4
     ],
     [
      1,
      "next",
      "clock"
     ],
     [
      2,
      "on",
      "chair"
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "next",
      "sofa"
     ],
     [
      5,
      "notRoom",
      1
     ],
     [
      6,
      "next",
      "sofa"
     ],
     [
      7,
      "next",
      "shelf"
     ]
    ],
    "solution": [
     4,
     11,
     21,
     31,
     33,
     46,
     48,
     58
    ],
    "doors": [
     [
      5,
      6
     ],
     [
      10,
      18
     ],
     [
      28,
      36
     ],
     [
      30,
      38
     ],
     [
      24,
      32
     ],
     [
      35,
      36
     ],
     [
      42,
      50
     ],
     [
      59,
      60
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      7,
      "t"
     ],
     [
      16,
      "l"
     ],
     [
      24,
      "l"
     ],
     [
      39,
      "r"
     ]
    ],
    "facts": [
     [
      "furniture",
      null,
      1
     ],
     [
      "doorCount",
      null,
      0
     ],
     [
      "roomCount",
      0,
      3
     ]
    ]
   },
   {
    "size": 9,
    "rooms": "001111222001111222001111222000333444000333444555333444555336666555336666555336666",
    "objects": "...dab..c...bb..b..c....a.dbb.a...d.f..e..f..........ef..b..b.d.....bf......e....",
    "roomNames": [
     "Study",
     "Library",
     "Pantry",
     "Ballroom",
     "Gallery",
     "Chapel",
     "Dining Room"
    ],
    "people": [
     "Albert the author",
     "Bea the banker",
     "Cora the cook",
     "Dmitri the doctor",
     "Victor the vicar",
     "Elias the envoy",
     "Freya the footman",
     "Gideon the gardener",
     "Henrik the housekeeper"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "notRoom",
      1
     ],
     [
      0,
      "alone"
     ],
     [
      1,
      "next",
      "shelf"
     ],
     [
      1,
      "same",
      3
     ],
     [
      2,
      "row",
      2
     ],
     [
      3,
      "on",
      "sofa"
     ],
     [
      4,
      "next",
      "plant"
     ],
     [
      5,
      "next",
      "plant"
     ],
     [
      5,
      "alone"
     ],
     [
      6,
      "on",
      "sofa"
     ],
     [
      7,
      "same",
      8
     ],
     [
      8,
      "window"
     ]
    ],
    "solution": [
     6,
     10,
     20,
     27,
     40,
     52,
     57,
     68,
     80
    ],
    "doors": [
     [
      1,
      2
     ],
     [
      29,
      30
     ],
     [
      37,
      46
     ],
     [
      23,
      24
     ],
     [
      23,
      32
     ],
     [
      24,
      33
     ],
     [
      50,
      51
     ],
     [
      65,
      66
     ],
     [
      50,
      59
     ],
     [
      53,
      62
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      63,
      "l"
     ],
     [
      74,
      "b"
     ],
     [
      76,
      "b"
     ],
     [
      80,
      "b"
     ]
    ]
   },
   {
    "size": 10,
    "rooms": "0000111222000011122200001112223333111222333311122244556666774455666677445566667744556666774455666677",
    "objects": "...bbadb.c.ca.......a...aa....e..b.b....be....d..eb.....b.....f.acc...b.a.c..ba..fe.da.cea.bca..a...",
    "roomNames": [
     "Billiard Room",
     "Study",
     "Kitchen",
     "Dining Room",
     "Chapel",
     "Gallery",
     "Hall",
     "Library"
    ],
    "people": [
     "Arthur the author",
     "Basil the banker",
     "Victor the vicar",
     "Celia the cook",
     "Dexter the dealer",
     "Elsa the envoy",
     "Flora the florist",
     "Gus the gardener",
     "Henrik the housekeeper",
     "Isla the illustrator"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "door"
     ],
     [
      1,
      "window"
     ],
     [
      2,
      "next",
      "sofa"
     ],
     [
      3,
      "next",
      "piano"
     ],
     [
      3,
      "next",
      "sofa"
     ],
     [
      4,
      "next",
      "plant"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "same",
      7
     ],
     [
      6,
      "row",
      6
     ],
     [
      7,
      "next",
      "plant"
     ],
     [
      8,
      "next",
      "plant"
     ],
     [
      9,
      "next",
      "piano"
     ]
    ],
    "solution": [
     7,
     10,
     25,
     36,
     42,
     59,
     61,
     78,
     83,
     94
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      22,
      32
     ],
     [
      6,
      7
     ],
     [
      43,
      44
     ],
     [
      44,
      54
     ],
     [
      47,
      57
     ],
     [
      48,
      58
     ],
     [
      41,
      51
     ],
     [
      42,
      52
     ],
     [
      81,
      82
     ],
     [
      93,
      94
     ],
     [
      97,
      98
     ]
    ],
    "windows": [
     [
      6,
      "t"
     ],
     [
      10,
      "l"
     ],
     [
      60,
      "l"
     ],
     [
      69,
      "r"
     ],
     [
      79,
      "r"
     ],
     [
      96,
      "b"
     ]
    ],
    "facts": [
     [
      "furniture",
      null,
      3
     ],
     [
      "roomCount",
      6,
      1
     ]
    ]
   },
   {
    "size": 11,
    "rooms": "0000111222200001112222000011122220000111222233333445555333334455553333344555533333445555666664477776666644777766666447777",
    "objects": "...a..ce.d.d.f........c......b.....cb....e............faa...e.d....d.......f.....f.........ba..c..fc..b.b...d........b...",
    "roomNames": [
     "Ballroom",
     "Study",
     "Conservatory",
     "Pantry",
     "Cellar",
     "Billiard Room",
     "Chapel",
     "Hall"
    ],
    "people": [
     "Alma the architect",
     "Vivian the vicar",
     "Birgit the banker",
     "Cedric the colonel",
     "Della the dealer",
     "Edgar the editor",
     "Freya the florist",
     "Grace the gardener",
     "Hazel the heir",
     "Isla the illustrator",
     "Juno the judge"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "next",
      "piano"
     ],
     [
      1,
      "next",
      "piano"
     ],
     [
      1,
      "next",
      "clock"
     ],
     [
      2,
      "on",
      "sofa"
     ],
     [
      3,
      "door"
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "next",
      "clock"
     ],
     [
      4,
      "row",
      4
     ],
     [
      5,
      "next",
      "chair"
     ],
     [
      5,
      "alone"
     ],
     [
      6,
      "next",
      "clock"
     ],
     [
      7,
      "same",
      10
     ],
     [
      8,
      "alone"
     ],
     [
      9,
      "room",
      6
     ],
     [
      10,
      "window"
     ]
    ],
    "solution": [
     0,
     12,
     29,
     37,
     53,
     57,
     76,
     82,
     96,
     102,
     116
    ],
    "doors": [
     [
      36,
      37
     ],
     [
      36,
      47
     ],
     [
      17,
      18
     ],
     [
      37,
      48
     ],
     [
      38,
      49
     ],
     [
      43,
      54
     ],
     [
      48,
      49
     ],
     [
      81,
      92
     ],
     [
      72,
      73
     ],
     [
      114,
      115
     ],
     [
      94,
      95
     ],
     [
      86,
      97
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      54,
      "r"
     ],
     [
      77,
      "l"
     ],
     [
      110,
      "b"
     ],
     [
      111,
      "b"
     ],
     [
      116,
      "b"
     ],
     [
      119,
      "b"
     ]
    ],
    "facts": [
     [
      "nextCount",
      "chair",
      1
     ],
     [
      "nextCount",
      "plant",
      0
     ]
    ]
   },
   {
    "size": 12,
    "rooms": "000001111111000001111111000001111111222223333444222223333444555553333444555553333444555553333444666677778888666677778888666677778888666677778888",
    "objects": ".....e.c......e..bb...........e...cb......f..aca..ff........ba...cc...bbe...c...beb.a...a.f.....b..c.................b....c..b.b.bd....afb..d...",
    "roomNames": [
     "Library",
     "Ballroom",
     "Conservatory",
     "Billiard Room",
     "Hall",
     "Dining Room",
     "Cellar",
     "Pantry",
     "Gallery"
    ],
    "people": [
     "Arthur the author",
     "Viola the valet",
     "Basil the banker",
     "Carl the colonel",
     "Dora the doctor",
     "Edgar the envoy",
     "Freya the footman",
     "Gwen the guest",
     "Henrik the heir",
     "Ines the inspector",
     "Jade the judge",
     "Kai the keeper"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "next",
      "plant"
     ],
     [
      1,
      "next",
      "shelf"
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "next",
      "clock"
     ],
     [
      4,
      "door"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "next",
      "chair"
     ],
     [
      7,
      "on",
      "chair"
     ],
     [
      7,
      "next",
      "shelf"
     ],
     [
      8,
      "col",
      8
     ],
     [
      9,
      "on",
      "sofa"
     ],
     [
      9,
      "same",
      11
     ],
     [
      10,
      "next",
      "piano"
     ],
     [
      11,
      "next",
      "piano"
     ],
     [
      11,
      "row",
      11
     ]
    ],
    "solution": [
     6,
     19,
     24,
     38,
     53,
     63,
     73,
     88,
     104,
     117,
     131,
     142
    ],
    "doors": [
     [
      4,
      5
     ],
     [
      27,
      39
     ],
     [
      30,
      42
     ],
     [
      33,
      45
     ],
     [
      52,
      53
     ],
     [
      51,
      63
     ],
     [
      56,
      57
     ],
     [
      64,
      65
     ],
     [
      91,
      103
     ],
     [
      92,
      104
     ],
     [
      95,
      107
     ],
     [
      87,
      99
     ],
     [
      88,
      100
     ],
     [
      111,
      112
     ],
     [
      127,
      128
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      10,
      "t"
     ],
     [
      11,
      "t"
     ],
     [
      36,
      "l"
     ],
     [
      48,
      "l"
     ],
     [
      134,
      "b"
     ],
     [
      138,
      "b"
     ]
    ],
    "facts": [
     [
      "nextCount",
      "shelf",
      4
     ],
     [
      "roomCount",
      5,
      3
     ],
     [
      "alone",
      null,
      3
     ]
    ]
   }
  ]
 },
 {
  "theme": "train",
  "levels": [
   {
    "size": 4,
    "rooms": "0011001122222222",
    "objects": "eba...e.........",
    "roomNames": [
     "Sleeper B",
     "Baggage Car",
     "Sleeper C"
    ],
    "people": [
     "Albert the attendant",
     "Bella the bookseller",
     "Clara the courier",
     "Vera the violinist"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "on",
      "bunk"
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "col",
      2
     ],
     [
      3,
      "row",
      3
     ]
    ],
    "solution": [
     1,
     7,
     10,
     12
    ],
    "doors": [
     [
      1,
      2
     ],
     [
      4,
      8
     ],
     [
      7,
      11
     ]
    ],
    "windows": [
     [
      0,
      "t"
     ],
     [
      2,
      "t"
     ]
    ]
   },
   {
    "size": 5,
    "rooms": "0000000000112221122233333",
    "objects": ".....a.e.....dfabb.....c.",
    "roomNames": [
     "Dining Car",
     "Baggage Car",
     "Sleeper A",
     "Guard's Van"
    ],
    "people": [
     "Astrid the accordionist",
     "Vera the vendor",
     "Bella the banker",
     "Carl the conductor",
     "Daisy the diplomat"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "next",
      "seat"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "on",
      "bunk"
     ],
     [
      4,
      "window"
     ]
    ],
    "solution": [
     0,
     8,
     11,
     17,
     24
    ],
    "doors": [
     [
      6,
      11
     ],
     [
      9,
      14
     ],
     [
      16,
      17
     ],
     [
      16,
      21
     ],
     [
      19,
      24
     ]
    ],
    "windows": [
     [
      14,
      "r"
     ],
     [
      15,
      "l"
     ],
     [
      24,
      "b"
     ]
    ],
    "facts": [
     [
      "edge",
      null,
      2
     ]
    ]
   },
   {
    "size": 6,
    "rooms": "000011000011223344223344223344223344",
    "objects": "...f...f...ba...c........a.........a",
    "roomNames": [
     "Dining Car",
     "Lounge Car",
     "Sleeper A",
     "Observation Car",
     "Sleeper B"
    ],
    "people": [
     "Astrid the accordionist",
     "Basil the bookseller",
     "Cedric the conductor",
     "Dora the dentist",
     "Elias the engineer",
     "Vivian the violinist"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "next",
      "bunk"
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "same",
      4
     ],
     [
      3,
      "next",
      "seat"
     ],
     [
      4,
      "row",
      4
     ],
     [
      4,
      "col",
      3
     ],
     [
      5,
      "door"
     ],
     [
      5,
      "row",
      5
     ]
    ],
    "solution": [
     5,
     10,
     14,
     18,
     27,
     31
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      7,
      13
     ],
     [
      9,
      15
     ],
     [
      10,
      16
     ],
     [
      31,
      32
     ],
     [
      15,
      16
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      6,
      "l"
     ],
     [
      23,
      "r"
     ],
     [
      34,
      "b"
     ]
    ]
   },
   {
    "size": 7,
    "rooms": "0000111000011100001112223344222334422233442223344",
    "objects": "a....e...e.....a..a..f..a.e......b.c.....cb......",
    "roomNames": [
     "Bar Car",
     "Galley",
     "Sleeper C",
     "Guard's Van",
     "Corridor"
    ],
    "people": [
     "Ada the accordionist",
     "Basil the banker",
     "Viola the vendor",
     "Cedric the courier",
     "Della the diplomat",
     "Elias the envoy",
     "Fiona the firefighter"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "next",
      "seat"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "next",
      "wine"
     ],
     [
      5,
      "same",
      4
     ],
     [
      6,
      "next",
      "suitcase"
     ]
    ],
    "solution": [
     3,
     11,
     19,
     22,
     28,
     37,
     48
    ],
    "doors": [
     [
      17,
      18
     ],
     [
      15,
      22
     ],
     [
      17,
      24
     ],
     [
      18,
      25
     ],
     [
      19,
      26
     ],
     [
      30,
      31
     ],
     [
      25,
      26
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      7,
      "l"
     ],
     [
      28,
      "l"
     ],
     [
      43,
      "b"
     ]
    ],
    "facts": [
     [
      "alone",
      null,
      2
     ],
     [
      "windowCount",
      null,
      1
     ]
    ]
   },
   {
    "size": 8,
    "rooms": "0011222200112222001122220011222233334444333344445555444455554444",
    "objects": "...........eb..e...c.bc.....e...d.d....eb....bfd.............f..",
    "roomNames": [
     "Lounge Car",
     "Mail Car",
     "Sleeper A",
     "Sleeper C",
     "Dining Car",
     "Observation Car"
    ],
    "people": [
     "Ada the attendant",
     "Bea the banker",
     "Cora the courier",
     "Daisy the diplomat",
     "Elsa the engineer",
     "Frank the fiddler",
     "Vince the violinist",
     "Gideon the guard"
    ],
    "victim": 6,
    "clues": [
     [
      0,
      "window"
     ],
     [
      0,
      "same",
      1
     ],
     [
      1,
      "next",
      "bunk"
     ],
     [
      2,
      "next",
      "suitcase"
     ],
     [
      3,
      "next",
      "suitcase"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "alone"
     ],
     [
      7,
      "row",
      7
     ],
     [
      7,
      "col",
      2
     ]
    ],
    "solution": [
     4,
     13,
     23,
     27,
     38,
     40,
     49,
     58
    ],
    "doors": [
     [
      1,
      2
     ],
     [
      24,
      32
     ],
     [
      11,
      12
     ],
     [
      27,
      35
     ],
     [
      30,
      38
     ],
     [
      35,
      36
     ],
     [
      42,
      50
     ],
     [
      59,
      60
     ]
    ],
    "windows": [
     [
      4,
      "t"
     ],
     [
      7,
      "t"
     ],
     [
      31,
      "r"
     ],
     [
      55,
      "r"
     ],
     [
      63,
      "r"
     ]
    ],
    "facts": [
     [
      "onCount",
      "bunk",
      1
     ],
     [
      "alone",
      null,
      3
     ]
    ]
   },
   {
    "size": 9,
    "rooms": "000111122000111122000111122000111122000334444000334444555334444555336666555336666",
    "objects": ".bb.f........d.bcf.fa....fb.fa...e.c...f....f..b.........f.a..e...d.......d...db.",
    "roomNames": [
     "Baggage Car",
     "Bar Car",
     "Dining Car",
     "Sleeper B",
     "Mail Car",
     "Sleeper C",
     "Lounge Car"
    ],
    "people": [
     "Viola the violinist",
     "Alma the accordionist",
     "Bella the bookseller",
     "Celia the courier",
     "Della the dentist",
     "Elsa the envoy",
     "Fiona the firefighter",
     "Grace the guard",
     "Hilda the hairdresser"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "next",
      "bunk"
     ],
     [
      1,
      "window"
     ],
     [
      2,
      "next",
      "crate"
     ],
     [
      3,
      "same",
      1
     ],
     [
      4,
      "same",
      5
     ],
     [
      5,
      "next",
      "seat"
     ],
     [
      6,
      "alone"
     ],
     [
      7,
      "room",
      6
     ],
     [
      8,
      "next",
      "crate"
     ],
     [
      8,
      "alone"
     ]
    ],
    "solution": [
     6,
     9,
     22,
     29,
     43,
     50,
     55,
     71,
     75
    ],
    "doors": [
     [
      20,
      21
     ],
     [
      47,
      48
     ],
     [
      45,
      54
     ],
     [
      15,
      16
     ],
     [
      31,
      40
     ],
     [
      33,
      42
     ],
     [
      35,
      44
     ],
     [
      58,
      59
     ],
     [
      65,
      66
     ],
     [
      76,
      77
     ],
     [
      61,
      70
     ]
    ],
    "windows": [
     [
      4,
      "t"
     ],
     [
      9,
      "l"
     ],
     [
      62,
      "r"
     ],
     [
      63,
      "l"
     ],
     [
      78,
      "b"
     ]
    ]
   },
   {
    "size": 10,
    "rooms": "0000011111000001111122222111112222211111222223333344444333334444455666777775566677777556667777755666",
    "objects": ".bc..add........ed.b.a...f.....b.e...a..e...c....fa.b...be..a.....d...f..........dc..f...c.....a..db",
    "roomNames": [
     "Sleeper A",
     "Guard's Van",
     "Bar Car",
     "Dining Car",
     "Sleeper B",
     "Baggage Car",
     "Corridor",
     "Observation Car"
    ],
    "people": [
     "Astrid the attendant",
     "Bea the banker",
     "Clara the courier",
     "Dmitri the dentist",
     "Vince the violinist",
     "Elsa the envoy",
     "Freya the fiddler",
     "Greta the governor",
     "Hilda the hairdresser",
     "Ivy the inspector"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "window"
     ],
     [
      1,
      "next",
      "suitcase"
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "next",
      "bunk"
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "next",
      "seat"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "on",
      "bunk"
     ],
     [
      6,
      "on",
      "seat"
     ],
     [
      6,
      "alone"
     ],
     [
      7,
      "row",
      7
     ],
     [
      8,
      "door"
     ],
     [
      9,
      "col",
      4
     ]
    ],
    "solution": [
     9,
     12,
     21,
     38,
     45,
     56,
     60,
     73,
     87,
     94
    ],
    "doors": [
     [
      14,
      15
     ],
     [
      10,
      20
     ],
     [
      24,
      25
     ],
     [
      39,
      49
     ],
     [
      44,
      45
     ],
     [
      40,
      50
     ],
     [
      54,
      55
     ],
     [
      55,
      65
     ],
     [
      58,
      68
     ],
     [
      64,
      65
     ],
     [
      62,
      72
     ],
     [
      86,
      87
     ],
     [
      74,
      75
     ]
    ],
    "windows": [
     [
      8,
      "t"
     ],
     [
      9,
      "r"
     ],
     [
      39,
      "r"
     ],
     [
      40,
      "l"
     ],
     [
      69,
      "r"
     ],
     [
      89,
      "r"
     ]
    ],
    "facts": [
     [
      "roomCount",
      3,
      2
     ]
    ]
   },
   {
    "size": 11,
    "rooms": "0000001111100000011111222333111112223331111122233344444222333444445555556666655555566666555555666667777777777777777777777",
    "objects": "........a......f....a..ba...fcb....c.b.......ecb...db..e......d..cf.bfbb.cb.dfa...c...b......c.b..df...........c........f",
    "roomNames": [
     "Mail Car",
     "Sleeper B",
     "Lounge Car",
     "Sleeper C",
     "Sleeper A",
     "Observation Car",
     "Bar Car",
     "Corridor"
    ],
    "people": [
     "Vera the vendor",
     "Astrid the accordionist",
     "Birgit the banker",
     "Celia the conductor",
     "Della the diplomat",
     "Edith the engineer",
     "Frank the fiddler",
     "Gus the guard",
     "Hana the hatter",
     "Igor the inspector",
     "Juno the jockey"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "door"
     ],
     [
      2,
      "same",
      4
     ],
     [
      2,
      "same",
      5
     ],
     [
      3,
      "next",
      "suitcase"
     ],
     [
      4,
      "next",
      "bunk"
     ],
     [
      5,
      "col",
      3
     ],
     [
      6,
      "next",
      "wine"
     ],
     [
      7,
      "next",
      "bunk"
     ],
     [
      8,
      "on",
      "bunk"
     ],
     [
      8,
      "col",
      7
     ],
     [
      9,
      "door"
     ],
     [
      9,
      "same",
      10
     ],
     [
      10,
      "next",
      "suitcase"
     ]
    ],
    "solution": [
     9,
     17,
     27,
     34,
     48,
     58,
     68,
     85,
     95,
     109,
     110
    ],
    "doors": [
     [
      16,
      17
     ],
     [
      11,
      22
     ],
     [
      15,
      26
     ],
     [
      27,
      28
     ],
     [
      41,
      52
     ],
     [
      24,
      25
     ],
     [
      55,
      66
     ],
     [
      49,
      50
     ],
     [
      60,
      71
     ],
     [
      62,
      73
     ],
     [
      93,
      94
     ],
     [
      91,
      102
     ],
     [
      98,
      109
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      5,
      "t"
     ],
     [
      32,
      "r"
     ],
     [
      43,
      "r"
     ],
     [
      116,
      "b"
     ],
     [
      117,
      "b"
     ],
     [
      120,
      "r"
     ]
    ],
    "facts": [
     [
      "nextCount",
      "lamp",
      1
     ],
     [
      "doorCount",
      null,
      3
     ]
    ]
   },
   {
    "size": 12,
    "rooms": "000011112222000011112222000011112222000011112222333444445555333444445555333444445555333444445555666677788888666677788888666677788888666677788888",
    "objects": ".b.....d....cc.beeab.d.....a......b.......b........e..a...b....f..cb...b..d..aacd............d..b...a.........ac..d.a..c.......e....d...b...d...",
    "roomNames": [
     "Galley",
     "Bar Car",
     "Sleeper B",
     "Lounge Car",
     "Sleeper A",
     "Dining Car",
     "Corridor",
     "Guard's Van",
     "Observation Car"
    ],
    "people": [
     "Albert the attendant",
     "Birgit the banker",
     "Cora the conductor",
     "Daisy the diplomat",
     "Edgar the envoy",
     "Vera the vendor",
     "Frank the firefighter",
     "Greta the governor",
     "Hazel the hatter",
     "Ivo the importer",
     "Jutta the journalist",
     "Kitty the kitchen hand"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      0,
      "same",
      1
     ],
     [
      1,
      "next",
      "bunk"
     ],
     [
      2,
      "next",
      "lamp"
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "col",
      1
     ],
     [
      6,
      "notRoom",
      7
     ],
     [
      6,
      "next",
      "crate"
     ],
     [
      6,
      "alone"
     ],
     [
      7,
      "next",
      "seat"
     ],
     [
      8,
      "next",
      "suitcase"
     ],
     [
      8,
      "door"
     ],
     [
      8,
      "row",
      8
     ],
     [
      8,
      "alone"
     ],
     [
      9,
      "door"
     ],
     [
      10,
      "next",
      "crate"
     ],
     [
      10,
      "alone"
     ],
     [
      11,
      "same",
      9
     ]
    ],
    "solution": [
     8,
     22,
     28,
     36,
     50,
     61,
     81,
     89,
     99,
     115,
     126,
     143
    ],
    "doors": [
     [
      15,
      16
     ],
     [
      37,
      49
     ],
     [
      39,
      51
     ],
     [
      31,
      32
     ],
     [
      43,
      55
     ],
     [
      47,
      59
     ],
     [
      50,
      51
     ],
     [
      85,
      97
     ],
     [
      67,
      68
     ],
     [
      87,
      99
     ],
     [
      88,
      100
     ],
     [
      91,
      103
     ],
     [
      92,
      104
     ],
     [
      123,
      124
     ],
     [
      114,
      115
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      5,
      "t"
     ],
     [
      35,
      "r"
     ],
     [
      107,
      "r"
     ],
     [
      137,
      "b"
     ],
     [
      140,
      "b"
     ],
     [
      142,
      "b"
     ]
    ],
    "facts": [
     [
      "roomCount",
      2,
      2
     ],
     [
      "doorCount",
      null,
      3
     ],
     [
      "nextCount",
      "seat",
      2
     ]
    ]
   }
  ]
 },
 {
  "theme": "space",
  "levels": [
   {
    "size": 4,
    "rooms": "0011001100220022",
    "objects": "..b.b.....e.f...",
    "roomNames": [
     "Lab",
     "Cargo Bay",
     "Airlock"
    ],
    "people": [
     "Arthur the astronaut",
     "Bea the botanist",
     "Viola the volunteer",
     "Cora the chemist"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "next",
      "pod"
     ],
     [
      1,
      "on",
      "pod"
     ],
     [
      3,
      "next",
      "plant"
     ]
    ],
    "solution": [
     3,
     4,
     9,
     14
    ],
    "doors": [
     [
      1,
      2
     ],
     [
      13,
      14
     ],
     [
      6,
      10
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      3,
      "r"
     ]
    ]
   },
   {
    "size": 5,
    "rooms": "0001100011000112223322233",
    "objects": "c......d.b........b.cf..a",
    "roomNames": [
     "Cargo Bay",
     "Engine Room",
     "Comms",
     "Mess Hall"
    ],
    "people": [
     "Ada the analyst",
     "Bruno the biologist",
     "Celia the captain",
     "Vince the visitor",
     "Della the driller"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "next",
      "pod"
     ],
     [
      1,
      "next",
      "scope"
     ],
     [
      2,
      "same",
      0
     ],
     [
      4,
      "window"
     ]
    ],
    "solution": [
     4,
     6,
     13,
     15,
     22
    ],
    "doors": [
     [
      2,
      3
     ],
     [
      10,
      15
     ],
     [
      13,
      18
     ],
     [
      17,
      18
     ]
    ],
    "windows": [
     [
      5,
      "l"
     ],
     [
      10,
      "l"
     ],
     [
      22,
      "b"
     ]
    ],
    "facts": [
     [
      "edge",
      null,
      3
     ]
    ]
   },
   {
    "size": 6,
    "rooms": "000111000111223333223333224444224444",
    "objects": "a....da..d...bd.b........f.a...da.cc",
    "roomNames": [
     "Airlock",
     "Bridge",
     "Cargo Bay",
     "Mess Hall",
     "Engine Room"
    ],
    "people": [
     "Ada the analyst",
     "Bruno the botanist",
     "Clara the chemist",
     "Della the driller",
     "Vivian the visitor",
     "Edith the electrician"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "on",
      "seat"
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "on",
      "pod"
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "next",
      "seat"
     ],
     [
      5,
      "col",
      3
     ]
    ],
    "solution": [
     0,
     8,
     13,
     23,
     28,
     33
    ],
    "doors": [
     [
      8,
      9
     ],
     [
      6,
      12
     ],
     [
      8,
      14
     ],
     [
      11,
      17
     ],
     [
      19,
      20
     ],
     [
      31,
      32
     ],
     [
      21,
      27
     ]
    ],
    "windows": [
     [
      17,
      "r"
     ],
     [
      24,
      "l"
     ],
     [
      29,
      "r"
     ],
     [
      35,
      "b"
     ]
    ],
    "facts": [
     [
      "nextCount",
      "scope",
      0
     ]
    ]
   },
   {
    "size": 7,
    "rooms": "0001111000111100011112223333222333322244442224444",
    "objects": "...d...bd..b....ac...........d....cc..db..fb.b..a",
    "roomNames": [
     "Airlock",
     "Observatory",
     "Mess Hall",
     "Lab",
     "Med Bay"
    ],
    "people": [
     "Alma the analyst",
     "Bella the botanist",
     "Cedric the captain",
     "Viola the visitor",
     "Dora the doctor",
     "Elias the electrician",
     "Freya the farmer"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "next",
      "pod"
     ],
     [
      1,
      "next",
      "scope"
     ],
     [
      2,
      "same",
      0
     ],
     [
      2,
      "door"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "next",
      "seat"
     ],
     [
      6,
      "on",
      "pod"
     ]
    ],
    "solution": [
     4,
     9,
     19,
     21,
     31,
     41,
     43
    ],
    "doors": [
     [
      9,
      10
     ],
     [
      14,
      21
     ],
     [
      19,
      26
     ],
     [
      23,
      24
     ],
     [
      44,
      45
     ],
     [
      33,
      40
     ]
    ],
    "windows": [
     [
      0,
      "t"
     ],
     [
      35,
      "l"
     ],
     [
      41,
      "r"
     ],
     [
      48,
      "r"
     ]
    ],
    "facts": [
     [
      "doorCount",
      null,
      3
     ],
     [
      "nextCount",
      "scope",
      2
     ]
    ]
   },
   {
    "size": 8,
    "rooms": "0000111100001111000011112223333322233333444555554445555544455555",
    "objects": "...b..af.ab.b.....fb.edeac.....a...c..a.f..e..fcd..d..c.d..db..e",
    "roomNames": [
     "Crew Quarters",
     "Gym",
     "Hydroponics",
     "Med Bay",
     "Cargo Bay",
     "Bridge"
    ],
    "people": [
     "Alma the analyst",
     "Viola the visitor",
     "Basil the biologist",
     "Clara the captain",
     "Dmitri the driller",
     "Edith the engineer",
     "Felix the flight officer",
     "Greta the geologist"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "next",
      "pod"
     ],
     [
      1,
      "on",
      "seat"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "next",
      "console"
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "next",
      "tank"
     ],
     [
      6,
      "next",
      "plant"
     ],
     [
      7,
      "col",
      6
     ]
    ],
    "solution": [
     2,
     9,
     20,
     27,
     32,
     45,
     55,
     62
    ],
    "doors": [
     [
      19,
      20
     ],
     [
      17,
      25
     ],
     [
      19,
      27
     ],
     [
      22,
      30
     ],
     [
      34,
      35
     ],
     [
      33,
      41
     ],
     [
      37,
      45
     ],
     [
      42,
      43
     ]
    ],
    "windows": [
     [
      7,
      "r"
     ],
     [
      31,
      "r"
     ],
     [
      56,
      "l"
     ],
     [
      56,
      "b"
     ],
     [
      59,
      "b"
     ]
    ],
    "facts": [
     [
      "nextCount",
      "plant",
      3
     ]
    ]
   },
   {
    "size": 9,
    "rooms": "001122333001122333001122333001122333444552222444552222444556666444556666444556666",
    "objects": "e.b..b................a.ad.bb.b...e.f...b..eba.......ed.af.b...a....a..d....a....",
    "roomNames": [
     "Gym",
     "Hydroponics",
     "Airlock",
     "Engine Room",
     "Observatory",
     "Med Bay",
     "Crew Quarters"
    ],
    "people": [
     "Ada the analyst",
     "Basil the botanist",
     "Celia the captain",
     "Dmitri the driller",
     "Edith the electrician",
     "Viola the volunteer",
     "Felix the farmer",
     "Gideon the gunner",
     "Hazel the hull technician"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "next",
      "pod"
     ],
     [
      1,
      "next",
      "plant"
     ],
     [
      1,
      "same",
      3
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "on",
      "pod"
     ],
     [
      4,
      "door"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "next",
      "plant"
     ],
     [
      6,
      "on",
      "pod"
     ],
     [
      7,
      "next",
      "seat"
     ],
     [
      8,
      "same",
      7
     ]
    ],
    "solution": [
     4,
     9,
     21,
     28,
     38,
     52,
     59,
     69,
     80
    ],
    "doors": [
     [
      28,
      29
     ],
     [
      27,
      36
     ],
     [
      3,
      4
     ],
     [
      29,
      38
     ],
     [
      30,
      39
     ],
     [
      23,
      24
     ],
     [
      31,
      40
     ],
     [
      53,
      62
     ],
     [
      74,
      75
     ],
     [
      67,
      68
     ]
    ],
    "windows": [
     [
      8,
      "t"
     ],
     [
      17,
      "r"
     ],
     [
      72,
      "b"
     ],
     [
      73,
      "b"
     ],
     [
      80,
      "b"
     ]
    ],
    "facts": [
     [
      "touch",
      null,
      1
     ],
     [
      "roomCount",
      5,
      0
     ]
    ]
   },
   {
    "size": 10,
    "rooms": "0001112222000111222200011133330001113333444444555544444455554466665555446666555566666677776666667777",
    "objects": ".c.......c.f...c..f.........acca.b.efe..........a..........a.b..........d.c.d...d...d......f.df.b.d.",
    "roomNames": [
     "Comms",
     "Observatory",
     "Bridge",
     "Mess Hall",
     "Cargo Bay",
     "Med Bay",
     "Engine Room",
     "Hydroponics"
    ],
    "people": [
     "Astrid the analyst",
     "Bea the botanist",
     "Cora the chemist",
     "Dmitri the driller",
     "Edgar the engineer",
     "Flora the flight officer",
     "Victor the visitor",
     "Grace the gunner",
     "Hilda the hacker",
     "Ines the instructor"
    ],
    "victim": 6,
    "clues": [
     [
      0,
      "room",
      2
     ],
     [
      1,
      "next",
      "tank"
     ],
     [
      2,
      "next",
      "tank"
     ],
     [
      2,
      "same",
      3
     ],
     [
      3,
      "next",
      "plant"
     ],
     [
      4,
      "col",
      5
     ],
     [
      5,
      "row",
      5
     ],
     [
      6,
      "col",
      4
     ],
     [
      7,
      "next",
      "pod"
     ],
     [
      8,
      "next",
      "scope"
     ],
     [
      9,
      "next",
      "scope"
     ],
     [
      9,
      "alone"
     ]
    ],
    "solution": [
     7,
     12,
     26,
     38,
     45,
     50,
     64,
     71,
     83,
     99
    ],
    "doors": [
     [
      12,
      13
     ],
     [
      31,
      41
     ],
     [
      15,
      16
     ],
     [
      35,
      36
     ],
     [
      34,
      44
     ],
     [
      19,
      29
     ],
     [
      37,
      47
     ],
     [
      55,
      56
     ],
     [
      55,
      65
     ],
     [
      75,
      76
     ],
     [
      79,
      89
     ],
     [
      95,
      96
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      6,
      "t"
     ],
     [
      9,
      "r"
     ],
     [
      29,
      "r"
     ],
     [
      40,
      "l"
     ],
     [
      59,
      "r"
     ]
    ],
    "facts": [
     [
      "doorCount",
      null,
      1
     ]
    ]
   },
   {
    "size": 11,
    "rooms": "0000111222200001112222333311122223333111222233334444444333344444445555556666655555566666555555666667777777777777777777777",
    "objects": ".....faa..b..d.....................f.cc.ef.b....a..bc..a....e.e...da......fd............e...d......e..ae..a.....abb..f..c",
    "roomNames": [
     "Observatory",
     "Lab",
     "Crew Quarters",
     "Mess Hall",
     "Hydroponics",
     "Airlock",
     "Engine Room",
     "Bridge"
    ],
    "people": [
     "Astrid the analyst",
     "Bruno the biologist",
     "Carl the chemist",
     "Dexter the doctor",
     "Elsa the engineer",
     "Freya the farmer",
     "Gideon the gunner",
     "Hilda the hacker",
     "Ines the instructor",
     "Jasper the janitor",
     "Vivian the volunteer"
    ],
    "victim": 10,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      1,
      "next",
      "pod"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "same",
      2
     ],
     [
      3,
      "next",
      "tank"
     ],
     [
      3,
      "col",
      3
     ],
     [
      4,
      "next",
      "pod"
     ],
     [
      5,
      "same",
      4
     ],
     [
      6,
      "col",
      4
     ],
     [
      6,
      "same",
      7
     ],
     [
      7,
      "door"
     ],
     [
      8,
      "col",
      8
     ],
     [
      9,
      "on",
      "seat"
     ]
    ],
    "solution": [
     1,
     21,
     24,
     36,
     50,
     64,
     70,
     82,
     96,
     106,
     110
    ],
    "doors": [
     [
      14,
      15
     ],
     [
      13,
      24
     ],
     [
      28,
      29
     ],
     [
      25,
      26
     ],
     [
      38,
      49
     ],
     [
      42,
      53
     ],
     [
      47,
      48
     ],
     [
      58,
      69
     ],
     [
      59,
      70
     ],
     [
      65,
      76
     ],
     [
      82,
      83
     ],
     [
      90,
      101
     ],
     [
      98,
      109
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      44,
      "l"
     ],
     [
      98,
      "r"
     ],
     [
      111,
      "b"
     ],
     [
      113,
      "b"
     ],
     [
      118,
      "b"
     ],
     [
      120,
      "r"
     ]
    ],
    "facts": [
     [
      "nextCount",
      "seat",
      0
     ]
    ]
   },
   {
    "size": 12,
    "rooms": "000111222222000111222222000111222222000111222222333333444444333333444444333333444444555666677777555666677777555666677777555666688888555666688888",
    "objects": "b.....cab.........e.b.......d.e..ce....a.f..cdd.a....bb..b...fa.........c..f.....d.b..a.....e.b.......bba......ebe..acc...b....a..ea....b....dca",
    "roomNames": [
     "Hydroponics",
     "Observatory",
     "Bridge",
     "Crew Quarters",
     "Airlock",
     "Lab",
     "Comms",
     "Mess Hall",
     "Gym"
    ],
    "people": [
     "Alma the analyst",
     "Bea the botanist",
     "Victor the volunteer",
     "Clara the captain",
     "Dmitri the doctor",
     "Elsa the engineer",
     "Fiona the flight officer",
     "Gideon the geologist",
     "Henrik the hacker",
     "Ivy the instructor",
     "Juno the journalist",
     "Konrad the kitchen chief"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "next",
      "console"
     ],
     [
      0,
      "same",
      1
     ],
     [
      1,
      "on",
      "pod"
     ],
     [
      2,
      "col",
      2
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "same",
      5
     ],
     [
      5,
      "next",
      "scope"
     ],
     [
      6,
      "col",
      10
     ],
     [
      7,
      "same",
      11
     ],
     [
      8,
      "row",
      8
     ],
     [
      9,
      "next",
      "pod"
     ],
     [
      9,
      "next",
      "plant"
     ],
     [
      10,
      "next",
      "plant"
     ],
     [
      11,
      "col",
      5
     ]
    ],
    "solution": [
     7,
     20,
     26,
     37,
     59,
     69,
     82,
     88,
     96,
     114,
     123,
     137
    ],
    "doors": [
     [
      38,
      39
     ],
     [
      37,
      49
     ],
     [
      41,
      42
     ],
     [
      41,
      53
     ],
     [
      45,
      57
     ],
     [
      65,
      66
     ],
     [
      73,
      85
     ],
     [
      75,
      87
     ],
     [
      78,
      90
     ],
     [
      79,
      91
     ],
     [
      98,
      99
     ],
     [
      90,
      91
     ],
     [
      126,
      127
     ],
     [
      116,
      128
     ]
    ],
    "windows": [
     [
      5,
      "t"
     ],
     [
      47,
      "r"
     ],
     [
      60,
      "l"
     ],
     [
      72,
      "l"
     ],
     [
      84,
      "l"
     ],
     [
      132,
      "l"
     ],
     [
      135,
      "b"
     ]
    ],
    "facts": [
     [
      "nextCount",
      "tank",
      0
     ],
     [
      "roomCount",
      5,
      1
     ],
     [
      "onCount",
      "pod",
      1
     ]
    ]
   }
  ]
 },
 {
  "theme": "theater",
  "levels": [
   {
    "size": 4,
    "rooms": "0011001100220022",
    "objects": ".b.e..c...bd....",
    "roomNames": [
     "Balcony",
     "Stage",
     "Prop Store"
    ],
    "people": [
     "Alma the agent",
     "Birgit the baritone",
     "Viola the violinist",
     "Celia the choreographer"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "door"
     ],
     [
      1,
      "window"
     ],
     [
      3,
      "alone"
     ]
    ],
    "solution": [
     2,
     4,
     9,
     15
    ],
    "doors": [
     [
      1,
      2
     ],
     [
      13,
      14
     ],
     [
      7,
      11
     ]
    ],
    "windows": [
     [
      4,
      "l"
     ],
     [
      15,
      "b"
     ]
    ]
   },
   {
    "size": 5,
    "rooms": "0000011111222332223322233",
    "objects": "d..bb.af...e..c...d...f..",
    "roomNames": [
     "Foyer",
     "Lighting Booth",
     "Bar",
     "Green Room"
    ],
    "people": [
     "Arthur the agent",
     "Bruno the baritone",
     "Carl the critic",
     "Vera the ventriloquist",
     "Della the dancer"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "on",
      "sofa"
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "door"
     ],
     [
      4,
      "col",
      4
     ]
    ],
    "solution": [
     3,
     5,
     12,
     16,
     24
    ],
    "doors": [
     [
      0,
      5
     ],
     [
      7,
      12
     ],
     [
      9,
      14
     ],
     [
      17,
      18
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      21,
      "b"
     ],
     [
      22,
      "b"
     ]
    ],
    "facts": [
     [
      "nextCount",
      "rack",
      2
     ]
    ]
   },
   {
    "size": 6,
    "rooms": "001122001122001122334422334422334422",
    "objects": "..bb.d....a..fbb.e...f.bf.......b.b.",
    "roomNames": [
     "Foyer",
     "Balcony",
     "Costume Room",
     "Bar",
     "Dressing Room"
    ],
    "people": [
     "Astrid the author",
     "Bella the baritone",
     "Celia the choreographer",
     "Daisy the director",
     "Elias the extra",
     "Vera the ventriloquist"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "next",
      "mirror"
     ],
     [
      1,
      "next",
      "sofa"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "next",
      "sofa"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "next",
      "sofa"
     ]
    ],
    "solution": [
     4,
     9,
     12,
     19,
     26,
     35
    ],
    "doors": [
     [
      1,
      2
     ],
     [
      12,
      18
     ],
     [
      3,
      4
     ],
     [
      14,
      20
     ],
     [
      21,
      22
     ],
     [
      25,
      26
     ]
    ],
    "windows": [
     [
      5,
      "r"
     ],
     [
      6,
      "l"
     ],
     [
      11,
      "r"
     ],
     [
      33,
      "b"
     ]
    ]
   },
   {
    "size": 7,
    "rooms": "0001111000111100022220002222333444433344443334444",
    "objects": "b..f.b.e...ae.f.b.....a.....fc.c.eaa..abb..d.....",
    "roomNames": [
     "Orchestra Pit",
     "Wings",
     "Box Office",
     "Bar",
     "Green Room"
    ],
    "people": [
     "Astrid the agent",
     "Bea the baritone",
     "Cora the critic",
     "Dexter the dancer",
     "Victor the violinist",
     "Elsa the extra",
     "Flora the flautist"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "window"
     ],
     [
      0,
      "same",
      3
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "col",
      4
     ],
     [
      3,
      "next",
      "seat"
     ],
     [
      4,
      "next",
      "rack"
     ],
     [
      5,
      "next",
      "seat"
     ],
     [
      6,
      "next",
      "sofa"
     ]
    ],
    "solution": [
     0,
     10,
     18,
     23,
     34,
     36,
     47
    ],
    "doors": [
     [
      9,
      10
     ],
     [
      23,
      24
     ],
     [
      22,
      29
     ],
     [
      12,
      19
     ],
     [
      25,
      32
     ],
     [
      30,
      31
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      0,
      "t"
     ],
     [
      20,
      "r"
     ],
     [
      21,
      "l"
     ]
    ],
    "facts": [
     [
      "emptyRooms",
      null,
      0
     ]
    ]
   },
   {
    "size": 8,
    "rooms": "0001122200011222000112223331144433311444333114443335555533355555",
    "objects": "..c.c..b.b......a...b............e.a.........a....ffb.e..b...fdb",
    "roomNames": [
     "Bar",
     "Dressing Room",
     "Lighting Booth",
     "Balcony",
     "Box Office",
     "Prop Store"
    ],
    "people": [
     "Ada the agent",
     "Basil the baritone",
     "Celia the critic",
     "Della the dancer",
     "Vera the ventriloquist",
     "Ena the extra",
     "Flora the flautist",
     "Greta the ghost writer"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "room",
      2
     ],
     [
      1,
      "on",
      "sofa"
     ],
     [
      2,
      "next",
      "sofa"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "next",
      "seat"
     ],
     [
      6,
      "same",
      3
     ],
     [
      7,
      "next",
      "sofa"
     ],
     [
      7,
      "next",
      "light"
     ]
    ],
    "solution": [
     7,
     9,
     19,
     26,
     37,
     46,
     48,
     60
    ],
    "doors": [
     [
      10,
      11
     ],
     [
      17,
      25
     ],
     [
      4,
      5
     ],
     [
      26,
      27
     ],
     [
      36,
      37
     ],
     [
      43,
      51
     ],
     [
      21,
      29
     ],
     [
      58,
      59
     ],
     [
      47,
      55
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      15,
      "r"
     ],
     [
      47,
      "r"
     ],
     [
      58,
      "b"
     ],
     [
      59,
      "b"
     ]
    ],
    "facts": [
     [
      "nextCount",
      "light",
      1
     ],
     [
      "roomCount",
      1,
      1
     ],
     [
      "doorCount",
      null,
      2
     ]
    ]
   },
   {
    "size": 9,
    "rooms": "001112222001112222001112222001112222333445555333445555333445555333446666333446666",
    "objects": ".aec.a.....f......e.......ea..............b...ad..........a...ff....b......b.b..c",
    "roomNames": [
     "Bar",
     "Dressing Room",
     "Orchestra Pit",
     "Wings",
     "Prop Store",
     "Box Office",
     "Foyer"
    ],
    "people": [
     "Astrid the agent",
     "Birgit the baritone",
     "Celia the critic",
     "Vera the violinist",
     "Daisy the director",
     "Edgar the extra",
     "Fiona the flautist",
     "Gwen the guitarist",
     "Hilda the hairdresser"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "door"
     ],
     [
      1,
      "next",
      "seat"
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "next",
      "light"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "next",
      "sofa"
     ],
     [
      6,
      "same",
      4
     ],
     [
      6,
      "next",
      "seat"
     ],
     [
      7,
      "next",
      "piano"
     ],
     [
      8,
      "col",
      7
     ]
    ],
    "solution": [
     5,
     10,
     20,
     27,
     40,
     51,
     57,
     71,
     79
    ],
    "doors": [
     [
      10,
      11
     ],
     [
      27,
      36
     ],
     [
      4,
      5
     ],
     [
      29,
      38
     ],
     [
      31,
      40
     ],
     [
      33,
      42
     ],
     [
      38,
      39
     ],
     [
      58,
      59
     ],
     [
      67,
      68
     ],
     [
      60,
      69
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      1,
      "t"
     ],
     [
      2,
      "t"
     ],
     [
      6,
      "t"
     ],
     [
      44,
      "r"
     ]
    ],
    "facts": [
     [
      "nextCount",
      "piano",
      2
     ],
     [
      "nextCount",
      "light",
      1
     ]
    ]
   },
   {
    "size": 10,
    "rooms": "0011122222001112222200111223330011122333444442233344444223335555666777555566677755556667775555666777",
    "objects": "d...b....e..a.ba.deb.a....dc.....d.f......d.b......a.....dc.......bd....a..fd........b..e....a......",
    "roomNames": [
     "Bar",
     "Costume Room",
     "Lighting Booth",
     "Foyer",
     "Dressing Room",
     "Wings",
     "Stage",
     "Green Room"
    ],
    "people": [
     "Ada the author",
     "Birgit the bass player",
     "Cedric the critic",
     "Della the director",
     "Edgar the electrician",
     "Victor the violinist",
     "Frank the fan",
     "Greta the ghost writer",
     "Hana the hairdresser",
     "Igor the illusionist"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "same",
      1
     ],
     [
      1,
      "next",
      "sofa"
     ],
     [
      2,
      "next",
      "light"
     ],
     [
      2,
      "next",
      "mirror"
     ],
     [
      3,
      "next",
      "light"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "on",
      "sofa"
     ],
     [
      5,
      "on",
      "seat"
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "window"
     ],
     [
      7,
      "next",
      "mirror"
     ],
     [
      8,
      "alone"
     ],
     [
      9,
      "next",
      "rack"
     ]
    ],
    "solution": [
     2,
     13,
     25,
     36,
     44,
     51,
     69,
     77,
     80,
     98
    ],
    "doors": [
     [
      1,
      2
     ],
     [
      30,
      40
     ],
     [
      14,
      15
     ],
     [
      34,
      44
     ],
     [
      36,
      37
     ],
     [
      54,
      55
     ],
     [
      56,
      66
     ],
     [
      59,
      69
     ],
     [
      51,
      61
     ],
     [
      54,
      64
     ],
     [
      73,
      74
     ],
     [
      96,
      97
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      40,
      "l"
     ],
     [
      50,
      "l"
     ],
     [
      69,
      "r"
     ],
     [
      70,
      "l"
     ],
     [
      95,
      "b"
     ]
    ],
    "facts": [
     [
      "onCount",
      "seat",
      1
     ]
    ]
   },
   {
    "size": 11,
    "rooms": "0001112222200011122222000111222220001112222233333444455333334444553333344445533333666655777776666557777766665577777666655",
    "objects": ".e......e....dc....a.dbbb.....e....ba..............d..ba..de.......f.c...e...f..fb.e........c..d..b.....cda..db...e......",
    "roomNames": [
     "Wings",
     "Box Office",
     "Balcony",
     "Stage",
     "Green Room",
     "Costume Room",
     "Dressing Room",
     "Lighting Booth"
    ],
    "people": [
     "Alma the agent",
     "Birgit the baritone",
     "Carl the critic",
     "Dmitri the dancer",
     "Vince the violinist",
     "Elias the electrician",
     "Freya the fan",
     "Gwen the guitarist",
     "Hilda the harpist",
     "Ines the impresario",
     "Juno the jester"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "next",
      "mirror"
     ],
     [
      1,
      "next",
      "seat"
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "next",
      "piano"
     ],
     [
      3,
      "same",
      2
     ],
     [
      4,
      "next",
      "sofa"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "alone"
     ],
     [
      6,
      "next",
      "piano"
     ],
     [
      6,
      "door"
     ],
     [
      6,
      "alone"
     ],
     [
      7,
      "next",
      "sofa"
     ],
     [
      8,
      "same",
      10
     ],
     [
      9,
      "room",
      6
     ],
     [
      10,
      "next",
      "sofa"
     ]
    ],
    "solution": [
     2,
     18,
     25,
     38,
     53,
     61,
     70,
     87,
     88,
     107,
     111
    ],
    "doors": [
     [
      13,
      14
     ],
     [
      34,
      45
     ],
     [
      27,
      28
     ],
     [
      36,
      47
     ],
     [
      38,
      49
     ],
     [
      41,
      52
     ],
     [
      42,
      53
     ],
     [
      70,
      71
     ],
     [
      81,
      82
     ],
     [
      77,
      88
     ],
     [
      63,
      64
     ],
     [
      73,
      84
     ],
     [
      85,
      86
     ],
     [
      114,
      115
     ]
    ],
    "windows": [
     [
      0,
      "t"
     ],
     [
      0,
      "l"
     ],
     [
      11,
      "l"
     ],
     [
      55,
      "l"
     ],
     [
      65,
      "r"
     ],
     [
      98,
      "r"
     ],
     [
      119,
      "b"
     ]
    ],
    "facts": [
     [
      "emptyRooms",
      null,
      0
     ],
     [
      "nextCount",
      "seat",
      3
     ],
     [
      "nextCount",
      "rack",
      2
     ]
    ]
   },
   {
    "size": 12,
    "rooms": "000000111111000000111111000000111111000000111111222333444444222333444444222333444444222333444444556666777788556666777788556666777788556666777788",
    "objects": "...cb.ea.b..a.e......edeae.........f.........ca..a....e.e...ee.....d.b.e.b...b.f..........ebdaf...e.a.....b.ea.fb..d.f.bc.......ccf..c.dfa...a..",
    "roomNames": [
     "Lighting Booth",
     "Bar",
     "Dressing Room",
     "Wings",
     "Costume Room",
     "Orchestra Pit",
     "Green Room",
     "Prop Store",
     "Foyer"
    ],
    "people": [
     "Albert the author",
     "Basil the baritone",
     "Celia the critic",
     "Dora the director",
     "Elsa the electrician",
     "Fiona the flautist",
     "Gwen the ghost writer",
     "Vivian the ventriloquist",
     "Hana the harpist",
     "Ines the impresario",
     "Juno the jester",
     "Kira the keyboardist"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "next",
      "seat"
     ],
     [
      0,
      "same",
      2
     ],
     [
      1,
      "next",
      "rack"
     ],
     [
      1,
      "same",
      3
     ],
     [
      2,
      "col",
      3
     ],
     [
      3,
      "next",
      "piano"
     ],
     [
      4,
      "next",
      "sofa"
     ],
     [
      4,
      "next",
      "rack"
     ],
     [
      5,
      "room",
      3
     ],
     [
      6,
      "on",
      "sofa"
     ],
     [
      6,
      "next",
      "rack"
     ],
     [
      8,
      "door"
     ],
     [
      9,
      "next",
      "sofa"
     ],
     [
      9,
      "alone"
     ],
     [
      10,
      "next",
      "sofa"
     ],
     [
      11,
      "next",
      "light"
     ]
    ],
    "solution": [
     0,
     18,
     27,
     44,
     57,
     64,
     73,
     86,
     103,
     113,
     131,
     142
    ],
    "doors": [
     [
      41,
      42
     ],
     [
      38,
      50
     ],
     [
      41,
      53
     ],
     [
      43,
      55
     ],
     [
      74,
      75
     ],
     [
      85,
      97
     ],
     [
      86,
      98
     ],
     [
      53,
      54
     ],
     [
      87,
      99
     ],
     [
      91,
      103
     ],
     [
      95,
      107
     ],
     [
      109,
      110
     ],
     [
      137,
      138
     ],
     [
      105,
      106
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      10,
      "t"
     ],
     [
      36,
      "l"
     ],
     [
      59,
      "r"
     ],
     [
      120,
      "l"
     ],
     [
      133,
      "b"
     ],
     [
      143,
      "r"
     ]
    ],
    "facts": [
     [
      "roomCount",
      7,
      1
     ],
     [
      "nextCount",
      "rack",
      3
     ],
     [
      "roomCount",
      4,
      1
     ]
    ]
   }
  ]
 },
 {
  "theme": "lodge",
  "levels": [
   {
    "size": 4,
    "rooms": "0000000011221122",
    "objects": ".a.......a...c.b",
    "roomNames": [
     "Suite",
     "Lobby",
     "Bar"
    ],
    "people": [
     "Albert the athlete",
     "Viola the vet",
     "Bella the bartender",
     "Celia the climber"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "on",
      "chair"
     ],
     [
      2,
      "same",
      3
     ],
     [
      3,
      "on",
      "sofa"
     ]
    ],
    "solution": [
     1,
     4,
     10,
     15
    ],
    "doors": [
     [
      5,
      9
     ],
     [
      6,
      10
     ],
     [
      9,
      10
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      12,
      "l"
     ]
    ]
   },
   {
    "size": 5,
    "rooms": "0000011222112223333333333",
    "objects": "d.bc...ea..cff.....c.a...",
    "roomNames": [
     "Suite",
     "Lobby",
     "Dining Hall",
     "Fireside Lounge"
    ],
    "people": [
     "Ada the athlete",
     "Basil the baker",
     "Celia the climber",
     "Vivian the vlogger",
     "Daisy the driver"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "door"
     ],
     [
      1,
      "on",
      "chair"
     ],
     [
      2,
      "notRoom",
      0
     ],
     [
      4,
      "col",
      2
     ]
    ],
    "solution": [
     4,
     8,
     10,
     16,
     22
    ],
    "doors": [
     [
      0,
      5
     ],
     [
      4,
      9
     ],
     [
      6,
      7
     ],
     [
      10,
      15
     ],
     [
      14,
      19
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      19,
      "r"
     ],
     [
      21,
      "b"
     ]
    ],
    "facts": [
     [
      "touch",
      null,
      1
     ],
     [
      "onCount",
      "chair",
      1
     ],
     [
      "nextCount",
      "sofa",
      0
     ]
    ]
   },
   {
    "size": 6,
    "rooms": "001111001111001111223344223344223344",
    "objects": "fa...cd........eaf........b.add...cf",
    "roomNames": [
     "Ski Room",
     "Spa",
     "Games Room",
     "Kitchen",
     "Terrace"
    ],
    "people": [
     "Vivian the vlogger",
     "Arthur the avalanche guard",
     "Birgit the baker",
     "Clara the climber",
     "Della the driver",
     "Edith the engineer"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "next",
      "chair"
     ],
     [
      2,
      "next",
      "tree"
     ],
     [
      3,
      "next",
      "fire"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "next",
      "fire"
     ],
     [
      5,
      "door"
     ]
    ],
    "solution": [
     4,
     7,
     14,
     23,
     24,
     33
    ],
    "doors": [
     [
      13,
      14
     ],
     [
      13,
      19
     ],
     [
      15,
      21
     ],
     [
      17,
      23
     ],
     [
      31,
      32
     ],
     [
      33,
      34
     ]
    ],
    "windows": [
     [
      0,
      "t"
     ],
     [
      5,
      "t"
     ],
     [
      29,
      "r"
     ],
     [
      30,
      "l"
     ]
    ],
    "facts": [
     [
      "furniture",
      null,
      0
     ]
    ]
   },
   {
    "size": 7,
    "rooms": "0001111000111100022220002222333444433344443334444",
    "objects": ".f..bf...a...f...c......d.........daa...bae...d..",
    "roomNames": [
     "Kitchen",
     "Fireside Lounge",
     "Spa",
     "Suite",
     "Bar"
    ],
    "people": [
     "Ada the athlete",
     "Bella the bartender",
     "Carl the cook",
     "Dexter the doctor",
     "Vivian the vet",
     "Edith the explorer",
     "Frank the fisher"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "on",
      "sofa"
     ],
     [
      1,
      "same",
      0
     ],
     [
      2,
      "notRoom",
      2
     ],
     [
      2,
      "row",
      2
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "next",
      "fire"
     ],
     [
      6,
      "window"
     ]
    ],
    "solution": [
     4,
     10,
     14,
     26,
     29,
     41,
     44
    ],
    "doors": [
     [
      9,
      10
     ],
     [
      23,
      24
     ],
     [
      22,
      29
     ],
     [
      10,
      17
     ],
     [
      25,
      32
     ],
     [
      30,
      31
     ]
    ],
    "windows": [
     [
      13,
      "r"
     ],
     [
      27,
      "r"
     ],
     [
      41,
      "r"
     ],
     [
      44,
      "b"
     ]
    ],
    "facts": [
     [
      "nextCount",
      "wood",
      1
     ],
     [
      "alone",
      null,
      3
     ]
    ]
   },
   {
    "size": 8,
    "rooms": "0001111100011111000222220002222200022222333445553334455533344555",
    "objects": "..e....b......e.be.bb...e.......a.b.cf.f.f..f....dd.ab...b...bc.",
    "roomNames": [
     "Dining Hall",
     "Spa",
     "Games Room",
     "Sauna",
     "Bar",
     "Suite"
    ],
    "people": [
     "Albert the athlete",
     "Basil the bartender",
     "Cedric the cook",
     "Dexter the driver",
     "Elias the engineer",
     "Victor the vlogger",
     "Frank the forester",
     "Gus the guide"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "next",
      "tree"
     ],
     [
      2,
      "same",
      3
     ],
     [
      3,
      "next",
      "sofa"
     ],
     [
      4,
      "next",
      "skis"
     ],
     [
      5,
      "next",
      "fire"
     ],
     [
      6,
      "on",
      "sofa"
     ],
     [
      6,
      "alone"
     ],
     [
      7,
      "on",
      "sofa"
     ]
    ],
    "solution": [
     0,
     15,
     22,
     28,
     35,
     42,
     53,
     57
    ],
    "doors": [
     [
      2,
      3
     ],
     [
      26,
      27
     ],
     [
      33,
      41
     ],
     [
      11,
      19
     ],
     [
      35,
      43
     ],
     [
      38,
      46
     ],
     [
      50,
      51
     ],
     [
      52,
      53
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      2,
      "t"
     ],
     [
      47,
      "r"
     ],
     [
      56,
      "b"
     ],
     [
      62,
      "b"
     ]
    ],
    "facts": [
     [
      "corner",
      null,
      4
     ],
     [
      "nextCount",
      "tree",
      1
     ],
     [
      "nextCount",
      "sofa",
      2
     ]
    ]
   },
   {
    "size": 9,
    "rooms": "000111122000111122000333322000333322000333322444555666444555666444555666444555666",
    "objects": "..........b.d.......f.bca..e..d..a.afefe....a..cbbc.dc..e..c.a.bc.c..a...aca.ea..",
    "roomNames": [
     "Boot Room",
     "Terrace",
     "Dining Hall",
     "Lobby",
     "Ski Room",
     "Suite",
     "Spa"
    ],
    "people": [
     "Astrid the avalanche guard",
     "Bella the baker",
     "Cedric the climber",
     "Dexter the doctor",
     "Ena the explorer",
     "Viola the vlogger",
     "Freya the fisher",
     "Greta the glacier expert",
     "Hazel the hiker"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "room",
      2
     ],
     [
      1,
      "door"
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "next",
      "skis"
     ],
     [
      3,
      "next",
      "wood"
     ],
     [
      4,
      "same",
      2
     ],
     [
      4,
      "col",
      5
     ],
     [
      6,
      "next",
      "sofa"
     ],
     [
      6,
      "alone"
     ],
     [
      7,
      "alone"
     ],
     [
      8,
      "next",
      "skis"
     ]
    ],
    "solution": [
     7,
     15,
     22,
     29,
     41,
     45,
     57,
     71,
     73
    ],
    "doors": [
     [
      11,
      12
     ],
     [
      29,
      30
     ],
     [
      37,
      46
     ],
     [
      15,
      16
     ],
     [
      14,
      23
     ],
     [
      24,
      25
     ],
     [
      44,
      53
     ],
     [
      40,
      49
     ],
     [
      42,
      51
     ],
     [
      47,
      48
     ],
     [
      68,
      69
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      9,
      "l"
     ],
     [
      27,
      "l"
     ],
     [
      72,
      "b"
     ],
     [
      74,
      "b"
     ]
    ],
    "facts": [
     [
      "edge",
      null,
      4
     ],
     [
      "onCount",
      "sofa",
      1
     ]
    ]
   },
   {
    "size": 10,
    "rooms": "0011122222001112222200111222220000333333000033333344444455554444445555666644555566664477776666447777",
    "objects": "...............c....b....fd......c....ae..e...b....e......dd.....f.eea.de..c...fa.cf.f.d...c...b..d.",
    "roomNames": [
     "Suite",
     "Boot Room",
     "Games Room",
     "Bar",
     "Ski Room",
     "Dining Hall",
     "Spa",
     "Kitchen"
    ],
    "people": [
     "Ada the avalanche guard",
     "Bruno the baker",
     "Celia the cook",
     "Dmitri the doctor",
     "Edgar the explorer",
     "Frank the fisher",
     "Greta the glacier expert",
     "Hugo the hiker",
     "Vince the vet",
     "Ivo the ice climber"
    ],
    "victim": 8,
    "clues": [
     [
      0,
      "next",
      "skis"
     ],
     [
      1,
      "same",
      2
     ],
     [
      2,
      "next",
      "fire"
     ],
     [
      3,
      "next",
      "sofa"
     ],
     [
      4,
      "next",
      "chair"
     ],
     [
      5,
      "next",
      "tree"
     ],
     [
      6,
      "notRoom",
      2
     ],
     [
      7,
      "same",
      6
     ],
     [
      7,
      "next",
      "skis"
     ],
     [
      8,
      "next",
      "skis"
     ],
     [
      8,
      "next",
      "chair"
     ],
     [
      9,
      "window"
     ]
    ],
    "solution": [
     5,
     19,
     27,
     36,
     48,
     52,
     63,
     74,
     81,
     90
    ],
    "doors": [
     [
      22,
      32
     ],
     [
      43,
      44
     ],
     [
      42,
      52
     ],
     [
      24,
      25
     ],
     [
      24,
      34
     ],
     [
      26,
      36
     ],
     [
      45,
      55
     ],
     [
      47,
      57
     ],
     [
      65,
      66
     ],
     [
      62,
      72
     ],
     [
      85,
      86
     ],
     [
      79,
      89
     ]
    ],
    "windows": [
     [
      50,
      "l"
     ],
     [
      70,
      "l"
     ],
     [
      80,
      "l"
     ],
     [
      90,
      "b"
     ],
     [
      91,
      "b"
     ],
     [
      94,
      "b"
     ]
    ]
   },
   {
    "size": 11,
    "rooms": "0001111222200011112222000111122220001111222200011112222000333344440003333444455566667777555666677775556666777755566667777",
    "objects": "..dfd.......eb....fa.eea..adb......b.d.a....a.d......a.f..d..de..........c...d....a.........ae.efd.....bb..a.e....df.e.c.",
    "roomNames": [
     "Ski Room",
     "Boot Room",
     "Dining Hall",
     "Games Room",
     "Sauna",
     "Spa",
     "Terrace",
     "Lobby"
    ],
    "people": [
     "Alma the avalanche guard",
     "Birgit the bartender",
     "Clara the cook",
     "Dmitri the doctor",
     "Vera the vlogger",
     "Elsa the explorer",
     "Frank the forester",
     "Grace the glacier expert",
     "Hana the hiker",
     "Ivy the ice climber",
     "Jasper the jogger"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "next",
      "tree"
     ],
     [
      1,
      "same",
      3
     ],
     [
      2,
      "next",
      "chair"
     ],
     [
      3,
      "next",
      "fire"
     ],
     [
      4,
      "row",
      4
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "next",
      "fire"
     ],
     [
      6,
      "door"
     ],
     [
      7,
      "next",
      "tree"
     ],
     [
      8,
      "next",
      "sofa"
     ],
     [
      9,
      "row",
      9
     ],
     [
      10,
      "next",
      "chair"
     ],
     [
      10,
      "next",
      "skis"
     ]
    ],
    "solution": [
     9,
     11,
     25,
     35,
     49,
     65,
     72,
     84,
     92,
     100,
     118
    ],
    "doors": [
     [
      13,
      14
     ],
     [
      57,
      58
     ],
     [
      68,
      79
     ],
     [
      17,
      18
     ],
     [
      50,
      61
     ],
     [
      54,
      65
     ],
     [
      72,
      73
     ],
     [
      70,
      81
     ],
     [
      73,
      84
     ],
     [
      101,
      102
     ],
     [
      83,
      84
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      21,
      "r"
     ],
     [
      44,
      "l"
     ],
     [
      76,
      "r"
     ],
     [
      77,
      "l"
     ],
     [
      112,
      "b"
     ],
     [
      117,
      "b"
     ]
    ],
    "facts": [
     [
      "nextCount",
      "tree",
      4
     ],
     [
      "roomCount",
      4,
      1
     ]
    ]
   },
   {
    "size": 12,
    "rooms": "000001111111000001111111000001111111000002222333444442222333444442222333444442222333555566666666555566666666555577777777888877777777888888888888",
    "objects": "b........f...c..d...e...f.....a.....dc......df...b...e...aab....fa...a...fbe......a.d..b.e.a........e......f........d.dcc....a....b.e..f.bf.d...",
    "roomNames": [
     "Fireside Lounge",
     "Games Room",
     "Ski Room",
     "Terrace",
     "Spa",
     "Bar",
     "Lobby",
     "Dining Hall",
     "Boot Room"
    ],
    "people": [
     "Arthur the athlete",
     "Birgit the baker",
     "Celia the climber",
     "Dexter the doctor",
     "Edith the engineer",
     "Freya the forester",
     "Gus the glacier expert",
     "Vera the vlogger",
     "Hugo the hiker",
     "Ivy the instructor",
     "Juno the jogger",
     "Kitty the kayaker"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "next",
      "fire"
     ],
     [
      1,
      "next",
      "wood"
     ],
     [
      2,
      "next",
      "tree"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "next",
      "sofa"
     ],
     [
      6,
      "row",
      6
     ],
     [
      7,
      "on",
      "chair"
     ],
     [
      8,
      "next",
      "tree"
     ],
     [
      9,
      "door"
     ],
     [
      9,
      "alone"
     ],
     [
      10,
      "on",
      "sofa"
     ],
     [
      10,
      "alone"
     ],
     [
      11,
      "notRoom",
      2
     ],
     [
      11,
      "alone"
     ]
    ],
    "solution": [
     4,
     21,
     32,
     42,
     51,
     62,
     72,
     91,
     101,
     109,
     130,
     143
    ],
    "doors": [
     [
      16,
      17
     ],
     [
      40,
      41
     ],
     [
      39,
      51
     ],
     [
      32,
      44
     ],
     [
      35,
      47
     ],
     [
      68,
      69
     ],
     [
      52,
      53
     ],
     [
      77,
      89
     ],
     [
      81,
      93
     ],
     [
      74,
      86
     ],
     [
      76,
      88
     ],
     [
      87,
      88
     ],
     [
      111,
      112
     ],
     [
      109,
      121
     ],
     [
      105,
      117
     ],
     [
      123,
      124
     ]
    ],
    "windows": [
     [
      11,
      "t"
     ],
     [
      36,
      "l"
     ],
     [
      47,
      "r"
     ],
     [
      59,
      "r"
     ],
     [
      131,
      "r"
     ],
     [
      135,
      "b"
     ],
     [
      138,
      "b"
     ]
    ],
    "facts": [
     [
      "windowCount",
      null,
      0
     ],
     [
      "doorCount",
      null,
      3
     ],
     [
      "roomCount",
      4,
      3
     ]
    ]
   }
  ]
 },
 {
  "theme": "castle",
  "levels": [
   {
    "size": 4,
    "rooms": "0000000011221122",
    "objects": "b..af..b.......b",
    "roomNames": [
     "Kitchen",
     "Stables",
     "Great Hall"
    ],
    "people": [
     "Vince the verger",
     "Albert the alchemist",
     "Basil the baker",
     "Cora the chronicler"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "on",
      "cot"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "window"
     ]
    ],
    "solution": [
     1,
     7,
     10,
     12
    ],
    "doors": [
     [
      5,
      9
     ],
     [
      6,
      10
     ],
     [
      9,
      10
     ]
    ],
    "windows": [
     [
      8,
      "l"
     ],
     [
      12,
      "l"
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     2
    ],
    "rank": "ccnc"
   },
   {
    "size": 5,
    "rooms": "0001100011222332223322233",
    "objects": "..ef.c.....b....b......af",
    "roomNames": [
     "Smithy",
     "Great Hall",
     "Courtyard",
     "Tower"
    ],
    "people": [
     "Victor the vintner",
     "Ada the alchemist",
     "Birgit the bard",
     "Celia the cupbearer",
     "Dora the dancer"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "door"
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "next",
      "urn"
     ],
     [
      4,
      "on",
      "bench"
     ]
    ],
    "solution": [
     0,
     6,
     12,
     19,
     23
    ],
    "doors": [
     [
      2,
      3
     ],
     [
      6,
      11
     ],
     [
      9,
      14
     ],
     [
      22,
      23
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      2,
      "t"
     ],
     [
      22,
      "b"
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     3
    ],
    "rank": "kccnn"
   },
   {
    "size": 6,
    "rooms": "000011000011223333223333224444224444",
    "objects": "c...b.e.f......df..fbe...bdeb.......",
    "roomNames": [
     "Tower",
     "Chapel",
     "Throne Room",
     "Stables",
     "Great Hall"
    ],
    "people": [
     "Albert the archer",
     "Bea the baker",
     "Cedric the chronicler",
     "Della the doorkeeper",
     "Elias the embroiderer",
     "Viola the vintner"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "next",
      "cot"
     ],
     [
      1,
      "next",
      "urn"
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "next",
      "urn"
     ],
     [
      4,
      "on",
      "cot"
     ]
    ],
    "solution": [
     5,
     9,
     14,
     18,
     28,
     31
    ],
    "doors": [
     [
      9,
      10
     ],
     [
      6,
      12
     ],
     [
      8,
      14
     ],
     [
      10,
      16
     ],
     [
      13,
      14
     ],
     [
      31,
      32
     ],
     [
      21,
      27
     ]
    ],
    "windows": [
     [
      29,
      "r"
     ],
     [
      31,
      "b"
     ],
     [
      33,
      "b"
     ],
     [
      35,
      "b"
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     4
    ],
    "rank": "ckccnc"
   },
   {
    "size": 7,
    "rooms": "0001111000111100011112223333222333322244442224444",
    "objects": ".e.e.db...a......d......a..b.b...d..c...e.abb....",
    "roomNames": [
     "Stables",
     "Tower",
     "Kitchen",
     "Solar",
     "Gatehouse"
    ],
    "people": [
     "Ada the archer",
     "Bruno the bard",
     "Vince the vintner",
     "Celia the cupbearer",
     "Dexter the dancer",
     "Elsa the embroiderer",
     "Flora the falconer"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "next",
      "swords"
     ],
     [
      1,
      "next",
      "bench"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "next",
      "cot"
     ],
     [
      4,
      "next",
      "candles"
     ],
     [
      5,
      "same",
      6
     ],
     [
      6,
      "notRoom",
      0
     ],
     [
      6,
      "next",
      "swords"
     ]
    ],
    "solution": [
     0,
     11,
     16,
     22,
     34,
     38,
     47
    ],
    "doors": [
     [
      2,
      3
     ],
     [
      16,
      23
     ],
     [
      17,
      24
     ],
     [
      30,
      31
     ],
     [
      44,
      45
     ],
     [
      32,
      39
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      7,
      "l"
     ],
     [
      42,
      "b"
     ],
     [
      48,
      "r"
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     1
    ],
    "rank": "cnccckc"
   },
   {
    "size": 8,
    "rooms": "0001122200011222000112220001122233344555333445553334455533344555",
    "objects": "..ea.c..a.e.c..a.af..d......b...e..baa..efeae..af....c.........c",
    "roomNames": [
     "Kitchen",
     "Armory",
     "Smithy",
     "Solar",
     "Tower",
     "Chapel"
    ],
    "people": [
     "Albert the alchemist",
     "Vera the vintner",
     "Birgit the bard",
     "Celia the cupbearer",
     "Della the dancer",
     "Edgar the envoy",
     "Fiona the falconer",
     "Gideon the groom"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "next",
      "swords"
     ],
     [
      2,
      "next",
      "bench"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "on",
      "bench"
     ],
     [
      6,
      "next",
      "swords"
     ],
     [
      7,
      "window"
     ]
    ],
    "solution": [
     6,
     9,
     16,
     27,
     37,
     47,
     50,
     60
    ],
    "doors": [
     [
      26,
      27
     ],
     [
      24,
      32
     ],
     [
      20,
      21
     ],
     [
      28,
      36
     ],
     [
      29,
      37
     ],
     [
      58,
      59
     ],
     [
      36,
      37
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      23,
      "r"
     ],
     [
      60,
      "b"
     ],
     [
      63,
      "r"
     ],
     [
      63,
      "b"
     ]
    ],
    "facts": [
     [
      "apart",
      "rank"
     ],
     [
      "nextCount",
      "barrel",
      1
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     0,
     1
    ],
    "rank": "knknckcc"
   },
   {
    "size": 9,
    "rooms": "001111222001111222003333222003333222444444222444444222555556666555556666555556666",
    "objects": "f.......c..e.....cb......ecdebd.d.....cd...aced.c.b...b..dfe.b.b..a.e..e.....e.b.",
    "roomNames": [
     "Throne Room",
     "Stables",
     "Dungeon",
     "Solar",
     "Gatehouse",
     "Smithy",
     "Kitchen"
    ],
    "people": [
     "Ada the archer",
     "Basil the bard",
     "Cora the chronicler",
     "Dora the doorkeeper",
     "Edgar the embroiderer",
     "Felix the farrier",
     "Gideon the groom",
     "Hana the herald",
     "Vince the vintner"
    ],
    "victim": 8,
    "clues": [
     [
      0,
      "door"
     ],
     [
      1,
      "next",
      "cot"
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "next",
      "swords"
     ],
     [
      4,
      "same",
      3
     ],
     [
      5,
      "next",
      "barrel"
     ],
     [
      5,
      "next",
      "candles"
     ],
     [
      6,
      "row",
      6
     ],
     [
      7,
      "on",
      "bench"
     ]
    ],
    "solution": [
     5,
     9,
     22,
     34,
     42,
     47,
     62,
     66,
     73
    ],
    "doors": [
     [
      10,
      11
     ],
     [
      19,
      20
     ],
     [
      27,
      36
     ],
     [
      5,
      6
     ],
     [
      12,
      21
     ],
     [
      32,
      33
     ],
     [
      41,
      42
     ],
     [
      51,
      60
     ],
     [
      32,
      41
     ],
     [
      45,
      54
     ],
     [
      50,
      59
     ],
     [
      58,
      59
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      8,
      "t"
     ],
     [
      17,
      "r"
     ],
     [
      53,
      "r"
     ],
     [
      77,
      "b"
     ]
    ],
    "facts": [
     [
      "nextCount",
      "bench",
      2
     ],
     [
      "doorCount",
      null,
      2
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     0,
     4
    ],
    "rank": "kkckckcck"
   },
   {
    "size": 10,
    "rooms": "0000111111000011111122223333332222333333222244443322224444335555444444555544444466666777776666677777",
    "objects": ".bb.a.b.a.......e.f.f...fa.be..f...........fc.d.....a...a...e....f..............bcb.b..da..c.....cd.",
    "roomNames": [
     "Chapel",
     "Dungeon",
     "Throne Room",
     "Stables",
     "Smithy",
     "Tower",
     "Kitchen",
     "Courtyard"
    ],
    "people": [
     "Astrid the alchemist",
     "Viola the verger",
     "Bella the baker",
     "Carl the cupbearer",
     "Daisy the doorkeeper",
     "Elsa the envoy",
     "Felix the farrier",
     "Gideon the groom",
     "Hugo the herald",
     "Ivy the innkeeper"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "on",
      "bench"
     ],
     [
      0,
      "next",
      "urn"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "notRoom",
      7
     ],
     [
      4,
      "same",
      2
     ],
     [
      5,
      "next",
      "barrel"
     ],
     [
      5,
      "same",
      7
     ],
     [
      6,
      "door"
     ],
     [
      7,
      "door"
     ],
     [
      8,
      "col",
      5
     ],
     [
      9,
      "next",
      "cot"
     ]
    ],
    "solution": [
     8,
     19,
     22,
     36,
     41,
     54,
     63,
     77,
     85,
     90
    ],
    "doors": [
     [
      13,
      14
     ],
     [
      12,
      22
     ],
     [
      17,
      27
     ],
     [
      33,
      34
     ],
     [
      43,
      44
     ],
     [
      53,
      63
     ],
     [
      34,
      44
     ],
     [
      63,
      64
     ],
     [
      74,
      84
     ],
     [
      77,
      87
     ],
     [
      70,
      80
     ],
     [
      94,
      95
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      4,
      "t"
     ],
     [
      6,
      "t"
     ],
     [
      7,
      "t"
     ],
     [
      9,
      "t"
     ],
     [
      95,
      "b"
     ]
    ],
    "facts": [
     [
      "roomCount",
      1,
      2
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     2,
     6
    ],
    "rank": "kcncnccckn"
   },
   {
    "size": 11,
    "rooms": "0000112222200001122222000011333330000113333300001133333444115566664441155666644411556666444115577774444455777744444557777",
    "objects": ".ea.ee...a....b.a....c.....e.f....a..d.a..f.b.f.....c...a..af.ae.fa.......c...b.b.ec..ebaca.......fc..bc..d.......c.....b",
    "roomNames": [
     "Armory",
     "Solar",
     "Stables",
     "Dungeon",
     "Kitchen",
     "Courtyard",
     "Gatehouse",
     "Great Hall"
    ],
    "people": [
     "Astrid the alchemist",
     "Bruno the bard",
     "Celia the chronicler",
     "Dmitri the dancer",
     "Edgar the envoy",
     "Vera the vintner",
     "Felix the farrier",
     "Gus the groom",
     "Hana the herald",
     "Ivo the illuminator",
     "Jonas the juggler"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "col",
      8
     ],
     [
      1,
      "next",
      "bench"
     ],
     [
      2,
      "same",
      4
     ],
     [
      3,
      "next",
      "urn"
     ],
     [
      4,
      "next",
      "urn"
     ],
     [
      5,
      "on",
      "bench"
     ],
     [
      6,
      "next",
      "bench"
     ],
     [
      6,
      "next",
      "barrel"
     ],
     [
      7,
      "window"
     ],
     [
      8,
      "next",
      "swords"
     ],
     [
      8,
      "same",
      10
     ],
     [
      9,
      "alone"
     ],
     [
      10,
      "door"
     ]
    ],
    "solution": [
     8,
     15,
     24,
     43,
     47,
     56,
     73,
     77,
     93,
     108,
     116
    ],
    "doors": [
     [
      36,
      37
     ],
     [
      46,
      57
     ],
     [
      16,
      17
     ],
     [
      49,
      50
     ],
     [
      90,
      91
     ],
     [
      49,
      60
     ],
     [
      17,
      28
     ],
     [
      50,
      61
     ],
     [
      53,
      64
     ],
     [
      103,
      104
     ],
     [
      61,
      62
     ],
     [
      116,
      117
     ],
     [
      87,
      98
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      54,
      "r"
     ],
     [
      76,
      "r"
     ],
     [
      77,
      "l"
     ],
     [
      98,
      "r"
     ],
     [
      114,
      "b"
     ],
     [
      120,
      "b"
     ]
    ],
    "facts": [
     [
      "nextCount",
      "bench",
      4
     ],
     [
      "emptyRooms",
      null,
      0
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     0,
     2
    ],
    "rank": "ncnckcckccc"
   },
   {
    "size": 12,
    "rooms": "000111122222000111122222000111122222000111133333444444433333444444433333444444433333556666777888556666777888556666777888556666777888556666777888",
    "objects": "ff...dbe.....a....b.....e.......f........c.d.fff...bfb.....b...f...f..aefcc...bae...a..f..b..ec..b..a.....da.c....b......a.a.b..b..d.a....c.e...",
    "roomNames": [
     "Chapel",
     "Great Hall",
     "Solar",
     "Courtyard",
     "Kitchen",
     "Smithy",
     "Tower",
     "Throne Room",
     "Dungeon"
    ],
    "people": [
     "Albert the archer",
     "Bella the baker",
     "Carl the chronicler",
     "Vivian the vintner",
     "Dexter the dancer",
     "Elias the envoy",
     "Felix the falconer",
     "Gus the glassmaker",
     "Henrik the herbalist",
     "Ivo the innkeeper",
     "Jade the jester",
     "Konrad the keykeeper"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "on",
      "bench"
     ],
     [
      2,
      "next",
      "barrel"
     ],
     [
      3,
      "window"
     ],
     [
      4,
      "same",
      5
     ],
     [
      5,
      "next",
      "swords"
     ],
     [
      5,
      "same",
      6
     ],
     [
      6,
      "door"
     ],
     [
      7,
      "same",
      11
     ],
     [
      8,
      "next",
      "cot"
     ],
     [
      8,
      "door"
     ],
     [
      9,
      "next",
      "bench"
     ],
     [
      10,
      "next",
      "candles"
     ],
     [
      11,
      "row",
      11
     ],
     [
      11,
      "col",
      4
     ]
    ],
    "solution": [
     11,
     13,
     29,
     36,
     57,
     68,
     79,
     86,
     102,
     111,
     130,
     136
    ],
    "doors": [
     [
      2,
      3
     ],
     [
      38,
      50
     ],
     [
      30,
      31
     ],
     [
      42,
      43
     ],
     [
      42,
      54
     ],
     [
      32,
      44
     ],
     [
      54,
      55
     ],
     [
      79,
      91
     ],
     [
      81,
      93
     ],
     [
      72,
      84
     ],
     [
      75,
      87
     ],
     [
      78,
      90
     ],
     [
      133,
      134
     ],
     [
      101,
      102
     ],
     [
      140,
      141
     ]
    ],
    "windows": [
     [
      6,
      "t"
     ],
     [
      36,
      "l"
     ],
     [
      48,
      "l"
     ],
     [
      59,
      "r"
     ],
     [
      84,
      "l"
     ],
     [
      96,
      "l"
     ],
     [
      107,
      "r"
     ]
    ],
    "facts": [
     [
      "corner",
      null,
      4
     ],
     [
      "roomCount",
      0,
      2
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     1,
     2,
     6
    ],
    "rank": "nkkkckknknkn"
   }
  ]
 },
 {
  "theme": "tomb",
  "levels": [
   {
    "size": 4,
    "rooms": "0000000011221122",
    "objects": "ba..f.......c..a",
    "roomNames": [
     "Well Shaft",
     "Workshop",
     "Sun Court"
    ],
    "people": [
     "Albert the architect",
     "Viola the vizier",
     "Basil the boat builder",
     "Celia the carpenter"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "next",
      "stool"
     ],
     [
      2,
      "same",
      3
     ],
     [
      3,
      "door"
     ]
    ],
    "solution": [
     2,
     7,
     8,
     13
    ],
    "doors": [
     [
      5,
      9
     ],
     [
      7,
      11
     ],
     [
      13,
      14
     ]
    ],
    "windows": [
     [
      0,
      "t"
     ],
     [
      14,
      "b"
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": "..C.....C..L..L."
   },
   {
    "size": 5,
    "rooms": "0011100111001112223322233",
    "objects": "..b.cb..d.......a........",
    "roomNames": [
     "Sun Court",
     "Antechamber",
     "Statue Hall",
     "Well Shaft"
    ],
    "people": [
     "Ada the astrologer",
     "Bella the boat builder",
     "Cora the carpenter",
     "Della the dancer",
     "Viola the vintner"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "door"
     ],
     [
      0,
      "window"
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "next",
      "couch"
     ],
     [
      3,
      "door"
     ]
    ],
    "solution": [
     1,
     7,
     10,
     18,
     24
    ],
    "doors": [
     [
      1,
      2
     ],
     [
      11,
      16
     ],
     [
      12,
      17
     ],
     [
      14,
      19
     ],
     [
      17,
      18
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      2,
      "t"
     ],
     [
      20,
      "l"
     ]
    ],
    "facts": [
     [
      "edge",
      null,
      3
     ],
     [
      "emptyRooms",
      null,
      1
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": ".C.....L.CC.C.....C.....C"
   },
   {
    "size": 6,
    "rooms": "001111001111223333223333224444224444",
    "objects": "cfc.......aa..a....f..........f.....",
    "roomNames": [
     "Shrine",
     "Burial Chamber",
     "Well Shaft",
     "Workshop",
     "Scribe Room"
    ],
    "people": [
     "Albert the astrologer",
     "Bella the brewer",
     "Cora the chanter",
     "Della the dancer",
     "Vivian the vizier",
     "Edith the envoy"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "same",
      1
     ],
     [
      1,
      "next",
      "urn"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "window"
     ],
     [
      5,
      "next",
      "jar"
     ],
     [
      5,
      "door"
     ]
    ],
    "solution": [
     4,
     8,
     15,
     23,
     24,
     31
    ],
    "doors": [
     [
      7,
      8
     ],
     [
      6,
      12
     ],
     [
      9,
      15
     ],
     [
      19,
      20
     ],
     [
      31,
      32
     ],
     [
      21,
      27
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      23,
      "r"
     ],
     [
      29,
      "r"
     ],
     [
      32,
      "b"
     ]
    ],
    "facts": [
     [
      "corner",
      null,
      3
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": "....C..........C.......C..L.L..CC..."
   },
   {
    "size": 7,
    "rooms": "0000000000000011112221111222333442233344223334422",
    "objects": ".fcb..e....b...e.fad.....d....f..d.ed.af...a.....",
    "roomNames": [
     "Scribe Room",
     "Statue Hall",
     "Treasury",
     "Shrine",
     "Granary"
    ],
    "people": [
     "Arthur the astrologer",
     "Vera the vintner",
     "Bea the boat builder",
     "Clara the chanter",
     "Daisy the diviner",
     "Elias the embalmer",
     "Fiona the fisher"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "next",
      "jar"
     ],
     [
      1,
      "next",
      "couch"
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "next",
      "rubble"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "next",
      "statue"
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "next",
      "stool"
     ]
    ],
    "solution": [
     0,
     12,
     20,
     22,
     32,
     37,
     45
    ],
    "doors": [
     [
      7,
      14
     ],
     [
      11,
      18
     ],
     [
      17,
      18
     ],
     [
      21,
      28
     ],
     [
      24,
      31
     ],
     [
      25,
      32
     ],
     [
      37,
      38
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      2,
      "t"
     ],
     [
      7,
      "l"
     ],
     [
      46,
      "b"
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": "..........C.....................C....L..........."
   },
   {
    "size": 8,
    "rooms": "0000111100001111000011112222333322223333444455554444555544445555",
    "objects": "..ff..db..c.be........c....a...e.............e.ffe....a..b......",
    "roomNames": [
     "Granary",
     "Hall of Pillars",
     "Scribe Room",
     "Workshop",
     "Sun Court",
     "Boat Pit"
    ],
    "people": [
     "Astrid the architect",
     "Birgit the boat builder",
     "Clara the chanter",
     "Dora the dancer",
     "Vince the vintner",
     "Ena the embalmer",
     "Freya the fisher",
     "Greta the goldsmith"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "window"
     ],
     [
      1,
      "next",
      "urn"
     ],
     [
      2,
      "same",
      0
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "notRoom",
      1
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "col",
      2
     ],
     [
      5,
      "alone"
     ],
     [
      6,
      "next",
      "stool"
     ],
     [
      7,
      "row",
      7
     ]
    ],
    "solution": [
     5,
     11,
     20,
     24,
     33,
     42,
     55,
     62
    ],
    "doors": [
     [
      19,
      20
     ],
     [
      17,
      25
     ],
     [
      22,
      30
     ],
     [
      27,
      28
     ],
     [
      33,
      41
     ],
     [
      36,
      44
     ],
     [
      51,
      52
     ]
    ],
    "windows": [
     [
      4,
      "t"
     ],
     [
      5,
      "t"
     ],
     [
      32,
      "l"
     ],
     [
      47,
      "r"
     ],
     [
      63,
      "r"
     ]
    ],
    "facts": [
     [
      "onCount",
      "stool",
      0
     ],
     [
      "windowCount",
      null,
      1
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": ".........C.....L.................C........L............CL.LC..C."
   },
   {
    "size": 9,
    "rooms": "000011122000011122000011122000011122333344555333344555666644555666644555666644555",
    "objects": "ee.b....ceefe......be.............d...a......fb.......bac.cfb.a...e..a....b...a..",
    "roomNames": [
     "Granary",
     "Boat Pit",
     "Treasury",
     "Well Shaft",
     "Hall of Pillars",
     "Workshop",
     "Scribe Room"
    ],
    "people": [
     "Alma the astrologer",
     "Basil the boat builder",
     "Carl the chanter",
     "Daisy the diviner",
     "Elias the envoy",
     "Fiona the fanbearer",
     "Gwen the goldsmith",
     "Vera the vintner",
     "Henrik the harpist"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "next",
      "rubble"
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "same",
      0
     ],
     [
      2,
      "row",
      2
     ],
     [
      3,
      "door"
     ],
     [
      3,
      "col",
      5
     ],
     [
      4,
      "same",
      6
     ],
     [
      5,
      "next",
      "urn"
     ],
     [
      6,
      "next",
      "stool"
     ],
     [
      7,
      "next",
      "rubble"
     ],
     [
      8,
      "window"
     ]
    ],
    "solution": [
     3,
     15,
     19,
     32,
     44,
     49,
     61,
     65,
     72
    ],
    "doors": [
     [
      21,
      22
     ],
     [
      27,
      36
     ],
     [
      15,
      16
     ],
     [
      32,
      41
     ],
     [
      33,
      42
     ],
     [
      34,
      43
     ],
     [
      48,
      49
     ],
     [
      47,
      56
     ],
     [
      77,
      78
     ],
     [
      66,
      67
     ]
    ],
    "windows": [
     [
      27,
      "l"
     ],
     [
      53,
      "r"
     ],
     [
      72,
      "b"
     ],
     [
      73,
      "b"
     ],
     [
      78,
      "b"
     ]
    ],
    "facts": [
     [
      "emptyRooms",
      null,
      2
     ],
     [
      "furniture",
      null,
      2
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": "...............C.................C..CL...........L...............C...........L..."
   },
   {
    "size": 10,
    "rooms": "0000011111000001111122222111112222233333222223333344444555664444455566777775556677777555667777755566",
    "objects": "a.d...dad....f......f....b......a.......fb..b.d.d.b...........b....a.f.c.......a..c.f.....c..b..b..b",
    "roomNames": [
     "Statue Hall",
     "Well Shaft",
     "Granary",
     "Treasury",
     "Scribe Room",
     "Shrine",
     "Burial Chamber",
     "Antechamber"
    ],
    "people": [
     "Albert the architect",
     "Bruno the boat builder",
     "Cedric the chanter",
     "Viola the vizier",
     "Daisy the diviner",
     "Edgar the envoy",
     "Felix the fanbearer",
     "Gwen the guard",
     "Henrik the herder",
     "Ivy the incense maker"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "on",
      "stool"
     ],
     [
      0,
      "window"
     ],
     [
      1,
      "same",
      0
     ],
     [
      2,
      "door"
     ],
     [
      4,
      "next",
      "statue"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "same",
      6
     ],
     [
      6,
      "on",
      "stool"
     ],
     [
      7,
      "next",
      "jar"
     ],
     [
      8,
      "next",
      "urn"
     ],
     [
      8,
      "next",
      "jar"
     ],
     [
      9,
      "same",
      7
     ]
    ],
    "solution": [
     0,
     12,
     29,
     38,
     45,
     56,
     67,
     74,
     83,
     91
    ],
    "doors": [
     [
      4,
      5
     ],
     [
      13,
      23
     ],
     [
      24,
      25
     ],
     [
      29,
      39
     ],
     [
      44,
      45
     ],
     [
      44,
      54
     ],
     [
      47,
      57
     ],
     [
      49,
      59
     ],
     [
      64,
      65
     ],
     [
      60,
      70
     ],
     [
      77,
      78
     ],
     [
      84,
      85
     ]
    ],
    "windows": [
     [
      0,
      "t"
     ],
     [
      1,
      "t"
     ],
     [
      2,
      "t"
     ],
     [
      10,
      "l"
     ],
     [
      69,
      "r"
     ],
     [
      92,
      "b"
     ]
    ],
    "facts": [
     [
      "furniture",
      null,
      2
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": "...L.......L..C...C.........L..L..L..........C.L.......L..............C.........C..C.....C.........."
   },
   {
    "size": 11,
    "rooms": "0000111111100001111111000011122220000333222244443332222444433322224444333222255556667777555566677775555666777755556667777",
    "objects": "b..c..b...aa.b......b.b......a..c.f..........ce....fabdf.b...e..a......d.ae.a.b.........ec....e.aabd.dc..........f.....e.",
    "roomNames": [
     "Scribe Room",
     "Hall of Pillars",
     "Shrine",
     "Workshop",
     "Granary",
     "Boat Pit",
     "Well Shaft",
     "Burial Chamber"
    ],
    "people": [
     "Vivian the vintner",
     "Arthur the astrologer",
     "Basil the boat builder",
     "Clara the chanter",
     "Dexter the diviner",
     "Edgar the embalmer",
     "Frank the fanbearer",
     "Gideon the guard",
     "Hazel the harpist",
     "Ivy the inspector",
     "Jutta the juggler"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "next",
      "couch"
     ],
     [
      1,
      "row",
      1
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "next",
      "couch"
     ],
     [
      4,
      "next",
      "jar"
     ],
     [
      4,
      "same",
      5
     ],
     [
      5,
      "next",
      "urn"
     ],
     [
      5,
      "next",
      "couch"
     ],
     [
      6,
      "same",
      3
     ],
     [
      6,
      "next",
      "rubble"
     ],
     [
      7,
      "next",
      "couch"
     ],
     [
      7,
      "row",
      7
     ],
     [
      8,
      "next",
      "statue"
     ],
     [
      9,
      "col",
      4
     ],
     [
      10,
      "row",
      10
     ]
    ],
    "solution": [
     5,
     19,
     25,
     42,
     44,
     56,
     73,
     87,
     90,
     103,
     116
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      36,
      37
     ],
     [
      35,
      46
     ],
     [
      18,
      29
     ],
     [
      28,
      39
     ],
     [
      39,
      40
     ],
     [
      75,
      86
     ],
     [
      47,
      48
     ],
     [
      72,
      83
     ],
     [
      69,
      80
     ],
     [
      113,
      114
     ],
     [
      83,
      84
     ]
    ],
    "windows": [
     [
      4,
      "t"
     ],
     [
      10,
      "r"
     ],
     [
      10,
      "t"
     ],
     [
      43,
      "r"
     ],
     [
      65,
      "r"
     ],
     [
      99,
      "l"
     ],
     [
      114,
      "b"
     ]
    ],
    "facts": [
     [
      "roomCount",
      1,
      2
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": "....LC...................L..................C.................L........................L.....................LC.....C...."
   },
   {
    "size": 12,
    "rooms": "000000112233000000112233000000112233444444112233444444112233444444112233444444112233555566666666555566666666555577778888555577778888555577778888",
    "objects": ".........c..beea.e..b.........c...c..ff.b...e.....e.b...a...b...ba..b.......d...c.c.......bbd.a...b.e....b...f..f...c..b.......c..a.a...afa..c.a",
    "roomNames": [
     "Scribe Room",
     "Hall of Pillars",
     "Statue Hall",
     "Shrine",
     "Boat Pit",
     "Burial Chamber",
     "Well Shaft",
     "Treasury",
     "Granary"
    ],
    "people": [
     "Astrid the astrologer",
     "Birgit the brewer",
     "Carl the chanter",
     "Dora the diviner",
     "Edgar the embalmer",
     "Fiona the fisher",
     "Gus the guard",
     "Hana the herder",
     "Ivy the incense maker",
     "Vera the vizier",
     "Jasper the jeweller",
     "Kitty the keeper"
    ],
    "victim": 9,
    "clues": [
     [
      0,
      "col",
      1
     ],
     [
      0,
      "same",
      1
     ],
     [
      1,
      "next",
      "rubble"
     ],
     [
      2,
      "next",
      "stool"
     ],
     [
      3,
      "room",
      1
     ],
     [
      3,
      "next",
      "urn"
     ],
     [
      4,
      "on",
      "stool"
     ],
     [
      4,
      "next",
      "couch"
     ],
     [
      5,
      "alone"
     ],
     [
      6,
      "next",
      "statue"
     ],
     [
      7,
      "next",
      "couch"
     ],
     [
      7,
      "next",
      "stool"
     ],
     [
      8,
      "notRoom",
      6
     ],
     [
      9,
      "next",
      "couch"
     ],
     [
      9,
      "next",
      "jar"
     ],
     [
      10,
      "on",
      "stool"
     ],
     [
      11,
      "next",
      "urn"
     ]
    ],
    "solution": [
     1,
     16,
     27,
     42,
     56,
     71,
     77,
     93,
     96,
     110,
     130,
     139
    ],
    "doors": [
     [
      29,
      30
     ],
     [
      25,
      37
     ],
     [
      31,
      32
     ],
     [
      53,
      54
     ],
     [
      78,
      90
     ],
     [
      45,
      46
     ],
     [
      80,
      92
     ],
     [
      82,
      94
     ],
     [
      72,
      84
     ],
     [
      76,
      88
     ],
     [
      87,
      88
     ],
     [
      135,
      136
     ],
     [
      100,
      112
     ],
     [
      106,
      118
     ],
     [
      115,
      116
     ]
    ],
    "windows": [
     [
      47,
      "r"
     ],
     [
      60,
      "l"
     ],
     [
      107,
      "r"
     ],
     [
      108,
      "l"
     ],
     [
      119,
      "r"
     ],
     [
      132,
      "b"
     ],
     [
      137,
      "b"
     ]
    ],
    "facts": [
     [
      "onCount",
      "couch",
      0
     ],
     [
      "doorCount",
      null,
      0
     ],
     [
      "roomCount",
      7,
      1
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": ".C...L..........C..........C.......C.....L..........................................C.............................C...L.C..........L.......LC..."
   }
  ]
 },
 {
  "theme": "camp",
  "levels": [
   {
    "size": 4,
    "rooms": "0011001122222222",
    "objects": "...f........df.e",
    "roomNames": [
     "Lookout Rock",
     "River Bank",
     "Flint Pit"
    ],
    "people": [
     "Albert the acrobat",
     "Bella the beekeeper",
     "Carl the carrier",
     "Victor the visionary"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "next",
      "bones"
     ]
    ],
    "solution": [
     0,
     7,
     9,
     14
    ],
    "doors": [
     [
      1,
      2
     ],
     [
      4,
      8
     ],
     [
      7,
      11
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      13,
      "b"
     ]
    ],
    "facts": [
     [
      "touch",
      null,
      1
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": "..3.",
    "tags": ".........3.4...."
   },
   {
    "size": 5,
    "rooms": "0011100111001112223322233",
    "objects": ".b....f..c..b..d..b.....c",
    "roomNames": [
     "Cave",
     "Flint Pit",
     "Lookout Rock",
     "Hide Tent"
    ],
    "people": [
     "Alma the artist",
     "Basil the beekeeper",
     "Vera the visionary",
     "Cedric the carrier",
     "Dexter the drummer"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "next",
      "bones"
     ],
     [
      1,
      "next",
      "leaves"
     ],
     [
      2,
      "next",
      "leaves"
     ],
     [
      3,
      "next",
      "boulder"
     ],
     [
      4,
      "window"
     ]
    ],
    "solution": [
     1,
     7,
     13,
     19,
     20
    ],
    "doors": [
     [
      11,
      12
     ],
     [
      11,
      16
     ],
     [
      12,
      17
     ],
     [
      13,
      18
     ],
     [
      17,
      18
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      2,
      "t"
     ],
     [
      20,
      "b"
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": "1.10.",
    "tags": "0............1..........."
   },
   {
    "size": 6,
    "rooms": "000011000011222211222211333344333344",
    "objects": ".ac...........a.....abb...a..a...f..",
    "roomNames": [
     "Painted Wall",
     "Elder Hut",
     "Flint Pit",
     "Cave",
     "Bone Yard"
    ],
    "people": [
     "Arthur the artist",
     "Bea the builder",
     "Cedric the carrier",
     "Dexter the dancer",
     "Vera the valley guide",
     "Ena the elk tamer"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "same",
      1
     ],
     [
      1,
      "next",
      "boulder"
     ],
     [
      2,
      "same",
      3
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "next",
      "log"
     ]
    ],
    "solution": [
     0,
     8,
     15,
     19,
     28,
     35
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      6,
      12
     ],
     [
      15,
      16
     ],
     [
      22,
      28
     ],
     [
      19,
      25
     ],
     [
      27,
      28
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      6,
      "l"
     ],
     [
      18,
      "l"
     ],
     [
      24,
      "l"
     ]
    ],
    "facts": [
     [
      "onCount",
      "log",
      0
     ],
     [
      "touch",
      null,
      1
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": "..40..",
    "tags": ".........1.........0....4..........."
   },
   {
    "size": 7,
    "rooms": "0000111000011122221112222111333444433344443334444",
    "objects": "....b...e.a....f.f.f....baa.......d...........c..",
    "roomNames": [
     "Painted Wall",
     "Lookout Rock",
     "Bone Yard",
     "Elder Hut",
     "Cave"
    ],
    "people": [
     "Vera the visionary",
     "Alma the acrobat",
     "Bea the builder",
     "Cedric the carver",
     "Dora the dancer",
     "Edith the elder",
     "Felix the flute player"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "window"
     ],
     [
      1,
      "on",
      "log"
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "next",
      "bones"
     ],
     [
      4,
      "col",
      2
     ],
     [
      5,
      "alone"
     ],
     [
      6,
      "row",
      6
     ]
    ],
    "solution": [
     6,
     10,
     14,
     26,
     30,
     39,
     43
    ],
    "doors": [
     [
      10,
      11
     ],
     [
      10,
      17
     ],
     [
      17,
      18
     ],
     [
      25,
      32
     ],
     [
      21,
      28
     ],
     [
      24,
      31
     ],
     [
      44,
      45
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      6,
      "r"
     ],
     [
      34,
      "r"
     ],
     [
      42,
      "b"
     ]
    ],
    "facts": [
     [
      "onCount",
      "log",
      2
     ],
     [
      "corner",
      null,
      4
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": "320203.",
    "tags": "............0.0...............0......0..........."
   },
   {
    "size": 8,
    "rooms": "0000111100001111000011112222233322222333444223334445555544455555",
    "objects": "e....c......b.....a.b..c...a...e.............e..b..a...........b",
    "roomNames": [
     "Spring",
     "Hide Tent",
     "River Bank",
     "Hunting Ground",
     "Painted Wall",
     "Fire Pit"
    ],
    "people": [
     "Arthur the acrobat",
     "Basil the beekeeper",
     "Vera the visionary",
     "Cora the carver",
     "Dora the dancer",
     "Edgar the elk tamer",
     "Fiona the firekeeper",
     "Gideon the guard"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "next",
      "log"
     ],
     [
      2,
      "next",
      "log"
     ],
     [
      2,
      "col",
      1
     ],
     [
      3,
      "next",
      "log"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "same",
      3
     ],
     [
      6,
      "door"
     ],
     [
      7,
      "next",
      "leaves"
     ]
    ],
    "solution": [
     7,
     10,
     17,
     28,
     37,
     43,
     54,
     56
    ],
    "doors": [
     [
      19,
      20
     ],
     [
      18,
      26
     ],
     [
      20,
      28
     ],
     [
      23,
      31
     ],
     [
      36,
      37
     ],
     [
      32,
      40
     ],
     [
      43,
      51
     ],
     [
      46,
      54
     ],
     [
      50,
      51
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      2,
      "t"
     ],
     [
      16,
      "l"
     ],
     [
      40,
      "l"
     ],
     [
      56,
      "b"
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": "3.0...23",
    "tags": "....0..3............................2................22.32.4...."
   },
   {
    "size": 9,
    "rooms": "000011122000011122000011122000011122333344444333344444333344444555566666555566666",
    "objects": ".da..fd.f....b......a..c........b..a.....c.........cc...b.f.ac.b.eb.b..a.a.c..a..",
    "roomNames": [
     "Lookout Rock",
     "River Bank",
     "Berry Grove",
     "Hunting Ground",
     "Hide Tent",
     "Elder Hut",
     "Painted Wall"
    ],
    "people": [
     "Viola the visionary",
     "Astrid the artist",
     "Bruno the builder",
     "Cora the carver",
     "Dmitri the dancer",
     "Edgar the elk tamer",
     "Felix the flute player",
     "Gideon the guard",
     "Hugo the hide tanner"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "next",
      "fire"
     ],
     [
      1,
      "next",
      "fire"
     ],
     [
      2,
      "next",
      "log"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "next",
      "bones"
     ],
     [
      6,
      "same",
      5
     ],
     [
      6,
      "next",
      "log"
     ],
     [
      7,
      "next",
      "leaves"
     ],
     [
      8,
      "next",
      "boulder"
     ]
    ],
    "solution": [
     0,
     10,
     26,
     34,
     39,
     49,
     59,
     69,
     74
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      27,
      36
     ],
     [
      6,
      7
     ],
     [
      31,
      40
     ],
     [
      34,
      43
     ],
     [
      39,
      40
     ],
     [
      57,
      66
     ],
     [
      58,
      67
     ],
     [
      75,
      76
     ]
    ],
    "windows": [
     [
      0,
      "t"
     ],
     [
      3,
      "t"
     ],
     [
      53,
      "r"
     ],
     [
      73,
      "b"
     ],
     [
      74,
      "b"
     ]
    ],
    "facts": [
     [
      "roomCount",
      4,
      2
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": "1.441.323",
    "tags": "1...3......................4..1...4..4.1..............2.......3......21.........."
   },
   {
    "size": 10,
    "rooms": "0000112222000011222200001122220000112222333333444433333344445555554444555555444466666677776666667777",
    "objects": "..e.a.....ca.e.f..ade....da.a.a..cfd.b..aabdf.c.......e..f.bcd....f..e.e...fc.a......ca..b......e.f.",
    "roomNames": [
     "Fire Pit",
     "Flint Pit",
     "Cave",
     "Elder Hut",
     "Painted Wall",
     "Hide Tent",
     "Bone Yard",
     "Lookout Rock"
    ],
    "people": [
     "Albert the acrobat",
     "Basil the builder",
     "Cora the carver",
     "Dmitri the dancer",
     "Elias the elder",
     "Freya the firekeeper",
     "Greta the grinder",
     "Vera the visionary",
     "Hazel the hide tanner",
     "Ivy the ice cutter"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "same",
      3
     ],
     [
      1,
      "on",
      "log"
     ],
     [
      2,
      "same",
      1
     ],
     [
      2,
      "next",
      "boulder"
     ],
     [
      3,
      "next",
      "leaves"
     ],
     [
      4,
      "next",
      "leaves"
     ],
     [
      5,
      "alone"
     ],
     [
      6,
      "next",
      "fire"
     ],
     [
      8,
      "next",
      "bones"
     ],
     [
      8,
      "next",
      "leaves"
     ],
     [
      9,
      "alone"
     ]
    ],
    "solution": [
     7,
     11,
     23,
     36,
     49,
     55,
     62,
     70,
     88,
     94
    ],
    "doors": [
     [
      33,
      34
     ],
     [
      32,
      42
     ],
     [
      5,
      6
     ],
     [
      35,
      45
     ],
     [
      38,
      48
     ],
     [
      45,
      46
     ],
     [
      52,
      62
     ],
     [
      75,
      76
     ],
     [
      77,
      87
     ],
     [
      75,
      85
     ],
     [
      95,
      96
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      10,
      "l"
     ],
     [
      30,
      "l"
     ],
     [
      92,
      "b"
     ],
     [
      93,
      "b"
     ],
     [
      99,
      "r"
     ]
    ],
    "facts": [
     [
      "nextCount",
      "tree",
      3
     ],
     [
      "roomCount",
      2,
      2
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": "31110..404",
    "tags": ".......3..............4........0....1.................................4.3.4......1..1..2.....043...."
   },
   {
    "size": 11,
    "rooms": "0000011111100000111111002221111110022233333300222333333002223333334444555555544445555555444455566667777777666677777776666",
    "objects": "........edfa.....d.....cb...b......aa...a.............d.f.e......bb..c.......d.....a..d.b.ade.....d...dee....b.ab.......a",
    "roomNames": [
     "Flint Pit",
     "Fire Pit",
     "River Bank",
     "Bone Yard",
     "Berry Grove",
     "Elder Hut",
     "Hunting Ground",
     "Hide Tent"
    ],
    "people": [
     "Albert the artist",
     "Bea the builder",
     "Celia the carrier",
     "Dexter the dancer",
     "Elias the elk tamer",
     "Flora the flute player",
     "Grace the grinder",
     "Victor the visionary",
     "Hazel the hide tanner",
     "Ivy the idol carver",
     "Juno the joker"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "window"
     ],
     [
      1,
      "same",
      4
     ],
     [
      2,
      "next",
      "leaves"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "next",
      "log"
     ],
     [
      4,
      "col",
      0
     ],
     [
      5,
      "same",
      3
     ],
     [
      6,
      "door"
     ],
     [
      7,
      "next",
      "log"
     ],
     [
      7,
      "door"
     ],
     [
      8,
      "next",
      "log"
     ],
     [
      8,
      "alone"
     ],
     [
      9,
      "next",
      "fire"
     ],
     [
      9,
      "next",
      "log"
     ],
     [
      9,
      "alone"
     ],
     [
      10,
      "next",
      "tree"
     ]
    ],
    "solution": [
     2,
     14,
     27,
     39,
     44,
     63,
     75,
     84,
     89,
     109,
     114
    ],
    "doors": [
     [
      4,
      5
     ],
     [
      23,
      24
     ],
     [
      56,
      67
     ],
     [
      26,
      27
     ],
     [
      32,
      43
     ],
     [
      37,
      38
     ],
     [
      58,
      69
     ],
     [
      59,
      70
     ],
     [
      64,
      75
     ],
     [
      91,
      92
     ],
     [
      90,
      101
     ],
     [
      84,
      95
     ],
     [
      93,
      104
     ],
     [
      105,
      106
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      2,
      "t"
     ],
     [
      88,
      "l"
     ],
     [
      109,
      "r"
     ],
     [
      110,
      "l"
     ],
     [
      116,
      "b"
     ],
     [
      120,
      "b"
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": ".12214...44",
    "tags": "......0.......1............2.............4......1...23.................................2.....0......21.....1......444...."
   },
   {
    "size": 12,
    "rooms": "000011122233000011122233000011122233000011122233000011122233444455566666444455566666444455566666444455566666777777788888777777788888777777788888",
    "objects": "....b....c..e..dbb......d....d..d..e.f...b..fdb.c.a..aeb..dd.a..a.........cd.........a.aeb.......cf.fa...f.cdbf..c.cfbbd..b...b...d.f..dee..c..c",
    "roomNames": [
     "Cave",
     "Hunting Ground",
     "Berry Grove",
     "Lookout Rock",
     "Spring",
     "Hide Tent",
     "Elder Hut",
     "Painted Wall",
     "River Bank"
    ],
    "people": [
     "Alma the acrobat",
     "Bea the builder",
     "Vince the valley guide",
     "Celia the carver",
     "Della the dancer",
     "Ena the elk tamer",
     "Felix the flute player",
     "Gwen the grinder",
     "Hana the hornblower",
     "Ines the idol carver",
     "Jade the joker",
     "Kitty the knot tier"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "next",
      "fire"
     ],
     [
      2,
      "next",
      "leaves"
     ],
     [
      2,
      "next",
      "fire"
     ],
     [
      3,
      "next",
      "bones"
     ],
     [
      4,
      "next",
      "bones"
     ],
     [
      4,
      "door"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "alone"
     ],
     [
      6,
      "next",
      "log"
     ],
     [
      7,
      "next",
      "bones"
     ],
     [
      7,
      "next",
      "log"
     ],
     [
      8,
      "door"
     ],
     [
      9,
      "next",
      "bones"
     ],
     [
      10,
      "next",
      "fire"
     ],
     [
      11,
      "same",
      9
     ],
     [
      11,
      "same",
      10
     ]
    ],
    "solution": [
     10,
     17,
     28,
     36,
     56,
     66,
     73,
     86,
     99,
     117,
     131,
     139
    ],
    "doors": [
     [
      51,
      52
     ],
     [
      51,
      63
     ],
     [
      30,
      31
     ],
     [
      52,
      64
     ],
     [
      33,
      34
     ],
     [
      56,
      68
     ],
     [
      58,
      70
     ],
     [
      75,
      76
     ],
     [
      99,
      111
     ],
     [
      102,
      103
     ],
     [
      100,
      112
     ],
     [
      103,
      115
     ],
     [
      126,
      127
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      47,
      "r"
     ],
     [
      59,
      "r"
     ],
     [
      72,
      "l"
     ],
     [
      95,
      "r"
     ],
     [
      96,
      "l"
     ],
     [
      136,
      "b"
     ]
    ],
    "facts": [
     [
      "doorCount",
      null,
      2
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": "04...433.233",
    "tags": ".0........0....................................2..............3...4...0.03..................0..................1..2.....2..........3.......3...."
   }
  ]
 },
 {
  "theme": "gulch",
  "levels": [
   {
    "size": 4,
    "rooms": "0000000011221122",
    "objects": "e..a........f...",
    "roomNames": [
     "Telegraph Office",
     "Jail",
     "Saloon"
    ],
    "people": [
     "Alma the attorney",
     "Basil the blacksmith",
     "Vivian the vet",
     "Cedric the cattle driver"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "next",
      "chair"
     ],
     [
      1,
      "door"
     ],
     [
      3,
      "door"
     ],
     [
      3,
      "bandit"
     ]
    ],
    "solution": [
     2,
     7,
     8,
     13
    ],
    "doors": [
     [
      5,
      9
     ],
     [
      7,
      11
     ],
     [
      13,
      14
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      2,
      "t"
     ]
    ],
    "facts": [
     [
      "touch",
      null,
      2
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 1,
    "lawful": [
     0
    ]
   },
   {
    "size": 5,
    "rooms": "0001100011000112233322333",
    "objects": ".e..abb.....e.f..b..b...b",
    "roomNames": [
     "Corral",
     "Church",
     "Hotel",
     "Sheriff Office"
    ],
    "people": [
     "Alma the attorney",
     "Victor the vaquero",
     "Bea the banker",
     "Clara the cattle driver",
     "Dora the deputy"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "next",
      "chair"
     ],
     [
      2,
      "row",
      2
     ],
     [
      3,
      "next",
      "bed"
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "bandit"
     ]
    ],
    "solution": [
     3,
     7,
     11,
     15,
     24
    ],
    "doors": [
     [
      2,
      3
     ],
     [
      10,
      15
     ],
     [
      12,
      17
     ],
     [
      13,
      18
     ],
     [
      21,
      22
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      14,
      "r"
     ],
     [
      21,
      "b"
     ]
    ],
    "facts": [
     [
      "nextCount",
      "horse",
      0
     ],
     [
      "furniture",
      null,
      1
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 1,
    "lawful": [
     2
    ]
   },
   {
    "size": 6,
    "rooms": "000111000111223333223333224444224444",
    "objects": ".d...e.....c......b.......bcba......",
    "roomNames": [
     "Barber",
     "General Store",
     "Bank",
     "Church",
     "Hotel"
    ],
    "people": [
     "Arthur the auctioneer",
     "Bruno the banker",
     "Clara the cattle driver",
     "Victor the vaquero",
     "Della the deputy",
     "Elias the engineer"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "next",
      "piano"
     ],
     [
      1,
      "bandit"
     ],
     [
      2,
      "door"
     ],
     [
      4,
      "on",
      "bed"
     ],
     [
      4,
      "withBandit"
     ],
     [
      5,
      "next",
      "chair"
     ]
    ],
    "solution": [
     4,
     9,
     13,
     18,
     26,
     35
    ],
    "doors": [
     [
      2,
      3
     ],
     [
      7,
      13
     ],
     [
      8,
      14
     ],
     [
      9,
      15
     ],
     [
      13,
      14
     ],
     [
      25,
      26
     ],
     [
      20,
      26
     ]
    ],
    "windows": [
     [
      4,
      "t"
     ],
     [
      6,
      "l"
     ],
     [
      11,
      "r"
     ],
     [
      23,
      "r"
     ]
    ],
    "facts": [
     [
      "roomCount",
      3,
      0
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 2,
    "lawful": [
     2
    ]
   },
   {
    "size": 7,
    "rooms": "0001111000111100011112222222222222233344443334444",
    "objects": ".ddb..ab..b..b..a.........d.......d.bb.a..d......",
    "roomNames": [
     "Jail",
     "Corral",
     "Mine",
     "Bank",
     "Livery"
    ],
    "people": [
     "Viola the vaquero",
     "Albert the auctioneer",
     "Bea the banker",
     "Cedric the cattle driver",
     "Daisy the deputy",
     "Edgar the editor",
     "Felix the farmer"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "on",
      "bed"
     ],
     [
      2,
      "on",
      "chair"
     ],
     [
      3,
      "row",
      3
     ],
     [
      3,
      "col",
      0
     ],
     [
      4,
      "withBandit"
     ],
     [
      5,
      "on",
      "bed"
     ],
     [
      5,
      "alone"
     ],
     [
      6,
      "window"
     ]
    ],
    "solution": [
     6,
     10,
     16,
     21,
     32,
     36,
     47
    ],
    "doors": [
     [
      2,
      3
     ],
     [
      15,
      22
     ],
     [
      17,
      24
     ],
     [
      30,
      37
     ],
     [
      31,
      38
     ],
     [
      37,
      38
     ]
    ],
    "windows": [
     [
      0,
      "t"
     ],
     [
      13,
      "r"
     ],
     [
      27,
      "r"
     ],
     [
      47,
      "b"
     ]
    ],
    "facts": [
     [
      "nextCount",
      "bed",
      1
     ],
     [
      "corner",
      null,
      3
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 2,
    "lawful": [
     1
    ]
   },
   {
    "size": 8,
    "rooms": "0011122200111222001112220011122233344555333445553334455533344555",
    "objects": "cc...c....ba........f..fbf.cbf..........f.c..abb...ec.a.ad.f.bd.",
    "roomNames": [
     "Telegraph Office",
     "Jail",
     "Bank",
     "Saloon",
     "Church",
     "Mine"
    ],
    "people": [
     "Alma the attorney",
     "Bruno the blacksmith",
     "Clara the cook",
     "Daisy the deputy",
     "Edith the editor",
     "Viola the vet",
     "Flora the farmer",
     "Grace the gambler"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "window"
     ],
     [
      1,
      "next",
      "barrel"
     ],
     [
      2,
      "next",
      "bed"
     ],
     [
      3,
      "next",
      "horse"
     ],
     [
      4,
      "bandit"
     ],
     [
      5,
      "next",
      "piano"
     ],
     [
      6,
      "next",
      "cactus"
     ],
     [
      7,
      "next",
      "cactus"
     ],
     [
      7,
      "window"
     ]
    ],
    "solution": [
     7,
     8,
     18,
     30,
     36,
     43,
     49,
     61
    ],
    "doors": [
     [
      17,
      18
     ],
     [
      25,
      33
     ],
     [
      20,
      21
     ],
     [
      26,
      34
     ],
     [
      27,
      35
     ],
     [
      29,
      37
     ],
     [
      50,
      51
     ],
     [
      52,
      53
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      7,
      "r"
     ],
     [
      47,
      "r"
     ],
     [
      48,
      "l"
     ],
     [
      61,
      "b"
     ]
    ],
    "facts": [
     [
      "doorCount",
      null,
      1
     ],
     [
      "alone",
      null,
      4
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 2,
    "lawful": [
     0
    ]
   },
   {
    "size": 9,
    "rooms": "001112222001112222001112222001113333000003333000004444555444444555446666555446666",
    "objects": ".c.b..a..ae....a..bbc.e......e.edd....d..........bb.b..e...ad......a.e....b.b.ed.",
    "roomNames": [
     "Livery",
     "Saloon",
     "Jail",
     "Sheriff Office",
     "Barber",
     "Corral",
     "General Store"
    ],
    "people": [
     "Albert the auctioneer",
     "Birgit the blacksmith",
     "Cora the cattle driver",
     "Dora the deputy",
     "Elias the engineer",
     "Flora the farrier",
     "Viola the vaquero",
     "Gus the gunsmith",
     "Hazel the hatmaker"
    ],
    "victim": 6,
    "clues": [
     [
      0,
      "next",
      "bed"
     ],
     [
      1,
      "on",
      "chair"
     ],
     [
      1,
      "bandit"
     ],
     [
      2,
      "next",
      "piano"
     ],
     [
      3,
      "next",
      "cactus"
     ],
     [
      4,
      "door"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "on",
      "bed"
     ],
     [
      5,
      "door"
     ],
     [
      5,
      "bandit"
     ],
     [
      6,
      "withBandit"
     ],
     [
      7,
      "same",
      8
     ],
     [
      8,
      "next",
      "bed"
     ]
    ],
    "solution": [
     2,
     15,
     21,
     34,
     40,
     50,
     62,
     63,
     73
    ],
    "doors": [
     [
      31,
      40
     ],
     [
      40,
      41
     ],
     [
      49,
      58
     ],
     [
      45,
      54
     ],
     [
      13,
      14
     ],
     [
      31,
      32
     ],
     [
      24,
      33
     ],
     [
      41,
      50
     ],
     [
      74,
      75
     ],
     [
      61,
      70
     ]
    ],
    "windows": [
     [
      36,
      "l"
     ],
     [
      44,
      "r"
     ],
     [
      75,
      "b"
     ],
     [
      80,
      "r"
     ],
     [
      80,
      "b"
     ]
    ],
    "facts": [
     [
      "nextCount",
      "chair",
      1
     ],
     [
      "doorCount",
      null,
      2
     ],
     [
      "nextCount",
      "barrel",
      1
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 3,
    "lawful": [
     0,
     5
    ]
   },
   {
    "size": 10,
    "rooms": "0011122222001112222200111222220011122222334455666633445566663344556666334455777733445577773344557777",
    "objects": "...................c........fe....b..c..ef....a......e..a........d....aefa.a.c...c..d...ae..f.....a.",
    "roomNames": [
     "Telegraph Office",
     "Corral",
     "Jail",
     "Mine",
     "Barber",
     "Livery",
     "Bank",
     "Saloon"
    ],
    "people": [
     "Alma the auctioneer",
     "Basil the banker",
     "Vivian the vaquero",
     "Cora the cattle driver",
     "Daisy the dancer",
     "Edgar the editor",
     "Flora the farrier",
     "Gideon the gambler",
     "Hilda the homesteader",
     "Ines the innkeeper"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      1,
      "same",
      3
     ],
     [
      2,
      "next",
      "bed"
     ],
     [
      3,
      "next",
      "piano"
     ],
     [
      4,
      "bandit"
     ],
     [
      5,
      "row",
      5
     ],
     [
      5,
      "alone"
     ],
     [
      6,
      "next",
      "chair"
     ],
     [
      7,
      "next",
      "chair"
     ],
     [
      7,
      "same",
      8
     ],
     [
      8,
      "next",
      "barrel"
     ],
     [
      8,
      "row",
      8
     ],
     [
      9,
      "next",
      "barrel"
     ]
    ],
    "solution": [
     3,
     16,
     24,
     39,
     45,
     52,
     60,
     78,
     87,
     91
    ],
    "doors": [
     [
      21,
      22
     ],
     [
      31,
      41
     ],
     [
      24,
      25
     ],
     [
      32,
      42
     ],
     [
      34,
      44
     ],
     [
      35,
      45
     ],
     [
      36,
      46
     ],
     [
      61,
      62
     ],
     [
      73,
      74
     ],
     [
      55,
      56
     ],
     [
      95,
      96
     ],
     [
      69,
      79
     ]
    ],
    "windows": [
     [
      4,
      "t"
     ],
     [
      6,
      "t"
     ],
     [
      10,
      "l"
     ],
     [
      91,
      "b"
     ],
     [
      92,
      "b"
     ],
     [
      99,
      "r"
     ]
    ],
    "facts": [
     [
      "onCount",
      "chair",
      0
     ],
     [
      "roomCount",
      7,
      2
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 3,
    "lawful": [
     4,
     7
    ]
   },
   {
    "size": 11,
    "rooms": "0000011222200000112222000001122220000011222233333444444333334444443333344444455556667777555566677775555666777755556667777",
    "objects": "..c.aaeafbb.dd.......d..dc.baad.....b....e............c....b..b.e.......c...b.a.ecba.........ca........dd..bd..e.f.dc...d",
    "roomNames": [
     "Sheriff Office",
     "Church",
     "Livery",
     "Hotel",
     "Jail",
     "Bank",
     "Barber",
     "Corral"
    ],
    "people": [
     "Astrid the attorney",
     "Bella the banker",
     "Celia the cattle driver",
     "Dexter the dancer",
     "Elias the engineer",
     "Victor the vet",
     "Felix the farmer",
     "Gus the gambler",
     "Henrik the homesteader",
     "Ivo the inventor",
     "Jasper the jailer"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "next",
      "chair"
     ],
     [
      0,
      "same",
      1
     ],
     [
      1,
      "bandit"
     ],
     [
      2,
      "on",
      "bed"
     ],
     [
      2,
      "next",
      "chair"
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "door"
     ],
     [
      3,
      "withBandit"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "next",
      "bed"
     ],
     [
      6,
      "on",
      "bed"
     ],
     [
      7,
      "next",
      "piano"
     ],
     [
      8,
      "next",
      "cactus"
     ],
     [
      9,
      "next",
      "cactus"
     ],
     [
      10,
      "same",
      8
     ],
     [
      10,
      "door"
     ]
    ],
    "solution": [
     3,
     11,
     27,
     37,
     45,
     63,
     76,
     79,
     97,
     105,
     117
    ],
    "doors": [
     [
      37,
      38
     ],
     [
      34,
      45
     ],
     [
      17,
      18
     ],
     [
      39,
      50
     ],
     [
      42,
      53
     ],
     [
      59,
      60
     ],
     [
      67,
      78
     ],
     [
      70,
      81
     ],
     [
      72,
      83
     ],
     [
      75,
      86
     ],
     [
      91,
      92
     ],
     [
      116,
      117
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      8,
      "t"
     ],
     [
      43,
      "r"
     ],
     [
      110,
      "l"
     ],
     [
      112,
      "b"
     ],
     [
      114,
      "b"
     ],
     [
      115,
      "b"
     ]
    ],
    "facts": [
     [
      "nextCount",
      "chair",
      4
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 3,
    "lawful": [
     5,
     6
    ]
   },
   {
    "size": 12,
    "rooms": "000011111222000011111222000011111222000011111222000011111222333344444566333344444566333344444566777788855566777788855566777788855566777788855566",
    "objects": "de..d.e.fa.......fa.f..d.d.f.....a.e...e......c..aa..c...fed.e.b...fb..a.........a...e..cefa.f..c......e...d...c.d..ba..e.....b..a.e..a....f.b..",
    "roomNames": [
     "Bank",
     "Livery",
     "Barber",
     "General Store",
     "Mine",
     "Jail",
     "Church",
     "Telegraph Office",
     "Hotel"
    ],
    "people": [
     "Astrid the attorney",
     "Bella the banker",
     "Carl the cattle driver",
     "Vivian the vaquero",
     "Daisy the dancer",
     "Edith the editor",
     "Frank the farmer",
     "Gideon the gambler",
     "Henrik the homesteader",
     "Ivy the innkeeper",
     "Juno the jailer",
     "Kitty the knife thrower"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "next",
      "piano"
     ],
     [
      1,
      "on",
      "chair"
     ],
     [
      1,
      "next",
      "horse"
     ],
     [
      2,
      "next",
      "horse"
     ],
     [
      4,
      "next",
      "piano"
     ],
     [
      4,
      "next",
      "chair"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "bandit"
     ],
     [
      6,
      "next",
      "chair"
     ],
     [
      7,
      "next",
      "chair"
     ],
     [
      7,
      "door"
     ],
     [
      7,
      "withBandit"
     ],
     [
      8,
      "same",
      11
     ],
     [
      8,
      "bandit"
     ],
     [
      9,
      "row",
      9
     ],
     [
      10,
      "next",
      "bed"
     ],
     [
      11,
      "next",
      "chair"
     ]
    ],
    "solution": [
     7,
     18,
     29,
     36,
     51,
     64,
     83,
     92,
     98,
     118,
     129,
     133
    ],
    "doors": [
     [
      51,
      52
     ],
     [
      50,
      62
     ],
     [
      32,
      33
     ],
     [
      55,
      67
     ],
     [
      57,
      69
     ],
     [
      59,
      71
     ],
     [
      87,
      88
     ],
     [
      85,
      97
     ],
     [
      92,
      104
     ],
     [
      90,
      102
     ],
     [
      93,
      94
     ],
     [
      126,
      127
     ],
     [
      111,
      112
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      4,
      "t"
     ],
     [
      11,
      "t"
     ],
     [
      11,
      "r"
     ],
     [
      23,
      "r"
     ],
     [
      60,
      "l"
     ],
     [
      119,
      "r"
     ]
    ],
    "facts": [
     [
      "roomCount",
      6,
      2
     ],
     [
      "nextCount",
      "cactus",
      0
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 3,
    "lawful": [
     1,
     6
    ]
   }
  ]
 },
 {
  "theme": "reef",
  "levels": [
   {
    "size": 4,
    "rooms": "0000000011221122",
    "objects": ".........d.d.b.a",
    "roomNames": [
     "Open Sea",
     "Sea Cave",
     "Dock"
    ],
    "people": [
     "Astrid the armorer",
     "Birgit the boatswain",
     "Vivian the vintner",
     "Cora the cook"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      1,
      "col",
      0
     ],
     [
      3,
      "on",
      "stool"
     ]
    ],
    "solution": [
     1,
     4,
     10,
     15
    ],
    "doors": [
     [
      9,
      10
     ]
    ],
    "windows": [
     [
      11,
      "r"
     ],
     [
      13,
      "b"
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 0
   },
   {
    "size": 5,
    "rooms": "0011100222002220033300333",
    "objects": "....a...a...b..........be",
    "roomNames": [
     "Open Sea",
     "Sloop",
     "Tavern",
     "Longboat"
    ],
    "people": [
     "Albert the admiral",
     "Victor the voyager",
     "Bruno the boatswain",
     "Cora the cook",
     "Dora the deckhand"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "col",
      0
     ],
     [
      4,
      "next",
      "hammock"
     ]
    ],
    "solution": [
     1,
     8,
     14,
     15,
     22
    ],
    "doors": [
     [
      2,
      7
     ],
     [
      14,
      19
     ]
    ],
    "windows": [
     [
      23,
      "b"
     ],
     [
      24,
      "b"
     ],
     [
      24,
      "r"
     ]
    ],
    "facts": [
     [
      "onCount",
      "stool",
      1
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 0
   },
   {
    "size": 6,
    "rooms": "000111000111222333222333333333333333",
    "objects": "..d.....b.b.........................",
    "roomNames": [
     "Sloop",
     "Longboat",
     "Cove",
     "Open Sea"
    ],
    "people": [
     "Victor the vintner",
     "Ada the armorer",
     "Basil the barkeep",
     "Carl the cook",
     "Della the diver",
     "Edgar the engineer"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "col",
      3
     ],
     [
      1,
      "on",
      "hammock"
     ],
     [
      2,
      "window"
     ],
     [
      2,
      "row",
      2
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "row",
      4
     ],
     [
      5,
      "col",
      1
     ],
     [
      5,
      "alone"
     ]
    ],
    "solution": [
     3,
     10,
     12,
     23,
     26,
     31
    ],
    "doors": [
     [
      8,
      9
     ],
     [
      8,
      14
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      4,
      "t"
     ],
     [
      12,
      "l"
     ],
     [
      18,
      "l"
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 3
   },
   {
    "size": 7,
    "rooms": "0001111000111100011112221111222111133344443334444",
    "objects": "..a.....a............b.b............a..b...bcf.e.",
    "roomNames": [
     "Cove",
     "Open Sea",
     "Sloop",
     "Tavern",
     "Dock"
    ],
    "people": [
     "Vince the vintner",
     "Albert the armorer",
     "Birgit the barkeep",
     "Cora the captain",
     "Della the deckhand",
     "Elsa the engineer",
     "Freya the first mate"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "col",
      1
     ],
     [
      1,
      "next",
      "stool"
     ],
     [
      2,
      "row",
      2
     ],
     [
      3,
      "col",
      0
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "col",
      6
     ],
     [
      6,
      "next",
      "map"
     ]
    ],
    "solution": [
     1,
     9,
     19,
     21,
     31,
     41,
     46
    ],
    "doors": [
     [
      16,
      23
     ],
     [
      29,
      36
     ],
     [
      44,
      45
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      2,
      "t"
     ],
     [
      43,
      "b"
     ],
     [
      45,
      "b"
     ]
    ],
    "facts": [
     [
      "emptyRooms",
      null,
      1
     ],
     [
      "corner",
      null,
      3
     ],
     [
      "nextCount",
      "map",
      1
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 1
   },
   {
    "size": 8,
    "rooms": "0000011100000111222222223344444433444444334444445555544455555444",
    "objects": "ffc.........a..f.d.c.b...b......cf......ba........ddc...........",
    "roomNames": [
     "Sea Cave",
     "Cove",
     "Dock",
     "Galleon",
     "Open Sea",
     "Brig"
    ],
    "people": [
     "Arthur the armorer",
     "Vivian the vintner",
     "Birgit the barkeep",
     "Carl the captain",
     "Daisy the diver",
     "Edith the explorer",
     "Freya the fiddler",
     "Gus the gunner"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "window"
     ],
     [
      2,
      "next",
      "crate"
     ],
     [
      3,
      "next",
      "cannon"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "row",
      4
     ],
     [
      5,
      "col",
      2
     ],
     [
      6,
      "alone"
     ],
     [
      7,
      "next",
      "anchor"
     ]
    ],
    "solution": [
     6,
     13,
     16,
     25,
     35,
     42,
     55,
     60
    ],
    "doors": [
     [
      4,
      5
     ],
     [
      10,
      18
     ],
     [
      13,
      21
     ],
     [
      17,
      25
     ],
     [
      40,
      48
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      6,
      "t"
     ],
     [
      8,
      "l"
     ],
     [
      59,
      "b"
     ],
     [
      60,
      "b"
     ]
    ],
    "facts": [
     [
      "roomCount",
      1,
      2
     ],
     [
      "nextCount",
      "crate",
      1
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 4
   },
   {
    "size": 9,
    "rooms": "001122233001122233001122233001122233000004444000004444000000000555550000555550000",
    "objects": ".....f........aa.....f.e..c......ad.......b.f........f.........cad........c.a....",
    "roomNames": [
     "Open Sea",
     "Galleon",
     "Lighthouse",
     "Cove",
     "Sloop",
     "Dock"
    ],
    "people": [
     "Victor the vintner",
     "Albert the armorer",
     "Birgit the boatswain",
     "Celia the cook",
     "Dora the diver",
     "Edgar the explorer",
     "Fiona the fiddler",
     "Gideon the gunner",
     "Hugo the harpooner"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "col",
      3
     ],
     [
      1,
      "on",
      "stool"
     ],
     [
      2,
      "col",
      1
     ],
     [
      3,
      "row",
      3
     ],
     [
      4,
      "row",
      4
     ],
     [
      4,
      "col",
      0
     ],
     [
      5,
      "alone"
     ],
     [
      6,
      "row",
      6
     ],
     [
      6,
      "col",
      8
     ],
     [
      7,
      "row",
      7
     ],
     [
      8,
      "col",
      5
     ]
    ],
    "solution": [
     3,
     15,
     19,
     29,
     36,
     49,
     62,
     70,
     77
    ],
    "doors": [
     [
      30,
      31
     ],
     [
      6,
      7
     ],
     [
      32,
      41
     ],
     [
      34,
      43
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      4,
      "t"
     ],
     [
      17,
      "r"
     ],
     [
      72,
      "l"
     ],
     [
      75,
      "b"
     ]
    ],
    "facts": [
     [
      "emptyRooms",
      null,
      3
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 0
   },
   {
    "size": 10,
    "rooms": "0011122233001112223300111222330011122233111114444411111444441111144444111111555511111155556666666666",
    "objects": ".a...da..................d..a......d..d......e.d.......ac...........f.........a...........f....af.f.",
    "roomNames": [
     "Longboat",
     "Open Sea",
     "Sea Cave",
     "Galleon",
     "Lighthouse",
     "Tavern",
     "Sloop"
    ],
    "people": [
     "Albert the admiral",
     "Birgit the barkeep",
     "Cedric the captain",
     "Victor the voyager",
     "Dmitri the diver",
     "Elsa the engineer",
     "Fiona the fiddler",
     "Greta the gunner",
     "Hazel the harpooner",
     "Igor the islander"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "room",
      3
     ],
     [
      1,
      "next",
      "stool"
     ],
     [
      2,
      "row",
      2
     ],
     [
      3,
      "window"
     ],
     [
      4,
      "row",
      4
     ],
     [
      4,
      "col",
      3
     ],
     [
      5,
      "next",
      "anchor"
     ],
     [
      6,
      "same",
      5
     ],
     [
      6,
      "next",
      "cannon"
     ],
     [
      7,
      "notRoom",
      1
     ],
     [
      7,
      "row",
      7
     ],
     [
      8,
      "col",
      4
     ],
     [
      9,
      "col",
      7
     ]
    ],
    "solution": [
     8,
     11,
     22,
     30,
     43,
     55,
     69,
     76,
     84,
     97
    ],
    "doors": [
     [
      17,
      18
     ],
     [
      36,
      46
     ],
     [
      39,
      49
     ],
     [
      68,
      78
     ],
     [
      89,
      99
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      19,
      "r"
     ],
     [
      30,
      "l"
     ],
     [
      39,
      "r"
     ],
     [
      90,
      "b"
     ],
     [
      95,
      "b"
     ]
    ],
    "facts": [
     [
      "alone",
      null,
      6
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 1
   },
   {
    "size": 11,
    "rooms": "0001111222200011112222000111122222222222222222222222222222222222222222222222233344445555333444455553334444555533344445555",
    "objects": "..a.f.e.....aae.........a.........................................................b..bd.a.d..c.e.....bceb.bd......f......",
    "roomNames": [
     "Tavern",
     "Fort",
     "Open Sea",
     "Cove",
     "Sloop",
     "Frigate"
    ],
    "people": [
     "Ada the admiral",
     "Bella the boatswain",
     "Clara the captain",
     "Della the deckhand",
     "Edith the engineer",
     "Frank the fiddler",
     "Grace the gunner",
     "Hana the harbor pilot",
     "Victor the voyager",
     "Ines the island guide",
     "Jonas the jeweller"
    ],
    "victim": 8,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      0,
      "col",
      8
     ],
     [
      1,
      "next",
      "map"
     ],
     [
      2,
      "col",
      7
     ],
     [
      3,
      "row",
      3
     ],
     [
      3,
      "col",
      9
     ],
     [
      4,
      "row",
      4
     ],
     [
      4,
      "col",
      5
     ],
     [
      5,
      "row",
      5
     ],
     [
      5,
      "col",
      2
     ],
     [
      6,
      "notRoom",
      0
     ],
     [
      7,
      "next",
      "crate"
     ],
     [
      8,
      "next",
      "map"
     ],
     [
      9,
      "room",
      3
     ],
     [
      9,
      "next",
      "stool"
     ],
     [
      10,
      "door"
     ]
    ],
    "solution": [
     8,
     17,
     29,
     42,
     49,
     57,
     67,
     87,
     92,
     99,
     113
    ],
    "doors": [
     [
      2,
      3
     ],
     [
      112,
      113
     ],
     [
      83,
      84
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      5,
      "t"
     ],
     [
      11,
      "l"
     ],
     [
      77,
      "l"
     ],
     [
      111,
      "b"
     ],
     [
      115,
      "b"
     ],
     [
      119,
      "b"
     ]
    ],
    "facts": [
     [
      "alone",
      null,
      9
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 2
   },
   {
    "size": 12,
    "rooms": "000000111222000000111222000000111222000000111222000033333333000033333333000000000000444555666000444555666000444555666000444555666000444555666000",
    "objects": ".........d.a......b.b..f.....................a.......e..e............a...................e..c....d.b..d.e.......c.............f.b.....aa..d.a...",
    "roomNames": [
     "Open Sea",
     "Longboat",
     "Dock",
     "Lighthouse",
     "Fort",
     "Sea Cave",
     "Galleon"
    ],
    "people": [
     "Arthur the armorer",
     "Bella the barkeep",
     "Cora the cook",
     "Dexter the deckhand",
     "Elsa the explorer",
     "Felix the fiddler",
     "Gwen the gold digger",
     "Henrik the harpooner",
     "Ivo the island guide",
     "Jonas the jailbird",
     "Kai the knot maker",
     "Vince the voyager"
    ],
    "victim": 11,
    "clues": [
     [
      0,
      "notRoom",
      2
     ],
     [
      0,
      "row",
      0
     ],
     [
      1,
      "col",
      3
     ],
     [
      2,
      "room",
      0
     ],
     [
      2,
      "row",
      2
     ],
     [
      3,
      "row",
      3
     ],
     [
      3,
      "col",
      2
     ],
     [
      4,
      "same",
      5
     ],
     [
      5,
      "on",
      "stool"
     ],
     [
      6,
      "row",
      6
     ],
     [
      6,
      "col",
      1
     ],
     [
      7,
      "room",
      4
     ],
     [
      8,
      "next",
      "map"
     ],
     [
      8,
      "row",
      8
     ],
     [
      9,
      "next",
      "crate"
     ],
     [
      9,
      "next",
      "cannon"
     ],
     [
      10,
      "row",
      10
     ],
     [
      11,
      "next",
      "hammock"
     ]
    ],
    "solution": [
     7,
     15,
     28,
     38,
     59,
     69,
     73,
     84,
     101,
     114,
     130,
     140
    ],
    "doors": [
     [
      20,
      21
     ],
     [
      44,
      56
     ],
     [
      45,
      57
     ],
     [
      134,
      135
     ],
     [
      89,
      90
     ]
    ],
    "windows": [
     [
      11,
      "r"
     ],
     [
      23,
      "r"
     ],
     [
      96,
      "l"
     ],
     [
      132,
      "l"
     ],
     [
      133,
      "b"
     ],
     [
      136,
      "b"
     ],
     [
      137,
      "b"
     ]
    ],
    "facts": [
     [
      "touch",
      null,
      0
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 0
   }
  ]
 },
 {
  "theme": "rift",
  "levels": [
   {
    "size": 4,
    "rooms": "0011001122222222",
    "objects": "bae.............",
    "roomNames": [
     "Cave",
     "Hide Tent",
     "Captain Cabin"
    ],
    "people": [
     "Arthur the archivist",
     "Basil the bard",
     "Clara the chronicler",
     "Victor the visionary"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "next",
      "boulder"
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "door"
     ]
    ],
    "solution": [
     3,
     6,
     8,
     13
    ],
    "doors": [
     [
      5,
      6
     ],
     [
      4,
      8
     ],
     [
      6,
      10
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      4,
      "l"
     ]
    ],
    "rules": [
     "ranks",
     "glyphs"
    ],
    "court": [
     2
    ],
    "rank": "ccnk",
    "tags": "...C..C...C....."
   },
   {
    "size": 5,
    "rooms": "0000000000111223332233322",
    "objects": ".............c.......c...",
    "roomNames": [
     "Sea of Ages",
     "Fort",
     "Bank",
     "Jail"
    ],
    "people": [
     "Ada the archivist",
     "Bruno the bookbinder",
     "Cora the chronicler",
     "Daisy the dreamer",
     "Vivian the visionary"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      0,
      "col",
      2
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "notRoom",
      2
     ],
     [
      4,
      "window"
     ]
    ],
    "solution": [
     2,
     8,
     14,
     16,
     20
    ],
    "doors": [
     [
      12,
      13
     ],
     [
      10,
      15
     ],
     [
      17,
      18
     ]
    ],
    "windows": [
     [
      14,
      "r"
     ],
     [
      20,
      "l"
     ],
     [
      23,
      "b"
     ]
    ],
    "facts": [
     [
      "roomCount",
      1,
      0
     ]
    ],
    "rules": [
     "trades",
     "sea"
    ],
    "trade": "..121",
    "tags": "..............1..2.......",
    "sea": 0
   },
   {
    "size": 6,
    "rooms": "000111000111000111223344223344223344",
    "objects": "e.....a.........eb......cf.ef.b..ef.",
    "roomNames": [
     "Great Hall",
     "Throne Room",
     "Saloon",
     "Burial Chamber",
     "Hide Tent"
    ],
    "people": [
     "Ada the astronomer",
     "Bea the bard",
     "Vera the voyager",
     "Carl the chronicler",
     "Dexter the drifter",
     "Edgar the engineer"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "row",
      2
     ],
     [
      3,
      "bandit"
     ],
     [
      4,
      "window"
     ],
     [
      5,
      "next",
      "statue"
     ]
    ],
    "solution": [
     3,
     8,
     13,
     22,
     29,
     30
    ],
    "doors": [
     [
      8,
      9
     ],
     [
      12,
      18
     ],
     [
      14,
      20
     ],
     [
      15,
      21
     ],
     [
      16,
      22
     ],
     [
      19,
      20
     ],
     [
      27,
      28
     ]
    ],
    "windows": [
     [
      0,
      "t"
     ],
     [
      4,
      "t"
     ],
     [
      18,
      "l"
     ],
     [
      29,
      "r"
     ]
    ],
    "facts": [
     [
      "roomCount",
      1,
      1
     ]
    ],
    "rules": [
     "bandits",
     "glyphs"
    ],
    "tags": "...........L.................C......",
    "bandits": 2,
    "lawful": [
     0
    ]
   },
   {
    "size": 7,
    "rooms": "0011222001122200112220033222443322244332224433222",
    "objects": ".....................d.a.....b........a..........",
    "roomNames": [
     "Bank",
     "Hide Tent",
     "Sea of Ages",
     "Fire Pit",
     "Captain Cabin"
    ],
    "people": [
     "Astrid the astronomer",
     "Viola the visionary",
     "Basil the bard",
     "Cedric the clockmaker",
     "Dmitri the dreamer",
     "Elsa the engineer",
     "Freya the fortune teller"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      1,
      "col",
      0
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "door"
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "col",
      6
     ],
     [
      5,
      "row",
      5
     ],
     [
      5,
      "alone"
     ],
     [
      6,
      "row",
      6
     ],
     [
      6,
      "col",
      4
     ]
    ],
    "solution": [
     1,
     7,
     17,
     23,
     34,
     40,
     46
    ],
    "doors": [
     [
      8,
      9
     ],
     [
      22,
      23
     ],
     [
      21,
      28
     ],
     [
      17,
      24
     ],
     [
      43,
      44
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      21,
      "l"
     ],
     [
      42,
      "l"
     ],
     [
      45,
      "b"
     ]
    ],
    "facts": [
     [
      "furniture",
      null,
      1
     ]
    ],
    "rules": [
     "ranks",
     "sea"
    ],
    "court": [
     1
    ],
    "rank": "cknkkck",
    "sea": 2
   },
   {
    "size": 8,
    "rooms": "0001111100011111000000002222333322223333222244445555444455554444",
    "objects": "..e.dc..b.....ac.........ecd........b..c......b....c...b..e.b...",
    "roomNames": [
     "Fire Pit",
     "Great Hall",
     "Jail",
     "Burial Chamber",
     "Captain Cabin",
     "Hide Tent"
    ],
    "people": [
     "Albert the astronomer",
     "Basil the bookbinder",
     "Cora the clockmaker",
     "Vivian the visionary",
     "Dexter the dreamer",
     "Elsa the explorer",
     "Frank the falconer",
     "Gideon the guardian"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "withBandit"
     ],
     [
      1,
      "bandit"
     ],
     [
      2,
      "bandit"
     ],
     [
      3,
      "next",
      "boulder"
     ],
     [
      4,
      "next",
      "barrel"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "next",
      "log"
     ],
     [
      5,
      "window"
     ],
     [
      6,
      "next",
      "statue"
     ],
     [
      7,
      "window"
     ]
    ],
    "solution": [
     6,
     13,
     20,
     24,
     35,
     47,
     50,
     57
    ],
    "doors": [
     [
      15,
      23
     ],
     [
      18,
      26
     ],
     [
      23,
      31
     ],
     [
      35,
      36
     ],
     [
      43,
      44
     ],
     [
      41,
      49
     ],
     [
      37,
      45
     ],
     [
      51,
      52
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      1,
      "t"
     ],
     [
      39,
      "r"
     ],
     [
      47,
      "r"
     ],
     [
      57,
      "b"
     ]
    ],
    "facts": [
     [
      "roomCount",
      1,
      2
     ]
    ],
    "rules": [
     "trades",
     "bandits"
    ],
    "trade": "0.44....",
    "tags": "......0.....3.......4.0.4.......................................",
    "bandits": 2,
    "lawful": [
     4
    ]
   },
   {
    "size": 9,
    "rooms": "000011122000011122333311122333311122444445555444445555444445555444444444444444444",
    "objects": ".....bfa.cb......c....e.a....b..............................f....................",
    "roomNames": [
     "Burial Chamber",
     "Great Hall",
     "Fire Pit",
     "Throne Room",
     "Sea of Ages",
     "Hide Tent"
    ],
    "people": [
     "Albert the astronomer",
     "Birgit the bard",
     "Vince the visionary",
     "Cora the clockmaker",
     "Della the dreamer",
     "Elsa the explorer",
     "Frank the fortune teller",
     "Gideon the guardian",
     "Hilda the historian"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "window"
     ],
     [
      1,
      "next",
      "boulder"
     ],
     [
      3,
      "next",
      "log"
     ],
     [
      3,
      "col",
      3
     ],
     [
      4,
      "same",
      5
     ],
     [
      5,
      "next",
      "clock"
     ],
     [
      6,
      "col",
      2
     ],
     [
      7,
      "row",
      7
     ],
     [
      7,
      "col",
      7
     ],
     [
      8,
      "alone"
     ]
    ],
    "solution": [
     0,
     13,
     19,
     30,
     41,
     51,
     56,
     70,
     80
    ],
    "doors": [
     [
      12,
      13
     ],
     [
      11,
      20
     ],
     [
      33,
      34
     ],
     [
      21,
      22
     ],
     [
      33,
      42
     ],
     [
      35,
      44
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      3,
      "t"
     ],
     [
      8,
      "r"
     ],
     [
      9,
      "l"
     ],
     [
      44,
      "r"
     ]
    ],
    "facts": [
     [
      "corner",
      null,
      4
     ],
     [
      "roomCount",
      0,
      1
     ]
    ],
    "rules": [
     "glyphs",
     "sea"
    ],
    "tags": "...................CC.........C..........C.........C.......L.....................",
    "sea": 4
   },
   {
    "size": 10,
    "rooms": "0000011111000001111100000111112222233333222223333322222333334444445555444444555566666677776666667777",
    "objects": ".c.....d..f.e...d.d.ab.bac...e....a.ce.b...a....b.....eaa..........f....eb.dcad....dd.b..b.b...f..b.",
    "roomNames": [
     "Captain Cabin",
     "Burial Chamber",
     "Saloon",
     "Throne Room",
     "Hide Tent",
     "Shrine",
     "Jail",
     "Great Hall"
    ],
    "people": [
     "Alma the archivist",
     "Bruno the bookbinder",
     "Cedric the clockmaker",
     "Della the drifter",
     "Edith the engineer",
     "Felix the falconer",
     "Gideon the guardian",
     "Victor the voyager",
     "Hilda the herald",
     "Igor the inventor"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "same",
      1
     ],
     [
      1,
      "next",
      "barrel"
     ],
     [
      2,
      "next",
      "log"
     ],
     [
      3,
      "next",
      "statue"
     ],
     [
      4,
      "next",
      "chair"
     ],
     [
      5,
      "same",
      3
     ],
     [
      6,
      "door"
     ],
     [
      7,
      "next",
      "boulder"
     ],
     [
      8,
      "door"
     ],
     [
      9,
      "window"
     ]
    ],
    "solution": [
     9,
     17,
     20,
     35,
     42,
     56,
     64,
     73,
     81,
     98
    ],
    "doors": [
     [
      14,
      15
     ],
     [
      22,
      32
     ],
     [
      27,
      37
     ],
     [
      44,
      45
     ],
     [
      54,
      64
     ],
     [
      55,
      65
     ],
     [
      59,
      69
     ],
     [
      65,
      66
     ],
     [
      71,
      81
     ],
     [
      78,
      88
     ],
     [
      95,
      96
     ]
    ],
    "windows": [
     [
      0,
      "t"
     ],
     [
      3,
      "t"
     ],
     [
      39,
      "r"
     ],
     [
      95,
      "b"
     ],
     [
      97,
      "b"
     ],
     [
      98,
      "b"
     ]
    ],
    "facts": [
     [
      "roomCount",
      0,
      1
     ],
     [
      "roomCount",
      7,
      1
     ],
     [
      "onCount",
      "log",
      2
     ]
    ],
    "rules": [
     "ranks",
     "trades"
    ],
    "court": [
     1,
     4
    ],
    "rank": "knccccnkcc",
    "trade": ".0.0..0132",
    "tags": "....413.......................31...0....3...3..................1.......0.........3.....2............"
   },
   {
    "size": 11,
    "rooms": "0000000000000000000000000000011110000000111100000001111222223333442222233334422222333344555553333445555566666655555666666",
    "objects": "..............................a.f..........a........ffc.b.bf..ddb..d.b...........d.....f.........a.b.....ffa....bf......c",
    "roomNames": [
     "Sea of Ages",
     "Fort",
     "Hide Tent",
     "Fire Pit",
     "Cave",
     "Shrine",
     "Bank"
    ],
    "people": [
     "Alma the archivist",
     "Bella the bard",
     "Cora the clockmaker",
     "Dmitri the drifter",
     "Edgar the explorer",
     "Flora the fortune teller",
     "Gus the gladiator",
     "Vera the voyager",
     "Hana the historian",
     "Ivo the illusionist",
     "Jutta the jester"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      0,
      "col",
      3
     ],
     [
      1,
      "col",
      7
     ],
     [
      2,
      "next",
      "chair"
     ],
     [
      2,
      "bandit"
     ],
     [
      3,
      "on",
      "chair"
     ],
     [
      4,
      "col",
      0
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "next",
      "barrel"
     ],
     [
      6,
      "next",
      "log"
     ],
     [
      8,
      "same",
      9
     ],
     [
      9,
      "col",
      4
     ],
     [
      10,
      "next",
      "chair"
     ]
    ],
    "solution": [
     3,
     18,
     31,
     43,
     44,
     60,
     68,
     83,
     89,
     103,
     118
    ],
    "doors": [
     [
      51,
      62
     ],
     [
      53,
      64
     ],
     [
      59,
      60
     ],
     [
      77,
      88
     ],
     [
      85,
      86
     ],
     [
      92,
      93
     ],
     [
      95,
      106
     ],
     [
      98,
      109
     ],
     [
      114,
      115
     ]
    ],
    "windows": [
     [
      66,
      "l"
     ],
     [
      109,
      "r"
     ],
     [
      110,
      "b"
     ],
     [
      111,
      "b"
     ],
     [
      113,
      "b"
     ],
     [
      120,
      "b"
     ],
     [
      120,
      "r"
     ]
    ],
    "facts": [
     [
      "roomCount",
      1,
      2
     ],
     [
      "corner",
      null,
      2
     ]
    ],
    "rules": [
     "bandits",
     "sea"
    ],
    "sea": 0,
    "bandits": 3,
    "lawful": [
     3,
     6
    ]
   },
   {
    "size": 12,
    "rooms": "000001112222000001112222000001112222000001112222334445556666334445556666334445556666334445556666334445556666333377778888333377778888333377778888",
    "objects": "..............f..aa.ea..a..e.d.e.b.....b.a..a...f.cfcea.a....f...b..e......d.e..............e..b.c.d...f..f.bb.a....c..c.......ea.........e...cb",
    "roomNames": [
     "Burial Chamber",
     "Fire Pit",
     "Cave",
     "Hide Tent",
     "Throne Room",
     "Saloon",
     "Shrine",
     "Fort",
     "Jail"
    ],
    "people": [
     "Alma the astronomer",
     "Basil the bookbinder",
     "Carl the clockmaker",
     "Dora the drifter",
     "Viola the visionary",
     "Edith the explorer",
     "Felix the fortune teller",
     "Greta the guardian",
     "Hazel the herald",
     "Ines the inventor",
     "Juno the jester",
     "Kira the keeper"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "window"
     ],
     [
      1,
      "same",
      2
     ],
     [
      2,
      "next",
      "log"
     ],
     [
      3,
      "next",
      "log"
     ],
     [
      5,
      "next",
      "statue"
     ],
     [
      6,
      "next",
      "boulder"
     ],
     [
      7,
      "next",
      "statue"
     ],
     [
      8,
      "next",
      "boulder"
     ],
     [
      8,
      "alone"
     ],
     [
      9,
      "on",
      "chair"
     ],
     [
      10,
      "alone"
     ],
     [
      11,
      "on",
      "log"
     ]
    ],
    "solution": [
     0,
     21,
     34,
     40,
     55,
     62,
     78,
     85,
     104,
     111,
     125,
     143
    ],
    "doors": [
     [
      40,
      41
     ],
     [
      36,
      48
     ],
     [
      38,
      50
     ],
     [
      31,
      32
     ],
     [
      43,
      55
     ],
     [
      46,
      58
     ],
     [
      61,
      62
     ],
     [
      135,
      136
     ],
     [
      76,
      77
     ],
     [
      100,
      112
     ],
     [
      79,
      80
     ],
     [
      102,
      114
     ],
     [
      104,
      116
     ],
     [
      115,
      116
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      9,
      "t"
     ],
     [
      11,
      "t"
     ],
     [
      11,
      "r"
     ],
     [
      23,
      "r"
     ],
     [
      59,
      "r"
     ],
     [
      138,
      "b"
     ]
    ],
    "facts": [
     [
      "roomCount",
      2,
      2
     ]
    ],
    "rules": [
     "ranks",
     "glyphs",
     "trades"
    ],
    "court": [
     0,
     3,
     4
    ],
    "rank": "nccncnckcncc",
    "trade": "1.0..4.....3",
    "tags": "10.......4.0.......L..............0.......1............C......4.C.........2...CL....C...0........................L...0L.0.............2.1..1...."
   }
  ]
 }
];

// ---- js/themes.js ----
// Campaign themes. Each theme has 12 rooms, its roles and its own objects.
// People are alliterations: "Name the role", both with the same first letter.
// Suspects get the letters A, B, C, … in order; the victim is always V.
// "spot" objects can be stood or sat on. Others block the cell.
// A theme may add special rules (see js/rules.js):
//   rules  the same rules for every case
//   mix    one list of rules per case instead
// floors: floor patterns for the rooms, used in turn (see css/style.css).

// Icons and names for the special rules. Shared by all themes.
const RANKS = {
  noble: { icon: '⚜️', name: 'Noble' },
  knight: { icon: '🛡️', name: 'Knight' },
  commoner: { icon: '🌾', name: 'Commoner' },
};
const COURT = { icon: '👑', name: 'court room' };
const GLYPHS = {
  lone: { icon: '🌙', name: 'moon seal' },
  crowd: { icon: '☀️', name: 'sun seal' },
};
const TRADES = [
  { id: 'hunter', icon: '🏹', name: 'Hunter' },
  { id: 'fisher', icon: '🎣', name: 'Fisher' },
  { id: 'toolmaker', icon: '🪓', name: 'Toolmaker' },
  { id: 'gatherer', icon: '🫐', name: 'Gatherer' },
  { id: 'healer', icon: '🌿', name: 'Healer' },
];
const tradeById = id => TRADES.find(t => t.id === id);
const SEA = { icon: '🌊' };
const LAWFUL = { icon: '⭐', name: 'star room' };

const THEMES = [
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
const FIRST_NAMES = {
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
const SUSPECT_LETTERS = 'ABCDEFGHIJK';

// Names for a case: suspects A, B, C, … in order, the victim V.
// pick(list) chooses one item. Returns one name per person.
function castNames(theme, count, victim, pick) {
  let k = 0;
  return [...Array(count).keys()].map(p => {
    const L = p === victim ? 'V' : SUSPECT_LETTERS[k++];
    return `${pick(FIRST_NAMES[L])} the ${pick(theme.roles[L])}`;
  });
}

function themeById(id) {
  return THEMES.find(t => t.id === id);
}

function blockingSet(theme) {
  return new Set(Object.entries(theme.objects).filter(([, o]) => !o.spot).map(([id]) => id));
}

const COLS = 'ABCDEFGHIJKL';
const article = word => `${/^[aeiou]/i.test(word) ? 'an' : 'a'} ${word}`;
const colName = c => COLS[c];

// Clue as plain text.
function clueText(theme, level, clue) {
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

// A case fact as plain text.
function factText(theme, level, f) {
  const qty = (k, one, many) => (k === 0 ? `Nobody ${one}` : k === 1 ? `Only one person ${one}` : `Exactly ${k} people ${many}`);
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
    case 'emptyRooms': return f.k === 0 ? 'No room was empty.' : f.k === 1 ? 'Exactly one room was empty.' : `Exactly ${f.k} rooms were empty.`;
    case 'touch': return f.k === 0 ? 'No two people in one room touched at a corner.' : f.k === 1 ? 'Exactly one pair of people in one room touched at a corner.' : `Exactly ${f.k} pairs of people in one room touched at a corner.`;
    case 'task': {
      const t = tradeById(f.v);
      return f.k === 1 ? `There was exactly one ${t.name.toLowerCase()}.` : `There were exactly ${f.k} ${t.name.toLowerCase()}s.`;
    }
    case 'apart': return f.v === 'rank' ? 'No two people of the same rank were in the same room.' : 'No two people with the same trade were in the same room.';
  }
  return '';
}

// Rules a theme uses, over all its cases.
function themeRules(theme) {
  if (theme.mix) return [...new Set(theme.mix.flat())];
  return theme.rules || [];
}

// Short text for each special rule. `level` adds case details.
function ruleText(rule, level) {
  switch (rule) {
    case 'ranks': return `${COURT.icon} Ranks: ${RANKS.noble.icon} nobles stand in a court room. ` +
      `${RANKS.commoner.icon} Commoners never do. ${RANKS.knight.icon} Knights can be anywhere.`;
    case 'trades': return 'Trades: only a person with the matching trade may stand on a work spot ' +
      `(${TRADES.map(t => t.icon).join(' ')}). People with a trade may still stand anywhere else.`;
    case 'glyphs': return `Seals: on a ${GLYPHS.lone.icon} moon seal the person is alone in their room. ` +
      `On a ${GLYPHS.crowd.icon} sun seal they share their room with someone.`;
    case 'sea': return `${SEA.icon} Sea: the sea is not a room. Anyone in the sea is alone. Each ship is its own room.`;
    case 'tasks': {
      const list = level?.tasks?.map(([id, k]) => `${k} ${tradeById(id).icon} ${tradeById(id).name.toLowerCase()}${k === 1 ? '' : 's'}`);
      return `🧰 Tasks: ${list ? `there were ${list.join(', ')}. ` : ''}Tasks are hidden. Whoever stands on a task spot does that task. People without a task never stand on one.`;
    }
    case 'distance': return '↔️ Keep distance: no two people in one room touch, not even at a corner.';
    case 'fullhouse': return '🏠 Full house: every room holds at least one person. The sea does not count.';
    case 'couples': {
      const pairs = level?.couples?.map(([p, q]) => `${level.people[p].name} and ${level.people[q].name}`);
      return `💞 Couples: ${pairs ? `${pairs.join('; ')} stand` : 'each couple stands'} diagonally next to each other, in the same room.`;
    }
    case 'river': {
      const rv = level?.river;
      if (!rv) return '🏞️ River: a river winds across the board. The case tells you how many people stand on each side.';
      const [a, b] = rv.dir === 'v' ? ['west (left)', 'east (right)'] : ['north (above)', 'south (below)'];
      return `🏞️ River: ${rv.first} ${rv.first === 1 ? 'person stands' : 'people stand'} ${a} of the river, ${level.people.length - rv.first} ${b}.`;
    }
    case 'parity': return '⚖️ Even & odd: a room marked "even" holds an even number of people (0 counts as even). A room marked "odd" holds an odd number.';
    case 'bandits': {
      const k = level?.bandits;
      return `${LAWFUL.icon} Bandits: ${k ? `exactly ${k} ${k === 1 ? 'person was a bandit' : 'people were bandits'}` : 'some people were bandits'}. ` +
        'Nobody tells you who. No bandit was in a star room. The victim was not a bandit. The murderer may be one.';
    }
  }
  return '';
}

// ---- js/rules.js ----
// Game rules and solver. Shared by the browser and the level generator.
//
// A level:
//   size     board is size x size
//   rooms    room index per cell (array, row by row)
//   objects  object id per cell or null
//   people   [{ name, victim? }]
//   clues    [{ p, t, v }]  person index, clue type, value
//   solution cell index per person
//
// Special rules (optional, listed in level.rules):
//   ranks    court  room ids with a crown
//            rank   per person: 'noble', 'knight' or 'commoner'
//            Nobles stand in a court room. Commoners never do. Knights can go anywhere.
//   trades   trade  per person: trade id or null
//            tags   per cell: 't:<id>' marks a work spot
//            Only a person with that trade may stand on its work spot.
//   glyphs   tags   per cell: 'lone' or 'crowd'
//            Lone: the person here is alone in their room.
//            Crowd: the person here shares their room with someone.
//   sea      sea    room id of the sea
//            Each sea cell counts as its own room, so people in the sea are alone.
//   bandits  bandits  exact number of hidden bandits
//            lawful   room ids where no bandit stood
//            The victim was never a bandit.
//   distance No two people in one room touch, not even at a corner.
// "Next to" and "touch" always mean: in the same room.
//   fullhouse Every room (not the sea) holds at least one person.
//   couples  couples  pairs [p, q] that stand diagonally next to each other, in the same room
//   parity   parity   [[room, 'even' | 'odd'], ...] number of people in the room
//   river    river    { dir: 'v' | 'h', cut: [..], first }
//            A river winds along cell edges. dir 'v': in row r it runs left of
//            column cut[r]; the west side is columns < cut[r]. dir 'h': in column c
//            it runs above row cut[c]; the north side is rows < cut[c].
//            Exactly `first` people stand on the west (or north) side.
//   tasks    tasks  [[trade id, count], ...]   tags 'k:<id>' mark task spots
//            Tasks are hidden. Whoever stands on a task spot does that task.
//            Exactly `count` people stand on spots of each task.
//
// Case facts (optional, level.facts): statements about the whole case.
// Cell facts count people on certain cells:
//   { t: 'onCount', v: object, k }    exactly k people stood on that object
//   { t: 'nextCount', v: object, k }  exactly k people stood right next to one
//   { t: 'roomCount', v: room, k }    exactly k people were in that room
//   { t: 'furniture', k }             exactly k people stood on any object
//   { t: 'edge', k }                  exactly k people stood on the outer edge
//   { t: 'corner', k }                exactly k people stood in a room corner
// Board facts look at the whole placement:
//   { t: 'alone', k }                 exactly k people were alone in their room
//   { t: 'emptyRooms', k }            exactly k rooms (not the sea) were empty
//   { t: 'touch', k }                 exactly k pairs of people touch at a corner
//   { t: 'apart', v: 'rank' | 'trade' } no two people of one rank (or trade) share a room
//
// Doors and windows (level.doors, level.windows):
//   doors    [[i, j], ...]  a door in the wall between cells i and j (two rooms)
//   windows  [[i, side], ...] a window in the outer wall of edge cell i ('t','r','b','l')
//   A person is "in front of a door" on either cell of a door,
//   and "in front of a window" on the cell of a window.
//
// Core rules:
//   - One person per row and one per column.
//   - Nobody stands on a blocking object.
//   - Every clue is true.
//   - The murderer is the only person in the victim's room.

const CLUE_TYPES = ['room', 'notRoom', 'on', 'next', 'row', 'col', 'same', 'alone', 'door', 'window',
  'bandit', 'notBandit', 'withBandit', 'task', 'taskEither', 'noTask'];

const RULES = ['ranks', 'trades', 'tasks', 'glyphs', 'sea', 'bandits', 'distance', 'fullhouse', 'couples', 'parity', 'river'];

// Tasks rule as count facts: exactly `count` people on the spots of each task.
function taskFacts(level) {
  return hasRule(level, 'tasks') ? (level.tasks || []).map(([v, k]) => ({ t: 'task', v, k })) : [];
}
// Case facts plus the task counts. Both are checked the same way.
const allFacts = level => [...(level.facts || []), ...taskFacts(level)];

// River side per cell: 0 = west/north, 1 = east/south. Null without a river.
function riverSides(level) {
  const rv = level.river;
  if (!rv || !hasRule(level, 'river')) return null;
  const n = level.size;
  return [...Array(n * n).keys()].map(i => {
    const r = Math.floor(i / n), c = i % n;
    return rv.dir === 'v' ? (c < rv.cut[r] ? 0 : 1) : (r < rv.cut[c] ? 0 : 1);
  });
}

// True if a person on cell i is right next to object v: a cell above,
// below, left or right, in the same room. Walls block "next to".
// Someone on a v is never "next to a v" (that would be confusing).
function nextTo(level, i, v) {
  return level.objects[i] !== v && neighbors(i, level.size).some(j => level.objects[j] === v && level.rooms[j] === level.rooms[i]);
}

// True if cells i and j touch at a corner and share a room.
function touching(level, i, j) {
  const area = areasOf(level);
  return diagonal(i, j, level.size) && area[i] === area[j];
}

// True if cells i and j touch at a corner.
function diagonal(i, j, n) {
  return Math.abs(Math.floor(i / n) - Math.floor(j / n)) === 1 && Math.abs((i % n) - (j % n)) === 1;
}

// Partner of each person (couples rule), or -1.
function partners(level) {
  const out = level.people.map(() => -1);
  for (const [p, q] of level.couples || []) { out[p] = q; out[q] = p; }
  return out;
}

// Rooms that must hold people: all rooms but the sea.
function landRooms(level) {
  return [...new Set(level.rooms)].filter(k => k !== level.sea);
}

const CELL_FACTS = ['onCount', 'nextCount', 'roomCount', 'furniture', 'edge', 'corner', 'task', 'doorCount', 'windowCount'];

// Cells that count for a cell fact.
function factCells(level, f) {
  const n = level.size;
  const wall = (i, dr, dc) => {
    const r = Math.floor(i / n) + dr, c = (i % n) + dc;
    return r < 0 || c < 0 || r >= n || c >= n || level.rooms[r * n + c] !== level.rooms[i];
  };
  return level.rooms.map((k, i) => {
    switch (f.t) {
      case 'onCount': return level.objects[i] === f.v;
      case 'nextCount': return nextTo(level, i, f.v);
      case 'roomCount': return k === f.v;
      case 'furniture': return !!level.objects[i];
      case 'edge': return i < n || i >= n * (n - 1) || i % n === 0 || i % n === n - 1;
      case 'corner': return (wall(i, -1, 0) || wall(i, 1, 0)) && (wall(i, 0, -1) || wall(i, 0, 1));
      case 'task': return level.tags?.[i] === `k:${f.v}`;
      case 'doorCount': return featureCells(level).door.has(i);
      case 'windowCount': return featureCells(level).window.has(i);
    }
    return false;
  });
}

// The value of a fact for a full placement: a count, or true/false for 'apart'.
function factValue(level, f, pos) {
  const area = areasOf(level), n = level.size;
  if (CELL_FACTS.includes(f.t)) { const cells = factCells(level, f); return pos.filter(i => cells[i]).length; }
  if (f.t === 'alone') return pos.filter((i, p) => !pos.some((j, q) => q !== p && area[j] === area[i])).length;
  if (f.t === 'emptyRooms') return landRooms(level).filter(k => !pos.some(i => level.rooms[i] === k)).length;
  if (f.t === 'touch') {
    let c = 0;
    for (let p = 0; p < pos.length; p++) for (let q = p + 1; q < pos.length; q++) if (touching(level, pos[p], pos[q])) c++;
    return c;
  }
  if (f.t === 'apart') {
    return !pos.some((i, p) => { const g = groupOf(level, f, p); return g && pos.some((j, q) => q > p && groupOf(level, f, q) === g && area[j] === area[i]); });
  }
  return null;
}

const factHolds = (level, f, pos) => (f.t === 'apart' ? factValue(level, f, pos) : factValue(level, f, pos) === f.k);

// The group of person p for an 'apart' fact, or null.
function groupOf(level, f, p) {
  return f.v === 'rank' ? level.rank?.[p] ?? null : level.trade?.[p] ?? null;
}

// Problems with the rules that need a full board. Returns a list of texts.
function boardRuleProblems(level, pos, name = p => level.people[p].name, roomName = k => level.roomNames[k]) {
  const n = level.size, out = [];
  if (hasRule(level, 'distance')) {
    for (let p = 0; p < pos.length; p++) for (let q = p + 1; q < pos.length; q++) {
      if (pos[p] >= 0 && pos[q] >= 0 && touching(level, pos[p], pos[q])) out.push(`${name(p)} and ${name(q)} touch`);
    }
  }
  if (hasRule(level, 'couples')) {
    const area = areasOf(level);
    for (const [p, q] of level.couples) {
      if (!diagonal(pos[p], pos[q], n)) out.push(`${name(p)} and ${name(q)} are not diagonally next to each other`);
      else if (area[pos[p]] !== area[pos[q]]) out.push(`${name(p)} and ${name(q)} are not in the same room`);
    }
  }
  const count = k => pos.filter(i => level.rooms[i] === k).length;
  if (hasRule(level, 'fullhouse')) for (const k of landRooms(level)) if (!count(k)) out.push(`nobody is in the ${roomName(k)}`);
  if (hasRule(level, 'parity')) {
    for (const [k, kind] of level.parity) if ((count(k) % 2 === 0) !== (kind === 'even')) out.push(`the ${roomName(k)} does not hold an ${kind} number of people`);
  }
  for (const f of allFacts(level)) {
    if (factHolds(level, f, pos)) continue;
    out.push(f.t === 'apart' ? `two people with the same ${f.v} would share a room` : `a case fact would not hold (${factValue(level, f, pos)} instead of ${f.k})`);
  }
  const side = riverSides(level);
  if (side) {
    const first = pos.filter(i => side[i] === 0).length;
    if (first !== level.river.first) out.push(`${first} people would stand ${level.river.dir === 'v' ? 'west' : 'north'} of the river, not ${level.river.first}`);
  }
  return out;
}

const hasRule = (level, rule) => !!level.rules && level.rules.includes(rule);

// Cells next to cell i (up, down, left, right).
function neighbors(i, n) {
  const r = Math.floor(i / n), c = i % n, out = [];
  if (r > 0) out.push(i - n);
  if (r < n - 1) out.push(i + n);
  if (c > 0) out.push(i - 1);
  if (c < n - 1) out.push(i + 1);
  return out;
}

// Cells in front of a door and in front of a window.
const featureCache = new WeakMap();
function featureCells(level) {
  let f = featureCache.get(level);
  if (!f) {
    f = { door: new Set((level.doors || []).flat()), window: new Set((level.windows || []).map(([i]) => i)) };
    featureCache.set(level, f);
  }
  return f;
}

// Area id per cell. Areas are rooms, but each sea cell is its own area.
const areaCache = new WeakMap();
function areasOf(level) {
  let a = areaCache.get(level);
  if (!a || a.rooms !== level.rooms) {
    const R = Math.max(...level.rooms) + 1;
    a = level.rooms.map((k, i) => (k === level.sea ? R + i : k));
    a.rooms = level.rooms;
    areaCache.set(level, a);
  }
  return a;
}

// True if person p may stand on cell i, by the board and special rules.
function cellOk(level, blocking, p, i) {
  if (blocking.has(level.objects[i])) return false;
  const k = level.rooms[i];
  if (level.people[p].victim && k === level.sea) return false;
  if (hasRule(level, 'ranks')) {
    const court = level.court.includes(k);
    const rank = level.rank[p];
    if (rank === 'noble' && !court) return false;
    if (rank === 'commoner' && court) return false;
  }
  const tag = level.tags?.[i];
  if (tag && tag.startsWith('t:') && level.trade?.[p] !== tag.slice(2)) return false;
  return true;
}

// True if a single-person clue holds for a person on cell i.
function unaryOk(level, blocking, clue, i) {
  const n = level.size;
  switch (clue.t) {
    case 'room': return level.rooms[i] === clue.v;
    case 'notRoom': return level.rooms[i] !== clue.v;
    case 'on': return level.objects[i] === clue.v;
    case 'next': return nextTo(level, i, clue.v);
    case 'row': return Math.floor(i / n) === clue.v;
    case 'col': return i % n === clue.v;
    case 'bandit': return !(level.lawful || []).includes(level.rooms[i]);
    case 'door': return featureCells(level).door.has(i);
    case 'window': return featureCells(level).window.has(i);
    case 'task': return level.tags?.[i] === `k:${clue.v}`;
    case 'taskEither': return clue.v.some(id => level.tags?.[i] === `k:${id}`);
    case 'noTask': return !level.tags?.[i]?.startsWith('k:');
    default: return true;
  }
}

// Check one clue against a full or partial placement (pos[p] = cell or -1).
// Returns true, false, or null (not decided yet, or hidden).
function clueState(level, blocking, clue, pos) {
  const i = pos[clue.p];
  if (i < 0) return null;
  const area = areasOf(level);
  if (clue.t === 'same') {
    const j = pos[clue.v];
    if (j < 0) return null;
    return area[i] === area[j];
  }
  if (clue.t === 'alone') {
    const others = pos.filter((j, q) => q !== clue.p && j >= 0 && area[j] === area[i]);
    if (others.length) return false;
    return pos.every(j => j >= 0) ? true : null;
  }
  if (clue.t === 'notBandit' || clue.t === 'withBandit') return null;
  return unaryOk(level, blocking, clue, i);
}

function victimIndex(level) {
  return level.people.findIndex(p => p.victim);
}

// The murderer for a full placement, or -1 if the rule does not hold.
function murdererOf(level, pos) {
  const area = areasOf(level);
  const v = victimIndex(level);
  const a = area[pos[v]];
  const mates = pos.map((j, q) => q).filter(q => q !== v && area[pos[q]] === a);
  return mates.length === 1 ? mates[0] : -1;
}

// A set of bandits that fits a full placement, or null if none fits.
function banditSet(level, pos) {
  const K = level.bandits || 0;
  if (!K) return [];
  const area = areasOf(level);
  const lawful = new Set(level.lawful || []);
  const P = level.people.length;
  const must = new Set(), never = new Set([victimIndex(level)]), want = [];
  for (const cl of level.clues) {
    if (cl.t === 'bandit') must.add(cl.p);
    if (cl.t === 'notBandit') never.add(cl.p);
    if (cl.t === 'withBandit') want.push(cl.p);
  }
  for (let p = 0; p < P; p++) if (lawful.has(level.rooms[pos[p]])) never.add(p);
  for (const p of must) if (never.has(p)) return null;
  const chosen = [...must];
  if (chosen.length > K) return null;
  const free = [...Array(P).keys()].filter(p => !must.has(p) && !never.has(p));
  const ok = () => want.every(w => chosen.some(b => b !== w && area[pos[b]] === area[pos[w]]));
  function pick(start) {
    if (chosen.length === K) return ok();
    for (let j = start; j < free.length; j++) {
      chosen.push(free[j]);
      if (pick(j + 1)) return true;
      chosen.pop();
    }
    return false;
  }
  return pick(0) ? chosen.sort((a, b) => a - b) : null;
}

// Count solutions, stop at `limit`. Returns { count, nodes, aborted, first }.
// `restrict[p]` (optional) is a Set of cells person p may use.
function solve(level, blocking, { limit = 2, maxNodes = Infinity, restrict = null } = {}) {
  const n = level.size;
  const P = level.people.length;
  const victim = victimIndex(level);
  const area = areasOf(level);
  const tags = level.tags || [];
  const areaCount = new Array(Math.max(...area) + 1).fill(0);
  const aloneIn = new Array(areaCount.length).fill(false);
  const rowUsed = new Array(n).fill(false);
  const colUsed = new Array(n).fill(false);
  const pos = new Array(P).fill(-1);
  const useBandits = hasRule(level, 'bandits');
  const noTouch = hasRule(level, 'distance');
  const partner = partners(level);
  const full = hasRule(level, 'fullhouse');
  const land = full ? landRooms(level) : [];
  const roomCnt = new Array(Math.max(...level.rooms) + 1).fill(0);
  const occupied = new Array(n * n).fill(false);
  const side = riverSides(level);
  const sideCap = side ? [level.river.first, P - level.river.first] : null;
  const sideCnt = [0, 0];
  // Case facts: counters for the count facts, groups for the apart facts.
  const facts = allFacts(level);
  const countFacts = facts.filter(f => CELL_FACTS.includes(f.t)).map(f => ({ k: f.k, cells: factCells(level, f), got: 0 }));
  const boardFacts = facts.filter(f => !CELL_FACTS.includes(f.t) && f.t !== 'apart');
  const apartGroups = facts.filter(f => f.t === 'apart').map(f => level.people.map((_, p) => groupOf(level, f, p)));

  // Domains from the board, special rules and single-person clues.
  const domain = [];
  const sameWith = [];
  const alone = new Array(P).fill(false);
  for (let p = 0; p < P; p++) { sameWith.push([]); }
  for (const cl of level.clues) {
    if (cl.t === 'same') { sameWith[cl.p].push(cl.v); sameWith[cl.v].push(cl.p); }
    if (cl.t === 'alone') alone[cl.p] = true;
  }
  for (let p = 0; p < P; p++) {
    const mine = level.clues.filter(cl => cl.p === p);
    const d = [];
    for (let i = 0; i < n * n; i++) {
      if (restrict && !restrict[p].has(i)) continue;
      if (!cellOk(level, blocking, p, i)) continue;
      if (mine.every(cl => unaryOk(level, blocking, cl, i))) d.push(i);
    }
    domain.push(d);
  }

  let count = 0, nodes = 0, aborted = false, first = null;

  function canPlace(p, i) {
    const r = Math.floor(i / n), c = i % n, a = area[i];
    if (rowUsed[r] || colUsed[c]) return false;
    if (aloneIn[a]) return false;
    if ((alone[p] || tags[i] === 'lone') && areaCount[a] > 0) return false;
    for (const q of sameWith[p]) if (pos[q] >= 0 && area[pos[q]] !== a) return false;
    if (p === victim) { if (areaCount[a] > 1) return false; }
    else if (pos[victim] >= 0 && area[pos[victim]] === a && areaCount[a] >= 2) return false;
    if (noTouch) {
      for (const dr of [-1, 1]) for (const dc of [-1, 1]) {
        const rr = r + dr, cc = c + dc;
        if (rr >= 0 && rr < n && cc >= 0 && cc < n && occupied[rr * n + cc] && area[rr * n + cc] === a) return false;
      }
    }
    if (partner[p] >= 0 && pos[partner[p]] >= 0 && (!diagonal(i, pos[partner[p]], n) || area[pos[partner[p]]] !== a)) return false;
    if (side && sideCnt[side[i]] >= sideCap[side[i]]) return false;
    for (const cf of countFacts) if (cf.cells[i] && cf.got >= cf.k) return false;
    for (const g of apartGroups) {
      if (!g[p]) continue;
      for (let q = 0; q < P; q++) if (q !== p && pos[q] >= 0 && g[q] === g[p] && area[pos[q]] === a) return false;
    }
    return true;
  }

  function leafOk() {
    if (areaCount[area[pos[victim]]] !== 2) return false;
    if (hasRule(level, 'parity') && !level.parity.every(([k, kind]) => (roomCnt[k] % 2 === 0) === (kind === 'even'))) return false;
    if (full && land.some(k => !roomCnt[k])) return false;
    if (countFacts.some(cf => cf.got !== cf.k)) return false;
    if (boardFacts.some(f => !factHolds(level, f, pos))) return false;
    for (let p = 0; p < P; p++) if (tags[pos[p]] === 'crowd' && areaCount[area[pos[p]]] < 2) return false;
    if (useBandits && !banditSet(level, pos)) return false;
    return true;
  }

  function step(placed) {
    if (aborted || count >= limit) return;
    if (++nodes > maxNodes) { aborted = true; return; }
    if (placed === P) {
      if (leafOk()) {
        count++;
        if (!first) first = pos.slice();
      }
      return;
    }
    // Pick the person with the fewest options. Also check every free row
    // and column can still be reached.
    let best = -1, bestOpts = null;
    const rowHit = new Array(n).fill(false), colHit = new Array(n).fill(false);
    for (let p = 0; p < P; p++) {
      if (pos[p] >= 0) continue;
      const opts = [];
      for (const i of domain[p]) if (canPlace(p, i)) {
        opts.push(i);
        rowHit[Math.floor(i / n)] = true;
        colHit[i % n] = true;
      }
      if (!opts.length) return;
      if (!bestOpts || opts.length < bestOpts.length) { best = p; bestOpts = opts; }
    }
    for (let r = 0; r < n; r++) if (!rowUsed[r] && !rowHit[r]) return;
    for (let c = 0; c < n; c++) if (!colUsed[c] && !colHit[c]) return;
    // Full house: enough people left for the empty rooms.
    if (full && land.filter(k => !roomCnt[k]).length > P - placed) return;

    for (const i of bestOpts) {
      const r = Math.floor(i / n), c = i % n, a = area[i];
      const lone = alone[best] || tags[i] === 'lone';
      pos[best] = i; rowUsed[r] = colUsed[c] = true; areaCount[a]++;
      roomCnt[level.rooms[i]]++; occupied[i] = true;
      if (side) sideCnt[side[i]]++;
      for (const cf of countFacts) if (cf.cells[i]) cf.got++;
      if (lone) aloneIn[a] = true;
      step(placed + 1);
      if (lone) aloneIn[a] = false;
      pos[best] = -1; rowUsed[r] = colUsed[c] = false; areaCount[a]--;
      roomCnt[level.rooms[i]]--; occupied[i] = false;
      if (side) sideCnt[side[i]]--;
      for (const cf of countFacts) if (cf.cells[i]) cf.got--;
      if (aborted || count >= limit) return;
    }
  }

  step(0);
  return { count, nodes, aborted, first };
}

// ---- js/levelCodec.js ----
// Short text form for levels, so levels.js stays small.
// rooms:   one base-36 char per cell
// objects: one char per cell, "." for empty, else a letter for the
//          theme's object at that index
// Special rules add fields only when the level uses them:
// rules:   list of rule ids
// court:   court room ids          rank:  one char per person (n, k, c)
// trade:   one char per person, "." or trade index
// tags:    one char per cell: "." none, L lone, C crowd, digit = trade spot,
//          a-e = task spot (trade index)
// tasks:   [[trade index, count], ...]
// sea:     sea room id
// bandits: number of bandits       lawful: room ids without bandits
// couples: pairs [p, q]            parity: [[room, 'e' | 'o'], ...]
// river:   [dir, cuts as base-36 chars, people on the west/north side]
// facts:   case facts [t, v, k] (only when there are some)
// doors:   cell pairs [i, j]        windows: [[cell, side], ...]


const RANK_CODE = { noble: 'n', knight: 'k', commoner: 'c' };
const RANK_NAME = { n: 'noble', k: 'knight', c: 'commoner' };
const tradeIndex = id => TRADES.findIndex(t => t.id === id);

function encodeLevel(theme, level) {
  const ids = Object.keys(theme.objects);
  const out = {
    size: level.size,
    rooms: level.rooms.map(k => k.toString(36)).join(''),
    objects: level.objects.map(o => (o ? String.fromCharCode(97 + ids.indexOf(o)) : '.')).join(''),
    roomNames: level.roomNames,
    people: level.people.map(p => p.name),
    victim: level.people.findIndex(p => p.victim),
    clues: level.clues.map(c => (c.v === undefined ? [c.p, c.t] : [c.p, c.t, c.v])),
    solution: level.solution,
  };
  if (level.doors?.length) out.doors = level.doors;
  if (level.windows?.length) out.windows = level.windows;
  if (level.facts?.length) out.facts = level.facts.map(f => (f.k === undefined ? [f.t, f.v] : [f.t, f.v, f.k]));
  const rules = level.rules || [];
  if (!rules.length) return out;
  out.rules = rules;
  if (rules.includes('ranks')) {
    out.court = level.court;
    out.rank = level.rank.map(r => RANK_CODE[r]).join('');
  }
  if (rules.includes('trades')) out.trade = level.trade.map(t => (t ? String(tradeIndex(t)) : '.')).join('');
  if (level.tags?.some(Boolean)) {
    out.tags = level.tags.map(t => (!t ? '.' : t === 'lone' ? 'L' : t === 'crowd' ? 'C'
      : t.startsWith('k:') ? String.fromCharCode(97 + tradeIndex(t.slice(2))) : String(tradeIndex(t.slice(2))))).join('');
  }
  if (rules.includes('sea')) out.sea = level.sea;
  if (rules.includes('bandits')) { out.bandits = level.bandits; out.lawful = level.lawful; }
  if (rules.includes('couples')) out.couples = level.couples;
  if (rules.includes('parity')) out.parity = level.parity.map(([k, kind]) => [k, kind[0]]);
  if (rules.includes('tasks')) out.tasks = level.tasks.map(([id, k]) => [tradeIndex(id), k]);
  if (rules.includes('river')) out.river = [level.river.dir, level.river.cut.map(c => c.toString(36)).join(''), level.river.first];
  return out;
}

function decodeLevel(theme, raw) {
  const ids = Object.keys(theme.objects);
  const level = {
    size: raw.size,
    rooms: [...raw.rooms].map(ch => parseInt(ch, 36)),
    objects: [...raw.objects].map(ch => (ch === '.' ? null : ids[ch.charCodeAt(0) - 97])),
    roomNames: raw.roomNames,
    people: raw.people.map((name, p) => (p === raw.victim ? { name, victim: true } : { name })),
    clues: raw.clues.map(([p, t, v]) => ({ p, t, v })),
    solution: raw.solution,
    rules: raw.rules || [],
    doors: raw.doors || [],
    windows: raw.windows || [],
    facts: (raw.facts || []).map(([t, v, k]) => ({ t, v, k })),
    sea: raw.sea ?? -1,
  };
  if (raw.rank) { level.court = raw.court; level.rank = [...raw.rank].map(ch => RANK_NAME[ch]); }
  if (raw.trade) level.trade = [...raw.trade].map(ch => (ch === '.' ? null : TRADES[+ch].id));
  if (raw.tags) {
    level.tags = [...raw.tags].map(ch => (ch === '.' ? null : ch === 'L' ? 'lone' : ch === 'C' ? 'crowd'
      : /[a-e]/.test(ch) ? `k:${TRADES[ch.charCodeAt(0) - 97].id}` : `t:${TRADES[+ch].id}`));
  }
  if (raw.bandits) { level.bandits = raw.bandits; level.lawful = raw.lawful || []; }
  if (raw.couples) level.couples = raw.couples;
  if (raw.parity) level.parity = raw.parity.map(([k, c]) => [k, c === 'e' ? 'even' : 'odd']);
  if (raw.tasks) level.tasks = raw.tasks.map(([k, c]) => [TRADES[k].id, c]);
  if (raw.river) level.river = { dir: raw.river[0], cut: [...raw.river[1]].map(ch => parseInt(ch, 36)), first: raw.river[2] };
  return level;
}

// ---- js/hints.js ----
// Step-by-step deduction for the hint browser.
//
// deduce(level, blocking, T) returns a list of steps. Each step:
//   text     what we learn and why
//   before   { pos, cand } board before the step
//   place    { p, i }        put person p on cell i
//   elim     [[p, i], ...]   person p can not be on cell i
//   allowed  { p, cells }    person p can only be on these cells
//   cross    [i, ...]        nobody can be on these cells
// T holds text helpers: name(p), cell(i), room(i), clue(clue), people(list).
//
// Easy techniques come first. If they get stuck, we try a cell and
// follow the easy techniques until something breaks.


const UNARY = ['room', 'notRoom', 'on', 'next', 'row', 'col', 'bandit', 'task', 'taskEither', 'noTask', 'door', 'window'];

// start: begin from the player's board instead of an empty one:
//   { pos, out: [Set of cells per person they can not be on], crossed: Set }
// limit: stop after this many steps (1 = just the next step).
// options: return every step that follows from the start board alone (not one story).
function deduce(level, blocking, T, { deep = true, start = null, limit = Infinity, options = false } = {}) {
  const n = level.size, P = level.people.length, N = n * n;
  const area = areasOf(level);
  const victim = victimIndex(level);
  const tags = level.tags || [];
  const row = i => Math.floor(i / n), col = i => i % n;
  const noTouch = hasRule(level, 'distance');
  const partner = partners(level);
  const full = hasRule(level, 'fullhouse');
  const land = full ? landRooms(level) : [];
  const roomName = k => `the ${level.roomNames[k]}`;
  const side = riverSides(level);
  const sideCap = side ? [level.river.first, P - level.river.first] : null;
  const sideName = side ? (level.river.dir === 'v' ? ['west', 'east'] : ['north', 'south']) : null;
  // Case facts.
  const countFacts = allFacts(level).filter(f => CELL_FACTS.includes(f.t)).map(f => ({ f, cells: factCells(level, f) }));
  const factLabel = f => (f.t === 'task' ? 'Tasks' : 'Case fact');
  const apartFacts = (level.facts || []).filter(f => f.t === 'apart');
  const boardFacts = (level.facts || []).filter(f => ['alone', 'emptyRooms', 'touch'].includes(f.t));
  const landList = landRooms(level);
  const alone = new Array(P).fill(false);
  const same = [];
  for (const cl of level.clues) {
    if (cl.t === 'alone') alone[cl.p] = true;
    if (cl.t === 'same') same.push([cl.p, cl.v]);
  }

  // ---- state helpers ----

  const clone = s => ({ pos: s.pos.slice(), cand: s.cand.map(c => new Set(c)) });
  const snap = s => ({ pos: s.pos.slice(), cand: s.cand.map(c => [...c]) });
  const unplaced = s => [...Array(P).keys()].filter(p => s.pos[p] < 0);
  const areaPeople = (s, a) => [...Array(P).keys()].filter(p => s.pos[p] >= 0 && area[s.pos[p]] === a);

  function apply(s, move) {
    if (move.place) {
      const { p, i } = move.place;
      s.pos[p] = i;
      s.cand[p] = new Set([i]);
      for (let q = 0; q < P; q++) {
        if (q === p || s.pos[q] >= 0) continue;
        for (const j of [...s.cand[q]]) if (j === i || row(j) === row(i) || col(j) === col(i) || (noTouch && touching(level, i, j))) s.cand[q].delete(j);
      }
    }
    if (move.elim) for (const [p, i] of move.elim) s.cand[p].delete(i);
    if (move.allowed) s.cand[move.allowed.p] = new Set(move.allowed.cells);
  }

  // A reason the state is broken, or null.
  function broken(s) {
    const free = unplaced(s);
    for (const p of free) if (!s.cand[p].size) return `${T.name(p)} would have no cell left`;
    const rowsLeft = new Set(), colsLeft = new Set();
    for (let r = 0; r < n; r++) if (!s.pos.some(i => i >= 0 && row(i) === r)) rowsLeft.add(r);
    for (let c = 0; c < n; c++) if (!s.pos.some(i => i >= 0 && col(i) === c)) colsLeft.add(c);
    for (const r of rowsLeft) if (!free.some(p => [...s.cand[p]].some(i => row(i) === r))) return `nobody could stand in row ${r + 1}`;
    for (const c of colsLeft) if (!free.some(p => [...s.cand[p]].some(i => col(i) === c))) return `nobody could stand in column ${T.col(c)}`;
    // Two placed people in one row or column.
    const placed = s.pos.filter(i => i >= 0);
    if (new Set(placed.map(row)).size < placed.length || new Set(placed.map(col)).size < placed.length) return 'two people would share a row or column';
    // Room rules that can already fail.
    for (let p = 0; p < P; p++) {
      const i = s.pos[p];
      if (i < 0) continue;
      const mates = areaPeople(s, area[i]).filter(q => q !== p);
      if ((alone[p] || tags[i] === 'lone') && mates.length) return `${T.name(p)} would not be alone in ${T.room(i)}`;
    }
    if (s.pos[victim] >= 0 && areaPeople(s, area[s.pos[victim]]).length > 2) {
      return `${T.name(victim)} would not be alone with one person`;
    }
    if (noTouch) {
      for (let p = 0; p < P; p++) for (let q = p + 1; q < P; q++) {
        if (s.pos[p] >= 0 && s.pos[q] >= 0 && touching(level, s.pos[p], s.pos[q])) return `${T.name(p)} and ${T.name(q)} would touch`;
      }
    }
    for (let p = 0; p < P; p++) {
      const q = partner[p];
      if (q > p && s.pos[p] >= 0 && s.pos[q] >= 0) {
        if (!diagonal(s.pos[p], s.pos[q], n)) return `${T.name(p)} and ${T.name(q)} would not stand diagonally next to each other`;
        if (area[s.pos[p]] !== area[s.pos[q]]) return `${T.name(p)} and ${T.name(q)} would not be in the same room`;
      }
    }
    for (const { f, cells } of countFacts) {
      const got = s.pos.filter(i => i >= 0 && cells[i]).length;
      if (got > f.k) return `too many people would match "${T.fact(f)}"`;
      const reach = free.filter(p => [...s.cand[p]].some(i => cells[i])).length;
      if (got + reach < f.k) return `not enough people could match "${T.fact(f)}"`;
    }
    // Board facts: bounds that already fail on a part of the board.
    for (const f of boardFacts) {
      if (f.t === 'emptyRooms') {
        const used = landList.filter(k => s.pos.some(i => i >= 0 && level.rooms[i] === k)).length;
        const dead = landList.filter(k => !s.pos.some(i => i >= 0 && level.rooms[i] === k) && !free.some(p => [...s.cand[p]].some(i => level.rooms[i] === k))).length;
        if (landList.length - used < f.k) return `fewer than ${f.k} rooms could stay empty`;
        if (dead > f.k) return `more than ${f.k} rooms would stay empty`;
      }
      if (f.t === 'touch') {
        let c = 0;
        for (let p = 0; p < P; p++) for (let q = p + 1; q < P; q++) if (s.pos[p] >= 0 && s.pos[q] >= 0 && touching(level, s.pos[p], s.pos[q])) c++;
        if (c > f.k) return 'too many people would touch at a corner';
      }
      if (f.t === 'alone') {
        // Sure not alone: someone else is placed in the same area.
        const notAlone = s.pos.filter((i, p) => i >= 0 && s.pos.some((j, q) => q !== p && j >= 0 && area[j] === area[i])).length;
        // Sure alone: placed, and nobody else is or can come into the area.
        const sure = s.pos.filter((i, p) => i >= 0 && !s.pos.some((j, q) => q !== p && j >= 0 && area[j] === area[i]) &&
          !free.some(q => [...s.cand[q]].some(j => area[j] === area[i]))).length;
        if (notAlone > P - f.k) return 'too few people could be alone in a room';
        if (sure > f.k) return 'too many people would be alone in a room';
      }
    }
    for (const f of apartFacts) {
      for (let p = 0; p < P; p++) for (let q = p + 1; q < P; q++) {
        const g = groupOf(level, f, p);
        if (g && g === groupOf(level, f, q) && s.pos[p] >= 0 && s.pos[q] >= 0 && area[s.pos[p]] === area[s.pos[q]]) {
          return `${T.name(p)} and ${T.name(q)} would share a ${f.v} and a room`;
        }
      }
    }
    if (side) {
      for (const x of [0, 1]) {
        const placedHere = s.pos.filter(i => i >= 0 && side[i] === x).length;
        if (placedHere > sideCap[x]) return `too many people would stand ${sideName[x]} of the river`;
        const canReach = free.filter(p => [...s.cand[p]].some(i => side[i] === x)).length;
        if (placedHere + canReach < sideCap[x]) return `not enough people could stand ${sideName[x]} of the river`;
      }
    }
    if (full) {
      const empty = land.filter(k => !s.pos.some(i => i >= 0 && level.rooms[i] === k));
      for (const k of empty) if (!free.some(p => [...s.cand[p]].some(i => level.rooms[i] === k))) return `nobody could be in ${roomName(k)}`;
      if (empty.length > free.length) return 'not every room could get someone';
    }
    if (!free.length) {
      const pos = s.pos;
      const problem = boardRuleProblems(level, pos, T.name, k => level.roomNames[k])[0];
      if (problem) return problem;
      for (const [p, q] of same) if (area[pos[p]] !== area[pos[q]]) return `${T.name(p)} and ${T.name(q)} would be in different rooms`;
      if (murdererOf(level, pos) < 0) return `${T.name(victim)} would not be alone with exactly one person`;
      for (let p = 0; p < P; p++) if (tags[pos[p]] === 'crowd' && areaPeople(s, area[pos[p]]).length < 2) return `${T.name(p)} would be alone on a sun seal`;
      if (hasRule(level, 'bandits') && !banditSet(level, pos)) return 'the bandit clues could not all hold';
    }
    return null;
  }

  // ---- easy techniques: each returns a move or null ----

  function* single(s) {
    for (const p of unplaced(s)) {
      if (s.cand[p].size === 1) {
        const i = [...s.cand[p]][0];
        yield { place: { p, i }, text: `${T.name(p)} has only one cell left: ${T.cell(i)}. Place ${T.name(p)} there. Nobody else can be in row ${row(i) + 1} or column ${T.col(col(i))}.` +
          (noTouch ? ' Nobody stands on the corner cells next to it in that room either.' : '') };
      }
    }
  }

  function* onlyInLine(s) {
    const free = unplaced(s);
    for (const [kind, f] of [['row', row], ['column', col]]) {
      for (let x = 0; x < n; x++) {
        if (s.pos.some(i => i >= 0 && f(i) === x)) continue;
        const who = free.filter(p => [...s.cand[p]].some(i => f(i) === x));
        if (who.length !== 1) continue;
        const p = who[0];
        const out = [...s.cand[p]].filter(i => f(i) !== x);
        if (!out.length) continue;
        const label = kind === 'row' ? `row ${x + 1}` : `column ${T.col(x)}`;
        yield {
          elim: out.map(i => [p, i]),
          uses: free.filter(q => q !== p),
          text: `Every row and column holds one person. Only ${T.name(p)} can still stand in ${label}. So ${T.name(p)} must be in ${label}.`,
        };
      }
    }
  }

  function* roomRules(s) {
    const free = unplaced(s);
    // Someone placed who must be alone: nobody else in that room.
    for (let p = 0; p < P; p++) {
      const i = s.pos[p];
      if (i < 0 || !(alone[p] || tags[i] === 'lone')) continue;
      const elim = [];
      for (const q of free) for (const j of s.cand[q]) if (area[j] === area[i]) elim.push([q, j]);
      if (elim.length) {
        const why = alone[p] ? `${T.name(p)} was alone in a room` : `${T.name(p)} stands on a moon seal, so they are alone`;
        yield { elim, text: `${why}. So nobody else is in ${T.room(i)}.` };
      }
    }
    // A person who must be alone can not join a room with someone in it.
    for (const p of free) {
      const elim = [];
      for (const j of s.cand[p]) {
        if (!(alone[p] || tags[j] === 'lone')) continue;
        if (areaPeople(s, area[j]).length) elim.push([p, j]);
      }
      if (elim.length) {
        const j = elim[0][1];
        const other = T.name(areaPeople(s, area[j])[0]);
        const text = alone[p]
          ? `${T.name(p)} was alone in a room. ${other} is already in ${T.room(j)}. So ${T.name(p)} is not there.`
          : `A person on a moon seal is alone in their room. ${other} is already in ${T.room(j)}. So ${T.name(p)} can not use the moon seal there.`;
        yield { elim, text };
      }
    }
    // Same room: each one stays in rooms the other can reach.
    for (const [a, b] of same) {
      for (const [p, q] of [[a, b], [b, a]]) {
        if (s.pos[p] >= 0) continue;
        const reach = new Set([...s.cand[q]].map(i => area[i]));
        const elim = [...s.cand[p]].filter(i => !reach.has(area[i]) || (s.pos[q] >= 0 && i === s.pos[q]));
        if (elim.length) {
          const where = s.pos[q] >= 0 ? `${T.name(q)} is in ${T.room(s.pos[q])}` : `${T.name(q)} can only be in ${T.rooms([...s.cand[q]])}`;
          yield { elim: elim.map(i => [p, i]), text: `${T.name(p)} was in the same room as ${T.name(q)}. ${where}. So ${T.name(p)} must be there too.` };
        }
      }
    }
    // Couples stand diagonally next to each other.
    for (const p of free) {
      const q = partner[p];
      if (q < 0) continue;
      const near = [...s.cand[p]].filter(i => [...s.cand[q]].some(j => diagonal(i, j, n) && area[i] === area[j]));
      if (near.length < s.cand[p].size) {
        const elim = [...s.cand[p]].filter(i => !near.includes(i)).map(i => [p, i]);
        const where = s.pos[q] >= 0 ? `${T.name(q)} stands on ${T.cell(s.pos[q])}` : `${T.name(q)} has only a few cells left`;
        yield { elim, text: `${T.name(p)} and ${T.name(q)} are a couple: they stand diagonally next to each other, in the same room. ${where}. So ${T.name(p)} can only be on a corner cell next to them in that room.` };
      }
    }
    // Case facts: a full count takes nobody else; a count that needs everyone who can reach it gets them.
    for (const { f, cells } of countFacts) {
      const got = s.pos.filter(i => i >= 0 && cells[i]).length;
      // People who are surely on these cells: all their cells count.
      const sure = free.filter(q => s.cand[q].size && [...s.cand[q]].every(i => cells[i]));
      if (got + sure.length === f.k) {
        const elim = [];
        for (const q of free) if (!sure.includes(q)) for (const j of s.cand[q]) if (cells[j]) elim.push([q, j]);
        const why = sure.length ? `${T.people(sure)} ${sure.length === 1 ? 'is' : 'are'} surely on the marked cells. ` : got ? 'That number is reached already. ' : '';
        if (elim.length) yield { elim, text: `${factLabel(f)}: "${T.fact(f)}" ${why}So nobody else can stand on the marked cells.` };
      }
      const reach = free.filter(q => [...s.cand[q]].some(i => cells[i]));
      if (got + reach.length === f.k && reach.length) {
        const elim = [];
        for (const q of reach) for (const j of s.cand[q]) if (!cells[j]) elim.push([q, j]);
        if (elim.length) yield { elim, text: `${factLabel(f)}: "${T.fact(f)}" Only ${T.people(reach)} can still make that true. So they must.` };
      }
    }
    // Case facts: people of one rank (or trade) are in different rooms.
    for (const f of apartFacts) {
      for (let p = 0; p < P; p++) {
        const g = groupOf(level, f, p);
        if (!g || s.pos[p] < 0) continue;
        const elim = [];
        for (const q of free) if (groupOf(level, f, q) === g) for (const j of s.cand[q]) if (area[j] === area[s.pos[p]]) elim.push([q, j]);
        if (elim.length) yield { elim, text: `Case fact: "${T.fact(f)}" ${T.name(p)} is already in ${T.room(s.pos[p])}. So no other ${g} is there.` };
      }
    }
    // River: a full side takes nobody else. A side that needs everyone who can reach it gets them.
    if (side) {
      for (const x of [0, 1]) {
        const placedHere = s.pos.filter(i => i >= 0 && side[i] === x).length;
        const sureHere = free.filter(q => s.cand[q].size && [...s.cand[q]].every(i => side[i] === x));
        if (placedHere + sureHere.length === sideCap[x]) {
          const elim = [];
          for (const q of free) if (!sureHere.includes(q)) for (const j of s.cand[q]) if (side[j] === x) elim.push([q, j]);
          const why = sureHere.length ? ` ${T.people(sureHere)} ${sureHere.length === 1 ? 'is' : 'are'} surely there.` : '';
          if (elim.length) yield { elim, text: `Exactly ${sideCap[x]} people stand ${sideName[x]} of the river.${why} That side is full. So nobody else stands there.` };
        }
        const reach = free.filter(q => [...s.cand[q]].some(i => side[i] === x));
        if (placedHere + reach.length === sideCap[x]) {
          const elim = [];
          for (const q of reach) for (const j of s.cand[q]) if (side[j] !== x) elim.push([q, j]);
          if (elim.length) yield { elim, text: `${sideCap[x]} people must stand ${sideName[x]} of the river. Only ${T.people(reach)} can still get there. So they all stand ${sideName[x]} of it.` };
        }
      }
    }
    // Full house: a room nobody else can reach needs this person.
    if (full) {
      for (const k of land) {
        if (s.pos.some(i => i >= 0 && level.rooms[i] === k)) continue;
        const who = free.filter(p => [...s.cand[p]].some(i => level.rooms[i] === k));
        if (who.length !== 1) continue;
        const p = who[0];
        const out = [...s.cand[p]].filter(i => level.rooms[i] !== k);
        if (out.length) {
          yield { elim: out.map(i => [p, i]), text: `Every room holds at least one person. Only ${T.name(p)} can still reach ${roomName(k)}. So ${T.name(p)} must be there.` };
        }
      }
    }
    // The victim's room holds exactly two people.
    if (s.pos[victim] >= 0) {
      const a = area[s.pos[victim]];
      const mates = areaPeople(s, a).filter(q => q !== victim);
      if (mates.length === 1) {
        const elim = [];
        for (const q of free) for (const j of s.cand[q]) if (area[j] === a) elim.push([q, j]);
        if (elim.length) {
          yield { elim, text: `The murderer was alone with ${T.name(victim)}. ${T.name(mates[0])} is already in ${T.room(s.pos[victim])}. So nobody else is there.` };
        }
      }
    } else {
      const elim = [...s.cand[victim]].filter(j => areaPeople(s, area[j]).length >= 2);
      if (elim.length) {
        yield { elim: elim.map(j => [victim, j]), text: `${T.name(victim)} was alone with the murderer. Rooms that already hold two people are out for ${T.name(victim)}.` };
      }
    }
  }

  // One person who can only be in one row (or column) owns it: nobody else is there.
  // only: look at this person only.
  function* claimLine(s, only = null) {
    const free = unplaced(s);
    for (const p of only === null ? free : [only]) {
      for (const [kind, f] of [['row', row], ['column', col]]) {
        const lines = new Set([...s.cand[p]].map(f));
        if (lines.size !== 1) continue;
        const [x] = lines;
        const elim = [];
        for (const q of free) if (q !== p) for (const j of s.cand[q]) if (f(j) === x) elim.push([q, j]);
        if (!elim.length) continue;
        const line = `${kind} ${kind === 'row' ? x + 1 : T.col(x)}`;
        yield { elim, text: `${T.name(p)} can only be in ${line}. Each ${kind} holds one person. So nobody else is in ${line}.` };
      }
    }
  }

  // A clue step that puts a person in one row or column: say in the same step
  // that the rest of that line is crossed out for everyone else.
  // Say simple follow-ups in the same step as the move:
  // a person in one row or column (cross out the rest of it), and
  // a person on two cells (cross out where their lines meet).
  function withClaim(s, move) {
    let p = move.allowed?.p;
    if (p === undefined && move.elim) {
      const ps = new Set(move.elim.map(([q]) => q));
      if (ps.size === 1) [p] = ps;
    }
    if (p === undefined || move.place) return move;
    const t = clone(s);
    apply(t, move);
    if (t.cand[p].size < 2) return move; // the next step places them anyway
    let elim = [], text = move.text;
    const claim = first(claimLine(t, p));
    if (claim) {
      const line = claim.text.match(/can only be in (row \S+|column \S+)\./)[1];
      const lead = move.allowed ? 'These cells are all in' : `Now ${T.name(p)} can only be in`;
      text += ` ${lead} ${line}. Each ${line.split(' ')[0]} holds one person. So nobody else is in ${line}: cross out the rest of it.`;
      apply(t, claim);
      elim = elim.concat(claim.elim);
    }
    const two = first(twoCellCross(t, p));
    if (two) {
      text += ` ${two.text}`;
      apply(t, two);
      elim = elim.concat(two.elim);
    }
    if (!elim.length) return move;
    // Cells where nobody is left get a plain ✕.
    const mine = new Set(t.cand[p]);
    const cross = [...new Set(elim.map(([, i]) => i))].filter(i => !mine.has(i) && !t.cand.some((c, q) => t.pos[q] < 0 && c.has(i)));
    return { ...move, elim: [...(move.elim || []), ...elim], cross: [...(move.cross || []), ...cross], text };
  }


  // k people who share only k rows (or columns) fill them. k = 1: one person owns a row.
  function* lineGroups(s) {
    const free = unplaced(s);
    for (const k of [1, 2, 3]) for (const [kind, f] of [['rows', row], ['columns', col]]) {
      const lines = p => new Set([...s.cand[p]].map(f));
      {
        const groups = combos(free, k);
        for (const g of groups) {
          const u = new Set();
          for (const p of g) for (const x of lines(p)) u.add(x);
          if (u.size !== k) continue;
          const elim = [];
          for (const q of free) if (!g.includes(q)) for (const j of s.cand[q]) if (u.has(f(j))) elim.push([q, j]);
          if (!elim.length) continue;
          const names = T.people(g);
          const xs = [...u].sort((x, y) => x - y).map(x => (kind === 'rows' ? String(x + 1) : T.col(x)));
          if (k === 1) {
            const line = `${kind === 'rows' ? 'row' : 'column'} ${xs[0]}`;
            yield { elim, text: `${names} can only be in ${line}. Each ${kind === 'rows' ? 'row' : 'column'} holds one person. So nobody else is in ${line}.` };
          }
          yield { elim, text: `${names} can only be in ${kind} ${xs.join(' and ')}. Together they fill these ${kind}. So nobody else is in them.` };
        }
      }
    }
  }

  // A person with only a few cells left needs one of them:
  // a placement that would block all of them is out.
  function* personNeeds(s) {
    const free = unplaced(s);
    const blocks = (i, j) => i === j || row(i) === row(j) || col(i) === col(j) || (noTouch && touching(level, i, j));
    for (const q of free.slice().sort((a, b) => s.cand[a].size - s.cand[b].size)) {
      const mine = [...s.cand[q]];
      if (mine.length < 2 || mine.length > 4) continue;
      const elim = [];
      for (const p of free) {
        if (p === q) continue;
        for (const i of s.cand[p]) if (mine.every(j => blocks(i, j))) elim.push([p, i]);
      }
      if (!elim.length) continue;
      const who = [...new Set(elim.map(([p]) => p))];
      yield { elim, text: `${T.name(q)} can only be on ${listText(mine.map(T.cell))}. Someone on a marked cell would block ${mine.length === 2 ? 'both' : 'all of them'} (same row or column). ` +
        `So ${T.people(who)} can not stand there.` };
    }
  }

  // A fact that says "nobody": its cells are empty. One rule, many crosses.
  function* zeroFacts(s) {
    for (const { f, cells } of countFacts) {
      if (f.k !== 0) continue;
      const elim = [];
      for (const q of unplaced(s)) for (const j of s.cand[q]) if (cells[j]) elim.push([q, j]);
      if (!elim.length) continue;
      const cross = [...new Set(elim.map(([, i]) => i))];
      yield { elim, cross, text: `${factLabel(f)}: "${T.fact(f)}" So nobody can stand on the marked cells. Cross them out.` };
    }
  }

  // k rows that still need someone, whose open cells all lie in the same k columns:
  // their people take those columns, so nobody else stands in them (and the same for columns).
  function* lineFish(s) {
    const free = unplaced(s);
    const openIn = (f, x) => {
      const o = new Set();
      for (const q of free) for (const i of s.cand[q]) if (f(i) === x) o.add(i);
      return o;
    };
    for (const [kind, f, g, otherKind] of [['Rows', row, col, 'columns'], ['Columns', col, row, 'rows']]) {
      const need = [...Array(n).keys()].filter(x => !s.pos.some(i => i >= 0 && f(i) === x));
      for (const k of [2, 3]) {
        for (const xs of combos(need, k)) {
          const open = xs.flatMap(x => [...openIn(f, x)]);
          if (xs.some(x => !openIn(f, x).size)) continue;
          const ys = [...new Set(open.map(g))].sort((a, b) => a - b);
          if (ys.length !== k) continue;
          const elim = [];
          for (const q of free) for (const i of s.cand[q]) if (ys.includes(g(i)) && !xs.includes(f(i))) elim.push([q, i]);
          if (!elim.length) continue;
          const name = (x, isF) => ((kind === 'Rows') === isF ? String(x + 1) : T.col(x));
          const xText = xs.map(x => name(x, true)).join(' and ');
          const yText = ys.map(y => name(y, false)).join(' and ');
          const cross = [...new Set(elim.map(([, i]) => i))].filter(i => !free.some(q => s.cand[q].has(i) && !elim.some(([r, j]) => r === q && j === i)));
          yield { elim, cross, text: `${kind} ${xText} still need someone. Their last open cells are all in ${otherKind} ${yText}. ` +
            `Each of these ${kind.toLowerCase()} needs one person, so together they take ${otherKind} ${yText}. ` +
            `So nobody else can stand in ${otherKind} ${yText}: cross out the rest of them.` };
        }
      }
    }
  }

  // A count fact still missing m people, whose open cells lie in just m rows (or columns):
  // those rows go to the missing people, so nobody stands there outside the fact's cells.
  function* countLines(s) {
    const free = unplaced(s);
    for (const { f, cells } of countFacts) {
      if (!f.k) continue;
      const placed = level.people.map((_, q) => q).filter(q => s.pos[q] >= 0 && cells[s.pos[q]]);
      const sure = free.filter(q => s.cand[q].size && [...s.cand[q]].every(i => cells[i]));
      const missing = f.k - placed.length - sure.length;
      if (missing < 1) continue;
      // Open cells for the missing people: not on rows or columns of the sure ones.
      const sureRows = new Set(sure.flatMap(q => { const rs = new Set([...s.cand[q]].map(row)); return rs.size === 1 ? [...rs] : []; }));
      const sureCols = new Set(sure.flatMap(q => { const cs = new Set([...s.cand[q]].map(col)); return cs.size === 1 ? [...cs] : []; }));
      const open = new Set();
      for (const q of free) if (!sure.includes(q)) for (const i of s.cand[q]) if (cells[i] && !sureRows.has(row(i)) && !sureCols.has(col(i))) open.add(i);
      if (!open.size) continue;
      for (const [kind, g] of [['row', row], ['column', col]]) {
        const lines = [...new Set([...open].map(g))].sort((a, b) => a - b);
        if (lines.length !== missing) continue;
        const elim = [];
        for (const q of free) for (const i of s.cand[q]) if (lines.includes(g(i)) && !cells[i]) elim.push([q, i]);
        if (!elim.length) continue;
        const where = f.t === 'roomCount' ? T.room([...open][0]) : 'the marked area';
        const there = [...placed, ...sure];
        const names = lines.map(x => (kind === 'row' ? String(x + 1) : T.col(x)));
        const lineText = `${kind}${lines.length > 1 ? 's' : ''} ${names.join(' and ')}`;
        const cross = [...new Set(elim.map(([, i]) => i))].filter(i => !free.some(q => s.cand[q].has(i) && !elim.some(([r, j]) => r === q && j === i)));
        yield { elim, cross, text: `${factLabel(f)}: "${T.fact(f)}" ` +
          (there.length ? `${T.people(there)} ${there.length === 1 ? 'is' : 'are'} there. ` : '') +
          `So ${missing === 1 ? 'one more person' : `${missing} more people`} must be in ${where}. ` +
          `The last open cells there are all in ${lineText}. So ${missing === 1 ? 'that person takes' : 'they take'} ${lineText}: ` +
          `nobody else can stand in ${lineText} outside ${where}.` };
      }
    }
  }

  // A person with exactly two cells in different rows and columns:
  // the two cells where their lines cross can hold nobody.
  function* twoCellCross(s, only = null) {
    const free = unplaced(s);
    for (const p of only === null ? free : [only]) {
      if (s.cand[p].size !== 2) continue;
      const [a, b] = [...s.cand[p]];
      if (row(a) === row(b) || col(a) === col(b)) continue;
      const corners = [row(a) * n + col(b), row(b) * n + col(a)];
      const elim = [];
      for (const q of free) if (q !== p) for (const i of corners) if (s.cand[q].has(i)) elim.push([q, i]);
      if (!elim.length) continue;
      const cells = [...new Set(elim.map(([, i]) => i))];
      yield { elim, text: `${T.name(p)} is on ${T.cell(a)} or ${T.cell(b)}. ${listText(cells.map(T.cell))} ${cells.length === 1 ? 'shares' : 'share'} a row or column with both. ` +
        `So whoever stood there would block ${T.name(p)}. Cross ${cells.length === 1 ? 'it' : 'them'} out.` };
    }
  }

  // A row (or column) that still needs someone keeps its last open cells free:
  // a placement that would block all of them is out.
  function* lineNeeds(s) {
    const free = unplaced(s);
    for (const [kind, f, g, other] of [['Row', row, col, 'column'], ['Column', col, row, 'row']]) {
      for (let x = 0; x < n; x++) {
        if (s.pos.some(i => i >= 0 && f(i) === x)) continue;
        const open = []; // [person, cell] still possible in this line
        for (const q of free) for (const i of s.cand[q]) if (f(i) === x) open.push([q, i]);
        const cells = [...new Set(open.map(([, i]) => i))].sort((a, b) => a - b);
        if (!cells.length || cells.length > 3) continue;
        const label = `${kind.toLowerCase()} ${kind === 'Row' ? x + 1 : T.col(x)}`;
        // One open cell: everyone in its row (or column) blocks it. One step for all.
        if (cells.length === 1) {
          const c = cells[0];
          const users = new Set(open.map(([q]) => q));
          const elim = [];
          for (const p of free) for (const i of s.cand[p]) if (f(i) !== x && g(i) === g(c) && !(users.size === 1 && users.has(p))) elim.push([p, i]);
          if (elim.length) {
            yield { elim, text: `${kind} ${label.split(' ')[1]} still needs someone. Its last open cell is ${T.cell(c)}. ` +
              `Anyone on a marked cell would block ${T.cell(c)} (same ${other}). So nobody can stand there.` };
          }
          continue;
        }
        for (const p of free) {
          // p on i leaves the line empty: the cells only p can use stay empty,
          // and the rest share a row (or column) with i.
          const bad = [...s.cand[p]].filter(i => f(i) !== x && !open.some(([q, j]) => q !== p && g(j) !== g(i)));
          if (!bad.length) continue;
          const own = cells.filter(j => open.every(([q, k]) => k !== j || q === p));
          const rest = cells.filter(j => !own.includes(j)); // at most one cell
          const ownText = listText(own.map(T.cell));
          // Why nobody else can use p's cells. pending: quiet clues the story still has to tell.
          const blockedOthers = free.filter(q => q !== p);
          const explain = pending => {
            const rooms = new Set(own.map(i => area[i]));
            const why = blockedOthers.map(q => {
              if (pending.has(q)) { const r = pending.get(q); pending.delete(q); return r; }
              if (rooms.size === 1 && ![...s.cand[q]].some(i => area[i] === [...rooms][0])) return `${T.name(q)} can not be in ${T.room(own[0])}.`;
              return null;
            }).filter(Boolean);
            if (!rest.length && pending.has(p)) { why.unshift(pending.get(p)); pending.delete(p); }
            const because = why.length ? ` Remember: ${why.join(' ')}` : '';
            const mine = '';
            if (!rest.length) {
              return `${T.name(p)} is the only one who can be in ${label}.${because}${mine} ` +
                `${kind} ${label.split(' ')[1]} still needs someone. Its last open ${cells.length === 1 ? 'cell is' : 'cells are'} ${ownText}, so ${T.name(p)} must be on one of them. ` +
                `Drop ${T.name(p)} from the marked cells in other ${kind === 'Row' ? 'rows' : 'columns'}.`;
            }
            return `${kind} ${label.split(' ')[1]} still needs someone. Its last open cells are ${listText(cells.map(T.cell))}. ` +
              `Only ${T.name(p)} can use ${ownText}, so ${T.cell(rest[0])} must not be blocked by ${T.name(p)}. Therefore ${T.name(p)} can not stand on the marked cells. ` +
              `${T.name(p)} on a marked cell would block ${T.cell(rest[0])} (same ${other}), and ${ownText} would stay empty.${because}`;
          };
          yield { elim: bad.map(i => [p, i]), explain, text: explain(new Map()) };
        }
      }
    }
  }


  // k empty rows (or columns) that only k people can reach: those people are in them.
  function* hiddenGroups(s) {
    const free = unplaced(s);
    for (const [kind, f] of [['rows', row], ['columns', col]]) {
      const open = [...Array(n).keys()].filter(x => !s.pos.some(i => i >= 0 && f(i) === x));
      for (const k of [2, 3]) {
        for (const g of combos(open, k)) {
          const who = free.filter(p => [...s.cand[p]].some(i => g.includes(f(i))));
          if (who.length !== k) continue;
          const elim = [];
          for (const p of who) for (const i of s.cand[p]) if (!g.includes(f(i))) elim.push([p, i]);
          if (!elim.length) continue;
          const xs = g.map(x => (kind === 'rows' ? String(x + 1) : T.col(x)));
          yield { elim, text: `${kind[0].toUpperCase()}${kind.slice(1)} ${xs.join(' and ')} still need someone, and only ${T.people(who)} can get there. So ${T.people(who)} are in ${kind} ${xs.join(' and ')}.` };
        }
      }
    }
  }

  // Someone who can only be in one room is surely there. Use that for the room rules.
  function* confinedRooms(s) {
    const free = unplaced(s);
    const sureIn = p => {
      if (s.pos[p] >= 0) return area[s.pos[p]];
      const as = new Set([...s.cand[p]].map(i => area[i]));
      return as.size === 1 ? [...as][0] : null;
    };
    const sure = level.people.map((_, p) => sureIn(p));
    // A person who must be alone stays out of a room someone else surely is in.
    for (const p of free) {
      if (!alone[p]) continue;
      for (let q = 0; q < P; q++) {
        if (q === p || sure[q] === null || s.pos[q] >= 0) continue;
        const elim = [...s.cand[p]].filter(i => area[i] === sure[q]).map(i => [p, i]);
        if (elim.length) yield { elim, text: `${T.name(q)} can only be in ${T.room([...s.cand[q]][0])}. ${T.name(p)} was alone in a room. So ${T.name(p)} is not there.` };
      }
    }
    // The victim's room holds exactly two: once two are sure, nobody else goes in.
    const v = sure[victim];
    if (v !== null) {
      const mates = level.people.map((_, q) => q).filter(q => q !== victim && sure[q] === v);
      if (mates.length === 1) {
        const elim = [];
        for (const q of free) if (q !== mates[0] && q !== victim) for (const i of s.cand[q]) if (area[i] === v) elim.push([q, i]);
        if (elim.length) {
          yield { elim, text: `${T.name(victim)} and ${T.name(mates[0])} are surely in ${T.room(s.pos[victim] >= 0 ? s.pos[victim] : [...s.cand[victim]][0])}. The victim was alone with the murderer. So nobody else is there.` };
        }
      }
    }
  }

  // The first move a technique finds, or null.
  const first = gen => { const r = gen.next(); return r.done ? null : r.value; };

  const EASY = [single, onlyInLine, roomRules];

  // Techniques by weight: one rule first, then two rules together, then rarer
  // patterns, then tries. Within a level the step that crosses out most cells wins.
  const TIERS = [
    [zeroFacts, claimLine, single, onlyInLine, twoCellCross],
    [countLines, lineFish, roomRules, confinedRooms, personNeeds, lineNeeds, lineGroups],
    [hiddenGroups],
    [tryCells],
    ...(deep ? [[deepTry]] : []),
  ];
  // How many cells a move leaves without anybody who can stand there.
  const crossedBy = (st, m) => {
    const open = t => { const o = new Set(); t.cand.forEach((c, p) => { if (t.pos[p] < 0) c.forEach(i => o.add(i)); }); return o; };
    const before = open(st);
    const t = clone(st);
    apply(t, m);
    const after = open(t);
    let k = 0;
    for (const i of before) if (!after.has(i) && !t.pos.includes(i)) k++;
    return k;
  };
  // The best move of the first level that has any.
  // ok: only moves that pass this test (e.g. leave a person at most 5 cells).
  // maxTier: stop before tries (3) when a simpler step may still come.
  const bestMove = (st, ok = () => true, maxTier = Infinity) => {
    for (const [lvl, tier] of TIERS.entries()) {
      if (lvl > maxTier) break;
      const moves = [];
      const cap = lvl >= 3 ? 1 : 40; // tries are slow: take the first
      for (const t of tier) { for (const m of t(st)) { if (!ok(m)) continue; moves.push(m); if (moves.length >= cap) break; } if (moves.length >= cap) break; }
      if (!moves.length) continue;
      let best = moves[0], score = -1;
      for (const m of moves) { const c = crossedBy(st, m); if (c > score) { best = m; score = c; } }
      return best;
    }
    return null;
  };
  const TECHNIQUES = TIERS.flat();

  // Follow the easy steps until something breaks. trail collects the forced placements.
  function settle(s, trail = []) {
    for (let guard = 0; guard < 500; guard++) {
      const why = broken(s);
      if (why) return why;
      let move = null;
      for (const t of EASY) if ((move = first(t(s)))) break;
      if (!move) return null;
      if (move.place) trail.push(`${T.name(move.place.p)} must stand on ${T.cell(move.place.i)}`);
      apply(s, move);
    }
    return null;
  }

  // Try each cell of one person. Cells that break are out.
  function* tryCells(s) {
    const free = unplaced(s).sort((a, b) => s.cand[a].size - s.cand[b].size);
    for (const p of free) {
      const bad = [];
      let example = null;
      for (const i of s.cand[p]) {
        const t = clone(s);
        apply(t, { place: { p, i } });
        const trail = [];
        const why = settle(t, trail);
        // Prefer the shortest chain as the example: it is the easiest to follow.
        if (why) { bad.push(i); if (!example || trail.length < example.trail.length) example = { i, why, trail }; }
      }
      if (bad.length) {
        const cells = bad.map(T.cell);
        // Tell the chain forward: what would follow, and what breaks.
        const chain = [...example.trail.slice(0, 3), example.why].join(', then ');
        const head = `If ${T.name(p)} stood on ${T.cell(example.i)}, then ${chain}.`;
        const text = bad.length === 1
          ? `${head} So ${T.name(p)} is not on ${cells[0]}.`
          : `${head} The same happens on ${listText(cells.filter(c => c !== T.cell(example.i)))}. So ${T.name(p)} is not on ${listText(cells)}.`;
        yield { elim: bad.map(i => [p, i]), text };
      }
    }
  }

  // Last resort: the full solver says a cell leads nowhere.
  function* deepTry(s) {
    const free = unplaced(s).sort((a, b) => s.cand[a].size - s.cand[b].size);
    for (const p of free) {
      for (const i of s.cand[p]) {
        const restrict = s.cand.map((c, q) => (q === p ? new Set([i]) : c));
        if (solve(level, blocking, { limit: 1, restrict }).count === 0) {
          yield { elim: [[p, i]], text: `Suppose ${T.name(p)} stood on ${T.cell(i)}. Then the others can not all be placed by the rules (it is a long chain). So ${T.name(p)} is not on ${T.cell(i)}.` };
        }
      }
    }
  }

  // ---- run ----

  const steps = [];
  const s = { pos: new Array(P).fill(-1), cand: [] };
  for (let p = 0; p < P; p++) {
    const c = new Set();
    for (let i = 0; i < N; i++) if (!blocking.has(level.objects[i])) c.add(i);
    s.cand.push(c);
  }
  // Start from the player's board: their people, crosses and "cannot be here" notes.
  const known = new Set(); // cells the player already sees as empty
  if (start) {
    for (let p = 0; p < P; p++) for (const i of start.out[p] || []) s.cand[p].delete(i);
    for (const i of start.crossed) { known.add(i); for (const c of s.cand) c.delete(i); }
    start.pos.forEach((i, p) => { if (i >= 0) apply(s, { place: { p, i } }); });
    start.pos.forEach(i => { if (i < 0) return; for (let j = 0; j < N; j++) if (row(j) === row(i) || col(j) === col(i)) known.add(j); });
  }
  const done = () => steps.length >= limit;

  // 1. What each person's own clues and rules allow.
  const firstDomains = [];
  for (let p = 0; p < P; p++) {
    const mine = level.clues.filter(cl => cl.p === p && UNARY.includes(cl.t));
    const cells = [...s.cand[p]].filter(i => cellOk(level, blocking, p, i) && mine.every(cl => unaryOk(level, blocking, cl, i)));
    if (cells.length === s.cand[p].size) continue;
    const reasons = mine.map(T.clue);
    if (hasRule(level, 'ranks')) {
      const r = level.rank[p];
      if (r === 'noble') reasons.push(`${T.name(p)} is a noble, so they stand in a court room.`);
      if (r === 'commoner') reasons.push(`${T.name(p)} is a commoner, so they never stand in a court room.`);
    }
    if (tags.some(t => t?.startsWith('t:') && t.slice(2) !== level.trade?.[p])) {
      reasons.push(level.trade?.[p] ? `Work spots of other trades are closed to ${T.name(p)}.` : `${T.name(p)} has no trade, so all work spots are closed to them.`);
    }
    if (p === victim && level.sea >= 0) reasons.push(`The victim was with the murderer, so not in the sea.`);
    firstDomains.push({ p, cells, reasons });
  }
  firstDomains.sort((a, b) => a.cells.length - b.cells.length);
  // A hint about one person is only worth it when they have at most 5 cells left after it.
  const MAX_CELLS = 5;
  const leftAfter = m => {
    if (m.allowed) return { p: m.allowed.p, left: m.allowed.cells.length };
    if (!m.elim) return null;
    const ps = new Set(m.elim.map(([q]) => q));
    if (ps.size !== 1) return null;
    const [p] = ps;
    return { p, left: s.cand[p].size - m.elim.length };
  };
  const worthIt = m => { const a = leftAfter(m); return !a || a.left <= MAX_CELLS; };
  const keepGood = list => (list.some(worthIt) ? list.filter(worthIt) : list);
  let vagueClues = []; // clue steps with more than 5 cells: shown only before tries
  if (options && firstDomains.length) {
    // Each person's own clues: all independent next steps.
    const list = firstDomains.map(d => ({ ...withClaim(s, { allowed: { p: d.p, cells: d.cells },
      text: `${d.reasons.join(' ')} So ${T.name(d.p)} can only be on the marked cells.` }), before: snap(s) }));
    // "Nobody" facts first. Too vague (more than 5 cells left)? Then look for better steps first.
    const zero = [...zeroFacts(s)].map(m => ({ ...m, before: snap(s) }));
    if (zero.length || list.some(worthIt)) return [...zero, ...list.filter(worthIt)];
    vagueClues = list.filter(m => m.allowed.cells.length < s.cand[m.allowed.p].size)
      .sort((a, b) => a.allowed.cells.length - b.allowed.cells.length);
  }
  // A clue step for one person, on top of what is known now (null if it adds nothing).
  const clueMove = d => {
    const cells = d.cells.filter(i => s.cand[d.p].has(i));
    if (s.pos[d.p] >= 0 || cells.length === s.cand[d.p].size) return null;
    return withClaim(s, { allowed: { p: d.p, cells }, reason: d.reasons.join(' '), text: `${d.reasons.join(' ')} So ${T.name(d.p)} can only be on the marked cells.` });
  };
  // "Nobody" facts first: they cross out cells right away.
  if (!options) for (const m of [...zeroFacts(s)]) { steps.push({ ...m, before: snap(s) }); apply(s, m); m.cross.forEach(i => known.add(i)); }
  // Clue steps that leave more than 5 cells wait until other steps make them sharper.
  const deferred = [];
  for (const d of firstDomains) {
    if (done()) return steps;
    const move = clueMove(d);
    if (!move) continue;
    if (!options && move.allowed.cells.length > MAX_CELLS) { deferred.push(d); continue; }
    steps.push({ ...move, before: snap(s) });
    apply(s, move);
    (move.cross || []).forEach(i => known.add(i)); // already crossed: not again later
  }

  // 2. Cells nobody can use.
  const used = new Set();
  for (const c of s.cand) for (const i of c) used.add(i);
  const empty = [...Array(N).keys()].filter(i => !blocking.has(level.objects[i]) && !used.has(i) && !known.has(i) && !s.pos.includes(i));
  if (empty.length && !done()) steps.push({ cross: empty, before: snap(s), text: 'Nobody can stand on these cells. Cross them out.' });
  if (options) {
    if (steps.length && !firstDomains.length) return steps;
    if (firstDomains.length) {
      // Only vague clue steps so far: apply them quietly and look for sharper ones.
      for (const d of firstDomains) apply(s, { allowed: { p: d.p, cells: d.cells } });
    }
    // All moves from the start board, easy techniques first. Tries only when nothing easier is left.
    const seen = new Set();
    const key = m => JSON.stringify(m.place || m.elim);
    const collect = (techs, max) => {
      const out = [];
      for (const t of techs) {
        for (const m of t(s)) {
          if (seen.has(key(m))) continue;
          seen.add(key(m));
          out.push({ ...m, before: snap(s) });
          if (out.length >= max) return out;
        }
      }
      return out;
    };
    // Easy steps sorted by weight: level first, then most crossed-out cells.
    const tierOf = new Map();
    TIERS.slice(0, 3).forEach((tier, lvl) => tier.forEach(t => tierOf.set(t, lvl)));
    const easyRaw = [];
    for (const t of TIERS.slice(0, 3).flat()) for (const m of collect([t], 30)) easyRaw.push({ m, lvl: tierOf.get(t), c: crossedBy(s, m) });
    easyRaw.sort((a, b) => a.lvl - b.lvl || b.c - a.c);
    const easy = keepGood(easyRaw.map(x => x.m));
    if (easy.some(worthIt)) return easy;
    // A plain clue step (even with many cells) is easier than a try.
    if (vagueClues.length) return vagueClues;
    const tries = collect([tryCells], 8);
    if (tries.some(worthIt)) return tries.filter(worthIt);
    if (easy.length) return easy;
    if (tries.length) return tries;
    if (steps.length) return steps; // only vague steps were found: better than nothing
    return collect(deep ? [deepTry] : [], 1);
  }

  // 3. Loop until everyone is placed.
  // A waiting clue step that is sharp enough now (5 cells or fewer), else null.
  // last: take the sharpest one anyway.
  const takeDeferred = last => {
    let best = null, bi = -1;
    for (let k = deferred.length - 1; k >= 0; k--) {
      const m = clueMove(deferred[k]);
      if (!m) { deferred.splice(k, 1); continue; }
      if (!best || m.allowed.cells.length < best.allowed.cells.length) { best = m; bi = k; }
    }
    if (!best || (!last && best.allowed.cells.length > MAX_CELLS)) return null;
    deferred.splice(bi, 1);
    return best;
  };
  // Clues used quietly (more than 5 cells): told in the first step about that person.
  const pending = new Map();
  // People a step is about, or whose limits it relies on.
  const involved = m => new Set([m.allowed?.p, m.place?.p, ...(m.elim || []).map(([q]) => q), ...(m.uses || [])].filter(q => q !== undefined));
  for (let guard = 0; guard < 2000 && unplaced(s).length && !done(); guard++) {
    // Order: sharp clue step, simple step, any clue step (quietly), then tries.
    let move = takeDeferred(false) || bestMove(s, worthIt, 2);
    if (!move) {
      const vague = takeDeferred(true);
      if (vague) {
        if (vague.allowed.cells.length > MAX_CELLS) { apply(s, vague); pending.set(vague.allowed.p, vague.reason); continue; }
        move = vague;
      }
    }
    move = move || bestMove(s, () => true, 2) || bestMove(s);
    if (!move) break;
    move = withClaim(s, move);
    // A step that explains itself takes the quiet clues it needs.
    if (move.explain) move = { ...move, text: move.explain(pending) };
    const recall = [];
    if (!move.explain) for (const q of involved(move)) if (pending.has(q)) { recall.push(pending.get(q)); pending.delete(q); }
    if (recall.length) move = { ...move, text: `Remember: ${recall.join(' ')} ${move.text}` };
    steps.push({ ...move, before: snap(s) });
    apply(s, move);
    (move.cross || []).forEach(i => known.add(i)); // already crossed: not again later
  }

  // 4. Name the murderer.
  if (!unplaced(s).length && !done()) {
    const k = murdererOf(level, s.pos);
    if (k >= 0) {
      steps.push({
        before: snap(s), done: true,
        text: `Everyone is placed. ${T.name(victim)} is in ${T.room(s.pos[victim])} with only ${T.name(k)}. So ${T.name(k)} did it.`,
      });
    }
  }
  return steps;
}

function combos(arr, k, start = 0, pick = [], out = []) {
  if (pick.length === k) { out.push(pick.slice()); return out; }
  for (let j = start; j < arr.length; j++) { pick.push(arr[j]); combos(arr, k, j + 1, pick, out); pick.pop(); }
  return out;
}

function listText(items) {
  return items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

// Plain text helpers, for checks where nobody reads the text.
function plainText(level) {
  const n = level.size;
  return {
    name: p => level.people[p].name, cell: i => String(i), col: c => String(c),
    room: i => String(level.rooms[i]), rooms: () => '', clue: () => '', people: () => '', fact: () => '',
  };
}

// True if the deduction solves the case with easy steps and short tries,
// without the long-chain fallback.
function isDeducible(level, blocking) {
  const steps = deduce(level, blocking, plainText(level), { deep: false });
  const last = steps[steps.length - 1];
  return !!last?.done && last.before.pos.every((i, p) => i === level.solution[p]);
}

// ---- js/generator.js ----
// Level generator. Used by tools/generate.mjs and by the browser
// for player-made cases.
//
// Each level has exactly one solution. The step-by-step deduction in
// js/hints.js must solve it without a long search.


const SIZES = [4, 5, 6, 7, 8, 9, 10, 11, 12];

// Rooms per board size. Never more than n.
const ROOMS = { 4: 3, 5: 4, 6: 5, 7: 5, 8: 6, 9: 7, 10: 8, 11: 8, 12: 9 };
const MIN_ROOM = 3;

// Search budget per size. Lower means easier puzzles.
const BUDGET = { 4: 40, 5: 80, 6: 150, 7: 300, 8: 600, 9: 1200, 10: 2500, 11: 4000, 12: 6000 };

function rng(seed) {
  let a = seed >>> 0;
  const next = () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  next.int = k => Math.floor(next() * k);
  next.pick = arr => arr[next.int(arr.length)];
  next.shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = next.int(i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  return next;
}

// Split the board into rectangles, then merge some for L-shapes.
function makeRooms(n, count, R) {
  let rects = [{ r: 0, c: 0, h: n, w: n }];
  const extra = n >= 6 ? R.int(3) : 0;
  while (rects.length < count + extra) {
    // Always split the biggest room, near its middle.
    const x = rects.reduce((a, b) => (b.h * b.w > a.h * a.w || (b.h * b.w === a.h * a.w && R() < 0.5) ? b : a));
    const near = (k, len) => k >= len / 3 && k <= (2 * len) / 3;
    const cuts = [];
    for (let k = 1; k < x.h; k++) if (near(k, x.h) && k * x.w >= MIN_ROOM && (x.h - k) * x.w >= MIN_ROOM) cuts.push(['h', k]);
    for (let k = 1; k < x.w; k++) if (near(k, x.w) && k * x.h >= MIN_ROOM && (x.w - k) * x.h >= MIN_ROOM) cuts.push(['w', k]);
    if (!cuts.length) break;
    // Cut across the long side more often.
    const long = cuts.filter(([d]) => (d === 'h') === (x.h >= x.w));
    const [d, k] = R.pick(long.length && R() < 0.75 ? long : cuts);
    rects = rects.filter(y => y !== x);
    if (d === 'h') rects.push({ ...x, h: k }, { ...x, r: x.r + k, h: x.h - k });
    else rects.push({ ...x, w: k }, { ...x, c: x.c + k, w: x.w - k });
  }
  const rooms = new Array(n * n);
  rects.forEach((x, k) => {
    for (let r = x.r; r < x.r + x.h; r++) for (let c = x.c; c < x.c + x.w; c++) rooms[r * n + c] = k;
  });
  // Merge the smallest room into its smallest neighbor until we have `count`.
  // This makes L-shapes and keeps sizes even.
  let total = rects.length;
  while (total > count) {
    const size = new Map();
    rooms.forEach(k => size.set(k, (size.get(k) || 0) + 1));
    const ids = R.shuffle([...size.keys()]).sort((a, b) => size.get(a) - size.get(b));
    const a = ids[0];
    const nb = new Set();
    for (let i = 0; i < n * n; i++) if (rooms[i] === a) for (const j of neighbors(i, n)) if (rooms[j] !== a) nb.add(rooms[j]);
    const b = [...nb].sort((x, y) => size.get(x) - size.get(y))[0];
    for (let i = 0; i < n * n; i++) if (rooms[i] === a) rooms[i] = b;
    total--;
  }
  // Renumber 0..count-1.
  const map = new Map();
  return rooms.map(k => { if (!map.has(k)) map.set(k, map.size); return map.get(k); });
}

// Merge rooms into one sea until it covers about a third of the board.
// At least 2 rooms stay dry. Returns the new rooms and the sea room id.
function makeSea(n, rooms, R) {
  const size = new Map();
  rooms.forEach(k => size.set(k, (size.get(k) || 0) + 1));
  const ids = [...size.keys()];
  const first = ids.reduce((a, b) => (size.get(b) > size.get(a) ? b : a));
  const sea = new Set([first]);
  let total = size.get(first);
  while (total < 0.35 * n * n && ids.length - sea.size > 2) {
    const nb = new Set();
    for (let i = 0; i < n * n; i++) if (sea.has(rooms[i])) for (const j of neighbors(i, n)) if (!sea.has(rooms[j])) nb.add(rooms[j]);
    if (!nb.size) break;
    const k = R.pick([...nb]);
    sea.add(k);
    total += size.get(k);
  }
  const map = new Map();
  const out = rooms.map(k => (sea.has(k) ? first : k)).map(k => { if (!map.has(k)) map.set(k, map.size); return map.get(k); });
  return { rooms: out, sea: map.get(first) };
}

function makeObjects(n, rooms, theme, R) {
  const ids = Object.keys(theme.objects);
  const spots = ids.filter(id => theme.objects[id].spot);
  const blocks = ids.filter(id => !theme.objects[id].spot);
  const objects = new Array(n * n).fill(null);
  for (let i = 0; i < n * n; i++) {
    const x = R();
    if (x < 0.17) objects[i] = R.pick(blocks);
    else if (x < 0.31) objects[i] = R.pick(spots);
  }
  // Each room keeps at least 2 free cells.
  const roomCount = Math.max(...rooms) + 1;
  for (let k = 0; k < roomCount; k++) {
    const cells = rooms.map((x, i) => x === k ? i : -1).filter(i => i >= 0);
    let free = cells.filter(i => !blocks.includes(objects[i]));
    while (free.length < 2) {
      const i = R.pick(cells.filter(i => blocks.includes(objects[i])));
      objects[i] = null;
      free.push(i);
    }
  }
  return objects;
}

// One door for each pair of rooms that touch (not the sea), and some windows
// in the outer wall (not at sea).
function makeDoorsAndWindows(n, rooms, sea, R) {
  const walls = new Map(); // "a-b" -> list of [i, j]
  for (let i = 0; i < n * n; i++) {
    for (const j of [i % n < n - 1 ? i + 1 : -1, i + n < n * n ? i + n : -1]) {
      if (j < 0 || rooms[i] === rooms[j] || rooms[i] === sea || rooms[j] === sea) continue;
      const key = [rooms[i], rooms[j]].sort((a, b) => a - b).join('-');
      if (!walls.has(key)) walls.set(key, []);
      walls.get(key).push([i, j]);
    }
  }
  const doors = [...walls.keys()].sort().map(k => R.pick(walls.get(k)));
  const edge = [];
  for (let i = 0; i < n * n; i++) {
    if (rooms[i] === sea) continue;
    const r = Math.floor(i / n), c = i % n;
    for (const [side, ok] of [['t', r === 0], ['b', r === n - 1], ['l', c === 0], ['r', c === n - 1]]) if (ok) edge.push([i, side]);
  }
  const windows = R.shuffle(edge).slice(0, Math.max(2, Math.round(n * 0.6))).sort((a, b) => a[0] - b[0]);
  return { doors, windows };
}

// Random placement: one person per row and column, on free cells.
// noTouch: people in rows next to each other never touch at a corner.
function makePlacement(n, objects, blocking, R, noTouch = false) {
  const cols = new Array(n).fill(-1);
  const used = new Array(n).fill(false);
  function go(r) {
    if (r === n) return true;
    for (const c of R.shuffle([...Array(n).keys()])) {
      if (used[c] || blocking.has(objects[r * n + c])) continue;
      if (noTouch && r > 0 && Math.abs(cols[r - 1] - c) === 1) continue;
      used[c] = true; cols[r] = c;
      if (go(r + 1)) return true;
      used[c] = false;
    }
    return false;
  }
  if (!go(0)) return null;
  return cols.map((c, r) => r * n + c);
}

function candidateClues(level, pos, area, R) {
  const n = level.size, out = [];
  const roomCount = Math.max(...level.rooms) + 1;
  pos.forEach((i, p) => {
    const k = level.rooms[i];
    out.push({ p, t: 'room', v: k });
    const others = [...Array(roomCount).keys()].filter(x => x !== k);
    for (const x of R.shuffle(others).slice(0, 2)) out.push({ p, t: 'notRoom', v: x });
    const obj = level.objects[i];
    if (obj) out.push({ p, t: 'on', v: obj });
    // "Next to" only counts objects in the same room.
    const near = new Set(neighbors(i, n).filter(j => level.rooms[j] === level.rooms[i]).map(j => level.objects[j])
      .filter(o => o && o !== level.objects[i]));
    for (const id of near) out.push({ p, t: 'next', v: id });
    // Doors and windows.
    if ((level.doors || []).some(d => d.includes(i))) out.push({ p, t: 'door' });
    if ((level.windows || []).some(([w]) => w === i)) out.push({ p, t: 'window' });
    out.push({ p, t: 'row', v: Math.floor(i / n) });
    out.push({ p, t: 'col', v: i % n });
    const mates = pos.map((j, q) => q).filter(q => q !== p && area[pos[q]] === area[i]);
    if (!mates.length) out.push({ p, t: 'alone' });
    // No "same room" clue with the victim: it would name the murderer.
    const victimIdx = level.people.findIndex(x => x.victim);
    for (const q of mates) if (q > p && p !== victimIdx && q !== victimIdx) out.push(R() < 0.5 ? { p, t: 'same', v: q } : { p: q, t: 'same', v: p });
  });
  if (level.tasks) {
    // Task clues: "was a hunter", "was a hunter or a gatherer", "had no task".
    const ids = level.tasks.map(([id]) => id);
    pos.forEach((i, p) => {
      const tag = level.tags[i];
      if (tag?.startsWith('k:')) {
        const id = tag.slice(2);
        out.push({ p, t: 'task', v: id });
        const other = ids.filter(x => x !== id);
        if (other.length) out.push({ p, t: 'taskEither', v: [id, R.pick(other)].sort() });
      } else out.push({ p, t: 'noTask' });
    });
  }
  if (level.bandits) {
    const B = new Set(level.banditSol);
    pos.forEach((i, p) => {
      if (B.has(p)) out.push({ p, t: 'bandit' });
      else if (!level.people[p].victim) out.push({ p, t: 'notBandit' });
      if ([...B].some(b => b !== p && area[pos[b]] === area[i])) out.push({ p, t: 'withBandit' });
    });
  }
  return out;
}

// Kinds of case facts.
const FACT_KINDS = ['onCount', 'nextCount', 'roomCount', 'furniture', 'edge', 'corner', 'doorCount', 'windowCount', 'alone', 'emptyRooms', 'touch', 'apart'];

// Case facts that hold for the solution. `kinds`: allowed kinds.
// At least one of each kind in `must`, then more up to 3.
function candidateFacts(level, pos, blocking, kinds, must, R) {
  const out = [];
  const add = f => { if (kinds.includes(f.t)) out.push({ ...f, k: f.t === 'apart' ? undefined : factValue(level, f, pos) }); };
  for (const id of new Set(level.objects.filter(Boolean))) {
    if (!blocking.has(id)) add({ t: 'onCount', v: id });
    add({ t: 'nextCount', v: id });
  }
  for (const k of new Set(level.rooms)) if (k !== level.sea) add({ t: 'roomCount', v: k });
  for (const t of ['furniture', 'edge', 'corner', 'alone', 'emptyRooms', 'touch']) add({ t });
  if (level.doors?.length) add({ t: 'doorCount' });
  if (level.windows?.length) add({ t: 'windowCount' });
  for (const g of ['rank', 'trade']) {
    const f = { t: 'apart', v: g };
    if (pos.some((_, p) => groupOf(level, f, p)) && factValue(level, f, pos)) add(f);
  }
  R.shuffle(out);
  const picked = [];
  for (const kind of must) { const f = out.find(x => x.t === kind); if (f) picked.push(f); }
  for (const f of out) if (picked.length < Math.max(3, must.length) && !picked.includes(f)) picked.push(f);
  return picked.map(f => (f.k === undefined ? { t: f.t, v: f.v } : f));
}

// Order in which clues are tried for removal. Plain clues go first,
// so the kept clues are the more interesting ones.
const DROP_ORDER = { door: 3, window: 3, row: 0, col: 0, room: 1, notRoom: 2, notBandit: 2, noTask: 2, on: 3, next: 3, same: 3, alone: 3, bandit: 3, withBandit: 3, task: 3, taskEither: 3 };

// Add the data for special rules to a level. Uses the solution `pos`.
function addRules(level, rules, pos, area, blocking, R) {
  const n = level.size, { rooms, objects, sea } = level;
  const has = r => rules.includes(r);
  const roomCount = Math.max(...rooms) + 1;
  const occupied = new Set(pos);
  const perArea = new Map();
  pos.forEach(i => perArea.set(area[i], (perArea.get(area[i]) || 0) + 1));
  const plain = i => !objects[i] && rooms[i] !== sea;
  const tags = new Array(n * n).fill(null);
  const roomsWithPeople = [...new Set(pos.map(i => rooms[i]))].filter(k => k !== sea);

  if (has('ranks')) {
    const count = Math.max(1, Math.floor((roomCount - (sea >= 0 ? 1 : 0)) / 3));
    level.court = R.shuffle(roomsWithPeople.slice()).slice(0, count).sort((a, b) => a - b);
    level.rank = pos.map(i => (level.court.includes(rooms[i])
      ? (R() < 0.65 ? 'noble' : 'knight')
      : (R() < 0.65 ? 'commoner' : 'knight')));
  }
  if (has('trades')) {
    const used = R.shuffle(TRADES.map(t => t.id)).slice(0, n <= 6 ? 3 : n <= 9 ? 4 : 5);
    level.trade = pos.map(() => (R() < 0.5 ? R.pick(used) : null));
    pos.forEach((i, p) => { if (level.trade[p] && plain(i) && R() < 0.6) tags[i] = `t:${level.trade[p]}`; });
    for (let i = 0; i < n * n; i++) if (!occupied.has(i) && plain(i) && R() < 0.12) tags[i] = `t:${R.pick(used)}`;
  }
  if (has('glyphs')) {
    pos.forEach(i => { if (!tags[i] && plain(i) && R() < 0.4) tags[i] = perArea.get(area[i]) === 1 ? 'lone' : 'crowd'; });
    for (let i = 0; i < n * n; i++) if (!occupied.has(i) && !tags[i] && plain(i) && R() < 0.08) tags[i] = R() < 0.5 ? 'lone' : 'crowd';
  }
  if (has('tasks')) {
    // Hidden tasks: some people stand on task spots, more spots stay empty.
    const used = R.shuffle(TRADES.map(t => t.id)).slice(0, n <= 6 ? 2 : n <= 9 ? 3 : 4);
    const counts = new Map(used.map(id => [id, 0]));
    pos.forEach(i => {
      if (!tags[i] && plain(i) && R() < 0.3) { const id = R.pick(used); tags[i] = `k:${id}`; counts.set(id, counts.get(id) + 1); }
    });
    for (const id of used) {
      const spare = [...Array(n * n).keys()].filter(i => !occupied.has(i) && !tags[i] && plain(i));
      for (const i of R.shuffle(spare).slice(0, 1 + R.int(3))) tags[i] = `k:${id}`;
    }
    level.tasks = used.filter(id => counts.get(id) > 0).map(id => [id, counts.get(id)]);
    if (!level.tasks.length) return false;
    // Spots of a task nobody does: drop them.
    tags.forEach((t, i) => { if (t?.startsWith('k:') && !counts.get(t.slice(2))) tags[i] = null; });
  }
  if (has('trades') || has('glyphs') || has('tasks')) level.tags = tags;
  if (has('fullhouse')) {
    // Every land room must hold someone in the solution.
    const used = new Set(pos.map(i => rooms[i]));
    if ([...new Set(rooms)].some(k => k !== sea && !used.has(k))) return false;
  }
  if (has('couples')) {
    // Pairs that already stand diagonally next to each other in one room.
    // Never the victim or the murderer: their room holds just the two of them,
    // so a partner of either would give the murderer away (or not fit).
    const victim = level.people.findIndex(x => x.victim);
    const killer = pos.findIndex((i, q) => q !== victim && area[i] === area[pos[victim]]);
    const pairs = [];
    pos.forEach((i, p) => pos.forEach((j, q) => {
      if (q > p && ![p, q].some(x => x === victim || x === killer) && area[i] === area[j] &&
        Math.abs(Math.floor(i / n) - Math.floor(j / n)) === 1 && Math.abs((i % n) - (j % n)) === 1) pairs.push([p, q]);
    }));
    const taken = new Set();
    level.couples = [];
    for (const [p, q] of R.shuffle(pairs)) {
      if (taken.has(p) || taken.has(q) || level.couples.length >= (n >= 9 ? 3 : n >= 6 ? 2 : 1)) continue;
      level.couples.push([p, q]); taken.add(p); taken.add(q);
    }
    if (!level.couples.length) return false;
  }
  if (has('parity')) {
    const count = k => pos.filter(i => rooms[i] === k).length;
    const land = [...new Set(rooms)].filter(k => k !== sea);
    level.parity = R.shuffle(land).slice(0, Math.min(land.length, n >= 9 ? 3 : 2))
      .sort((a, b) => a - b).map(k => [k, count(k) % 2 ? 'odd' : 'even']);
  }
  if (has('river')) {
    // A river that winds: it moves left or right by up to 2 cells per step.
    const dir = R() < 0.5 ? 'v' : 'h';
    // Keep it away from the edges, so both sides matter.
    const lo = n >= 6 ? 2 : 1, hi = n >= 6 ? n - 2 : n - 1;
    const cut = [lo + R.int(hi - lo + 1)];
    for (let k = 1; k < n; k++) cut.push(Math.min(hi, Math.max(lo, cut[k - 1] + R.int(5) - 2)));
    if (new Set(cut).size < 3) return false;
    const sideOf = i => (dir === 'v' ? (i % n < cut[Math.floor(i / n)] ? 0 : 1) : (Math.floor(i / n) < cut[i % n] ? 0 : 1));
    level.river = { dir, cut, first: pos.filter(i => sideOf(i) === 0).length };
  }
  if (has('bandits')) {
    const K = n <= 5 ? 1 : n <= 8 ? 2 : 3;
    const victim = level.people.findIndex(p => p.victim);
    const bandits = R.shuffle(pos.map((_, p) => p).filter(p => p !== victim)).slice(0, K);
    const clean = roomsWithPeople.filter(k => !bandits.some(b => rooms[pos[b]] === k));
    level.bandits = K;
    level.lawful = R.shuffle(clean).slice(0, n >= 9 ? 2 : 1).sort((a, b) => a - b);
    level.banditSol = bandits;
  }
  return true;
}

// A copy of the level without one special rule (and its clues and marks).
function withoutRule(level, rule) {
  const out = { ...level, rules: level.rules.filter(r => r !== rule) };
  if (rule === 'sea') out.sea = -1;
  if (rule === 'glyphs' && level.tags) out.tags = level.tags.map(t => (t === 'lone' || t === 'crowd' ? null : t));
  if (rule === 'trades' && level.tags) out.tags = level.tags.map(t => (t?.startsWith('t:') ? null : t));
  if (rule === 'couples') out.couples = [];
  if (rule === 'parity') out.parity = [];
  if (rule === 'river') out.river = null;
  if (rule === 'tasks') {
    out.tasks = [];
    if (level.tags) out.tags = level.tags.map(t => (t?.startsWith('k:') ? null : t));
    out.clues = level.clues.filter(c => !['task', 'taskEither', 'noTask'].includes(c.t));
  }
  if (rule === 'bandits') {
    out.bandits = 0;
    out.clues = level.clues.filter(c => !['bandit', 'notBandit', 'withBandit'].includes(c.t));
  }
  return out;
}

// True if the case still works: one solution, the stored one, and deducible step by step.
function works(level, blocking) {
  const res = solve(level, blocking, { limit: 2, maxNodes: 200000 });
  return !res.aborted && res.count === 1 && res.first.join() === level.solution.join() && isDeducible(level, blocking);
}

// True if the case needs this rule: without it, it does not work.
function ruleNeeded(level, rule, blocking) {
  return !works(withoutRule(level, rule), blocking);
}

// Drop every clue, couple and even/odd mark the case can do without.
// Afterwards each one left is needed. Fixed order, so it needs no random numbers.
function dropUnneeded(level, blocking) {
  // Repeat until nothing more can go: dropping one part can make another one redundant.
  for (let changed = true; changed;) {
    changed = false;
    for (const key of ['clues', 'facts', 'couples', 'parity']) {
      if (!level[key]) continue;
      for (const item of level[key].slice()) {
        const rest = level[key].filter(x => x !== item);
        if ((key === 'couples' || key === 'parity') && !rest.length) continue; // the rule itself stays
        if (key === 'clues' && lastClue(level, item, rest)) continue; // everyone keeps a clue
        if (works({ ...level, [key]: rest }, blocking)) { level[key] = rest; changed = true; }
      }
    }
  }
}

// True if the murderer can be named without solving the board:
//  - a "same room" clue links someone to the victim, or
//  - the victim's own clues allow one room only, and another person's
//    clues allow only that room too.
function murdererTooEasy(level, blocking) {
  const victim = level.people.findIndex(x => x.victim);
  if (level.clues.some(cl => cl.t === 'same' && (cl.p === victim || cl.v === victim))) return true;
  const area = areasOf(level), n = level.size;
  const UNARY = ['room', 'notRoom', 'on', 'next', 'row', 'col', 'bandit', 'task', 'taskEither', 'noTask', 'door', 'window'];
  const roomsOf = p => {
    const mine = level.clues.filter(cl => cl.p === p && UNARY.includes(cl.t));
    const out = new Set();
    for (let i = 0; i < n * n; i++) if (cellOk(level, blocking, p, i) && mine.every(cl => unaryOk(level, blocking, cl, i))) out.add(area[i]);
    return out;
  };
  const vRooms = roomsOf(victim);
  if (vRooms.size !== 1) return false;
  const [room] = vRooms;
  return level.people.some((_, q) => q !== victim && [...roomsOf(q)].every(a => a === room));
}

// True if `clue` is the last clue of a person who is not the victim.
// The victim always has the victim rule, so needs no clue.
function lastClue(level, clue, rest) {
  return !level.people[clue.p].victim && !rest.some(x => x.p === clue.p);
}

// People (not the victim) without any clue.
function peopleWithoutClue(level) {
  return level.people.map((x, p) => p).filter(p => !level.people[p].victim && !level.clues.some(cl => cl.p === p));
}

// Parts of a case that are not needed. Empty when every clue and rule counts.
function unneededParts(level, blocking) {
  const out = [];
  level.clues.forEach((cl, k) => {
    if (works({ ...level, clues: level.clues.filter((_, j) => j !== k) }, blocking)) out.push(`clue ${cl.p}:${cl.t}`);
  });
  (level.facts || []).forEach((f, k) => {
    if (works({ ...level, facts: level.facts.filter((_, j) => j !== k) }, blocking)) out.push(`fact ${f.t}`);
  });
  for (const key of ['couples', 'parity']) {
    if (!level[key] || level[key].length < 2) continue;
    level[key].forEach((item, k) => {
      if (works({ ...level, [key]: level[key].filter((_, j) => j !== k) }, blocking)) out.push(`${key} ${JSON.stringify(item)}`);
    });
  }
  for (const r of level.rules || []) if (!ruleNeeded(level, r, blocking)) out.push(`rule ${r}`);
  return out;
}

// facts: kinds of case facts the case must show (player-made cases).
// Without it, a campaign case gets up to 3 facts of any kind, or none.
function makeLevel(theme, n, seed, rules = [], facts = null) {
  const mustFacts = facts || [];
  const R = rng(seed);
  const blocking = blockingSet(theme);
  const hasSea = rules.includes('sea');
  for (let attempt = 0; attempt < 3000; attempt++) {
    let rooms = makeRooms(n, ROOMS[n] + (hasSea ? 1 : 0), R);
    let sea = -1;
    if (hasSea) ({ rooms, sea } = makeSea(n, rooms, R));
    const roomCount = Math.max(...rooms) + 1;
    const sizes = new Array(roomCount).fill(0);
    rooms.forEach(k => sizes[k]++);
    if (sizes.some(s => s < MIN_ROOM) || roomCount > n) continue;
    if (Math.max(...sizes.filter((_, k) => k !== sea)) > (2.2 * n * n) / roomCount) continue;
    const objects = makeObjects(n, rooms, theme, R);
    if (hasSea) rooms.forEach((k, i) => { if (k === sea) objects[i] = null; });
    const pos = makePlacement(n, objects, blocking, R, rules.includes('distance'));
    if (!pos) continue;

    // Areas: rooms, but each sea cell is its own area.
    const area = rooms.map((k, i) => (k === sea ? roomCount + i : k));

    // The victim shares an area with exactly one other person.
    const perArea = new Map();
    pos.forEach(i => perArea.set(area[i], (perArea.get(area[i]) || 0) + 1));
    const victims = pos.map((i, p) => p).filter(p => perArea.get(area[pos[p]]) === 2);
    if (!victims.length) continue;
    const victim = R.pick(victims);

    // Names come from their own random numbers, so the board does not depend on them.
    R.shuffle(new Array(12).fill(0)); // keeps the board numbers as they were
    const NR = rng(seed * 7919 + attempt);
    const names = castNames(theme, n, victim, NR.pick);
    const roomNames = R.shuffle(theme.rooms.slice()).slice(0, roomCount);
    if (hasSea) roomNames[sea] = theme.seaName || 'Open Sea';
    const { doors, windows } = makeDoorsAndWindows(n, rooms, sea, R);
    const level = {
      size: n, rooms, objects, roomNames, doors, windows,
      people: names.map((name, p) => (p === victim ? { name, victim: true } : { name })),
      clues: [], solution: pos,
    };
    if (rules.length) {
      level.rules = rules;
      level.sea = sea;
      if (!addRules(level, rules, pos, area, blocking, R)) continue;
    }

    level.facts = candidateFacts(level, pos, blocking, facts || FACT_KINDS, mustFacts, R);
    if (mustFacts.some(kind => !level.facts.some(f => f.t === kind))) continue;
    let clues = candidateClues(level, pos, area, R);
    level.clues = clues;
    const full = solve(level, blocking, { limit: 2, maxNodes: 200000 });
    if (full.count !== 1) continue;

    // Remove clues while the puzzle stays unique and easy enough.
    const order = R.shuffle(clues.slice()).sort((a, b) => DROP_ORDER[a.t] - DROP_ORDER[b.t]);
    for (const cl of order) {
      const rest = clues.filter(x => x !== cl);
      if (!rest.some(x => x.p === cl.p)) continue; // keep one clue per person
      level.clues = rest;
      const res = solve(level, blocking, { limit: 2, maxNodes: BUDGET[n] });
      if (res.count === 1 && !res.aborted) clues = rest;
    }
    level.clues = clues.sort((a, b) => a.p - b.p);
    // Every clue, couple and mark must be needed, and everyone keeps a clue.
    dropUnneeded(level, blocking);
    if (peopleWithoutClue(level).length) continue;
    // A last clue that was kept but is not needed: try another board.
    if (level.clues.some((cl, k) => {
      const rest = level.clues.filter((_, j) => j !== k);
      return lastClue(level, cl, rest) && works({ ...level, clues: rest }, blocking);
    })) continue;
    // The facts the player asked for must still be there.
    if (mustFacts.some(kind => !level.facts.some(f => f.t === kind))) continue;
    // Every special rule must matter.
    if (!rules.every(r => ruleNeeded(level, r, blocking))) continue;
    // Final proof: every clue, fact and rule is needed.
    if (unneededParts(level, blocking).length) continue;
    // The murderer must not be obvious before the board is solved.
    if (murdererTooEasy(level, blocking)) continue;
    // A player must be able to solve it step by step.
    if (!isDeducible(level, blocking)) continue;
    const check = solve(level, blocking, { limit: 2 });
    if (check.count !== 1) throw new Error('not unique');
    return level;
  }
  throw new Error(`no level for ${theme.id} ${n}`);
}


// ---- js/storage.js ----
// Save progress in localStorage. Never crash if storage is blocked.

const KEY = 'alibi-grid-v1';

function readAll() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
}

function writeAll(data) {
  try { localStorage.setItem(KEY, JSON.stringify(data)); } catch { /* ignore */ }
}

const levelKey = (themeId, index) => `${themeId}:${index}`;

function loadLevel(key) {
  return readAll().levels?.[key] || null;
}

function saveLevel(key, state) {
  const all = readAll();
  all.levels = { ...all.levels, [key]: state };
  writeAll(all);
}

function getSetting(name, fallback) {
  const v = readAll().settings?.[name];
  return v === undefined ? fallback : v;
}

function setSetting(name, value) {
  const all = readAll();
  all.settings = { ...all.settings, [name]: value };
  writeAll(all);
}

// ---- js/ui.js ----
// Small DOM helpers.

// el('div.card', { onclick }, child, 'text', ...)
function el(spec, props = {}, ...children) {
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
function showDialog({ title, body, buttons = [{ label: 'OK', value: true, primary: true }], wide = false, stack = false }) {
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
function personColor(letterIndex) {
  return `hsl(${PERSON_HUES[letterIndex % 12]} 65% 42%)`;
}

// Room hue: spread hues so neighbor rooms differ.
function roomHue(theme, k) {
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
function icon(name) {
  const span = el('span.icon', { 'aria-hidden': 'true' });
  span.innerHTML = `<svg viewBox="0 0 24 24">${ICONS[name]}</svg>`;
  return span;
}

// Copy text. Resolves true on success.
async function copyText(text) {
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
function encodeData(obj) {
  const bytes = new TextEncoder().encode(JSON.stringify(obj));
  let bin = '';
  bytes.forEach(b => { bin += String.fromCharCode(b); });
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function decodeData(text) {
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
function logo(cls = '', roomy = false) {
  const span = el(`span.logo${cls}`, { 'aria-hidden': cls ? 'true' : null });
  span.innerHTML = roomy
    ? LOGO.replace('viewBox="0 0 64 64"', 'viewBox="-12 -12 88 88"')
      .replace('</svg>', `<g class="lg-glass lg-sparks">${SPARKLES.map(star).join('')}</g></svg>`)
    : LOGO;
  return span;
}

// ---- js/game.js ----
// The game screen.


function showHelp() {
  return showDialog({
    title: 'How to play',
    body: el('div.help', {},
      el('p', {}, 'Someone was murdered. Every person on the list was somewhere in the building. Work out where.'),
      el('ol', {},
        el('li', {}, 'Each row and each column holds exactly one person.'),
        el('li', {}, 'Nobody stands on furniture like shelves or pianos. Chairs, seats, sofas and beds are fine.'),
        el('li', {}, 'Every clue is true. "Next to" means the cell above, below, left or right, in the same room. Walls block it. ',
          'Someone on a chair is never "next to a chair" (same for every object).'),
        el('li', {}, 'The murderer is the only person who was in the same room as the victim.')),
      el('p', {}, 'Some campaigns add special rules, like ranks, seals, trades, the sea or bandits. ',
        'A case shows its special rules above the list of people.'),
      el('h3', {}, 'Controls'),
      el('p.hint', {}, 'On a touch screen, tap instead of click.'),
      el('ul', {},
        el('li', {}, el('strong', {}, 'Click'), ' a cell (Default tool): note who can or can\'t be there.'),
        el('li', {}, el('strong', {}, 'Click'), ' a cell (Place tool): choose who stands there.'),
        el('li', {}, el('strong', {}, 'Click'), ' a cell (Cross out tool): cross it out or remove the cross.'),
        el('li', {}, el('strong', {}, 'Long press'), ' a cell: choose who stands there.'),
        el('li', {}, el('strong', {}, 'Right-click'), ' a cell: cross it out or remove the cross.'),
        el('li', {}, el('strong', {}, 'Drag'), ' a person onto cells: note them there. Pause on several cells to note them all (on touch: hold the card first).'),
        el('li', {}, el('strong', {}, 'Drag'), ' a placed person off the board: take them off.'),
        el('li', {}, el('strong', {}, 'Click'), ' a person: light up their cell and notes. Click again to turn it off.'),
        el('li', {}, 'While a person is selected: ', el('strong', {}, 'click'), ' a cell to note them there (click again to change or clear the note). ',
          'Click the person again to stop.'),
        el('li', {}, el('strong', {}, 'Double-click'), ' a person (or 🔍): mark on a board where they can or can\'t be.'),
        el('li', {}, el('strong', {}, 'Click'), ' a room or object in a clue: light it up on the board.'),
        el('li', {}, 'The boxes next to each row and column take notes too.'),
        el('li', {}, 'With "Show separate board for placing", the floor plan only shows who stands where. Everything else happens on the placing board below it.')),
    ),
  });
}

// custom: { id, data } for a player-made case. It has no campaign.
function renderGame(app, theme, campaign, index, shared = null, custom = null) {
  const level = decodeLevel(theme, campaign.levels[index]);
  const home = custom ? '#/' : `#/c/${theme.id}`;
  const homeName = custom ? 'Menu' : theme.title;
  const caseName = custom ? 'Your case' : `Case ${index + 1}`;
  const n = level.size;
  const P = level.people.length;
  const blocking = blockingSet(theme);
  const victim = victimIndex(level);
  const key = custom ? `x:${custom.id}` : levelKey(theme.id, index);
  // Letter: A, B, C, … for suspects, V for the victim (the first letter of the name).
  // Old links may have other names: then the letter follows the list order.
  const letter = p => {
    const ch = level.people[p].name[0];
    if (p === victim) return 'V';
    return /[A-K]/.test(ch) ? ch : 'ABCDEFGHIJKL'[p];
  };
  const color = p => personColor(p === victim ? 11 : 'ABCDEFGHIJKL'.indexOf(letter(p)));
  const tags = level.tags || [];
  const court = new Set(level.court || []);
  const lawful = new Set(level.lawful || []);

  // Icon and name for a cell mark (seal or work spot).
  function tagInfo(tag) {
    if (!tag) return null;
    if (tag.startsWith('t:')) {
      const t = tradeById(tag.slice(2));
      return { icon: t.icon, name: `${t.name.toLowerCase()} spot` };
    }
    if (tag.startsWith('k:')) {
      const t = tradeById(tag.slice(2));
      return { icon: t.icon, name: `${t.name.toLowerCase()} task spot` };
    }
    return GLYPHS[tag];
  }

  // Look of a mark: trade work spot, hidden task spot, or seal.
  const tagClass = tag => (tag.startsWith('t:') ? 'work' : tag.startsWith('k:') ? 'task' : 'seal');

  // Icon shown before a room name, if the room is special.
  function roomIcon(k) {
    if (k === level.sea) return SEA.icon;
    if (court.has(k)) return COURT.icon;
    if (lawful.has(k)) return LAWFUL.icon;
    return null;
  }

  // Doors (in walls between rooms) and windows (in the outer wall), drawn over the board.
  function featureSvg() {
    const parts = [];
    for (const [i, j] of level.doors || []) {
      const r = Math.floor(i / n), c = i % n;
      const [x1, y1, x2, y2] = j === i + 1 ? [c + 1, r + 0.22, c + 1, r + 0.78] : [c + 0.22, r + 1, c + 0.78, r + 1];
      parts.push(`<line class="door-gap" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/><line class="door" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`);
    }
    for (const [i, side] of level.windows || []) {
      const r = Math.floor(i / n), c = i % n, d = 0.05;
      const [x1, y1, x2, y2] = side === 't' ? [c + 0.2, d, c + 0.8, d] : side === 'b' ? [c + 0.2, n - d, c + 0.8, n - d]
        : side === 'l' ? [d, r + 0.2, d, r + 0.8] : [n - d, r + 0.2, n - d, r + 0.8];
      parts.push(`<line class="window" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/><line class="window-glass" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`);
    }
    if (!parts.length) return null;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'features');
    svg.setAttribute('viewBox', `0 0 ${n} ${n}`);
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = parts.join('');
    return svg;
  }

  // River rule: a blue line along the cell edges, drawn over the board.
  function riverSvg() {
    const rv = level.river;
    if (!rv || !level.rules.includes('river')) return null;
    const pts = [];
    rv.cut.forEach((c, k) => {
      if (rv.dir === 'v') pts.push(`${c},${k}`, `${c},${k + 1}`);
      else pts.push(`${k},${c}`, `${k + 1},${c}`);
    });
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'river');
    svg.setAttribute('viewBox', `0 0 ${n} ${n}`);
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = `<polyline class="river-bank" points="${pts.join(' ')}"/><polyline class="river-water" points="${pts.join(' ')}"/>`;
    return svg;
  }

  // Even & odd rule: the room's mark, or ''.
  const parityOf = new Map(level.parity || []);
  const parityTag = k => (parityOf.has(k) ? ` · ${parityOf.get(k)}` : '');

  // Room name with its icon and parity mark.
  function roomTitle(k) {
    const icon = roomIcon(k);
    return `${icon ? `${icon} ` : ''}${level.roomNames[k]}${parityTag(k)}`;
  }

  const saved = shared || loadLevel(key);
  const state = {
    pos: saved?.pos?.length === P ? saved.pos.slice() : new Array(P).fill(-1),
    marks: new Set(saved?.marks || []),
    // Notes: key -> Set of people. Keys: cell index, 'r<row>' or 'c<col>'.
    notes: new Map(Object.entries(saved?.notes || {}).map(([k, v]) => [k, new Set(v)])),
    // People who can not be there, per note key.
    nots: new Map(Object.entries(saved?.nots || {}).map(([k, v]) => [k, new Set(v)])),
    // Free text per note key.
    texts: new Map(Object.entries(saved?.texts || {})),
    solved: !!saved?.solved,
    selected: null,
    mode: 'note',
    highlight: null,
    history: [],
    future: [], // undone steps, for redo
  };
  // Options and their defaults.
  const OPTION_DEFAULTS = {
    shade: true,
    checks: false,
    hidePlaced: true, // hide the "can be here" dots of people who are already placed
    pulseHidden: false, // also blink cells whose dot is hidden (crossed, taken, placed elsewhere)
    split: false, // two boards: floor plan on top, placing board below
    showNots: false, // the whole "can't be here" feature: dots, dialog parts and hints
  };
  const assists = Object.fromEntries(Object.entries(OPTION_DEFAULTS).map(([k, v]) => [k, getSetting(k, v)]));

  function resetOptions() {
    for (const [k, v] of Object.entries(OPTION_DEFAULTS)) { assists[k] = v; setSetting(k, v); }
    draw();
    flash('Options are back to their defaults.');
  }
  const ZOOMS = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.15, 1.3, 1.5, 1.75, 2, 2.5, 3];
  // Each board has its own zoom: 'zoom' (floor plan) and 'zoomPlacing' (placing board in split view).
  const zooms = {};
  for (const key of ['zoom', 'zoomPlacing']) zooms[key] = ZOOMS.includes(getSetting(key, 1)) ? getSetting(key, 1) : 1;

  if (shared) persist();
  document.title = `${caseName} · ${theme.title}`;

  // ---- state changes ----

  function setsObject(map) {
    return Object.fromEntries([...map].map(([k, v]) => [k, [...v]]));
  }

  function current() {
    return {
      pos: state.pos.slice(), marks: [...state.marks], notes: setsObject(state.notes),
      nots: setsObject(state.nots), texts: Object.fromEntries(state.texts),
    };
  }

  function snapshot(prev = current()) {
    state.history.push(prev);
    if (state.history.length > 200) state.history.shift();
    state.future = [];
  }

  function persist() {
    saveLevel(key, { ...current(), solved: state.solved });
  }

  function personAt(i) {
    return state.pos.indexOf(i);
  }

  // ---- drag and drop ----

  // Drag a person from the list (or a token on the board) onto a cell.
  // Pointer events, so it works with mouse and touch.
  let justDragged = false;
  let pressed = false; // a long press just placed someone
  // fromBoard: dropping off the board removes the person.
  // hold: on touch, wait for a long press first, so a swipe still scrolls.
  // While dragging: a cell counts after a short pause on it (passing over does not).
  // Dropping notes "can be here" on every counted cell; a drag never places anyone.
  // A cell counts only while the pointer holds still on it; any movement restarts the wait.
  const DWELL = 450, STILL = 5;
  // Long press on a cell opens the place dialog: the ring shows after a short wait, then fills.
  const PRESS_WAIT = 300, PRESS_FILL = 600, CELL_PRESS = PRESS_WAIT + PRESS_FILL;
  function startDrag(e, p, { fromBoard = false, hold = false } = {}) {
    if (state.solved || e.button > 0) return;
    const sx = e.clientX, sy = e.clientY;
    const touchHold = hold && e.pointerType === 'touch';
    let armed = !touchHold, ghost = null, over = null, timer = null;
    const origin = fromBoard ? state.pos[p] : -1;
    // Targets: board cells (key = cell index) and the row/column note boxes (key 'r3', 'c2').
    const marked = new Map(); // note key -> element
    let dwellTimer = 0, still = { x: 0, y: 0 };
    const keyOf = t => t.dataset.key || t.dataset.i;
    const usable = t => t && (t.dataset.key ? true : !blocking.has(level.objects[Number(t.dataset.i)]) && Number(t.dataset.i) !== origin);
    const enter = cell => {
      clearTimeout(dwellTimer);
      if (!usable(cell)) return;
      const key = keyOf(cell);
      dwellTimer = setTimeout(() => { marked.set(key, cell); cell.classList.add('drop-mark'); }, DWELL);
    };
    let lastY = sy, scroller = 0;
    // Near the top or bottom edge, scroll the page so the board comes into view.
    const edgeScroll = () => {
      const edge = 70, h = window.innerHeight;
      const d = lastY < edge ? -(edge - lastY) / 3 : lastY > h - edge ? (lastY - (h - edge)) / 3 : 0;
      if (d) window.scrollBy(0, d);
      scroller = ghost ? requestAnimationFrame(edgeScroll) : 0;
    };
    const cellAt = ev => document.elementFromPoint(ev.clientX, ev.clientY)?.closest('.board-frame:not(.view-only) .board .cell, .board-frame .note-cell');
    const showGhost = (x, y) => {
      ghost = el(`span.token.drag-ghost${p === victim ? '.victim' : ''}`, { style: { '--pc': color(p) } }, letter(p));
      document.body.append(ghost);
      ghost.style.left = `${x}px`;
      ghost.style.top = `${y}px`;
    };
    // While dragging on touch, stop the page from scrolling.
    const noScroll = ev => { if (ghost) ev.preventDefault(); };
    if (touchHold) {
      timer = setTimeout(() => {
        armed = true;
        showGhost(sx, sy);
        navigator.vibrate?.(15);
      }, 320);
    }
    const move = ev => {
      if (!armed) {
        // Moved before the long press: it is a scroll, not a drag.
        if (Math.hypot(ev.clientX - sx, ev.clientY - sy) > 8) end(ev, true);
        return;
      }
      if (!ghost) {
        if (Math.hypot(ev.clientX - sx, ev.clientY - sy) < 6) return;
        showGhost(ev.clientX, ev.clientY);
      }
      ev.preventDefault();
      ghost.style.left = `${ev.clientX}px`;
      ghost.style.top = `${ev.clientY}px`;
      lastY = ev.clientY;
      if (!scroller) scroller = requestAnimationFrame(edgeScroll);
      const cell = cellAt(ev);
      if (cell !== over) {
        over?.classList.remove('drop'); cell?.classList.add('drop'); over = cell;
        still = { x: ev.clientX, y: ev.clientY };
        enter(cell);
      } else if (cell && Math.hypot(ev.clientX - still.x, ev.clientY - still.y) > STILL) {
        // Still moving inside the cell: start waiting again.
        still = { x: ev.clientX, y: ev.clientY };
        if (!marked.has(keyOf(cell))) enter(cell);
      }
    };
    function end(ev, abort = false) {
      clearTimeout(timer);
      clearTimeout(dwellTimer);
      cancelAnimationFrame(scroller);
      for (const [, c] of marked) c.classList.remove('drop-mark');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', end);
      window.removeEventListener('pointercancel', end);
      window.removeEventListener('touchmove', noScroll);
      if (!ghost) return;
      ghost.remove();
      over?.classList.remove('drop');
      justDragged = true;
      setTimeout(() => { justDragged = false; }, 0);
      if (abort || ev.type === 'pointercancel') return;
      const cell = cellAt(ev);
      if (usable(cell)) marked.set(keyOf(cell), cell); // the drop target always counts
      if (marked.size) return markCanBe(p, [...marked.keys()]);
      if (cell) return flash(`Nobody can stand on ${article(theme.objects[level.objects[Number(cell.dataset.i)]]?.name || 'that cell')}.`);
      if (fromBoard) { snapshot(); state.pos[p] = -1; changed(); }
    }
    window.addEventListener('pointermove', move, { passive: false });
    window.addEventListener('pointerup', end);
    window.addEventListener('pointercancel', end);
    window.addEventListener('touchmove', noScroll, { passive: false });
  }

  // Note "can be here" for person p on all these cells or note boxes (note keys).
  function markCanBe(p, cells) {
    snapshot();
    for (const i of cells) {
      const k = String(i);
      state.notes.set(k, new Set([...(state.notes.get(k) || []), p]));
      const no = state.nots.get(k);
      if (no) { no.delete(p); if (!no.size) state.nots.delete(k); }
    }
    changed();
    flash(cells.length === 1 ? `${level.people[p].name} can be here. Long-press a cell to place someone.`
      : `${level.people[p].name} can be here: ${cells.length} cells noted.`);
  }

  // Write a hint step onto the player's board, as one undo step.
  function applyStep(step) {
    const { pos, cand } = step.before;
    const after = cand.map(c => new Set(c));
    const apos = pos.slice();
    if (step.place) { apos[step.place.p] = step.place.i; after[step.place.p] = new Set([step.place.i]); }
    for (const [q, i] of step.elim || []) after[q].delete(i);
    if (step.allowed) after[step.allowed.p] = new Set(step.allowed.cells);
    snapshot();
    const note = (key, q, on) => {
      const set = state.notes.get(key) || new Set();
      on ? set.add(q) : set.delete(q);
      set.size ? state.notes.set(key, set) : state.notes.delete(key);
    };
    if (step.place) {
      const { p, i } = step.place;
      const here = personAt(i);
      if (here >= 0) state.pos[here] = -1;
      state.pos[p] = i;
      state.marks.delete(i);
    }
    if (step.allowed) {
      const { p, cells } = step.allowed;
      for (let i = 0; i < n * n; i++) note(String(i), p, cells.includes(i));
    }
    for (const [q, i] of step.elim || []) {
      note(String(i), q, false);
      if (assists.showNots) { const set = state.nots.get(String(i)) || new Set([q]); set.add(q); state.nots.set(String(i), set); }
    }
    // Cells nobody can use any more get a cross.
    const openOf = (cs, ps) => { const o = new Set(); cs.forEach((c, q) => { if (ps[q] < 0) c.forEach(i => o.add(i)); }); return o; };
    const was = openOf(cand.map(c => new Set(c)), pos), now = openOf(after, apos);
    const used = new Set(apos.filter(i => i >= 0));
    const rowUsed = new Set([...used].map(i => Math.floor(i / n))), colUsed = new Set([...used].map(i => i % n));
    for (const i of [...was, ...(step.cross || [])]) {
      if (now.has(i) || used.has(i) || rowUsed.has(Math.floor(i / n)) || colUsed.has(i % n)) continue; // auto ✕ covers those
      state.marks.add(i);
    }
    // A person now known to be in one row or column gets a note in that box.
    after.forEach((c, q) => {
      if (apos[q] >= 0 || !c.size) return;
      for (const [k, f] of [['r', i => Math.floor(i / n)], ['c', i => i % n]]) {
        const xs = new Set([...c].map(f));
        if (xs.size === 1) note(`${k}${[...xs][0]}`, q, true);
      }
    });
    changed();
  }

  function placeAt(p, i) {
    if (blocking.has(level.objects[i])) return flash(`Nobody can stand on ${article(theme.objects[level.objects[i]].name)}.`);
    if (state.pos[p] === i) return;
    snapshot();
    const here = personAt(i);
    if (here >= 0) state.pos[here] = -1;
    state.pos[p] = i;
    state.marks.delete(i);
    changed();
  }

  function tapCell(i, forceMark = false) {
    if (state.solved || justDragged) return;
    if (forceMark || state.mode === 'mark') {
      if (personAt(i) >= 0) return;
      snapshot();
      state.marks.has(i) ? state.marks.delete(i) : state.marks.add(i);
      return changed();
    }
    if (blocking.has(level.objects[i])) return flash(`Nobody can stand on ${article(theme.objects[level.objects[i]].name)}.`);
    const open = () => (state.mode === 'note' ? openNotes(String(i), `Cell ${colName(i % n)}${Math.floor(i / n) + 1}`, i) : openPlacePicker(i));
    // A person is selected: every click notes them here (no double click).
    if (state.selected !== null) return noteClick(state.selected, String(i));
    return open();
  }

  // A click with a person selected. Never change notes the board would not show:
  // say why instead, so a click never seems to do nothing.
  function noteClick(p, key) {
    const name = level.people[p].name;
    if (state.pos[p] >= 0 && assists.hidePlaced && state.pos[p] !== Number(key)) {
      return flash(`${name} is placed already. Their notes are hidden (see Options).`);
    }
    if (/^\d+$/.test(key)) {
      const i = Number(key), r = Math.floor(i / n), c = i % n;
      const taken = state.pos.some((j, q) => q !== p && j >= 0 && (Math.floor(j / n) === r || j % n === c));
      if (state.marks.has(i) || taken) return flash('That cell is crossed out, so nobody can be noted there.');
    }
    cycleNote(p, key);
  }

  // Next note for person p on a cell or note box: can be here → can't be here → nothing.
  // While "can't be here" dots are hidden, it just toggles "can be here".
  function cycleNote(p, key) {
    const yes = state.notes.get(key)?.has(p), no = state.nots.get(key)?.has(p);
    const next = assists.showNots ? (yes ? 'no' : no ? null : 'yes') : (yes || no ? null : 'yes');
    snapshot();
    for (const [map, on] of [[state.notes, next === 'yes'], [state.nots, next === 'no']]) {
      const set = new Set(map.get(key) || []);
      if (on) set.add(p); else set.delete(p);
      if (set.size) map.set(key, set); else map.delete(key);
    }
    changed();
  }

  // Picker for the person who stands on cell i.
  async function openPlacePicker(i) {
    const here = personAt(i);
    const order = level.people.map((_, p) => p).sort((a, b) => letter(a).localeCompare(letter(b)));
    const noted = state.notes.get(String(i));
    const pick = p => {
      snapshot();
      if (here >= 0) state.pos[here] = -1;
      state.pos[p] = i;
      state.marks.delete(i);
      document.getElementById('dialog').close('');
    };
    const buttons = order.map(p => {
      const where = state.pos[p] >= 0 ? `${colName(state.pos[p] % n)}${Math.floor(state.pos[p] / n) + 1}` : '';
      return el('button.note-pick', {
        type: 'button', 'aria-pressed': String(p === here), onclick: () => pick(p),
      },
      el(`span.token${p === victim ? '.victim' : ''}`, { style: { '--pc': color(p) } }, letter(p)),
      el('span.note-name', {}, level.people[p].name),
      p === here ? el('small', {}, 'here') : where ? el('small', {}, `at ${where}`) : noted?.has(p) ? el('small', {}, 'noted') : null);
    });
    await showDialog({
      title: `Who stands on ${colName(i % n)}${Math.floor(i / n) + 1}?`,
      body: [
        el('p.hint', {}, 'Tap a person to place them here. Someone placed elsewhere moves here.'),
        el('div.note-picker', {}, buttons),
        here >= 0 ? el('div.note-actions', {}, el('button.btn', {
          type: 'button',
          onclick: () => { snapshot(); state.pos[here] = -1; document.getElementById('dialog').close(''); },
        }, `Remove ${level.people[here].name}`)) : null,
      ],
      buttons: [{ label: 'Cancel', value: false }],
    });
    changed();
  }

  // Picker for notes on a cell, row or column.
  async function openNotes(noteKey, title, cell = -1) {
    if (state.solved) return;
    const prev = current();
    const yes = new Set(state.notes.get(noteKey) || []);
    const no = new Set(state.nots.get(noteKey) || []);
    const apply = () => {
      for (const [map, set] of [[state.notes, yes], [state.nots, no]]) {
        if (set.size) map.set(noteKey, new Set(set)); else map.delete(noteKey);
      }
      draw();
    };
    const order = level.people.map((_, p) => p).sort((a, b) => letter(a).localeCompare(letter(b)));
    const yesButtons = new Map(), noButtons = new Map();
    const sync = () => {
      for (const [p, b] of yesButtons) b.setAttribute('aria-pressed', String(yes.has(p)));
      for (const [p, b] of noButtons) b.setAttribute('aria-pressed', String(no.has(p)));
    };
    // A person is either "could be here" or "can not be here", never both.
    const picker = (mine, other, store, cls) => order.map(p => {
      const where = state.pos[p] >= 0 ? `${colName(state.pos[p] % n)}${Math.floor(state.pos[p] / n) + 1}` : '';
      const btn = el(`button.note-pick${cls}`, {
        type: 'button',
        onclick: () => {
          if (mine.has(p)) mine.delete(p); else { mine.add(p); other.delete(p); }
          sync();
          apply();
        },
      },
      el(`span.token${p === victim ? '.victim' : ''}`, { style: { '--pc': color(p) } }, letter(p)),
      el('span.note-name', {}, level.people[p].name),
      where ? el('small', {}, `placed ${where}`) : null);
      store.set(p, btn);
      return btn;
    });
    // Heading with a small red x that clears that list.
    const listHead = (text, set, cls) => el(`div.list-head${cls}`, {},
      el('p.hint', {}, text),
      el('button.clear-x', {
        type: 'button', title: 'Clear this list', 'aria-label': 'Clear this list',
        onclick: () => { set.clear(); sync(); apply(); },
      }, '✕'));
    const buttons = picker(yes, no, yesButtons, '');
    const notButtons = picker(no, yes, noButtons, '.not');
    sync();
    const here = cell >= 0 ? personAt(cell) : -1;
    const extra = here < 0 ? null : el('div.note-actions', {},
      el('button.btn.danger.place-btn', {
        type: 'button',
        onclick: () => {
          snapshot();
          state.pos[here] = -1;
          persist();
          document.getElementById('dialog').close('');
        },
      }, `Remove ${level.people[here].name}`));
    // Switch to the place picker for this cell.
    let toPlace = false;
    const placeBtn = cell >= 0 ? el('button.btn.success.place-btn', {
      type: 'button',
      onclick: () => { toPlace = true; document.getElementById('dialog').close(''); },
    }, icon('user'), 'Place person…') : null;
    const text = el('textarea.note-text', {
      rows: 3, placeholder: 'Your own notes…', value: state.texts.get(noteKey) || '',
      'aria-label': 'Free text notes',
    });
    await showDialog({
      title,
      body: [listHead('Who could be here? Tap to mark or unmark.', yes, ''), el('div.note-picker', {}, buttons),
        // "Can't be here" only when that option is on.
        assists.showNots ? [listHead('Who cannot be here? Tap to mark or unmark.', no, '.not-hint'), el('div.note-picker', {}, notButtons)] : null,
        el('div.note-text-label', {},
          el('div.notes-head', {},
            el('span', {}, 'Notes'),
            // Clears both lists and the text.
            el('button.btn.small', {
              type: 'button',
              onclick: () => { yes.clear(); no.clear(); text.value = ''; sync(); apply(); },
            }, 'Clear notes')),
          text),
        placeBtn, extra],
      buttons: [{ label: 'Done', value: true, primary: true }],
    });
    const typed = text.value.trim();
    if (typed) state.texts.set(noteKey, text.value); else state.texts.delete(noteKey);
    const now = current();
    if (JSON.stringify([now.notes, now.nots, now.texts]) !== JSON.stringify([prev.notes, prev.nots, prev.texts])) snapshot(prev);
    persist();
    draw();
    if (toPlace) openPlacePicker(cell);
  }

  function restore(saved) {
    state.pos = saved.pos;
    state.marks = new Set(saved.marks);
    state.notes = new Map(Object.entries(saved.notes || {}).map(([k, v]) => [k, new Set(v)]));
    state.nots = new Map(Object.entries(saved.nots || {}).map(([k, v]) => [k, new Set(v)]));
    state.texts = new Map(Object.entries(saved.texts || {}));
    changed();
  }

  function undo() {
    if (!state.history.length || state.solved) return;
    state.future.push(current());
    restore(state.history.pop());
  }

  function redo() {
    if (!state.future.length || state.solved) return;
    state.history.push(current());
    restore(state.future.pop());
  }

  async function reset() {
    const go = await showDialog({
      title: 'Reset',
      body: el('p', {}, 'Clear this board, or get a new case with the same size and special rules.'),
      buttons: [
        { label: 'Reset current board', value: 'reset', primary: true },
        { label: 'Generate new board with same ruleset', value: 'new', cls: '.warning' },
        { label: 'Generate new board with similar ruleset …', value: 'similar', cls: '.warning-soft' },
        { label: 'Exit', value: 'exit', cls: '.danger' },
        { label: 'Cancel', value: 'cancel' },
      ],
      stack: true,
    });
    if (go === 'reset') restart();
    if (go === 'new') newBoard();
    if (go === 'similar') {
      // Open the case maker with this case's rules and size set.
      setSetting('makerRules', level.rules);
      setSetting('makerFacts', [...new Set(level.facts.map(f => f.t))]);
      setSetting('makerSize', n);
      location.hash = '#/make?from=case';
    }
    if (go === 'exit') location.hash = home;
  }

  // A fresh case with this case's size, setting and special rules.
  function newBoard() {
    flash('Building a new case…');
    setTimeout(() => {
      try {
        const kinds = [...new Set(level.facts.map(f => f.t))];
        const fresh = makeLevel(theme, n, Math.floor(Math.random() * 2 ** 31), level.rules, kinds);
        location.hash = `#/x/${encodeData({ t: theme.id, l: encodeLevel(theme, fresh) })}`;
      } catch {
        flash('No new case found. Try again.');
      }
    }, 30);
  }

  function changed() {
    persist();
    draw();
  }

  const allPlaced = () => state.pos.every(i => i >= 0);

  // Submit: show the board as submitted, ask for the room and the murderer.
  async function submit() {
    if (!allPlaced()) return;
    const suspects = level.people.map((_, p) => p).filter(p => p !== victim)
      .sort((a, b) => letter(a).localeCompare(letter(b)));
    const roomIds = [...new Set(level.rooms)].filter(k => k !== level.sea);
    let room = -1, who = -1;
    const send = el('button.btn.success', { type: 'button', disabled: true }, 'Submit answer');
    const ready = () => { send.disabled = room < 0 || who < 0; };
    const roomBtns = roomIds.map(k => el('button.chip', {
      type: 'button', style: { '--rh': roomHue(theme, k) },
      onclick: e => { room = k; roomBtns.forEach(x => x.classList.toggle('on', x === e.currentTarget)); ready(); },
    }, el('span.swatch', { 'aria-hidden': 'true' }, el(`span.floor.floor-${floorOf(k)}`)), level.roomNames[k]));
    const whoBtns = suspects.map(p => el('button.note-pick', {
      type: 'button', 'aria-pressed': 'false',
      onclick: e => { who = p; whoBtns.forEach(x => x.setAttribute('aria-pressed', String(x === e.currentTarget))); ready(); },
    }, el('span.token', { style: { '--pc': color(p) } }, letter(p)), el('span.note-name', {}, level.people[p].name)));
    let answer = null;
    send.onclick = () => { answer = { room, who }; document.getElementById('dialog').close(''); };
    await showDialog({
      title: 'Submit your answer',
      wide: true,
      body: [
        el('div.submit-view', {},
          el('figure', {}, el('figcaption', {}, 'Your board'), resultBoard('plain')),
          el('div.submit-questions', {},
            el('h3', {}, `In which room was ${level.people[victim].name} killed?`),
            el('div.legend', {}, roomBtns),
            el('h3', {}, 'Who is the murderer?'),
            el('div.note-picker', {}, whoBtns))),
        el('div.dialog-buttons', {}, send),
      ],
      buttons: [{ label: 'Cancel', value: false }],
    });
    if (!answer) return;
    const boardOk = state.pos.every((i, p) => i === level.solution[p]);
    const roomOk = answer.room === level.rooms[level.solution[victim]];
    const whoOk = answer.who === murdererOf(level, level.solution);
    if (boardOk && roomOk && whoOk && !state.solved) { state.solved = true; persist(); draw(); }
    return result(boardOk && roomOk && whoOk, { boardOk, roomOk, whoOk, answer });
  }

  // The final dialog: congratulations or sorry, then Continue, Restart or Exit.
  async function result(ok, { boardOk, roomOk, whoOk, answer }) {
    const killer = murdererOf(level, level.solution);
    const roomName = level.roomNames[level.rooms[level.solution[victim]]];
    const next = !custom && index + 1 < campaign.levels.length;
    const wrong = state.pos.filter((i, p) => i !== level.solution[p]).length;
    const line = (good, text) => el(`li.${good ? 'ok' : 'no'}`, {}, text);
    const body = ok
      ? [el('p.result-sub', {}, `${level.people[killer].name} was alone with ${level.people[victim].name} in the ${roomName}. Brilliant detective work!`),
        el('figure', {}, el('figcaption', {}, 'Your board'), resultBoard('plain'))]
      : [el('ul.result-list', {},
        line(boardOk, boardOk ? 'Your board is right.' : `${wrong === 1 ? 'One person is' : `${wrong} people are`} in the wrong place.`),
        line(roomOk, `Room: the ${level.roomNames[answer.room]} ${roomOk ? 'is right.' : 'is wrong.'}`),
        line(whoOk, `Murderer: ${level.people[answer.who].name} ${whoOk ? 'is right.' : 'has an alibi.'}`)),
      el('figure', {}, el('figcaption', {}, 'Your board as submitted'), resultBoard(boardOk ? 'plain' : 'marked')),
      el('details.result-solution', {},
        el('summary', {}, 'Show the solution'),
        el('p.hint', {}, 'Green: right place. Red: wrong place.'),
        el('div.result-boards', {},
          el('figure', {}, el('figcaption', {}, 'Your board'), resultBoard('marked')),
          el('figure', {}, el('figcaption', {}, 'Solution'), resultBoard('solution'))))];
    const go = await showDialog({
      title: el('span.result-title', {}, el('span.result-emoji', {}, ok ? '🎉' : '😞'), ok ? 'Case closed!' : 'Sorry, that is wrong'),
      body,
      wide: true,
      buttons: [
        { label: ok ? (next ? 'Next case →' : 'Continue') : 'Continue', value: 'continue', cls: '.success' },
        { label: 'Restart', value: 'restart', cls: '.warning' },
        { label: 'Exit', value: 'exit', cls: '.danger' },
      ],
    });
    if (go === 'continue' && ok) location.hash = next ? `#/c/${theme.id}/${index + 1}` : home;
    if (go === 'restart') restart();
    if (go === 'exit') location.hash = home;
  }

  // A read-only board with labels. mode: 'plain' (the player's board),
  // 'marked' (the player's board, right and wrong ringed) or 'solution'.
  function resultBoard(mode) {
    const pos = mode === 'solution' ? level.solution : state.pos;
    const at = new Map(pos.map((i, p) => [i, p]).filter(([i]) => i >= 0));
    const board = el('div.board', { style: { '--n': n } }, riverSvg(), featureSvg());
    for (let i = 0; i < n * n; i++) {
      const b = baseCells[i];
      const who = at.has(i) ? at.get(i) : -1;
      const good = who >= 0 && level.solution[who] === i;
      board.append(el(`div.${[...b.cls, ...(who >= 0 ? ['busy'] : [])].join('.')}`, { style: { '--rh': roomHue(theme, b.k) } },
        baseParts(i),
        who >= 0 ? el(`span.token${who === victim ? '.victim' : ''}${mode === 'marked' ? (good ? '.right' : '.wrong') : ''}`,
          { style: { '--pc': color(who) } }, letter(who)) : null));
    }
    return el('div.hint-board.result-board', { style: { '--n': n } }, withLabels(board));
  }

  // Column letters on top and row numbers on the left of a dialog board.
  // lanes: optional [row boxes, column boxes] next to and below the board.
  function withLabels(board, lanes = null) {
    return el(`div.label-frame${lanes ? '.with-lanes' : ''}`, {},
      el('span'),
      el('div.labels.cols', { style: { '--n': n } }, [...Array(n).keys()].map(c => el('span', {}, colName(c)))),
      lanes ? el('span') : null,
      el('div.labels.rows', { style: { '--n': n } }, [...Array(n).keys()].map(r => el('span', {}, String(r + 1)))),
      board,
      lanes ? [lanes[0], el('span'), lanes[1], el('span')] : null);
  }

  // Clear the board without asking (from the result dialog).
  function restart() {
    state.pos.fill(-1);
    state.marks.clear();
    state.notes.clear();
    state.nots.clear();
    state.texts.clear();
    state.history = [];
    state.future = [];
    state.solved = false;
    state.selected = null;
    changed();
  }

  let flashTimer;
  function flash(text) {
    const box = app.querySelector('.flash');
    if (!box) return;
    box.textContent = text;
    box.classList.add('show');
    clearTimeout(flashTimer);
    flashTimer = setTimeout(() => box.classList.remove('show'), 2600);
  }

  // Choosing a person (or none) ends any lit-up objects from an earlier clue link.
  function selectPerson(p) {
    if (p !== state.selected) state.highlight = null;
    state.selected = p;
    draw();
  }

  function setHighlight(h) {
    const same = state.highlight && h && state.highlight.kind === h.kind && state.highlight.v === h.v;
    state.highlight = same ? null : h;
    draw();
  }

  // ---- hints ----

  let hintSteps = null;

  // Story boards show dots only for people an earlier step marked
  // ("can only be on the marked cells"). Later steps just shrink those dots.
  function markDotted(steps) {
    const dotted = new Set();
    for (const step of steps) {
      step.dotted = new Set(dotted);
      if (step.allowed) dotted.add(step.allowed.p);
    }
    return steps;
  }

  // Hint texts mark each person as ⟦p⟧; richText() turns that into their colored dot.
  const tagged = { ...level, people: level.people.map((x, p) => ({ ...x, name: `⟦${p}⟧` })) };
  const hintText = {
    name: p => `⟦${p}⟧`,
    cell: i => `${colName(i % n)}${Math.floor(i / n) + 1}`,
    col: colName,
    room: i => `the ${level.roomNames[level.rooms[i]]}`,
    rooms: cells => [...new Set(cells.map(i => level.roomNames[level.rooms[i]]))].map(x => `the ${x}`).join(' or '),
    clue: cl => clueText(theme, tagged, cl),
    people: ps => ps.map(p => `⟦${p}⟧`).join(' and '),
    fact: f => factText(theme, level, f),
  };

  // Mistakes on the player's board, as hint steps (empty when there are none).
  function mistakeSteps(before) {
    const out = [];
    const cell = i => `${colName(i % n)}${Math.floor(i / n) + 1}`;
    state.pos.forEach((i, p) => {
      if (i >= 0 && i !== level.solution[p]) out.push({ focus: [i], before, text: `⟦${p}⟧ does not stand on ${cell(i)}. Take ⟦${p}⟧ off and look at the clues again.` });
    });
    for (const i of state.marks) {
      const p = level.solution.indexOf(i);
      if (p >= 0) out.push({ focus: [i], before, text: `You crossed out ${cell(i)}, but someone stands there. Remove that cross.` });
    }
    for (const [k, set] of assists.showNots ? state.nots : []) {
      if (!/^\d+$/.test(k)) continue;
      for (const p of set) if (level.solution[p] === Number(k)) out.push({ focus: [Number(k)], before, text: `You noted that ⟦${p}⟧ cannot be on ${cell(Number(k))}. That note is wrong.` });
    }
    return out;
  }

  // The next steps from the player's own board: their people, crosses and notes.
  // Every step follows from that board alone. Returns a list (mistakes first if there are any).
  function nextSteps() {
    const out = level.people.map(() => new Set());
    if (assists.showNots) for (const [k, set] of state.nots) if (/^\d+$/.test(k)) for (const p of set) out[p].add(Number(k));
    // "Can be here" notes on cells are what the player knows: the person is on one of them.
    const noted = level.people.map(() => new Set());
    for (const [k, set] of state.notes) if (/^\d+$/.test(k)) for (const p of set) noted[p].add(Number(k));
    noted.forEach((cells, p) => {
      if (!cells.size || state.pos[p] >= 0) return;
      for (let i = 0; i < n * n; i++) if (!cells.has(i)) out[p].add(i);
    });
    // Row and column boxes: a person noted in just one row box is in that row,
    // and that row is theirs (same for columns).
    const lineNotes = [];
    for (const [kind, f] of [['r', i => Math.floor(i / n)], ['c', i => i % n]]) {
      level.people.forEach((_, p) => {
        if (state.pos[p] >= 0) return;
        const xs = [...state.notes].filter(([k, set]) => k[0] === kind && set.has(p)).map(([k]) => Number(k.slice(1)));
        if (xs.length !== 1) return;
        const x = xs[0];
        lineNotes.push({ p, kind, x, f });
        for (let i = 0; i < n * n; i++) {
          if (f(i) !== x) out[p].add(i);
          else level.people.forEach((_, q) => { if (q !== p) out[q].add(i); });
        }
      });
    }
    const start = { pos: state.pos.slice(), out, crossed: new Set(state.marks) };
    // Everyone still open has notes: a cell nobody is noted on is clearly empty to the player.
    if (state.pos.every((i, p) => i >= 0 || noted[p].size)) {
      for (let i = 0; i < n * n; i++) if (!noted.some(c => c.has(i))) start.crossed.add(i);
    }
    // The player's board as the hint board shows it: open cells are those not crossed,
    // not blocked and not in a filled row or column.
    const rowsUsed = new Set(state.pos.filter(i => i >= 0).map(i => Math.floor(i / n)));
    const colsUsed = new Set(state.pos.filter(i => i >= 0).map(i => i % n));
    const openCells = [...Array(n * n).keys()].filter(i => !blocking.has(level.objects[i]) && !state.marks.has(i) &&
      !rowsUsed.has(Math.floor(i / n)) && !colsUsed.has(i % n));
    const before = { pos: state.pos.slice(), cand: level.people.map((_, p) => (state.pos[p] >= 0 ? [state.pos[p]] : openCells)) };
    // Notes that leave out where a person really stands are a mistake too.
    const wrong = mistakeSteps(before);
    for (const { p, kind, x, f } of lineNotes) {
      if (f(level.solution[p]) === x) continue;
      const line = kind === 'r' ? `row ${x + 1}` : `column ${colName(x)}`;
      wrong.push({ focus: [], before, text: `Your note says ⟦${p}⟧ is in ${line}. That does not follow from the clues. Look at ⟦${p}⟧'s clues again.` });
    }
    noted.forEach((cells, p) => {
      if (cells.size && state.pos[p] < 0 && !cells.has(level.solution[p])) {
        wrong.push({ focus: [...cells], before, text: `Your "can be here" notes for ⟦${p}⟧ leave out a cell where ⟦${p}⟧ can be. Look at ⟦${p}⟧'s clues again.` });
      }
    });
    if (wrong.length) return wrong.map(w => ({ ...w, mistake: true, own: true }));
    if (allPlaced()) return [{ before, done: true, own: true, text: 'Everyone is placed. Press Submit, then name the room and the murderer.' }];
    // Say which of the player's own notes a step builds on.
    const usesNotes = step => {
      const ps = new Set([step.allowed?.p, step.place?.p, ...(step.elim || []).map(([q]) => q)].filter(q => q !== undefined));
      const said = [];
      for (const p of ps) {
        const ln = lineNotes.find(l => l.p === p);
        if (ln) said.push(`Your note puts ⟦${p}⟧ in ${ln.kind === 'r' ? `row ${ln.x + 1}` : `column ${colName(ln.x)}`}.`);
        else if (noted[p].size) said.push(`Your notes put ⟦${p}⟧ on ${[...noted[p]].map(i => colName(i % n) + (Math.floor(i / n) + 1)).join(', ')}.`);
      }
      return said.length ? `${said.join(' ')} ${step.text}` : step.text;
    };
    // Steps the player can write down come first: a placement, a cross, new cells for a
    // person, a note to remove, or a person in one row or column (for the boxes).
    const lineOf = (cells, f) => { const xs = new Set([...cells].map(f)); return xs.size === 1 ? [...xs][0] : -1; };
    const visible = step => {
      if (step.place || step.allowed || step.cross?.length || step.done || step.mistake) return true;
      if (!step.elim) return true;
      if (step.elim.some(([q, i]) => noted[q].has(i) || (assists.showNots))) return true;
      const { pos, cand } = step.before;
      const after = cand.map(c => new Set(c));
      for (const [q, i] of step.elim) after[q].delete(i);
      const openBefore = new Set(), openAfter = new Set();
      cand.forEach((c, q) => { if (pos[q] < 0) c.forEach(i => openBefore.add(i)); });
      after.forEach((c, q) => { if (pos[q] < 0) c.forEach(i => openAfter.add(i)); });
      if ([...openBefore].some(i => !openAfter.has(i))) return true; // a cell to cross out
      return after.some((c, q) => pos[q] < 0 && [['r', i => Math.floor(i / n)], ['c', i => i % n]].some(([k, f]) => {
        const x = lineOf(c, f);
        return x >= 0 && lineOf(cand[q], f) !== x && !lineNotes.some(l => l.p === q && l.kind === k);
      }));
    };
    let steps = deduce(level, blocking, hintText, { start, options: true });
    // Nothing to write down? Use one such step quietly, tell it first, and look again.
    const lead = [];
    for (let round = 0; round < 8 && steps.length && !steps.some(visible); round++) {
      const quiet = steps[0];
      lead.push(usesNotes(quiet));
      for (const [q, i] of quiet.elim || []) start.out[q].add(i);
      steps = deduce(level, blocking, hintText, { start, options: true });
    }
    let shown = steps.some(visible) ? steps.filter(visible) : steps;
    // Tries that rule out many cells at once are hard to follow: drop them if others exist.
    const size = st => (/^If /.test(st.text) ? (st.elim?.length || 0) : 0);
    if (shown.some(st => size(st) <= 6)) shown = shown.filter(st => size(st) <= 6);
    shown = shown.slice().sort((a, b) => size(a) - size(b));
    const first = lead.length ? `${lead.join(' ')} Then: ` : '';
    // A clue step explains itself; the quiet steps before it only matter for other steps.
    return shown.map(step => ({ ...step, text: (step.allowed ? '' : first) + usesNotes(step), own: true }));
  }

  async function openHints() {
    const body = el('div.hint-view', {}, el('p.hint', {}, 'Working out your next step…'));
    const dialog = showDialog({ title: 'Hints', body, wide: 'x', buttons: [{ label: 'Close', value: true, primary: true }] });
    await new Promise(r => setTimeout(r, 30));
    const plain = (kind, v, text) => el('span.ref-plain', {}, text);
    const people = level.people.map((_, q) => q).sort((a, b) => letter(a).localeCompare(letter(b)));
    const peopleColumn = step => {
      const about = new Set([step.place?.p, step.allowed?.p, ...(step.elim || []).map(([q]) => q)].filter(q => q !== undefined));
      return el('aside.hint-people', {}, drawFacts(false), el('h3', {}, 'People'),
        el('ul', {}, people.map(q => el(`li${about.has(q) ? '.about' : ''}`, {},
          el('div.hint-person', {},
            el(`span.token${q === victim ? '.victim' : ''}`, { style: { '--pc': color(q) } }, letter(q)),
            el('strong', {}, level.people[q].name), badges(q),
            q === victim ? el('span.tag', {}, '💀') : null),
          el('ul.clues', {}, q === victim ? victimRule() : null,
            level.clues.filter(cl => cl.p === q).map(cl => el('li', {}, clueNodes(cl, plain))))))));
    };
    const scrollToPerson = () => {
      // Keep the person of this step in view (desktop: the list scrolls on its own).
      if (window.matchMedia('(min-width: 820px)').matches) body.querySelector('.hint-people li.about')?.scrollIntoView({ block: 'nearest' });
    };

    // Default view: the next steps for the player's board, one page each.
    let options = null, j = 0, applied = false;
    const showNext = () => {
      if (!options) options = nextSteps();
      if (!options.length) { body.replaceChildren(el('p', {}, 'No next step found.'), storyButton()); return; }
      const step = options[j];
      const label = step.mistake ? 'Check your board' : step.done ? 'All placed' : 'Your next step';
      body.replaceChildren(el('div.hint-main', {},
        el('div.hint-nav', {},
          el('button.btn', { type: 'button', disabled: applied || j === 0, onclick: () => { j--; showNext(); } }, '←'),
          el('span.hint-count', {}, options.length > 1 ? `${label} ${j + 1} of ${options.length}` : label),
          // After Apply, → works out the next step from the updated board.
          el('button.btn', { type: 'button', disabled: !applied && j >= options.length - 1,
            title: applied ? 'Next step from your updated board' : null,
            onclick: () => { if (applied) { options = null; j = 0; applied = false; } else j++; showNext(); } }, '→'),
          storyButton()),
        hintBoard(step),
        el(`p.hint-text${step.done ? '.done' : ''}${step.mistake ? '.mistake' : ''}`, {}, richText(step.text)),
        step.mistake || step.done ? null : el('div.hint-apply', {},
          el('button.btn.primary', { type: 'button', disabled: applied, title: 'Write this step onto your board (Undo takes it back)',
            onclick: () => { applyStep(step); applied = true; showNext(); } }, applied ? '✓ Applied' : '✓ Apply'))),
      peopleColumn(step));
      scrollToPerson();
    };
    const storyButton = () => el('button.btn', { type: 'button', onclick: showStory }, '📖 Show full deduction story');

    // The full story from an empty board.
    let k = 0;
    function showStory() {
      if (!hintSteps) {
        body.replaceChildren(el('p.hint', {}, 'Working out the solution…'));
        return setTimeout(() => { hintSteps = markDotted(deduce(level, blocking, hintText)); showStory(); }, 30);
      }
      if (!hintSteps.length) { body.replaceChildren(el('p', {}, 'No steps found.')); return; }
      const step = hintSteps[k];
      body.replaceChildren(el('div.hint-main', {},
        el('button.btn.small.story-back', { type: 'button', onclick: showNext }, '← Back to my next step'),
        el('div.hint-nav', {},
          el('button.btn', { type: 'button', disabled: k === 0, onclick: () => { k--; showStory(); } }, '← Back'),
          el('span.hint-count', {}, `Step ${k + 1} of ${hintSteps.length}`),
          el('button.btn.primary', { type: 'button', disabled: k === hintSteps.length - 1, onclick: () => { k++; showStory(); } }, 'Next →')),
        hintBoard(step),
        el(`p.hint-text${step.done ? '.done' : ''}`, {}, richText(step.text))),
      peopleColumn(step));
      scrollToPerson();
    }

    showNext();
    await dialog;
  }


  // Text with ⟦p⟧ marks: each mark becomes the person's colored dot (title: full name).
  function richText(text) {
    return text.split(/(⟦\d+⟧)/).map(part => {
      const m = part.match(/^⟦(\d+)⟧$/);
      if (!m) return part;
      const p = Number(m[1]);
      return el(`span.token.inline${p === victim ? '.victim' : ''}`, { style: { '--pc': color(p) }, title: level.people[p].name }, letter(p));
    });
  }

  // ---- share ----

  function shareUrl(withBoard) {
    const base = `${location.href.split('#')[0]}${custom ? `#/x/${custom.data}` : `#/c/${theme.id}/${index}`}`;
    return withBoard ? `${base}?b=${encodeData(current())}` : base;
  }

  function copyField(label, value, status) {
    const box = el('textarea', { rows: 2, readOnly: true, value });
    return el('label.share-field', {}, el('span', {}, label),
      el('div.field-with-copy', {}, box,
        el('button.copy-btn', {
          type: 'button', title: 'Copy', 'aria-label': `Copy: ${label}`,
          onclick: async () => { status.textContent = await copyText(box.value) ? 'Copied to clipboard.' : 'Copy failed. Select the text and copy it.'; },
        }, icon('copy'))));
  }

  function openShare() {
    const status = el('p.status', { role: 'status' });
    showDialog({
      title: 'Share this case',
      body: [
        el('p', {}, 'Anyone who opens a link plays this case.'),
        copyField('Empty board', shareUrl(false), status),
        copyField('Your board (people, crosses and notes)', shareUrl(true), status),
        status,
      ],
      buttons: [{ label: 'Close', value: true, primary: true }],
    });
  }

  // ---- fullscreen ----

  function fullscreenButton() {
    const root = document.documentElement;
    if (!root.requestFullscreen || !document.fullscreenEnabled) return null;
    const on = !!document.fullscreenElement;
    const title = on ? 'Leave fullscreen' : 'Fullscreen';
    return el('button.btn.icon.fs', {
      type: 'button', title, 'aria-label': title,
      onclick: () => (document.fullscreenElement ? document.exitFullscreen() : root.requestFullscreen()).catch(() => {}),
    }, icon(on ? 'shrink' : 'expand'));
  }
  const onFullscreen = () => {
    if (!app.querySelector('.board-frame')) return document.removeEventListener('fullscreenchange', onFullscreen);
    draw();
  };
  document.addEventListener('fullscreenchange', onFullscreen);

  // ---- zoom ----

  const frameOf = key => app.querySelector(`.board-frame[data-zoom="${key}"]`);

  // Largest zoom at which this board still fits its space.
  function maxZoom(key) {
    const frame = frameOf(key);
    const game = app.querySelector('.game');
    if (!frame || !game) return 3;
    const base = frame.getBoundingClientRect().width / zooms[key];
    const wide = window.matchMedia('(min-width: 900px)').matches;
    const room = game.clientWidth - (wide ? 324 : 0);
    return ZOOMS.filter(z => z * base <= room + 1).pop() || ZOOMS[0];
  }

  function setZoom(key, z, save = true) {
    zooms[key] = z;
    const frame = frameOf(key);
    if (frame) frame.style.zoom = String(z);
    if (save) setSetting(key, z);
    const box = app.querySelector(`.zoom-box[data-zoom="${key}"]`);
    if (!box) return;
    box.querySelector('.zoom-out').disabled = z <= ZOOMS[0];
    box.querySelector('.zoom-in').disabled = z >= maxZoom(key);
  }

  function stepZoom(key, d) {
    const k = ZOOMS.indexOf(zooms[key]) + d;
    if (k < 0 || k >= ZOOMS.length) return;
    if (d > 0 && ZOOMS[k] > maxZoom(key)) return;
    setZoom(key, ZOOMS[k]);
  }

  // Zoom buttons right below the bottom left corner of one board.
  function drawZoom(key) {
    const lens = '<circle cx="10" cy="10" r="6.5"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="7" y1="10" x2="13" y2="10"/>';
    const btn = (cls, title, plus, d) => {
      const b = el(`button.${cls}`, { type: 'button', title, 'aria-label': title, onclick: () => stepZoom(key, d) });
      b.innerHTML = `<svg class="zicon" viewBox="0 0 24 24" aria-hidden="true">${lens}${plus ? '<line x1="10" y1="7" x2="10" y2="13"/>' : ''}</svg>`;
      return b;
    };
    return el('div.zoom-box', { 'data-zoom': key }, btn('zoom-out', 'Smaller board', false, -1), btn('zoom-in', 'Bigger board', true, 1));
  }

  // Shrink when the kept zoom does not fit (smaller window).
  const onResize = () => {
    if (!app.querySelector('.board-frame')) return window.removeEventListener('resize', onResize);
    for (const key of Object.keys(zooms)) if (frameOf(key)) setZoom(key, Math.min(zooms[key], maxZoom(key)), false);
  };
  window.addEventListener('resize', onResize);

  // ---- drawing ----

  function isHighlighted(i, h = state.highlight) {
    if (!h) return false;
    if (h.kind === 'room') return level.rooms[i] === h.v;
    if (h.kind === 'obj') return level.objects[i] === h.v;
    if (h.kind === 'tag') return h.v === 'trade' ? !!tags[i]?.startsWith('t:') : h.v === 'task' ? !!tags[i]?.startsWith('k:') : tags[i] === h.v;
    if (h.kind === 'court') return court.has(level.rooms[i]);
    if (h.kind === 'lawful') return lawful.has(level.rooms[i]);
    if (h.kind === 'parity') return parityOf.has(level.rooms[i]);
    if (h.kind === 'door') return featureCells(level).door.has(i);
    if (h.kind === 'window') return featureCells(level).window.has(i);
    if (h.kind === 'fact') return !!factMarks[h.v]?.[i];
    return false;
  }

  function conflicts() {
    const bad = new Set();
    for (let p = 0; p < P; p++) for (let q = p + 1; q < P; q++) {
      const a = state.pos[p], b = state.pos[q];
      if (a < 0 || b < 0) continue;
      if (Math.floor(a / n) === Math.floor(b / n) || a % n === b % n) { bad.add(p); bad.add(q); }
    }
    return bad;
  }

  const FLOORS = theme.floors || ['wood', 'tile', 'carpet', 'herring', 'stone', 'dots'];
  const floorOf = k => FLOORS[k % FLOORS.length];

  // Small tokens for up to 4 noted people, else a color wheel.
  // People who can not be there show greyed out with a red cross.
  function noteNodes(noteKey) {
    const byLetter = (a, b) => letter(a).localeCompare(letter(b));
    // Notes stay saved; this only hides the dots of people already placed.
    const shown = p => !assists.hidePlaced || state.pos[p] < 0;
    const yes = [...(state.notes.get(noteKey) || [])].filter(shown).sort(byLetter);
    // "Can't be here" dots only when that option is on (the notes stay saved either way).
    const no = assists.showNots ? [...(state.nots.get(noteKey) || [])].filter(shown).sort(byLetter) : [];
    const total = yes.length + no.length;
    if (!total) return null;
    const mini = (p, not) => el(`span.mini${not ? '.not' : ''}`, { style: { '--pc': color(p) } }, letter(p));
    if (total <= 4) {
      return el(`span.notes.n${total}`, { 'aria-hidden': 'true' },
        yes.map(p => mini(p, false)), no.map(p => mini(p, true)));
    }
    const badge = no.length ? el('span.not-badge', {}, `✕${no.length}`) : null;
    if (!yes.length) return el('span.notes.wheel.none', { 'aria-hidden': 'true' }, el('span', {}, `✕${no.length}`));
    const step = 360 / yes.length;
    const faded = p => `color-mix(in srgb, ${color(p)} 45%, #b9b9b9)`;
    const stops = yes.map((p, k) => `${faded(p)} ${k * step}deg ${(k + 1) * step}deg`).join(', ');
    return el('span.notes.wheel', { 'aria-hidden': 'true', style: { '--wheel': `conic-gradient(${stops})` } },
      el('span', {}, String(yes.length)), badge);
  }

  const noteLabel = noteKey => {
    const yes = state.notes.get(noteKey), no = state.nots.get(noteKey);
    return (yes?.size ? `, could be: ${[...yes].map(letter).sort().join(' ')}` : '') +
      (no?.size ? `, not: ${[...no].map(letter).sort().join(' ')}` : '');
  };

  // The selected person's cell and every note that names them pulse.
  function pulses(noteKey, cell = -1) {
    const p = state.selected;
    if (p === null) return false;
    if (cell >= 0 && state.pos[p] === cell) return true; // their own cell always pulses
    if (!state.notes.get(noteKey)?.has(p)) return false;
    return assists.pulseHidden || noteVisible(noteKey, p); // hidden dots blink only if the option is on
  }

  // True if p's note dot is drawn right now: not under a cross, a person or an auto ✕,
  // and not hidden because p is placed elsewhere.
  function noteVisible(noteKey, p) {
    if (assists.hidePlaced && state.pos[p] >= 0) return false;
    const placed = state.pos.filter(i => i >= 0);
    if (noteKey[0] === 'r') return !placed.some(i => Math.floor(i / n) === Number(noteKey.slice(1)));
    if (noteKey[0] === 'c') return !placed.some(i => i % n === Number(noteKey.slice(1)));
    const i = Number(noteKey);
    if (state.marks.has(i) || placed.includes(i)) return false;
    return !placed.some(j => Math.floor(j / n) === Math.floor(i / n) || j % n === i % n);
  }

  function noteLane(kind) {
    return el(`div.note-lane.${kind}`, {}, [...Array(n).keys()].map(x => {
      const noteKey = `${kind === 'rows' ? 'r' : 'c'}${x}`;
      const name = kind === 'rows' ? `Row ${x + 1}` : `Column ${colName(x)}`;
      // The person placed in this row or column covers the notes.
      const inLine = state.pos.map((i, p) => p).filter(p => state.pos[p] >= 0 && (kind === 'rows' ? Math.floor(state.pos[p] / n) : state.pos[p] % n) === x);
      const who = inLine.length === 1 ? inLine[0] : -1;
      const clash = inLine.length > 1;
      const pulse = pulses(noteKey) || (state.selected !== null && inLine.includes(state.selected));
      return el(`button.note-cell${state.texts.get(noteKey) ? '.has-text' : ''}${pulse ? '.pulse' : ''}${inLine.length ? '.filled' : ''}${clash ? '.clash' : ''}`, {
        type: 'button', 'data-key': noteKey, title: clash ? `${name}: more than one person` : `Notes for ${name.toLowerCase()}`,
        'aria-label': `Notes for ${name.toLowerCase()}` + (clash ? `, more than one person: ${inLine.map(p => level.people[p].name).join(', ')}`
          : who >= 0 ? `, ${level.people[who].name}` : noteLabel(noteKey)),
        onclick: () => (state.selected !== null ? noteClick(state.selected, noteKey) : openNotes(noteKey, name)),
      }, clash ? el('span.clash-mark', { 'aria-hidden': 'true' }, '!')
        : who >= 0 ? el(`span.token${who === victim ? '.victim' : ''}`, { style: { '--pc': color(who) }, 'aria-hidden': 'true' }, letter(who))
          : noteNodes(noteKey) || el('span.pen', { 'aria-hidden': 'true' }, '✎'));
    }));
  }

  // Static look of each cell: walls, floor, room label, object, mark.
  const firstCell = new Map();
  level.rooms.forEach((k, i) => { if (!firstCell.has(k)) firstCell.set(k, i); });
  const labeled = new Set();
  const baseCells = [...Array(n * n).keys()].map(i => {
    const r = Math.floor(i / n), c = i % n, k = level.rooms[i];
    const edge = (rr, cc) => rr < 0 || cc < 0 || rr >= n || cc >= n || level.rooms[rr * n + cc] !== k;
    const obj = level.objects[i];
    const cls = ['cell'];
    if (edge(r - 1, c)) cls.push('wt');
    if (edge(r, c + 1)) cls.push('wr');
    if (edge(r + 1, c)) cls.push('wb');
    if (edge(r, c - 1)) cls.push('wl');
    if (obj && blocking.has(obj)) cls.push('blocked');
    if (k === level.sea) cls.push('sea');
    const floor = k === level.sea ? 'floor-sea' : `floor-${floorOf(k)}`;
    const tag = tagInfo(tags[i]);
    // The room name sits in the top half of the room's first cells.
    let w = 0;
    if (firstCell.get(k) === i) {
      w = 1;
      while (c + w < n && level.rooms[i + w] === k) w++;
      for (let x = 0; x < w; x++) labeled.add(i + x);
    }
    const name = `${level.roomNames[k]}, ${colName(c)}${r + 1}` +
      (obj ? `, ${theme.objects[obj].name}` : '') + (tag ? `, ${tag.name}` : '');
    return { cls, name, w, obj, tag, k, floor };
  });
  for (const i of labeled) baseCells[i].cls.push('labeled');

  // Two sofa (or bed) cells next to each other in one room are drawn as one wide piece.
  // Drawing only: for the rules each cell is still a sofa (or bed) cell.
  const pairable = id => ['🛋️', '🛏️'].includes(theme.objects[id]?.icon) && !blocking.has(id);
  const pairOf = new Map(); // first cell -> 'h' | 'v'; second cell -> 'skip'
  for (const [dir, step] of [['h', 1], ['v', n]]) {
    for (let i = 0; i < n * n; i++) {
      const j = i + step;
      if (dir === 'h' && i % n === n - 1) continue;
      if (j >= n * n || pairOf.has(i) || pairOf.has(j)) continue;
      const o = level.objects[i];
      if (o && o === level.objects[j] && pairable(o) && level.rooms[i] === level.rooms[j]) {
        pairOf.set(i, dir);
        pairOf.set(j, 'skip');
      }
    }
  }

  function baseParts(i) {
    const b = baseCells[i];
    return [
      // The floor pattern sits in its own blurred layer under everything else.
      el(`span.floor.${b.floor}`, { 'aria-hidden': 'true' }),
      b.w ? el('span.room-label', { 'aria-hidden': 'true', style: { '--w': b.w } },
        el('span', {}, roomTitle(b.k))) : null,
      b.obj && pairOf.get(i) !== 'skip' ? objectIcon(b.obj, pairOf.get(i)) : null,
      b.tag ? el(`span.obj.${tagClass(tags[i])}`, { 'aria-hidden': 'true' }, b.tag.icon) : null,
    ];
  }

  // pair: 'h' or 'v' for a sofa or bed across two cells (drawn from the first cell).
  function objectIcon(id, pair) {
    const o = theme.objects[id];
    return el(`span.obj.${blocking.has(id) ? 'furn' : 'spot'}${pair ? `.pair-${pair}` : ''}`, { 'aria-hidden': 'true' }, o.icon);
  }

  // kind: 'main' (the board for everything) or 'view' (split view: the floor plan
  // on top, which only shows the placed people and can not be clicked).
  function drawBoard(kind = 'main') {
    const view = kind === 'view';
    // Split view: the placing board is plain (white cells, no objects); the floor plan has the details.
    const plain = !view && assists.split;
    const bad = conflicts();
    const usedRows = new Set(state.pos.filter(i => i >= 0).map(i => Math.floor(i / n)));
    const usedCols = new Set(state.pos.filter(i => i >= 0).map(i => i % n));
    const board = el('div.board', { style: { '--n': n }, role: 'grid', 'aria-label': 'Floor plan' }, riverSvg(), featureSvg());
    for (let i = 0; i < n * n; i++) {
      const r = Math.floor(i / n), c = i % n, b = baseCells[i];
      const who = personAt(i);
      const cls = b.cls.slice();
      // Row or column already has someone: auto ✕ (not saved, goes away with them).
      const autoX = !view && who < 0 && !blocking.has(b.obj) && (usedRows.has(r) || usedCols.has(c));
      // A crossed cell hides its notes. They stay saved and come back when the cross goes.
      const notes = !view && who < 0 && !autoX && !state.marks.has(i) ? noteNodes(String(i)) : null;
      // Only a placed person makes the object small; notes sit on top of a full-size object.
      if (who >= 0) cls.push('busy');
      if (state.texts.get(String(i))) cls.push('has-text');
      if (isHighlighted(i)) cls.push('hl');
      if (pulses(String(i), i)) cls.push('pulse');
      if (assists.shade && who < 0 && (usedRows.has(r) || usedCols.has(c))) cls.push('shaded');
      const label = b.name + (who >= 0 ? `, ${level.people[who].name}` : noteLabel(String(i)));
      if (view) {
        // The floor plan in split view: just the room, its objects and the placed person.
        board.append(el(`div.${b.cls.concat(who >= 0 ? ['busy'] : [], isHighlighted(i) ? ['hl'] : []).join('.')}`,
          { 'aria-label': label, title: label, style: { '--rh': roomHue(theme, b.k) } },
          baseParts(i),
          who >= 0 ? el(`span.token${who === victim ? '.victim' : ''}`, { style: { '--pc': color(who) }, 'aria-hidden': 'true' }, letter(who)) : null));
        continue;
      }
      board.append(el(`button.${cls.join('.')}`, {
        type: 'button', 'aria-label': label, title: label, 'data-i': i,
        style: { '--rh': roomHue(theme, b.k) },
        onclick: () => tapCell(i),
        oncontextmenu: e => { e.preventDefault(); if (!pressed) tapCell(i, true); },
        // Long press on a cell: open the dialog to place someone here (not on the notes board).
        onpointerdown: e => {
          if (state.solved || e.button > 0 || e.target.closest('.token')) return;
          if (blocking.has(level.objects[i])) return;
          const sx = e.clientX, sy = e.clientY;
          pressed = false;
          // A ring fills up while the press lasts, so it is clear something will happen.
          const cellEl = e.currentTarget;
          const ring = el('span.press-ring', { 'aria-hidden': 'true', style: { '--press': `${PRESS_FILL}ms`, '--wait': `${PRESS_WAIT}ms` } });
          cellEl.append(ring);
          const t = setTimeout(() => {
            ring.remove();
            pressed = true; justDragged = true; navigator.vibrate?.(20);
            openPlacePicker(i);
            setTimeout(() => { justDragged = false; pressed = false; }, 400);
          }, CELL_PRESS);
          const stop = ev => {
            if (ev.type === 'pointermove' && Math.hypot(ev.clientX - sx, ev.clientY - sy) < 8) return;
            clearTimeout(t);
            ring.remove();
            window.removeEventListener('pointermove', stop);
            window.removeEventListener('pointerup', stop);
            window.removeEventListener('pointercancel', stop);
          };
          window.addEventListener('pointermove', stop);
          window.addEventListener('pointerup', stop);
          window.addEventListener('pointercancel', stop);
        },
      },
      plain ? null : baseParts(i),
      notes,
      who >= 0 ? el(`span.token.draggable${bad.has(who) ? '.bad' : ''}${who === victim ? '.victim' : ''}${state.selected === who ? '.sel' : ''}`,
        { style: { '--pc': color(who) }, 'aria-hidden': 'true', onpointerdown: e => startDrag(e, who, { fromBoard: true }) }, letter(who)) : null,
      // Blocked cells (furniture nobody can stand on) get a ✕ too.
      autoX || blocking.has(b.obj) ? el('span.mark.auto', { 'aria-hidden': 'true' }, '✕')
        : who < 0 && state.marks.has(i) ? el('span.mark', { 'aria-hidden': 'true' }, '✕') : null));
    }
    const colLabels = el('div.labels.cols', { style: { '--n': n } },
      [...Array(n).keys()].map(c => el('span', {}, colName(c))));
    const rowLabels = el('div.labels.rows', { style: { '--n': n } },
      [...Array(n).keys()].map(r => el('span', {}, String(r + 1))));
    if (view) {
      // Same size and place as the working board, but without the note boxes.
      return el('div.board-frame.view-only', { 'data-zoom': 'zoom' }, el('span'), colLabels, el('span'), rowLabels, board, el('span'),
        el('span'), el('span'), el('span'));
    }
    return el(`div.board-frame${plain ? '.plain' : ''}`, { 'data-zoom': assists.split ? 'zoomPlacing' : 'zoom' }, el('span'), colLabels, el('span'), rowLabels, board, noteLane('rows'),
      el('span'), noteLane('cols'), el('span'));
  }

  // Board for one person: tap cells to mark where they can or can not be.
  async function openPersonBoard(p) {
    if (state.solved) return;
    const prev = current();
    let hl = null; // highlight from a clue link, only on this board
    const wrap = el('div.person-board-wrap');
    const localLink = (kind, v, text) => {
      const on = hl && hl.kind === kind && hl.v === v;
      return el(`button.ref${on ? '.on' : ''}`, {
        type: 'button',
        onclick: () => { hl = on ? null : { kind, v }; render(); },
      }, text);
    };
    const rankRule = { noble: 'Must be in a court room.', commoner: 'Is never in a court room.', knight: 'Can be in any room.' };
    const setMark = (i, kind) => {
      const k = String(i);
      for (const [map, on] of [[state.notes, kind === 'yes'], [state.nots, kind === 'no']]) {
        const set = new Set(map.get(k) || []);
        if (on) set.add(p); else set.delete(p);
        if (set.size) map.set(k, set); else map.delete(k);
      }
    };
    // Without "Also show who can't be here", only ✓ and empty exist here.
    const withNo = assists.showNots;
    const markOf = i => (state.notes.get(String(i))?.has(p) ? 'yes' : withNo && state.nots.get(String(i))?.has(p) ? 'no' : null);
    const render = () => {
      const board = el('div.board', { style: { '--n': n } }, riverSvg(), featureSvg());
      for (let i = 0; i < n * n; i++) {
        const b = baseCells[i];
        const who = personAt(i);
        const mark = markOf(i);
        const cls = b.cls.slice();
        if (who >= 0) cls.push('busy'); // objects stay full size under ✓ and ✕
        if (isHighlighted(i, hl)) cls.push('hl');
        const blocked = blocking.has(b.obj);
        board.append(el(`button.${cls.join('.')}`, {
          type: 'button', disabled: blocked,
          'aria-label': `${b.name}${mark === 'yes' ? ', can be here' : mark === 'no' ? ', cannot be here' : ''}`,
          style: { '--rh': roomHue(theme, b.k) },
          onclick: () => {
            // Each tap moves on: empty → ✓ → ✕ → empty. Without "can't be here": empty ↔ ✓.
            const order = withNo ? [null, 'yes', 'no'] : [null, 'yes'];
            setMark(i, order[(order.indexOf(markOf(i)) + 1) % order.length]);
            render();
            draw();
          },
        },
        baseParts(i),
        who >= 0 ? el(`span.token${who === victim ? '.victim' : ''}${who === p ? '' : '.dim'}`, { style: { '--pc': color(who) } }, letter(who)) : null,
        who < 0 && state.marks.has(i) && !mark ? el('span.mark', {}, '✕') : null,
        mark === 'yes' ? el('span.pmark.yes', { 'aria-hidden': 'true' }, '✓') : null,
        mark === 'no' ? el('span.pmark.no', { 'aria-hidden': 'true' }) : null));
      }
      const rank = level.rank?.[p];
      const trade = level.trade?.[p];
      const clues = level.clues.filter(cl => cl.p === p);
      wrap.replaceChildren(
        el('div.person-rules', {},
          el('div.person-rules-head', {},
            el(`span.token${p === victim ? '.victim' : ''}`, { style: { '--pc': color(p) } }, letter(p)),
            el('strong', {}, level.people[p].name), badges(p),
            p === victim ? el('span.tag', {}, '💀 victim') : null),
          el('ul.clues', {},
            p === victim ? victimRule() : null,
            clues.map(cl => el('li', {}, clueNodes(cl, localLink))),
            rank ? el('li', {}, `${RANKS[rank].icon} ${RANKS[rank].name}: ${rankRule[rank]}`) : null,
            trade && tags.some(t => t?.startsWith('t:')) ? el('li', {}, `${tradeById(trade).icon} May use ${tradeById(trade).name.toLowerCase()} work spots only.`) : null,
            !trade && level.rules.includes('trades') && tags.some(t => t?.startsWith('t:')) ? el('li', {}, 'Has no trade: may not stand on work spots.') : null)),
        // A legend, not a tool choice.
        el('div.person-legend', {},
          el('span', {}, el('span.legend-yes', {}, '✓'), ' Can be here'),
          withNo ? el('span', {}, el('span.legend-no', {}, '✕'), ' Cannot be here') : null),
        el('div.hint-board.person-board', { style: { '--n': n, '--pc': color(p) } }, withLabels(board)));
    };
    render();
    await showDialog({
      title: `Where can ${level.people[p].name} be?`,
      body: [el('p.hint', {}, withNo ? 'Tap a cell: ✓. Tap again: ✕. A third time: clear.'
        : 'Tap a cell: ✓. Tap again: clear.'), wrap],
      wide: true,
      buttons: [{ label: 'Done', value: true, primary: true }],
    });
    const now = current();
    if (JSON.stringify([now.notes, now.nots]) !== JSON.stringify([prev.notes, prev.nots])) snapshot(prev);
    persist();
    draw();
  }

  // Faded dots for the people who can still be on a cell (hint board).
  function candNodes(ps) {
    ps = ps.slice().sort((a, b) => letter(a).localeCompare(letter(b)));
    if (ps.length <= 4) {
      return el(`span.notes.cand.n${ps.length}`, { 'aria-hidden': 'true' },
        ps.map(p => el('span.mini', { style: { '--pc': color(p) } }, letter(p))));
    }
    const step = 360 / ps.length;
    const stops = ps.map((p, k) => `color-mix(in srgb, ${color(p)} 45%, #b9b9b9) ${k * step}deg ${(k + 1) * step}deg`).join(', ');
    return el('span.notes.cand.wheel', { 'aria-hidden': 'true', style: { '--wheel': `conic-gradient(${stops})` } },
      el('span', {}, String(ps.length)));
  }

  // A small read-only board for one hint step.
  function hintBoard(step) {
    const { pos, cand } = step.before;
    const placedAt = new Map(pos.map((i, p) => [i, p]).filter(([i]) => i >= 0));
    const open = new Set();
    cand.forEach((c, p) => { if (pos[p] < 0) c.forEach(i => open.add(i)); });
    // What earlier steps found: per cell, the people who can still be there.
    // Only people whose cells were narrowed down already show up.
    const freeCells = level.objects.filter(o => !blocking.has(o)).length;
    const known = new Map();
    cand.forEach((c, p) => {
      if (step.own || pos[p] >= 0 || c.length >= freeCells) return; // the player's own board: no dots
      if (!step.own && !step.dotted?.has(p)) return; // dots only for people an earlier step marked
      for (const i of c) { if (!known.has(i)) known.set(i, []); known.get(i).push(p); }
    });
    const act = new Map(); // cell -> list of nodes for the action
    const mark = (i, node) => { if (!act.has(i)) act.set(i, []); act.get(i).push(node); };
    if (step.place) mark(step.place.i, el('span.token.ghost', { style: { '--pc': color(step.place.p) } }, letter(step.place.p)));
    if (step.cross) for (const i of step.cross) mark(i, el('span.mark.act-x', {}, '✕'));
    if (step.focus) for (const i of step.focus) mark(i, el('span.mark.focus-mark', {}, '!'));
    if (step.allowed) for (const i of step.allowed.cells) mark(i, el('span.notes.n1', {}, el('span.mini', { style: { '--pc': color(step.allowed.p) } }, letter(step.allowed.p))));
    if (step.elim) {
      const byCell = new Map();
      for (const [p, i] of step.elim) {
        if (step.cross?.includes(i) || step.allowed?.cells.includes(i)) continue; // shown as ✕ or as the person's dot
        if (!byCell.has(i)) byCell.set(i, []); byCell.get(i).push(p);
      }
      for (const [i, ps] of byCell) {
        const rest = cand.some((c, q) => pos[q] < 0 && !ps.includes(q) && c.includes(i));
        if (!rest) mark(i, el('span.mark.act-x', {}, '✕'));
        else mark(i, el(`span.notes.n${Math.min(ps.length, 4)}.struck`, {},
          ps.slice(0, 4).map(p => el('span.mini', { style: { '--pc': color(p) } }, letter(p)))));
      }
    }
    const board = el('div.board', { style: { '--n': n } }, riverSvg(), featureSvg());
    for (let i = 0; i < n * n; i++) {
      const b = baseCells[i];
      const cls = b.cls.slice();
      const who = placedAt.has(i) ? placedAt.get(i) : -1;
      const nodes = act.get(i);
      if (who >= 0 || step.place?.i === i) cls.push('busy'); // a person (or the one placed now) sits on the object; marks do not
      if (nodes) cls.push('act');
      const crossed = who < 0 && !open.has(i); // like the main board: blocked cells too
      board.append(el(`div.${cls.join('.')}`, { style: { '--rh': roomHue(theme, b.k) } },
        baseParts(i),
        who >= 0 ? el(`span.token${who === victim ? '.victim' : ''}`, { style: { '--pc': color(who) } }, letter(who)) : null,
        crossed && !nodes ? el(`span.mark${blocking.has(b.obj) ? '.auto' : ''}`, {}, '✕') : null,
        who < 0 && !nodes && known.has(i) ? candNodes(known.get(i)) : null,
        nodes || null));
    }
    return el('div.hint-board', { style: { '--n': n } }, withLabels(board, hintLanes(step)));
  }

  // The row and column boxes on a hint board: a person known to be in one row
  // (or column) gets a dot there. A dot this step adds gets a frame.
  function hintLanes(step) {
    const { pos, cand } = step.before;
    // The board after the step.
    const after = cand.map(c => new Set(c));
    const apos = pos.slice();
    if (step.place) {
      const { p, i } = step.place;
      apos[p] = i;
      after[p] = new Set([i]);
    }
    for (const [p, i] of step.elim || []) after[p].delete(i);
    if (step.allowed) after[step.allowed.p] = new Set(step.allowed.cells);
    const lineOf = (set, f) => { const xs = new Set([...set].map(f)); return xs.size === 1 ? [...xs][0] : -1; };
    const lane = (kind, f) => el(`div.note-lane.${kind}`, {}, [...Array(n).keys()].map(x => {
      const placed = apos.findIndex(i => i >= 0 && f(i) === x);
      if (placed >= 0) {
        const fresh = pos[placed] < 0;
        return el(`span.note-cell.filled${fresh ? '.act' : ''}`, {},
          el(`span.token${placed === victim ? '.victim' : ''}`, { style: { '--pc': color(placed) } }, letter(placed)));
      }
      const who = [], fresh = [];
      after.forEach((c, p) => {
        if (apos[p] >= 0 || !c.size || lineOf(c, f) !== x) return;
        who.push(p);
        if (pos[p] >= 0 || lineOf(new Set(cand[p]), f) !== x) fresh.push(p);
      });
      return el(`span.note-cell${fresh.length ? '.act' : ''}`, {}, who.length ? candNodes(who) : null);
    }));
    return [lane('rows', i => Math.floor(i / n)), lane('cols', i => i % n)];
  }

  // Another person in a rule: their name, then their colored dot.
  function personRef(p) {
    return el('span.person-ref', {},
      el('strong', { style: { color: color(p) } }, level.people[p].name),
      el(`span.token.inline${p === victim ? '.victim' : ''}`, { style: { '--pc': color(p) }, 'aria-hidden': 'true' }, letter(p)));
  }

  // An object in a rule: its icon right after its name.
  const objIcon = icon => el('span.obj-inline', { 'aria-hidden': 'true' }, icon);

  const linkMain = (kind, v, text) => link(kind, v, text);

  // A clickable name in a rule (text may be several nodes, e.g. name and icon).
  // A person link selects that person; other links light up cells.
  function link(kind, v, text) {
    if (kind === 'person') {
      const on = state.selected === v;
      return el(`button.ref.person-link${on ? '.on' : ''}`, {
        type: 'button', onclick: e => { e.stopPropagation(); state.selected = on ? null : v; draw(); },
      }, text);
    }
    const on = state.highlight && state.highlight.kind === kind && state.highlight.v === v;
    return el(`button.ref${on ? '.on' : ''}`, { type: 'button', onclick: () => setHighlight({ kind, v }) }, text);
  }

  function clueNodes(cl, link = linkMain) {
    const o = theme.objects[cl.v];
    switch (cl.t) {
      case 'room': return ['Was in the ', link('room', cl.v, level.roomNames[cl.v]), '.'];
      case 'notRoom': return ['Was ', el('em', {}, 'not'), ' in the ', link('room', cl.v, level.roomNames[cl.v]), '.'];
      case 'on': return [link('obj', cl.v, [o.on.replace(/^was /, 'Was '), objIcon(o.icon)]), '.'];
      case 'next': return [`Was right next to ${article(o.name).split(' ')[0]} `, link('obj', cl.v, [o.name, objIcon(o.icon)]), '.'];
      case 'row': return [`Was in row ${cl.v + 1}.`];
      case 'col': return [`Was in column ${colName(cl.v)}.`];
      case 'same': return ['Was in the same room as ', link('person', cl.v, personRef(cl.v)), '.'];
      case 'alone': return ['Was alone in a room.'];
      case 'door': return ['Was in front of a ', link('door', 0, ['door', objIcon('🚪')]), '.'];
      case 'window': return ['Was in front of a ', link('window', 0, ['window', objIcon('🪟')]), '.'];
      case 'bandit': return ['Was a ', el('strong', {}, 'bandit'), '.'];
      case 'notBandit': return ['Was ', el('em', {}, 'not'), ' a bandit.'];
      case 'withBandit': return ['Was in the same room as a ', el('strong', {}, 'bandit'), '.'];
      case 'task': return ['Was ', link('tag', `k:${cl.v}`, [article(tradeById(cl.v).name.toLowerCase()), objIcon(tradeById(cl.v).icon)]), '.'];
      case 'taskEither': return ['Was ', link('tag', `k:${cl.v[0]}`, [article(tradeById(cl.v[0]).name.toLowerCase()), objIcon(tradeById(cl.v[0]).icon)]),
        ' or ', link('tag', `k:${cl.v[1]}`, [article(tradeById(cl.v[1]).name.toLowerCase()), objIcon(tradeById(cl.v[1]).icon)]), '.'];
      case 'noTask': return ['Had ', el('em', {}, 'no'), ' task.'];
    }
    return [];
  }

  // The rule that holds for every victim.
  const victimRule = () => el('li.victim-rule', {}, 'The victim: was alone with the murderer in one and the same room.');

  function badges(p) {
    const out = [];
    const rank = level.rank?.[p];
    if (rank) out.push(el(`span.badge.rank-${rank}`, { title: RANKS[rank].name }, `${RANKS[rank].icon} ${RANKS[rank].name}`));
    const trade = level.trade?.[p];
    if (trade) { const t = tradeById(trade); out.push(el('span.badge', { title: t.name }, `${t.icon} ${t.name}`)); }
    const pair = (level.couples || []).find(c => c.includes(p));
    if (pair) {
      const q = pair[0] === p ? pair[1] : pair[0];
      out.push(el('span.badge.couple', { title: `Couple with ${level.people[q].name}` }, `💞 ${level.people[q].name.split(' ')[0]}`));
    }
    return out.length ? el('span.badges', {}, out) : null;
  }

  // Cells each cell fact counts, for the "Show" links.
  const factMarks = level.facts.map(f => (CELL_FACTS.includes(f.t) ? factCells(level, f) : null));

  // The case facts, with links that light up the cells they count.
  function drawFacts(withLinks = true) {
    if (!level.facts.length) return null;
    return el('div.rules-box.facts-box', {},
      el('h3', {}, 'Case facts'),
      el('ul', {}, level.facts.map((f, k) => el('li', {}, factText(theme, level, f),
        withLinks && factMarks[k] ? [' ', el('span.rule-links', {}, 'Show: ', link('fact', k, 'cells'))] : null))));
  }

  // The special rules of this case, with links that light up the board.
  function drawRules() {
    if (!level.rules.length) return null;
    const links = {
      ranks: link('court', 0, `${COURT.icon} court rooms`),
      glyphs: [link('tag', 'lone', `${GLYPHS.lone.icon} moon`), ' ', link('tag', 'crowd', `${GLYPHS.crowd.icon} sun`)],
      trades: link('tag', 'trade', 'work spots'),
      tasks: link('tag', 'task', 'task spots'),
      sea: link('room', level.sea, `${SEA.icon} sea`),
      bandits: link('lawful', 0, `${LAWFUL.icon} star rooms`),
      parity: link('parity', 0, 'marked rooms'),
    };
    return el('div.rules-box', {},
      el('h3', {}, 'Special rules'),
      el('ul', {}, level.rules.map(r => el('li', {}, ruleText(r, level), ' ',
        links[r] ? el('span.rule-links', {}, 'Show: ', links[r]) : null))));
  }

  function drawPeople() {
    const order = level.people.map((_, p) => p).sort((a, b) => letter(a).localeCompare(letter(b)));
    return el('ul.people', {}, order.map(p => {
      const person = level.people[p];
      const clues = level.clues.filter(cl => cl.p === p);
      const placed = state.pos[p] >= 0;
      // A click anywhere on the card selects or unselects the person.
      return el(`li.person${state.selected === p ? '.sel' : ''}${placed ? '.placed' : ''}`, {
        onclick: e => {
          if (justDragged || e.target.closest('.person-head')) return;
          // A link in a clue lights up cells: it selects, but never unselects.
          if (e.target.closest('.ref')) { if (state.selected !== p) { state.selected = p; draw(); } return; }
          // Anywhere else on the card: select, or unselect if already selected.
          selectPerson(state.selected === p ? null : p);
        },
        ondblclick: e => { e.preventDefault(); state.selected = p; openPersonBoard(p); },
        // Drag the whole card. The token starts at once, the rest needs a long press on touch.
        onpointerdown: e => startDrag(e, p, { hold: !e.target.closest('.token') }),
        oncontextmenu: e => { if (e.pointerType !== 'mouse') e.preventDefault(); },
      },
        // A div that acts as a button, so the magnifier button can sit inside it.
        el('div.person-head', {
          role: 'button', tabindex: 0,
          'aria-pressed': String(state.selected === p),
          title: 'Click to see their cells. Double-click to mark where they can be.',
          onclick: () => { if (justDragged) return; selectPerson(state.selected === p ? null : p); },
          onkeydown: e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); state.selected = state.selected === p ? null : p; draw(); } },
        },
        el(`span.token.draggable${p === victim ? '.victim' : ''}`, {
          style: { '--pc': color(p) }, title: 'Drag onto a cell to place',
        }, letter(p)),
        el('span.person-name', {}, person.name, badges(p)),
        p === victim ? el('span.tag', {}, '💀 victim') : null,
        placed ? el('span.where', {}, `${colName(state.pos[p] % n)}${Math.floor(state.pos[p] / n) + 1}`) : null),
        // Magnifier in the top right corner: opens "Where can … be?" (same as a double-click).
        el('button.person-zoom', {
          type: 'button', title: `Where can ${person.name} be?`, 'aria-label': `Where can ${person.name} be?`,
          onclick: e => { e.stopPropagation(); state.selected = p; openPersonBoard(p); },
          ondblclick: e => e.stopPropagation(),
          onpointerdown: e => e.stopPropagation(),
          onkeydown: e => e.stopPropagation(),
        }, icon('search')),
        el('ul.clues', {}, p === victim ? victimRule() : null, clues.map(cl => {
          const ok = assists.checks ? clueState(level, blocking, cl, state.pos) : null;
          return el(`li${ok === true ? '.ok' : ok === false ? '.no' : ''}`, {}, clueNodes(cl));
        })));
    }));
  }

  function drawLegend() {
    return el('div.legend', {}, level.roomNames.map((name, k) =>
      el(`button.chip${state.highlight?.kind === 'room' && state.highlight.v === k ? '.on' : ''}${k === level.sea ? '.sea' : ''}`,
        { type: 'button', style: { '--rh': roomHue(theme, k) }, onclick: () => setHighlight({ kind: 'room', v: k }) },
        el(`span.swatch${k === level.sea ? '.sea' : ''}`, { 'aria-hidden': 'true' },
          el(`span.floor.${k === level.sea ? 'floor-sea' : `floor-${floorOf(k)}`}`)),
        roomTitle(k))));
  }

  // Legend for the objects and marks on this board.
  function drawObjectLegend() {
    const items = [];
    const onBoard = new Set(level.objects.filter(Boolean));
    for (const [id, o] of Object.entries(theme.objects)) {
      if (!onBoard.has(id)) continue;
      const blocks = blocking.has(id);
      items.push(el(`button.key${state.highlight?.kind === 'obj' && state.highlight.v === id ? '.on' : ''}`,
        { type: 'button', onclick: () => setHighlight({ kind: 'obj', v: id }) },
        el(`span.key-icon.${blocks ? 'furn' : 'spot'}`, {}, o.icon),
        el('span', {}, o.name, el('small', {}, blocks ? 'blocks the cell' : 'can stand here'))));
    }
    const tagKinds = new Set(tags.filter(Boolean));
    for (const t of tagKinds) {
      const info = tagInfo(t);
      const taskCount = t.startsWith('k:') ? (level.tasks || []).find(([id]) => id === t.slice(2))?.[1] : null;
      const what = t === 'lone' ? 'alone in the room' : t === 'crowd' ? 'not alone in the room'
        : t.startsWith('k:') ? `whoever stands here is a ${info.name.replace(/ task spot$/, '')} (${taskCount} in all)`
          : `only a ${info.name.replace(/ spot$/, '')} may stand here`;
      items.push(el(`button.key${state.highlight?.kind === 'tag' && state.highlight.v === t ? '.on' : ''}`,
        { type: 'button', onclick: () => setHighlight({ kind: 'tag', v: t }) },
        el(`span.key-icon.${tagClass(t)}`, {}, info.icon),
        el('span', {}, info.name, el('small', {}, what))));
    }
    for (const [kind, has, icon, name, what] of [
      ['door', level.doors?.length, '🚪', 'door', 'a person on either side is "in front of a door"'],
      ['window', level.windows?.length, '🪟', 'window', 'a person on this cell is "in front of a window"'],
    ]) {
      if (!has) continue;
      items.push(el(`button.key${state.highlight?.kind === kind ? '.on' : ''}`,
        { type: 'button', onclick: () => setHighlight({ kind, v: 0 }) },
        el(`span.key-icon.${kind}-key`, {}, icon),
        el('span', {}, name, el('small', {}, what))));
    }
    if (!items.length) return null;
    return el('div.object-legend', {}, el('h3', {}, 'On the board'), el('div.keys', {}, items));
  }

  // What the current tool does, shown next to the tool switch.
  function toolHelp() {
    const b = text => el('strong', {}, text);
    const lines = {
      note: [[b('Click'), ' a cell: note who can or can\'t be there.'], [b('Long press'), ': choose who stands there.'],
        [b('Right-click'), ': cross it out or remove the cross.'], [b('Drag'), ' a person onto cells: note them there.']],
      place: [[b('Click'), ' a cell: choose who stands there.'],
        [b('Right-click'), ': cross it out or remove the cross.'], [b('Drag'), ' a person onto cells: note them there.']],
      mark: [[b('Click'), ' a cell: cross it out or remove the cross.'], [b('Long press'), ': choose who stands there.'],
        [b('Drag'), ' a person onto cells: note them there.']],
    }[state.mode];
    // No one selected: a double click on a person opens their board.
    if (state.selected === null) {
      lines.push([b('Double-click'), assists.showNots ? ' a person: mark where they can or can\'t be.' : ' a person: mark where they can be.']);
    }
    if (state.selected !== null && state.mode !== 'mark') {
      // A person is selected: a click notes them, a double click opens the dialog.
      const who = level.people[state.selected].name.split(' ')[0];
      lines.splice(0, 1,
        [b('Click'), assists.showNots ? ` a cell: note ${who} there (again: can't be there, again: clear).` : ` a cell: note ${who} there (again: clear).`],
        ['Click ', who, ' in the list again to stop.']);
    }
    return el('ul.tool-help', {}, lines.map(parts => el('li', {}, parts)));
  }

  function toggle(name, label) {
    return el('label.switch', {},
      el('input', {
        type: 'checkbox', checked: assists[name],
        onchange: e => { assists[name] = e.target.checked; setSetting(name, assists[name]); draw(); },
      }),
      el('span', {}, label));
  }

  function draw() {
    const scrollY = window.scrollY;
    // Boxes that scroll on their own (like the people list) keep their place.
    const inner = [...app.querySelectorAll('.side, .board-col')].map(e => [e.className, e.scrollTop, e.scrollLeft]);
    const killer = state.solved ? murdererOf(level, level.solution) : -1;
    app.replaceChildren(
      el('nav.topbar', {},
        el('a.btn.icon.back', { href: home, title: `Back to ${homeName}`, 'aria-label': `Back to ${homeName}` }, icon('back')),
        el('span.topbar-title', {}, logo('.bar-logo'), 'Alibi Grid'),

        el('button.btn.icon', { type: 'button', onclick: openShare, title: 'Share this case', 'aria-label': 'Share this case' }, icon('share')),
        el('button.btn', { type: 'button', onclick: openHints, title: 'Step-by-step solution', 'aria-label': 'Get hints' }, '💡', el('span.wide-only', {}, ' Get hints')),
        el('button.btn', { type: 'button', onclick: showHelp, title: 'How to play', 'aria-label': 'Help: how to play' }, el('strong', {}, '?'), el('span.wide-only', {}, 'Help')),
        el('button.btn.icon', { type: 'button', onclick: undo, title: 'Undo', 'aria-label': 'Undo', disabled: !state.history.length || state.solved }, icon('undo')),
        el('button.btn.icon', { type: 'button', onclick: redo, title: 'Redo', 'aria-label': 'Redo', disabled: !state.future.length || state.solved }, icon('redo')),
        el('button.btn', { type: 'button', onclick: reset, title: 'Reset or new board', 'aria-label': 'Reset' }, el('span.wide-only', {}, 'Reset …'), el('span.narrow-only', { 'aria-hidden': 'true' }, icon('reset'))),
        el('button.btn.success.submit', {
          type: 'button', onclick: submit, disabled: !allPlaced(),
          title: allPlaced() ? 'Check your solution' : 'Place everyone first',
        }, state.solved ? '✓ Solved' : 'Submit'),
        fullscreenButton()),
      el('header.case-head', { style: { '--h': theme.hue } },
        el('p.case-campaign', {}, custom ? `${theme.title} · made by you` : theme.title),
        el('h1', {}, `${theme.icon} ${caseName}`, el('small', {}, ` · ${n} × ${n}`)),
        state.solved
          ? el('p.story.closed', {}, `Case closed. ${level.people[killer].name} did it.`)
          : el('p.story', {}, `${level.people[victim].name} was found dead. Place everyone, then name the person who was alone with the victim.`)),
      el('div.game', { style: { '--h': theme.hue, '--n': n, '--sel': state.selected === null ? 'transparent' : color(state.selected) } },
        el('section.board-side', {},
          // Each board: a heading with its zoom buttons next to it, then the board.
          el('div.board-head', {}, el('h2.board-title', {}, 'Floor plan'), drawZoom('zoom')),
          // Split view: the floor plan only shows who stands where; all work happens on the placing board.
          assists.split ? drawBoard('view') : drawBoard(),
          assists.split ? [el('div.board-head.second', {}, el('h2.board-title', {}, 'Placing board'), drawZoom('zoomPlacing')), drawBoard()] : null,
          el('div.tools', {},
            el('div.segmented', { role: 'group', 'aria-label': 'Tap mode' },
              el(`button${state.mode === 'note' ? '.on' : ''}`, { type: 'button', title: 'Tap a cell to note who could be there', onclick: () => { state.mode = 'note'; draw(); } }, '✎ Default'),
              el(`button${state.mode === 'place' ? '.on' : ''}`, { type: 'button', onclick: () => { state.mode = 'place'; draw(); } }, '👤 Place'),
              el(`button${state.mode === 'mark' ? '.on' : ''}`, { type: 'button', onclick: () => { state.mode = 'mark'; state.selected = null; draw(); } }, '✕ Cross out')),
            toolHelp(),
            el('div.options', {},
              el('div.options-head', {},
                el('h3', {}, 'Options'),
                el('button.btn.small', { type: 'button', onclick: resetOptions, title: 'Set all options back to their defaults' }, '↺ Reset')),
              toggle('shade', 'Shade used rows & columns'),
              toggle('checks', 'Mark broken rules in people list'),
              toggle('hidePlaced', 'Auto-hide placed persons at other cells'),
              toggle('pulseHidden', 'Also blink cells with hidden person dots'),
              toggle('split', 'Show separate board for placing'),
              toggle('showNots', 'Use "can\'t be here" notes'))),
          el('h3.legend-title', {}, 'Rooms'),
          drawLegend(),
          drawObjectLegend(),
          el('div.flash', { role: 'status' })),
        el('section.side', {},
          drawRules(),
          drawFacts(),
          el('h2', {}, 'People'),
          el('p.hint', {}, 'Tap a person to light up their cell and notes on the board. Tap again to turn it off.'),
          drawPeople())),
    );
    for (const key of Object.keys(zooms)) if (frameOf(key)) setZoom(key, Math.min(zooms[key], Math.max(1, maxZoom(key))), false);
    window.scrollTo(0, scrollY);
    for (const [cls, top, left] of inner) {
      const e = app.querySelector(`[class="${cls}"]`) || app.querySelector(`.${cls.split(' ')[0]}`);
      if (e) { e.scrollTop = top; e.scrollLeft = left; }
    }
  }

  draw();
}

// ---- js/main.js ----
// App start and screens: home, campaign, game.


const app = document.getElementById('app');

const RULE_LABEL = {
  ranks: '👑 Ranks', trades: '🏹 Trades', glyphs: '🌙 Seals', sea: '🌊 Sea', bandits: '⭐ Bandits',
  distance: '↔️ Keep distance', fullhouse: '🏠 Full house', couples: '💞 Couples', parity: '⚖️ Even & odd',
  river: '🏞️ River', tasks: '🧰 Tasks',
};

function solvedCount(themeId) {
  const c = CAMPAIGNS.find(x => x.theme === themeId);
  return c.levels.filter((_, i) => loadLevel(levelKey(themeId, i))?.solved).length;
}

// ---- player-made cases ----

// One line per rule for the rule cards.
const RULE_SHORT = {
  ranks: 'Nobles stand in a 👑 court room. Commoners never do. Knights can go anywhere.',
  trades: 'A work spot only takes a person with the matching trade, like a 🏹 hunter.',
  glyphs: 'On a 🌙 moon seal the person is alone in the room. On a ☀️ sun seal they are not.',
  sea: 'The 🌊 sea is not a room: anyone in it is alone. Each ship is its own room.',
  bandits: 'Some people are hidden bandits. You know how many. No bandit is in a ⭐ room.',
  distance: 'No two people in one room touch, not even at a corner of their cells.',
  fullhouse: 'Every room holds at least one person. No room stays empty.',
  couples: 'Some people come in 💞 couples. A couple stands diagonally next to each other, in the same room.',
  parity: 'Some rooms are marked even or odd: that is how many people they hold.',
  river: 'A river winds across the board. You know how many people stand on each side of it.',
  tasks: 'Hidden tasks, like "2 hunters, 1 gatherer". Whoever stands on a 🏹 hunter spot is a hunter.',
};

const RULE_NAME = {
  ranks: 'Ranks', trades: 'Trades', glyphs: 'Seals', sea: 'Sea', bandits: 'Bandits',
  distance: 'Keep distance', fullhouse: 'Full house', couples: 'Couples', parity: 'Even & odd',
  river: 'River', tasks: 'Tasks',
};

// Theme for a rule set: the campaign with exactly these rules, else the Time Rift.
function themeFor(rules) {
  if (!rules.length) return THEMES.filter(t => !themeRules(t).length)[Math.floor(Math.random() * 5)];
  if (rules.length === 1) return THEMES.find(t => !t.mix && themeRules(t).join() === rules[0]) || themeById('rift');
  return themeById('rift');
}

// Rules of a game link: a campaign case or a player-made case.
function rulesFromLink(text) {
  const hash = String(text).trim().split('#')[1];
  if (!hash) return null;
  const [path] = hash.replace(/^\/?/, '').split('?');
  const parts = path.split('/');
  if (parts[0] === 'c') {
    const c = CAMPAIGNS.find(x => x.theme === parts[1]);
    const raw = c?.levels[Number(parts[2])];
    const kinds = l => [...new Set((l.facts || []).map(([t]) => t))];
    if (raw) return { rules: raw.rules || [], facts: kinds(raw), size: raw.size };
    if (c) return { rules: themeRules(themeById(parts[1])), facts: [], size: null };
  }
  if (parts[0] === 'x') {
    const data = decodeData(parts[1] || '');
    if (data?.l) return { rules: data.l.rules || [], facts: [...new Set((data.l.facts || []).map(([t]) => t))], size: data.l.size };
  }
  return null;
}

// Short hash, so each player-made case keeps its own progress.
function hashText(text) {
  let h = 5381;
  for (let i = 0; i < text.length; i++) h = (h * 33 + text.charCodeAt(i)) >>> 0;
  return h.toString(36);
}

// Case fact kinds for the cards on the maker screen.
const FACT_CARDS = {
  onCount: ['🪑 On an object', 'How many people sat or lay on one kind of object, like "Only one person was sitting on a chair."'],
  nextCount: ['👋 Next to an object', 'How many people stood right next to one kind of object in their room, like a piano.'],
  roomCount: ['🚪 In a room', 'How many people were in one room, like "Nobody was in the Library."'],
  furniture: ['🛋️ On furniture', 'How many people stood or sat on any object at all.'],
  edge: ['🧱 Outer wall', 'How many people stood along the outer wall of the board.'],
  corner: ['📐 Room corners', 'How many people stood in a corner of their room.'],
  doorCount: ['🚪 Doors', 'How many people stood in front of a door.'],
  windowCount: ['🪟 Windows', 'How many people stood in front of a window.'],
  alone: ['🧍 Alone', 'How many people were alone in their room.'],
  emptyRooms: ['🏚️ Empty rooms', 'How many rooms nobody was in.'],
  touch: ['🤝 Touching', 'How many pairs of people in one room touched at a corner.'],
  apart: ['🎭 Apart', 'No two people of the same rank (or trade) were in the same room. Needs Ranks or Trades.'],
};

// A selectable card with a hidden checkbox. `set` holds the chosen ids.
function choiceCard(id, title, text, set, key) {
  const input = el('input', {
    type: 'checkbox', checked: set.has(id),
    onchange: () => { input.checked ? set.add(id) : set.delete(id); setSetting(key, [...set]); },
  });
  return { id, input, node: el('label.rule-card', {}, input, el('span.rule-card-title', {}, title), el('span.rule-card-text', {}, text)) };
}

function drawMaker() {
  const chosen = new Set(getSetting('makerRules', []).filter(r => RULES.includes(r)));
  const chosenFacts = new Set(getSetting('makerFacts', []).filter(f => FACT_KINDS.includes(f)));
  let size = getSetting('makerSize', 8);
  const status = el('p.maker-status', { role: 'status' });
  const boxes = RULES.map(r => choiceCard(r, RULE_LABEL[r], RULE_SHORT[r], chosen, 'makerRules'));
  const factBoxes = FACT_KINDS.map(f => choiceCard(f, FACT_CARDS[f][0], FACT_CARDS[f][1], chosenFacts, 'makerFacts'));
  const sizeSelect = el('select', {
    'aria-label': 'Board size',
    onchange: e => { size = Number(e.target.value); setSetting('makerSize', size); },
  }, SIZES.map(n => el('option', { value: n, selected: n === size }, `${n} × ${n}`)));
  const sync = () => {
    boxes.forEach(b => { b.input.checked = chosen.has(b.id); });
    factBoxes.forEach(b => { b.input.checked = chosenFacts.has(b.id); });
    sizeSelect.value = String(size);
  };

  async function importRules() {
    const field = el('textarea.import-field', { rows: 3, placeholder: 'Paste a game link here…' });
    const err = el('p.maker-error', { role: 'alert' });
    let result = null;
    const apply = el('button.btn.primary', {
      type: 'button',
      onclick: () => {
        result = rulesFromLink(field.value);
        if (!result) { err.textContent = 'This is not a link to an Alibi Grid case.'; return; }
        document.getElementById('dialog').close('');
      },
    }, 'Apply');
    await showDialog({
      title: 'Import from other game',
      body: [el('p', {}, 'Paste the link of another case. Its board size, special rules and kinds of case facts are copied.'), field, err,
        el('div.dialog-buttons', {}, apply)],
      buttons: [{ label: 'Cancel', value: false }],
    });
    if (!result) return;
    chosen.clear();
    result.rules.forEach(r => chosen.add(r));
    chosenFacts.clear();
    result.facts.forEach(f => chosenFacts.add(f));
    if (result.size) size = result.size;
    setSetting('makerRules', [...chosen]);
    setSetting('makerFacts', [...chosenFacts]);
    setSetting('makerSize', size);
    sync();
    const parts = [
      result.rules.length ? `rules: ${result.rules.map(r => RULE_NAME[r]).join(', ')}` : 'no special rules',
      result.facts.length ? `facts: ${result.facts.map(f => FACT_CARDS[f][0].replace(/^\S+ /, '')).join(', ')}` : 'no case facts',
    ];
    status.textContent = `Copied ${parts.join('; ')}.`;
  }

  // Pick 1 or 2 random cards in one section. Skips pairs that can not work.
  function randomPick(set, ids, key, ok) {
    for (let tries = 0; tries < 50; tries++) {
      const pick = ids.slice().sort(() => Math.random() - 0.5).slice(0, 1 + Math.floor(Math.random() * 2));
      if (!ok(pick)) continue;
      set.clear();
      pick.forEach(id => set.add(id));
      setSetting(key, [...set]);
      sync();
      return;
    }
  }
  const randomRules = () => randomPick(chosen, RULES, 'makerRules', pick => !(pick.includes('distance') && pick.includes('couples')));
  const randomFacts = () => randomPick(chosenFacts, FACT_KINDS, 'makerFacts',
    pick => !pick.includes('apart') || chosen.has('ranks') || chosen.has('trades'));
  const sectionHead = (title, onRandom) => el('div.section-head', {},
    el('h2.maker-section', {}, title),
    onRandom ? el('button.btn.small', { type: 'button', onclick: onRandom, title: `Pick 1 or 2 random ${title.toLowerCase()}` }, '🎲 Random') : null);

  // Stays in the bottom right corner while the page scrolls.
  const go = el('button.btn.success.generate', {
    type: 'button',
    onclick: () => {
      const rules = RULES.filter(r => chosen.has(r));
      const facts = FACT_KINDS.filter(f => chosenFacts.has(f));
      if (rules.includes('distance') && rules.includes('couples')) {
        status.textContent = 'Keep distance and Couples do not go together: a couple always touches at a corner.';
        return;
      }
      if (facts.includes('apart') && !rules.includes('ranks') && !rules.includes('trades')) {
        status.textContent = 'The "Apart" fact needs the Ranks or the Trades rule.';
        return;
      }
      const theme = themeFor(rules);
      go.disabled = true;
      status.textContent = 'Building your case…';
      // Let the page paint before the work starts.
      setTimeout(() => {
        try {
          const seed = Math.floor(Math.random() * 2 ** 31);
          const level = makeLevel(theme, size, seed, rules, facts);
          const data = encodeData({ t: theme.id, l: encodeLevel(theme, level) });
          location.hash = `#/x/${data}`;
        } catch {
          status.textContent = 'No case found with these settings. Try a bigger board, fewer rules or fewer facts.';
          go.disabled = false;
        }
      }, 30);
    },
  }, 'Generate');

  return el('section.maker', {},
    el('div.maker-head', {},
      el('h1', {}, '🛠️ Make your own case'),
      el('button.btn', { type: 'button', onclick: importRules }, 'Import from other game')),
    el('p.lede', {}, 'Every case has exactly one solution and can be solved step by step. Each rule and fact you pick is needed to solve it.'),
    el('h2.maker-section', {}, 'Board settings'),
    el('label.maker-size', {}, el('span', {}, 'Board size'), sizeSelect),
    sectionHead('Special rules', randomRules),
    el('div.maker-rules', { role: 'group', 'aria-label': 'Special rules' }, boxes.map(b => b.node)),
    sectionHead('Case facts', randomFacts),
    el('p.hint', {}, 'Each fact you pick shows up at least once in the case. Pick none for a case without facts.'),
    el('div.maker-rules', { role: 'group', 'aria-label': 'Case facts' }, factBoxes.map(b => b.node)),
    go,
    status);
}

function renderHome() {
  document.title = 'Alibi Grid';
  app.replaceChildren(
    el('header.hero', {},
      logo('.hero-logo', true),
      el('h1', {}, 'Alibi Grid'),
      el('p.lede', {}, 'Logic murder mysteries. Place every suspect. Find the one who was alone with the victim.'),
      el('button.btn', { onclick: showHelp }, 'How to play')),
    el('section.campaigns', {},
      THEMES.map(theme => {
        const total = CAMPAIGNS.find(c => c.theme === theme.id).levels.length;
        const done = solvedCount(theme.id);
        return el('a.campaign-card', { href: `#/c/${theme.id}`, style: { '--h': theme.hue } },
          el('span.campaign-icon', { 'aria-hidden': 'true' }, theme.icon),
          el('span.campaign-text', {},
            el('strong', {}, theme.title),
            el('span', {}, theme.tagline),
            themeRules(theme).length ? el('span.rule-tags', {}, themeRules(theme).map(r => el('span.badge', {}, RULE_LABEL[r]))) : null),
          el('span.progress', {},
            el('span.progress-bar', {}, el('span', { style: { width: `${(100 * done) / total}%` } })),
            el('small', {}, `${done} / ${total} solved`)));
      }),
      // Opens the screen for player-made cases.
      el('a.campaign-card.custom-card', { href: '#/make', style: { '--h': 35 } },
        el('span.campaign-icon', { 'aria-hidden': 'true' }, '🛠️'),
        el('span.campaign-text', {},
          el('strong', {}, 'Custom level…'),
          el('span', {}, 'Pick special rules and a board size. Get a fresh case.')))),
    el('footer.foot', {}, 'Every case has exactly one solution. No guessing needed.'),
  );
}

// Screen for player-made cases. fromCase: the rules came from the last case.
function renderMaker(fromCase = false) {
  document.title = 'Custom level · Alibi Grid';
  const maker = drawMaker();
  app.replaceChildren(
    el('nav.topbar', {},
      el('a.btn.icon.back', { href: '#/', title: 'Back to all campaigns', 'aria-label': 'Back to all campaigns' }, icon('back')),
      el('span.topbar-title', {}, logo('.bar-logo'), 'Alibi Grid')),
    maker);
  if (fromCase) {
    maker.classList.add('flash-in');
    maker.querySelector('.maker-status').textContent = 'The board size, rules and facts of your last case are set. Change them if you like, then press Generate.';
  }
}

function renderCampaign(theme) {
  const campaign = CAMPAIGNS.find(c => c.theme === theme.id);
  document.title = `${theme.title} · Alibi Grid`;
  app.replaceChildren(
    el('nav.topbar', {},
      el('a.btn.icon.back', { href: '#/', title: 'Back to all campaigns', 'aria-label': 'Back to all campaigns' }, icon('back')),
      el('span.topbar-title', {}, logo('.bar-logo'), 'Alibi Grid')),
    el('header.campaign-head', { style: { '--h': theme.hue } },
      el('span.campaign-icon.big', { 'aria-hidden': 'true' }, theme.icon),
      el('div', {}, el('h1', {}, theme.title), el('p.lede', {}, theme.tagline))),
    themeRules(theme).length
      ? el('ul.rule-list', {}, theme.mix
        ? [el('li', {}, 'Each case mixes two or three of these special rules:'), ...themeRules(theme).map(r => el('li', {}, ruleText(r)))]
        : themeRules(theme).map(r => el('li', {}, ruleText(r))))
      : null,
    el('ol.cases', {},
      campaign.levels.map((lv, i) => {
        const state = loadLevel(levelKey(theme.id, i));
        const status = state?.solved ? 'solved' : state?.pos?.some(x => x >= 0) ? 'started' : 'new';
        return el('li', {}, el(`a.case-card.${status}`, { href: `#/c/${theme.id}/${i}`, style: { '--h': theme.hue } },
          el('span.case-num', {}, `Case ${i + 1}`),
          el('span.case-size', {}, `${lv.size} × ${lv.size}`),
          el('span.case-victim', {}, `Victim: ${lv.people[lv.victim]}`),
          theme.mix ? el('span.case-victim', {}, lv.rules.map(r => RULE_LABEL[r]).join(' · ')) : null,
          el('span.case-status', {}, status === 'solved' ? '✓ Closed' : status === 'started' ? 'In progress' : 'Open')));
      })),
  );
}

async function route() {
  const [path, query = ''] = location.hash.replace(/^#\/?/, '').split('?');
  const parts = path.split('/').filter(Boolean);
  window.scrollTo(0, 0);
  if (parts[0] === 'x') {
    const data = decodeData(parts[1] || '');
    const theme = data && themeById(data.t);
    if (theme && data.l) {
      const id = hashText(parts[1]);
      const shared = decodeData(new URLSearchParams(query).get('b') || '');
      let use = null;
      if (shared && Array.isArray(shared.pos)) {
        const mine = loadLevel(`x:${id}`);
        const busy = mine && (mine.pos?.some(x => x >= 0) || mine.marks?.length || Object.keys(mine.notes || {}).length);
        use = !busy || await showDialog({
          title: 'Open shared board?',
          body: el('p', {}, 'This link holds a board for this case. It replaces your board here.'),
          buttons: [{ label: 'Keep mine', value: false }, { label: 'Use shared board', value: true, primary: true }],
        }) ? { ...shared, solved: false } : null;
        history.replaceState(null, '', `#/x/${parts[1]}`);
      }
      return renderGame(app, theme, { theme: theme.id, levels: [data.l] }, 0, use, { id, data: parts[1] });
    }
  }
  if (parts[0] === 'c') {
    const theme = themeById(parts[1]);
    const campaign = CAMPAIGNS.find(c => c.theme === parts[1]);
    if (theme && campaign) {
      const i = Number(parts[2]);
      if (parts.length > 2 && campaign.levels[i]) {
        // A shared board comes as ?b=<data>. Ask before it replaces progress.
        const shared = decodeData(new URLSearchParams(query).get('b') || '');
        let use = null;
        if (shared && Array.isArray(shared.pos)) {
          const mine = loadLevel(levelKey(theme.id, i));
          const busy = mine && (mine.pos?.some(x => x >= 0) || mine.marks?.length || Object.keys(mine.notes || {}).length);
          use = !busy || await showDialog({
            title: 'Open shared board?',
            body: el('p', {}, 'This link holds a board for this case. It replaces your board here.'),
            buttons: [{ label: 'Keep mine', value: false }, { label: 'Use shared board', value: true, primary: true }],
          }) ? { ...shared, solved: false } : null;
          history.replaceState(null, '', `#/c/${theme.id}/${i}`);
        }
        return renderGame(app, theme, campaign, i, use);
      }
      return renderCampaign(theme);
    }
  }
  if (parts[0] === 'make') return renderMaker(new URLSearchParams(query).get('from') === 'case');
  renderHome();
}

window.addEventListener('hashchange', route);
route();

})();
