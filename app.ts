//Explicit types

/*Cuando no hemos iniciado la variable pero 
queremos indicar el typo de datos que va a recibir */
let age: number;
let isUnderAge: boolean;

//Arrays
let adults: string[];

//Si inicio el array con numero me saldra un error
//adults = [14,'Christopher','Goku','Vegeta']

//Union Types

/* Si queremos tener un array mixto antes de iniciar el array
tenemos que indicarlo con un Union type*/

let mixedArray: (string|number|boolean)[] =[];
mixedArray.push('Christopher');
mixedArray.push(25);
mixedArray.push(false);

//Object

let house: object;

house = {
    adress: 'Privet drive street 4',
    city: 'London',
    country: 'England'
}

//El el caso en el que queramo crear un objeto con indicaciones precisas

let person: {
    name: string,
    age: number,
    isDeveloper: boolean,
}

person = {
    name: 'HarryPotter',
    age: 15,
    isDeveloper: false,
}
