export function heroModal () {
    
const a = document.querySelector(".hero__interaction-btn + div > a");
const modalOverlay = document.querySelector(".modal-overlay");
const modalWindow = document.querySelector(".modal-window");

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
}