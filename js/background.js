const images = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'
];

const chosenImages = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement('img');

bgImage.classList.add('one');

bgImage.src = `img/${chosenImages}`;

document.body.appendChild(bgImage);