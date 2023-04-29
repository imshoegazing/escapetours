window.addEventListener("load", function () {
  const navLinks = document.querySelectorAll("#nav-phone .nav-link");

  for (var i = 0; i < navLinks.length; i++) {
    (function (index) {
      setTimeout(function () {
        navLinks[index].classList.add("show");
      }, 100 * index);
    })(i);
  }
});

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
