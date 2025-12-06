// assets/js/main.js
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // Highlight active page in navbar
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === "/" + currentPage || 
        (currentPage === "" && link.getAttribute("href") === "/index.html")) {
      link.classList.add("active");
    }
  });
});