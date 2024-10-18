const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// Toggle menu visibility on click
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});