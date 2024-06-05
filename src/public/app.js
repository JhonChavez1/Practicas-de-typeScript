"use strict";
/*import { User } from './clases/user';
const wolverine = new User('Logan', '1234');
console.log(wolverine);*/
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
console.log('JHON'); //PRUEBA DE CONFLICTOS
document.getElementById('boton').addEventListener('click', function () {
    var imagenSrc = document.getElementById('imagen').src;
    window.location.href = imagenSrc;
    document.getElementById('botonRegresar').style.display = 'inline-block';
    console.log('ejecucion normal');
});
document.getElementById('botonRegresar').addEventListener('click', function () {
    window.location.href = "index.html";
});
// DESTRUCCION DE OBJETOS Y ARREGLOS
(function () {
    var avenger = {
        nombre: 'JhonF',
        clave: '12345',
        poder: 'power'
    };
    var extraer = function (_a) {
        var nombre = _a.nombre, poder = _a.poder, clave = _a.clave;
    };
    var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder; // No importa el orden siempre y cuando sea un objeto
    /*console.log( avenger.nombre);
    console.log(avenger.clave);
    console.log(avenger.poder);*/
    console.log(nombre);
    console.log(clave);
    console.log(poder);
    //___________________________________________________________
    var avengers = ["Thor", "Iroman", "Spiderman", "1245"];
    var thor = avengers[0], iroman = avengers[1], spiderman = avengers[2], numero = avengers[3];
    console.log(thor);
    console.log(iroman);
    console.log(spiderman);
    console.log(numero);
})();
//PROMESAS
(function () {
    console.log('Inicio');
    // resolve, se llama cuando funciona correcatmente
    // reject, se llama cuando sucede un error
    var prom1 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('Se termino el timeout');
        }, 1000);
    });
    prom1
        .then(function (mensaje) { return console.log(mensaje); })
        .catch(function (err) { return console.warn(err); });
    console.log('Fin');
})();
//PROMESAS Y SU TIPADO
(function () {
    var retirarDinero = function (montoRetirar) {
        var dineroActual = 1000;
        return new Promise(function (resolve, reject) {
            if (montoRetirar > dineroActual) {
                reject('No hay suficientes fondos');
            }
            else {
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });
    };
    retirarDinero(400)
        .then(function (montoActual) { return console.log("Me queda ".concat(montoActual)); })
        .catch(console.warn);
})();
/* INTERFACES --------------------------------------------------------
 Son las reglas que cumple un objeto para utilizar como un tipo*/
(function () {
    var enviarMision = function (xmen) {
        console.log("Enviando a ".concat(xmen.nombre, " a la mision "));
    };
    var regresarAlCuartel = function (xmen) {
        console.log("Enviando a ".concat(xmen.nombre, " a la misi\u00F3n"));
    };
    var wolverine = {
        nombre: 'logan',
        edad: 60
    };
    enviarMision(wolverine);
    regresarAlCuartel(wolverine);
})();
// CLASES---------------------------------------------------------------
// CONSTRUCTORES DE UNA CLASE
(function () {
    var Avenger = /** @class */ (function () {
        function Avenger(nombre, equipo, nombreReal, puedePelear) {
            this.nombre = 'sin nombre';
            this.peleasGanadas = 15;
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = true;
        }
        return Avenger;
    }());
    var antman = new Avenger('Antman');
    antman.equipo = 'Iroman';
    antman.nombreReal = 'Batman';
    antman.pedePelear = true;
    console.log(antman);
})();
// SIMPLIFICANDO LAS PROPIEDADES DE UNA CLASE
(function () {
    var Equipo = /** @class */ (function () {
        function Equipo(nombre, capitan, jugadores, partidosGanados, campeon) {
            if (jugadores === void 0) { jugadores = 15; }
            if (campeon === void 0) { campeon = true; }
            this.nombre = nombre;
            this.capitan = capitan;
            this.jugadores = jugadores;
            this.partidosGanados = partidosGanados;
            this.campeon = campeon;
        }
        return Equipo;
    }());
    var yankees = new Equipo('Yankees', 'Jhon');
    console.log(yankees);
})();
// TIPADO DEL RETORNO DE UNA FUNCION
(function () {
    var sumar = function (a, b) { return a + b; };
    // return a + b;
    var nombre = function () { return 'Hola Jhon'; };
    var obtenerSalario = function () {
        return new Promise(function (resolve, reject) {
            resolve('Jhon');
        });
    };
    obtenerSalario().then(function (a) { return console.log(a); });
})();
