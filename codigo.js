/* function saludar() {
  let Usuario = prompt("Ingresar Usuario");
  let Edad = prompt("Ingresar Edad");
  console.log("Hola " + Usuario);
  console.log("Tu edad es: " + Edad);
}
saludar(); */

//!Funciones ejercicio de suma
/*function suma() {
  let a = parseInt(prompt("Ingresar un número"));
  let b = prompt("Ingresar otro número");

  console.log(a + b);
}

suma();*/

/* //!Funciones ejercicio saludar
function saludar(Usuario, Edad) {
  console.log("Hola " + Usuario);
  console.log("Tu edad es: " + Edad);
}

let Usuario = prompt("Ingresar Usuario");
let Edad = prompt("Ingresar Edad");

saludar(Usuario, Edad); */

/* //! Funciones Return
function sumar(primerNumero, segundoNumero) {
  return primerNumero + segundoNumero;
}
let resultado = sumar(5, 8);
console.log(resultado); */

//! Funciones Ejemplo Calculadora
/*function calculadora(primerNumero, segundoNumero, operacion) {
  switch (operacion) {
    case "+":
      return primerNumero + segundoNumero;
      break;
    case "-":
      return primerNumero - segundoNumero;
      break;
    case "*":
      return primerNumero * segundoNumero;
      break;
    case "/":
      return primerNumero / segundoNumero;
      break;
    default:
      return 0;
      break;
  }
} */

//*Ejercicio Año de Nacimiento
/*
function nacimiento(edad) {
  edad = parseInt(edad);
  console.log(2021 - edad);
}
let edad = prompt("Ingresar Edad");
nacimiento(edad); */

/*//! Ejemplo de Validación

function validarNombre(nombreUsuario) {
  if (nombreUsuario != "") {
    console.log("Ok");
  } else console.log("String Vacío");
}

function validarEdad(edadUsuario) {
  if (edadUsuario >= 18) {
    console.log("Ok");
  } else console.log("Error");
}

let Usuario = prompt("Ingresar Usuario");
let Edad = prompt("Ingresar Edad");



validarNombre(Usuario);
validarEdad(Edad); */

//!Ejemplo de validación con True/False
/* function validarNombre(nombreUsuario) {
  if (nombreUsuario != "") {
    return true;
  } else {
    return false;
  }
}
function validarEdad(edadUsuario) {
  if (edadUsuario >= 18) {
    return true;
  } else {
    return false;
  }
}

let usuario = prompt("Ingrese su nombre de usuario");
let edad = prompt("Ingrese su edad");

let resultadoValidarNombre = validarNombre(usuario);
let resultadoValidarEdad = validarEdad(edad);

if (validarNombre() && validarEdad()) {
  console.log("Bienvenido al sistema");
} */

//!Ejercicio de Descuentos
/*function descuento(precio, dia) {
  if (dia == "Lunes") {
    let descuentoPrecio = precio * 0.05;

    return descuentoPrecio;
  } else if (dia == "Miercoles") {
    let descuentoPrecio = precio * 0.15;

    return descuentoPrecio;
  } else if (dia == "Sabado") {
    let descuentoPrecio = precio * 0.2;

    return descuentoPrecio;
  }
}

function iva(precio) {
  

  return iva;
}

let precio = prompt("Ingrese el precio del prodcuto");
let dia = prompt("Ingrese el dia de la compra");

let resultado = precio - descuento(precio, dia) + iva(precio);
console.log(resultado); */
