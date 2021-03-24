const express = require('express');
const { users } = require('./users');
const app = express();
const port = 3000;

//get json objects from body
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:username', (req, res) => {
  const username = req.params.username;
  res.send(`User page ${username}`);
});

app.post('/users', (req, res) => {
  //optimistic save
  const user = {
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  };

  users.push(user);

  res.json(users);
});

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
