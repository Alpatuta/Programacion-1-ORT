//Creacion de arrays 
let nums = [];

//Creacin de arrays 2.0
let nums2 = new Array();

let nums3 = [1, 2, 3, 4, 5];
console.log(nums3.length);
console.log(nums3);

let numAux = nums3[1];
console.log(numAux);

//------------------------------------------------------

let tareas = [];

tareas.push("Bañarme");

let t2 = "Sacar al perro";

tareas.push(t2);
console.log(tareas);

tareas.unshift("Levantarme");
tareas.unshift("Despertarme");
console.log(tareas);

//Quitar un elemento de un array
let num4 = [2, 34, 32, 56];
num4.pop();//Quita el ultimo elemento del array
console.log(num4);

num4.shift();
console.log(num4);//Quita el primer elemento del array

//Quitar un elemento de un array dada una posicion
let str = ["Facundo", "P1", "4141"];
str.splice(1, 1);
console.log(str);

let str2 = ["Enero", "Febrero", "Marzo", "Abril"];
str2.splice(2, 2);
console.log(str2);

//Modificar un elemento dentro de un array 
let bandas = ["The Beatles", "Tan Bionica", "Rolling Stones"];
bandas[2] = "Linkin park";
console.log(bandas);

bandas[10] = "Marama"; //Agrega elementos vacios, y en la posicion 10 Marama

//Obtener la posicion de un elemento dentro de mi array
let celulares = ["Motorola V3", "iPhone 16 Pro Max", "Sony Ericson W850", "Motorola V3"];
let pos = celulares.indexOf("iPhone 16 Pro Max");
console.log(pos);

console.log(celulares.indexOf("IPhone 16 Pro Max")); // -1
console.log(celulares.indexOf("Motorola V3")); // 0
console.log(celulares.lastIndexOf("Motorola V3")); // 3

//-------------------------------------------------------------

