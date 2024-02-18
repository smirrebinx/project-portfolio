document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navLinks = nav.querySelector('ul');

    // Toggle navigation
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });

    // Sticky navigation with throttling
    let lastScrollPosition = 0;
    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.scrollY;
        if(Math.abs(currentScrollPosition - lastScrollPosition) > 15) {
            nav.classList.toggle('sticky', currentScrollPosition > 0);
            lastScrollPosition = currentScrollPosition;
        }
    });
});