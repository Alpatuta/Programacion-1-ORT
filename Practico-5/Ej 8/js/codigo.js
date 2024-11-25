let s = new Sistema();

function precargarComboGeneros() {
    for(let i = 0; i < s.generos.length; i++) {
        let g = s.generos[i];
    
        document.querySelector("#slcGenero").innerHTML += `<option value="${g.id}">${g.nombre}</option>`;
    }
}

precargarComboGeneros();

document.querySelector("#btnRegistrar").addEventListener("click", tomarDatosPelicula);

function tomarDatosPelicula() {
    let nombre = document.querySelector("#txtNombre").value;
    let anio = Number(document.querySelector("#txtAnio").value);
    let idGenero = Number(document.querySelector("#slcGenero").value);
    let cantVotantes = Number(document.querySelector("#txtCantVotantes").value);
    let puntosTotales = Number(document.querySelector("#txtPuntosTotales").value);

    let mensaje = "";

    if(isNaN(anio)) {
        mensaje = "El año debe ser un número.<br>";
    }
    
    if(s.existePelicula(nombre)) {
        mensaje += "Ya existe una película con ese nombre.";
    }

    if(mensaje === "") {
        s.registrarPelicula(nombre, anio, idGenero, cantVotantes, puntosTotales);
        mensaje = "Pelicula registrada con éxito!";
    }

    document.querySelector("#pResultado").innerHTML = mensaje;
}

document.querySelector("#btnPromedio").addEventListener("click", mostrarPromedio);

function mostrarPromedio() {
    // Array de películas
    let peliculas = s.peliculas;

    let cuerpoTabla = "";

    for(let i = 0; i < peliculas.length; i++) {
        let peli = peliculas[i];
        let promedio = peli.puntosTotales / peli.cantVotantes;

        if(promedio >= 4) {
            cuerpoTabla += `<tr>
                                <td>${peli.nombre}</td>
                                <td>${promedio}</td>
                            </tr>`;
        }
    }

    document.querySelector("#cuerpoTabla").innerHTML = cuerpoTabla;
}

document.querySelector("#btnBuscar").addEventListener("click", tomarDatosBusqueda);

function tomarDatosBusqueda() {
    let nombre = document.querySelector("#txtNombrePelicula").value;
    let peli = s.obtenerPelicula(nombre);

    if(peli === null) {
        document.querySelector("#pBusqueda").innerHTML = "No existe una película con ese nombre.";
    } else {
        let objGenero = s.obtenerGenero(peli.idGenero);
        
        document.querySelector("#pBusqueda").innerHTML = `Nombre: ${peli.nombre}<br>Año: ${peli.anio}<br>Edad apta: ${objGenero.edadApta}`;
    }
}

function mostrarCantPeliculas() {
    for(let i = 0; i < s.generos.length; i++) {
        let g = s.generos[i];
        let cant = s.cantidadDePeliculas(g.id);

        document.querySelector("#cuerpoTabla2").innerHTML += `<tr>
                                                                <td>${g.nombre}</td>
                                                                <td>${cant}</td>
                                                            </tr>` ;       
    }
}

mostrarCantPeliculas();
