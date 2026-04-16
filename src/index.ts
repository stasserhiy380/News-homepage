const body = document.body;

const openButton = document.querySelector(".menu-toggle") as HTMLButtonElement | null;
const closeButton = document.querySelector(".menu-close") as HTMLButtonElement | null;
const overlay = document.querySelector(".menu-overlay") as HTMLDivElement | null;
const mobileMenu = document.querySelector(".mobile-menu") as HTMLElement | null;

function openMenu(): void {
   if (!openButton || !mobileMenu || !overlay) return;

   body.classList.add("menu-open");
   openButton.setAttribute("aria-expanded", "true");
   mobileMenu.setAttribute("aria-hidden", "false");
   overlay.hidden = false;
}

function closeMenu(): void {
   if (!openButton || !mobileMenu || !overlay) return;

   body.classList.remove("menu-open");
   openButton.setAttribute("aria-expanded", "false");
   mobileMenu.setAttribute("aria-hidden", "true");
   overlay.hidden = true;
}

function handleKeydown(event: KeyboardEvent): void {
   if (event.key === "Escape") {
      closeMenu();
   }
}

openButton?.addEventListener("click", openMenu);
closeButton?.addEventListener("click", closeMenu);
overlay?.addEventListener("click", closeMenu);
document.addEventListener("keydown", handleKeydown);