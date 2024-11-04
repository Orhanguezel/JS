/*
Es ist ein vereinfachtes Roulette-Spiel!
Zuerst wird nach deinem Namen gefragt.
Danach wird gefragt, ob du über 18 Jahre alt bist.
Wenn du nicht über 18 Jahre alt bist, stoppt das Programm.
Du startest mit 100€.
Jede Runde kostet 1€.
Jede Runde:
Wenn du kein Geld mehr hast, endet das Spiel.
Das Spiel fragt, ob du aufhören oder weitermachen möchtest.
Wenn du aufhörst, behältst du den Rest deines Geldes.
Das Spiel fragt, ob du auf gerade oder ungerade Zahlen setzen möchtest.
Das Spiel generiert eine zufällige Zahl zwischen 0 und 100.
Wenn die Zahl gerade ist und du auf gerade Zahlen gesetzt hast, gewinnst 
du 2,4€.
Wenn die Zahl gerade ist und du auf ungerade Zahlen gesetzt hast, 
verlierst du.
Wenn die Zahl 0 ist, verlierst du.
*/
/*
Bu basitleştirilmiş bir rulet oyunudur!
İlk olarak adınız sorulacak.
Daha sonra 18 yaşından büyük olup olmadığınız sorulacak.
Eğer 18 yaşından büyük değilseniz, program duracak.
100€ ile başlıyorsunuz.
Her tur 1€'ya mal olacak.
Her tur:
Eğer paranız biterse, oyun sona erer.
Oyun size devam etmek mi yoksa durmak mı istediğinizi soracak.
Eğer durursanız, kalan paranızı alırsınız.
Oyun size çift sayılara mı yoksa tek sayılara mı bahis oynamak istediğinizi soracak.
Oyun 0 ile 100 arasında rastgele bir sayı üretecek.
Eğer sayı çift ise ve siz çift sayılara bahis oynamışsanız, 2,4€ kazanırsınız.
Eğer sayı çift ise ve siz tek sayılara bahis oynamışsanız, kaybedersiniz.
Eğer sayı 0 ise, kaybedersiniz.
*/

import rls from "readline-sync";

let firstName= rls.question("What is your name? ") || "Guess";
console.log(`Hello ${firstName}!`);
let age= rls.questionInt("Enter your age");
if (age<18) {
    console.log("You are not old enough to play this game.");
    process.exit();
} else {
    console.log("Welcome to the game!");
}

let geld= 100;
let einsatz= 1;


while (geld>=1) {
    geld--;
    let num= Math.floor(Math.random() * 100); // 0-100
    console.log("You have " + geld + "€");
    const bet =rls.question("Do you want to bet even or odd (e/o) ");
    console.log(`The number is ${num}`);
    if (num===0) {
        console.log("You lose!");
    } else if (num % 2 === 0 && bet === "e") {
        geld += 2.4;
        console.log("You win 2.4€!");
    } else if (num % 2 !== 0 && bet === "o") {
        geld += 3;
        console.log("You win 3€!");
    } else {
        console.log("You lose!");
    }
    const play = rls.question("Do you want to keep playing?(y/n) ");
    if (play === "n") {
        console.log("Good bye, see you next time!");
        break;
    }
} 
console.log("You have no money left!");