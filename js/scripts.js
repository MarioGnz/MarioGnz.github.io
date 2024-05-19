document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.animate__animated');

    function animateOnScroll() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (elementPosition < viewportHeight) {
                element.classList.add('animate__fadeInUp');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
});