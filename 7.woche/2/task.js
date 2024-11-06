// soru 1
const numbers = [1, 2, 3, 4];


function simpleMap(numbers, callback){
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
      result.push(callback(numbers[i]));
    }
    return result;
  }
function double(number){
    return number*2;
}
console.log(simpleMap(numbers, double)); // beklenen çıktı: [2, 4, 6, 8]


console.clear();
// soru 2
const words = ["hello", "world"];

function capitalizeWords(array){
    let result=[];
    for (let i=0; i< array.length; i++){
        result.push(array[i].toUpperCase());
    } return result;
};

console.log(capitalizeWords(words));// beklenen çıktı: ["HELLO", "WORLD"]

function capitalizeWords1(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        // array[i] kullanarak her kelimeyi al ve büyük harf ile küçük harf dönüşümünü yap
        result.push(array[i][0].toUpperCase() + array[i].slice(1).toLowerCase());
    }
    return result;
};

const words2 = ["hello", "world", "javaScript", "programming"];
console.log(capitalizeWords1(words2)); // beklenen çıktı: ["Hello", "World", "Javascript", "Programming"]

console.clear();

// soru 3

const numbers2 = [-1, 0, 1, 2, 3];

function filterPositiveNumbers(array){
    let result=[];
    for (let i=0; i<array.length; i++){
        if(array[i]>0){
            result.push(array[i]);
        } 
    }  return result;
}
console.log(filterPositiveNumbers(numbers2)); // beklenen çıktı: [1, 2, 3]