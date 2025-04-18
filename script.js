
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
window.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('active');
    }
});
const navLinks = document.querySelectorAll('.nav_links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

const swiper = new Swiper('.mySwiper', {
    loop: true, // Enable infinite loop
    autoplay: {
        delay: 3000, // Auto-slide every 3 seconds
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function validateForm(event) {
    // Prevent the default action of the link
    event.preventDefault();

    // Check if the form inputs are empty
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input[required]');
    let isFormValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isFormValid = false;
        }
    });

    // Show alert if the form is incomplete
    if (!isFormValid) {
        alert("Please fill out all required fields before submitting the form.");
    } else {
        // Redirect to the next page if the form is valid
        window.location.href = './cngrt.html';
    }
}

emailjs.init("juaJZI4iUmsBoqFDB");

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Send form data using EmailJS
    emailjs.sendForm("service_t9v7ibd", "template_3nnivzo", this)
        .then(function(response) {
            alert("Form submitted successfully!");
            console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
            alert("Failed to send form. Please try again.");
            console.log("FAILED...", error);
        });
});

