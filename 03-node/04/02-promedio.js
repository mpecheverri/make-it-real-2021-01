//ID; Nombre; Correo; Edad; Teléfono; Sexo; Dirección
const db = `
12345;Juana Perez;juanaperez@gmail.com;20;2345678901;F;Calle 123,
76543;Juan Rodriguez;jrodriguez@gmail.com;30;2345678901;M;Calle 123,
231456;Marcia Pumarejo;mpumarejo@gmail.com;25;2345678901;F;Calle 123,
657546;Carlos Perez;carperez@gmail.com;19;2345678901;M;Calle 123,
64565;Ana Manrrique;amanrri@gmail.com;9;2345678901;F;Calle 123,
42342;Pedro Gomez;pgomez@gmail.com;50;2345678901;M;Calle 123
`;

let suma = 0;
let contador = 0;

const arreglo = db.split(","); //6 líneas y en cada línea tiene los datos de 1 persona
for(let i = 0; i < arreglo.length; i++){
  const linea = arreglo[i];
  const datosPersona = linea.split(";"); //[0]ID, [1]NombreCompleto, ...
  const nombreCompleto = datosPersona[1];//Juana Perez

  const edad = datosPersona[3];
  const apellido = nombreCompleto.split(" ")[1];

  if (apellido.toUpperCase().startsWith("P")) {
    suma += parseInt(edad); //suma = suma + edad;
    contador++; //contador = contador + 1;
  }
}
const promedio = contador === 0 ? 0 : suma / contador;
console.log(`El promedio es ${promedio}`);
