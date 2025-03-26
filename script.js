document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeBtn = document.querySelector('.close');

    loginBtn.onclick = function() {
        loginModal.style.display = "block";
    }

    closeBtn.onclick = function() {
        loginModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
    }

    // Basic Form Handling (Add your actual login logic here)
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // Add your authentication logic here
        alert('Login functionality to be implemented.');
        loginModal.style.display = "none";
    });
});