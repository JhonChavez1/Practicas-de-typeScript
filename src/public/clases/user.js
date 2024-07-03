"use strict";
// DECORADORES DE CLASES
// un decorador es una funcion que expande la clase añadiendole caracteristicas y funcionalidades propias
// los extends a diferencia de los decoradores los extends expanden la clase
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
function imprimirConsola(constructorClase) {
    console.log(constructorClase);
}
let User = class User {
    constructor(nombre, clave) {
        this.nombre = nombre;
        this.clave = clave;
    }
    imprimir() {
        console.log(`${this.nombre} - ${this.clave}`);
    }
};
exports.User = User;
exports.User = User = __decorate([
    imprimirConsola
], User);
