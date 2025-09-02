// Filter portfolio
const filterBtns = document.querySelectorAll('.filter-btns button');
const filterContainer = document.querySelector('.filter-btns');
const items = document.querySelectorAll('.portfolio-grid .item');

// Filter portfolio
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // aktifkan button yang dipilih
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // ambil kategori
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

// Default aktif di "All"
filterBtns[0].classList.add('active');

// Mobile: toggle filter menu
if (window.innerWidth <= 768) {
  filterContainer.classList.add('collapsed');
  filterBtns[0].addEventListener('click', (e) => {
    // kalau klik tombol pertama, toggle collapse
    e.stopPropagation();
    filterContainer.classList.toggle('collapsed');
  });
}


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
