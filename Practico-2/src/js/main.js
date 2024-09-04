//Ejercicio 1
document.querySelector("#btnEj1").addEventListener("click", ej1);

function ej1() {
  let num1 = Number(document.querySelector("#txtEj1").value);

  if (num1 >= 0) {
    console.log("El numero es positivo");
  }
}

//Ejercicio 2
document.querySelector("#btnEj2").addEventListener("click", ej2);

function ej2() {
  let num2 = Number(document.querySelector("#txtEj2").value);

  if (num2 > 10) {
    alert("Es mayor a 10");
  }
}

//Ejercicio 3
document.querySelector("#btnEj3").addEventListener("click", ej3);

function ej3() {
  let num3 = Number(document.querySelector("#txtEj3").value);

  if (num3 > 20) {
    document.querySelector("#pEj3").innerHTML = "Es mayor a 20";
  } else {
    document.querySelector("#pEj3").innerHTML = "Es menor o igual a 20";
  }
}

//Ejercicio 4
document.querySelector("#btnEj4").addEventListener("click", ej4);

function ej4() {
  let num4 = Number(document.querySelector("#txtEj4").value);

  if (num4 < 0) {
    valorAbsoluto = num4 * -1;

    document.querySelector("#pEj4").innerHTML =
      "El valor absoluto es: " + valorAbsoluto;
  } else {
    document.querySelector("#pEj4").innerHTML = "El numero ya es positivo";
  }
}

//Ejercicio 5
document.querySelector("#btnEj5").addEventListener("click", ej5);

function ej5() {
  let num5 = Number(document.querySelector("#txtEj5").value);

  if (num5 > 10 && num5 < 20) {
    document.querySelector("#pEj5").innerHTML = "Es mayor a 10 y menor a 20";
  } else {
    document.querySelector("#pEj5").innerHTML = "No es mayor a 10 y menor a 20";
  }
}

//Ejercicio 6
document.querySelector("#btnEj6").addEventListener("click", ej6);

function ej6() {
  let num6 = Number(document.querySelector("#txtEj6").value);

  if (num6 % 7 === 0 && num6 % 3 === 0) {
    document.querySelector("#pEj6").innerHTML = "Es multiplo de 7 y de 3";
  } else {
    document.querySelector("#pEj6").innerHTML = "";
  }
}

//Ejercicio 7
document.querySelector("#btnEj7").addEventListener("click", ej7);

function ej7() {
  let num7 = Number(document.querySelector("#txtEj7").value);

  if (num7 < -20) {
    alert("Cumple");
  } else if (num7 > 20) {
    alert("Cumple");
  } else {
    alert("No cumple");
  }
}

//Ejercicio 8
document.querySelector("#btnEj8").addEventListener("click", ej8);

function ej8() {
  let num8 = Number(document.querySelector("#txtEj8").value);

  if (num8 > 30) {
    document.querySelector("#pEj8").innerHTML = "Es mayor que 30";
  } else if (num8 < 10) {
    document.querySelector("#pEj8").innerHTML = "Menor que 10";
  } else {
    document.querySelector("#pEj8").innerHTML = "Entre 10 y 30";
  }
}

//Ejercicio 9
document.querySelector("#btnEj9").addEventListener("click", ej9);

function ej9() {
  let temp = Number(document.querySelector("#txtEj9").value);
  let mensaje = "Levantarse <br>";
  let dia = document.querySelector("#txtEj9b").value;

  if (temp > 20) {
    mensaje += "Ponerse ropa comoda <br>";
  } else if (temp < 10) {
    mensaje += "Abrigarse mucho <br>";
  } else {
    mensaje += "Abrigo moderado <br>";
  }

  if (dia !== "domingo") {
    mensaje += "Ir al trabajo";
  } else {
    mensaje += "Quedarse en casa, hoy no trabaja";
  }

  document.querySelector("#pEj9").innerHTML = mensaje;
}

//Ejercicio 10
document.querySelector("#btnEj10").addEventListener("click", ej10);

function ej10() {
  let num1 = Number(document.querySelector("#txtEj10").value);

  let num2 = Number(document.querySelector("#txtEj10b").value);

  if (num1 > num2) {
    let resultado = num1 - num2;

    document.querySelector("#pEj10").innerHTML =
      "El resultado final es: " + resultado;
  } else if (num2 > num1) {
    let resultado2 = num2 - num1;

    document.querySelector("#pEj10").innerHTML =
      "El resulatdo final es: " + resultado2;
  }
}

//Ejercicio 11
document.querySelector("#btnEj11").addEventListener("click", ej11);

function ej11() {
  let num1 = Number(document.querySelector("#txtEj11").value);
  let num2 = Number(document.querySelector("#txtEj11b").value);
  let operacion = document.querySelector("#txtEj11c").value;

  if (
    operacion !== "M" &&
    operacion !== "S" &&
    operacion !== "R" &&
    operacion !== "D"
  ) {
    alert("Ingrese un valor de operacion valido");
  } else if (operacion === "M") {
    let resultadoM = num1 * num2;

    document.querySelector("#pEj11").innerHTML =
      "El resulato del producto es: " + resultadoM;
  } else if (operacion === "S") {
    let resultadoS = num1 + num2;

    document.querySelector("#pEj11").innerHTML =
      "El resultado de la suma es: " + resultadoS;
  } else if (operacion === "R") {
    let resultadoR = num1 - num2;

    document.querySelector("#pEj11").innerHTML =
      "El resultado de la suma es: " + resultadoR;
  } else if (operacion === "D") {
    let resultadoD = num1 / num2;

    document.querySelector("#pEj11").innerHTML =
      "El resultado de la division es :" + resultadoD.toFixed(2);
  }
}

//Ejercicio 12
document.querySelector("#btnEj12").addEventListener("click", ej12);

function ej12() {
  let vocales = document.querySelector("#txtEj12").value;

  switch (vocales) {
    case "a":
    case "A":
    case "e":
    case "E":
    case "i":
    case "I":
    case "o":
    case "O":
    case "u":
    case "U":
      document.querySelector("#pEj12").innerHTML = "Es una vocal";
      break;

    default:
      document.querySelector("#pEj12").innerHTML = "No es una vocal";
      break;
  }
}

//Ejercicio 13
document.querySelector("#btnEj13").addEventListener("click", ej13);

function ej13() {
  let num1 = Number(document.querySelector("#txtEj13").value);
  let num2 = Number(document.querySelector("#txtEj13b").value);
  let mensaje = "";

  if (num2 % num1 === 0) {
    mensaje += "El primero es multiplo del segundo";
  } else {
    mensaje += "No es multiplo";
  }

  document.querySelector("#pEj13").innerHTML = mensaje;
}

//Ejercicio 14
document.querySelector("#btnEj14").addEventListener("click", ej14);

function ej14() {
  let millas = Number(document.querySelector("#txtEj14").value);
  let mensaje = "";
  let planPlus = document.querySelector("#txtPlanPlus").value;

  if (planPlus === "s") {
    millas *= 2;
  }

  if (millas >= 60000) {
    mensaje += "El destino mas lejano es: Europa";
  } else if (millas >= 30000 && millas < 60000) {
    mensaje += "El destino mas lejano es: América del Norte";
  } else if (millas >= 15000 && millas < 30000) {
    mensaje += "El destino mas lejano es: América del Sur";
  } else {
    mensaje += "No tienes millas suficientes";
  }
  document.querySelector("#pEj14").innerHTML = mensaje;
}

//Ejercicio 15
document.querySelector("#btnEj15").addEventListener("click", ej15);

function ej15() {
  let dpto = document.querySelector("#slcEj15").value;
  let mensaje = "El departamento es: ";

  switch (dpto) {
    case "a":
      mensaje += "Canelones";
      break;
    case "b":
      mensaje += "Maldonado";
      break;
    case "c":
      mensaje += "Rocha";
      break;
    case "d":
      mensaje += "Treinta y Tres";
      break;
    case "e":
      mensaje += "Cerro Largo";
      break;
    case "f":
      mensaje += "Rivera";
      break;
    case "g":
      mensaje += "Artigas";
      break;
    case "h":
      mensaje += "Salto";
      break;
    case "i":
      mensaje += "Paysandú";
      break;
    case "j":
      mensaje += "Rio Negro";
      break;
    case "k":
      mensaje += "Soriano";
      break;
    case "l":
      mensaje += "Colonia";
      break;
    case "m":
      mensaje += "San José";
      break;
    case "n":
      mensaje += "Flores";
      break;
    case "o":
      mensaje += "Florida";
      break;
    case "p":
      mensaje += "Lavalleja";
      break;
    case "q":
      mensaje += "Durazno";
      break;
    case "r":
      mensaje += "Tacuarembó";
      break;
    case "s":
      mensaje += "Montevideo";
      break;

    default:
      break;
  }

  document.querySelector("#pEj15").innerHTML = mensaje;
}

//Ejercicio 16
document.querySelector("#btnEj16").addEventListener("click", ej16);

function ej16() {
  let a = Number(document.querySelector("#txtEj16").value);
  let b = Number(document.querySelector("#txtEj16b").value);
  let c = Number(document.querySelector("#txtEj16c").value);
  let mensaje = "";

  if (a > b && a > c) {
    mensaje += "a es el mayor de los 3";
  }

  document.querySelector("#parrafo").innerHTML = mensaje;
}

//Ejercicio 17
document.querySelector("#btnEj17").addEventListener("click", ej17);

function ej17() {
  let a = Number(document.querySelector("#txtEj17").value);
  let mensaje = "";
  
  if (a < 0 || a > 10) {
    mensaje += "a esta fuera de rango";
  }

  document.querySelector("#parrafoB").innerHTML = mensaje;
}