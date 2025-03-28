// Get the modal, button, and close elements
const modal = document.getElementById("loginModal");
const btn = document.getElementById("loginBtn");
const span = document.getElementsByClassName("close")[0];

// Get focusable elements within the modal
const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
const firstFocusableElement = focusableElements[0];
const lastFocusableElement = focusableElements[focusableElements.length - 1];

// Open the modal when the button is clicked
btn.onclick = function() {
    modal.style.display = "block";
    // Focus the first focusable element in the modal
    firstFocusableElement.focus();
}

// Close the modal when the close button (×) is clicked
span.onclick = function() {
    modal.style.display = "none";
    // Return focus to the button that opened the modal
    btn.focus();
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        // Return focus to the button that opened the modal
        btn.focus();
    }
}

// Trap focus within the modal
modal.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        if (event.shiftKey) { // Shift + Tab (backward)
            if (document.activeElement === firstFocusableElement) {
                event.preventDefault();
                lastFocusableElement.focus();
            }
        } else { // Tab (forward)
            if (document.activeElement === lastFocusableElement) {
                event.preventDefault();
                firstFocusableElement.focus();
            }
        }
    } else if (event.key === 'Escape') { // Close modal on Escape key
        modal.style.display = "none";
        btn.focus();
    }
});

// Handle form submission (prevent default and add custom logic if needed)
const form = document.getElementById("loginForm");
form.onsubmit = function(event) {
    event.preventDefault();
    // Add your login logic here (e.g., validate credentials, send to server, etc.)
    console.log("Form submitted");
    modal.style.display = "none";
    // Return focus to the button that opened the modal
    btn.focus();
}

// Note: No video optimization was added to this script, as it was handled in HTML (autoplay, muted, loop, playsinline) and CSS (object-fit: contain).