let s = new Sistema();

// FUNCIONES DE MOSTRAR Y OCULTAR

function ocultarTodo() {
  document.querySelector("#sRegistroPelicula").style.display = "none";
  document.querySelector("#sPromedioPeliculas").style.display = "none";
  document.querySelector("#sBuscarPeliculas").style.display = "none";
  document.querySelector("#sPeliculasPorGenero").style.display = "none";
  document.querySelector("#navPrincipal").style.display = "none";
  document.querySelector("#sModificarPelicula").style.display = "none";
}

function ocultarTodoMenosNav() {
  document.querySelector("#sRegistroPelicula").style.display = "none";
  document.querySelector("#sPromedioPeliculas").style.display = "none";
  document.querySelector("#sBuscarPeliculas").style.display = "none";
  document.querySelector("#sPeliculasPorGenero").style.display = "none";
  document.querySelector("#sModificarPelicula").style.display = "none";
}

ocultarTodo();

document
  .querySelector("#aRegistrarPelicula")
  .addEventListener("click", mostrarRegistroPeliculas);
document
  .querySelector("#aBuscarPelicula")
  .addEventListener("click", mostrarBuscadorPeliculas);
document
  .querySelector("#aPromedioPelicula")
  .addEventListener("click", mostrarPromedioPeliculas);
document
  .querySelector("#aPeliculasPorGenero")
  .addEventListener("click", mostrarPeliculasPorGenero);

document.querySelector("#aLogout").addEventListener("click", logout);

function mostrarPeliculasPorGenero() {
  ocultarTodoMenosNav();
  mostrarCantPeliculas();
  document.querySelector("#sPeliculasPorGenero").style.display = "block";
}

function mostrarBuscadorPeliculas() {
  ocultarTodoMenosNav();
  document.querySelector("#sBuscarPeliculas").style.display = "block";
}

function mostrarPromedioPeliculas() {
  ocultarTodoMenosNav();
  document.querySelector("#sPromedioPeliculas").style.display = "block";
}

function mostrarRegistroPeliculas() {
  ocultarTodoMenosNav();
  document.querySelector("#sRegistroPelicula").style.display = "block";
}

function logout() {
  mostrar("sLogin");
  ocultarTodo();
}

function mostrar(id) {
  document.querySelector("#" + id).style.display = "block";
}

function ocultar(id) {
  document.querySelector("#" + id).style.display = "none";
}

// FIN DE FUNCIONES DE MOSTRAR Y OCULTAR

function precargarComboGeneros() {
  for (let i = 0; i < s.generos.length; i++) {
    let g = s.generos[i];

    document.querySelector(
      "#slcGenero"
    ).innerHTML += `<option value="${g.id}">${g.nombre}</option>`;
  }
}

function precargarComboGenerosModificar() {
  document.querySelector("#slcGeneroModificar").innerHTML = "";
  for (let i = 0; i < s.generos.length; i++) {
    let g = s.generos[i];

    document.querySelector(
      "#slcGeneroModificar"
    ).innerHTML += `<option value="${g.id}">${g.nombre}</option>`;
  }
}

precargarComboGeneros();

document
  .querySelector("#btnRegistrar")
  .addEventListener("click", tomarDatosPelicula);

function tomarDatosPelicula() {
  let nombre = document.querySelector("#txtNombre").value;
  let urlImagen = document.querySelector("#txtImagen").value;
  let anio = Number(document.querySelector("#txtAnio").value);
  let idGenero = Number(document.querySelector("#slcGenero").value);
  let cantVotantes = Number(document.querySelector("#txtCantVotantes").value);
  let puntosTotales = Number(document.querySelector("#txtPuntosTotales").value);

  let mensaje = "";

  if (isNaN(anio)) {
    mensaje = "El año debe ser un número.<br>";
  }

  if (s.existePelicula(nombre)) {
    mensaje += "Ya existe una película con ese nombre.";
  }

  if (mensaje === "") {
    s.registrarPelicula(nombre, anio, idGenero, cantVotantes, puntosTotales, urlImagen, usuarioLogueado.nomUsuario);
    mensaje = "Pelicula registrada con éxito!";
  }

  document.querySelector("#pResultado").innerHTML = mensaje;
}

document
  .querySelector("#btnPromedio")
  .addEventListener("click", mostrarPromedio);

function mostrarPromedio() {
  // Array de películas
  let peliculas = s.peliculas;

  let cuerpoTabla = "";

  for (let i = 0; i < peliculas.length; i++) {
    let peli = peliculas[i];
    let promedio = peli.puntosTotales / peli.cantVotantes;

    if (promedio >= 4) {
      let idGenero = peli.idGenero;
      let objGenero = s.obtenerGenero(idGenero);

      cuerpoTabla += `<tr>
                                <td>${peli.nombre}</td>
                                <td>${promedio}</td>
                                <td>${objGenero.edadApta}</td>
                            </tr>`;
    }
  }

  document.querySelector("#cuerpoTabla").innerHTML = cuerpoTabla;
}

document
  .querySelector("#btnBuscar")
  .addEventListener("click", tomarDatosBusqueda);

function tomarDatosBusqueda() {
  let nombre = document.querySelector("#txtNombrePelicula").value;
  let pelis = s.obtenerPeliculas(nombre);
  
  let cuerpoTabla = "";

  for (let i = 0; i < pelis.length; i++) {
    let peli = pelis[i];
    
    if(peli.nomUsuario === usuarioLogueado.nomUsuario) {
      let objGenero = s.obtenerGenero(peli.idGenero);
      cuerpoTabla += `<tr>
                                  <td><img src="${peli.imagen}"></td>
                                  <td>${peli.nombre}</td>
                                  <td>${peli.anio}</td>
                                  <td>${objGenero.edadApta}</td>
                                  <td>
                                    <input type="button" value="Eliminar" class="btnEliminarPelicula" data-id-pelicula="${peli.id}">
                                    <input type="button" value="Modificar" class="btnModificarPelicula" data-id-pelicula="${peli.id}">
                                  </td>

                              </tr>`;
    }
  }

  document.querySelector("#cuerpoBusqueda").innerHTML = cuerpoTabla;
  bindearBotonesEliminar();
  bindearBotonesModificar();

  if (pelis.length === 0) {
    document.querySelector("#pBusqueda").innerHTML =
      "No existe una película con ese nombre.";
  }
}

function bindearBotonesModificar() {
  let botones = document.querySelectorAll(".btnModificarPelicula");

  for(let i = 0; i < botones.length; i++) {
    let boton = botones[i];
    boton.addEventListener("click", modificarPelicula);
  }
}

function modificarPelicula() {
  mostrar("sModificarPelicula");
  precargarComboGenerosModificar();
  ocultar("txtId");
  let idPelicula = Number(this.getAttribute("data-id-pelicula")); 
  let peli = s.obtenerPeliculaPorId(idPelicula);
  document.querySelector("#txtNombreModificar").value = peli.nombre;
  document.querySelector("#txtAnioModificar").value = peli.anio;
  document.querySelector("#slcGeneroModificar").value = peli.idGenero;
  document.querySelector("#txtImagenModificar").value = peli.imagen;
  document.querySelector("#txtId").value = peli.id;
}

function bindearBotonesEliminar() {
  let botones = document.querySelectorAll(".btnEliminarPelicula");

  for (let i = 0; i < botones.length; i++) {
    let boton = botones[i];
    boton.addEventListener("click", eliminarPelicula);
  }
}

function eliminarPelicula() {
  let idPelicula = Number(this.getAttribute("data-id-pelicula"));
  s.eliminarPelicula(idPelicula);
  tomarDatosBusqueda();
}

function mostrarCantPeliculas() {
  document.querySelector("#cuerpoTabla2").innerHTML = "";

  for (let i = 0; i < s.generos.length; i++) {
    let g = s.generos[i];
    let cant = s.cantidadDePeliculas(g.id);

    document.querySelector("#cuerpoTabla2").innerHTML += `<tr>
                                                                <td>${g.nombre}</td>
                                                                <td>${cant}</td>
                                                            </tr>`;
  }
}

//mostrarCantPeliculas();

let usuarioLogueado;

document.querySelector("#btnIngresar").addEventListener("click", ingresar);

function ingresar() {
  let usr = document.querySelector("#txtUsuario").value;
  let contra = document.querySelector("#txtContra").value;

  let usuario = s.obtenerUsuario(usr, contra);

  if(usuario !== null) {
    ocultar("sLogin");
    mostrar("navPrincipal");
    usuarioLogueado = usuario;
    document.querySelector("#txtUsuario").value = "";
    document.querySelector("#txtContra").value = "";
  } else {
    document.querySelector("#pLogin").innerHTML = "Usuario y/o contraseña incorrecto.";
  }
}

document.querySelector("#btnModificar").addEventListener("click", tomarDatosModificarPelicula);

function tomarDatosModificarPelicula() {
  let nombre = document.querySelector("#txtNombreModificar").value;
  let anio = document.querySelector("#txtAnioModificar").value;
  let idGenero = Number(document.querySelector("#slcGeneroModificar").value);
  let imagen = document.querySelector("#txtImagenModificar").value;
  let idPelicula = Number(document.querySelector("#txtId").value);

  s.modificarPelicula(idPelicula, nombre, anio, idGenero, imagen);

  tomarDatosBusqueda();

}

function validar_tarjeta(nro){

  if (!nro) {

      return false

  }

  let suma = 0

  let duplicar = false

  for (let i= nro.length-1 ; i>=0; i--){

      n = Number(nro[i])

      if (duplicar) {

          n = n*2

          if (n > 9) {

              n = n -9

          }

      }

      suma = suma + n

      duplicar = !duplicar

  }



  return (suma%10==0)

}