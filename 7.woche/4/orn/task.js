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