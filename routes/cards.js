const router = require('express').Router();

// json список карточек
const cards = require('../data/cards.json');

// при запросе показываем список карточек
router.get('/cards', (req, res) => {
  res.send(cards);
});

module.exports = router;
