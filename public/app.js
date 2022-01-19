"use strict";
// Ojo aqui las funciones empiezan con mayusculas
let sayHello;
sayHello = (name) => {
    console.log(` Hello , ${name}`);
};
//En este caso de dara erro ya que intento pasar un string como parametro cuando he indicado que seria un numero
const add = (a, b) => {
    console.log(a + b);
};
//add(2,'4');
// Aparicion de la interoogacion que hace que el parametro sea opcional, ojo si usas parametros opcionales siempre ponerlos al final
const fullName = (name, lastName) => {
    console.log(`${name}  ${lastName}`);
};
// En este caso aunque no haya puesto el appelido no le sale error ya que es opcional, el rsultado sera christopher UNDEFINED
fullName('christopher');
//Caso del uso de un valor por defecto
const fullName2 = (name, lastName = 'Doe') => {
    console.log(`${name}  ${lastName}`);
};
/* En este caso como no he indicado un valor para lasTName pero si lo he indicado un valor en el caso de no introducir
nada , el resultado sera Christopher Doe*/
fullName2('christopher');
//Cuando usamos return en una funcion podemos tipar el resutado aunque es automatico, si no definimos un return el tipo sera void
const minus = (a, b) => {
    return a - b;
};
