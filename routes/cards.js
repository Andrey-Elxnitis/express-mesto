const router = require('express').Router();

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  deleteLikeCard,
} = require('../controllers/cards.js');

// при запросе показываем список карточек
router.get('/cards', getCards);

// при запросе создаем карточку
router.post('/cards', createCard);

// при запросе удаляем карточку
router.delete('/cards/:cardId', deleteCard);

// при запросе ставим лайк карточке
router.put('/cards/:cardId/likes', likeCard);

// при запросе удаляем лайк карточке
router.delete('/cards/:cardId/likes', deleteLikeCard);

module.exports = router;
