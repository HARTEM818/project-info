const burgerMenu = document.querySelector(".burger-menu");
const headerContainer  = document.querySelector(".header__container")
burgerMenu.addEventListener("click", () => {
    headerContainer.classList.toggle("header__max-height")
})
