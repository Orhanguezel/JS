// for schleifen (loops)
// for (initialisierung; bedingung; inkrementierung) { code }
// for (let i = 0; i < 10; i++) { console.log(i) }
/*
Syntax :
 - Einem Startpunkt (initialisierung)
 - Einem Endpunkt (Exit- bedingung)
 - Einem Fortschritt (inkrementierung)
  for(initialisierung; Exit bedingung; Fortschritt){
    // Code,  Block Scope, body mein loop
  }
*/
let counter = 0;
/*
console.log(counter);
counter++;

console.log(counter);
counter++;
console.log(counter);
counter++;
console.log(counter);
counter++;
console.log(counter);
*/

for (let i = 0; i < 5; i++) {
    console.log("i:", i);
}

// 10, 12, 14, 16, 18, 20
for(let i=10; i<=20; i++){  // 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    if (i % 2 === 0) {
        console.log("i:", i);
    }
}

console.log("........");

for (let i = 10; i <= 20; i += 2) {  // 10, 12, 14, 16, 18, 20
    console.log("i:", i);
}

console.log("........");

for (let i=5; i>=0; i--){  // 5, 4, 3, 2, 1, 0
    console.log("i:", i);
}

console.log("........");

let sum = 0;
for(let i=0; i<=5; i++){
    sum += i; // sum = sum + i
    console.log(`Adding, ${i} to ${sum}`);
}console.log("Final sum:", sum);

console.log("........");

// ..... *......* 4 punkte, fünf sterne

let string = "";

for(let i=1; i<50; i++){
    if(i % 5 === 0){
        string+="*";
    } else {
        string+=".";
    }
}
    console.log(string);

    console.log("........");

for (let i = 0; i < 5; i++) {
        
    string += "....*";
    }
    console.log(string);

    console.log("........");

const autos = ["BMW", "Audi", "Mercedes", "VW", "Opel", "Fiat"];
for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}

console.log("........");

const autosLowerCase= [];
for (let i = 0; i < autos.length; i++) {
    autosLowerCase.push(autos[i].toLowerCase());
}
console.log(autosLowerCase);

console.log("........");




