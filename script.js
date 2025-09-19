// This file is ready for you to add more advanced JavaScript features.
// For example, you could add scroll-based animations to reveal sections.

// Example for adding a class on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});
