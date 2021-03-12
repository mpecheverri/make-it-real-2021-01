const users = require('./files/users.json');

const listarUsuarios = () =>
  users.forEach(({ username, email }) =>
    console.log(`username: ${username} email: ${email}`)
  );

listarUsuarios();

const user = {
  id: 5,
  username: 'myusername5',
  email: 'myemail5@email.com',
  password: '12dssssew32',
  createdDate: '05/01/2020',
};

users.push(user);
listarUsuarios();
