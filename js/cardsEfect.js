export function cardsEfect() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      card.classList.add("card__shadow");
      document.querySelectorAll(".category__square").forEach((square) => {
        square.classList.add("disable");
      });
      const square = card.querySelector(".category__square");
      card.classList.remove("card__shadow");
      square.classList.remove("disable");
    });
  });
}
