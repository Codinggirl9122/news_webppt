// JavaScript to handle the responsive menu toggle
document.getElementById('menu-icon').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'flex' || navLinks.style.display === '') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column'; // Ensure vertical display in mobile view
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("section").forEach((section) => {
      section.style.display = "block";
    });
  });