const images = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
    // Add more image paths here
];

const gallery = document.querySelector('.gallery');

images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.alt = 'Photo';
    gallery.appendChild(imgElement);
}); 
