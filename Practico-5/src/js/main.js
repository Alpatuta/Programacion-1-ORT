// Ejercicio 1

document.querySelector("#btnAgregar").addEventListener("click", arrayNum);
document.querySelector("#btnMayor").addEventListener("click", numMayor);

let numeros = [];

function arrayNum() {
  let numero = Number(document.querySelector("#txtNumeros").value);
  numeros.push(numero);
}

function numMayor() {
  let mayorNum = 0;

  for (let i = 0; i < numeros.length; i++) {
    let codigo = numeros[i];

    if (codigo > mayorNum) {
      mayorNum = codigo;
    }
  }

  document.querySelector(
    "#pMostrar"
  ).innerHTML = `Numero mayor en el array: ${mayorNum}`;
}

//Ejercicio 2
document.querySelector("#btnAgregarPalabra").addEventListener("click", palabra);
document
  .querySelector("#btnMostrarArray")
  .addEventListener("click", mostrarListado);

let lista = [];

function palabra() {
  let texto = document.querySelector("#txtTexto").value;
  lista.push(texto);
}

function mostrarListado() {
  document.querySelector("#pMostrarArray").innerHTML = lista;
}

//Ejercicio 3
document
  .querySelector("#btnAgregarNumeros")
  .addEventListener("click", numPromedio);
document.querySelector("#btnPromedios").addEventListener("click", promedio);

let arrayP = [];

function numPromedio() {
  let valor = Number(document.querySelector("#txtPromedios").value);
  arrayP.push(valor);

  console.log(arrayP);
}

function promedio() {
  let numSumados = 0;
  let largo = arrayP.length;

  for (let i = 0; i < arrayP.length; i++) {
    let codigo = arrayP[i];
    numSumados += codigo;
  }

  let valorFinal = numSumados / largo;

  document.querySelector(
    "#pPromedios"
  ).innerHTML = `Promedio: ${valorFinal.toFixed(2)}`;
}

//Ejercicio 4
document.querySelector("#btnUsuario").addEventListener("click", usuarios);

let alias = [];

function usuarios() {
  let nombreUsuario = document.querySelector("#txtUsuario").value;

  if (alias.indexOf(nombreUsuario) !== -1) {
    document.querySelector("#pUsuario").innerHTML = `Error`;
  } else {
    alias.push(nombreUsuario);
    document.querySelector("#pUsuario").innerHTML = alias;
  }
}

//Ejercicio 5
document.querySelector("#btnFibo").addEventListener("click", fibonacci);

let fibo = [1, 1];

function fibonacci() {
  let nuevoNum = fibo[fibo.length - 2] + fibo[fibo.length - 1];

  for (let i = 0; i < fibo.length; i++) {
    if (fibo.length < 20) {
      fibo.push(nuevoNum);
      nuevoNum += fibo[fibo.length - 2];
    }
  }

  document.querySelector("#pFibo").innerHTML = fibo;
}

//Ejercicio 6
document.querySelector("#btnBoton1").addEventListener("click", agregar);
document.querySelector("#btnBoton2").addEventListener("click", eliminar);

let arrayFinal = [];

function agregar() {
  let texto = document.querySelector("#txtTexto2").value;
  arrayFinal.push(texto);
}

function eliminar() {
  let texto = document.querySelector("#txtTexto2").value;
  let posicion = arrayFinal.indexOf(texto);
  let mensaje = "";

  if (posicion !== -1) {
    arrayFinal.splice(posicion, 1);
    mensaje = arrayFinal;
  } else {
    mensaje = "Error <br>" + arrayFinal;
  }

  document.querySelector("#pMostrar2").innerHTML = mensaje;
}
