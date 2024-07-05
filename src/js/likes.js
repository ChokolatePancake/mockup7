document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.taken__like-button');

    // Function to load likes from local storage
    function loadLikes() {
        buttons.forEach((button) => {
            let index = button.parentElement.dataset.index;
            const savedCount = localStorage.getItem(`likeCount${index}`);
            const isLiked = localStorage.getItem(`isLiked${index}`) === 'true';
            let likes = document.querySelectorAll(`div[data-index="${index}"]`);
            likes.forEach(like => {
                if (savedCount !== null) {
                    let numberElem = like.querySelector('.taken__count');
                    let likeBtn = like.querySelector('.taken__like-button');
                    numberElem.innerText = savedCount;
                    if (isLiked) {
                        likeBtn.classList.add("like");
                    } else {
                        likeBtn.classList.remove("like");
                    }
                }
            });
        });
    }

    // Load like counts from local storage on page load
    loadLikes();

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let index = button.parentElement.dataset.index;
            let likes = document.querySelectorAll(`div[data-index="${index}"]`);
            likes.forEach(like => {
               let numberElem = like.querySelector('.taken__count');
                let number = parseInt(numberElem.innerText);
                let likeBtn = like.querySelector('.taken__like-button');
                if (likeBtn.classList.contains("like")) {
                    // If already liked, decrement the number
                    number--;
                    likeBtn.classList.remove("like");
                    localStorage.setItem(`isLiked${index}`, 'false');
                } else {
                    // If not liked, increment the number
                    number++;
                    likeBtn.classList.add("like");
                    localStorage.setItem(`isLiked${index}`, 'true');
                }

                // Update the text content
                numberElem.innerText = number;

                // Save the updated count to local storage
                localStorage.setItem(`likeCount${index}`, number);
            });
        });
    });
});
