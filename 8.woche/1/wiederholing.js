// filter, sort , reduce , map , forEach

const numbers = [1, 2, 3, 4, 5];
// Expected Output: [2, 4, 6, 8, 10]

// map
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

const doubledNumbers3 = numbers.map((n)=>{
    return n*2;
});

const words = ["hello", "world", "javascript"]
// expected output :["HELLO",WORLD", "JAVASCRIPT"]

const capitalizeWords= words.map((x)=>x.toUpperCase());

console.log(capitalizeWords);


// forEach
const doubledNumbers2 = [];
numbers.forEach((number) => {
  doubledNumbers2.push(number * 2);
});
console.log(doubledNumbers2);

words.forEach((item)=>{
    console.log(item);}
);

const students = [
    {name:"alice", score:90},
    {name: "bob", score:75},
    {name: "charlie", scre:85},
];

students.forEach((x)=>{
    if (x.score>=80){
        console.log(x.name)
    }
})



// filter
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// reducethe-coding-collective/03-PB/24-Klassen-OOP-11-11-24/README.mdumbers);

// chaining
const result = numbers
  .map((number) => number * 2)
  .filter((number) => number > 5)
  .reduce((acc, number) => acc + number, 0);

console.log(result);

// reduce

const orders = [
    {price: 10, quantity: 2},
    {price: 15, quantity: 3},
    {price: 20, quantity: 1},

];
// Expected Output: 85
const total = orders.reduce((acc, order) => {
    return acc + order.price * order.quantity;
} , 0);
console.log(total);
