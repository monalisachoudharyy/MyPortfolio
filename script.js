// Scroll reveal animation
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".timeline-item, .project-card, .skills-list li");

    const reveal = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(sec => reveal.observe(sec));
});

// Hover interaction for projects
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("expanded");
        if (card.classList.contains("expanded")) {
            card.style.maxHeight = "300px";
        } else {
            card.style.maxHeight = "150px";
        }
    });
});
