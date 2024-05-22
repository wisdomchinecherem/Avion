const menuIcon = document.querySelector(".menu");
const body = document.body;
const nav = document.querySelector(".bottom-nav");
const closeMenu = document.querySelector(".close--menu");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
});
closeMenu.addEventListener("click", () => {
  nav.classList.remove("show-nav");
});
