const burgerBtn = document.querySelector(".burguer");
const backdrop = document.querySelector('.backdrop[data-target="menu"]');
const primaryNavigation = document.querySelector(".primary-navigation");
const navLinks = document.querySelectorAll(".primary-navigation a");

burgerBtn.addEventListener("click", function (ev) {
  const expanded = burgerBtn.getAttribute("aria-expanded");
  if (expanded === "false") {
    burgerBtn.setAttribute("aria-expanded", "true");
  } else {
    burgerBtn.setAttribute("aria-expanded", "false");
  }
});

backdrop.addEventListener("click", () =>
  burgerBtn.setAttribute("aria-expanded", "false")
);

navLinks.forEach(function (link) {
  link.addEventListener("click", () =>
    burgerBtn.setAttribute("aria-expanded", "false")
  );
});
