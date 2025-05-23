// Seleccionamos los botones por ID
const openButton = document.querySelector("#menu-open-button");
const closeButton = document.querySelector("#menu-close-button");

// Abrir menú móvil
openButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

// Cerrar menú móvil
closeButton.addEventListener("click", () => openButton.click());
