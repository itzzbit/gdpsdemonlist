// Функция для расчета очков игрока на основе пройденных уровней
function calculatePlayerPoints(player, levels) {
    if (!levels || !Array.isArray(levels)) return 0;
    
    let totalPoints = 0;
    player.passedLevels.forEach(levelId => {
        const level = levels.find(l => l.id === levelId);
        if (level) {
            totalPoints += level.points;
        }
    });
    return parseFloat(totalPoints.toFixed(2));
}

// Основные данные игроков
window.playersData = [
  {
    id: 1,
    username: "Zdrink",
    country: "Russia",
    points: 0, // Будет рассчитано автоматически
    rank: 1,
    passedLevels: [1, 2, 3, 4, 5, 6, 7, 8] // Прошел топ-8 уровней
  },
  {
    id: 2, 
    username: "wPopoff",
    country: "USA",
    points: 0,
    rank: 2,
    passedLevels: [1, 2, 3, 4, 6, 9, 10]
  },
  {
    id: 3,
    username: "Trick",
    country: "Germany", 
    points: 0,
    rank: 3,
    passedLevels: [1, 2, 4, 5, 7, 8]
  },
  {
    id: 4,
    username: "Netermind",
    country: "Poland",
    points: 0,
    rank: 4,
    passedLevels: [2, 3, 5, 6, 8, 10]
  },
  {
    id: 5,
    username: "Thunder",
    country: "Brazil",
    points: 0,
    rank: 5,
    passedLevels: [3, 4, 6, 7, 9]
  },
  {
    id: 6,
    username: "Taiago",
    country: "Japan",
    points: 0,
    rank: 6,
    passedLevels: [4, 5, 7, 8, 10]
  },
  {
    id: 7,
    username: "Vortan",
    country: "France",
    points: 0,
    rank: 7,
    passedLevels: [5, 6, 8, 9]
  },
  {
    id: 8,
    username: "Moore",
    country: "UK",
    points: 0,
    rank: 8,
    passedLevels: [6, 7, 9, 10]
  },
  {
    id: 9,
    username: "Nickname",
    country: "Canada",
    points: 0,
    rank: 9,
    passedLevels: [7, 8, 10]
  },
  {
    id: 10,
    username: "Ioliklee",
    country: "South Korea",
    points: 0,
    rank: 10,
    passedLevels: [8, 9, 10]
  }
];

// Функция для обновления очков игроков
function updatePlayerPoints() {
    const levels = window.levelsData || [];
    
    // Пересчитываем очки для каждого игрока
    window.playersData.forEach(player => {
        player.points = calculatePlayerPoints(player, levels);
    });
    
    // Сортируем игроков по очкам (от большего к меньшему)
    window.playersData.sort((a, b) => b.points - a.points);
    
    // Обновляем ранги
    window.playersData.forEach((player, index) => {
        player.rank = index + 1;
    });
}

// Автоматически обновляем очки при загрузке данных
if (window.levelsData && window.levelsData.length > 0) {
    updatePlayerPoints();
} else {
    // Если уровни еще не загружены, ждем их загрузки
    const checkLevelsLoaded = setInterval(() => {
        if (window.levelsData && window.levelsData.length > 0) {
            updatePlayerPoints();
            clearInterval(checkLevelsLoaded);
        }
    }, 100);
}