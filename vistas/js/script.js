document.addEventListener('DOMContentLoaded', function() {
  var myCarousel = document.querySelector('#carouselExample');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 4000 // Tiempo en milisegundos (4 segundos)
  });
});
