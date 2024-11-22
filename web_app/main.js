// Informacion
const managersTraje = [
  "/traje/ancelotti.png",
  "/traje/simeone.png",
  "/traje/flick.png",
  "/traje/mourinho.png",
  "/traje/enrique.png",
  "/traje/guardiola.png",
  "/traje/xabi.png",
];
const managersRemera = [
  "/remera/ancelotti.png",
  "/remera/simeone.png",
  "/remera/flick.png",
  "/remera/mourinho.png",
  "/remera/enrique.png",
  "/remera/guardiola.png",
  "/remera/xabi.png",
];

// POR, DFC, LD, LI, MC, MCO, EI, ED, DC

// Secciones
const introduccion = document.getElementById("introduccion");
const crearEquipo = document.getElementById("crearEquipo");
const seccionManager = document.getElementById("seccionManager");
const avatarContainer = document.getElementById("avatarContainer");
const seccionEquipo = document.getElementById("seccionEquipo");
const elegirFormacion = document.getElementById("elegirFormacion");
const elegirJugadores = document.getElementById("elegirJugadores");
const modalOverlay = document.getElementById("modalOverlay");
const contenidoModal = document.getElementById("contenidoModal");

const jugadores = document.querySelectorAll(".cancha div div");

// Inputs y errores
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const edadInput = document.getElementById('edad');
const vestimentaInputs = document.getElementsByName('vestimenta');

const errorNombre = document.getElementById('errorNombre');
const errorApellido = document.getElementById('errorApellido');
const errorEdad = document.getElementById('errorEdad');
const errorVestimenta = document.getElementById('errorVestimenta');

const btnEmpezar = document.getElementById("btnEmpezar");
btnEmpezar.addEventListener("click", function () {
  introduccion.style.display = "none";
  crearEquipo.style.display = "flex";
});

let managerValido = false;
let managerInfo = [];

const btnManager = document.getElementById("btnManager");
btnManager.addEventListener("click", function () {
  validarManager();
  if (managerValido) {
    guardarManagerInfo();
    seccionManager.style.display = "none";
    seccionEquipo.style.display = "flex";
  }
});

const elegirAvatar = document.getElementById("elegirAvatar");
elegirAvatar.addEventListener("click", function () {
  errorVestimenta.style.display = 'none';
  errorVestimenta.textContent = '';

  let opcionSeleccionada = false;

  for (let opcion = 0; opcion < vestimentaInputs.length; opcion++) {
    if (vestimentaInputs[opcion].checked) {
      opcionSeleccionada = true;
      break;
    }
  }

  if (!opcionSeleccionada) {
    errorVestimenta.style.display = 'block';
    errorVestimenta.textContent = 'Debe seleccionar una vestimenta';
  } else {
    const vestimentaSeleccionada = document.querySelector('input[name="vestimenta"]:checked').value;
    let managersArray = vestimentaSeleccionada === 'traje' ? managersTraje : managersRemera;

    let managersSeleccionados = [];
    while (managersSeleccionados.length < 5) {
      const indiceRandom = Math.floor(Math.random() * managersArray.length);
      if (!managersSeleccionados.includes(managersArray[indiceRandom])) {
        managersSeleccionados.push(managersArray[indiceRandom]);
      }
    }

    abrirModalManager(managersSeleccionados);
  }
});

function validarManager() {
  managerValido = true;

  errorNombre.style.display = 'none';
  errorApellido.style.display = 'none';
  errorEdad.style.display = 'none';
  errorVestimenta.style.display = 'none';
  errorNombre.textContent = '';
  errorApellido.textContent = '';
  errorEdad.textContent = '';
  errorVestimenta.textContent = '';

  // Validar nombre
  const nombre = nombreInput.value;
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
  const apellido = apellidoInput.value;
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
  const edad = edadInput.value;
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
  let opcionSeleccionada = false;

  for (let opcion = 0; opcion < vestimentaInputs.length; opcion++) {
    if (vestimentaInputs[opcion].checked) {
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

function guardarManagerInfo() {
  const nombre = nombreInput.value;
  const apellido = apellidoInput.value;
  const edad = edadInput.value;
  const vestimenta = document.querySelector('input[name="vestimenta"]:checked').value;

  managerInfo[0] = ['nombre', nombre];
  managerInfo[1] = ['apellido', apellido];
  managerInfo[2] = ['edad', edad];
  managerInfo[3] = ['vestimenta', vestimenta];
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

// jugadores.forEach(jugador => {
//   jugador.addEventListener("click", function () {
//     abrirModal();
//   });
// })

function abrirModalManager(managersSeleccionados) {
  modalOverlay.style.display = "block";
  contenidoModal.innerHTML = '';
  if (managersSeleccionados) {
    managersSeleccionados.forEach(manager => {
      const buttonManager = document.createElement('button');
      const img = document.createElement('img');
      img.src = `/web_app/imagenes/${manager}`;
      img.alt = 'Manager';
      buttonManager.appendChild(img);
      buttonManager.addEventListener('click', function () {
        managerInfo[4] = ['avatar', manager];
        cerrarModal();
        elegirAvatar.style.display = 'none';
        const parrafoAvatar = document.createElement('p');
        parrafoAvatar.textContent = 'Manager seleccionado';
        avatarContainer.appendChild(parrafoAvatar);
      });
      contenidoModal.appendChild(buttonManager);
    });
  }
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