document.addEventListener("DOMContentLoaded", function () {
  // Back to Top Button
  const backToTopButton = document.getElementById('back-to-top');
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });
  
  // Smooth scroll to top when clicked
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

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

  if (pikachuImg && pikachuSound) {
    pikachuImg.addEventListener("click", () => {
      pikachuSound.currentTime = 0;
      pikachuSound.play();
      pikachuImg.style.transform = "scale(1.1)";
      setTimeout(() => {
        pikachuImg.style.transform = "scale(1)";
      }, 200);
    });
  }

  // Project Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const projectGrid = document.querySelector('.project-grid');

  function updateGridLayout() {
    const visibleCards = Array.from(projectCards).filter(card => !card.classList.contains('hide'));
    
    if (visibleCards.length === 0) {
      projectGrid.style.display = 'none';
      return;
    }

    projectGrid.style.display = 'grid';
    
    if (window.innerWidth <= 768) {
      projectGrid.style.gridTemplateColumns = 'minmax(300px, 600px)';
    } else {
      const columns = Math.min(visibleCards.length, 3); // Max 3 columns
      const columnWidth = `minmax(300px, ${100 / columns}%)`;
      projectGrid.style.gridTemplateColumns = `repeat(${columns}, ${columnWidth})`;
    }
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filterValue === 'all') {
          card.classList.remove('hide');
        } else {
          const categories = card.getAttribute('data-category').split(' ');
          if (categories.includes(filterValue)) {
            card.classList.remove('hide');
          } else {
            card.classList.add('hide');
          }
        }
      });

      updateGridLayout();
    });
  });

  window.addEventListener('resize', updateGridLayout);

  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = '0 8px 24px rgba(0,0,0,0.18), 0 1.5px 0 #000';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = '0.5px 4px 0 black';
    });
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
            whiteFade.addEventListener('transitionend', (e) => {
              if (e.propertyName === 'opacity') {
                whiteFade.style.display = 'none';
              }
            }, { once: true });
            loader.style.display = 'none';
          }, 500);
        }, 700);
      }
    }, interval);
  }, 500);
});
