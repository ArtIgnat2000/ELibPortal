let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showSlide(n) {
    // Сначала скрываем все слайды
    slides.forEach(slide => {
        slide.classList.remove('active', 'next', 'prev');
    });
    
    // Добавляем классы для анимации
    if (n === currentSlide + 1) {
        slides[currentSlide].classList.add('prev');
        slides[n].classList.add('next');
    } else if (n === currentSlide - 1) {
        slides[currentSlide].classList.add('next');
        slides[n].classList.add('prev');
    }
    
    setTimeout(() => {
        slides.forEach(slide => {
            slide.classList.remove('next', 'prev');
        });
        
        slides[n].classList.add('active');
        currentSlide = n;
    }, 50);
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Обработка клавиш
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

// Инициализация
showSlide(0);
