const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.primary-navigation');
const pageHeader = document.querySelector('.page__header');
const arrow = document.getElementById('arrow-icon')

hamburger.addEventListener('click', () => {
   navbar.classList.toggle('open');
   arrow.classList.toggle('upside-down');
   pageHeader.classList.toggle('page__header-color');
});