import './libs/slider';


import modals from './modules/modals';
import menuBtn from './modules/menuBtn';
import accordion from './modules/accordion';
import scrolling from './modules/scrolling';
import headerScroll from './modules/headerScroll';
import playVideo from './modules/playVideo';
import counter from './modules/counter';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    menuBtn('.btn-menu', '.menu-header');
    accordion('.accordion-itmes__question', '.accordion-itmes__answer');
    scrolling();
    headerScroll('.header')
    playVideo('.video__play');
    counter('.quantity-btn', '.quantity-input');
});