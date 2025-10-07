document.addEventListener('DOMContentLoaded', function() {
    // Загружаем топ уровни на главной странице
    const topLevelsContainer = document.getElementById('top-levels');
    const topPlayersContainer = document.getElementById('top-players');
    
    if (topLevelsContainer) {
        const levels = window.levelsData || [];
        const topLevels = levels.slice(0, 6); // Берем топ 6 уровней
        topLevelsContainer.innerHTML = topLevels.map(level => `
            <div class="level-item" onclick="location.href='levels.html'">
                <div class="level-rank">#${level.position}</div>
                <div class="level-info">
                    <div class="level-name">${level.name}</div>
                    <div class="level-creator">${level.creator}</div>
                </div>
                <div class="level-points">${level.points.toLocaleString()} pts</div>
            </div>
        `).join('');
    }
    
    if (topPlayersContainer) {
        const players = window.playersData || [];
        const topPlayers = players.slice(0, 6); // Берем топ 6 игроков
        topPlayersContainer.innerHTML = topPlayers.map(player => `
            <div class="player-item" onclick="location.href='players.html'">
                <div class="player-rank">#${player.rank}</div>
                <div class="player-info">
                    <div class="player-name">${player.username}</div>
                    <div class="player-country">${player.country}</div>
                </div>
                <div class="player-points">${player.points.toLocaleString()} pts</div>
            </div>
        `).join('');
    }
});

// Глобальная функция для показа деталей уровня
function showLevelDetail(levelId) {
    const level = window.levelsData.find(l => l.id === levelId);
    if (level) {
        const detailHTML = DetailManager.renderLevelDetail(level);
        document.body.innerHTML = `
            <nav class="navbar">
                <div class="nav-container">
                    <div class="nav-logo">DEMON LIST</div>
                    <ul class="nav-menu">
                        <li><a href="index.html" class="nav-link">Home</a></li>
                        <li><a href="levels.html" class="nav-link">Levels</a></li>
                        <li><a href="players.html" class="nav-link">Players</a></li>
                        <li><a href="about.html" class="nav-link">About</a></li>
                    </ul>
                </div>
            </nav>
            ${detailHTML}
        `;
    }
}

// Глобальная функция для показа деталей игрока
function showPlayerDetail(playerId) {
    const player = window.playersData.find(p => p.id === playerId);
    const levels = window.levelsData || [];
    if (player) {
        const detailHTML = DetailManager.renderPlayerDetail(player, levels);
        document.body.innerHTML = `
            <nav class="navbar">
                <div class="nav-container">
                    <div class="nav-logo">DEMON LIST</div>
                    <ul class="nav-menu">
                        <li><a href="index.html" class="nav-link">Home</a></li>
                        <li><a href="levels.html" class="nav-link">Levels</a></li>
                        <li><a href="players.html" class="nav-link">Players</a></li>
                        <li><a href="about.html" class="nav-link">About</a></li>
                    </ul>
                </div>
            </nav>
            ${detailHTML}
        `;
    }
}