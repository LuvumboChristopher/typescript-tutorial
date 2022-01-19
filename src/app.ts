// Para evitar repetir codigo una y otra vez podemos creamos nuestros propios tipos
type StringOrNum = string | number;

let city: StringOrNum;

city = 69100;

let age: StringOrNum = 'Twentyfive';

//Creamos el tipo una vez y lo utilizamos repetidas veces en el codigo

// igual ocuree con los objetos

type objectName = {
    name: string,
    age: number,
    country: string,
};

const sayHello = (person: objectName) => {
    const {name, age, country} = person;
    console.log(`Hey! my name is ${name} i'm from ${country} and i'm ${age} old`)
}

let me = {
    name: 'Christopher',
    age: 25,
    country: 'Spain'
}

sayHello(me);