const burgerBtn = document.querySelector(".burguer");
const backdrop = document.querySelector('.backdrop[data-target="menu"]');
const primaryNavigation = document.querySelector(".primary-navigation");
const rewardBtns = document.querySelectorAll(".card a.button");
const form = document.querySelector(".form");

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

rewardBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const priceId = btn.dataset.price;
    document.getElementById(priceId).checked = true;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  window.location.hash = "#success";
});
