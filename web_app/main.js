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
const porteros = [
  "/POR/alisson.png",
  "/POR/buffon.png",
  "/POR/casillas.png",
  "/POR/courtois.png",
  "/POR/dibu.png",
  "/POR/ederson.png",
  "/POR/neuer.png",
  "/POR/oblak.png",
];
const defensoresCentrales = [
  "DFC/araujo.png",
  "DFC/bastoni.png",
  "DFC/maldini.png",
  "DFC/marquinhos.png",
  "DFC/puyol.png",
  "DFC/ruben.png",
  "DFC/rudiger.png",
  "DFC/vandijk.png",
];
const lateralesDerechos = [
  "LD/arnold.png",
  "LD/cafu.png",
  "LD/carvajal.png",
  "LD/hakimi.png",
  "LD/kimmich.png",
  "LD/kounde.png",
  "LD/walker.png",
  "LD/zanetti.png",
];
const lateralesIzquierdos = [
  "LI/cancelo.png",
  "LI/carlos.png",
  "LI/cole.png",
  "LI/davies.png",
  "LI/dimarco.png",
  "LI/grimaldo.png",
  "LI/hernandez.png",
  "LI/robertson.png",
];
const mediocampistasCentrales = [
  "MC/debruyne.png",
  "MC/dejong.png",
  "MC/matthaus.png",
  "MC/odegaard.png",
  "MC/pirlo.png",
  "MC/rodri.png",
  "MC/valverde.png",
  "MC/xavi.png",
];
const mediocampistasOfensivos = [
  "MCO/bellingham.png",
  "MCO/dybala.png",
  "MCO/fernandes.png",
  "MCO/musiala.png",
  "MCO/pele.png",
  "MCO/riquelme.png",
  "MCO/wirtz.png",
  "MCO/zidane.png",
];
const extremosDerechos = [
  "ED/dembele.png",
  "ED/figo.png",
  "ED/fouden.png",
  "ED/garrincha.png",
  "ED/messi.png",
  "ED/rodri.png",
  "ED/saka.png",
  "ED/salah.png",
];
const extremosIzquierdos = [
  "EI/diaz.png",
  "EI/grealish.png",
  "EI/kvaratskhelia.png",
  "EI/leao.png",
  "EI/neymar.png",
  "EI/rivaldo.png",
  "EI/ronaldinho.png",
  "EI/vini.png",
];
const delanterosCentrales = [
  "DC/cristiano.png",
  "DC/griezmann.png",
  "DC/haaland.png",
  "DC/henry.png",
  "DC/lautaro.png",
  "DC/lewandowski.png",
  "DC/mbappe.png",
  "DC/ronaldo.png",
];

const introduccion = document.getElementById("introduccion");
const crearEquipo = document.getElementById("crearEquipo");
const seccionManager = document.getElementById("seccionManager");
const avatarContainer = document.getElementById("avatarContainer");
const seccionEquipo = document.getElementById("seccionEquipo");
const elegirFormacion = document.getElementById("elegirFormacion");
const elegirJugadores = document.getElementById("elegirJugadores");
const modalOverlay = document.getElementById("modalOverlay");
const contenidoModal = document.getElementById("contenidoModal");

const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const edadInput = document.getElementById('edad');
const vestimentaInputs = document.getElementsByName('vestimenta');

const errorNombre = document.getElementById('errorNombre');
const errorApellido = document.getElementById('errorApellido');
const errorEdad = document.getElementById('errorEdad');
const errorVestimenta = document.getElementById('errorVestimenta');
const errorAvatar = document.getElementById('errorAvatar');

// Borrar
introduccion.style.display = "none";
crearEquipo.style.display = "flex";
seccionManager.style.display = "none";
seccionEquipo.style.display = "flex";

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
        errorAvatar.style.display = 'none';
        cerrarModal();
        elegirAvatar.style.display = 'none';
        const parrafoAvatar = document.createElement('p');
        parrafoAvatar.textContent = 'Manager seleccionado';
        parrafoAvatar.style.color = '#2C6A39';
        avatarContainer.appendChild(parrafoAvatar);
      });
      contenidoModal.appendChild(buttonManager);
    });
  }
}

function validarManager() {
  managerValido = true;

  errorNombre.style.display = 'none';
  errorApellido.style.display = 'none';
  errorEdad.style.display = 'none';
  errorVestimenta.style.display = 'none';
  errorAvatar.style.display = 'none';
  errorNombre.textContent = '';
  errorApellido.textContent = '';
  errorEdad.textContent = '';
  errorVestimenta.textContent = '';
  errorAvatar.textContent = '';

  const nombre = nombreInput.value;
  if (!nombre) {
    managerValido = false;
    errorNombre.style.display = 'block';
    errorNombre.textContent = 'El nombre es requerido';
  } else if (!isNaN(nombre)) {
    managerValido = false;
    errorNombre.style.display = 'block';
    errorNombre.textContent = 'El nombre solo puede contener letras';
  } else if (nombre.length < 2) {
    managerValido = false;
    errorNombre.style.display = 'block';
    errorNombre.textContent = 'El nombre debe tener al menos 2 caracteres';
  } else if (nombre.length > 20) {
    managerValido = false;
    errorNombre.style.display = 'block';
    errorNombre.textContent = 'El nombre debe tener menos de 20 caracteres';
  }

  const apellido = apellidoInput.value;
  if (!apellido) {
    managerValido = false;
    errorApellido.style.display = 'block';
    errorApellido.textContent = 'El apellido es requerido';
  } else if (!isNaN(apellido)) {
    managerValido = false;
    errorApellido.style.display = 'block';
    errorApellido.textContent = 'El apellido solo puede contener letras';
  } else if (apellido.length < 2) {
    managerValido = false;
    errorApellido.style.display = 'block';
    errorApellido.textContent = 'El apellido debe tener al menos 2 caracteres';
  } else if (apellido.length > 20) {
    managerValido = false;
    errorApellido.style.display = 'block';
    errorApellido.textContent = 'El apellido debe tener menos de 20 caracteres';
  }

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

  if (!managerInfo[4]) {
    managerValido = false;
    errorAvatar.style.display = 'block';
    errorAvatar.textContent = 'Debe seleccionar un avatar';
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

let formacionSeleccionada = '';
let equipo = {};

const confirmarFormacion = document.getElementById("confirmarFormacion");
confirmarFormacion.addEventListener("click", function () {
  formacionSeleccionada = document.getElementById('formacion').value;
  const errorFormacion = document.getElementById('errorFormacion');

  errorFormacion.style.display = 'none';
  errorFormacion.textContent = '';

  if (!formacionSeleccionada) {
    errorFormacion.style.display = 'block';
    errorFormacion.textContent = 'Debe seleccionar una formación';
    return;
  }
  elegirFormacion.style.display = "none";
  elegirJugadores.style.display = "flex";
  dibujarEquipo(formacionSeleccionada);
});

let jugadores = [];

function dibujarEquipo(formacion) {
  const cancha = document.getElementById('cancha');
  const mediocampo = document.getElementById('mediocampo');
  const delantera = document.getElementById('delantera');

  if (formacion === '1') {
    mediocampo.innerHTML = `
      <div id="mci" class="mediocampista">
        <button type="button">MC</button>
      </div>
      <div id="mco" class="mediocampistaOfensivo">
        <button type="button">MCO</button>
      </div>
      <div id="mcd" class="mediocampista">
        <button type="button">MC</button>
      </div>
    `;
    delantera.innerHTML = `
      <div id="ei" class="extremo">
        <button type="button">EI</button>
      </div>
      <div id="dc" class="delanteroCentral">
        <button type="button">DC</button>
      </div>
      <div id="ed" class="extremo">
        <button type="button">ED</button>
      </div>
    `;
  } else if (formacion === '2') {
    mediocampo.innerHTML = `
      <div id="ei" class="extremo">
        <button type="button">EI</button>
      </div>
      <div id="mci" class="mediocampista">
        <button type="button">MC</button>
      </div>
      <div id="mcd" class="mediocampista">
        <button type="button">MC</button>
      </div>
      <div id="ed" class="extremo">
        <button type="button">ED</button>
      </div>
    `;
    delantera.innerHTML = `
      <div id="dci" class="delanteroCentral">
        <button type="button">DC</button>
      </div>
      <div id="dcd" class="delanteroCentral">
        <button type="button">DC</button>
      </div>
    `;
    cancha.classList.add('formacionDos');
    delantera.classList.add('dosDelanteros');
  } else if (formacion === '3') {
    mediocampo.innerHTML = `
      <div id="mci" class="mediocampista">
        <button type="button">MC</button>
      </div>
      <div id="mdo" class="mediocampistaDefensivo">
        <button type="button">MC</button>
      </div>
      <div id="mcd" class="mediocampista">
        <button type="button">MC</button>
      </div>
    `;
    delantera.innerHTML = `
      <div id="dci" class="delanteroCentral">
        <button type="button">DC</button>
      </div>
      <div id="mco" class="falsoNueve">
        <button type="button">MCO</button>
      </div>
      <div id="dcd" class="delanteroCentral">
        <button type="button">DC</button>
      </div>
    `;
    cancha.classList.add('formacionTres');
  }

  jugadores = document.querySelectorAll(".cancha div div");
  jugadores.forEach(jugador => {
    jugador.addEventListener("click", function () {
      const posicion = jugador.getAttribute("id").toUpperCase();
      abrirModalJugador(posicion);
    });
  });
}

const jugadoresPorPosicion = {
  POR: porteros,
  DFCD: defensoresCentrales,
  DFCI: defensoresCentrales,
  LD: lateralesDerechos,
  LI: lateralesIzquierdos,
  MDO: mediocampistasCentrales,
  MCI: mediocampistasCentrales,
  MCD: mediocampistasCentrales,
  MC: mediocampistasCentrales,
  MCO: mediocampistasOfensivos,
  ED: extremosDerechos,
  EI: extremosIzquierdos,
  DC: delanterosCentrales,
  DCI: delanterosCentrales,
  DCD: delanterosCentrales,
};

function abrirModalJugador(posicion) {
  modalOverlay.style.display = "block";
  contenidoModal.innerHTML = '';

  const jugadoresArray = jugadoresPorPosicion[posicion];
  const jugadoresSeleccionados = [];
  while (jugadoresSeleccionados.length < 5) {
    const indiceRandom = Math.floor(Math.random() * jugadoresArray.length);
    if (!jugadoresSeleccionados.includes(jugadoresArray[indiceRandom])) {
      jugadoresSeleccionados.push(jugadoresArray[indiceRandom]);
    }
  }

  jugadoresSeleccionados.forEach(jugador => {
    const buttonJugador = document.createElement('button');
    const img = document.createElement('img');
    img.src = `/web_app/imagenes/jugadores/${jugador}`;
    img.alt = 'Jugador';
    buttonJugador.appendChild(img);
    buttonJugador.addEventListener('click', function () {
      const botonPosicion = document.querySelector(`#${posicion.toLowerCase()} button`);
      botonPosicion.style.display = 'none';
      const imgSeleccionada = document.createElement('img');
      imgSeleccionada.src = `/web_app/imagenes/jugadores/${jugador}`;
      imgSeleccionada.alt = 'Jugador Seleccionado';
      document.querySelector(`#${posicion.toLowerCase()}`).appendChild(imgSeleccionada);
      equipo[posicion] = jugador;

      cerrarModal();
    });
    contenidoModal.appendChild(buttonJugador);
  });
}

function seleccionarJugadoresAleatorios(array, cantidad) {
  const seleccionados = [];
  while (seleccionados.length < cantidad) {
    const indiceRandom = Math.floor(Math.random() * array.length);
    if (!seleccionados.includes(array[indiceRandom])) {
      seleccionados.push(array[indiceRandom]);
    }
  }
  return seleccionados;
}

const btnEquipo = document.getElementById("btnEquipo");
btnEquipo.addEventListener("click", terminarEquipo);

function terminarEquipo(event) {
  event.preventDefault();
  const errorEquipo = document.getElementById('errorEquipo');
  errorEquipo.style.display = 'none';
  errorEquipo.textContent = '';

  let jugadoresSeleccionados = 0;
  for (let posicion in equipo) {
    if (equipo[posicion]) {
      jugadoresSeleccionados++;
    }
  }

  if (jugadoresSeleccionados !== 11) {
    errorEquipo.style.display = 'block';
    errorEquipo.textContent = 'Debe seleccionar 11 jugadores';
    return;
  }

  console.log("Equipo completo", equipo);
  
  // seccionEquipo.style.display = "none";
  // window.location.href = "web_app/misEquipos.html";
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