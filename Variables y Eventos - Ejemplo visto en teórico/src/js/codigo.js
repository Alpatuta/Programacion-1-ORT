// alert("Hola");
// alert("Chau");

/* 
    Mis variables
*/

// Declaraciones incorrectas
// let 120 = "Facundo";
// let let = "Pablo";
// let primer Nombre = "Agustina";
// let año = 2024;
// let anio = 2024;
// let primero.nombre = "Facundo";
// let primero-nombre = "Facundo";

// String
let primerNombre = "Facundo";

// Number
let edad = 27;
let temp = -30.523;

let cedula; // Valor inicial: undefined

// Consultar valor de variables
alert(primerNombre);
console.log(primerNombre);
console.log(edad);
console.log(cedula);

// Cambiar el valor de variables
edad = 35;
console.log(edad);

// No se puede consultar antess de declarar/inicializar
// console.log(apellido);
// let apellido = "Hernández"

/*
    Operadores
*/

let resultado = 3 + 2;
let mensaje = "El resultado de la suma es: " + resultado;
console.log(mensaje);

let num1 = 10;
let num2 = 2;
let resultado2 = num1 - num2;
let mensaje2 = "El resultado de la resta es: " + resultado2;
console.log(mensaje2);

// ------------------------------------------------------------

let colecta = 10;
let cantidadAportes = 1;

colecta = colecta + 50;
cantidadAportes = cantidadAportes + 1; // Otra manera: cantidadAportes++;
console.log(colecta);

colecta = colecta + 10;
cantidadAportes = cantidadAportes + 1;

console.log("Dinero juntado: " + colecta);
console.log(`Dinero juntado: ${colecta}, y cantidad de aportes: ${cantidadAportes}`);

// ------------------------------------------------------------

/*
    DOM y Eventos
*/


document.querySelector("#btnSaludar").addEventListener("click", saludar);

function saludar() {
    let nombre = document.querySelector("#txtNombre").value;
    let mensaje = "Hola " + nombre;
    document.querySelector("#pResultado").innerHTML = mensaje;
}

document.querySelector("#btnSumar").addEventListener("click", sumar);

function sumar() {
    let num1 = document.querySelector("#txtNum1").value;
    let num2 = document.querySelector("#txtNum2").value;

    let num1Convertido = Number(num1);
    let num2Convertido = Number(num2);

    let resultado = num1Convertido + num2Convertido;
    document.querySelector("#pResultadoSuma").innerHTML = "El resultado es : " + resultado;
}






