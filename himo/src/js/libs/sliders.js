import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function() {
    $('.slide-bike__items').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        fade: true
    }),
    $('.slider__body').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        fade: true
    });
});