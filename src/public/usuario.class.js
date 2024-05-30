"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(nombre, edad, empleado = true, password) {
        this.nombre = nombre;
        this.edad = edad;
        this.empleado = empleado;
        this.password = password;
    }
    imprimir() {
        console.log(`${this.nombre} - ${this.password}`);
    }
}
exports.Usuario = Usuario;
