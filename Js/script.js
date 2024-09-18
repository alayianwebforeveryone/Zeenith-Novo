// script.js


const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden'); // Toggle the mobile menu
  menuIcon.classList.toggle('hidden');   // Toggle menu icon visibility
  closeIcon.classList.toggle('hidden');  // Toggle close icon visibility
});


// =================================================navigation end here ==================================================================================