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
    document.querySelector("#pResultadoSuma").innerHTML = "El resultado de la suma es: " + resultadoSuma;
}

//Ejercico 3

document.querySelector("#btnSumar").addEventListener("click", calcular);

function calcular() {
    let num1b = Number(document.querySelector("#txtNum1b").value);
    let num2b = Number(document.querySelector("#txtNum2b").value);
    let num3b = Number(document.querySelector("#txtNum3b").value);
    
    let resultadoSumaB = num1b + num2b + num3b;
    document.querySelector("#pSumaTotal").innerHTML = "El resultado total es: " + resultadoSumaB;
}

//Ejercico 4

document.querySelector("#btnSumarb").addEventListener("click", sumab);


function sumab() {
    let num1c = Number(document.querySelector("#txtNum1c").value);
    let num2c = Number(document.querySelector("#txtNum2c").value);

    let sumaDeNum = num1c + num2c;

    document.querySelector("#pResultadoSumab").innerHTML = "El resultado de la suma es: " + sumaDeNum;
}

document.querySelector("#btnMultiplicar").addEventListener("click", producto);

function producto() {
    let num1c = Number(document.querySelector("#txtNum1c").value);
    let num2c = Number(document.querySelector("#txtNum2c").value);

    let productoDeNum = num1c * num2c;

    
    document.querySelector("#pResultadoMultiplicacion").innerHTML = "El resultado del producto es: " + productoDeNum;
}

//Ejercico 5

document.querySelector("#btnArea").addEventListener("click", area);

function area() {
    let largo = Number(document.querySelector("#txtLado").value);

    let areaTotal = largo**2;

    document.querySelector("#pAreaTotal").innerHTML = "El area total es: " + areaTotal;
}

//Ejercico 6
document.querySelector("#btnCambio").addEventListener("click", conversion);

function conversion() {
    let pesosUy = Number(document.querySelector("#txtPesosUy").value);

    let valorCambio = Number(document.querySelector("#txtValorCambio").value);

    let conversionFinal = pesosUy / valorCambio;

    document.querySelector("#pcambioTotal").innerHTML = "El resultado de la conversion es: " + conversionFinal;
}

//Ejercicio 7
document.querySelector("#btnResto").addEventListener("click", calcularResto);

function calcularResto() {
    let dividendo = Number(document.querySelector("#txtValor1").value);

    let divisor = Number(document.querySelector("#txtValor2").value);

    let restoFinal = dividendo % divisor;

    document.querySelector("#pResto").innerHTML = "El resto total es: " + restoFinal;
}

//Ejercicio 8
document.querySelector("#btnTotalOperacion").addEventListener("click", operacion);

function operacion() {
    let numb1 = Number(document.querySelector("#txtNumber1").value);

    let numb2 = Number(document.querySelector("#txtNumber2").value);

    let numb3 = Number(document.querySelector("#txtNumber3").value);

    let valorTotal = (numb1 + numb2) - numb3;

    document.querySelector("#pTotalOperacion").innerHTML = "Resultado final: " + valorTotal;
}