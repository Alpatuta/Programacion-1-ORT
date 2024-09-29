document.querySelector("#btnEnviar").addEventListener("click", calcular);

function calcular() {
  let nombreBanda = document.querySelector("#txtBanda").value;
  let horasEnsayo = Number(document.querySelector("#txtHoras").value);
  let sala = document.querySelector("#slcSalas").value;
  let valorHora = 380;
  let valorTotal = valorHora * horasEnsayo;
  let gananciasTotal = 0;
  let mensaje1 = "";
  let mensaje2 = "";

  if (nombreBanda === "") {
    mensaje1 += "Datos invalidos";
  } else if (horasEnsayo <= 0 || horasEnsayo >= 12) {
    mensaje1 += "Datos invalidos";
  }

  if (nombreBanda.toLowerCase().indexOf("panda") !== -1) {
    valorTotal = (valorTotal * 35) / 100;
    mensaje1 += "Valor a pagar: " + valorTotal;
  } else if (horasEnsayo > 3) {
    valorTotal = (valorTotal * 20) / 100;
    mensaje1 += "Valor a pagar: " + valorTotal;
  } else if (nombreBanda.indexOf("o") !== nombreBanda.lastIndexOf("o")) {
    valorTotal = (valorTotal * 45) / 100;
    mensaje1 += "Valor a pagar: " + valorTotal;
  } else if (sala === "pardo") {
    valorTotal -= 200;
  }

  gananciasTotal += valorTotal;
  mensaje2 += "Ganancias totales: " + gananciasTotal;

  document.querySelector("#pMensaje1").innerHTML = mensaje1;
  document.querySelector("#pMensaje2").innerHTML = mensaje2;
}
