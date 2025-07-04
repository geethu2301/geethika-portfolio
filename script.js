// ===== Theme Toggle =====
const toggle = document.getElementById('toggle-theme');
const body = document.body;

toggle.addEventListener('change', function () {
  body.classList.toggle('light-mode');
});

// ===== Burger Menu =====
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

// ===== Typing Effect =====
const typedText = document.querySelector('.typed-text');
const textArray = [
  "Aspiring Full Stack Developer",
  "AI/ML Enthusiast",
  "Python | Django | JS Developer"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = textArray[textIndex];
  typedText.textContent = current.substring(0, charIndex);

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      textIndex = (textIndex + 1) % textArray.length;
    }
    setTimeout(type, 1000);
  }
}

document.addEventListener('DOMContentLoaded', type);

// ===== Scroll Reveal Animation =====
const animatedItems = document.querySelectorAll('.animate');

function revealOnScroll() {
  animatedItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemTop < windowHeight - 100) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== Staggered Card Animation =====
function staggerCards(selector) {
  const cards = document.querySelectorAll(selector);
  cards.forEach((card, index) => {
    setTimeout(() => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < window.innerHeight - 50) {
        card.classList.add('visible');
      }
    }, index * 150);
  });
}

window.addEventListener('scroll', () => {
  staggerCards('.skill-cards .card');
  staggerCards('.project-cards .card');
});

// ===== Preloader =====
window.addEventListener('load', () => {
  document.getElementById('preloader').style.display = 'none';
});
