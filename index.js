document.addEventListener("DOMContentLoaded", () => {
    function setupCarousel(containerId, prevBtnId, nextBtnId) {
        const container = document.getElementById(containerId);
        const prev = document.getElementById(prevBtnId);
        const next = document.getElementById(nextBtnId);

        if (!container || !prev || !next) {
            console.warn(`Missing elements for ${containerId}`);
            return;
        }

        // Width of one card plus the gap
        const card = container.querySelector("div");
        const style = window.getComputedStyle(container);
        const gap = parseInt(style.gap || "24");
        const cardWidth = card.offsetWidth;

        const scrollAmount = cardWidth + gap;

        prev.addEventListener("click", () => {
            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });

        next.addEventListener("click", () => {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    }

    // Setup for each section
    setupCarousel("shop-system-cards", "prev-shop-system", "next-shop-system");
    setupCarousel("shop-case-cards", "prev-shop-case", "next-shop-case");
    setupCarousel("testimonials-container", "prev-testimonial", "next-testimonial");
});
