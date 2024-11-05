const greeting = 'Hallo, Welt!';


console.log( "Original: ", greeting);

const upparcase = greeting.toUpperCase();
console.log( "toUpperCase: ", upparcase);// HALLO, WELT!

const lowercase = greeting.toLowerCase();
console.log( "toLowerCase: ", lowercase);// hallo, welt!

// slice
// wir können auch einen Teil eines Strings extrahieren, indem wir die Methode slice verwenden.
/* wichtig:
- Der erste Parameter gibt an, wo der Ausschnitt beginnt.
- Der zweite Parameter gibt an, wo der Ausschnitt endet.
- Der zweite Parameter ist optional. Wenn er nicht angegeben wird, wird der Rest des Strings zurückgegeben.
- Der erste Parameter kann auch negativ sein. In diesem Fall wird der Ausschnitt von hinten beginnen.
*/
const str= "Hello World alles gut bei dir?";
const slice = str.slice(5, 11);
console.log( "slice: ", slice);// World
console.log( "slice: ", str.slice(5));// World alles gut bei dir?
console.log( "slice: ", str.slice(-4));// dir?
console.log( "slice: ", str.slice(-4, -1));// dir
console.log( "slice: ", str.slice(5, -1));// World alles gut bei dir
console.log( "slice: ", str.slice(-4, 11));// dir

const firstName = "sophie";
console.log( "Original: ", firstName);
console.log( "slice: ", firstName.slice(0, 1), firstName[0]);// s

// wie kann ich das erste Buchstabe groß schreiben?
const firstLetter = firstName.slice(0, 1).toUpperCase();
console.log( "firstLetter: ", firstLetter);// S

// wie kann ich den ersten zwei Buchstabe groß schreiben?
const firstTwoLetters = firstName.slice(0, 2).toUpperCase()+ firstName.slice(2);
const firstTwoLetters2 = firstName[0].toUpperCase() + firstName[1].toUpperCase();
console.log( "firstTwoLetters: ", firstTwoLetters);// SOphie
console.log( "firstTwoLetters2: ", firstTwoLetters2);// SO

// includes
// Die Methode includes gibt true zurück, wenn ein String in einem anderen String enthalten ist, andernfalls false.
//Prüfen, ob ein String in einem anderen String enthalten ist.
const str1 = "Hello World!";
console.log( "Original: ", str1);
console.log( "includes: ", str1.includes("World"));// true
console.log( "includes: ", str1.includes("Worl"));// true
console.log( "includes: ", str1.includes("world"));// false
console.log( "includes: ", str1.includes("l"));// true

//trim
// Die Methode trim entfernt Leerzeichen von beiden Seiten eines Strings.
// wird leerzeichen von Anfang und Ende entfernt
const str2 = "   Hello World!   ";
console.log( "Original: ", str2);
console.log( "trim: ", str2.trim());// Hello World!