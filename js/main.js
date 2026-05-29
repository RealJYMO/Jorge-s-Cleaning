// ========== NAVBAR SCROLL BEHAVIOR ==========
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".navbar__link");

// Add scroll shadow to navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ========== MOBILE MENU TOGGLE ==========
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navMenu.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", hamburger.classList.contains("open"));
});

// Close menu when any nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navMenu.classList.remove("open");
    hamburger.setAttribute("aria-expanded", false);
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar")) {
    hamburger.classList.remove("open");
    navMenu.classList.remove("open");
    hamburger.setAttribute("aria-expanded", false);
  }
});

// ========== SCROLL REVEAL ==========
const revealElements = document.querySelectorAll(".reveal");

const observerOptions = {
  threshold: 0.12,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

revealElements.forEach((element) => {
  observer.observe(element);
});

// ========== ACTIVE NAV LINK HIGHLIGHT ==========
const sections = document.querySelectorAll("section[id]");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove active class from all links
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        // Add active class to matching link
        const activeLink = document.querySelector(
          `.navbar__link[data-nav="${entry.target.id}"]`
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

// ========== SMOOTH SCROLL BEHAVIOR ==========
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
