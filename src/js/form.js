
// Form handling functionality

document.addEventListener('DOMContentLoaded', function() {
  // Form elements
  const registrationForm = document.getElementById('registration-form');
  const fileInput = document.getElementById('photo');
  const fileInputButton = document.querySelector('.file-input-button');
  const fileName = document.querySelector('.file-name');
  const photoPreview = document.getElementById('photo-preview');
  
  // Handle file input button click
  if (fileInputButton) {
    fileInputButton.addEventListener('click', function() {
      fileInput.click();
    });
  }
  
  // Handle file selection and preview
  if (fileInput) {
    fileInput.addEventListener('change', function() {
      if (fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];
        
        // Update file name display
        fileName.textContent = file.name;
        
        // Create preview
        const reader = new FileReader();
        reader.onload = function(e) {
          photoPreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
        };
        reader.readAsDataURL(file);
      } else {
        fileName.textContent = 'No file chosen';
        photoPreview.innerHTML = '<p>Image Preview</p>';
      }
    });
  }
  
  // Form validation and submission
  if (registrationForm) {
    registrationForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Basic validation
      let isValid = true;
      
      // Remove any existing error messages
      document.querySelectorAll('.error-message').forEach(el => el.remove());
      
      // Validate required fields
      const requiredFields = registrationForm.querySelectorAll('[required]');
      requiredFields.forEach(field => {
        if (!field.value && field.type !== 'radio') {
          isValid = false;
          addErrorMessage(field, 'This field is required');
        }
      });
      
      // Validate email format
      const emailField = document.getElementById('email');
      if (emailField && emailField.value && !isValidEmail(emailField.value)) {
        isValid = false;
        addErrorMessage(emailField, 'Please enter a valid email address');
      }
      
      // Validate URLs
      const urlFields = [
        document.getElementById('gcpProfile'),
        document.getElementById('githubProfile'),
        document.getElementById('linkedinProfile')
      ];
      
      urlFields.forEach(field => {
        if (field && field.value && !isValidURL(field.value)) {
          isValid = false;
          addErrorMessage(field, 'Please enter a valid URL');
        }
      });
      
      // If all validations pass
      if (isValid) {
        showSuccessMessage();
        registrationForm.reset();
        photoPreview.innerHTML = '<p>Image Preview</p>';
        fileName.textContent = 'No file chosen';
      }
    });
  }
  
  // Helper functions
  function addErrorMessage(field, message) {
    const errorEl = document.createElement('div');
    errorEl.className = 'error-message';
    errorEl.textContent = message;
    field.parentNode.appendChild(errorEl);
    
    // Highlight the field
    field.classList.add('error');
    
    // Remove error state on input
    field.addEventListener('input', function() {
      field.classList.remove('error');
      if (field.parentNode.querySelector('.error-message')) {
        field.parentNode.querySelector('.error-message').remove();
      }
    });
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidURL(url) {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }
  
  function showSuccessMessage() {
    // Check if success message already exists
    let successMessage = document.querySelector('.success-message');
    
    // If not, create it
    if (!successMessage) {
      successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.innerHTML = `
        <h3>Registration Submitted Successfully!</h3>
        <p>Thank you for joining the Google Cloud Arcade Leaderboard. Your information has been submitted.</p>
      `;
      
      const registrationSection = document.querySelector('.registration-section');
      if (registrationSection) {
        registrationSection.insertBefore(successMessage, registrationSection.firstChild);
      }
    }
    
    // Show message
    successMessage.classList.add('show');
    
    // Scroll to top of form section
    window.scrollTo({
      top: document.querySelector('.registration-section').offsetTop - 100,
      behavior: 'smooth'
    });
    
    // Hide message after some time
    setTimeout(() => {
      successMessage.classList.remove('show');
    }, 8000);
  }
});
