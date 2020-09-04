const router = require('express').Router();
const { getUsers, getUserById } = require('../controllers/users.js');

// при запросе показываем список пользователей
router.get('/users', getUsers);

// при запросе показываем пользователя по id
router.get('/users/:id', getUserById);

module.exports = router;
