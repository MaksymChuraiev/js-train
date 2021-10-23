'use strict'
// console.log("я учу JS");

// let myLifeStyle = 'freelance'
// console.log(myLifeStyle)



// ---------============-----область видимости---==========------


// function testBlock() {
//     let myAge = 18;
//     console.log(myAge);
    
// }

// testBlock();
// console.log(myAge);



//  ------=============----константа и изменение её-----=======------

// const userProfile = {
//     name: 'Freelancer',
//     age: 36,
//     message: 'Live'
// }

// console.log(userProfile);

// userProfile.age = 18;
// console.log(userProfile);



// -------==================----вар, отличие---------==================-----

// age = 35;
// console.log(age);
// var age;

// if (true) {
//     var sizeVar = 50;
// }

// console.log(sizeVar);



// =================== Number ==========================
// const someNum = 1e6; //1000000
// console.log(someNum);

// const someLittleNum = 1e-6; //0.000001
// console.log(someLittleNum);

// console.log(0xff);
// console.log(0b11111111);
// console.log(0o377);
// let num = 255;
// console.log(num.toString(16));
// console.log(num.toString(8));
// console.log(num.toString(2));

// let numOne = Math.round(5.8);     //Округляется до целого числа.
// console.log(numOne);

// let numOne = Math.round(5.845 * 10) / 10;     //Округляется до 5.8.
// console.log(numOne);

// let numOne = 5.845;                     //Округляется до 1 числа после точки.
// console.log(numOne.toFixed(1));          // строка
// console.log(Number(numOne.toFixed(1)));    //число

// let numOne = Math.round(5.845 * 100) / 100;     //Округляется до 5.85.
// console.log(numOne);

// let sourceNum = 1.005 + Number.EPSILON;           // Округляет более точно до 1.01
// let numFour = Math.round(sourceNum * 100) / 100;
// console.log(numFour);

// let numOne = Math.floor(5.8);  //Округляется в меншую сторону.
// console.log(numOne);

// let numOne = Math.ceil(5.8);  //Округляется в большую сторону.
// console.log(numOne);



// ----------=============--Typeof------------================-----

// let userName;
// console.log(typeof userName);

// userName = 'freelance';
// console.log(typeof userName);

// userName = 58;
// console.log(typeof userName);

// userName = null;
// console.log(typeof userName);

// userName = null;
// console.log(userName);

// userName = 99999999999999999999999999999999999999999999n;
// console.log(typeof userName);

// userName = Symbol('id');
// console.log(typeof userName);

// userName = function name(params) {    
// }
// console.log(typeof userName);



// ---------==========-------Строковое преобразование-------=======-

// let userAge = 58;
// console.log(userAge);
// console.log(typeof userAge);

// userAge = String(userAge);

// console.log(userAge);
// console.log(typeof userAge);


// let userTrue = true;
// console.log(userTrue);
// console.log(typeof userTrue);

// userTrue = String(userTrue);

// console.log(userTrue);
// console.log(typeof userTrue);


// let userAge = '58';
// console.log(userAge);
// console.log(typeof userAge);

// userAge = Number(userAge);

// console.log(userAge);
// console.log(typeof userAge);


// let userAge = 58;
// console.log(userAge);
// console.log(typeof userAge);

// userAge = Boolean(userAge);

// console.log(userAge);
// console.log(typeof userAge);



// ==========================Operators=======================

// let x;

// x = 5 + 8;
// console.log(x)

// x = 9 - 5;
// console.log(x)

// x = 2 * 3;
// console.log(x)

// x = 10 / 2;
// console.log(x)

// x = 11 % 3;
// console.log(x)

// x = 5 ** 3;
// console.log(x)

// let resultOne = 'freelancer' + ' ' + 'my' + ' ' + 'live';
// console.log(resultOne)

// let letresultTwo = 'freelancer ' + 58;
// console.log(letresultTwo);
// console.log(typeof letresultTwo);

// let resultThree = 58 + ' freelancer';
// console.log(resultThree);

// let resultFour = 2 + '2';
// console.log(resultFour);

// let resultFive = 58 - 20 + ' freelancer';
// console.log(resultFive);

// let resultOne = '25' - 5;
// console.log(resultOne);
// console.log(typeof resultOne);

// let resultTwo = 10 * '80';
// console.log(resultTwo);
// console.log(typeof resultTwo);

// let resultThree = 3 * 'freelancer';
// console.log(resultThree);
// console.log(typeof resultThree);

// let users = '25';
// let admins = '10';
// console.log(users + admins);
// console.log(+users + +admins);
// console.log(Number(users) + Number(admins));

// let a = 1 + 2;
// let b = 2;
// let result = 8 - (a = b + 3);
// console.log('res: ' + a);
// console.log('all res: ' + result);

// let users = 5;
// console.log(users);
// users += 3;
// console.log(users);
// users *= 2;
// console.log(users);



// ============== Логический оператор || ИЛИ ,&& И================

// let userName = '';
// let userNickName = 'freelancer';
// let user = userName || userNickName || 'no name';
// console.log(user);

// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

// console.log('freelancer' && 0 && 2 && 3);
// console.log(1 && 2 && null && 3);
// console.log('15' && '42');

// console.log(1 && 0 || 2 && 1);

// console.log(!false && 11 || 18 && !'');



// ==========================IF==================================

// let message = 'freelancer';
// if (2 > 1) {
//     console.log(message);
// }

// if (2 > 1) console.log(message); 

// let message = 'freelancer';
// let number = 0;
// if (number > 50) {
//     console.log('> 50');
// } else if (number > 30) {
//     console.log('> 30');
// } else if (number > 10) {
//     console.log('> 10');
// } else if (number > 1) {
//     console.log('> 1');
// } else  {
//     console.log(message);
// } 



// ===============================  ?  =======================

// let message = 'hello';
// let messageEnd = (5 > 1) ? ', Vasil' : ', Ivan';
// message += messageEnd;
// console.log(message);

// let message = 'hello';
// let number = 51;
// let messageEnd = (number > 50) ? ', Vasil' :
//     (number > 30) ? ', Ivan' :
//         (number > 10) ? ', Fedor' :
//             (number > 1) ? ', Stas' : ', Grisha'
// message += messageEnd;
// console.log(message);



// ===================== While ===================

// let num = 0;
// while (num < 5) {
//     console.log(num);
//     num += 1;
// }

// let num = 0;
// do {                   //1 cikle 100%
//     console.log(num);
//     num += 1;
// } while (num < 5);



// ============================ For =================

// for (let num = 0; num < 5; num += 1) {
//     console.log(num);    
// }

// let num = 0;
// for (; num < 5;) {
//     console.log(num);
//     num += 1;    
// }



// =========================== Break ====================

// let num = 0;
// for (; num < 5; num += 1) {
//     console.log(num);
//     if (num == 2) break;    
// }
// console.log(`off, num = ${num}`)



// ======================== Continue ==================

// let num = 0;
// for (; num < 5; num += 1) {
//     if (num == 2) continue;
//     console.log(num);
// }



// ================== FirstFor =========================

// firstFor: for (let num = 0; num < 10; num += 1) {
//     for (let size = 0; size < 10; size += 1) {
//         if (size == 7) {
//             break firstFor;
//         }
//         console.log(size);
//     }
// }

// firstFor: for (let num = 0; num < 3; num += 1) {
//     for (let size = 0; size < 10; size += 1) {
//         if (size == 5) {
//             continue firstFor;
//         }
//         console.log(size);
//     }
// }



// ===================== Function ==========================

// function getSum() {
//     let numOne, numTwo;
//     function getNumOne() {
//         numOne = 1;        
//     }
//     function getNumTwo() {
//         numTwo = 2;
//     }
//     getNumOne();
//     getNumTwo();
//     let numSum = numOne + numTwo;
//     console.log(numSum);
// }
// getSum();
// getSum();
// getSum();


// let message;
// function showMessage() {
//     message = 'Hello';
// }
// showMessage();
// console.log(message);

// function calcSum(numOne, numTwo) {
//     console.log(`Var numOne:${numOne}`);
//     console.log(`Var numTwo:${numTwo}`);
//     let numSum = numOne + numTwo;
//     console.log(`Sum:${numSum}`);
// }
// calcSum(10, 2);

// let getMessage = (text, names) => text + ', ' + names + '!';
// console.log(getMessage('hello', 'Vasil'));

// function showMessage(text, names) {
//     console.log(`${text}, ${names}!`);
// }
// setTimeout(showMessage, 3000, 'Hello', 'Vasil');

// function showMessage(text, names) {
//     console.log(`${text}, ${names}!`);
// }
// setInterval(showMessage, 500, 'Hello', 'Vasil');

// function showNumber(num) {
//     console.log(num);
//     if (num<5) {
//         setTimeout(showNumber, 1000, num+=1)
//     }
// }
// setTimeout(showNumber, 1000, 1);

// function showNumber(num) {
//     console.log(num);
//     let timeId = setTimeout(showNumber, 1000, num += 1);
//     if (num === 6) {
//         clearTimeout(timeId);
//     }
// }
// setTimeout(showNumber, 1000, 1);

// function UserInfo(name) {
//     this.name = name;
//     this.age = 30;
// }
// console.log(new UserInfo('Vasil'));
// console.log(new UserInfo('Stas'));




// ================== Object ---------====================

// let userInfo = {
//     name: "Vasil",
//     age: 30,
// };
// console.log(userInfo);
// console.log(userInfo.name);

// let userInfo = {
//     name: "Vasil",
//     age: 30,
//     address: {
//         city: 'Merefa',
//         street: 'Ribalko',
//     }
// };
// console.log(userInfo);
// console.log(userInfo.name);
// console.log(userInfo.address);
// console.log(userInfo.address.city);

// function makeUserInfo(name, age) {
//     return {
//         name: name,
//         age: age,
//         // name,
//         // age,
//     };
// }
// let user = makeUserInfo('Vasil', 30);
// console.log(user);

// let userInfo = {
//     name: "Vasil",
//     age: 30,
// };
// let user = Object.assign({}, userInfo);
// user.age = 18;
// console.log(userInfo);
// console.log(user);

// let userInfo = {
//     name: "Vasil",
//     age: 30,
//     address: {
//         city: 'Merefa',
//         street: 'Ribalko',
//     }
// };
// if ('name' in userInfo) {
//    console.log(userInfo.name); 
// }

// let userInfo = {
//     name: "Vasil",
//     age: 30,
//     address: {
//         city: 'Merefa',
//         street: 'Ribalko',
//     }
// };
// for (let key in userInfo) {
//     console.log(key);
//     console.log(userInfo[key]);
// }
// for (let key in userInfo.address) {
//     console.log(key);
//     console.log(userInfo.address[key]);
// }

// let userInfo = {
//     name: "Vasil",
//     age: 30,
//     address: {
//         city: 'Merefa',
//         street: 'Ribalko',
//     },
//     showInfo() {
//     // console.log(`${userInfo.name}, ${userInfo.age} year. Address: c.${userInfo.address.city}, str.${userInfo.address.street}.`);
//        console.log(`${this.name}, ${this.age} year. Address: c.${this.address.city}, str.${this.address.street}.`); 
// }
// }
// userInfo.showInfo();



// =================== Спецсимвол ====================

// let textTwo = 'Hello!\nYou are in chanel\nFreelancer';
// console.log(textTwo);

// let textTwo = 'Hello!\n\tYou are in chanel\n\t\tFreelancer';
// console.log(textTwo);

// let textTwo = 'Hello! You are in chanel Freelancer \\ IT and freelance';
// console.log(textTwo);

// let textTwo = 'Hello! You are in chanel \'Freelancer\'';
// console.log(textTwo);

// let textTwo = 'Hello';
// console.log(textTwo.length);

// let textTwo = 'abcdefghi';
// let firstSymbol = textTwo[0];
// let lastSymbol = textTwo[textTwo.length - 1];
// console.log(firstSymbol);
// console.log(lastSymbol);
// for (const char of textTwo) {
//     console.log(char);
// }

// let text = 'Hello';
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());

// let text = 'Hello';
// console.log(text.indexOf('lo'));
// console.log(text.indexOf('lo', 2));

// let text = 'Hello';
// console.log(text.includes('lo'));
// console.log(text.includes('lo', 3));
// console.log(text.startsWith('He'));
// console.log(text.endsWith('lo'));
// let searchText = 'he';
// console.log(text.toLowerCase().includes(searchText.toLowerCase()));

// let text = 'abcdefghi';
// console.log(text.slice(1, 5));
// console.log(text.slice(-5, -1));
// console.log(text.slice(1));
