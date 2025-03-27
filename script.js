// Get elements for login modal
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');
const loginForm = document.getElementById('loginForm');

// Get elements for parallax animation
const logo = document.querySelector('.logo');
const animationContainer = document.querySelector('.animation-container');
const header = document.querySelector('.header');
const loginButton = document.querySelector('.login-button');
const contactInfo = document.querySelector('.contact-info');

// Trigger parallax animation on page load
window.addEventListener('load', () => {
    logo.classList.add('animate');
    animationContainer.classList.add('animate');
    header.classList.add('animate');
    loginButton.classList.add('animate');
    contactInfo.classList.add('animate');
});

// Open login modal
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Close login modal
closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Handle form submission (for demo purposes, just logs to console)
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    console.log('Login attempt:', { username, password });
    alert('Login submitted! (This is a demo)');
    loginModal.style.display = 'none';
});