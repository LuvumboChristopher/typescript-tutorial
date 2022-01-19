"use strict";
let city;
city = 69100;
let age = 'Twentyfive';
const sayHello = (person) => {
    const { name, age, country } = person;
    console.log(`Hey! my name is ${name} i'm from ${country} and i'm ${age} old`);
};
let me = {
    name: 'Christopher',
    age: 25,
    country: 'Spain'
};
sayHello(me);
