const rewardBtns = document.querySelectorAll(".card a.button");
const form = document.querySelector(".form");
const loader = document.querySelector(".loader");
const loaderBackdrop = document.querySelector(
  '.backdrop[data-target="loader"]'
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

  loader.style.display = "inline-block";
  loaderBackdrop.style.display = "block";

  setTimeout(function () {
    window.location.hash = "#success";
    loader.style.display = "none";
    loaderBackdrop.style.display = "none";
  }, 3000);
});
