const router = require('express').Router();
const { getCards } = require('../controllers/cards.js');

// при запросе показываем список карточек
router.get('/cards', getCards);

module.exports = router;
