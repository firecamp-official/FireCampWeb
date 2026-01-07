// BURGER MENU
const burger = document.getElementById('burger');
const nav = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.85;
    reveals.forEach(r => {
        const top = r.getBoundingClientRect().top;
        if (top < trigger) r.style.animation = "fadeInUp 1s forwards";
    });
};
window.addEventListener('scroll', revealOnScroll);

// FAQ toggle
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const p = item.querySelector('p');
        p.style.display = p.style.display === 'block' ? 'none' : 'block';
    });
});

// CAROUSEL
const slides = document.querySelectorAll('.trusted-slide');
let current = 0;
setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}, 6000);

// TESTIMONIAL SLIDER
const testimonials = document.querySelectorAll('.testimonial');
let t = 0;
setInterval(() => {
    testimonials[t].classList.remove('active');
    t = (t + 1) % testimonials.length;
    testimonials[t].classList.add('active');
}, 7000);


