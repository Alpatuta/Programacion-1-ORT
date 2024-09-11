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

    for (num1; num1 >= num2; num1++){
        msj7 += num1;
    }

    document.querySelector("#pEj8").innerHTML = msj7;

}