document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    // Guard clause - exit if elements don't exist
    if (!hamburger || !nav) return;
    
    const icon = hamburger.querySelector('i.fa-solid');
    const navLinks = nav.querySelector('ul');
    
    if (!icon || !navLinks) return;

    // Toggle navigation and icon
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent this click from triggering the document listener
        navLinks.classList.toggle('nav-active');

        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });

    // Close nav when clicking outside
    document.addEventListener('click', (e) => {
        // Check if nav is open and click is outside both nav and hamburger
        if (navLinks.classList.contains('nav-active') && 
            !nav.contains(e.target)) {
            navLinks.classList.remove('nav-active');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });

    // Sticky navigation with throttling and debouncing
    let lastScrollPosition = 0;
    let scrollTimeout;
    
    window.addEventListener('scroll', () => {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(() => {
            const currentScrollPosition = window.scrollY;
            if (Math.abs(currentScrollPosition - lastScrollPosition) > 15) {
                nav.classList.toggle('sticky', currentScrollPosition > 0);
                lastScrollPosition = currentScrollPosition;
            }
        }, 10);
    }, { passive: true });
});