/*If, If else*/

//División
const dividendo = 10;
const divisor = 2;

if (/*expresiones*/ divisor == 0) {
  //instrucciones
  console.log(`no se puede realizar una división entre cero`);
} else {
  //instrucciones
  console.log(`El resultado de la división es: ${dividendo / divisor}`);
}

//Descuento
const producto1 = 20000;
const producto2 = 35000;
let total = producto1 + producto2;

if (total >= 50000) {
  total = total * 0.8;
}

console.log(`El valor final es: ${total}`);

/*Operador ternario*/
const producto3 = 20000;
const producto4 = 20000;
const valorTotal = producto3 + producto4;
const valorFinal = valorTotal >= 50000 ? valorTotal * 0.8 : valorTotal;
console.log(`El valor final es: ${valorFinal}`);
