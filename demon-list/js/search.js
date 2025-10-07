class SearchManager {
  constructor(levels, players) {
    this.levels = levels;
    this.players = players;
  }

  searchLevels(query) {
    if (!query.trim()) return this.levels;
    
    const searchTerm = query.toLowerCase();
    return this.levels.filter(level => 
      level.name.toLowerCase().includes(searchTerm) ||
      level.creator.toLowerCase().includes(searchTerm)
    );
  }

  searchPlayers(query) {
    if (!query.trim()) return this.players;
    
    const searchTerm = query.toLowerCase();
    return this.players.filter(player => 
      player.username.toLowerCase().includes(searchTerm) ||
      player.country.toLowerCase().includes(searchTerm)
    );
  }
}