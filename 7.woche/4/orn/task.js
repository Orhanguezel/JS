//soru 1
const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Mike", age: 27 },
    { name: "Sara", age: 35 },
];

const totalAge = people.reduce((acc, person) => {
    return acc + person.age;
}, 0);

console.log("Toplam Yaş:", totalAge);

//soru 2

const temperatures = [20, 22, 19, 24, 21, 23, 20];

const averageTemperature = temperatures.reduce((acc, temp) => {
    return acc + temp;
}, 0) / temperatures.length;

console.log("Ortalama Sıcaklık:", averageTemperature);

//soru 3

const prices = [19.99, 29.99, 9.99, 49.99, 39.99];

const maxPrice = prices.reduce((acc, price) => {
    if (price > acc) {
        return price;
    }
    return acc;
});

console.log("En Pahalı Ürün Fiyatı:", maxPrice);


//soru 4

const words = ["Hello", "world", "this", "is", "JavaScript"];

const sentence = words.reduce((acc, word) => {
    return `${acc} ${word}`;
},"");

console.log("Cümle:", sentence);


//soru 5

const number = 5;
const factorial = Array.from({ length: number }, (_, i) => i + 1).reduce((acc, num) => {
    return acc * num;
}, 1);

console.log(`${number} sayısının faktöriyeli:`, factorial);

//soru 6

const grades = [85, 90, 78, 92, 88];

const averageGrade = grades.reduce((acc, grade) => {
    return acc + grade;
}, 0) / grades.length;

console.log("Sınıfın Not Ortalaması:", averageGrade);

//soru 7

const words1 = ["apple", "banana", "cherry", "watermelon", "grape"];

const longestWord = words1.reduce((acc, word) => {
    return word.length > acc.length ? word : acc;
});

console.log("En Uzun Kelime:", longestWord);

//soru 8

const decimalPrices = [12.49, 7.99, 5.49, 15.99, 3.75];

const totalRoundedPrice = decimalPrices.reduce((acc, price) => {
    return acc + Math.round(price);
}, 0);

console.log("Yuvarlanmış Toplam Fiyat:", totalRoundedPrice);

//soru 9

const numbers = [10, -5, 20, -15, 30, -25];

const { positiveSum, negativeSum } = numbers.reduce((acc, num) => {
   return {
       positiveSum: num > 0 ? acc.positiveSum + num : acc.positiveSum,
       negativeSum: num < 0 ? acc.negativeSum + num : acc.negativeSum,
   };
}, { positiveSum: 0, negativeSum: 0 });

console.log("Pozitif Sayıların Toplamı:", positiveSum);
console.log("Negatif Sayıların Toplamı:", negativeSum);

//soru 10

const products = [
    { name: "Laptop", weight: 2.5 },
    { name: "Phone", weight: 0.5 },
    { name: "Monitor", weight: 3.0 },
    { name: "Keyboard", weight: 0.7 },
];

const totalWeight = products.reduce((acc, product) => {
    return acc + product.weight;
}, 0);

console.log("Toplam Ağırlık:", totalWeight);