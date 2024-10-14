document.querySelector("#btnRegistrar").addEventListener("click", registrar);

let sumaBonos = 0;

function registrar() {
    let nombre = document.querySelector("#txtNombre").value;
    let cantMeses = Number(document.querySelector("#txtCantidadMeses").value);
    let tipoTarjeta = document.querySelector("#slcTarjeta").value;

    document.querySelector("#pErrores").innerHTML = "";


    if(nombre.length >= 2 && !isNaN(cantMeses) && cantMeses > 0 && tipoTarjeta !== "#") {
        let bono = 0;

        if(tipoTarjeta === "gold") {
            bono = 200;
        } else if(tipoTarjeta === "platinum") {
            bono = 300;
        } else {
            bono = 500;
        }

        if(cantMeses > 12 && tipoTarjeta === "platinum") {
            bono += bono * 0.20;
        } else if(cantMeses > 12 && tipoTarjeta === "infinite") {
            bono += bono * 0.30;
        }

        sumaBonos += bono;
        document.querySelector("#pTotal").innerHTML = "Bono acumulado por el total de las ventas: $" + sumaBonos;
    
        document.querySelector("#pAvisos").innerHTML += `Venta registrada correctamente al cliente ${nombre}, bono generado en esta venta: ${bono}.<br>`;
    } else {
        document.querySelector("#pErrores").innerHTML = "Error. Verifique los datos!";
    }
}

document.querySelector("#btnBoton").addEventListener("click", convertir);

function convertir() {
    let texto = document.querySelector("#txtTexto").value;
    let textoFinal = "";
    let contador = 0;

    for(let i = 0; i < texto.length; i++) {
        let letra = texto.charAt(i).toLowerCase();

        if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            textoFinal += "x";
            contador++;
        } else {
            textoFinal += texto.charAt(i);
        }
    }

    document.querySelector("#pResultado").innerHTML = textoFinal + " - Se realizaron " + contador + " cambios.";


}