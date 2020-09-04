const path = require('path');
const readFile = require('../helpers/readFile.js');

// функция отвечает за отображение списка пользователей по запросу '/users'
const getUsers = (req, res) => readFile(path.join(__dirname, '..', 'data', 'user.json'))
  .then((data) => {
    res.status(200).send(JSON.parse(data));
  })
  .catch((err) => {
    res.status(500).send({ message: err.message });
  });

// функция отвечает за отображение пользователя по id запрос '/users/:id'
const getUserById = (req, res) => {
  readFile(path.join(__dirname, '..', 'data', 'user.json'))
    .then((data) => {
      const user = JSON.parse((data)).find((item) => item._id === req.params.id);
      if (!user) {
        res.status(404).send({ message: `Нет пользователя с id ${req.params.id}` });
        return;
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports = {
  getUsers,
  getUserById,
};
