class Sistema {
    constructor() {
        this.idPelicula = 7;
        this.peliculas = [
            new Pelicula(1, "Harry Potter", 2005, 3, 2, 250, "../img/harryPotter.webp", "facu1234"),
            new Pelicula(2, "Titanic", 1997, 11, 2, 3, "../img/titanic.jpg", "pablo04"),
            new Pelicula(5, "Buscando a Nemo", 2002, 3, 1, 8, "../img/buscandoANemo.webp", "pablo04")
        ];

        this.generos = [
            new Genero(3, "Ciencia ficción", 18),
            new Genero(10, "Comedia", 16),
            new Genero(11, "Drama", 23)
        ];

        this.usuarios = [
            new Usuario("facu1234", "1234", "Facundo"),
            new Usuario("pablo04", "4321", "Pablo")
        ];
    }

    obtenerUsuario(pUsr, pContra) {
        let usr = null;

        for(let i = 0; i < this.usuarios.length; i++) {
            let usuario = this.usuarios[i];

            if(pUsr === usuario.nomUsuario && pContra === usuario.contrasenia) {
                usr = usuario;
            }
        }

        return usr;
    }

    eliminarPelicula(pId) {
        for(let i = 0; i < this.peliculas.length; i++) {
            let peli = this.peliculas[i];

            if(pId === peli.id) {
                this.peliculas.splice(i, 1);
                break;
            }
        }
    }

    registrarPelicula(pNombre, pAnio, pIdGenero, pCantVotantes, pPuntosTotales, pImagen, pNomUsuario) {
        this.peliculas.push(new Pelicula(this.idPelicula, pNombre, pAnio, pIdGenero, pCantVotantes, pPuntosTotales, pImagen, pNomUsuario));
        this.idPelicula++;
    }
    
    existePelicula(pNombre) {
        let existe = false;
    
        for(let i = 0; i < this.peliculas.length; i++) {
            let p = this.peliculas[i];
    
            if(pNombre === p.nombre) {
                existe = true;
                break;
            }
        }
    
        return existe;
    }

    cantidadDePeliculas(pIdGenero) {
        let cant = 0;

        for(let i = 0; i < this.peliculas.length; i++) {
            let p = this.peliculas[i];

            if(pIdGenero === p.idGenero) {
                cant++;
            }
        }

        return cant;
    }

    obtenerPelicula(pNombre) {
        let objPeli = null;
    
        for(let i = 0; i < this.peliculas.length; i++) {
            let p = this.peliculas[i];
    
            if(pNombre === p.nombre) {
                objPeli = p;
                break;
            }
        }
    
        return objPeli;
    }

    obtenerPeliculas(pNombre) {
        let peliculasEncontradas = [];

        for(let i = 0; i < this.peliculas.length; i++) {
            let p = this.peliculas[i];
    
            if(p.nombre.toLowerCase().includes(pNombre.toLowerCase())) {
                peliculasEncontradas.push(p);
            }
        }

        return peliculasEncontradas;
    }

    obtenerGenero(pId) {
        let objGenero = null;
    
        for(let i = 0; i < this.generos.length; i++) {
            let g = this.generos[i];
    
            if(pId === g.id) {
                objGenero = g;
                break;
            }
        }
    
        return objGenero;
    }
}

