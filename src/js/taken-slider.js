// Slider with autoplay and pause when hovering
document.addEventListener('DOMContentLoaded', function() {
    const splide = new Splide('.splide', {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        autoplay: false, // We  control this manually
        pauseOnHover: false,
        pauseOnFocus: false,
        resetProgress: false,
        speed: 20000, // First point to change speed
        arrows: false,
        easing: 'linear',
    });

    // Initialize slider
    splide.mount();

    // Get reference to the carousel track element
    const track = splide.Components.Elements.track;
    let autoplayInterval;

    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            splide.go('+1'); // Move to next slide
        }, 20); // Interval between moves, second point to change speed
    }

    // Function to stop autoplay
    function stopAutoplay() {
        clearInterval(autoplayInterval); // Clear the autoplay interval
    }

    track.addEventListener('mouseenter', () => {
        stopAutoplay(); // Stop autoplay
        splide.Components.Move.cancel(); // Immediately stop any ongoing movement
    });

    track.addEventListener('mouseleave', () => {
        startAutoplay();
    });

    // Start autoplay initially
    startAutoplay();
});