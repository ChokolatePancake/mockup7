$(document).ready(function(){
    // Config for slider to know how many slides show
    const sliderConfig = {
        breakpoints: [
            { maxWidth: 600, minSlides: 2, slidesToShow: 1 },
            { maxWidth: 999, minSlides: 3, slidesToShow: 2 },
            { maxWidth: Infinity, minSlides: 4, slidesToShow: 3 }
        ]
    };

    function getSliderSettings() {
        const slider = $('.why-ama__content');
        // Find how many blocks are there
        const slides = slider.find('.why-ama__block').length;
        const screenWidth = window.innerWidth;

        // Default values if there one slide
        let settings = {
            arrows: false,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 10000,
            slidesToScroll: 1,
            dotsClass: 'why-ama__dots'
        };

        // Loop for finding correct config
        for (let i = 0; i < sliderConfig.breakpoints.length; i++) {
            const bp = sliderConfig.breakpoints[i];
            if (screenWidth <= bp.maxWidth) {
                settings.dots = slides >= bp.minSlides;
                // Change default amount of slides to show
                settings.slidesToShow = bp.slidesToShow;
                break;
            }
        }

        return settings;
    }

    // Initializing with settings
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