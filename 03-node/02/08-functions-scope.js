//"use strict"; //modo estricto
//var n1; //esto lo hace por la característica de hoisting
//para evitar utilizar las vbles no declaradas dentro de la función, se deben declarar las vbles dentro de cada función como let y const
n1 = 5;
var n2 = 2;

function sum() {
  console.log(`El resultado es ${n1 + n2}`);
}

function multiply() {
  var n1 = 5; //hoisting (elevación)
  console.log(`El resultado es ${n1 * n2}`);
}

sum();
multiply();

/****************** */
n3 = 20;
function sum2() {
  const n4 = 8;
  console.log(`El resultado es ${n3 + n4}`);
}

function multiply2() {
  const n3 = 10;
  const n4 = 8;
  console.log(`El resultado es ${n3 * n4}`);
}

sum2();
multiply2();
