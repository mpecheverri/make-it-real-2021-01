/*
    Crear un módulo que encripte una cadena recibida como argumento de la siguiente forma:
    //Hola mundo => Holamundo => HOLAMUNDO => IPMBNVOEP => PEOVNBMPI
    //string para HASH -> ABCDEFGHIJKLMNOPQRSTUVWXYZ
 */

const { cifrarCadena, descifrarCadena } = require("./crypto");

console.clear();

const cadenaEntrada = process.argv;
let cadenaEntradaNormalizada = cadenaEntrada.splice(2).join(" ");
cadenaEntradaNormalizada =
  cadenaEntradaNormalizada !== ""
    ? cadenaEntradaNormalizada.trim()
    : "hola mundo";

console.log("");
console.log(
  "------------------------------------------------------------------------"
);
console.log("++++++++++ CIFRAR ++++++++++");
console.log("");
console.log(
  `Resultado de la encriptación de la cadena "${cadenaEntradaNormalizada}":`
);
console.log("");
const { stringNormalize, stringCrypto, stringReverseCrypto } = cifrarCadena(
  cadenaEntradaNormalizada
);

console.log(`La cadena sin cifrar (normalizada): ${stringNormalize}`);
console.log(`La cadena cifrada: ${stringCrypto}`);
console.log(`La cadena cifrada (inversa): ${stringReverseCrypto}`);

console.log("");
console.log(
  "------------------------------------------------------------------------"
);

const cadenaCifradaInversa = stringReverseCrypto;
console.log("++++++++++ DESCIFRAR ++++++++++");
console.log("");
console.log(
  `Resultado de la desencriptación de la cadena "${cadenaCifradaInversa}":`
);
console.log("");

const { stringWithoutCrypto, stringCryptoNormalize } = descifrarCadena(
  cadenaCifradaInversa
);
console.log(`La cadena cifrada (sin vuelta): ${stringCryptoNormalize}`);
console.log(`La cadena sin cifrar (normalizada): ${stringWithoutCrypto}`);

//TODO queda pendiente revisar como devolver a la cadena original con los espacios

console.log("");
console.log(
  "------------------------------------------------------------------------"
);