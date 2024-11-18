// const arr = [1, 2, 3, [4, 5]];

// const test = [...arr]; // [1,2,3,[4,5]]

// test[0] = 13;
// console.log(test); // [13, 2,3,[4,5]]
// console.log(arr); // [1,2,3,[4,5]]
// test[3][0] = 10;
// console.log(test); // [13,2,3,[10,5]]
// console.log(arr); // [1,2,3,[10,5]]

// const obj = { ...arr };
// console.log(obj);

// const power = Math.pow(5, 3); // 5 * 5 * 5
// console.log(power); //
// console.log(5 ** 3); // 5 * 5 * 5

// const obj1 = { fName: "Mohab" };
// const obj2 = { fName: "Mohab" };
// console.log(obj1 === obj2); // false
// const obj3 = obj1;
// console.log(obj3);
// console.log(obj1 === obj3); // true

// arr[0] = 3;
// console.log(arr);

// // arr = { name: "Sevil" };
// // console.log(arr);

// const fName = "Orhan";
// const person = "";
// const newPerson = ``;

//  1.
const arr = [1, 2, 3];
console.log(arr["2"]); //

let a = +"5" + 2;
console.log(a); //

let arr1 = [1, 2, 3];
arr1.splice(2, 1, 4);
console.log(arr1); // [1,2,4]

let { x, y } = { x: 10, y: 5 };
console.log(y); // 5

function test() {
  var x = 10;
}
console.log(x);

let num = parseInt("12px"); // 12
console.log(num === 12.0); // true

let arr2 = [10, 20, 30];
for (let i of arr2) {
  console.log(i); // 0,1,2
}
if ({}) {
  console.log("Object is truthy");
}

console.log(0.1 + 0.2 === 0.3); // false 0.33333333333333
console.log((parseFloat(1.1) + parseFloat(2.2)).toFixed(1));

let arr4 = [10, 2, 30];
arr4.sort((a, b) => b - a);
console.log(arr4);

let result = NaN;
console.log(result === NaN);

function createCounter() {
  let count = 0;
  return function increment() {
    return (count += 1);
  };
}
let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

function myFunc(a, b) {
  return a + b;
}
console.log("myFunc", myFunc.length);
