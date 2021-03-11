const { AES, enc } = require('crypto-js');

const cadenaEntrada = process.argv;
const cadena = cadenaEntrada.splice(2).join(" ");
const cadenaSecreta = "o++2+11!!s..s9209dzzxsswsm123nks";

const cipherText = AES.encrypt(cadena, cadenaSecreta).toString();
const bytes = AES.decrypt(cipherText, cadenaSecreta);
const stringOriginal = bytes.toString(enc.Utf8);

console.clear();
console.log("-----------------------------------------------------------");

console.log(" Solución con la libreria crypto-js");
console.log("");
console.log(`La cadena "${cadena}" cifrada con AES es: ${cipherText}"`);
console.log("");

console.log(`La cadena cifrada "${cipherText}" es: "${stringOriginal}"`);
console.log("");

console.log("-----------------------------------------------------------");
console.log("");
