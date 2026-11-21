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
    "tries": 0,
    "facts": [
     [
      "roomCount",
      1,
      1
     ]
    ],
    "group": 0
   },
   {
    "size": 5,
    "rooms": "0011100111001112223322233",
    "objects": ".a..b....acb.....bfb..b.f",
    "roomNames": [
     "Cellar",
     "Hall",
     "Library",
     "Kitchen"
    ],
    "people": [
     "Viola the vicar",
     "Ada the architect",
     "Bruno the butler",
     "Cedric the cook",
     "Della the doctor"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "on",
      "chair"
     ],
     [
      2,
      "on",
      "sofa"
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "next",
      "clock"
     ]
    ],
    "solution": [
     2,
     9,
     11,
     15,
     23
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
      0,
      "t"
     ],
     [
      10,
      "l"
     ],
     [
      14,
      "r"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "onCount",
      "sofa",
      1
     ],
     [
      "nextCount",
      "sofa",
      1
     ]
    ],
    "group": 0
   },
   {
    "size": 6,
    "rooms": "000111000111000111222233222233444444",
    "objects": ".........f..fb.....c.....f..ea.a.bf.",
    "roomNames": [
     "Billiard Room",
     "Cellar",
     "Library",
     "Kitchen",
     "Dining Room"
    ],
    "people": [
     "Arthur the author",
     "Basil the banker",
     "Vivian the valet",
     "Cora the colonel",
     "Dmitri the dealer",
     "Edgar the editor"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "row",
      1
     ],
     [
      2,
      "col",
      4
     ],
     [
      3,
      "next",
      "shelf"
     ],
     [
      3,
      "col",
      2
     ],
     [
      4,
      "same",
      3
     ],
     [
      5,
      "on",
      "chair"
     ]
    ],
    "solution": [
     0,
     11,
     16,
     20,
     27,
     31
    ],
    "doors": [
     [
      2,
      3
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
      21,
      22
     ],
     [
      25,
      31
     ],
     [
      29,
      35
     ]
    ],
    "windows": [
     [
      17,
      "r"
     ],
     [
      30,
      "l"
     ],
     [
      32,
      "b"
     ],
     [
      35,
      "b"
     ]
    ],
    "tries": 0,
    "group": 0
   },
   {
    "size": 7,
    "rooms": "0000111000011122221112222111333344433334443333444",
    "objects": "...........c..ba..da.......af......a......e..d...",
    "roomNames": [
     "Study",
     "Dining Room",
     "Ballroom",
     "Library",
     "Kitchen"
    ],
    "people": [
     "Alma the architect",
     "Basil the butler",
     "Clara the colonel",
     "Della the doctor",
     "Edgar the envoy",
     "Vera the vicar",
     "Fiona the footman"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "col",
      5
     ],
     [
      1,
      "row",
      1
     ],
     [
      1,
      "col",
      2
     ],
     [
      2,
      "next",
      "chair"
     ],
     [
      3,
      "room",
      2
     ],
     [
      4,
      "next",
      "clock"
     ],
     [
      5,
      "on",
      "chair"
     ],
     [
      6,
      "alone"
     ]
    ],
    "solution": [
     5,
     9,
     20,
     24,
     29,
     35,
     46
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      8,
      15
     ],
     [
      17,
      18
     ],
     [
      26,
      33
     ],
     [
      21,
      28
     ],
     [
      38,
      39
     ]
    ],
    "windows": [
     [
      13,
      "r"
     ],
     [
      14,
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
    "tries": 0,
    "group": 0
   },
   {
    "size": 8,
    "rooms": "0000000000000000111122221111222233344444333444443335555533355555",
    "objects": "a.......cb.a.bb.f..aad......e..d..fb....e..............d........",
    "roomNames": [
     "Hall",
     "Dining Room",
     "Billiard Room",
     "Chapel",
     "Ballroom",
     "Conservatory"
    ],
    "people": [
     "Arthur the author",
     "Bea the butler",
     "Celia the cook",
     "Dexter the doctor",
     "Ena the envoy",
     "Viola the vicar",
     "Freya the footman",
     "Gus the gardener"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "next",
      "sofa"
     ],
     [
      1,
      "row",
      1
     ],
     [
      2,
      "window"
     ],
     [
      3,
      "next",
      "chair"
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
      "col",
      4
     ],
     [
      6,
      "next",
      "plant"
     ],
     [
      7,
      "alone"
     ]
    ],
    "solution": [
     1,
     10,
     23,
     27,
     37,
     44,
     48,
     62
    ],
    "doors": [
     [
      11,
      19
     ],
     [
      13,
      21
     ],
     [
      19,
      20
     ],
     [
      25,
      33
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
      42,
      43
     ],
     [
      58,
      59
     ],
     [
      43,
      51
     ]
    ],
    "windows": [
     [
      7,
      "t"
     ],
     [
      23,
      "r"
     ],
     [
      48,
      "l"
     ],
     [
      55,
      "r"
     ],
     [
      61,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "roomCount",
      3,
      1
     ]
    ],
    "group": 0
   },
   {
    "size": 9,
    "rooms": "000111222000111222000111222000111222333445555333445555333445555333446666333446666",
    "objects": "................b..c...cc....f.c.....de.....cc..f.db.a......f....e.f.......a.a...",
    "roomNames": [
     "Pantry",
     "Billiard Room",
     "Chapel",
     "Kitchen",
     "Library",
     "Ballroom",
     "Gallery"
    ],
    "people": [
     "Viola the valet",
     "Astrid the author",
     "Birgit the butler",
     "Carl the cook",
     "Dora the doctor",
     "Ena the envoy",
     "Frank the footman",
     "Greta the guest",
     "Henrik the housekeeper"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "on",
      "sofa"
     ],
     [
      2,
      "next",
      "clock"
     ],
     [
      2,
      "next",
      "shelf"
     ],
     [
      3,
      "next",
      "shelf"
     ],
     [
      4,
      "same",
      8
     ],
     [
      5,
      "on",
      "chair"
     ],
     [
      6,
      "next",
      "clock"
     ],
     [
      7,
      "next",
      "plant"
     ],
     [
      8,
      "next",
      "chair"
     ],
     [
      8,
      "door"
     ]
    ],
    "solution": [
     0,
     16,
     20,
     33,
     39,
     53,
     59,
     64,
     76
    ],
    "doors": [
     [
      29,
      30
     ],
     [
      27,
      36
     ],
     [
      14,
      15
     ],
     [
      30,
      39
     ],
     [
      32,
      41
     ],
     [
      34,
      43
     ],
     [
      47,
      48
     ],
     [
      40,
      41
     ],
     [
      76,
      77
     ],
     [
      60,
      69
     ]
    ],
    "windows": [
     [
      7,
      "t"
     ],
     [
      17,
      "r"
     ],
     [
      44,
      "r"
     ],
     [
      71,
      "r"
     ],
     [
      74,
      "b"
     ]
    ],
    "tries": 0,
    "group": 0
   },
   {
    "size": 10,
    "rooms": "0000111222000011122200001112220000111222333344445533334444553333444455333344445566667777776666777777",
    "objects": ".b..f.c....a..a....f......f..............ea.......e...b.a......bfbfc....bd.b.....a....d.da...a..eb.a",
    "roomNames": [
     "Hall",
     "Study",
     "Dining Room",
     "Gallery",
     "Pantry",
     "Library",
     "Cellar",
     "Billiard Room"
    ],
    "people": [
     "Astrid the architect",
     "Birgit the butler",
     "Cedric the colonel",
     "Daisy the dealer",
     "Elsa the envoy",
     "Frank the florist",
     "Gwen the gardener",
     "Hazel the heir",
     "Viola the vicar",
     "Isla the inspector"
    ],
    "victim": 8,
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
      "row",
      2
     ],
     [
      3,
      "next",
      "clock"
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
      "col",
      9
     ],
     [
      6,
      "next",
      "plant"
     ],
     [
      7,
      "next",
      "clock"
     ],
     [
      7,
      "next",
      "sofa"
     ],
     [
      8,
      "next",
      "sofa"
     ],
     [
      8,
      "next",
      "piano"
     ],
     [
      9,
      "window"
     ]
    ],
    "solution": [
     1,
     13,
     28,
     36,
     42,
     59,
     60,
     74,
     87,
     95
    ],
    "doors": [
     [
      23,
      24
     ],
     [
      32,
      42
     ],
     [
      36,
      37
     ],
     [
      36,
      46
     ],
     [
      37,
      47
     ],
     [
      38,
      48
     ],
     [
      73,
      74
     ],
     [
      71,
      81
     ],
     [
      57,
      58
     ],
     [
      76,
      86
     ],
     [
      78,
      88
     ],
     [
      93,
      94
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      4,
      "t"
     ],
     [
      20,
      "l"
     ],
     [
      90,
      "l"
     ],
     [
      95,
      "b"
     ],
     [
      97,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "roomCount",
      2,
      1
     ]
    ],
    "group": 0
   },
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
    ],
    "tries": 1,
    "group": 1
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
    ],
    "tries": 2,
    "group": 1
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
    ],
    "tries": 1,
    "group": 1
   },
   {
    "size": 7,
    "rooms": "0000111000011122221112222111333344433334443333444",
    "objects": ".......bb.d...b.....fa.a...b...d.f.....ea....a...",
    "roomNames": [
     "Ballroom",
     "Pantry",
     "Chapel",
     "Gallery",
     "Kitchen"
    ],
    "people": [
     "Arthur the author",
     "Bella the butler",
     "Vince the valet",
     "Clara the colonel",
     "Dora the doctor",
     "Elias the envoy",
     "Felix the florist"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "window"
     ],
     [
      1,
      "room",
      1
     ],
     [
      2,
      "next",
      "chair"
     ],
     [
      3,
      "next",
      "chair"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "next",
      "plant"
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
     0,
     12,
     16,
     24,
     32,
     36,
     48
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
      26,
      33
     ],
     [
      24,
      31
     ],
     [
      38,
      39
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
      34,
      "r"
     ],
     [
      47,
      "b"
     ]
    ],
    "tries": 1,
    "facts": [
     [
      "windowCount",
      null,
      1
     ],
     [
      "furniture",
      null,
      0
     ]
    ],
    "group": 1
   },
   {
    "size": 8,
    "rooms": "0011122200111222001112220011122233344444333444443335555533355555",
    "objects": "....fb.....cc...b..f.b.....d.ba.b.....c.fd.aa.....a....a...cbc..",
    "roomNames": [
     "Billiard Room",
     "Chapel",
     "Pantry",
     "Hall",
     "Cellar",
     "Library"
    ],
    "people": [
     "Alma the architect",
     "Birgit the banker",
     "Cora the cook",
     "Dmitri the doctor",
     "Vivian the vicar",
     "Edith the envoy",
     "Freya the florist",
     "Gwen the guest"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      1,
      "notRoom",
      0
     ],
     [
      2,
      "next",
      "clock"
     ],
     [
      3,
      "same",
      1
     ],
     [
      3,
      "door"
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
      "col",
      4
     ],
     [
      6,
      "next",
      "shelf"
     ],
     [
      6,
      "alone"
     ],
     [
      7,
      "window"
     ]
    ],
    "solution": [
     1,
     14,
     18,
     31,
     35,
     44,
     53,
     56
    ],
    "doors": [
     [
      25,
      26
     ],
     [
      25,
      33
     ],
     [
      28,
      29
     ],
     [
      26,
      34
     ],
     [
      28,
      36
     ],
     [
      31,
      39
     ],
     [
      34,
      35
     ],
     [
      50,
      51
     ],
     [
      43,
      51
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
      32,
      "l"
     ],
     [
      55,
      "r"
     ],
     [
      56,
      "b"
     ]
    ],
    "tries": 1,
    "group": 1
   },
   {
    "size": 9,
    "rooms": "000111122000111122000111122333444555333444555333444555666666555666666555666666555",
    "objects": "...df.ec...c.a.a......a....c..a.db.c...f..a...........b..a..d.e.afe.c........a.a.",
    "roomNames": [
     "Cellar",
     "Ballroom",
     "Study",
     "Library",
     "Kitchen",
     "Chapel",
     "Pantry"
    ],
    "people": [
     "Astrid the architect",
     "Basil the banker",
     "Carl the colonel",
     "Dexter the doctor",
     "Elias the editor",
     "Frank the florist",
     "Gideon the guest",
     "Vivian the valet",
     "Hilda the housekeeper"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "col",
      1
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
      "door"
     ],
     [
      5,
      "same",
      4
     ],
     [
      5,
      "next",
      "clock"
     ],
     [
      6,
      "next",
      "chair"
     ],
     [
      6,
      "door"
     ],
     [
      7,
      "next",
      "piano"
     ],
     [
      8,
      "on",
      "chair"
     ]
    ],
    "solution": [
     0,
     17,
     19,
     29,
     41,
     48,
     58,
     69,
     79
    ],
    "doors": [
     [
      11,
      12
     ],
     [
      20,
      29
     ],
     [
      6,
      7
     ],
     [
      21,
      30
     ],
     [
      24,
      33
     ],
     [
      26,
      35
     ],
     [
      29,
      30
     ],
     [
      46,
      55
     ],
     [
      41,
      42
     ],
     [
      49,
      58
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
      8,
      "t"
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
      71,
      "r"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "nextCount",
      "piano",
      2
     ],
     [
      "nextCount",
      "plant",
      0
     ],
     [
      "corner",
      null,
      3
     ]
    ],
    "group": 1
   },
   {
    "size": 10,
    "rooms": "0000111222000011122200001112220000111222000011122233333344443333334444555555666655555566667777777777",
    "objects": "......dd..........b.....f........d..ea.....b..bb...fe.b.......efbe.c.....cf...cf.......ed.f.f.b...a.",
    "roomNames": [
     "Pantry",
     "Dining Room",
     "Kitchen",
     "Billiard Room",
     "Study",
     "Chapel",
     "Ballroom",
     "Library"
    ],
    "people": [
     "Astrid the author",
     "Viola the valet",
     "Bruno the butler",
     "Cora the colonel",
     "Dora the doctor",
     "Edith the editor",
     "Flora the footman",
     "Gwen the gardener",
     "Hilda the heir",
     "Ivy the inspector"
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
      "sofa"
     ],
     [
      2,
      "col",
      1
     ],
     [
      3,
      "on",
      "chair"
     ],
     [
      4,
      "same",
      2
     ],
     [
      4,
      "window"
     ],
     [
      5,
      "next",
      "sofa"
     ],
     [
      5,
      "same",
      6
     ],
     [
      6,
      "next",
      "clock"
     ],
     [
      7,
      "door"
     ],
     [
      8,
      "row",
      8
     ],
     [
      9,
      "on",
      "chair"
     ],
     [
      9,
      "alone"
     ]
    ],
    "solution": [
     5,
     19,
     21,
     37,
     40,
     53,
     64,
     76,
     82,
     98
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      43,
      53
     ],
     [
      6,
      7
     ],
     [
      44,
      54
     ],
     [
      46,
      56
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
      63,
      73
     ],
     [
      68,
      78
     ],
     [
      75,
      76
     ],
     [
      85,
      95
     ],
     [
      86,
      96
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      8,
      "t"
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
      50,
      "l"
     ],
     [
      95,
      "b"
     ]
    ],
    "tries": 1,
    "facts": [
     [
      "alone",
      null,
      4
     ]
    ],
    "group": 1
   },
   {
    "size": 11,
    "rooms": "0000111111100001111111000011111110000222333344442223333444422233334444222333344445555666777755556667777555566677775555666",
    "objects": "a..c....fc..e.bfd..b.e.f.a.......a.e..d.e..b.ed.a....a...a.af............efd...........fb....b.e.......e.b......e.bdc...b",
    "roomNames": [
     "Dining Room",
     "Chapel",
     "Billiard Room",
     "Pantry",
     "Ballroom",
     "Conservatory",
     "Hall",
     "Kitchen"
    ],
    "people": [
     "Albert the author",
     "Bella the butler",
     "Viola the vicar",
     "Carl the cook",
     "Dmitri the dealer",
     "Edith the envoy",
     "Flora the florist",
     "Gus the gardener",
     "Hilda the heir",
     "Ivy the inspector",
     "Jutta the jeweller"
    ],
    "victim": 2,
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
      "chair"
     ],
     [
      2,
      "window"
     ],
     [
      3,
      "next",
      "clock"
     ],
     [
      3,
      "next",
      "chair"
     ],
     [
      4,
      "next",
      "chair"
     ],
     [
      5,
      "on",
      "chair"
     ],
     [
      5,
      "next",
      "clock"
     ],
     [
      6,
      "door"
     ],
     [
      7,
      "next",
      "clock"
     ],
     [
      8,
      "alone"
     ],
     [
      9,
      "next",
      "sofa"
     ],
     [
      9,
      "next",
      "piano"
     ],
     [
      10,
      "on",
      "sofa"
     ]
    ],
    "solution": [
     6,
     18,
     22,
     34,
     52,
     59,
     69,
     86,
     90,
     104,
     120
    ],
    "doors": [
     [
      25,
      26
     ],
     [
      36,
      37
     ],
     [
      36,
      47
     ],
     [
      28,
      39
     ],
     [
      31,
      42
     ],
     [
      61,
      62
     ],
     [
      69,
      70
     ],
     [
      71,
      82
     ],
     [
      73,
      84
     ],
     [
      74,
      85
     ],
     [
      80,
      81
     ],
     [
      77,
      88
     ],
     [
      106,
      107
     ],
     [
      113,
      114
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      4,
      "t"
     ],
     [
      22,
      "l"
     ],
     [
      76,
      "r"
     ],
     [
      111,
      "b"
     ],
     [
      119,
      "b"
     ],
     [
      120,
      "r"
     ]
    ],
    "tries": 2,
    "group": 1
   },
   {
    "size": 12,
    "rooms": "000011112222000011112222000011112222000011112222333344445555333344445555333344445555333344445555333344445555666677788888666677788888666677788888",
    "objects": ".b..d...c.bc....df.e......b........bed...e.b..c.......dfb....fc......f.......b..f.b...f......a..c.e..b..b...a..fabaceda....beed...aa...a...d....",
    "roomNames": [
     "Ballroom",
     "Cellar",
     "Conservatory",
     "Pantry",
     "Gallery",
     "Kitchen",
     "Hall",
     "Chapel",
     "Library"
    ],
    "people": [
     "Alma the architect",
     "Bruno the banker",
     "Celia the colonel",
     "Vince the vicar",
     "Dmitri the dealer",
     "Elias the envoy",
     "Fiona the florist",
     "Gus the gardener",
     "Hilda the housekeeper",
     "Ivy the inspector",
     "Jasper the judge",
     "Klaus the knitter"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "next",
      "plant"
     ],
     [
      0,
      "same",
      2
     ],
     [
      1,
      "next",
      "sofa"
     ],
     [
      1,
      "col",
      10
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
      4,
      "next",
      "piano"
     ],
     [
      5,
      "next",
      "shelf"
     ],
     [
      5,
      "same",
      6
     ],
     [
      6,
      "next",
      "shelf"
     ],
     [
      6,
      "next",
      "clock"
     ],
     [
      7,
      "row",
      7
     ],
     [
      8,
      "same",
      4
     ],
     [
      8,
      "door"
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
      11,
      "alone"
     ]
    ],
    "solution": [
     7,
     22,
     30,
     44,
     53,
     63,
     74,
     95,
     100,
     109,
     120,
     141
    ],
    "doors": [
     [
      27,
      28
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
      44,
      56
     ],
     [
      99,
      100
     ],
     [
      98,
      110
     ],
     [
      67,
      68
     ],
     [
      101,
      113
     ],
     [
      103,
      115
     ],
     [
      107,
      119
     ],
     [
      111,
      112
     ],
     [
      126,
      127
     ]
    ],
    "windows": [
     [
      4,
      "t"
     ],
     [
      11,
      "r"
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
      84,
      "l"
     ],
     [
      133,
      "b"
     ],
     [
      134,
      "b"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "onCount",
      "chair",
      0
     ],
     [
      "roomCount",
      6,
      2
     ]
    ],
    "group": 1
   },
   {
    "size": 4,
    "rooms": "0011001122222222",
    "objects": "....ff.......f..",
    "roomNames": [
     "Study",
     "Billiard Room",
     "Cellar"
    ],
    "people": [
     "Alma the architect",
     "Basil the banker",
     "Vivian the valet",
     "Cedric the cook"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "door"
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
      3,
      "next",
      "clock"
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
      5,
      9
     ],
     [
      6,
      10
     ]
    ],
    "windows": [
     [
      3,
      "r"
     ],
     [
      12,
      "b"
     ]
    ],
    "tries": 3,
    "group": 2
   },
   {
    "size": 5,
    "rooms": "0001100011000112223322233",
    "objects": ".cc.a..a..f.e..a...b.....",
    "roomNames": [
     "Library",
     "Study",
     "Dining Room",
     "Hall"
    ],
    "people": [
     "Victor the valet",
     "Arthur the architect",
     "Birgit the butler",
     "Cedric the cook",
     "Dexter the dealer"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "window"
     ],
     [
      1,
      "next",
      "shelf"
     ],
     [
      2,
      "notRoom",
      3
     ],
     [
      3,
      "door"
     ],
     [
      3,
      "same",
      4
     ],
     [
      4,
      "notRoom",
      1
     ]
    ],
    "solution": [
     4,
     6,
     13,
     17,
     20
    ],
    "doors": [
     [
      7,
      8
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
      4,
      "r"
     ],
     [
      15,
      "l"
     ],
     [
      23,
      "b"
     ]
    ],
    "tries": 3,
    "group": 2
   },
   {
    "size": 6,
    "rooms": "001122001122001122331122334422334422",
    "objects": ".f.......ad......fb...fb..e..d..a.f.",
    "roomNames": [
     "Conservatory",
     "Chapel",
     "Cellar",
     "Library",
     "Kitchen"
    ],
    "people": [
     "Vivian the valet",
     "Alma the architect",
     "Bea the butler",
     "Cora the cook",
     "Dexter the dealer",
     "Edith the editor"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "next",
      "clock"
     ],
     [
      2,
      "door"
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
      "piano"
     ],
     [
      5,
      "next",
      "clock"
     ]
    ],
    "solution": [
     4,
     7,
     14,
     18,
     27,
     35
    ],
    "doors": [
     [
      13,
      14
     ],
     [
      12,
      18
     ],
     [
      9,
      10
     ],
     [
      19,
      20
     ],
     [
      21,
      27
     ],
     [
      27,
      28
     ],
     [
      31,
      32
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      5,
      "t"
     ],
     [
      31,
      "b"
     ],
     [
      33,
      "b"
     ]
    ],
    "tries": 4,
    "facts": [
     [
      "touch",
      null,
      0
     ]
    ],
    "group": 2
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
    ],
    "tries": 5,
    "group": 2
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
    ],
    "tries": 4,
    "group": 2
   },
   {
    "size": 9,
    "rooms": "001112222001112222001113333001113333444455555444455555444466666444466666444466666",
    "objects": "....f...d.e.f.fc.ac.a..b.ad.f.da.bf...cdd.f....f.a..e....bbc.a..e.d..c...d......a",
    "roomNames": [
     "Dining Room",
     "Library",
     "Gallery",
     "Ballroom",
     "Cellar",
     "Conservatory",
     "Pantry"
    ],
    "people": [
     "Albert the architect",
     "Bea the butler",
     "Celia the cook",
     "Victor the valet",
     "Dora the dealer",
     "Edgar the envoy",
     "Flora the footman",
     "Gwen the guest",
     "Henrik the housekeeper"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "next",
      "plant"
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "on",
      "chair"
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
      "on",
      "chair"
     ],
     [
      6,
      "next",
      "plant"
     ],
     [
      7,
      "next",
      "plant"
     ],
     [
      7,
      "next",
      "piano"
     ],
     [
      8,
      "next",
      "shelf"
     ],
     [
      8,
      "alone"
     ]
    ],
    "solution": [
     3,
     9,
     25,
     32,
     44,
     49,
     55,
     65,
     78
    ],
    "doors": [
     [
      28,
      29
     ],
     [
      28,
      37
     ],
     [
      4,
      5
     ],
     [
      31,
      32
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
      16,
      25
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
      58
     ],
     [
      53,
      62
     ]
    ],
    "windows": [
     [
      8,
      "t"
     ],
     [
      36,
      "l"
     ],
     [
      53,
      "r"
     ],
     [
      62,
      "r"
     ],
     [
      72,
      "b"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "nextCount",
      "chair",
      0
     ]
    ],
    "group": 2
   },
   {
    "size": 10,
    "rooms": "0000111222000011122200001112223333111222333311122244445566664444556666444455666644445577774444557777",
    "objects": "ab......b..ed.c..a..c....b..bf.d..b.......f.c...caacd.aa.fe..b......b.d.ae..c....f...a...b.e.e...c..",
    "roomNames": [
     "Conservatory",
     "Billiard Room",
     "Dining Room",
     "Kitchen",
     "Cellar",
     "Chapel",
     "Gallery",
     "Study"
    ],
    "people": [
     "Arthur the architect",
     "Basil the banker",
     "Cedric the colonel",
     "Della the doctor",
     "Edith the envoy",
     "Frank the footman",
     "Grace the guest",
     "Hilda the heir",
     "Igor the illustrator",
     "Vince the valet"
    ],
    "victim": 9,
    "clues": [
     [
      0,
      "on",
      "chair"
     ],
     [
      1,
      "window"
     ],
     [
      2,
      "next",
      "chair"
     ],
     [
      2,
      "next",
      "sofa"
     ],
     [
      3,
      "notRoom",
      1
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
      "chair"
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "col",
      4
     ],
     [
      7,
      "next",
      "sofa"
     ],
     [
      7,
      "next",
      "clock"
     ],
     [
      8,
      "next",
      "sofa"
     ],
     [
      8,
      "door"
     ],
     [
      9,
      "next",
      "plant"
     ]
    ],
    "solution": [
     0,
     19,
     27,
     33,
     46,
     55,
     64,
     71,
     88,
     92
    ],
    "doors": [
     [
      23,
      24
     ],
     [
      20,
      30
     ],
     [
      26,
      27
     ],
     [
      33,
      34
     ],
     [
      45,
      55
     ],
     [
      46,
      56
     ],
     [
      49,
      59
     ],
     [
      43,
      53
     ],
     [
      53,
      54
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
      78,
      88
     ]
    ],
    "windows": [
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
      40,
      "l"
     ],
     [
      95,
      "b"
     ],
     [
      97,
      "b"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "roomCount",
      2,
      2
     ],
     [
      "onCount",
      "sofa",
      0
     ]
    ],
    "group": 2
   },
   {
    "size": 11,
    "rooms": "0000011111100000111111000001122223333311222233333112222333344555553333445555566664455555666644777776666447777766664477777",
    "objects": "...c.b..e...cb..a.......f.....f.cd.be.....b.a...d.e.cf.c...b.dfc.b.a...a...d....b..................dd..........ca.da...ae",
    "roomNames": [
     "Billiard Room",
     "Hall",
     "Dining Room",
     "Conservatory",
     "Pantry",
     "Cellar",
     "Study",
     "Library"
    ],
    "people": [
     "Ada the architect",
     "Vivian the vicar",
     "Basil the butler",
     "Cedric the colonel",
     "Dora the doctor",
     "Elias the editor",
     "Felix the footman",
     "Gideon the gardener",
     "Hazel the housekeeper",
     "Isla the illustrator",
     "Juno the jeweller"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "next",
      "shelf"
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "next",
      "clock"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "on",
      "chair"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "on",
      "sofa"
     ],
     [
      6,
      "same",
      5
     ],
     [
      6,
      "next",
      "shelf"
     ],
     [
      7,
      "on",
      "sofa"
     ],
     [
      8,
      "row",
      8
     ],
     [
      8,
      "col",
      9
     ],
     [
      8,
      "same",
      10
     ],
     [
      9,
      "next",
      "piano"
     ],
     [
      10,
      "door"
     ]
    ],
    "solution": [
     1,
     15,
     29,
     38,
     44,
     65,
     74,
     80,
     97,
     101,
     116
    ],
    "doors": [
     [
      15,
      16
     ],
     [
      26,
      37
     ],
     [
      50,
      51
     ],
     [
      37,
      38
     ],
     [
      49,
      60
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
      69,
      70
     ],
     [
      67,
      78
     ],
     [
      82,
      83
     ],
     [
      91,
      92
     ],
     [
      115,
      116
     ],
     [
      83,
      94
     ]
    ],
    "windows": [
     [
      0,
      "t"
     ],
     [
      11,
      "l"
     ],
     [
      33,
      "l"
     ],
     [
      66,
      "l"
     ],
     [
      99,
      "l"
     ],
     [
      110,
      "b"
     ],
     [
      112,
      "b"
     ]
    ],
    "tries": 5,
    "group": 2
   },
   {
    "size": 12,
    "rooms": "000000011111000000011111000000011111222222233333222222233333222222233333444455556666444455556666444455557777444455557777888855557777888855557777",
    "objects": "e..........dbd...dc...b.ee.adca.d..f.e..b.bb.....afbe..bba.............e.bf.......b........c..a...c....dbc..a......a..a....c..f...d.bd.c.bd.aa.e",
    "roomNames": [
     "Library",
     "Chapel",
     "Kitchen",
     "Gallery",
     "Study",
     "Hall",
     "Cellar",
     "Conservatory",
     "Ballroom"
    ],
    "people": [
     "Ada the architect",
     "Victor the vicar",
     "Bella the butler",
     "Cedric the colonel",
     "Della the dealer",
     "Edith the editor",
     "Frank the florist",
     "Gideon the guest",
     "Hana the housekeeper",
     "Ivy the illustrator",
     "Jutta the jeweller",
     "Konrad the keeper"
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
      "plant"
     ],
     [
      3,
      "window"
     ],
     [
      4,
      "same",
      3
     ],
     [
      4,
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
      "plant"
     ],
     [
      6,
      "on",
      "sofa"
     ],
     [
      7,
      "door"
     ],
     [
      8,
      "next",
      "shelf"
     ],
     [
      8,
      "door"
     ],
     [
      9,
      "next",
      "chair"
     ],
     [
      10,
      "same",
      8
     ],
     [
      11,
      "on",
      "sofa"
     ],
     [
      11,
      "next",
      "piano"
     ]
    ],
    "solution": [
     9,
     19,
     26,
     36,
     54,
     64,
     82,
     87,
     104,
     109,
     131,
     137
    ],
    "doors": [
     [
      30,
      31
     ],
     [
      30,
      42
     ],
     [
      31,
      43
     ],
     [
      54,
      55
     ],
     [
      61,
      73
     ],
     [
      65,
      77
     ],
     [
      67,
      79
     ],
     [
      69,
      81
     ],
     [
      87,
      88
     ],
     [
      111,
      123
     ],
     [
      91,
      92
     ],
     [
      115,
      116
     ],
     [
      135,
      136
     ],
     [
      92,
      104
     ]
    ],
    "windows": [
     [
      9,
      "t"
     ],
     [
      11,
      "r"
     ],
     [
      36,
      "l"
     ],
     [
      72,
      "l"
     ],
     [
      132,
      "b"
     ],
     [
      136,
      "b"
     ],
     [
      138,
      "b"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "touch",
      null,
      0
     ],
     [
      "nextCount",
      "sofa",
      1
     ]
    ],
    "group": 2
   },
   {
    "size": 4,
    "rooms": "0000000011221122",
    "objects": ".fb...b..f..b.a.",
    "roomNames": [
     "Ballroom",
     "Kitchen",
     "Cellar"
    ],
    "people": [
     "Ada the architect",
     "Vince the valet",
     "Bella the banker",
     "Carl the cook"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "on",
      "sofa"
     ],
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
      "clock"
     ]
    ],
    "solution": [
     2,
     4,
     11,
     13
    ],
    "doors": [
     [
      4,
      8
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
      14,
      "b"
     ],
     [
      15,
      "r"
     ]
    ],
    "tries": 6,
    "group": 3
   },
   {
    "size": 5,
    "rooms": "0001100011223332233322333",
    "objects": "...e....c.d.e.....bd.b.a.",
    "roomNames": [
     "Study",
     "Billiard Room",
     "Library",
     "Conservatory"
    ],
    "people": [
     "Ada the architect",
     "Victor the valet",
     "Bruno the butler",
     "Celia the colonel",
     "Della the doctor"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "col",
      1
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "next",
      "plant"
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "same",
      2
     ]
    ],
    "solution": [
     1,
     7,
     13,
     15,
     24
    ],
    "doors": [
     [
      7,
      8
     ],
     [
      6,
      11
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
      4,
      "t"
     ],
     [
      20,
      "l"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "onCount",
      "sofa",
      0
     ]
    ],
    "group": 3
   },
   {
    "size": 6,
    "rooms": "000011000011223344223344223344223344",
    "objects": "b..f....d..a.ddf..a.a...d...........",
    "roomNames": [
     "Hall",
     "Kitchen",
     "Library",
     "Dining Room",
     "Pantry"
    ],
    "people": [
     "Arthur the architect",
     "Viola the vicar",
     "Basil the butler",
     "Clara the colonel",
     "Dmitri the doctor",
     "Ena the editor"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "next",
      "clock"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "on",
      "chair"
     ],
     [
      4,
      "row",
      4
     ],
     [
      5,
      "alone"
     ]
    ],
    "solution": [
     2,
     7,
     17,
     18,
     28,
     33
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
      8,
      14
     ],
     [
      11,
      17
     ],
     [
      25,
      26
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
      5,
      "r"
     ],
     [
      17,
      "r"
     ],
     [
      18,
      "l"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "edge",
      null,
      4
     ],
     [
      "roomCount",
      2,
      1
     ],
     [
      "nextCount",
      "sofa",
      0
     ]
    ],
    "group": 3
   },
   {
    "size": 7,
    "rooms": "0000111000011122221112222111333444433344443334444",
    "objects": "ba..ab.f....e..ef..b..a...a...db.d...d..a...a.a..",
    "roomNames": [
     "Conservatory",
     "Kitchen",
     "Ballroom",
     "Dining Room",
     "Gallery"
    ],
    "people": [
     "Astrid the author",
     "Bruno the butler",
     "Celia the colonel",
     "Daisy the doctor",
     "Edgar the editor",
     "Viola the valet",
     "Felix the footman"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "window"
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "next",
      "sofa"
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "next",
      "chair"
     ],
     [
      4,
      "next",
      "sofa"
     ],
     [
      5,
      "on",
      "chair"
     ],
     [
      6,
      "alone"
     ]
    ],
    "solution": [
     1,
     10,
     20,
     23,
     32,
     40,
     42
    ],
    "doors": [
     [
      10,
      11
     ],
     [
      7,
      14
     ],
     [
      24,
      25
     ],
     [
      27,
      34
     ],
     [
      22,
      29
     ],
     [
      24,
      31
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
      14,
      "l"
     ],
     [
      41,
      "r"
     ],
     [
      47,
      "b"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "onCount",
      "chair",
      2
     ],
     [
      "doorCount",
      null,
      1
     ]
    ],
    "group": 3
   },
   {
    "size": 8,
    "rooms": "0000111100001111000011112222233322222333222223334444455544444555",
    "objects": "a..f........f.......a..b....c.e..d.b.....e......e.......a...d.c.",
    "roomNames": [
     "Pantry",
     "Chapel",
     "Ballroom",
     "Study",
     "Gallery",
     "Kitchen"
    ],
    "people": [
     "Ada the architect",
     "Basil the banker",
     "Carl the cook",
     "Dexter the dealer",
     "Vera the valet",
     "Elias the editor",
     "Flora the florist",
     "Greta the gardener"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "on",
      "chair"
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "same",
      0
     ],
     [
      3,
      "col",
      5
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "next",
      "plant"
     ],
     [
      7,
      "next",
      "shelf"
     ]
    ],
    "solution": [
     0,
     14,
     19,
     29,
     34,
     44,
     49,
     63
    ],
    "doors": [
     [
      3,
      4
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
      22,
      30
     ],
     [
      44,
      45
     ],
     [
      44,
      52
     ],
     [
      45,
      53
     ],
     [
      60,
      61
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
      8,
      "l"
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
    "tries": 7,
    "facts": [
     [
      "corner",
      null,
      5
     ]
    ],
    "group": 3
   },
   {
    "size": 9,
    "rooms": "000111111000111111000111111222333333222333333444555555444555555444666666444666666",
    "objects": "......f...cea..df.....dcd...ff..a..b......bbd..ca..c.f....b...eb.f.a.e.b.a.e.c..c",
    "roomNames": [
     "Gallery",
     "Conservatory",
     "Study",
     "Chapel",
     "Cellar",
     "Billiard Room",
     "Library"
    ],
    "people": [
     "Alma the author",
     "Birgit the banker",
     "Carl the cook",
     "Dora the dealer",
     "Edith the envoy",
     "Vivian the vicar",
     "Fiona the footman",
     "Gus the gardener",
     "Hana the heir"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "next",
      "shelf"
     ],
     [
      0,
      "alone"
     ],
     [
      1,
      "next",
      "piano"
     ],
     [
      2,
      "row",
      2
     ],
     [
      3,
      "next",
      "chair"
     ],
     [
      4,
      "same",
      3
     ],
     [
      5,
      "notRoom",
      3
     ],
     [
      6,
      "next",
      "plant"
     ],
     [
      7,
      "next",
      "plant"
     ],
     [
      7,
      "door"
     ],
     [
      8,
      "next",
      "clock"
     ]
    ],
    "solution": [
     1,
     14,
     26,
     31,
     42,
     45,
     61,
     66,
     74
    ],
    "doors": [
     [
      11,
      12
     ],
     [
      18,
      27
     ],
     [
      23,
      32
     ],
     [
      38,
      39
     ],
     [
      37,
      46
     ],
     [
      42,
      51
     ],
     [
      56,
      57
     ],
     [
      65,
      66
     ],
     [
      59,
      68
     ]
    ],
    "windows": [
     [
      8,
      "t"
     ],
     [
      35,
      "r"
     ],
     [
      74,
      "b"
     ],
     [
      78,
      "b"
     ],
     [
      79,
      "b"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "furniture",
      null,
      1
     ],
     [
      "roomCount",
      4,
      2
     ],
     [
      "emptyRooms",
      null,
      1
     ]
    ],
    "group": 3
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
    ],
    "tries": 6,
    "group": 3
   },
   {
    "size": 11,
    "rooms": "0000001111100000011111000000111112223334444422233344444222333444442223334444455566667777555666677775556666777755566667777",
    "objects": "aee.b........d....fbfed.....b..b.aa......eb.....a.b...a.b...e..ec...bf.....b.....e.....e...cb.....be....f.bb....f..b.f.a.",
    "roomNames": [
     "Dining Room",
     "Kitchen",
     "Hall",
     "Ballroom",
     "Cellar",
     "Conservatory",
     "Gallery",
     "Study"
    ],
    "people": [
     "Albert the author",
     "Bruno the butler",
     "Celia the colonel",
     "Daisy the dealer",
     "Ena the envoy",
     "Fiona the footman",
     "Greta the guest",
     "Henrik the heir",
     "Vince the vicar",
     "Ivo the illustrator",
     "Jutta the jeweller"
    ],
    "victim": 8,
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
      1,
      "next",
      "piano"
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
      "chair"
     ],
     [
      4,
      "next",
      "chair"
     ],
     [
      5,
      "next",
      "plant"
     ],
     [
      6,
      "same",
      3
     ],
     [
      6,
      "next",
      "shelf"
     ],
     [
      7,
      "door"
     ],
     [
      9,
      "same",
      7
     ],
     [
      9,
      "next",
      "clock"
     ],
     [
      10,
      "on",
      "sofa"
     ]
    ],
    "solution": [
     4,
     11,
     30,
     43,
     47,
     62,
     75,
     78,
     94,
     101,
     115
    ],
    "doors": [
     [
      16,
      17
     ],
     [
      22,
      33
     ],
     [
      27,
      38
     ],
     [
      29,
      40
     ],
     [
      35,
      36
     ],
     [
      67,
      78
     ],
     [
      71,
      72
     ],
     [
      71,
      82
     ],
     [
      72,
      83
     ],
     [
      74,
      85
     ],
     [
      79,
      80
     ],
     [
      83,
      84
     ]
    ],
    "windows": [
     [
      7,
      "t"
     ],
     [
      11,
      "l"
     ],
     [
      54,
      "r"
     ],
     [
      88,
      "l"
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
      119,
      "b"
     ]
    ],
    "tries": 7,
    "facts": [
     [
      "nextCount",
      "chair",
      3
     ],
     [
      "nextCount",
      "shelf",
      1
     ]
    ],
    "group": 3
   },
   {
    "size": 12,
    "rooms": "001111222222001111222222001111222222001111222222001111333344005555333344005555333344005555333344666667777888666667777888666667777888666667777888",
    "objects": "....bbbfb.e.f..........f.efcf...f..............b..df..f..b..d...a...f..c.....ef.....ef.....ae.f..a.ee..a.......f......b..............e...b....ce",
    "roomNames": [
     "Kitchen",
     "Gallery",
     "Study",
     "Library",
     "Ballroom",
     "Pantry",
     "Hall",
     "Cellar",
     "Chapel"
    ],
    "people": [
     "Ada the author",
     "Bruno the banker",
     "Clara the cook",
     "Dora the doctor",
     "Elsa the editor",
     "Flora the footman",
     "Gideon the gardener",
     "Vivian the valet",
     "Hugo the heir",
     "Ivo the inspector",
     "Jonas the judge",
     "Kira the keeper"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "window"
     ],
     [
      0,
      "alone"
     ],
     [
      1,
      "same",
      3
     ],
     [
      2,
      "next",
      "clock"
     ],
     [
      2,
      "col",
      9
     ],
     [
      3,
      "col",
      8
     ],
     [
      4,
      "room",
      0
     ],
     [
      5,
      "on",
      "chair"
     ],
     [
      6,
      "next",
      "clock"
     ],
     [
      6,
      "col",
      10
     ],
     [
      7,
      "next",
      "clock"
     ],
     [
      8,
      "next",
      "plant"
     ],
     [
      9,
      "alone"
     ],
     [
      10,
      "row",
      10
     ],
     [
      10,
      "col",
      0
     ],
     [
      11,
      "same",
      10
     ]
    ],
    "solution": [
     5,
     19,
     33,
     44,
     49,
     64,
     82,
     95,
     98,
     114,
     120,
     135
    ],
    "doors": [
     [
      1,
      2
     ],
     [
      61,
      62
     ],
     [
      84,
      96
     ],
     [
      41,
      42
     ],
     [
      53,
      54
     ],
     [
      53,
      65
     ],
     [
      45,
      57
     ],
     [
      46,
      58
     ],
     [
      69,
      70
     ],
     [
      65,
      66
     ],
     [
      91,
      103
     ],
     [
      93,
      105
     ],
     [
      94,
      106
     ],
     [
      88,
      100
     ],
     [
      89,
      101
     ],
     [
      112,
      113
     ],
     [
      140,
      141
     ]
    ],
    "windows": [
     [
      5,
      "t"
     ],
     [
      23,
      "r"
     ],
     [
      119,
      "r"
     ],
     [
      131,
      "r"
     ],
     [
      136,
      "b"
     ],
     [
      141,
      "b"
     ],
     [
      143,
      "r"
     ]
    ],
    "tries": 9,
    "facts": [
     [
      "nextCount",
      "sofa",
      0
     ]
    ],
    "group": 3
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
    ],
    "tries": 0,
    "group": 0
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
    ],
    "tries": 0,
    "group": 0
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
    ],
    "tries": 0,
    "group": 0
   },
   {
    "size": 7,
    "rooms": "0001111000111100022220002222333333333333334444444",
    "objects": ".....a..d..f...ab..d..a...ba..ca.d.ab....a.ca....",
    "roomNames": [
     "Observation Car",
     "Mail Car",
     "Corridor",
     "Sleeper B",
     "Galley"
    ],
    "people": [
     "Alma the accordionist",
     "Bruno the bookseller",
     "Cedric the courier",
     "Viola the violinist",
     "Dexter the dentist",
     "Elias the engineer",
     "Freya the firefighter"
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
      "bunk"
     ],
     [
      1,
      "next",
      "crate"
     ],
     [
      2,
      "next",
      "crate"
     ],
     [
      2,
      "window"
     ],
     [
      3,
      "next",
      "seat"
     ],
     [
      4,
      "next",
      "bunk"
     ],
     [
      5,
      "same",
      4
     ],
     [
      6,
      "room",
      4
     ]
    ],
    "solution": [
     3,
     9,
     20,
     21,
     29,
     39,
     47
    ],
    "doors": [
     [
      2,
      3
     ],
     [
      23,
      24
     ],
     [
      23,
      30
     ],
     [
      11,
      18
     ],
     [
      27,
      34
     ],
     [
      40,
      47
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      13,
      "r"
     ],
     [
      20,
      "r"
     ],
     [
      48,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "roomCount",
      2,
      1
     ],
     [
      "nextCount",
      "seat",
      2
     ]
    ],
    "group": 0
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
    "tries": 0,
    "facts": [
     [
      "onCount",
      "bunk",
      1
     ],
     [
      "roomCount",
      5,
      2
     ]
    ],
    "group": 0
   },
   {
    "size": 9,
    "rooms": "000111122000111122333111122333111122333444444333444444555555666555555666555555666",
    "objects": "...a.......deb.fb.db....a..be..a...b..a.......bc...a.....f.....b.a...c..b.bfa....",
    "roomNames": [
     "Corridor",
     "Sleeper A",
     "Sleeper C",
     "Dining Car",
     "Sleeper B",
     "Mail Car",
     "Guard's Van"
    ],
    "people": [
     "Ada the attendant",
     "Bella the banker",
     "Cora the conductor",
     "Dmitri the diplomat",
     "Edgar the envoy",
     "Fiona the fiddler",
     "Greta the guard",
     "Viola the violinist",
     "Hazel the hatter"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "next",
      "lamp"
     ],
     [
      1,
      "same",
      0
     ],
     [
      2,
      "on",
      "seat"
     ],
     [
      3,
      "next",
      "crate"
     ],
     [
      4,
      "next",
      "lamp"
     ],
     [
      5,
      "next",
      "seat"
     ],
     [
      6,
      "next",
      "wine"
     ],
     [
      7,
      "on",
      "seat"
     ],
     [
      8,
      "window"
     ]
    ],
    "solution": [
     3,
     14,
     24,
     27,
     37,
     52,
     58,
     65,
     80
    ],
    "doors": [
     [
      2,
      3
     ],
     [
      10,
      19
     ],
     [
      15,
      16
     ],
     [
      20,
      21
     ],
     [
      30,
      39
     ],
     [
      34,
      43
     ],
     [
      38,
      39
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
      53,
      62
     ],
     [
      59,
      60
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      8,
      "t"
     ],
     [
      72,
      "b"
     ],
     [
      79,
      "b"
     ],
     [
      80,
      "b"
     ]
    ],
    "tries": 0,
    "group": 0
   },
   {
    "size": 10,
    "rooms": "0011112222001111222200111122220011113333004444333300444433334444555555444455555566667777556666777755",
    "objects": "....c.fe....e..f......fa..............a...ba.....ea....b.e............fa.c......a.....ca.....b...d.f",
    "roomNames": [
     "Galley",
     "Guard's Van",
     "Baggage Car",
     "Sleeper C",
     "Bar Car",
     "Sleeper B",
     "Dining Car",
     "Mail Car"
    ],
    "people": [
     "Arthur the attendant",
     "Bruno the bookseller",
     "Celia the conductor",
     "Dmitri the diplomat",
     "Elsa the envoy",
     "Fiona the firefighter",
     "Gus the guard",
     "Hana the hatter",
     "Vince the vendor",
     "Ivy the inspector"
    ],
    "victim": 8,
    "clues": [
     [
      0,
      "room",
      0
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "next",
      "wine"
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
      "on",
      "seat"
     ],
     [
      4,
      "next",
      "bunk"
     ],
     [
      5,
      "next",
      "bunk"
     ],
     [
      5,
      "same",
      6
     ],
     [
      6,
      "next",
      "seat"
     ],
     [
      7,
      "col",
      7
     ],
     [
      8,
      "next",
      "wine"
     ],
     [
      9,
      "next",
      "bunk"
     ]
    ],
    "solution": [
     0,
     18,
     25,
     36,
     43,
     54,
     61,
     77,
     89,
     92
    ],
    "doors": [
     [
      1,
      2
     ],
     [
      51,
      61
     ],
     [
      25,
      26
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
      26,
      36
     ],
     [
      45,
      46
     ],
     [
      57,
      67
     ],
     [
      54,
      64
     ],
     [
      72,
      82
     ],
     [
      75,
      85
     ],
     [
      83,
      84
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      9,
      "r"
     ],
     [
      49,
      "r"
     ],
     [
      80,
      "l"
     ],
     [
      93,
      "b"
     ],
     [
      99,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "edge",
      null,
      3
     ]
    ],
    "group": 0
   },
   {
    "size": 4,
    "rooms": "0000000011112222",
    "objects": ".a....bc...a...a",
    "roomNames": [
     "Galley",
     "Dining Car",
     "Observation Car"
    ],
    "people": [
     "Vivian the violinist",
     "Astrid the accordionist",
     "Bea the bookseller",
     "Carl the conductor"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "next",
      "suitcase"
     ],
     [
      2,
      "on",
      "seat"
     ],
     [
      3,
      "window"
     ]
    ],
    "solution": [
     1,
     6,
     11,
     12
    ],
    "doors": [
     [
      4,
      8
     ],
     [
      11,
      15
     ]
    ],
    "windows": [
     [
      12,
      "l"
     ],
     [
      14,
      "b"
     ]
    ],
    "tries": 1,
    "group": 1
   },
   {
    "size": 5,
    "rooms": "0000011111223332233322333",
    "objects": "bba.a....ba..c...bfeaaf..",
    "roomNames": [
     "Guard's Van",
     "Sleeper A",
     "Lounge Car",
     "Galley"
    ],
    "people": [
     "Alma the accordionist",
     "Bruno the bookseller",
     "Carl the courier",
     "Viola the violinist",
     "Dexter the dentist"
    ],
    "victim": 3,
    "clues": [
     [
      0,
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
      "suitcase"
     ],
     [
      3,
      "next",
      "seat"
     ],
     [
      4,
      "col",
      0
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
      1,
      6
     ],
     [
      5,
      10
     ],
     [
      8,
      13
     ],
     [
      11,
      12
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
      4,
      "t"
     ]
    ],
    "tries": 1,
    "facts": [
     [
      "corner",
      null,
      3
     ]
    ],
    "group": 1
   },
   {
    "size": 6,
    "rooms": "001122001122001122333344333344333344",
    "objects": "b...d...e....ed.c.fa............f...",
    "roomNames": [
     "Lounge Car",
     "Sleeper B",
     "Bar Car",
     "Baggage Car",
     "Sleeper C"
    ],
    "people": [
     "Ada the attendant",
     "Birgit the bookseller",
     "Clara the courier",
     "Vivian the violinist",
     "Dmitri the diplomat",
     "Edith the envoy"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "window"
     ],
     [
      1,
      "next",
      "crate"
     ],
     [
      2,
      "same",
      0
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
      "alone"
     ]
    ],
    "solution": [
     2,
     10,
     15,
     19,
     24,
     35
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
      3,
      4
     ],
     [
      14,
      20
     ],
     [
      16,
      22
     ],
     [
      21,
      22
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
      30,
      "b"
     ],
     [
      31,
      "b"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "nextCount",
      "wine",
      2
     ],
     [
      "doorCount",
      null,
      1
     ]
    ],
    "group": 1
   },
   {
    "size": 7,
    "rooms": "0000111000011100001112223333222333322244442224444",
    "objects": "a..a.....a.......b.....febb.......a.....aa.......",
    "roomNames": [
     "Sleeper A",
     "Baggage Car",
     "Sleeper B",
     "Sleeper C",
     "Observation Car"
    ],
    "people": [
     "Albert the attendant",
     "Bella the bookseller",
     "Cedric the courier",
     "Vivian the vendor",
     "Dexter the dentist",
     "Elsa the engineer",
     "Felix the firefighter"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "on",
      "seat"
     ],
     [
      0,
      "door"
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "window"
     ],
     [
      4,
      "next",
      "bunk"
     ],
     [
      4,
      "next",
      "seat"
     ],
     [
      5,
      "on",
      "seat"
     ],
     [
      6,
      "door"
     ]
    ],
    "solution": [
     3,
     11,
     14,
     22,
     33,
     41,
     44
    ],
    "doors": [
     [
      3,
      4
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
      20,
      27
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
      31,
      38
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      3,
      "t"
     ],
     [
      14,
      "l"
     ],
     [
      20,
      "r"
     ]
    ],
    "tries": 1,
    "facts": [
     [
      "doorCount",
      null,
      2
     ]
    ],
    "group": 1
   },
   {
    "size": 8,
    "rooms": "0000111100001111000011112222333322223333444455554444555544445555",
    "objects": ".e.........e...............e...b..c.b...b..cd......f...e.b......",
    "roomNames": [
     "Baggage Car",
     "Dining Car",
     "Sleeper A",
     "Observation Car",
     "Mail Car",
     "Sleeper B"
    ],
    "people": [
     "Arthur the attendant",
     "Bea the bookseller",
     "Cora the courier",
     "Della the diplomat",
     "Elias the engineer",
     "Felix the firefighter",
     "Vivian the vendor",
     "Grace the guard"
    ],
    "victim": 6,
    "clues": [
     [
      0,
      "next",
      "lamp"
     ],
     [
      1,
      "row",
      1
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
      "door"
     ],
     [
      4,
      "next",
      "suitcase"
     ],
     [
      5,
      "on",
      "bunk"
     ],
     [
      7,
      "window"
     ]
    ],
    "solution": [
     2,
     15,
     17,
     28,
     35,
     40,
     54,
     61
    ],
    "doors": [
     [
      11,
      12
     ],
     [
      17,
      25
     ],
     [
      20,
      28
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
      4,
      "t"
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
      58,
      "b"
     ],
     [
      61,
      "b"
     ]
    ],
    "tries": 1,
    "facts": [
     [
      "nextCount",
      "crate",
      0
     ]
    ],
    "group": 1
   },
   {
    "size": 9,
    "rooms": "000000000000000000111111111222233444222233444555533444555533444555566666555566666",
    "objects": "c..b..e...a....b....a.cf.a.bd.....f.a.............d...........a...a.......d....e.",
    "roomNames": [
     "Galley",
     "Corridor",
     "Sleeper B",
     "Guard's Van",
     "Sleeper C",
     "Lounge Car",
     "Sleeper A"
    ],
    "people": [
     "Albert the attendant",
     "Bruno the bookseller",
     "Clara the courier",
     "Dmitri the diplomat",
     "Vince the vendor",
     "Ena the envoy",
     "Felix the firefighter",
     "Gwen the guard",
     "Hazel the hairdresser"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "next",
      "bunk"
     ],
     [
      1,
      "same",
      0
     ],
     [
      1,
      "on",
      "seat"
     ],
     [
      2,
      "next",
      "wine"
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
      5,
      "row",
      5
     ],
     [
      6,
      "door"
     ],
     [
      7,
      "same",
      5
     ],
     [
      7,
      "col",
      0
     ],
     [
      8,
      "row",
      8
     ],
     [
      8,
      "col",
      4
     ]
    ],
    "solution": [
     2,
     10,
     24,
     32,
     44,
     48,
     61,
     63,
     76
    ],
    "doors": [
     [
      15,
      24
     ],
     [
      21,
      30
     ],
     [
      22,
      31
     ],
     [
      25,
      34
     ],
     [
      39,
      40
     ],
     [
      37,
      46
     ],
     [
      32,
      33
     ],
     [
      57,
      58
     ],
     [
      58,
      67
     ],
     [
      61,
      70
     ],
     [
      66,
      67
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
      7,
      "t"
     ],
     [
      26,
      "r"
     ],
     [
      80,
      "r"
     ]
    ],
    "tries": 1,
    "group": 1
   },
   {
    "size": 10,
    "rooms": "0000001111000000111122222333332222233333222223333344445555554444555555444455666677777766667777776666",
    "objects": "b.............f....a.cb.e..aab.bb..bbd...d..b.d...d.....dfc.d.f.e.b.c....c......b.......ad..a..a....",
    "roomNames": [
     "Galley",
     "Mail Car",
     "Sleeper A",
     "Lounge Car",
     "Bar Car",
     "Observation Car",
     "Sleeper B",
     "Sleeper C"
    ],
    "people": [
     "Ada the attendant",
     "Birgit the bookseller",
     "Cora the conductor",
     "Dora the dentist",
     "Edgar the envoy",
     "Flora the fiddler",
     "Gideon the guard",
     "Victor the vendor",
     "Hilda the hairdresser",
     "Ivy the importer"
    ],
    "victim": 7,
    "clues": [
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
      "on",
      "seat"
     ],
     [
      2,
      "same",
      4
     ],
     [
      3,
      "same",
      2
     ],
     [
      4,
      "next",
      "bunk"
     ],
     [
      5,
      "col",
      1
     ],
     [
      6,
      "col",
      9
     ],
     [
      8,
      "same",
      9
     ],
     [
      9,
      "on",
      "seat"
     ]
    ],
    "solution": [
     7,
     13,
     28,
     36,
     45,
     51,
     69,
     70,
     84,
     92
    ],
    "doors": [
     [
      5,
      6
     ],
     [
      11,
      21
     ],
     [
      15,
      25
     ],
     [
      17,
      27
     ],
     [
      24,
      25
     ],
     [
      43,
      53
     ],
     [
      44,
      54
     ],
     [
      48,
      58
     ],
     [
      63,
      64
     ],
     [
      71,
      81
     ],
     [
      67,
      77
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
      7,
      "t"
     ],
     [
      9,
      "t"
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
      49,
      "r"
     ],
     [
      93,
      "b"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "nextCount",
      "crate",
      4
     ],
     [
      "roomCount",
      6,
      0
     ],
     [
      "touch",
      null,
      1
     ]
    ],
    "group": 1
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
    ],
    "tries": 1,
    "group": 1
   },
   {
    "size": 12,
    "rooms": "000011122333000011122333000011122333000011122333444444422333444444422333444444422333556666778888556666778888556666778888556666778888556666778888",
    "objects": "e...caa..e.fa...bad...b..a.....cdd..b.e.f...c.c.bbdb.bd...b............c..b...c.c.a..c......bc.c...d...bf.........aaba...d.d....afb..b.faca....d",
    "roomNames": [
     "Guard's Van",
     "Lounge Car",
     "Baggage Car",
     "Galley",
     "Sleeper C",
     "Sleeper B",
     "Mail Car",
     "Sleeper A",
     "Dining Car"
    ],
    "people": [
     "Albert the attendant",
     "Bea the bookseller",
     "Cedric the courier",
     "Dexter the diplomat",
     "Edith the engineer",
     "Fiona the firefighter",
     "Greta the guard",
     "Hugo the hairdresser",
     "Isla the importer",
     "Juno the journalist",
     "Konrad the kitchen hand",
     "Vivian the violinist"
    ],
    "victim": 11,
    "clues": [
     [
      0,
      "next",
      "wine"
     ],
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
      "next",
      "crate"
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "on",
      "bunk"
     ],
     [
      4,
      "next",
      "suitcase"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "row",
      5
     ],
     [
      5,
      "col",
      3
     ],
     [
      6,
      "door"
     ],
     [
      7,
      "row",
      7
     ],
     [
      8,
      "on",
      "bunk"
     ],
     [
      8,
      "next",
      "seat"
     ],
     [
      9,
      "same",
      7
     ],
     [
      9,
      "col",
      4
     ],
     [
      10,
      "next",
      "crate"
     ],
     [
      11,
      "next",
      "wine"
     ]
    ],
    "solution": [
     10,
     13,
     30,
     36,
     56,
     63,
     74,
     89,
     103,
     112,
     131,
     141
    ],
    "doors": [
     [
      27,
      28
     ],
     [
      39,
      51
     ],
     [
      42,
      43
     ],
     [
      41,
      53
     ],
     [
      80,
      81
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
      80,
      92
     ],
     [
      83,
      95
     ],
     [
      72,
      84
     ],
     [
      74,
      86
     ],
     [
      78,
      90
     ],
     [
      121,
      122
     ],
     [
      113,
      114
     ],
     [
      103,
      104
     ]
    ],
    "windows": [
     [
      5,
      "t"
     ],
     [
      9,
      "t"
     ],
     [
      12,
      "l"
     ],
     [
      83,
      "r"
     ],
     [
      96,
      "l"
     ],
     [
      136,
      "b"
     ],
     [
      139,
      "b"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "onCount",
      "seat",
      0
     ],
     [
      "roomCount",
      8,
      2
     ]
    ],
    "group": 1
   },
   {
    "size": 4,
    "rooms": "0000000011221122",
    "objects": "....ac...e.ecbbb",
    "roomNames": [
     "Baggage Car",
     "Sleeper A",
     "Galley"
    ],
    "people": [
     "Albert the accordionist",
     "Bella the bookseller",
     "Vivian the vendor",
     "Cedric the courier"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "same",
      1
     ],
     [
      1,
      "next",
      "suitcase"
     ],
     [
      3,
      "on",
      "bunk"
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
      4,
      8
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
      3,
      "t"
     ],
     [
      11,
      "r"
     ]
    ],
    "tries": 3,
    "facts": [
     [
      "doorCount",
      null,
      2
     ]
    ],
    "group": 2
   },
   {
    "size": 5,
    "rooms": "0001100011223332233322333",
    "objects": "b.d..e..ecebdb.ec....a...",
    "roomNames": [
     "Mail Car",
     "Sleeper C",
     "Bar Car",
     "Dining Car"
    ],
    "people": [
     "Albert the attendant",
     "Bea the bookseller",
     "Cora the courier",
     "Victor the vendor",
     "Della the dentist"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "door"
     ],
     [
      1,
      "notRoom",
      1
     ],
     [
      2,
      "next",
      "bunk"
     ],
     [
      4,
      "next",
      "seat"
     ]
    ],
    "solution": [
     3,
     6,
     14,
     17,
     20
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
      7,
      12
     ],
     [
      9,
      14
     ],
     [
      21,
      22
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
      19,
      "r"
     ]
    ],
    "tries": 3,
    "facts": [
     [
      "nextCount",
      "crate",
      1
     ]
    ],
    "group": 2
   },
   {
    "size": 6,
    "rooms": "000111000111000111223333224444224444",
    "objects": ".ef.ebf...c.a..a...bce...f.....e...c",
    "roomNames": [
     "Sleeper A",
     "Dining Car",
     "Baggage Car",
     "Lounge Car",
     "Observation Car"
    ],
    "people": [
     "Alma the accordionist",
     "Birgit the banker",
     "Cora the courier",
     "Dora the dentist",
     "Viola the violinist",
     "Ena the envoy"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "same",
      2
     ],
     [
      1,
      "next",
      "suitcase"
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
      5,
      "alone"
     ]
    ],
    "solution": [
     5,
     9,
     16,
     19,
     24,
     32
    ],
    "doors": [
     [
      2,
      3
     ],
     [
      13,
      19
     ],
     [
      14,
      20
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
      25,
      26
     ],
     [
      21,
      27
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
      12,
      "l"
     ],
     [
      30,
      "b"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "emptyRooms",
      null,
      2
     ],
     [
      "nextCount",
      "seat",
      2
     ],
     [
      "doorCount",
      null,
      2
     ]
    ],
    "group": 2
   },
   {
    "size": 7,
    "rooms": "0001122000112200011220001122333344433334443333444",
    "objects": "..b...bd..e.c..a...b.e.....b.eedb....aa..cad.c.d.",
    "roomNames": [
     "Lounge Car",
     "Galley",
     "Sleeper B",
     "Observation Car",
     "Baggage Car"
    ],
    "people": [
     "Albert the accordionist",
     "Bruno the banker",
     "Cedric the conductor",
     "Della the dentist",
     "Vera the violinist",
     "Edgar the engineer",
     "Flora the fiddler"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "next",
      "crate"
     ],
     [
      1,
      "same",
      0
     ],
     [
      1,
      "next",
      "bunk"
     ],
     [
      2,
      "next",
      "bunk"
     ],
     [
      3,
      "next",
      "lamp"
     ],
     [
      4,
      "next",
      "bunk"
     ],
     [
      5,
      "next",
      "suitcase"
     ],
     [
      6,
      "next",
      "crate"
     ]
    ],
    "solution": [
     0,
     9,
     20,
     22,
     33,
     38,
     46
    ],
    "doors": [
     [
      16,
      17
     ],
     [
      23,
      30
     ],
     [
      25,
      26
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
      27,
      34
     ],
     [
      31,
      32
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      13,
      "r"
     ],
     [
      44,
      "b"
     ],
     [
      48,
      "r"
     ]
    ],
    "tries": 3,
    "group": 2
   },
   {
    "size": 8,
    "rooms": "0000011100000111111111112222333322223333444455554444555544445555",
    "objects": "bb.d....dcce....ba..ba..c..d.a.c..df...d.e.b..f.....a....af.d.d.",
    "roomNames": [
     "Sleeper A",
     "Corridor",
     "Lounge Car",
     "Galley",
     "Sleeper C",
     "Observation Car"
    ],
    "people": [
     "Arthur the accordionist",
     "Vivian the vendor",
     "Bea the banker",
     "Clara the conductor",
     "Daisy the dentist",
     "Edith the envoy",
     "Freya the firefighter",
     "Gus the governor"
    ],
    "victim": 1,
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
      2,
      "on",
      "bunk"
     ],
     [
      3,
      "notRoom",
      3
     ],
     [
      3,
      "next",
      "suitcase"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "on",
      "bunk"
     ],
     [
      6,
      "same",
      5
     ],
     [
      6,
      "next",
      "wine"
     ],
     [
      7,
      "window"
     ]
    ],
    "solution": [
     4,
     13,
     16,
     25,
     38,
     43,
     50,
     63
    ],
    "doors": [
     [
      4,
      5
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
      33,
      41
     ],
     [
      36,
      44
     ],
     [
      59,
      60
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
      23,
      "r"
     ],
     [
      31,
      "r"
     ],
     [
      63,
      "r"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "onCount",
      "seat",
      0
     ]
    ],
    "group": 2
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
    ],
    "tries": 3,
    "group": 2
   },
   {
    "size": 10,
    "rooms": "0000111111000011111100001122220000112222333334444433333444445556677744555667774455566777445556677744",
    "objects": "..b....d...dd..ed......d...ddf.be...a.....d......aa..f.a..b.a....d..a....a...............cceb...a.c.",
    "roomNames": [
     "Galley",
     "Guard's Van",
     "Sleeper B",
     "Sleeper A",
     "Mail Car",
     "Dining Car",
     "Corridor",
     "Baggage Car"
    ],
    "people": [
     "Ada the accordionist",
     "Basil the banker",
     "Clara the courier",
     "Dora the diplomat",
     "Victor the violinist",
     "Elias the envoy",
     "Fiona the firefighter",
     "Gus the guard",
     "Hugo the hairdresser",
     "Ivy the importer"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "next",
      "crate"
     ],
     [
      2,
      "next",
      "bunk"
     ],
     [
      3,
      "next",
      "crate"
     ],
     [
      3,
      "alone"
     ],
     [
      5,
      "next",
      "bunk"
     ],
     [
      6,
      "next",
      "crate"
     ],
     [
      7,
      "next",
      "crate"
     ],
     [
      7,
      "door"
     ],
     [
      8,
      "next",
      "seat"
     ],
     [
      8,
      "alone"
     ],
     [
      9,
      "on",
      "bunk"
     ]
    ],
    "solution": [
     0,
     14,
     21,
     38,
     49,
     57,
     66,
     75,
     83,
     92
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      32,
      42
     ],
     [
      19,
      29
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
      39,
      49
     ],
     [
      44,
      45
     ],
     [
      52,
      62
     ],
     [
      54,
      64
     ],
     [
      87,
      88
     ],
     [
      72,
      73
     ],
     [
      74,
      75
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
      20,
      "l"
     ],
     [
      60,
      "l"
     ],
     [
      91,
      "b"
     ],
     [
      93,
      "b"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "roomCount",
      3,
      0
     ],
     [
      "furniture",
      null,
      2
     ]
    ],
    "group": 2
   },
   {
    "size": 11,
    "rooms": "0000001111100000011111000000111112222222333322222223333444555533334445555333344466667777444666677774446666777744466667777",
    "objects": "..ab........d...d.ae...........a.ed.aaa..a....ba.b.da.....d.b.c....eb.............d.b..b...c..........d.a..b...b...bdab..",
    "roomNames": [
     "Sleeper A",
     "Bar Car",
     "Galley",
     "Guard's Van",
     "Dining Car",
     "Sleeper C",
     "Corridor",
     "Lounge Car"
    ],
    "people": [
     "Astrid the accordionist",
     "Basil the bookseller",
     "Cora the courier",
     "Dexter the diplomat",
     "Edith the envoy",
     "Freya the firefighter",
     "Greta the guard",
     "Hilda the hatter",
     "Vivian the violinist",
     "Igor the inspector",
     "Jonas the jockey"
    ],
    "victim": 8,
    "clues": [
     [
      0,
      "on",
      "bunk"
     ],
     [
      0,
      "next",
      "seat"
     ],
     [
      1,
      "notRoom",
      3
     ],
     [
      2,
      "same",
      0
     ],
     [
      3,
      "on",
      "seat"
     ],
     [
      4,
      "next",
      "bunk"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "col",
      9
     ],
     [
      6,
      "on",
      "bunk"
     ],
     [
      7,
      "next",
      "bunk"
     ],
     [
      8,
      "row",
      8
     ],
     [
      8,
      "col",
      0
     ],
     [
      9,
      "same",
      7
     ],
     [
      9,
      "next",
      "seat"
     ],
     [
      10,
      "on",
      "bunk"
     ],
     [
      10,
      "next",
      "seat"
     ]
    ],
    "solution": [
     3,
     21,
     23,
     37,
     50,
     64,
     68,
     85,
     88,
     106,
     115
    ],
    "doors": [
     [
      5,
      6
     ],
     [
      25,
      36
     ],
     [
      28,
      39
     ],
     [
      31,
      42
     ],
     [
      50,
      51
     ],
     [
      45,
      56
     ],
     [
      49,
      60
     ],
     [
      72,
      73
     ],
     [
      76,
      87
     ],
     [
      68,
      69
     ],
     [
      112,
      113
     ],
     [
      72,
      83
     ],
     [
      83,
      84
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      10,
      "r"
     ],
     [
      33,
      "l"
     ],
     [
      43,
      "r"
     ],
     [
      44,
      "l"
     ],
     [
      87,
      "r"
     ],
     [
      111,
      "b"
     ]
    ],
    "tries": 5,
    "group": 2
   },
   {
    "size": 12,
    "rooms": "000111122222000111122222000111122222000111133333444444433333444444433333444444433333555566777888555566777888555566777888555566777888555566777888",
    "objects": "......a...c......bb..c...b.............cb...c.b..f..fd.f.b..fc..a....b......a..e..bfb..a...d...b.......c.da...e..f............c.....b.c...a.....",
    "roomNames": [
     "Observation Car",
     "Lounge Car",
     "Bar Car",
     "Sleeper C",
     "Galley",
     "Guard's Van",
     "Sleeper B",
     "Dining Car",
     "Mail Car"
    ],
    "people": [
     "Ada the accordionist",
     "Bruno the bookseller",
     "Cora the conductor",
     "Dmitri the dentist",
     "Elias the envoy",
     "Freya the fiddler",
     "Greta the guard",
     "Henrik the hatter",
     "Igor the inspector",
     "Jasper the journalist",
     "Kira the kitchen hand",
     "Viola the vendor"
    ],
    "victim": 11,
    "clues": [
     [
      0,
      "on",
      "seat"
     ],
     [
      1,
      "row",
      1
     ],
     [
      2,
      "same",
      0
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "next",
      "wine"
     ],
     [
      5,
      "next",
      "lamp"
     ],
     [
      6,
      "next",
      "seat"
     ],
     [
      6,
      "alone"
     ],
     [
      7,
      "on",
      "bunk"
     ],
     [
      7,
      "same",
      8
     ],
     [
      8,
      "row",
      8
     ],
     [
      8,
      "col",
      1
     ],
     [
      9,
      "next",
      "seat"
     ],
     [
      10,
      "same",
      7
     ],
     [
      11,
      "row",
      11
     ]
    ],
    "solution": [
     6,
     23,
     28,
     38,
     56,
     67,
     77,
     84,
     97,
     118,
     123,
     141
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
      30,
      31
     ],
     [
      42,
      43
     ],
     [
      40,
      52
     ],
     [
      32,
      44
     ],
     [
      78,
      79
     ],
     [
      80,
      92
     ],
     [
      83,
      95
     ],
     [
      75,
      87
     ],
     [
      77,
      89
     ],
     [
      78,
      90
     ],
     [
      135,
      136
     ],
     [
      113,
      114
     ],
     [
      116,
      117
     ]
    ],
    "windows": [
     [
      10,
      "t"
     ],
     [
      83,
      "r"
     ],
     [
      96,
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
      139,
      "b"
     ],
     [
      142,
      "b"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "nextCount",
      "lamp",
      1
     ],
     [
      "roomCount",
      4,
      1
     ],
     [
      "furniture",
      null,
      2
     ]
    ],
    "group": 2
   },
   {
    "size": 4,
    "rooms": "0011001122222222",
    "objects": "a....dc..d..e...",
    "roomNames": [
     "Baggage Car",
     "Sleeper C",
     "Sleeper A"
    ],
    "people": [
     "Ada the attendant",
     "Basil the bookseller",
     "Vince the violinist",
     "Celia the conductor"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "next",
      "crate"
     ],
     [
      1,
      "next",
      "suitcase"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "notRoom",
      0
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
      7,
      "r"
     ],
     [
      12,
      "l"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "alone",
      null,
      2
     ]
    ],
    "group": 3
   },
   {
    "size": 5,
    "rooms": "0001100011000112223322233",
    "objects": "..............bbe.....b.c",
    "roomNames": [
     "Bar Car",
     "Dining Car",
     "Guard's Van",
     "Sleeper A"
    ],
    "people": [
     "Arthur the accordionist",
     "Bea the bookseller",
     "Vera the violinist",
     "Cora the courier",
     "Daisy the diplomat"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "row",
      1
     ],
     [
      2,
      "on",
      "bunk"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "same",
      3
     ]
    ],
    "solution": [
     1,
     8,
     14,
     17,
     20
    ],
    "doors": [
     [
      12,
      13
     ],
     [
      11,
      16
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
      4,
      "t"
     ],
     [
      23,
      "b"
     ],
     [
      24,
      "r"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "touch",
      null,
      1
     ]
    ],
    "group": 3
   },
   {
    "size": 6,
    "rooms": "000111000111222333222333444433444433",
    "objects": ".b......fe.......fe.afff..fc.cb...cb",
    "roomNames": [
     "Sleeper A",
     "Baggage Car",
     "Mail Car",
     "Galley",
     "Bar Car"
    ],
    "people": [
     "Ada the attendant",
     "Birgit the bookseller",
     "Viola the violinist",
     "Carl the courier",
     "Della the dentist",
     "Edith the engineer"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "next",
      "wine"
     ],
     [
      1,
      "next",
      "lamp"
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
      "next",
      "suitcase"
     ]
    ],
    "solution": [
     2,
     10,
     15,
     19,
     24,
     35
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
      11,
      17
     ],
     [
      20,
      21
     ],
     [
      18,
      24
     ],
     [
      33,
      34
     ]
    ],
    "windows": [
     [
      17,
      "r"
     ],
     [
      30,
      "l"
     ],
     [
      34,
      "b"
     ],
     [
      35,
      "r"
     ]
    ],
    "tries": 7,
    "facts": [
     [
      "emptyRooms",
      null,
      0
     ]
    ],
    "group": 3
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
    ],
    "tries": 9,
    "group": 3
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
    ],
    "tries": 6,
    "group": 3
   },
   {
    "size": 9,
    "rooms": "001111222001111222001111222333333222333333444555544444555544666555544666555544666",
    "objects": "b..b..............ae...a..e.a....f.e..acbef...f...fbd.d.....cbbea....b.......c...",
    "roomNames": [
     "Galley",
     "Lounge Car",
     "Sleeper B",
     "Corridor",
     "Baggage Car",
     "Guard's Van",
     "Bar Car"
    ],
    "people": [
     "Astrid the attendant",
     "Bella the banker",
     "Celia the conductor",
     "Daisy the dentist",
     "Viola the violinist",
     "Ena the envoy",
     "Freya the firefighter",
     "Gus the guard",
     "Hana the hatter"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      1,
      "room",
      2
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "notRoom",
      5
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "on",
      "seat"
     ],
     [
      4,
      "window"
     ],
     [
      5,
      "next",
      "wine"
     ],
     [
      6,
      "on",
      "bunk"
     ],
     [
      7,
      "next",
      "suitcase"
     ],
     [
      8,
      "door"
     ]
    ],
    "solution": [
     7,
     15,
     20,
     28,
     36,
     49,
     62,
     68,
     75
    ],
    "doors": [
     [
      10,
      11
     ],
     [
      18,
      27
     ],
     [
      14,
      15
     ],
     [
      21,
      30
     ],
     [
      32,
      33
     ],
     [
      34,
      43
     ],
     [
      41,
      50
     ],
     [
      38,
      47
     ],
     [
      75,
      76
     ],
     [
      77,
      78
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
      9,
      "l"
     ],
     [
      36,
      "l"
     ],
     [
      79,
      "b"
     ]
    ],
    "tries": 7,
    "facts": [
     [
      "nextCount",
      "suitcase",
      1
     ],
     [
      "doorCount",
      null,
      2
     ]
    ],
    "group": 3
   },
   {
    "size": 10,
    "rooms": "0000111111000011111100001122220000112222333344444433334444443333555666777755566677775556667777555666",
    "objects": ".e.edbd........c..ab.a....c.f............eb..ae..da.........e.f........dc..ef.ab.e....cab....cee...b",
    "roomNames": [
     "Galley",
     "Sleeper C",
     "Corridor",
     "Sleeper A",
     "Dining Car",
     "Lounge Car",
     "Mail Car",
     "Bar Car"
    ],
    "people": [
     "Ada the accordionist",
     "Basil the banker",
     "Cedric the courier",
     "Daisy the diplomat",
     "Edith the engineer",
     "Felix the fiddler",
     "Gus the guard",
     "Victor the vendor",
     "Hilda the hairdresser",
     "Ivy the importer"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "same",
      2
     ],
     [
      1,
      "row",
      1
     ],
     [
      1,
      "col",
      0
     ],
     [
      2,
      "same",
      1
     ],
     [
      2,
      "on",
      "seat"
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "next",
      "lamp"
     ],
     [
      5,
      "next",
      "seat"
     ],
     [
      6,
      "next",
      "wine"
     ],
     [
      7,
      "on",
      "bunk"
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
      9,
      "next",
      "bunk"
     ]
    ],
    "solution": [
     2,
     10,
     21,
     34,
     47,
     55,
     66,
     79,
     83,
     98
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      32,
      42
     ],
     [
      19,
      29
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
      43,
      44
     ],
     [
      63,
      64
     ],
     [
      61,
      71
     ],
     [
      54,
      64
     ],
     [
      59,
      69
     ],
     [
      66,
      67
     ],
     [
      73,
      74
     ]
    ],
    "windows": [
     [
      6,
      "t"
     ],
     [
      49,
      "r"
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
      92,
      "b"
     ],
     [
      99,
      "b"
     ]
    ],
    "tries": 9,
    "facts": [
     [
      "roomCount",
      7,
      1
     ]
    ],
    "group": 3
   },
   {
    "size": 11,
    "rooms": "0000111222200001112222000011122220000111333344441113333444411133334444111333355555666777555556667775555566677755555666777",
    "objects": ".....ac...cf...e...fc..c...c..f...a.e............a.b.b..b.c....fbdbb.e....cce....c.a.c.....a.....f.e.........ca.f....c...",
    "roomNames": [
     "Baggage Car",
     "Lounge Car",
     "Galley",
     "Sleeper B",
     "Sleeper C",
     "Bar Car",
     "Mail Car",
     "Corridor"
    ],
    "people": [
     "Astrid the attendant",
     "Bruno the bookseller",
     "Carl the courier",
     "Dmitri the dentist",
     "Elias the engineer",
     "Frank the firefighter",
     "Grace the guard",
     "Hugo the hairdresser",
     "Ivo the inspector",
     "Juno the journalist",
     "Viola the vendor"
    ],
    "victim": 10,
    "clues": [
     [
      0,
      "next",
      "suitcase"
     ],
     [
      0,
      "alone"
     ],
     [
      1,
      "next",
      "suitcase"
     ],
     [
      2,
      "next",
      "suitcase"
     ],
     [
      2,
      "col",
      2
     ],
     [
      3,
      "next",
      "bunk"
     ],
     [
      3,
      "same",
      4
     ],
     [
      4,
      "next",
      "wine"
     ],
     [
      5,
      "next",
      "bunk"
     ],
     [
      6,
      "same",
      1
     ],
     [
      7,
      "next",
      "seat"
     ],
     [
      7,
      "door"
     ],
     [
      8,
      "next",
      "wine"
     ],
     [
      9,
      "next",
      "lamp"
     ],
     [
      10,
      "next",
      "wine"
     ]
    ],
    "solution": [
     9,
     17,
     24,
     40,
     52,
     55,
     70,
     82,
     98,
     100,
     113
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      33,
      44
     ],
     [
      17,
      18
     ],
     [
      72,
      73
     ],
     [
      69,
      70
     ],
     [
      70,
      81
     ],
     [
      71,
      82
     ],
     [
      30,
      41
     ],
     [
      73,
      84
     ],
     [
      75,
      86
     ],
     [
      66,
      77
     ],
     [
      92,
      93
     ],
     [
      95,
      96
     ]
    ],
    "windows": [
     [
      6,
      "t"
     ],
     [
      11,
      "l"
     ],
     [
      65,
      "r"
     ],
     [
      66,
      "l"
     ],
     [
      76,
      "r"
     ],
     [
      110,
      "l"
     ],
     [
      118,
      "b"
     ]
    ],
    "tries": 8,
    "facts": [
     [
      "roomCount",
      4,
      1
     ]
    ],
    "group": 3
   },
   {
    "size": 12,
    "rooms": "000011122222000011122222000011122222000011122222333444455555333444455555333444455555333444455555666677888888666677888888666677888888666677888888",
    "objects": "bb.......bbdc....af..c....d..b.............b..b..ffa.b...bfe.b.......a....e..b.b........bbad..d.c...ae...f.cf.....b...e.bb...b.....a..b.d..aeadd",
    "roomNames": [
     "Baggage Car",
     "Bar Car",
     "Sleeper A",
     "Sleeper C",
     "Sleeper B",
     "Galley",
     "Guard's Van",
     "Mail Car",
     "Corridor"
    ],
    "people": [
     "Albert the attendant",
     "Bruno the bookseller",
     "Cora the courier",
     "Vera the vendor",
     "Daisy the dentist",
     "Edgar the engineer",
     "Flora the fiddler",
     "Gus the guard",
     "Hazel the hatter",
     "Ivo the importer",
     "Jonas the journalist",
     "Kitty the knife grinder"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "on",
      "bunk"
     ],
     [
      0,
      "next",
      "suitcase"
     ],
     [
      1,
      "next",
      "crate"
     ],
     [
      2,
      "same",
      1
     ],
     [
      2,
      "next",
      "suitcase"
     ],
     [
      3,
      "on",
      "bunk"
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
      5
     ],
     [
      6,
      "next",
      "bunk"
     ],
     [
      7,
      "same",
      4
     ],
     [
      7,
      "on",
      "bunk"
     ],
     [
      8,
      "next",
      "wine"
     ],
     [
      8,
      "next",
      "suitcase"
     ],
     [
      9,
      "next",
      "suitcase"
     ],
     [
      10,
      "next",
      "lamp"
     ],
     [
      11,
      "next",
      "bunk"
     ]
    ],
    "solution": [
     9,
     14,
     24,
     43,
     53,
     63,
     78,
     88,
     106,
     119,
     128,
     133
    ],
    "doors": [
     [
      3,
      4
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
      6,
      7
     ],
     [
      41,
      53
     ],
     [
      47,
      59
     ],
     [
      74,
      75
     ],
     [
      86,
      98
     ],
     [
      54,
      55
     ],
     [
      87,
      99
     ],
     [
      89,
      101
     ],
     [
      90,
      102
     ],
     [
      94,
      106
     ],
     [
      123,
      124
     ],
     [
      137,
      138
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
      35,
      "r"
     ],
     [
      60,
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
    "tries": 9,
    "facts": [
     [
      "onCount",
      "seat",
      0
     ],
     [
      "doorCount",
      null,
      2
     ]
    ],
    "group": 3
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
    ],
    "tries": 0,
    "facts": [
     [
      "nextCount",
      "pod",
      1
     ]
    ],
    "group": 0
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
    "tries": 0,
    "facts": [
     [
      "roomCount",
      0,
      1
     ],
     [
      "edge",
      null,
      3
     ]
    ],
    "group": 0
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
    "tries": 0,
    "facts": [
     [
      "nextCount",
      "scope",
      0
     ],
     [
      "furniture",
      null,
      2
     ]
    ],
    "group": 0
   },
   {
    "size": 7,
    "rooms": "0001111000111100022220002222333344433334443333444",
    "objects": "b.........bcd.b...b.ebe........dd....a...bcb..a.d",
    "roomNames": [
     "Bridge",
     "Engine Room",
     "Observatory",
     "Cargo Bay",
     "Lab"
    ],
    "people": [
     "Astrid the analyst",
     "Bruno the botanist",
     "Carl the chemist",
     "Dmitri the doctor",
     "Ena the electrician",
     "Freya the flight officer",
     "Vivian the visitor"
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
      "console"
     ],
     [
      2,
      "next",
      "pod"
     ],
     [
      2,
      "next",
      "plant"
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "next",
      "pod"
     ],
     [
      5,
      "next",
      "console"
     ],
     [
      6,
      "on",
      "pod"
     ]
    ],
    "solution": [
     4,
     10,
     19,
     23,
     34,
     35,
     43
    ],
    "doors": [
     [
      2,
      3
     ],
     [
      16,
      17
     ],
     [
      22,
      29
     ],
     [
      13,
      20
     ],
     [
      24,
      31
     ],
     [
      26,
      33
     ],
     [
      31,
      32
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      4,
      "t"
     ],
     [
      28,
      "l"
     ],
     [
      44,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "nextCount",
      "plant",
      2
     ],
     [
      "nextCount",
      "seat",
      0
     ]
    ],
    "group": 0
   },
   {
    "size": 8,
    "rooms": "0001111100011111222111112223333322233333444555554445555544455555",
    "objects": ".......ba....ffa......b.ff.bb...c......c....ba...ccd.....bfc...d",
    "roomNames": [
     "Hydroponics",
     "Bridge",
     "Engine Room",
     "Airlock",
     "Lab",
     "Mess Hall"
    ],
    "people": [
     "Arthur the astronaut",
     "Bruno the biologist",
     "Cedric the chemist",
     "Della the doctor",
     "Ena the electrician",
     "Fiona the farmer",
     "Vince the volunteer",
     "Gus the gunner"
    ],
    "victim": 6,
    "clues": [
     [
      0,
      "on",
      "pod"
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
      "next",
      "tank"
     ],
     [
      3,
      "door"
     ],
     [
      3,
      "same",
      4
     ],
     [
      4,
      "next",
      "pod"
     ],
     [
      5,
      "col",
      3
     ],
     [
      6,
      "next",
      "console"
     ],
     [
      7,
      "next",
      "tank"
     ]
    ],
    "solution": [
     7,
     10,
     22,
     29,
     36,
     43,
     48,
     57
    ],
    "doors": [
     [
      10,
      11
     ],
     [
      8,
      16
     ],
     [
      18,
      19
     ],
     [
      21,
      29
     ],
     [
      26,
      27
     ],
     [
      32,
      40
     ],
     [
      39,
      47
     ],
     [
      50,
      51
     ]
    ],
    "windows": [
     [
      0,
      "t"
     ],
     [
      24,
      "l"
     ],
     [
      31,
      "r"
     ],
     [
      40,
      "l"
     ],
     [
      60,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "doorCount",
      null,
      2
     ],
     [
      "roomCount",
      2,
      0
     ]
    ],
    "group": 0
   },
   {
    "size": 9,
    "rooms": "000011111000011111000011111222223333222223333224445566224445566224445566224445566",
    "objects": ".e..........b.....afc..ecbb...cb.....a..e.fb.af.......f...a...a...fb..a..b....a..",
    "roomNames": [
     "Cargo Bay",
     "Med Bay",
     "Mess Hall",
     "Gym",
     "Observatory",
     "Crew Quarters",
     "Hydroponics"
    ],
    "people": [
     "Vera the visitor",
     "Ada the astronaut",
     "Bea the botanist",
     "Carl the captain",
     "Dmitri the doctor",
     "Elias the electrician",
     "Frank the flight officer",
     "Greta the gunner",
     "Hazel the hacker"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "col",
      5
     ],
     [
      1,
      "next",
      "seat"
     ],
     [
      2,
      "next",
      "plant"
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
      "door"
     ],
     [
      4,
      "next",
      "pod"
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
      "tank"
     ],
     [
      7,
      "on",
      "seat"
     ],
     [
      8,
      "room",
      4
     ],
     [
      8,
      "next",
      "tank"
     ]
    ],
    "solution": [
     5,
     9,
     22,
     29,
     44,
     51,
     55,
     70,
     75
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      20,
      29
     ],
     [
      22,
      31
     ],
     [
      23,
      32
     ],
     [
      40,
      41
     ],
     [
      40,
      49
     ],
     [
      41,
      50
     ],
     [
      44,
      53
     ],
     [
      58,
      59
     ],
     [
      78,
      79
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
      6,
      "t"
     ],
     [
      62,
      "r"
     ],
     [
      71,
      "r"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "nextCount",
      "seat",
      1
     ]
    ],
    "group": 0
   },
   {
    "size": 10,
    "rooms": "0000112222000011222200001133330000113333444411111144445555554444555555444455555566667777776666777777",
    "objects": ".c..db.....b.....e....ea.e.c.f.....a.....d..f.f.......caf.f.f.c...c..f......aa.a.........d...ce..e..",
    "roomNames": [
     "Gym",
     "Med Bay",
     "Bridge",
     "Engine Room",
     "Comms",
     "Airlock",
     "Observatory",
     "Hydroponics"
    ],
    "people": [
     "Victor the volunteer",
     "Ada the astronaut",
     "Bruno the biologist",
     "Cedric the chemist",
     "Dmitri the driller",
     "Elsa the electrician",
     "Flora the farmer",
     "Greta the gunner",
     "Henrik the hacker",
     "Ines the instructor"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "on",
      "pod"
     ],
     [
      1,
      "next",
      "plant"
     ],
     [
      1,
      "next",
      "pod"
     ],
     [
      2,
      "on",
      "seat"
     ],
     [
      2,
      "next",
      "plant"
     ],
     [
      3,
      "same",
      1
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "next",
      "scope"
     ],
     [
      6,
      "next",
      "console"
     ],
     [
      7,
      "on",
      "seat"
     ],
     [
      8,
      "col",
      7
     ],
     [
      9,
      "window"
     ]
    ],
    "solution": [
     5,
     12,
     23,
     30,
     49,
     51,
     64,
     76,
     87,
     98
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
      39,
      49
     ],
     [
      43,
      44
     ],
     [
      46,
      56
     ],
     [
      17,
      27
     ],
     [
      73,
      74
     ],
     [
      71,
      81
     ],
     [
      79,
      89
     ],
     [
      93,
      94
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      5,
      "t"
     ],
     [
      9,
      "r"
     ],
     [
      69,
      "r"
     ],
     [
      93,
      "b"
     ],
     [
      98,
      "b"
     ]
    ],
    "tries": 0,
    "group": 0
   },
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
    ],
    "tries": 1,
    "group": 1
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
    ],
    "tries": 1,
    "group": 1
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
    ],
    "tries": 1,
    "group": 1
   },
   {
    "size": 7,
    "rooms": "0000111000011122221112222111333344433334443333444",
    "objects": "......b..e......e.....fe...d.f.e.....e....b..cc..",
    "roomNames": [
     "Bridge",
     "Airlock",
     "Hydroponics",
     "Comms",
     "Crew Quarters"
    ],
    "people": [
     "Alma the analyst",
     "Vince the volunteer",
     "Bea the biologist",
     "Carl the chemist",
     "Dmitri the driller",
     "Edith the electrician",
     "Freya the flight officer"
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
      "row",
      1
     ],
     [
      2,
      "window"
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "same",
      5
     ],
     [
      5,
      "next",
      "console"
     ],
     [
      6,
      "on",
      "pod"
     ]
    ],
    "solution": [
     2,
     8,
     20,
     24,
     33,
     39,
     42
    ],
    "doors": [
     [
      10,
      11
     ],
     [
      9,
      16
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
      23,
      30
     ],
     [
      38,
      39
     ]
    ],
    "windows": [
     [
      20,
      "r"
     ],
     [
      27,
      "r"
     ],
     [
      34,
      "r"
     ],
     [
      42,
      "l"
     ]
    ],
    "tries": 1,
    "group": 1
   },
   {
    "size": 8,
    "rooms": "0001122200011222000112220001122233344555333445553334455533344555",
    "objects": ".e..b...f..ce.ccb....a....ba.f.a.e.e..e..e.aabec............aa..",
    "roomNames": [
     "Cargo Bay",
     "Airlock",
     "Hydroponics",
     "Lab",
     "Comms",
     "Bridge"
    ],
    "people": [
     "Astrid the astronaut",
     "Basil the biologist",
     "Carl the captain",
     "Dexter the doctor",
     "Ena the engineer",
     "Freya the flight officer",
     "Victor the volunteer",
     "Gideon the gunner"
    ],
    "victim": 6,
    "clues": [
     [
      0,
      "next",
      "tank"
     ],
     [
      1,
      "same",
      2
     ],
     [
      2,
      "next",
      "pod"
     ],
     [
      3,
      "next",
      "tank"
     ],
     [
      3,
      "next",
      "seat"
     ],
     [
      4,
      "next",
      "plant"
     ],
     [
      5,
      "on",
      "pod"
     ],
     [
      7,
      "window"
     ]
    ],
    "solution": [
     0,
     10,
     17,
     30,
     36,
     45,
     51,
     63
    ],
    "doors": [
     [
      26,
      27
     ],
     [
      25,
      33
     ],
     [
      4,
      5
     ],
     [
      27,
      35
     ],
     [
      31,
      39
     ],
     [
      58,
      59
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
      6,
      "t"
     ],
     [
      32,
      "l"
     ],
     [
      58,
      "b"
     ],
     [
      63,
      "b"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "nextCount",
      "plant",
      3
     ],
     [
      "roomCount",
      1,
      0
     ]
    ],
    "group": 1
   },
   {
    "size": 9,
    "rooms": "000011222000011222333311222333311222444444555444444555444444555666666555666666555",
    "objects": ".effd.......f......c....d.....f..a...f.f.....cc.........ba..c..a..c...c..b.b..a..",
    "roomNames": [
     "Observatory",
     "Airlock",
     "Med Bay",
     "Engine Room",
     "Mess Hall",
     "Hydroponics",
     "Lab"
    ],
    "people": [
     "Ada the astronaut",
     "Bella the botanist",
     "Viola the visitor",
     "Cedric the chemist",
     "Dora the driller",
     "Elsa the engineer",
     "Frank the farmer",
     "Greta the gunner",
     "Hilda the hull technician"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "next",
      "scope"
     ],
     [
      1,
      "next",
      "plant"
     ],
     [
      3,
      "next",
      "seat"
     ],
     [
      4,
      "next",
      "tank"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "next",
      "tank"
     ],
     [
      6,
      "same",
      4
     ],
     [
      7,
      "next",
      "console"
     ],
     [
      8,
      "next",
      "seat"
     ],
     [
      8,
      "next",
      "pod"
     ]
    ],
    "solution": [
     5,
     10,
     26,
     34,
     40,
     48,
     56,
     69,
     72
    ],
    "doors": [
     [
      12,
      13
     ],
     [
      12,
      21
     ],
     [
      23,
      24
     ],
     [
      21,
      22
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
      27,
      36
     ],
     [
      41,
      42
     ],
     [
      57,
      66
     ],
     [
      77,
      78
     ]
    ],
    "windows": [
     [
      5,
      "t"
     ],
     [
      9,
      "l"
     ],
     [
      18,
      "l"
     ],
     [
      53,
      "r"
     ],
     [
      75,
      "b"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "furniture",
      null,
      1
     ],
     [
      "doorCount",
      null,
      1
     ],
     [
      "roomCount",
      2,
      2
     ]
    ],
    "group": 1
   },
   {
    "size": 10,
    "rooms": "0001112222000111222200011122220001112222333344445533334444553333444455333366777766666677776666667777",
    "objects": "...b...a...c....c.d...bd.......d.b....c...c..............bb.dc.d.....ff.....c.......bd.c..e.d....c..",
    "roomNames": [
     "Cargo Bay",
     "Comms",
     "Mess Hall",
     "Crew Quarters",
     "Engine Room",
     "Med Bay",
     "Observatory",
     "Airlock"
    ],
    "people": [
     "Ada the analyst",
     "Bea the biologist",
     "Cora the captain",
     "Daisy the driller",
     "Edgar the engineer",
     "Frank the farmer",
     "Grace the gunner",
     "Hugo the hacker",
     "Victor the volunteer",
     "Isla the instructor"
    ],
    "victim": 8,
    "clues": [
     [
      0,
      "col",
      9
     ],
     [
      1,
      "row",
      1
     ],
     [
      1,
      "col",
      5
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "on",
      "pod"
     ],
     [
      3,
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
      "next",
      "console"
     ],
     [
      5,
      "row",
      5
     ],
     [
      6,
      "row",
      6
     ],
     [
      7,
      "alone"
     ],
     [
      8,
      "next",
      "plant"
     ],
     [
      9,
      "next",
      "scope"
     ]
    ],
    "solution": [
     9,
     15,
     22,
     37,
     44,
     51,
     66,
     78,
     80,
     93
    ],
    "doors": [
     [
      2,
      3
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
      33,
      43
     ],
     [
      34,
      44
     ],
     [
      37,
      47
     ],
     [
      39,
      49
     ],
     [
      53,
      54
     ],
     [
      73,
      74
     ],
     [
      47,
      48
     ],
     [
      64,
      74
     ],
     [
      67,
      77
     ],
     [
      68,
      78
     ],
     [
      85,
      86
     ]
    ],
    "windows": [
     [
      2,
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
      79,
      "r"
     ],
     [
      91,
      "b"
     ],
     [
      98,
      "b"
     ]
    ],
    "tries": 1,
    "facts": [
     [
      "roomCount",
      4,
      2
     ]
    ],
    "group": 1
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
    ],
    "tries": 2,
    "group": 1
   },
   {
    "size": 12,
    "rooms": "001111222222001111222222001111222222001111333344001111333344555555333344555555333344555555333344666677777888666677777888666677777888666677777888",
    "objects": "aa...b....cb...e..e.c.fe.c....ab.c.a............d..f.e..c..dd.e..c....bba.....eb...f..a.e......a...e.......ef...b.a.e...bc.e.e.d.f....a..f.eb..d",
    "roomNames": [
     "Observatory",
     "Lab",
     "Comms",
     "Crew Quarters",
     "Mess Hall",
     "Cargo Bay",
     "Gym",
     "Med Bay",
     "Airlock"
    ],
    "people": [
     "Ada the analyst",
     "Basil the botanist",
     "Celia the chemist",
     "Vince the visitor",
     "Dexter the doctor",
     "Elias the engineer",
     "Frank the farmer",
     "Gideon the geologist",
     "Hilda the hacker",
     "Ines the instructor",
     "Jutta the janitor",
     "Kitty the kitchen chief"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "next",
      "console"
     ],
     [
      1,
      "row",
      1
     ],
     [
      2,
      "same",
      1
     ],
     [
      4,
      "next",
      "console"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "on",
      "pod"
     ],
     [
      6,
      "next",
      "console"
     ],
     [
      7,
      "same",
      6
     ],
     [
      8,
      "next",
      "tank"
     ],
     [
      8,
      "same",
      9
     ],
     [
      9,
      "next",
      "console"
     ],
     [
      10,
      "next",
      "pod"
     ],
     [
      10,
      "next",
      "scope"
     ],
     [
      11,
      "next",
      "plant"
     ]
    ],
    "solution": [
     11,
     16,
     27,
     43,
     57,
     70,
     77,
     86,
     96,
     109,
     128,
     138
    ],
    "doors": [
     [
      37,
      38
     ],
     [
      48,
      60
     ],
     [
      29,
      30
     ],
     [
      53,
      54
     ],
     [
      53,
      65
     ],
     [
      33,
      45
     ],
     [
      34,
      46
     ],
     [
      57,
      58
     ],
     [
      89,
      90
     ],
     [
      91,
      103
     ],
     [
      93,
      105
     ],
     [
      95,
      107
     ],
     [
      85,
      97
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
      104,
      105
     ]
    ],
    "windows": [
     [
      6,
      "t"
     ],
     [
      9,
      "t"
     ],
     [
      11,
      "r"
     ],
     [
      12,
      "l"
     ],
     [
      107,
      "r"
     ],
     [
      132,
      "l"
     ],
     [
      132,
      "b"
     ]
    ],
    "tries": 1,
    "facts": [
     [
      "nextCount",
      "pod",
      1
     ],
     [
      "nextCount",
      "seat",
      0
     ]
    ],
    "group": 1
   },
   {
    "size": 4,
    "rooms": "0000000011112222",
    "objects": "..cfb..........b",
    "roomNames": [
     "Mess Hall",
     "Gym",
     "Crew Quarters"
    ],
    "people": [
     "Arthur the analyst",
     "Viola the visitor",
     "Bruno the biologist",
     "Cedric the captain"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "next",
      "console"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "notRoom",
      1
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
      10,
      14
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      8,
      "l"
     ]
    ],
    "tries": 3,
    "facts": [
     [
      "furniture",
      null,
      0
     ]
    ],
    "group": 2
   },
   {
    "size": 5,
    "rooms": "0001100011000112233322333",
    "objects": ".b.d....a.b.f..e....f.aae",
    "roomNames": [
     "Bridge",
     "Lab",
     "Med Bay",
     "Comms"
    ],
    "people": [
     "Alma the analyst",
     "Bruno the botanist",
     "Vivian the volunteer",
     "Celia the chemist",
     "Dora the doctor"
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
      "seat"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "next",
      "tank"
     ]
    ],
    "solution": [
     0,
     8,
     14,
     17,
     21
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
      16,
      17
     ]
    ],
    "windows": [
     [
      5,
      "l"
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
    "tries": 4,
    "facts": [
     [
      "touch",
      null,
      1
     ],
     [
      "windowCount",
      null,
      1
     ]
    ],
    "group": 2
   },
   {
    "size": 6,
    "rooms": "001111001111002233002233002244002244",
    "objects": "........bbeaa.ae...aba..d..cb.ab...e",
    "roomNames": [
     "Hydroponics",
     "Gym",
     "Med Bay",
     "Airlock",
     "Crew Quarters"
    ],
    "people": [
     "Astrid the astronaut",
     "Bruno the botanist",
     "Vera the visitor",
     "Celia the captain",
     "Dora the driller",
     "Edgar the electrician"
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
      "next",
      "seat"
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
      "console"
     ],
     [
      5,
      "next",
      "plant"
     ]
    ],
    "solution": [
     3,
     6,
     13,
     23,
     26,
     34
    ],
    "doors": [
     [
      7,
      8
     ],
     [
      13,
      14
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
      21,
      22
     ],
     [
      27,
      28
     ],
     [
      22,
      28
     ]
    ],
    "windows": [
     [
      5,
      "r"
     ],
     [
      18,
      "l"
     ],
     [
      29,
      "r"
     ],
     [
      34,
      "b"
     ]
    ],
    "tries": 3,
    "facts": [
     [
      "emptyRooms",
      null,
      0
     ],
     [
      "nextCount",
      "scope",
      0
     ],
     [
      "nextCount",
      "pod",
      3
     ]
    ],
    "group": 2
   },
   {
    "size": 7,
    "rooms": "0001111000111100011112222333222233344443334444333",
    "objects": "aca..bb...f..b..b.......bcb..f......fc..a.a.a..e.",
    "roomNames": [
     "Lab",
     "Med Bay",
     "Hydroponics",
     "Gym",
     "Engine Room"
    ],
    "people": [
     "Ada the analyst",
     "Basil the biologist",
     "Clara the chemist",
     "Vivian the volunteer",
     "Dmitri the doctor",
     "Elias the engineer",
     "Flora the flight officer"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "on",
      "pod"
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
      "next",
      "pod"
     ],
     [
      4,
      "next",
      "console"
     ],
     [
      5,
      "next",
      "console"
     ],
     [
      5,
      "same",
      6
     ],
     [
      6,
      "next",
      "tank"
     ]
    ],
    "solution": [
     5,
     7,
     16,
     27,
     32,
     38,
     43
    ],
    "doors": [
     [
      9,
      10
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
      18,
      25
     ],
     [
      31,
      32
     ],
     [
      28,
      35
     ],
     [
      38,
      39
     ]
    ],
    "windows": [
     [
      5,
      "t"
     ],
     [
      6,
      "t"
     ],
     [
      34,
      "r"
     ],
     [
      44,
      "b"
     ]
    ],
    "tries": 4,
    "facts": [
     [
      "alone",
      null,
      1
     ]
    ],
    "group": 2
   },
   {
    "size": 8,
    "rooms": "0000011100000111222221112222211122222111333445553334455533344555",
    "objects": "c.......db......c...c..f...b.....bf.....c.........e.............",
    "roomNames": [
     "Engine Room",
     "Hydroponics",
     "Gym",
     "Comms",
     "Mess Hall",
     "Crew Quarters"
    ],
    "people": [
     "Ada the astronaut",
     "Bea the botanist",
     "Vince the volunteer",
     "Carl the captain",
     "Dmitri the doctor",
     "Edgar the electrician",
     "Freya the farmer",
     "Gideon the gunner"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "next",
      "pod"
     ],
     [
      0,
      "next",
      "console"
     ],
     [
      1,
      "same",
      0
     ],
     [
      2,
      "next",
      "tank"
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "col",
      5
     ],
     [
      5,
      "door"
     ],
     [
      5,
      "col",
      3
     ],
     [
      6,
      "same",
      5
     ],
     [
      7,
      "row",
      7
     ]
    ],
    "solution": [
     1,
     10,
     22,
     24,
     37,
     43,
     52,
     63
    ],
    "doors": [
     [
      4,
      5
     ],
     [
      12,
      20
     ],
     [
      20,
      21
     ],
     [
      38,
      46
     ],
     [
      32,
      40
     ],
     [
      35,
      43
     ],
     [
      58,
      59
     ],
     [
      44,
      45
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      3,
      "t"
     ],
     [
      23,
      "r"
     ],
     [
      40,
      "l"
     ],
     [
      57,
      "b"
     ]
    ],
    "tries": 4,
    "facts": [
     [
      "corner",
      null,
      3
     ],
     [
      "nextCount",
      "console",
      2
     ]
    ],
    "group": 2
   },
   {
    "size": 9,
    "rooms": "000000000000000000111111222111111222333344555333344555333344555666644555666644555",
    "objects": "ea...af...c..a.a.........df....fe..db..f...d.......bed..a.d...d.f.c..c...ad.d..b.",
    "roomNames": [
     "Hydroponics",
     "Lab",
     "Med Bay",
     "Mess Hall",
     "Gym",
     "Observatory",
     "Airlock"
    ],
    "people": [
     "Ada the analyst",
     "Birgit the botanist",
     "Cora the captain",
     "Della the doctor",
     "Elias the engineer",
     "Freya the farmer",
     "Gwen the gunner",
     "Hilda the hacker",
     "Victor the volunteer"
    ],
    "victim": 8,
    "clues": [
     [
      0,
      "same",
      1
     ],
     [
      1,
      "next",
      "seat"
     ],
     [
      1,
      "col",
      7
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
      "next",
      "scope"
     ],
     [
      5,
      "same",
      7
     ],
     [
      6,
      "on",
      "seat"
     ],
     [
      7,
      "next",
      "scope"
     ],
     [
      7,
      "door"
     ],
     [
      8,
      "next",
      "pod"
     ]
    ],
    "solution": [
     3,
     16,
     18,
     28,
     42,
     50,
     56,
     67,
     80
    ],
    "doors": [
     [
      9,
      18
     ],
     [
      15,
      24
     ],
     [
      32,
      33
     ],
     [
      27,
      36
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
      39,
      40
     ],
     [
      57,
      66
     ],
     [
      68,
      69
     ],
     [
      66,
      67
     ]
    ],
    "windows": [
     [
      8,
      "r"
     ],
     [
      9,
      "l"
     ],
     [
      63,
      "l"
     ],
     [
      78,
      "b"
     ],
     [
      79,
      "b"
     ]
    ],
    "tries": 3,
    "facts": [
     [
      "nextCount",
      "console",
      0
     ],
     [
      "roomCount",
      2,
      0
     ]
    ],
    "group": 2
   },
   {
    "size": 10,
    "rooms": "0001122333000112233300011223330001122333444442225544444222554444466655777776665577777666557777766655",
    "objects": "....c...b.....a.......f.e...aa.ae....fd.b....f..bb....da..ba...c..b.a..e..a..d....f.....ad.d..d..f..",
    "roomNames": [
     "Cargo Bay",
     "Observatory",
     "Crew Quarters",
     "Lab",
     "Airlock",
     "Hydroponics",
     "Comms",
     "Engine Room"
    ],
    "people": [
     "Ada the astronaut",
     "Bruno the botanist",
     "Celia the chemist",
     "Dora the driller",
     "Ena the engineer",
     "Freya the farmer",
     "Gideon the gunner",
     "Vince the volunteer",
     "Hilda the hull technician",
     "Isla the instructor"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "next",
      "pod"
     ],
     [
      1,
      "col",
      1
     ],
     [
      2,
      "row",
      2
     ],
     [
      3,
      "room",
      1
     ],
     [
      4,
      "on",
      "pod"
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
      "next",
      "console"
     ],
     [
      6,
      "door"
     ],
     [
      7,
      "next",
      "pod"
     ],
     [
      7,
      "next",
      "scope"
     ],
     [
      8,
      "next",
      "scope"
     ],
     [
      9,
      "alone"
     ]
    ],
    "solution": [
     9,
     11,
     25,
     33,
     48,
     52,
     64,
     76,
     87,
     90
    ],
    "doors": [
     [
      12,
      13
     ],
     [
      32,
      42
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
      44,
      45
     ],
     [
      47,
      48
     ],
     [
      56,
      66
     ],
     [
      38,
      48
     ],
     [
      64,
      65
     ],
     [
      64,
      74
     ],
     [
      87,
      88
     ],
     [
      74,
      75
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
      19,
      "r"
     ],
     [
      80,
      "l"
     ],
     [
      91,
      "b"
     ],
     [
      94,
      "b"
     ]
    ],
    "tries": 3,
    "facts": [
     [
      "furniture",
      null,
      1
     ],
     [
      "edge",
      null,
      2
     ]
    ],
    "group": 2
   },
   {
    "size": 11,
    "rooms": "0001111222200011112222000111122220001111222233333334444333333344443333333444455666677777556666777775566667777755666677777",
    "objects": "b....b.f.....a..fbb.....cfa..f....a.e..a....a....b..d...c.cf...b.feb..be.fba...b.....a.b.a.....cc..a.....ac..d.b.........",
    "roomNames": [
     "Observatory",
     "Crew Quarters",
     "Lab",
     "Engine Room",
     "Med Bay",
     "Bridge",
     "Hydroponics",
     "Comms"
    ],
    "people": [
     "Albert the astronaut",
     "Bella the biologist",
     "Carl the chemist",
     "Dmitri the driller",
     "Elsa the electrician",
     "Felix the farmer",
     "Vera the volunteer",
     "Greta the gunner",
     "Hazel the hacker",
     "Ines the intern",
     "Jasper the janitor"
    ],
    "victim": 6,
    "clues": [
     [
      0,
      "on",
      "pod"
     ],
     [
      1,
      "on",
      "pod"
     ],
     [
      2,
      "on",
      "seat"
     ],
     [
      2,
      "next",
      "tank"
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "same",
      0
     ],
     [
      4,
      "next",
      "scope"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "next",
      "console"
     ],
     [
      6,
      "next",
      "console"
     ],
     [
      6,
      "next",
      "pod"
     ],
     [
      7,
      "alone"
     ],
     [
      8,
      "next",
      "seat"
     ],
     [
      8,
      "next",
      "console"
     ],
     [
      9,
      "same",
      8
     ],
     [
      10,
      "next",
      "scope"
     ]
    ],
    "solution": [
     0,
     18,
     26,
     34,
     53,
     57,
     69,
     82,
     94,
     107,
     120
    ],
    "doors": [
     [
      2,
      3
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
      41,
      52
     ],
     [
      72,
      73
     ],
     [
      66,
      77
     ],
     [
      68,
      79
     ],
     [
      72,
      83
     ],
     [
      73,
      84
     ],
     [
      89,
      90
     ],
     [
      115,
      116
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
      10,
      "t"
     ],
     [
      33,
      "l"
     ],
     [
      113,
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
    "tries": 4,
    "facts": [
     [
      "onCount",
      "seat",
      2
     ],
     [
      "roomCount",
      3,
      2
     ],
     [
      "furniture",
      null,
      4
     ]
    ],
    "group": 2
   },
   {
    "size": 12,
    "rooms": "000001111111000001111111000002222222333332222222333332222222444556666666444556666666444556666666444557777888444557777888444557777888444557777888",
    "objects": ".a...c.d.b.......e..fc.a.b...b....d..f...d..c.d........b...b.b......c..............cc...b.e.c..f....a..aabfef.f.....fa.....a..e...b......a..e.da",
    "roomNames": [
     "Crew Quarters",
     "Hydroponics",
     "Lab",
     "Gym",
     "Comms",
     "Engine Room",
     "Airlock",
     "Mess Hall",
     "Med Bay"
    ],
    "people": [
     "Albert the analyst",
     "Basil the biologist",
     "Clara the captain",
     "Dmitri the doctor",
     "Elias the electrician",
     "Fiona the flight officer",
     "Greta the geologist",
     "Victor the visitor",
     "Hilda the hull technician",
     "Ivy the intern",
     "Juno the janitor",
     "Klaus the keeper"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "next",
      "seat"
     ],
     [
      1,
      "same",
      0
     ],
     [
      1,
      "next",
      "scope"
     ],
     [
      2,
      "next",
      "pod"
     ],
     [
      3,
      "next",
      "tank"
     ],
     [
      3,
      "col",
      2
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "next",
      "scope"
     ],
     [
      5,
      "alone"
     ],
     [
      6,
      "room",
      4
     ],
     [
      6,
      "next",
      "pod"
     ],
     [
      7,
      "next",
      "pod"
     ],
     [
      8,
      "next",
      "seat"
     ],
     [
      8,
      "next",
      "tank"
     ],
     [
      9,
      "next",
      "tank"
     ],
     [
      9,
      "next",
      "pod"
     ],
     [
      10,
      "next",
      "plant"
     ],
     [
      11,
      "door"
     ]
    ],
    "solution": [
     11,
     19,
     24,
     38,
     53,
     66,
     73,
     87,
     105,
     118,
     128,
     136
    ],
    "doors": [
     [
      16,
      17
     ],
     [
      28,
      29
     ],
     [
      28,
      40
     ],
     [
      23,
      35
     ],
     [
      40,
      41
     ],
     [
      59,
      71
     ],
     [
      48,
      60
     ],
     [
      51,
      63
     ],
     [
      74,
      75
     ],
     [
      64,
      65
     ],
     [
      136,
      137
     ],
     [
      90,
      102
     ],
     [
      95,
      107
     ],
     [
      116,
      117
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
      48,
      "l"
     ],
     [
      137,
      "b"
     ],
     [
      139,
      "b"
     ],
     [
      142,
      "b"
     ],
     [
      143,
      "r"
     ]
    ],
    "tries": 4,
    "facts": [
     [
      "nextCount",
      "scope",
      2
     ]
    ],
    "group": 2
   },
   {
    "size": 4,
    "rooms": "0011001122222222",
    "objects": "....f.f......b..",
    "roomNames": [
     "Crew Quarters",
     "Comms",
     "Mess Hall"
    ],
    "people": [
     "Arthur the analyst",
     "Bella the botanist",
     "Victor the volunteer",
     "Cora the captain"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "next",
      "tank"
     ],
     [
      1,
      "door"
     ],
     [
      3,
      "window"
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
      3,
      "t"
     ],
     [
      14,
      "b"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "touch",
      null,
      1
     ]
    ],
    "group": 3
   },
   {
    "size": 5,
    "rooms": "0001100011223332233322333",
    "objects": "..b..ba..d..a..d.a.d.a...",
    "roomNames": [
     "Bridge",
     "Med Bay",
     "Comms",
     "Engine Room"
    ],
    "people": [
     "Alma the analyst",
     "Bea the biologist",
     "Cedric the captain",
     "Dora the doctor",
     "Victor the volunteer"
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
      "scope"
     ],
     [
      2,
      "door"
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "on",
      "seat"
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
      2,
      3
     ],
     [
      5,
      10
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
      11,
      12
     ]
    ],
    "windows": [
     [
      20,
      "b"
     ],
     [
      22,
      "b"
     ],
     [
      23,
      "b"
     ]
    ],
    "tries": 9,
    "facts": [
     [
      "onCount",
      "pod",
      0
     ],
     [
      "edge",
      null,
      2
     ],
     [
      "roomCount",
      3,
      2
     ]
    ],
    "group": 3
   },
   {
    "size": 6,
    "rooms": "000111000111000111223344223344223344",
    "objects": "..bb..d..b..........a..ae......bed.b",
    "roomNames": [
     "Cargo Bay",
     "Lab",
     "Gym",
     "Engine Room",
     "Med Bay"
    ],
    "people": [
     "Astrid the astronaut",
     "Birgit the biologist",
     "Celia the captain",
     "Vera the visitor",
     "Daisy the driller",
     "Edgar the engineer"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "door"
     ],
     [
      0,
      "alone"
     ],
     [
      1,
      "next",
      "pod"
     ],
     [
      2,
      "next",
      "scope"
     ],
     [
      3,
      "next",
      "seat"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "window"
     ]
    ],
    "solution": [
     3,
     8,
     12,
     22,
     25,
     35
    ],
    "doors": [
     [
      2,
      3
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
      17,
      23
     ],
     [
      19,
      20
     ],
     [
      21,
      22
     ]
    ],
    "windows": [
     [
      5,
      "t"
     ],
     [
      23,
      "r"
     ],
     [
      24,
      "l"
     ],
     [
      35,
      "b"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "furniture",
      null,
      2
     ]
    ],
    "group": 3
   },
   {
    "size": 7,
    "rooms": "0000111000011100001112222333222233344443334444333",
    "objects": "a.eba........a..f..b.ab....b....b....c....af..aae",
    "roomNames": [
     "Bridge",
     "Engine Room",
     "Comms",
     "Lab",
     "Gym"
    ],
    "people": [
     "Ada the astronaut",
     "Victor the volunteer",
     "Bruno the biologist",
     "Clara the captain",
     "Della the driller",
     "Edgar the engineer",
     "Freya the farmer"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "on",
      "seat"
     ],
     [
      2,
      "on",
      "pod"
     ],
     [
      3,
      "next",
      "seat"
     ],
     [
      4,
      "same",
      3
     ],
     [
      5,
      "next",
      "seat"
     ],
     [
      6,
      "next",
      "console"
     ],
     [
      6,
      "next",
      "tank"
     ]
    ],
    "solution": [
     0,
     13,
     19,
     22,
     31,
     39,
     44
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      17,
      24
     ],
     [
      20,
      27
     ],
     [
      24,
      25
     ],
     [
      30,
      37
     ],
     [
      45,
      46
     ]
    ],
    "windows": [
     [
      6,
      "t"
     ],
     [
      7,
      "l"
     ],
     [
      41,
      "r"
     ],
     [
      43,
      "b"
     ]
    ],
    "tries": 9,
    "facts": [
     [
      "nextCount",
      "seat",
      2
     ],
     [
      "roomCount",
      3,
      1
     ],
     [
      "windowCount",
      null,
      0
     ]
    ],
    "group": 3
   },
   {
    "size": 8,
    "rooms": "0000111100001111000022220000222233334455333344553333445533334455",
    "objects": "...a..............a.dbb......b..be.c.cdea.f..b.....d.dbf...d.f.a",
    "roomNames": [
     "Airlock",
     "Engine Room",
     "Comms",
     "Gym",
     "Observatory",
     "Mess Hall"
    ],
    "people": [
     "Astrid the analyst",
     "Bea the biologist",
     "Cora the chemist",
     "Dora the driller",
     "Elsa the engineer",
     "Victor the volunteer",
     "Freya the flight officer",
     "Grace the gunner"
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
      "seat"
     ],
     [
      2,
      "same",
      1
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "next",
      "console"
     ],
     [
      5,
      "next",
      "tank"
     ],
     [
      6,
      "col",
      1
     ],
     [
      7,
      "next",
      "seat"
     ]
    ],
    "solution": [
     0,
     11,
     18,
     29,
     36,
     47,
     49,
     62
    ],
    "doors": [
     [
      11,
      12
     ],
     [
      19,
      20
     ],
     [
      24,
      32
     ],
     [
      15,
      23
     ],
     [
      29,
      37
     ],
     [
      30,
      38
     ],
     [
      59,
      60
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
      0,
      "l"
     ],
     [
      1,
      "t"
     ],
     [
      31,
      "r"
     ],
     [
      39,
      "r"
     ]
    ],
    "tries": 7,
    "facts": [
     [
      "furniture",
      null,
      2
     ]
    ],
    "group": 3
   },
   {
    "size": 9,
    "rooms": "000112222000112222000112222000112222334444555334444555334444555333366666333366666",
    "objects": "b.fda.....e...ce...eac......db...d..ec.....cbaa..ba....fb..a.a.d..d..fb.b......d.",
    "roomNames": [
     "Med Bay",
     "Bridge",
     "Hydroponics",
     "Comms",
     "Engine Room",
     "Mess Hall",
     "Observatory"
    ],
    "people": [
     "Arthur the astronaut",
     "Bruno the botanist",
     "Celia the chemist",
     "Dmitri the doctor",
     "Elias the electrician",
     "Frank the farmer",
     "Greta the gunner",
     "Hilda the hull technician",
     "Victor the volunteer"
    ],
    "victim": 8,
    "clues": [
     [
      0,
      "next",
      "plant"
     ],
     [
      0,
      "next",
      "tank"
     ],
     [
      1,
      "next",
      "seat"
     ],
     [
      2,
      "same",
      1
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "next",
      "console"
     ],
     [
      5,
      "next",
      "seat"
     ],
     [
      6,
      "same",
      4
     ],
     [
      7,
      "next",
      "pod"
     ]
    ],
    "solution": [
     1,
     11,
     18,
     30,
     42,
     49,
     61,
     71,
     77
    ],
    "doors": [
     [
      29,
      30
     ],
     [
      28,
      37
     ],
     [
      29,
      38
     ],
     [
      4,
      5
     ],
     [
      31,
      40
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
      37,
      38
     ],
     [
      66,
      67
     ],
     [
      59,
      60
     ],
     [
      58,
      67
     ],
     [
      61,
      70
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
      8,
      "r"
     ],
     [
      36,
      "l"
     ],
     [
      72,
      "l"
     ]
    ],
    "tries": 10,
    "facts": [
     [
      "roomCount",
      0,
      3
     ],
     [
      "onCount",
      "pod",
      1
     ]
    ],
    "group": 3
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
    ],
    "tries": 10,
    "group": 3
   },
   {
    "size": 11,
    "rooms": "0001112222200011122222000111222220001112222233333344444333333444443333334444455566667777555666677775556666777755566667777",
    "objects": "a......d..fba.......f..d..ef....c.d.....a.b....e.e..cff..a......beff.a....d.f.c.f.ffa.e....abc...bd..a....cc.....a.......",
    "roomNames": [
     "Mess Hall",
     "Med Bay",
     "Observatory",
     "Cargo Bay",
     "Crew Quarters",
     "Comms",
     "Lab",
     "Hydroponics"
    ],
    "people": [
     "Alma the astronaut",
     "Birgit the botanist",
     "Clara the captain",
     "Dmitri the doctor",
     "Elias the electrician",
     "Flora the flight officer",
     "Gideon the gunner",
     "Hilda the hull technician",
     "Ines the intern",
     "Jasper the janitor",
     "Vince the visitor"
    ],
    "victim": 10,
    "clues": [
     [
      0,
      "same",
      1
     ],
     [
      0,
      "same",
      3
     ],
     [
      1,
      "next",
      "tank"
     ],
     [
      1,
      "next",
      "console"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "on",
      "seat"
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
      "on",
      "seat"
     ],
     [
      6,
      "door"
     ],
     [
      7,
      "next",
      "console"
     ],
     [
      8,
      "on",
      "pod"
     ],
     [
      9,
      "next",
      "seat"
     ]
    ],
    "solution": [
     9,
     21,
     24,
     40,
     50,
     63,
     69,
     77,
     92,
     100,
     115
    ],
    "doors": [
     [
      24,
      25
     ],
     [
      33,
      44
     ],
     [
      5,
      6
     ],
     [
      37,
      48
     ],
     [
      41,
      52
     ],
     [
      71,
      72
     ],
     [
      67,
      78
     ],
     [
      69,
      80
     ],
     [
      72,
      83
     ],
     [
      76,
      87
     ],
     [
      90,
      91
     ],
     [
      116,
      117
     ]
    ],
    "windows": [
     [
      7,
      "t"
     ],
     [
      9,
      "t"
     ],
     [
      21,
      "r"
     ],
     [
      66,
      "l"
     ],
     [
      87,
      "r"
     ],
     [
      98,
      "r"
     ],
     [
      117,
      "b"
     ]
    ],
    "tries": 7,
    "facts": [
     [
      "roomCount",
      7,
      0
     ]
    ],
    "group": 3
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
    ],
    "tries": 9,
    "group": 3
   }
  ]
 },
 {
  "theme": "theater",
  "levels": [
   {
    "size": 4,
    "rooms": "0011001122222222",
    "objects": "..a..f..e.......",
    "roomNames": [
     "Dressing Room",
     "Green Room",
     "Wings"
    ],
    "people": [
     "Vera the violinist",
     "Alma the agent",
     "Bea the baritone",
     "Cedric the critic"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "door"
     ],
     [
      2,
      "next",
      "rack"
     ],
     [
      3,
      "row",
      3
     ]
    ],
    "solution": [
     3,
     6,
     9,
     12
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
      7,
      "r"
     ],
     [
      13,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "nextCount",
      "seat",
      2
     ]
    ],
    "group": 0
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
      3,
      "next",
      "rack"
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
    "tries": 0,
    "facts": [
     [
      "nextCount",
      "rack",
      2
     ]
    ],
    "group": 0
   },
   {
    "size": 6,
    "rooms": "000011000011222211222211334444334444",
    "objects": ".b...d..e.f.......da.....a..a...f...",
    "roomNames": [
     "Dressing Room",
     "Costume Room",
     "Orchestra Pit",
     "Balcony",
     "Foyer"
    ],
    "people": [
     "Astrid the agent",
     "Birgit the bass player",
     "Vera the violinist",
     "Cora the choreographer",
     "Dora the director",
     "Elsa the electrician"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "on",
      "sofa"
     ],
     [
      1,
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
      "seat"
     ],
     [
      5,
      "alone"
     ]
    ],
    "solution": [
     1,
     11,
     14,
     21,
     28,
     30
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
      21,
      22
     ],
     [
      22,
      28
     ],
     [
      18,
      24
     ],
     [
      21,
      27
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
      5,
      "t"
     ],
     [
      18,
      "l"
     ],
     [
      23,
      "r"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "roomCount",
      3,
      1
     ]
    ],
    "group": 0
   },
   {
    "size": 7,
    "rooms": "0000111000011100001112223333222333322244442224444",
    "objects": "b...b...a...aa..a.ebe.cbde...e......d...........f",
    "roomNames": [
     "Box Office",
     "Prop Store",
     "Costume Room",
     "Balcony",
     "Orchestra Pit"
    ],
    "people": [
     "Victor the ventriloquist",
     "Albert the agent",
     "Birgit the baritone",
     "Carl the critic",
     "Della the director",
     "Ena the electrician",
     "Frank the flautist"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "on",
      "seat"
     ],
     [
      2,
      "on",
      "seat"
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "next",
      "piano"
     ],
     [
      4,
      "next",
      "mirror"
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
      "mirror"
     ]
    ],
    "solution": [
     5,
     13,
     16,
     21,
     31,
     39,
     43
    ],
    "doors": [
     [
      17,
      18
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
      32,
      39
     ]
    ],
    "windows": [
     [
      5,
      "t"
     ],
     [
      41,
      "r"
     ],
     [
      47,
      "b"
     ],
     [
      48,
      "r"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "nextCount",
      "rack",
      1
     ]
    ],
    "group": 0
   },
   {
    "size": 8,
    "rooms": "0001111100011111000222330002223300022233444555554445555544455555",
    "objects": ".....f....f.......b.a..cb....a.........a....f.....ac.....b...e.d",
    "roomNames": [
     "Costume Room",
     "Wings",
     "Balcony",
     "Orchestra Pit",
     "Box Office",
     "Foyer"
    ],
    "people": [
     "Albert the agent",
     "Bella the baritone",
     "Clara the choreographer",
     "Dexter the director",
     "Edith the electrician",
     "Victor the violinist",
     "Felix the flautist",
     "Gideon the ghost writer"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "next",
      "light"
     ],
     [
      0,
      "col",
      6
     ],
     [
      1,
      "same",
      0
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "row",
      3
     ],
     [
      3,
      "col",
      3
     ],
     [
      4,
      "next",
      "seat"
     ],
     [
      6,
      "next",
      "mirror"
     ],
     [
      7,
      "next",
      "sofa"
     ]
    ],
    "solution": [
     6,
     12,
     18,
     27,
     37,
     41,
     55,
     56
    ],
    "doors": [
     [
      2,
      3
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
      13,
      21
     ],
     [
      15,
      23
     ],
     [
      21,
      22
     ],
     [
      36,
      44
     ],
     [
      38,
      46
     ],
     [
      42,
      43
     ]
    ],
    "windows": [
     [
      48,
      "l"
     ],
     [
      56,
      "b"
     ],
     [
      61,
      "b"
     ],
     [
      62,
      "b"
     ],
     [
      63,
      "r"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "windowCount",
      null,
      1
     ],
     [
      "onCount",
      "sofa",
      1
     ]
    ],
    "group": 0
   },
   {
    "size": 9,
    "rooms": "000001111000001111000001111223333444223333444225555444225555444666666444666666444",
    "objects": "a.a....c.bf...f.b.....a...a...e......e..a..e.b.a..d....a..b...db...c.......cb..fe",
    "roomNames": [
     "Orchestra Pit",
     "Foyer",
     "Bar",
     "Green Room",
     "Dressing Room",
     "Prop Store",
     "Stage"
    ],
    "people": [
     "Arthur the author",
     "Basil the bass player",
     "Cora the critic",
     "Della the director",
     "Elsa the extra",
     "Frank the flautist",
     "Gwen the guitarist",
     "Viola the ventriloquist",
     "Hugo the harpist"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "next",
      "sofa"
     ],
     [
      1,
      "next",
      "sofa"
     ],
     [
      2,
      "same",
      0
     ],
     [
      2,
      "next",
      "light"
     ],
     [
      3,
      "same",
      5
     ],
     [
      4,
      "on",
      "seat"
     ],
     [
      5,
      "next",
      "mirror"
     ],
     [
      6,
      "next",
      "mirror"
     ],
     [
      7,
      "row",
      7
     ],
     [
      8,
      "next",
      "piano"
     ]
    ],
    "solution": [
     0,
     15,
     19,
     34,
     40,
     53,
     59,
     66,
     74
    ],
    "doors": [
     [
      4,
      5
     ],
     [
      19,
      28
     ],
     [
      20,
      29
     ],
     [
      23,
      32
     ],
     [
      25,
      34
     ],
     [
      37,
      38
     ],
     [
      46,
      47
     ],
     [
      54,
      63
     ],
     [
      41,
      42
     ],
     [
      39,
      48
     ],
     [
      50,
      51
     ],
     [
      68,
      69
     ],
     [
      56,
      65
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
      7,
      "t"
     ],
     [
      73,
      "b"
     ],
     [
      77,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "edge",
      null,
      3
     ]
    ],
    "group": 0
   },
   {
    "size": 10,
    "rooms": "0000000111000000011122222001112222200111334445556633444555663344455566334445556677777666667777766666",
    "objects": "........b..a.....a.b.c.ba.f..fc.....d.d.a...aa.a.....b.dc....d.........ceae.a.b...b...cd.....a.aaf.c",
    "roomNames": [
     "Green Room",
     "Orchestra Pit",
     "Costume Room",
     "Box Office",
     "Dressing Room",
     "Foyer",
     "Lighting Booth",
     "Wings"
    ],
    "people": [
     "Ada the author",
     "Bella the bass player",
     "Clara the critic",
     "Dexter the director",
     "Edgar the extra",
     "Frank the flautist",
     "Gideon the guitarist",
     "Vince the violinist",
     "Hazel the harpist",
     "Ivo the impresario"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "col",
      4
     ],
     [
      1,
      "on",
      "sofa"
     ],
     [
      2,
      "next",
      "mirror"
     ],
     [
      3,
      "same",
      2
     ],
     [
      3,
      "next",
      "mirror"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "next",
      "piano"
     ],
     [
      5,
      "next",
      "mirror"
     ],
     [
      6,
      "next",
      "rack"
     ],
     [
      7,
      "door"
     ],
     [
      8,
      "next",
      "piano"
     ],
     [
      8,
      "door"
     ],
     [
      9,
      "notRoom",
      0
     ]
    ],
    "solution": [
     4,
     19,
     28,
     37,
     46,
     51,
     62,
     73,
     85,
     90
    ],
    "doors": [
     [
      16,
      17
     ],
     [
      11,
      21
     ],
     [
      35,
      45
     ],
     [
      37,
      47
     ],
     [
      38,
      48
     ],
     [
      31,
      41
     ],
     [
      33,
      43
     ],
     [
      71,
      72
     ],
     [
      71,
      81
     ],
     [
      64,
      65
     ],
     [
      73,
      83
     ],
     [
      57,
      58
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
      0,
      "l"
     ],
     [
      5,
      "t"
     ],
     [
      9,
      "t"
     ],
     [
      30,
      "l"
     ],
     [
      40,
      "l"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "doorCount",
      null,
      3
     ],
     [
      "roomCount",
      3,
      1
     ]
    ],
    "group": 0
   },
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
    ],
    "tries": 1,
    "group": 1
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
    ],
    "tries": 2,
    "group": 1
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
    ],
    "tries": 1,
    "group": 1
   },
   {
    "size": 7,
    "rooms": "0000111000011122221112222111333344433334443333444",
    "objects": "b..be............deeb......c..a..f......edb...a..",
    "roomNames": [
     "Lighting Booth",
     "Dressing Room",
     "Costume Room",
     "Balcony",
     "Prop Store"
    ],
    "people": [
     "Ada the author",
     "Bella the baritone",
     "Cora the choreographer",
     "Dexter the director",
     "Edith the extra",
     "Freya the fan",
     "Vivian the violinist"
    ],
    "victim": 6,
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
      "next",
      "mirror"
     ],
     [
      2,
      "row",
      2
     ],
     [
      3,
      "same",
      2
     ],
     [
      4,
      "window"
     ],
     [
      5,
      "door"
     ]
    ],
    "solution": [
     6,
     10,
     16,
     22,
     28,
     39,
     47
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      7,
      14
     ],
     [
      24,
      25
     ],
     [
      26,
      33
     ],
     [
      24,
      31
     ],
     [
      38,
      39
     ]
    ],
    "windows": [
     [
      20,
      "r"
     ],
     [
      28,
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
    "tries": 1,
    "facts": [
     [
      "furniture",
      null,
      0
     ],
     [
      "nextCount",
      "mirror",
      1
     ]
    ],
    "group": 1
   },
   {
    "size": 8,
    "rooms": "0001111100011111222223332222233322222333444445554444455544444555",
    "objects": ".....e....dda....fc.a.....a.fc.f.........ca....a..b.fcaa........",
    "roomNames": [
     "Lighting Booth",
     "Bar",
     "Orchestra Pit",
     "Costume Room",
     "Wings",
     "Dressing Room"
    ],
    "people": [
     "Astrid the author",
     "Bea the bass player",
     "Cedric the critic",
     "Daisy the dancer",
     "Edgar the electrician",
     "Viola the ventriloquist",
     "Freya the flautist",
     "Grace the ghost writer"
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
      "rack"
     ],
     [
      1,
      "col",
      5
     ],
     [
      2,
      "next",
      "light"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "same",
      4
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "alone"
     ],
     [
      7,
      "window"
     ]
    ],
    "solution": [
     4,
     13,
     16,
     26,
     35,
     46,
     49,
     63
    ],
    "doors": [
     [
      2,
      3
     ],
     [
      8,
      16
     ],
     [
      12,
      20
     ],
     [
      14,
      22
     ],
     [
      20,
      21
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
      60,
      61
     ]
    ],
    "windows": [
     [
      5,
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
      58,
      "b"
     ],
     [
      63,
      "r"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "nextCount",
      "sofa",
      1
     ]
    ],
    "group": 1
   },
   {
    "size": 9,
    "rooms": "001122333001122333001122333001122333001144444001144444555566666555566666555566666",
    "objects": ".........f.bd.ee.cd.....e.d..f.df.............ab.....f...........aecc..e.........",
    "roomNames": [
     "Box Office",
     "Lighting Booth",
     "Stage",
     "Prop Store",
     "Green Room",
     "Dressing Room",
     "Wings"
    ],
    "people": [
     "Arthur the agent",
     "Bea the baritone",
     "Clara the choreographer",
     "Dmitri the dancer",
     "Edith the electrician",
     "Fiona the fan",
     "Gwen the guitarist",
     "Viola the ventriloquist",
     "Hazel the hairdresser"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "next",
      "rack"
     ],
     [
      0,
      "window"
     ],
     [
      1,
      "next",
      "light"
     ],
     [
      2,
      "next",
      "sofa"
     ],
     [
      2,
      "next",
      "light"
     ],
     [
      3,
      "notRoom",
      2
     ],
     [
      3,
      "next",
      "rack"
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "notRoom",
      4
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "room",
      5
     ],
     [
      6,
      "door"
     ],
     [
      7,
      "row",
      7
     ],
     [
      8,
      "next",
      "rack"
     ]
    ],
    "solution": [
     5,
     10,
     20,
     33,
     39,
     49,
     54,
     70,
     80
    ],
    "doors": [
     [
      28,
      29
     ],
     [
      45,
      54
     ],
     [
      30,
      31
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
      23,
      24
     ],
     [
      32,
      41
     ],
     [
      34,
      43
     ],
     [
      49,
      58
     ],
     [
      66,
      67
     ]
    ],
    "windows": [
     [
      5,
      "t"
     ],
     [
      6,
      "t"
     ],
     [
      71,
      "r"
     ],
     [
      74,
      "b"
     ],
     [
      77,
      "b"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "roomCount",
      0,
      1
     ],
     [
      "nextCount",
      "mirror",
      0
     ],
     [
      "nextCount",
      "seat",
      0
     ]
    ],
    "group": 1
   },
   {
    "size": 10,
    "rooms": "0000011111000001111100000222220000022222333333444433333344445556664444555666444455566677775556667777",
    "objects": "..f.f.e..e.ba....b.a.......f..b.b..........abd....f.....ab.b..ca..d..e...f...bb.a...abd.c..........c",
    "roomNames": [
     "Box Office",
     "Orchestra Pit",
     "Dressing Room",
     "Stage",
     "Foyer",
     "Balcony",
     "Prop Store",
     "Costume Room"
    ],
    "people": [
     "Victor the ventriloquist",
     "Astrid the author",
     "Bruno the bass player",
     "Cedric the choreographer",
     "Della the director",
     "Edith the extra",
     "Fiona the flautist",
     "Grace the guitarist",
     "Hana the hairdresser",
     "Ines the illusionist"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "next",
      "rack"
     ],
     [
      1,
      "next",
      "sofa"
     ],
     [
      2,
      "col",
      1
     ],
     [
      3,
      "col",
      8
     ],
     [
      4,
      "next",
      "sofa"
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
      5,
      "door"
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
      "next",
      "piano"
     ],
     [
      8,
      "col",
      9
     ],
     [
      9,
      "same",
      7
     ],
     [
      9,
      "next",
      "seat"
     ]
    ],
    "solution": [
     5,
     16,
     21,
     38,
     47,
     53,
     64,
     72,
     89,
     90
    ],
    "doors": [
     [
      14,
      15
     ],
     [
      34,
      35
     ],
     [
      33,
      43
     ],
     [
      19,
      29
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
      55,
      56
     ],
     [
      51,
      61
     ],
     [
      53,
      63
     ],
     [
      65,
      66
     ],
     [
      77,
      87
     ],
     [
      82,
      83
     ],
     [
      85,
      86
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
      10,
      "l"
     ],
     [
      29,
      "r"
     ],
     [
      49,
      "r"
     ],
     [
      59,
      "r"
     ]
    ],
    "tries": 1,
    "facts": [
     [
      "nextCount",
      "light",
      0
     ],
     [
      "onCount",
      "sofa",
      0
     ]
    ],
    "group": 1
   },
   {
    "size": 11,
    "rooms": "0000011222200000112222000001122223333311222233333111111333331111114444455666644444556666444445566667777755666677777556666",
    "objects": "......a.ce.b...bacec..f...ad.....c......a..c....c.f..a...b....bb.............e.aaafbfd.....b..aed.b.ca.........bc.f...cb.",
    "roomNames": [
     "Bar",
     "Stage",
     "Foyer",
     "Lighting Booth",
     "Orchestra Pit",
     "Box Office",
     "Costume Room",
     "Dressing Room"
    ],
    "people": [
     "Alma the author",
     "Bea the baritone",
     "Carl the choreographer",
     "Della the director",
     "Edgar the electrician",
     "Freya the fan",
     "Grace the guitarist",
     "Henrik the harpist",
     "Ivo the illusionist",
     "Jonas the juggler",
     "Vince the ventriloquist"
    ],
    "victim": 10,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "next",
      "piano"
     ],
     [
      1,
      "row",
      1
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "next",
      "mirror"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "same",
      2
     ],
     [
      4,
      "next",
      "seat"
     ],
     [
      5,
      "next",
      "sofa"
     ],
     [
      6,
      "door"
     ],
     [
      7,
      "same",
      6
     ],
     [
      7,
      "next",
      "sofa"
     ],
     [
      8,
      "next",
      "rack"
     ],
     [
      9,
      "next",
      "mirror"
     ]
    ],
    "solution": [
     2,
     20,
     28,
     38,
     54,
     56,
     70,
     80,
     88,
     107,
     117
    ],
    "doors": [
     [
      4,
      5
     ],
     [
      23,
      34
     ],
     [
      39,
      40
     ],
     [
      37,
      38
     ],
     [
      60,
      71
     ],
     [
      64,
      75
     ],
     [
      55,
      66
     ],
     [
      70,
      71
     ],
     [
      92,
      103
     ],
     [
      105,
      106
     ],
     [
      103,
      104
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      4,
      "t"
     ],
     [
      21,
      "r"
     ],
     [
      32,
      "r"
     ],
     [
      99,
      "l"
     ],
     [
      110,
      "l"
     ],
     [
      114,
      "b"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "onCount",
      "seat",
      1
     ],
     [
      "doorCount",
      null,
      2
     ],
     [
      "roomCount",
      5,
      0
     ]
    ],
    "group": 1
   },
   {
    "size": 12,
    "rooms": "000001112222000001112222333331112222333331112222333331114444555666664444555666664444555666667777555666667777555888887777555888887777555888887777",
    "objects": "....eb..e..fa.....cda...db.ae.e..ded.d..d..aaf.b....abe........a....a.a....bc..ab..ba...ae.........a......b...b..a.bc.a.af.....bb....fbe..c...b.",
    "roomNames": [
     "Prop Store",
     "Balcony",
     "Orchestra Pit",
     "Costume Room",
     "Bar",
     "Stage",
     "Wings",
     "Lighting Booth",
     "Box Office"
    ],
    "people": [
     "Albert the author",
     "Bella the bass player",
     "Carl the critic",
     "Vivian the violinist",
     "Dora the director",
     "Ena the electrician",
     "Flora the fan",
     "Gideon the ghost writer",
     "Hugo the hairdresser",
     "Ines the impresario",
     "Juno the jester",
     "Kitty the kettle drummer"
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
      "next",
      "rack"
     ],
     [
      2,
      "next",
      "sofa"
     ],
     [
      2,
      "next",
      "seat"
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
      "notRoom",
      7
     ],
     [
      5,
      "next",
      "piano"
     ],
     [
      5,
      "next",
      "seat"
     ],
     [
      6,
      "on",
      "seat"
     ],
     [
      6,
      "same",
      8
     ],
     [
      7,
      "col",
      9
     ],
     [
      8,
      "row",
      8
     ],
     [
      9,
      "next",
      "light"
     ],
     [
      9,
      "next",
      "sofa"
     ],
     [
      10,
      "next",
      "rack"
     ],
     [
      10,
      "alone"
     ],
     [
      11,
      "same",
      9
     ],
     [
      11,
      "next",
      "seat"
     ]
    ],
    "solution": [
     5,
     22,
     26,
     44,
     59,
     64,
     79,
     93,
     102,
     109,
     123,
     132
    ],
    "doors": [
     [
      16,
      17
     ],
     [
      16,
      28
     ],
     [
      31,
      32
     ],
     [
      52,
      53
     ],
     [
      55,
      56
     ],
     [
      54,
      66
     ],
     [
      44,
      56
     ],
     [
      50,
      62
     ],
     [
      52,
      64
     ],
     [
      79,
      80
     ],
     [
      82,
      94
     ],
     [
      86,
      87
     ],
     [
      122,
      123
     ],
     [
      91,
      92
     ],
     [
      99,
      111
     ],
     [
      139,
      140
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
      7,
      "t"
     ],
     [
      8,
      "t"
     ],
     [
      83,
      "r"
     ],
     [
      131,
      "r"
     ],
     [
      134,
      "b"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "roomCount",
      1,
      1
     ],
     [
      "nextCount",
      "piano",
      1
     ]
    ],
    "group": 1
   },
   {
    "size": 4,
    "rooms": "0000000011112222",
    "objects": ".b.e....c....a.c",
    "roomNames": [
     "Orchestra Pit",
     "Dressing Room",
     "Lighting Booth"
    ],
    "people": [
     "Ada the agent",
     "Victor the ventriloquist",
     "Bea the bass player",
     "Carl the choreographer"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "next",
      "sofa"
     ],
     [
      2,
      "col",
      3
     ],
     [
      3,
      "door"
     ]
    ],
    "solution": [
     0,
     6,
     11,
     13
    ],
    "doors": [
     [
      4,
      8
     ],
     [
      9,
      13
     ]
    ],
    "windows": [
     [
      4,
      "l"
     ],
     [
      12,
      "l"
     ]
    ],
    "tries": 3,
    "facts": [
     [
      "doorCount",
      null,
      1
     ]
    ],
    "group": 2
   },
   {
    "size": 5,
    "rooms": "0001100011000112233322333",
    "objects": "e..a..a.....b....a.d..e..",
    "roomNames": [
     "Box Office",
     "Bar",
     "Costume Room",
     "Green Room"
    ],
    "people": [
     "Arthur the author",
     "Basil the bass player",
     "Victor the ventriloquist",
     "Clara the choreographer",
     "Dora the director"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "next",
      "rack"
     ],
     [
      1,
      "notRoom",
      2
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "next",
      "rack"
     ],
     [
      4,
      "alone"
     ]
    ],
    "solution": [
     1,
     9,
     12,
     15,
     23
    ],
    "doors": [
     [
      2,
      3
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
      21,
      22
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
      2,
      "t"
     ]
    ],
    "tries": 3,
    "facts": [
     [
      "doorCount",
      null,
      1
     ],
     [
      "onCount",
      "sofa",
      1
     ]
    ],
    "group": 2
   },
   {
    "size": 6,
    "rooms": "000111000111223333223333224444224444",
    "objects": ".....f.cbb...a..fb...f...f..f.c...aa",
    "roomNames": [
     "Foyer",
     "Stage",
     "Lighting Booth",
     "Wings",
     "Costume Room"
    ],
    "people": [
     "Ada the author",
     "Bea the baritone",
     "Cora the critic",
     "Viola the violinist",
     "Della the director",
     "Elsa the extra"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "notRoom",
      0
     ],
     [
      1,
      "on",
      "sofa"
     ],
     [
      2,
      "door"
     ],
     [
      4,
      "next",
      "seat"
     ],
     [
      5,
      "on",
      "seat"
     ]
    ],
    "solution": [
     2,
     9,
     13,
     18,
     29,
     34
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
      31,
      32
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
      30,
      "b"
     ],
     [
      31,
      "b"
     ],
     [
      32,
      "b"
     ]
    ],
    "tries": 4,
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
     ],
     [
      "furniture",
      null,
      3
     ]
    ],
    "group": 2
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
    ],
    "tries": 4,
    "group": 2
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
    ],
    "tries": 5,
    "group": 2
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
    ],
    "tries": 3,
    "group": 2
   },
   {
    "size": 10,
    "rooms": "0000011111000001111100000111112222233333222223333344445556664444555666777755566677775556667777555666",
    "objects": "..a...c..............e.ab.......b...da.dac..a..c.fa.a...be.d...a.f......a..ff...a..c...a...b....b..e",
    "roomNames": [
     "Foyer",
     "Costume Room",
     "Box Office",
     "Green Room",
     "Balcony",
     "Stage",
     "Prop Store",
     "Lighting Booth"
    ],
    "people": [
     "Albert the agent",
     "Bruno the bass player",
     "Cora the choreographer",
     "Dexter the director",
     "Elsa the electrician",
     "Felix the fan",
     "Gideon the ghost writer",
     "Viola the ventriloquist",
     "Hana the harpist",
     "Ines the impresario"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      1,
      "col",
      8
     ],
     [
      2,
      "next",
      "rack"
     ],
     [
      2,
      "next",
      "seat"
     ],
     [
      3,
      "next",
      "seat"
     ],
     [
      4,
      "same",
      3
     ],
     [
      4,
      "col",
      3
     ],
     [
      5,
      "next",
      "sofa"
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
      "door"
     ],
     [
      8,
      "col",
      6
     ],
     [
      9,
      "on",
      "sofa"
     ]
    ],
    "solution": [
     9,
     18,
     22,
     34,
     43,
     55,
     67,
     70,
     86,
     91
    ],
    "doors": [
     [
      4,
      5
     ],
     [
      20,
      30
     ],
     [
      25,
      35
     ],
     [
      44,
      45
     ],
     [
      42,
      52
     ],
     [
      44,
      54
     ],
     [
      45,
      55
     ],
     [
      49,
      59
     ],
     [
      63,
      64
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
      6,
      "t"
     ],
     [
      10,
      "l"
     ],
     [
      40,
      "l"
     ],
     [
      49,
      "r"
     ],
     [
      59,
      "r"
     ]
    ],
    "tries": 4,
    "facts": [
     [
      "roomCount",
      6,
      1
     ],
     [
      "nextCount",
      "piano",
      0
     ]
    ],
    "group": 2
   },
   {
    "size": 11,
    "rooms": "0000000000000000000000111122233331111222333311112223333111122233334442222555544422225555444666655554446666777744466667777",
    "objects": "......ec.fa.......f..a.a.....f.cb...a.c...cf...........ac.d.......b......e..b....b....bd.d..b..d...ba.bf...ef.......e.d.c",
    "roomNames": [
     "Bar",
     "Dressing Room",
     "Green Room",
     "Prop Store",
     "Lighting Booth",
     "Balcony",
     "Orchestra Pit",
     "Box Office"
    ],
    "people": [
     "Albert the agent",
     "Bea the bass player",
     "Celia the critic",
     "Dmitri the dancer",
     "Vera the ventriloquist",
     "Edgar the extra",
     "Freya the flautist",
     "Grace the ghost writer",
     "Hilda the harpist",
     "Isla the illusionist",
     "Jutta the juggler"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "next",
      "rack"
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
      2,
      "col",
      6
     ],
     [
      3,
      "next",
      "light"
     ],
     [
      4,
      "next",
      "piano"
     ],
     [
      5,
      "on",
      "seat"
     ],
     [
      5,
      "alone"
     ],
     [
      6,
      "next",
      "rack"
     ],
     [
      7,
      "col",
      2
     ],
     [
      8,
      "on",
      "sofa"
     ],
     [
      8,
      "same",
      10
     ],
     [
      9,
      "next",
      "piano"
     ],
     [
      9,
      "next",
      "light"
     ],
     [
      10,
      "next",
      "sofa"
     ]
    ],
    "solution": [
     5,
     12,
     28,
     40,
     53,
     55,
     74,
     79,
     92,
     109,
     113
    ],
    "doors": [
     [
      11,
      22
     ],
     [
      16,
      27
     ],
     [
      20,
      31
     ],
     [
      36,
      37
     ],
     [
      55,
      66
     ],
     [
      28,
      29
     ],
     [
      68,
      69
     ],
     [
      83,
      84
     ],
     [
      83,
      94
     ],
     [
      62,
      73
     ],
     [
      101,
      102
     ],
     [
      94,
      95
     ],
     [
      96,
      107
     ],
     [
      116,
      117
     ]
    ],
    "windows": [
     [
      0,
      "t"
     ],
     [
      21,
      "r"
     ],
     [
      33,
      "l"
     ],
     [
      43,
      "r"
     ],
     [
      76,
      "r"
     ],
     [
      98,
      "r"
     ],
     [
      116,
      "b"
     ]
    ],
    "tries": 4,
    "facts": [
     [
      "nextCount",
      "sofa",
      1
     ]
    ],
    "group": 2
   },
   {
    "size": 12,
    "rooms": "000011122233000011122233000011122233000011122233000011122233445566777777445566777777445566777777445566777777445566888888445566888888445566888888",
    "objects": "fd.b.b....c.b..f..a.a.......fb.a..f.......d.fa....a.....b..f...cf....a....a.e.f.c......a....d.........f..c..a.bf...........a........e..b..a.e.b.",
    "roomNames": [
     "Foyer",
     "Lighting Booth",
     "Orchestra Pit",
     "Stage",
     "Prop Store",
     "Dressing Room",
     "Green Room",
     "Balcony",
     "Wings"
    ],
    "people": [
     "Astrid the author",
     "Birgit the baritone",
     "Cora the choreographer",
     "Della the director",
     "Viola the violinist",
     "Edgar the electrician",
     "Freya the flautist",
     "Gideon the ghost writer",
     "Hazel the harpist",
     "Ivy the illusionist",
     "Juno the juggler",
     "Konrad the kettle drummer"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "col",
      7
     ],
     [
      0,
      "alone"
     ],
     [
      1,
      "next",
      "piano"
     ],
     [
      1,
      "next",
      "light"
     ],
     [
      1,
      "same",
      3
     ],
     [
      2,
      "next",
      "light"
     ],
     [
      2,
      "row",
      2
     ],
     [
      3,
      "next",
      "light"
     ],
     [
      4,
      "next",
      "seat"
     ],
     [
      5,
      "next",
      "light"
     ],
     [
      5,
      "door"
     ],
     [
      5,
      "alone"
     ],
     [
      6,
      "window"
     ],
     [
      7,
      "next",
      "seat"
     ],
     [
      8,
      "same",
      11
     ],
     [
      9,
      "notRoom",
      0
     ],
     [
      10,
      "next",
      "rack"
     ],
     [
      11,
      "door"
     ],
     [
      11,
      "row",
      11
     ]
    ],
    "solution": [
     7,
     22,
     27,
     47,
     49,
     66,
     72,
     86,
     100,
     117,
     128,
     137
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      48,
      60
     ],
     [
      51,
      63
     ],
     [
      18,
      19
     ],
     [
      52,
      64
     ],
     [
      54,
      66
     ],
     [
      45,
      46
     ],
     [
      55,
      67
     ],
     [
      58,
      70
     ],
     [
      133,
      134
     ],
     [
      123,
      124
     ],
     [
      101,
      102
     ],
     [
      137,
      138
     ],
     [
      106,
      118
     ]
    ],
    "windows": [
     [
      10,
      "t"
     ],
     [
      24,
      "l"
     ],
     [
      72,
      "l"
     ],
     [
      131,
      "r"
     ],
     [
      132,
      "l"
     ],
     [
      132,
      "b"
     ],
     [
      134,
      "b"
     ]
    ],
    "tries": 3,
    "facts": [
     [
      "roomCount",
      0,
      2
     ]
    ],
    "group": 2
   },
   {
    "size": 4,
    "rooms": "0000000011221122",
    "objects": "..a..e.......f..",
    "roomNames": [
     "Lighting Booth",
     "Costume Room",
     "Box Office"
    ],
    "people": [
     "Victor the violinist",
     "Ada the agent",
     "Bea the baritone",
     "Carl the critic"
    ],
    "victim": 0,
    "clues": [
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
      "alone"
     ]
    ],
    "solution": [
     0,
     6,
     9,
     15
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
      11,
      "r"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "touch",
      null,
      0
     ],
     [
      "doorCount",
      null,
      1
     ]
    ],
    "group": 3
   },
   {
    "size": 5,
    "rooms": "0011100111001112223322233",
    "objects": "d.....d.a....c.b..e..a..b",
    "roomNames": [
     "Lighting Booth",
     "Bar",
     "Foyer",
     "Prop Store"
    ],
    "people": [
     "Astrid the author",
     "Birgit the bass player",
     "Carl the critic",
     "Victor the violinist",
     "Daisy the director"
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
      "seat"
     ],
     [
      2,
      "next",
      "piano"
     ],
     [
      4,
      "next",
      "sofa"
     ]
    ],
    "solution": [
     1,
     8,
     14,
     17,
     20
    ],
    "doors": [
     [
      1,
      2
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
      0,
      "l"
     ],
     [
      1,
      "t"
     ],
     [
      24,
      "b"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "edge",
      null,
      3
     ]
    ],
    "group": 3
   },
   {
    "size": 6,
    "rooms": "000011000011222211222211333444333444",
    "objects": "....a...d.fad.ecf.ee....ceb.a....df.",
    "roomNames": [
     "Wings",
     "Costume Room",
     "Bar",
     "Lighting Booth",
     "Orchestra Pit"
    ],
    "people": [
     "Arthur the agent",
     "Bruno the bass player",
     "Victor the violinist",
     "Cedric the choreographer",
     "Dora the director",
     "Ena the extra"
    ],
    "victim": 2,
    "clues": [
     [
      0,
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
      "mirror"
     ],
     [
      3,
      "next",
      "rack"
     ],
     [
      4,
      "next",
      "light"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "alone"
     ]
    ],
    "solution": [
     5,
     9,
     13,
     20,
     28,
     30
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
      15,
      16
     ],
     [
      22,
      28
     ],
     [
      20,
      26
     ],
     [
      21,
      27
     ],
     [
      32,
      33
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
      17,
      "r"
     ],
     [
      32,
      "b"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "alone",
      null,
      4
     ],
     [
      "nextCount",
      "mirror",
      2
     ]
    ],
    "group": 3
   },
   {
    "size": 7,
    "rooms": "0000111000011100001112223333222333322244442224444",
    "objects": "b.b.....ca........bc......b..e.b.fb.e...ca...d...",
    "roomNames": [
     "Balcony",
     "Foyer",
     "Orchestra Pit",
     "Stage",
     "Prop Store"
    ],
    "people": [
     "Ada the agent",
     "Bruno the bass player",
     "Viola the violinist",
     "Cora the choreographer",
     "Della the director",
     "Elsa the electrician",
     "Flora the fan"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "next",
      "sofa"
     ],
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
      "window"
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
      "next",
      "rack"
     ],
     [
      6,
      "window"
     ]
    ],
    "solution": [
     3,
     11,
     20,
     26,
     28,
     37,
     43
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
      20,
      27
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
      33,
      40
     ]
    ],
    "windows": [
     [
      4,
      "t"
     ],
     [
      20,
      "r"
     ],
     [
      43,
      "b"
     ],
     [
      47,
      "b"
     ]
    ],
    "tries": 8,
    "facts": [
     [
      "doorCount",
      null,
      1
     ]
    ],
    "group": 3
   },
   {
    "size": 8,
    "rooms": "0000111100001111222233332222333322223333444445554444455544444555",
    "objects": ".b.ac.b.........ab...a..bec.....b.ce......c.f.b.......efab.a.c.b",
    "roomNames": [
     "Orchestra Pit",
     "Dressing Room",
     "Costume Room",
     "Balcony",
     "Stage",
     "Green Room"
    ],
    "people": [
     "Arthur the agent",
     "Birgit the bass player",
     "Cora the critic",
     "Dexter the director",
     "Edgar the electrician",
     "Fiona the flautist",
     "Gideon the guitarist",
     "Viola the violinist"
    ],
    "victim": 7,
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
      "next",
      "seat"
     ],
     [
      2,
      "col",
      6
     ],
     [
      3,
      "next",
      "rack"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "next",
      "light"
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "next",
      "piano"
     ],
     [
      7,
      "next",
      "seat"
     ]
    ],
    "solution": [
     1,
     15,
     22,
     24,
     36,
     43,
     53,
     58
    ],
    "doors": [
     [
      11,
      12
     ],
     [
      11,
      19
     ],
     [
      13,
      21
     ],
     [
      19,
      20
     ],
     [
      35,
      43
     ],
     [
      36,
      44
     ],
     [
      38,
      46
     ],
     [
      52,
      53
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
     ],
     [
      3,
      "t"
     ],
     [
      61,
      "b"
     ],
     [
      62,
      "b"
     ]
    ],
    "tries": 8,
    "facts": [
     [
      "nextCount",
      "sofa",
      1
     ]
    ],
    "group": 3
   },
   {
    "size": 9,
    "rooms": "000011222000011222000011222003333444003333444003333444555566444555566444555566444",
    "objects": "..b...b..bbc.c.....f..a.afc......a.a...fa...f.........cac..ec.ae.b......c.a...b.b",
    "roomNames": [
     "Bar",
     "Costume Room",
     "Lighting Booth",
     "Green Room",
     "Box Office",
     "Foyer",
     "Orchestra Pit"
    ],
    "people": [
     "Astrid the author",
     "Viola the violinist",
     "Bella the bass player",
     "Clara the choreographer",
     "Daisy the dancer",
     "Edith the extra",
     "Felix the fan",
     "Gus the ghost writer",
     "Hana the harpist"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "on",
      "sofa"
     ],
     [
      1,
      "next",
      "light"
     ],
     [
      2,
      "on",
      "seat"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "on",
      "seat"
     ],
     [
      4,
      "col",
      0
     ],
     [
      5,
      "row",
      5
     ],
     [
      6,
      "next",
      "piano"
     ],
     [
      7,
      "next",
      "rack"
     ],
     [
      8,
      "same",
      6
     ]
    ],
    "solution": [
     6,
     16,
     22,
     35,
     36,
     46,
     57,
     68,
     74
    ],
    "doors": [
     [
      21,
      22
     ],
     [
      28,
      29
     ],
     [
      45,
      54
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
      25,
      34
     ],
     [
      50,
      51
     ],
     [
      47,
      56
     ],
     [
      49,
      58
     ],
     [
      68,
      69
     ],
     [
      75,
      76
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      4,
      "t"
     ],
     [
      63,
      "l"
     ],
     [
      72,
      "b"
     ],
     [
      79,
      "b"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "furniture",
      null,
      4
     ],
     [
      "roomCount",
      3,
      0
     ],
     [
      "nextCount",
      "seat",
      0
     ]
    ],
    "group": 3
   },
   {
    "size": 10,
    "rooms": "0000011111000001111100000111112222233333222223333322222333334455566777445556677744555667774455566777",
    "objects": "....b.b...........bc..........ad.d....fe...cad....b..b.....f....e.............b.d.b..f...db.b...a...",
    "roomNames": [
     "Balcony",
     "Stage",
     "Box Office",
     "Prop Store",
     "Lighting Booth",
     "Dressing Room",
     "Wings",
     "Bar"
    ],
    "people": [
     "Astrid the author",
     "Birgit the baritone",
     "Clara the critic",
     "Vera the violinist",
     "Della the director",
     "Edgar the extra",
     "Freya the flautist",
     "Greta the ghost writer",
     "Hazel the harpist",
     "Isla the impresario"
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
      "row",
      1
     ],
     [
      2,
      "next",
      "sofa"
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "next",
      "mirror"
     ],
     [
      4,
      "next",
      "seat"
     ],
     [
      4,
      "next",
      "sofa"
     ],
     [
      5,
      "notRoom",
      6
     ],
     [
      6,
      "door"
     ],
     [
      7,
      "next",
      "sofa"
     ],
     [
      8,
      "notRoom",
      1
     ],
     [
      8,
      "next",
      "sofa"
     ],
     [
      8,
      "alone"
     ],
     [
      9,
      "next",
      "mirror"
     ],
     [
      9,
      "window"
     ]
    ],
    "solution": [
     4,
     11,
     28,
     32,
     40,
     56,
     65,
     77,
     83,
     99
    ],
    "doors": [
     [
      4,
      5
     ],
     [
      20,
      30
     ],
     [
      25,
      35
     ],
     [
      34,
      35
     ],
     [
      50,
      60
     ],
     [
      53,
      63
     ],
     [
      55,
      65
     ],
     [
      57,
      67
     ],
     [
      61,
      62
     ],
     [
      64,
      65
     ],
     [
      76,
      77
     ]
    ],
    "windows": [
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
      93,
      "b"
     ],
     [
      95,
      "b"
     ],
     [
      99,
      "r"
     ]
    ],
    "tries": 9,
    "facts": [
     [
      "roomCount",
      6,
      1
     ]
    ],
    "group": 3
   },
   {
    "size": 11,
    "rooms": "0000111222200001112222000011122220000111222233344445555333444455553334444555533344446666777777766667777777666677777776666",
    "objects": "..e.ab.cf...db..e...a.af.d...e..a....ba.b.c...fb....d.a..b.b.ca...c.......ef..a.....d.a...ba..b.f..e.......bf.......fb.d.",
    "roomNames": [
     "Balcony",
     "Box Office",
     "Wings",
     "Costume Room",
     "Dressing Room",
     "Bar",
     "Foyer",
     "Orchestra Pit"
    ],
    "people": [
     "Viola the violinist",
     "Ada the agent",
     "Bruno the bass player",
     "Carl the choreographer",
     "Dmitri the director",
     "Ena the extra",
     "Fiona the fan",
     "Gwen the guitarist",
     "Hugo the harpist",
     "Igor the illusionist",
     "Jasper the jester"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "next",
      "rack"
     ],
     [
      0,
      "door"
     ],
     [
      1,
      "next",
      "rack"
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "same",
      1
     ],
     [
      2,
      "next",
      "sofa"
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
      "next",
      "sofa"
     ],
     [
      6,
      "next",
      "light"
     ],
     [
      7,
      "on",
      "seat"
     ],
     [
      8,
      "on",
      "sofa"
     ],
     [
      8,
      "next",
      "seat"
     ],
     [
      9,
      "next",
      "light"
     ],
     [
      9,
      "same",
      10
     ],
     [
      10,
      "on",
      "sofa"
     ]
    ],
    "solution": [
     3,
     17,
     26,
     33,
     49,
     56,
     76,
     86,
     90,
     107,
     117
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      35,
      46
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
      38,
      49
     ],
     [
      41,
      52
     ],
     [
      57,
      58
     ],
     [
      78,
      89
     ],
     [
      50,
      51
     ],
     [
      83,
      84
     ],
     [
      83,
      94
     ],
     [
      74,
      85
     ],
     [
      94,
      95
     ]
    ],
    "windows": [
     [
      8,
      "t"
     ],
     [
      87,
      "r"
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
      "b"
     ],
     [
      112,
      "b"
     ],
     [
      116,
      "b"
     ]
    ],
    "tries": 7,
    "facts": [
     [
      "touch",
      null,
      1
     ]
    ],
    "group": 3
   },
   {
    "size": 12,
    "rooms": "000001111111000001111111000001111111222223334444222223334444222223334444222223334444555333366666555333366666555777766666555777788888555777788888",
    "objects": "...af.f...c....cb..ac....a....aa......b..d..b...c..d...d..a..b.....c.ff.....eac...e.........c...f.f.....d....fd....a.ba...ebc..........ab......d",
    "roomNames": [
     "Box Office",
     "Green Room",
     "Orchestra Pit",
     "Dressing Room",
     "Balcony",
     "Costume Room",
     "Wings",
     "Foyer",
     "Lighting Booth"
    ],
    "people": [
     "Alma the agent",
     "Bella the baritone",
     "Cora the critic",
     "Dexter the director",
     "Elias the extra",
     "Fiona the fan",
     "Gideon the ghost writer",
     "Vera the violinist",
     "Hugo the hairdresser",
     "Ivo the impresario",
     "Jonas the jester",
     "Kitty the kettle drummer"
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
      "piano"
     ],
     [
      2,
      "col",
      10
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "next",
      "sofa"
     ],
     [
      3,
      "col",
      9
     ],
     [
      3,
      "same",
      4
     ],
     [
      4,
      "next",
      "sofa"
     ],
     [
      5,
      "next",
      "piano"
     ],
     [
      5,
      "alone"
     ],
     [
      6,
      "door"
     ],
     [
      8,
      "next",
      "mirror"
     ],
     [
      9,
      "next",
      "sofa"
     ],
     [
      9,
      "door"
     ],
     [
      10,
      "next",
      "piano"
     ],
     [
      11,
      "next",
      "seat"
     ]
    ],
    "solution": [
     1,
     14,
     34,
     45,
     56,
     66,
     72,
     95,
     103,
     111,
     125,
     136
    ],
    "doors": [
     [
      16,
      17
     ],
     [
      28,
      40
     ],
     [
      30,
      42
     ],
     [
      32,
      44
     ],
     [
      64,
      65
     ],
     [
      72,
      84
     ],
     [
      79,
      80
     ],
     [
      86,
      87
     ],
     [
      90,
      91
     ],
     [
      102,
      114
     ],
     [
      80,
      92
     ],
     [
      110,
      111
     ],
     [
      114,
      115
     ],
     [
      116,
      128
     ],
     [
      126,
      127
     ]
    ],
    "windows": [
     [
      0,
      "t"
     ],
     [
      10,
      "t"
     ],
     [
      35,
      "r"
     ],
     [
      84,
      "l"
     ],
     [
      120,
      "l"
     ],
     [
      141,
      "b"
     ],
     [
      143,
      "b"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "doorCount",
      null,
      2
     ],
     [
      "onCount",
      "seat",
      0
     ],
     [
      "roomCount",
      8,
      0
     ]
    ],
    "group": 3
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
    ],
    "tries": 0,
    "group": 0
   },
   {
    "size": 5,
    "rooms": "0001100011000112222233333",
    "objects": "b........f..cf...e...a...",
    "roomNames": [
     "Games Room",
     "Fireside Lounge",
     "Lobby",
     "Dining Hall"
    ],
    "people": [
     "Vivian the vlogger",
     "Alma the athlete",
     "Basil the baker",
     "Cedric the cook",
     "Dexter the driver"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "next",
      "wood"
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
      "alone"
     ],
     [
      4,
      "next",
      "chair"
     ]
    ],
    "solution": [
     1,
     8,
     10,
     19,
     22
    ],
    "doors": [
     [
      7,
      8
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
      15,
      20
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      4,
      "t"
     ],
     [
      21,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "nextCount",
      "wood",
      1
     ]
    ],
    "group": 0
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
    ],
    "tries": 0,
    "group": 0
   },
   {
    "size": 7,
    "rooms": "0001111000111100022220002222333444433344443334444",
    "objects": "dd.........b..c.....fbb.f.d.....dac.f..cf.......c",
    "roomNames": [
     "Lobby",
     "Bar",
     "Sauna",
     "Kitchen",
     "Suite"
    ],
    "people": [
     "Albert the avalanche guard",
     "Bella the baker",
     "Cora the cook",
     "Dexter the doctor",
     "Edgar the engineer",
     "Viola the vet",
     "Fiona the fisher"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "door"
     ],
     [
      1,
      "next",
      "skis"
     ],
     [
      2,
      "same",
      1
     ],
     [
      2,
      "next",
      "sofa"
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
      6,
      "alone"
     ]
    ],
    "solution": [
     3,
     7,
     15,
     25,
     33,
     41,
     44
    ],
    "doors": [
     [
      2,
      3
     ],
     [
      16,
      17
     ],
     [
      23,
      30
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
      0,
      "t"
     ],
     [
      6,
      "r"
     ],
     [
      6,
      "t"
     ],
     [
      20,
      "r"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "roomCount",
      0,
      2
     ]
    ],
    "group": 0
   },
   {
    "size": 8,
    "rooms": "0000011100000111222221112222233322222333444555334445553344455533",
    "objects": ".b.c...a.b......d...fd.b....ba.b.f...a..bf..f....e...beb...b...c",
    "roomNames": [
     "Games Room",
     "Kitchen",
     "Lobby",
     "Fireside Lounge",
     "Boot Room",
     "Terrace"
    ],
    "people": [
     "Ada the athlete",
     "Birgit the baker",
     "Celia the cook",
     "Dora the driver",
     "Ena the engineer",
     "Vince the vlogger",
     "Fiona the fisher",
     "Greta the glacier expert"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "next",
      "chair"
     ],
     [
      1,
      "next",
      "skis"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "on",
      "chair"
     ],
     [
      4,
      "same",
      3
     ],
     [
      4,
      "next",
      "sofa"
     ],
     [
      5,
      "on",
      "sofa"
     ],
     [
      6,
      "next",
      "wood"
     ],
     [
      7,
      "next",
      "tree"
     ]
    ],
    "solution": [
     6,
     11,
     18,
     29,
     39,
     40,
     52,
     57
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
      20,
      21
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
      34,
      42
     ],
     [
      36,
      44
     ],
     [
      45,
      46
     ],
     [
      50,
      51
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
      8,
      "l"
     ],
     [
      58,
      "b"
     ],
     [
      63,
      "r"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "roomCount",
      4,
      2
     ],
     [
      "nextCount",
      "tree",
      1
     ]
    ],
    "group": 0
   },
   {
    "size": 9,
    "rooms": "001112222001112222001112222000033444000033444555533444555533444555666666555666666",
    "objects": ".......bafe.a.df.e.b..............a........b.c....c.fbe.........f.c.....c.a.e.fa.",
    "roomNames": [
     "Sauna",
     "Boot Room",
     "Fireside Lounge",
     "Kitchen",
     "Suite",
     "Spa",
     "Bar"
    ],
    "people": [
     "Albert the avalanche guard",
     "Bea the bartender",
     "Clara the cook",
     "Victor the vlogger",
     "Della the doctor",
     "Ena the engineer",
     "Felix the forester",
     "Gwen the guide",
     "Hana the hotelier"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "window"
     ],
     [
      1,
      "next",
      "wood"
     ],
     [
      2,
      "on",
      "sofa"
     ],
     [
      3,
      "row",
      3
     ],
     [
      4,
      "next",
      "skis"
     ],
     [
      5,
      "next",
      "wood"
     ],
     [
      6,
      "same",
      5
     ],
     [
      7,
      "same",
      8
     ],
     [
      8,
      "on",
      "chair"
     ]
    ],
    "solution": [
     3,
     16,
     19,
     31,
     41,
     53,
     60,
     63,
     74
    ],
    "doors": [
     [
      20,
      29
     ],
     [
      39,
      40
     ],
     [
      39,
      48
     ],
     [
      22,
      23
     ],
     [
      22,
      31
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
      41,
      42
     ],
     [
      57,
      58
     ],
     [
      59,
      68
     ],
     [
      62,
      71
     ],
     [
      57,
      66
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      9,
      "l"
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
      72,
      "l"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "nextCount",
      "wood",
      3
     ],
     [
      "nextCount",
      "sofa",
      1
     ]
    ],
    "group": 0
   },
   {
    "size": 10,
    "rooms": "0000001111000000111122220011112222001111223334455522333445552233344555223334466677777446667777744666",
    "objects": "....b...afc..a..a.....a.a.....ef..c...ed..f.b.......f..b....e..a.f.eead...a.........dd..d......b....",
    "roomNames": [
     "Kitchen",
     "Terrace",
     "Ski Room",
     "Suite",
     "Lobby",
     "Bar",
     "Fireside Lounge",
     "Boot Room"
    ],
    "people": [
     "Astrid the athlete",
     "Bea the bartender",
     "Carl the climber",
     "Della the driver",
     "Victor the vlogger",
     "Ena the explorer",
     "Fiona the fisher",
     "Greta the glacier expert",
     "Henrik the hiker",
     "Isla the ice climber"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "next",
      "sofa"
     ],
     [
      0,
      "same",
      1
     ],
     [
      1,
      "next",
      "skis"
     ],
     [
      2,
      "next",
      "chair"
     ],
     [
      3,
      "next",
      "wood"
     ],
     [
      4,
      "next",
      "tree"
     ],
     [
      5,
      "next",
      "sofa"
     ],
     [
      6,
      "on",
      "chair"
     ],
     [
      7,
      "next",
      "wood"
     ],
     [
      7,
      "next",
      "fire"
     ],
     [
      7,
      "alone"
     ],
     [
      8,
      "door"
     ],
     [
      9,
      "next",
      "fire"
     ]
    ],
    "solution": [
     3,
     11,
     26,
     32,
     40,
     54,
     69,
     75,
     87,
     98
    ],
    "doors": [
     [
      5,
      6
     ],
     [
      13,
      23
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
      37,
      47
     ],
     [
      33,
      43
     ],
     [
      70,
      80
     ],
     [
      54,
      55
     ],
     [
      74,
      84
     ],
     [
      46,
      47
     ],
     [
      86,
      87
     ],
     [
      84,
      85
     ],
     [
      67,
      77
     ]
    ],
    "windows": [
     [
      20,
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
      80,
      "l"
     ],
     [
      91,
      "b"
     ],
     [
      99,
      "b"
     ]
    ],
    "tries": 0,
    "group": 0
   },
   {
    "size": 4,
    "rooms": "0011001122112211",
    "objects": "...........f..e.",
    "roomNames": [
     "Ski Room",
     "Bar",
     "Fireside Lounge"
    ],
    "people": [
     "Victor the vet",
     "Ada the avalanche guard",
     "Basil the baker",
     "Celia the climber"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "door"
     ],
     [
      2,
      "col",
      2
     ],
     [
      3,
      "next",
      "tree"
     ]
    ],
    "solution": [
     0,
     5,
     10,
     15
    ],
    "doors": [
     [
      5,
      6
     ],
     [
      5,
      9
     ],
     [
      13,
      14
     ]
    ],
    "windows": [
     [
      8,
      "l"
     ],
     [
      12,
      "b"
     ]
    ],
    "tries": 2,
    "group": 1
   },
   {
    "size": 5,
    "rooms": "0011100111001112222233333",
    "objects": "..a..c..a..a...d.f...b.bf",
    "roomNames": [
     "Dining Hall",
     "Games Room",
     "Bar",
     "Terrace"
    ],
    "people": [
     "Albert the athlete",
     "Vivian the vlogger",
     "Bea the bartender",
     "Clara the climber",
     "Dmitri the driver"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "col",
      3
     ],
     [
      1,
      "next",
      "chair"
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
     ]
    ],
    "solution": [
     3,
     7,
     11,
     19,
     20
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
      14,
      19
     ],
     [
      17,
      22
     ]
    ],
    "windows": [
     [
      9,
      "r"
     ],
     [
      15,
      "l"
     ],
     [
      23,
      "b"
     ]
    ],
    "tries": 1,
    "facts": [
     [
      "windowCount",
      null,
      0
     ]
    ],
    "group": 1
   },
   {
    "size": 6,
    "rooms": "000000000000111222111222333444333444",
    "objects": "ed...d...bbf..eed.b.d..f..c......e..",
    "roomNames": [
     "Lobby",
     "Suite",
     "Ski Room",
     "Fireside Lounge",
     "Sauna"
    ],
    "people": [
     "Alma the avalanche guard",
     "Vince the vlogger",
     "Bella the baker",
     "Clara the climber",
     "Dora the driver",
     "Edgar the explorer"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "next",
      "sofa"
     ],
     [
      1,
      "window"
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
      4,
      "alone"
     ],
     [
      5,
      "door"
     ]
    ],
    "solution": [
     3,
     6,
     13,
     22,
     29,
     32
    ],
    "doors": [
     [
      7,
      13
     ],
     [
      11,
      17
     ],
     [
      20,
      21
     ],
     [
      20,
      26
     ],
     [
      21,
      27
     ],
     [
      32,
      33
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      4,
      "t"
     ],
     [
      6,
      "l"
     ],
     [
      24,
      "l"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "nextCount",
      "sofa",
      1
     ],
     [
      "nextCount",
      "tree",
      2
     ]
    ],
    "group": 1
   },
   {
    "size": 7,
    "rooms": "0000111000011122221112222111333344433334443333444",
    "objects": "d..d..ac..f.a.fa..c...e.c...e.ecbb..b.....b..a...",
    "roomNames": [
     "Boot Room",
     "Bar",
     "Ski Room",
     "Terrace",
     "Suite"
    ],
    "people": [
     "Alma the athlete",
     "Bea the baker",
     "Viola the vlogger",
     "Cora the climber",
     "Daisy the doctor",
     "Elias the engineer",
     "Flora the fisher"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "same",
      1
     ],
     [
      1,
      "next",
      "skis"
     ],
     [
      2,
      "next",
      "chair"
     ],
     [
      3,
      "next",
      "wood"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "on",
      "sofa"
     ],
     [
      6,
      "on",
      "chair"
     ]
    ],
    "solution": [
     6,
     11,
     16,
     21,
     33,
     36,
     45
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      10,
      17
     ],
     [
      24,
      25
     ],
     [
      27,
      34
     ],
     [
      24,
      31
     ],
     [
      31,
      32
     ]
    ],
    "windows": [
     [
      7,
      "l"
     ],
     [
      27,
      "r"
     ],
     [
      34,
      "r"
     ],
     [
      42,
      "l"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "nextCount",
      "wood",
      1
     ],
     [
      "nextCount",
      "chair",
      2
     ],
     [
      "roomCount",
      2,
      2
     ]
    ],
    "group": 1
   },
   {
    "size": 8,
    "rooms": "0000011100000111000001112223334422233344222333442225555522255555",
    "objects": "b.....fba....f...dcf.c..c..c.b.......e...f.e..a.......e.b....b.a",
    "roomNames": [
     "Fireside Lounge",
     "Bar",
     "Lobby",
     "Games Room",
     "Kitchen",
     "Spa"
    ],
    "people": [
     "Albert the avalanche guard",
     "Birgit the baker",
     "Carl the cook",
     "Della the driver",
     "Ena the explorer",
     "Vince the vlogger",
     "Felix the forester",
     "Gideon the guide"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "on",
      "sofa"
     ],
     [
      1,
      "next",
      "chair"
     ],
     [
      2,
      "same",
      0
     ],
     [
      2,
      "next",
      "skis"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "next",
      "skis"
     ],
     [
      5,
      "next",
      "wood"
     ],
     [
      6,
      "window"
     ],
     [
      7,
      "on",
      "sofa"
     ]
    ],
    "solution": [
     7,
     9,
     22,
     28,
     35,
     42,
     48,
     61
    ],
    "doors": [
     [
      20,
      21
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
      21,
      29
     ],
     [
      23,
      31
     ],
     [
      26,
      27
     ],
     [
      58,
      59
     ],
     [
      45,
      46
     ],
     [
      45,
      53
     ],
     [
      47,
      55
     ]
    ],
    "windows": [
     [
      5,
      "t"
     ],
     [
      15,
      "r"
     ],
     [
      48,
      "l"
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
    "tries": 1,
    "facts": [
     [
      "roomCount",
      1,
      2
     ]
    ],
    "group": 1
   },
   {
    "size": 9,
    "rooms": "000011222000011222000011222000011222333445555333445555333445555333666666333666666",
    "objects": "d.a.f....bf.a..ac....bfe.....cb...a....cee..d..b.a.a..........f.d.........cad....",
    "roomNames": [
     "Sauna",
     "Fireside Lounge",
     "Bar",
     "Spa",
     "Terrace",
     "Kitchen",
     "Suite"
    ],
    "people": [
     "Vivian the vlogger",
     "Albert the avalanche guard",
     "Birgit the bartender",
     "Cora the climber",
     "Dora the driver",
     "Edgar the explorer",
     "Flora the forester",
     "Gus the guide",
     "Hana the hotelier"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "next",
      "chair"
     ],
     [
      1,
      "next",
      "tree"
     ],
     [
      2,
      "next",
      "skis"
     ],
     [
      2,
      "next",
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
      "next",
      "sofa"
     ],
     [
      5,
      "row",
      5
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
      8,
      "same",
      7
     ]
    ],
    "solution": [
     6,
     14,
     25,
     27,
     38,
     46,
     58,
     66,
     80
    ],
    "doors": [
     [
      12,
      13
     ],
     [
      27,
      36
     ],
     [
      30,
      39
     ],
     [
      14,
      15
     ],
     [
      31,
      40
     ],
     [
      32,
      41
     ],
     [
      35,
      44
     ],
     [
      47,
      48
     ],
     [
      65,
      66
     ],
     [
      58,
      59
     ],
     [
      58,
      67
     ],
     [
      60,
      69
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      17,
      "r"
     ],
     [
      26,
      "r"
     ],
     [
      71,
      "r"
     ],
     [
      77,
      "b"
     ]
    ],
    "tries": 1,
    "facts": [
     [
      "onCount",
      "sofa",
      0
     ]
    ],
    "group": 1
   },
   {
    "size": 10,
    "rooms": "0000111111000011111100001111112222333333222233333322223333334455566677445556667744555666774455566677",
    "objects": ".da....f..aad...a..d.........f.e..c.fb.....f....db......bf......fb.....faf..ecb...fadb.....e.d.d.e.c",
    "roomNames": [
     "Bar",
     "Fireside Lounge",
     "Boot Room",
     "Kitchen",
     "Sauna",
     "Spa",
     "Ski Room",
     "Terrace"
    ],
    "people": [
     "Alma the avalanche guard",
     "Bruno the baker",
     "Celia the cook",
     "Dmitri the doctor",
     "Ena the engineer",
     "Vince the vlogger",
     "Frank the fisher",
     "Greta the glacier expert",
     "Hilda the hiker",
     "Isla the ice climber"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "next",
      "fire"
     ],
     [
      1,
      "row",
      1
     ],
     [
      1,
      "col",
      4
     ],
     [
      2,
      "col",
      7
     ],
     [
      3,
      "next",
      "tree"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "next",
      "wood"
     ],
     [
      6,
      "next",
      "wood"
     ],
     [
      7,
      "on",
      "chair"
     ],
     [
      8,
      "next",
      "sofa"
     ],
     [
      8,
      "row",
      8
     ],
     [
      9,
      "next",
      "skis"
     ]
    ],
    "solution": [
     9,
     14,
     27,
     30,
     45,
     53,
     61,
     72,
     86,
     98
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      20,
      30
     ],
     [
      26,
      36
     ],
     [
      43,
      44
     ],
     [
      50,
      60
     ],
     [
      52,
      62
     ],
     [
      54,
      64
     ],
     [
      56,
      66
     ],
     [
      58,
      68
     ],
     [
      71,
      72
     ],
     [
      64,
      65
     ],
     [
      87,
      88
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
      2,
      "t"
     ],
     [
      6,
      "t"
     ],
     [
      50,
      "l"
     ],
     [
      89,
      "r"
     ]
    ],
    "tries": 2,
    "group": 1
   },
   {
    "size": 11,
    "rooms": "0000011111100000111111000001122220000011222200000112222333444455553334444555533344445555333666677773336666777733366667777",
    "objects": "a.aa...b.c....b.......f.ba...ece.ba.....a.d.....b.c.b...f.bb..ab...e...b..ba......a..ca.b....f...d..e..f..eb...e.f.......",
    "roomNames": [
     "Sauna",
     "Ski Room",
     "Bar",
     "Lobby",
     "Boot Room",
     "Suite",
     "Fireside Lounge",
     "Spa"
    ],
    "people": [
     "Astrid the avalanche guard",
     "Birgit the bartender",
     "Celia the climber",
     "Dexter the doctor",
     "Victor the vlogger",
     "Elias the explorer",
     "Fiona the fisher",
     "Grace the glacier expert",
     "Hazel the hotelier",
     "Ivy the instructor",
     "Jonas the jogger"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "same",
      3
     ],
     [
      1,
      "next",
      "skis"
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
      "on",
      "sofa"
     ],
     [
      3,
      "next",
      "wood"
     ],
     [
      4,
      "next",
      "skis"
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "same",
      7
     ],
     [
      7,
      "next",
      "skis"
     ],
     [
      8,
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
      "next",
      "wood"
     ],
     [
      10,
      "next",
      "sofa"
     ]
    ],
    "solution": [
     4,
     20,
     24,
     33,
     49,
     61,
     76,
     84,
     89,
     102,
     118
    ],
    "doors": [
     [
      15,
      16
     ],
     [
      44,
      55
     ],
     [
      47,
      58
     ],
     [
      20,
      31
     ],
     [
      50,
      61
     ],
     [
      52,
      63
     ],
     [
      79,
      80
     ],
     [
      101,
      102
     ],
     [
      61,
      62
     ],
     [
      81,
      92
     ],
     [
      85,
      96
     ],
     [
      94,
      95
     ]
    ],
    "windows": [
     [
      32,
      "r"
     ],
     [
      98,
      "r"
     ],
     [
      99,
      "l"
     ],
     [
      110,
      "l"
     ],
     [
      114,
      "b"
     ],
     [
      120,
      "r"
     ],
     [
      120,
      "b"
     ]
    ],
    "tries": 2,
    "group": 1
   },
   {
    "size": 12,
    "rooms": "000001111222000001111222000001111222333331111222333334444444333334444444333334444444555556666777555556666777888886666777888886666777888886666777",
    "objects": ".a...f...eb.cd....e..d.f.....a..bcc..c...bf..........d..d.........b.......af.ad....bc....e.f..d.f...f.........ac..dd..d....d........abe..bacab.b",
    "roomNames": [
     "Fireside Lounge",
     "Bar",
     "Sauna",
     "Ski Room",
     "Kitchen",
     "Games Room",
     "Suite",
     "Terrace",
     "Spa"
    ],
    "people": [
     "Astrid the avalanche guard",
     "Bella the bartender",
     "Clara the climber",
     "Della the doctor",
     "Edgar the explorer",
     "Flora the fisher",
     "Grace the guide",
     "Hugo the hiker",
     "Isla the instructor",
     "Viola the vet",
     "Jade the jogger",
     "Klaus the kayaker"
    ],
    "victim": 9,
    "clues": [
     [
      0,
      "next",
      "skis"
     ],
     [
      1,
      "next",
      "sofa"
     ],
     [
      2,
      "same",
      1
     ],
     [
      2,
      "on",
      "chair"
     ],
     [
      3,
      "same",
      2
     ],
     [
      3,
      "next",
      "wood"
     ],
     [
      4,
      "next",
      "skis"
     ],
     [
      4,
      "same",
      5
     ],
     [
      5,
      "notRoom",
      5
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
      "alone"
     ],
     [
      10,
      "next",
      "sofa"
     ],
     [
      10,
      "col",
      11
     ],
     [
      11,
      "next",
      "fire"
     ],
     [
      11,
      "next",
      "tree"
     ]
    ],
    "solution": [
     0,
     20,
     29,
     43,
     49,
     64,
     82,
     90,
     98,
     117,
     131,
     135
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
      44,
      45
     ],
     [
      40,
      41
     ],
     [
      41,
      53
     ],
     [
      47,
      59
     ],
     [
      76,
      77
     ],
     [
      72,
      84
     ],
     [
      79,
      91
     ],
     [
      82,
      94
     ],
     [
      88,
      89
     ],
     [
      97,
      109
     ],
     [
      92,
      93
     ],
     [
      124,
      125
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      6,
      "t"
     ],
     [
      8,
      "t"
     ],
     [
      10,
      "t"
     ],
     [
      84,
      "l"
     ],
     [
      132,
      "b"
     ],
     [
      133,
      "b"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "onCount",
      "chair",
      1
     ],
     [
      "roomCount",
      8,
      1
     ]
    ],
    "group": 1
   },
   {
    "size": 4,
    "rooms": "0011001122222222",
    "objects": "b.f...ebf.......",
    "roomNames": [
     "Sauna",
     "Lobby",
     "Dining Hall"
    ],
    "people": [
     "Albert the athlete",
     "Bea the bartender",
     "Viola the vlogger",
     "Celia the climber"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "next",
      "sofa"
     ],
     [
      1,
      "alone"
     ],
     [
      3,
      "next",
      "wood"
     ]
    ],
    "solution": [
     3,
     5,
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
      6,
      10
     ]
    ],
    "windows": [
     [
      15,
      "b"
     ],
     [
      15,
      "r"
     ]
    ],
    "tries": 3,
    "facts": [
     [
      "touch",
      null,
      0
     ],
     [
      "onCount",
      "sofa",
      0
     ]
    ],
    "group": 2
   },
   {
    "size": 5,
    "rooms": "0011100111222332223322233",
    "objects": "....ba...e..ab...b..af..a",
    "roomNames": [
     "Bar",
     "Suite",
     "Fireside Lounge",
     "Terrace"
    ],
    "people": [
     "Arthur the avalanche guard",
     "Bea the bartender",
     "Celia the cook",
     "Vince the vet",
     "Daisy the driver"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "window"
     ],
     [
      1,
      "on",
      "chair"
     ],
     [
      2,
      "on",
      "chair"
     ],
     [
      2,
      "next",
      "sofa"
     ],
     [
      4,
      "next",
      "chair"
     ]
    ],
    "solution": [
     4,
     5,
     12,
     16,
     23
    ],
    "doors": [
     [
      1,
      2
     ],
     [
      5,
      10
     ],
     [
      7,
      12
     ],
     [
      8,
      13
     ],
     [
      12,
      13
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      4,
      "t"
     ],
     [
      24,
      "b"
     ]
    ],
    "tries": 4,
    "facts": [
     [
      "roomCount",
      0,
      1
     ]
    ],
    "group": 2
   },
   {
    "size": 6,
    "rooms": "000000000000112233112233114433114433",
    "objects": "..bbab.d.fde.d.b.d..a.e..fa.f...bff.",
    "roomNames": [
     "Ski Room",
     "Games Room",
     "Terrace",
     "Dining Hall",
     "Spa"
    ],
    "people": [
     "Ada the avalanche guard",
     "Bruno the baker",
     "Cedric the climber",
     "Della the doctor",
     "Edgar the engineer",
     "Viola the vet"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "next",
      "fire"
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "next",
      "tree"
     ],
     [
      3,
      "on",
      "chair"
     ],
     [
      4,
      "next",
      "wood"
     ],
     [
      5,
      "next",
      "wood"
     ]
    ],
    "solution": [
     1,
     6,
     16,
     20,
     27,
     35
    ],
    "doors": [
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
      19,
      20
     ],
     [
      31,
      32
     ],
     [
      21,
      22
     ],
     [
      21,
      27
     ],
     [
      27,
      28
     ]
    ],
    "windows": [
     [
      3,
      "t"
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
      31,
      "b"
     ]
    ],
    "tries": 4,
    "facts": [
     [
      "corner",
      null,
      5
     ]
    ],
    "group": 2
   },
   {
    "size": 7,
    "rooms": "0001111000111100022220002222333344433334443333444",
    "objects": "c.adf.......e...ea..........a..abfb....d...c.d..f",
    "roomNames": [
     "Ski Room",
     "Kitchen",
     "Dining Hall",
     "Lobby",
     "Fireside Lounge"
    ],
    "people": [
     "Astrid the athlete",
     "Bea the baker",
     "Celia the climber",
     "Viola the vet",
     "Della the driver",
     "Ena the engineer",
     "Felix the fisher"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "on",
      "chair"
     ],
     [
      1,
      "door"
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
      4,
      "alone"
     ],
     [
      5,
      "next",
      "sofa"
     ],
     [
      6,
      "same",
      5
     ]
    ],
    "solution": [
     2,
     10,
     18,
     22,
     28,
     41,
     47
    ],
    "doors": [
     [
      9,
      10
     ],
     [
      16,
      17
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
      24,
      31
     ],
     [
      27,
      34
     ],
     [
      31,
      32
     ]
    ],
    "windows": [
     [
      6,
      "r"
     ],
     [
      7,
      "l"
     ],
     [
      21,
      "l"
     ],
     [
      45,
      "b"
     ]
    ],
    "tries": 5,
    "group": 2
   },
   {
    "size": 8,
    "rooms": "0001122200011222000112220001122233334444333344443333555533335555",
    "objects": "ff...e.fa...e..e.b....a.....b...b..b....................bc.e..a.",
    "roomNames": [
     "Sauna",
     "Dining Hall",
     "Boot Room",
     "Spa",
     "Games Room",
     "Ski Room"
    ],
    "people": [
     "Alma the athlete",
     "Bruno the baker",
     "Cedric the climber",
     "Daisy the driver",
     "Edith the engineer",
     "Frank the forester",
     "Vera the vlogger",
     "Gwen the guide"
    ],
    "victim": 6,
    "clues": [
     [
      0,
      "next",
      "wood"
     ],
     [
      1,
      "on",
      "chair"
     ],
     [
      2,
      "next",
      "tree"
     ],
     [
      2,
      "next",
      "chair"
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
      "alone"
     ],
     [
      6,
      "next",
      "chair"
     ],
     [
      7,
      "col",
      5
     ]
    ],
    "solution": [
     2,
     8,
     23,
     25,
     35,
     44,
     54,
     61
    ],
    "doors": [
     [
      10,
      11
     ],
     [
      25,
      33
     ],
     [
      4,
      5
     ],
     [
      27,
      35
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
      35,
      36
     ],
     [
      59,
      60
     ],
     [
      45,
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
      31,
      "r"
     ],
     [
      40,
      "l"
     ],
     [
      55,
      "r"
     ]
    ],
    "tries": 4,
    "facts": [
     [
      "touch",
      null,
      1
     ]
    ],
    "group": 2
   },
   {
    "size": 9,
    "rooms": "000000111000000111000000111222334444222334444222334444222335555666665555666665555",
    "objects": "...b..fb..a....d..bc..................a...e..bb..........b........e.....ade.d...e",
    "roomNames": [
     "Ski Room",
     "Lobby",
     "Terrace",
     "Fireside Lounge",
     "Dining Hall",
     "Bar",
     "Boot Room"
    ],
    "people": [
     "Albert the athlete",
     "Bella the bartender",
     "Cora the cook",
     "Dmitri the doctor",
     "Ena the explorer",
     "Felix the forester",
     "Gus the glacier expert",
     "Henrik the hiker",
     "Viola the vet"
    ],
    "victim": 8,
    "clues": [
     [
      0,
      "next",
      "sofa"
     ],
     [
      1,
      "next",
      "sofa"
     ],
     [
      1,
      "next",
      "chair"
     ],
     [
      2,
      "window"
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "next",
      "chair"
     ],
     [
      4,
      "next",
      "tree"
     ],
     [
      5,
      "next",
      "sofa"
     ],
     [
      5,
      "alone"
     ],
     [
      6,
      "col",
      7
     ],
     [
      7,
      "next",
      "fire"
     ],
     [
      8,
      "window"
     ]
    ],
    "solution": [
     4,
     9,
     26,
     29,
     41,
     48,
     61,
     64,
     78
    ],
    "doors": [
     [
      5,
      6
     ],
     [
      18,
      27
     ],
     [
      22,
      31
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
      56,
      57
     ],
     [
      56,
      65
     ],
     [
      31,
      32
     ],
     [
      58,
      59
     ],
     [
      57,
      66
     ],
     [
      52,
      61
     ],
     [
      67,
      68
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      26,
      "r"
     ],
     [
      62,
      "r"
     ],
     [
      72,
      "l"
     ],
     [
      78,
      "b"
     ]
    ],
    "tries": 4,
    "facts": [
     [
      "nextCount",
      "wood",
      0
     ]
    ],
    "group": 2
   },
   {
    "size": 10,
    "rooms": "0001112222000111222200011122220001113333000111333344555566664455556666445555666644777766664477776666",
    "objects": ".....cbca.e..b.e..e....a.f.b.b.....ed...c.a.f.faf.f.f.....b..a......f...........a.a...a.....a.a.b.a.",
    "roomNames": [
     "Suite",
     "Ski Room",
     "Dining Hall",
     "Boot Room",
     "Games Room",
     "Terrace",
     "Spa",
     "Kitchen"
    ],
    "people": [
     "Arthur the avalanche guard",
     "Bruno the bartender",
     "Cedric the climber",
     "Dmitri the driver",
     "Vivian the vet",
     "Elsa the engineer",
     "Felix the forester",
     "Grace the glacier expert",
     "Hugo the hotelier",
     "Isla the instructor"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "next",
      "skis"
     ],
     [
      0,
      "window"
     ],
     [
      1,
      "next",
      "tree"
     ],
     [
      2,
      "col",
      9
     ],
     [
      3,
      "room",
      3
     ],
     [
      3,
      "next",
      "wood"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "row",
      5
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
     ],
     [
      7,
      "alone"
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
     6,
     11,
     29,
     38,
     42,
     55,
     64,
     77,
     83,
     90
    ],
    "doors": [
     [
      12,
      13
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
      25,
      26
     ],
     [
      35,
      36
     ],
     [
      44,
      54
     ],
     [
      27,
      37
     ],
     [
      49,
      59
     ],
     [
      61,
      62
     ],
     [
      81,
      82
     ],
     [
      65,
      66
     ],
     [
      72,
      82
     ],
     [
      95,
      96
     ]
    ],
    "windows": [
     [
      6,
      "t"
     ],
     [
      40,
      "l"
     ],
     [
      70,
      "l"
     ],
     [
      90,
      "b"
     ],
     [
      94,
      "b"
     ],
     [
      95,
      "b"
     ]
    ],
    "tries": 3,
    "facts": [
     [
      "roomCount",
      6,
      1
     ],
     [
      "roomCount",
      1,
      0
     ],
     [
      "edge",
      null,
      3
     ]
    ],
    "group": 2
   },
   {
    "size": 11,
    "rooms": "0011111222200111112222001111122220011111222200033334444000333344440003333444455556664444555566677775555666777755556667777",
    "objects": "a.......febaf...c...ecc..........e..a.ba......e...f...a..f....ad.....d.dec...aedc.....a.dd..d..f.e.bd....f....ff....fdf..",
    "roomNames": [
     "Suite",
     "Lobby",
     "Dining Hall",
     "Kitchen",
     "Fireside Lounge",
     "Boot Room",
     "Spa",
     "Sauna"
    ],
    "people": [
     "Vivian the vlogger",
     "Albert the athlete",
     "Basil the baker",
     "Celia the cook",
     "Dmitri the driver",
     "Edith the explorer",
     "Felix the fisher",
     "Gwen the guide",
     "Hana the hotelier",
     "Isla the instructor",
     "Juno the journalist"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "notRoom",
      5
     ],
     [
      1,
      "on",
      "chair"
     ],
     [
      1,
      "next",
      "wood"
     ],
     [
      2,
      "next",
      "skis"
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
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "next",
      "skis"
     ],
     [
      6,
      "same",
      1
     ],
     [
      7,
      "door"
     ],
     [
      7,
      "row",
      7
     ],
     [
      8,
      "alone"
     ],
     [
      9,
      "next",
      "wood"
     ],
     [
      9,
      "same",
      10
     ],
     [
      10,
      "door"
     ]
    ],
    "solution": [
     2,
     11,
     32,
     36,
     53,
     62,
     67,
     83,
     96,
     104,
     114
    ],
    "doors": [
     [
      35,
      46
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
      6,
      7
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
      50,
      51
     ],
     [
      69,
      80
     ],
     [
      70,
      81
     ],
     [
      83,
      84
     ],
     [
      87,
      98
     ],
     [
      113,
      114
     ],
     [
      105,
      106
     ]
    ],
    "windows": [
     [
      10,
      "t"
     ],
     [
      21,
      "r"
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
      99,
      "l"
     ],
     [
      110,
      "l"
     ],
     [
      120,
      "r"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "onCount",
      "chair",
      3
     ],
     [
      "roomCount",
      6,
      3
     ],
     [
      "doorCount",
      null,
      3
     ]
    ],
    "group": 2
   },
   {
    "size": 12,
    "rooms": "000111223333000111223333000111223333000111224444000111224444000111224444000111224444555666677777555666677777555666688888555666688888555666688888",
    "objects": ".....b.............b..b.c.d.be.....f..f.....ba.....d..ab...a.d.a..db..a.fb.d..f..e.f..c.cb.f..d.e.bf.a........a..ab..e...b........ad.af.b.f.a.b.",
    "roomNames": [
     "Games Room",
     "Suite",
     "Sauna",
     "Dining Hall",
     "Lobby",
     "Kitchen",
     "Spa",
     "Bar",
     "Terrace"
    ],
    "people": [
     "Albert the avalanche guard",
     "Basil the baker",
     "Celia the climber",
     "Dmitri the driver",
     "Elias the explorer",
     "Freya the fisher",
     "Gus the glacier expert",
     "Hana the hotelier",
     "Ivo the instructor",
     "Vince the vlogger",
     "Juno the jogger",
     "Kitty the kayaker"
    ],
    "victim": 9,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "notRoom",
      3
     ],
     [
      1,
      "next",
      "sofa"
     ],
     [
      1,
      "row",
      1
     ],
     [
      2,
      "same",
      5
     ],
     [
      3,
      "on",
      "chair"
     ],
     [
      3,
      "next",
      "sofa"
     ],
     [
      3,
      "same",
      6
     ],
     [
      4,
      "next",
      "fire"
     ],
     [
      5,
      "next",
      "fire"
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
      6,
      "door"
     ],
     [
      7,
      "next",
      "wood"
     ],
     [
      8,
      "on",
      "chair"
     ],
     [
      9,
      "on",
      "chair"
     ],
     [
      10,
      "same",
      8
     ],
     [
      10,
      "door"
     ],
     [
      11,
      "next",
      "chair"
     ]
    ],
    "solution": [
     11,
     16,
     30,
     45,
     49,
     67,
     82,
     92,
     101,
     110,
     123,
     132
    ],
    "doors": [
     [
      26,
      27
     ],
     [
      73,
      85
     ],
     [
      77,
      78
     ],
     [
      77,
      89
     ],
     [
      31,
      32
     ],
     [
      67,
      68
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
      32,
      44
     ],
     [
      82,
      94
     ],
     [
      122,
      123
     ],
     [
      102,
      103
     ],
     [
      114,
      115
     ],
     [
      103,
      115
     ]
    ],
    "windows": [
     [
      8,
      "t"
     ],
     [
      35,
      "r"
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
      120,
      "l"
     ],
     [
      139,
      "b"
     ],
     [
      143,
      "r"
     ]
    ],
    "tries": 4,
    "facts": [
     [
      "touch",
      null,
      0
     ]
    ],
    "group": 2
   },
   {
    "size": 4,
    "rooms": "0011001122222222",
    "objects": "..e.a.........e.",
    "roomNames": [
     "Bar",
     "Boot Room",
     "Ski Room"
    ],
    "people": [
     "Arthur the avalanche guard",
     "Birgit the bartender",
     "Cora the climber",
     "Viola the vlogger"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "door"
     ],
     [
      1,
      "notRoom",
      0
     ],
     [
      2,
      "next",
      "tree"
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
      11,
      "r"
     ],
     [
      15,
      "b"
     ]
    ],
    "tries": 7,
    "facts": [
     [
      "roomCount",
      0,
      1
     ],
     [
      "corner",
      null,
      3
     ]
    ],
    "group": 3
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
    ],
    "tries": 7,
    "group": 3
   },
   {
    "size": 6,
    "rooms": "001122001122003333003333004444004444",
    "objects": "......befd.bd....bc.a.d.a.d.....de..",
    "roomNames": [
     "Dining Hall",
     "Spa",
     "Bar",
     "Sauna",
     "Boot Room"
    ],
    "people": [
     "Astrid the avalanche guard",
     "Vivian the vlogger",
     "Basil the baker",
     "Clara the cook",
     "Dora the driver",
     "Elias the engineer"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      2,
      "next",
      "chair"
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
      "next",
      "chair"
     ],
     [
      5,
      "next",
      "tree"
     ]
    ],
    "solution": [
     5,
     6,
     14,
     21,
     25,
     34
    ],
    "doors": [
     [
      7,
      8
     ],
     [
      19,
      20
     ],
     [
      25,
      26
     ],
     [
      9,
      10
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
      5,
      "r"
     ],
     [
      24,
      "l"
     ],
     [
      29,
      "r"
     ]
    ],
    "tries": 9,
    "facts": [
     [
      "windowCount",
      null,
      1
     ]
    ],
    "group": 3
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
    ],
    "tries": 6,
    "group": 3
   },
   {
    "size": 8,
    "rooms": "0001111100011111000222220002222233444555334445553344455533444555",
    "objects": "..ccf.....e.......a.a.dac....d.bb...e..b..b...b.....e.........d.",
    "roomNames": [
     "Suite",
     "Ski Room",
     "Spa",
     "Boot Room",
     "Fireside Lounge",
     "Bar"
    ],
    "people": [
     "Albert the athlete",
     "Vivian the vlogger",
     "Basil the baker",
     "Celia the cook",
     "Della the doctor",
     "Ena the explorer",
     "Freya the forester",
     "Gus the guide"
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
      "chair"
     ],
     [
      3,
      "next",
      "fire"
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
      "same",
      4
     ],
     [
      6,
      "next",
      "tree"
     ],
     [
      7,
      "col",
      4
     ]
    ],
    "solution": [
     7,
     13,
     17,
     30,
     34,
     40,
     51,
     60
    ],
    "doors": [
     [
      10,
      11
     ],
     [
      18,
      19
     ],
     [
      25,
      33
     ],
     [
      26,
      34
     ],
     [
      15,
      23
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
      57,
      58
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
      57,
      "b"
     ]
    ],
    "tries": 9,
    "facts": [
     [
      "roomCount",
      1,
      2
     ],
     [
      "nextCount",
      "sofa",
      3
     ]
    ],
    "group": 3
   },
   {
    "size": 9,
    "rooms": "000001111000001111000001111222221111222223333222223333444444444555666666555666666",
    "objects": "..efd..af.f.........b.....c....b....b..a.....a.a.c..b...a..c.d..d...a.e.ef..d..e.",
    "roomNames": [
     "Sauna",
     "Kitchen",
     "Fireside Lounge",
     "Games Room",
     "Dining Hall",
     "Ski Room",
     "Spa"
    ],
    "people": [
     "Albert the athlete",
     "Viola the vet",
     "Basil the bartender",
     "Celia the cook",
     "Dmitri the doctor",
     "Ena the engineer",
     "Flora the fisher",
     "Grace the glacier expert",
     "Hazel the hiker"
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
      "wood"
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
      "next",
      "sofa"
     ],
     [
      5,
      "same",
      4
     ],
     [
      5,
      "window"
     ],
     [
      6,
      "next",
      "chair"
     ],
     [
      6,
      "door"
     ],
     [
      7,
      "next",
      "fire"
     ],
     [
      7,
      "door"
     ],
     [
      8,
      "next",
      "fire"
     ]
    ],
    "solution": [
     6,
     9,
     19,
     31,
     43,
     53,
     57,
     65,
     77
    ],
    "doors": [
     [
      13,
      14
     ],
     [
      21,
      30
     ],
     [
      31,
      32
     ],
     [
      35,
      44
     ],
     [
      40,
      41
     ],
     [
      45,
      54
     ],
     [
      52,
      61
     ],
     [
      56,
      65
     ],
     [
      57,
      66
     ],
     [
      65,
      66
     ]
    ],
    "windows": [
     [
      7,
      "t"
     ],
     [
      27,
      "l"
     ],
     [
      36,
      "l"
     ],
     [
      45,
      "l"
     ],
     [
      53,
      "r"
     ]
    ],
    "tries": 8,
    "facts": [
     [
      "onCount",
      "sofa",
      1
     ]
    ],
    "group": 3
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
    ],
    "tries": 6,
    "group": 3
   },
   {
    "size": 11,
    "rooms": "0001111222200011112222000111122220001111222233333444444333334444445555336666655553366666555533777775555337777755553377777",
    "objects": "..ae.f..d..b....b..ef..........b.d....cf.fbd....f.c.............c...b.....d.....a......b.e...fe......c......d.........a..",
    "roomNames": [
     "Lobby",
     "Kitchen",
     "Spa",
     "Boot Room",
     "Terrace",
     "Fireside Lounge",
     "Sauna",
     "Dining Hall"
    ],
    "people": [
     "Ada the athlete",
     "Bea the baker",
     "Carl the cook",
     "Dora the driver",
     "Edgar the engineer",
     "Fiona the fisher",
     "Grace the guide",
     "Hilda the hiker",
     "Vivian the vlogger",
     "Ines the ice climber",
     "Juno the jogger"
    ],
    "victim": 8,
    "clues": [
     [
      0,
      "same",
      3
     ],
     [
      1,
      "on",
      "sofa"
     ],
     [
      1,
      "next",
      "wood"
     ],
     [
      2,
      "next",
      "fire"
     ],
     [
      3,
      "next",
      "fire"
     ],
     [
      4,
      "next",
      "skis"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "next",
      "wood"
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
      6,
      "same",
      9
     ],
     [
      7,
      "alone"
     ],
     [
      9,
      "next",
      "skis"
     ],
     [
      10,
      "next",
      "fire"
     ],
     [
      10,
      "next",
      "chair"
     ]
    ],
    "solution": [
     0,
     16,
     32,
     34,
     51,
     59,
     68,
     83,
     96,
     102,
     119
    ],
    "doors": [
     [
      35,
      36
     ],
     [
      34,
      45
     ],
     [
      39,
      40
     ],
     [
      36,
      47
     ],
     [
      39,
      50
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
      113,
      114
     ],
     [
      82,
      83
     ],
     [
      104,
      105
     ],
     [
      63,
      74
     ],
     [
      86,
      97
     ]
    ],
    "windows": [
     [
      8,
      "t"
     ],
     [
      10,
      "r"
     ],
     [
      21,
      "r"
     ],
     [
      54,
      "r"
     ],
     [
      66,
      "l"
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
    "tries": 10,
    "group": 3
   },
   {
    "size": 12,
    "rooms": "000011122222000011122222000011122222000011122222333444455555333444455555333444455555666677778888666677778888666677778888666677778888666677778888",
    "objects": "....cc.....a.....fb.....e......b............a...da...e.bfb.b.b..d...a.acc..c..f.bb...ae.e..d.....eff.b.d....c..............ffc.db.b.deb.ab......",
    "roomNames": [
     "Ski Room",
     "Suite",
     "Kitchen",
     "Lobby",
     "Fireside Lounge",
     "Games Room",
     "Bar",
     "Spa",
     "Dining Hall"
    ],
    "people": [
     "Astrid the athlete",
     "Bea the bartender",
     "Celia the cook",
     "Dmitri the doctor",
     "Elias the explorer",
     "Fiona the forester",
     "Gus the glacier expert",
     "Hazel the hotelier",
     "Ivo the ice climber",
     "Vince the vet",
     "Jade the journalist",
     "Kai the kayaker"
    ],
    "victim": 9,
    "clues": [
     [
      0,
      "door"
     ],
     [
      1,
      "row",
      1
     ],
     [
      2,
      "col",
      3
     ],
     [
      3,
      "same",
      0
     ],
     [
      3,
      "on",
      "chair"
     ],
     [
      4,
      "on",
      "sofa"
     ],
     [
      5,
      "next",
      "tree"
     ],
     [
      6,
      "next",
      "skis"
     ],
     [
      7,
      "col",
      11
     ],
     [
      8,
      "next",
      "skis"
     ],
     [
      8,
      "next",
      "tree"
     ],
     [
      9,
      "next",
      "wood"
     ],
     [
      10,
      "next",
      "skis"
     ],
     [
      11,
      "same",
      10
     ],
     [
      11,
      "next",
      "wood"
     ]
    ],
    "solution": [
     7,
     22,
     27,
     44,
     57,
     65,
     73,
     95,
     96,
     110,
     126,
     136
    ],
    "doors": [
     [
      39,
      40
     ],
     [
      36,
      48
     ],
     [
      39,
      51
     ],
     [
      6,
      7
     ],
     [
      41,
      53
     ],
     [
      46,
      58
     ],
     [
      74,
      75
     ],
     [
      72,
      84
     ],
     [
      78,
      79
     ],
     [
      75,
      87
     ],
     [
      76,
      88
     ],
     [
      79,
      91
     ],
     [
      82,
      94
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
      5,
      "t"
     ],
     [
      9,
      "t"
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
      108,
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
    "tries": 9,
    "facts": [
     [
      "emptyRooms",
      null,
      1
     ],
     [
      "roomCount",
      5,
      1
     ],
     [
      "roomCount",
      3,
      1
     ]
    ],
    "group": 3
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
    "rank": "ccnc",
    "tries": 0,
    "group": 0
   },
   {
    "size": 5,
    "rooms": "0001100011222332223322233",
    "objects": "ac.ada.c...d..a.dd.b..fcb",
    "roomNames": [
     "Throne Room",
     "Great Hall",
     "Smithy",
     "Dungeon"
    ],
    "people": [
     "Ada the archer",
     "Birgit the baker",
     "Cora the cupbearer",
     "Della the dancer",
     "Viola the vintner"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "on",
      "bench"
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "next",
      "candles"
     ],
     [
      3,
      "next",
      "bench"
     ]
    ],
    "solution": [
     3,
     6,
     12,
     19,
     20
    ],
    "doors": [
     [
      7,
      8
     ],
     [
      7,
      12
     ],
     [
      8,
      13
     ],
     [
      12,
      13
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      10,
      "l"
     ],
     [
      21,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "nextCount",
      "urn",
      0
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     3
    ],
    "rank": "cccnk",
    "group": 0
   },
   {
    "size": 6,
    "rooms": "001111001111002222002222334444334444",
    "objects": "cd.b..d.fb...e.b..e..........b......",
    "roomNames": [
     "Armory",
     "Gatehouse",
     "Smithy",
     "Throne Room",
     "Chapel"
    ],
    "people": [
     "Albert the alchemist",
     "Bella the bard",
     "Vivian the verger",
     "Carl the chronicler",
     "Dexter the doorkeeper",
     "Edith the embroiderer"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "next",
      "urn"
     ],
     [
      1,
      "col",
      1
     ],
     [
      3,
      "next",
      "cot"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "window"
     ]
    ],
    "solution": [
     2,
     7,
     12,
     21,
     29,
     34
    ],
    "doors": [
     [
      1,
      2
     ],
     [
      19,
      20
     ],
     [
      18,
      24
     ],
     [
      9,
      15
     ],
     [
      23,
      29
     ],
     [
      31,
      32
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
      32,
      "b"
     ],
     [
      34,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
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
     0
    ],
    "rank": "cknccc",
    "group": 0
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
    "rank": "cnccckc",
    "tries": 0,
    "group": 0
   },
   {
    "size": 8,
    "rooms": "0000111100001111000011112223344422233444222335552223355522233555",
    "objects": ".f...d.....a.e..d....d...d..d...eeb.f.e..b...a..b..a...a.b.f...f",
    "roomNames": [
     "Dungeon",
     "Stables",
     "Solar",
     "Courtyard",
     "Armory",
     "Kitchen"
    ],
    "people": [
     "Astrid the archer",
     "Vince the verger",
     "Bruno the baker",
     "Celia the cupbearer",
     "Dmitri the dancer",
     "Elsa the embroiderer",
     "Freya the farrier",
     "Gwen the glassmaker"
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
      "urn"
     ],
     [
      1,
      "row",
      1
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
      "swords"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "same",
      3
     ],
     [
      5,
      "next",
      "urn"
     ],
     [
      6,
      "on",
      "cot"
     ],
     [
      7,
      "next",
      "urn"
     ],
     [
      7,
      "alone"
     ]
    ],
    "solution": [
     7,
     9,
     18,
     27,
     37,
     44,
     48,
     62
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      18,
      26
     ],
     [
      19,
      27
     ],
     [
      20,
      28
     ],
     [
      22,
      30
     ],
     [
      42,
      43
     ],
     [
      28,
      29
     ],
     [
      52,
      53
     ],
     [
      39,
      47
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      15,
      "r"
     ],
     [
      32,
      "l"
     ],
     [
      39,
      "r"
     ],
     [
      56,
      "l"
     ]
    ],
    "tries": 0,
    "rules": [
     "ranks"
    ],
    "court": [
     3,
     5
    ],
    "rank": "cckkknck",
    "group": 0
   },
   {
    "size": 9,
    "rooms": "000111111000111111000111222333111222333333222333333222444555666444555666444555666",
    "objects": "abc..b.c...e....a.e.aea.....eb......f....b...............b.a.bb..bb.b..dede......",
    "roomNames": [
     "Chapel",
     "Dungeon",
     "Armory",
     "Throne Room",
     "Gatehouse",
     "Kitchen",
     "Solar"
    ],
    "people": [
     "Ada the archer",
     "Birgit the baker",
     "Carl the chronicler",
     "Dexter the dancer",
     "Elias the envoy",
     "Fiona the farrier",
     "Gwen the groom",
     "Hazel the herald",
     "Vince the verger"
    ],
    "victim": 8,
    "clues": [
     [
      0,
      "same",
      2
     ],
     [
      1,
      "row",
      1
     ],
     [
      2,
      "next",
      "bench"
     ],
     [
      3,
      "row",
      3
     ],
     [
      4,
      "same",
      3
     ],
     [
      4,
      "next",
      "swords"
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "on",
      "cot"
     ],
     [
      7,
      "next",
      "cot"
     ],
     [
      7,
      "alone"
     ],
     [
      8,
      "next",
      "candles"
     ],
     [
      8,
      "row",
      8
     ]
    ],
    "solution": [
     3,
     15,
     23,
     27,
     37,
     47,
     61,
     67,
     80
    ],
    "doors": [
     [
      11,
      12
     ],
     [
      19,
      28
     ],
     [
      16,
      25
     ],
     [
      31,
      40
     ],
     [
      41,
      42
     ],
     [
      53,
      62
     ],
     [
      47,
      56
     ],
     [
      48,
      57
     ],
     [
      56,
      57
     ],
     [
      77,
      78
     ]
    ],
    "windows": [
     [
      6,
      "t"
     ],
     [
      8,
      "r"
     ],
     [
      17,
      "r"
     ],
     [
      44,
      "r"
     ],
     [
      76,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "nextCount",
      "barrel",
      0
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     5,
     6
    ],
    "rank": "ckkckkknk",
    "group": 0
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
    "tries": 0,
    "rules": [
     "ranks"
    ],
    "court": [
     2,
     6
    ],
    "rank": "kcncnccckn",
    "group": 0
   },
   {
    "size": 4,
    "rooms": "0000000011221122",
    "objects": ".f.......cc.....",
    "roomNames": [
     "Solar",
     "Chapel",
     "Gatehouse"
    ],
    "people": [
     "Albert the archer",
     "Victor the vintner",
     "Birgit the bard",
     "Carl the cupbearer"
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
      "alone"
     ]
    ],
    "solution": [
     2,
     5,
     8,
     15
    ],
    "doors": [
     [
      4,
      8
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
      3,
      "t"
     ],
     [
      4,
      "l"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "touch",
      null,
      1
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     1
    ],
    "rank": "cckk",
    "group": 1
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
    "rank": "kccnn",
    "tries": 1,
    "group": 1
   },
   {
    "size": 6,
    "rooms": "000011000011222211222211333444333444",
    "objects": "f..b....a......d.be.......a.c.a..d..",
    "roomNames": [
     "Chapel",
     "Courtyard",
     "Armory",
     "Tower",
     "Kitchen"
    ],
    "people": [
     "Arthur the alchemist",
     "Basil the baker",
     "Cora the cupbearer",
     "Dexter the dancer",
     "Vivian the verger",
     "Elias the embroiderer"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "door"
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "same",
      0
     ],
     [
      3,
      "next",
      "candles"
     ],
     [
      4,
      "next",
      "bench"
     ],
     [
      5,
      "door"
     ]
    ],
    "solution": [
     4,
     7,
     17,
     21,
     24,
     32
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
      21,
      22
     ],
     [
      22,
      28
     ],
     [
      20,
      26
     ],
     [
      21,
      27
     ],
     [
      32,
      33
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      5,
      "r"
     ],
     [
      6,
      "l"
     ],
     [
      17,
      "r"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "nextCount",
      "bench",
      3
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     2
    ],
    "rank": "ckcncc",
    "group": 1
   },
   {
    "size": 7,
    "rooms": "0001122000112200011223331122333444433344443334444",
    "objects": "......b.dc...daab..b...c.....b........f.cd.....ad",
    "roomNames": [
     "Tower",
     "Dungeon",
     "Solar",
     "Stables",
     "Kitchen"
    ],
    "people": [
     "Alma the archer",
     "Bea the bard",
     "Cora the chronicler",
     "Della the doorkeeper",
     "Edgar the envoy",
     "Victor the vintner",
     "Frank the farrier"
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
      "door"
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "next",
      "cot"
     ],
     [
      3,
      "next",
      "barrel"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "next",
      "urn"
     ]
    ],
    "solution": [
     5,
     11,
     14,
     22,
     34,
     37,
     45
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
      11,
      12
     ],
     [
      23,
      24
     ],
     [
      25,
      32
     ],
     [
      27,
      34
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
      2,
      "t"
     ],
     [
      27,
      "r"
     ],
     [
      42,
      "l"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "roomCount",
      2,
      1
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     4
    ],
    "rank": "ccckkck",
    "group": 1
   },
   {
    "size": 8,
    "rooms": "0001112200011122000333220003332200033322444455554444555544445555",
    "objects": "...e....e..e..cc..f...f..b....d.b.d.caf.....f..c....cc.......b..",
    "roomNames": [
     "Great Hall",
     "Smithy",
     "Throne Room",
     "Stables",
     "Dungeon",
     "Tower"
    ],
    "people": [
     "Astrid the archer",
     "Birgit the bard",
     "Cora the chronicler",
     "Daisy the doorkeeper",
     "Edith the envoy",
     "Fiona the falconer",
     "Gus the glassmaker",
     "Vivian the vintner"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "next",
      "swords"
     ],
     [
      1,
      "next",
      "swords"
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
      4,
      "next",
      "candles"
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
      7,
      "next",
      "cot"
     ]
    ],
    "solution": [
     0,
     12,
     21,
     27,
     33,
     42,
     55,
     62
    ],
    "doors": [
     [
      10,
      11
     ],
     [
      34,
      35
     ],
     [
      34,
      42
     ],
     [
      13,
      14
     ],
     [
      12,
      20
     ],
     [
      21,
      22
     ],
     [
      39,
      47
     ],
     [
      35,
      43
     ],
     [
      36,
      44
     ],
     [
      59,
      60
     ]
    ],
    "windows": [
     [
      6,
      "t"
     ],
     [
      24,
      "l"
     ],
     [
      31,
      "r"
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
    "tries": 2,
    "rules": [
     "ranks"
    ],
    "court": [
     0,
     3
    ],
    "rank": "kcknkckc",
    "group": 1
   },
   {
    "size": 9,
    "rooms": "000111111000111111000002222000002222333445555333445555333446666333446666333446666",
    "objects": "db...dfe.e....f.d..........f..b....e........c...b..acb..c.baa.....a..fa.cc....e.b",
    "roomNames": [
     "Chapel",
     "Gatehouse",
     "Stables",
     "Great Hall",
     "Smithy",
     "Tower",
     "Armory"
    ],
    "people": [
     "Victor the verger",
     "Astrid the archer",
     "Bruno the bard",
     "Carl the cupbearer",
     "Dexter the doorkeeper",
     "Edith the embroiderer",
     "Felix the farrier",
     "Gus the groom",
     "Henrik the herbalist"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "next",
      "urn"
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
      3,
      "next",
      "urn"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "on",
      "bench"
     ],
     [
      6,
      "window"
     ],
     [
      7,
      "on",
      "bench"
     ],
     [
      8,
      "next",
      "bench"
     ],
     [
      8,
      "next",
      "cot"
     ]
    ],
    "solution": [
     2,
     13,
     23,
     28,
     36,
     51,
     62,
     66,
     79
    ],
    "doors": [
     [
      13,
      22
     ],
     [
      22,
      23
     ],
     [
      28,
      37
     ],
     [
      31,
      40
     ],
     [
      15,
      24
     ],
     [
      32,
      41
     ],
     [
      47,
      48
     ],
     [
      40,
      41
     ],
     [
      76,
      77
     ],
     [
      51,
      60
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      17,
      "r"
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
      72,
      "l"
     ]
    ],
    "tries": 1,
    "rules": [
     "ranks"
    ],
    "court": [
     4,
     6
    ],
    "rank": "kccccckkk",
    "group": 1
   },
   {
    "size": 10,
    "rooms": "0011112222001111222200111122220011112222333344445533334444556666444455666644445566667777776666777777",
    "objects": ".a.....a..cbd.c.....ef.b.a.ed.a...b....c.e.f..d......e.......e..f.a....ccc....deed.....d...d......f.",
    "roomNames": [
     "Smithy",
     "Stables",
     "Tower",
     "Kitchen",
     "Courtyard",
     "Great Hall",
     "Chapel",
     "Gatehouse"
    ],
    "people": [
     "Astrid the alchemist",
     "Vera the vintner",
     "Bruno the bard",
     "Cora the cupbearer",
     "Dora the doorkeeper",
     "Ena the envoy",
     "Frank the farrier",
     "Grace the glassmaker",
     "Hugo the herald",
     "Isla the illuminator"
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
      "next",
      "swords"
     ],
     [
      3,
      "next",
      "cot"
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
      6,
      "next",
      "urn"
     ],
     [
      6,
      "next",
      "bench"
     ],
     [
      7,
      "same",
      6
     ],
     [
      8,
      "next",
      "candles"
     ],
     [
      9,
      "window"
     ]
    ],
    "solution": [
     4,
     19,
     26,
     33,
     48,
     51,
     65,
     77,
     82,
     90
    ],
    "doors": [
     [
      11,
      12
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
      33,
      43
     ],
     [
      34,
      44
     ],
     [
      37,
      47
     ],
     [
      38,
      48
     ],
     [
      53,
      54
     ],
     [
      52,
      62
     ],
     [
      47,
      48
     ],
     [
      73,
      74
     ],
     [
      75,
      85
     ],
     [
      78,
      88
     ],
     [
      83,
      84
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      39,
      "r"
     ],
     [
      69,
      "r"
     ],
     [
      90,
      "b"
     ],
     [
      93,
      "b"
     ],
     [
      94,
      "b"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "roomCount",
      2,
      2
     ],
     [
      "alone",
      null,
      2
     ],
     [
      "nextCount",
      "candles",
      2
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     2,
     4
    ],
    "rank": "cnkccckkck",
    "group": 1
   },
   {
    "size": 11,
    "rooms": "0001122222200011222222000112222220001122222233331144444333311444443333114444455566667777555666677775556666777755566667777",
    "objects": "db.afc....c..a......fae...e......f.b.d.....b.f.d....fa..b.a.b.ba.b.a.ce...a.........ea...aae.......d.d.d.b...f..f...d..fe",
    "roomNames": [
     "Solar",
     "Tower",
     "Great Hall",
     "Gatehouse",
     "Throne Room",
     "Stables",
     "Kitchen",
     "Dungeon"
    ],
    "people": [
     "Arthur the alchemist",
     "Bea the baker",
     "Viola the vintner",
     "Celia the cupbearer",
     "Dmitri the doorkeeper",
     "Edgar the embroiderer",
     "Fiona the farrier",
     "Grace the glassmaker",
     "Hugo the herald",
     "Isla the illuminator",
     "Jasper the juggler"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "next",
      "bench"
     ],
     [
      0,
      "next",
      "cot"
     ],
     [
      1,
      "next",
      "bench"
     ],
     [
      1,
      "same",
      4
     ],
     [
      1,
      "same",
      5
     ],
     [
      2,
      "row",
      2
     ],
     [
      3,
      "col",
      6
     ],
     [
      4,
      "next",
      "candles"
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "alone"
     ],
     [
      7,
      "next",
      "bench"
     ],
     [
      8,
      "row",
      8
     ],
     [
      9,
      "next",
      "bench"
     ],
     [
      10,
      "same",
      8
     ]
    ],
    "solution": [
     2,
     14,
     29,
     39,
     48,
     60,
     66,
     86,
     98,
     100,
     118
    ],
    "doors": [
     [
      13,
      14
     ],
     [
      33,
      44
     ],
     [
      38,
      49
     ],
     [
      69,
      70
     ],
     [
      60,
      61
     ],
     [
      70,
      81
     ],
     [
      43,
      54
     ],
     [
      67,
      78
     ],
     [
      69,
      80
     ],
     [
      72,
      83
     ],
     [
      73,
      84
     ],
     [
      79,
      80
     ],
     [
      94,
      95
     ]
    ],
    "windows": [
     [
      5,
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
      10,
      "r"
     ],
     [
      44,
      "l"
     ],
     [
      113,
      "b"
     ],
     [
      114,
      "b"
     ]
    ],
    "tries": 1,
    "facts": [
     [
      "nextCount",
      "urn",
      2
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     1,
     5
    ],
    "rank": "cnkckkckknc",
    "group": 1
   },
   {
    "size": 12,
    "rooms": "001111222333001111222333001111222333004444222333004444222333555555666666555555666666555555666666777777888888777777888888777777888888777777888888",
    "objects": ".e.d...de.a.....e..c.a..b............e.de...c.a..ea..af..ecb...a.f.bac..............b....f...............f......def..a.b...........a............",
    "roomNames": [
     "Solar",
     "Chapel",
     "Throne Room",
     "Kitchen",
     "Tower",
     "Stables",
     "Great Hall",
     "Dungeon",
     "Courtyard"
    ],
    "people": [
     "Albert the alchemist",
     "Bella the bard",
     "Clara the cupbearer",
     "Dexter the doorkeeper",
     "Elsa the envoy",
     "Vivian the vintner",
     "Freya the farrier",
     "Gus the groom",
     "Henrik the herbalist",
     "Ivo the illuminator",
     "Jutta the jester",
     "Klaus the keykeeper"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "next",
      "candles"
     ],
     [
      1,
      "same",
      2
     ],
     [
      2,
      "next",
      "bench"
     ],
     [
      3,
      "next",
      "swords"
     ],
     [
      4,
      "next",
      "barrel"
     ],
     [
      5,
      "next",
      "bench"
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "next",
      "cot"
     ],
     [
      7,
      "alone"
     ],
     [
      8,
      "next",
      "swords"
     ],
     [
      9,
      "next",
      "candles"
     ],
     [
      10,
      "same",
      8
     ],
     [
      11,
      "window"
     ]
    ],
    "solution": [
     2,
     23,
     34,
     45,
     56,
     64,
     72,
     90,
     101,
     111,
     121,
     139
    ],
    "doors": [
     [
      25,
      26
     ],
     [
      37,
      38
     ],
     [
      49,
      61
     ],
     [
      5,
      6
     ],
     [
      26,
      38
     ],
     [
      20,
      21
     ],
     [
      41,
      42
     ],
     [
      54,
      66
     ],
     [
      57,
      69
     ],
     [
      52,
      64
     ],
     [
      89,
      90
     ],
     [
      86,
      98
     ],
     [
      93,
      105
     ],
     [
      137,
      138
     ]
    ],
    "windows": [
     [
      47,
      "r"
     ],
     [
      48,
      "l"
     ],
     [
      60,
      "l"
     ],
     [
      119,
      "r"
     ],
     [
      132,
      "l"
     ],
     [
      134,
      "b"
     ],
     [
      139,
      "b"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "nextCount",
      "barrel",
      1
     ],
     [
      "touch",
      null,
      2
     ],
     [
      "corner",
      null,
      4
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     2,
     3,
     7
    ],
    "rank": "cnnnnccknnnk",
    "group": 1
   },
   {
    "size": 4,
    "rooms": "0011001122222222",
    "objects": "b.....a..b.a...b",
    "roomNames": [
     "Kitchen",
     "Armory",
     "Courtyard"
    ],
    "people": [
     "Alma the archer",
     "Vivian the vintner",
     "Bea the baker",
     "Cedric the cupbearer"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "on",
      "cot"
     ],
     [
      2,
      "same",
      3
     ],
     [
      3,
      "on",
      "cot"
     ]
    ],
    "solution": [
     0,
     5,
     10,
     15
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
      7,
      "r"
     ]
    ],
    "tries": 3,
    "rules": [
     "ranks"
    ],
    "court": [
     0
    ],
    "rank": "kkck",
    "group": 2
   },
   {
    "size": 5,
    "rooms": "0001100011000112223322233",
    "objects": ".b.aa..db..fb..........c.",
    "roomNames": [
     "Gatehouse",
     "Great Hall",
     "Kitchen",
     "Dungeon"
    ],
    "people": [
     "Vince the vintner",
     "Alma the archer",
     "Bella the bard",
     "Cora the cupbearer",
     "Daisy the doorkeeper"
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
      "alone"
     ],
     [
      4,
      "window"
     ]
    ],
    "solution": [
     1,
     8,
     12,
     19,
     20
    ],
    "doors": [
     [
      12,
      13
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
      4,
      "r"
     ],
     [
      5,
      "l"
     ],
     [
      20,
      "b"
     ]
    ],
    "tries": 3,
    "facts": [
     [
      "touch",
      null,
      0
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     3
    ],
    "rank": "ccckk",
    "group": 2
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
    "rank": "ckccnc",
    "tries": 3,
    "group": 2
   },
   {
    "size": 7,
    "rooms": "0000111000011122221112222111333333344443334444333",
    "objects": ".....f.abac.ac..d.a.cb.a.....c..e....d..de.......",
    "roomNames": [
     "Armory",
     "Dungeon",
     "Chapel",
     "Courtyard",
     "Kitchen"
    ],
    "people": [
     "Arthur the archer",
     "Bella the baker",
     "Vivian the verger",
     "Celia the chronicler",
     "Dmitri the dancer",
     "Edgar the envoy",
     "Flora the falconer"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "same",
      1
     ],
     [
      1,
      "on",
      "bench"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "next",
      "barrel"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "next",
      "candles"
     ],
     [
      5,
      "col",
      3
     ],
     [
      6,
      "next",
      "candles"
     ]
    ],
    "solution": [
     1,
     7,
     18,
     27,
     33,
     38,
     44
    ],
    "doors": [
     [
      10,
      11
     ],
     [
      9,
      16
     ],
     [
      17,
      18
     ],
     [
      26,
      33
     ],
     [
      23,
      30
     ],
     [
      45,
      46
     ]
    ],
    "windows": [
     [
      4,
      "t"
     ],
     [
      14,
      "l"
     ],
     [
      21,
      "l"
     ],
     [
      28,
      "l"
     ]
    ],
    "tries": 3,
    "rules": [
     "ranks"
    ],
    "court": [
     1
    ],
    "rank": "cknkkck",
    "group": 2
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
    "rank": "knknckcc",
    "tries": 5,
    "group": 2
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
    "rank": "kkckckcck",
    "tries": 5,
    "group": 2
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
    "rank": "kcncnccckn",
    "tries": 3,
    "group": 2
   },
   {
    "size": 11,
    "rooms": "0001111222200011112222000333322220003333444400033334444555555444445555554444455666677777556666777775566667777755666677777",
    "objects": "................a.ebab.....dee....a.ae.a...d.....ac...........f...d.be..e..d.....bcb..ce......a...cfa.a...bfe....c.be...c",
    "roomNames": [
     "Great Hall",
     "Smithy",
     "Stables",
     "Throne Room",
     "Chapel",
     "Courtyard",
     "Solar",
     "Armory"
    ],
    "people": [
     "Ada the alchemist",
     "Birgit the baker",
     "Carl the cupbearer",
     "Della the dancer",
     "Elsa the envoy",
     "Viola the verger",
     "Freya the falconer",
     "Gus the groom",
     "Henrik the herald",
     "Ivo the innkeeper",
     "Jasper the jester"
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
      "row",
      1
     ],
     [
      1,
      "col",
      0
     ],
     [
      2,
      "next",
      "candles"
     ],
     [
      3,
      "next",
      "barrel"
     ],
     [
      4,
      "next",
      "urn"
     ],
     [
      6,
      "row",
      6
     ],
     [
      7,
      "next",
      "cot"
     ],
     [
      8,
      "row",
      8
     ],
     [
      8,
      "same",
      10
     ],
     [
      9,
      "on",
      "bench"
     ],
     [
      10,
      "next",
      "urn"
     ]
    ],
    "solution": [
     2,
     11,
     26,
     39,
     51,
     65,
     71,
     80,
     97,
     100,
     118
    ],
    "doors": [
     [
      13,
      14
     ],
     [
      46,
      47
     ],
     [
      44,
      55
     ],
     [
      17,
      18
     ],
     [
      17,
      28
     ],
     [
      28,
      29
     ],
     [
      32,
      43
     ],
     [
      39,
      40
     ],
     [
      47,
      58
     ],
     [
      60,
      61
     ],
     [
      72,
      83
     ],
     [
      78,
      79
     ],
     [
      104,
      105
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      4,
      "t"
     ],
     [
      32,
      "r"
     ],
     [
      54,
      "r"
     ],
     [
      98,
      "r"
     ],
     [
      99,
      "l"
     ],
     [
      109,
      "r"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "roomCount",
      7,
      2
     ],
     [
      "nextCount",
      "barrel",
      2
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     3,
     5
    ],
    "rank": "kknncckccnk",
    "group": 2
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
    "rank": "nkkkckknknkn",
    "tries": 5,
    "group": 2
   },
   {
    "size": 4,
    "rooms": "0011001122222222",
    "objects": "...d......a...a.",
    "roomNames": [
     "Dungeon",
     "Chapel",
     "Kitchen"
    ],
    "people": [
     "Astrid the archer",
     "Vince the vintner",
     "Bea the baker",
     "Cedric the chronicler"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "door"
     ],
     [
      2,
      "next",
      "bench"
     ],
     [
      3,
      "same",
      2
     ]
    ],
    "solution": [
     2,
     7,
     9,
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
      13,
      "b"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "windowCount",
      null,
      1
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     1
    ],
    "rank": "nkkk",
    "group": 3
   },
   {
    "size": 5,
    "rooms": "0000011122111223333333333",
    "objects": "...ad...a.c...cb....a.aa.",
    "roomNames": [
     "Armory",
     "Tower",
     "Stables",
     "Great Hall"
    ],
    "people": [
     "Alma the alchemist",
     "Bea the bard",
     "Carl the cupbearer",
     "Vera the vintner",
     "Dexter the doorkeeper"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "notRoom",
      1
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "next",
      "bench"
     ],
     [
      4,
      "col",
      4
     ]
    ],
    "solution": [
     0,
     6,
     13,
     17,
     24
    ],
    "doors": [
     [
      1,
      6
     ],
     [
      4,
      9
     ],
     [
      12,
      13
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
      4,
      "t"
     ],
     [
      20,
      "l"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "furniture",
      null,
      0
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
     2
    ],
    "rank": "ckkcc",
    "group": 3
   },
   {
    "size": 6,
    "rooms": "000011000011223311223311224444224444",
    "objects": "......d.d.....dd...........d.f.b.b..",
    "roomNames": [
     "Tower",
     "Stables",
     "Armory",
     "Solar",
     "Dungeon"
    ],
    "people": [
     "Alma the archer",
     "Bella the bard",
     "Celia the chronicler",
     "Dora the dancer",
     "Vera the verger",
     "Edgar the envoy"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "col",
      4
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
      "alone"
     ],
     [
      4,
      "next",
      "candles"
     ],
     [
      5,
      "window"
     ]
    ],
    "solution": [
     4,
     7,
     17,
     18,
     26,
     33
    ],
    "doors": [
     [
      9,
      10
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
      15,
      16
     ],
     [
      22,
      28
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
      3,
      "t"
     ],
     [
      23,
      "r"
     ],
     [
      30,
      "b"
     ],
     [
      33,
      "b"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "roomCount",
      0,
      1
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     1
    ],
    "rank": "nknccc",
    "group": 3
   },
   {
    "size": 7,
    "rooms": "0001111000111100011112222333222233344443334444333",
    "objects": "...fe.fa.....de..cca...c.......ec.a...ced.e......",
    "roomNames": [
     "Smithy",
     "Chapel",
     "Tower",
     "Gatehouse",
     "Stables"
    ],
    "people": [
     "Alma the archer",
     "Basil the bard",
     "Vince the verger",
     "Clara the chronicler",
     "Della the doorkeeper",
     "Elias the envoy",
     "Freya the falconer"
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
      "alone"
     ],
     [
      2,
      "window"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "same",
      3
     ],
     [
      5,
      "col",
      1
     ],
     [
      6,
      "next",
      "swords"
     ],
     [
      6,
      "alone"
     ]
    ],
    "solution": [
     5,
     9,
     20,
     24,
     28,
     36,
     46
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
      20,
      27
     ],
     [
      24,
      25
     ],
     [
      30,
      37
     ],
     [
      45,
      46
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      20,
      "r"
     ],
     [
      47,
      "b"
     ],
     [
      48,
      "r"
     ]
    ],
    "tries": 8,
    "facts": [
     [
      "onCount",
      "bench",
      0
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     0
    ],
    "rank": "cnkkkkk",
    "group": 3
   },
   {
    "size": 8,
    "rooms": "0000011100000111000001112223334422233344222333442225555522255555",
    "objects": "...f......fb..bc..b..c..da..f......a.e...a.d.b.a....f...ab..a.f.",
    "roomNames": [
     "Throne Room",
     "Smithy",
     "Gatehouse",
     "Dungeon",
     "Armory",
     "Tower"
    ],
    "people": [
     "Astrid the archer",
     "Bella the baker",
     "Cedric the cupbearer",
     "Dora the dancer",
     "Elsa the embroiderer",
     "Freya the farrier",
     "Vivian the verger",
     "Gus the groom"
    ],
    "victim": 6,
    "clues": [
     [
      0,
      "window"
     ],
     [
      1,
      "on",
      "cot"
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
      "same",
      4
     ],
     [
      4,
      "next",
      "bench"
     ],
     [
      5,
      "next",
      "candles"
     ],
     [
      7,
      "next",
      "bench"
     ]
    ],
    "solution": [
     7,
     14,
     16,
     26,
     33,
     44,
     53,
     59
    ],
    "doors": [
     [
      12,
      13
     ],
     [
      17,
      25
     ],
     [
      20,
      28
     ],
     [
      21,
      29
     ],
     [
      23,
      31
     ],
     [
      26,
      27
     ],
     [
      58,
      59
     ],
     [
      45,
      46
     ],
     [
      44,
      52
     ],
     [
      47,
      55
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      7,
      "t"
     ],
     [
      7,
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
    "tries": 10,
    "facts": [
     [
      "corner",
      null,
      4
     ],
     [
      "nextCount",
      "urn",
      1
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     0,
     5
    ],
    "rank": "cckkcknk",
    "group": 3
   },
   {
    "size": 9,
    "rooms": "011223344011223344011223344011223344011223333011223333000555666000555666000555666",
    "objects": "c.d..ca.a....b...e.e.c..e..aa.a.b...e.e.....c..........dfc....e.c.a....bab......d",
    "roomNames": [
     "Chapel",
     "Stables",
     "Dungeon",
     "Kitchen",
     "Courtyard",
     "Gatehouse",
     "Smithy"
    ],
    "people": [
     "Ada the alchemist",
     "Bea the bard",
     "Celia the cupbearer",
     "Dexter the dancer",
     "Edith the envoy",
     "Viola the vintner",
     "Frank the farrier",
     "Gwen the glassmaker",
     "Hana the herbalist"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "notRoom",
      1
     ],
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
      "next",
      "barrel"
     ],
     [
      2,
      "same",
      4
     ],
     [
      3,
      "next",
      "swords"
     ],
     [
      4,
      "next",
      "bench"
     ],
     [
      5,
      "door"
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
      "same",
      7
     ]
    ],
    "solution": [
     8,
     15,
     22,
     28,
     39,
     52,
     59,
     65,
     72
    ],
    "doors": [
     [
      47,
      56
     ],
     [
      65,
      66
     ],
     [
      11,
      12
     ],
     [
      13,
      14
     ],
     [
      49,
      58
     ],
     [
      33,
      34
     ],
     [
      50,
      59
     ],
     [
      52,
      61
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
      54,
      "l"
     ],
     [
      76,
      "b"
     ],
     [
      77,
      "b"
     ],
     [
      80,
      "r"
     ]
    ],
    "tries": 10,
    "facts": [
     [
      "touch",
      null,
      0
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     2,
     5
    ],
    "rank": "kknckcncc",
    "group": 3
   },
   {
    "size": 10,
    "rooms": "0000001111000000111122333311112233334444223333444422333344442255566666225556666622555777772255577777",
    "objects": "..............b.....fb.......b...d.......cb.......ba..fe......cc.....e.a.bb.d...b..a.a....e.....a...",
    "roomNames": [
     "Chapel",
     "Kitchen",
     "Armory",
     "Stables",
     "Throne Room",
     "Gatehouse",
     "Solar",
     "Great Hall"
    ],
    "people": [
     "Alma the archer",
     "Basil the baker",
     "Cora the chronicler",
     "Viola the verger",
     "Dmitri the dancer",
     "Elsa the envoy",
     "Freya the farrier",
     "Grace the glassmaker",
     "Hana the herbalist",
     "Ines the illuminator"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      1,
      "col",
      8
     ],
     [
      2,
      "next",
      "urn"
     ],
     [
      3,
      "next",
      "cot"
     ],
     [
      4,
      "next",
      "swords"
     ],
     [
      5,
      "next",
      "bench"
     ],
     [
      6,
      "same",
      8
     ],
     [
      7,
      "alone"
     ],
     [
      8,
      "on",
      "bench"
     ],
     [
      9,
      "on",
      "bench"
     ]
    ],
    "solution": [
     7,
     18,
     21,
     32,
     45,
     50,
     64,
     79,
     83,
     96
    ],
    "doors": [
     [
      15,
      16
     ],
     [
      10,
      20
     ],
     [
      12,
      22
     ],
     [
      25,
      26
     ],
     [
      28,
      38
     ],
     [
      51,
      52
     ],
     [
      81,
      82
     ],
     [
      55,
      56
     ],
     [
      53,
      63
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
      84,
      85
     ],
     [
      77,
      87
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      5,
      "t"
     ],
     [
      20,
      "l"
     ],
     [
      29,
      "r"
     ],
     [
      90,
      "b"
     ],
     [
      99,
      "r"
     ]
    ],
    "tries": 9,
    "facts": [
     [
      "roomCount",
      3,
      2
     ],
     [
      "nextCount",
      "swords",
      2
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     6,
     7
    ],
    "rank": "ckkckcckcn",
    "group": 3
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
    "rank": "ncnckcckccc",
    "tries": 10,
    "group": 3
   },
   {
    "size": 12,
    "rooms": "000001112222000001112222000001112222333331112222333331112222333331112222444556666777444556666777444556666777444556666777444558888777444558888777",
    "objects": "a..fc......e........e...b.c..f.ca...c.....fba...............b........c.......ca...f.bf..ab..f..dfc....b.....dbb.....cd....b...ba......aa.....e..",
    "roomNames": [
     "Smithy",
     "Dungeon",
     "Courtyard",
     "Tower",
     "Kitchen",
     "Solar",
     "Stables",
     "Throne Room",
     "Gatehouse"
    ],
    "people": [
     "Alma the alchemist",
     "Vera the verger",
     "Bruno the bard",
     "Carl the chronicler",
     "Dexter the doorkeeper",
     "Edith the embroiderer",
     "Freya the farrier",
     "Grace the groom",
     "Hana the herald",
     "Ivy the illuminator",
     "Jade the jester",
     "Kitty the kennel keeper"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "same",
      3
     ],
     [
      1,
      "next",
      "swords"
     ],
     [
      2,
      "next",
      "urn"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "next",
      "barrel"
     ],
     [
      5,
      "room",
      3
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "next",
      "cot"
     ],
     [
      7,
      "on",
      "bench"
     ],
     [
      7,
      "alone"
     ],
     [
      8,
      "next",
      "barrel"
     ],
     [
      9,
      "next",
      "candles"
     ],
     [
      10,
      "next",
      "cot"
     ],
     [
      10,
      "row",
      10
     ],
     [
      11,
      "door"
     ]
    ],
    "solution": [
     7,
     23,
     30,
     41,
     57,
     63,
     72,
     88,
     98,
     118,
     121,
     140
    ],
    "doors": [
     [
      16,
      17
     ],
     [
      26,
      38
     ],
     [
      19,
      20
     ],
     [
      40,
      41
     ],
     [
      65,
      77
     ],
     [
      68,
      80
     ],
     [
      70,
      82
     ],
     [
      62,
      74
     ],
     [
      63,
      75
     ],
     [
      134,
      135
     ],
     [
      112,
      113
     ],
     [
      136,
      137
     ],
     [
      92,
      93
     ],
     [
      116,
      128
     ],
     [
      140,
      141
     ]
    ],
    "windows": [
     [
      8,
      "t"
     ],
     [
      11,
      "r"
     ],
     [
      59,
      "r"
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
      119,
      "r"
     ],
     [
      138,
      "b"
     ]
    ],
    "tries": 7,
    "facts": [
     [
      "roomCount",
      6,
      0
     ]
    ],
    "rules": [
     "ranks"
    ],
    "court": [
     1,
     2,
     5
    ],
    "rank": "nnnnnkcnkckc",
    "group": 3
   }
  ]
 },
 {
  "theme": "tomb",
  "levels": [
   {
    "size": 4,
    "rooms": "0000000011221122",
    "objects": "f.c..d...baa....",
    "roomNames": [
     "Statue Hall",
     "Well Shaft",
     "Scribe Room"
    ],
    "people": [
     "Albert the architect",
     "Bruno the brewer",
     "Carl the carpenter",
     "Vera the vintner"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "next",
      "urn"
     ],
     [
      1,
      "door"
     ],
     [
      2,
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
      4,
      8
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
      15,
      "r"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "doorCount",
      null,
      1
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": "....C..L........",
    "group": 0
   },
   {
    "size": 5,
    "rooms": "0011100111222332223322233",
    "objects": "b........a.......c.f..d..",
    "roomNames": [
     "Scribe Room",
     "Burial Chamber",
     "Antechamber",
     "Granary"
    ],
    "people": [
     "Albert the astrologer",
     "Basil the brewer",
     "Vivian the vizier",
     "Carl the chanter",
     "Della the dancer"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "window"
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "next",
      "urn"
     ],
     [
      3,
      "notRoom",
      0
     ],
     [
      4,
      "row",
      4
     ],
     [
      4,
      "alone"
     ]
    ],
    "solution": [
     4,
     6,
     12,
     15,
     23
    ],
    "doors": [
     [
      1,
      2
     ],
     [
      6,
      11
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
      12,
      13
     ]
    ],
    "windows": [
     [
      4,
      "r"
     ],
     [
      14,
      "r"
     ],
     [
      22,
      "b"
     ]
    ],
    "tries": 0,
    "rules": [
     "glyphs"
    ],
    "tags": ".....L.L....C.......C....",
    "group": 0
   },
   {
    "size": 6,
    "rooms": "000011000011223333223333224444224444",
    "objects": "b.ad.e..d.b..c.de............e..bf..",
    "roomNames": [
     "Treasury",
     "Scribe Room",
     "Shrine",
     "Hall of Pillars",
     "Burial Chamber"
    ],
    "people": [
     "Alma the astrologer",
     "Bruno the boat builder",
     "Vince the vintner",
     "Cora the chanter",
     "Dora the diviner",
     "Edgar the envoy"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "on",
      "couch"
     ],
     [
      1,
      "next",
      "rubble"
     ],
     [
      2,
      "next",
      "statue"
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
      "jar"
     ],
     [
      5,
      "window"
     ]
    ],
    "solution": [
     0,
     11,
     14,
     22,
     27,
     31
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
      8,
      14
     ],
     [
      10,
      16
     ],
     [
      19,
      20
     ],
     [
      25,
      26
     ],
     [
      22,
      28
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
      29,
      "r"
     ],
     [
      31,
      "b"
     ]
    ],
    "tries": 0,
    "rules": [
     "glyphs"
    ],
    "tags": "...........L..C.......C...CL...L....",
    "group": 0
   },
   {
    "size": 7,
    "rooms": "0011222001122200112220011222333344433334443333444",
    "objects": ".b.b...ba...a..cd.ceb.....a.a..b...e......eb.f..a",
    "roomNames": [
     "Sun Court",
     "Granary",
     "Antechamber",
     "Burial Chamber",
     "Hall of Pillars"
    ],
    "people": [
     "Astrid the architect",
     "Birgit the boat builder",
     "Carl the carpenter",
     "Dmitri the diviner",
     "Ena the envoy",
     "Felix the fanbearer",
     "Vera the vizier"
    ],
    "victim": 6,
    "clues": [
     [
      0,
      "next",
      "couch"
     ],
     [
      1,
      "next",
      "urn"
     ],
     [
      2,
      "next",
      "statue"
     ],
     [
      3,
      "next",
      "urn"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "next",
      "stool"
     ],
     [
      6,
      "col",
      5
     ]
    ],
    "solution": [
     2,
     8,
     17,
     25,
     28,
     41,
     47
    ],
    "doors": [
     [
      15,
      16
     ],
     [
      21,
      28
     ],
     [
      24,
      25
     ],
     [
      24,
      31
     ],
     [
      26,
      33
     ],
     [
      45,
      46
     ]
    ],
    "windows": [
     [
      0,
      "t"
     ],
     [
      6,
      "t"
     ],
     [
      42,
      "b"
     ],
     [
      44,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "windowCount",
      null,
      0
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": "C................C......CL...............C.......",
    "group": 0
   },
   {
    "size": 8,
    "rooms": "0001112200011122000111220001112233344455333444553334445533344455",
    "objects": "..c..bbaa....bc...d.af.b...bc..f.d...b..b...a....ae........a....",
    "roomNames": [
     "Well Shaft",
     "Scribe Room",
     "Antechamber",
     "Hall of Pillars",
     "Shrine",
     "Treasury"
    ],
    "people": [
     "Alma the architect",
     "Birgit the boat builder",
     "Cora the carpenter",
     "Dora the diviner",
     "Edgar the envoy",
     "Flora the fanbearer",
     "Vera the vizier",
     "Greta the goldsmith"
    ],
    "victim": 6,
    "clues": [
     [
      0,
      "same",
      3
     ],
     [
      1,
      "same",
      2
     ],
     [
      2,
      "next",
      "statue"
     ],
     [
      3,
      "next",
      "urn"
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
      "rubble"
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
      "door"
     ]
    ],
    "solution": [
     4,
     8,
     17,
     29,
     35,
     42,
     55,
     62
    ],
    "doors": [
     [
      18,
      19
     ],
     [
      24,
      32
     ],
     [
      13,
      14
     ],
     [
      27,
      35
     ],
     [
      31,
      39
     ],
     [
      42,
      43
     ],
     [
      61,
      62
     ]
    ],
    "windows": [
     [
      1,
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
      55,
      "r"
     ],
     [
      59,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "edge",
      null,
      4
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": "................................L.....................CC......C.",
    "group": 0
   },
   {
    "size": 9,
    "rooms": "000001111000001111000001111222222333222222333444555333444555666444555666444555666",
    "objects": "..ba.b.f..e.....b.ed.da....a...e......cb..........d.....a...........bf.bc..c..b..",
    "roomNames": [
     "Shrine",
     "Scribe Room",
     "Statue Hall",
     "Boat Pit",
     "Granary",
     "Sun Court",
     "Antechamber"
    ],
    "people": [
     "Ada the astrologer",
     "Basil the boat builder",
     "Celia the carpenter",
     "Daisy the dancer",
     "Ena the envoy",
     "Flora the fanbearer",
     "Grace the guard",
     "Viola the vintner",
     "Hana the herder"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "on",
      "couch"
     ],
     [
      1,
      "next",
      "rubble"
     ],
     [
      2,
      "same",
      0
     ],
     [
      3,
      "row",
      3
     ],
     [
      4,
      "col",
      7
     ],
     [
      5,
      "next",
      "statue"
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
      "col",
      0
     ],
     [
      8,
      "next",
      "urn"
     ]
    ],
    "solution": [
     5,
     11,
     24,
     35,
     43,
     49,
     57,
     63,
     73
    ],
    "doors": [
     [
      22,
      23
     ],
     [
      22,
      31
     ],
     [
      23,
      32
     ],
     [
      25,
      34
     ],
     [
      32,
      33
     ],
     [
      38,
      47
     ],
     [
      41,
      50
     ],
     [
      50,
      51
     ],
     [
      51,
      60
     ],
     [
      56,
      57
     ],
     [
      77,
      78
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
      5,
      "t"
     ],
     [
      76,
      "b"
     ],
     [
      78,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "roomCount",
      6,
      0
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": "...........L............C........L.........................L.............C.......",
    "group": 0
   },
   {
    "size": 10,
    "rooms": "0000001122000000112233333311223333331122444411112244441155224444115566444411556677777755667777775566",
    "objects": "a.d..a.a.ae...b.c....b......f.d.b...ea.......e...a.da..cd...a....b.cc....f.e..fea......b.a.........f",
    "roomNames": [
     "Statue Hall",
     "Granary",
     "Scribe Room",
     "Burial Chamber",
     "Workshop",
     "Hall of Pillars",
     "Boat Pit",
     "Shrine"
    ],
    "people": [
     "Vince the vintner",
     "Alma the architect",
     "Bea the brewer",
     "Clara the chanter",
     "Della the diviner",
     "Elias the embalmer",
     "Fiona the fanbearer",
     "Grace the guard",
     "Hilda the harpist",
     "Ivo the inspector"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "next",
      "statue"
     ],
     [
      1,
      "next",
      "rubble"
     ],
     [
      1,
      "row",
      1
     ],
     [
      2,
      "row",
      2
     ],
     [
      3,
      "next",
      "jar"
     ],
     [
      4,
      "next",
      "rubble"
     ],
     [
      5,
      "next",
      "stool"
     ],
     [
      5,
      "next",
      "statue"
     ],
     [
      6,
      "same",
      5
     ],
     [
      7,
      "next",
      "urn"
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
     3,
     11,
     29,
     38,
     46,
     50,
     62,
     77,
     84,
     95
    ],
    "doors": [
     [
      5,
      6
     ],
     [
      10,
      20
     ],
     [
      17,
      18
     ],
     [
      35,
      36
     ],
     [
      53,
      54
     ],
     [
      46,
      56
     ],
     [
      74,
      84
     ],
     [
      57,
      58
     ],
     [
      59,
      69
     ],
     [
      31,
      41
     ],
     [
      72,
      82
     ],
     [
      97,
      98
     ],
     [
      95,
      96
     ]
    ],
    "windows": [
     [
      9,
      "t"
     ],
     [
      10,
      "l"
     ],
     [
      79,
      "r"
     ],
     [
      80,
      "l"
     ],
     [
      95,
      "b"
     ],
     [
      97,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "roomCount",
      2,
      2
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": "......C..................C...............L....L.C.......................C...........................",
    "group": 0
   },
   {
    "size": 4,
    "rooms": "0011001122222222",
    "objects": ".e.aebfa....ab.e",
    "roomNames": [
     "Scribe Room",
     "Boat Pit",
     "Treasury"
    ],
    "people": [
     "Albert the astrologer",
     "Bruno the boat builder",
     "Clara the carpenter",
     "Viola the vintner"
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
      "couch"
     ],
     [
      2,
      "door"
     ]
    ],
    "solution": [
     2,
     5,
     11,
     12
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
      8,
      "l"
     ]
    ],
    "tries": 2,
    "rules": [
     "glyphs"
    ],
    "tags": "C.........L.....",
    "group": 1
   },
   {
    "size": 5,
    "rooms": "0011100111001112233322333",
    "objects": "..e.bf...b..b.....d...b..",
    "roomNames": [
     "Workshop",
     "Antechamber",
     "Shrine",
     "Well Shaft"
    ],
    "people": [
     "Arthur the architect",
     "Bella the brewer",
     "Viola the vizier",
     "Carl the chanter",
     "Dora the diviner"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      0,
      "col",
      1
     ],
     [
      1,
      "on",
      "couch"
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
      "statue"
     ]
    ],
    "solution": [
     1,
     9,
     12,
     15,
     23
    ],
    "doors": [
     [
      11,
      12
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
      16,
      17
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      4,
      "r"
     ],
     [
      24,
      "r"
     ]
    ],
    "tries": 1,
    "rules": [
     "glyphs"
    ],
    "tags": "..............CL.......L.",
    "group": 1
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
    "tags": "....C..........C.......C..L.L..CC...",
    "tries": 2,
    "group": 1
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
    "tags": "..........C.....................C....L...........",
    "tries": 2,
    "group": 1
   },
   {
    "size": 8,
    "rooms": "0000111100001111000011110000222233332222333344445555444455554444",
    "objects": "ce.dc..........ad...b..ca......ee.......b.e........c............",
    "roomNames": [
     "Treasury",
     "Scribe Room",
     "Sun Court",
     "Burial Chamber",
     "Boat Pit",
     "Shrine"
    ],
    "people": [
     "Vince the vizier",
     "Astrid the astrologer",
     "Birgit the brewer",
     "Celia the carpenter",
     "Della the diviner",
     "Edith the embalmer",
     "Felix the fisher",
     "Gideon the guard"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "next",
      "urn"
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
      3,
      "door"
     ],
     [
      4,
      "next",
      "rubble"
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "same",
      7
     ],
     [
      7,
      "next",
      "urn"
     ],
     [
      7,
      "row",
      7
     ]
    ],
    "solution": [
     5,
     12,
     18,
     30,
     33,
     47,
     48,
     59
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      27,
      28
     ],
     [
      26,
      34
     ],
     [
      22,
      30
     ],
     [
      35,
      36
     ],
     [
      39,
      47
     ],
     [
      43,
      44
     ],
     [
      42,
      50
     ],
     [
      51,
      52
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      7,
      "t"
     ],
     [
      8,
      "l"
     ],
     [
      31,
      "r"
     ],
     [
      58,
      "b"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "nextCount",
      "statue",
      0
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": "............C.................L..LC.........C..L................",
    "group": 1
   },
   {
    "size": 9,
    "rooms": "000112222000112222000112222333114444333114444333114444333115555666665555666665555",
    "objects": "c..a.....b......db....ddb.....b......eb.b..d....ac..a...e.b...f..a..b.....b..ab..",
    "roomNames": [
     "Antechamber",
     "Granary",
     "Shrine",
     "Hall of Pillars",
     "Workshop",
     "Well Shaft",
     "Scribe Room"
    ],
    "people": [
     "Albert the architect",
     "Bea the brewer",
     "Cedric the chanter",
     "Della the diviner",
     "Elsa the embalmer",
     "Victor the vizier",
     "Freya the fanbearer",
     "Gwen the goldsmith",
     "Hazel the harpist"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "same",
      2
     ],
     [
      1,
      "same",
      0
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "next",
      "couch"
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
      "next",
      "rubble"
     ],
     [
      5,
      "col",
      1
     ],
     [
      6,
      "next",
      "urn"
     ],
     [
      7,
      "on",
      "stool"
     ],
     [
      8,
      "next",
      "couch"
     ]
    ],
    "solution": [
     6,
     14,
     25,
     35,
     36,
     46,
     58,
     65,
     75
    ],
    "doors": [
     [
      11,
      12
     ],
     [
      18,
      27
     ],
     [
      13,
      14
     ],
     [
      47,
      48
     ],
     [
      31,
      32
     ],
     [
      58,
      59
     ],
     [
      57,
      66
     ],
     [
      25,
      34
     ],
     [
      55,
      64
     ],
     [
      51,
      60
     ],
     [
      67,
      68
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      8,
      "t"
     ],
     [
      27,
      "l"
     ],
     [
      76,
      "b"
     ],
     [
      78,
      "b"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "edge",
      null,
      4
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": "..........................L.......CLC..............C..CC..............C....C.....",
    "group": 1
   },
   {
    "size": 10,
    "rooms": "0000111222000011122200001112220000111222333344444433334444445556667777555666777755566677775556667777",
    "objects": "..cee.a.d........e.....fde....a...bd....d..fa.b........a....e.ac..a...f....d.............d..b...d...",
    "roomNames": [
     "Granary",
     "Treasury",
     "Antechamber",
     "Boat Pit",
     "Shrine",
     "Hall of Pillars",
     "Scribe Room",
     "Well Shaft"
    ],
    "people": [
     "Albert the architect",
     "Birgit the boat builder",
     "Cedric the carpenter",
     "Daisy the diviner",
     "Edgar the embalmer",
     "Flora the fisher",
     "Viola the vizier",
     "Greta the guard",
     "Hilda the harpist",
     "Ivo the inspector"
    ],
    "victim": 6,
    "clues": [
     [
      0,
      "next",
      "urn"
     ],
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
      "next",
      "urn"
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
      "next",
      "stool"
     ],
     [
      7,
      "col",
      8
     ],
     [
      8,
      "row",
      8
     ],
     [
      9,
      "window"
     ]
    ],
    "solution": [
     1,
     12,
     29,
     33,
     46,
     55,
     67,
     78,
     84,
     90
    ],
    "doors": [
     [
      23,
      24
     ],
     [
      33,
      43
     ],
     [
      36,
      37
     ],
     [
      36,
      46
     ],
     [
      37,
      47
     ],
     [
      43,
      44
     ],
     [
      50,
      60
     ],
     [
      53,
      63
     ],
     [
      55,
      65
     ],
     [
      56,
      66
     ],
     [
      92,
      93
     ],
     [
      85,
      86
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
      19,
      "r"
     ],
     [
      49,
      "r"
     ],
     [
      90,
      "l"
     ],
     [
      91,
      "b"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "onCount",
      "couch",
      1
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": ".C..........................L....C......................................L........L..L...............",
    "group": 1
   },
   {
    "size": 11,
    "rooms": "0000111122200001111222000011112220000111122233334444444333344444443333355566633333555666777775556667777755566677777555666",
    "objects": "...e....ca...ac....d..fbbb..a......baaeea..a..c.f.........e.ac.........ec.d.e...fb..e.b.......e.....d...a.a...........a..",
    "roomNames": [
     "Hall of Pillars",
     "Boat Pit",
     "Well Shaft",
     "Burial Chamber",
     "Treasury",
     "Shrine",
     "Antechamber",
     "Workshop"
    ],
    "people": [
     "Arthur the astrologer",
     "Basil the boat builder",
     "Celia the chanter",
     "Dexter the dancer",
     "Victor the vizier",
     "Ena the envoy",
     "Frank the fanbearer",
     "Grace the goldsmith",
     "Hilda the herder",
     "Isla the incense maker",
     "Jutta the juggler"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "same",
      2
     ],
     [
      1,
      "next",
      "statue"
     ],
     [
      2,
      "on",
      "couch"
     ],
     [
      3,
      "on",
      "stool"
     ],
     [
      4,
      "col",
      7
     ],
     [
      5,
      "window"
     ],
     [
      6,
      "next",
      "couch"
     ],
     [
      7,
      "next",
      "urn"
     ],
     [
      7,
      "same",
      8
     ],
     [
      8,
      "next",
      "rubble"
     ],
     [
      9,
      "alone"
     ],
     [
      10,
      "window"
     ],
     [
      10,
      "alone"
     ]
    ],
    "solution": [
     1,
     20,
     24,
     36,
     51,
     65,
     70,
     83,
     93,
     107,
     110
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      35,
      46
     ],
     [
      40,
      41
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
      58,
      59
     ],
     [
      81,
      82
     ],
     [
      79,
      90
     ],
     [
      62,
      73
     ],
     [
      65,
      76
     ],
     [
      73,
      74
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
      4,
      "t"
     ],
     [
      8,
      "t"
     ],
     [
      21,
      "r"
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
      110,
      "b"
     ]
    ],
    "tries": 1,
    "facts": [
     [
      "roomCount",
      4,
      2
     ],
     [
      "roomCount",
      1,
      0
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": "..L.................L..............................C.......C.....C..L........................C...........................",
    "group": 1
   },
   {
    "size": 12,
    "rooms": "000011111222000011111222000011111222333333333222333333333222444445556666444445556666444445556666444445556666777778888888777778888888777778888888",
    "objects": "...ad....a.......ad..e..ad.a..a.....c.....a...d.......c....af....bebcf..f.d......ba.b.e.c...df..b.....c..b.e..e.e...ada..dbf...a........b.....b.",
    "roomNames": [
     "Well Shaft",
     "Statue Hall",
     "Sun Court",
     "Scribe Room",
     "Shrine",
     "Antechamber",
     "Burial Chamber",
     "Workshop",
     "Boat Pit"
    ],
    "people": [
     "Alma the architect",
     "Bea the boat builder",
     "Carl the chanter",
     "Dmitri the dancer",
     "Vera the vintner",
     "Ena the embalmer",
     "Felix the fanbearer",
     "Gideon the goldsmith",
     "Hazel the harpist",
     "Ines the inspector",
     "Juno the juggler",
     "Kira the keeper"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "on",
      "stool"
     ],
     [
      0,
      "row",
      0
     ],
     [
      1,
      "next",
      "statue"
     ],
     [
      2,
      "next",
      "rubble"
     ],
     [
      3,
      "col",
      8
     ],
     [
      4,
      "row",
      4
     ],
     [
      5,
      "window"
     ],
     [
      6,
      "next",
      "jar"
     ],
     [
      7,
      "same",
      6
     ],
     [
      7,
      "on",
      "couch"
     ],
     [
      8,
      "next",
      "urn"
     ],
     [
      8,
      "col",
      5
     ],
     [
      9,
      "same",
      10
     ],
     [
      10,
      "next",
      "stool"
     ],
     [
      10,
      "next",
      "couch"
     ],
     [
      11,
      "on",
      "couch"
     ]
    ],
    "solution": [
     3,
     19,
     33,
     44,
     50,
     71,
     73,
     84,
     101,
     114,
     130,
     136
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      27,
      39
     ],
     [
      8,
      9
     ],
     [
      29,
      41
     ],
     [
      56,
      57
     ],
     [
      59,
      71
     ],
     [
      48,
      60
     ],
     [
      53,
      65
     ],
     [
      56,
      68
     ],
     [
      88,
      89
     ],
     [
      99,
      111
     ],
     [
      103,
      104
     ],
     [
      101,
      113
     ],
     [
      104,
      116
     ],
     [
      112,
      113
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
      11,
      "t"
     ],
     [
      24,
      "l"
     ],
     [
      36,
      "l"
     ],
     [
      71,
      "r"
     ],
     [
      119,
      "r"
     ]
    ],
    "tries": 2,
    "rules": [
     "glyphs"
    ],
    "tags": "................C..LL.............................C.....C................C........................C..L............C...............C.............",
    "group": 1
   },
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
    "tags": "..C.....C..L..L.",
    "tries": 5,
    "group": 2
   },
   {
    "size": 5,
    "rooms": "0001100011223332233322333",
    "objects": "..a...........ed.be..ba..",
    "roomNames": [
     "Statue Hall",
     "Well Shaft",
     "Workshop",
     "Burial Chamber"
    ],
    "people": [
     "Ada the astrologer",
     "Bea the brewer",
     "Carl the carpenter",
     "Viola the vintner",
     "Dmitri the diviner"
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
      "rubble"
     ],
     [
      4,
      "row",
      4
     ]
    ],
    "solution": [
     4,
     7,
     13,
     16,
     20
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
      7,
      12
     ],
     [
      8,
      13
     ],
     [
      21,
      22
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      5,
      "l"
     ],
     [
      19,
      "r"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "doorCount",
      null,
      2
     ],
     [
      "furniture",
      null,
      0
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": ".......L........C...C....",
    "group": 2
   },
   {
    "size": 6,
    "rooms": "001122001122001122001122334444334444",
    "objects": "..d.f......c.........a.....eb.c....e",
    "roomNames": [
     "Shrine",
     "Scribe Room",
     "Granary",
     "Antechamber",
     "Boat Pit"
    ],
    "people": [
     "Astrid the astrologer",
     "Basil the boat builder",
     "Viola the vizier",
     "Celia the carpenter",
     "Della the diviner",
     "Elsa the embalmer"
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
      "statue"
     ],
     [
      1,
      "alone"
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
      "next",
      "rubble"
     ]
    ],
    "solution": [
     1,
     8,
     16,
     23,
     24,
     33
    ],
    "doors": [
     [
      7,
      8
     ],
     [
      19,
      25
     ],
     [
      3,
      4
     ],
     [
      21,
      27
     ],
     [
      23,
      29
     ],
     [
      25,
      26
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      18,
      "l"
     ],
     [
      30,
      "b"
     ],
     [
      35,
      "b"
     ]
    ],
    "tries": 3,
    "facts": [
     [
      "roomCount",
      3,
      1
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": "C.......L...C...C.....L.LL.....L.L..",
    "group": 2
   },
   {
    "size": 7,
    "rooms": "0000111000011111111112223333222333322244442224444",
    "objects": "a....d..........ce.bca....cd..a.e...f......a....f",
    "roomNames": [
     "Boat Pit",
     "Statue Hall",
     "Granary",
     "Hall of Pillars",
     "Scribe Room"
    ],
    "people": [
     "Astrid the architect",
     "Birgit the brewer",
     "Vince the vizier",
     "Cedric the carpenter",
     "Della the dancer",
     "Edgar the envoy",
     "Freya the fisher"
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
      "urn"
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
      4,
      "same",
      3
     ],
     [
      5,
      "same",
      6
     ],
     [
      6,
      "col",
      4
     ]
    ],
    "solution": [
     3,
     13,
     15,
     23,
     28,
     40,
     46
    ],
    "doors": [
     [
      7,
      14
     ],
     [
      16,
      23
     ],
     [
      18,
      25
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
      32,
      39
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
      5,
      "t"
     ],
     [
      27,
      "r"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "nextCount",
      "jar",
      0
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": ".C......L....CLC.................................",
    "group": 2
   },
   {
    "size": 8,
    "rooms": "0000011100000111222221112222211122222111333334443333344455555444",
    "objects": "b..e...a..b..b.a.....e..e....d....b....f....a.b....e..a..f.....f",
    "roomNames": [
     "Hall of Pillars",
     "Statue Hall",
     "Scribe Room",
     "Sun Court",
     "Workshop",
     "Burial Chamber"
    ],
    "people": [
     "Alma the architect",
     "Vince the vizier",
     "Bruno the brewer",
     "Clara the carpenter",
     "Dmitri the diviner",
     "Edith the envoy",
     "Frank the fanbearer",
     "Gwen the guard"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "next",
      "couch"
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "next",
      "rubble"
     ],
     [
      3,
      "same",
      2
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "on",
      "couch"
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "next",
      "jar"
     ],
     [
      7,
      "next",
      "jar"
     ],
     [
      7,
      "alone"
     ]
    ],
    "solution": [
     1,
     12,
     16,
     27,
     37,
     46,
     55,
     58
    ],
    "doors": [
     [
      12,
      13
     ],
     [
      11,
      19
     ],
     [
      28,
      29
     ],
     [
      38,
      46
     ],
     [
      32,
      40
     ],
     [
      44,
      45
     ],
     [
      49,
      57
     ],
     [
      60,
      61
     ]
    ],
    "windows": [
     [
      31,
      "r"
     ],
     [
      32,
      "l"
     ],
     [
      56,
      "b"
     ],
     [
      60,
      "b"
     ],
     [
      61,
      "b"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "nextCount",
      "rubble",
      1
     ],
     [
      "nextCount",
      "stool",
      2
     ],
     [
      "doorCount",
      null,
      2
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": ".C..L....L......C......C..C............................C........",
    "group": 2
   },
   {
    "size": 9,
    "rooms": "000000111000000111222333111222333111222333444222333444555556666555556666555556666",
    "objects": "ff.......e..e.a.........a.a.f..e...c..b....b...d....f...........c....ddd.......aa",
    "roomNames": [
     "Scribe Room",
     "Workshop",
     "Shrine",
     "Hall of Pillars",
     "Antechamber",
     "Sun Court",
     "Boat Pit"
    ],
    "people": [
     "Ada the astrologer",
     "Bella the brewer",
     "Cedric the carpenter",
     "Dmitri the diviner",
     "Edith the embalmer",
     "Victor the vizier",
     "Freya the fanbearer",
     "Gwen the goldsmith",
     "Henrik the herder"
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
      "jar"
     ],
     [
      1,
      "next",
      "rubble"
     ],
     [
      2,
      "col",
      0
     ],
     [
      3,
      "next",
      "rubble"
     ],
     [
      4,
      "next",
      "jar"
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
      5,
      "row",
      5
     ],
     [
      6,
      "row",
      6
     ],
     [
      7,
      "door"
     ],
     [
      8,
      "same",
      7
     ]
    ],
    "solution": [
     8,
     10,
     18,
     30,
     43,
     50,
     60,
     67,
     74
    ],
    "doors": [
     [
      14,
      15
     ],
     [
      10,
      19
     ],
     [
      12,
      21
     ],
     [
      23,
      24
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
      46,
      55
     ],
     [
      50,
      51
     ],
     [
      49,
      58
     ],
     [
      50,
      59
     ],
     [
      53,
      62
     ],
     [
      67,
      68
     ]
    ],
    "windows": [
     [
      5,
      "t"
     ],
     [
      7,
      "t"
     ],
     [
      26,
      "r"
     ],
     [
      45,
      "l"
     ],
     [
      63,
      "l"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "alone",
      null,
      5
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": "........L.L..........C..........C................C................C.L............",
    "group": 2
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
    "tags": "...L.......L..C...C.........L..L..L..........C.L.......L..............C.........C..C.....C..........",
    "tries": 5,
    "group": 2
   },
   {
    "size": 11,
    "rooms": "0000000111100000001111000000011112222222333344444443333444444433335555666777755556667777555566677775555666777755556667777",
    "objects": ".d.c.a.....ec..f....bfe..f....d....d.a..b.....fd..e.......e........ba.ab.b........b.b..f.c.bc..e....c..a...daa..a....f..b",
    "roomNames": [
     "Well Shaft",
     "Burial Chamber",
     "Antechamber",
     "Treasury",
     "Shrine",
     "Granary",
     "Workshop",
     "Hall of Pillars"
    ],
    "people": [
     "Alma the astrologer",
     "Birgit the brewer",
     "Celia the chanter",
     "Dexter the diviner",
     "Vera the vintner",
     "Edgar the envoy",
     "Flora the fisher",
     "Gideon the goldsmith",
     "Hazel the herder",
     "Igor the inspector",
     "Jutta the jeweller"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "next",
      "statue"
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "col",
      5
     ],
     [
      3,
      "next",
      "couch"
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
      "alone"
     ],
     [
      6,
      "same",
      10
     ],
     [
      7,
      "on",
      "couch"
     ],
     [
      8,
      "next",
      "jar"
     ],
     [
      8,
      "next",
      "stool"
     ],
     [
      9,
      "on",
      "stool"
     ],
     [
      9,
      "next",
      "urn"
     ],
     [
      10,
      "on",
      "stool"
     ],
     [
      10,
      "row",
      10
     ]
    ],
    "solution": [
     0,
     17,
     27,
     41,
     53,
     56,
     69,
     84,
     98,
     103,
     112
    ],
    "doors": [
     [
      17,
      18
     ],
     [
      24,
      35
     ],
     [
      30,
      41
     ],
     [
      39,
      40
     ],
     [
      35,
      46
     ],
     [
      50,
      51
     ],
     [
      64,
      75
     ],
     [
      57,
      68
     ],
     [
      60,
      71
     ],
     [
      113,
      114
     ],
     [
      72,
      73
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
      10,
      "t"
     ],
     [
      11,
      "l"
     ],
     [
      43,
      "r"
     ],
     [
      66,
      "l"
     ],
     [
      88,
      "l"
     ]
    ],
    "tries": 5,
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
     ],
     [
      "nextCount",
      "stool",
      2
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": ".................C.L.......C...C.........C..............L............C............................C............C.........",
    "group": 2
   },
   {
    "size": 12,
    "rooms": "000111222234000111222234000111222234000111222234555555666634555555666634555555666634557777888834557777888834557777888834557777888834557777888834",
    "objects": "..b.....e....b...a.c.c....a.a...f..a.a.....c..b.f....e.a.e......dbeff....aa............a....b...bae..d.e.c...c...b...........e.d.c..d....cad....",
    "roomNames": [
     "Shrine",
     "Well Shaft",
     "Treasury",
     "Statue Hall",
     "Hall of Pillars",
     "Boat Pit",
     "Antechamber",
     "Granary",
     "Burial Chamber"
    ],
    "people": [
     "Alma the architect",
     "Bruno the boat builder",
     "Cedric the chanter",
     "Dmitri the dancer",
     "Edgar the envoy",
     "Flora the fisher",
     "Viola the vizier",
     "Gus the goldsmith",
     "Hugo the herder",
     "Ivy the inspector",
     "Jasper the juggler",
     "Klaus the keeper"
    ],
    "victim": 6,
    "clues": [
     [
      0,
      "next",
      "urn"
     ],
     [
      0,
      "next",
      "rubble"
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
      "notRoom",
      0
     ],
     [
      3,
      "next",
      "stool"
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "next",
      "jar"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "next",
      "rubble"
     ],
     [
      6,
      "next",
      "jar"
     ],
     [
      7,
      "notRoom",
      4
     ],
     [
      7,
      "row",
      7
     ],
     [
      7,
      "alone"
     ],
     [
      8,
      "next",
      "statue"
     ],
     [
      9,
      "same",
      8
     ],
     [
      10,
      "same",
      9
     ],
     [
      10,
      "row",
      10
     ],
     [
      11,
      "row",
      11
     ],
     [
      11,
      "alone"
     ]
    ],
    "solution": [
     7,
     18,
     29,
     36,
     49,
     69,
     80,
     94,
     100,
     111,
     122,
     143
    ],
    "doors": [
     [
      14,
      15
     ],
     [
      37,
      49
     ],
     [
      17,
      18
     ],
     [
      41,
      53
     ],
     [
      9,
      10
     ],
     [
      43,
      55
     ],
     [
      82,
      83
     ],
     [
      69,
      70
     ],
     [
      117,
      118
     ],
     [
      65,
      66
     ],
     [
      74,
      86
     ],
     [
      78,
      90
     ],
     [
      101,
      102
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      7,
      "t"
     ],
     [
      10,
      "t"
     ],
     [
      59,
      "r"
     ],
     [
      71,
      "r"
     ],
     [
      132,
      "l"
     ],
     [
      137,
      "b"
     ]
    ],
    "tries": 4,
    "facts": [
     [
      "onCount",
      "couch",
      0
     ],
     [
      "nextCount",
      "rubble",
      2
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": "L......C..L....C.............L...................L........C....L................C.............L.........................L.........L............L",
    "group": 2
   },
   {
    "size": 4,
    "rooms": "0000000011221122",
    "objects": "....baeb..d..b..",
    "roomNames": [
     "Statue Hall",
     "Boat Pit",
     "Burial Chamber"
    ],
    "people": [
     "Viola the vizier",
     "Alma the astrologer",
     "Bruno the brewer",
     "Carl the carpenter"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "next",
      "couch"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "alone"
     ]
    ],
    "solution": [
     2,
     5,
     8,
     15
    ],
    "doors": [
     [
      4,
      8
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
      8,
      "l"
     ],
     [
      12,
      "l"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "doorCount",
      null,
      1
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": "C..C....LC.C....",
    "group": 3
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
    "tags": ".C.....L.CC.C.....C.....C",
    "tries": 8,
    "group": 3
   },
   {
    "size": 6,
    "rooms": "001111001111002222002222333444333444",
    "objects": "a..a.dbb...ea..ba.....b...........f.",
    "roomNames": [
     "Sun Court",
     "Boat Pit",
     "Antechamber",
     "Granary",
     "Shrine"
    ],
    "people": [
     "Alma the architect",
     "Bruno the boat builder",
     "Clara the carpenter",
     "Viola the vintner",
     "Dexter the diviner",
     "Edith the embalmer"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "next",
      "stool"
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "window"
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
      5,
      "notRoom",
      1
     ],
     [
      5,
      "alone"
     ]
    ],
    "solution": [
     1,
     8,
     17,
     21,
     28,
     30
    ],
    "doors": [
     [
      1,
      2
     ],
     [
      19,
      20
     ],
     [
      18,
      24
     ],
     [
      10,
      16
     ],
     [
      20,
      26
     ],
     [
      21,
      27
     ],
     [
      32,
      33
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      6,
      "l"
     ],
     [
      17,
      "r"
     ],
     [
      31,
      "b"
     ]
    ],
    "tries": 8,
    "facts": [
     [
      "corner",
      null,
      4
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": ".LL.....L...........C.......L.......",
    "group": 3
   },
   {
    "size": 7,
    "rooms": "0000011000001122220112222011333444433344443334444",
    "objects": "....be....d.f.a....f.a..ca.e...c.aa...d...c.....d",
    "roomNames": [
     "Scribe Room",
     "Treasury",
     "Burial Chamber",
     "Boat Pit",
     "Statue Hall"
    ],
    "people": [
     "Astrid the astrologer",
     "Basil the brewer",
     "Carl the chanter",
     "Daisy the diviner",
     "Ena the embalmer",
     "Felix the fanbearer",
     "Victor the vizier"
    ],
    "victim": 6,
    "clues": [
     [
      0,
      "next",
      "couch"
     ],
     [
      1,
      "same",
      2
     ],
     [
      2,
      "next",
      "stool"
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "window"
     ],
     [
      5,
      "next",
      "stool"
     ]
    ],
    "solution": [
     3,
     8,
     18,
     26,
     28,
     41,
     44
    ],
    "doors": [
     [
      18,
      19
     ],
     [
      9,
      16
     ],
     [
      25,
      32
     ],
     [
      27,
      34
     ],
     [
      23,
      30
     ],
     [
      24,
      31
     ],
     [
      37,
      38
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      28,
      "l"
     ],
     [
      35,
      "l"
     ],
     [
      42,
      "l"
     ]
    ],
    "tries": 10,
    "facts": [
     [
      "nextCount",
      "statue",
      2
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": "...C........................C............L...L...",
    "group": 3
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
    "tags": ".........C.....L.................C........L............CL.LC..C.",
    "tries": 7,
    "group": 3
   },
   {
    "size": 9,
    "rooms": "000111122000111122000111122000111122333444455333444455333444455666666655666666655",
    "objects": ".d....b......af.a....ddc..f......b....e....ab...a..a.e.cb.ddf..d.ce......b.b....a",
    "roomNames": [
     "Burial Chamber",
     "Sun Court",
     "Statue Hall",
     "Well Shaft",
     "Granary",
     "Hall of Pillars",
     "Scribe Room"
    ],
    "people": [
     "Vince the vintner",
     "Arthur the architect",
     "Bruno the boat builder",
     "Carl the carpenter",
     "Dora the diviner",
     "Edgar the embalmer",
     "Flora the fisher",
     "Greta the goldsmith",
     "Hana the harpist"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "next",
      "statue"
     ],
     [
      0,
      "col",
      0
     ],
     [
      1,
      "on",
      "stool"
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "notRoom",
      1
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
      "rubble"
     ],
     [
      5,
      "col",
      4
     ],
     [
      6,
      "notRoom",
      3
     ],
     [
      6,
      "alone"
     ],
     [
      7,
      "col",
      6
     ],
     [
      8,
      "same",
      7
     ]
    ],
    "solution": [
     0,
     16,
     20,
     30,
     37,
     49,
     62,
     69,
     77
    ],
    "doors": [
     [
      29,
      30
     ],
     [
      29,
      38
     ],
     [
      15,
      16
     ],
     [
      30,
      39
     ],
     [
      35,
      44
     ],
     [
      56,
      57
     ],
     [
      55,
      64
     ],
     [
      60,
      61
     ],
     [
      59,
      68
     ],
     [
      78,
      79
     ]
    ],
    "windows": [
     [
      27,
      "l"
     ],
     [
      35,
      "r"
     ],
     [
      72,
      "l"
     ],
     [
      79,
      "b"
     ],
     [
      80,
      "r"
     ]
    ],
    "tries": 10,
    "facts": [
     [
      "nextCount",
      "stool",
      1
     ],
     [
      "doorCount",
      null,
      2
     ],
     [
      "roomCount",
      4,
      1
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": "............................C........L....C....C..............L....L.C.......C...",
    "group": 3
   },
   {
    "size": 10,
    "rooms": "0000111222000011122200001112220000111222333344556633334455663333445566777744556677774455667777445566",
    "objects": ".........e.......d.d.bc..bb.a.f......c...d...d.c..e......c..f.e........d....bd.ccbfb.....b.........a",
    "roomNames": [
     "Antechamber",
     "Hall of Pillars",
     "Treasury",
     "Well Shaft",
     "Statue Hall",
     "Sun Court",
     "Boat Pit",
     "Scribe Room"
    ],
    "people": [
     "Ada the architect",
     "Bella the brewer",
     "Viola the vizier",
     "Cora the chanter",
     "Dmitri the diviner",
     "Elias the envoy",
     "Felix the fanbearer",
     "Gideon the goldsmith",
     "Hugo the herder",
     "Ivo the incense maker"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "same",
      3
     ],
     [
      1,
      "next",
      "couch"
     ],
     [
      2,
      "col",
      6
     ],
     [
      3,
      "row",
      3
     ],
     [
      3,
      "col",
      3
     ],
     [
      4,
      "row",
      4
     ],
     [
      5,
      "next",
      "rubble"
     ],
     [
      6,
      "next",
      "urn"
     ],
     [
      7,
      "alone"
     ],
     [
      8,
      "same",
      4
     ],
     [
      9,
      "next",
      "couch"
     ],
     [
      9,
      "alone"
     ]
    ],
    "solution": [
     0,
     15,
     26,
     33,
     48,
     52,
     67,
     74,
     89,
     91
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      32,
      42
     ],
     [
      16,
      17
     ],
     [
      34,
      44
     ],
     [
      36,
      46
     ],
     [
      37,
      47
     ],
     [
      39,
      49
     ],
     [
      53,
      54
     ],
     [
      61,
      71
     ],
     [
      65,
      66
     ],
     [
      73,
      74
     ],
     [
      77,
      78
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
      29,
      "r"
     ],
     [
      69,
      "r"
     ],
     [
      93,
      "b"
     ],
     [
      96,
      "b"
     ]
    ],
    "tries": 10,
    "facts": [
     [
      "furniture",
      null,
      2
     ],
     [
      "roomCount",
      6,
      2
     ],
     [
      "roomCount",
      3,
      1
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": "............L....................C..............CL...C..........L..L................LL......L.......",
    "group": 3
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
    "tags": "....LC...................L..................C.................L........................L.....................LC.....C....",
    "tries": 6,
    "group": 3
   },
   {
    "size": 12,
    "rooms": "000011122222000011122222000011133333000011133333000011133333444444455555444444455555444444455555666777755555666777788888666777788888666777788888",
    "objects": "...ea.d...eb.............d.....d....bb.aa.f....b.....b......b.....ad..aa.d.......da.aafb.a.ab.f....e..a.ec.f..f...a..f..e..ba.ba.b...e..b....bfe",
    "roomNames": [
     "Antechamber",
     "Granary",
     "Hall of Pillars",
     "Statue Hall",
     "Shrine",
     "Workshop",
     "Sun Court",
     "Burial Chamber",
     "Well Shaft"
    ],
    "people": [
     "Albert the astrologer",
     "Basil the boat builder",
     "Cedric the chanter",
     "Daisy the dancer",
     "Elias the embalmer",
     "Freya the fanbearer",
     "Gus the guard",
     "Hana the harpist",
     "Isla the inspector",
     "Jade the juggler",
     "Konrad the kohl maker",
     "Vince the vintner"
    ],
    "victim": 11,
    "clues": [
     [
      0,
      "same",
      1
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "next",
      "statue"
     ],
     [
      3,
      "next",
      "statue"
     ],
     [
      3,
      "col",
      7
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
      "row",
      5
     ],
     [
      5,
      "same",
      6
     ],
     [
      6,
      "col",
      5
     ],
     [
      7,
      "on",
      "couch"
     ],
     [
      7,
      "next",
      "jar"
     ],
     [
      8,
      "door"
     ],
     [
      9,
      "window"
     ],
     [
      10,
      "next",
      "rubble"
     ],
     [
      11,
      "next",
      "couch"
     ]
    ],
    "solution": [
     9,
     22,
     32,
     43,
     49,
     62,
     77,
     87,
     100,
     108,
     131,
     138
    ],
    "doors": [
     [
      27,
      28
     ],
     [
      49,
      61
     ],
     [
      18,
      19
     ],
     [
      54,
      55
     ],
     [
      53,
      65
     ],
     [
      22,
      34
     ],
     [
      58,
      70
     ],
     [
      66,
      67
     ],
     [
      85,
      97
     ],
     [
      88,
      100
     ],
     [
      102,
      103
     ],
     [
      105,
      117
     ],
     [
      110,
      111
     ],
     [
      126,
      127
     ]
    ],
    "windows": [
     [
      7,
      "t"
     ],
     [
      10,
      "t"
     ],
     [
      11,
      "r"
     ],
     [
      47,
      "r"
     ],
     [
      108,
      "l"
     ],
     [
      134,
      "b"
     ],
     [
      137,
      "b"
     ]
    ],
    "tries": 8,
    "facts": [
     [
      "onCount",
      "stool",
      0
     ],
     [
      "onCount",
      "couch",
      1
     ]
    ],
    "rules": [
     "glyphs"
    ],
    "tags": ".....C........................C............C....LL........L...CL.............................L...C.................C............................",
    "group": 3
   }
  ]
 },
 {
  "theme": "camp",
  "levels": [
   {
    "size": 4,
    "rooms": "0011001122222222",
    "objects": "cc.........c.ddb",
    "roomNames": [
     "Bone Yard",
     "Hunting Ground",
     "Lookout Rock"
    ],
    "people": [
     "Vince the valley guide",
     "Astrid the artist",
     "Bruno the beekeeper",
     "Clara the carrier"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      1,
      "notRoom",
      0
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "next",
      "fire"
     ]
    ],
    "solution": [
     2,
     7,
     9,
     12
    ],
    "doors": [
     [
      5,
      6
     ],
     [
      5,
      9
     ],
     [
      6,
      10
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      3,
      "r"
     ]
    ],
    "tries": 0,
    "rules": [
     "trades"
    ],
    "trade": "....",
    "tags": "...0.1..........",
    "group": 0
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
    "tags": "0............1...........",
    "tries": 0,
    "group": 0
   },
   {
    "size": 6,
    "rooms": "001111001111223333223333224444224444",
    "objects": "...a.b.ef..aa.....a.b..f.c...a..d...",
    "roomNames": [
     "Cave",
     "Bone Yard",
     "Fire Pit",
     "Flint Pit",
     "Elder Hut"
    ],
    "people": [
     "Albert the artist",
     "Vera the visionary",
     "Birgit the beekeeper",
     "Cora the carver",
     "Dmitri the dancer",
     "Edith the elder"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "on",
      "log"
     ],
     [
      1,
      "next",
      "log"
     ],
     [
      2,
      "same",
      3
     ],
     [
      3,
      "next",
      "boulder"
     ],
     [
      4,
      "next",
      "fire"
     ],
     [
      5,
      "next",
      "log"
     ]
    ],
    "solution": [
     3,
     10,
     12,
     19,
     26,
     35
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
      8,
      14
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
      0,
      "t"
     ],
     [
      4,
      "t"
     ],
     [
      5,
      "t"
     ],
     [
      11,
      "r"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "nextCount",
      "bones",
      0
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": "2..2.1",
    "tags": "...................2..........33...1",
    "group": 0
   },
   {
    "size": 7,
    "rooms": "0000111000011100001112223344222334422233442223344",
    "objects": "...........a.e.....b...b.cc......fb.a...a.d.a.b..",
    "roomNames": [
     "Lookout Rock",
     "Elder Hut",
     "Fire Pit",
     "Cave",
     "River Bank"
    ],
    "people": [
     "Alma the acrobat",
     "Basil the beekeeper",
     "Carl the carver",
     "Dexter the dancer",
     "Vivian the valley guide",
     "Edgar the elk tamer",
     "Frank the firekeeper"
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
      "row",
      1
     ],
     [
      2,
      "next",
      "log"
     ],
     [
      2,
      "next",
      "leaves"
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
      "bones"
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "next",
      "leaves"
     ]
    ],
    "solution": [
     2,
     8,
     18,
     21,
     34,
     40,
     45
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
      20,
      27
     ],
     [
      30,
      31
     ],
     [
      39,
      40
     ]
    ],
    "windows": [
     [
      4,
      "t"
     ],
     [
      27,
      "r"
     ],
     [
      34,
      "r"
     ],
     [
      46,
      "b"
     ]
    ],
    "tries": 0,
    "rules": [
     "trades"
    ],
    "trade": "2.44...",
    "tags": ".........22.......4........4.....................",
    "group": 0
   },
   {
    "size": 8,
    "rooms": "0001111100011111000111110002223344422233444222334445553344455533",
    "objects": ".....a.........a.a....a....e..a....af..a....e....b.a..f.a....aaf",
    "roomNames": [
     "Spring",
     "Cave",
     "Hunting Ground",
     "Berry Grove",
     "Hide Tent",
     "Elder Hut"
    ],
    "people": [
     "Alma the acrobat",
     "Bruno the beekeeper",
     "Celia the carrier",
     "Dora the dancer",
     "Elias the elder",
     "Viola the valley guide",
     "Fiona the flute player",
     "Greta the guard"
    ],
    "victim": 5,
    "clues": [
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
      "row",
      2
     ],
     [
      2,
      "col",
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
      "bones"
     ],
     [
      6,
      "on",
      "leaves"
     ],
     [
      7,
      "on",
      "log"
     ]
    ],
    "solution": [
     5,
     12,
     19,
     31,
     34,
     46,
     49,
     56
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
      26,
      34
     ],
     [
      21,
      29
     ],
     [
      23,
      31
     ],
     [
      37,
      38
     ],
     [
      34,
      35
     ],
     [
      45,
      53
     ],
     [
      61,
      62
     ],
     [
      58,
      59
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
      6,
      "t"
     ],
     [
      32,
      "l"
     ],
     [
      57,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "nextCount",
      "tree",
      0
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": "2..20..2",
    "tags": "..3......................2........0...............2.............",
    "group": 0
   },
   {
    "size": 9,
    "rooms": "000001111000001111000001111222233445222233445222233445666666445666666445666666445",
    "objects": ".....f.cde...d..cd....b....b.c....c.c.....f..aaadeb.......b.......b.d.c..a.ec.c..",
    "roomNames": [
     "Spring",
     "Cave",
     "Flint Pit",
     "Hide Tent",
     "Painted Wall",
     "Bone Yard",
     "Berry Grove"
    ],
    "people": [
     "Vivian the valley guide",
     "Arthur the artist",
     "Bruno the builder",
     "Carl the carver",
     "Della the dancer",
     "Edith the elk tamer",
     "Flora the firekeeper",
     "Greta the guard",
     "Hilda the hornblower"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "row",
      1
     ],
     [
      1,
      "col",
      2
     ],
     [
      2,
      "door"
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
      4,
      "door"
     ],
     [
      5,
      "next",
      "boulder"
     ],
     [
      6,
      "alone"
     ],
     [
      7,
      "next",
      "leaves"
     ],
     [
      7,
      "next",
      "boulder"
     ],
     [
      8,
      "window"
     ]
    ],
    "solution": [
     3,
     11,
     24,
     28,
     41,
     45,
     62,
     67,
     79
    ],
    "doors": [
     [
      22,
      23
     ],
     [
      19,
      28
     ],
     [
      22,
      31
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
      26,
      35
     ],
     [
      30,
      31
     ],
     [
      48,
      57
     ],
     [
      41,
      42
     ],
     [
      50,
      59
     ],
     [
      70,
      71
     ],
     [
      68,
      69
     ]
    ],
    "windows": [
     [
      18,
      "l"
     ],
     [
      26,
      "r"
     ],
     [
      54,
      "l"
     ],
     [
      75,
      "b"
     ],
     [
      79,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "roomCount",
      6,
      1
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": ".1.21.0..",
    "tags": "..........................1.2..........1......................0.4................",
    "group": 0
   },
   {
    "size": 10,
    "rooms": "0000111122000011112200001111223333111122333333444455553344445555334444555566664477776666447777666644",
    "objects": ".....c...d.e.c.c.a...f...b.......b....ae.d..a....f.f.c...bb......a..b..ad...cb...d....e.db..e......a",
    "roomNames": [
     "Lookout Rock",
     "Spring",
     "Hunting Ground",
     "Elder Hut",
     "Fire Pit",
     "Berry Grove",
     "Hide Tent",
     "River Bank"
    ],
    "people": [
     "Ada the artist",
     "Birgit the beekeeper",
     "Carl the carrier",
     "Dmitri the drummer",
     "Elsa the elder",
     "Vivian the visionary",
     "Felix the flute player",
     "Gus the grinder",
     "Henrik the hornblower",
     "Isla the idol carver"
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
      "fire"
     ],
     [
      2,
      "next",
      "log"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "next",
      "leaves"
     ],
     [
      4,
      "alone"
     ],
     [
      6,
      "next",
      "boulder"
     ],
     [
      7,
      "alone"
     ],
     [
      8,
      "col",
      2
     ],
     [
      9,
      "next",
      "tree"
     ]
    ],
    "solution": [
     8,
     19,
     27,
     35,
     46,
     50,
     63,
     74,
     82,
     91
    ],
    "doors": [
     [
      13,
      14
     ],
     [
      20,
      30
     ],
     [
      27,
      28
     ],
     [
      34,
      44
     ],
     [
      36,
      46
     ],
     [
      38,
      48
     ],
     [
      55,
      56
     ],
     [
      63,
      64
     ],
     [
      65,
      75
     ],
     [
      77,
      78
     ],
     [
      73,
      74
     ],
     [
      71,
      81
     ],
     [
      93,
      94
     ]
    ],
    "windows": [
     [
      29,
      "r"
     ],
     [
      49,
      "r"
     ],
     [
      50,
      "l"
     ],
     [
      70,
      "l"
     ],
     [
      79,
      "r"
     ],
     [
      90,
      "l"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "roomCount",
      2,
      2
     ],
     [
      "roomCount",
      3,
      0
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": ".....4.2.4",
    "tags": "........................0...............3.........4.........1........3....2.....3...................",
    "group": 0
   },
   {
    "size": 4,
    "rooms": "0000111122222222",
    "objects": ".b...da...ea.b..",
    "roomNames": [
     "Elder Hut",
     "Painted Wall",
     "Fire Pit"
    ],
    "people": [
     "Astrid the artist",
     "Bea the beekeeper",
     "Vivian the valley guide",
     "Celia the carrier"
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
      3,
      "on",
      "leaves"
     ]
    ],
    "solution": [
     0,
     6,
     11,
     13
    ],
    "doors": [
     [
      3,
      7
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
      3,
      "r"
     ]
    ],
    "tries": 1,
    "rules": [
     "trades"
    ],
    "trade": "...4",
    "tags": "....2...1.....2.",
    "group": 1
   },
   {
    "size": 5,
    "rooms": "0000011111222332223322233",
    "objects": "ed......b.....a..c.d..f..",
    "roomNames": [
     "Hide Tent",
     "Fire Pit",
     "Flint Pit",
     "River Bank"
    ],
    "people": [
     "Albert the artist",
     "Bella the beekeeper",
     "Carl the carver",
     "Della the dancer",
     "Viola the valley guide"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "next",
      "fire"
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
      "alone"
     ]
    ],
    "solution": [
     2,
     6,
     13,
     15,
     24
    ],
    "doors": [
     [
      1,
      6
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
      12,
      13
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
      19,
      "r"
     ]
    ],
    "tries": 1,
    "facts": [
     [
      "nextCount",
      "boulder",
      0
     ],
     [
      "onCount",
      "log",
      0
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": "2.000",
    "tags": "...0.......3.0..........0",
    "group": 1
   },
   {
    "size": 6,
    "rooms": "000111000111223344223344223344223344",
    "objects": "....cab.dd....da.....b..c..c.ffe.d.d",
    "roomNames": [
     "Bone Yard",
     "Cave",
     "Flint Pit",
     "Hunting Ground",
     "Spring"
    ],
    "people": [
     "Arthur the artist",
     "Basil the builder",
     "Viola the valley guide",
     "Cedric the carver",
     "Dora the dancer",
     "Ena the elk tamer"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "next",
      "boulder"
     ],
     [
      1,
      "on",
      "leaves"
     ],
     [
      3,
      "next",
      "bones"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "next",
      "fire"
     ]
    ],
    "solution": [
     3,
     6,
     16,
     23,
     25,
     32
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
      10,
      16
     ],
     [
      25,
      26
     ],
     [
      15,
      16
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      6,
      "l"
     ],
     [
      30,
      "b"
     ],
     [
      34,
      "b"
     ]
    ],
    "tries": 2,
    "rules": [
     "trades"
    ],
    "trade": "0.033.",
    "tags": "...0...3........0.4....3.3..4.......",
    "group": 1
   },
   {
    "size": 7,
    "rooms": "0001111000111100011112222333222233344443334444333",
    "objects": ".....fe...d...f......e........e.e.aaea...c...fbea",
    "roomNames": [
     "Painted Wall",
     "Fire Pit",
     "Lookout Rock",
     "River Bank",
     "Hide Tent"
    ],
    "people": [
     "Alma the artist",
     "Birgit the builder",
     "Cora the carrier",
     "Victor the visionary",
     "Dora the drummer",
     "Elsa the elder",
     "Flora the firekeeper"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "same",
      2
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
      2,
      "col",
      2
     ],
     [
      4,
      "on",
      "log"
     ],
     [
      5,
      "next",
      "bones"
     ],
     [
      6,
      "next",
      "log"
     ]
    ],
    "solution": [
     1,
     12,
     16,
     25,
     34,
     38,
     42
    ],
    "doors": [
     [
      16,
      17
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
      20,
      27
     ],
     [
      24,
      25
     ],
     [
      28,
      35
     ],
     [
      45,
      46
     ]
    ],
    "windows": [
     [
      20,
      "r"
     ],
     [
      27,
      "r"
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
    "tries": 1,
    "facts": [
     [
      "roomCount",
      2,
      0
     ],
     [
      "touch",
      null,
      0
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": ".3.2..1",
    "tags": ".......1...2.......3..2..2.1............1...2....",
    "group": 1
   },
   {
    "size": 8,
    "rooms": "0001111100011111000222220002222200022222334445553344455533444555",
    "objects": "...f....dd.e..a..d..fc...bc.dba..ff.ca..e..e..ac.d...........fbb",
    "roomNames": [
     "Elder Hut",
     "Flint Pit",
     "Bone Yard",
     "Spring",
     "Hide Tent",
     "Berry Grove"
    ],
    "people": [
     "Viola the valley guide",
     "Arthur the artist",
     "Birgit the beekeeper",
     "Celia the carrier",
     "Della the dancer",
     "Elsa the elk tamer",
     "Frank the firekeeper",
     "Gideon the grinder"
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
      "log"
     ],
     [
      2,
      "next",
      "log"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "next",
      "bones"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "next",
      "tree"
     ],
     [
      6,
      "next",
      "boulder"
     ],
     [
      7,
      "same",
      5
     ]
    ],
    "solution": [
     0,
     13,
     22,
     25,
     35,
     44,
     55,
     58
    ],
    "doors": [
     [
      2,
      3
     ],
     [
      18,
      19
     ],
     [
      33,
      41
     ],
     [
      34,
      42
     ],
     [
      14,
      22
     ],
     [
      35,
      43
     ],
     [
      39,
      47
     ],
     [
      49,
      50
     ],
     [
      60,
      61
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      39,
      "r"
     ],
     [
      57,
      "b"
     ],
     [
      59,
      "b"
     ],
     [
      61,
      "b"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "corner",
      null,
      4
     ],
     [
      "doorCount",
      null,
      2
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": "..1.3.3.",
    "tags": ".42..4..........4.........................3..........3.3........",
    "group": 1
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
    "tags": "1...3......................4..1...4..4.1..............2.......3......21..........",
    "tries": 2,
    "group": 1
   },
   {
    "size": 10,
    "rooms": "0000111122000011112200001111220000333322000033332244445556664444555666444455566677775556667777555666",
    "objects": "c....c.........e.....a...bf.b..db....dc..ba.ed............a.........f........ff.....f..d.eb....b...d",
    "roomNames": [
     "Elder Hut",
     "Lookout Rock",
     "Fire Pit",
     "Painted Wall",
     "Hide Tent",
     "Cave",
     "River Bank",
     "Flint Pit"
    ],
    "people": [
     "Ada the acrobat",
     "Bea the builder",
     "Cora the carrier",
     "Viola the valley guide",
     "Della the drummer",
     "Edith the elk tamer",
     "Freya the firekeeper",
     "Gwen the grinder",
     "Hazel the hide tanner",
     "Isla the idol carver"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "next",
      "boulder"
     ],
     [
      0,
      "window"
     ],
     [
      1,
      "col",
      2
     ],
     [
      2,
      "next",
      "leaves"
     ],
     [
      3,
      "next",
      "fire"
     ],
     [
      4,
      "next",
      "fire"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "row",
      5
     ],
     [
      6,
      "same",
      5
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
     ],
     [
      7,
      "notRoom",
      7
     ],
     [
      7,
      "alone"
     ],
     [
      8,
      "door"
     ],
     [
      8,
      "col",
      1
     ],
     [
      9,
      "next",
      "fire"
     ]
    ],
    "solution": [
     6,
     12,
     29,
     30,
     47,
     55,
     64,
     73,
     81,
     98
    ],
    "doors": [
     [
      23,
      24
     ],
     [
      33,
      34
     ],
     [
      43,
      53
     ],
     [
      7,
      8
     ],
     [
      24,
      34
     ],
     [
      37,
      38
     ],
     [
      48,
      58
     ],
     [
      46,
      56
     ],
     [
      47,
      57
     ],
     [
      53,
      54
     ],
     [
      71,
      81
     ],
     [
      66,
      67
     ],
     [
      93,
      94
     ]
    ],
    "windows": [
     [
      5,
      "t"
     ],
     [
      6,
      "t"
     ],
     [
      39,
      "r"
     ],
     [
      60,
      "l"
     ],
     [
      89,
      "r"
     ],
     [
      93,
      "b"
     ]
    ],
    "tries": 1,
    "rules": [
     "trades"
    ],
    "trade": "..34......",
    "tags": "..............2..0......1.....4.....................3...........................4...................",
    "group": 1
   },
   {
    "size": 11,
    "rooms": "0000111111100001111111000011111112222333444422223334444222233344442222333444455556667777555566677775555666777755556667777",
    "objects": "...e..e.....c......b.d..ebbd.ec...fe.....d....f..c....b..ac....f........b.e..f.a.e...a..b...a................b.d.b.a.c...",
    "roomNames": [
     "Cave",
     "Elder Hut",
     "Berry Grove",
     "Flint Pit",
     "Bone Yard",
     "Hunting Ground",
     "Spring",
     "Fire Pit"
    ],
    "people": [
     "Astrid the acrobat",
     "Bruno the builder",
     "Clara the carver",
     "Dexter the drummer",
     "Edith the elk tamer",
     "Fiona the firekeeper",
     "Gus the grinder",
     "Henrik the hide tanner",
     "Ivo the ice cutter",
     "Jasper the joker",
     "Vera the visionary"
    ],
    "victim": 10,
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
      "next",
      "boulder"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "window"
     ],
     [
      5,
      "window"
     ],
     [
      5,
      "same",
      6
     ],
     [
      6,
      "next",
      "boulder"
     ],
     [
      7,
      "alone"
     ],
     [
      8,
      "on",
      "log"
     ],
     [
      9,
      "next",
      "boulder"
     ],
     [
      10,
      "next",
      "boulder"
     ],
     [
      10,
      "row",
      10
     ]
    ],
    "solution": [
     2,
     17,
     31,
     38,
     54,
     55,
     69,
     78,
     92,
     106,
     118
    ],
    "doors": [
     [
      14,
      15
     ],
     [
      23,
      34
     ],
     [
      27,
      38
     ],
     [
      29,
      40
     ],
     [
      47,
      48
     ],
     [
      68,
      79
     ],
     [
      61,
      62
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
      91,
      92
     ],
     [
      94,
      95
     ]
    ],
    "windows": [
     [
      54,
      "r"
     ],
     [
      55,
      "l"
     ],
     [
      66,
      "l"
     ],
     [
      88,
      "l"
     ],
     [
      113,
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
    "tries": 2,
    "facts": [
     [
      "nextCount",
      "log",
      1
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": "0.23.4010..",
    "tags": "240.................0..3.......2......32.............................0........1...4......0.....3........4..0......4......",
    "group": 1
   },
   {
    "size": 12,
    "rooms": "000011122222000011122222000011122222000011133333000011133333000011133333444445555666444445555666444445555666444445555666777778888888777778888888",
    "objects": "d..b.b..aa.b..d........a....f.ad.b...f..ba....c.fd...a...........f.e............cd.e.bc..e..d.............c.......ea.b..b..df....b.....e...e.bc.",
    "roomNames": [
     "Elder Hut",
     "Lookout Rock",
     "Hide Tent",
     "Spring",
     "Berry Grove",
     "Fire Pit",
     "River Bank",
     "Bone Yard",
     "Painted Wall"
    ],
    "people": [
     "Arthur the artist",
     "Basil the beekeeper",
     "Cora the carver",
     "Dmitri the drummer",
     "Ena the elk tamer",
     "Freya the firekeeper",
     "Grace the grinder",
     "Vera the valley guide",
     "Hilda the hide tanner",
     "Igor the ice cutter",
     "Jutta the joker",
     "Kai the knot tier"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "next",
      "log"
     ],
     [
      0,
      "next",
      "leaves"
     ],
     [
      1,
      "next",
      "log"
     ],
     [
      1,
      "next",
      "leaves"
     ],
     [
      2,
      "same",
      3
     ],
     [
      3,
      "next",
      "bones"
     ],
     [
      4,
      "next",
      "log"
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
      "next",
      "tree"
     ],
     [
      7,
      "next",
      "fire"
     ],
     [
      8,
      "next",
      "boulder"
     ],
     [
      9,
      "door"
     ],
     [
      10,
      "next",
      "leaves"
     ],
     [
      11,
      "next",
      "bones"
     ],
     [
      11,
      "next",
      "tree"
     ]
    ],
    "solution": [
     10,
     21,
     27,
     36,
     54,
     62,
     77,
     91,
     107,
     109,
     128,
     136
    ],
    "doors": [
     [
      51,
      52
     ],
     [
      63,
      75
     ],
     [
      18,
      19
     ],
     [
      54,
      55
     ],
     [
      64,
      76
     ],
     [
      66,
      78
     ],
     [
      31,
      43
     ],
     [
      67,
      79
     ],
     [
      71,
      83
     ],
     [
      88,
      89
     ],
     [
      109,
      121
     ],
     [
      116,
      117
     ],
     [
      115,
      127
     ],
     [
      118,
      130
     ],
     [
      124,
      125
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
      12,
      "l"
     ],
     [
      71,
      "r"
     ],
     [
      72,
      "l"
     ],
     [
      133,
      "b"
     ],
     [
      138,
      "b"
     ]
    ],
    "tries": 2,
    "rules": [
     "trades"
    ],
    "trade": "30..2..122.4",
    "tags": ".............2...4.4.0...0.................................24................................................2..3.......................4.......",
    "group": 1
   },
   {
    "size": 4,
    "rooms": "0000111122222222",
    "objects": "...c......a.f.a.",
    "roomNames": [
     "Flint Pit",
     "Berry Grove",
     "Spring"
    ],
    "people": [
     "Alma the acrobat",
     "Basil the builder",
     "Victor the valley guide",
     "Celia the carrier"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "col",
      1
     ],
     [
      1,
      "notRoom",
      0
     ],
     [
      3,
      "next",
      "log"
     ]
    ],
    "solution": [
     1,
     6,
     8,
     15
    ],
    "doors": [
     [
      0,
      4
     ],
     [
      4,
      8
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      8,
      "l"
     ]
    ],
    "tries": 5,
    "rules": [
     "trades"
    ],
    "trade": "14.1",
    "tags": "....1...........",
    "group": 2
   },
   {
    "size": 5,
    "rooms": "0001100011000112233322333",
    "objects": "bd..df...a.c.....f......c",
    "roomNames": [
     "Spring",
     "Hide Tent",
     "Painted Wall",
     "Lookout Rock"
    ],
    "people": [
     "Ada the artist",
     "Basil the beekeeper",
     "Cedric the carrier",
     "Della the drummer",
     "Vince the visionary"
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
      "fire"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "next",
      "boulder"
     ]
    ],
    "solution": [
     0,
     6,
     13,
     19,
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
      12,
      17
     ],
     [
      13,
      18
     ],
     [
      16,
      17
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
      15,
      "l"
     ]
    ],
    "tries": 5,
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
    "trade": "2..23",
    "tags": ".......4...............2.",
    "group": 2
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
    "tags": ".........1.........0....4...........",
    "tries": 4,
    "group": 2
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
    "tags": "............0.0...............0......0...........",
    "tries": 3,
    "group": 2
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
    "tags": "....0..3............................2................22.32.4....",
    "tries": 4,
    "group": 2
   },
   {
    "size": 9,
    "rooms": "000011111000011111000011111222344555222344555222344555222344666333344666333344666",
    "objects": ".ca.fb.....c..ea...bcbae..fa.......efbaa..e........ca.....d..bd........b..a.....e",
    "roomNames": [
     "Hide Tent",
     "Elder Hut",
     "Flint Pit",
     "Fire Pit",
     "Bone Yard",
     "Berry Grove",
     "Cave"
    ],
    "people": [
     "Albert the acrobat",
     "Birgit the builder",
     "Celia the carrier",
     "Dmitri the drummer",
     "Ena the elk tamer",
     "Victor the valley guide",
     "Felix the firekeeper",
     "Grace the guard",
     "Hilda the hornblower"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "next",
      "log"
     ],
     [
      1,
      "same",
      2
     ],
     [
      2,
      "next",
      "boulder"
     ],
     [
      3,
      "next",
      "tree"
     ],
     [
      4,
      "row",
      4
     ],
     [
      5,
      "col",
      4
     ],
     [
      6,
      "alone"
     ],
     [
      7,
      "window"
     ],
     [
      8,
      "next",
      "log"
     ]
    ],
    "solution": [
     6,
     9,
     19,
     34,
     41,
     49,
     56,
     71,
     75
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      18,
      27
     ],
     [
      21,
      30
     ],
     [
      22,
      31
     ],
     [
      24,
      33
     ],
     [
      47,
      48
     ],
     [
      66,
      67
     ],
     [
      32,
      33
     ],
     [
      68,
      69
     ],
     [
      52,
      61
     ]
    ],
    "windows": [
     [
      35,
      "r"
     ],
     [
      44,
      "r"
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
      71,
      "r"
     ]
    ],
    "tries": 3,
    "facts": [
     [
      "alone",
      null,
      5
     ],
     [
      "nextCount",
      "fire",
      2
     ],
     [
      "roomCount",
      1,
      1
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": "2.0.32.0.",
    "tags": "......2...3.............02...1...3............1..2.......3..............13...0...",
    "group": 2
   },
   {
    "size": 10,
    "rooms": "0000111111000011111100001122220000112222333333222233333344445556664444555666777755566677775556667777",
    "objects": ".d.af..b.d.......ae..db.......f.eb..f...a.a.e......f..da...fd.f..aa..eeb.ca................d.ccb....",
    "roomNames": [
     "Lookout Rock",
     "Elder Hut",
     "River Bank",
     "Painted Wall",
     "Berry Grove",
     "Cave",
     "Hunting Ground",
     "Bone Yard"
    ],
    "people": [
     "Arthur the artist",
     "Bruno the builder",
     "Clara the carver",
     "Dexter the drummer",
     "Edgar the elk tamer",
     "Felix the flute player",
     "Greta the guard",
     "Hazel the hide tanner",
     "Ivy the ice cutter",
     "Viola the valley guide"
    ],
    "victim": 9,
    "clues": [
     [
      0,
      "window"
     ],
     [
      1,
      "next",
      "log"
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
      "row",
      3
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "next",
      "bones"
     ],
     [
      6,
      "next",
      "log"
     ],
     [
      6,
      "alone"
     ],
     [
      7,
      "next",
      "tree"
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
     2,
     13,
     24,
     35,
     49,
     50,
     67,
     71,
     86,
     98
    ],
    "doors": [
     [
      23,
      24
     ],
     [
      32,
      42
     ],
     [
      16,
      26
     ],
     [
      34,
      44
     ],
     [
      45,
      46
     ],
     [
      46,
      56
     ],
     [
      55,
      56
     ],
     [
      52,
      62
     ],
     [
      54,
      64
     ],
     [
      65,
      66
     ],
     [
      66,
      76
     ],
     [
      92,
      93
     ],
     [
      85,
      86
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
     ],
     [
      5,
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
      98,
      "b"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "onCount",
      "leaves",
      1
     ],
     [
      "roomCount",
      7,
      2
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": "3...2..2..",
    "tags": "1.3.....1..................................2..1.....4....4..............4....1.....13............1..",
    "group": 2
   },
   {
    "size": 11,
    "rooms": "0001112222200011122222000111222220001112222233333344444333333444443333334444455555544444555555666667777776666677777766666",
    "objects": "..f............e.......a.a.....f..b...eca....b......a.c..bb...f..d....a.........a.........c...dba.ea.ca.a...........ff...",
    "roomNames": [
     "Berry Grove",
     "Painted Wall",
     "River Bank",
     "Flint Pit",
     "Lookout Rock",
     "Cave",
     "Spring",
     "Bone Yard"
    ],
    "people": [
     "Albert the artist",
     "Birgit the beekeeper",
     "Cora the carrier",
     "Vince the valley guide",
     "Dexter the drummer",
     "Elias the elder",
     "Felix the flute player",
     "Gus the guard",
     "Hazel the hornblower",
     "Ivy the ice cutter",
     "Jutta the joker"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "col",
      7
     ],
     [
      0,
      "same",
      1
     ],
     [
      1,
      "row",
      1
     ],
     [
      2,
      "next",
      "log"
     ],
     [
      3,
      "on",
      "leaves"
     ],
     [
      4,
      "next",
      "leaves"
     ],
     [
      5,
      "next",
      "fire"
     ],
     [
      6,
      "on",
      "log"
     ],
     [
      7,
      "door"
     ],
     [
      7,
      "col",
      5
     ],
     [
      8,
      "row",
      8
     ],
     [
      9,
      "next",
      "log"
     ],
     [
      9,
      "same",
      10
     ],
     [
      10,
      "window"
     ]
    ],
    "solution": [
     7,
     17,
     24,
     34,
     47,
     64,
     70,
     82,
     88,
     107,
     120
    ],
    "doors": [
     [
      35,
      36
     ],
     [
      35,
      46
     ],
     [
      5,
      6
     ],
     [
      37,
      48
     ],
     [
      42,
      53
     ],
     [
      49,
      50
     ],
     [
      66,
      77
     ],
     [
      82,
      83
     ],
     [
      87,
      98
     ],
     [
      93,
      94
     ],
     [
      93,
      104
     ],
     [
      115,
      116
     ]
    ],
    "windows": [
     [
      21,
      "r"
     ],
     [
      32,
      "r"
     ],
     [
      44,
      "l"
     ],
     [
      77,
      "l"
     ],
     [
      109,
      "r"
     ],
     [
      113,
      "b"
     ],
     [
      120,
      "b"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "nextCount",
      "boulder",
      0
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": ".3.1...4..3",
    "tags": "0..........................2................4...........4...........4......................1.............3.....43......33",
    "group": 2
   },
   {
    "size": 12,
    "rooms": "000011112222000011112222000011112222000011112222333311112222333344444555333344444555333344444555666677778888666677778888666677778888666677778888",
    "objects": "...b..a...f.e.....b...a.a...f..a...f.......b......e...d.....b.c.f.......fab....bdc....ce....c.f....e..........b....bba.a....e........b..e.......",
    "roomNames": [
     "Hunting Ground",
     "Lookout Rock",
     "Fire Pit",
     "Flint Pit",
     "River Bank",
     "Berry Grove",
     "Painted Wall",
     "Elder Hut",
     "Bone Yard"
    ],
    "people": [
     "Arthur the artist",
     "Bruno the beekeeper",
     "Celia the carrier",
     "Daisy the dancer",
     "Ena the elk tamer",
     "Freya the firekeeper",
     "Greta the grinder",
     "Vivian the valley guide",
     "Hana the hide tanner",
     "Ines the ice cutter",
     "Jonas the joker",
     "Kira the keeper"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "room",
      0
     ],
     [
      0,
      "next",
      "leaves"
     ],
     [
      1,
      "same",
      4
     ],
     [
      2,
      "same",
      3
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
      "door"
     ],
     [
      5,
      "alone"
     ],
     [
      6,
      "on",
      "leaves"
     ],
     [
      7,
      "door"
     ],
     [
      8,
      "row",
      8
     ],
     [
      9,
      "same",
      8
     ],
     [
      9,
      "next",
      "leaves"
     ],
     [
      10,
      "same",
      9
     ],
     [
      11,
      "row",
      11
     ],
     [
      11,
      "col",
      11
     ]
    ],
    "solution": [
     2,
     17,
     32,
     45,
     52,
     70,
     79,
     90,
     96,
     109,
     123,
     143
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      37,
      49
     ],
     [
      19,
      20
     ],
     [
      51,
      52
     ],
     [
      54,
      66
     ],
     [
      56,
      68
     ],
     [
      57,
      69
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
      80,
      81
     ],
     [
      90,
      102
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
      111,
      112
     ],
     [
      103,
      104
     ]
    ],
    "windows": [
     [
      7,
      "t"
     ],
     [
      10,
      "t"
     ],
     [
      12,
      "l"
     ],
     [
      24,
      "l"
     ],
     [
      71,
      "r"
     ],
     [
      108,
      "l"
     ],
     [
      134,
      "b"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "nextCount",
      "bones",
      0
     ],
     [
      "nextCount",
      "fire",
      1
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": "342..2.130.1",
    "tags": "..3..1.....4....1.........3..3..2....................3.....4.0........2..........................3.......4.....3.4....................0........1",
    "group": 2
   },
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
    "tags": ".........3.4....",
    "tries": 6,
    "group": 3
   },
   {
    "size": 5,
    "rooms": "0011100111221112233322333",
    "objects": "...cc.b.f.....b.....bc..c",
    "roomNames": [
     "Painted Wall",
     "Spring",
     "Flint Pit",
     "Fire Pit"
    ],
    "people": [
     "Ada the acrobat",
     "Vince the visionary",
     "Birgit the beekeeper",
     "Carl the carver",
     "Dmitri the dancer"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "next",
      "leaves"
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
      "next",
      "boulder"
     ]
    ],
    "solution": [
     1,
     9,
     12,
     18,
     20
    ],
    "doors": [
     [
      6,
      7
     ],
     [
      6,
      11
     ],
     [
      11,
      12
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
      0,
      "l"
     ],
     [
      2,
      "t"
     ],
     [
      5,
      "l"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "emptyRooms",
      null,
      0
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": ".2022",
    "tags": "2......2...0.............",
    "group": 3
   },
   {
    "size": 6,
    "rooms": "000011000011222211222211333333444444",
    "objects": ".d..f.b.b......ca..b....c......e..aa",
    "roomNames": [
     "Flint Pit",
     "Berry Grove",
     "River Bank",
     "Spring",
     "Elder Hut"
    ],
    "people": [
     "Alma the artist",
     "Bella the builder",
     "Viola the valley guide",
     "Celia the carrier",
     "Dmitri the dancer",
     "Ena the elder"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "next",
      "boulder"
     ],
     [
      3,
      "next",
      "boulder"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "door"
     ]
    ],
    "solution": [
     0,
     10,
     14,
     21,
     25,
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
      23,
      29
     ],
     [
      21,
      27
     ],
     [
      29,
      35
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      17,
      "r"
     ],
     [
      29,
      "r"
     ],
     [
      30,
      "b"
     ]
    ],
    "tries": 8,
    "facts": [
     [
      "nextCount",
      "log",
      1
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": "0202.1",
    "tags": "0.........2.1........2....2.........",
    "group": 3
   },
   {
    "size": 7,
    "rooms": "0001111000111100011112223333222333322244442224444",
    "objects": "...a.aeb.aa.....b...a.b....da......e.....ad.a.c..",
    "roomNames": [
     "Bone Yard",
     "Hide Tent",
     "Fire Pit",
     "River Bank",
     "Spring"
    ],
    "people": [
     "Astrid the artist",
     "Birgit the builder",
     "Carl the carrier",
     "Vivian the valley guide",
     "Dmitri the drummer",
     "Edith the elk tamer",
     "Felix the firekeeper"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      1,
      "same",
      0
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "next",
      "fire"
     ],
     [
      4,
      "notRoom",
      0
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "notRoom",
      1
     ],
     [
      6,
      "alone"
     ]
    ],
    "solution": [
     0,
     8,
     20,
     26,
     31,
     39,
     44
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
      23,
      24
     ],
     [
      37,
      38
     ],
     [
      32,
      39
     ]
    ],
    "windows": [
     [
      4,
      "t"
     ],
     [
      7,
      "l"
     ],
     [
      34,
      "r"
     ],
     [
      48,
      "b"
     ]
    ],
    "tries": 10,
    "facts": [
     [
      "corner",
      null,
      4
     ],
     [
      "nextCount",
      "log",
      1
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": ".1.0.1.",
    "tags": ".14.....1...............1........2....21.......2.",
    "group": 3
   },
   {
    "size": 8,
    "rooms": "0001111100011111000111112222334422223344555533445555334455553344",
    "objects": "...........ae..dba.d...e..f.a....d.bed.........ed.f...ee...ad...",
    "roomNames": [
     "Flint Pit",
     "Fire Pit",
     "Elder Hut",
     "Hunting Ground",
     "Cave",
     "Spring"
    ],
    "people": [
     "Ada the acrobat",
     "Birgit the beekeeper",
     "Carl the carver",
     "Viola the visionary",
     "Della the drummer",
     "Edith the elk tamer",
     "Felix the firekeeper",
     "Gideon the grinder"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "same",
      2
     ],
     [
      1,
      "on",
      "log"
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
      "leaves"
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "same",
      5
     ],
     [
      7,
      "next",
      "tree"
     ]
    ],
    "solution": [
     5,
     11,
     20,
     31,
     34,
     40,
     49,
     62
    ],
    "doors": [
     [
      18,
      19
     ],
     [
      18,
      26
     ],
     [
      19,
      27
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
      27,
      28
     ],
     [
      32,
      40
     ],
     [
      61,
      62
     ],
     [
      43,
      44
     ]
    ],
    "windows": [
     [
      31,
      "r"
     ],
     [
      40,
      "l"
     ],
     [
      55,
      "r"
     ],
     [
      56,
      "b"
     ],
     [
      63,
      "r"
     ]
    ],
    "tries": 8,
    "rules": [
     "trades"
    ],
    "trade": "1.1.4.2.",
    "tags": "4....1..............11....................................3.....",
    "group": 3
   },
   {
    "size": 9,
    "rooms": "000111222000111222000111222000111222000111222333445555333445555333446666333446666",
    "objects": "a.....f..c.b....c.b..e.c..e.a...da.....af.bb.....................aad.......f...ad",
    "roomNames": [
     "Bone Yard",
     "Cave",
     "Flint Pit",
     "Hide Tent",
     "Lookout Rock",
     "Elder Hut",
     "Fire Pit"
    ],
    "people": [
     "Albert the artist",
     "Bea the beekeeper",
     "Cora the carver",
     "Dora the dancer",
     "Ena the elder",
     "Vivian the valley guide",
     "Frank the flute player",
     "Greta the guard",
     "Henrik the hornblower"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "next",
      "log"
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "on",
      "leaves"
     ],
     [
      3,
      "next",
      "leaves"
     ],
     [
      4,
      "same",
      0
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "row",
      5
     ],
     [
      6,
      "col",
      8
     ],
     [
      7,
      "on",
      "log"
     ],
     [
      8,
      "col",
      5
     ]
    ],
    "solution": [
     1,
     13,
     18,
     34,
     38,
     51,
     62,
     66,
     77
    ],
    "doors": [
     [
      29,
      30
     ],
     [
      38,
      47
     ],
     [
      5,
      6
     ],
     [
      40,
      49
     ],
     [
      41,
      50
     ],
     [
      44,
      53
     ],
     [
      74,
      75
     ],
     [
      49,
      50
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
      3,
      "t"
     ],
     [
      45,
      "l"
     ],
     [
      63,
      "l"
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
    "tries": 8,
    "rules": [
     "trades"
    ],
    "trade": ".2.31.1..",
    "tags": "............2..................1..3............3.2..2.3.......1..................",
    "group": 3
   },
   {
    "size": 10,
    "rooms": "0000111111000011111100000222220000022222333334455533333445553333344555666664477766666447776666644777",
    "objects": ".d........f.c.b...a......d.db..dada..........aa.ca.b......f..d...ba....edd.....f.....d...c.b.b...f..",
    "roomNames": [
     "Painted Wall",
     "Hunting Ground",
     "Berry Grove",
     "Flint Pit",
     "Elder Hut",
     "Bone Yard",
     "River Bank",
     "Hide Tent"
    ],
    "people": [
     "Ada the acrobat",
     "Bea the builder",
     "Cedric the carrier",
     "Dmitri the drummer",
     "Edgar the elk tamer",
     "Fiona the flute player",
     "Gwen the grinder",
     "Hana the hornblower",
     "Viola the visionary",
     "Isla the ice cutter"
    ],
    "victim": 8,
    "clues": [
     [
      0,
      "next",
      "log"
     ],
     [
      1,
      "door"
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
      "on",
      "log"
     ],
     [
      3,
      "next",
      "fire"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "next",
      "leaves"
     ],
     [
      6,
      "col",
      4
     ],
     [
      7,
      "next",
      "tree"
     ],
     [
      8,
      "next",
      "fire"
     ],
     [
      9,
      "next",
      "boulder"
     ]
    ],
    "solution": [
     8,
     13,
     21,
     32,
     47,
     55,
     64,
     70,
     86,
     99
    ],
    "doors": [
     [
      13,
      14
     ],
     [
      24,
      25
     ],
     [
      33,
      43
     ],
     [
      15,
      25
     ],
     [
      36,
      46
     ],
     [
      37,
      47
     ],
     [
      54,
      55
     ],
     [
      63,
      73
     ],
     [
      56,
      57
     ],
     [
      74,
      75
     ],
     [
      96,
      97
     ],
     [
      69,
      79
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
      8,
      "t"
     ],
     [
      9,
      "r"
     ],
     [
      19,
      "r"
     ],
     [
      39,
      "r"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "roomCount",
      7,
      1
     ],
     [
      "onCount",
      "log",
      1
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": "..1424230.",
    "tags": "..1..................................0............1.4.04....4...2..3.........1..1.........3....0....",
    "group": 3
   },
   {
    "size": 11,
    "rooms": "0000111122200001111222000011112223333444422233334444222333344442225555666777755556667777555566677775555666777755556667777",
    "objects": "f....c........f...a...b.....a.adfaaa......f.....cb...a.b.a........da.c..bda.......ca..e...f............d............f.d..",
    "roomNames": [
     "Flint Pit",
     "Bone Yard",
     "Fire Pit",
     "Painted Wall",
     "Cave",
     "Berry Grove",
     "River Bank",
     "Spring"
    ],
    "people": [
     "Alma the artist",
     "Bella the builder",
     "Carl the carver",
     "Vivian the visionary",
     "Dexter the drummer",
     "Edgar the elk tamer",
     "Freya the firekeeper",
     "Gideon the grinder",
     "Hazel the hornblower",
     "Ivo the ice cutter",
     "Jade the jumper"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "window"
     ],
     [
      1,
      "next",
      "bones"
     ],
     [
      2,
      "same",
      0
     ],
     [
      3,
      "next",
      "bones"
     ],
     [
      4,
      "next",
      "leaves"
     ],
     [
      5,
      "col",
      8
     ],
     [
      6,
      "door"
     ],
     [
      7,
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
      "col",
      3
     ],
     [
      9,
      "row",
      9
     ],
     [
      10,
      "same",
      7
     ]
    ],
    "solution": [
     7,
     13,
     27,
     43,
     50,
     63,
     70,
     77,
     91,
     108,
     111
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      24,
      35
     ],
     [
      18,
      19
     ],
     [
      26,
      37
     ],
     [
      62,
      63
     ],
     [
      65,
      76
     ],
     [
      36,
      37
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
      62,
      73
     ],
     [
      102,
      103
     ],
     [
      72,
      73
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      7,
      "t"
     ],
     [
      44,
      "l"
     ],
     [
      66,
      "l"
     ],
     [
      109,
      "r"
     ],
     [
      112,
      "b"
     ],
     [
      115,
      "b"
     ]
    ],
    "tries": 10,
    "facts": [
     [
      "furniture",
      null,
      0
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": "3.4.......1",
    "tags": ".......3..10.............104..........4.............1..........................1...............3..4.......3....1.........",
    "group": 3
   },
   {
    "size": 12,
    "rooms": "000011111111000011111111000011111111222233334444222233334444222233334444222233334444222233334444555666777888555666777888555666777888555666777888",
    "objects": ".......d....c......a..dd....f..d..a.b...a.c...ab.a....a...c.....a.b........b...ca..bf....a.a.f.c...b.a.c..d.a.....a.....bc..b...d......f...f..d.",
    "roomNames": [
     "Painted Wall",
     "River Bank",
     "Cave",
     "Flint Pit",
     "Berry Grove",
     "Elder Hut",
     "Hide Tent",
     "Lookout Rock",
     "Bone Yard"
    ],
    "people": [
     "Alma the acrobat",
     "Birgit the builder",
     "Victor the visionary",
     "Celia the carver",
     "Dora the drummer",
     "Elsa the elk tamer",
     "Felix the flute player",
     "Gideon the guard",
     "Hazel the hornblower",
     "Ines the ice cutter",
     "Jutta the joker",
     "Kai the knot tier"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "row",
      1
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
      3,
      "next",
      "leaves"
     ],
     [
      4,
      "same",
      3
     ],
     [
      4,
      "next",
      "log"
     ],
     [
      5,
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
      "log"
     ],
     [
      6,
      "door"
     ],
     [
      7,
      "same",
      6
     ],
     [
      7,
      "next",
      "log"
     ],
     [
      8,
      "next",
      "log"
     ],
     [
      9,
      "next",
      "fire"
     ],
     [
      10,
      "next",
      "bones"
     ],
     [
      10,
      "same",
      11
     ],
     [
      11,
      "next",
      "bones"
     ]
    ],
    "solution": [
     3,
     17,
     33,
     37,
     50,
     71,
     76,
     90,
     96,
     118,
     127,
     140
    ],
    "doors": [
     [
      15,
      16
     ],
     [
      24,
      36
     ],
     [
      30,
      42
     ],
     [
      35,
      47
     ],
     [
      75,
      76
     ],
     [
      86,
      98
     ],
     [
      87,
      99
     ],
     [
      79,
      80
     ],
     [
      89,
      101
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
      94,
      106
     ],
     [
      122,
      123
     ],
     [
      113,
      114
     ],
     [
      116,
      117
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
      6,
      "t"
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
      133,
      "b"
     ],
     [
      143,
      "b"
     ]
    ],
    "tries": 8,
    "facts": [
     [
      "nextCount",
      "bones",
      2
     ],
     [
      "roomCount",
      8,
      1
     ]
    ],
    "rules": [
     "trades"
    ],
    "trade": "3..023.2.21.",
    "tags": "4.........4..1.........................1.............2.........2.............3........4...2.........4........1........2........1.............4..",
    "group": 3
   }
  ]
 },
 {
  "theme": "gulch",
  "levels": [
   {
    "size": 4,
    "rooms": "0000000011221122",
    "objects": ".aec.ee....c....",
    "roomNames": [
     "Livery",
     "Saloon",
     "Hotel"
    ],
    "people": [
     "Vince the vaquero",
     "Ada the attorney",
     "Birgit the banker",
     "Cedric the cattle driver"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "door"
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
      "bandit"
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
      5,
      9
     ],
     [
      7,
      11
     ],
     [
      9,
      10
     ]
    ],
    "windows": [
     [
      3,
      "r"
     ],
     [
      7,
      "r"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "onCount",
      "chair",
      1
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 1,
    "lawful": [
     0
    ],
    "group": 0
   },
   {
    "size": 5,
    "rooms": "0000011111223332233322333",
    "objects": ".d.b...be...c.....d.....f",
    "roomNames": [
     "Saloon",
     "Telegraph Office",
     "Sheriff Office",
     "Bank"
    ],
    "people": [
     "Arthur the attorney",
     "Bea the blacksmith",
     "Cora the cattle driver",
     "Daisy the dancer",
     "Vivian the vaquero"
    ],
    "victim": 4,
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
      1,
      "bandit"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "next",
      "barrel"
     ]
    ],
    "solution": [
     4,
     6,
     10,
     17,
     23
    ],
    "doors": [
     [
      1,
      6
     ],
     [
      5,
      10
     ],
     [
      7,
      12
     ],
     [
      11,
      12
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      5,
      "l"
     ],
     [
      19,
      "r"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "corner",
      null,
      2
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 1,
    "lawful": [
     2
    ],
    "group": 0
   },
   {
    "size": 6,
    "rooms": "001111001111001111223344223344223344",
    "objects": "df.......e..f..cb...b.....a........d",
    "roomNames": [
     "Sheriff Office",
     "Livery",
     "Hotel",
     "Corral",
     "Saloon"
    ],
    "people": [
     "Vivian the vet",
     "Arthur the attorney",
     "Birgit the banker",
     "Cora the cook",
     "Dora the deputy",
     "Edith the editor"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "window"
     ],
     [
      1,
      "next",
      "horse"
     ],
     [
      1,
      "col",
      1
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "bandit"
     ],
     [
      4,
      "next",
      "chair"
     ],
     [
      5,
      "next",
      "cactus"
     ]
    ],
    "solution": [
     5,
     7,
     14,
     18,
     27,
     34
    ],
    "doors": [
     [
      1,
      2
     ],
     [
      13,
      19
     ],
     [
      14,
      20
     ],
     [
      16,
      22
     ],
     [
      25,
      26
     ],
     [
      21,
      22
     ]
    ],
    "windows": [
     [
      5,
      "r"
     ],
     [
      12,
      "l"
     ],
     [
      30,
      "b"
     ],
     [
      35,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "roomCount",
      0,
      1
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 2,
    "lawful": [
     1
    ],
    "group": 0
   },
   {
    "size": 7,
    "rooms": "0000111000011122221112222111333444433344443334444",
    "objects": "..b........f....d.ba.b..be....fb.d.acf.a.......f.",
    "roomNames": [
     "Barber",
     "Church",
     "Saloon",
     "Sheriff Office",
     "Corral"
    ],
    "people": [
     "Albert the attorney",
     "Basil the blacksmith",
     "Cora the cook",
     "Daisy the dancer",
     "Vince the vaquero",
     "Elsa the editor",
     "Frank the farrier"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "next",
      "bed"
     ],
     [
      1,
      "bandit"
     ],
     [
      2,
      "next",
      "chair"
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
      "next",
      "bed"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "next",
      "horse"
     ],
     [
      5,
      "next",
      "chair"
     ],
     [
      6,
      "next",
      "horse"
     ]
    ],
    "solution": [
     3,
     7,
     20,
     22,
     32,
     40,
     44
    ],
    "doors": [
     [
      10,
      11
     ],
     [
      8,
      15
     ],
     [
      24,
      25
     ],
     [
      25,
      32
     ],
     [
      22,
      29
     ],
     [
      24,
      31
     ],
     [
      30,
      31
     ]
    ],
    "windows": [
     [
      28,
      "l"
     ],
     [
      42,
      "l"
     ],
     [
      46,
      "b"
     ],
     [
      48,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "windowCount",
      null,
      0
     ],
     [
      "roomCount",
      0,
      2
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 2,
    "lawful": [
     4
    ],
    "group": 0
   },
   {
    "size": 8,
    "rooms": "0001122200011222000112220001122233344555333445553334455533344555",
    "objects": "fda...........e......bdee.........a.f..e...d.f.b..befec.....d...",
    "roomNames": [
     "General Store",
     "Church",
     "Bank",
     "Telegraph Office",
     "Hotel",
     "Jail"
    ],
    "people": [
     "Albert the auctioneer",
     "Bella the banker",
     "Cora the cook",
     "Viola the vet",
     "Dmitri the deputy",
     "Edgar the engineer",
     "Felix the farrier",
     "Grace the gunsmith"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      0,
      "col",
      4
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
      "row",
      3
     ],
     [
      4,
      "same",
      7
     ],
     [
      5,
      "alone"
     ],
     [
      6,
      "next",
      "barrel"
     ],
     [
      7,
      "next",
      "barrel"
     ],
     [
      7,
      "row",
      7
     ]
    ],
    "solution": [
     4,
     11,
     16,
     26,
     37,
     41,
     55,
     62
    ],
    "doors": [
     [
      18,
      19
     ],
     [
      25,
      33
     ],
     [
      12,
      13
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
      42,
      43
     ],
     [
      60,
      61
     ]
    ],
    "windows": [
     [
      31,
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
      61,
      "b"
     ],
     [
      63,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "nextCount",
      "piano",
      1
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 2,
    "lawful": [
     0
    ],
    "group": 0
   },
   {
    "size": 9,
    "rooms": "000011111000011111000011111222233344222233344222233344555533344555566666555566666",
    "objects": "...d.ac.a...e...a.............d.....b.........d.b....b.......ca..d.a...eea.....f.",
    "roomNames": [
     "Telegraph Office",
     "Hotel",
     "Saloon",
     "Barber",
     "Mine",
     "Livery",
     "Corral"
    ],
    "people": [
     "Arthur the auctioneer",
     "Bella the banker",
     "Clara the cattle driver",
     "Vera the vet",
     "Dmitri the deputy",
     "Elsa the editor",
     "Freya the farmer",
     "Grace the gambler",
     "Henrik the hatmaker"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "bandit"
     ],
     [
      1,
      "col",
      5
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
      "row",
      3
     ],
     [
      4,
      "next",
      "cactus"
     ],
     [
      5,
      "door"
     ],
     [
      5,
      "col",
      7
     ],
     [
      6,
      "door"
     ],
     [
      7,
      "next",
      "chair"
     ],
     [
      7,
      "next",
      "cactus"
     ],
     [
      8,
      "window"
     ]
    ],
    "solution": [
     0,
     14,
     26,
     31,
     39,
     52,
     60,
     64,
     74
    ],
    "doors": [
     [
      21,
      22
     ],
     [
      19,
      28
     ],
     [
      22,
      31
     ],
     [
      25,
      34
     ],
     [
      48,
      49
     ],
     [
      45,
      54
     ],
     [
      51,
      52
     ],
     [
      57,
      58
     ],
     [
      60,
      69
     ],
     [
      62,
      71
     ],
     [
      75,
      76
     ]
    ],
    "windows": [
     [
      18,
      "l"
     ],
     [
      72,
      "l"
     ],
     [
      73,
      "b"
     ],
     [
      74,
      "b"
     ],
     [
      78,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "nextCount",
      "barrel",
      1
     ],
     [
      "nextCount",
      "horse",
      0
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 3,
    "lawful": [
     1,
     3
    ],
    "group": 0
   },
   {
    "size": 10,
    "rooms": "0011112222001111222200111122220033332222003333222233334455553333445555666644777766664477776666447777",
    "objects": "e.a.cca.a......a..c....dbc...d..f..c..b.f..c..b.d..a.a.....bf..f.....af.....b......b.a.bca...ed.b.a.",
    "roomNames": [
     "Mine",
     "Hotel",
     "Church",
     "Jail",
     "Telegraph Office",
     "Livery",
     "General Store",
     "Sheriff Office"
    ],
    "people": [
     "Albert the auctioneer",
     "Bella the banker",
     "Cedric the cook",
     "Vince the vaquero",
     "Della the deputy",
     "Elias the engineer",
     "Frank the farrier",
     "Gus the gambler",
     "Henrik the homesteader",
     "Ivo the inventor"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "next",
      "chair"
     ],
     [
      0,
      "next",
      "barrel"
     ],
     [
      0,
      "same",
      1
     ],
     [
      1,
      "next",
      "chair"
     ],
     [
      2,
      "alone"
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
      5,
      "row",
      5
     ],
     [
      6,
      "door"
     ],
     [
      6,
      "same",
      9
     ],
     [
      6,
      "bandit"
     ],
     [
      7,
      "next",
      "chair"
     ],
     [
      8,
      "next",
      "horse"
     ],
     [
      9,
      "next",
      "cactus"
     ]
    ],
    "solution": [
     3,
     12,
     21,
     38,
     46,
     57,
     64,
     79,
     80,
     95
    ],
    "doors": [
     [
      1,
      2
     ],
     [
      40,
      50
     ],
     [
      25,
      26
     ],
     [
      22,
      32
     ],
     [
      35,
      36
     ],
     [
      46,
      56
     ],
     [
      63,
      64
     ],
     [
      60,
      70
     ],
     [
      55,
      56
     ],
     [
      93,
      94
     ],
     [
      85,
      86
     ],
     [
      68,
      78
     ]
    ],
    "windows": [
     [
      4,
      "t"
     ],
     [
      39,
      "r"
     ],
     [
      50,
      "l"
     ],
     [
      59,
      "r"
     ],
     [
      89,
      "r"
     ],
     [
      96,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "roomCount",
      1,
      2
     ],
     [
      "onCount",
      "bed",
      2
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 3,
    "lawful": [
     2,
     6
    ],
    "group": 0
   },
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
    ],
    "tries": 2,
    "group": 1
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
    ],
    "tries": 2,
    "group": 1
   },
   {
    "size": 6,
    "rooms": "001122001122001122331122334444334444",
    "objects": "b.....b.c.f..f..c..d....ccf.ee.bef..",
    "roomNames": [
     "Jail",
     "Bank",
     "Mine",
     "Barber",
     "Saloon"
    ],
    "people": [
     "Alma the auctioneer",
     "Viola the vet",
     "Birgit the banker",
     "Cedric the cattle driver",
     "Dora the dancer",
     "Edgar the editor"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "on",
      "bed"
     ],
     [
      1,
      "next",
      "horse"
     ],
     [
      2,
      "next",
      "barrel"
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "next",
      "barrel"
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
      "bandit"
     ]
    ],
    "solution": [
     0,
     11,
     14,
     22,
     27,
     31
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
      21,
      22
     ],
     [
      19,
      20
     ],
     [
      20,
      26
     ],
     [
      23,
      29
     ],
     [
      25,
      26
     ]
    ],
    "windows": [
     [
      4,
      "t"
     ],
     [
      18,
      "l"
     ],
     [
      24,
      "l"
     ],
     [
      31,
      "b"
     ]
    ],
    "tries": 2,
    "rules": [
     "bandits"
    ],
    "bandits": 2,
    "lawful": [
     0
    ],
    "group": 1
   },
   {
    "size": 7,
    "rooms": "0000111000011122221112222111333344433334443333444",
    "objects": ".b..c...cf.d...e.a.b....ecb..f...fd.d..f....f..b.",
    "roomNames": [
     "Mine",
     "General Store",
     "Telegraph Office",
     "Livery",
     "Jail"
    ],
    "people": [
     "Ada the attorney",
     "Basil the banker",
     "Cedric the cattle driver",
     "Victor the vaquero",
     "Dexter the dancer",
     "Edgar the engineer",
     "Freya the farmer"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "bandit"
     ],
     [
      1,
      "next",
      "barrel"
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
      "next",
      "bed"
     ],
     [
      3,
      "withBandit"
     ],
     [
      4,
      "next",
      "horse"
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "next",
      "cactus"
     ]
    ],
    "solution": [
     5,
     7,
     16,
     27,
     32,
     38,
     43
    ],
    "doors": [
     [
      10,
      11
     ],
     [
      7,
      14
     ],
     [
      24,
      25
     ],
     [
      26,
      33
     ],
     [
      24,
      31
     ],
     [
      38,
      39
     ]
    ],
    "windows": [
     [
      6,
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
      44,
      "b"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "roomCount",
      1,
      2
     ],
     [
      "roomCount",
      0,
      1
     ],
     [
      "nextCount",
      "cactus",
      1
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 2,
    "lawful": [
     3
    ],
    "group": 1
   },
   {
    "size": 8,
    "rooms": "0001111100011111000222330002223300022233444555334445553344455533",
    "objects": ".b.......ea.f..ae.d.bfc.e...a..a..d..d.......e......df.b....cb.c",
    "roomNames": [
     "Saloon",
     "Bank",
     "General Store",
     "Hotel",
     "Jail",
     "Church"
    ],
    "people": [
     "Albert the attorney",
     "Victor the vaquero",
     "Basil the blacksmith",
     "Carl the cook",
     "Dmitri the dancer",
     "Elsa the engineer",
     "Felix the farrier",
     "Grace the gunsmith"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "col",
      4
     ],
     [
      1,
      "next",
      "horse"
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
      4,
      "next",
      "piano"
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "bandit"
     ],
     [
      7,
      "on",
      "bed"
     ]
    ],
    "solution": [
     4,
     11,
     23,
     30,
     32,
     42,
     49,
     61
    ],
    "doors": [
     [
      2,
      3
     ],
     [
      18,
      19
     ],
     [
      34,
      42
     ],
     [
      12,
      20
     ],
     [
      15,
      23
     ],
     [
      37,
      38
     ],
     [
      35,
      43
     ],
     [
      53,
      54
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
      32,
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
    "tries": 2,
    "facts": [
     [
      "nextCount",
      "barrel",
      3
     ],
     [
      "roomCount",
      1,
      2
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 2,
    "lawful": [
     3
    ],
    "group": 1
   },
   {
    "size": 9,
    "rooms": "000112222000112222000112222000113333000113333444455566444455566444455566444455566",
    "objects": "..e....c.aa....f.b...d.cc.c...edb..ea..a.........e........b....adb.d.a....bda.e.e",
    "roomNames": [
     "General Store",
     "Corral",
     "Mine",
     "Barber",
     "Church",
     "Telegraph Office",
     "Hotel"
    ],
    "people": [
     "Ada the auctioneer",
     "Bruno the blacksmith",
     "Clara the cook",
     "Dexter the dancer",
     "Vera the vaquero",
     "Elias the engineer",
     "Frank the farrier",
     "Grace the gunsmith",
     "Hazel the hatmaker"
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
      2
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "col",
      2
     ],
     [
      3,
      "next",
      "piano"
     ],
     [
      4,
      "on",
      "chair"
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
      6,
      "bandit"
     ],
     [
      7,
      "notRoom",
      3
     ],
     [
      7,
      "next",
      "piano"
     ],
     [
      8,
      "next",
      "chair"
     ],
     [
      8,
      "next",
      "piano"
     ]
    ],
    "solution": [
     1,
     13,
     20,
     34,
     39,
     45,
     60,
     71,
     77
    ],
    "doors": [
     [
      11,
      12
     ],
     [
      38,
      47
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
      39,
      48
     ],
     [
      40,
      49
     ],
     [
      24,
      33
     ],
     [
      42,
      51
     ],
     [
      44,
      53
     ],
     [
      48,
      49
     ],
     [
      78,
      79
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
      26,
      "r"
     ],
     [
      27,
      "l"
     ],
     [
      62,
      "r"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "roomCount",
      0,
      2
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 3,
    "lawful": [
     1,
     4
    ],
    "group": 1
   },
   {
    "size": 10,
    "rooms": "0000011111000001111122222222223333333333444445555544444555554444455555666667777766666777776666677777",
    "objects": "fdb..b...e....d..bd.ed.d......e......ba.c.....f..b....ba..d...........a.b.ae...........b.......b....",
    "roomNames": [
     "Bank",
     "Saloon",
     "Church",
     "Sheriff Office",
     "Telegraph Office",
     "Mine",
     "Livery",
     "Corral"
    ],
    "people": [
     "Ada the attorney",
     "Bea the blacksmith",
     "Celia the cattle driver",
     "Della the dancer",
     "Vince the vaquero",
     "Elsa the editor",
     "Freya the farmer",
     "Grace the gunsmith",
     "Hugo the homesteader",
     "Ivo the innkeeper"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "next",
      "piano"
     ],
     [
      1,
      "room",
      0
     ],
     [
      1,
      "next",
      "bed"
     ],
     [
      2,
      "bandit"
     ],
     [
      3,
      "notRoom",
      2
     ],
     [
      3,
      "door"
     ],
     [
      3,
      "bandit"
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
      9
     ],
     [
      7,
      "on",
      "chair"
     ],
     [
      8,
      "next",
      "piano"
     ],
     [
      8,
      "door"
     ],
     [
      9,
      "same",
      7
     ],
     [
      9,
      "col",
      3
     ]
    ],
    "solution": [
     8,
     12,
     26,
     34,
     47,
     51,
     69,
     70,
     85,
     93
    ],
    "doors": [
     [
      4,
      5
     ],
     [
      14,
      24
     ],
     [
      15,
      25
     ],
     [
      22,
      32
     ],
     [
      34,
      44
     ],
     [
      39,
      49
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
      66,
      76
     ],
     [
      84,
      85
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      4,
      "t"
     ],
     [
      7,
      "t"
     ],
     [
      30,
      "l"
     ],
     [
      79,
      "r"
     ],
     [
      80,
      "l"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "nextCount",
      "barrel",
      0
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 3,
    "lawful": [
     0,
     4
    ],
    "group": 1
   },
   {
    "size": 11,
    "rooms": "0001111222200011112222000111122220001111222233334445555333344455553333444555566664445555666677777776666777777766667777777",
    "objects": "...a............ab.aa.......c.c......b.a..bfa....a...dada.......ae...da.b.f........dda.be..c...bf.b...ca....c.......a..c.",
    "roomNames": [
     "Sheriff Office",
     "Saloon",
     "Mine",
     "Corral",
     "General Store",
     "Church",
     "Jail",
     "Hotel"
    ],
    "people": [
     "Albert the attorney",
     "Basil the blacksmith",
     "Carl the cook",
     "Della the dancer",
     "Ena the editor",
     "Fiona the farrier",
     "Greta the gunsmith",
     "Henrik the hatmaker",
     "Isla the innkeeper",
     "Vivian the vet",
     "Jutta the jailer"
    ],
    "victim": 9,
    "clues": [
     [
      0,
      "bandit"
     ],
     [
      1,
      "on",
      "chair"
     ],
     [
      1,
      "next",
      "bed"
     ],
     [
      2,
      "next",
      "bed"
     ],
     [
      2,
      "bandit"
     ],
     [
      3,
      "col",
      1
     ],
     [
      3,
      "bandit"
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "next",
      "bed"
     ],
     [
      6,
      "next",
      "horse"
     ],
     [
      7,
      "on",
      "chair"
     ],
     [
      7,
      "next",
      "horse"
     ],
     [
      8,
      "next",
      "horse"
     ],
     [
      8,
      "next",
      "bed"
     ],
     [
      9,
      "next",
      "piano"
     ],
     [
      10,
      "next",
      "barrel"
     ]
    ],
    "solution": [
     10,
     16,
     26,
     34,
     46,
     61,
     73,
     85,
     97,
     99,
     113
    ],
    "doors": [
     [
      2,
      3
     ],
     [
      33,
      44
     ],
     [
      28,
      29
     ],
     [
      36,
      47
     ],
     [
      39,
      50
     ],
     [
      40,
      51
     ],
     [
      47,
      48
     ],
     [
      69,
      80
     ],
     [
      50,
      51
     ],
     [
      80,
      81
     ],
     [
      82,
      93
     ],
     [
      84,
      95
     ],
     [
      113,
      114
     ]
    ],
    "windows": [
     [
      21,
      "r"
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
      77,
      "l"
     ],
     [
      88,
      "l"
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
    "tries": 1,
    "facts": [
     [
      "roomCount",
      2,
      1
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 3,
    "lawful": [
     3,
     4
    ],
    "group": 1
   },
   {
    "size": 12,
    "rooms": "000011111111000011111111000011122222000011122222000011122222333344445555333344445555333344445555666677778888666677778888666677778888666677778888",
    "objects": ".dfcb....b............db.....fd.d.cf.....b.b............b..b..bb....e............c.b...b....d..b...ec..a..dd...b..f...d...beb.......ff...be..ad.",
    "roomNames": [
     "Telegraph Office",
     "Jail",
     "Bank",
     "Mine",
     "General Store",
     "Livery",
     "Church",
     "Saloon",
     "Corral"
    ],
    "people": [
     "Astrid the attorney",
     "Birgit the banker",
     "Carl the cook",
     "Daisy the deputy",
     "Elias the engineer",
     "Frank the farrier",
     "Vera the vaquero",
     "Grace the gambler",
     "Hilda the homesteader",
     "Isla the inventor",
     "Jade the jailer",
     "Konrad the keg maker"
    ],
    "victim": 6,
    "clues": [
     [
      0,
      "window"
     ],
     [
      0,
      "col",
      7
     ],
     [
      1,
      "same",
      2
     ],
     [
      2,
      "row",
      2
     ],
     [
      2,
      "col",
      3
     ],
     [
      2,
      "same",
      4
     ],
     [
      3,
      "next",
      "bed"
     ],
     [
      4,
      "col",
      2
     ],
     [
      5,
      "next",
      "bed"
     ],
     [
      5,
      "col",
      11
     ],
     [
      6,
      "next",
      "barrel"
     ],
     [
      7,
      "bandit"
     ],
     [
      8,
      "door"
     ],
     [
      9,
      "alone"
     ],
     [
      10,
      "next",
      "cactus"
     ],
     [
      11,
      "next",
      "bed"
     ],
     [
      11,
      "alone"
     ]
    ],
    "solution": [
     7,
     13,
     27,
     42,
     50,
     71,
     80,
     89,
     105,
     108,
     130,
     136
    ],
    "doors": [
     [
      51,
      52
     ],
     [
      48,
      60
     ],
     [
      54,
      55
     ],
     [
      54,
      66
     ],
     [
      55,
      67
     ],
     [
      56,
      68
     ],
     [
      75,
      76
     ],
     [
      84,
      96
     ],
     [
      67,
      68
     ],
     [
      90,
      102
     ],
     [
      93,
      105
     ],
     [
      111,
      112
     ],
     [
      103,
      104
     ]
    ],
    "windows": [
     [
      5,
      "t"
     ],
     [
      7,
      "t"
     ],
     [
      8,
      "t"
     ],
     [
      60,
      "l"
     ],
     [
      95,
      "r"
     ],
     [
      132,
      "l"
     ],
     [
      134,
      "b"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "nextCount",
      "cactus",
      5
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 3,
    "lawful": [
     6,
     8
    ],
    "group": 1
   },
   {
    "size": 4,
    "rooms": "0000000011221122",
    "objects": "b.e.....e.a.....",
    "roomNames": [
     "Sheriff Office",
     "Jail",
     "Hotel"
    ],
    "people": [
     "Victor the vet",
     "Astrid the auctioneer",
     "Basil the banker",
     "Carl the cook"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "row",
      1
     ],
     [
      2,
      "next",
      "piano"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "withBandit"
     ]
    ],
    "solution": [
     3,
     6,
     9,
     12
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
      11,
      "r"
     ]
    ],
    "tries": 4,
    "rules": [
     "bandits"
    ],
    "bandits": 1,
    "lawful": [
     0
    ],
    "group": 2
   },
   {
    "size": 5,
    "rooms": "0011100111001112223322233",
    "objects": ".a....d.......a..e..b....",
    "roomNames": [
     "Bank",
     "General Store",
     "Barber",
     "Corral"
    ],
    "people": [
     "Ada the auctioneer",
     "Vivian the vet",
     "Birgit the blacksmith",
     "Cedric the cook",
     "Dora the deputy"
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
      "chair"
     ],
     [
      2,
      "door"
     ],
     [
      3,
      "bandit"
     ],
     [
      4,
      "next",
      "piano"
     ]
    ],
    "solution": [
     1,
     9,
     13,
     15,
     22
    ],
    "doors": [
     [
      11,
      12
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
      17,
      18
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
      9,
      "r"
     ]
    ],
    "tries": 3,
    "facts": [
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
     1
    ],
    "group": 2
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
    ],
    "tries": 3,
    "group": 2
   },
   {
    "size": 7,
    "rooms": "0001111000111100011112222333222233344443334444333",
    "objects": "..bc..ea....b..b..f.bd...........b...b.ef........",
    "roomNames": [
     "Barber",
     "Corral",
     "General Store",
     "Sheriff Office",
     "Mine"
    ],
    "people": [
     "Albert the attorney",
     "Bea the blacksmith",
     "Cedric the cattle driver",
     "Daisy the deputy",
     "Vivian the vaquero",
     "Elsa the editor",
     "Fiona the farmer"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "next",
      "bed"
     ],
     [
      1,
      "same",
      2
     ],
     [
      2,
      "next",
      "horse"
     ],
     [
      3,
      "row",
      3
     ],
     [
      4,
      "col",
      3
     ],
     [
      5,
      "alone"
     ],
     [
      5,
      "bandit"
     ],
     [
      6,
      "next",
      "piano"
     ]
    ],
    "solution": [
     1,
     13,
     19,
     23,
     31,
     35,
     46
    ],
    "doors": [
     [
      9,
      10
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
      18,
      25
     ],
     [
      24,
      25
     ],
     [
      30,
      37
     ],
     [
      38,
      39
     ]
    ],
    "windows": [
     [
      0,
      "t"
     ],
     [
      6,
      "t"
     ],
     [
      27,
      "r"
     ],
     [
      48,
      "b"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "roomCount",
      2,
      2
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 2,
    "lawful": [
     0
    ],
    "group": 2
   },
   {
    "size": 8,
    "rooms": "0000111100001111000011112334444423344444233444442335555523355555",
    "objects": "..e..c.ee...c.e.e..e..f.cf......e........c...ede..a...f...a.....",
    "roomNames": [
     "Jail",
     "Corral",
     "Mine",
     "Bank",
     "Saloon",
     "Hotel"
    ],
    "people": [
     "Ada the auctioneer",
     "Birgit the blacksmith",
     "Cedric the cattle driver",
     "Victor the vet",
     "Dexter the deputy",
     "Ena the editor",
     "Flora the farrier",
     "Gwen the gambler"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "window"
     ],
     [
      1,
      "next",
      "piano"
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
      4,
      "next",
      "cactus"
     ],
     [
      5,
      "next",
      "chair"
     ],
     [
      6,
      "next",
      "horse"
     ],
     [
      7,
      "col",
      7
     ],
     [
      7,
      "withBandit"
     ]
    ],
    "solution": [
     0,
     11,
     17,
     28,
     38,
     42,
     53,
     63
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      16,
      24
     ],
     [
      18,
      26
     ],
     [
      19,
      27
     ],
     [
      20,
      28
     ],
     [
      32,
      33
     ],
     [
      34,
      35
     ],
     [
      58,
      59
     ],
     [
      46,
      54
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
     ],
     [
      15,
      "r"
     ],
     [
      40,
      "l"
     ],
     [
      58,
      "b"
     ]
    ],
    "tries": 4,
    "facts": [
     [
      "corner",
      null,
      2
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 2,
    "lawful": [
     4
    ],
    "group": 2
   },
   {
    "size": 9,
    "rooms": "001112222001112222001112222001112222333445555333445555333445555333446666333446666",
    "objects": ".......b......ddf.a..b...b..a...a.........b..cc..d......aa..b...a.cb..........d..",
    "roomNames": [
     "Saloon",
     "Bank",
     "Corral",
     "Telegraph Office",
     "Jail",
     "Hotel",
     "Mine"
    ],
    "people": [
     "Vince the vaquero",
     "Arthur the attorney",
     "Bruno the blacksmith",
     "Cora the cattle driver",
     "Della the deputy",
     "Elias the engineer",
     "Frank the farmer",
     "Gideon the gambler",
     "Henrik the hatmaker"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "next",
      "bed"
     ],
     [
      1,
      "next",
      "horse"
     ],
     [
      2,
      "col",
      4
     ],
     [
      3,
      "next",
      "bed"
     ],
     [
      3,
      "bandit"
     ],
     [
      4,
      "door"
     ],
     [
      4,
      "same",
      6
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "on",
      "chair"
     ],
     [
      7,
      "next",
      "chair"
     ],
     [
      8,
      "next",
      "cactus"
     ]
    ],
    "solution": [
     6,
     17,
     22,
     30,
     37,
     50,
     56,
     63,
     79
    ],
    "doors": [
     [
      19,
      20
     ],
     [
      28,
      37
     ],
     [
      13,
      14
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
      32,
      41
     ],
     [
      65,
      66
     ],
     [
      49,
      50
     ],
     [
      76,
      77
     ],
     [
      59,
      68
     ]
    ],
    "windows": [
     [
      2,
      "t"
     ],
     [
      8,
      "t"
     ],
     [
      44,
      "r"
     ],
     [
      53,
      "r"
     ],
     [
      54,
      "l"
     ]
    ],
    "tries": 3,
    "facts": [
     [
      "touch",
      null,
      1
     ],
     [
      "roomCount",
      3,
      3
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 3,
    "lawful": [
     2,
     5
    ],
    "group": 2
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
    ],
    "tries": 3,
    "group": 2
   },
   {
    "size": 11,
    "rooms": "0000111122200001111222000011112220000111122200001111222333333444443333334444455555555555666677777776666777777766667777777",
    "objects": ".....afe..........c............f.ae....bd.............e...f......f.ba...bc.ece.b..b.c.df....c.......a...db...a......a....",
    "roomNames": [
     "Bank",
     "Saloon",
     "Church",
     "Livery",
     "Corral",
     "Jail",
     "Telegraph Office",
     "Barber"
    ],
    "people": [
     "Ada the auctioneer",
     "Bruno the blacksmith",
     "Celia the cattle driver",
     "Dora the deputy",
     "Elsa the editor",
     "Fiona the farmer",
     "Gideon the gunsmith",
     "Hilda the homesteader",
     "Ivy the innkeeper",
     "Jasper the jailer",
     "Viola the vaquero"
    ],
    "victim": 10,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      0,
      "alone"
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
      "next",
      "horse"
     ],
     [
      3,
      "row",
      3
     ],
     [
      4,
      "next",
      "bed"
     ],
     [
      4,
      "withBandit"
     ],
     [
      5,
      "notRoom",
      7
     ],
     [
      5,
      "next",
      "barrel"
     ],
     [
      6,
      "on",
      "chair"
     ],
     [
      7,
      "next",
      "bed"
     ],
     [
      8,
      "col",
      8
     ],
     [
      8,
      "alone"
     ],
     [
      9,
      "next",
      "chair"
     ],
     [
      10,
      "next",
      "chair"
     ],
     [
      10,
      "row",
      10
     ]
    ],
    "solution": [
     3,
     21,
     27,
     42,
     50,
     62,
     68,
     81,
     96,
     99,
     111
    ],
    "doors": [
     [
      25,
      26
     ],
     [
      45,
      56
     ],
     [
      40,
      41
     ],
     [
      49,
      60
     ],
     [
      50,
      61
     ],
     [
      52,
      63
     ],
     [
      60,
      61
     ],
     [
      67,
      78
     ],
     [
      75,
      86
     ],
     [
      80,
      91
     ],
     [
      86,
      97
     ],
     [
      113,
      114
     ]
    ],
    "windows": [
     [
      0,
      "t"
     ],
     [
      9,
      "t"
     ],
     [
      77,
      "l"
     ],
     [
      109,
      "r"
     ],
     [
      113,
      "b"
     ],
     [
      114,
      "b"
     ],
     [
      119,
      "b"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "roomCount",
      0,
      1
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 3,
    "lawful": [
     0,
     6
    ],
    "group": 2
   },
   {
    "size": 12,
    "rooms": "000011222222000011222222000011222222000011222222000011333333000011333333444445556666444445556666444445557777888885557777888885557777888885557777",
    "objects": "..b..dba.bb...b..b..b...cfa..b.d..c..aa.....b.....b.......a..........f...cb............c.b..b.c.fa...f..e............ac.....d.....a.edf.e.....a.",
    "roomNames": [
     "Bank",
     "Jail",
     "Telegraph Office",
     "General Store",
     "Church",
     "Corral",
     "Saloon",
     "Livery",
     "Hotel"
    ],
    "people": [
     "Astrid the attorney",
     "Birgit the blacksmith",
     "Cedric the cattle driver",
     "Victor the vaquero",
     "Della the dancer",
     "Elias the engineer",
     "Felix the farrier",
     "Greta the gunsmith",
     "Hazel the hatmaker",
     "Ines the inventor",
     "Jade the judge",
     "Kira the keg maker"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "on",
      "bed"
     ],
     [
      0,
      "next",
      "chair"
     ],
     [
      1,
      "next",
      "bed"
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "next",
      "chair"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "same",
      4
     ],
     [
      5,
      "next",
      "horse"
     ],
     [
      6,
      "next",
      "bed"
     ],
     [
      6,
      "door"
     ],
     [
      6,
      "bandit"
     ],
     [
      7,
      "bandit"
     ],
     [
      8,
      "on",
      "chair"
     ],
     [
      9,
      "next",
      "cactus"
     ],
     [
      9,
      "same",
      10
     ],
     [
      10,
      "next",
      "horse"
     ],
     [
      11,
      "window"
     ]
    ],
    "solution": [
     6,
     15,
     29,
     36,
     59,
     70,
     80,
     91,
     97,
     112,
     122,
     141
    ],
    "doors": [
     [
      27,
      28
     ],
     [
      60,
      72
     ],
     [
      17,
      18
     ],
     [
      65,
      66
     ],
     [
      64,
      76
     ],
     [
      65,
      77
     ],
     [
      47,
      59
     ],
     [
      67,
      79
     ],
     [
      71,
      83
     ],
     [
      88,
      89
     ],
     [
      96,
      108
     ],
     [
      79,
      80
     ],
     [
      115,
      116
     ],
     [
      136,
      137
     ],
     [
      92,
      104
     ]
    ],
    "windows": [
     [
      5,
      "t"
     ],
     [
      83,
      "r"
     ],
     [
      96,
      "l"
     ],
     [
      132,
      "b"
     ],
     [
      133,
      "b"
     ],
     [
      138,
      "b"
     ],
     [
      141,
      "b"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "nextCount",
      "horse",
      3
     ],
     [
      "roomCount",
      3,
      2
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 3,
    "lawful": [
     0,
     1
    ],
    "group": 2
   },
   {
    "size": 4,
    "rooms": "0000000011221122",
    "objects": "a..........b....",
    "roomNames": [
     "General Store",
     "Bank",
     "Livery"
    ],
    "people": [
     "Vince the vet",
     "Alma the attorney",
     "Basil the banker",
     "Cedric the cook"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "door"
     ],
     [
      2,
      "bandit"
     ],
     [
      3,
      "alone"
     ]
    ],
    "solution": [
     2,
     5,
     8,
     15
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
      3,
      "r"
     ],
     [
      4,
      "l"
     ]
    ],
    "tries": 9,
    "facts": [
     [
      "furniture",
      null,
      0
     ],
     [
      "corner",
      null,
      2
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 1,
    "lawful": [
     2
    ],
    "group": 3
   },
   {
    "size": 5,
    "rooms": "0001100011223332233322333",
    "objects": "f.a.a.f....b.............",
    "roomNames": [
     "Mine",
     "General Store",
     "Corral",
     "Barber"
    ],
    "people": [
     "Vince the vaquero",
     "Alma the attorney",
     "Basil the blacksmith",
     "Carl the cattle driver",
     "Daisy the deputy"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "door"
     ],
     [
      1,
      "next",
      "chair"
     ],
     [
      2,
      "door"
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "row",
      3
     ],
     [
      4,
      "withBandit"
     ]
    ],
    "solution": [
     3,
     9,
     12,
     15,
     21
    ],
    "doors": [
     [
      2,
      3
     ],
     [
      5,
      10
     ],
     [
      7,
      12
     ],
     [
      8,
      13
     ],
     [
      16,
      17
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      23,
      "b"
     ],
     [
      24,
      "b"
     ]
    ],
    "tries": 8,
    "facts": [
     [
      "edge",
      null,
      4
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 1,
    "lawful": [
     3
    ],
    "group": 3
   },
   {
    "size": 6,
    "rooms": "000111000111000111223344223344223344",
    "objects": "c....e.d..b..b...fc..cd...a....afdeb",
    "roomNames": [
     "Mine",
     "Church",
     "General Store",
     "Livery",
     "Bank"
    ],
    "people": [
     "Astrid the attorney",
     "Bea the blacksmith",
     "Cedric the cook",
     "Daisy the deputy",
     "Vera the vet",
     "Edith the editor"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "withBandit"
     ],
     [
      1,
      "next",
      "horse"
     ],
     [
      2,
      "next",
      "bed"
     ],
     [
      3,
      "next",
      "barrel"
     ],
     [
      4,
      "next",
      "cactus"
     ],
     [
      5,
      "on",
      "chair"
     ]
    ],
    "solution": [
     4,
     11,
     12,
     20,
     27,
     31
    ],
    "doors": [
     [
      8,
      9
     ],
     [
      13,
      19
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
      17,
      23
     ],
     [
      19,
      20
     ],
     [
      21,
      22
     ]
    ],
    "windows": [
     [
      0,
      "l"
     ],
     [
      11,
      "r"
     ],
     [
      18,
      "l"
     ],
     [
      33,
      "b"
     ]
    ],
    "tries": 7,
    "rules": [
     "bandits"
    ],
    "bandits": 2,
    "lawful": [
     0
    ],
    "group": 3
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
    ],
    "tries": 7,
    "group": 3
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
    ],
    "tries": 6,
    "group": 3
   },
   {
    "size": 9,
    "rooms": "001223333001223333001223333001224444001224444111144555111144555666644555666644555",
    "objects": ".b.bf..aba....bb..c....d..ba.ab...f...d.c...a....dd..a....bc.e.e...............ba",
    "roomNames": [
     "General Store",
     "Telegraph Office",
     "Church",
     "Sheriff Office",
     "Barber",
     "Livery",
     "Jail"
    ],
    "people": [
     "Astrid the auctioneer",
     "Vivian the vaquero",
     "Bella the blacksmith",
     "Carl the cattle driver",
     "Dmitri the dancer",
     "Edgar the engineer",
     "Freya the farmer",
     "Gus the gunsmith",
     "Hazel the hatmaker"
    ],
    "victim": 1,
    "clues": [
     [
      0,
      "on",
      "bed"
     ],
     [
      1,
      "on",
      "bed"
     ],
     [
      2,
      "next",
      "bed"
     ],
     [
      3,
      "on",
      "chair"
     ],
     [
      4,
      "col",
      6
     ],
     [
      4,
      "withBandit"
     ],
     [
      5,
      "col",
      1
     ],
     [
      6,
      "next",
      "piano"
     ],
     [
      6,
      "alone"
     ],
     [
      7,
      "notRoom",
      1
     ],
     [
      8,
      "window"
     ]
    ],
    "solution": [
     3,
     14,
     25,
     27,
     42,
     46,
     62,
     65,
     76
    ],
    "doors": [
     [
      10,
      11
     ],
     [
      29,
      30
     ],
     [
      48,
      49
     ],
     [
      55,
      64
     ],
     [
      4,
      5
     ],
     [
      40,
      49
     ],
     [
      23,
      32
     ],
     [
      77,
      78
     ],
     [
      75,
      76
     ]
    ],
    "windows": [
     [
      8,
      "r"
     ],
     [
      18,
      "l"
     ],
     [
      27,
      "l"
     ],
     [
      44,
      "r"
     ],
     [
      76,
      "b"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "furniture",
      null,
      3
     ],
     [
      "windowCount",
      null,
      2
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 3,
    "lawful": [
     0,
     1
    ],
    "group": 3
   },
   {
    "size": 10,
    "rooms": "0000111111000011111100002222220000222222333322444433332244445556666777555666677755566667775556666777",
    "objects": "....efa.df...a.fac...a.cb..fa.......c.a..f...d.de....ead..f....a.ba.da....a..d.e..........d.......e.",
    "roomNames": [
     "Barber",
     "Bank",
     "Hotel",
     "General Store",
     "Saloon",
     "Telegraph Office",
     "Church",
     "Jail"
    ],
    "people": [
     "Astrid the auctioneer",
     "Bruno the blacksmith",
     "Cora the cook",
     "Daisy the deputy",
     "Edgar the editor",
     "Flora the farrier",
     "Greta the gunsmith",
     "Vivian the vet",
     "Hugo the hatmaker",
     "Isla the inventor"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "withBandit"
     ],
     [
      1,
      "next",
      "chair"
     ],
     [
      2,
      "next",
      "bed"
     ],
     [
      3,
      "on",
      "chair"
     ],
     [
      4,
      "next",
      "chair"
     ],
     [
      4,
      "next",
      "cactus"
     ],
     [
      5,
      "next",
      "horse"
     ],
     [
      6,
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
      "chair"
     ],
     [
      7,
      "col",
      6
     ],
     [
      8,
      "bandit"
     ],
     [
      9,
      "next",
      "piano"
     ]
    ],
    "solution": [
     0,
     12,
     25,
     38,
     44,
     51,
     69,
     76,
     83,
     97
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      23,
      24
     ],
     [
      30,
      40
     ],
     [
      18,
      28
     ],
     [
      53,
      54
     ],
     [
      45,
      46
     ],
     [
      55,
      65
     ],
     [
      52,
      62
     ],
     [
      53,
      63
     ],
     [
      56,
      66
     ],
     [
      57,
      67
     ],
     [
      62,
      63
     ],
     [
      66,
      67
     ]
    ],
    "windows": [
     [
      4,
      "t"
     ],
     [
      49,
      "r"
     ],
     [
      70,
      "l"
     ],
     [
      96,
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
    "tries": 10,
    "facts": [
     [
      "roomCount",
      2,
      3
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 3,
    "lawful": [
     2,
     7
    ],
    "group": 3
   },
   {
    "size": 11,
    "rooms": "0000112233300001122333000011223330000112233300001122333444455556664444555566644445555666444455556667777555566677775555666",
    "objects": "....a.....ba.f..bbf.c..b......b.......bb......b.aab.f...af...afa..ca..ac.....c.df.db.ec...b.ad....db..f........ff.....d..",
    "roomNames": [
     "Corral",
     "General Store",
     "Mine",
     "Church",
     "Hotel",
     "Livery",
     "Sheriff Office",
     "Telegraph Office"
    ],
    "people": [
     "Albert the auctioneer",
     "Bruno the blacksmith",
     "Carl the cattle driver",
     "Daisy the dancer",
     "Edgar the engineer",
     "Felix the farmer",
     "Gideon the gambler",
     "Hugo the homesteader",
     "Ivo the innkeeper",
     "Jasper the judge",
     "Victor the vaquero"
    ],
    "victim": 10,
    "clues": [
     [
      0,
      "on",
      "chair"
     ],
     [
      0,
      "alone"
     ],
     [
      1,
      "on",
      "chair"
     ],
     [
      2,
      "withBandit"
     ],
     [
      3,
      "next",
      "bed"
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
      "next",
      "horse"
     ],
     [
      6,
      "next",
      "piano"
     ],
     [
      7,
      "next",
      "chair"
     ],
     [
      8,
      "same",
      5
     ],
     [
      8,
      "row",
      8
     ],
     [
      9,
      "same",
      8
     ],
     [
      10,
      "next",
      "cactus"
     ]
    ],
    "solution": [
     4,
     11,
     25,
     35,
     54,
     61,
     74,
     78,
     95,
     104,
     119
    ],
    "doors": [
     [
      14,
      15
     ],
     [
      47,
      58
     ],
     [
      27,
      28
     ],
     [
      49,
      60
     ],
     [
      40,
      41
     ],
     [
      51,
      62
     ],
     [
      54,
      65
     ],
     [
      80,
      81
     ],
     [
      88,
      99
     ],
     [
      117,
      118
     ],
     [
      113,
      114
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
      77,
      "l"
     ],
     [
      110,
      "b"
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
      120,
      "b"
     ]
    ],
    "tries": 9,
    "rules": [
     "bandits"
    ],
    "bandits": 3,
    "lawful": [
     1,
     4
    ],
    "group": 3
   },
   {
    "size": 12,
    "rooms": "001111222222001111222222001111222222001111222222333333444444333333444444333333444444555666778888555666778888555666778888555666778888555666778888",
    "objects": "e.cece......a..ba....ad...b................b.f..a.......a.b...e...ff..ef...a.a.......c.....ff.f..a.b...a..cd.b..af..f.e......a..ae...b...a......",
    "roomNames": [
     "Saloon",
     "Bank",
     "Hotel",
     "Church",
     "Jail",
     "Livery",
     "Barber",
     "Corral",
     "Sheriff Office"
    ],
    "people": [
     "Vera the vaquero",
     "Arthur the auctioneer",
     "Bea the blacksmith",
     "Carl the cook",
     "Dexter the dancer",
     "Elsa the editor",
     "Flora the farrier",
     "Gideon the gunsmith",
     "Hilda the hatmaker",
     "Ivy the inventor",
     "Juno the jailer",
     "Kai the knife thrower"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "col",
      6
     ],
     [
      1,
      "on",
      "chair"
     ],
     [
      1,
      "next",
      "cactus"
     ],
     [
      2,
      "on",
      "bed"
     ],
     [
      2,
      "bandit"
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "same",
      5
     ],
     [
      5,
      "next",
      "chair"
     ],
     [
      6,
      "row",
      6
     ],
     [
      7,
      "next",
      "horse"
     ],
     [
      8,
      "on",
      "bed"
     ],
     [
      9,
      "on",
      "bed"
     ],
     [
      9,
      "next",
      "chair"
     ],
     [
      10,
      "on",
      "chair"
     ],
     [
      11,
      "window"
     ]
    ],
    "solution": [
     6,
     21,
     26,
     36,
     52,
     65,
     79,
     95,
     99,
     109,
     128,
     142
    ],
    "doors": [
     [
      25,
      26
     ],
     [
      36,
      48
     ],
     [
      41,
      42
     ],
     [
      39,
      51
     ],
     [
      47,
      59
     ],
     [
      53,
      54
     ],
     [
      73,
      85
     ],
     [
      77,
      89
     ],
     [
      78,
      90
     ],
     [
      80,
      92
     ],
     [
      110,
      111
     ],
     [
      125,
      126
     ],
     [
      115,
      116
     ]
    ],
    "windows": [
     [
      35,
      "r"
     ],
     [
      71,
      "r"
     ],
     [
      138,
      "b"
     ],
     [
      140,
      "b"
     ],
     [
      142,
      "b"
     ],
     [
      143,
      "b"
     ],
     [
      143,
      "r"
     ]
    ],
    "tries": 8,
    "facts": [
     [
      "roomCount",
      6,
      1
     ]
    ],
    "rules": [
     "bandits"
    ],
    "bandits": 3,
    "lawful": [
     5,
     6
    ],
    "group": 3
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
    "sea": 0,
    "tries": 0,
    "group": 0
   },
   {
    "size": 5,
    "rooms": "0011100111222112221133311",
    "objects": "b....b.........b.a....c..",
    "roomNames": [
     "Market",
     "Open Sea",
     "Sea Cave",
     "Galleon"
    ],
    "people": [
     "Alma the admiral",
     "Bruno the barkeep",
     "Cora the captain",
     "Vivian the voyager",
     "Dexter the deckhand"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      1,
      "next",
      "hammock"
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "next",
      "hammock"
     ],
     [
      4,
      "col",
      4
     ]
    ],
    "solution": [
     3,
     6,
     10,
     17,
     24
    ],
    "doors": [
     [
      5,
      10
     ],
     [
      15,
      20
     ]
    ],
    "windows": [
     [
      5,
      "l"
     ],
     [
      20,
      "l"
     ],
     [
      21,
      "b"
     ]
    ],
    "tries": 0,
    "rules": [
     "sea"
    ],
    "sea": 1,
    "group": 0
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
    "tries": 0,
    "facts": [
     [
      "roomCount",
      0,
      0
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 3,
    "group": 0
   },
   {
    "size": 7,
    "rooms": "0000111000011100001112330044233004423300442330044",
    "objects": ".....a.............d.......f.......fb...db..b..b.",
    "roomNames": [
     "Open Sea",
     "Sea Cave",
     "Longboat",
     "Galleon",
     "Fort"
    ],
    "people": [
     "Alma the armorer",
     "Bruno the barkeep",
     "Carl the captain",
     "Vince the voyager",
     "Dora the deckhand",
     "Ena the engineer",
     "Fiona the fiddler"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "col",
      0
     ],
     [
      1,
      "notRoom",
      0
     ],
     [
      1,
      "row",
      1
     ],
     [
      2,
      "row",
      2
     ],
     [
      4,
      "next",
      "hammock"
     ],
     [
      5,
      "next",
      "crate"
     ],
     [
      6,
      "window"
     ]
    ],
    "solution": [
     0,
     11,
     17,
     23,
     29,
     41,
     47
    ],
    "doors": [
     [
      19,
      26
     ],
     [
      21,
      22
     ]
    ],
    "windows": [
     [
      6,
      "t"
     ],
     [
      21,
      "l"
     ],
     [
      42,
      "b"
     ],
     [
      47,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "roomCount",
      4,
      2
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 0,
    "group": 0
   },
   {
    "size": 8,
    "rooms": "0000001100000011000000110000001122223333222233334444555544445555",
    "objects": ".......e......b.....................a......a.ad..........a.a...f",
    "roomNames": [
     "Open Sea",
     "Market",
     "Frigate",
     "Fort",
     "Sloop",
     "Longboat"
    ],
    "people": [
     "Ada the armorer",
     "Bruno the barkeep",
     "Celia the cook",
     "Dmitri the deckhand",
     "Viola the vintner",
     "Elsa the explorer",
     "Flora the first mate",
     "Gwen the gunner"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "next",
      "hammock"
     ],
     [
      1,
      "row",
      1
     ],
     [
      2,
      "row",
      2
     ],
     [
      2,
      "col",
      2
     ],
     [
      3,
      "col",
      5
     ],
     [
      4,
      "notRoom",
      1
     ],
     [
      5,
      "next",
      "stool"
     ],
     [
      6,
      "col",
      3
     ],
     [
      6,
      "same",
      7
     ],
     [
      7,
      "window"
     ]
    ],
    "solution": [
     6,
     9,
     18,
     29,
     39,
     44,
     51,
     56
    ],
    "doors": [
     [
      30,
      38
     ],
     [
      35,
      36
     ],
     [
      41,
      49
     ],
     [
      44,
      52
     ],
     [
      59,
      60
     ]
    ],
    "windows": [
     [
      7,
      "r"
     ],
     [
      32,
      "l"
     ],
     [
      56,
      "b"
     ],
     [
      56,
      "l"
     ],
     [
      61,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "roomCount",
      2,
      0
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 0,
    "group": 0
   },
   {
    "size": 9,
    "rooms": "001111111001111111001111111111111222111111222333333444333333444555555444555555444",
    "objects": "..........d........c..............c.......c.d.a......f.da..ffedb.....fe........ef",
    "roomNames": [
     "Market",
     "Open Sea",
     "Galleon",
     "Brig",
     "Cove",
     "Sloop"
    ],
    "people": [
     "Astrid the armorer",
     "Bella the barkeep",
     "Cedric the cook",
     "Daisy the deckhand",
     "Edgar the explorer",
     "Felix the fiddler",
     "Vera the vintner",
     "Gideon the gunner",
     "Hana the harbor pilot"
    ],
    "victim": 6,
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
      "row",
      2
     ],
     [
      2,
      "col",
      4
     ],
     [
      3,
      "col",
      5
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "next",
      "crate"
     ],
     [
      7,
      "next",
      "map"
     ],
     [
      8,
      "next",
      "hammock"
     ]
    ],
    "solution": [
     2,
     15,
     22,
     32,
     43,
     46,
     57,
     71,
     72
    ],
    "doors": [
     [
      43,
      52
     ],
     [
      50,
      51
     ],
     [
      56,
      65
     ],
     [
      68,
      69
     ]
    ],
    "windows": [
     [
      18,
      "l"
     ],
     [
      63,
      "l"
     ],
     [
      71,
      "r"
     ],
     [
      75,
      "b"
     ],
     [
      79,
      "b"
     ]
    ],
    "tries": 0,
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
    "sea": 1,
    "group": 0
   },
   {
    "size": 10,
    "rooms": "0000001122000000112200000011220000001122000000112233333000003333300000445555566644555556664455555666",
    "objects": "......af........c..........c.e.......e...........bd.b.b........c.......e.......ba......acb..f.ae.f..",
    "roomNames": [
     "Open Sea",
     "Tavern",
     "Frigate",
     "Lighthouse",
     "Fort",
     "Brig",
     "Galleon"
    ],
    "people": [
     "Astrid the admiral",
     "Bea the boatswain",
     "Clara the captain",
     "Della the deckhand",
     "Edgar the engineer",
     "Freya the fiddler",
     "Gus the gold digger",
     "Viola the vintner",
     "Hugo the harbor pilot",
     "Ivy the islander"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "door"
     ],
     [
      0,
      "alone"
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "row",
      2
     ],
     [
      2,
      "col",
      5
     ],
     [
      3,
      "row",
      3
     ],
     [
      3,
      "col",
      3
     ],
     [
      4,
      "room",
      1
     ],
     [
      5,
      "next",
      "crate"
     ],
     [
      5,
      "next",
      "hammock"
     ],
     [
      6,
      "col",
      7
     ],
     [
      7,
      "notRoom",
      3
     ],
     [
      8,
      "next",
      "cannon"
     ],
     [
      9,
      "window"
     ]
    ],
    "solution": [
     8,
     10,
     25,
     33,
     46,
     51,
     67,
     74,
     82,
     99
    ],
    "doors": [
     [
      7,
      8
     ],
     [
      60,
      70
     ],
     [
      63,
      73
     ],
     [
      71,
      72
     ],
     [
      76,
      77
     ]
    ],
    "windows": [
     [
      49,
      "r"
     ],
     [
      90,
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
      96,
      "b"
     ],
     [
      99,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "roomCount",
      4,
      0
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 0,
    "group": 0
   },
   {
    "size": 4,
    "rooms": "0011001100220022",
    "objects": "................",
    "roomNames": [
     "Open Sea",
     "Sloop",
     "Cove"
    ],
    "people": [
     "Albert the armorer",
     "Bruno the boatswain",
     "Victor the vintner",
     "Cedric the captain"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      0,
      "col",
      1
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
      3,
      "notRoom",
      1
     ]
    ],
    "solution": [
     1,
     4,
     11,
     14
    ],
    "doors": [
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
      3,
      "t"
     ]
    ],
    "tries": 2,
    "rules": [
     "sea"
    ],
    "sea": 0,
    "group": 1
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
    "sea": 0,
    "tries": 1,
    "group": 1
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
    "sea": 3,
    "tries": 2,
    "group": 1
   },
   {
    "size": 7,
    "rooms": "0000111000011100001110002222000222233344443334444",
    "objects": "......a...................a.....f...ba..........a",
    "roomNames": [
     "Open Sea",
     "Brig",
     "Lighthouse",
     "Cove",
     "Fort"
    ],
    "people": [
     "Arthur the armorer",
     "Bea the barkeep",
     "Carl the cook",
     "Dexter the diver",
     "Edgar the engineer",
     "Freya the fiddler",
     "Vera the voyager"
    ],
    "victim": 6,
    "clues": [
     [
      0,
      "on",
      "stool"
     ],
     [
      1,
      "row",
      1
     ],
     [
      1,
      "col",
      2
     ],
     [
      2,
      "row",
      2
     ],
     [
      3,
      "col",
      1
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "next",
      "cannon"
     ],
     [
      5,
      "door"
     ]
    ],
    "solution": [
     6,
     9,
     14,
     22,
     31,
     40,
     46
    ],
    "doors": [
     [
      19,
      26
     ],
     [
      33,
      40
     ],
     [
      37,
      38
     ]
    ],
    "windows": [
     [
      41,
      "r"
     ],
     [
      42,
      "l"
     ],
     [
      45,
      "b"
     ],
     [
      48,
      "b"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "nextCount",
      "stool",
      0
     ],
     [
      "touch",
      null,
      1
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 0,
    "group": 1
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
    "sea": 4,
    "tries": 1,
    "group": 1
   },
   {
    "size": 9,
    "rooms": "000111222000111222000111222000111222000000333000000333000000333444400555444400555",
    "objects": ".......ad.....d.........aaa........f......cd...........................e.c.b...a.",
    "roomNames": [
     "Open Sea",
     "Galleon",
     "Fort",
     "Sea Cave",
     "Dock",
     "Market"
    ],
    "people": [
     "Vince the voyager",
     "Alma the armorer",
     "Bruno the boatswain",
     "Clara the cook",
     "Della the deckhand",
     "Elsa the explorer",
     "Flora the fiddler",
     "Grace the gunner",
     "Hazel the harpooner"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "next",
      "crate"
     ],
     [
      1,
      "row",
      1
     ],
     [
      2,
      "next",
      "cannon"
     ],
     [
      3,
      "col",
      2
     ],
     [
      4,
      "col",
      3
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "row",
      5
     ],
     [
      6,
      "notRoom",
      0
     ],
     [
      6,
      "alone"
     ],
     [
      7,
      "next",
      "map"
     ],
     [
      8,
      "window"
     ]
    ],
    "solution": [
     5,
     13,
     26,
     29,
     39,
     46,
     60,
     70,
     72
    ],
    "doors": [
     [
      32,
      33
     ],
     [
      35,
      44
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
      72,
      "l"
     ],
     [
      73,
      "b"
     ],
     [
      74,
      "b"
     ],
     [
      80,
      "b"
     ]
    ],
    "tries": 1,
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
    "sea": 0,
    "group": 1
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
    "sea": 1,
    "tries": 1,
    "group": 1
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
    "sea": 2,
    "tries": 2,
    "group": 1
   },
   {
    "size": 12,
    "rooms": "001111111111001111111111001112222111001112222111111112222111111112222111111113333444111113333444555663333444555667777444555667777444555667777444",
    "objects": "............c...................a.....................f.e........f..a..........c.a.......b.f....bf...f...f...ce.f...afd.aedcc....d.d...a......bd",
    "roomNames": [
     "Sea Cave",
     "Open Sea",
     "Lighthouse",
     "Cove",
     "Fort",
     "Dock",
     "Tavern",
     "Market"
    ],
    "people": [
     "Victor the vintner",
     "Astrid the admiral",
     "Bea the boatswain",
     "Cora the cook",
     "Daisy the deckhand",
     "Edith the explorer",
     "Fiona the first mate",
     "Gwen the gold digger",
     "Hazel the harpooner",
     "Ines the islander",
     "Jade the jeweller",
     "Kira the knot maker"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "row",
      1
     ],
     [
      1,
      "col",
      5
     ],
     [
      2,
      "row",
      2
     ],
     [
      2,
      "alone"
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
      "row",
      4
     ],
     [
      4,
      "col",
      4
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "next",
      "anchor"
     ],
     [
      7,
      "alone"
     ],
     [
      8,
      "next",
      "map"
     ],
     [
      9,
      "room",
      7
     ],
     [
      10,
      "next",
      "hammock"
     ],
     [
      11,
      "next",
      "hammock"
     ],
     [
      11,
      "door"
     ]
    ],
    "solution": [
     1,
     17,
     35,
     36,
     52,
     67,
     80,
     87,
     98,
     114,
     130,
     141
    ],
    "doors": [
     [
      67,
      79
     ],
     [
      104,
      105
     ],
     [
      100,
      101
     ],
     [
      103,
      115
     ],
     [
      140,
      141
     ],
     [
      134,
      135
     ],
     [
      124,
      125
     ]
    ],
    "windows": [
     [
      12,
      "l"
     ],
     [
      83,
      "r"
     ],
     [
      95,
      "r"
     ],
     [
      120,
      "l"
     ],
     [
      135,
      "b"
     ],
     [
      137,
      "b"
     ],
     [
      139,
      "b"
     ]
    ],
    "tries": 1,
    "facts": [
     [
      "furniture",
      null,
      0
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 1,
    "group": 1
   },
   {
    "size": 4,
    "rooms": "0000000011221122",
    "objects": ".........b.bbb..",
    "roomNames": [
     "Open Sea",
     "Market",
     "Sea Cave"
    ],
    "people": [
     "Astrid the armorer",
     "Birgit the barkeep",
     "Celia the cook",
     "Vivian the voyager"
    ],
    "victim": 3,
    "clues": [
     [
      0,
      "col",
      1
     ],
     [
      1,
      "row",
      1
     ],
     [
      2,
      "on",
      "hammock"
     ]
    ],
    "solution": [
     1,
     4,
     11,
     14
    ],
    "doors": [
     [
      13,
      14
     ]
    ],
    "windows": [
     [
      14,
      "b"
     ],
     [
      15,
      "b"
     ]
    ],
    "tries": 3,
    "rules": [
     "sea"
    ],
    "sea": 0,
    "group": 2
   },
   {
    "size": 5,
    "rooms": "0000000000111002223322233",
    "objects": "..................d......",
    "roomNames": [
     "Open Sea",
     "Sloop",
     "Lighthouse",
     "Tavern"
    ],
    "people": [
     "Ada the armorer",
     "Basil the barkeep",
     "Celia the cook",
     "Della the deckhand",
     "Vivian the voyager"
    ],
    "victim": 4,
    "clues": [
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
      "row",
      2
     ],
     [
      3,
      "window"
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
      12,
      17
     ],
     [
      17,
      18
     ]
    ],
    "windows": [
     [
      15,
      "l"
     ],
     [
      21,
      "b"
     ],
     [
      24,
      "r"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "emptyRooms",
      null,
      2
     ],
     [
      "touch",
      null,
      0
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 0,
    "group": 2
   },
   {
    "size": 6,
    "rooms": "001122001122001133443333443333443333",
    "objects": "b...d.......fd.a....................",
    "roomNames": [
     "Sloop",
     "Frigate",
     "Sea Cave",
     "Open Sea",
     "Cove"
    ],
    "people": [
     "Vivian the voyager",
     "Arthur the armorer",
     "Basil the barkeep",
     "Cedric the captain",
     "Della the deckhand",
     "Ena the explorer"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "window"
     ],
     [
      1,
      "next",
      "crate"
     ],
     [
      2,
      "notRoom",
      1
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
      4,
      "col",
      3
     ],
     [
      5,
      "alone"
     ]
    ],
    "solution": [
     0,
     7,
     16,
     20,
     27,
     35
    ],
    "doors": [
     [
      1,
      2
     ],
     [
      13,
      19
     ],
     [
      3,
      4
     ]
    ],
    "windows": [
     [
      0,
      "t"
     ],
     [
      5,
      "r"
     ],
     [
      12,
      "l"
     ],
     [
      30,
      "l"
     ]
    ],
    "tries": 4,
    "facts": [
     [
      "edge",
      null,
      2
     ],
     [
      "doorCount",
      null,
      0
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 3,
    "group": 2
   },
   {
    "size": 7,
    "rooms": "0000011000001122220112222011333000033300003330000",
    "objects": "......a......a.c.a..d.f.e..........e.............",
    "roomNames": [
     "Open Sea",
     "Cove",
     "Longboat",
     "Galleon"
    ],
    "people": [
     "Albert the admiral",
     "Bea the barkeep",
     "Cedric the cook",
     "Della the diver",
     "Vera the voyager",
     "Edith the engineer",
     "Felix the fiddler"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "col",
      4
     ],
     [
      1,
      "col",
      3
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
      "alone"
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
     ]
    ],
    "solution": [
     4,
     10,
     19,
     23,
     28,
     41,
     43
    ],
    "doors": [
     [
      22,
      29
     ]
    ],
    "windows": [
     [
      6,
      "r"
     ],
     [
      6,
      "t"
     ],
     [
      21,
      "l"
     ],
     [
      27,
      "r"
     ]
    ],
    "tries": 4,
    "facts": [
     [
      "corner",
      null,
      2
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 0,
    "group": 2
   },
   {
    "size": 8,
    "rooms": "0000000000000000000000001111222211112222333444553334445533344455",
    "objects": ".........................af.........b....cafbf...d..d.b...a...d.",
    "roomNames": [
     "Open Sea",
     "Brig",
     "Cove",
     "Longboat",
     "Sea Cave",
     "Tavern"
    ],
    "people": [
     "Astrid the admiral",
     "Bea the barkeep",
     "Clara the cook",
     "Della the deckhand",
     "Vince the vintner",
     "Ena the engineer",
     "Frank the first mate",
     "Greta the gunner"
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
      "row",
      1
     ],
     [
      2,
      "col",
      7
     ],
     [
      3,
      "next",
      "hammock"
     ],
     [
      5,
      "window"
     ],
     [
      6,
      "next",
      "cannon"
     ],
     [
      7,
      "col",
      3
     ]
    ],
    "solution": [
     2,
     9,
     23,
     28,
     38,
     40,
     53,
     59
    ],
    "doors": [
     [
      27,
      28
     ],
     [
      34,
      42
     ],
     [
      35,
      43
     ],
     [
      37,
      45
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
      61,
      62
     ]
    ],
    "windows": [
     [
      40,
      "l"
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
      58,
      "b"
     ],
     [
      62,
      "b"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "alone",
      null,
      4
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
    "sea": 0,
    "group": 2
   },
   {
    "size": 9,
    "rooms": "000011122000011122000033322444433322444422222444422222222225555222225555222225555",
    "objects": "...f.......c..........b.....b..aa...bc........a............ff.................ba.",
    "roomNames": [
     "Fort",
     "Sloop",
     "Open Sea",
     "Frigate",
     "Cove",
     "Dock"
    ],
    "people": [
     "Astrid the admiral",
     "Bea the boatswain",
     "Vince the voyager",
     "Cedric the cook",
     "Della the diver",
     "Edith the explorer",
     "Frank the fiddler",
     "Gideon the gold digger",
     "Hana the harbor pilot"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "notRoom",
      1
     ],
     [
      1,
      "row",
      1
     ],
     [
      2,
      "next",
      "anchor"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "room",
      4
     ],
     [
      5,
      "row",
      5
     ],
     [
      6,
      "col",
      0
     ],
     [
      6,
      "alone"
     ],
     [
      7,
      "window"
     ],
     [
      8,
      "on",
      "hammock"
     ]
    ],
    "solution": [
     1,
     14,
     20,
     31,
     39,
     52,
     54,
     71,
     78
    ],
    "doors": [
     [
      12,
      13
     ],
     [
      21,
      22
     ],
     [
      19,
      28
     ],
     [
      15,
      24
     ],
     [
      30,
      31
     ]
    ],
    "windows": [
     [
      0,
      "t"
     ],
     [
      36,
      "l"
     ],
     [
      45,
      "l"
     ],
     [
      71,
      "r"
     ],
     [
      80,
      "b"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "doorCount",
      null,
      1
     ],
     [
      "emptyRooms",
      null,
      0
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 2,
    "group": 2
   },
   {
    "size": 10,
    "rooms": "0001111222000111122200011112223333311222333334444433333444445533333333553333333355333333335533333333",
    "objects": "....f.f.f.....b..cb...ac..............a......f.dea.......e............fb.........a........f.........",
    "roomNames": [
     "Sloop",
     "Galleon",
     "Sea Cave",
     "Open Sea",
     "Market",
     "Longboat"
    ],
    "people": [
     "Astrid the admiral",
     "Bruno the barkeep",
     "Vince the voyager",
     "Cedric the cook",
     "Della the deckhand",
     "Edith the explorer",
     "Fiona the fiddler",
     "Gideon the gold digger",
     "Hana the harpooner",
     "Igor the islander"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "notRoom",
      5
     ],
     [
      0,
      "next",
      "cannon"
     ],
     [
      1,
      "next",
      "cannon"
     ],
     [
      1,
      "col",
      6
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
      "row",
      5
     ],
     [
      5,
      "col",
      1
     ],
     [
      6,
      "row",
      6
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
      "col",
      4
     ],
     [
      9,
      "row",
      9
     ]
    ],
    "solution": [
     9,
     16,
     25,
     33,
     40,
     51,
     62,
     77,
     84,
     98
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
      35,
      45
     ],
     [
      39,
      49
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
      "t"
     ],
     [
      29,
      "r"
     ],
     [
      80,
      "l"
     ],
     [
      90,
      "b"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "corner",
      null,
      1
     ],
     [
      "nextCount",
      "hammock",
      0
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 3,
    "group": 2
   },
   {
    "size": 11,
    "rooms": "0011122223300111222233001112222330011122223344444433333444444333334444443333355566633333555666333335556663333355566633333",
    "objects": "c.e..e......b.f.a.b......ab..ed..........b....aeb........a.f......a.d........bb..fe......b..........b.e.........f........",
    "roomNames": [
     "Fort",
     "Frigate",
     "Lighthouse",
     "Open Sea",
     "Dock",
     "Longboat",
     "Cove"
    ],
    "people": [
     "Arthur the admiral",
     "Bruno the barkeep",
     "Clara the captain",
     "Della the diver",
     "Elsa the engineer",
     "Felix the fiddler",
     "Grace the gunner",
     "Hazel the harbor pilot",
     "Ines the islander",
     "Vera the voyager",
     "Juno the jailbird"
    ],
    "victim": 9,
    "clues": [
     [
      0,
      "same",
      2
     ],
     [
      1,
      "row",
      1
     ],
     [
      2,
      "next",
      "stool"
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
      10
     ],
     [
      6,
      "notRoom",
      4
     ],
     [
      6,
      "row",
      6
     ],
     [
      7,
      "row",
      7
     ],
     [
      7,
      "col",
      8
     ],
     [
      8,
      "on",
      "hammock"
     ],
     [
      9,
      "next",
      "map"
     ],
     [
      10,
      "window"
     ]
    ],
    "solution": [
     6,
     20,
     27,
     35,
     44,
     65,
     73,
     85,
     89,
     103,
     113
    ],
    "doors": [
     [
      12,
      13
     ],
     [
      34,
      45
     ],
     [
      15,
      16
     ],
     [
      35,
      46
     ],
     [
      38,
      49
     ],
     [
      67,
      78
     ],
     [
      71,
      82
     ],
     [
      101,
      102
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      4,
      "t"
     ],
     [
      11,
      "l"
     ],
     [
      22,
      "l"
     ],
     [
      88,
      "l"
     ],
     [
      113,
      "b"
     ],
     [
      115,
      "b"
     ]
    ],
    "tries": 4,
    "facts": [
     [
      "touch",
      null,
      1
     ],
     [
      "nextCount",
      "hammock",
      0
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 3,
    "group": 2
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
    "sea": 0,
    "tries": 4,
    "group": 2
   },
   {
    "size": 4,
    "rooms": "0011001100220022",
    "objects": "...b...f...b....",
    "roomNames": [
     "Open Sea",
     "Dock",
     "Brig"
    ],
    "people": [
     "Astrid the armorer",
     "Birgit the boatswain",
     "Vera the voyager",
     "Carl the captain"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "col",
      1
     ],
     [
      2,
      "on",
      "hammock"
     ],
     [
      3,
      "notRoom",
      1
     ]
    ],
    "solution": [
     0,
     5,
     11,
     14
    ],
    "doors": [
     [
      6,
      10
     ]
    ],
    "windows": [
     [
      3,
      "r"
     ],
     [
      11,
      "r"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "edge",
      null,
      3
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 0,
    "group": 3
   },
   {
    "size": 5,
    "rooms": "0000011100111002233322333",
    "objects": "..........a.....ba.ad....",
    "roomNames": [
     "Open Sea",
     "Lighthouse",
     "Cove",
     "Dock"
    ],
    "people": [
     "Astrid the armorer",
     "Bella the boatswain",
     "Carl the cook",
     "Dexter the diver",
     "Vera the vintner"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "notRoom",
      1
     ],
     [
      3,
      "door"
     ]
    ],
    "solution": [
     4,
     7,
     13,
     15,
     21
    ],
    "doors": [
     [
      10,
      15
     ],
     [
      12,
      17
     ],
     [
      16,
      17
     ]
    ],
    "windows": [
     [
      20,
      "b"
     ],
     [
      22,
      "b"
     ],
     [
      23,
      "b"
     ]
    ],
    "tries": 8,
    "facts": [
     [
      "corner",
      null,
      5
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 0,
    "group": 3
   },
   {
    "size": 6,
    "rooms": "000000000000111100222200333444333444",
    "objects": "..................f.c...e...a.b.....",
    "roomNames": [
     "Open Sea",
     "Sloop",
     "Lighthouse",
     "Sea Cave",
     "Frigate"
    ],
    "people": [
     "Astrid the admiral",
     "Birgit the boatswain",
     "Celia the captain",
     "Dora the deckhand",
     "Victor the voyager",
     "Elias the explorer"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "col",
      4
     ],
     [
      1,
      "row",
      1
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
      5,
      "on",
      "hammock"
     ]
    ],
    "solution": [
     4,
     7,
     15,
     23,
     26,
     30
    ],
    "doors": [
     [
      15,
      21
     ],
     [
      19,
      25
     ],
     [
      21,
      27
     ],
     [
      26,
      27
     ]
    ],
    "windows": [
     [
      18,
      "l"
     ],
     [
      24,
      "l"
     ],
     [
      31,
      "b"
     ],
     [
      35,
      "r"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "touch",
      null,
      0
     ],
     [
      "doorCount",
      null,
      2
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 0,
    "group": 3
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
    "sea": 1,
    "tries": 6,
    "group": 3
   },
   {
    "size": 8,
    "rooms": "0001122200011222000112223333322233333222444222224442222244422222",
    "objects": ".e..f...e.f.b......af......e....e.d.....e........bd.......b.....",
    "roomNames": [
     "Sloop",
     "Longboat",
     "Open Sea",
     "Sea Cave",
     "Frigate"
    ],
    "people": [
     "Albert the armorer",
     "Bella the barkeep",
     "Viola the vintner",
     "Clara the cook",
     "Daisy the deckhand",
     "Elias the engineer",
     "Frank the first mate",
     "Gideon the gold digger"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "next",
      "map"
     ],
     [
      1,
      "row",
      1
     ],
     [
      3,
      "next",
      "map"
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
      "door"
     ],
     [
      5,
      "alone"
     ],
     [
      6,
      "col",
      3
     ],
     [
      7,
      "row",
      7
     ]
    ],
    "solution": [
     0,
     13,
     17,
     28,
     38,
     42,
     51,
     63
    ],
    "doors": [
     [
      10,
      11
     ],
     [
      16,
      24
     ],
     [
      19,
      27
     ],
     [
      34,
      42
     ]
    ],
    "windows": [
     [
      8,
      "l"
     ],
     [
      32,
      "l"
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
      58,
      "b"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "roomCount",
      3,
      1
     ],
     [
      "corner",
      null,
      4
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 2,
    "group": 3
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
    "sea": 0,
    "tries": 6,
    "group": 3
   },
   {
    "size": 10,
    "rooms": "0012334444001233444400123344440012332222551233222255122222225512222222551222222255126666665512666666",
    "objects": ".d..a..f...a...b...f......bdf.....d.......b.c.....d.a..................bb.......ff...c.a.......e....",
    "roomNames": [
     "Lighthouse",
     "Market",
     "Open Sea",
     "Frigate",
     "Sea Cave",
     "Brig",
     "Tavern"
    ],
    "people": [
     "Astrid the armorer",
     "Bruno the boatswain",
     "Cedric the cook",
     "Della the deckhand",
     "Edith the explorer",
     "Frank the fiddler",
     "Gwen the gunner",
     "Hugo the harpooner",
     "Ines the islander",
     "Victor the voyager"
    ],
    "victim": 9,
    "clues": [
     [
      0,
      "door"
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "next",
      "stool"
     ],
     [
      3,
      "next",
      "crate"
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
      9
     ],
     [
      6,
      "next",
      "hammock"
     ],
     [
      7,
      "next",
      "cannon"
     ],
     [
      7,
      "next",
      "hammock"
     ],
     [
      8,
      "next",
      "anchor"
     ],
     [
      9,
      "next",
      "stool"
     ]
    ],
    "solution": [
     6,
     13,
     21,
     35,
     48,
     59,
     62,
     70,
     84,
     97
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
      81,
      82
     ],
     [
      5,
      6
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
      60,
      "l"
     ],
     [
      80,
      "l"
     ],
     [
      96,
      "b"
     ],
     [
      98,
      "b"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "nextCount",
      "stool",
      3
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 2,
    "group": 3
   },
   {
    "size": 11,
    "rooms": "0001111112200011111122000111111220001111112211111111122111111111221111111112233334444555333344445553333444455533334444555",
    "objects": ".b...........e...................c..............................................b.ee.......ef......d........cdc...d..f...",
    "roomNames": [
     "Sloop",
     "Open Sea",
     "Lighthouse",
     "Fort",
     "Frigate",
     "Galleon"
    ],
    "people": [
     "Alma the armorer",
     "Bella the boatswain",
     "Cora the captain",
     "Della the diver",
     "Edith the explorer",
     "Frank the fiddler",
     "Gideon the gold digger",
     "Henrik the harbor pilot",
     "Ines the islander",
     "Vera the voyager",
     "Jutta the jeweller"
    ],
    "victim": 9,
    "clues": [
     [
      0,
      "window"
     ],
     [
      1,
      "row",
      1
     ],
     [
      2,
      "col",
      8
     ],
     [
      3,
      "row",
      3
     ],
     [
      3,
      "col",
      4
     ],
     [
      4,
      "room",
      1
     ],
     [
      4,
      "row",
      4
     ],
     [
      5,
      "row",
      5
     ],
     [
      5,
      "col",
      5
     ],
     [
      6,
      "col",
      1
     ],
     [
      6,
      "alone"
     ],
     [
      7,
      "next",
      "hammock"
     ],
     [
      8,
      "next",
      "map"
     ],
     [
      10,
      "next",
      "crate"
     ]
    ],
    "solution": [
     0,
     20,
     30,
     37,
     47,
     60,
     67,
     79,
     94,
     106,
     120
    ],
    "doors": [
     [
      76,
      87
     ],
     [
      80,
      81
     ],
     [
      117,
      118
     ]
    ],
    "windows": [
     [
      0,
      "t"
     ],
     [
      10,
      "t"
     ],
     [
      33,
      "l"
     ],
     [
      88,
      "l"
     ],
     [
      99,
      "l"
     ],
     [
      119,
      "b"
     ],
     [
      120,
      "b"
     ]
    ],
    "tries": 7,
    "facts": [
     [
      "nextCount",
      "cannon",
      1
     ],
     [
      "roomCount",
      5,
      1
     ]
    ],
    "rules": [
     "sea"
    ],
    "sea": 1,
    "group": 3
   },
   {
    "size": 12,
    "rooms": "000000000000000000000000000000000000000011100000000011122222000011122222000011122222333344455555333344455555333344466666333344466666333344466666",
    "objects": ".....................................................d.da.........a.f........a....a...............a...acde.c.......b....c..faefa..ed..c...f...a.",
    "roomNames": [
     "Open Sea",
     "Longboat",
     "Galleon",
     "Dock",
     "Frigate",
     "Sloop",
     "Brig"
    ],
    "people": [
     "Ada the armorer",
     "Bruno the barkeep",
     "Celia the cook",
     "Dmitri the diver",
     "Edith the explorer",
     "Flora the fiddler",
     "Gwen the gunner",
     "Hugo the harbor pilot",
     "Igor the island guide",
     "Juno the jeweller",
     "Victor the vintner",
     "Kira the kettle cook"
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
      "col",
      3
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "row",
      2
     ],
     [
      2,
      "col",
      8
     ],
     [
      3,
      "col",
      4
     ],
     [
      4,
      "same",
      3
     ],
     [
      4,
      "next",
      "stool"
     ],
     [
      5,
      "row",
      5
     ],
     [
      5,
      "col",
      11
     ],
     [
      6,
      "same",
      5
     ],
     [
      6,
      "col",
      7
     ],
     [
      7,
      "alone"
     ],
     [
      8,
      "next",
      "stool"
     ],
     [
      9,
      "same",
      11
     ],
     [
      10,
      "next",
      "cannon"
     ],
     [
      11,
      "on",
      "stool"
     ]
    ],
    "solution": [
     0,
     15,
     32,
     40,
     54,
     71,
     79,
     89,
     97,
     117,
     122,
     142
    ],
    "doors": [
     [
      66,
      67
     ],
     [
      76,
      88
     ],
     [
      83,
      95
     ],
     [
      111,
      112
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
      104,
      116
     ]
    ],
    "windows": [
     [
      59,
      "r"
     ],
     [
      95,
      "r"
     ],
     [
      107,
      "r"
     ],
     [
      133,
      "b"
     ],
     [
      134,
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
    "tries": 7,
    "rules": [
     "sea"
    ],
    "sea": 0,
    "group": 3
   }
  ]
 },
 {
  "theme": "rift",
  "levels": [
   {
    "size": 4,
    "rooms": "0000000011221122",
    "objects": "..d.f......eed..",
    "roomNames": [
     "Cave",
     "Hide Tent",
     "Saloon"
    ],
    "people": [
     "Victor the visionary",
     "Ada the astronomer",
     "Bruno the bookbinder",
     "Cedric the clockmaker"
    ],
    "victim": 0,
    "clues": [
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
      "window"
     ]
    ],
    "solution": [
     0,
     5,
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
      13,
      14
     ]
    ],
    "windows": [
     [
      14,
      "b"
     ],
     [
      15,
      "r"
     ]
    ],
    "tries": 0,
    "rules": [
     "ranks",
     "glyphs"
    ],
    "court": [
     0
    ],
    "rank": "knck",
    "tags": ".....CL...C....C",
    "group": 0
   },
   {
    "size": 5,
    "rooms": "0011200112001120003300033",
    "objects": "...b........ac..........a",
    "roomNames": [
     "Sea of Ages",
     "Throne Room",
     "Cave",
     "Burial Chamber"
    ],
    "people": [
     "Albert the archivist",
     "Viola the voyager",
     "Birgit the bookbinder",
     "Cedric the chronicler",
     "Dexter the drifter"
    ],
    "victim": 1,
    "clues": [
     [
      0,
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
      "chair"
     ],
     [
      4,
      "row",
      4
     ]
    ],
    "solution": [
     2,
     8,
     11,
     19,
     20
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      13,
      18
     ],
     [
      14,
      19
     ]
    ],
    "windows": [
     [
      9,
      "r"
     ],
     [
      23,
      "b"
     ],
     [
      24,
      "b"
     ]
    ],
    "tries": 0,
    "rules": [
     "trades",
     "sea"
    ],
    "trade": ".0..4",
    "tags": "....4...0.....0..........",
    "sea": 0,
    "group": 0
   },
   {
    "size": 6,
    "rooms": "000111000111000222333222333444333444",
    "objects": ".a.d......e...e..a...af...b.a.f..b.a",
    "roomNames": [
     "Hide Tent",
     "Fire Pit",
     "Jail",
     "Bank",
     "Burial Chamber"
    ],
    "people": [
     "Alma the archivist",
     "Bella the bard",
     "Cedric the clockmaker",
     "Daisy the dreamer",
     "Viola the voyager",
     "Ena the explorer"
    ],
    "victim": 4,
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
      1,
      "bandit"
     ],
     [
      2,
      "next",
      "chair"
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
      5,
      "next",
      "log"
     ]
    ],
    "solution": [
     5,
     8,
     15,
     19,
     24,
     34
    ],
    "doors": [
     [
      8,
      9
     ],
     [
      14,
      15
     ],
     [
      13,
      19
     ],
     [
      10,
      16
     ],
     [
      20,
      21
     ],
     [
      21,
      27
     ],
     [
      26,
      27
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
      5,
      "r"
     ],
     [
      34,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "windowCount",
      null,
      2
     ]
    ],
    "rules": [
     "bandits",
     "glyphs"
    ],
    "tags": "................L.................L.",
    "bandits": 2,
    "lawful": [
     3
    ],
    "group": 0
   },
   {
    "size": 7,
    "rooms": "0000000000000000011110001111223344422334442233444",
    "objects": ".................ba...............a.....db..fa.ac",
    "roomNames": [
     "Sea of Ages",
     "Hide Tent",
     "Fire Pit",
     "Captain Cabin",
     "Jail"
    ],
    "people": [
     "Albert the astronomer",
     "Birgit the bard",
     "Cedric the chronicler",
     "Daisy the dreamer",
     "Vera the voyager",
     "Edgar the explorer",
     "Frank the falconer"
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
      5
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "on",
      "log"
     ],
     [
      3,
      "col",
      2
     ],
     [
      5,
      "on",
      "log"
     ],
     [
      6,
      "window"
     ],
     [
      6,
      "col",
      0
     ]
    ],
    "solution": [
     5,
     11,
     17,
     23,
     29,
     41,
     42
    ],
    "doors": [
     [
      24,
      31
     ],
     [
      27,
      34
     ],
     [
      43,
      44
     ],
     [
      31,
      32
     ]
    ],
    "windows": [
     [
      42,
      "b"
     ],
     [
      43,
      "b"
     ],
     [
      44,
      "b"
     ],
     [
      46,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "roomCount",
      2,
      2
     ]
    ],
    "rules": [
     "ranks",
     "sea"
    ],
    "court": [
     1
    ],
    "rank": "kcnckcc",
    "sea": 0,
    "group": 0
   },
   {
    "size": 8,
    "rooms": "0001111100011111000222220002222233322222333444443334444433355555",
    "objects": "....ae......b....e.dbbbef...f..a...fa....ac...b..f........b..a..",
    "roomNames": [
     "Hide Tent",
     "Throne Room",
     "Fort",
     "Cave",
     "Great Hall",
     "Shrine"
    ],
    "people": [
     "Albert the archivist",
     "Bea the bard",
     "Vince the visionary",
     "Cora the chronicler",
     "Dmitri the dreamer",
     "Elias the engineer",
     "Frank the fortune teller",
     "Grace the gladiator"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "bandit"
     ],
     [
      1,
      "next",
      "log"
     ],
     [
      3,
      "next",
      "log"
     ],
     [
      3,
      "next",
      "chair"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "on",
      "chair"
     ],
     [
      5,
      "same",
      6
     ],
     [
      6,
      "next",
      "statue"
     ],
     [
      7,
      "on",
      "chair"
     ]
    ],
    "solution": [
     7,
     11,
     20,
     30,
     32,
     41,
     50,
     61
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
      24,
      32
     ],
     [
      15,
      23
     ],
     [
      34,
      35
     ],
     [
      38,
      46
     ],
     [
      42,
      43
     ],
     [
      58,
      59
     ],
     [
      51,
      59
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
      48,
      "l"
     ],
     [
      56,
      "l"
     ],
     [
      60,
      "b"
     ]
    ],
    "tries": 0,
    "facts": [
     [
      "nextCount",
      "clock",
      3
     ]
    ],
    "rules": [
     "trades",
     "bandits"
    ],
    "trade": "4342..43",
    "tags": "...........3....2..........................0......4.............",
    "bandits": 2,
    "lawful": [
     2
    ],
    "group": 0
   },
   {
    "size": 9,
    "rooms": "001112222001112222001113333001113333001113333111114444111114444111115555111115555",
    "objects": "bf...f...a.....a..a.....f...d.....b..b......e..............eb.......bcd......d...",
    "roomNames": [
     "Hide Tent",
     "Sea of Ages",
     "Fire Pit",
     "Jail",
     "Shrine",
     "Burial Chamber"
    ],
    "people": [
     "Vivian the visionary",
     "Albert the archivist",
     "Bea the bookbinder",
     "Carl the clockmaker",
     "Dora the dreamer",
     "Elsa the explorer",
     "Frank the falconer",
     "Gideon the guardian",
     "Hilda the herald"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "next",
      "clock"
     ],
     [
      2,
      "next",
      "log"
     ],
     [
      2,
      "next",
      "clock"
     ],
     [
      3,
      "row",
      3
     ],
     [
      4,
      "next",
      "log"
     ],
     [
      5,
      "next",
      "log"
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "col",
      4
     ],
     [
      7,
      "row",
      7
     ],
     [
      8,
      "col",
      2
     ]
    ],
    "solution": [
     8,
     14,
     25,
     30,
     36,
     51,
     58,
     64,
     74
    ],
    "doors": [
     [
      15,
      24
     ],
     [
      42,
      51
     ],
     [
      62,
      71
     ]
    ],
    "windows": [
     [
      7,
      "t"
     ],
     [
      26,
      "r"
     ],
     [
      71,
      "r"
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
    "tries": 0,
    "facts": [
     [
      "corner",
      null,
      3
     ]
    ],
    "rules": [
     "glyphs",
     "sea"
    ],
    "tags": ".......L......C..L..............L...L..............L.............................",
    "sea": 1,
    "group": 0
   },
   {
    "size": 10,
    "rooms": "0000001111000000111100000011112222221111222222333322222233334455566677445556667744555666774455566677",
    "objects": ".a..a....bf...dfd.....be........af.ac.bb....f..f...bce..c.b.........cb.d..e........b....bb..d.a....a",
    "roomNames": [
     "Burial Chamber",
     "Captain Cabin",
     "Throne Room",
     "Saloon",
     "Cave",
     "Shrine",
     "Fort",
     "Jail"
    ],
    "people": [
     "Ada the astronomer",
     "Basil the bard",
     "Cedric the chronicler",
     "Della the dreamer",
     "Edgar the engineer",
     "Felix the fortune teller",
     "Gideon the guardian",
     "Hilda the historian",
     "Vince the voyager",
     "Ivo the inventor"
    ],
    "victim": 8,
    "clues": [
     [
      0,
      "on",
      "log"
     ],
     [
      1,
      "next",
      "chair"
     ],
     [
      2,
      "same",
      1
     ],
     [
      2,
      "on",
      "log"
     ],
     [
      3,
      "on",
      "log"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "next",
      "clock"
     ],
     [
      5,
      "next",
      "statue"
     ],
     [
      6,
      "door"
     ],
     [
      7,
      "alone"
     ],
     [
      9,
      "room",
      4
     ],
     [
      9,
      "row",
      9
     ]
    ],
    "solution": [
     9,
     11,
     22,
     38,
     46,
     57,
     63,
     75,
     84,
     90
    ],
    "doors": [
     [
      25,
      26
     ],
     [
      25,
      35
     ],
     [
      35,
      36
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
      50,
      60
     ],
     [
      53,
      63
     ],
     [
      55,
      65
     ],
     [
      56,
      66
     ],
     [
      58,
      68
     ],
     [
      61,
      62
     ],
     [
      94,
      95
     ],
     [
      67,
      68
     ]
    ],
    "windows": [
     [
      6,
      "t"
     ],
     [
      8,
      "t"
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
      59,
      "r"
     ],
     [
      93,
      "b"
     ]
    ],
    "tries": 0,
    "rules": [
     "ranks",
     "trades"
    ],
    "court": [
     3,
     5
    ],
    "rank": "kckcnknckc",
    "trade": "1..3.3...0",
    "tags": "..................2......4...............................3...3...1.......4......3.....3...0.........",
    "group": 0
   },
   {
    "size": 4,
    "rooms": "0011001122222222",
    "objects": "....aa..a.a....d",
    "roomNames": [
     "Shrine",
     "Fort",
     "Bank"
    ],
    "people": [
     "Vince the visionary",
     "Alma the archivist",
     "Bea the bookbinder",
     "Celia the clockmaker"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "row",
      1
     ],
     [
      2,
      "next",
      "chair"
     ],
     [
      3,
      "row",
      3
     ]
    ],
    "solution": [
     2,
     7,
     9,
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
      15,
      "b"
     ],
     [
      15,
      "r"
     ]
    ],
    "tries": 1,
    "facts": [
     [
      "nextCount",
      "barrel",
      0
     ]
    ],
    "rules": [
     "ranks",
     "glyphs"
    ],
    "court": [
     2
    ],
    "rank": "kknn",
    "tags": "..C...LC....C...",
    "group": 1
   },
   {
    "size": 5,
    "rooms": "0000000000111221112233322",
    "objects": "..........ea......e.....b",
    "roomNames": [
     "Sea of Ages",
     "Hide Tent",
     "Fort",
     "Fire Pit"
    ],
    "people": [
     "Arthur the archivist",
     "Basil the bard",
     "Vera the voyager",
     "Celia the chronicler",
     "Dora the dreamer"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "notRoom",
      3
     ],
     [
      0,
      "alone"
     ],
     [
      1,
      "row",
      1
     ],
     [
      1,
      "col",
      4
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "alone"
     ]
    ],
    "solution": [
     3,
     9,
     11,
     17,
     20
    ],
    "doors": [
     [
      17,
      18
     ],
     [
      17,
      22
     ],
     [
      22,
      23
     ]
    ],
    "windows": [
     [
      10,
      "l"
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
    "tries": 1,
    "facts": [
     [
      "onCount",
      "chair",
      1
     ]
    ],
    "rules": [
     "trades",
     "sea"
    ],
    "trade": "3.21.",
    "tags": ".................1.....1.",
    "sea": 0,
    "group": 1
   },
   {
    "size": 6,
    "rooms": "001111001111002222002222334444334444",
    "objects": ".f.f.....b....d.d.a.b...b.........a.",
    "roomNames": [
     "Bank",
     "Great Hall",
     "Cave",
     "Saloon",
     "Burial Chamber"
    ],
    "people": [
     "Arthur the archivist",
     "Birgit the bard",
     "Carl the clockmaker",
     "Dexter the drifter",
     "Elsa the engineer",
     "Vince the voyager"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "row",
      0
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
      2,
      "row",
      2
     ],
     [
      2,
      "withBandit"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "next",
      "chair"
     ],
     [
      4,
      "bandit"
     ],
     [
      5,
      "next",
      "chair"
     ],
     [
      5,
      "col",
      3
     ]
    ],
    "solution": [
     5,
     6,
     13,
     20,
     28,
     33
    ],
    "doors": [
     [
      7,
      8
     ],
     [
      13,
      14
     ],
     [
      19,
      25
     ],
     [
      10,
      16
     ],
     [
      20,
      26
     ],
     [
      31,
      32
     ]
    ],
    "windows": [
     [
      18,
      "l"
     ],
     [
      31,
      "b"
     ],
     [
      34,
      "b"
     ],
     [
      35,
      "b"
     ]
    ],
    "tries": 1,
    "rules": [
     "bandits",
     "glyphs"
    ],
    "tags": ".....L...........................C..",
    "bandits": 2,
    "lawful": [
     2
    ],
    "group": 1
   },
   {
    "size": 7,
    "rooms": "0001122000112200011223333222333322244442224444222",
    "objects": "....b...b.....aefbe....b...................fa....",
    "roomNames": [
     "Saloon",
     "Burial Chamber",
     "Sea of Ages",
     "Bank",
     "Captain Cabin"
    ],
    "people": [
     "Vince the voyager",
     "Astrid the astronomer",
     "Bella the bard",
     "Celia the clockmaker",
     "Dexter the drifter",
     "Elsa the explorer",
     "Flora the falconer"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "notRoom",
      4
     ],
     [
      2,
      "next",
      "boulder"
     ],
     [
      3,
      "door"
     ],
     [
      4,
      "col",
      1
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
      5
     ]
    ],
    "solution": [
     4,
     13,
     17,
     23,
     29,
     35,
     47
    ],
    "doors": [
     [
      9,
      10
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
      37
     ]
    ],
    "windows": [
     [
      3,
      "t"
     ],
     [
      28,
      "l"
     ],
     [
      42,
      "l"
     ],
     [
      44,
      "b"
     ]
    ],
    "tries": 1,
    "facts": [
     [
      "roomCount",
      0,
      0
     ],
     [
      "nextCount",
      "log",
      0
     ]
    ],
    "rules": [
     "ranks",
     "sea"
    ],
    "court": [
     3
    ],
    "rank": "ccknkkc",
    "sea": 2,
    "group": 1
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
    ],
    "tries": 1,
    "group": 1
   },
   {
    "size": 9,
    "rooms": "000000000000000000111100000111100000222000000222000000223334444223334444223334444",
    "objects": "....................ab.....d..............................fd........de..c..fa.a..",
    "roomNames": [
     "Sea of Ages",
     "Fire Pit",
     "Fort",
     "Cave",
     "Throne Room"
    ],
    "people": [
     "Arthur the astronomer",
     "Bruno the bard",
     "Celia the clockmaker",
     "Della the drifter",
     "Edgar the engineer",
     "Victor the visionary",
     "Felix the fortune teller",
     "Gideon the gladiator",
     "Hilda the historian"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "alone"
     ],
     [
      1,
      "row",
      1
     ],
     [
      1,
      "col",
      5
     ],
     [
      2,
      "row",
      2
     ],
     [
      3,
      "next",
      "log"
     ],
     [
      4,
      "col",
      4
     ],
     [
      5,
      "window"
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
      "on",
      "chair"
     ]
    ],
    "solution": [
     2,
     14,
     26,
     30,
     40,
     45,
     55,
     70,
     78
    ],
    "doors": [
     [
      27,
      36
     ],
     [
      55,
      56
     ],
     [
      67,
      68
     ]
    ],
    "windows": [
     [
      27,
      "l"
     ],
     [
      45,
      "l"
     ],
     [
      63,
      "l"
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
    "tries": 1,
    "rules": [
     "glyphs",
     "sea"
    ],
    "tags": "..............................L........................C.........................",
    "sea": 0,
    "group": 1
   },
   {
    "size": 10,
    "rooms": "0011112222001111222200111122220011112222333334445533333444553333344455666664445566666777776666677777",
    "objects": "..ac.d...adf......eba.d.b.....be.b.cd.f......efc...cf............deb..b.f....c..dcd....bebb...a..ebb",
    "roomNames": [
     "Fire Pit",
     "Saloon",
     "Cave",
     "Shrine",
     "Captain Cabin",
     "Burial Chamber",
     "Fort",
     "Great Hall"
    ],
    "people": [
     "Arthur the astronomer",
     "Birgit the bard",
     "Cedric the clockmaker",
     "Dora the dreamer",
     "Edith the explorer",
     "Felix the fortune teller",
     "Gideon the guardian",
     "Hilda the historian",
     "Vera the voyager",
     "Isla the inventor"
    ],
    "victim": 8,
    "clues": [
     [
      0,
      "on",
      "chair"
     ],
     [
      1,
      "same",
      0
     ],
     [
      2,
      "same",
      1
     ],
     [
      3,
      "on",
      "log"
     ],
     [
      4,
      "door"
     ],
     [
      5,
      "door"
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
      6,
      "row",
      6
     ],
     [
      7,
      "next",
      "clock"
     ],
     [
      8,
      "next",
      "chair"
     ],
     [
      9,
      "alone"
     ]
    ],
    "solution": [
     9,
     16,
     28,
     33,
     40,
     57,
     62,
     71,
     84,
     95
    ],
    "doors": [
     [
      11,
      12
     ],
     [
      30,
      40
     ],
     [
      15,
      16
     ],
     [
      32,
      42
     ],
     [
      35,
      45
     ],
     [
      37,
      47
     ],
     [
      38,
      48
     ],
     [
      44,
      45
     ],
     [
      60,
      70
     ],
     [
      57,
      58
     ],
     [
      74,
      75
     ],
     [
      76,
      86
     ],
     [
      78,
      88
     ],
     [
      84,
      85
     ]
    ],
    "windows": [
     [
      6,
      "t"
     ],
     [
      30,
      "l"
     ],
     [
      59,
      "r"
     ],
     [
      93,
      "b"
     ],
     [
      96,
      "b"
     ],
     [
      99,
      "b"
     ]
    ],
    "tries": 1,
    "facts": [
     [
      "nextCount",
      "statue",
      2
     ]
    ],
    "rules": [
     "ranks",
     "trades"
    ],
    "court": [
     1,
     6
    ],
    "rank": "cckncccnnc",
    "trade": ".4..1.433.",
    "tags": "................4......3.2.............................................3..2.........3...............",
    "group": 1
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
    ],
    "tries": 1,
    "group": 1
   },
   {
    "size": 12,
    "rooms": "000011112222000011112222000011112222000011112222333334445555333334445555333334445555333334445555666777448888666777448888666777448888666777448888",
    "objects": "...b...a..b.........a..f...e.d..be...ba...a.......baeb...a..aa.....f..c..ba.e..a...bf...f....ad..c..deab...fcae.a..bcb.c...edb...a...f.b....a...",
    "roomNames": [
     "Fort",
     "Shrine",
     "Saloon",
     "Bank",
     "Throne Room",
     "Captain Cabin",
     "Burial Chamber",
     "Cave",
     "Hide Tent"
    ],
    "people": [
     "Astrid the archivist",
     "Basil the bard",
     "Vivian the visionary",
     "Celia the chronicler",
     "Dexter the drifter",
     "Elias the explorer",
     "Flora the falconer",
     "Gwen the gladiator",
     "Hilda the herald",
     "Igor the illusionist",
     "Jutta the juggler",
     "Konrad the kite maker"
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
      "clock"
     ],
     [
      2,
      "next",
      "boulder"
     ],
     [
      3,
      "next",
      "chair"
     ],
     [
      4,
      "next",
      "log"
     ],
     [
      4,
      "next",
      "boulder"
     ],
     [
      5,
      "next",
      "statue"
     ],
     [
      6,
      "same",
      5
     ],
     [
      7,
      "same",
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
      "statue"
     ],
     [
      9,
      "next",
      "barrel"
     ],
     [
      10,
      "on",
      "log"
     ],
     [
      11,
      "alone"
     ]
    ],
    "solution": [
     6,
     22,
     26,
     37,
     51,
     71,
     80,
     93,
     96,
     112,
     125,
     139
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      36,
      48
     ],
     [
      7,
      8
     ],
     [
      40,
      52
     ],
     [
      41,
      53
     ],
     [
      46,
      58
     ],
     [
      52,
      53
     ],
     [
      86,
      98
     ],
     [
      88,
      100
     ],
     [
      55,
      56
     ],
     [
      113,
      114
     ],
     [
      115,
      116
     ],
     [
      92,
      104
     ],
     [
      134,
      135
     ]
    ],
    "windows": [
     [
      4,
      "t"
     ],
     [
      10,
      "t"
     ],
     [
      11,
      "r"
     ],
     [
      24,
      "l"
     ],
     [
      47,
      "r"
     ],
     [
      108,
      "l"
     ],
     [
      138,
      "b"
     ]
    ],
    "tries": 2,
    "facts": [
     [
      "roomCount",
      6,
      1
     ],
     [
      "roomCount",
      7,
      2
     ],
     [
      "windowCount",
      null,
      0
     ]
    ],
    "rules": [
     "ranks",
     "glyphs",
     "trades"
    ],
    "court": [
     2,
     3,
     5
    ],
    "rank": "knccnnnkcckc",
    "trade": "..4.23....33",
    "tags": "...............3C.............C....C3............1...............0..2..34.......C..............0L........3.....2...............C........LL.3..4.",
    "group": 1
   },
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
    "tags": "...C..C...C.....",
    "tries": 3,
    "group": 2
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
    "sea": 0,
    "tries": 3,
    "group": 2
   },
   {
    "size": 6,
    "rooms": "000011000011000011222333222333444444",
    "objects": "...e.a.......b..af...aa.......f....d",
    "roomNames": [
     "Bank",
     "Burial Chamber",
     "Great Hall",
     "Hide Tent",
     "Cave"
    ],
    "people": [
     "Alma the astronomer",
     "Basil the bard",
     "Carl the chronicler",
     "Dexter the drifter",
     "Victor the voyager",
     "Elsa the explorer"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "on",
      "chair"
     ],
     [
      1,
      "col",
      2
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
      "door"
     ],
     [
      4,
      "row",
      4
     ],
     [
      5,
      "bandit"
     ]
    ],
    "solution": [
     5,
     8,
     16,
     19,
     24,
     33
    ],
    "doors": [
     [
      15,
      16
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
      16,
      22
     ],
     [
      20,
      21
     ],
     [
      25,
      31
     ],
     [
      29,
      35
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
      3,
      "t"
     ],
     [
      30,
      "b"
     ]
    ],
    "tries": 4,
    "rules": [
     "bandits",
     "glyphs"
    ],
    "tags": ".......CLL..........................",
    "bandits": 2,
    "lawful": [
     0
    ],
    "group": 2
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
    "sea": 2,
    "tries": 3,
    "group": 2
   },
   {
    "size": 8,
    "rooms": "0000001100000011222000112223333322233333444455554444555544445555",
    "objects": ".............a.b....f......aa.c.d...caa...b......c.dc....aa.....",
    "roomNames": [
     "Bank",
     "Fort",
     "Saloon",
     "Hide Tent",
     "Captain Cabin",
     "Jail"
    ],
    "people": [
     "Arthur the astronomer",
     "Birgit the bard",
     "Vince the voyager",
     "Cedric the chronicler",
     "Della the dreamer",
     "Elsa the explorer",
     "Freya the falconer",
     "Gus the gladiator"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "alone"
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
      3,
      "next",
      "barrel"
     ],
     [
      3,
      "alone"
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
      "next",
      "statue"
     ],
     [
      6,
      "col",
      7
     ],
     [
      6,
      "same",
      7
     ],
     [
      7,
      "next",
      "statue"
     ]
    ],
    "solution": [
     6,
     10,
     21,
     24,
     35,
     41,
     55,
     60
    ],
    "doors": [
     [
      21,
      22
     ],
     [
      18,
      19
     ],
     [
      20,
      28
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
      32,
      40
     ],
     [
      35,
      43
     ],
     [
      39,
      47
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
      31,
      "r"
     ],
     [
      60,
      "b"
     ],
     [
      63,
      "b"
     ],
     [
      63,
      "r"
     ]
    ],
    "tries": 3,
    "facts": [
     [
      "doorCount",
      null,
      3
     ]
    ],
    "rules": [
     "trades",
     "bandits"
    ],
    "trade": "....0...",
    "tags": "..1.2......2.......................0.................2..........",
    "bandits": 2,
    "lawful": [
     1
    ],
    "group": 2
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
    "sea": 4,
    "tries": 4,
    "group": 2
   },
   {
    "size": 10,
    "rooms": "0001112222000111222200011133330004443333000444333300044433335555667777555566777755556677775555667777",
    "objects": "d....b.....c...fb..b....c.a.be...ac.ae.b.cbb.........c.a...eb.af.b...ad..c......d.d.d.ca..d.be..b...",
    "roomNames": [
     "Burial Chamber",
     "Bank",
     "Great Hall",
     "Shrine",
     "Throne Room",
     "Fort",
     "Cave",
     "Jail"
    ],
    "people": [
     "Victor the visionary",
     "Arthur the archivist",
     "Bea the bard",
     "Celia the chronicler",
     "Dexter the drifter",
     "Edith the explorer",
     "Fiona the fortune teller",
     "Grace the guardian",
     "Hilda the historian",
     "Ines the illusionist"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "next",
      "log"
     ],
     [
      2,
      "next",
      "statue"
     ],
     [
      3,
      "same",
      2
     ],
     [
      4,
      "same",
      5
     ],
     [
      5,
      "next",
      "chair"
     ],
     [
      6,
      "door"
     ],
     [
      7,
      "same",
      6
     ],
     [
      7,
      "col",
      8
     ],
     [
      8,
      "next",
      "boulder"
     ],
     [
      9,
      "on",
      "log"
     ]
    ],
    "solution": [
     9,
     17,
     21,
     30,
     45,
     54,
     66,
     78,
     83,
     92
    ],
    "doors": [
     [
      2,
      3
     ],
     [
      42,
      43
     ],
     [
      50,
      60
     ],
     [
      5,
      6
     ],
     [
      25,
      26
     ],
     [
      25,
      35
     ],
     [
      18,
      28
     ],
     [
      55,
      56
     ],
     [
      56,
      66
     ],
     [
      53,
      63
     ],
     [
      54,
      64
     ],
     [
      63,
      64
     ],
     [
      65,
      66
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
      9,
      "t"
     ],
     [
      49,
      "r"
     ],
     [
      94,
      "b"
     ],
     [
      95,
      "b"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "roomCount",
      4,
      2
     ],
     [
      "corner",
      null,
      2
     ]
    ],
    "rules": [
     "ranks",
     "trades"
    ],
    "court": [
     2,
     4
    ],
    "rank": "nncckkcccc",
    "trade": "34.0.24...",
    "tags": "....3....31.........3.1....2..04......0...............2...........4..............2............0.....",
    "group": 2
   },
   {
    "size": 11,
    "rooms": "0001112222200011122222000111222220001112222222222222222222222222222222222222233333344444333333444445555566666655555666666",
    "objects": "...d..........bf......db.........f...fd.........................................bad...e.......ab..dd...cf...fd.....b..f.c",
    "roomNames": [
     "Fire Pit",
     "Cave",
     "Sea of Ages",
     "Captain Cabin",
     "Bank",
     "Jail",
     "Shrine"
    ],
    "people": [
     "Vince the visionary",
     "Ada the astronomer",
     "Bea the bard",
     "Celia the clockmaker",
     "Dora the drifter",
     "Elias the engineer",
     "Felix the falconer",
     "Gwen the guardian",
     "Hilda the historian",
     "Igor the inventor",
     "Jade the juggler"
    ],
    "victim": 0,
    "clues": [
     [
      0,
      "next",
      "barrel"
     ],
     [
      1,
      "door"
     ],
     [
      2,
      "on",
      "log"
     ],
     [
      3,
      "col",
      8
     ],
     [
      4,
      "col",
      2
     ],
     [
      4,
      "alone"
     ],
     [
      5,
      "row",
      5
     ],
     [
      6,
      "row",
      6
     ],
     [
      6,
      "col",
      10
     ],
     [
      7,
      "same",
      8
     ],
     [
      8,
      "door"
     ],
     [
      9,
      "col",
      7
     ],
     [
      9,
      "withBandit"
     ],
     [
      10,
      "next",
      "statue"
     ]
    ],
    "solution": [
     4,
     14,
     23,
     41,
     46,
     61,
     76,
     77,
     93,
     106,
     119
    ],
    "doors": [
     [
      13,
      14
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
      93,
      104
     ],
     [
      98,
      109
     ],
     [
      103,
      104
     ]
    ],
    "windows": [
     [
      22,
      "l"
     ],
     [
      33,
      "l"
     ],
     [
      109,
      "r"
     ],
     [
      113,
      "b"
     ],
     [
      114,
      "b"
     ],
     [
      115,
      "b"
     ],
     [
      120,
      "b"
     ]
    ],
    "tries": 5,
    "facts": [
     [
      "roomCount",
      1,
      2
     ],
     [
      "furniture",
      null,
      2
     ]
    ],
    "rules": [
     "bandits",
     "sea"
    ],
    "sea": 2,
    "bandits": 3,
    "lawful": [
     0,
     3
    ],
    "group": 2
   },
   {
    "size": 12,
    "rooms": "000000111111000000111111000000111111223333444444223333444444223333444444223333556666223333556666778888556666778888556666778888555555778888555555",
    "objects": ".aa..........c..........bb.e..e.....c..e.aa...f.......aba....c.e.e.ab.b.d.....f.a......b.......a..a..ee....be.........cc...........fa.......e..b",
    "roomNames": [
     "Saloon",
     "Fire Pit",
     "Cave",
     "Hide Tent",
     "Fort",
     "Shrine",
     "Captain Cabin",
     "Throne Room",
     "Great Hall"
    ],
    "people": [
     "Astrid the archivist",
     "Birgit the bookbinder",
     "Carl the clockmaker",
     "Daisy the dreamer",
     "Edith the explorer",
     "Frank the fortune teller",
     "Gwen the gladiator",
     "Hazel the historian",
     "Isla the inventor",
     "Vince the voyager",
     "Jutta the jester",
     "Klaus the keeper"
    ],
    "victim": 9,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      0,
      "col",
      10
     ],
     [
      1,
      "col",
      8
     ],
     [
      2,
      "next",
      "boulder"
     ],
     [
      3,
      "door"
     ],
     [
      3,
      "same",
      6
     ],
     [
      4,
      "next",
      "statue"
     ],
     [
      5,
      "next",
      "log"
     ],
     [
      6,
      "door"
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
      "next",
      "boulder"
     ],
     [
      10,
      "alone"
     ],
     [
      11,
      "next",
      "clock"
     ]
    ],
    "solution": [
     10,
     20,
     26,
     40,
     48,
     67,
     77,
     93,
     99,
     114,
     121,
     143
    ],
    "doors": [
     [
      29,
      30
     ],
     [
      24,
      36
     ],
     [
      28,
      40
     ],
     [
      34,
      46
     ],
     [
      85,
      86
     ],
     [
      85,
      97
     ],
     [
      41,
      42
     ],
     [
      77,
      78
     ],
     [
      87,
      99
     ],
     [
      66,
      78
     ],
     [
      68,
      80
     ],
     [
      116,
      128
     ],
     [
      101,
      102
     ],
     [
      133,
      134
     ]
    ],
    "windows": [
     [
      6,
      "t"
     ],
     [
      23,
      "r"
     ],
     [
      36,
      "l"
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
      132,
      "b"
     ],
     [
      133,
      "b"
     ]
    ],
    "tries": 3,
    "facts": [
     [
      "nextCount",
      "boulder",
      4
     ],
     [
      "roomCount",
      1,
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
     1,
     7
    ],
    "rank": "knkkckkkckkc",
    "trade": "0...3.33..1.",
    "tags": "......2...03..L44...C..3..L.....2.1.............3............................3.......L.......3..1..L2...L0...C..0........1.30.4...0....2.1......",
    "group": 2
   },
   {
    "size": 4,
    "rooms": "0000000011221122",
    "objects": "ef....d.f..f....",
    "roomNames": [
     "Jail",
     "Shrine",
     "Hide Tent"
    ],
    "people": [
     "Vera the voyager",
     "Albert the archivist",
     "Birgit the bookbinder",
     "Cedric the chronicler"
    ],
    "victim": 0,
    "clues": [
     [
      1,
      "door"
     ],
     [
      2,
      "next",
      "clock"
     ],
     [
      3,
      "next",
      "clock"
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
      4,
      8
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
      2,
      "t"
     ],
     [
      8,
      "l"
     ]
    ],
    "tries": 6,
    "rules": [
     "ranks",
     "glyphs"
    ],
    "court": [
     1
    ],
    "rank": "kckc",
    "tags": "...C.....L.....L",
    "group": 3
   },
   {
    "size": 5,
    "rooms": "0001100011220002233322333",
    "objects": "...bf....d...............",
    "roomNames": [
     "Sea of Ages",
     "Shrine",
     "Hide Tent",
     "Saloon"
    ],
    "people": [
     "Astrid the astronomer",
     "Bea the bard",
     "Cora the chronicler",
     "Daisy the dreamer",
     "Vince the visionary"
    ],
    "victim": 4,
    "clues": [
     [
      0,
      "col",
      0
     ],
     [
      1,
      "notRoom",
      2
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "row",
      3
     ]
    ],
    "solution": [
     0,
     7,
     11,
     18,
     24
    ],
    "doors": [
     [
      16,
      17
     ]
    ],
    "windows": [
     [
      15,
      "l"
     ],
     [
      20,
      "l"
     ],
     [
      22,
      "b"
     ]
    ],
    "tries": 8,
    "facts": [
     [
      "roomCount",
      2,
      1
     ],
     [
      "edge",
      null,
      2
     ]
    ],
    "rules": [
     "trades",
     "sea"
    ],
    "trade": "4.3.3",
    "tags": "........3...........3....",
    "sea": 0,
    "group": 3
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
    ],
    "tries": 7,
    "group": 3
   },
   {
    "size": 7,
    "rooms": "0001111000111100000000000000222334422233442223344",
    "objects": "....d.a..........................b...a.bb........",
    "roomNames": [
     "Sea of Ages",
     "Fort",
     "Saloon",
     "Captain Cabin",
     "Fire Pit"
    ],
    "people": [
     "Ada the archivist",
     "Bea the bard",
     "Carl the clockmaker",
     "Daisy the drifter",
     "Ena the engineer",
     "Vera the voyager",
     "Frank the falconer"
    ],
    "victim": 5,
    "clues": [
     [
      0,
      "col",
      0
     ],
     [
      1,
      "notRoom",
      0
     ],
     [
      2,
      "alone"
     ],
     [
      3,
      "row",
      3
     ],
     [
      3,
      "col",
      5
     ],
     [
      4,
      "row",
      4
     ],
     [
      6,
      "next",
      "log"
     ]
    ],
    "solution": [
     0,
     10,
     20,
     26,
     29,
     37,
     46
    ],
    "doors": [
     [
      37,
      38
     ],
     [
      32,
      33
     ]
    ],
    "windows": [
     [
      5,
      "t"
     ],
     [
      34,
      "r"
     ],
     [
      45,
      "b"
     ],
     [
      48,
      "b"
     ]
    ],
    "tries": 6,
    "facts": [
     [
      "furniture",
      null,
      1
     ],
     [
      "corner",
      null,
      4
     ],
     [
      "edge",
      null,
      3
     ]
    ],
    "rules": [
     "ranks",
     "sea"
    ],
    "court": [
     2
    ],
    "rank": "cckckkc",
    "sea": 0,
    "group": 3
   },
   {
    "size": 8,
    "rooms": "0011122200111222001112220011122233344555333445553334455533344555",
    "objects": ".......bb.d.ca....f.....b....bbd.......da...c.ba.....f...da..b..",
    "roomNames": [
     "Shrine",
     "Throne Room",
     "Cave",
     "Saloon",
     "Fire Pit",
     "Bank"
    ],
    "people": [
     "Ada the astronomer",
     "Birgit the bookbinder",
     "Viola the voyager",
     "Cedric the chronicler",
     "Dmitri the drifter",
     "Edith the explorer",
     "Fiona the fortune teller",
     "Gwen the guardian"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "next",
      "log"
     ],
     [
      1,
      "on",
      "log"
     ],
     [
      1,
      "alone"
     ],
     [
      2,
      "next",
      "chair"
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
      "bandit"
     ],
     [
      5,
      "row",
      5
     ],
     [
      6,
      "same",
      5
     ],
     [
      7,
      "bandit"
     ]
    ],
    "solution": [
     6,
     8,
     21,
     28,
     35,
     42,
     49,
     63
    ],
    "doors": [
     [
      25,
      26
     ],
     [
      24,
      32
     ],
     [
      4,
      5
     ],
     [
      26,
      34
     ],
     [
      28,
      36
     ],
     [
      31,
      39
     ],
     [
      50,
      51
     ],
     [
      44,
      45
     ]
    ],
    "windows": [
     [
      4,
      "t"
     ],
     [
      23,
      "r"
     ],
     [
      24,
      "l"
     ],
     [
      56,
      "b"
     ],
     [
      63,
      "b"
     ]
    ],
    "tries": 7,
    "facts": [
     [
      "roomCount",
      4,
      1
     ],
     [
      "nextCount",
      "barrel",
      1
     ]
    ],
    "rules": [
     "trades",
     "bandits"
    ],
    "trade": ".33.24..",
    "tags": ".....3..........................2..2.....3.........0..........2.",
    "bandits": 2,
    "lawful": [
     1
    ],
    "group": 3
   },
   {
    "size": 9,
    "rooms": "001111111001111111001111111001221111001221111333224444333224444333555555333555555",
    "objects": ".........ab.................f.a.........b.........bfef.....b.b.e....bb......f.bf.",
    "roomNames": [
     "Fire Pit",
     "Sea of Ages",
     "Fort",
     "Burial Chamber",
     "Throne Room",
     "Captain Cabin"
    ],
    "people": [
     "Astrid the archivist",
     "Basil the bookbinder",
     "Cora the chronicler",
     "Dora the dreamer",
     "Ena the explorer",
     "Freya the fortune teller",
     "Gus the gladiator",
     "Viola the voyager",
     "Hazel the historian"
    ],
    "victim": 7,
    "clues": [
     [
      0,
      "row",
      0
     ],
     [
      1,
      "row",
      1
     ],
     [
      1,
      "col",
      5
     ],
     [
      2,
      "row",
      2
     ],
     [
      2,
      "col",
      7
     ],
     [
      3,
      "alone"
     ],
     [
      4,
      "window"
     ],
     [
      5,
      "row",
      5
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
      "on",
      "log"
     ]
    ],
    "solution": [
     8,
     14,
     25,
     29,
     36,
     46,
     58,
     66,
     78
    ],
    "doors": [
     [
      36,
      45
     ],
     [
      47,
      48
     ],
     [
      49,
      50
     ],
     [
      58,
      67
     ],
     [
      65,
      66
     ],
     [
      59,
      68
     ]
    ],
    "windows": [
     [
      18,
      "l"
     ],
     [
      36,
      "l"
     ],
     [
      54,
      "l"
     ],
     [
      63,
      "l"
     ],
     [
      80,
      "r"
     ]
    ],
    "tries": 9,
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
     "glyphs",
     "sea"
    ],
    "tags": "L..........................L..................L.......C...............C..........",
    "sea": 1,
    "group": 3
   },
   {
    "size": 10,
    "rooms": "0000111111000011111100002233334444223333444422333344442233335555666677555566667755556666775555666677",
    "objects": ".eaaaa.....a..c...c.a..ab..fe........d....bb..a.d..a...bbe.........a..e....d..f..aaf....e.c.b.......",
    "roomNames": [
     "Jail",
     "Cave",
     "Great Hall",
     "Fort",
     "Captain Cabin",
     "Fire Pit",
     "Hide Tent",
     "Bank"
    ],
    "people": [
     "Alma the astronomer",
     "Basil the bard",
     "Victor the visionary",
     "Cedric the clockmaker",
     "Daisy the drifter",
     "Elias the explorer",
     "Fiona the fortune teller",
     "Gideon the guardian",
     "Hugo the historian",
     "Igor the illusionist"
    ],
    "victim": 2,
    "clues": [
     [
      0,
      "on",
      "chair"
     ],
     [
      1,
      "next",
      "chair"
     ],
     [
      3,
      "next",
      "chair"
     ],
     [
      3,
      "next",
      "barrel"
     ],
     [
      4,
      "on",
      "log"
     ],
     [
      5,
      "door"
     ],
     [
      6,
      "col",
      2
     ],
     [
      7,
      "next",
      "barrel"
     ],
     [
      8,
      "same",
      7
     ],
     [
      9,
      "alone"
     ]
    ],
    "solution": [
     5,
     10,
     21,
     36,
     43,
     59,
     62,
     74,
     87,
     98
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      23,
      24
     ],
     [
      21,
      31
     ],
     [
      15,
      25
     ],
     [
      17,
      27
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
      54,
      64
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
      53,
      63
     ],
     [
      93,
      94
     ],
     [
      77,
      78
     ]
    ],
    "windows": [
     [
      6,
      "t"
     ],
     [
      9,
      "r"
     ],
     [
      59,
      "r"
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
      91,
      "b"
     ]
    ],
    "tries": 9,
    "facts": [
     [
      "nextCount",
      "statue",
      0
     ],
     [
      "roomCount",
      7,
      1
     ],
     [
      "nextCount",
      "log",
      0
     ]
    ],
    "rules": [
     "ranks",
     "trades"
    ],
    "court": [
     4,
     5
    ],
    "rank": "ckkkncncck",
    "trade": "012..3.1.2",
    "tags": ".....................2......................23.............3........4...1.1.........0.........4...2.",
    "group": 3
   },
   {
    "size": 11,
    "rooms": "0000111111100001111111000022222220000222222233332222222333322222224444455222244444552222444445522226666655222266666552222",
    "objects": "..b.........b...f......b.a.......c..........f.af.......d.............faac.....a....................b....f........b.......",
    "roomNames": [
     "Great Hall",
     "Throne Room",
     "Sea of Ages",
     "Burial Chamber",
     "Jail",
     "Captain Cabin",
     "Saloon"
    ],
    "people": [
     "Albert the astronomer",
     "Birgit the bard",
     "Clara the clockmaker",
     "Dora the drifter",
     "Edgar the explorer",
     "Felix the falconer",
     "Gwen the guardian",
     "Hugo the herald",
     "Igor the inventor",
     "Jutta the juggler",
     "Vera the voyager"
    ],
    "victim": 10,
    "clues": [
     [
      0,
      "window"
     ],
     [
      0,
      "col",
      8
     ],
     [
      1,
      "next",
      "chair"
     ],
     [
      2,
      "row",
      2
     ],
     [
      2,
      "col",
      9
     ],
     [
      3,
      "row",
      3
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
      5,
      "col",
      4
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
      "bandit"
     ],
     [
      8,
      "door"
     ],
     [
      9,
      "row",
      9
     ],
     [
      9,
      "col",
      10
     ],
     [
      10,
      "notRoom",
      4
     ]
    ],
    "solution": [
     8,
     14,
     31,
     40,
     45,
     59,
     71,
     77,
     90,
     109,
     116
    ],
    "doors": [
     [
      3,
      4
     ],
     [
      35,
      46
     ],
     [
      57,
      68
     ],
     [
      81,
      82
     ],
     [
      90,
      101
     ],
     [
      103,
      104
     ]
    ],
    "windows": [
     [
      1,
      "t"
     ],
     [
      3,
      "t"
     ],
     [
      4,
      "t"
     ],
     [
      7,
      "t"
     ],
     [
      8,
      "t"
     ],
     [
      66,
      "l"
     ],
     [
      110,
      "b"
     ]
    ],
    "tries": 7,
    "facts": [
     [
      "roomCount",
      1,
      1
     ],
     [
      "roomCount",
      6,
      0
     ],
     [
      "nextCount",
      "chair",
      3
     ]
    ],
    "rules": [
     "bandits",
     "sea"
    ],
    "sea": 2,
    "bandits": 3,
    "lawful": [
     0,
     5
    ],
    "group": 3
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
    "tags": "10.......4.0.......L..............0.......1............C......4.C.........2...CL....C...0........................L...0L.0.............2.1..1....",
    "tries": 10,
    "group": 3
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
// tries:   "what if" steps the hints need (the difficulty)


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
  if (level.tries >= 0) out.tries = level.tries;
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
    tries: raw.tries ?? null,
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
        yield { elim: bad.map(i => [p, i]), text, trial: true };
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

// "What if" steps a case may need, per board size. Fewer means easier hints.
const MAX_TRIES = { 4: 0, 5: 0, 6: 0, 7: 1, 8: 1, 9: 2, 10: 2, 11: 3, 12: 3 };

// How many short tries ("what if" steps) the deduction needs to solve the case.
// -1 if it can not solve it without the long-chain fallback.
function trialCount(level, blocking) {
  const steps = deduce(level, blocking, plainText(level), { deep: false });
  const last = steps[steps.length - 1];
  if (!last?.done || !last.before.pos.every((i, p) => i === level.solution[p])) return -1;
  return steps.filter(st => st.trial).length;
}

// True if the deduction solves the case with easy steps and at most
// maxTries short tries, without the long-chain fallback.
function isDeducible(level, blocking, maxTries = MAX_TRIES[level.size] ?? Infinity) {
  const k = trialCount(level, blocking);
  return k >= 0 && k <= maxTries;
}

// ---- js/generator.js ----
// Level generator. Used by tools/generate.mjs and by the browser
// for player-made cases.
//
// Each level has exactly one solution. The step-by-step deduction in
// js/hints.js must solve it without a long search.


const SIZES = [4, 5, 6, 7, 8, 9, 10, 11, 12];

// Difficulty levels: how many "what if" steps the hints may need.
const DIFFICULTY = [
  { name: 'Beginner', min: 0, max: 0 },
  { name: 'Medium', min: 1, max: 2 },
  { name: 'Hard', min: 3, max: 5 },
  { name: 'Expert', min: 6, max: 10 },
  { name: 'Extreme', min: 11, max: Infinity },
];
// Name of campaign case i, e.g. "Medium case 3" (counted within its group).
function campaignCaseName(levels, i) {
  const g = levels[i].group;
  if (g === undefined) return `Case ${i + 1}`;
  const num = levels.slice(0, i + 1).filter(l => l.group === g).length;
  return `${DIFFICULTY[g].name} case ${num}`;
}
// Index into DIFFICULTY for a number of "what if" steps.
const difficultyIndex = k => DIFFICULTY.findIndex(d => k >= d.min && k <= d.max);

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

// True if the case still works: one solution, the stored one, and deducible step by step
// with at most maxTries "what if" steps.
function works(level, blocking, maxTries) {
  const res = solve(level, blocking, { limit: 2, maxNodes: 200000 });
  return !res.aborted && res.count === 1 && res.first.join() === level.solution.join() && isDeducible(level, blocking, maxTries);
}

// True if the case needs this rule: without it, it does not work.
function ruleNeeded(level, rule, blocking, maxTries) {
  return !works(withoutRule(level, rule), blocking, maxTries);
}

// Drop every clue, couple and even/odd mark the case can do without.
// Afterwards each one left is needed. Fixed order, so it needs no random numbers.
function dropUnneeded(level, blocking, maxTries) {
  // Repeat until nothing more can go: dropping one part can make another one redundant.
  for (let changed = true; changed;) {
    changed = false;
    for (const key of ['clues', 'facts', 'couples', 'parity']) {
      if (!level[key]) continue;
      for (const item of level[key].slice()) {
        const rest = level[key].filter(x => x !== item);
        if ((key === 'couples' || key === 'parity') && !rest.length) continue; // the rule itself stays
        if (key === 'clues' && lastClue(level, item, rest)) continue; // everyone keeps a clue
        if (works({ ...level, [key]: rest }, blocking, maxTries)) { level[key] = rest; changed = true; }
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
function unneededParts(level, blocking, maxTries) {
  const out = [];
  level.clues.forEach((cl, k) => {
    if (works({ ...level, clues: level.clues.filter((_, j) => j !== k) }, blocking, maxTries)) out.push(`clue ${cl.p}:${cl.t}`);
  });
  (level.facts || []).forEach((f, k) => {
    if (works({ ...level, facts: level.facts.filter((_, j) => j !== k) }, blocking, maxTries)) out.push(`fact ${f.t}`);
  });
  for (const key of ['couples', 'parity']) {
    if (!level[key] || level[key].length < 2) continue;
    level[key].forEach((item, k) => {
      if (works({ ...level, [key]: level[key].filter((_, j) => j !== k) }, blocking, maxTries)) out.push(`${key} ${JSON.stringify(item)}`);
    });
  }
  for (const r of level.rules || []) if (!ruleNeeded(level, r, blocking, maxTries)) out.push(`rule ${r}`);
  return out;
}

// facts: kinds of case facts the case must show (player-made cases).
// Without it, a campaign case gets up to 3 facts of any kind, or none.
// tries: { min, max } "what if" steps the hints may need. Default: the campaign limit.
// timeLimit: give up after this many ms.
function makeLevel(theme, n, seed, rules = [], facts = null, { tries = null, timeLimit = Infinity } = {}) {
  const minTries = tries ? tries.min : 0;
  const maxTries = tries ? tries.max : MAX_TRIES[n];
  // Hard cases need fewer clues: let the clue removal search longer.
  const budget = BUDGET[n] * (minTries > 0 ? 20 : 1);
  const t0 = Date.now();
  const mustFacts = facts || [];
  const R = rng(seed);
  const blocking = blockingSet(theme);
  const hasSea = rules.includes('sea');
  for (let attempt = 0; attempt < 3000; attempt++) {
    if (Date.now() - t0 > timeLimit) break;
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
      const res = solve(level, blocking, { limit: 2, maxNodes: budget });
      if (res.count === 1 && !res.aborted) clues = rest;
    }
    level.clues = clues.sort((a, b) => a.p - b.p);
    // Every clue, couple and mark must be needed, and everyone keeps a clue.
    dropUnneeded(level, blocking, maxTries);
    if (peopleWithoutClue(level).length) continue;
    // A last clue that was kept but is not needed: try another board.
    if (level.clues.some((cl, k) => {
      const rest = level.clues.filter((_, j) => j !== k);
      return lastClue(level, cl, rest) && works({ ...level, clues: rest }, blocking, maxTries);
    })) continue;
    // The facts the player asked for must still be there.
    if (mustFacts.some(kind => !level.facts.some(f => f.t === kind))) continue;
    // Every special rule must matter.
    if (!rules.every(r => ruleNeeded(level, r, blocking, maxTries))) continue;
    // Final proof: every clue, fact and rule is needed.
    if (unneededParts(level, blocking, maxTries).length) continue;
    // The murderer must not be obvious before the board is solved.
    if (murdererTooEasy(level, blocking)) continue;
    // A player must be able to solve it step by step, with the wished number of tries.
    const k = trialCount(level, blocking);
    if (k < minTries || k > maxTries) continue;
    level.tries = k;
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

// v2: the grouped campaigns. Progress on the old cases does not fit the new ones.
const levelKey = (themeId, index) => `${themeId}:v2:${index}`;

// Is the case closed in the campaign? Stays true when the board is reset.
// Old saves only have `solved`.
const isClosed = state => !!(state?.closed ?? state?.solved);

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

// A colored badge for how hard a case is. The tooltip gives the exact number of tries.
function difficultyBadge(tries) {
  if (tries === null || tries === undefined || tries < 0) return null;
  const d = difficultyIndex(tries);
  const tip = `${tries} "what if" ${tries === 1 ? 'step' : 'steps'} in the hints`;
  return el(`span.difficulty.d${d}`, { title: tip, 'aria-label': `${DIFFICULTY[d].name}: ${tip}` }, DIFFICULTY[d].name);
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
  const caseName = custom ? 'Your case' : campaignCaseName(campaign.levels, index);
  const n = level.size;
  const P = level.people.length;
  const blocking = blockingSet(theme);
  const victim = victimIndex(level);
  // "What if" steps the hints need. Old links do not store it: work it out once.
  const tries = level.tries ?? trialCount(level, blocking);
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
    solved: !!saved?.solved, // this board is solved: it is locked
    // The case counts as closed in the campaign. A reset keeps it, and a shared board does not change it.
    closed: isClosed(loadLevel(key)),
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
    saveLevel(key, { ...current(), solved: state.solved, closed: state.closed });
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
      if (tries >= 0) setSetting('makerDifficulty', [difficultyIndex(tries), difficultyIndex(tries)]);
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
        const same = tries >= 0 ? { tries: DIFFICULTY[difficultyIndex(tries)], timeLimit: 30000 } : {};
        const fresh = makeLevel(theme, n, Math.floor(Math.random() * 2 ** 31), level.rules, kinds, same);
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
    // Preselect what follows from the player's board: the victim's room,
    // and the one person alone with the victim there (if there is one).
    let room = level.rooms[state.pos[victim]];
    if (!roomIds.includes(room)) room = -1;
    let who = murdererOf(level, state.pos);
    if (!suspects.includes(who)) who = -1;
    const send = el('button.btn.success', { type: 'button', disabled: room < 0 || who < 0 }, 'Submit answer');
    const ready = () => { send.disabled = room < 0 || who < 0; };
    // Rooms as a list, like the people: a color swatch and the name.
    const roomBtns = roomIds.map(k => el('button.note-pick.room-pick', {
      type: 'button', 'aria-pressed': String(k === room), style: { '--rh': roomHue(theme, k) },
      onclick: e => { room = k; roomBtns.forEach(x => x.setAttribute('aria-pressed', String(x === e.currentTarget))); ready(); },
    }, el('span.swatch', { 'aria-hidden': 'true' }, el(`span.floor.floor-${floorOf(k)}`)), el('span.note-name', {}, level.roomNames[k])));
    const whoBtns = suspects.map(p => el('button.note-pick', {
      type: 'button', 'aria-pressed': String(p === who),
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
            el('h3', {}, 'Who is the murderer?'),
            el('div.note-picker', {}, whoBtns),
            el('h3', {}, `In which room was ${level.people[victim].name} killed?`),
            el('div.note-picker', {}, roomBtns))),
        // Cancel and Submit in one row (Submit can be disabled, so it is not a dialog button).
        el('div.dialog-buttons', {},
          el('button.btn', { type: 'button', onclick: () => document.getElementById('dialog').close('') }, 'Cancel'),
          send),
      ],
      buttons: [],
    });
    if (!answer) return;
    const boardOk = state.pos.every((i, p) => i === level.solution[p]);
    const roomOk = answer.room === level.rooms[level.solution[victim]];
    const whoOk = answer.who === murdererOf(level, level.solution);
    if (boardOk && roomOk && whoOk && !state.solved) { state.solved = true; state.closed = true; persist(); draw(); }
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
        line(whoOk, `Murderer: ${level.people[answer.who].name} ${whoOk ? 'is right.' : 'has an alibi.'}`),
        line(roomOk, `Room: the ${level.roomNames[answer.room]} ${roomOk ? 'is right.' : 'is wrong.'}`)),
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

  // The final solution in its own modal, on top of the hints dialog.
  // Closing it goes back to the hints.
  function showSolution() {
    const k = murdererOf(level, level.solution);
    const room = level.roomNames[level.rooms[level.solution[victim]]];
    const dlg = el('dialog.wide.solution-dialog');
    const close = () => dlg.close();
    dlg.append(el('div.dialog-body', {},
      el('button.dialog-x', { type: 'button', title: 'Close', 'aria-label': 'Close', onclick: close }, '×'),
      el('h2', {}, '🔑 Final solution'),
      el('p', {}, richText(`⟦${k}⟧ was alone with ⟦${victim}⟧ in the ${room}. So ⟦${k}⟧ did it.`)),
      resultBoard('solution'),
      el('div.dialog-buttons', {}, el('button.btn.primary', { type: 'button', onclick: close }, 'Close'))));
    dlg.addEventListener('close', () => dlg.remove());
    // A click on the backdrop closes it too.
    dlg.addEventListener('click', e => { if (e.target === dlg) close(); });
    document.body.append(dlg);
    dlg.showModal();
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
  // The case stays closed in the campaign if it was.
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
    // Buttons on the title line: story and final solution. Each view sets its own.
    const titleButtons = el('span.hint-buttons');
    const dialog = showDialog({ title: el('span.hint-title', {}, 'Hints', titleButtons), body, wide: 'x', buttons: [{ label: 'Close', value: true, primary: true }] });
    await new Promise(r => setTimeout(r, 30));
    const plain = (kind, v, text) => el('span.ref-plain', {}, text);
    const people = level.people.map((_, q) => q).sort((a, b) => letter(a).localeCompare(letter(b)));
    // buttons: shown on the title line.
    const peopleColumn = (step, buttons) => {
      const about = new Set([step.place?.p, step.allowed?.p, ...(step.elim || []).map(([q]) => q)].filter(q => q !== undefined));
      titleButtons.replaceChildren(...[buttons].flat());
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
      if (!options.length) { titleButtons.replaceChildren(...storyButton()); body.replaceChildren(el('p', {}, 'No next step found.')); return; }
      const step = options[j];
      const label = step.mistake ? 'Check your board' : step.done ? 'All placed' : 'Your next step';
      // Next (→ and the Next button): after Apply, the next step from the updated board;
      // before it, the next option for this board.
      const noNext = !applied && j >= options.length - 1;
      const goNext = () => { if (applied) { options = null; j = 0; applied = false; } else j++; showNext(); };
      body.replaceChildren(el('div.hint-main', {},
        el('div.hint-nav', {},
          el('button.btn', { type: 'button', disabled: applied || j === 0, onclick: () => { j--; showNext(); } }, '←'),
          el('span.hint-count', {}, options.length > 1 ? `${label} ${j + 1} of ${options.length}` : label),
          // After Apply, → works out the next step from the updated board.
          el('button.btn', { type: 'button', disabled: noNext,
            title: applied ? 'Next step from your updated board' : null, onclick: goNext }, '→')),
        hintBoard(step),
        el(`p.hint-text${step.done ? '.done' : ''}${step.mistake ? '.mistake' : ''}`, {}, richText(step.text)),
        step.mistake || step.done ? null : el('div.hint-apply', {},
          el('button.btn.primary', { type: 'button', disabled: applied, title: 'Write this step onto your board (Undo takes it back)',
            onclick: () => { applyStep(step); applied = true; showNext(); } }, applied ? '✓ Applied' : '✓ Apply'),
          el('button.btn', { type: 'button', disabled: noNext,
            title: applied ? 'Next step from your updated board' : 'Show another step for this board', onclick: goNext }, 'Next →'))),
      peopleColumn(step, storyButton()));
      scrollToPerson();
    };
    const solutionButton = () => el('button.btn', { type: 'button', onclick: showSolution }, '🔑 Show final solution');
    const storyButton = () => [
      el('button.btn', { type: 'button', onclick: showStory }, '📖 Show full deduction story'),
      solutionButton()];

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
      peopleColumn(step, solutionButton()));
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
        el('a.topbar-title', { href: '#/', title: 'Main page' }, logo('.bar-logo'), 'Alibi Grid'),

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
        el('h1', {}, `${theme.icon} ${caseName}`, el('small', {}, ` · ${n} × ${n} `), difficultyBadge(tries)),
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

// Campaign cases by group, in order: [{ g, items: [[level, index], ...] }].
// Old files without groups give one group with g = -1.
function groupsOf(levels) {
  const out = [];
  levels.forEach((lv, i) => {
    const g = lv.group ?? -1;
    if (!out.length || out[out.length - 1].g !== g) out.push({ g, items: [] });
    out[out.length - 1].items.push([lv, i]);
  });
  return out;
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

// A small picture of a case, drawn like the board: rooms, walls, striped blocked
// cells, objects on white tiles, marks, doors and windows.
let thumbIds = 0;
function caseThumb(theme, lv) {
  const level = decodeLevel(theme, lv);
  const n = level.size;
  const blocking = blockingSet(theme);
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${n} ${n}`);
  svg.setAttribute('class', 'case-thumb');
  svg.setAttribute('aria-hidden', 'true');
  const add = (tag, attrs, text) => {
    const node = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
    if (text) node.textContent = text;
    (attrs.parent || svg).append(node);
    return node;
  };
  // Stripes for blocked cells, as on the board.
  const stripes = `thumb-stripes-${thumbIds++}`;
  const defs = add('defs', {});
  const pat = add('pattern', { id: stripes, width: 0.16, height: 0.16, patternUnits: 'userSpaceOnUse', patternTransform: 'rotate(45)', parent: defs });
  add('rect', { x: 0.11, y: 0, width: 0.05, height: 0.16, class: 'thumb-stripe', parent: pat });
  // Floor, walls.
  let walls = '';
  for (let i = 0; i < n * n; i++) {
    const r = Math.floor(i / n), c = i % n, k = level.rooms[i];
    add('rect', { x: c, y: r, width: 1, height: 1, class: k === level.sea ? 'thumb-sea' : 'thumb-room', style: `--rh: ${roomHue(theme, k)}` });
    if (level.objects[i] && blocking.has(level.objects[i])) add('rect', { x: c, y: r, width: 1, height: 1, fill: `url(#${stripes})` });
    if (c < n - 1 && k !== level.rooms[i + 1]) walls += `M${c + 1} ${r}v1`;
    if (r < n - 1 && k !== level.rooms[i + n]) walls += `M${c} ${r + 1}h1`;
  }
  add('path', { d: walls, class: 'thumb-wall' });
  add('rect', { x: 0, y: 0, width: n, height: n, class: 'thumb-frame' });
  // Doors in the walls between rooms, windows in the outer wall.
  for (const [i, j] of level.doors) {
    const r = Math.floor(i / n), c = i % n;
    const [x1, y1, x2, y2] = j === i + 1 ? [c + 1, r + 0.22, c + 1, r + 0.78] : [c + 0.22, r + 1, c + 0.78, r + 1];
    add('line', { x1, y1, x2, y2, class: 'thumb-door-gap' });
    add('line', { x1, y1, x2, y2, class: 'thumb-door' });
  }
  for (const [i, side] of level.windows) {
    const r = Math.floor(i / n), c = i % n, d = 0.08;
    const [x1, y1, x2, y2] = side === 't' ? [c + 0.2, d, c + 0.8, d] : side === 'b' ? [c + 0.2, n - d, c + 0.8, n - d]
      : side === 'l' ? [d, r + 0.2, d, r + 0.8] : [n - d, r + 0.2, n - d, r + 0.8];
    add('line', { x1, y1, x2, y2, class: 'thumb-window' });
    add('line', { x1, y1, x2, y2, class: 'thumb-window-glass' });
  }
  // Two sofa (or bed) cells side by side in one room are one wide piece, as on the board.
  const pairable = id => ['🛋️', '🛏️'].includes(theme.objects[id]?.icon) && !blocking.has(id);
  const pairOf = new Map();
  for (const [dir, step] of [['h', 1], ['v', n]]) {
    for (let i = 0; i < n * n; i++) {
      const j = i + step;
      if (dir === 'h' && i % n === n - 1) continue;
      if (j >= n * n || pairOf.has(i) || pairOf.has(j)) continue;
      const o = level.objects[i];
      if (o && o === level.objects[j] && pairable(o) && level.rooms[i] === level.rooms[j]) { pairOf.set(i, dir); pairOf.set(j, 'skip'); }
    }
  }
  // Objects on raised white tiles.
  for (let i = 0; i < n * n; i++) {
    const o = level.objects[i];
    if (!o || pairOf.get(i) === 'skip') continue;
    const r = Math.floor(i / n), c = i % n, pair = pairOf.get(i);
    const w = pair === 'h' ? 1.74 : 0.74, h = pair === 'v' ? 1.74 : 0.74;
    add('rect', { x: c + 0.13, y: r + 0.18, width: w, height: h, rx: 0.16, class: 'thumb-tile-shadow' });
    add('rect', { x: c + 0.13, y: r + 0.13, width: w, height: h, rx: 0.16, class: 'thumb-tile' });
    add('text', { x: c + 0.13 + w / 2, y: r + 0.15 + h / 2, class: 'thumb-obj' }, theme.objects[o].icon);
  }
  // Marks of the special rules: seals, work spots and task spots.
  (level.tags || []).forEach((tag, i) => {
    if (!tag) return;
    const r = Math.floor(i / n), c = i % n;
    const info = tag.startsWith('t:') || tag.startsWith('k:') ? tradeById(tag.slice(2)) : GLYPHS[tag];
    if (!info) return;
    if (tag.startsWith('t:') || tag.startsWith('k:')) add('rect', { x: c + 0.16, y: r + 0.16, width: 0.68, height: 0.68, rx: 0.14, class: 'thumb-work' });
    else add('circle', { cx: c + 0.5, cy: r + 0.5, r: 0.34, class: 'thumb-seal' });
    add('text', { x: c + 0.5, y: r + 0.53, class: 'thumb-obj small' }, info.icon);
  });
  return svg;
}

// A big green tick that covers a whole case card.
function caseTick() {
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 100 100');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  svg.setAttribute('class', 'case-tick');
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', 'Solved');
  for (const cls of ['tick-halo', 'tick-line']) {
    const line = document.createElementNS(NS, 'polyline');
    line.setAttribute('points', '24,54 42,72 78,30');
    line.setAttribute('class', cls);
    svg.append(line);
  }
  return svg;
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
  // Seconds the generator may search before it gives up.
  let timeout = Number(getSetting('makerTimeout', 30)) || 30;
  const timeoutInput = el('input', {
    type: 'number', min: 5, max: 600, step: 5, value: timeout, 'aria-label': 'Time limit in seconds',
    onchange: e => {
      timeout = Math.min(600, Math.max(5, Math.round(Number(e.target.value)) || 30));
      e.target.value = timeout;
      setSetting('makerTimeout', timeout);
    },
  });
  const status = el('p.maker-status', { role: 'status' });
  const boxes = RULES.map(r => choiceCard(r, RULE_LABEL[r], RULE_SHORT[r], chosen, 'makerRules'));
  const factBoxes = FACT_KINDS.map(f => choiceCard(f, FACT_CARDS[f][0], FACT_CARDS[f][1], chosenFacts, 'makerFacts'));
  const sizeSelect = el('select', {
    'aria-label': 'Board size',
    onchange: e => { size = Number(e.target.value); setSetting('makerSize', size); },
  }, SIZES.map(n => el('option', { value: n, selected: n === size }, `${n} × ${n}`)));
  // Difficulty: a range of levels, picked with two handles on one slider.
  const top = DIFFICULTY.length - 1;
  const saved = getSetting('makerDifficulty', [0, 1]);
  let range = [0, 1].map(k => Math.min(top, Math.max(0, Number(saved[k]) || 0))).sort((a, b) => a - b);
  const handles = [0, 1].map(k => el('input', {
    type: 'range', min: 0, max: top, step: 1, value: range[k],
    'aria-label': k ? 'Hardest level' : 'Easiest level',
    oninput: e => {
      const v = Number(e.target.value);
      // The handles can not pass each other.
      range[k] = k ? Math.max(v, range[0]) : Math.min(v, range[1]);
      e.target.value = range[k];
      setSetting('makerDifficulty', range);
      drawRange();
    },
  }));
  const fill = el('span.range-fill');
  function drawRange() {
    const [a, b] = range;
    fill.style.left = `${(a / top) * 100}%`;
    fill.style.width = `${((b - a) / top) * 100}%`;
    // Screen readers say the level name, not the number.
    handles.forEach((h, k) => { h.value = range[k]; h.setAttribute('aria-valuetext', DIFFICULTY[range[k]].name); });
  }
  drawRange();
  const difficultyBox = el('div.maker-difficulty', {},
    el('span.maker-label', {}, 'Difficulty'),
    el('div.range', {}, el('span.range-track', {}, fill), ...handles),
    el('div.range-ticks', { 'aria-hidden': 'true' }, DIFFICULTY.map(d => el('span', {}, d.name))));
  const sync = () => {
    drawRange();
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
      status.textContent = `Building your case… This can take up to ${timeout} seconds.`;
      // Let the page paint before the work starts.
      setTimeout(() => {
        try {
          const seed = Math.floor(Math.random() * 2 ** 31);
          const tries = { min: DIFFICULTY[range[0]].min, max: DIFFICULTY[range[1]].max };
          const level = makeLevel(theme, size, seed, rules, facts, { tries, timeLimit: timeout * 1000 });
          const data = encodeData({ t: theme.id, l: encodeLevel(theme, level) });
          location.hash = `#/x/${data}`;
        } catch {
          status.textContent = `No case found in ${timeout} seconds. Try a longer time limit, another difficulty, a bigger board, fewer rules or fewer facts.`;
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
    difficultyBox,
    el('label.maker-size.maker-time', {}, el('span', {}, 'Time limit for board generation:'), timeoutInput, el('span', {}, 'seconds')),
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
        const levels = CAMPAIGNS.find(c => c.theme === theme.id).levels;
        return el('a.campaign-card', { href: `#/c/${theme.id}`, style: { '--h': theme.hue } },
          el('span.campaign-icon', { 'aria-hidden': 'true' }, theme.icon),
          el('span.campaign-text', {},
            el('strong', {}, theme.title),
            el('span', {}, theme.tagline),
            themeRules(theme).length ? el('span.rule-tags', {}, themeRules(theme).map(r => el('span.badge', {}, RULE_LABEL[r]))) : null),
          // One progress bar per difficulty group.
          el('span.progress-groups', {}, groupsOf(levels).map(({ g, items }) => {
            const done = items.filter(([, i]) => isClosed(loadLevel(levelKey(theme.id, i)))).length;
            return el(`span.progress${g >= 0 ? `.d${g}` : ''}`, {},
              el('small.progress-name', {}, g >= 0 ? DIFFICULTY[g].name : 'Cases'),
              el('span.progress-bar', {}, el('span', { style: { width: `${(100 * done) / items.length}%` } })),
              el('small', {}, `${done} / ${items.length}`));
          })));
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
      el('a.topbar-title', { href: '#/', title: 'Main page' }, logo('.bar-logo'), 'Alibi Grid')),
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
      el('a.topbar-title', { href: '#/', title: 'Main page' }, logo('.bar-logo'), 'Alibi Grid')),
    el('header.campaign-head', { style: { '--h': theme.hue } },
      el('span.campaign-icon.big', { 'aria-hidden': 'true' }, theme.icon),
      el('div', {}, el('h1', {}, theme.title), el('p.lede', {}, theme.tagline))),
    themeRules(theme).length
      ? el('ul.rule-list', {}, theme.mix
        ? [el('li', {}, 'Each case mixes two or three of these special rules:'), ...themeRules(theme).map(r => el('li', {}, ruleText(r)))]
        : themeRules(theme).map(r => el('li', {}, ruleText(r))))
      : '', // not null: replaceChildren would show it as the text "null"
    // Cases grouped by difficulty: Beginner, Medium, Hard, Expert.
    // Each group folds open and shut. Folded groups are remembered per campaign.
    el('div.case-groups', {}, groupsOf(campaign.levels).map(({ g, items }) => el(g >= 0 ? 'details.case-group' : 'section.case-group', g < 0 ? {} : {
      open: !getSetting('foldedGroups', {})[theme.id]?.includes(g),
      ontoggle: e => {
        const all = getSetting('foldedGroups', {});
        const mine = new Set(all[theme.id] || []);
        e.target.open ? mine.delete(g) : mine.add(g);
        setSetting('foldedGroups', { ...all, [theme.id]: [...mine] });
      },
    },
      g >= 0 ? el('summary.case-group-head', {},
        el('h2', {}, DIFFICULTY[g].name),
        el('span.case-group-info', {},
          `${items.filter(([, i]) => isClosed(loadLevel(levelKey(theme.id, i)))).length} / ${items.length} solved`)) : '',
      el('ol.cases', {}, items.map(([lv, i]) => {
        const state = loadLevel(levelKey(theme.id, i));
        const status = isClosed(state) ? 'solved' : state?.pos?.some(x => x >= 0) ? 'started' : 'new';
        // A box in the corner closes (or opens) a case by hand. It sits next to the
        // card's link, not in it, so a tick does not open the case.
        const closeBox = el('input.case-close', {
          type: 'checkbox', checked: status === 'solved',
          title: status === 'solved' ? 'Closed. Untick to open it again.' : 'Tick to close this case',
          'aria-label': `Case ${items.findIndex(([, j]) => j === i) + 1} closed`,
          onchange: e => {
            // Tick: closed. Untick: open again, and the board is no longer locked.
            const old = loadLevel(levelKey(theme.id, i)) || {};
            saveLevel(levelKey(theme.id, i), { ...old, closed: e.target.checked, solved: e.target.checked && !!old.solved });
            const y = window.scrollY;
            renderCampaign(theme);
            window.scrollTo(0, y);
          },
        });
        return el('li.case-item', { style: { '--h': theme.hue } }, closeBox, el(`a.case-card.${status}`, { href: `#/c/${theme.id}/${i}`, style: { '--h': theme.hue } },
          caseThumb(theme, lv),
          el('span.case-num', {}, g >= 0 ? `Case ${items.findIndex(([, j]) => j === i) + 1}` : campaignCaseName(campaign.levels, i)),
          el('span.case-size', {}, `${lv.size} × ${lv.size} `, difficultyBadge(lv.tries)),
          el('span.case-victim', {}, `Victim: ${lv.people[lv.victim]}`),
          theme.mix ? el('span.case-victim', {}, lv.rules.map(r => RULE_LABEL[r]).join(' · ')) : null,
          status === 'started' ? el('span.case-status', {}, 'In progress') : null,
          // Solved cases get a big green tick over the whole card.
          status === 'solved' ? caseTick() : null));
      }))))),
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
