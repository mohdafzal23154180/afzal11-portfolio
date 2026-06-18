// Typing animation for the hero title.
const typingText = document.querySelector("#typingText");
const typingRoles = [
  "Web Developer",
  "Python Developer",
  "BSc IT Graduate",
  "Freelance Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  const currentRole = typingRoles[roleIndex];
  const visibleText = currentRole.slice(0, charIndex);

  typingText.textContent = visibleText;

  if (!isDeleting && charIndex < currentRole.length) {
    charIndex += 1;
    setTimeout(typeRole, 95);
    return;
  }

  if (isDeleting && charIndex > 0) {
    charIndex -= 1;
    setTimeout(typeRole, 50);
    return;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(typeRole, 1200);
    return;
  }

  isDeleting = false;
  roleIndex = (roleIndex + 1) % typingRoles.length;
  setTimeout(typeRole, 220);
}

typeRole();

// Mobile navigation menu.
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const body = document.body;

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  body.classList.toggle("menu-open", isOpen);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    body.classList.remove("menu-open");
  });
});

// Reveal sections and animate progress bars while scrolling.
const revealElements = document.querySelectorAll(".reveal");
const skillElements = document.querySelectorAll(".skill");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("visible");

      if (entry.target.classList.contains("skill")) {
        const level = entry.target.dataset.level;
        entry.target.querySelector(".progress span").style.width = `${level}%`;
      }

      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.18 }
);

revealElements.forEach((element) => observer.observe(element));
skillElements.forEach((skill) => observer.observe(skill));

// Highlight the active navigation link based on the current section.
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      links.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);

sections.forEach((section) => navObserver.observe(section));
