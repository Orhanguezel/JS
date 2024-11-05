// Aritmatische Operationen: +, -, *, /, %, **, --

/*
1xkaffee 7€ pro Stück
2xcola 3€ pro Stück
4xschokolade 2.5€ pro Stück
1xnudeln 1.25€ pro Stück
5xpizza 4€ pro Stück

*/
const numberOfItems = 1 + 2 + 4 + 1 + 5;

console.log("numberOfItems", numberOfItems);

const total = 1 * 7 + 2 * 3 + 4 * 2.5 + 1 * 1.25 + 5 * 4;

console.log("total", total);

const totalWithDiscount= total * 0.8; // 20% Rabatt

console.log("totalWithDiscount", totalWithDiscount);

const avaragePrice = total / numberOfItems;

console.log("avaragePrice", avaragePrice);

// Artikel zürückgeben 2 pizza

const returnedItems = 2;

const numberOfNewItems= numberOfItems- returnedItems;

console.log("numberOfNewItems", numberOfNewItems);

const newTotal = total - returnedItems * 4;

console.log("newTotal", newTotal);

const newTotalWithDiscount = newTotal * 0.8;

console.log("newTotalWithDiscount", newTotalWithDiscount);

const newAvaragePrice = newTotal / numberOfNewItems;

console.log("newAvaragePrice", newAvaragePrice);

const moneyInTheHand=29;

const moneyIsEnough = moneyInTheHand >= newTotalWithDiscount; // true or false

console.log("moneyIsEnough", moneyIsEnough);

// 3 kindern wollen Schokolade

const numberOfSchoco = 4/3;

// console.log("numberOfSchoco", numberOfSchoco);

const restOfSchoco = 4 % 3;

console.log("restOfSchoco", restOfSchoco);

// hoch, Potenz

console.log("2 hoch 3 :", 2 ** 3); // 2*2*2 = 8

// inkrementieren, dekrementieren (--, ++)

let num = 5;

num++; // num = num + 1

console.log("num inkrement", num); // 6

num--; // num = num - 1

console.log("num dekrement", num); // 5

console.log("num dekrement", num++); // 5
console.log("num dekrement", num); // 6

console.log("num dekrement", ++num); // 7 prefix form

console.log(1+"2"); // 12
console.log(typeof(1+"2")); // string

let strOrNum = 1 + "2"; // string 12
strOrNum++; // 13
console.log("strOrNum", strOrNum);
console.log(typeof(strOrNum)); // number

let strOrBoolen= "false" + true;
console.log(strOrBoolen); // false true
console.log(typeof(strOrBoolen)); // string


const demo = `"string" "test" "What is your name?"`;
console.log(demo);

const firstPrice = 35;
const secondPrice = "35";

// strikte Gleichheit === Empfohlen !!!


console.log(firstPrice === secondPrice); // false

// lose Gleichheit ==

console.log(firstPrice == secondPrice); // true


const boolVal=true; // 1

const boolVal2="true";

console.log(boolVal == boolVal2); // false

console.log(boolVal === boolVal2); // false

console.log(boolVal == 1); // true

let name1="Andre";
let name2=`Andre`;

console.log(name1 == name2); // true
console.log(name1 === name2); // true

let name3="andre";
let name4=`Andre`;

console.log(name3 == name4); // false
console.log(name3 === name4); // false







// Vergleichsoperationen: <, >, <=, >=, ==, ===, !=, !==

