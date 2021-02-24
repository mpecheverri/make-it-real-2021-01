function bmi(weight, height) {
  const result = weight / (height * height);

  return result;
}

function clasificacion(bmi) {
  if (bmi < 18.5) {
    return 'la persona se encuentra en bajo peso';
  } else if (bmi >= 30) {
    return 'la persona se encuentra en sobrepeso';
  } else if (bmi >= 25) {
    return 'la persona se encuentra en obesidad';
  } else {
    return 'la persona se encuentra en estado normal';
  }
}

const weightJuan = 80;
const heightJuan = 1.8;
const bmiJuan = bmi(weightJuan, heightJuan);
const clasificacionBMIJuan = clasificacion(bmiJuan);
console.log(`El BMI de Juan es ${bmiJuan}`);
console.log(`Su clasificación es ${clasificacionBMIJuan}`);

const weightJuliana = 50;
const heightJuliana = 1.6;
const bmiJuliana = bmi(weightJuliana, heightJuliana);
const clasificacionBMIJuliana = clasificacion(bmiJuliana);
console.log(`El BMI de Juliana es ${bmiJuliana}`);
console.log(`Su clasificación es ${clasificacionBMIJuliana}`);
