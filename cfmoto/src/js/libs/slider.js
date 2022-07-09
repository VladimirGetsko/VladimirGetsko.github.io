import Swiper, { Pagination, Autoplay, EffectFade } from 'swiper';


new Swiper('.swiper.main-slider', {
    modules: [Pagination, Autoplay, EffectFade],
    loop: true,
    // direction: 'vertical',

    autoplay: {
        delay: 5000,
    },

    pagination: {
        el: '.swiper-pagination.pagination-decoration',
        clickable: true,
    },

    effect: 'fade',

});

new Swiper('.swiper.routes-base__slide', {
    modules: [Pagination, Autoplay],

    loop: true,
    spaceBetween: 12,
    slidesPerView: 3,
    speed: 800,

    autoplay: {
        delay: 5000,
    },

    breakpoints: {
        992: {
            spaceBetween: 23
        }
    },
    
    pagination: {
        el: '.swiper-pagination.routes-base__pagination',
        clickable: true,
    }
});

new Swiper('.swiper.routes-experience__slide', {
    modules: [Pagination, Autoplay],

    loop: true,
    slidesPerView: 3,
    spaceBetween: 12,
    speed: 800,
    reverseDirection: false,

    autoplay: {
        delay: 7000,
    },

    breakpoints: {
        992: {
            spaceBetween: 23
        }
    },
    
    pagination: {
        el: '.swiper-pagination.routes-experience__pagination',
        clickable: true,
    }
});

new Swiper('.swiper.routes-experience-plus__slide', {
    modules: [Pagination, Autoplay],

    loop: true,
    spaceBetween: 12,
    slidesPerView: 3,
    speed: 800,

    autoplay: {
        delay: 6000,
    },

    breakpoints: {
        992: {
            spaceBetween: 23
        }
    },
    
    pagination: {
        el: '.swiper-pagination.routes-experience-plus__pagination',
        clickable: true,
    }
});

new Swiper('.slider-photos.swiper', {
    modules: [Pagination, Autoplay],

    loop: true,
    spaceBetween: 16,
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 800,

    autoplay: {
        delay: 7000,
    },

    breakpoints: {

        768: {
            spaceBetween: 24,
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        992: {
            spaceBetween: 30,
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    },

    pagination: {
        el: '.swiper-pagination.slider-photos__pagination',
        clickable: true,
    }
});


