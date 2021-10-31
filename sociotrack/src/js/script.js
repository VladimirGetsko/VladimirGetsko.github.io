'use strict';

// Menu

const menuBtnOpen = document.querySelector('.menu-btn__open');
const menuBtnClose = document.querySelector('.menu-btn__close');
const sidebar = document.querySelector('.sidebar');
      
let menuOpen = false;

menuBtnOpen.addEventListener('click', () => {
  sidebar.classList.add('active');
  menuOpen = true;
});

menuBtnClose.addEventListener('click', () => {
  sidebar.classList.remove('active');
  menuOpen = false;
});

// Search

const searchFormIcon = document.querySelector('.search-form__icon');
const searchFormItem = document.querySelector('.search-form__item');
let searchOpen = false;

searchFormIcon.addEventListener('click', () => {
  if (!searchOpen) {
    searchFormItem.classList.add('active');
    searchOpen = true;
  } else {
    searchFormItem.classList.remove('active');
    searchOpen = false;
  }
});

// Popup

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const currentPopup = document.getElementById(popupName);
			popupOpen(currentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(currentPopup) {
  currentPopup.classList.add('open');
  currentPopup.addEventListener("click", function (e) {
    if (!e.target.closest('.popup__content')) {
      popupClose(e.target.closest('.popup'));
    }
  });
}

function popupClose(popupActive) {
	popupActive.classList.remove('open');
}
 