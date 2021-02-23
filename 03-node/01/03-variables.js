//tipos de variables
var nombre; //se puede reasignar --no se recomienda
let apellido; //se puede reasignar
const edad = 29; //no se puede reasignar
const casado = true; //no se puede reasignar

const mensaje1 = `La edad de ${nombre} es ${edad}`; //plantilla literal (string)

console.log('El tipo de dato de nombre es: ' + typeof nombre);
console.log('El tipo de dato de apellido es: ' + typeof apellido);
console.log('El tipo de dato de edad es: ' + typeof edad);
console.log('El tipo de dato de casado es: ' + typeof casado);

nombre = 'Jesus';
apellido = 'Estrada';
console.log('El tipo de dato de nombre es: ' + typeof nombre);
console.log('El tipo de dato de apellido es: ' + typeof apellido);

const mensaje2 = `La edad de ${nombre} es ${edad}`;
const mensaje3 = 'La edad de ' + nombre + ' es ' + edad;

console.log(mensaje1);
console.log(mensaje2);
console.log(mensaje3);

const mensaje4 = `El promedio de edad del curso es: ${(19 + 25 + 15) / 3}`;
console.log(mensaje4);

//instrucciones y expresiones
