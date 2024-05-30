
export class Usuario {
    constructor(
        public nombre: string,
        public edad  : number,
        public empleado: boolean = true,
        public password: string,
    ) {}

    imprimir(){
        console.log(`${this.nombre} - ${this.password}`);
    }
}