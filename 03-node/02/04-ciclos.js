const numeroPacientes = 50;

//while
let i = 1;
while (i <= numeroPacientes) {
  console.log(`Ha ingresado el paciente ${i}`);

  i++; //i = i + 1;
}
console.log(`Fin del problema con While.`);

//for
for (let j = 1; j <= numeroPacientes; j++ /*j = j + 1*/) {
  console.log(`Ha ingresado el paciente ${j}`);
}
console.log(`Fin del problema con For.`);
