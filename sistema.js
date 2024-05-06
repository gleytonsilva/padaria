document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-slide");
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = "block";
        } else {
          slide.style.display = "none";
        }
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    document.querySelector(".next-button").addEventListener("click", nextSlide);
    document.querySelector(".prev-button").addEventListener("click", prevSlide);
  
    // Função para avançar automaticamente os slides a cada 3 segundos
    const slideInterval = setInterval(nextSlide, 3000);
  
    // Pausar a troca automática quando o mouse estiver sobre os slides
    slides.forEach(slide => {
      slide.addEventListener("mouseenter", () => {
        clearInterval(slideInterval);
      });
      slide.addEventListener("mouseleave", () => {
        slideInterval = setInterval(nextSlide, 5000);
      });
    });
  
    showSlide(currentSlide);
  });
  