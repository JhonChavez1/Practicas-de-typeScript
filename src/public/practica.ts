
// uso de let y const

(()=>  { 

const nombre: string = "Ricardo Tapia";
const edad: number = 23;
  const personaje = {
    nombre, edad };
  
})();



// INTERFAZ
(()=> {

    interface Batman {
        nombre: string,
        edad: number,
        artesMarciales?: string
      }

      const primeraMision = (batman: Batman) => {
        console.log(`enviando  ${ batman.nombre } a la primera mision`)
      }

      const wolverine: Batman = {
        nombre: 'robin',
        edad: 30
      }

      primeraMision (wolverine)

    
})();

// Convertir esta funcion a una funcion de flecha
/*function resultadoDoble( a, b ){
  return (a + b) * 2*/

  const resultadoDoble = (a:number, b:number): number => a + b *2;
  console.log(`el resultado de la suma es: ${resultadoDoble}`);



(()=> {
  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'

  

  function  misionImposible(nombre: string, arma: string = 'sigsawer', poder?: string) {
    let mensaje: string
    if(poder){
      mensaje = nombre + 'tiene el poder de:' + poder + ' y un arma' + arma;
      console.log(`${mensaje}`)
    }else {
      mensaje = nombre + 'tiene el poder de:' + poder + 'pero no tiene arma'
      console.log(`${mensaje}`)
    }
  }

  misionImposible('Jhon', 'sigsawer', 'regeneracion');
})();


// CREAR CLASE
(()=> {
  class Rectangulo{
    base: number;
    altura: number;
    area: number;
    

    constructor(base: number, altura: number) {
      this.base = base;
      this.altura = altura;
      this.area = base * altura ;
      
    }
    calcularArea(): number {
      return this.base * this.altura;
      
    }
  }
  const rectangulo = new Rectangulo(5, 10);
  const area = rectangulo.calcularArea();
  console.log(`El área del rectangulo es: ${area}`);



})();
  
