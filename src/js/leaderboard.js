
// Leaderboard data and functionality

document.addEventListener('DOMContentLoaded', function() {
  // Fetch leaderboard data from API
  fetchLeaderboardData()
    .then(processLeaderboardData)
    .then(populateLeaderboard)
    .catch(error => {
      console.error('Error loading leaderboard:', error);
      // If API fails, use backup data
      const backupData = getBackupData();
      populateLeaderboard(backupData);
    });
  
  // Function to fetch data from the API
  async function fetchLeaderboardData() {
    const response = await fetch('https://techhack.tioitservices.in/leaderboard/get_users.php');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  }
  
  // Process the API data to calculate total scores and sort by rank
  function processLeaderboardData(data) {
    return data.map(person => {
      // Convert string values to numbers and calculate total score
      const arcadeGames = parseInt(person.arcade_games) || 0;
      const triviaGames = parseInt(person.trivia_games) || 0;
      const labCourses = parseInt(person.lab_courses) || 0;
      const totalScore = arcadeGames + triviaGames + labCourses;
      
      return {
        id: person.id,
        name: person.user_name,
        score: totalScore,
        // Use a placeholder avatar if needed
        avatar: `src/assets/avatars/avatar${Math.min(parseInt(person.id) || 1, 10)}.jpg`,
        details: {
          arcadeGames,
          triviaGames,
          labCourses,
          skillBadges: parseInt(person.skill_badges) || 0
        }
      };
    }).sort((a, b) => b.score - a.score) // Sort by score descending
      .map((person, index) => ({...person, rank: index + 1})); // Add rank based on sorted position
  }
  
  // Backup data in case the API fails
  function getBackupData() {
    const backupData = [
      { id: 4, name: "Michael Brown", score: 9110, avatar: "src/assets/avatars/avatar4.jpg", rank: 4 },
      { id: 5, name: "Emma Wilson", score: 8950, avatar: "src/assets/avatars/avatar5.jpg", rank: 5 },
      { id: 6, name: "Robert Davis", score: 8800, avatar: "src/assets/avatars/avatar6.jpg", rank: 6 },
      { id: 7, name: "Olivia Taylor", score: 8650, avatar: "src/assets/avatars/avatar7.jpg", rank: 7 },
      { id: 8, name: "William Clark", score: 8500, avatar: "src/assets/avatars/avatar8.jpg", rank: 8 },
      { id: 9, name: "Sophia Lee", score: 8350, avatar: "src/assets/avatars/avatar9.jpg", rank: 9 },
      { id: 10, name: "James Miller", score: 8200, avatar: "src/assets/avatars/avatar10.jpg", rank: 10 }
    ];
    return backupData;
  }
  
  // Function to populate the leaderboard
  function populateLeaderboard(data) {
    // Handle top 3 performers for the podium
    updatePodium(data.slice(0, 3));
    
    // Handle the rest of the leaderboard (ranks 4+)
    const leaderboardContainer = document.querySelector('.leaderboard');
    if (!leaderboardContainer) return;
    
    // Clear existing content
    leaderboardContainer.innerHTML = '';
    
    // Add each leaderboard item (starting from rank 4)
    const remainingData = data.slice(3);
    remainingData.forEach(person => {
      const leaderboardItem = document.createElement('div');
      leaderboardItem.classList.add('leaderboard-item');
      
      leaderboardItem.innerHTML = `
        <div class="leaderboard-rank">#${person.rank}</div>
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
      }, (person.rank - 3) * 150);
    });
  }
  
  // Function to update the podium with top 3 performers
  function updatePodium(topThree) {
    if (topThree.length < 3) return; // Ensure we have enough data
    
    // Map positions to their corresponding places on the podium
    const positions = [
      { place: 'place-1', index: 0 }, // First place
      { place: 'place-2', index: 1 }, // Second place
      { place: 'place-3', index: 2 }  // Third place
    ];
    
    // Update each podium position
    positions.forEach(position => {
      const person = topThree[position.index];
      const podiumElement = document.querySelector(`.${position.place}`);
      
      if (podiumElement && person) {
        const avatar = podiumElement.querySelector('.avatar');
        const name = podiumElement.querySelector('h3');
        const score = podiumElement.querySelector('p');
        const rank = podiumElement.querySelector('.rank');
        
        if (avatar) avatar.src = person.avatar;
        if (name) name.textContent = person.name;
        if (score) score.textContent = `${person.score} pts`;
        if (rank) rank.textContent = person.rank;
      }
    });
  }
});
