/**
 * No es obligatorioindicar que tipo son porque typescript
 * lo reconoce directamente
 */

let person: String = 'Chrsitopher';
let age: Number = 23;

/*
* En el parametro que pasamos indicamos que es de tipo numero
* sino no va a compilarse
*/ 
const monthsCalc = (year: number) => year * 12;
/**
 * Generaria un error ya que 'Helo es un String y esta indicado que el parametro
 * a recibir tiene que ser un numero por lo qe no se compilara
 */

//console.log(circ('hello'));

console.log(monthsCalc(23));