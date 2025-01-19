document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu-icon").addEventListener("click", function () {
      console.log("Menu icon clicked");
      var navLinks = document.getElementById("nav-links");
      navLinks.classList.toggle("active");
  });
});
