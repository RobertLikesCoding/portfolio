const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.forEach((i) => {
      i.classList.remove("fw-bold");
      i.textContent = i.textContent.replace(/_$/, "");
    });

    item.classList.add("fw-bold");
    item.textContent += "_";
  });
});

function toggleMenu() {
  const links = document.querySelector(".mobile-links");
  const icon = document.querySelector(".mobile-icon");
  const menu = document.querySelector(".mobile-menu");

  links.classList.toggle("open");
  icon.classList.toggle("open");
  menu.classList.toggle("open");
}

// DARK MODE TOGGLE

const root = document.documentElement;
const toggleButtons = document.querySelectorAll(".theme-toggle");
const contactSection = document.getElementById("contact");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);

  if (savedTheme === "light") {
    contactSection.classList.remove("contact-dark");
  } else {
    contactSection.classList.add("contact-dark");
  }
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", prefersDark ? "dark" : "light");
}

toggleButtons.forEach((btn) => {
  btn.addEventListener("click", toggleTheme);
});

function toggleTheme() {
  const theme = root.getAttribute("data-theme");
  const nextTheme = theme === "light" ? "dark" : "light";
  // Toggle contact section manually since its colors are inverted
  if (nextTheme === "light") {
    contactSection.classList.remove("contact-dark");
  } else {
    contactSection.classList.add("contact-dark");
  }

  root.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
}
