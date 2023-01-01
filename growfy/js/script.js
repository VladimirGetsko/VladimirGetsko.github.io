"use strict";

const openMobileMenu = () => {
  const menuBtn = document.querySelector('.icon-menu');

  menuBtn.addEventListener('click', (e) => {
    const target = e.target;
    if(target.closest('.icon-menu')) {
      document.body.classList.toggle('menu-open');
    }
  })
}

openMobileMenu();