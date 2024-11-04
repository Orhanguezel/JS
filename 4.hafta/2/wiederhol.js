// Frage den Benutzer nach 10 Zahlen und finde mit einer While-Schleife die größte Zahl.
import rls from "readline-sync";
/*

let count= 0;
let max = 0;


while (count < 5) {

    let number = rls.question("Gib eine Zahl ein: ");
    let eingabe = parseInt(number);

    if (eingabe > max) {
        max =eingabe ;
    }
    count++;
} 
console.log("Die größte Zahl ist: " + max);

// Alternative Lösung mit For-Schleife
let max2 = 0;

for (let i = 0; i < 5; i++) {
    let number = rls.question("Gib eine Zahl ein: ");
    let eingabe = parseInt(number);

    if (eingabe > max2) {
        max2 =eingabe ;
    }
}
console.log("Die größte Zahl ist: " + max2);

// Alternative Lösung do while
let max3 = 0;

do {
    console.log("Welcome to the Big number app ");
    let number = rls.question("Gib eine Zahl ein: ");
    if (number>max3) {
        max3 = number;
    }
    count++;
}
while (count < 5);
console.log("Die größte Zahl ist: " + max3);


//aufgabe
// Frage den Benutzer nach 5 Zahlen, speichere sie in einem Array und berechne die Summe der Zahlen mit einer While-Schleife.

// Kullanıcıdan 5 sayı iste, bu sayıları bir diziye kaydet ve sayıların toplamını bir While döngüsü ile hesapla.

let count = 0;
let sum = 0;
let numbers = [];

while (count < 5) {
    let number = rls.question("Gib eine Zahl ein: ");
    let eingabe = parseInt(number);
    numbers.push(eingabe);
    sum += eingabe;
    count++;
}
console.log("Die Summe der Zahlen ist: " + sum);
console.log(numbers);

// Alternative Lösung mit For-Schleife
let sum2 = 0;
let numbers2 = [];

for (let i = 0; i < 5; i++) {
    let number = rls.question("Gib eine Zahl ein: ");
    let eingabe = parseInt(number);
    numbers2.push(eingabe);
    sum2 += eingabe;
}
console.log("Die Summe der Zahlen ist: " + sum2);
console.log(numbers2);

// Alternative Lösung do while
let sum3 = 0;
let numbers3 = [];
let count3 = 0;

do {
    let number = rls.question("Gib eine Zahl ein: ");
    let eingabe = parseInt(number);
    numbers3.push(eingabe);
    sum3 += eingabe;
    count3++;
}
while (count3 < 5);

console.log("Die Summe der Zahlen ist: " + sum3);
console.log(numbers3);

// alternative Lösung mit for of
let sum4 = 0;
let numbers4 = [];

while (numbers4.length < 5) {
    let number = rls.question("Gib eine Zahl ein: ");
    let eingabe = parseInt(number);
    numbers4.push(eingabe);
}

for (let number of numbers4) {
    sum4 += number;
}
console.log("Die Summe der Zahlen ist: " + sum4);
console.log(numbers4);


*/

// Erstelle ein verschachteltes Array mit 3 Arrays, die jeweils 3 Zahlen enthalten. und finde die kleinste Zahl mit einer While-Schleife.

// 3 sayı içeren 3 diziyi içeren iç içe bir dizi oluşturun ve bir While döngüsü ile en küçük sayıyı bulun.

let numbers = [
  [112, 22, 35],
  [4, -5, 6],
  [7, 8, 9],
];

let count = 0;
let min = numbers[0][0];
let sum = 0;

while (count < numbers.length) {
  let innerCount = 0;
  while (innerCount < numbers[count].length) {
    if (numbers[count][innerCount] < min) {
      min = numbers[count][innerCount];
      
    }sum+=numbers[count][innerCount];
    innerCount++;
    
  }
  count++;
}
console.log("Die kleinste Zahl ist: " + min);
console.log("Die Summe der Zahlen ist: " + sum);

// Alternative Lösung mit For-Schleife
let min2 = Infinity;
let sum2 = 0;

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    if (numbers[i][j] < min2) {
      min2 = numbers[i][j];
    }sum2 += numbers[i][j];
  }
}

console.log("Die kleinste Zahl ist: " + min2);
console.log("Die Summe der Zahlen ist: " + sum2);

// Alternative Lösung for of

let min3 = Infinity;
let sum3 = 0;

for (let number of numbers) {
  for (let num of number) {
    if (num < min3) {
      min3 = num;
    }
    sum3+=num;
  }
}

console.log("Die kleinste Zahl ist: " + min3);
console.log("Die Summe der Zahlen ist: " + sum3);

// Frage den Benutzer nach 5 Wörtern und gib das Array in umgekehrter Reihenfolge mit einer for-Schleife aus.
// Kullanıcıdan 5 kelime isteyin ve bir for döngüsü ile diziyi ters sırada yazdırın.

let words = [];

for (let i = 0; i < 5; i++) {
  let word = rls.question("Gib ein Wort ein: ");
  words.push(word);
}

for (let i = words.length - 1; i >= 0; i--) {
  console.log(words[i]);
}

// Alternative Lösung mit while-Schleife
let words2 = [];
let count2 = 0;

while (count2 < 5) {
  let word = rls.question("Gib ein Wort ein: ");
  words2.push(word);
  count2++;
}

let i = words2.length - 1;
while (i >= 0) {
  console.log(words2[i]);
  i--;
}

