const bcrypt = require('bcrypt');

const encriptar = (cadena) => {
  const saltRounds = 10;

  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(cadena, salt);

  return hash;
};

const comparar = (cadena, hash) => bcrypt.compareSync(cadena, hash);

module.exports = { encriptar, comparar };
