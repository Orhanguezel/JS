const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

const words = ["hello", "world"];

function capitalizeWords(array) {
    return array.map((word) => word.toUpperCase());
}

console.log(capitalizeWords(words)); // beklenen çıktı: ["HELLO", "WORLD"]

function capitalizeWords1(array) {
    return array.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
}

const words2 = ["hello", "world", "javaScript", "programming"];
console.log(capitalizeWords1(words2)); // beklenen çıktı: ["Hell

console.clear();

const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
  
  const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
  
  console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
  console.log(kvArray);
  // [
  //   { key: 1, value: 10 },
  //   { key: 2, value: 20 },
  //   { key: 3, value: 30 }
  // ]


  const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots şu şekilde olur: [1, 2, 3]
// numbers hala [1, 4, 9]
console.log(numbers);
console.log(roots);

["1", "2", "3"].map((str) => parseInt(str, 10)); // [1, 2, 3]
    
    ["1.1", "2.2", "3.3"].map((str) => parseFloat(str)); // [1.1, 2.2, 3.3]
    
    ["1", "2", "3"].map(Number); // [1, 2, 3]

    const numbers2 = [1, 4, 9];
const doubles = numbers2.map((num) => num * 2);


const numbers3 = [1, 2, 3, 4];
const filteredNumbers = numbers3.map((num, index) => {
  if (index < 3) {
    return num;
  }
});
console.log(filteredNumbers); // [1, 2, 3, undefined]

console.clear();

const cart = [5, 15, 25];
let total = 0;
const withTax = cart.map((cost) => {
  total += cost; // total değişkenini günceller
  return cost * 1.2;
});

console.log(withTax); // [6, 18, 30]






  