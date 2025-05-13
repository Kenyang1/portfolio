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

// LinkedIn Integration
function displayLinkedInActivity() {
  const linkedinContainer = document.getElementById('linkedin-activity');
  
  // This is a static example - you can update these items manually
  const activities = [
    {
      title: "Software Engineering Intern at Fidelity Investments",
      description: "Excited to join Fidelity Investments as a Mobile Engineer Intern for Summer 2025!",
      date: "June 2025",
      type: "experience"
    },
    {
      title: "Career Prep Fellow at MLT",
      description: "Enhancing leadership and technical skills through case studies and conferences.",
      date: "March 2025",
      type: "certification"
    },
    {
      title: "Campus Ambassador at HeadStart Fellowship",
      description: "Promoting fellowship through digital campaigns and cross-campus collaborations.",
      date: "March 2025",
      type: "achievement"
    }
  ];

  const activityHTML = activities.map(activity => {
    let icon = '';
    switch(activity.type) {
      case 'experience':
        icon = 'fa-briefcase';
        break;
      case 'certification':
        icon = 'fa-certificate';
        break;
      case 'achievement':
        icon = 'fa-trophy';
        break;
      default:
        icon = 'fa-bell';
    }

    return `
      <div class="linkedin-activity-item">
        <h3>${activity.title}</h3>
        <p>${activity.description}</p>
        <div class="activity-meta">
          <i class="fa-solid ${icon}"></i>
          <span>${activity.date}</span>
        </div>
      </div>
    `;
  }).join('');

  linkedinContainer.innerHTML = activityHTML;
}

// Call the functions when the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Display LinkedIn activity
  displayLinkedInActivity();
});
