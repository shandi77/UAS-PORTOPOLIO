// Toggle Menu Mobile
function myMenuFunction() {
  const navMenu = document.getElementById("myNavMenu");
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "flex";
    navMenu.style.flexDirection = "column";
    navMenu.style.position = "absolute";
    navMenu.style.top = "80px";
    navMenu.style.left = "0";
    navMenu.style.width = "100%";
    navMenu.style.background = "#fff";
    navMenu.style.padding = "20px";
  }
}

// Menutup menu otomatis saat link diklik (Mobile UX)
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      document.getElementById("myNavMenu").style.display = "none";
    }
  });
});

// Efek Scroll Navbar
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(255, 255, 255, 0.95)";
    nav.style.padding = "15px 10%";
  } else {
    nav.style.background = "#fff";
    nav.style.padding = "20px 10%";
  }
});