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
const formEquipoEstrella = document.getElementById("formEquipoEstrella");
const seccionManager = document.getElementById("seccionManager");
const avatarContainer = document.getElementById("avatarContainer");
const seccionEquipo = document.getElementById("seccionEquipo");
const elegirFormacion = document.getElementById("elegirFormacion");
const elegirJugadores = document.getElementById("elegirJugadores");

const modalOverlay = document.getElementById("modalOverlay");
const contenidoModal = document.getElementById("contenidoModal");

const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const edadInput = document.getElementById("edad");
const vestimentaInputs = document.getElementsByName("vestimenta");

const errorNombre = document.getElementById("errorNombre");
const errorApellido = document.getElementById("errorApellido");
const errorEdad = document.getElementById("errorEdad");
const errorVestimenta = document.getElementById("errorVestimenta");
const errorAvatar = document.getElementById("errorAvatar");

let misEquipos = [];

function paginaCrearEquipo() {
  window.location.reload();
}

const misEquiposContainer = document.getElementById("misEquiposContainer");
const misEquiposEstrellas = document.getElementById("misEquiposEstrellas");

function paginaMisEquipos() {
  introduccion.style.display = "none";
  crearEquipo.style.display = "none";
  seccionManager.style.display = "none";
  seccionEquipo.style.display = "none";
  dibujarMisEquipos();
}

function dibujarMisEquipos() {
  misEquiposContainer.style.display = 'flex';
  misEquipos = JSON.parse(localStorage.getItem('misEquipos')) || [];

  misEquiposEstrellas.innerHTML = '';

  const sinEquipos = document.createElement('p');
  sinEquipos.textContent = 'No hay equipos creados';
  sinEquipos.style.textAlign = 'center';

  if (misEquipos.length === 0) {
    misEquiposEstrellas.appendChild(sinEquipos);
  } else {
    misEquipos.forEach(equipo => {
      console.log(equipo);
      const divEquipo = document.createElement('div');
      divEquipo.classList.add('equipoEstrella');
      divEquipo.innerHTML = `
      <div class="acciones">
        <button id="btnEditarEquipo">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m10.756 6.17l7.07 7.071l-7.173 7.174a2 2 0 0 1-1.238.578L9.239 21H4.006a1.01 1.01 0 0 1-1.004-.9l-.006-.11v-5.233a2 2 0 0 1 .467-1.284l.12-.13l7.173-7.174Zm3.14-3.14a2 2 0 0 1 2.701-.117l.127.117l4.243 4.243a2 2 0 0 1 .117 2.7l-.117.128l-1.726 1.726l-7.07-7.071z"/></g></svg>
        </button>
        <button id="btnBorrarEquipo">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071l-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07L4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2zM9 10a1 1 0 0 0-.993.883L8 11v6a1 1 0 0 0 1.993.117L10 17v-6a1 1 0 0 0-1-1m6 0a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1m-.72-6H9.72l-.333 1h5.226z"/></g></svg>
        </button>
      </div>
      <h3>${equipo[2][1][0]}</h3>
      <div class="detalleEstrella">
        <p><strong>Valoración:</strong> ${equipo[2][1][1]} 🌟</p>
        <p><strong>Liga:</strong> ${equipo[2][1][2]}</p>
      </div>
      <div class="managerJugador">
        <div class="managerEstrella">
        <p><strong>Dirigido por: </strong>${equipo[0][1][0][1]} ${equipo[0][1][1][1]}</p>
        <img src="web_app/imagenes${equipo[0][1][4][1]}" alt="Manager">
        </div>
        <div class="jugadorEstrella">
        <p><strong>Jugador destacado</strong></p>
          <img src="web_app/imagenes/jugadores/${equipo[1][1][Object.keys(equipo[1][1])[Math.floor(Math.random() * 11)]]}" alt="Jugador Destacado">
        </div>
      </div>
    `;
      misEquiposEstrellas.appendChild(divEquipo);

      const btnEditarEquipo = divEquipo.querySelector('#btnEditarEquipo');
      btnEditarEquipo.addEventListener('click', editarEquipo);

      const btnBorrarEquipo = divEquipo.querySelector('#btnBorrarEquipo');
      btnBorrarEquipo.addEventListener('click', borrarEquipo);
    });
  }
}

const btnEmpezar = document.getElementById("btnEmpezar");
btnEmpezar.addEventListener("click", function () {
  introduccion.style.display = "none";
  crearEquipo.style.display = "flex";
  seccionManager.style.display = "flex";
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
      img.src = `web_app/imagenes/${manager}`;
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
    errorNombre.textContent = 'El nombre no puede ser un numero';
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
    errorApellido.textContent = 'El apellido no puede ser un numero';
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
let equipo = [];

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
let jugadoresSeleccionadosGlobal = [];

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

const jugadoresPorPosicion = [
  ["POR", porteros],
  ["DFCD", defensoresCentrales],
  ["DFCI", defensoresCentrales],
  ["LD", lateralesDerechos],
  ["LI", lateralesIzquierdos],
  ["MDO", mediocampistasCentrales],
  ["MCI", mediocampistasCentrales],
  ["MCD", mediocampistasCentrales],
  ["MC", mediocampistasCentrales],
  ["MCO", mediocampistasCentrales],
  ["ED", extremosDerechos],
  ["EI", extremosIzquierdos],
  ["DC", delanterosCentrales],
  ["DCI", delanterosCentrales],
  ["DCD", delanterosCentrales],
];

function abrirModalJugador(posicion) {
  modalOverlay.style.display = "block";
  contenidoModal.innerHTML = '';

  const jugadoresArray = jugadoresPorPosicion.find(item => item[0] === posicion)[1];
  const jugadoresSeleccionados = [];
  while (jugadoresSeleccionados.length < 5) {
    const indiceRandom = Math.floor(Math.random() * jugadoresArray.length);
    const jugadorSeleccionado = jugadoresArray[indiceRandom];
    if (!jugadoresSeleccionados.includes(jugadorSeleccionado) && !jugadoresSeleccionadosGlobal.includes(jugadorSeleccionado)) {
      jugadoresSeleccionados.push(jugadorSeleccionado);
    }
  }

  jugadoresSeleccionados.forEach(jugador => {
    const buttonJugador = document.createElement('button');
    const img = document.createElement('img');
    img.src = `web_app/imagenes/jugadores/${jugador}`;
    img.alt = 'Jugador';
    buttonJugador.appendChild(img);
    buttonJugador.addEventListener('click', function () {
      const botonPosicion = document.querySelector(`#${posicion.toLowerCase()} button`);
      botonPosicion.style.display = 'none';
      const imgSeleccionada = document.createElement('img');
      imgSeleccionada.src = `web_app/imagenes/jugadores/${jugador}`;
      imgSeleccionada.alt = 'Jugador Seleccionado';
      const contenedorJugador = document.querySelector(`#${posicion.toLowerCase()}`);
      contenedorJugador.appendChild(imgSeleccionada);
      contenedorJugador.style.pointerEvents = 'none';
      equipo[posicion] = jugador;
      jugadoresSeleccionadosGlobal.push(jugador);

      cerrarModal();
    });
    contenidoModal.appendChild(buttonJugador);
  });
}

const btnEquipo = document.getElementById("btnEquipo");
btnEquipo.addEventListener("click", terminarEquipo);

let equipoEstrella = [];

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

  abrirModalDetalle();
}

function abrirModalDetalle() {
  modalOverlay.style.display = "block";
  contenidoModal.innerHTML = '';

  contenidoModal.innerHTML = `
    <form class="formDetalle">
      <h3>¡Termina de personalizar tu Equipo Estrella!</h3>
      <div class="filaForm">
        <div>
          <label for="nombreEquipo">Nombre del equipo</label>
          <input type="text" id="nombreEquipo">
          <p id="errorNombreEquipo" class="error"></p>
        </div>
        <div>
          <p>¿Cuántas estrellas le darías a tu equipo?</p>
          <div class="estrellasEquipo">
            <div>
              <input type="radio" name="valoracion" id="uno" value="1">
              <label for="uno">1</label>
            </div>
            <div>
              <input type="radio" name="valoracion" id="dos" value="2">
              <label for="dos">2</label>
            </div>
            <div>
              <input type="radio" name="valoracion" id="tres" value="3">
              <label for="tres">3</label>
            </div>
            <div>
              <input type="radio" name="valoracion" id="cuatro" value="4">
              <label for="cuatro">4</label>
            </div>
            <div>
              <input type="radio" name="valoracion" id="cinco" value="5">
              <label for="cinco">5</label>
            </div>
          </div>
          <p id="errorValoracionEquipo" class="error"></p>
        </div>
      </div>
      <div class="filaForm">
        <div class="formacionContainer">
          <label for="ligaEquipo">Liga profesional</label>
          <select id="ligaEquipo">
            <option value="">Seleccione</option>
            <option value="premier">Premier League</option>
            <option value="bundesliga">Bundesliga</option>
            <option value="seria">Serie A</option>
            <option value="ligue1">Ligue 1</option>
            <option value="laliga">LaLiga</option>
          </select>
          <p id="errorligaEquipo" class="error"></p>
        </div>
        <button id="guardarDetalle" class="botonPrimario">Guardar Equipo</button>
      </div>
    </form>
  `;

  const guardarDetalle = document.getElementById("guardarDetalle");
  guardarDetalle.addEventListener("click", guardarEquipoEstrella);
}

function guardarEquipoEstrella(event) {
  event.preventDefault();

  const nombreEquipo = document.getElementById('nombreEquipo').value;
  const valoracionEquipoElement = document.querySelector('input[name="valoracion"]:checked');
  const valoracionEquipo = valoracionEquipoElement ? valoracionEquipoElement.value : null;
  const ligaEquipo = document.getElementById('ligaEquipo').value;

  const errorNombreEquipo = document.getElementById('errorNombreEquipo');
  const errorValoracionEquipo = document.getElementById('errorValoracionEquipo');
  const errorligaEquipo = document.getElementById('errorligaEquipo');

  errorNombreEquipo.style.display = 'none';
  errorValoracionEquipo.style.display = 'none';
  errorligaEquipo.style.display = 'none';
  errorNombreEquipo.textContent = '';
  errorValoracionEquipo.textContent = '';
  errorligaEquipo.textContent = '';

  let detalleValido = true;

  if (!nombreEquipo) {
    errorNombreEquipo.style.display = 'block';
    errorNombreEquipo.textContent = 'El nombre del equipo es requerido';
    detalleValido = false;
  } else if (nombreEquipo.length < 2) {
    errorNombreEquipo.style.display = 'block';
    errorNombreEquipo.textContent = 'El nombre del equipo debe tener al menos 2 caracteres';
    detalleValido = false;
  } else if (nombreEquipo.length > 20) {
    errorNombreEquipo.style.display = 'block';
    errorNombreEquipo.textContent = 'El nombre del equipo debe tener menos de 20 caracteres';
    detalleValido = false;
  }

  if (!valoracionEquipo) {
    errorValoracionEquipo.style.display = 'block';
    errorValoracionEquipo.textContent = 'La valoración del equipo es requerida';
    detalleValido = false;
  }

  if (!ligaEquipo) {
    errorligaEquipo.style.display = 'block';
    errorligaEquipo.textContent = 'La liga del equipo es requerida';
    detalleValido = false;
  }

  if (!detalleValido) {
    return;
  }

  equipoEstrella = [];
  equipoEstrella[0] = ['manager', managerInfo];
  equipoEstrella[1] = ['jugadores', Object.values(equipo)];
  equipoEstrella[2] = ['detalle', [nombreEquipo, valoracionEquipo, ligaEquipo]];

  jugadoresSeleccionadosGlobal = [];

  misEquipos = JSON.parse(localStorage.getItem('misEquipos')) || [];
  misEquipos.push(equipoEstrella);
  localStorage.setItem('misEquipos', JSON.stringify(misEquipos));
  formEquipoEstrella.reset();
  cerrarModal();
  paginaMisEquipos();
}

function editarEquipo() {
  const equipoIndex = misEquipos.findIndex(equipo => equipo[2][1][0] === this.parentElement.parentElement.querySelector('h3').textContent);
  if (equipoIndex !== -1) {
    const equipo = misEquipos[equipoIndex];

    modalOverlay.style.display = "block";

    contenidoModal.innerHTML = `
      <form class="formDetalle">
        <h3>Edita los detalles de tu Equipo Estrella</h3>
        <div class="filaForm">
          <div>
            <label for="nombreEquipo">Nombre del equipo</label>
            <input type="text" id="nombreEquipo" value="${equipo[2][1][0]}">
            <p id="errorNombreEquipo" class="error"></p>
          </div>
          <div>
            <p>¿Cuántas estrellas le darías a tu equipo?</p>
            <div class="estrellasEquipo">
              ${[1, 2, 3, 4, 5].map(star => `
                <div>
                  <input type="radio" name="valoracion" id="star${star}" value="${star}" ${equipo[2][1][1] == star ? 'checked' : ''}>
                  <label for="star${star}">${star}</label>
                </div>
              `).join('')}
            </div>
            <p id="errorValoracionEquipo" class="error"></p>
          </div>
        </div>
        <div class="filaForm">
          <div class="formacionContainer">
            <label for="ligaEquipo">Liga profesional</label>
            <select id="ligaEquipo">
              <option value="">Seleccione</option>
              <option value="premier" ${equipo[2][1][2] === 'premier' ? 'selected' : ''}>Premier League</option>
              <option value="bundesliga" ${equipo[2][1][2] === 'bundesliga' ? 'selected' : ''}>Bundesliga</option>
              <option value="seria" ${equipo[2][1][2] === 'seria' ? 'selected' : ''}>Serie A</option>
              <option value="ligue1" ${equipo[2][1][2] === 'ligue1' ? 'selected' : ''}>Ligue 1</option>
              <option value="laliga" ${equipo[2][1][2] === 'laliga' ? 'selected' : ''}>LaLiga</option>
            </select>
            <p id="errorligaEquipo" class="error"></p>
          </div>
          <button id="guardarDetalle" class="botonPrimario">Guardar Equipo</button>
        </div>
      </form>
    `;

    const guardarDetalle = document.getElementById("guardarDetalle");

    guardarDetalle.addEventListener("click", function (event) {
      event.preventDefault();
      
      const nombreEquipo = document.getElementById('nombreEquipo').value;
      const valoracionEquipo = document.querySelector('input[name="valoracion"]:checked');
      const ligaEquipo = document.getElementById('ligaEquipo').value;

      const errorNombreEquipo = document.getElementById('errorNombreEquipo');
      const errorValoracionEquipo = document.getElementById('errorValoracionEquipo');
      const errorligaEquipo = document.getElementById('errorligaEquipo');

      errorNombreEquipo.style.display = 'none';
      errorNombreEquipo.textContent = '';
      errorValoracionEquipo.style.display = 'none';
      errorValoracionEquipo.textContent = '';
      errorligaEquipo.style.display = 'none';
      errorligaEquipo.textContent = '';

      if (!nombreEquipo) {
        errorNombreEquipo.style.display = 'block';
        errorNombreEquipo.textContent = 'El nombre del equipo es requerido';
        return;
      } else if (nombreEquipo.length < 2) {
        errorNombreEquipo.style.display = 'block';
        errorNombreEquipo.textContent = 'El nombre del equipo debe tener al menos 2 caracteres';
        return;
      } else if (nombreEquipo.length > 20) {
        errorNombreEquipo.style.display = 'block';
        errorNombreEquipo.textContent = 'El nombre del equipo debe tener menos de 20 caracteres';
        return;
      }

      if (!valoracionEquipo) {
        errorValoracionEquipo.style.display = 'block';
        errorValoracionEquipo.textContent = 'La valoración del equipo es requerida';
        return;
      }

      if (!ligaEquipo) {
        errorligaEquipo.style.display = 'block';
        errorligaEquipo.textContent = 'La liga del equipo es requerida';
        return;
      }

      equipo[2][1][0] = nombreEquipo;
      equipo[2][1][1] = valoracionEquipo.value;
      equipo[2][1][2] = ligaEquipo;

      localStorage.setItem('misEquipos', JSON.stringify(misEquipos));

      cerrarModal();
      paginaMisEquipos();
    });
  }
}

function borrarEquipo() {
  modalOverlay.style.display = "block";
  contenidoModal.innerHTML = '';
  contenidoModal.classList.add('contenidoBorrar');

  contenidoModal.innerHTML = `
    <p>¿Estás seguro que deseas borrar este equipo?</p>
    <div>
      <button id="confirmarBorrar" class="botonPrimario botonRojo">Confirmar</button>
      <button id="cancelarBorrar" class="botonPrimario botonCancelar">Cancelar</button>
    </div>
  `;

  const confirmarBorrar = document.getElementById("confirmarBorrar");
  confirmarBorrar.addEventListener("click", function () {
    const equipoIndex = misEquipos.findIndex(equipo => equipo[2][1][0] === equipo[2][1][0]);
    if (equipoIndex !== -1) {
      misEquipos.splice(equipoIndex, 1);
      localStorage.setItem('misEquipos', JSON.stringify(misEquipos));
      paginaMisEquipos();
      cerrarModal();
    }
  });

  const cancelarBorrar = document.getElementById("cancelarBorrar");
  cancelarBorrar.addEventListener("click", cerrarModal);
}

function modalFooter() {
  modalOverlay.style.display = "block";
  contenidoModal.innerHTML = '';

  contenidoModal.innerHTML = `
    <p><span>Nombre de la carrera:</span> Diseño Multimedial</p>
    <p><span>Nombre de la materia:</span> Diseño y Programación Web 1</p>
    <p><span>Año:</span> 2024</p>
    <p><span>Cuatrimestre:</span> 3ro</p>
    <p><span>Sigla de la comisión:</span> DMM3AP</p>
    <p><span>Turno:</span> Mañana</p>
    <p><span>Apellido y Nombre Alumno:</span> Bernath Lucas</p>
    <p><span>Apellido y Nombre Docente:</span> Toyos Omar</p>
    <p><span>Instancia de Evaluación:</span> Segundo Parcial</p>
    <img class="fotoFooter" src="web_app/imagenes/foto-lucas-bernath.jpg" alt="Foto Lucas Bernath" />
  `;

  contenidoModal.classList.add('contenidoFooter');
}

function cerrarModal() {
  contenidoModal.className = '';
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