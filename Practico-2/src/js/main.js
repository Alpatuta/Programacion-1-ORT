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
