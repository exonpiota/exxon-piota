// Initialize EmailJS
emailjs.init("juaJZI4iUmsBoqFDB"); // Replace with your EmailJS user ID

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate form data
    if (!firstName || !lastName || !message) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    // Send email using EmailJS
    emailjs.send("service_2sxmr6t", "template_qa01wj2", {
        firstName: firstName,
        lastName: lastName,
        message: message,
    })
        .then(function (response) {
            alert("Your message has been sent successfully!");
        })
        .catch(function (error) {
            alert("Failed to send your message. Please try again.");
            console.error("Error:", error);
        });
});