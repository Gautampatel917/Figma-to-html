document.addEventListener("DOMContentLoaded", () => {
    function setupCarousel(containerId, prevBtnId, nextBtnId) {
        const container = document.getElementById(containerId);
        const prev = document.getElementById(prevBtnId);
        const next = document.getElementById(nextBtnId);

        if (!container || !prev || !next) {
            console.warn(`Missing elements for ${containerId}`);
            return;
        }

        // Try to select a card more reliably by class or by common structure
        const card = container.querySelector(".w-72, .flex-shrink-0") || container.querySelector("div");
        if (!card) {
            console.warn(`No card found in ${containerId}`);
            return;
        }

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

    // Setup carousels
    setupCarousel("shop-system-cards", "prev-shop-system", "next-shop-system");
    setupCarousel("shop-case-cards", "prev-shop-case", "next-shop-case");
    setupCarousel("testimonials-container", "prev-testimonial", "next-testimonial");

    // Mobile nav toggle
    const toggleBtn = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (toggleBtn && mobileMenu) {
        toggleBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});