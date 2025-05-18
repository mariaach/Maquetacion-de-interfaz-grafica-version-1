const loginForm = document.getElementById("loginForm");
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrarModal");

// Mostrar el modal al enviar el formulario
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir envío real
  modal.style.display = "flex";
});

// Cerrar el modal al hacer clic en el botón
cerrarModal.addEventListener("click", function () {
  modal.style.display = "none";
  loginForm.reset(); // Limpiar formulario al cerrar
});

// Cerrar si se hace clic fuera del contenido del modal
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    loginForm.reset();
  }
});

// Limpiar formulario al volver a la pestaña, solo si el modal no está visible
document.addEventListener("visibilitychange", function () {
  if (
    document.visibilityState === "visible" &&
    modal.style.display === "none"
  ) {
    loginForm.reset();
  }
});
