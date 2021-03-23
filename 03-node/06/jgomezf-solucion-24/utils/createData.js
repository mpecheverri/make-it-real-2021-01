const faker = require('faker')
const {writingFile} = require('./file.js')

faker.locale = "es";

const createDataUsers = (quantityRows) => {   
    let data = "";

    for (let i = 0; i < quantityRows; i++) {
        const id = faker.random.uuid();
        const name = faker.name.findName();
        const email = faker.internet.email();
        const age = faker.random.number(100);
        const phone = faker.phone.phoneNumber();
        const gender = faker.random.arrayElement(['Fememnino','Masculino','Otro']);
        const address = faker.address.streetAddress();

        const line = `${id};${name};${email};${age};${phone};${gender};${address}\n`
        data += line;    
    }
    
    createFile(data);
}

const createFile = (data) => {
    writingFile(data);
}


module.exports = {createDataUsers}