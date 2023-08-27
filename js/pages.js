const swiper = new Swiper('.Swiper_pages', {
    slidesPerView:1,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        600: {
            // Optional parameters
            direction: 'horizontal',
            slidesPerView: 4,
            loop: true,
            effect: 'fade',
            //pagination
            pagination: {
                el: '.swiper-pagination',
            }
        },
    },
});