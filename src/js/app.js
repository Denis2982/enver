import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


import Swiper from "swiper/bundle";

const swiper = new Swiper(".swiper", {
    
    grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 24,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

