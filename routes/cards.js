const router = require('express').Router();
const { getCards, createCard, deleteCard } = require('../controllers/cards.js');

// при запросе показываем список карточек
router.get('/cards', getCards);

// при запросе создаем карточку
router.post('/cards', createCard);

// при запросе удаляем карточку
router.delete('/cards/:cardId', deleteCard);

module.exports = router;
