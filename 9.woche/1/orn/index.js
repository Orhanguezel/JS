// 1. ein fehler und suche es
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr[10]); // undefined
console.log(arr["9"]); //



let a= +"+512"+2;
let b= +712;

console.log(a);// 
console.log(b);//
console.log(typeof b);//



//let numbers = [1, 2, 3];

//numbers.push(4).pop();

//console.log(numbers);

let x = Math.round(4.5);
console.log(x); // ?

let y = Math.round(4.49);
console.log(y); // ?


let arr2 = [1, 2, 3, 4];
arr.splice(1, 2); // 1. indeksten başla, 2 eleman sil
console.log(arr2); // [1, 4]
let arr3 = [1, 2, 3];

arr.splice(2, 1, 4);

console.log(arr3); // ?

function greet(name = "Guest") {
    //console.log("Hello, " + Name); // Parameter
}

greet();
/*
let { a, b } = { a: 10 };
console.log(y);

let { a, b } = { a: 10, b: 20 };
console.log(a); // ?
console.log(b); // ?
*/

function test() {
    var x = 10;
}
console.log(x); // ?


let num = parseInt("12px");
console.log(num === 12.0); // true

let arr4 = [10, 20, 30];

for (let i in arr4) {
    console.log(arr4.i);
}

for (let value of arr) {
    console.log(value); // 10, 20, 30
}

console.log((0.1 + 0.2 )=== 0.3); // ?
console.log(0.1 + 0.2 === 0.3); // ?

let arr5 = [10, 2, 30];
arr5.sort();
console.log(arr5); // ?

arr5.sort((a, b) => a - b);

console.log(arr5); // ?

let result = NaN;
console.log(result === NaN); // ?
console.log(isNaN(result)); // ?

function createCounter() {
    let count = 0;
    return function increment() {
        count++;
    };
}

let counter = createCounter();
console.log(counter()); // ?


function createCounter2() {
    let count = 0;
    return function increment() {
        ++count;
    };
}

let counter2 = createCounter2();
console.log(counter2()); // ?

function createCounter3() {
    let count = 0;
    return function increment() {
        count=count+1;
    };
}

let counter3 = createCounter();
console.log(counter3()); // ?

function myFunc() {
}

console.log("myFunc", myFunc.length);


