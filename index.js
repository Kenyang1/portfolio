document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  menuIcon.addEventListener("click", () => {
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
      mobileMenu.classList.add("closing");
      setTimeout(() => {
        mobileMenu.classList.remove("closing");
      }, 320); 
    } else {
      mobileMenu.classList.add("active");
    }
  });

  const pikachuImg = document.getElementById("pikachu-img");
  const pikachuSound = document.getElementById("pikachu-sound");

  pikachuImg.addEventListener("click", () => {



    pikachuSound.currentTime = 0;
    pikachuSound.play();
    
    pikachuImg.style.transform = "scale(1.1)";
    setTimeout(() => {
      pikachuImg.style.transform = "scale(1)";
    }, 200);
  });
});
