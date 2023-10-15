// Define your own username and password
const validUsername = "your_username";
const validPassword = "your_password";

// Get form elements
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Add event listener for form submission
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values entered by the user
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Check if the entered username and password match the predefined values
    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        // Successful login
        alert("Login successful. Redirecting to the dashboard...");
        // Redirect to the dashboard.html page
        window.location.href = "dashboard.html";
    } else {
        // Failed login
        alert("Login failed. Please check your username and password.");
    }
});
