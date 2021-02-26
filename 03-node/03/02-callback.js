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
