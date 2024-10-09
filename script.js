const burger = document.querySelector(".burger");
const menu = document.getElementById("menu");
const cross = document.querySelector(".cross");
burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

cross.addEventListener("click", () => {
  menu.classList.remove("active");
});

function checkScreenWidth() {
  if (window.matchMedia("(min-width: 769px)").matches) {
    burger.classList.add("hidden");
  } else {
    burger.classList.remove("hidden");
  }
}

checkScreenWidth();

window.addEventListener("resize", checkScreenWidth);
