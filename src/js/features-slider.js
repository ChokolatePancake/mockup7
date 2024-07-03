$(document).ready(function() {
    $('.features__content').slick({
        slidesToShow: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 10000,
        infinite: true,
        arrows: false,
        dots: true,
        dotsClass: 'features__dots'
    });
});