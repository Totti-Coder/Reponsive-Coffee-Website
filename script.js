// Seleccionamos los botones por ID
const openButton = document.querySelector("#menu-open-btn");
const closeButton = document.querySelector("#menu-close-btn");

// Abrir menú móvil
openButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

// Cerrar menú móvil
closeButton.addEventListener("click", () => openButton.click());
