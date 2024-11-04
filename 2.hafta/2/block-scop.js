// Block scope
// Block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.
/* Der Inhalt unserer if-else-Anweisung ist ein Block.
Der Inhalt unserer for-Schleife ist ein Block.
Der Inhalt unserer while-Schleife ist ein Block.
Der Inhalt unserer switch-Anweisung ist ein Block.
Der Inhalt unserer Funktion ist ein Block.
Der Inhalt unserer Methode ist ein Block.
Der Inhalt unserer Klasse ist ein Block.
Der Inhalt unserer Objekte ist ein Block.
Der Inhalt unserer Arrays ist ein Block.
Der Inhalt unserer Bedingungen ist ein Block.
Der Inhalt unserer Schleifen ist ein Block.
*/

const gluecksZahl = Math.floor(Math.random() * 11); // 0-10

if (gluecksZahl > 3) {
    console.log(`Ich kann auf gluecksZahl zugreifen:, ${gluecksZahl}`);
const scopTest = 'constscopTest';
let scopTest2 = 'letscopTest2';
var scopTest3 = 'varscopTest3';

if(gluecksZahl>5){
    console.log(scopTest, scopTest2, scopTest3);
    const testNum = 3;

}

}
// console.log(scopTest); fehler
// console.log(scopTest2); fehler
console.log("outside: ",scopTest3);


