$(document).ready(function() {
    $('.banner__slider').slick({
        slidesToShow: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 10000,
        infinite: true,
        arrows: false,
        dots: true,
        dotsClass: 'banner__dots'
    });
});