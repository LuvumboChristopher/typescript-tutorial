"use strict";
//Function signature
/*Le decimos a la funcion a que se tiene que parecer y en el caso en el que no soga los mismos patrones
nos enviaria un erro */
//Ejemplo 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//Ejemplo 2
let calc;
/*
calc = (n1: number, n2: string): number {
    return n1 + n2;
}
*/
//No sigue el atron por lo que resulta en erro ya que es segunpo parametro es de tipo string
