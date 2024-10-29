document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form field values
        const firstName = document.querySelector('input[placeholder="First name"]').value;
        const lastName = document.querySelector('input[placeholder="Last name"]').value;
        const email = document.getElementById('inputEmail4').value;
        const password = document.getElementById('inputPassword4').value;
        const address1 = document.getElementById('inputAddress').value;
        const address2 = document.getElementById('inputAddress2').value;
        const city = document.getElementById('inputCity').value;
        const state = document.getElementById('inputState').value;
        const zip = document.getElementById('inputZip').value;

        // Simple validation
        if (!firstName || !lastName || !email || !password || !address1 || !city || !state || !zip) {
            alert("Please fill in all required fields.");
            return;
        }

        // Email validation pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Password validation
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // Store the user data in localStorage
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            address1: address1,
            address2: address2,
            city: city,
            state: state,
            zip: zip
        };
        localStorage.setItem('user', JSON.stringify(user));

        // Redirect to login page
        window.location.href = "login.html";
    });
});
