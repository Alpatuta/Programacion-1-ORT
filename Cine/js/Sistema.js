class Sistema {
    constructor() {
        this.peliculas = [
            new Pelicula("Harry Potter", 2005, 3, 2, 250),
            new Pelicula("Titanic", 1997, 11, 2, 3),
            new Pelicula("Buscando a Nemo", 2002, 3, 1, 8),

        ];

        this.generos = [
            new Genero(3, "Ciencia ficción", 18),
            new Genero(10, "Comedia", 16),
            new Genero(11, "Drama", 23)
        ];
    }

    registrarPelicula(pNombre, pAnio, pIdGenero, pCantVotantes, pPuntosTotales) {
        this.peliculas.push(new Pelicula(pNombre, pAnio, pIdGenero, pCantVotantes, pPuntosTotales));
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

