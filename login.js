document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Dummy credentials
        const dummyEmail = "user12345@gmail.com"; // Change to your desired dummy email
        const dummyPassword = "passuser123";    // Change to your desired dummy password

        // Check if the entered credentials match the dummy credentials
        if (email === dummyEmail && password === dummyPassword) {
            // Redirect to the homepage
            window.location.href = "index2.html"; // Redirect to the OTT platform home page
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordLink = document.querySelector('a[href="#"]');

    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = "forgot_password.html";  // Redirect to forgot_password.html
    });
});
