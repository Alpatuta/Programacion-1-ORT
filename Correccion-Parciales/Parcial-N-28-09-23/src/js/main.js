// Ejercicio 1
document.querySelector("#btnCalcular").addEventListener("click", jugadores);

let contadorExito = 0;

function jugadores() {
  let nombreYApellido = document.querySelector("#txtNombreYApellido").value;
  let sueldoMensual = Number(document.querySelector("#txtSueldoMensual").value);
  let posicion = document.querySelector("#slcPosicion").value;
  let primerLetra = nombreYApellido.charCodeAt(0);
  let contadorMay = 0;

  for (let i = 0; i < nombreYApellido.length; i++) {
    let recorrer = nombreYApellido.charCodeAt(i);

    if (recorrer >= 65 && recorrer <= 90) {
      contadorMay++;
    }
  }

  if (
    nombreYApellido.length >= 5 &&
    nombreYApellido.length <= 60 &&
    primerLetra >= 65 &&
    primerLetra <= 90 &&
    contadorMay <= 3 &&
    sueldoMensual >= 0
  ) {
    let bonus = 0;

    if (posicion === "delantero" || posicion === "arquero") {
      bonus = sueldoMensual * 0.15;
    } else if (posicion === "centro") {
      bonus = sueldoMensual * 0.1;
    }

    let sueldoAnual = (sueldoMensual + bonus) * 12;
    contadorExito++;

    if (contadorExito >= 10) {
      document.querySelector("#btnCalcular").disabled = true;
    }

    document.querySelector(
      "#pMostrar"
    ).innerHTML += `${nombreYApellido} - Sueldo anual: ${sueldoAnual} <br>`;
  } else {
    document.querySelector("#pMostrar").innerHTML += `Error`;
  }
}

//Ejercicio 2
document.querySelector("#btnBoton").addEventListener("click", comparar);

function comparar() {
  let texto = document.querySelector("#txtTexto").value;
  let letra = document.querySelector("#txtLetra").value;
  let contadorMay = 0;
  let contadorMin = 0;
  let msj = "";

  for (let i = 0; i < texto.length; i++) {
    let recorrer = texto.charAt(i);

    if (recorrer === texto.charAt(letra).toLowerCase()) {
      contadorMin++;
    } else if (recorrer === texto.charAt(letra).toUpperCase()) {
      contadorMay++;
    }
  }

  if (contadorMin > contadorMay) {
    msj = "Mas minisuculas que mayusculas";
  } else if (contadorMin < contadorMay) {
    msj = "Mas mayusculas que minusculas";
  } else {
    msj = "Iguales";
  }

  document.querySelector("#pResultado").innerHTML = msj;
}
