const express = require('express');

const path = require('path');
const usersRouters = require('./routes/users.js');
const cardsRouters = require('./routes/cards.js');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRouters);
app.use('/', cardsRouters);

app.listen(PORT, () => {
  console.log('Ссылка на сервер');
  console.log(PORT);
});
