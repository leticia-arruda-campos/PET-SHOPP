let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Remover a classe "active" de todos os slides
    slides[currentIndex].classList.remove('active');

    // Calcular o novo índice
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;

    // Adicionar a classe "active" no novo slide
    slides[currentIndex].classList.add('active');

    // Atualizar o carrossel
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

