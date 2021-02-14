const body = document.body;
const modalBackground = document.querySelector(".modal_background");
const modalForeground = document.querySelector(".modal_foreground");
const modalClose = document.querySelector(".close");

body.addEventListener("click", showHideModal);
modalClose.addEventListener("click", showHideModal);

function showHideModal() {
    modalBackground.classList.toggle("modal_show");
    body.classList.toggle("overflow_hidden");
}

modalForeground.addEventListener("click", (e) => e.stopPropagation());
