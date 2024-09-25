/* alert("Hola mundo!");

function alert(pTexto) {

} */

document.querySelector("#btnSaludar").addEventListener("click", saludar);

function saludar() {
    let nombre = document.querySelector("#txtNombre").value;
    console.log("Hola " + nombre);
}

console.log("Antes");
saludar(); // Invocando/llamando a la función saludar
console.log("Después");

// --------------------------------------------------------------------------

function saludar2(pNombre) { // let nombre = "Facundo"
    console.log("Buen día " + pNombre);
}

saludar2("Facundo");
saludar2("Pablo");
saludar2("Agustina");

let nombre = "Milagros";
saludar2(nombre);

// --------------------------------------------------------------------------

function darBienvenida(pNombre, pGenero) {
    if (pGenero === "m") {
        alert("Bienvenido " + pNombre);
    } else if (pGenero === "f") {
        alert("Bienvenida " + pNombre);
    }
}

///darBienvenida("Facundo", "m");
//darBienvenida("Milagros", "f");
//darBienvenida("Milagros", "p");
//darBienvenida("Milagros", "");

// --------------------------------------------------------------------------

function sumarYMostrarEnParrafo(pNum1, pNum2) {
    let suma = pNum1 + pNum2;
    document.querySelector("#pResultado").innerHTML += suma;
}

let num1 = 12;
let num2 = 10;

sumarYMostrarEnParrafo(num1, num2);

function sumar(pNum1, pNum2) {
    let suma = pNum1 + pNum2;
    return suma;
}

let res = sumar(2, 3);
//alert(res);
document.querySelector("#pResultado").innerHTML = res;
console.log(res);

// --------------------------------------------------------------------------

document.querySelector("#btnRegistrar").addEventListener("click", registrar);
document.querySelector("#btnCambiarContra").addEventListener("click", cambiarContra);

function registrar() {
    let usuario = document.querySelector("#txtUsuario").value;
    let contra = document.querySelector("#txtContrasenia").value;

    let res = validarContraseniaV2(contra);

    if(res) { // res === true
        document.querySelector("#pMensaje").innerHTML = "Registro exitoso!";
    } else {
        document.querySelector("#pMensaje").innerHTML = "La contraseña no puede ser vacía.<br>El largo de la contraseña debe ser mayor a 8.<br>La contraseña debe empezar con una mayúscula.<br>La contraseña debe contener al menos un número.";
    }
}

function cambiarContra() {
    let contra = document.querySelector("#txtNuevaContra").value;
    
    let res = validarContraseniaV2(contra);

    if(res) { // res === true
        document.querySelector("#pMensaje2").innerHTML = "Cambio exitoso!";
    } else {
        document.querySelector("#pMensaje2").innerHTML = "La contraseña no puede ser vacía.<br>El largo de la contraseña debe ser mayor a 8.<br>La contraseña debe empezar con una mayúscula.<br>La contraseña debe contener al menos un número.";
    }
}

function validarContraseniaV2(contra) {
    let esValida = true;

    if (contra === "" || contra.length < 8 || contra.charAt(0).toUpperCase() !== contra.charAt(0)) {
        esValida = false;
    }

    let tieneNumero = false;
    for (let i = 0; i < contra.length; i++) {
        let letra = contra.charAt(i);

        if (isNaN(letra) === false) {
            tieneNumero = true;
            break;
        }
    }

    if (!tieneNumero) {
        esValida = false;
    }

    return esValida;
}


/*function validarContrasenia(contra) {
    let mensaje = "";

    if (contra === "" || contra.length < 8 || contra.charAt(0).toUpperCase() !== contra.charAt(0)) {
        mensaje += "La contraseña no puede ser vacía.<br>El largo de la contraseña debe ser mayor a 8.<br>La contraseña debe empezar con una mayúscula.<br>";
    }

    let tieneNumero = false;
    for (let i = 0; i < contra.length; i++) {
        let letra = contra.charAt(i);

        if (isNaN(letra) === false) {
            tieneNumero = true;
            break;
        }
    }

    if (!tieneNumero) {
        mensaje += "La contraseña debe contener al menos un número";
    }

    if (mensaje === "") {
        mensaje = "Proceso exitoso!";
    }

    return mensaje;
}*/
