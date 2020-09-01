const router = require('express').Router();

// json список пользователей
const users = require('../data/user.json');

// при запросе показываем список пользователей
router.get('/users', (req, res) => {
  res.send(users);
});

// при запросе показываем инфу пользователя по id
router.get('/users/:id', (req, res) => {
  const user = users.find((item) => item._id === req.params.id);

  if (!user) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
    return;
  }
  res.send(user);
});

module.exports = router;
