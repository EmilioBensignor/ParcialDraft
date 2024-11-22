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
btnEmpezar.addEventListener("click", function () {
  introduccion.style.display = "none";
  crearEquipo.style.display = "flex";
});

let managerValido = false;
const btnManager = document.getElementById("btnManager");
btnManager.addEventListener("click", function () {
  validarManager();
  if (managerValido) {
    seccionManager.style.display = "none";
    seccionEquipo.style.display = "flex";
  }
});

function validarManager() {
  managerValido = true;

  const errorNombre = document.getElementById('errorNombre');
  const errorApellido = document.getElementById('errorApellido');
  const errorEdad = document.getElementById('errorEdad');
  const errorVestimenta = document.getElementById('errorVestimenta');

  errorNombre.style.display = 'none';
  errorApellido.style.display = 'none';
  errorEdad.style.display = 'none';
  errorVestimenta.style.display = 'none';
  errorNombre.textContent = '';
  errorApellido.textContent = '';
  errorEdad.textContent = '';
  errorVestimenta.textContent = '';

  // Validar nombre
  const nombre = document.getElementById('nombre').value;
  if (!nombre) {
    managerValido = false;
    errorNombre.style.display = 'block';
    errorNombre.textContent = 'El nombre es requerido';
  } else if (nombre.length < 2) {
    managerValido = false;
    errorNombre.style.display = 'block';
    errorNombre.textContent = 'El nombre debe tener al menos 2 caracteres';
  } else if (nombre.length > 20) {
    managerValido = false;
    errorNombre.style.display = 'block';
    errorNombre.textContent = 'El nombre debe tener menos de 20 caracteres';
  }

  // Validar apellido
  const apellido = document.getElementById('apellido').value;
  if (!apellido) {
    managerValido = false;
    errorApellido.style.display = 'block';
    errorApellido.textContent = 'El apellido es requerido';
  } else if (apellido.length < 2) {
    managerValido = false;
    errorApellido.style.display = 'block';
    errorApellido.textContent = 'El apellido debe tener al menos 2 caracteres';
  } else if (apellido.length > 20) {
    managerValido = false;
    errorApellido.style.display = 'block';
    errorApellido.textContent = 'El apellido debe tener menos de 20 caracteres';
  }

  // Validar edad
  const edad = document.getElementById('edad').value;
  if (!edad) {
    managerValido = false;
    errorEdad.style.display = 'block';
    errorEdad.textContent = 'La edad es requerida';
  } else if (isNaN(edad)) {
    managerValido = false;
    errorEdad.style.display = 'block';
    errorEdad.textContent = 'La edad debe ser un número';
  } else if (edad <= 0 || edad > 100) {
    managerValido = false;
    errorEdad.style.display = 'block';
    errorEdad.textContent = 'La edad debe ser un número entre 0 y 100';
  }

  // Validar vestimenta
  const opciones = document.getElementsByName('vestimenta');

  let opcionSeleccionada = false;

  for (let opcion = 0; opcion < opciones.length; opcion++) {
    if (opciones[opcion].checked) {
      opcionSeleccionada = true;
      break;
    }
  }

  if (!opcionSeleccionada) {
    managerValido = false;
    errorVestimenta.style.display = 'block';
    errorVestimenta.textContent = 'Debe seleccionar una opción';
  }

  return managerValido;
}

const confirmarFormacion = document.getElementById("confirmarFormacion");
confirmarFormacion.addEventListener("click", validarManager);

const btnEquipo = document.getElementById("btnEquipo");
btnEquipo.addEventListener("click", terminarEquipo);


// Funciones
function terminarEquipo(event) {
  event.preventDefault();
  // Validar equipo
  // seccionEquipo.style.display = "none";
  // window.location.href = "web_app/misEquipos.html";
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

modalOverlay.addEventListener('click', function (event) {
  if (event.target === modalOverlay) {
    cerrarModal();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    cerrarModal();
  }
});