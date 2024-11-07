// Opciones de jugada
const opciones = ["piedra", "papel", "tijera"];

// Variables de puntos
let puntosUsuario = 0;
let puntosOrdenador = 0;


// Capturar elementos del DOM
const botonJugada = document.querySelectorAll(".boton-jugada");
const resultadosDiv = document.getElementById("resultados");
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById("contador-ordenador");

// Función para generar jugada aleatoria del ordenador
function jugadaAleatoria() {
  const valorAleatorio = Math.floor(Math.random() * opciones.length);
  return opciones[valorAleatorio];
}

// Función para obtener el resultado de una ronda
function obtenerResultado(jugadaUsuario, jugadaPc) {
  if (jugadaUsuario === jugadaPc) {
    return "¡Empate! Probemos de nuevo";
  } else if (
    (jugadaUsuario === "papel" && jugadaPc === "piedra") ||
    (jugadaUsuario === "tijera" && jugadaPc === "papel") ||
    (jugadaUsuario === "piedra" && jugadaPc === "tijera")
  ) {
    puntosUsuario++;
    return "¡FELICIDADES! Has ganado esta ronda.";
  } else {
    puntosOrdenador++;
    return "¡LO SIENTO! Has perdido esta vez, vuelve a intentarlo.";
  }
}

// Función para mostrar el resultado en el HTML
function mostrarResultado(mensaje) {
  resultadosDiv.textContent = mensaje;
}

// Función para actualizar la puntuación en el HTML
function actualizarPuntuacion() {
  contadorUsuario.textContent = "Tus puntos: " + puntosUsuario;
  contadorOrdenador.textContent = "Puntos ordenador: " + puntosOrdenador;
}

// Evento para cada botón de jugada
botonJugada.forEach(boton => {
  boton.addEventListener("click", () => {
    const jugadaUsuario = boton.dataset.jugada;
    const jugadaOrdenador = jugadaAleatoria();
    const resultado = obtenerResultado(jugadaUsuario, jugadaOrdenador);
    
    mostrarResultado("Tú elegiste: " + jugadaUsuario + " . El ordenador eligió: " + jugadaOrdenador + " . " + resultado);
    actualizarPuntuacion();
  });
});

