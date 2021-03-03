const nombre = "Jesus";
const apellido = 'Estrada';

//Propiedades
//longitud

const longitudNombre = nombre.length;
const longitud = "Hola mundo".length;
console.log(longitudNombre);
console.log(longitud);

const letra = nombre[0]; //nombre.charAt(0)
console.log(letra);

const ultimaLetra = nombre[nombre.length - 1];
console.log(ultimaLetra);

const a = `a`;
const b = `b`;
a > b ? console.log(`a es mayor`) : console.log(`b es mayor`);

//split
  const cadena = `Hola mundo`;
  const array = cadena.split(` `);//array = ["Hola", "mundo"];
  console.log(array[0]);
  console.log(array[1]);
  console.log(array.length);

  //csv
  //12345; Juana Perez; juanaperez@gmail.com; 2345678901; F; Calle 123
  const linea = `12345;Juana Perez;juanaperez@gmail.com;20;2345678901;F;Calle 123`;
  const nombre1 = linea.split(`;`)[1];
  console.log(nombre1);

//encontrar subcadena -1 no existe, 0 en adelante retorna la posición
const navegador = `Google Chrome 10.5`;
const existe = navegador.indexOf(`Googl1`);
console.log(existe);

const correo = "JESUESTRADA@Gmail.com";
console.log(correo.toLowerCase());
console.log(correo.toUpperCase());

//split + join

 const numeroTelefono = "300 12345 67";//["300", "12345", "67"] => "3001234567"
 console.log(numeroTelefono.split(" ").join(""));
 console.log(numeroTelefono.replace(" ","").replace(" ",""));

 //startsWith endsWith
 console.log(nombre.startsWith("J"));
 console.log(apellido.endsWith("a"));
