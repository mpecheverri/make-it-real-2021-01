//P.O.O. Programación orientada a Objetos => Paradigma

/* Clases */
//Personas: nombre, apellido, edad, correo, etc ...
//Empleados => Personas
//Usuarios => Personas
//Proceso
//...

//String, Int, Math, Array, Object

//Clase Persona tiene un Constuctor
const Persona = function (nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.getNombre = function () {
    return this.nombre;
  };
  this.getApellido = function () {
    return this.apellido;
  };
  this.getNombreCompleto = function () {
    return `${this.nombre} ${this.apellido}`;
  };
  this.setNombre = function (nombre) {
    this.nombre = nombre;
  };
  this.setApellido = function (apellido) {
    this.apellido = apellido;
  };
};
//Objeto objetoPersona
const objetoPersona = new Persona('Juana', 'Gómez');
console.log(objetoPersona.nombre);
console.log(objetoPersona.getNombre());

const objetoLiteralPersona = {
  nombre: 'Juana',
  apellido: 'Gómez',
  getNombre: function () {
    return this.nombre;
  },
  getApellido: function () {
    return this.apellido;
  },
  getNombreCompleto: function () {
    return `${this.nombre} ${this.apellido}`;
  },
  setNombre: function (nombre) {
    this.nombre = nombre;
  },
  setApellido: function (apellido) {
    this.apellido = apellido;
  },
};

console.log(objetoLiteralPersona.nombre);
console.log(objetoLiteralPersona.getNombre());

//Object.keys
const keys = Object.keys(objetoLiteralPersona);
console.log(keys);

//Object.values
const values = Object.values(objetoLiteralPersona);
console.log(values);

//Object.assign
const destino = { n1: 1, n2: 2 };
const fuente = { n3: 3, n4: 4 };
Object.assign(destino, fuente);
console.log(destino);
