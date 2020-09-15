const router = require('express').Router();
const {
  getUsers,
  getUserId,
  createUser,
  changeUser,
  updateUserAvatar,
} = require('../controllers/users.js');

// при запросе показываем список пользователей
router.get('/users', getUsers);

// при запросе показываем пользователя по id
router.get('/users/:userId', getUserId);

// при запросе создаем пользователя
router.post('/users', createUser);

// при запросе обновляем данные пользователя
router.patch('/users/me', changeUser);

// при запросе обновляем аватар пользователя
router.patch('/users/me/avatar', updateUserAvatar);

module.exports = router;
