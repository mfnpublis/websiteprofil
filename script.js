/* =====================================================
   CYBERPUNK PROFILE
   VANILLA JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const topMenu = document.querySelector(".top-menu");

menuToggle.addEventListener("click", function () {

    topMenu.classList.toggle("show");

});


/* =====================================================
   CLOSE MOBILE MENU
   AFTER CLICKING NAVIGATION
===================================================== */

const menuLinks = document.querySelectorAll(".top-menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        topMenu.classList.remove("show");

    });

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".section-reveal");


const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".top-menu a");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   CONTACT BUTTON
===================================================== */

const contactButton =
    document.getElementById("contactButton");


contactButton.addEventListener("click", function () {

    document
        .getElementById("social")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* =====================================================
   CURRENT YEAR
===================================================== */

const currentYear =
    document.getElementById("currentYear");


currentYear.textContent =
    new Date().getFullYear();


/* =====================================================
   SIMPLE GLITCH EFFECT
===================================================== */

const heroTitle =
    document.querySelector(".hero h1");


setInterval(function () {

    heroTitle.classList.add("glitch");

    setTimeout(function () {

        heroTitle.classList.remove("glitch");

    }, 250);

}, 5000);