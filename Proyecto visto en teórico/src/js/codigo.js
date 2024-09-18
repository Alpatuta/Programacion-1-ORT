let texto = "Hola a todos";

let largo = texto.length;
// console.log("Largo del string: " + largo);

/*console.log(texto.charAt(0));
console.log(texto.charAt(1));
console.log(texto.charAt(2));
console.log(texto.charAt(3));
console.log(texto.charAt(4));
console.log(texto.charAt(30));*/

// Recorrer strings
for(let i = 0; i <= texto.length - 1; i++) { // i < texto.length
    console.log(texto.charAt(i));
}

// IndexOf y LastIndexOf
console.log(texto.indexOf("todos")); // 7
console.log(texto.indexOf("casa")); // -1
console.log(texto.indexOf(" a ")); // 4
console.log(texto.indexOf("hola")); // -1

console.log(texto.indexOf("a")); // 3
console.log(texto.lastIndexOf("a")); // 5

let email = "facu@gmail.com";

email.indexOf("@"); // 4
email.lastIndexOf("@"); // 4

if(email.indexOf("@") === email.lastIndexOf("@") && email.indexOf("@") !== -1) {
    console.log("Email válido");
} else {
    console.log("Email inválido");
}

let email2 = "facu@outl@oo@k.com";
let contador = 0;

for(let i = 0; i < email2.length; i++) {
    let letra = email2.charAt(i);

    if(letra === "@") {
        contador++;
    }
}

console.log("Mi email tiene " + contador + " @");

// ----------------------------------------------------------------------------------

let texto2 = "Programación 1";

let textoAMay = texto2.toUpperCase();
let textoAMin = texto2.toLowerCase();

// ----------------------------------------------------------------------------------

let texto3 = "Había una vez un LoBo feroz....";
let palabraABuscar = "LOBO";

console.log(texto3.indexOf(palabraABuscar)); // Case sensitive

let texto3AMin = texto3.toLowerCase();
let palabraAMin = palabraABuscar.toLowerCase();

console.log(texto3AMin.indexOf(palabraAMin)); // Case insensitive

// ----------------------------------------------------------------------------------

let texto4 = "Programación 1 es la mejor materia";
console.log(texto4.substring(0, 20));

let email3 = "pablo@gmail.com";
let posArroba = email3.indexOf("@");

let usuario = email3.substring(0, posArroba);
console.log(usuario);

let dominio = email3.substring(posArroba + 1, email3.length);
console.log(dominio);

// ----------------------------------------------------------------------------------

let texto5 = "Habia una vez. Un lobo feroz.";
let contadorMin = 0;
let contadorMay = 0;

for(let i = 0; i < texto5.length; i++) {
    let codigo = texto5.charCodeAt(i);

    if(codigo >= 65 && codigo <= 90) {
        contadorMay++;
    } else if(codigo >= 97 && codigo <= 122) {
        contadorMin++;
    }
}

console.log("Minúsculas: " + contadorMin);
console.log("Mayúsculas: " + contadorMay);

// ----------------------------------------------------------------------------------

document.querySelector("#btnRegistrar").addEventListener("click", registrar);

function registrar() {
    let nombre = document.querySelector("#txtNombre").value;
    let usuario = document.querySelector("#txtUsuario").value;
    let contrasenia = document.querySelector("#txtContrasenia").value;
    let edad = document.querySelector("#txtEdad").value;
    let cedula = document.querySelector("#txtCedula").value;

    let mensaje = "";

    if(nombre === "") {
        mensaje += "El nombre no puede ser vacío.<br>";
    } else if(nombre.charAt(0) !== nombre.charAt(0).toUpperCase()) {
        mensaje += "El nombre debe comenzar con una mayúscula.<br>";
    } else if(nombre.length < 2 || nombre.length > 20) {
        mensaje += "El nombre debe contener entre 2 y 20 caracteres.<br>";
    } 

    if(usuario === "") {
        mensaje += "El nombre de usuario no puede ser vacío.<br>";
    } else if(usuario.length < 5 || usuario.length > 15) {
        mensaje += "El nombre de usuario debe contener entre 5 y 15 caracteres.<br>";
    }

    if(contrasenia === "") {
        mensaje += "La contraseña no puede ser vacía.<br>";
    } else if(nombre.indexOf(contrasenia) !== -1 || usuario.indexOf(contrasenia) !== -1) {
        mensaje += "La contraseña no puede contener ni el nombre, ni el nombre de usuario.<br>";
    } else if(contrasenia.length < 8 || contrasenia.length > 20) {
        mensaje += "La contraseña debe contener entre 8 y 20 caracteres.<br>";
    } else {
        let contadorMay = 0;
        let contadorNum = 0;

        for(let i = 0; i < contrasenia.length; i++) {
            let codigo = contrasenia.charCodeAt(i);

            if(codigo >= 48 && codigo <= 57) {
                contadorNum++;
            } else if(codigo >= 65 && codigo <= 90) {
                contadorMay++;
            }
        }

        if(contadorMay === 0 || contadorNum === 0) {
            mensaje += "La contraseña debe tener al menos un número y una mayúscula.<br>";
        }
    }
   
    if(edad === "") {
        mensaje += "La edad no puede ser vacía.<br>";
    } else if(isNaN(edad)) {
        mensaje += "La edad debe ser un número.<br>";
    } else if(Number(edad) < 0 || Number(edad) >= 120) {
        mensaje += "La edad debe ser entre 0 y 120.<br>";
    }

    if(cedula === "") {
        mensaje += "La cédula no puede ser vacía.<br>";
    } else if(cedula.length >= 12) {
        mensaje += "La cédula no puede superar los 11 caracteres<br>";
    } 
    
    if(mensaje === "") {
        document.querySelector("#cuerpoTabla").innerHTML += `<tr>
                                                                <td>${nombre}</td>
                                                                <td>${usuario}</td>
                                                                <td>${edad}</td>
                                                                <td>${cedula}</td>
                                                            </tr>`;
                                                            
    }

    document.querySelector("#mensajes").innerHTML = mensaje;


}

