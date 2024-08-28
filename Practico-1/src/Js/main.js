//Ejercico 1
document.querySelector("#btnEnviar").addEventListener("click", enviar);

function enviar() {
  let nombre = document.querySelector("#txtNombre").value;
  let apellido = document.querySelector("#txtApellido").value;
  let mensaje = apellido + " , " + nombre;
  document.querySelector("#pNombreApellido").innerHTML = mensaje;
}

//Ejercicio 2
document.querySelector("#btnCalcular").addEventListener("click", sumar);

function sumar() {
  let num1 = Number(document.querySelector("#txtNum1").value);
  let num2 = Number(document.querySelector("#txtNum2").value);

  let resultadoSuma = num1 + num2;
  document.querySelector("#pResultadoSuma").innerHTML =
    "El resultado de la suma es: " + resultadoSuma;
}

//Ejercico 3

document.querySelector("#btnSumar").addEventListener("click", calcular);

function calcular() {
  let num1b = Number(document.querySelector("#txtNum1b").value);
  let num2b = Number(document.querySelector("#txtNum2b").value);
  let num3b = Number(document.querySelector("#txtNum3b").value);

  let resultadoSumaB = num1b + num2b + num3b;
  document.querySelector("#pSumaTotal").innerHTML =
    "El resultado total es: " + resultadoSumaB;
}

//Ejercico 4

document.querySelector("#btnSumarb").addEventListener("click", sumab);

function sumab() {
  let num1c = Number(document.querySelector("#txtNum1c").value);
  let num2c = Number(document.querySelector("#txtNum2c").value);

  let sumaDeNum = num1c + num2c;

  document.querySelector("#pResultadoSumab").innerHTML =
    "El resultado de la suma es: " + sumaDeNum;
}

document.querySelector("#btnMultiplicar").addEventListener("click", producto);

function producto() {
  let num1c = Number(document.querySelector("#txtNum1c").value);
  let num2c = Number(document.querySelector("#txtNum2c").value);

  let productoDeNum = num1c * num2c;

  document.querySelector("#pResultadoMultiplicacion").innerHTML =
    "El resultado del producto es: " + productoDeNum;
}

//Ejercico 5

document.querySelector("#btnArea").addEventListener("click", area);

function area() {
  let largo = Number(document.querySelector("#txtLado").value);

  let areaTotal = largo ** 2;

  document.querySelector("#pAreaTotal").innerHTML =
    "El area total es: " + areaTotal;
}

//Ejercico 6
document.querySelector("#btnCambio").addEventListener("click", conversion);

function conversion() {
  let pesosUy = Number(document.querySelector("#txtPesosUy").value);

  let valorCambio = Number(document.querySelector("#txtValorCambio").value);

  let conversionFinal = pesosUy / valorCambio;

  document.querySelector("#pcambioTotal").innerHTML =
    "El resultado de la conversion es: " + conversionFinal;
}

//Ejercicio 7
document.querySelector("#btnResto").addEventListener("click", calcularResto);

function calcularResto() {
  let dividendo = Number(document.querySelector("#txtValor1").value);

  let divisor = Number(document.querySelector("#txtValor2").value);

  let restoFinal = dividendo % divisor;

  document.querySelector("#pResto").innerHTML =
    "El resto total es: " + restoFinal;
}

//Ejercicio 8
document
  .querySelector("#btnTotalOperacion")
  .addEventListener("click", operacion);

function operacion() {
  let numb1 = Number(document.querySelector("#txtNumber1").value);

  let numb2 = Number(document.querySelector("#txtNumber2").value);

  let numb3 = Number(document.querySelector("#txtNumber3").value);

  let valorTotal = numb1 + numb2 - numb3;

  document.querySelector("#pTotalOperacion").innerHTML =
    "Resultado final: " + valorTotal;
}

//Ejercicio 9
document.querySelector("#btnOperar").addEventListener("click", calculo);

function calculo() {
  let value1 = Number(document.querySelector("#txtNumber1b").value);
  let value2 = Number(document.querySelector("#txtNumber2b").value);
  let value3 = Number(document.querySelector("#txtNumber3b").value);

  let totalValue = value1 ** 2 - (value2 + value3);

  document.querySelector("#pOperacion").innerHTML =
    "El resultado final es: " + totalValue;
}

//Ejercicio 10
document.querySelector("#btnValue").addEventListener("click", ej);

function ej() {
  let importe = Number(document.querySelector("#txtValor1b").value);
  let recarga = Number(document.querySelector("#txtValor2b").value);
  let recargaDecimal = (recarga * importe) / 100;

  let importeFinal = recargaDecimal + importe;

  document.querySelector("#pFinalValue").innerHTML =
    "El resultado final es: " + importeFinal;
}

//Ejercicio 11
document.querySelector("#btnIva").addEventListener("click", importeIva);

function importeIva() {
  let importeIngresado = Number(document.querySelector("#txtImporte").value);

  let calcularIva = (22 * importeIngresado) / 100;

  let importeTotal = calcularIva + importeIngresado;

  document.querySelector("#pValorFinal").innerHTML =
    "El importe final es: " + importeTotal;
}

//Ejercicio 12
document.querySelector("#btnImc").addEventListener("click", imcTotal);

function imcTotal() {
  let peso = Number(document.querySelector("#txtPeso").value);
  let altura = Number(document.querySelector("#txtAltura").value);

  let imcFinal = peso / altura ** 2;

  document.querySelector("#pImcTotal").innerHTML =
    "El IMC final es: " + imcFinal.toFixed(2);
}

//Ejercicio 13
document.querySelector("#btnAgregar").addEventListener("click", agregar);

let clicks = 0;

function agregar() {
  clicks++;

  document.querySelector("#pAgregarUnidad").innerHTML = clicks;
}

//Ejercicio 14
document.querySelector("#btnCalcular2").addEventListener("click", sumaDeTres);

let num = 0;

function sumaDeTres() {
  num = num + 3;
  document.querySelector("#pSumarTres").innerHTML = num;
}

//Ejercicio 15
document.querySelector("#btnAcumular").addEventListener("click", acumular);

let sumaNum = 0;

function acumular() {
  let num = Number(document.querySelector("#txtAcumular").value);

  sumaNum = sumaNum + num;
}

document.querySelector("#btnMostrar").addEventListener("click", mostrar);

function mostrar(params) {
  sumaNum;

  document.querySelector("#pMostarTotal").innerHTML = sumaNum;
}

//Ejercicio 16
document.querySelector("#btnPuntos").addEventListener("click", puntos);

function puntos() {
  let ganados = Number(document.querySelector("#txtGanados").value);
  let empatados = Number(document.querySelector("#txtEmpatados").value);
  let perdidos = Number(document.querySelector("#txtPerdidos").value);

  let totalPuntos = ganados * 3 + empatados;

  document.querySelector("#pPuntosTotal").innerHTML =
    "Puntos totales: " + totalPuntos;
}

//Ejercicio 17
document.querySelector("#btnFarenheit").addEventListener("click", farenheit);

function farenheit() {
  let chirridos = Number(document.querySelector("#txtChirridos").value);

  let tempFarenheit = 50 + (chirridos - 40) / 4;

  document.querySelector("#pFahrenheit").innerHTML =
    "La temperatura en Farenheit es: " + tempFarenheit.toFixed(2);
}

document.querySelector("#btnCelsius").addEventListener("click", celsius);

function celsius() {
  let chirridos = Number(document.querySelector("#txtChirridos").value);

  let tempCelsius = 10 + (chirridos - 40) / 7;

  document.querySelector("#pCelsius").innerHTML =
    "La temperatura en Celsius es: " + tempCelsius.toFixed(2);
}
