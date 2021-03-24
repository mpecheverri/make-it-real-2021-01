const fs = require("fs");

const findAverageAge = () => {
  let sumAge = 0;
  let contador = 0;

  try {
    let data = fs.readFileSync("./files/data.csv", "utf8");
    data = data.split("\n");
    data.forEach((el) => {
      if (el !== "") {
        let newEl = el.split(",");
        let newAgeTemp = newEl[3];
        let newNameTemp = newEl[1].split(" ");
        let lastName =
          newNameTemp[1].length > 2 ? newNameTemp[1] : newNameTemp[2];

        const pattern = /^E+/gi;
        if (pattern.test(lastName)) {
          sumAge += parseInt(newAgeTemp);
          contador++;
        }
      }
    });

    fs.closeSync(0);
    return sumAge !== 0 ? parseInt(sumAge / contador) : 0;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = { findAverageAge };
