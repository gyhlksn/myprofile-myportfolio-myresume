// Filter portfolio
const filterBtns = document.querySelectorAll('.filter-btns button');
const items = document.querySelectorAll('.portfolio-grid .item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-filter');
    items.forEach(item => {
      if (category === 'all' || item.dataset.category === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// burger menu toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

// Toggle menu saat burger di klik
burger.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Tutup menu saat link di klik
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});

// Roles
const roles = [
  "Desainer Grafis ",
  "UI/UX Designer ",
  "Web Developer ",
  "Administrator ",
  "Videografer ",
  "Sosial Media Spesialis "
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;
const typingSpan = document.querySelector(".typing");

function typeEffect() {
  currentRole = roles[roleIndex];

  if (isDeleting) {
    typingSpan.textContent = currentRole.substring(0, charIndex--);
  } else {
    typingSpan.textContent = currentRole.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // jeda sebelum hapus
    return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length; // pindah ke role berikutnya
  }

  setTimeout(typeEffect, isDeleting ? 40 : 40); // kecepatan
}

typeEffect();
