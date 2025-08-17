// open menu icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbar.classList.toggle('inactive');
}

// scroll reveal
ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading, .about-2', { origin: 'top' });
ScrollReveal().reveal('.home-img, .ourteam-container,  .faq-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js
const typed = new Typed('.typed-text', {
    strings: ["<span style='color:#0066ff;'>Maissa ❤️</span>"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
