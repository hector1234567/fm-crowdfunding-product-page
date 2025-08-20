const burgerBtn = document.querySelector(".burguer");
const primaryNavigation = document.querySelector(".primary-navigation");

burgerBtn.addEventListener("click", function (ev) {
  const expanded = burgerBtn.getAttribute("aria-expanded");
  if (expanded === "false") {
    burgerBtn.setAttribute("aria-expanded", "true");
  } else {
    burgerBtn.setAttribute("aria-expanded", "false");
  }
});
