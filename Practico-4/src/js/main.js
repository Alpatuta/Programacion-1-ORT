//Ejercicio 1
document.querySelector("#btnEj1").addEventListener("click", ej1);

function ej1() {
  let texto = document.querySelector("#txtEj1").value;

  let primeraLetra = texto.charAt(0);
  let ultimaLetra = texto.charAt(texto.length - 1);
  let msj = "";

  texto = texto.toLowerCase();

  if (primeraLetra === ultimaLetra) {
    msj += "La primera letra coincide con la ultima";
  } else {
    msj += "No coinciden";
  }

  document.querySelector("#pEj1").innerHTML = msj;
}

//Ejercicio 2
document.querySelector("#btnEj2").addEventListener("click", ej2);

function ej2() {
  let texto2 = document.querySelector("#txtEj2").value;
  let contadorVocales = 0;

  for (let i = 0; i <= texto2.length; i++) {
    let vocales = texto2.charAt(i);

    if (
      vocales === "a" ||
      vocales === "e" ||
      vocales === "i" ||
      vocales === "o" ||
      vocales === "u"
    ) {
      contadorVocales++;
    }
  }

  document.querySelector(
    "#pEj2"
  ).innerHTML = `Cantidad de vocales ${contadorVocales}`;
}

//Ejercicio 3

document.querySelector("#btnEj3").addEventListener("click", ej3);

function ej3() {
  let texto3 = document.querySelector("#txtEj3").value;
  let msj = "";

  texto3 = texto3.toUpperCase();
  msj += texto3;

  document.querySelector("#pEj3").innerHTML = `Palabra en mayuscula: ${msj}`;
}

//Ejercicio 4
document.querySelector("#btnEj4").addEventListener("click", ej4);

function ej4() {
  let primerTxt = document.querySelector("#txtEj4").value;
  let secondTxt = document.querySelector("#txtEj4b").value;
  let msj = "";

  if (primerTxt.includes(secondTxt)) {
    msj += "Es subtexto";
  } else {
    msj += "No es subtexto";
  }

  document.querySelector("#pEj4").innerHTML = msj;
}

//Ejercicio 5
document.querySelector("#btnEj5").addEventListener("click", ej5);

function ej5() {
  let matricula = document.querySelector("#txtEj5").value;
  matricula = matricula.charAt(0).toUpperCase();

  let msj = "";

  switch (matricula) {
    case "A":
      msj += "Canelones";
      break;
    case "B":
      msj += "Maldonado";
      break;
    case "C":
      msj += "Rocha";
      break;
    case "D":
      msj += "Treinta y Tres";
      break;
    case "E":
      msj += "Cerro Largo";
      break;
    case "F":
      msj += "Rivera";
      break;
    case "G":
      msj += "Artigas";
      break;
    case "H":
      msj += "Salto";
      break;
    case "I":
      msj += "Paysandú";
      break;
    case "J":
      msj += "Rio Negro";
      break;
    case "K":
      msj += "Soriano";
      break;
    case "L":
      msj += "Colonia";
      break;
    case "M":
      msj += "San José";
      break;
    case "N":
      msj += "Flores";
      break;
    case "O":
      msj += "Florida";
      break;
    case "P":
      msj += "Lavalleja";
      break;
    case "Q":
      msj += "Durazno";
      break;
    case "R":
      msj += "Tacuarembó";
      break;
    case "S":
      msj += "Montevideo";
      break;
  }

  document.querySelector(
    "#pEj5"
  ).innerHTML = `El departamento de la matricula es: ${msj}`;
}

//Ejercicio 6
document.querySelector("#btnEj6").addEventListener("click", ej6);

function ej6() {
  let texto = document.querySelector("#txtEj6").value;
  let contadorVocales = 0;
  let contadorConsonantes = 0;

  for (let i = 0; i < texto.length; i++) {
    let vocales = texto.charAt(i);
    if (
      texto.length > 10 &&
      (vocales === "a" ||
        vocales === "e" ||
        vocales === "i" ||
        vocales === "o" ||
        vocales === "u")
    ) {
      contadorVocales++;
    } else if (
      texto.length <= 10 &&
      vocales !== "a" &&
      vocales !== "e" &&
      vocales !== "i" &&
      vocales !== "o" &&
      vocales !== "u"
    ) {
      contadorConsonantes++;
    }
  }

  document.querySelector(
    "#pEj6"
  ).innerHTML = `Cantidad de vocales: ${contadorVocales} <br> Cantidad de consonantes: ${contadorConsonantes}`;
}

//Ejercicio 7
document.querySelector("#btnEj7").addEventListener("click", ej7);

function ej7() {
  let texto = document.querySelector("#txtEj7").value;
  let primerLetra = texto.charAt(0).toUpperCase;
  let resto = "";
  texto = texto.toLowerCase();

  for (let i = 1; i < texto.length; i++) {
    resto += texto.charAt(i);
  }
}
