/* 
// Guardo los nuevos usuarios en un array
let misUsuarios = [];

// Creo instancias de la clase Usuario
let u1 = new Usuario("Facundo", "Facu1234", "1234");
let u2 = new Usuario("Milagros", "Mili4321", "4321");

// Consulta la propiedad de una instancia de clase
console.log(u1.nombre);

// Modificar el valor de una propiedad
u1.nombre = "Maximiliano";
console.log(u1.nombre);

// Guardo mis instancias en el array
misUsuarios.push(u1);
misUsuarios.push(u2);

// Obtener una instancia de mi array y luego modificar su nombre
let usr = misUsuarios[1];
console.log(usr.nombreUsuario);

usr.nombre = "Juan";
console.log(u2.nombre);

console.log(misUsuarios);
*/

document.querySelector("#btnRegistrar").addEventListener("click", tomarDatosRegistro);
document.querySelector("#btnLogin").addEventListener("click", tomarDatosLogin);

let usuarios = [];

/*
    REGISTRO DE USUARIO
*/
function tomarDatosRegistro() {
    let nombre = document.querySelector("#txtNombre").value;    
    let contra = document.querySelector("#txtContra").value;    
    let usuario = document.querySelector("#txtUsuario").value;    
    
    if(existeUsuario(usuario)) {
        document.querySelector("#pRegistro").innerHTML = "Ya existe un usuario con ese nombre";
    } else {
        registrar(nombre, contra, usuario);
        document.querySelector("#pRegistro").innerHTML = "Registro exitoso!";
    }
}

function existeUsuario(pUsuario) {
    let existe = false;

    for(let i = 0; i < usuarios.length; i++) {
        let usr = usuarios[i];

        if(usr.nombreUsuario === pUsuario) {
            existe = true;
            break;
        }
    }

    return existe;
}

function registrar(pNombre, pContra, pUsuario) {
    let usr = new Usuario(pNombre, pUsuario, pContra);
    usuarios.push(usr);
}

/*
    LOGIN DE USUARIO
*/

function tomarDatosLogin() {
    let usuario = document.querySelector("#txtUsuarioLogin").value;    
    let contra = document.querySelector("#txtContraLogin").value;   

    let loginExitoso = login(usuario, contra);

    if(loginExitoso) {
        document.querySelector("#pLogin").innerHTML = "Login exitoso";
    } else {
        document.querySelector("#pLogin").innerHTML = "Usuario y/o contraseña incorrecta";
    }
}

function login(pUsuario, pContra) {
    let loginExitoso = false;

    for(let i = 0; i < usuarios.length; i++) {
        let usr = usuarios[i];

        if(usr.nombreUsuario === pUsuario && usr.contrasenia === pContra) {
            loginExitoso = true;
            break;
        }
    }

    return loginExitoso;
}
