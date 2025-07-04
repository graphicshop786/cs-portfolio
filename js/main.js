// All enhancements in a single DOMContentLoaded block
window.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle with close button and shadow
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
        // Hide menu on link click
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => menu.classList.add('hidden'));
        });
        // Add close button if not present
        if (!document.getElementById('mobile-menu-close')) {
            const closeBtn = document.createElement('button');
            closeBtn.id = 'mobile-menu-close';
            closeBtn.innerHTML = '&times;';
            closeBtn.setAttribute('aria-label', 'Close mobile menu');
            closeBtn.className = 'absolute top-2 right-4 text-3xl text-accent focus:outline-none';
            closeBtn.addEventListener('click', () => menu.classList.add('hidden'));
            menu.prepend(closeBtn);
        }
        // Add shadow/border for separation
        menu.classList.add('shadow-xl', 'border', 'border-accent');
    }

    // Fade-in animation for sections
    document.querySelectorAll('.fade-in').forEach(el => {
        el.classList.add('visible');
    });

    // Highlight active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    function setActiveLink() {
        let fromTop = window.scrollY + 80;
        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    setActiveLink();
    window.addEventListener('scroll', setActiveLink);

    // Back to top button logic
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.remove('hidden');
            } else {
                backToTop.classList.add('hidden');
            }
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
