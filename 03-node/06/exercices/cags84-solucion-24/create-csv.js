const { users } = require("./users-csv");

const cadenaEntrada = process.argv;
const num_registros = parseInt(cadenaEntrada.splice(2).join(" "));

console.clear();
console.log("");
console.log(`Creando el archivo CSV con ${num_registros} registros`);
console.log("");

users(num_registros)
  ? console.log(`Archivo CSV creado correctamente!`)
  : console.error(`Error: No se pudo crear el archivo :(`);

console.log("");
console.log(
  `Si desea calcular la edad promedio ejecute el siguiente comando: "node index.js" sin las comillas`
);
