const findLetter = (letter) => {
  if (letter === 'Z') return 'A';

  const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const index = abc.indexOf(letter);
  const letterFound = abc[index + 1];

  return letterFound;
};

const encrypt = (message) => {
  const stringNormalized = message.join('').toUpperCase();
  let hash = '';
  for (let i = 0; i < stringNormalized.length; i++) {
    hash += findLetter(stringNormalized[i]);
  }
  return hash.split('').reverse().join('');
};
const decrypt = (hash) => {};

module.exports = { encrypt, decrypt };
