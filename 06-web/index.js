const express = require('express');
const { users } = require('./users');
const { log } = require('./middleware/log');
const app = express();
const port = 3000;

app.use(express.json());
app.use(log);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const { name, email, username, password } = req.body;

  if (name && email && username && password) {
    const user = {
      name,
      email,
      username,
      password,
    };

    const found = users.filter((u) => u.username === user.username); //[], [{}]

    if (found && found.length > 0) {
      res.json({ message: `ya existe el usuario ${user.username}` });
    } else {
      users.push(user);
      res.json(users);
    }
  } else {
    res.json({ message: `hay datos nulos` });
  }
});

app.get('/users/:username', (req, res) => {
  const username = req.params.username;
  res.send(`User page ${username}`);
});

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
