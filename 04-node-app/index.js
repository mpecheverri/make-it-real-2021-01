const { encriptar, comparar } = require('./encriptar');

const argumentos = process.argv;
const cadenaEntrada = argumentos.slice(2).join(' ');

const hash = encriptar(cadenaEntrada);
const comparacion = comparar(cadenaEntrada, hash);

console.log(cadenaEntrada);
console.log(hash);
console.log(comparacion);
