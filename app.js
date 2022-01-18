//Explicit types
/*Cuando no hemos iniciado la variable pero
queremos indicar el typo de datos que va a recibir */
var age;
var isUnderAge;
//Arrays
var adults;
//Si inicio el array con numero me saldra un error
//adults = [14,'Christopher','Goku','Vegeta']
//Union Types
/* Si queremos tener un array mixto antes de iniciar el array
tenemos que indicarlo con un Union type*/
var mixedArray = [];
mixedArray.push('Christopher');
mixedArray.push(25);
mixedArray.push(false);
//Object
var house;
house = {
    adress: 'Privet drive street 4',
    city: 'London',
    country: 'England'
};
//El el caso en el que queramo crear un objeto con indicaciones precisas
var person;
person = {
    name: 'HarryPotter',
    age: 15,
    isDeveloper: false
};
