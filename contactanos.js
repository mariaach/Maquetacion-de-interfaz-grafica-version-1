const formulario = document.getElementById("formularioPQR");
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrarModal");

// Mostrar modal al enviar el formulario
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  modal.style.display = "flex";
});

// Cerrar modal al hacer clic en el botón
cerrarModal.addEventListener("click", function () {
  modal.style.display = "none";
  formulario.reset(); // Limpiar solo cuando se cierra correctamente
});

// También cerrar al hacer clic fuera del contenido
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    formulario.reset();
  }
});

// Limpiar formulario al volver a la pestaña SOLO si el modal no está visible
document.addEventListener("visibilitychange", function () {
  if (
    document.visibilityState === "visible" &&
    modal.style.display === "none"
  ) {
    formulario.reset();
  }
});
