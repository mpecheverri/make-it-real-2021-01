
const {readingFile} = require('./utils/file.js')
const {createDataUsers} = require('./utils/createData.js')
const {averageAge} = require('./utils/averageAge.js')


const quantityRows = 30;
const letterStartLastName = 'E'

createDataUsers(quantityRows);

const string = readingFile();

const averageAgeUsers = averageAge(string,letterStartLastName);

console.log(`El promedio de edad es: ${averageAgeUsers}`);

