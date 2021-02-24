const lado1 = 10;
const lado2 = 20;
const lado3 = 10;
if (lado1 == lado2 && lado2 == lado3) {
  console.log(`El triángulo es equilátero`);
} else {
  if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
    console.log(`El triángulo es escaleno`);
  } else {
    console.log(`El triángulo es isósceles`);
  }
}
