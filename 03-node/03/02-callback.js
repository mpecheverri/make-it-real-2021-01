function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

function darBienvenida(callback){
  const nombre = "Juana";
  callback(nombre);
}

darBienvenida(saludar);

darBienvenida(function despedir(nombre){
  console.log(`Chao ${nombre}`);
});

/**************************/

function generarNombreCompleto(nombre, apellido, callback){
  const nombreCompleto = `${nombre} ${apellido}`;
  callback(nombreCompleto);
}

generarNombreCompleto("Pedro", "Pérez", function salida(parametro){
  console.log(`El nombre completo es ${parametro}`);
});


/***********************/

const promedio = function (n1, n2, n3, n4, n5, respuesta) {
  const suma = function(){
    return n1 + n2 + n3 + n4 + n5;
  };

  const resultadoSuma = suma();
  const resultadoPromedio = resultadoSuma / 5;
  respuesta(resultadoPromedio);

}
const escribirResultado = function (parametro){
  console.log(`El resultado es ${parametro}`);
};

promedio(4, 2, 5, 2, 1, escribirResultado);
