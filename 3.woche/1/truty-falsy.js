const readlineSync = require('readline-sync');

// Truty - falsy testen 

if (true) {
    console.log("is ist true, Ja, 1");
}

if("yes"){
    console.log("is ist true, Ja, 2");
}

if ("false") {
    console.log("is ist true, Ja, 3");
}

if(911){
    console.log("is ist true, Ja, 4");
}

if([]){
    console.log("is ist true, Ja, 5");
}

// Falsy
if (false) {
    console.log("is ist true, Nein, 1");
}

if (0) {
    console.log("is ist true, Nein, 2");
}

if (null) {
    console.log("is ist true, Nein, 3");
}

if (undefined) {
    console.log("is ist true, Nein, 4");
}

if (NaN) {
    console.log("is ist true, Nein, 5");
}

if ("") {
    console.log("is ist true, Nein, 6");
}

if ("0") {
    console.log("is ist true, Nein, 7");
}

if (-0) {
    console.log("is ist true, Nein, 8");
}

if (`0`) {
    console.log("is ist true, Nein, 9");
}

//mehr test 

if(1==true){
    console.log("is ist true, Ja, 6");
}

if(0==false){
    console.log("is ist true, Ja, 7");
}

if(0===false){
    console.log("is ist true, Nein, 10");
}

if("yes"==true){
    console.log("is ist true, Ja, 8");
}

if(5==true){
    console.log("is ist true, Ja, 9");
}

if(null==false){
    console.log("is ist true, Ja, 10");
}

if(NaN==NaN){
    console.log("is ist true, Nein, 11");
}

if(null===null){
    console.log("is ist true, Ja, 11");
}

/*

console.log("\n\n");
const name = readlineSync.question("What is your name? ") || "Guest";
console.log(`Hello, ${name}!`);
*/

// Boolean testen

console.log(Boolean(0));//false
console.log(Boolean(1));//true

if(Boolean(5)==true){
    console.log("is ist true, Ja, 12");
}

console.log(Boolean(NaN));//false
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(Boolean(""));//false
console.log(Boolean("0"));//true
console.log(Boolean("yes"));//true
console.log(Boolean([]));//true
console.log(Boolean({}));//true
console.log(Boolean(function(){}));//true
console.log(Boolean(()=>{}));//true

// Zu string konvertieren

console.log(String(0));//"0"
console.log(String(1));//"1"
console.log(String(NaN));//"NaN"
console.log(String(null));//"null"
console.log(String(undefined));//"undefined"
console.log(String(" "));//" "
console.log(String("0"));//"0"
console.log(String("yes"));//"yes"
console.log(String("\n"));//"\n"

// Zu number konvertieren

console.log(Number("0"));//0
console.log(Number("1"));//1
console.log(Number("NaN"));//NaN
console.log(Number("null"));//NaN
console.log(Number("undefined"));//NaN
console.log(Number(" "));//0
console.log(Number("0"));//0
console.log(Number("yes"));//NaN
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(null));//0
console.log(Number(undefined));//NaN
console.log(Number("ff", 16)); // 4095
console.log(parseInt("12.2"));//12
console.log(parseFloat("12.2"));//12.2
console.log(parseInt("12.2"));//12
console.log(typeof NaN); // number
console.log(NaN-500);//NaN

/*const number=readlineSync.question("Enter a number: ");
console.log(number, typeof number);
console.log(+number, typeof +number);*/
console.log(20+"100");//string 20100
console.log("100"+20);//number 10020
console.log(20-"100");//number -80
console.log(+"100"+20);//number 120
console.log("100"+20);//string 10020

const newNum= 10/3;
console.log(newNum.toFixed(2));//3.33 string
console.log(typeof(newNum.toFixed(2))); //string

//Number.isNaN() testen
console.log(Number.isNaN(NaN));//true
console.log(Number.isNaN("NaN"));//false
console.log(Number.isNaN(1));//false
console.log(Number.isNaN("yes"+1));//false






