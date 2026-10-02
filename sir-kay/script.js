```javascript
/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* =========================
   CURRENT YEAR
========================= */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
```
