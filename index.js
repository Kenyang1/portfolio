document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  menuIcon.addEventListener("click", () => {
    if (mobileMenu.classList.contains("active")) {
      // Start fade-out
      mobileMenu.classList.remove("active");
      mobileMenu.classList.add("closing");
      setTimeout(() => {
        mobileMenu.classList.remove("closing");
      }, 320); // Match the CSS transition duration
    } else {
      mobileMenu.classList.add("active");
    }
  });
});
