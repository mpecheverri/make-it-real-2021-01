const jwt = require('jsonwebtoken');
const { config } = require('./../../config');
let { users } = require('./model');

const list = (req, res) => {
  res.json(users);
};

const create = (req, res) => {
  const { name, email, username, password } = req.body;

  const user = {
    name,
    email,
    username,
    password,
  };

  const found = users.filter((u) => u.username === user.username);

  if (found && found.length > 0) {
    res.json({ message: `ya existe el usuario ${user.username}` });
  } else {
    users.push(user);
    res.json(users);
  }
};

const update = (req, res) => {
  const usernameParam = req.params.username;
  const { name, email, username, password } = req.body;

  if (name && email && username && password) {
    const user = {
      name,
      email,
      username,
      password,
    };

    let position = users.findIndex((u) => u.username === usernameParam);

    if (position != -1) {
      users[position] = user;
      res.json(users);
    } else {
      res.json({ message: `No existe el usuario ${usernameParam}` });
    }
  } else {
    res.json({ message: `Hay datos nulos` });
  }
};

const login = (req, res) => {
  const { username, password } = req.body;

  const user = {
    username,
    password,
  };

  const found = users.filter(
    (u) => u.username === user.username && u.password === user.password
  );

  if (found && found.length > 0) {
    const token = jwt.sign({ username: user.username }, config.jwtKey);
    res.json({ token });
  } else {
    res.json({ message: 'user not exists' });
  }
};

module.exports = { list, create, update, login };
