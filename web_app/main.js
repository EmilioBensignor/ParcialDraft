// Secciones
const introduccion = document.getElementById("introduccion");
const seccionManager = document.getElementById("seccionManager");
const seccionEquipo = document.getElementById("seccionEquipo");
const pasoUno = document.getElementById("pasoUno");
const pasoDos = document.getElementById("pasoDos");


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
  window.location.href = "/web_app/misEquipos.html";
}