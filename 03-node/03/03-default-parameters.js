const division = function (dividendo = 1, divisor = 1){
  return dividendo / (divisor === 0 ? 1 : divisor);
}

const resultado1 = division(5, 0);
const resultado2 = division(5, 2);
const resultado3 = division(5);
const resultado4 = division();

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
