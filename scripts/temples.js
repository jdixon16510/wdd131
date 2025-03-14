// Footer year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Hamburger menu toggle (for small screens)
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Toggle menu on click (Only works for small screens)
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    // Change hamburger icon to 'X' when menu is open
    if (navMenu.classList.contains("active")) {
        menuToggle.textContent = "✖"; // X symbol
    } else {
        menuToggle.textContent = "☰"; // Hamburger symbol
    }
});
