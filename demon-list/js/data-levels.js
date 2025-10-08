// Автоматический расчет очков на основе позиции
function calculateLevelPoints(position) {
    const basePoints = 100000;
    return parseFloat((basePoints / Math.sqrt(position)).toFixed(2));
}

window.levelsData = [
  {
    id: 1,
    name: "Thinking Space II",
    creator: "CairoX",
    position: 1,
    points: calculateLevelPoints(1), // 100,000.00
    details: {
      description: "A mindscape of pure insanity, most fall to its brutal nature. Gameplay by CoCy team, deco hosted by Dr.Cuber, Verified by Zoink. Dedicated to Hideki <3",
      length: 110,
      objects: 139553,
      version: "2.2",
      password: "Free Copy",
      music: "CD Browser",
      originalID: 119544028
    },
    verification: {
      verifiedBy: "Zoink",
      verifiedAt: "2024-01-15"
    },
    youtubeLinks: [
      {
        url: "https://youtu.be/example1",
        type: "verification",
        title: "Thinking Space II Verification"
      }
    ],
    positionHistory: [
      { position: 1, date: "2024-01-15", reason: "Initial placement" }
    ]
  },
  {
    id: 2,
    name: "Amethyst",
    creator: "iMist",
    position: 2,
    points: calculateLevelPoints(2), // 70,710.68
    details: {
      description: "Crystalline perfection in demon form",
      length: 98,
      objects: 120450,
      version: "2.2",
      password: "AmethystCopy",
      music: "Amethyst OST"
    },
    youtubeLinks: [
      {
        url: "https://youtu.be/example2",
        type: "verification", 
        title: "Amethyst Verification"
      }
    ]
  },
  {
    id: 3,
    name: "Tidal Wave",
    creator: "OniLinkGD",
    position: 3,
    points: calculateLevelPoints(3), // 57,735.03
    details: {
      description: "Overwhelming wave of difficulty",
      length: 105,
      objects: 135000,
      version: "2.2",
      password: "TidalCopy",
      music: "Tidal OST"
    }
  },
  {
    id: 4,
    name: "Nullscapes",
    creator: "ItzKiba",
    position: 4,
    points: calculateLevelPoints(4), // 50,000.00
    details: {
      description: "Journey through empty landscapes",
      length: 95,
      objects: 110000,
      version: "2.2",
      password: "NullCopy",
      music: "Nullscapes OST"
    }
  },
  {
    id: 5,
    name: "Silent Clubstep",
    creator: "TheRealSailent",
    position: 5,
    points: calculateLevelPoints(5), // 44,721.36
    details: {
      description: "The silent killer",
      length: 120,
      objects: 150000,
      version: "2.2",
      password: "SilentCopy",
      music: "Clubstep"
    }
  },
  {
    id: 6,
    name: "Acheron",
    creator: "Ryder",
    position: 6,
    points: calculateLevelPoints(6), // 40,824.83
    details: {
      description: "River of pain",
      length: 108,
      objects: 140000,
      version: "2.2", 
      password: "AcheronCopy",
      music: "Acheron OST"
    }
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
    }
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
    }
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
    }
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
    }
  }
];