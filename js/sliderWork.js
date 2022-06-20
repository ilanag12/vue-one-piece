const welcomeSwiper = new Swiper('.welcome-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,

        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        756: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});