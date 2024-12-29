// JavaScript for interactivity
document.addEventListener("DOMContentLoaded", () => {
  // Example: Handle "Learn More" button click
  const learnMoreBtn = document.getElementById("learn-more-btn");
  learnMoreBtn.addEventListener("click", () => {
    window.location.href = "#about";
  });

  // Example: Add skills dynamically
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
  const skillsList = document.getElementById("skills-list");
  skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  // Example: Add projects dynamically
  const projects = [
    { name: "Project 1", description: "Description for project 1" },
    { name: "Project 2", description: "Description for project 2" },
  ];
  const projectContainer = document.getElementById("project-container");
  projects.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
    projectContainer.appendChild(projectDiv);
  });

  // Handle contact form submission
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    contactForm.reset();
  });
});
