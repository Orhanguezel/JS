"use strict";
function add(num1, num2, showResult, phrase) {
    //  let result = num1 + num2;
    //  if (typeof num1!=='number' || typeof num2!=='number') {
    //     console.log('Invalid input'); }
    const result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return `${result}`;
    }
}
const number1 = 5;
const number2 = 4;
const printResult = true;
const resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
function printData(num) {
    console.log('Result: ' + num);
}
function addAndHandel(num1, num2, cb) {
    const result = num1 + num2;
    cb(result);
}
addAndHandel(10, 20, printData);
