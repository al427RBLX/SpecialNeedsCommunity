// Grabbing the header, and the "mobile toggle button"
let headerMain = document.querySelector(".header-main");
let headerMobileBtn = document.querySelector(".mobile-menu-btn");

// Boolean to state if the menu is opened or closed
let isMenuOpen = false;

// Event to check if the "mobile toggle button" is clicked
headerMobileBtn.onclick = function () {
    // Condition to check if the menu is currently open or closed
    if (!isMenuOpen) {
        // We change the header styling to "display: flex;"
        headerMain.style.display = "flex";
        // We change the boolean
        isMenuOpen = true;
    }
    else if (isMenuOpen) {
        // We change the header styling to "display: none;"
        headerMain.style.display = "none";
        // We change the boolean
        isMenuOpen = false;
    }
}