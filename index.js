const burgerBtn = document.querySelector(".burguer");
const primaryNavigation = document.querySelector(".primary-navigation");
const rewardBtns = document.querySelectorAll(".card a.button");

burgerBtn.addEventListener("click", function (ev) {
  const expanded = burgerBtn.getAttribute("aria-expanded");
  if (expanded === "false") {
    burgerBtn.setAttribute("aria-expanded", "true");
  } else {
    burgerBtn.setAttribute("aria-expanded", "false");
  }
});

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
