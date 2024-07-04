document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.taken__like-button');
    const numberText = document.querySelectorAll('.taken__count');

    // Function to load likes from local storage
    function loadLikes() {
        buttons.forEach((button, index) => {
            const savedCount = localStorage.getItem(`likeCount${index}`);
            const isLiked = localStorage.getItem(`isLiked${index}`) === 'true';

            if (savedCount !== null) {
                numberText[index].innerText = savedCount;
                if (isLiked) {
                    button.classList.add("like");
                } else {
                    button.classList.remove("like");
                }
            }
        });
    }

    // Load like counts from local storage on page load
    loadLikes();

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Get the current number from the p tag
            let number = parseInt(numberText[index].innerText);

            if (button.classList.contains("like")) {
                // If already liked, decrement the number
                number--;
                button.classList.remove("like");
                localStorage.setItem(`isLiked${index}`, 'false');
            } else {
                // If not liked, increment the number
                number++;
                button.classList.add("like");
                localStorage.setItem(`isLiked${index}`, 'true');
            }

            // Update the text content
            numberText[index].innerText = number;

            // Save the updated count to local storage
            localStorage.setItem(`likeCount${index}`, number);
        });
    });

    // Reapply likes state whenever slider is interacted with
    const slider = document.querySelector('.splide');
    if (slider) {
        slider.addEventListener('mouseenter', loadLikes);
        slider.addEventListener('mouseleave', loadLikes);
    }
});
