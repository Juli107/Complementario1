//!AÑO DE NACIMIENTO
function nacimiento(edad) {
  edad = parseInt(edad);
  console.log(nombre);
  console.log("Naciste en el año " + parseInt(2021 - edad));
}
let nombre = prompt("Ingresar Nombre");
let edad = prompt("Ingresar Edad");
nacimiento(edad);

//!PRECIO DE VIDEO JUEGO
function videoJuego(precio) {
  precio = parseInt(precio);
  console.log(game);
  console.log("Tu video juego sale " + parseInt(precio + iva));
}

let game = prompt("Ingresar nombre del video juego");
let precio = prompt("Ingresar precio del video juego");
let iva = precio * 0.21;
videoJuego(precio);

//!NOTA FINAL
function notas(examenFinal) {
  if (examenFinal >= 4) {
    console.log(alumno + " está Aprobado");
  } else console.log(alumno + " está Desaprobado");
}

let alumno = prompt("Ingresar nombre del alumno");
let examenFinal = prompt("Ingresar nota");

notas(examenFinal);
