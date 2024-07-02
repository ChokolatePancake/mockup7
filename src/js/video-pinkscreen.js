document.addEventListener('DOMContentLoaded', function() {
    const videoBlocks = document.querySelectorAll('.share__video-block');

    // Each preview listening for own video
    videoBlocks.forEach(block => {
        const videoPreview = block.querySelector('.share__video-preview');
        const video = block.querySelector('.share__video');

        videoPreview.addEventListener('click', function() {
            videoPreview.style.display = 'none';
            video.style.display = 'block';
        });
    });
});