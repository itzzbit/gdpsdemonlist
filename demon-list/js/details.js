class DetailManager {
  static renderLevelDetail(level) {
    return `
      <div class="container fade-in">
        <a href="levels.html" class="back-button">← Back to Levels</a>
        
        <div class="detail-container">
          <div class="detail-header">
            <h1 class="detail-title">${level.name}</h1>
            <div class="detail-subtitle">by ${level.creator}</div>
            <div class="level-position">Position: #${level.position}</div>
            <div class="level-points">${level.points.toLocaleString()} points</div>
          </div>

          <div class="detail-stats">
            <div class="detail-stat">
              <div class="detail-stat-value">${level.details.length}s</div>
              <div class="detail-stat-label">Length</div>
            </div>
            <div class="detail-stat">
              <div class="detail-stat-value">${level.details.objects.toLocaleString()}</div>
              <div class="detail-stat-label">Objects</div>
            </div>
            <div class="detail-stat">
              <div class="detail-stat-value">${level.details.version}</div>
              <div class="detail-stat-label">Version</div>
            </div>
            <div class="detail-stat">
              <div class="detail-stat-value">${level.details.password}</div>
              <div class="detail-stat-label">Password</div>
            </div>
          </div>

          <div class="detail-content">
            <h3>Description</h3>
            <p>${level.details.description}</p>
            
            <h3>Music</h3>
            <p>${level.details.music}</p>
            
            ${level.verification ? `
              <h3>Verification</h3>
              <p>Verified by ${level.verification.verifiedBy} on ${level.verification.verifiedAt}</p>
            ` : ''}
            
            ${level.youtubeLinks && level.youtubeLinks.length > 0 ? `
              <h3>Videos</h3>
              <div class="video-links">
                ${level.youtubeLinks.map(link => `
                  <a href="${link.url}" target="_blank" class="video-link">${link.title}</a>
                `).join('')}
              </div>
            ` : ''}
          </div>
        </div>

        ${level.positionHistory && level.positionHistory.length > 0 ? `
          <div class="history-list">
            <h3>Position History</h3>
            ${level.positionHistory.map(history => `
              <div class="history-item">
                <div class="history-date">${history.date}</div>
                <div class="history-change">Position #${history.position} - ${history.reason}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }

  static renderPlayerDetail(player, levels) {
    const passedLevels = player.passedLevels.map(levelId => 
      levels.find(level => level.id === levelId)
    ).filter(level => level);

    const hardestCompleted = passedLevels.reduce((hardest, level) => 
      !hardest || level.position < hardest.position ? level : hardest, null
    );

    return `
      <div class="container fade-in">
        <a href="players.html" class="back-button">← Back to Players</a>
        
        <div class="detail-container">
          <div class="detail-header">
            <h1 class="detail-title">${player.username}</h1>
            <div class="detail-subtitle">${player.country}</div>
            <div class="player-rank">Rank: #${player.rank}</div>
            <div class="player-points">${player.points.toLocaleString()} points</div>
          </div>

          <div class="detail-stats">
            <div class="detail-stat">
              <div class="detail-stat-value">${player.stats.totalLevels}</div>
              <div class="detail-stat-label">Total Levels</div>
            </div>
            <div class="detail-stat">
              <div class="detail-stat-value">${passedLevels.length}</div>
              <div class="detail-stat-label">Levels Completed</div>
            </div>
            <div class="detail-stat">
              <div class="detail-stat-value">${hardestCompleted ? `#${hardestCompleted.position}` : 'N/A'}</div>
              <div class="detail-stat-label">Hardest Level</div>
            </div>
            <div class="detail-stat">
              <div class="detail-stat-value">${Math.round(player.stats.averagePoints).toLocaleString()}</div>
              <div class="detail-stat-label">Avg Points</div>
            </div>
          </div>

          <div class="detail-content">
            <h3>Completed Levels</h3>
            ${passedLevels.length > 0 ? `
              <div class="levels-grid">
                ${passedLevels.map(level => `
                  <div class="level-card" onclick="showLevelDetail(${level.id})">
                    <div class="level-position">#${level.position}</div>
                    <div class="level-name">${level.name}</div>
                    <div class="level-creator">by ${level.creator}</div>
                    <div class="level-points">${level.points.toLocaleString()} pts</div>
                  </div>
                `).join('')}
              </div>
            ` : '<p>No levels completed yet.</p>'}
          </div>
        </div>
      </div>
    `;
  }
}