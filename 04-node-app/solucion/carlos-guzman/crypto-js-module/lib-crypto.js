const { AES, enc } = require('crypto-js');

const cryptoFunction = (cadenaEntrada) => {
	const cadena = cadenaEntrada;
	const cadenaSecreta = "o++2+11!!s..s9209dzzxsswsm123nks";

	const cipherText = AES.encrypt(cadena, cadenaSecreta).toString();
	const bytes = AES.decrypt(cipherText, cadenaSecreta);
	const stringOriginal = bytes.toString(enc.Utf8);

	return { cadena, cipherText, stringOriginal };

}

module.exports = { cryptoFunction };