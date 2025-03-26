// Get elements for login modal
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');
const loginForm = document.getElementById('loginForm');

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