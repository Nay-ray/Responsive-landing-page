const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-menu li a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  // Add background color when scrolling
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Highlight current section in nav
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
