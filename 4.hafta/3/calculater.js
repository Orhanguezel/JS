// 1. Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.


/*
function calculate(){
    let firstNumber = rls.questionInt('Enter the first number: ');
    let secondNumber = rls.questionInt('Enter the second number: ');
    let operation = rls.question('Enter the operation: ');

    if (operation === '+'){
        console.log(firstNumber + secondNumber);
    } else if (operation === '-'){
        console.log(firstNumber - secondNumber);
    } else if (operation === '*'){
        console.log(firstNumber * secondNumber);
    } else if (operation === '/'){
        console.log(firstNumber / secondNumber);
    } else {
        console.log('Invalid operation');
    }
}
calculate();
*/

// The goal is to reach the random number 1 - 100
// The player starts at 0
// The player can add one to their number
// The player can substract one from their number
// The player can double their number
// The player can halve their number

// Amaç 513 sayısına ulaşmak
// Oyuncu 0'dan başlar
// Oyuncu, sayısına bir ekleyebilir
// Oyuncu, sayısından bir çıkarabilir
// Oyuncu, sayısını iki katına çıkarabilir
// Oyuncu, sayısını yarıya indirebilir

/*
function spiel(){
    let goal = Math.floor(Math.random() * 100) + 1;
    let number = 0;
    let many = 0;

    while(number !== goal){
        console.log('The goal is to reach the number: ' + goal);
        console.log('Current number: ' + number);
        let operation = rls.question('Enter the operation: ');
        if (operation === '+'){
            number += 1;
        } else if (operation === '-'){
            number -= 1;
        } else if (operation === '*'){
            number *= 2;
        } else if (operation === '/'){
            number /= 2;
        } else {
            console.log('Invalid operation');
        }
        console.log(number);
        many++;
    }
    console.log('Congratulations! You reached the goal!, You tried ' + many + ' times');
}

spiel();

*/
import rls from 'readline-sync';

function randomNum(){
    return Math.ceil(Math.random() * 100); // 1 - 100
}
const operations = ['+', '-', '*', '/', 'stop'];

function askOperation(){
  let operation = rls.question('What would you like to do?').toLowerCase();
  
  while (!operations.includes(operation)){
    console.log('Invalid operation! You can use:', operations.join(', '));
    operation = rls.question('What would you like to do?').toLowerCase();
  }
  return operation;

}

function calculate(operation, current){
  switch(operation){
    case '+':
      return current + 1;
    case '-':
      return current - 1;
    case '*':
      return current * 2;
    case '/':
      return current / 2;
    case 'stop':
      console.log('Thanks for playing our game!');
      process.exit();
  }
}

function isGoal(current, goal){
  if (current === goal){
    console.log('You won!');
  } else if (current > goal){
    console.log('You have to give lower number!');
  } else {
    console.log('You have to give higher number!');
  }
}

let current = 0;
const goal = randomNum();
let attempts =0;
console.log('You can use:', operations.join(', '));
while(current !== goal){
  
  console.log('Your current number is ' + current);
  console.log('The goal is to reach the number: ' + goal);
  console.log('You tried ' + attempts + ' times');
  attempts++;
  let operation = askOperation();
  current = calculate(operation, current);
  isGoal(current, goal);
}









/*


console.log("Welcome to the Math game!");
console.log("To Stop playing, type 'stop'");
console.log("to add one, type 'add'");
console.log("to substract one, type'sub'");
console.log("to double your number, type'double'");
console.log("to halve your number, type 'halve'");

function randomNum() {
  return Math.ceil(Math.random() * 100); // 1 - 100
}

function askOperation() {
  let input = rls.question("What would you like to do?").toLowerCase();

  const opertions = ["add", "stop", "halve", "double", "sub"];
  while (!opertions.includes(input)) {
    console.log("invalid operation! you can use:", opertions.join(", "));

    input = rls.question("What would you like to do?").toLowerCase();
  }
  return input;
}

function calculate(operation, current) {
  switch (operation) {
    case "add":
      return current + 1;
    case "sub":
      return current - 1;
    case "double":
      return current * 2;
    case "halve":
      return current / 2;
    case "stop":
      console.log("Thanks for playing our game!");
      process.exit();
  }
}

// console.log(goal);
let current = 0;
const goal = randomNum();
while (current !== goal) {
  console.log(`Your current number is ${current}`);
  let operation = askOperation();
  current = calculate(operation, current);
  if (current === goal) {
    console.log(`You won!`);
  } else if (current > goal) {
    console.log(`You have to give lower number!`);
  } else {
    console.log(`You have to give higher number!`);
  }
}
  */