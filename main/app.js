const swiperCards = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 80,
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    limitProgress: 2,
    prev: {
      translate: ["-120%", 0, 0],
      scale: 0.9,
      opacity: 0.8,
    },
    next: {
      translate: ["120%", 0, 0],
      scale: 0.9,
      opacity: 0.8,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    renderBullet: (index, className) => {
      return `<span class="${className}"></span>`;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    hideOnClick: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      effect: "fade",
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    waitForTransition: true,
  },
  speed: 800,
  watchSlidesProgress: true,
  on: {
    init: () => {
      document.querySelector(".swiper").style.opacity = 1;
    },
    slideChange: () => {
      setTimeout(() => {
        swiperCards.params.speed = 800;
      }, 100);
    },
    touchStart: () => {
      swiperCards.params.speed = 400;
    },
  },
});
