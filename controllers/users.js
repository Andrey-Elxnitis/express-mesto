const User = require('../models/user');

// по запросу возвращаем всех пользователей
const getUsers = (req, res) => {
  User.find({})
    .catch((err) => res.status(500).send({ message: err.message }))
    .then((users) => res.status(200).send(users));
};

// по запросу возвращаем пользователя по id
const getUserId = (req, res) => {
  User.findById(req.params.userId)
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).send({ message: 'Упс, такого пользователя нет' });
      }
      return res.status(500).send({ message: err.message });
    })
    .then((user) => res.status(200).send({ data: user }));
};

// по запросу загружаем пользователя в бд
const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: 'Переданы некорректные данные' });
      }
      return res.status(500).send({ message: err.message });
    })
    .then((user) => res.status(200).send(user));
};

// при запросе обновляем данные пользователя
const changeUser = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.user._id, { name, about }, {
    new: true,
    runValidators: true,
  })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: 'Переданы некорректные данные' });
      }
      return res.status(500).send({ message: err.message });
    })
    .then((user) => res.status(200).send(user));
};

// при запросе обновляем аватар пользователя
const updateUserAvatar = (req, res) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.user._id, { avatar }, {
    new: true,
    runValidators: true,
  })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: 'Переданы некорректные данные' });
      }
      return res.status(500).send({ message: err.message });
    })
    .then((user) => res.status(200).send(user));
};

module.exports = {
  getUsers,
  getUserId,
  createUser,
  changeUser,
  updateUserAvatar,
};
