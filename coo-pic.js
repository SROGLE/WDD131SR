// JavaScript for Cool Pics Gallery

// Toggle menu visibility for responsive navigation
const menuButton = document.getElementById('menu-toggle');
const menuLinks = document.getElementById('nav-links');

menuButton.addEventListener('click', () => {
    menuLinks.classList.toggle('open'); // Toggle the 'open' class on the menu
});

// Functionality for the image modal
const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.createElement('div');
const modalImage = document.createElement('img');
const modalClose = document.createElement('button');

// Create the modal structure
modal.className = 'image-modal';
modalClose.textContent = 'Close';
modalClose.className = 'modal-close';

// Append modal components
modal.appendChild(modalImage);
modal.appendChild(modalClose);
document.body.appendChild(modal);

// Initially hide the modal
modal.style.display = 'none';

// Open modal when clicking an image
galleryImages.forEach((img) => {
    img.addEventListener('click', () => {
        modalImage.src = img.src; // Set modal image source to the clicked image
        modal.style.display = 'flex'; // Show modal
    });
});

// Close modal when clicking the close button
modalClose.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide modal
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none'; // Hide modal
    }
});
