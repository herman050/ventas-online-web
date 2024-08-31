// Selecciona el botón "Inicio"
const inicioButton = document.querySelector('a[href="#"]');

// Agrega un evento de clic al botón "Inicio"
inicioButton.addEventListener('click', (e) => {
  // Evita el comportamiento predeterminado del enlace
  e.preventDefault();

  // Selecciona el elemento "Conoce más"
  const conoceMasElement = document.getElementById('conoce-mas');

  // Desplaza la página hacia el elemento
  if (conoceMasElement) {
    const rect = conoceMasElement.getBoundingClientRect();
    window.scrollTo({
      top: rect.top + window.scrollY,
      behavior: 'smooth',
    });
  } else {
    console.error('No se encontró el elemento "Conoce más"');
  }
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlides() {
    // Oculta todas las diapositivas
    slides.forEach(slide => slide.style.display = 'none');
    
    // Incrementa el índice de la diapositiva
    slideIndex++;
    if (slideIndex > totalSlides) { slideIndex = 1; }
    
    // Muestra la diapositiva actual
    slides[slideIndex - 1].style.display = 'block';
    
    // Cambia la diapositiva automáticamente cada 5 segundos
    setTimeout(showSlides, 5000); // Intervalo de 5000 ms = 5 segundos
}

// Inicializa el slider
showSlides();

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > totalSlides) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = totalSlides; }
    showSlides();
}

document.addEventListener('DOMContentLoaded', function() {
    const buyButton = document.getElementById('buy-button');
    const cartLink = document.getElementById('cart-link');

    // La URL del carrito de compras (ajusta la URL según sea necesario)
    const cartUrl = 'https://tu-sitio-web.com/carrito';

    // Configura el enlace del botón de comprar para redirigir al carrito
    buyButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        window.location.href = cartUrl; // Redirigir al carrito
    });
});


// Agregamos un evento de click al enlace de contacto
document.addEventListener('DOMContentLoaded', function() {
  var enlaceContacto = document.querySelector('a[href="#contacto"]');
  enlaceContacto.addEventListener('click', function(event) {
    event.preventDefault();
    var contacto = document.getElementById('contacto');
    contacto.scrollIntoView({ behavior: 'smooth' });
  });
});


$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true, // esto hace que el slider sea infinito
    margin: 10,
    nav: true,
    items: 1, // mostrar un item a la vez
    autoplay: true, // autoplay del slider
    autoplayTimeout: 3000, // tiempo de espera entre cada item
    autoplayHoverPause: true, // pausa el autoplay cuando se pasa el mouse sobre el slider
  });
});


$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
});  