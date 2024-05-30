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

document.getElementById('boton')! .addEventListener('click', function() {
    const imagenSrc = (document.getElementById('imagen') as HTMLImageElement) .src;
    window.location.href = imagenSrc; 
    document.getElementById('botonRegresar')!.style.display = 'inline-block';
    console.log('ejecucion normal')  
});

 document.getElementById('botonRegresar')! .addEventListener('click', function() {
    window.location.href = "index.html";
});




// DESTRUCCION DE OBJETOS Y ARREGLOS
(()=>{
    const avenger = {
        nombre: 'JhonF',
        clave: '12345',
        poder: 'power'
    }
    
    const extraer = ({ nombre, poder, clave }: any) => {
    }
        

    const { nombre, clave, poder } = avenger;             // No importa el orden siempre y cuando sea un objeto
    
    /*console.log( avenger.nombre);
    console.log(avenger.clave);
    console.log(avenger.poder);*/

    console.log(nombre);
    console.log(clave);
    console.log(poder);
    //___________________________________________________________


    const avengers: string[] = [`Thor`,`Iroman`,`Spiderman`, `1245`];

    const [ thor, iroman, spiderman, numero ] = avengers;

    console.log(thor);
    console.log(iroman);
    console.log(spiderman);
    console.log(numero)

})();




//PROMESAS

(()=>{

    console.log('Inicio');

    // resolve, se llama cuando funciona correcatmente
    // reject, se llama cuando sucede un error
    const prom1 = new Promise(( resolve, reject ) => {

        setTimeout(() => {
            reject('Se termino el timeout');
        }, 1000);

    });

    prom1
        .then( mensaje => console.log( mensaje ))
        .catch( err => console.warn( err ));
          
    console.log('Fin')

})();


//PROMESAS Y SU TIPADO

(()=>{

    const retirarDinero = ( montoRetirar: number): Promise<number> => {
        let dineroActual = 1000;

        return new Promise( (resolve, reject)=> {
            if (montoRetirar > dineroActual) {
                reject('No hay suficientes fondos');
            }else {
                dineroActual -= montoRetirar;
                resolve( dineroActual );
            }

        });
        
    }

    retirarDinero( 400 )
        .then( montoActual => console.log(`Me queda ${ montoActual }`))
        .catch(console.warn);


})();


// INTERFACES --------------------------------------------------------

(()=>{

    const enviarMision = (xmen: {nombre: string}) => {
        console.log(`Enviando a ${ xmen.nombre } a la mision `);
    }

})();

