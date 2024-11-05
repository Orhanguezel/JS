import rls from "readline-sync";

// Frage den Benutzer nach einem Wort und überprüfe, ob das Wort ein Palindrom ist.
// anna , Otto , John
/*

let word = rls.question("Gib ein Wort ein: ").toLowerCase(); //john
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
    }

if (word === reversed) {
    console.log("Das Wort ist ein Palindrom.");
}
else {
    console.log("Das Wort ist kein Palindrom.");
}

// Alternative Lösung mit while-Schleife

let word2 = rls.question("Gib ein Wort ein: ").toLowerCase();
let reversed2 = "";
let i = word2.length - 1;

while (i >= 0) {
    reversed2 += word2[i];
    i--;
}

if (word2 === reversed2) {
    console.log("Das Wort ist ein Palindrom.");
} else {
    console.log("Das Wort ist kein Palindrom.");
}
*/

// Erstelle ein quadratishe 2D Array (gleich viele Zeilen und Spalten) Schreibe ein Program, das die Summe der Diagonalen berechnet.oben links nach unten rechts berechnet
//   2D satır ve sütundan oluşan kare bir dizi oluşturun. Sol üstten sağ alta olan diyagonal elemanların toplamını hesaplayan bir program yazın.

let nestedArray = [
    [5,2,3],
    [4,6,1],
    [7,8,9]
];

let sum = 0;
for (let i = 0; i < nestedArray.length; i++) {
    sum += nestedArray[i][i];
}
console.log(sum);



