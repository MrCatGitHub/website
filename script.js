document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const images = document.querySelectorAll('img[data-image-id]');

    images.forEach(image => {
        const imageId = image.getAttribute('data-image-id');
        const newImageSrc = `./img/${imageId}`;

        const img = new Image();
        img.src = newImageSrc;

        img.onload = function () {
            image.src = newImageSrc;
        };

        img.onerror = function () {
            image.src = './img/404.png';
        };
    });
});