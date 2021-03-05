//destructure
const arreglo = [1, 2, 3, 4];

const [a, b, c, d] = [1, 2, 3, 4];

console.log(a);
console.log(b);
console.log(c);
console.log(d);

const suma = ([a, b]) => a + b;
const resultado = suma([10, 20]);
console.log(resultado);

//...rest (parámetros rest)
const [n1, n2, ...rest] = [10, 20, 30, 40, 50, 70];
console.log(n1);
console.log(n2);
console.log(rest);

const potencia = ([n = 1, ...rest]) => {
  console.log(n * n);
  rest.map(x => console.log(x * x));
}
potencia([2, 4, 6, 8, 10]);
potencia([]);
potencia([,3,4]);

//valores predeterminados
const [dividendo, divisor = 1] = [1, 3];
const resultadoDivison = dividendo / divisor;
console.log(resultadoDivison);

//desctructure from function return
const potencia1 = (n1 = 1, n2 = 1) => [n1 * n1, n2 * n2];
/*
function valores(n1, n2) {
  return [n1 * n1, n2 * n2];
}
*/
const [dividendo1, divisor1] = potencia1(4, 5);
const resultadoDivison1 = dividendo1 / divisor1;
console.log(resultadoDivison1);
