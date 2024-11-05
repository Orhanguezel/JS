const fruits = ['banana', 
    'apple', 
    'orange',
    'lemon',
    'cherry',
    'strawberry'];


// Destructring

const firstItem = fruits[0];
const secondItem = fruits[1];
const thirdItem = fruits[2];

console.log(firstItem, secondItem, thirdItem);

const [first, second, third, ...rest] = fruits;
console.log("first", first);
console.log("second", second);
console.log("third", third);
console.log(first, second, third);
console.log(rest);

const car ={
    model: "Ford",
    speed: 200,
    year: 2020,
    price: 50000,
    farbe: "red",
    km: 0,
}

const {model, speed, year, price, ...rest1} = car;
console.log(model, speed, year, price);
console.log(car.model, car.speed, car.year, car.price);
console.log(rest1);

function printCarInfo(car){
    console.log(`Model: ${car.model}, Speed: ${car.speed}, Year: ${car.year}, Price: ${car.price}`);
}

printCarInfo(car);

function printCarInfo1({model, speed, year, price}){ //destructring
    console.log(`Model: ${model}, Speed: ${speed}, Year: ${year}, Price: ${price}`);
}

printCarInfo1(car);

function printArray([firstItem, secondItem]){
    console.log(firstItem, secondItem);
}

printArray(fruits);

function printArray1([secondItem, firstItem]){
        console.log(firstItem, secondItem);
}

printArray1(fruits);

function printArray2({model, ...rest}){
    console.log(model, rest);
}

printArray2(car);

console.clear();
console.log(Object.keys(car)); // array keys
console.log(Object.values(car)); // array values
console.log(Object.entries(car)); // array keys and values ****

