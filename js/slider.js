
const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    effect: 'fade',
    navigation: {
        nextEL: '.swiper-button-next',
        prevEL: '.swiper-button-next',
    }
})