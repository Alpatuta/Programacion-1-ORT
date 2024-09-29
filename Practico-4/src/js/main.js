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
  let primerLetra = texto.charAt(0).toUpperCase();
  let resto = "";
  texto = texto.toLowerCase();

  for (let i = 1; i < texto.length; i++) {
    resto += texto.charAt(i);
  }

  document.querySelector(
    "#pEj7"
  ).innerHTML = `El texto es: ${primerLetra}${resto}`;
}

//Ejercicio 8
document.querySelector("#btnEj8").addEventListener("click", ej8);

function ej8() {
  let texto = document.querySelector("#txtEj8").value;
  let espaciosTotales = 0;
  let cantidadMay = 0;
  let cantidadMin = 0;

  for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) === " ") {
      espaciosTotales++;
    }

    let codigo = texto.charCodeAt(i);

    if (codigo >= 65 && codigo <= 90) {
      cantidadMay++;
    } else if (codigo >= 97 && codigo <= 122) {
      cantidadMin++;
    }
  }

  document.querySelector(
    "#pEj8"
  ).innerHTML = ` Cantidad de mayusculas: ${cantidadMay}<br> Cantidad de minusculas: ${cantidadMin} <br> Cantidad de espacios: ${espaciosTotales}`;
}

//Ejercicio 9
document.querySelector("#btnEj9").addEventListener("click", ej9);

function ej9() {
  let contrasenia = document.querySelector("#txtEj9").value;
  let msj = "";
  let primeraLetra = contrasenia.charAt(0);

  if (contrasenia.length < 5) {
    msj += "La contraseña debe tener al menos 5 caracteres";
  } else if (
    contrasenia.toUpperCase() === contrasenia ||
    contrasenia.toLowerCase() === contrasenia
  ) {
    msj += "La contraseña debe tener al menos una mayuscula y una minuscula";
  } else if (contrasenia.indexOf(" ") !== -1) {
    msj += "La contraseña no puede tener espacios";
  } else if (
    primeraLetra === "1" ||
    primeraLetra === "2" ||
    primeraLetra === "3" ||
    primeraLetra === "4" ||
    primeraLetra === "5" ||
    primeraLetra === "6" ||
    primeraLetra === "7" ||
    primeraLetra === "8" ||
    primeraLetra === "9" ||
    primeraLetra === "0"
  ) {
    msj += "La contraseña no puede comenzar con un número";
  } else {
    let contadorNum = 0;
    let contadorEspecial = 0;

    for (let i = 0; i < contrasenia.length; i++) {
      let codigo = contrasenia.charCodeAt(i);

      if (codigo >= 48 && codigo <= 57) {
        contadorNum++;
      }
      if (
        contrasenia.includes(".") ||
        contrasenia.includes("#") ||
        contrasenia.includes("@") ||
        contrasenia.includes("!")
      ) {
        contadorEspecial++;
      }
    }

    if (contadorNum === 0 || contadorEspecial === 0) {
      msj +=
        "La contraseña debe tener al menos un número y un caracter especial: . # @ !";
    } else {
      msj += `La contraseña es válida <br> Contraseña: ${contrasenia}`;
    }
  }

  document.querySelector("#pEj9").innerHTML = msj;
}

//Ejercicio 10
document.querySelector("#btnEj10").addEventListener("click", ej10);

function ej10() {
  let texto = document.querySelector("#txtEj10").value;
  let suma = 0;

  for (let i = 0; i < texto.length; i++) {
    let codigo = texto.charCodeAt(i);
    if (codigo >= 48 && codigo <= 57) {
      suma += Number(texto.charAt(i));
    }
  }

  document.querySelector("#pEj10").innerHTML = `Suma: ${suma}`;
}

//Ejercicio 11
document.querySelector("#btnEj11").addEventListener("click", ej11);

function ej11() {
  let texto = document.querySelector("#txtEj11").value;
  let msj = "";

  for (let i = 0; i < texto.length; i++) {
    let codigo = texto.charAt(i);

    if (codigo === "a") {
      codigo = codigo.replace("a", "4");
    } else if (codigo === "e") {
      codigo = codigo.replace("e", "3");
    } else if (codigo === "i") {
      codigo = codigo.replace("i", "1");
    } else if (codigo === "o") {
      codigo = codigo.replace("o", "0");
    } else if (codigo === "u") {
      codigo = codigo.replace("u", "8");
    }

    msj += codigo;
  }

  document.querySelector(
    "#pEj11"
  ).innerHTML = `La palabra encriptada es: ${msj}`;
}

//Ejercicio 12
document.querySelector("#btnEj12").addEventListener("click", ej12);

function ej12() {
  let texto = document.querySelector("#txtEj12").value;
  let msj = "";

  for (let i = texto.length - 1; i >= 0; i--) {
    let codigo = texto.charAt(i);

    msj += codigo;
  }

  document.querySelector(
    "#pEj12"
  ).innerHTML = `La palabra invertida es: ${msj}`;
}

//Ejercicio 13
document.querySelector("#btnEj13").addEventListener("click", ej13);

function ej13() {
  let texto = document.querySelector("#txtEj13").value;
  let texto2 = texto.toLowerCase();
  let contadorLetras = 0;

  for (let i = 0; i < texto2.length; i++) {
    let codigo = texto2.charAt(i);

    if (codigo === texto2.charAt(0)) {
      contadorLetras++;
    }
  }

  document.querySelector(
    "#pEj13"
  ).innerHTML = `Cantidad de letras iguales a la primera: ${contadorLetras}`;
}

//Ejercicio 14
document.querySelector("#btnEj14").addEventListener("click", ej14);

function ej14() {
  let texto = document.querySelector("#txtEj14").value;
  let texto2 = texto.toLowerCase();
  let msj = "";

  if (texto.length !== 7) {
    msj += "La matricula debe tener 7 caracteres";
  } else if (texto2.charCodeAt(0) < 97 || texto2.charCodeAt(0) > 122) {
    msj += "La matricula tiene que empezar por una letra";
  } else if (
    texto2.charCodeAt(1) < 48 ||
    (texto2.charCodeAt(1) > 57 && texto2.charCodeAt(1) < 97) ||
    texto2.charCodeAt(1) > 122
  ) {
    msj += "El segundo caracter debe ser una letra o un número";
  } else if (
    texto2.charCodeAt(2) < 48 ||
    (texto2.charCodeAt(2) > 57 && texto2.charCodeAt(2) < 97) ||
    texto2.charCodeAt(2) > 122
  ) {
    msj += "El tercer caracter debe ser una letra o un número";
  } else if (texto2.charCodeAt(3) < 48 || texto2.charCodeAt(3) > 57) {
    msj += "Los caracteres 4 al 7 deben ser nuevamente números";
  } else if (texto2.charCodeAt(4) < 48 || texto2.charCodeAt(4) > 57) {
    msj += "Los caracteres 4 al 7 deben ser nuevamente números";
  } else if (texto2.charCodeAt(5) < 48 || texto2.charCodeAt(5) > 57) {
    msj += "Los caracteres 4 al 7 deben ser nuevamente númer";
  } else if (texto2.charCodeAt(6) < 48 || texto2.charCodeAt(6) > 57) {
    msj += "Los caracteres 4 al 7 deben ser nuevamente número";
  }

  document.querySelector("#pEj14").innerHTML = msj;
}

//--------------------------------------------------------------------------

//FUNCIONES

//Ejercicio 1
function recorrer(number1, number2) {
  let contadorPar = 0;

  for (let i = number1; i <= number2; i++) {
    if (i % 2 === 0) {
      contadorPar++;
    }
  }

  return contadorPar;
}

// Ejercicio 2
function esBisiesto(anio) {
  let bisiesto = false;

  if (
    (anio % 4 === 0 && anio % 100 !== 0) ||
    (anio % 100 === 0 && anio % 400 === 0)
  ) {
    bisiesto = true;
  }

  return bisiesto;
}

//Ejercicio 3
function calcularAreaTriangulo(base, altura) {
  let areaTriangulo = (base * altura) / 2;

  if (isNaN(base) || isNaN(altura) || base < 0 || altura < 0) {
    areaTriangulo = -1;
  }

  return areaTriangulo;
}

//Ejercicio 4
function tempTotal(tempCelsius) {
  let tempFahrenheit = 1.8 * tempCelsius + 32;

  return tempFahrenheit;
}

//Ejercicio 5
function conversion(tempF, unidadM) {
  let resultado = 0;

  switch (unidadM) {
    case "Celsius":
      resultado = (tempF - 32) / 1.8;
      break;
    case "Kelvin":
      resultado = (tempF + 459.67) / 1.8;
      break;
    case "Rankine":
      resultado = tempF + 459.67;
      break;
    case "Reaumur":
      resultado = (tempF - 32) / 2.25;
      break;
  }

  return resultado;
}

//Ejericio 6

function calcularPotencia(base, exponente) {
  let total = base ** exponente;

  return total;
}

//Ejercicio 7
function invertida(pTexto) {
  let textoInvertido = "";

  for (let i = pTexto.length - 1; i >= 0; i--) {
    textoInvertido += pTexto.charAt(i);
  }

  return textoInvertido;
}

//Ejercicio 8
document.querySelector("#btnSueldo").addEventListener("click", salarioData);

function salarioData() {
  let sueldo = Number(document.querySelector("#txtSueldo").value);
  let hijos = document.querySelector("#slcHijos").value;

  document.querySelector("#pSueldo").innerHTML =
    "El salario final es: " + calculoSalario(sueldo, hijos);
}

function calculoSalario(sueldo, hijos) {
  let dtoBPS = (sueldo * 15) / 100;
  let dtoFRL = (sueldo * 0.1) / 100;
  let dtoSHijos = (sueldo * 6) / 100;
  let dtoNHijos = (sueldo * 4.5) / 100;
  let subTotal = 0;

  if (hijos === "S") {
    subTotal = sueldo - (dtoBPS + dtoFRL + dtoSHijos);
  } else if (hijos === "N") {
    subTotal = sueldo - (dtoBPS + dtoFRL + dtoNHijos);
  }

  return subTotal;
}

document.querySelector("#btnIrpf").addEventListener("click", salarioTotal);

function salarioTotal() {
  let sueldoN = Number(document.querySelector("#txtSalarioN").value);

  calculosIRPF(sueldoN);

  document.querySelector("#pTotal").innerHTML = calculosIRPF(sueldoN);
}

function calculosIRPF(sueldoN) {
  let irpf = 0;

  if (sueldoN > 650901) {
    irpf += (sueldoN - 650901) * 0.36;
    irpf += (650900 - 424501) * 0.31;
    irpf += (424500 - 283001) * 0.27;
    irpf += (283000 - 169801) * 0.25;
    irpf += (169800 - 84901) * 0.24;
    irpf += (84900 - 56601) * 0.15;
    irpf += (56600 - 39621) * 0.1;
  } else if (sueldoN > 424501) {
    irpf += (sueldoN - 424501) * 0.31;
    irpf += (424500 - 283001) * 0.27;
    irpf += (283000 - 169801) * 0.25;
    irpf += (169800 - 84901) * 0.24;
    irpf += (84900 - 56601) * 0.15;
    irpf += (56600 - 39621) * 0.1;
  } else if (sueldoN > 283001) {
    irpf += (sueldoN - 283001) * 0.27;
    irpf += (283000 - 169801) * 0.25;
    irpf += (169800 - 84901) * 0.24;
    irpf += (84900 - 56601) * 0.15;
    irpf += (56600 - 39621) * 0.1;
  } else if (sueldoN > 169801) {
    irpf += (sueldoN - 169801) * 0.25;
    irpf += (169800 - 84901) * 0.24;
    irpf += (84900 - 56601) * 0.15;
    irpf += (56600 - 39621) * 0.1;
  } else if (sueldoN > 84901) {
    irpf += (sueldoN - 84901) * 0.24;
    irpf += (84900 - 56601) * 0.15;
    irpf += (56600 - 39621) * 0.1;
  } else if (sueldoN > 56601) {
    irpf += (sueldoN - 56601) * 0.15;
    irpf += (56600 - 39621) * 0.1;
  } else if (sueldoN > 39621) {
    irpf += (sueldoN - 39621) * 0.1;
  }

  return irpf;
}
