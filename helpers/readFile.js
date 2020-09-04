const fs = require('fs').promises;

// читаем файл
const readFile = (file) => fs.readFile(file);

module.exports = readFile;
