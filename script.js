document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        let slides = carousel.querySelectorAll(".slide");
        let currentIndex = 0;

        // Show the current slide
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove("active");
                if (i === index) {
                    slide.classList.add("active");
                }
            });
        }

        // Show next slide
        function showNextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        // Show previous slide
        function showPrevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        // Attach event listeners to buttons
        const prevButton = carousel.querySelector(".prev");
        const nextButton = carousel.querySelector(".next");

        if (prevButton && nextButton) {
            prevButton.addEventListener("click", showPrevSlide);
            nextButton.addEventListener("click", showNextSlide);
        }

        // Initially show the first slide
        showSlide(currentIndex);
    });
});
