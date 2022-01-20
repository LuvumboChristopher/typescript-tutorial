"use strict";
// Con elemento como ! o ? indicamos a ts que esos elementos si existen ya que el no puede leer en nuestro documento html
const anchor = document.querySelector('a');
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
// En este caso recuperamos el formulario
const form = document.querySelector('form');
/* Pero en este tabn por lo tanto ts lo detecta como un elmenento mas y no un formuario
para evitar eso podemo s haer lo siguiente*/
const form1 = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, 
    //Uso de valueAsNumber pare recuperar el valor en formato string y no en numero
    amount.valueAsNumber);
});
