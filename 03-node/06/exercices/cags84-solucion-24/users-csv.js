const faker = require("faker/locale/es");
const fs = require("fs");

let res = true;

const createFileCsv = () => {
  try {
    fs.open("./files/data.csv", "w", function (err, file) {
      if (err) throw err;
    });
  } catch (err) {
    return false;
  }
};

const users = (amount) => {
  let arrayUsers = [];

  createFileCsv();

  try {
    for (let i = 0; i < amount; i++) {
      const templateObjectUser = {
        id: faker.random.number({ max: 10000 }),
        name: faker.name.findName(),
        email: faker.internet.email(),
        edad: faker.random.number({ min: 18, max: 80 }),
        phone: faker.phone.phoneNumber(),
        gender: faker.random.arrayElement(["M", "F"]),
        direccion: faker.address.streetAddress(),
      };

      arrayUsers.push(templateObjectUser);
      fs.appendFile(
        "./files/data.csv",
        `${arrayUsers[i].id},${arrayUsers[i].name},${arrayUsers[i].email},${arrayUsers[i].edad},${arrayUsers[i].phone},${arrayUsers[i].gender},${arrayUsers[i].direccion}\n`,
        function (err) {
          if (err) throw err;
        }
      );
    }
    return true;
  } catch (err) {
    return false;
  }
};

module.exports = { users };
