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

const flag = "testMode";
const params = new URLSearchParams(window.location.search);
const testModeEnabled = params.get(flag) === "true";

const dialog = document.getElementById("dialog");
const modalButton = document.getElementById("modalButton");
const closeButton = document.getElementById("closeButton");

if (testModeEnabled) {
  modalButton.removeAttribute("hidden");
}

modalButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
