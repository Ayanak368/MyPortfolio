
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    // const isOpen = navLinks.classList.contains("show");
    // menuButton.setAttribute("aria-expanded", isOpen);
});

const button = document.getElementById("theme-toggle");

button.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "☾";
    } else {
        button.textContent = "☼";
    }

});