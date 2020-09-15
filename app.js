const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const usersRouters = require('./routes/users.js');
const cardsRouters = require('./routes/cards.js');

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// временно сохраним id пользователя
app.use((req, res, next) => {
  req.user = {
    _id: '5f60b602757e2432004f80b2',
  };

  next();
});

// подключаемся к серверу mongo
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use('/', usersRouters);
app.use('/', cardsRouters);

// в случае запроса на не существующий адрес, вернем статус 404 и сообщение об ошибке
app.all('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`Ссылка на сервер ${PORT}`);
});
