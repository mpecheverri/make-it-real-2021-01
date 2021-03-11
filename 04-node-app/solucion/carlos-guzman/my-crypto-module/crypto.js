const cifrarCadena = (string) => {

    // TODO Falta definir una condicional para el tipo de dato.

    const stringHash = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const stringNormalize = string.replace(" ", "").toUpperCase().trim();
  
    let stringCrypto = "";
    let stringReverseCrypto = "";
  
    for (let i = 0; i < stringNormalize.length; i++) {
      let position =
        stringHash.indexOf(stringNormalize[i]) !== stringHash.length - 1
          ? stringHash.indexOf(stringNormalize[i])
          : "END_STR_HASH";
  
      if (position >= 0) {
        stringCrypto += stringHash[position + 1];
      }
  
      if (position === "END_STR_HASH") {
        stringCrypto += stringHash[0];
      }
    }
  
    stringReverseCrypto = stringCrypto.split("").reverse().join("");
  
    return { stringNormalize, stringCrypto, stringReverseCrypto };
  };
  
  const descifrarCadena = (stringReverseCrypto) => {
    stringCrypto = stringReverseCrypto.split("").reverse().join("");
    const stringCryptoNormalize = stringCrypto.toUpperCase().trim();
    console.log(stringCryptoNormalize);
    const stringHash = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    let stringWithoutCrypto = "";
  
    for (let i = 0; i < stringCryptoNormalize.length; i++) {
      let position =
        stringHash.indexOf(stringCryptoNormalize[i]) !== 0
          ? stringHash.indexOf(stringCryptoNormalize[i])
          : "END_STR_HASH";
  
      if (position >= 0) {
        stringWithoutCrypto += stringHash[position - 1];
      }
  
      if (position === "END_STR_HASH") {
        stringWithoutCrypto += stringHash[-1];
      }
    }
  
    return { stringCryptoNormalize, stringWithoutCrypto };
  };

  module.exports = { cifrarCadena, descifrarCadena };