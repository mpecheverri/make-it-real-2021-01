//combinaciones entre objetos y arrays
const persona = {
  "nombre": "Ana",
  "apellido": "Martínez",
  "edad": 31,
  "idioma": ["es", "en"],
  "telefonos": {
    "fijos": [1234567, 7654321],
    "celulares": [1987654321, 1234567890]
  },
  "casado": true,
  "obtenerNombreCompleto": function () {
    return `${this.nombre} ${this.apellido}`
  }
};
const persona2 = {
  "nombre": "Juan",
  "apellido": "Rodríguez",
  "edad": "29",
  "idioma": ["es"],
  "telefonos": {
    "fijos": [1234567, 7654321],
    "celulares": [1987622233]
  },
  "casado": false,
  "obtenerNombreCompleto": function () {
    return `${this.nombre} ${this.apellido}`
  }
};
console.log(persona.apellido);
persona.apellido = "Perez";
console.log(persona.apellido);
delete persona.direccion;
console.log(persona);
persona.sexo = "f";
console.log(persona);

console.log(persona.telefonos.fijos[0]);

console.log(persona.idioma);
const obtenerIdioma = idioma => idioma === "en" ? "Inglés" : "Español";
const idiomas = persona.idioma;
const respuesta = idiomas.map(obtenerIdioma);
console.log(respuesta);

console.log(persona.obtenerNombreCompleto());
console.log(persona2.obtenerNombreCompleto());

const personas = [persona, persona2];
