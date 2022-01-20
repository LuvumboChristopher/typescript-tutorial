"use strict";
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
const invoiceOne = new Invoice('Christopher', 'Groceries', 23);
const invoiceTwo = new Invoice('Alberto', 'Tech', 2300);
console.log(invoiceOne, invoiceTwo);
/*En este caso concreto imaginemos que qeuremos crear un array en que solo podamos intrucir elemento creados
con la clasee 'Invoice'*/
let invoicesArray = [];
/* Otro elemento a tener en cuenta en el uso de methodos y propiedades privadas o publicas
por defecto todos los elementos son publicos pero se pueden volver privados lo que hace que
no se pueda accedes desde el exterior de la clase */
class Dog {
    constructor(race, age, hairColor) {
        this.race = race;
        this.age = age;
        this.hairColor = hairColor;
    }
    format() {
        return `This dog is a ${this.race} with ${this.hairColor} hair,  who is ${this.age}old`;
    }
}
//Esto me daria un error ya que he indicado que la raza es una propiedad privada
//console.log(tobby.race)
const tobby = new Dog('Bulldog', 2, 'Brown');
// Esto tambien ya que le indicado 'Solo lectura' y aqui estoy intentando modificarla
//tobby.hairColor = 'black';
// Otra manera de declara una clase en TS
/*Podemos incluir los elementos directamente en el constructor pero hay que indicar su visibilidad:
PublicKeyCredential, provada o solo de lectura*/
class Car {
    constructor(country, year, brand, city) {
        this.country = country;
        this.year = year;
        this.brand = brand;
        this.city = city;
    }
    format() {
        return `${this.brand} is a car brand ${this.country} founded in ${this.city} in ${this.year} `;
    }
}
const MB = new Car('Germany', 1926, 'Mercedes-Benz', 'Stuttgart');
console.log(MB.format());
