// ------------------------------------------
// const userColorIyes = 'blue';
// let userName = 'Vasil';
// let user = userName;
// console.log(user);


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