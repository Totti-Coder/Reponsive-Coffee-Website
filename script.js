// Seleccionamos los botones por ID
const openButton = document.querySelector("#menu-open-btn");
const closeButton = document.querySelector("#menu-close-btn");

// Abrir menú móvil
openButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

// Cerrar menú móvil
closeButton.addEventListener("click", () => openButton.click());

const swiper = new Swiper('.slider-wrapper', {
  slidesPerView: 1,     // Solo 1 slide visible
  spaceBetween: 30,     // Espacio entre slides
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});