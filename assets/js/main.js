'use strict';

// Elementos
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const nav__list = document.querySelector('.nav__list');
const sections = document.querySelectorAll('.section');
const sectionAbout = document.querySelector('#about');
const btnUp = document.querySelector('.btn--up');
const menuBtn = document.querySelector('.nav__icon');

// Page navigation
nav__list.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const nav__link = e.target.getAttribute('href');
    // Scroll smooth behavior
    document.querySelector(nav__link).scrollIntoView({ behavior: 'smooth' });
  }
});

// Sticky navigation
const headerObserver = new IntersectionObserver(
  entries => {
    const [entrie] = entries;
    if (!entrie.isIntersecting) nav.classList.add('nav--sticky');
    else nav.classList.remove('nav--sticky');
  },
  {
    root: null,
    threshold: 1,
  }
);
headerObserver.observe(header);

// btn up view
const btnObserver = new IntersectionObserver(
  entries => {
    const [entrie] = entries;
    if (!entrie.isIntersecting) btnUp.classList.add('btn--active');
    else btnUp.classList.remove('btn--active');
  },
  {
    root: null,
    threshold: 0,
  }
);
btnObserver.observe(header);

// btn up click to header
btnUp.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
});

// Menu button
menuBtn.addEventListener('click', function (e) {
  e.preventDefault();
  menuBtn.classList.toggle('nav__icon--active');
  nav__list.classList.toggle('nav__list--active');
});

// nav list close menu
nav__list.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    menuBtn.classList.remove('nav__icon--active');
    nav__list.classList.remove('nav__list--active');
  }
});

// sections animations
const sectionObserver = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  },
  { root: null, threshold: 0.15 }
);

sections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
