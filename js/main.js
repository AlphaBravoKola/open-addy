// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Button event listeners
  document.getElementById('login-button').addEventListener('click', function() {
    alert('Login functionality will be implemented in the future!');
  });

  document.getElementById('signup-button').addEventListener('click', function() {
    alert('Signup functionality will be implemented in the future!');
  });

  document.getElementById('get-started-button').addEventListener('click', function() {
    alert('Welcome to OpenAddy! Creating your account...');
  });

  document.getElementById('how-it-works-button').addEventListener('click', function() {
    scrollToFeatures();
  });

  // Search functionality
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        performSearch(this.value);
      }
    });
  }

  // Add hover animation classes to cards
  const featureCards = document.querySelectorAll('.bg-white');
  featureCards.forEach(card => {
    card.classList.add('hover-lift');
  });
});

// Function to scroll to features section
function scrollToFeatures() {
  const featuresSection = document.querySelector('.grid.md\\:grid-cols-3');
  if (featuresSection) {
    featuresSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Mock search function
function performSearch(query) {
  if (!query.trim()) {
    alert('Please enter an address or property name to search');
    return;
  }
  
  alert(`Searching for: ${query}\n\nThis feature will be implemented in the production version.`);
}
