document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll(".slide");
        let currentIndex = 0;

        const prevButton = carousel.querySelector(".prev");
        const nextButton = carousel.querySelector(".next");

        function showSlide(index) {
            slides[currentIndex].classList.remove("active");
            currentIndex = (index + slides.length) % slides.length; // Ensures wrap-around
            slides[currentIndex].classList.add("active");
        }

        prevButton.addEventListener("click", () => showSlide(currentIndex - 1));
        nextButton.addEventListener("click", () => showSlide(currentIndex + 1));
    });
});

    
