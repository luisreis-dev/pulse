// NAVEGAÇÃO
const navbar = document.querySelector("#navbar");
const navToggle = document.querySelector("#navToggle");
const navMenu = document.querySelector("#navMenu");
const navLinks = document.querySelectorAll(".nav-menu a");

function updateNavbar() {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
}

function closeMenu() {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Abrir menu");
}

navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");

    navToggle.classList.toggle("active", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
    );
});

navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", updateNavbar);
window.addEventListener("load", updateNavbar);

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});

// SABORES
const flavorSections = document.querySelectorAll(".flavor-section");

const flavorObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            flavorObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

flavorSections.forEach(section => {
    flavorObserver.observe(section);
});