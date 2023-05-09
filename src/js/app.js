import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

//-----Burger--Menu----------------------------------
let menuBtn = document.querySelector(".nav__burger");
let menu = document.querySelector(".nav__list");
let overflow = document.getElementById("html");
let about = document.querySelector(".about");
menuBtn.addEventListener("click", function () {
  menu.classList.toggle("nav__list--open");
  menuBtn.classList.toggle("nav__burger--open");
  overflow.classList.toggle("overflow-y-hidden");
  about.classList.toggle("about--opacity");
});


// import Scrollbar from 'smooth-scrollbar';

// Scrollbar.init(document.querySelector('#my-scrollbar'),{
//   damping: 0.1,
//   thumbMinSize: 22,
//   renderByPixels: true,
//   alwaysShowTracks: false,
//   continuousScrolling: true,
// } );



//-----Locomotive------------------------------------
// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true,

// });

//-----Swiper----------------------------------------
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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  initialSlide: 1,
  loop: true,
  freeMode: false,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

//-----GSAP-------------------------------------------
gsap.registerPlugin(ScrollTrigger);

const laptopScreen = window.matchMedia("min-width: 768px");
const tlLoader = gsap.timeline();

//Loader
tlLoader
  .set(".loader__item", { yPercent: -100 })
  .set(".loader__logo", { opacity: 0 })
  .set(".about__info-title", { opacity: 0, scale: 0, xPercent: -100 })
  .set(".about__info-text", { opacity: 0, scale: 0, xPercent: -100 })
  .set(".header", { opacity: 0 })
  .set(".logo", { scale: 0, xPercent: -100 })  
  .set(".about__img-bg1", { scale: 0, xPercent: 100 })
  .set(".about__img-bg2", { scale: 0, xPercent: -100 })
  .set(".about__img-man", { scale: 0, yPercent: 100 })
  .set(".about__img-ic1", { scale: 0 })
  .set(".about__img-ic2", { scale: 0 })
  .set(".about__img-ic3", { scale: 0 })
  .set(".about__img-ic4", { scale: 0 })

  .to(".loader__item", {
    yPercent: 0,
    duration: 0.6,
    stagger: 0.25,
  })
  .to(".loader__item", {
    yPercent: 100,
    duration: 0.6,
    stagger: 0.25,
  });
if (laptopScreen.matches) {
  tlLoader.to(".loader__logo", {
    opacity: 1,
    duration: 1,
    scale: 5,
  });
} else {
  tlLoader.to(".loader__logo", {
    opacity: 1,
    duration: 1,
    scale: 2,
  });
}
tlLoader
  .set(".loader__item", {
    yPercent: -100,
  })
  .to(".loader__logo", {
    opacity: 0,
    duration: 1.2,
    scale: 0.8,
  })
  .to(
    ".loader",
    {
      yPercent: -100,
      duration: 1,
    },
    "-=0.3"
  )
  .to(
    ".about__info-title",
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      xPercent: 0,
    },
    "-=1"
  )
  .to(
    ".about__info-text",
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      xPercent: 0,
    },
    "-=0.8"
  )
  .to(
    ".header",
    {
      opacity: 1,
      duration: 1,            
    },
    "-=0.6"
  )
  .to(
    ".about__img-bg2",
    {
      scale: 1,
      duration: 1.5,
      xPercent: 0,
      ease: "back.out(1.7)",
    },
    "-=0.5"
  )
  .to(
    ".about__img-bg1",
    {
      scale: 1,
      duration: 1.5,
      xPercent: 0,
      ease: "back.out(1.7)",
    },
    "-=1.5"
  )
  .to(
    ".about__img-man",
    {
      scale: 1,
      duration: 2,
      yPercent: 0,
      ease: "bounce.out",
    },
    "-=0.5"
  )
  .to(
    ".logo",
    {
      scale: 1,
      duration: 2,
      xPercent: 0,
      ease: "bounce.out",
    },
    "-=2"
  )
  .to(
    ".about__img-ic1",
    {
      scale: 1,
      duration: 1,      
      ease: "back.out(5)",
    },
    "-=1"
  )
  .to(
    ".about__img-ic2",
    {
      scale: 1,
      duration: 1,      
      ease: "back.out(5)",
    },
    "-=0.7"
  )
  .to(
    ".about__img-ic3",
    {
      scale: 1,
      duration: 1,      
      ease: "back.out(5)",
    },
    "-=0.7"
  )
  .to(
    ".about__img-ic4",
    {
      scale: 1,
      duration: 1,      
      ease: "back.out(5)",
    },
    "-=0.7"
  )
 
//About Scroll Animations

gsap.fromTo('.about', {opacity: 1}, {
  opacity: 0,
  scrollTrigger: {
    trigger: '.about',
    start: 'center',
    end: '800',
    scrub: true,
  }
})

gsap.fromTo('.video__info-title', {
  opacity: 0,
  x: -300,
}, 
{
  opacity: 1,
  x: 0,
  scrollTrigger: {
    trigger: '.video',
    start: 'top bottom', 
    end: 'top center',
    scrub: true,
  }
})

//Video Scroll Animations

gsap.fromTo('.video__info-text', { opacity: 0, x: 300 }, 
{ opacity: 1, x: 0,
  scrollTrigger: {
    trigger: '.video', 
    start: 'top bottom', 
    end: 'top center',   
    scrub: true,
  }
})

gsap.fromTo('.video__img-bg', { scale: 0 }, 
{ scale: 1,
  scrollTrigger: {
    trigger: '.video', 
    start: 'top center', 
    end: 'top top',   
    scrub: true,
  }
})

gsap.fromTo('.video__img-bg', { scale: 0 }, 
{ scale: 1,
  scrollTrigger: {
    trigger: '.video', 
    start: 'top center', 
    end: 'top top',   
    scrub: true,
  }
})

//Service Scroll Animations

gsap.fromTo('.service__info-title', { scale: 5, y: 200, opacity: 0 }, 
{ scale: 1, y: 0, opacity: 1,
  scrollTrigger: {
    trigger: '.service', 
    start: 'top bottom', 
    end: 'top center',    
    scrub: true,
  }
})

let itemsL = gsap.utils.toArray('._left')
itemsL.forEach(item => {
  gsap.fromTo(item, { x: -500, opacity: 0 }, 
{ x: 0, opacity: 1,
  scrollTrigger: {
    trigger: item, 
    start: 'top bottom', 
    end: 'top 30%', 
    scrub: true,
  }
})
});

let itemsC = gsap.utils.toArray('._center')
itemsC.forEach(item => {
  gsap.fromTo(item, { scale: 0, opacity: 0 }, 
{ scale: 1, opacity: 1,
  scrollTrigger: {
    trigger: item, 
    start: 'top bottom', 
    end: 'top 30%', 
    scrub: true,
  }
})
});

let itemsR = gsap.utils.toArray('._right')
itemsR.forEach(item => {
  gsap.fromTo(item, { x: 500, opacity: 0 }, 
{ x: 0, opacity: 1,
  scrollTrigger: {
    trigger: item, 
    start: 'top bottom', 
    end: 'top 30%', 
    scrub: true,
  }
})
});

//Portfolio Scroll Animations
gsap.fromTo('.portfolio__title', { scale: 0, y: 200 }, 
{ scale: 1, y: 0,
  scrollTrigger: {
    trigger: '.portfolio', 
    start: 'top bottom', 
    end: 'top 50%',     
    scrub: true,
  }
})

gsap.fromTo('.swiper', { scale: 2, y: -100 }, 
{ scale: 1, y: 0,
  scrollTrigger: {
    trigger: '.portfolio', 
    start: 'top bottom', 
    end: 'top 50%',    
    scrub: true,
  }
})

gsap.fromTo('.portfolio__img-ic1', { scale: 0, y: 200 }, 
{ scale: 1, y: 0,
  scrollTrigger: {
    trigger: '.portfolio', 
    start: 'top bottom', 
    end: 'top 30%',     
    scrub: true,
  }
})

gsap.fromTo('.portfolio__img-ic2', { scale: 0, y: -300, x: 300 }, 
{ scale: 1, y: 0, x: 0,
  scrollTrigger: {
    trigger: '.swiper', 
    start: 'top bottom', 
    end: 'top 50%',     
    scrub: true,
  }
})

//Contact Scroll Animations
gsap.fromTo('.contact__title', { x: -500, y: -500, opacity: 0 }, 
{ opacity: 1, x: 0, y: 0,
  scrollTrigger: {
    trigger: '.contact', 
    start: 'top 70%', 
    end: 'top 50%',     
    scrub: true,
  }
})

gsap.fromTo('._contact', { scale: 0, opacity: 0 }, 
{ opacity: 1, scale: 1,
  scrollTrigger: {
    trigger: '.contact', 
    start: 'top 70%', 
    end: 'top 50%',     
    scrub: true,
  }
})

