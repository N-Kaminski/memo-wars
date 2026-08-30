//Variables
let tarjetasDestapadas = 0,
  movimiento = 0,
  aciertos = 0,
  timer = 0;
let tarjeta1 = null,
  tarjeta2 = null,
  primerResultado = null,
  segundoResultado = null,
  tiempoF = null;
let temporizador = false;
let nombreJugador = "";

//Apuntar a Doc HTML
let mostrarMovimientos = document.getElementById("movimientos");
let mostrarAciertos = document.getElementById("aciertos");
let mostrarTiempo = document.getElementById("tiempo");

// Generar Cartas Aleatorios
let imagen = [
  "img/anakin.jpg",
  "img/anakin.jpg",
  "img/azoka.jpg",
  "img/azoka.jpg",
  "img/artu.jpg",
  "img/artu.jpg",
  "img/clone.jpg",
  "img/clone.jpg",
  "img/darkVader.jpg",
  "img/darkVader.jpg",
  "img/leia.jpg",
  "img/leia.jpg",
  "img/obi.jpg",
  "img/obi.jpg",
  "img/yoda.jpg",
  "img/yoda.jpg",
];
let imagenes = imagen.sort(() => {
  return Math.random() - 0.5;
});

//Funcion tiempo
function contarTiempo() {
  tiempoF = setInterval(() => {
    timer++;
    mostrarTiempo.innerHTML = `Tiempo: ${timer}`;
    if (aciertos == 8) {
      clearInterval(tiempoF);
      mostrarTiempo.innerHTML = `Tiempo: ${timer} ⌛`;
    }
  }, 1000);
}

//Funcion Principal
function destapar(id) {
  if (temporizador == false) {
    contarTiempo();
    temporizador = true;
  }

  tarjetasDestapadas++;

  if (tarjetasDestapadas == 1) {
    // Mostrar 1° numero
    tarjeta1 = document.getElementById(id);
    primerResultado = imagenes[id];
    tarjeta1.innerHTML = `<img src="${primerResultado}" alt="imagen">`;

    //Desactivar 1° boton
    tarjeta1.disabled = true;
  } else if (tarjetasDestapadas == 2) {
    //Mostrar 2° numero
    tarjeta2 = document.getElementById(id);
    segundoResultado = imagenes[id];
    tarjeta2.innerHTML = `<img src="${segundoResultado}" alt="imagen">`;

    //Desactivar 2° boton
    tarjeta2.disabled = true;

    //Incrementa movimientos
    movimiento++;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimiento}`;

    if (primerResultado == segundoResultado) {
      tarjetasDestapadas = 0;

      //Aumento aciertos
      aciertos++;
      mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

      if (aciertos == 8) {
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🥳`;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimiento} 😎`;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} ⌛`;

        Swal.fire({
          title: "¡Felicitaciones!",
          text: "Ganaste el juego!",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          location.reload();
        });
      }
    } else {
      //mostrar momentamente valores y volver a tapar
      setTimeout(() => {
        tarjeta1.innerHTML = " ";
        tarjeta2.innerHTML = " ";
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
        tarjetasDestapadas = 0;
      }, 800);
    }
  }
}
