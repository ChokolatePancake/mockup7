$(document).ready(function() {
    $('.share__content').slick({
        slidesToShow: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 10000,
        infinite: true,
        fade: true,
        arrows: false,
        dots: true,
        dotsClass: 'share__dots'
    });
});