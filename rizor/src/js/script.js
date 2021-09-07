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

const wrapper = document.querySelector('.wrapper');

let pageSlider = new Swiper('.page',{
 
  wrapperClass: "page__wrapper",
  slideClass: "page__screen",

  
  direction: 'vertical',

  // Количество слайдов для показа
  slidesPerView: 'auto',

  // Включаем параллакс
  parallax: true,

  // Управление клавиатурой
  keyboard: {
    // Включить\выключить
    enabled: true,
    // Включить\выключить 
    // только когда слайдер в пределах вьюпорта
    onlyInViewport: true,
    // Включить\выключить
    // управление клавишами pageUp, pageDown
    pageUpDown: true,
  },

  // Управление колесом мыши
  mousewheel: {
    // Чувствительность колеса мыши
    sensitivity: 1,
    // Класс объекта на котором
    // будет срабатывать прокрутка мышью.
    //eventsTarget: ".image-slider"
  },

  // Отключение функционала
  // если слайдов меньше чем нужно
  watchOverflow: true,

  // Скорость
  speed: 800,

  // Обновить свайпер
  // при изменении элементов слайдера
  observer: true,

  // Обновить свайпер
  // при изменении родительских
  // элементов слайдера
  observeParents: true,

  // Обновить свайпер
  // при изменении дочерних
  // элементов слайда
  observeSlideChildren: true,



  // Навигация 
  // Буллеты, текущее положение, прогрессбар
  pagination: {
    el: '.page__pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: "page__bullet",
    bulletActiveClass: "page__bullet_active",
  },
  // Скролл
  scrollbar: {
    el: '.page__scroll',
    dragClass: "page__drag-scroll",
    // Возможность перетаскивать скролл
    draggable: true
  },

  // Отключаем автоинициализацию
  init: false,

  // Событие 
  on: {
    // Событие инициализации
    init: function() {
      menuSlider();
      setScrollType();
      wrapper.classList.add('loaded');
    },
    // Событие смены слайдера
    slideChange: function () {
      menuSliderRemove();
      menuLinks[pageSlider.realIndex].classList.add('active');
    },
    resize: function () {
      setScrollType();
    }
  },

});

const menuLinks = document.querySelectorAll('.menu__link');

function menuSlider() {
  if(menuLinks.length > 0) {
    menuLinks[pageSlider.realIndex].classList.add('active');

    for (let i = 0; i < menuLinks.length; i++) {
      const menuLink = menuLinks[i];

      menuLink.addEventListener('click', (e) => {
        menuSliderRemove();
        pageSlider.slideTo(i, 800);
        menuLink.classList.add('active');
        e.preventDefault();
      });
    }
  }
}

function menuSliderRemove() {
  const menuLinkActive = document.querySelector('.menu__link.active');

  if (menuLinkActive) {
    menuLinkActive.classList.remove('active');
  }
}

function setScrollType() {
  if (wrapper.classList.contains('free')) {
    wrapper.classList.remove('free');
    pageSlider.params.freeMode = false;
  }

  for (let i = 0; i < pageSlider.slides.length; i++) {
    const pageSlide = pageSlider.slides[i];
    const pageSlideContent = pageSlide.querySelector('.screen__content');

    if (pageSlideContent) {
      const pageSlideContentHeight = pageSlideContent.offsetHeight;
      if (pageSlideContentHeight > window.innerHeight) {
        wrapper.classList.add('free');
        pageSlider.params.freeMode = true;
        break;
      }
    }
  }
}

pageSlider.init();




