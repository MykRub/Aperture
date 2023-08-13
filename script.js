document.addEventListener("DOMContentLoaded", () => {
    const burgerButton = document.getElementById("burgerButton");
    const headerMenu = document.getElementById("headerMenu");

    burgerButton.addEventListener("click", () => {
        headerMenu.classList.toggle("active");
    });
})