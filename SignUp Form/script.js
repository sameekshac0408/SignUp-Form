function validateForm(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");

    // Clear previous messages and reset color
    message.innerText = "";
    message.style.color = "red";

    // Check for empty fields individually
    if (!name) {
        message.innerText = "Please enter your full name.";
        return;
    }

    if (!email) {
        message.innerText = "Please enter your email.";
        return;
    }

    if (!phone) {
        message.innerText = "Please enter your phone number.";
        return;
    }

    if (!password) {
        message.innerText = "Please enter a password.";
        return;
    }

    if (!confirmPassword) {
        message.innerText = "Please confirm your password.";
        return;
    }

    // Name should be at least 5 characters
    if (name.length < 5) {
        message.innerText = "Name must be at least 5 characters long.";
        return;
    }

    // Email must contain '@'
    if (!email.includes("@")) {
        message.innerText = "Please enter a valid email address.";
        return;
    }

    // Phone number must be exactly 10 digits and not a common fake number
    if (!/^\d{10}$/.test(phone) || phone === "1234567890") {
        message.innerText = "Please enter a valid 10-digit phone number.";
        return;
    }

    // Password restrictions
    if (
        password.length < 8 ||
        password.toLowerCase() === "password" ||
        password.toLowerCase() === name.toLowerCase()
    ) {
        message.innerText = "Password must be at least 8 characters and not be too simple.";
        return;
    }

    // Confirm password must match
    if (password !== confirmPassword) {
        message.innerText = "Passwords do not match. Please re-enter.";
        return;
    }

    // All validations passed
    message.style.color = "green";
    message.innerText = "Form submitted successfully!";
}

// Add event listener to the form
document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", validateForm);
    }
});