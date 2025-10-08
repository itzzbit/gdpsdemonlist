// Автоматический расчет очков на основе позиции
function calculateLevelPoints(position) {
    const basePoints = 100000;
    return parseFloat((basePoints / Math.sqrt(position)).toFixed(2));
}

window.levelsData = [
  {
    id: 1,
    name: "Miha Difficult",
    creator: "KuraTheGuy",
    position: 1,
    points: calculateLevelPoints(1), // 100,000.00
    details: {
      description: "To difficult for Miha but STILL POSSIBLE FOR LUNA!!! // 14,818 Attempts",
      length: 86,
      objects: 29018,
      version: "2.2",
      password: "Free Copy",
      music: "Electroman Adventures",
      originalID: 119544028
    },
    verification: {
      verifiedBy: "SKOE",
      verifiedAt: "2025-07-07"
    },
    youtubeLinks: [
      {
        url: "https://youtu.be/cLTTnC6Xkng",
        type: "verification",
        title: "Miha Difficult Verification"
      },
    ],
  },
  {
    id: 2,
    name: "Void Storm",
    creator: "NICEPEEK",
    position: 2,
    points: calculateLevelPoints(2), // 70,710.68
    details: {
      description: "GG 13k+ att :)",
      length: 61,
      objects: 21257,
      version: "2.2",
      password: "Free Copy",
      music: "cYsmix - Eden"
    },
    youtubeLinks: [
      {
        url: "https://youtu.be/e9LSoF0s6hE",
        type: "verification", 
        title: "Void Storm Verification"
      }
    ]
  },
  {
    id: 3,
    name: "Hard Times",
    creator: "NICEPEEK",
    position: 3,
    points: calculateLevelPoints(3), // 57,735.03
    details: {
      description: "Old school level with funny moments :D. VERIFIED BY : NICEPEEK",
      length: 97,
      objects: 14504,
      version: "2.2",
      password: "Free Copy",
      music: "Time Machine"
    },
    youtubeLinks: [
      {
        url: "https://youtu.be/A04oMiiQnew?si=PBxj2J96U8oAqi3L",
        type: "verification",
        title: "Hard Times Verification"
      }
    ]
  },
  {
    id: 4,
    name: "Ts Feeling",
    creator: "yoyechka",
    position: 4,
    points: calculateLevelPoints(4), // 50,000.00
    details: {
      description: "verified by me",
      length: 56,
      objects: 7189,
      version: "2.2",
      password: "Free Copy",
      music: "Cant Fight Ts Feeling"
    },
    youtubeLinks: [
      {
        url: "https://youtu.be/sVC_Qg-EgNo",
        type: "verification",
        title: "Ts Feeling Verification"
      }
    ]
  },
  {
    id: 5,
    name: "Millioner",
    creator: "NICEPEEK",
    position: 5,
    points: calculateLevelPoints(5), // 44,721.36
    details: {
      description: "My first and best solo project ever! 18k+ object, i think theres to many objects for this level. Verified by :NICEPEEK :)",
      length: 51,
      objects: 19637,
      version: "2.2",
      password: "Free Copy",
      music: "Unknown"
    },
    youtubeLinks: [
      {
        url: "https://www.youtube.com/watch?v=Ivr7EPS7MxM",
        type: "verification",
        title: "Millioner Verification"
      }
    ]
  },
  {
    id: 6,
    name: "No Drop",
    creator: "MaskExE",
    position: 6,
    points: calculateLevelPoints(6), // 40,824.83
    details: {
      description: "River of pain",
      length: 108,
      objects: 140000,
      version: "2.2", 
      password: "Free Copy",
      music: "Acheron OST"
    },
    youtubeLinks: [
      {
        url: "https://youtu.be/kRIl4861V_c",
        type: "verification",
        title: "No Drop Verification"
      }
    ]
  },
  {
    id: 7,
    name: "Slaughterhouse",
    creator: "IcEDCave",
    position: 7,
    points: calculateLevelPoints(7), // 37,796.45
    details: {
      description: "Brutal factory of pain",
      length: 112,
      objects: 145000,
      version: "2.2",
      password: "SlaughterCopy",
      music: "Slaughterhouse OST"
    },
    youtubeLinks: [
      {
        url: "https://youtu.be/dQw4w9WgXcQ",
        type: "verification",
        title: "Slaughterhouse Verification"
      }
    ]
  },
  {
    id: 8,
    name: "Kyouki",
    creator: "Dolphy",
    position: 8,
    points: calculateLevelPoints(8), // 35,355.34
    details: {
      description: "Descend into madness",
      length: 99,
      objects: 125000,
      version: "2.2",
      password: "KyoukiCopy", 
      music: "Kyouki OST"
    },
    youtubeLinks: [
      {
        url: "https://youtu.be/dQw4w9WgXcQ",
        type: "verification",
        title: "Kyouki Verification"
      }
    ]
  },
  {
    id: 9,
    name: "Firework",
    creator: "Trick",
    position: 9,
    points: calculateLevelPoints(9), // 33,333.33
    details: {
      description: "Explosive gameplay",
      length: 103,
      objects: 130000,
      version: "2.2",
      password: "FireworkCopy",
      music: "Firework OST"
    },
    youtubeLinks: [
      {
        url: "https://youtu.be/dQw4w9WgXcQ",
        type: "verification",
        title: "Firework Verification"
      }
    ]
  },
  {
    id: 10,
    name: "Arcturus",
    creator: "ViPriN",
    position: 10,
    points: calculateLevelPoints(10), // 31,622.78
    details: {
      description: "Stellar difficulty",
      length: 97,
      objects: 118000,
      version: "2.2",
      password: "ArcturusCopy",
      music: "Arcturus OST"
    },
    youtubeLinks: [
      {
        url: "https://youtu.be/dQw4w9WgXcQ",
        type: "verification",
        title: "Arcturus Verification"
      }
    ]
  }
];