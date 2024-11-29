// Responsive interactions handler
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu setup
    const setupMobileMenu = () => {
        const mobileMenuBtn = document.createElement('div');
        mobileMenuBtn.className = 'mobile-menu';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.querySelector('nav').appendChild(mobileMenuBtn);

        const navMenu = document.querySelector('nav ul');
        const navLinks = document.querySelectorAll('.nav-link');

        // Toggle menu
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
            mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('nav')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            }
        });
    };

    // Header scroll behavior
    const setupHeaderScroll = () => {
        let lastScrollTop = 0;
        const header = document.querySelector('header');
        header.style.transition = 'transform 0.3s ease';

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down & not at top
                header.style.transform = 'translateY(-100%)';
                document.querySelector('nav ul').classList.remove('active');
            } else {
                // Scrolling up or at top
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    };

    // Disable custom cursor on touch devices
    const handleCustomCursor = () => {
        if ('ontouchstart' in window) {
            const cursor = document.querySelector('.cursor');
            const cursorDot = document.querySelector('.cursor-dot');
            if (cursor) cursor.style.display = 'none';
            if (cursorDot) cursorDot.style.display = 'none';
        }
    };

    // Initialize responsive handlers
    setupMobileMenu();
    setupHeaderScroll();
    handleCustomCursor();
});
