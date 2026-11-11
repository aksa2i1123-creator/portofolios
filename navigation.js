// NAVIGATION ELEMENTS

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");


// TOGGLE MOBILE MENU
function toggleMenu() {
  const isOpen = menuButton.classList.toggle("active");

  navLinks.classList.toggle("open", isOpen);

  menuButton.setAttribute("aria-expanded", isOpen);

  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
}



// CLOSE MOBILE MENU
function closeMenu() {
  menuButton.classList.remove("active");
  navLinks.classList.remove("open");

  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation menu");
}


// EVENT LISTENERS
// Toggle when hamburger is clicked
menuButton.addEventListener("click", toggleMenu);


// Close menu when navigation link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});


// Close menu when Escape is pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});


// Close menu when screen returns to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 820) {
    closeMenu();
  }
});
