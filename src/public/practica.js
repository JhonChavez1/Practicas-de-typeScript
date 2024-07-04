"use strict";
// uso de let y const
(() => {
    const nombre = "Ricardo Tapia";
    const edad = 23;
    const personaje = {
        nombre, edad
    };
})();
// INTERFAZ
(() => {
    const primeraMision = (batman) => {
        console.log(`enviando  ${batman.nombre} a la primera mision`);
    };
    const wolverine = {
        nombre: 'robin',
        edad: 30
    };
    primeraMision(wolverine);
})();
// Convertir esta funcion a una funcion de flecha
/*function resultadoDoble( a, b ){
  return (a + b) * 2*/
const resultadoDoble = (a, b) => a + b * 2;
console.log(`el resultado de la suma es: ${resultadoDoble}`);
(() => {
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    function misionImposible(nombre, arma = 'sigsawer', poder) {
        let mensaje;
        if (poder) {
            mensaje = nombre + 'tiene el poder de:' + poder + ' y un arma' + arma;
            console.log(`${mensaje}`);
        }
        else {
            mensaje = nombre + 'tiene el poder de:' + poder + 'pero no tiene arma';
            console.log(`${mensaje}`);
        }
    }
    misionImposible('Jhon', 'sigsawer', 'regeneracion');
})();
// CREAR CLASE
(() => {
    class Rectangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
            this.area = base * altura;
        }
        calcularArea() {
            return this.base * this.altura;
        }
    }
    const rectangulo = new Rectangulo(5, 10);
    const area = rectangulo.calcularArea();
    console.log(`El área del rectangulo es: ${area}`);
})();
