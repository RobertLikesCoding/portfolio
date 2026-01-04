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
const toggleBtn = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
}

toggleBtn.addEventListener("click", () => {
  const theme = root.getAttribute("data-theme");
  const nextTheme = theme === "light" ? "dark" : "light";
  root.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
});
