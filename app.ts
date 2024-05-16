(function() {

    const mensaje = 'Hola';
    /*if ( true ) {
        let mensaje = 'mundo';
    }*/
    console.log(mensaje);

})();


// tipos de datos
(function() {
    let mensaje: string = 'Hola';
    let numero = 123;
    let booleano = true; //false
    let hoy = new Date();

    let cualquiercosa;
    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = booleano;
    cualquiercosa = hoy;

    let spiderman = {
        nombre: 'Peter',
        edad: 30
};

})();



// template literales = permiten construir string de una forma mas sencilla
(function() {

    function getEdad() { 
        return 100 + 100 +300;
    }

        const nombre     = 'Jhon';
        const apellido   = 'Chavez'
        const edad       = 33;

        //const salida = nombre + apellido + edad;
        //const salida = nombre + " "+apellido + "("+ edad +")";
        const salida = `${nombre} ${apellido}
        ( ${edad})
        ( ${getEdad()})`;

        console.log(salida);

})();


// FUNCIONES: PARÁMETROS OPCIONALES O BLIGATARIOS Y POR DEFECTO
(function() {

    function activar( quien : string,                    // OBLIGATORIO
                    momento?: string,                    //OPCIONAL: el signo de pregunta le indica a typescript que momeneto puede ser opcional
                    objeto  : string = 'batiseñal', ) {  // POR DEFECTO


        if (momento){
        console.log(`${ quien } activó la ${ objeto } en la ${momento}`);
        } else {
            console.log(`${ quien } activo la ${objeto}.`);
        }
    }
    activar('Gordon', 'tarde');

})();



// FUNCIONES DE FLECHA
( function() {

    const miFuncion = function(a: string) {
        return a.toUpperCase();
    }
    const miFuncionF = ( a: string ) => a.toUpperCase();

    console.log(miFuncion ('NORMAL'));
    console.log(miFuncion('FLECHA'));

    const sumarN = function( a:number, b:number) {
       return a + b;
    }

    const sumarF = ( a: number, b: number ) => a + b;

    console.log( sumarN(5,5));

    const Jhon = {
        nombre: 'Jhon',
        Chavez() {
            
            setTimeout( () => { // Funcion de flecha
            //setTimeout( function() {
                console.log(`${ this.nombre } Chavez!!!`);
            }, 1000 );
        }
    }
    Jhon.Chavez();
})();
console.log('Funcional');
console.log('JHON'); //PRUEBA DE CONFLICTOS


