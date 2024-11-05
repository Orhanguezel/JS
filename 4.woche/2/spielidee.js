/*

Oyun Fikri: Kelime Tahmin Oyunu
Program, bir diziden rastgele bir kelime seçer.
Oyuncu, kelimeyi harf harf tahmin etmek zorundadır.
Her turdan sonra program, hangi harflerin doğru tahmin edildiğini ve hangilerinin eksik olduğunu belirtir.
Oyun, oyuncu tüm kelimeyi doğru tahmin edene kadar ya da belirli bir maksimum hata sayısına ulaşana kadar devam eder.


Spielidee: Wort-Ratespiel
Das Programm wählt zufällig ein Wort aus einem Array.
Der Spieler muss das Wort Buchstabe für Buchstabe erraten.
Nach jeder Runde gibt das Programm an, welche Buchstaben korrekt geraten wurden und welche fehlen.
Das Spiel läuft weiter, bis der Spieler das gesamte Wort richtig erraten hat oder eine maximale Anzahl an Fehlversuchen erreicht ist.

while (guessNumber !== randomNumber && attempts > 0) {
    if (isNaN(guessNumber)) {
        guessNumber = parseInt(readlineSync.question("Please enter a valid number: "));
    } else if (guessNumber > randomNumber) {
        guessNumber = parseInt(readlineSync.question("Too high! Try again: "));
    } else {
        guessNumber = parseInt(readlineSync.question("Too low! Try again: "));
    }
    attempts--;
    console.log(`You have ${attempts} attempts left.`);
}

if(attempts === 0) {
    console.log("You have no more attempts left. Game over!");
    process.exit();
}

console.log("Congratulations! You guessed the number!");



*/
import rls from "readline-sync";

const words =
  "Nach jeder Runde gibt das Programm an welche Buchstaben korrekt geraten wurden und welche fehlen Das Spiel läuft weiter bis der Spieler das gesamte Wort richtig erraten hat oder eine maximale Anzahl an Fehlversuchen erreicht ist";
const wordsArray = words.split(" ");
let randomIndex = Math.floor(Math.random() * wordsArray.length);
let randomWord = wordsArray[randomIndex].toLowerCase(); 
console.log("\n");
console.log(randomWord);
console.log("\n");

let hiddenWord = [];
for (let i = 0; i < randomWord.length; i++) {
  hiddenWord.push("_");
}

console.log(hiddenWord.join(" "));
console.log("\n");

let wrongGuesses = 0;
let maxWrongGuesses = randomWord.length;

while (hiddenWord.join("") !== randomWord && wrongGuesses < maxWrongGuesses) {
  let guessedLetter = rls.question("Please guess the letter: ").toLowerCase();
  
  if (randomWord.includes(guessedLetter)) {
    for (let i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === guessedLetter) {
        hiddenWord[i] = guessedLetter; 
      }
    }
  } else {
    wrongGuesses++;
    console.log(`Wrong guess! You have ${maxWrongGuesses - wrongGuesses} attempts left.`);
  }

  console.log(hiddenWord.join(" "));

  if (wrongGuesses === maxWrongGuesses) {
    console.log("You have no more attempts left. Game over!");
    process.exit();
  }
}

console.log("Congratulations! You guessed the word correctly: " + randomWord);




