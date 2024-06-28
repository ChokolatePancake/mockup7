$(document).ready(function(){
    const sliderConfig = {
        breakpoints: [
            { maxWidth: 480, minSlides: 2, slidesToShow: 1 },
            { maxWidth: 768, minSlides: 3, slidesToShow: 2 },
            { maxWidth: Infinity, minSlides: 4, slidesToShow: 3 }
        ]
    };

    function getSliderSettings() {
        const slider = $('.why-ama__content');
        const slides = slider.find('.why-ama__block').length;
        const screenWidth = window.innerWidth;

        let settings = {
            arrows: false,
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            dotsClass: 'why-ama__dots'
        };

        for (let i = 0; i < sliderConfig.breakpoints.length; i++) {
            const bp = sliderConfig.breakpoints[i];
            if (screenWidth <= bp.maxWidth) {
                settings.dots = slides >= bp.minSlides;
                settings.slidesToShow = bp.slidesToShow;
                break;
            }
        }

        return settings;
    }

    function initializeSlider() {
        const slider = $('.why-ama__content');
        slider.slick(getSliderSettings());
    }

    initializeSlider();

    // Reinitialize slider on window resize
    $(window).resize(function() {
        $('.why-ama__content').slick('unslick');
        initializeSlider();
    });
});