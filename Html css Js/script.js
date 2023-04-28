const modalBtn = document.querySelector("#modal-btn");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector(".close");

modalBtn.addEventListener("click", () => {
modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
modal.style.display = "none";
});

window.addEventListener("click", (e) => {
if (e.target == modal) {
modal.style.display = "none";
}
});