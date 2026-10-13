/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* CLOSE MENU AFTER CLICK */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


/* ================= PORTFOLIO CATEGORY ================= */

const categoryCards = document.querySelectorAll(".category-card");
const galleries = document.querySelectorAll(".portfolio-gallery");

categoryCards.forEach(card => {

    card.addEventListener("click", () => {

        const category = card.dataset.category;

        /* Remove active from cards */

        categoryCards.forEach(item => {
            item.classList.remove("active");
        });

        /* Add active to clicked card */

        card.classList.add("active");


        /* Hide all galleries */

        galleries.forEach(gallery => {
            gallery.classList.remove("active-gallery");
        });


        /* Show selected gallery */

        const selectedGallery = document.getElementById(category);

        if (selectedGallery) {
            selectedGallery.classList.add("active-gallery");
        }

    });

});


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const eventType = document.getElementById("eventType").value;
    const message = document.getElementById("message").value;


    if (!name || !phone) {

        alert("Please enter your name and phone number.");

        return;
    }


    /*
       WhatsApp message
       Replace this number with your actual WhatsApp number.
       Format: country code + number
       Example: 919876543210
    */

    const whatsappNumber = "919999999999";


    const whatsappMessage =
        `Hello Sneh Sathi,%0A%0A` +
        `Name: ${name}%0A` +
        `Phone: ${phone}%0A` +
        `Event: ${eventType}%0A` +
        `Message: ${message}`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


    window.open(whatsappURL, "_blank");

});


/* ================= IMAGE HOVER EFFECT ================= */

document.querySelectorAll(".gallery-item img").forEach(image => {

    image.addEventListener("click", () => {

        window.open(image.src, "_blank");

    });

});


/* ================= SCROLL ANIMATION ================= */

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


document.querySelectorAll(
    ".service-card, .about-image, .about-content, .category-card, .gallery-item"
).forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});