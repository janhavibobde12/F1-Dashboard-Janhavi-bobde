// ===== F1 RACE INTELLIGENCE DASHBOARD =====
document.addEventListener("DOMContentLoaded", function () {
    // 1. Smooth navigation between website sections
    const navigationLinks = document.querySelectorAll('nav a[href^="#"]');
    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                event.preventDefault();
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
    // 2. Add hover animation to feature and technology cards
    const cards = document.querySelectorAll(".card");
    cards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-6px)";
        });
        card.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0)";
        });
    });
    // 3. Update the footer year automatically
    const footer = document.querySelector("footer");
    if (footer) {
        const yearParagraph = footer.querySelector(".copyright");
        if (yearParagraph) {
            yearParagraph.textContent =
                "© " + new Date().getFullYear() +
                " F1 Race Intelligence Dashboard";
        }
    }
    // 4. Log successful loading in the browser console
    console.log("F1 Race Intelligence Dashboard loaded successfully.");
});
