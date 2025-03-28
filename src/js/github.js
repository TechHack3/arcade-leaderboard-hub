
// GitHub repos data and functionality

document.addEventListener('DOMContentLoaded', function() {
  // Sample repositories data (would be fetched from GitHub API in a real application)
  const reposData = [
    {
      id: 1,
      name: "Cloud Functions Demo",
      description: "Collection of serverless function examples for Google Cloud Functions with various triggers and use cases.",
      stars: 156,
      forks: 48,
      issues: 5,
      language: "Python",
      url: "https://github.com"
    },
    {
      id: 2,
      name: "BigQuery ML Toolkit",
      description: "Tools and examples for machine learning with Google BigQuery ML, featuring preprocessing pipelines and model templates.",
      stars: 124,
      forks: 37,
      issues: 3,
      language: "SQL",
      url: "https://github.com"
    },
    {
      id: 3,
      name: "Kubernetes Workshop",
      description: "Step-by-step workshop materials for deploying scalable applications on Google Kubernetes Engine (GKE).",
      stars: 215,
      forks: 67,
      issues: 9,
      language: "Go",
      url: "https://github.com"
    },
    {
      id: 4,
      name: "Cloud Arcade Games",
      description: "Retro-style arcade games built with modern web technologies and deployed on Google Cloud Platform.",
      stars: 98,
      forks: 24,
      issues: 7,
      language: "JavaScript",
      url: "https://github.com"
    },
    {
      id: 5,
      name: "AutoML Vision Examples",
      description: "Examples and tutorials for using Google Cloud AutoML Vision for custom image recognition models.",
      stars: 183,
      forks: 42,
      issues: 11,
      language: "Python",
      url: "https://github.com"
    },
    {
      id: 6,
      name: "Dataflow Pipeline Templates",
      description: "Ready-to-use Apache Beam pipeline templates for common data processing tasks on Google Cloud Dataflow.",
      stars: 112,
      forks: 29,
      issues: 4,
      language: "Java",
      url: "https://github.com"
    }
  ];
  
  // Function to populate the repositories grid
  function populateRepos() {
    const reposGrid = document.querySelector('.repos-grid');
    if (!reposGrid) return;
    
    // Clear existing content
    reposGrid.innerHTML = '';
    
    // Add each repository card
    reposData.forEach((repo, index) => {
      const repoCard = document.createElement('div');
      repoCard.classList.add('repo-card', 'fade-in');
      
      repoCard.innerHTML = `
        <div class="repo-header">
          <h3 class="repo-name">${repo.name}</h3>
          <p class="repo-description">${repo.description}</p>
        </div>
        <div class="repo-stats">
          <div class="repo-stat">
            <span>${repo.stars}</span>
            <span>★ Stars</span>
          </div>
          <div class="repo-stat">
            <span>${repo.forks}</span>
            <span>🍴 Forks</span>
          </div>
          <div class="repo-stat">
            <span>${repo.issues}</span>
            <span>⚠️ Issues</span>
          </div>
        </div>
        <div class="repo-actions">
          <a href="${repo.url}" class="repo-link" target="_blank">View Repository</a>
        </div>
      `;
      
      reposGrid.appendChild(repoCard);
      
      // Add animation delay for staggered appearance
      setTimeout(() => {
        repoCard.classList.add('active');
      }, index * 150);
    });
  }
  
  // Initialize repositories
  populateRepos();
});
