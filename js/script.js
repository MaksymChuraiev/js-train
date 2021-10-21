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

// -----============-------цифры подряд------==============-----

// for (let i = 0; i < 10; i += 1) {
//     console.log(i)    
// }

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