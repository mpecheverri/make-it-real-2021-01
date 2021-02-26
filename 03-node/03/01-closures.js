//snake case = mi_variable
//camel case = miVariable
//capitalize = MiVariable
//lower case = mivariable
//upper case = MIVARIABLE
// ? = mi-archivo.js

function sumaCuadrados(a, b){
  function cuadrado(n){
    return n * n;
  }

  return cuadrado(a) + cuadrado(b);
}
const n1 = sumaCuadrados(8, 2);
const n2 = sumaCuadrados(18, 3);
const n3 = sumaCuadrados(9, 3);

console.log(n1);
console.log(n2);
console.log(n3);


//utilizando funciones anidadas calcular el saludo a una persona
//saludar("Jesus", "Estrada") // Hola Jesus Estrada

const saludar = function (nombre, apellido){
  function obtenerNombre(){
    return nombre;
  }
  function obtenerApellido(){
    return apellido;
  }
  return `Hola ${obtenerNombre()} ${obtenerApellido()}`;
}
const saludo = saludar;
console.log(saludo);
//Contexto léxico y Contexto de ejecución
const saludoAJuana = saludar("Juana", "Perez");
console.log(saludoAJuana);
const saludoAMarco = saludar("Marco", "Torres");
console.log(saludoAMarco);
