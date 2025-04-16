
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
