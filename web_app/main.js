// Secciones
const introduccion = document.getElementById("introduccion");
const seccionManager = document.getElementById("seccionManager");
const seccionEquipo = document.getElementById("seccionEquipo");
const pasoUno = document.getElementById("pasoUno");
const pasoDos = document.getElementById("pasoDos");
const modalOverlay = document.getElementById("modalOverlay");

const jugadores = document.querySelectorAll(".cancha div div");


// Boton
const btnEmpezar = document.getElementById("btnEmpezar");
btnEmpezar.addEventListener("click", empezar);

const btnManager = document.getElementById("btnManager");
btnManager.addEventListener("click", crearManager);

const confirmarFormacion = document.getElementById("confirmarFormacion");
confirmarFormacion.addEventListener("click", pasoDosFormacion);

const btnEquipo = document.getElementById("btnEquipo");
btnEquipo.addEventListener("click", terminarEquipo);


// Funciones
function empezar() {
  introduccion.style.display = "none";
  seccionManager.style.display = "flex";
}

function crearManager(event) {
  event.preventDefault();
  // Valiacion de formulario
  seccionManager.style.display = "none";
  seccionEquipo.style.display = "flex";
}

function pasoDosFormacion() {
  pasoUno.style.display = "none";
  pasoDos.style.display = "flex";
}

function terminarEquipo(event) {
  event.preventDefault();
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