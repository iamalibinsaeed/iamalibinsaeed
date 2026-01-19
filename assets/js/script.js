document.addEventListener('DOMContentLoaded', () => {
    // Job Tab Switcher
    const tabs = document.querySelectorAll('.tab-btn');
    const panes = document.querySelectorAll('.job-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');

            // Remove active classes
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            // Add active classes
            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    // Scroll Reveal Animation (Enhanced)
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        reveals.forEach((reveal) => {
            const revealTop = reveal.getBoundingClientRect().top;

            if (revealTop < windowHeight - revealPoint) {
                if (!reveal.classList.contains('active')) {
                    reveal.classList.add('active');
                }
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);

    // Trigger animations for elements already in view
    setTimeout(revealOnScroll, 100);

    // Navbar scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }

        if (scrollTop === 0) {
            header.style.boxShadow = 'none';
            header.style.height = '100px';
        } else {
            header.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
            header.style.height = '80px';
        }

        lastScrollTop = scrollTop;
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
