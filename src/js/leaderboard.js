
// Leaderboard data and functionality

document.addEventListener('DOMContentLoaded', function() {
  // Sample leaderboard data (would be fetched from an API in a real application)
  const leaderboardData = [
    { id: 4, name: "Michael Brown", score: 9110, avatar: "src/assets/avatars/avatar4.jpg" },
    { id: 5, name: "Emma Wilson", score: 8950, avatar: "src/assets/avatars/avatar5.jpg" },
    { id: 6, name: "Robert Davis", score: 8800, avatar: "src/assets/avatars/avatar6.jpg" },
    { id: 7, name: "Olivia Taylor", score: 8650, avatar: "src/assets/avatars/avatar7.jpg" },
    { id: 8, name: "William Clark", score: 8500, avatar: "src/assets/avatars/avatar8.jpg" },
    { id: 9, name: "Sophia Lee", score: 8350, avatar: "src/assets/avatars/avatar9.jpg" },
    { id: 10, name: "James Miller", score: 8200, avatar: "src/assets/avatars/avatar10.jpg" }
  ];
  
  // Function to populate the leaderboard
  function populateLeaderboard() {
    const leaderboardContainer = document.querySelector('.leaderboard');
    if (!leaderboardContainer) return;
    
    // Clear existing content
    leaderboardContainer.innerHTML = '';
    
    // Add each leaderboard item
    leaderboardData.forEach(person => {
      const leaderboardItem = document.createElement('div');
      leaderboardItem.classList.add('leaderboard-item');
      
      leaderboardItem.innerHTML = `
        <div class="leaderboard-rank">#${person.id}</div>
        <div class="leaderboard-info">
          <img src="${person.avatar}" alt="${person.name}" class="leaderboard-avatar">
          <div class="leaderboard-name">${person.name}</div>
        </div>
        <div class="leaderboard-score">${person.score} pts</div>
      `;
      
      leaderboardContainer.appendChild(leaderboardItem);
      
      // Add animation delay for staggered appearance
      setTimeout(() => {
        leaderboardItem.classList.add('fade-in');
      }, (person.id - 3) * 150);
    });
  }
  
  // Initialize the leaderboard
  populateLeaderboard();
});
