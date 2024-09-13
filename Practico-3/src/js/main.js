//Ejercicio 1
document.querySelector("#btnImprimir").addEventListener("click", Ej1);

let mostrarNum = true;

function Ej1() {
  if (mostrarNum) {
    let mensaje = "";
    for (let i = 1; i <= 1000; i++) {
      mensaje += i + "<br>";
    }
    document.querySelector("#pNum").innerHTML = mensaje;
  } else {
    document.querySelector("#pNum").innerHTML = "";
  }

  mostrarNum = !mostrarNum;
}

//Ejercicio 2

let msj = "";

for (let i = -100; i <= 10; i++) {
  msj += i + ", ";
}

document.querySelector("#pNum2").innerHTML = msj;

//Ejercicio 3

let msj2 = "";

for (let i = 40; i >= 10; i--) {
  msj2 += i + ", ";
}

document.querySelector("#pNum3").innerHTML = msj2;

//Ejercicio 4

let msj3 = "";

for (let i = 20; i >= -30; i--) {
  msj3 += i + ", ";
}

document.querySelector("#pNum4").innerHTML = msj3;

//Ejercicio 5
let msj4 = "";

for (let i = 1; i <= 450; i++) {
  if (i % 5 === 0) {
    msj4 += i + ", ";
  }
}

document.querySelector("#pNum5").innerHTML = msj4;

//Ejercicio 6
let msj5 = "";

for (let i = -33; i <= 230; i++) {
  if (i % 4 === 0) {
    msj5 += i + ", ";
  }
}
document.querySelector("#pNum6").innerHTML = msj5;

//Ejercicio 7
document.querySelector("#btnEj7").addEventListener("click", ej7);

function ej7() {
  let num1 = Number(document.querySelector("#txtEj7").value);
  let msj6 = "";

  if (num1 >= 2 && num1 <= 50) {
    for (let i = 1; i <= num1; i++) {
      msj6 += "-";
    }
  } else {
    msj6 = "Ingrese un numero entre 2 y 50";
  }

  document.querySelector("#pNum7").innerHTML = msj6;
}

//Ejercicio 8

document.querySelector("#btnIngresar").addEventListener("click", ej8);

function ej8() {
  let num1 = Number(document.querySelector("#txtNum1").value);
  let num2 = Number(document.querySelector("#txtNum2").value);
  let msj7 = "";

  if (num1 > num2) {
    for (num1; num1 >= num2; num1--) {
      msj7 += num1 + ", ";
    }
  } else if (num2 > num1) {
    for (num2; num2 >= num1; num2--) {
      msj7 += num2 + ", ";
    }
  }

  document.querySelector("#pEj8").innerHTML = msj7;
}

//Ejercicio 9
document.querySelector("#btnCalcular").addEventListener("click", ej9);

function ej9() {
  let valor1 = Number(document.querySelector("#txtValor1").value);
  let valor2 = Number(document.querySelector("#txtValor2").value);
  let msj8 = "";
  let resultado = 0;

  for (let i = 0; i < Math.abs(valor2); i++) {
    resultado += valor1;
  }
  msj8 += `El resultado es: ${resultado} <br>`;

  document.querySelector("#pCalcular").innerHTML = msj8;
}

//Ejercicio 10
document.querySelector("#btnEj10").addEventListener("click", ej10);

function ej10() {
  let num1 = Number(document.querySelector("#txtEj10").value);
  let num2 = Number(document.querySelector("#txtEj10b").value);
  let msj9 = "";
  let resultado2 = 1;

  for (let i = num1; i <= num2; i++) {
    resultado2 *= i;
  }

  msj9 += `El resultado es: ${resultado2}`;

  document.querySelector("#pEj10").innerHTML = msj9;
}

//Ejercicio 11

document.querySelector("#btnEj11").addEventListener("click", ej11);

function ej11() {
  let num1 = Number(document.querySelector("#txtEj11").value);
  let num2 = Number(document.querySelector("#txtEj11b").value);
  let num3 = Number(document.querySelector("#txtEj11c").value);
  let msj10 = "";

  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      if (i % num3 === 0) {
        msj10 += i + ", ";
      }
    }
  } else if (num2 < num1) {
    for (let i = num2; i <= num1; i++) {
      if (i % num3 === 0) {
        msj10 += i + ", ";
      }
    }
  }

  document.querySelector(
    "#pEj11"
  ).innerHTML = `Los numeros multiplos son: ${msj10}`;
}

//Ejercicio 12
document.querySelector("#btnEj12").addEventListener("click", ej12);

function ej12() {
  let num1 = Number(document.querySelector("#txtEj12").value);
  let msj11 = "";
  let resultado3 = 1;

  for (let i = 1; i <= num1; i++) {
    resultado3 *= i;
  }

  msj11 += `El resultado es: ${resultado3}`;

  document.querySelector("#pEj12").innerHTML = msj11;
}

//Ejercicio 13

document.querySelector("#btnEj13").addEventListener("click", ej13);

function ej13() {
  let alto = Number(document.querySelector("#txtEj13").value);
  let ancho = Number(document.querySelector("#txtEj13b").value);
  let msj12 = "";

  for (let i = 0; i < alto; i++) {
    for (let j = 0; j < ancho; j++) {
      msj12 += "#";
    }
    msj12 += "<br>";
  }

  document.querySelector("#pEj13").innerHTML = msj12;
}

//Ejercicio 14
document.querySelector("#btnEj14").addEventListener("click", ej14);

function ej14() {
  let numD = Number(document.querySelector("#txtEj14").value);
  let msj13 = "";
  let cantidadNum = 0;

  while (numD >= 1) {
    numD = numD / 10;
    cantidadNum++;
  }

  msj13 += `La cantidad de digitos es: ${cantidadNum}`;
  document.querySelector("#pEj14").innerHTML = msj13;
}

//Ejercicio 15
document.querySelector("#btnEj15").addEventListener("click", ej15);

function ej15() {
  let num1 = Number(document.querySelector("#txtEj15").value);
  let msj14 = "";

  if (num1 >= 2000) {
    while (num1 >= 2000 && num1 > 100) {
      num1 = num1 / 20;
      msj14 += `${num1}`;
    }
  } else {
    msj14 += "Ingrese un numero correcto, mayor a 2000";
  }

  document.querySelector("#pEj15").innerHTML = msj14;
}
