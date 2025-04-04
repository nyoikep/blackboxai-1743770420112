// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  // Wait for header to be loaded
  const checkHeader = setInterval(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
      clearInterval(checkHeader);
      
      menuToggle.addEventListener('click', () => {
        const mobileMenu = document.querySelector('.mobile-menu');
        mobileMenu.classList.toggle('hidden');
      });
    }
  }, 100);

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Form validation for signup/login
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const inputs = this.querySelectorAll('input[required]');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.classList.add('border-red-500');
          isValid = false;
        } else {
          input.classList.remove('border-red-500');
        }
      });

      if (!isValid) {
        e.preventDefault();
        alert('Please fill in all required fields');
      }
    });
  });
});