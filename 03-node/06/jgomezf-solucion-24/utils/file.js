const fs = require('fs');
const path = require('path');

const filePath = './file/users.csv'

const callbackWriteFile = (err) => {
    if (err) return console.log(err);
}

const writingFile = (data) => {    
    fs.writeFileSync(filePath, `${data}\n`, callbackWriteFile);
    console.log(`The file with extension ${path.extname(filePath)} has been created!\n`);
}

const callbackReadFile = (err, data) => {
    if (err) return console.log(err);
    
    return data;
}

const readingFile = () => {
    const data = fs.readFileSync(filePath,'utf8', callbackReadFile);
    return data;
}




module.exports = {writingFile, readingFile};