/* 
    Ejercicio:

    Obtener la edad de las personas que hablen inglés de un arreglo de 5 objetos Persona. Cada elemento del arreglo tiene la siguiente estructura:
    [{
        nombre: "Jesus",
        sexo: "M",
        edad: 36,
        idiomas: ["EN","ES"],
        verEdad: function(){
            console.log(`La edad de ${this.nombre} es ${this.edad}`);
        }
    }, ...]

*/

/* Solución plateada */

const personas = [
    {
      nombre: "Carlos",
      sexo: "M",
      edad: 36,
      idiomas: ["EN","ES"],
      verEdad: function(){
        console.log(`La edad de ${this.nombre} es ${this.edad}`);
      }
    },
    {
      nombre: "Pedro",
      sexo: "M",
      edad: 26,
      idiomas: ["EN","ES"],
      verEdad: function(){
        console.log(`La edad de ${this.nombre} es ${this.edad}`);
      }
    },
    {
      nombre: "Jesus",
      sexo: "M",
      edad: 20,
      idiomas: ["ES"],
      verEdad: function(){
        console.log(`La edad de ${this.nombre} es ${this.edad}`);
      }
    },
    {
      nombre: "Sebastian",
      sexo: "M",
      edad: 25,
      idiomas: ["EN"],
      verEdad: function(){
        console.log(`La edad de ${this.nombre} es ${this.edad}`);
      }
    },
    {
      nombre: "Adolfo",
      sexo: "M",
      edad: 66,
      idiomas: ["ES"],
      verEdad: function(){
        console.log(`La edad de ${this.nombre} es ${this.edad}`);
      }
    }
  ];

  // Solución al ejercicio.
  let personasQueHablanIngles = 
    personas
      .filter(persona => persona.idiomas.includes("EN"))
      .map(el => el.verEdad());
