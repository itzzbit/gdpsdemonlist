class PointsCalculator {
    constructor() {
        this.basePoints = 100000; // Базовые очки для #1 места
    }

    // Расчет очков для уровня на основе позиции
    calculateLevelPoints(position) {
        return this.basePoints / Math.sqrt(position);
    }

    // Пересчет очков для всех уровней
    recalculateAllLevels(levels) {
        return levels.map(level => {
            const calculatedPoints = this.calculateLevelPoints(level.position);
            return {
                ...level,
                points: parseFloat(calculatedPoints.toFixed(2)),
                originalPoints: level.points // Сохраняем оригинальные очки для сравнения
            };
        });
    }

    // Расчет очков игрока на основе пройденных уровней
    calculatePlayerPoints(player, levels) {
        let totalPoints = 0;
        player.passedLevels.forEach(levelId => {
            const level = levels.find(l => l.id === levelId);
            if (level) {
                totalPoints += level.points;
            }
        });
        return parseFloat(totalPoints.toFixed(2));
    }

    // Пересчет очков для всех игроков
    recalculateAllPlayers(players, levels) {
        // Сначала сортируем игроков по новым очкам
        const playersWithNewPoints = players.map(player => {
            const newPoints = this.calculatePlayerPoints(player, levels);
            return {
                ...player,
                points: newPoints
            };
        });

        // Затем обновляем ранги
        return this.updatePlayerRanks(playersWithNewPoints);
    }

    // Обновление рангов игроков после пересчета очков
    updatePlayerRanks(players) {
        const sortedPlayers = [...players].sort((a, b) => b.points - a.points);
        
        return sortedPlayers.map((player, index) => ({
            ...player,
            rank: index + 1
        }));
    }

    // Показать разницу между текущими и расчетными очками
    showPointsComparison(levels) {
        const recalculated = this.recalculateAllLevels(levels);
        
        console.log("Сравнение очков уровней:");
        recalculated.forEach(level => {
            const difference = level.points - level.originalPoints;
            console.log(`${level.name}: ${level.originalPoints} -> ${level.points} (${difference > 0 ? '+' : ''}${difference.toFixed(2)})`);
        });
        
        return recalculated;
    }
}

// Автоматическое применение системы очков
function applyPointsSystem() {
    const calculator = new PointsCalculator();
    
    // Пересчитываем очки уровней
    const newLevels = calculator.recalculateAllLevels(window.levelsData);
    
    // Пересчитываем очки игроков
    const newPlayers = calculator.recalculateAllPlayers(window.playersData, newLevels);
    
    // Обновляем глобальные данные
    window.levelsData = newLevels;
    window.playersData = newPlayers;
    
    console.log("Система очков применена!");
    return { levels: newLevels, players: newPlayers };
}

// Пример использования при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Применяем систему очков (раскомментируйте для использования)
    // applyPointsSystem();
});