import './libs/sliders';

import menuBtn from './modules/menuBtn';
import scrolling from './modules/scrolling';
import checked from './modules/checked';

window.addEventListener('DOMContentLoaded', () => {
    menuBtn('.menu__btn', '.menu-header');
    scrolling('#order');
    checked('.labels-btn', '.labels-btn__radio', '.bike-colors__item');
});
