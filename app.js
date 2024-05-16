"use strict";
(function () {
    var mensaje = 'Hola';
    /*if ( true ) {
        let mensaje = 'mundo';
    }*/
    console.log(mensaje);
})();
// tipos de datos
(function () {
    var mensaje = 'Hola';
    var numero = 123;
    var booleano = true; //false
    var hoy = new Date();
    var cualquiercosa;
    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = booleano;
    cualquiercosa = hoy;
    var spiderman = {
        nombre: 'Peter',
        edad: 30
    };
})();
// template literales = permiten construir string de una forma mas sencilla
(function () {
    function getEdad() {
        return 100 + 100 + 300;
    }
    var nombre = 'Jhon';
    var apellido = 'Chavez';
    var edad = 33;
    //const salida = nombre + apellido + edad;
    //const salida = nombre + " "+apellido + "("+ edad +")";
    var salida = "".concat(nombre, " ").concat(apellido, "\n        ( ").concat(edad, ")\n        ( ").concat(getEdad(), ")");
    console.log(salida);
})();
// FUNCIONES: PARÁMETROS OPCIONALES O BLIGATARIOS Y POR DEFECTO
(function () {
    function activar(quien, // OBLIGATORIO
    momento, //OPCIONAL: el signo de pregunta le indica a typescript que momeneto puede ser opcional
    objeto) {
        if (objeto === void 0) { objeto = 'batiseñal'; }
        if (momento) {
            console.log("".concat(quien, " activ\u00F3 la ").concat(objeto, " en la ").concat(momento));
        }
        else {
            console.log("".concat(quien, " activo la ").concat(objeto, "."));
        }
    }
    activar('Gordon', 'tarde');
})();
// FUNCIONES DE FLECHA
(function () {
    var miFuncion = function (a) {
        return a.toUpperCase();
    };
    var miFuncionF = function (a) { return a.toUpperCase(); };
    console.log(miFuncion('NORMAL'));
    console.log(miFuncion('FLECHA'));
    var sumarN = function (a, b) {
        return a + b;
    };
    var sumarF = function (a, b) { return a + b; };
    console.log(sumarN(5, 5));
    var Jhon = {
        nombre: 'Jhon',
        Chavez: function () {
            var _this = this;
            setTimeout(function () {
                //setTimeout( function() {
                console.log("".concat(_this.nombre, " Chavez!!!"));
            }, 1000);
        }
    };
    Jhon.Chavez();
})();
console.log('Funcional');
document.getElementById('boton').addEventListener('click', function () {
    var imagenSrc = document.getElementById('imagen').src;
    window.location.href = imagenSrc;
    document.getElementById('botonRegresar').style.display = 'inline-block';
    console.log('ejecucion normal');
});
document.getElementById('botonRegresar').addEventListener('click', function () {
    window.location.href = "index.html";
});
