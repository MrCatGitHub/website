document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const images = document.querySelectorAll('img[data-image-id]');

    images.forEach(image => {
        const imageId = image.getAttribute('data-image-id');
        const newImageSrc = `./img/${imageId}.png`;

        // Create a new image element to check if the image exists
        const img = new Image();
        img.src = newImageSrc;

        img.onload = function () {
            // Image exists, set it as the source
            image.src = newImageSrc;
        };

        img.onerror = function () {
            // Image does not exist, fallback to default image
            image.src = './img/404.png';
        };
    });
});