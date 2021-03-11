const cifrarCadena = (string) => {
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

module.exports = { cifrarCadena };
