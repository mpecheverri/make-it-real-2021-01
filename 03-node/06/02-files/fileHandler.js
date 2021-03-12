const fs = require('fs');

const filePath = './files/data.csv';

const callbackReadFile = (err, data) => {
  if (err) return console.log(err);
  console.log(`El contenido del archivo es:`);
  console.log(data);
};

const callbackWriteFile = (err) => {
  if (err) return console.log(err);
};

const leerArchivo = () => {
  fs.readFile(filePath, 'utf8', callbackReadFile);
};

const escribirArchivo = (contenido) => {
  fs.appendFile(filePath, `${contenido}\n`, callbackWriteFile);
};

module.exports = { leerArchivo, escribirArchivo };
