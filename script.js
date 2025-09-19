// Smooth fade-in animation on scroll
document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade-in, .job, .project-card, .skills-list li");

    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

// Add subtle floating animation to hero text
const heroTitle = document.querySelector(".hero-section h1");
if (heroTitle) {
    setInterval(() => {
        heroTitle.style.transform = "translateY(-5px)";
        setTimeout(() => heroTitle.style.transform = "translateY(0)", 500);
    }, 3000);
}
