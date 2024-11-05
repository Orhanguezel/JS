const readlineSync = require("readline-sync");

const firstName = readlineSync.question("What is your name? ");
const lastName = readlineSync.question("What is your last name? ");

console.log(`Welcome ${firstName} ${lastName}!`);

console.log(
  `\n\n${firstName}, type a word and I 'll tell you it's second letter`
);

const word = readlineSync.question("What is your favurite Word : ");

console.log("the Second letter is :", word[1]);

const age = readlineSync.questionInt("Kaç yaşındasınız? ");

if (age >= 18) {
  console.log("Yetişkinsiniz.");
} else {
  console.log("Reşit değilsiniz.");
}


const likesCoffee = readlineSync.keyInYN("Kahve sever misiniz?");
if (likesCoffee) {
  console.log("Kahve harikadır!");
} else {
  console.log("Belki çay daha iyidir?");
}


const options = ['Kahve', 'Çay', 'Su'];
const index = readlineSync.keyInSelect(options, "Ne içmek istersiniz?");

if (index === -1) {
  console.log("Hiçbir şey seçilmedi.");
} else {
  console.log(`Seçiminiz: ${options[index]}`);


}