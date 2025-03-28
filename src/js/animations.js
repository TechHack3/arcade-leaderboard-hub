
// Animations JS file

document.addEventListener('DOMContentLoaded', function() {
  // Add any animation initializations here
  
  // Function to create star background if it doesn't exist
  function createStarBackground() {
    // Create stars backgrounds
    const createStars = (id, number, size) => {
      // Check if we need to generate stars or if they already exist in CSS
      const starsElement = document.getElementById(id);
      
      if (!starsElement.style.backgroundImage) {
        return; // Stars are already handled via CSS background images
      }
      
      // For browsers that don't support the background images, we'll generate stars dynamically
      starsElement.innerHTML = '';
      
      for (let i = 0; i < number; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random animation delay
        star.style.animationDelay = `${Math.random() * 10}s`;
        
        starsElement.appendChild(star);
      }
    };
    
    // Create different sizes of stars
    createStars('stars', 100, 1);
    createStars('stars2', 50, 2);
    createStars('stars3', 25, 3);
  }
  
  // Initialize animations
  createStarBackground();
  
  // Animate elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in, .slide-in');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.classList.add('active');
      }
    });
  };
  
  // Initial check and add scroll listener
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});
