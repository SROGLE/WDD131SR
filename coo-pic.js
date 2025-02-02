// Toggle menu visibility for responsive navigation
const menuButton = document.getElementById('menu-toggle');
const menuLinks = document.getElementById('nav-links');

menuButton.addEventListener('click', () => {
    menuLinks.classList.toggle('open');
});

// Functionality for the image modal
const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.image-modal');
const modalImage = document.getElementById('modal-image');
const modalClose = document.querySelector('.modal-close');

// Open modal when clicking an image
galleryImages.forEach((img) => {
    img.addEventListener('click', () => {
        modalImage.src = img.src;
        modal.style.display = 'flex';
    });
});

// Close modal when clicking the close button
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
