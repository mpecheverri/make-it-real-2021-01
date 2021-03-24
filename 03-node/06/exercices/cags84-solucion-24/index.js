/*
1. Crear un archivo .csv con el siguiente formato, y llenarlo con información aleatoria de 30 usuarios:
  // ID; NOMBRE; EMAIL; EDAD; TELEFONO; SEXO; DIRECCION
  12345;Juana Perez;juanaperez@gmail.com;20;2345678901;F;Calle 123,
  76543;Juan Rodriguez;jrodriguez@gmail.com;30;2345678901;M;Calle 123,
  231456;Marcia Pumarejo;mpumarejo@gmail.com;25;2345678901;F;Calle 123,
  657546;Carlos Perez;carperez@gmail.com;19;2345678901;M;Calle 123,
  64565;Ana Manrrique;amanrri@gmail.com;9;2345678901;F;Calle 123,
  42342;Pedro Gomez;pgomez@gmail.com;50;2345678901;M;Calle 123

2. Leer el archivo y obtener el promedio de edad de las personas cuyo apellido comienza con la letra “E” 
  * Utilizar módulos
*/

const { findAverageAge } = require("./read-csv");

console.clear();
console.log("");
console.log("Solución al ejercicio #24");
console.log("");

findAverageAge() !== 0
  ? console.log(
      `El promedio de edad de los apellidos que comienzan por "E", es: ${findAverageAge()} años`
    )
  : console.log("No se encontraron registros relacionados. :( ");

console.log("");
console.log(
  `Si desea crear nuevos datos ejecute el siguiente comando: "node create-csv.js num_registros" sin las comillas`
);
console.log(
  `Donde num_registros, es la cantidad de registros que se desea crear en el archivo csv`
);
