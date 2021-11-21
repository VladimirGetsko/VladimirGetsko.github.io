"use strict";var menuBtn=document.querySelector(".menu__icon"),menuBody=document.querySelector(".menu__body"),menuOpen=!1;menuBtn.addEventListener("click",function(){menuOpen=menuOpen?(menuBtn.classList.remove("active"),menuBody.classList.remove("active"),!1):(menuBtn.classList.add("active"),menuBody.classList.add("active"),!0)});var wrapper=document.querySelector(".wrapper"),pageSlider=new Swiper(".page",{wrapperClass:"page__wrapper",slideClass:"page__screen",direction:"vertical",slidesPerView:"auto",parallax:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1},watchOverflow:!0,speed:800,observer:!0,observeParents:!0,observeSlideChildren:!0,pagination:{el:".page__pagination",type:"bullets",clickable:!0,bulletClass:"page__bullet",bulletActiveClass:"page__bullet_active"},scrollbar:{el:".page__scroll",dragClass:"page__drag-scroll",draggable:!0},init:!1,on:{init:function(){menuSlider(),setScrollType(),wrapper.classList.add("loaded")},slideChange:function(){menuSliderRemove(),menuLinks[pageSlider.realIndex].classList.add("active")},resize:function(){setScrollType()}}}),menuLinks=document.querySelectorAll(".menu__link");function menuSlider(){if(0<menuLinks.length){menuLinks[pageSlider.realIndex].classList.add("active");for(var e=function(n){var a=menuLinks[n];a.addEventListener("click",function(e){menuSliderRemove(),pageSlider.slideTo(n,800),a.classList.add("active"),e.preventDefault()})},n=0;n<menuLinks.length;n++)e(n)}}function menuSliderRemove(){var e=document.querySelector(".menu__link.active");e&&e.classList.remove("active")}function setScrollType(){wrapper.classList.contains("free")&&(wrapper.classList.remove("free"),pageSlider.params.freeMode=!1);for(var e=0;e<pageSlider.slides.length;e++){var n=pageSlider.slides[e].querySelector(".screen__content");if(n)if(n.offsetHeight>window.innerHeight){wrapper.classList.add("free"),pageSlider.params.freeMode=!0;break}}}pageSlider.init();