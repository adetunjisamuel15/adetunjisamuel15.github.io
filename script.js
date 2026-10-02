/* ================================
MOBILE MENU
================================ */

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {

```
sidebar.classList.toggle("open");
```

});

/* ================================
CLOSE MOBILE MENU
WHEN NAV LINK IS CLICKED
================================ */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

```
link.addEventListener("click", () => {

    sidebar.classList.remove("open");

});
```

});

/* ================================
ACTIVE NAVIGATION
================================ */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

```
let current = "";

sections.forEach(section => {

    const sectionTop = section.offsetTop;

    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 200) {

        current = section.getAttribute("id");

    }

});


navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {

        link.classList.add("active");

    }

});
```

});

/* ================================
CURRENT YEAR
================================ */

const year = document.getElementById("year");

if (year) {

```
year.textContent = new Date().getFullYear();
```

}

/* ================================
PROJECT LINKS
================================ */

const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach(link => {

```
link.addEventListener("click", (event) => {

    const href = link.getAttribute("href");

    if (href === "#") {

        event.preventDefault();

        alert("Project link will be added soon.");

    }

});
```

});
