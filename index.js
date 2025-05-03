const burgerMenu = document.querySelector(".burger-menu");
const headerContainer = document.querySelector(".header__container");
const body = document.body;
burgerMenu.addEventListener("click", () => {
  headerContainer.classList.toggle("header__max-height");
  body.classList.toggle("no-scroll");
});

const a = document.querySelector(" .hero__interaction-btn + div > a")
const modal = document.querySelector(".modal-window")
a.addEventListener("click", (e) => {
  e.preventDefault()
  modal.style.display = "block"
  body.classList.toggle("no-scroll");
  headerContainer.style.display = "none"
})



const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    card.classList.add("card__shadow")
    document.querySelectorAll(".category__square").forEach((square) => {
      square.classList.add("disable");
    });
    const square = card.querySelector(".category__square");
    card.classList.remove("card__shadow")
    square.classList.remove("disable");
  });
});
