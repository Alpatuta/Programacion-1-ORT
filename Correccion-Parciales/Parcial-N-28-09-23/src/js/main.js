document.querySelector("#btnCalcular").addEventListener("click", jugadores);

function jugadores() {
  let nombreYApellido = document.querySelector("#txtNombreYApellido").value;
  let sueldoMensual = document.querySelector("#txtSueldoMensual").value;
  let posicion = document.querySelector("#slcPosicion").value;
  let primerLetra = nombreYApellido.charAt(0).toLowerCase();
  let mensaje = "";
  let contadorMay = 0;
  let contadorExito = 0;

  if (nombreYApellido.length < 5 || nombreYApellido.length > 60) {
    mensaje = "Nombre inválido";
  } else if (primerLetra === nombreYApellido.charAt(0)) {
    mensaje += "Nombre inválido";
  } else {
    mensaje;
  }

  for (let i = 0; i < nombreYApellido.length; i++) {
    let recorrer = nombreYApellido.charAt(i);

    if (recorrer === nombreYApellido.charAt(i).toUpperCase()) {
      contadorMay++;
    }
  }

  if (contadorMay > 3) {
    mensaje += "Nombre inválido";
  } else {
    mensaje;
  }

  let sueldoAnual = 0;
  let bonus = 0;

  if (isNaN(sueldoMensual) || sueldoMensual < 0) {
    mensaje += "Sueldo inválido";
  }

  if (posicion === "delantero" || posicion === "arquero") {
    bonus = sueldoMensual * 0.15;
    sueldoMensual = sueldoMensual + bonus;
    sueldoAnual += sueldoMensual * 12;
    contadorExito++;
  } else if (posicion === "centro") {
    bonus = sueldoMensual * 0.1;
    sueldoMensual = sueldoMensual + bonus;
    sueldoAnual += sueldoMensual * 12;
    contadorExito++;
  } else {
    sueldoAnual += sueldoMensual * 12;
    contadorExito++;
  }

  if (contadorExito > 10) {
    document.querySelector("#btnCalcular").disabled = true;
  }
  document.querySelector(
    "#pMostrar"
  ).innerHTML = `${mensaje} <br> Jugador: ${nombreYApellido} <br> Sueldo Anual: ${sueldoAnual}`;
}
