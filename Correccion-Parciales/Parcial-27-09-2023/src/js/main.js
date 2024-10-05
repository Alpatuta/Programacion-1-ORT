// Ejercicio 1
document.querySelector("#btnEnviar").addEventListener("click", valorar);

function valorar() {
  let jugador = document.querySelector("#txtJugador").value;
  let puntos = Number(document.querySelector("#txtPuntos").value);
  let rebotes = Number(document.querySelector("#txtRebotes").value);
  let faltas = Number(document.querySelector("#txtFaltas").value);
  let posicion = document.querySelector("#slcPosicion").value;
  let primerLetraNombre = jugador.charCodeAt(0);
  let primerLetraApellido = jugador.charCodeAt(jugador.indexOf(" ") + 1);

  if (
    jugador.length >= 4 &&
    jugador.length <= 30 &&
    primerLetraNombre >= 65 &&
    primerLetraNombre <= 90 &&
    primerLetraApellido >= 65 &&
    primerLetraApellido <= 90 &&
    !isNaN(puntos) &&
    !isNaN(rebotes) &&
    !isNaN(faltas) &&
    puntos >= 0 &&
    rebotes >= 0 &&
    faltas >= 0 &&
    faltas <= 5
  ) {
    let valoracion = puntos + rebotes - faltas;
    let contador = 0;
    let descripcion = "";

    if (posicion === "base") {
      descripcion = "malabarista";
    } else if (posicion === "alero") {
      descripcion = "tirador";
    } else if (posicion === "pivot") {
      descripcion = "rompetableros";
    }

    contador++;

    if (contador >= 12) {
      document.querySelector("#btnEnviar").disabled = true;
    }

    document.querySelector(
      "#pMostrar"
    ).innerHTML += `${jugador} valoracion ${valoracion} ${posicion} ${descripcion}. <br>`;
  } else {
    alert("Datos incorrectos");
  }
}

// Ejercicio 2
document.querySelector("#btnBoton").addEventListener("click", comparar);

function comparar() {
  let texto = document.querySelector("#txtTexto").value;
  let contadorLetras = 0;
  let contadorNumeros = 0;
  let mensaje = "";
  texto = texto.toUpperCase();

  for (let i = 0; i < texto.length; i++) {
    let recorrer = texto.charCodeAt(i);

    if (recorrer >= 65 && recorrer <= 90) {
      contadorLetras++;
    } else if (recorrer >= 48 && recorrer <= 57) {
      contadorNumeros++;
    }
  }

  if (contadorLetras > contadorNumeros) {
    mensaje = "Hay mas letras que numeros";
  } else if (contadorLetras < contadorNumeros) {
    mensaje = "Hay mas numeros que letras";
  } else {
    mensaje = "Hay la misma cantidad de letras y numeros";
  }

  document.querySelector("#pResultado").innerHTML = mensaje;
}
