//Uso del typo Any
/*No tendremos ningun tipo de erros ya que con el tipo any puede ser
de cualquier tipo de dato, lo que nos qui ta todos los beneficios de
typescript de cierta manera*/
//Podemos usarlo cuando no sabemos es tipo de dato cque recibiremos
var age;
age = 25;
age = true;
//Lo mismo ocurre con los array y los demas tipos de datos aceptaran cualquier tipo de dato
var mixedArray = [];
mixedArray.push('France', 'Spain', true, 25);
console.log(mixedArray);
