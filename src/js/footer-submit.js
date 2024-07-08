let form = document.querySelector(".footer__form");
let button = document.querySelector(".footer__button");
let message = document.querySelector(".footer__message");

// Function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

button.addEventListener("click", (e) => {
    e.preventDefault();  // Prevent form submission

    // Validate all required fields
    form.querySelectorAll('[required]').forEach(field => {
        if (field.type === 'email' && !isValidEmail(field.value)) {
            field.classList.add('highlight-error');
            // Show message of successful submission
            message.classList.remove("show");
        } else {
            field.classList.remove('highlight-error');
            message.classList.add("show");
            form.reset();
        }
    });
});
form.addEventListener('input', (e) => {
    if (e.target.required) {
        e.target.classList.remove('highlight-error');
        message.classList.remove("show");
    }
});