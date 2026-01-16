document.querySelectorAll('.progress-bar').forEach(bar => {
    const percentage = bar.getAttribute('data-percentage');
    const targetAngle = (percentage / 100) * 360;
    const fill = bar.querySelector('.progress-bar__circle-fill');
    let currentAngle = 0;

    fill.style.background = 'linear-gradient(135deg, #5900f5, #8a2be2, #5900f5)';
    fill.style.backgroundSize = '300% 300%';
    fill.style.animation = 'gradient-shift 3s ease infinite';

    const animateProgress = () => {
        if (currentAngle < targetAngle) {
            currentAngle += 2;
            fill.style.maskImage = `conic-gradient(
                rgba(0, 0, 0, 1) 0deg ${currentAngle}deg,
                transparent ${currentAngle}deg 360deg
            )`;
            requestAnimationFrame(animateProgress);
        }
    };

    animateProgress();
});
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.track__item');
    const dots = document.querySelectorAll('.pagination .dot');
    let currentSlide = 0;

    const updateSlides = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides(currentSlide);
    };

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides(currentSlide);
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlides(currentSlide);
        });
    });

    updateSlides(currentSlide);
});