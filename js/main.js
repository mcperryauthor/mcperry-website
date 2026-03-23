/**
 * M.C. Perry Author Website - Global Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Navigation Toggle ---
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      // Toggle nav visibility
      navLinks.classList.toggle('active');
      
      // Update ARIA expanded attribute for accessibility
      const isExpanded = navLinks.classList.contains('active');
      hamburger.setAttribute('aria-expanded', isExpanded);
      
      // Optional: change hamburger icon (e.g. from ☰ to ✕)
      if (isExpanded) {
        hamburger.innerHTML = '&#10005;'; // Close icon
      } else {
        hamburger.innerHTML = '&#9776;'; // Hamburger icon
      }
    });
  }

  // --- Sticky Header on Scroll ---
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Set Active Nav Link Based on Current URL ---
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navItems = document.querySelectorAll('.nav-links a');
  
  navItems.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    }
  });
});
