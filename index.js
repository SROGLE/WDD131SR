const themeSelector = document.querySelector("#theme-selector");
const body = document.body;
const logo = document.querySelector("#logo");

function changeTheme() {
    const theme = themeSelector.value;

    if (theme === "dark") {
        body.classList.add("dark");
        logo.src = "images/byui-logo_white.png"; // Replace with the white logo's path
    } else {
        body.classList.remove("dark");
        logo.src = "images/byui_logo_blue.png"; // Replace with the blue logo's path
    }
}

themeSelector.addEventListener("change", changeTheme);
