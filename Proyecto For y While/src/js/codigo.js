document.querySelector("#btnCalcular").addEventListener("click", calcular);

// Ejercicio 20
function calcular() {
  let gramosHarina = Number(document.querySelector("#txtHarina").value);
  let tazasAgua = Number(document.querySelector("#txtAgua").value);
  let cdasAceite = Number(document.querySelector("#txtAceite").value);
  let tazasAzucar = Number(document.querySelector("#txtAzucar").value);

  gramosHarina = gramosHarina / 100;
  // let gramosConvertidos = gramosHarina / 100;

  let cantRecetas = gramosHarina;

  if (tazasAzucar < cantRecetas) {
    cantRecetas = tazasAzucar;
  }

  if (tazasAgua < cantRecetas) {
    cantRecetas = tazasAgua;
  }

  if (cdasAceite < cantRecetas) {
    cantRecetas = cdasAceite;
  }

  document.querySelector("#pResultado").innerHTML =
    "Cantidad de recetas " + Math.floor(cantRecetas);
}

// -------------------------------------------------------------------

document.querySelector("#btnIngresar").addEventListener("click", ingresar);
document.querySelector("#btnComprar").addEventListener("click", comprar);

let stock;
let compraMaxima = 0;
let nombreCliente;
let cantPedidosTotal = 0;

function ingresar() {
  stock = Number(document.querySelector("#txtStock").value);
  document.querySelector("#btnComprar").removeAttribute("disabled");
}

function comprar() {
  let nombre = document.querySelector("#txtNombre").value;
  let cantidad = Number(document.querySelector("#txtCantidad").value);

  if (cantidad <= stock) {
    stock -= cantidad;
    cantPedidosTotal++;
    document.querySelector("#pCantidadCompras").innerHTML =
      "Cantidad de pedidos total: " + cantPedidosTotal;

    if (cantidad > compraMaxima) {
      compraMaxima = cantidad;
      nombreCliente = nombre;
      document.querySelector("#pClienteMaximo").innerHTML =
        "Cliente con mayor cantidad de compras: " + nombreCliente;
    }

    document.querySelector("#pResultado2").innerHTML = "Compra exitosa!";

    if (stock === 0) {
      document.querySelector("#btnComprar").setAttribute("disabled", "");
    }
  } else {
    document.querySelector("#pResultado2").innerHTML =
      "No hay stock disponible.";
  }
}

// ---------------------------------------------------------------------

/* 
 ESTRUCTURA DE CONTROL FOR
*/

for (let i = 1; i <= 5; i++) {
  //console.log(i);
}

for (let i = 0; i <= 10; i++) {
  //console.log(i);
}

for (let i = 1; i <= 3; i++) {
  //alert("Hola");
}

for (let i = 100; i <= 105; i++) {
  //alert("Hola");
}

// Incorrecto - Console log nunca se ejecuta
for (let i = 0; i === 3; i++) {
  //console.log("Prueba");
}

// Incorrecto - Console log nunca se ejecuta
for (let i = 0; i > 2; i++) {
  //console.log("Prueba 2");
}

// Bucle infinito
//for(let i = 10; i <= 12; i) {
//console.log("Prueba 3");
//}

for (let i = 1; i <= 10; i++) {
  //console.log(i);
}

// Bucle invertido
for (let i = 10; i > 0; i--) {
  //console.log(i);
}

// --------------------------------

// Sumar los números del 1 al 10
let suma = 0;

for (let i = 1; i <= 10; i++) {
  suma = suma + i;
  // suma += i;
}

//console.log(suma);

// Mostrar los números pares entre 1 y 20 (inclusive)
for (let i = 2; i <= 20; i += 2) {
  //console.log(i);
}

// -------------------------------------------------

let final = 25;
let guiones = "";

for (let i = 1; i <= final; i++) {
  guiones += "-";
}

document.querySelector("#pGuiones").innerHTML = guiones;

// ---------------------------------------------------

// Mostrar los números del 1 al 10
let i = 1;

while (i <= 10) {
  //console.log(i);
  i++;
}

// Sumar los números del 3 al 7
let m = 3;
let suma2 = 0;

while (m <= 7) {
  suma2 += m;
  m++;
}

console.log("La suma es: " + suma2);

// Mostrar los números pares entre 1 y 20
// Versión 1
let n = 2;

while (n <= 20) {
  //console.log(n);
  n += 2;
}

// Versión 2
let p = 1;

while (p <= 20) {
  if (p % 2 === 0) {
    console.log(p);
  }

  p++;
}

// Sumar los números desde 1, hasta que la suma supere 20
let j = 1;
let suma3 = 0;

while (suma3 < 4) {
  suma3 += j;
  j++;
}

console.log("Suma: " + suma3);

// Encontrar el primer múltiplo de 3 y 7 simultáneamente
let k = 1;

while (k % 3 !== 0 || k % 7 !== 0) {
  k++;
}

console.log(k);

// Versión 2
let encontre = false;
let t = 1;

while (!encontre) {
  if (t % 3 === 0 && t % 7 === 0) {
    encontre = true;
  } else {
    t++;
  }
}

console.log(t);
