class Sistema {
    constructor() {
        this.personas = [];
    }

    alamacenarDatos(pNombre, pEdad, pNacionalidad){
        this.personas.push(new Persona(pNombre, pEdad, pNacionalidad));
    }
}