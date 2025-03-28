// Get elements
const modal = document.getElementById("loginModal");
const btn = document.getElementById("loginBtn");
const closeBtn = document.querySelector(".close");

// Open modal and disable CTA
btn.addEventListener("click", function() {
    modal.style.display = "flex"; // Show modal
    btn.classList.add("disabled"); // Grey out and disable CTA
});

// Close modal and re-enable CTA
closeBtn.addEventListener("click", function() {
    modal.style.display = "none"; // Hide modal
    btn.classList.remove("disabled"); // Restore CTA
});

// Close modal on outside click and re-enable CTA
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide modal
        btn.classList.remove("disabled"); // Restore CTA
    }
});
