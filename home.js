// script.js

// Function to display the user's profile name if logged in
function displayProfileName() {
    const profileName = localStorage.getItem('userProfileName');
    const profileLink = document.getElementById('profileLink');

    if (profileName) {
        profileLink.textContent = profileName; // Set the profile name
    } else {
        profileLink.textContent = 'Profile'; // Default profile link text
    }
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', displayProfileName);