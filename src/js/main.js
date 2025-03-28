
// Main JavaScript file for general functionality

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNav = navLinks?.contains(event.target);
    const isClickOnHamburger = hamburger?.contains(event.target);
    
    if (navLinks?.classList.contains('active') && !isClickInsideNav && !isClickOnHamburger) {
      navLinks.classList.remove('active');
      hamburger?.classList.remove('active');
    }
  });
  
  // Highlight active page in navigation
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks2 = document.querySelectorAll('.nav-links a');
  
  navLinks2.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    
    if (
      (currentPage === '' && linkPage === 'index.html') ||
      (currentPage === linkPage) ||
      (currentPage && linkPage.includes(currentPage))
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
