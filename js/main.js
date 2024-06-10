document
  .querySelector(".contact-button")
  .addEventListener("click", function () {
    var message = encodeURIComponent(
      "🦦👋¡Hola! Lic Arely Hernandez. Quisiera más información sobre tus servicios de nutrición."
    );
    window.location.href = "https://wa.me/+524445122125?text=" + message;
  });

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    // Desplazamiento hacia abajo
    navbar.style.position = "fixed";
    navbar.style.top = "-100px"; // Ajusta el valor según el tamaño de tu navbar
    header.style.marginTop = "0px"; // Mueve el encabezado hacia arriba
    header.style.backgroundColor = "rgba(255, 255, 255, 0.7)"; // Fondo semi-transparente
    header.style.backdropFilter = "blur(5px)"; // Aplica un filtro de desenfoque
  } else {
    // Desplazamiento hacia arriba
    navbar.style.position = "static";
    navbar.style.top = "0";
    header.style.transition = "margin-top 0.5s ease";
    header.style.marginTop = "50px"; // Mueve el encabezado hacia abajo para ocupar el espacio del navbar
    header.style.backgroundColor = "rgba(255, 255, 255, 1)"; // Fondo semi-transparente
    header.style.backdropFilter = "blur(0px)"; // Aplica un filtro de desenfoque
  }

  // Verificar si el usuario ha llegado a la parte superior de la página
  if (currentScroll <= 0) {
    navbar.style.position = "static";
    navbar.style.top = "0";
    header.style.transition = "margin-top 0.5s ease";
    header.style.marginTop = "50px";
  }

  lastScrollTop = currentScroll;
});
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(function (item) {
    const button = item.querySelector(".accordion-button");

    button.addEventListener("click", function () {
      const collapse = item.querySelector(".accordion-collapse");

      // Si el panel está abierto, lo cerramos; si está cerrado, lo abrimos
      if (collapse.classList.contains("show")) {
        collapse.classList.remove("show");
        button.setAttribute("aria-expanded", "false");
      } else {
        collapse.classList.add("show");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
});
// Función para abrir el modal
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  document.body.classList.add("modal-open"); // Agrega la clase modal-open al body
}

// Función para cerrar el modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  document.body.classList.remove("modal-open"); // Remueve la clase modal-open del body
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Remueve la clase modal-open del body
  }
};
