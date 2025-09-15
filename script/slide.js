let indice = 0;
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;

function mudarSlide(direcao) {
  indice = (indice + direcao + totalSlides) % totalSlides;
  slides.style.transform = `translateX(${-indice * 100}%)`;
}

// Troca automática a cada 3 segundos
setInterval(() => mudarSlide(1), 3000);
