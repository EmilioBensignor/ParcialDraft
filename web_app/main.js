// Secciones
const introduccion = document.getElementById("introduccion");
const seccionManager = document.getElementById("seccionManager");
const seccionEquipo = document.getElementById("seccionEquipo");


// Boton
const btnEmpezar = document.getElementById("btnEmpezar");
btnEmpezar.addEventListener("click", empezar);
const btnManager = document.getElementById("btnManager");
btnManager.addEventListener("click", crearManager);


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