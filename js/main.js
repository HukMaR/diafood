const swiper = new Swiper('.mySwiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: 'fade',

    //pagination
    pagination: {
        el: '.swiper-pagination',
        // dynamicBullets: true,
    },
});
//Второй свайпер bld
const swiperDishCard = new Swiper('.Swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: 'fade',

    //pagination
    pagination: {
        el: '.swiper-pagination',
        // dynamicBullets: true,
    },
});
