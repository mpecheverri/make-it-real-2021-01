const cadena = "amarillo,azul,rojo";
const arregloDeCadena = cadena.split(",");

const arregloCualquierTipo = ["amarillo", true, 1, undefined, null]; //puede contener cualquier tipo de datos

const numeros = [1, 2, 3, 4, 5];
//mapea o itera sobre todos los elementos del arreglo
numeros.map(x => console.log(`El resultado es: ${x * x}`));
//asignación de la salida del mapping
const numerosOperados = numeros.map(x => x * x);
console.log(numerosOperados);
//declarando la función que se pasa como parámetro
function miFuncion(x){
  const respuesta = x * x; 
  return respuesta;
}
const numerosOperados2 = numeros.map(miFuncion);
console.log(numerosOperados2);

//map sobre el array directamente y no sobre la vble
const respuesta = [true, false, false, true].map(x => !x);
console.log(respuesta);

//Filter
const respuestaFilter = [20, 15, 21, 33, 8].filter(x => x < 18);
console.log(respuestaFilter);

//find
const respuestaFind = ["San Andres", "Andres", "Andes"].find(x => x === "Andres");
console.log(respuestaFind);

//includes
const respuestaInclude = ["perro", "gato", "caballo"].includes("perro");
console.log(respuestaInclude);

//___________modificar el arreglo

const arreglo = [1, 2, 4, 5];
//agregar elementos
arreglo.push(3);
console.log(arreglo);
//orderar
arreglo.sort();
console.log(arreglo);
//reversar
arreglo.reverse();
console.log(arreglo);
//join
const nombre = ["Jesus", "Estrada"].join(" ");
console.log(nombre);
//concat
const animalesSalvajes = ["leon", "pantera"];
const animalesDomesticos = ["perro", "gato"];
const animales = animalesSalvajes.concat(animalesDomesticos);
console.log(animales);

//eliminar elementos
const animales1 = ["perro", "gato", "tigre", "caballo", "oveja"];

console.log(animales1.slice(0, 2).concat(animales1.slice(3, 5)));

const animales2 = ["perro", "gato", "tigre", "caballo", "oveja"];
console.log(animales2.splice(2, 5));

const animales3 =["perro", "gato", "tigre", "caballo", "oveja"];
const removed = animales3.splice(2, 1);
console.log(removed);
console.log(animales3);

//shift: primer elemento
console.log(animales.shift());
console.log(animales);
//pop: último elemento
console.log(animales.pop());
console.log(animales);

console.log(new Date());
console.log((new Date()).toLocaleString());


//reemplazar un elemento 
const elementos = [1, 2, 4, 5];
elementos[3] = 8;
console.log(elementos);

