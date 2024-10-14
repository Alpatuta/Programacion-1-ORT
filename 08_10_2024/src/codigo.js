// Creación de un array
let nums = [];
console.log(nums);

// Creación de un array 2.0
let nums2 = new Array();

// Consultar largo de un array
console.log(nums.length);

let nums3 = [1, 2, 3, 4, 5, 6];
console.log(nums3);
console.log(nums3.length);

// Acceder a un elemento dada su posición
let numAux = nums3[1];
console.log(numAux); // 2

console.log(nums3[10000]); // undefined

// -----------------------------------------------------------------

let tareas = [];

// Push - Agregar elemento al final del array.
tareas.push("Bañarme");

let t2 = "Sacar al perro";
tareas.push(t2);

console.log(tareas);

// Unshift - Agregar elemento al principio del array.
tareas.unshift("Levantarme");
tareas.unshift("Despertarme");
console.log(tareas);

// Quitar el último elemento en un array.
let num4 = [23, -10, -123, 4, 3.4];
num4.pop();
console.log(num4); // [23, -10, -123, 4]

// Quitar el primer elemento en un array.
num4.shift(); // [-10, -123, 4]
num4.shift(); // [-123, 4]
console.log(num4);

// Quitar un elemento de un array dada una posición.
let str = ["Facundo", "P1", "1234"];
str.splice(1, 1);
console.log(str);

let str2 = ["Enero", "Febrero", "Marzo", "Abril"];
str2.splice(1, 2); // ["Enero", "Abril"]
console.log(str2);

// Modificar un elemento dentro de un array
let bandas = ["The Beatles", "Nestor en Bloque", "Tan Bionica"];
bandas[2] = "The Rolling Stones";
console.log(bandas);

bandas[10] = "Marama"; // Agrega elementos vacíos, y en la posición 10: Marama.

// Obtener la posición de un elemento dentro de mi array
let celulares = ["Motorola V3", "iPhone 16 Pro Max 1 TB", "Sony Ericsson W850", "Motorola V3"];
let pos = celulares.indexOf("iPhone 16 Pro Max 1 TB"); // 1
console.log(pos);

console.log(celulares.indexOf("IPhone 16 Pro Max 1 TB")); // -1
console.log(celulares.indexOf("A")); // -1
console.log(celulares.indexOf("Motorola V3")); // 0

console.log(celulares.lastIndexOf("Motorola V3")); // 3

// ----------------------------------------------------------------------------

console.log("Recorriendo con un for...");

let misNumeros = [2, 45, 23, 4.5, -1000];

for(let i = 0; i < misNumeros.length; i++) {
    let elem = misNumeros[i];

    if(elem % 2 === 0) {
        console.log(elem);
    }
}

let positivos = [];
let negativos = [];

for(let i = 0; i < misNumeros.length; i++) {
    let elem = misNumeros[i];

    if(elem > 0) {
        positivos.push(elem);
    } else {
        negativos.push(elem);
    }
}

console.log(positivos);
console.log(negativos);

// Buscar la primera coincidencia dentro de un array
let bandas2 = ["Rombai", "The Chemical Brothers", "Carlos Gardel y su banda"];
let aBuscar = "The Chemical Brothers";

// Versión 1
for(let i = 0; i < bandas2.length; i++) {
    let elem = bandas2[i];

    if(elem === aBuscar) {
        console.log("Lo encontré!");
        break;
    }
}

// Versión 2
let encontre = false;
for(let i = 0; i < bandas2.length; i++) {
    let elem = bandas2[i];

    if(elem === aBuscar) {
        encontre = true;
        break;
    }
}

if(encontre) { // encontre === true
    console.log("Lo encontre!");
} else {
    console.log("NO lo encontre!");
}

// Versión 3
console.log("Recorriendo con un while...");
let edades = [12, 25, 78, 45];
let edadABuscar = 54419;
let encontre2 = false;
let i = 0;

while(encontre2 === false && i < edades.length) { // !encontre2
    let elem = edades[i];
    if(edadABuscar === elem) {
        encontre2 = true;
    }

    i++;
}

console.log(encontre2);

// -----------------------------------------------------------------

document.querySelector("#btnAgregar").addEventListener("click", agregar);
document.querySelector("#btnBuscar").addEventListener("click", buscar);

let tareas2 = ["Bañarme", "Sacar al perro", "Levantarme"];

function agregar() {
    let tarea = document.querySelector("#txtTarea").value;
    tareas2.push(tarea);
    document.querySelector("#pResultado").innerHTML = tareas2;
}

function buscar() {
    let tarea = document.querySelector("#txtTarea").value.toLowerCase();
    let coincidencias = [];

    for(let i = 0; i < tareas2.length; i++) {
        let elem = tareas2[i].toLowerCase();

        if(elem.includes(tarea)) {
            coincidencias.push(elem);
        }
    }

    document.querySelector("#pResultado2").innerHTML = coincidencias;
    
}




