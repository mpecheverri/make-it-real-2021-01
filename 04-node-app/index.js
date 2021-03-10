//encriptar una cadena utilizando bcrypt

const argumentos = process.argv;
const cadenaEntrada = argumentos.slice(2).join(' ');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(cadenaEntrada, salt);

console.log(cadenaEntrada);
console.log(hash);
