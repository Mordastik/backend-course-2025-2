// main.js 
// Підключаємо клас URL із стандартної бібліотеки Node.js
const { URL } = require('url');

// Константи для варіанту 2
const date = "20240801";       // дата (наприклад, 1 серпня 2024)
const time_period = "M";       // період: M = місяць

// Створюємо базовий URL (НБУ API)
const myUrl = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/banksincexp");

// Додаємо параметри через SearchParams
myUrl.searchParams.append("date", date);
myUrl.searchParams.append("period", time_period);
myUrl.searchParams.append("json", "");

// Виводимо фінальний URL
console.log(myUrl.toString());
