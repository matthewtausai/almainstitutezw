const backgroundslider = document.querySelector('.text-box');
const images = [
    
    'images/matthew.jpg',
    'images/redcap.jpg',
    
];

let currentImageIndex = 0;

backgroundslider.style.backgroundImage = `url(${images[currentImageIndex]})`;



setInterval(() => {

    currentImageIndex = (currentImageIndex + 1) % images.length;
    backgroundslider.classList.add('slide-out');

    setTimeout(() => {

    backgroundslider.style.backgroundImage = `url(${images[currentImageIndex]})`;

    backgroundslider.classList.remove('slide-out');

    },1000);

},2000);