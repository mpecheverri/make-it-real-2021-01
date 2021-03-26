let { users } = require('./model');

const list = (req, res) => {
  res.json(users);
};

const create = (req, res) => {
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

      let position = users.findIndex(u =>  u.username === usernameParam);
      
      if (position != -1) {
          users[position] = user;
          res.json(users);
      } else {
          res.json({ message: `No existe el usuario ${usernameParam}` });
      }
  }else{
      res.json({ message: `Hay datos nulos` });
  }
};

module.exports = { list, create, update };
