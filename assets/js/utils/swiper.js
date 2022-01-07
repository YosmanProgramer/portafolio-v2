// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Thumbs]);

const swiper_thumbs = new Swiper(".swiper-thumbs", {
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1366: {
            slidesPerView: 5
        }
    }
});

const swiper_main = new Swiper('.swiper-main', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    thumbs: {
        swiper: swiper_thumbs,
    },
});