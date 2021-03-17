const { division } = require('./modules/division');

const dividend = process.argv[2];
const divider = process.argv[3];

const result = division(dividend, divider);

console.log(
  `El resultado de dividir ${dividend} entre ${divider} es ${result}`
);
