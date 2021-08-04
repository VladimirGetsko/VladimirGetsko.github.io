window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const menuBtn = document.querySelector('.menu__icon'),
        menuBody = document.querySelector('.menu__body');
  let menuOpen = false;

  menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
      menuBtn.classList.add('active');
      menuBody.classList.add('active');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('active');
      menuBody.classList.remove('active');
      menuOpen = false;
    }
  });

});