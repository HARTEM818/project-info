const burgerMenu = document.querySelector(".burger-menu");
const headerContainer = document.querySelector(".header__container");
const body = document.body;
burgerMenu.addEventListener("click", () => {
  headerContainer.classList.toggle("header__max-height");
  body.classList.toggle("no-scroll");
});

if (window.matchMedia("(min-width: 1440px)").matches) {
  const a = document.querySelector(".hero__interaction-btn + div > a");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalWindow = document.getElementById("modalWindow");
  const body = document.body;
  const headerContainer = document.querySelector("header");

  a.addEventListener("click", (e) => {
    e.preventDefault();
    modalOverlay.style.display = "flex";
    body.classList.toggle("no-scroll");
    headerContainer.style.display = "none";
  });

  modalOverlay.addEventListener("click", () => {
    modalOverlay.style.display = "none";
    body.classList.toggle("no-scroll");
    headerContainer.style.display = "block";
  });

  modalWindow.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

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
