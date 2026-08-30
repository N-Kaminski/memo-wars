This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
img/
  anakin.jpg
  artu.jpg
  azoka.jpg
  boba.jpg
  carta.jpg
  clone.jpg
  darkVader.jpg
  fondo.jpg
  leia.jpg
  obi.jpg
  yoda.jpg
index.html
main.js
README.md
style.css
```

# Files

## File: index.html
```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.26.25/dist/sweetalert2.min.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.26.25/dist/sweetalert2.all.min.js"></script>
    <script src="main.js" defer></script>
    <title>Memo Wars</title>
</head>

<body>
    <main>
        <section class="section1">
            <h1>Memo Wars</h1>
            <table>
                <tr>
                    <td><button id="0" aria-label="Carta 1" onclick="destapar(0)"></button></td>
                    <td><button id="1" aria-label="Carta 2" onclick="destapar(1)"></button></td>
                    <td><button id="2" aria-label="Carta 3" onclick="destapar(2)"></button></td>
                    <td><button id="3" aria-label="Carta 4" onclick="destapar(3)"></button></td>
                </tr>
                <tr>
                    <td><button id="4" aria-label="Carta 5" onclick="destapar(4)"></button></td>
                    <td><button id="5" aria-label="Carta 6" onclick="destapar(5)"></button></td>
                    <td><button id="6" aria-label="Carta 7" onclick="destapar(6)"></button></td>
                    <td><button id="7" aria-label="Carta 8" onclick="destapar(7)"></button></td>
                </tr>
                <tr>
                    <td><button id="8" aria-label="Carta 9" onclick="destapar(8)"></button></td>
                    <td><button id="9" aria-label="Carta 10" onclick="destapar(9)"></button></td>
                    <td><button id="10" aria-label="Carta 11" onclick="destapar(10)"></button></td>
                    <td><button id="11" aria-label="Carta 12" onclick="destapar(11)"></button></td>
                </tr>
                <tr>
                    <td><button id="12" aria-label="Carta 13" onclick="destapar(12)"></button></td>
                    <td><button id="13" aria-label="Carta 14" onclick="destapar(13)"></button></td>
                    <td><button id="14" aria-label="Carta 15" onclick="destapar(14)"></button></td>
                    <td><button id="15" aria-label="Carta 16" onclick="destapar(15)"></button></td>
                </tr>
            </table>
        </section>

        <section class="section2">
            <h2 id="aciertos" class="estadisticas">Aciertos: 0</h2>
            <h2 id="tiempo" class="estadisticas">Tiempo: 0</h2>
            <h2 id="movimientos" class="estadisticas">Movimientos: 0</h2>
        </section>
    </main>

    <footer>
        <p>Gracias al tutorial de <a href="https://codingtube.dev/"> CodigTube</a> </p>
    </footer>
</body>

</html>
```

## File: main.js
```javascript
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
```

## File: README.md
```markdown
# Memo Wars

Este proyecto es una práctica de un juego de memoria (Memotest) basado en la temática de Star Wars. El propósito de este proyecto fue aprender y practicar algunas de las tecnologías necesarias para la materia Web2, enfocándose en la implementación de un juego de memoria similar al requerido en el proyecto final de la asignatura, que debía tener una temática de Harry Potter y utilizar una API publica, y otras tecnologias como: node.js, JSON, y Express.

## Descripción

**Memo Wars** es un sencillo juego de memoria donde los jugadores deben encontrar pares de imágenes relacionadas con personajes de Star Wars. Este proyecto fue realizado siguiendo un tutorial de [CodigTube](https://codingtube.dev/), mis agradecimientos a él.

## Características

- **Interfaz de usuario simple:** Utiliza HTML y CSS para el diseño.
- **Lógica de juego en JavaScript:** Maneja la lógica del juego, como el emparejamiento de tarjetas, el seguimiento de movimientos, el tiempo y los aciertos.

## Archivos del Proyecto

### index.html

Este archivo contiene la estructura HTML del juego, incluyendo:

- Una tabla con 16 botones que representan las tarjetas del juego.
- Una sección para mostrar estadísticas como aciertos, tiempo y movimientos.
- Un pie de página con créditos al tutorial de CodigTube.

### style.css

Este archivo define los estilos del juego, incluyendo:

- Fondo con imagen temática.
- Estilo para las tarjetas, botones y la sección de estadísticas.
- Estilos de texto y layout general.

### main.js

Este archivo contiene la lógica del juego, que incluye:

- Declaración de variables para seguimiento de tarjetas destapadas, movimientos, aciertos y tiempo.
- Funciones para contar el tiempo, destapar tarjetas y manejar la lógica de emparejamiento.
- Uso de la biblioteca SweetAlert2 para mostrar mensajes de victoria.

## Cómo Jugar

1. **Iniciar el juego:** Al cargar la página, el juego inicia y las tarjetas están ocultas.
2. **Destapar tarjetas:** Haz clic en las tarjetas para destaparlas y encontrar pares coincidentes.
3. **Ganar el juego:** Encuentra todos los pares de tarjetas para ganar el juego. Al completar el juego, se mostrará un mensaje de felicitaciones.


## Créditos

Este proyecto se basa en un tutorial proporcionado por [CodigTube](https://codingtube.dev/). Agradecemos su guía y enseñanza.


---

Disfruta jugando a Memo Wars y mejorando tus habilidades de programación! Gracias por revisar mi proyecto :)
```

## File: style.css
```css
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
}

body{
    background-image: url("img/fondo.jpg");
    background-size: cover;
    font-family: sans-serif;
    color: white;
    flex: 1;
}

main{
    width: 730px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
}

.section1{
    background-color: rgba(255,255,255,0.2);
    padding: 0 10px 10px 10px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

h1{
    text-align: center;
    font-size: 22px;
    color: rgb(51, 51, 51);
}

.section1 button{
    height: 135px;
    width: 110px;
    font-size: 0;
    color: rgb(255, 255, 255);
    background-image: url('img/carta.jpg');
    border-radius: 5px;
    border: none;
    position: relative;
    overflow: hidden;
    padding: 0;
}

.section1 button:hover{
    cursor: pointer;
}

.section1 button:focus-visible{
    outline: 2px solid white;
    outline-offset: 2px;
}

.section1 button img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.section2{
    background-color: rgba(255,255,255,0.2);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 270px;
    height: 350px;
    padding: 0 20px;
}

.estadisticas{
    border: 1px solid white;
    height: 90px;
    width: 270px;
    border-radius: 8px;
    padding: 8px 20px;
    box-sizing: border-box; 
    text-align: center;
}

footer{
    text-align: center;
    background-color: rgba(255,255,255,0.2);
    border-radius: 8px;
    padding: 10px 0;
    margin-top: auto;
    width: 100%;
}

a{
    text-decoration: none;
}

.section2 button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #333;
    font-size: 16px;
    font-weight: bold;
}

#reiniciar:hover {
    background-color: #ddd;
}

@media (max-width: 768px) {
    main {
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: center;
        gap: 16px;
        padding: 10px;
    }

    .section1 {
        width: 100%;
        max-width: 460px;
        box-sizing: border-box;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    table {
        width: 100%;
    }

    table td {
        text-align: center;
        padding: 2px;
    }

    .section1 button {
        width: 100%;
        max-width: 100px;
        aspect-ratio: 110 / 135;
        height: auto;
        background-size: cover;
        background-position: center;
    }

    .section2 {
        width: 100%;
        max-width: 460px;
        height: auto;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .estadisticas {
        width: 100%;
        max-width: 270px;
        height: auto;
        min-height: 70px;
        margin: 0;
    }
}
```
