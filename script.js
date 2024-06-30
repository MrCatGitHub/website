document.addEventListener("DOMContentLoaded", function () {
    const img = document.getElementById('profileImage');
    img.onerror = function () {
        img.src = img.alt;
    };
});