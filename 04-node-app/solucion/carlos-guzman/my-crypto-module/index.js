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
  (cadenaEntradaNormalizada !== "") 
    ? cadenaEntradaNormalizada.trim()
    : "hola mundo";

console.log("");
console.log("------------------------------------------------------------------------");

console.log("");
console.log(`Resultado de la encriptación de la cadena "${cadenaEntrada}":`);
console.log("");

const resStringHash = cifrarCadena(cadenaEntradaNormalizada);

console.log(
  `La cadena sin cifrar (normalizada): ${resStringHash.stringNormalize}`
);
console.log(`La cadena cifrada: ${resStringHash.stringCrypto}`);
console.log(
  `La cadena cifrada (inversa): ${resStringHash.stringReverseCrypto}`
);

console.log("");
console.log("------------------------------------------------------------------------");

const cadenaCifradaInversa = "PEOVNBMPI";

console.log("");
console.log(`Resultado de la desencriptación de la cadena "${cadenaCifradaInversa}":`);
console.log("");

const stringOriginal = descifrarCadena(cadenaCifradaInversa);
console.log(
    `La cadena sin cifrar (normalizada): ${stringOriginal.stringWithoutCrypto}`
  );

  //TODO queda pendiente revisar como devolver a la cadena original con los espacios

console.log("");
console.log("------------------------------------------------------------------------");