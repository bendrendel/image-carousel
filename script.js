const imageContainer = document.querySelector('.image-container');
const images = document.querySelectorAll('.image-container img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let loopInterval;
let currentImage = 0;

prev.addEventListener('click', () => handlePrevClick());
next.addEventListener('click', () => handleNextClick());

loopImages();

function handlePrevClick() {
    prevImage();
    loopImages();
}

function handleNextClick() {
    nextImage();
    loopImages();
}

function loopImages() {
    const intervalTime = 2500;
    if (loopInterval) {
        clearInterval(loopInterval);
    }
    loopInterval = setInterval(() => nextImage(), intervalTime);
}

function nextImage() {
    currentImage = (currentImage + 1) % 4;
    displayImage(currentImage);
}

function prevImage() {
    currentImage = (currentImage + 4 - 1) % 4;
    displayImage(currentImage);
}

function displayImage(imageNum) {
    imageContainer.style.left = (-400 * imageNum) + 'px';
}