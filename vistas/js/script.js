// document.addEventListener('DOMContentLoaded', function() {
//   var myCarousel = document.querySelector('#carouselExample');
//   var carousel = new bootstrap.Carousel(myCarousel, {
//     interval: 4000 // Tiempo en milisegundos (4 segundos)
//   });
// });
// Función para generar las chispas
function generarChispas(event) {
  const boton = event.currentTarget;
  const rect = boton.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Crear muchas chispas (50 en este caso)
  for (let i = 0; i < 50; i++) {
    const chispa = document.createElement("span");
    chispa.classList.add("chispa");

    // Posición inicial de la chispa
    chispa.style.left = `${x}px`;
    chispa.style.top = `${y}px`;

    // Movimiento aleatorio en direcciones amplias
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 100; // Distancia máxima de las chispas
    chispa.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    chispa.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

    // Tamaño aleatorio para más dinamismo
    const size = Math.random() * 20 + 10; // Entre 10px y 30px
    chispa.style.width = `${size}px`;
    chispa.style.height = `${size}px`;

    // Agregar chispa al botón
    boton.appendChild(chispa);

    // Eliminar chispa después de la animación
    chispa.addEventListener("animationend", () => chispa.remove());
  }
}

// Función para redireccionar a galeria.html después del clic
function redireccionar(event) {
  // Generar chispas
  generarChispas(event);

  // Redireccionar después de un breve tiempo (esperar por el efecto)
  setTimeout(() => {
    window.location.href = "galeria.html"; // Redirigir al archivo local galeria.html
  }, 800); // Tiempo suficiente para ver el efecto
}
