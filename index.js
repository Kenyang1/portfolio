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

window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  const barFill = document.getElementById('loader-bar-fill');
  const pikachuGif = document.getElementById('pikachu-loader-gif');
  const barContainer = document.querySelector('.loader-bar-bg');
  const whiteFade = document.getElementById('white-fade');
  const barWidth = barContainer.offsetWidth - pikachuGif.offsetWidth;
  const pikachuStart = -40;
  let progress = 0;
  const duration = 2000; 
  const interval = 20;
  const steps = duration / interval;

  pikachuGif.classList.add('pop-in');

  setTimeout(() => {
    pikachuGif.classList.remove('pop-in');
    pikachuGif.style.opacity = 1;
    const animate = setInterval(() => {
      progress++;
      const percent = Math.min(progress / steps, 1);
      barFill.style.width = (percent * 100) + '%';
      pikachuGif.style.left = (pikachuStart + percent * (barWidth - pikachuStart)) + 'px';
      if (percent >= 1) {
        clearInterval(animate);
        pikachuGif.style.animation = 'runOutFade 0.7s forwards';
        setTimeout(() => {
          whiteFade.classList.add('active');
          setTimeout(() => {
            whiteFade.classList.add('fade-out');
            loader.style.opacity = 0;
            setTimeout(() => loader.style.display = 'none', 700);
          }, 500);
        }, 700);
      }
    }, interval);
  }, 500);
});
