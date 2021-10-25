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