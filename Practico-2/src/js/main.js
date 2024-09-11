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

//Ejercicio 18
document.querySelector("#btnEj18").addEventListener("click", ej18);

let contador = 0;
let contador2 = 0;

function ej18() {
  let number = Number(document.querySelector("#txtEj18").value);

  if (number < 0) {
    number = number * -1;
  }

  contador += number;
  contador2++;
  document.querySelector(
    "#pEj18"
  ).innerHTML = `Numeros ingresados: ${contador2} <br> Suma total del valor absoluto de los numeros: ${contador}`;
}

//Ejercicio 19
document.querySelector("#btnEj19").addEventListener("click", ej19);

let interseccion = 0;
let mayorVeinte = 0;
let multiplo = 0;

function ej19() {
  let number = Number(document.querySelector("#txtEj19").value);

  if (number % 5 === 0) {
    multiplo++;
  }

  if (number > 20) {
    mayorVeinte++;
  }

  if (number % 5 === 0 && number > 20) {
    interseccion++;
  }

  document.querySelector(
    "#pEj19"
  ).innerHTML = `Numeros multiplos de 5: ${multiplo} <br> Numeros mayor a 20: ${mayorVeinte} <br> Numeros multiplos de 5 y mayor a 20: ${interseccion}`;
}

//Ejercicio 20
document.querySelector("#btnEj20").addEventListener("click", ej20);

function ej20() {
  let azucar = Number(document.querySelector("#txtEj20").value);
  let harina = Number(document.querySelector("#txtEj20b").value);
  let aceite = Number(document.querySelector("#txtEj20c").value);
  let agua = Number(document.querySelector("#txtEj20d").value);

  let galletaHarina = harina / 100;
  let cantidadGalletas = galletaHarina;

  if (azucar < cantidadGalletas) {
    cantidadGalletas = azucar;
  }
  if (aceite < cantidadGalletas) {
    cantidadGalletas = aceite;
  }
  if (agua < cantidadGalletas) {
    cantidadGalletas = agua;
  }

  document.querySelector(
    "#pEj20"
  ).innerHTML = `La cantidad de galletas que puedes realizar es: ${Math.floor(
    cantidadGalletas
  )}`;
}

//Ejercicio 21
document.querySelector("#btnEj21").addEventListener("click", ej21);

function ej21(params) {
  let ingresos = Number(document.querySelector("#txtEj21").value);
  let valorCasa = Number(document.querySelector("#txtEj21b").value);

  let valorPcuota = (valorCasa * 15) / 100;
  let valorPlusCuota = (valorCasa * 30) / 100;

  if (ingresos < 20000) {
    let valorCuotaRest = valorCasa - valorPcuota;
    valorCuotaRest = valorCuotaRest / 84;

    document.querySelector(
      "#pEj21"
    ).innerHTML = `El valor de la primer cuota es de: ${valorPcuota} y el valor de la cuota es de: ${valorCuotaRest.toFixed(
      2
    )}`;
  }

  if (ingresos >= 20000) {
    let valorCuotaRest = valorCasa - valorPlusCuota;
    valorCuotaRest = valorCuotaRest / 12;

    document.querySelector(
      "#pEj21"
    ).innerHTML = `El valor de la primer cuota es de: ${valorPlusCuota} y el valor de la cuota es de: ${valorCuotaRest}`;
  }
}

//Ejercicio 22
document.querySelector("#btnEj22").addEventListener("click", ej22);

function ej22() {
  let monto = Number(document.querySelector("#txtEj22").value);
  let tarjeta = document.querySelector("#slcEj22").value;
  let mensaje = "";

  if (tarjeta === "S" && monto < 10000) {
    monto = monto - (monto * 4) / 100;
    mensaje += `El monto total es: ${monto}`;
  } else if (tarjeta === "N" || monto >= 10000) {
    monto = monto;
    mensaje += `El monto total es: ${monto}`;
  }

  document.querySelector("#pEj22").innerHTML = mensaje;
}

//Ejercicio 23
document.querySelector("#btnEj23").addEventListener("click", ej23);

let cantidadDeNotasNA = 0;
let cantidadDeNotasA = 0;
let cantidadDeNotasB = 0;
let sumaNotas = 0;
let cantidadDeNotasTotal = 0;
let notaMin = null;
let notaMax = null;

function ej23() {
  let notas = Number(document.querySelector("#txtEj23").value);

  if (notas < 70) {
    cantidadDeNotasNA++;
    cantidadDeNotasTotal++;
    sumaNotas = sumaNotas + notas;
  } else if (notas >= 70 && notas < 90) {
    cantidadDeNotasA++;
    cantidadDeNotasTotal++;
    sumaNotas = sumaNotas + notas;
  } else if (notas >= 90 && notas <= 100) {
    cantidadDeNotasB++;
    cantidadDeNotasTotal++;
    sumaNotas = sumaNotas + notas;
  }

  if (notaMax === null || notaMax < notas) {
    notaMax = notas;
  }

  if (notaMin === null || notaMin > notas) {
    notaMin = notas;
  }
  let promedio = sumaNotas / cantidadDeNotasTotal;

  document.querySelector(
    "#pEj23"
  ).innerHTML = `Cantidad de no aprobados: ${cantidadDeNotasNA} <br>
    Cantidad de aprobados: ${cantidadDeNotasA} <br>
    Cantidad de notas excelentes: ${cantidadDeNotasB}<br> 
    El promedios de las notas es: ${promedio.toFixed(2)} <br>
    Nota maxima: ${notaMax} <br>
    Nota minima: ${notaMin}`;
}

//Ejercicio 24
document.querySelector("#btnEj24").addEventListener("click", ej24);

let sumaSueldo = 0;
let sumaCobraMes = 0;
let sueldoMinimo = null;

function ej24() {
  let sueldo = Number(document.querySelector("#txtEj24").value);
  let cobraMes = document.querySelector("#slcEj24").value;

  sumaSueldo = sumaSueldo + sueldo;

  if (cobraMes === "S") {
    sumaCobraMes++;
  }

  if (sueldoMinimo === null || sueldoMinimo > sueldo) {
    sueldoMinimo = sueldo;
  }

  document.querySelector(
    "#pEj24"
  ).innerHTML = `La suma de las sueldos es: ${sumaSueldo} <br>
    Cantidad de sueldos que cobran este mes: ${sumaCobraMes} <br> Sueldo minimo: ${sueldoMinimo}`;
}

//Ejercicio 25
document.querySelector("#btnEj25").addEventListener("click", ej25);

let stock = 50;
let cantidadDePedidos = 0;
let camarasMaxima = null;
let nombreMaximo = "";

function ej25() {
  let nombre = document.querySelector("#txtEj25").value;
  let camaras = Number(document.querySelector("#txtEj25b").value);

  if (nombreMaximo === "") {
    nombreMaximo = nombre;
  }

  if (camarasMaxima === null || camarasMaxima < camaras) {
    camarasMaxima = camaras;
  }

  if (stock > 0 && stock >= camaras) {
    cantidadDePedidos++;
    stock = stock - camaras;
    document.querySelector(
      "#pEj25"
    ).innerHTML = `Bienvenido ${nombre}, haz comprado ${camaras} camaras <br> Cantidad de pedidos: ${cantidadDePedidos} <br> Stock restante: ${stock} <br> ${nombreMaximo} compro la maxima cantidad de camaras con : ${camarasMaxima} camaras`;
  } else {
    document.querySelector("#pEj25").innerHTML = `Lo sentimos, no hay stock`;
  }

  if (stock === 0) {
    document.querySelector("#btnEj25").disabled = true;
  }
}

//Ejercicio 26
document.querySelector("#btnEj26").addEventListener("click", ej26);

function ej26() {
  let noches = Number(document.querySelector("#txtEj26").value);
  let mPago = document.querySelector("#slcMetodoPago").value;
  let precioNoche = 40;
  let precioTotal = 0;
  let mensaje = "";

  if (mPago === "T" && noches >= 7) {
    precioTotal = noches * precioNoche;
    noches = noches + 3;
    mensaje += `El monto total es de: ${precioTotal} <br> Noches totales ${noches}`;
  } else if (noches < 7 && noches >= 3 && mPago === "T") {
    precioTotal = noches * precioNoche;
    noches = noches + 1;
    mensaje += `El monto total es de: ${precioTotal} <br> Noches totales ${noches}`;
  } else if (noches < 3 && mPago === "T") {
    precioTotal = noches * precioNoche;
    mensaje += `El monto total es de: ${precioTotal} <br> Noches totales ${noches}`;
  }

  if (mPago === "E" && noches >= 7) {
    precioTotal = noches * precioNoche;
    noches = noches + 2;
    mensaje += `El monto total es de: ${precioTotal} <br> Noches totales ${noches}`;
  } else if (noches < 7 && noches >= 3 && mPago === "E") {
    precioTotal = noches * precioNoche;
    noches++;
    mensaje += `El monto total es de: ${precioTotal} <br> Noches totales ${noches}`;
  } else if (noches < 3 && mPago === "E") {
    precioTotal = noches * precioNoche;
    mensaje += `El monto total es de: ${precioTotal} <br> Noches totales ${noches}`;
  }

  document.querySelector("#pEj26").innerHTML = mensaje;
}

//Ejercicio 27

document.querySelector("#btnJugadores").addEventListener("click", adivinar);

let contadorJuego = 0;

function adivinar() {
  contador++;
  let num1 = Number(document.querySelector("#txtJugador1").value);
  let num2 = Number(document.querySelector("#txtJugador2").value);
  let mensaje = "";
  let distancia = Math.abs(num1 - num2);

  if (distancia >= 1 && distancia <= 4) {
    mensaje += "Muy pero mut cerca";
  } else if (distancia >= 5 && distancia <= 9) {
    mensaje += "Cada vez mas cerca";
  } else if (distancia >= 10 && distancia <= 15) {
    mensaje += "Te estas acercando";
  } else if (distancia === 0) {
    mensaje += "Acertaste <br> Cantidad de intentos: " + contadorJuego;
  } else {
    mensaje += "Estas lejos";
  }

  document.querySelector("#pJugadores").innerHTML = mensaje;
}
