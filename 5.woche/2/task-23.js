// English:
// You are given an array that contains integers. The array will have a length of at least 3 but could be much larger.
// The array is either mostly comprised of odd integers or mostly comprised of even integers except for one "outlier" integer N.
// Your task is to write a function that takes the array as input and returns this outlier N.

// Türkçe:
// Size bir dizi veriliyor ve bu dizi tam sayılardan oluşuyor. Dizi en az 3 elemanlı olacak ancak çok daha büyük de olabilir.
// Dizi ya tamamen tek sayılardan ya da tamamen çift sayılardan oluşur, ancak bu dizide sadece bir tane "uyumsuz" tam sayı (outlier) vardır.
// Göreviniz, bu diziyi girdi olarak alan ve uyumsuz tam sayıyı (outlier) döndüren bir fonksiyon yazmaktır.


// Example in English:
// [2, 4, 0, 100, 4, 11, 2602, 36] --> 11 (because 11 is the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (because 160 is the only even number)

// Örnek Türkçe:
// [2, 4, 0, 100, 4, 11, 2602, 36] --> 11 (çünkü 11 tek sayı ve diğerleri çift)
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (çünkü 160 çift sayı ve diğerleri tek)

function findOutlier(integers) {
    let isEvenMajority = 
        (integers[0] % 2 === 0 ? 1 : 0) +
        (integers[1] % 2 === 0 ? 1 : 0) +
        (integers[2] % 2 === 0 ? 1 : 0) > 1;

    return integers.find(num => (num % 2 === 0) !== isEvenMajority);
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // 11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // 160
console.log(findOutlier([1, 2, 3])); // 2
console.log(findOutlier([2, 3, 4])); // 3