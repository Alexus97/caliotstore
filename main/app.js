const swiperCards = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal', // or 'vertical'
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    //breakpoints.

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 10
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
});




