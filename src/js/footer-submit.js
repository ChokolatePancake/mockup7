const emailInput = document.querySelector('.footer__input');
const button = document.querySelector('.footer__button');
const message = document.querySelector('.footer__message');

// Function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

button.addEventListener("click", (e) => {
    e.preventDefault();  // Prevent form submission
    if (!isValidEmail(emailInput.value)) {
        emailInput.classList.add("error");
        message.classList.remove("show");
    } else {
        emailInput.classList.remove("error");
        message.classList.add("show");
        emailInput.reset();
    }
});


emailInput.addEventListener('input', (e) => {
    if (e.target.required) {
        e.target.classList.remove('error');
    }
});