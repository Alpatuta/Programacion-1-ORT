//Ejercicio 1
document.querySelector("#btnEj1").addEventListener("click", ej1);

function ej1() {
  let num1 = Number(document.querySelector("#txtEj1").value);

  if (num1 >= 0) {
    document.querySelector("#pEj1").innerHTML = "El numero es positivo";
  } else {
    document.querySelector("#pEj1").innerHTML = "El numero es negativo";
  }
}

//Ejercicio 2
document.querySelector("#btnEj2").addEventListener("click", ej2);

function ej2() {
  let num2 = Number(document.querySelector("#txtEj2").value);

  if (num2 > 10) {
    alert("Es mayor a 10");
  } else {
    alert("No es mayor a 10");
  }
}

//Ejercicio 3
