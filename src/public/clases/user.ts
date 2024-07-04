 
 // DECORADORES DE CLASES
 // un decorador es una funcion que expande la clase añadiendole caracteristicas y funcionalidades propias
 // los extends a diferencia de los decoradores los extends expanden la clase

 function imprimirConsola( constructorClase: Function ) {
    console.log( constructorClase );
 }

 @imprimirConsola
export class User {
    constructor(
        public nombre: string,
        public clave: string
    ) {}

    imprimir() {
        console.log(`${this.nombre} - ${this.clave}`);
    }
}