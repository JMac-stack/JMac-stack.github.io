// Slideshow functions.

    // First Slide.

    var slideIndex = 0;
    showSlides(slideIndex);

    // Next / Pevious slides.

    function nextSlide(n) {
        showSlides(slideIndex += n);
    }

    // Dot select.

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // Showslides.

    function showSlides(n) {
        console.log(slideIndex);
        var slides = document.getElementsByClassName("myslides"); // Array for Slides.
        var dots = document.getElementsByClassName("dot");// Array for Dots.

        if (n > slides.length -1 ) {slideIndex = 0}; // Keeps index usable. Resets to 0.
        if (n < 0) {slideIndex = slides.length -1}; // Keeps index usable. Resets to 5.
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; // Hides all slides.
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", ""); // Removes class to change style.
        }
        slides[slideIndex].style.display = "block"; // Shows One slide.
        dots[slideIndex].className += " active"; // Adds class to change style.
        console.log(slideIndex);
    }

    // Open / Close Contact form.

    function openForm() {
        document.getElementById("myform").style.display = "block"
    }

    function closeForm() {
        document.getElementById("myform").style.display = "none"
    }

// Close contact form when clicked off.

    document.addEventListener("click", function(event) {
        if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".popup_button") && !event.target.closest(".contact")) {
            closeForm()
        }
    }, false )