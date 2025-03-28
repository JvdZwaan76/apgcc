// Get elements
const modal = document.getElementById("loginModal");
const btn = document.getElementById("loginBtn");
const closeBtn = document.querySelector(".close");

// Open modal and disable CTA only on button click
btn.addEventListener("click", function() {
    modal.classList.add("active"); // Show modal
    btn.classList.add("disabled"); // Grey out and disable CTA
});

// Close modal and re-enable CTA on close button click
closeBtn.addEventListener("click", function() {
    modal.classList.remove("active"); // Hide modal
    btn.classList.remove("disabled"); // Restore CTA
});

// Close modal and re-enable CTA on outside click
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.classList.remove("active"); // Hide modal
        btn.classList.remove("disabled"); // Restore CTA
    }
});
