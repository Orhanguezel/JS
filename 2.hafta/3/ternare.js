// ternary operator
// condition ? expr1 : expr2
// if condition is true, the operator returns the value of expr1; otherwise, it returns the value of expr2.

let num=20;

// ternary operator
num>5 && num%2==0 ? console.log("good number") : console.log("bad number");

// zahl < 100 and zahl >10 => 50 addieren, zahl >100 => -100, log den zahl.
let zahl=10;

zahl<100 && zahl>10
? (zahl+=50) 
: zahl>100
? (zahl-=100)
: console.log(zahl);
console.log(zahl);