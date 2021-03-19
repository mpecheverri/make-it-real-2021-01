const express = require('express');
const { users } = require('./users');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
