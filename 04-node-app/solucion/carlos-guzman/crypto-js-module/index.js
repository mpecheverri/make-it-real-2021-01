const { cryptoFunction } = require('./lib-crypto.js');

const cadenaEntrada = process.argv;
const cadenaTemp = cadenaEntrada.splice(2).join(" ");
const cadenaNormalizada = 
  (cadenaTemp !== "") 
    ? cadenaTemp 
	: "cadena por defecto";

// Llamamos a la funcion y recibimos los datos en forma de destructuración.
const { cadena, cipherText, stringOriginal } = cryptoFunction(cadenaNormalizada);


console.clear();
console.log("-----------------------------------------------------------");

console.log("Solución con la libreria crypto-js");
console.log("");
console.log(`La cadena "${cadena}" cifrada con AES es: \n\r ${cipherText}"`);
console.log("");

console.log(`La cadena cifrada "${cipherText}" sin cifrado es: \n\r "${stringOriginal}"`);
console.log("");

console.log("-----------------------------------------------------------");
console.log("");
