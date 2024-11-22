// Secciones
const introduccion = document.getElementById("introduccion");
const crearEquipo = document.getElementById("crearEquipo");
const seccionManager = document.getElementById("seccionManager");
const seccionEquipo = document.getElementById("seccionEquipo");
const elegirFormacion = document.getElementById("elegirFormacion");
const elegirJugadores = document.getElementById("elegirJugadores");
const modalOverlay = document.getElementById("modalOverlay");

const jugadores = document.querySelectorAll(".cancha div div");


// Boton
const btnEmpezar = document.getElementById("btnEmpezar");
btnEmpezar.addEventListener("click", function() {
  introduccion.style.display = "none";
  crearEquipo.style.display = "flex";
});

const btnManager = document.getElementById("btnManager");
btnManager.addEventListener("click", function() {
  // Validar manager
  seccionManager.style.display = "none";
  seccionEquipo.style.display = "flex";
});

const confirmarFormacion = document.getElementById("confirmarFormacion");
confirmarFormacion.addEventListener("click", function() {
  // Validar formacion
  elegirFormacion.style.display = "none";
  elegirJugadores.style.display = "flex";
});

const btnEquipo = document.getElementById("btnEquipo");
btnEquipo.addEventListener("click", terminarEquipo);


// Funciones
function terminarEquipo(event) {
  event.preventDefault();
  // Validar equipo
  seccionEquipo.style.display = "none";
  window.location.href = "web_app/misEquipos.html";
}

jugadores.forEach(jugador => {
  jugador.addEventListener("click", function () {
    abrirModal();
  });
})

function abrirModal() {
  modalOverlay.style.display = "block";
}

function cerrarModal() {
  modalOverlay.style.display = "none";
}

modalOverlay.addEventListener('click', function(event) {
  if (event.target === modalOverlay) {
    cerrarModal();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    cerrarModal();
  }
});