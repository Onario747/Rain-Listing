document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const closeBtn = document.querySelector(".close-btn");
  const mobileNav = document.querySelector(".mobile-nav");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("show");
  });
});
