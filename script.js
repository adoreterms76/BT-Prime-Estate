document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        let slides = carousel.querySelectorAll(".slide");
        let currentIndex = 0;

        function showNextSlide() {
            slides[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add("active");
        }

        setInterval(showNextSlide, 3000);
    });
});
