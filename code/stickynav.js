document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const icon = hamburger.querySelector('i.fa-solid'); // Get the icon within the button
    const nav = document.querySelector('nav');
    const navLinks = nav.querySelector('ul');

    // Toggle navigation and icon
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');

        // Check if the icon currently has the 'fa-bars' class to determine which icon to display
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // Corrected to 'fa-times'
        } else {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });

    // Sticky navigation with throttling
    let lastScrollPosition = 0;
    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.scrollY;
        if (Math.abs(currentScrollPosition - lastScrollPosition) > 15) {
            nav.classList.toggle('sticky', currentScrollPosition > 0);
            lastScrollPosition = currentScrollPosition;
        }
    });
});
