"use strict";
const body = document.body;
const openButton = document.querySelector(".menu-toggle");
const closeButton = document.querySelector(".menu-close");
const overlay = document.querySelector(".menu-overlay");
const mobileMenu = document.querySelector(".mobile-menu");
function openMenu() {
    if (!openButton || !mobileMenu || !overlay)
        return;
    body.classList.add("menu-open");
    openButton.setAttribute("aria-expanded", "true");
    mobileMenu.setAttribute("aria-hidden", "false");
    overlay.hidden = false;
}
function closeMenu() {
    if (!openButton || !mobileMenu || !overlay)
        return;
    body.classList.remove("menu-open");
    openButton.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    overlay.hidden = true;
}
function handleKeydown(event) {
    if (event.key === "Escape") {
        closeMenu();
    }
}
openButton === null || openButton === void 0 ? void 0 : openButton.addEventListener("click", openMenu);
closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener("click", closeMenu);
overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener("click", closeMenu);
document.addEventListener("keydown", handleKeydown);
