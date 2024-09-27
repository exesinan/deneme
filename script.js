// Dark/Light Mode Toggle
const toggleButton = document.querySelector('.theme-toggle');
const body = document.body;

// Toggle between dark and light mode
toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        toggleButton.innerHTML = 'Dark Mode';
    } else {
        toggleButton.innerHTML = 'Light Mode';
    }
});

// Scroll Navbar Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

// Scroll Animations for Sections
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.2
};

const sectionObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    sectionObserver.observe(section);
});
