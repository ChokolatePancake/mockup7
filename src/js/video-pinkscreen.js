document.addEventListener('DOMContentLoaded', function() {
    const videoPreview = document.querySelector('.share__video-preview');
    const video = document.querySelector('.share__video')
    videoPreview.addEventListener('click', function() {
        videoPreview.classList.toggle('show');
    });
});