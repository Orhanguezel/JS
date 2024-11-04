// schreibe ein Programm, die ein Text zählt, wie oft ein Buchstabe wiederholt wird.
let text = "Today is a amazing day because today it`s monday :)";

let count = 0;
for (let i = 0; i < text.length; i++) {
    if (text[i] === "a") {
        count++;
    }
  }
console.log(`ìm Text befindet: ${count}`); //

// 2. Erstelle ein Array mit beliebigen Zählen und berehne die summe aller Elemente im Array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    // sum = sum + arr[i];
    // erste iteration: sum = 0 + 1 = 1
    // zweite iteration: sum = 1 + 2 = 3
    // dritte iteration: sum = 3 + 3 = 6
} 
console.log(sum); // 55

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum2 = 0;

for (let arr of arr2) {
    sum2 += arr;
} 
console.log(sum); // 

// 3. Schreibe ein Programm, das eine Zeichenkette vom Benutzer abfragt
// und zählt, wie viele Großbuchstaben in der Zeichenkette vorkommen.

let UserMsg = "Hallo John, Wie geht es dir heute ?";

/*
erstelle ein variable
for (durch den text zu gehen) {
    wenn (Grossbuchstabe ist) {
        zählen
    }
}
zeige der Zahl
*/

let upperCount = 0;
for (let i = 0; i < UserMsg.length; i++){
    if (UserMsg[i] !== UserMsg[i].toLowerCase()) {
        upperCount++;
    }
}
console.log(`Im Text befindet: ${upperCount} Grossbuchstaben`); // 3

let upperCount2 = 0;

for (let msg of UserMsg) {
    if (msg !== msg.toLowerCase()) {
        upperCount2++;
    }
}
console.log(`Im Text befindet: ${upperCount2} Grossbuchstaben`); // 3

// 4. Schreibe ein Programm, das ein Rechteck aus Sternen (*) mit einer
// Breite und Höhe druckt, die vom Benutzer vorgegeben werden. Verwende
// dafür verschachtelte for-Schleifen.
// Breite = 3, Hoehe = 2
// * * *
// * * *

let breite = 3;
let hoehe = 2;

for(let i = 0; i < hoehe; i++) {
    let zeile = "";  // her satır için yeni bir string başlat
    for(let j = 0; j < breite; j++) {
        zeile += "* ";  // genişlik kadar yıldız ekle
    }
    console.log(zeile);  // her satır tamamlandığında yazdır
}


console.log("----------------------");

// Kullanıcıdan genişlik ve yükseklik değerlerini al
let width = 5;  // Genişlik (örneğin 5)
let height = 3; // Yükseklik (örneğin 3)

// Dış döngü yükseklik için
for (let i = 0; i < height; i++) {
  let row = ""; // Her satırda yıldızları biriktirmek için

  // İç döngü genişlik için
  for (let j = 0; j < width; j++) {
    row += "* "; // Yıldız ekle
  }

  console.log(row); // Satırı ekrana yazdır
}

console.log("----------------------");

let nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (let i = 0; i < nestedArray.length; i++) {
    console.log(nestedArray[i]);
    for (let j = 0; j < nestedArray[i].length; j++) {
        console.log(nestedArray[i][j]);
    }
}

console.log("----------------------");

for (let arr of nestedArray) {
    for (let item of arr) {
        console.log(item);
    }
}
