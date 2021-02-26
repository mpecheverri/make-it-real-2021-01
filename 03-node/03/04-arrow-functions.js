//ES6 (Javascript2015) Arrow functions
const saludarSinParametro = () => {
  return `Hola`;
};

const saludarConUnParametro = (nombre) => {
  return `Hola ${nombre}`;
};

const saludarConUnParametroSinParenteis = nombre => {
  return `Hola ${nombre}`;
};

const saludarConDosParametro = (nombre = "-", apellido = "-") => {
  return `Hola ${nombre} ${apellido}`;
};

const saludarImplicitReturn = nombre => `Hola ${nombre}`;

const saludarImplicitReturnParentesis = nombre => (`Hola ${nombre}`);

const nombre = "Juana";
console.log(saludarSinParametro());
console.log(saludarConUnParametro(nombre));
console.log(saludarConUnParametroSinParenteis(nombre));
console.log(saludarConDosParametro());
console.log(saludarImplicitReturn(nombre));
console.log(saludarImplicitReturnParentesis(nombre));
