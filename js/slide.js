
var workContent = document.getElementById("work__content");
let cantidad=2;

var swiper = new Swiper('.swiper-container', {
        slidesPerView:1,
        spaceBetween:48,
        loop: true,
        centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }, 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
/*         type: 'progressbar', */
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        '@1.00': {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        '@1.50': {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    }
    
});