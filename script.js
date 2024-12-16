// Gallery Navigation
const images = ['images/ryan1.jpg', 'images/ryan2.jpg', 'images/ryan3.jpg'];
let currentImageIndex = 0;

document.getElementById('prev-btn').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('gallery-image').src = images[currentImageIndex];
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('gallery-image').src = images[currentImageIndex];
});

// Performances Section
fetch('performances.json')
    .then(response => response.json())
    .then(data => {
        const performanceList = document.getElementById('performance-list');
        data.performances.forEach(performance => {
            const listItem = document.createElement('li');
            listItem.textContent = `${performance.date} - ${performance.venue}`;
            performanceList.appendChild(listItem);
        });
    });

