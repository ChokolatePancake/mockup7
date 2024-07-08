window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    // 100 is the height of header
    if (window.scrollY > 100) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }
    const sections = document.querySelectorAll('section'); // Select all sections
    const navLinks = document.querySelectorAll('.header__navigation a'); // Select navigation links

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('show');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('show');
        }
    });
});
