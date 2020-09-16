const Card = require('../models/card');

// по запросу возвращаем все карточки
const getCards = (req, res) => {
  Card.find({})
    .catch((err) => res.status(500).send({ message: err.message }))
    .then((cards) => res.status(200).send(cards));
};

// по запросу создаем карточку
const createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: 'Переданы некорректные данные.' });
      }
      return res.status(500).send({ message: err.message });
    })
    .then((card) => res.status(200).send(card));
};

// по запросу удаляем карточку
const deleteCard = (req, res) => {
  Card.findByIdAndDelete(req.params.cardId)
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).send({ message: 'Карточка не найдена или вы не являетесь владельцем карточки' });
      }
      return res.status(500).send({ message: err.message });
    })
    .then((card) => res.status(200).send(card));
};

// по запросу добавляем в массив лайк
const likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).send({ message: 'Упс, такой карточки нет' });
      }
      return res.status(500).send({ message: err.message });
    })
    .then((likes) => res.status(200).send(likes));
};

// по запросу удаляем лайк из массива
const deleteLikeCard = (req, res) => {
  Card.findOneAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).send({ message: 'Упс, такой карточки нет' });
      }
      return res.status(500).send({ message: err.message });
    })
    .then((likes) => res.status(200).send(likes));
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  deleteLikeCard,
};
