const Card = require('../models/card');

// по запросу возвращаем все карточки
const getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.status(200).send(cards))
    .catch((err) => res.status(500).send({ message: err.message }));
};

// по запросу создаем карточку
const createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(200).send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: 'Переданы некорректные данные.' });
      }
      return res.status(500).send({ message: err.message });
    });
};

// по запросу удаляем карточку
const deleteCard = (req, res) => {
  Card.findByIdAndDelete(req.params.id)
    .then((card) => res.status(200).send(card))
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).send({ message: 'Карточка не найдена или вы не являетесь владельцем карточки' });
      }
      return res.status(500).send({ message: err.message });
    });
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
};
