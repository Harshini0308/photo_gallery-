const images = [
    'C:\Users\harsh\photo_gallery\images\image1.jpg',
    'C:\Users\harsh\photo_gallery\images\image2.jpg',
    'C:\Users\harsh\photo_gallery\images\image3.jpg',
    'C:\Users\harsh\photo_gallery\images\image3.jpg',
    'C:\Users\harsh\photo_gallery\images\image4.jpg',
    'C:\Users\harsh\photo_gallery\images\image5.jpg',
    'C:\Users\harsh\photo_gallery\images\image6.jpg',
    'C:\Users\harsh\photo_gallery\images\image7.jpg',
    'C:\Users\harsh\photo_gallery\images\image8.jpg',
    'C:\Users\harsh\photo_gallery\images\new image.jpg',
    // Add more image paths here
];

const gallery = document.querySelector('.gallery');

images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.alt = 'Photo';
    gallery.appendChild(imgElement);
}); 
