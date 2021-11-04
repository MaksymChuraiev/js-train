// ------------------------------------------
// const userColorIyes = 'blue';
// let userName = 'Vasil';
// let user = userName;
// console.log(user);

// ==============================================================
// const totalMinutes = 450;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// ==============================================================
// const name = prompt('Какое официальное название JavaScript?');
// if (name === 'ECMAScript') {
//   alert('Верно!');
// } else {
//   alert('Не знаете? ECMAScript!');
// }

// ================================================================
// const hours = 14;
// const minutes = 0;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours} ч. ${minutes} мин.`;
// } else {
//   timestring = `${hours} ч.`;
// }
// console.log(timestring);

// ======================================================
// const userInput = prompt('Введите число');
// if (userInput > 0) {
//   alert('Это положительное число');
// } else if (userInput < 0) {
//   alert('Это отрицательное число');
// } else {
//   alert('Это ноль');
// }

// ===========================================================
// const a = 20;
// const b = 180;
// if (a > 100 && b > 100) {
//   console.log(a > b ? a : b);
// } else {
//   console.log(b + 512);
// }

// ===========================================================
// let link = 'https://my-site.com/about/';
// // Пиши код ниже этой строки
// link = link.includes('my-site') && !link.endsWith('/') ? `${link}/` : link;
// // if (!link.endsWith('/') && link.includes('my-site')) link += '/';
// // Пиши код выше этой строки
// console.log(link);

// =========================================================
// const hours = 180;
// let hourStatus;

// if (hours < 17) {
//   hourStatus = 'Pending';
// } else if (hours >= 17 && hours <= 24) {
//   hourStatus = 'Expires';
// } else if (hours > 24) {
//   hourStatus = 'Overdue';
// }

// console.log(hourStatus);

// ===================================================
// const daysUntilDeadline = 0;
// switch (daysUntilDeadline) {
//   case 0:
//     console.log('Сегодня');
//     break;

//   case 1:
//     console.log('Завтра');
//     break;

//   case 2:
//     console.log('Послезавтра');
//     break;

//   default:
//     console.log('Дата в будущем');
// }

// =========================================================
// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// =========================================================
// const name = prompt('Your name');
// if (name === 'Админ') {
//   const pass = prompt('Your password');
//   if (pass === 'Я админ') {
//     alert('Здравствуйте!');
//   } else {
//     alert('Неверный пароль');
//   }
// } else if (name === null || name === '') {
//   alert('Отменено');
// } else {
//   alert('Я вас не знаю');
// }

// ==================================================
// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-ролл');
// const firstElement = genres.shift(0);
// genres.unshift('Country', 'Reggy');
// console.log(genres);
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(firstElement);

// =======================================================================
// const values = '8 15';
// const arr = values.split(' ');
// const sum = arr[0] * arr[1];
// console.log(sum);

// ======================================================================
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i += 1) {
//   const element = `${i + 1}: ${fruits[i]}`;
//   console.log(element);
// }

// ====================================================================
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const nameArr = names.split(',');
// const phoneArr = phones.split(',');
// for (let i = 0; i < nameArr.length; i += 1) {
//   console.log(`${nameArr[i]}: ${phoneArr[i]}`);
// }

// =================================================================
// const string = 'Welcome to the future';
// const arr = string.split(' ');
// arr.shift();
// arr.pop();
// const result = arr.join(' ');
// console.log(result);

// =============================================================
// const string = 'Welcome to the future';
// const strArr = string.split('');
// const reversArr = strArr.reverse();
// const reversStr = reversArr.join('');
// console.log(reversStr);

// ==========================================================
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// for (let i = 0; i < langs.length; i += 1) {
//   for (let j = i; j < langs.length; j += 1) {
//     if (langs[i][0] > langs[j][0]) {
//       const temp = langs[i];
//       langs[i] = langs[j];
//       langs[j] = temp;
//     }
//   }
// }
// console.log(langs);

// ============================================================
// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log(min); // 1

// ===================================================
// const calcBmi = function (weight, height) {
//   const numWeight = parseFloat(weight.replace(',', '.'));
//   const numHeight = parseFloat(height.replace(',', '.'));
//   const bodyIndex = numWeight / Math.pow(numHeight, 2);
//   return bodyIndex.toFixed(1);
// };
// const bmi = calcBmi('88,3', '1.75');
// console.log(bmi); // 28.8

// ========================================================
// // const min = function (a, b) {
// //   if (a < b) {
// //     return a;
// //   }
// //   return b;
// // };
// const min = (a, b) => (a < b ? a : b);
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// ==================================================
// function getRectArea(dimensions) {
//   const arr = dimensions.split(' ');
//   const a = parseFloat(arr[0]);
//   const b = parseFloat(arr[1]);
//   const sum = a * b;
//   return sum;
// }
// console.log(getRectArea('8 11'));

// =========================================================
// function logItems(items) {
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1}: ${items[i]}`);
//   }
// }
// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// ========================================================
// function printContactsInfo(names, phones) {
//   const namesArr = names.split(',');
//   const phonesArr = phones.split(',');
//   for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(`${namesArr[i]} ${phonesArr[i]}`);
//   }
// }
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// ========================================================
// function findLargestNumber(numbers) {
//   let max = numbers[0];
//   for (const number of numbers) {
//     if (number > max) {
//       max = number;
//     }
//   }
//   return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// ========================================================
// function calAverage(num) {
//   const numbers = Array.from(arguments);
//   let sum = 0;
//   for (const number of numbers) {
//     sum += number;
//   }
//   return sum / numbers.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// ===========================================================

// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;
//   console.log(hours);
//   console.log(minutes);

//   const doubleDigitHours = String(hours).padStart(2, 0);
//   const doubleDigitMinutes = String(minutes).padStart(2, 0);
//   console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// ==========================================================
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(name) {
//   if (courses.includes(name)) {
//     console.log('У вас уже есть такой курс');
//   }
//   return courses.push(name);
// }

// function removeCourse(name) {
//   const idx = courses.indexOf(name);
//   if (idx === -1) {
//     console.log('Курс с таким имененем не найден');
//     return;
//   }
//   courses.splice(idx, 1);
// }

// function updateCourse(oldName, newName) {
//   const idx = courses.indexOf(oldName);
//   if (idx === -1) {
//     console.log('Курс с таким имененем не найден');
//     return;
//   }
//   courses.splice(idx, 1, newName);
// }

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такой курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким имененем не найден'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// ---------------------------------------------
// You need to calculate amount of tip to give in a restaurant/cafe.
// 	Workflow:
// 1.	User inputs check number. (Use “prompt” function).
// 2.	User inputs tip percentage. (Use “prompt” function)
// 3.	You need to validate the input data: both values should be numbers, total sum can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// 4.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// 5.	You need to calculate tip amount and total sum to pay.
// 6.	Show message: (example). Use ”alert” function
// Check number: 200
// Tip: 15%
// Tip amount: 30
// Total sum to pay:  230

// You should show only 2 numbers after comma (if needed).

// const cost = prompt('check number');
// const procent = prompt('Tip percentage');

// if (cost === null || procent === null) {
//     alert('Cancelled');
// } else {
//     const formatedCost = Number.parseFloat(cost);
//     const formatedProcent = Number.parseFloat(procent);
//     if (Number.isNaN(formatedCost) || Number.isNaN(formatedProcent)
//         || formatedCost < 0 || formatedProcent < 0 || formatedProcent > 100) {
//       alert('Invalid input data');
//     } else {
//         const allProcent = Number((formatedProcent / 100 * formatedCost).toFixed(2));
//         const allSum = formatedCost + allProcent;
//         alert(`Check number: ${formatedCost}\nTip: ${formatedProcent}%\nTip amount: ${allProcent}\nTotal sum to pay: ${allSum} `);
//     }
// }

// =====================================================================
/*
 * Посчитать общую сумму покупок в корзине
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
//     // console.log(cart[i]);
//     total += cart[i];
// }
// console.log('Total: ', total);

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for (const value of cart) {
//     total += value;
// }
// console.log('Total: ', total);

// =================================================================
/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     if (number % 2 === 0) {
//         total += number;
//     }
// }
// console.log('Total: ', total);

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// for (const number of numbers) {
//     if (number % 2 === 0) {
//         total += number;
//     }
// }
// console.log('Total: ', total);

// ==================================================================
/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = ' ';
// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
//     message = `Пользователь ${loginToFind} не найден.`;
// }
// console.log(message);

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = ' ';
// for (const login of logins) {
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
// }
// console.log(message);

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`;
// console.log(message);

// ==============================================================
/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];
// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log(smallestNumber)

// ===========================================================
/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = friends.join(', ');
// console.log(string);

// ==========================================================
/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';
// for (const letter of letters) {
//     if (letter === letter.toLowerCase()) {
//         invertedString += letter.toUpperCase();
//     } else {
//         invertedString += letter.toLowerCase();
//     }
// }
// console.log(invertedString);

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';
// for (const letter of letters) {
//     invertedString +=
//         letter === letter.toLowerCase()
//             ? letter.toUpperCase()
//             : letter.toLowerCase();
// }
// console.log(invertedString);

// ===================================================================
/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
// const title = 'Top 10 benefits of React framework';
// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(' ');
// const slug = words.join('-');
// console.log(slug);

// const title = 'Top 10 benefits of React framework';
// const slugTwo = title.toLowerCase().split(' ').join('-');
// console.log(slugTwo);

// ========================================================
/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;
// const numbers = array1.concat(array2);
// for (const number of numbers) {
//     total += number;
// }
// console.log(total);

// ============================================================
/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
// ];
// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// cards.splice(index, 1);
// const cardsToInsert = 'Карточка-6';
// cards.splice(3, 0, cardsToInsert);
// const cardsToUpdate = 'Карточка-4';
// const indexToUpdate = cards.indexOf(cardsToUpdate);
// const cardsNew = 'Карточка-7';
// cards.splice(indexToUpdate, 1, cardsNew);
// console.log(cards);

// ====================================================
/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */
// const calculateTotalPrice = function (items) {
//     let total = 0;
//     for (const item of items) {
//         total += item;
//     }
//     return total;
// };
// console.log(calculateTotalPrice([54, 28, 105, 70, 92, 17, 120, 12, 25, 90,]));

// ===============================================================
/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */
// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item);
//     }
// }
// logItems(['Mango', 'Poly', 'Kiwi', 'Ajax']);

// ==============================================================
/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const findLogin = function (allLogins, loginToFind) {
//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return `Пользователь ${loginToFind} найден.`
//         }
//     }
//     return `Пользователь ${loginToFind} не найден.`;
// }
// console.log(findLogin(logins, 'poly1scute'))

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const findLogin = function (allLogins, loginToFind) {
//     return allLogins.includes(loginToFind)
//         ? `Пользователь ${loginToFind} найден.`
//         : `Пользователь ${loginToFind} не найден.`;
// }
// console.log(findLogin(logins, 'poly1scute'))

// =================================================================
/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */
// const findSmallesNumber = function (numbers) {
//     let smallestNumber = numbers[0];
//     for (const number of numbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number;
//         }
//     }
//     return smallestNumber;
// }
// console.log(findSmallesNumber([3, 8, 12, -2, 15, 84]));

// ==============================================================
/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */
// const changeCase = function (string) {
//     const letters = string.split('');
//     let invertedString = '';
//     for (const letter of letters) {
//         const isInLowerCase = letter === letter.toLowerCase();
//         invertedString += isInLowerCase
//             ? letter.toUpperCase()
//             : letter.toLowerCase();
//     }
//     return invertedString;
// }
// console.log(changeCase('JavaScript'));

// ========================================================
/*
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */
// const slugify = function (string) {
//     const normalizedTitle = string.toLowerCase();
//     const words = normalizedTitle.split(' ');
//     const slug = words.join('-');
//     return slug;
// }
// console.log(slugify('Top 10 benefits of React framework'));

// const slugify = function (strin) {
//     return strin.toLowerCase().split(' ').join('-');
// }
// console.log(slugify('Top 10 benefits of React framework'));

// ============================================================
/*
 * Псевдомассив arguments и Array.from и ...
 */
// const fn = function () {
//   console.log(arguments);
//   const args = Array.from(arguments);
//   console.log(args);
// };
// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// const fn = function (a, b, c, ...args) {
//   console.log(`${a} ${b} ${c}`);
//   console.log(args);
// };
// fn('hello', 1, 2, 3);
// fn('aloha', 1, 2, 3, 4, 5);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);

// ===============================================================
/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */
// const add = function (...args) {
//     let total = 0;
//     for (const arg of args) {
//         total += arg;
//     }
//     return total;
// }
// console.log(add(1, 2, 3, 4, 5, 6, 7));

// =============================================================
/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */
// const filterNumbers = function (array, ...args) {
//     const uniqueElements = [];
//     for (const element of array) {
//         if (args.includes(element)) {
//             uniqueElements.push(element);
//         }
//     }
//     return uniqueElements;
// };
// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//     let total = 0;
//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//     }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(14, 17));

// function filterArray(numbers, value) {
//     let newNumbers = [];
//     for (const num of numbers) {
//         if (num > value) {
//             newNumbers.push(num);
//         }
//     }
//  return newNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// // filterArray([1, 2, 3, 4, 5], 3)

// function getCommonElements(array1, array2) {
//     const uniqueElements = [];
//     for (const element of array1) {
//         if (array2.includes(element)) {
//             uniqueElements.push(element);
//         }
//     }
//     return uniqueElements;
// };
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))

// function getEvenNumbers(start, end) {
//    // Change code below this line
//     let arr = [];
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             arr.push(i);
//         }
//     }
//     return arr
//     // Change code above this line
// }
//   console.log(getEvenNumbers(6, 12))

// function includes(array, value) {
//   // Change code below this line
// for (const word of array) {
//     if (word === value) {
//         return true;
//     } else if(word !== value) {
//         return false;
//     }
// }
//   // Change code above this line
// }
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"))
