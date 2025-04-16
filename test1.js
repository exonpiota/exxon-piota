// Initialize EmailJS
emailjs.init("user_J7Kvjm54YNrgptvle"); // Replace with your EmailJS user ID

// Handle form submission
document.getElementById("applicationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());

    // Send email using EmailJS
    emailjs.send("service_2sxmr6t", "template_qa01wj2", formObject)
        .then(function (response) {
            alert("Your application has been submitted successfully!");
        })
        .catch(function (error) {
            alert("Failed to submit your application. Please try again.");
            console.error("Error:", error);
        });
});