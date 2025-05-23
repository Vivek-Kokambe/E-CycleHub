document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    animatedElements.forEach((el) => observer.observe(el));
});