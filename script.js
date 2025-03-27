// Image Carousel for House Details Page
const carouselImages = document.querySelectorAll('.carousel img');
let currentImageIndex = 0;

function showImage(index) {
    carouselImages.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    showImage(currentImageIndex);
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(currentImageIndex);
}

// Initialize the first image
showImage(currentImageIndex);

// Set interval to automatically change images in the carousel every 3 seconds
setInterval(nextImage, 3000);

// Event listeners for next and previous buttons in the carousel
document.querySelector('.carousel .next').addEventListener('click', nextImage);
document.querySelector('.carousel .prev').addEventListener('click', previousImage);

// Contact Button Functionality (Residential Sale Page)
const contactButtons = document.querySelectorAll('.btn.contact');
contactButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert("Thank you for your interest! Our agent will contact you soon.");
    });
});

// Message Agent Button Functionality (Residential Sale and House Details Page)
const messageButtons = document.querySelectorAll('.btn.message');
messageButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert("Your message has been sent to the agent!");
    });
});

// Contact Form Popup (if you decide to have a form popup)
const contactFormButton = document.querySelector('.chat-button a');
contactFormButton.addEventListener('click', function() {
    alert("Opening contact form...");
    // This could be linked to opening a contact form modal
});

// Ensure buttons and interactions are working correctly when pages load
window.addEventListener('load', () => {
    console.log("Page loaded and scripts are working.");
});
