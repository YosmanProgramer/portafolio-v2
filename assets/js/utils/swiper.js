// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Thumbs } from 'swiper'

// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Thumbs])

const swiperThumbs = new Swiper('.swiper-thumbs', {
  spaceBetween: 10,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    },
    1366: {
      slidesPerView: 5
    }
  }
})

// eslint-disable-next-line no-unused-vars
const swiperMain = new Swiper('.swiper-main', {
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
    prevEl: '.swiper-button-prev'
  },

  thumbs: {
    swiper: swiperThumbs
  }
})
