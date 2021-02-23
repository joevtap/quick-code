const burger = document.querySelector(".burger");
const nav_items = document.querySelector(".nav_items");

burger.addEventListener("click", () => {
    burger.classList.toggle("close");
    nav_items.classList.toggle("nav_items_show");
});
