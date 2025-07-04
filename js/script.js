document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Fade-in animation for sections
    const sections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry); // Stop observing once visible
            }
        });
    }, { threshold: 0.2 });
    sections.forEach(section => observer.observe(section));

    // Navbar background change on scroll
    const navbar = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            backToTopBtn.classList.add('visible');
        } else {
            navbar.classList.remove('scrolled');
            backToTopBtn.classList.remove('visible');
        }
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            const isHidden = menu.classList.contains('hidden');
            menu.classList.toggle('hidden');
            menu.setAttribute('aria-hidden', !isHidden);
            menuBtn.setAttribute('aria-expanded', isHidden);
            menuBtn.textContent = isHidden ? '✕' : '☰';
        });
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                menu.setAttribute('aria-hidden', 'true');
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.textContent = '☰';
            });
        });
    }

    // Back to top button functionality
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});