// ileri seviye fonksiyonlar

const radius = [1, 2, 3];

// Dairenin alanını hesaplamak için fonksiyon
const calculateArea = function (radius) {
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

// Dairenin çapını hesaplamak için fonksiyon
const calculateDiameter = function (radius) {
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}

console.log(calculateArea(radius));
console.log(calculateDiameter(radius));


// Yukarıdaki fonksiyonları daha iyi bir şekilde yazmak için ileri seviye fonksiyonlar kullanabiliriz.

// Fonksiyonu parametre olarak alacak şekilde yazalım

const radius1 = [1, 2, 3];

// Alan hesaplama mantığı
const area = function(radius1){
    return Math.PI * radius1 * radius1;
}

// Çap hesaplama mantığı
const diameter = function(radius1){
    return 2 * radius1;
}

// Alan, çap vb. hesaplamak için yeniden kullanılabilir fonksiyon
const calculate = function(radius1, logic){ 
    const output = [];
    for(let i = 0; i < radius1.length; i++){
        output.push(logic(radius1[i]));
    }
    return output;
}

console.log(calculate(radius1, area));
console.log(calculate(radius1, diameter));


// map kullanimi
const arr = [1, 2, 3, 4, 5];
const output = arr.map((num) => num += 10);
console.log(arr); // [1, 2, 3, 4, 5]
console.log(output); // [11, 12, 13, 14, 15]


const users = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Doe', age: 30},
    {firstName: 'Jack', lastName: 'Doe', age: 35},
];

const result = users.map((user) => user.firstName + ' ' + user.lastName);
console.log(result); // ['John Doe', 'Jane Doe', 'Jack Doe']


// filter kullanimi

const arr1 = [1, 2, 3, 4, 5];
const output1 = arr1.filter((num) => num % 2); // Tek sayıları filtrele
console.log(arr1); // [1, 2, 3, 4, 5]
console.log(output1); // [1, 3, 5]

const users2 = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Doe', age: 30},
    {firstName: 'Jack', lastName: 'Doe', age: 35},
];

// Yaşı 30'dan büyük kullanıcıları bul
const output2 = users2.filter(({age}) => age > 30);
console.log(output2); // [{firstName: 'Jack', lastName: 'Doe', age: 35}]

//reduce() Kullanımı

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, currentValue) => {
    return total + currentValue;
}, 0);

console.log(sum); // 15

let numbers2 = [5, 20, 100, 60, 1];
const maxValue = numbers2.reduce((max, curr) => {
    return curr > max ? curr : max;
});
console.log(maxValue); // 100


const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };
const mergedObj = [obj1, obj2, obj3].reduce((acc, curr) => {
    return { ...acc, ...curr };
}, {});
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

