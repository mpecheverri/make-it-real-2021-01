const stringHash = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const searchPosition = (stringNormalize, condition) => {
  return stringHash.indexOf(stringNormalize) !== condition
    ? stringHash.indexOf(stringNormalize)
    : "END_STR_HASH";
};

const cifrarCadena = (string) => {
  const pattern = /\s/gi;
  const stringNormalize = string.replace(pattern, "").toUpperCase().trim();

  let stringCrypto = "";
  let stringReverseCrypto = "";

  for (let i = 0; i < stringNormalize.length; i++) {
    let position = searchPosition(stringNormalize[i], stringHash.length - 1);

    position >= 0
      ? (stringCrypto += stringHash[position + 1])
      : (stringCrypto += stringHash[0]);
  }

  stringReverseCrypto = stringCrypto.split("").reverse().join("");

  return { stringNormalize, stringCrypto, stringReverseCrypto };
};

const descifrarCadena = (stringReverseCrypto) => {
  const newStringCrypto = stringReverseCrypto.split("").reverse().join("");
  const stringCryptoNormalize = newStringCrypto.toUpperCase().trim();

  let stringWithoutCrypto = "";

  for (let i = 0; i < stringCryptoNormalize.length; i++) {
    let position = searchPosition(stringCryptoNormalize[i], 0);

    position > 0
      ? (stringWithoutCrypto += stringHash[position - 1])
      : (stringWithoutCrypto += stringHash[stringHash.length - 1]);
  }

  return { stringCryptoNormalize, stringWithoutCrypto };
};

module.exports = { cifrarCadena, descifrarCadena };