// function decleration
function greet(person){
    return `Hallo ${person}`;
}
console.log(greet("John")); // Hallo John


// function expression
//console.log(greetPerson("Hoisting is not working")); // ReferenceError: Cannot access 'greetPerson' before initialization
// anonymous function

const greetPerson = function(person){
    return `Hallo ${person}`;
}


console.log(greetPerson("Anna")); // Hallo Anna
console.log(greetPerson); // [Function: greetPerson]
console.log(typeof greetPerson); // function
console.log(greetPerson()); // Hallo undefined




// arrow function

const greetArrow = (msg) => {
console.log("msg:", msg);
}
greetArrow("Hello Arrow Function"); // msg Hello Arrow Function

const greetArrow2 = msg => `Hallo ${msg}`;
console.log(greetArrow2("Arrow2")); // Hallo Arrow2

const greetArrow3 = msg => console.log(msg);
greetArrow3("Arrow3"); // Arrow3

const greetArrow4 = (msg, name) => `Hallo ${msg} ${name}`;
console.log(greetArrow4("Arrow4", "John")); // Hallo Arrow3 John

const greetArrow5 = (a, b) => a*b;
const result=greetArrow5(2,3);
console.log(result); // 6

// drei nummern => summe
const sum = (a,b,c) => a+b+c;

function sum2(a,b,c){
    return a+b+c;
}
console.log(sum(1,2,4)); // 7
console.log(sum2(1,2,4)); // 7
