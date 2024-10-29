document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(sessionStorage.getItem('loggedInUser'));

    if (user) {
        // Display user information
        document.getElementById('profileName').textContent = `${user.firstName} ${user.lastName}`;
        document.getElementById('profileEmail').textContent = user.email;
        document.getElementById('profileAddress').textContent = user.address1 + ', ' + user.address2;
        document.getElementById('profileCity').textContent = user.city;
        document.getElementById('profileState').textContent = user.state;
        document.getElementById('profileZip').textContent = user.zip;
    } else {
        // If no user is logged in, redirect to login page
        window.location.href = "login.html";
    }
});
