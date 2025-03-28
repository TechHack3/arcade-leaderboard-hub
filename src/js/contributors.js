
// Contributors data and functionality

document.addEventListener('DOMContentLoaded', function() {
  // Sample contributors data (would be fetched from an API in a real application)
  const contributorsData = [
    {
      id: 1,
      name: "Emily Johnson",
      role: "Cloud Architect",
      description: "Led multiple cloud migration projects and mentored junior developers.",
      image: "../assets/avatars/contributor1.jpg",
      project_image: "../assets/images/project1.jpg",
      project_name: "Cloud Migration Framework",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      id: 2,
      name: "David Wilson",
      role: "DevOps Engineer",
      description: "Implemented CI/CD pipelines and automated deployment processes.",
      image: "../assets/avatars/contributor2.jpg",
      project_image: "../assets/images/project2.jpg",
      project_name: "CI/CD Automation Suite",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      id: 3,
      name: "Samantha Lee",
      role: "Full Stack Developer",
      description: "Built responsive web applications and optimized backend services.",
      image: "../assets/avatars/contributor3.jpg",
      project_image: "../assets/images/project3.jpg",
      project_name: "Responsive Dashboard App",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      id: 4,
      name: "Michael Brown",
      role: "ML Engineer",
      description: "Developed machine learning models for data analysis and prediction.",
      image: "../assets/avatars/contributor4.jpg",
      project_image: "../assets/images/project4.jpg",
      project_name: "Predictive Analytics Engine",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      id: 5,
      name: "Jessica Clark",
      role: "UX/UI Designer",
      description: "Created intuitive user interfaces and improved user experience.",
      image: "../assets/avatars/contributor5.jpg",
      project_image: "../assets/images/project5.jpg",
      project_name: "Arcade UI Design System",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      id: 6,
      name: "Ryan Miller",
      role: "Security Specialist",
      description: "Implemented security best practices and conducted vulnerability assessments.",
      image: "../assets/avatars/contributor6.jpg",
      project_image: "../assets/images/project6.jpg",
      project_name: "Security Compliance Framework",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      id: 7,
      name: "Alex Turner",
      role: "Database Administrator",
      description: "Optimized database performance and implemented data backup solutions.",
      image: "../assets/avatars/contributor7.jpg",
      project_image: "../assets/images/project7.jpg",
      project_name: "Database Optimization Toolkit",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      id: 8,
      name: "Olivia Martinez",
      role: "Project Manager",
      description: "Coordinated team efforts and ensured project delivery on schedule.",
      image: "../assets/avatars/contributor8.jpg",
      project_image: "../assets/images/project8.jpg",
      project_name: "Project Management Dashboard",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  ];
  
  // Function to populate the contributors grid
  function populateContributors() {
    const contributorsGrid = document.querySelector('.contributors-grid');
    if (!contributorsGrid) return;
    
    // Clear existing content
    contributorsGrid.innerHTML = '';
    
    // Add each contributor card
    contributorsData.forEach(contributor => {
      const contributorCard = document.createElement('div');
      contributorCard.classList.add('contributor-card', 'fade-in');
      
      contributorCard.innerHTML = `
        <img src="${contributor.image}" alt="${contributor.name}" class="contributor-image">
        <div class="contributor-info">
          <h3 class="contributor-name">${contributor.name}</h3>
          <div class="contributor-role">${contributor.role}</div>
          <p class="contributor-description">${contributor.description}</p>
          <div class="project-showcase">
            <img src="${contributor.project_image}" alt="${contributor.project_name}" class="project-image">
            <div class="project-name">${contributor.project_name}</div>
          </div>
          <div class="contributor-social">
            <a href="${contributor.github}" target="_blank">GitHub</a>
            <a href="${contributor.linkedin}" target="_blank">LinkedIn</a>
          </div>
        </div>
      `;
      
      contributorsGrid.appendChild(contributorCard);
    });
    
    // Trigger animation for cards
    setTimeout(() => {
      document.querySelectorAll('.fade-in').forEach(el => {
        el.classList.add('active');
      });
    }, 300);
  }
  
  // Initialize contributors
  populateContributors();
});
