let indice = 0;
const slides = document.querySelectorAll('.slide');

function mostrarSlide(index) {
  slides.forEach(slide => slide.classList.remove('activo'));
  slides[index].classList.add('activo');
}

function siguienteSlide() {
  indice = (indice + 1) % slides.length;
  mostrarSlide(indice);
}

function anteriorSlide() {
  indice = (indice - 1 + slides.length) % slides.length;
  mostrarSlide(indice);
}

mostrarSlide(indice); // Mostrar el primer slide al cargar
