const burgerMenu = document.querySelector(".burger-menu");
const headerContainer  = document.querySelector(".header__container")
burgerMenu.addEventListener("click", () => {
    headerContainer.classList.toggle("header__max-height")
})
// const categoryList = document.querySelector(".category__list");
// const categorySquare = document.querySelectorAll(".category__square");
// categoryList.addEventListener("click", (event) => {
//     console.log(event);
//     if(event.currentTarget === "li.card"){
//         console.log("kwmew");
        
//     }
// })