const express = require('express');

const path = require('path');
const usersRouters = require('./routes/users.js');
const cardsRouters = require('./routes/cards.js');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRouters);
app.use('/', cardsRouters);

// в случае запроса на не существующий адрес, вернем статус 404 и сообщение об ошибке
app.get('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log('Ссылка на сервер');
  console.log(PORT);
});
