// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        if (this.getAttribute('href') === '#home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Skills animation
const skills = document.querySelectorAll('.skill-progress');
const animateSkills = () => {
    skills.forEach(skill => {
        const percentage = skill.getAttribute('data-percentage');
        gsap.to(skill, {
            width: `${percentage}%`,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: skill,
                start: "top 80%"
            }
        });
    });
};

// Initialize animations when content is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateSkills();
    
    // Reveal animations for sections
    gsap.from('.section-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.section-title',
            start: "top 80%"
        }
    });
});
