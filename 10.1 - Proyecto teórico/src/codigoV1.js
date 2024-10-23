document.querySelector("#btnRegistrar").addEventListener("click", tomarDatosRegistro);
document.querySelector("#btnLogin").addEventListener("click", tomarDatosLogin);

let nombres = [];
let usuarios = [];
let contras = [];

/*
    REGISTRO DE USUARIO
*/
function tomarDatosRegistro() {
    let nombre = document.querySelector("#txtNombre").value;    
    let contra = document.querySelector("#txtContra").value;    
    let usuario = document.querySelector("#txtUsuario").value;    
    
    registrar(nombre, contra, usuario);
}

function registrar(pNombre, pContra, pUsuario) {
    nombres.push(pNombre);
    usuarios.push(pUsuario);
    contras.push(pContra);
}

/*
    LOGIN DE USUARIO
*/

function tomarDatosLogin() {
    let usuario = document.querySelector("#txtUsuarioLogin").value;    
    let contra = document.querySelector("#txtContraLogin").value;   
    console.log(usuario, contra); 

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
        let contra = contras[i];

        if(usr === pUsuario && contra === pContra) {
            loginExitoso = true;
            break;
        }
    }

    return loginExitoso;
}
