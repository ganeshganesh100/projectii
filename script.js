const cards = document.querySelectorAll(".movie-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.zIndex = "10";
    });

                  card.addEventListener("mouseleave", () => {
        card.style.zIndex = "1";
    });
});
