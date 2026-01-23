const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const closeMenu = document.getElementById("closeMenu");

hamburger.onclick = () => {
    navMenu.classList.add("active");
    document.body.classList.add("no-scroll");   
};

closeMenu.onclick = () => {
    navMenu.classList.remove("active");
    document.body.classList.remove("no-scroll"); 
};

document.querySelectorAll(".nav-links a").forEach(link => {
    link.onclick = () => {
        navMenu.classList.remove("active");
        document.body.classList.remove("no-scroll");
    };
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        faqItems.forEach(i => i.classList.remove('active'));
        
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const header = document.querySelector('header');
function handleHeaderOnScroll() {
    const h = header ? header.offsetHeight : 80;
    if (window.scrollY > h) header.classList.add('header-fixed');
    else header.classList.remove('header-fixed');
}
window.addEventListener('scroll', handleHeaderOnScroll);
window.addEventListener('DOMContentLoaded', handleHeaderOnScroll);

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }
});

const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

// Scroll to top on click
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const revealSections = document.querySelectorAll(".reveal-section");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // animate once
                }
            });
        },
        {
            threshold: 0.2, // 20% visible triggers animation
        }
    );

    revealSections.forEach(section => observer.observe(section));
});