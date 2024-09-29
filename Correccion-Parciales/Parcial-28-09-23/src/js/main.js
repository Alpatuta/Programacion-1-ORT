document.querySelector("#btnEnviar").addEventListener("click", calcular);

let gananciasTotal = 0;

function calcular() {
  let nombreBanda = document.querySelector("#txtBanda").value;
  let horasEnsayo = Number(document.querySelector("#txtHoras").value);
  let sala = document.querySelector("#slcSalas").value;
  let valorHora = 380;
  let valorTotal = valorHora * horasEnsayo;

  if (nombreBanda === "") {
    mensaje1 += "Datos invalidos";
  } else if (horasEnsayo <= 0 || horasEnsayo >= 12) {
    mensaje1 += "Datos invalidos";
  }

  if (nombreBanda.indexOf("o") !== nombreBanda.lastIndexOf("o")) {
    valorTotal = (valorTotal * 45) / 100;
  } else if (nombreBanda.toLowerCase().includes("panda")) {
    valorTotal = (valorTotal * 35) / 100;
  } else if (horasEnsayo > 3) {
    valorTotal = (valorTotal * 20) / 100;
  }

  if (sala === "pardo") {
    valorTotal -= 200;
  }

  gananciasTotal += valorTotal;

  document.querySelector("#pMensaje1").innerHTML = `Valor total: ${valorTotal}`;
  document.querySelector(
    "#pMensaje2"
  ).innerHTML = `Ganancias totales: ${gananciasTotal}`;
}

//Ejercicio 2
document.querySelector("#btnBoton").addEventListener("click", mostrarTexto);

function mostrarTexto() {
  let texto = document.querySelector("#txtTexto").value;
  let caracteresTexto = texto.length;
  let primerCaracter = texto.charAt(0);
  let contadorLetras = 0;

  texto = texto.toLowerCase();

  for (let i = 0; i < texto.length; i++) {
    let codigo = texto.charAt(i);

    if (codigo === primerCaracter) {
      contadorLetras++;
    }
  }

  document.querySelector("#pResultado").innerHTML =
    "Cantidad de caracteres: " +
    caracteresTexto +
    "<br>" +
    "Cantidad de letras iguales al primer caracter: " +
    contadorLetras;
}
