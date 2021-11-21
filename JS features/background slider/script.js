const body = document.querySelector('body');
const sliders = document.querySelectorAll('.slider-container__item');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');


let activeSlide = 0;

rightBtn.addEventListener('click', () => {
  activeSlide++;
  if (activeSlide > sliders.length - 1) {
    activeSlide = 0;
  }
  setActiveSlide();
  setBgToBody();
});

leftBtn.addEventListener('click', () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = sliders.length - 1;
  }
  setActiveSlide();
  setBgToBody();
});

function setActiveSlide() {
  sliders.forEach(slide => slide.classList.remove('slider-active'));
  sliders[activeSlide].classList.add('slider-active');
}

setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = sliders[activeSlide].style.backgroundImage;
}