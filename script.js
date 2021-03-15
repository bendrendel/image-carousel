const imageContainer = document.querySelector('.image-container');
const images = document.querySelectorAll('.image-container img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const numImages = images.length;
const imageWidth = 500;
let loopInterval;
let currentImage = 0;

displayImage(0);

loopImages();

prev.addEventListener('click', () => {
    prevImage();
    loopImages();   
});

next.addEventListener('click', () => {
    nextImage();
    loopImages();    
});

function loopImages() {
    const intervalTime = 2500;
    if (loopInterval) {
        clearInterval(loopInterval);
    }
    loopInterval = setInterval(() => nextImage(), intervalTime);
}

function nextImage() {
    currentImage = (currentImage + 1) % numImages;
    displayImage(currentImage);
}

function prevImage() {
    currentImage = (currentImage + numImages - 1) % numImages;
    displayImage(currentImage);
}

function displayImage(imageNum) {
    imageContainer.style.transform = `translateX(${-1 * imageWidth * imageNum}px)`;
}