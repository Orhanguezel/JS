// forEach, map, filter
/*
array.forEach(function(currentValue, index, array) {
    // Her bir eleman için çalıştırılacak kod
});
*/

const sayılar = [1, 2, 3, 4];
sayılar.forEach(function(sayı) {
    console.log(sayı * 2); // 2, 4, 6, 8 yazdırır
});

// map

/*
const yeniArray = array.map(function(currentValue, index, array) {
    return newValue; // Dönen değer yeni diziye eklenir
});
*/

const num = [1, 2, 3, 4];
const yeniNum = num.map(function(nmr) {
    return nmr * 2;
});
console.log(yeniNum); // [2, 4, 6, 8]


// filter
/*
const yeniArray = array.filter(function(currentValue, index, array) {
    return condition; // true dönen elemanlar yeni diziye eklenir
});
*/
const num1 = [1, 2, 3, 4, 5];
const yeniNum1 = num1.filter(function(nmr) {
    return nmr > 2;
});
console.log(yeniNum1); // [3, 4, 5] yazdırır






