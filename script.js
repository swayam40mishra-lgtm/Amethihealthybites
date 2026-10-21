const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");

// Mobile navigation toggle
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  // Close menu after clicking a navigation link
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

// Automatically update the footer year
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}
