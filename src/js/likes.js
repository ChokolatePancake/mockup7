// Get all buttons and field
const buttons = document.querySelectorAll('.taken__like-button');
const numberText = document.querySelectorAll('.taken__count');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {

        // Get the current number from the p tag
        let number = parseInt(numberText[index].innerText);

        if (button.classList.contains("like")) {
            // If already liked, decrement the number
            number--;
        } else {
            // If not liked, increment the number
            number++;
        }

        // For changing like status
        button.classList.toggle("like");

        // Update the text content
        numberText[index].innerText = number;
    });
});