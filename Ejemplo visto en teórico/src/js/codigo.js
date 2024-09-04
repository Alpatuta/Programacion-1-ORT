let a = 18 < 40;
console.log("Es 18 menor que 40? - " + a);

let b = 18 > 40;
console.log("Es 18 mayor que 40? - " + b);

let c = 18 >= 18;
console.log("Es 18 mayor o igual que 18? - " + c);

let d = 18 > 18;
console.log("Es 18 mayor que 18? - " + d);

let e = 20 === 20;
console.log("Es 20 igual a 20? - " + e);

let f = "Facundo" === "Milagros";
console.log("Es Facundo igual que Milagros? - " + f);

let g = "facundo" === "Facundo";
console.log("Es facundo igual que Facundo? - " + g);

let h = "ABC" !== "abc";
console.log("Es ABC diferente de abs? - " + h);

// -------------------------------------------------

let edad = 59;

let resultado = edad >= 18;
console.log("Es mayor de edad? - " + resultado);

// Versión 1 - Es par
let resto = edad % 2;
let esPar = resto === 0;
console.log(`Es ${edad} par? - ${esPar}`);

// Versión 2 - Es par
let esPar2 = (edad % 2) === 0;

// -------------------------------------------------

let edad2 = 21;

// Versión 1
if(edad2 >= 18) {
    console.log("Está habilitado para votar");
}

if(edad2 < 18) {
    console.log("NO está habilitado para votar");
}

// Versión 2
if(edad2 > 18) {
    console.log("Está habilitado para votar");
} else {
    console.log("NO está habilitado para votar");
}

// Versión 3
if(edad2 < 18) {
    console.log("NO está habilitado para votar");
} else {
    console.log("Está habilitado para votar");
}

// -------------------------------------------------

let edad3;

// Versión incorrecta
if(edad3 >= 40) {
    console.log("Grupo A");
}

if(edad <= 18) {
    console.log("Grupo C");
} else {
    console.log("Grupo B")
}

// Versión 1
if(edad3 >= 40) {
    console.log("Grupo A");
} else {
    // Menores a 40
    if(edad3 > 18) {
        // Entre 18 y 40
        console.log("Grupo B");
    } else {
        console.log("Grupo C");
    }
}

// Versión 2
if(edad3 >= 40) {
    console.log("Grupo A");
} else if(edad3 > 18) {
    console.log("Grupo B");
} else {
    console.log("Grupo C");
}

// -------------------------------------------------

let edad4;

if(edad4 >= 60) {
    console.log("Grupo A");
} else if(edad4 >= 40) {
    console.log("Grupo B");
} else if(edad4 > 18) {
    console.log("Grupo C");
} else if(edad4 < 18) {
    console.log("Grupo D");
}

// -------------------------------------------------

let edad5 = 25;

if(edad5 <= 40) {
    if(edad5 >= 18) {
        console.log("Grupo A");
    }
} 

if(edad5 >= 18 && edad5 <= 40) {
    console.log("Grupo A");
}

// -------------------------------------------------

let edad6 = 15;

if(edad6 < 18 || edad >= 40) {
    console.log("Grupo A")
}

// -------------------------------------------------

document.querySelector("#btnIngresarDatos").addEventListener("click", ingresarDatos);

// Versión 1
/* function ingresarDatos() {
    let nombre = document.querySelector("#txtNombre").value;
    let edad = Number(document.querySelector("#txtEdad").value);
    let pais = document.querySelector("#slcPais").value;

    let mensaje = "";

    if(nombre === "") {
        mensaje += "El nombre no puede ser vacío<br>";
    } 
    
    if(edad < 1 || edad > 100) {
        mensaje += "La edad es incorrecta<br>";
    }

    if(pais === "xx") {
        mensaje += "Debe seleccionar un pais";
    }

    if(mensaje === "") {
        mensaje = "Registro exitoso";
    }

    document.querySelector("#pResultado").innerHTML = mensaje;
} */

// Versión 2
/* function ingresarDatos() {
    let nombre = document.querySelector("#txtNombre").value;
    let edad = Number(document.querySelector("#txtEdad").value);
    let pais = document.querySelector("#slcPais").value;

    let mensaje = "";

    if(nombre === "" || edad < 1 || edad > 100 || pais === "xx") {
        mensaje = "ERROR";
    } else {
        mensaje = "Registro exitoso";
    }

    document.querySelector("#pResultado").innerHTML = mensaje;
} */

// Versión 3
function ingresarDatos() {
    let nombre = document.querySelector("#txtNombre").value;
    let edad = Number(document.querySelector("#txtEdad").value);
    let pais = document.querySelector("#slcPais").value;

    let mensaje = "";

    if(nombre !== "" && edad >= 1 && edad <= 100 && pais !== "xx") {
        mensaje = "Registro exitoso";
    } else {
        mensaje = "ERROR";
    }

    document.querySelector("#pResultado").innerHTML = mensaje;
}

// -------------------------------------------------

// Switch
let dia = "ma";

if(dia === "lu") {
    //console.log("Diseño");
} else if(dia === "ma" || dia === "mi") {
    //console.log("P1");
} else if(dia === "ju") {
    //console.log("PL");
} else {
    //console.log("No hay clase, solo hacer el práctico de P1 sin parar");
}

switch(dia) {
    case "lu":
        console.log("Diseño");
        break;
    case "ma":
    case "mi":
        console.log("P1");
        break;
    case "ju":
        console.log("PL");
        break;
    default:
        console.log("No hay clase, solo hacer el práctico de P1 sin parar"); 
        break;          
}
