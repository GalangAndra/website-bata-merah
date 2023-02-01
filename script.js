// toggle class active
const navbarMenu = document.querySelector(".navbar-menu");
// ketika hamburger-menu diklik
const hamburgerMenu = document.querySelector("#hamburger-menu");
hamburgerMenu.addEventListener("click", function () {
  navbarMenu.classList.toggle("active");
});

// click diluar side-bar untuk menghilangkan navbar menu
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarMenu.contains(e.target)) {
    navbarMenu.classList.remove("active");
  }
});
