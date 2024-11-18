/*
let say = "Hello outside";
function sayHello() {
  let say = "Hello inside";
  console.log(say);
}
sayHello();
console.log(say);

let say1 = "Hello outside";
function sayHello() {
  say1 = "Hello inside";
  console.log(say1);
}
sayHello();
console.log(say1);

*/

let greet = "Hello global";
function greeting() {
  greet = "Hello greeting scobo";
  function sayHello() {
    greet = "Hello sayHello scobo";
    console.log("3.",greet);// Hello sayHello scobo
  }
  console.log("2.",greet);// Hello greeting scobo
  sayHello();
} 
console.log("1.",greet);// Hello global
greeting(); // Hello sayHello scobo
console.log("4.",greet);// Hello sayHello scobo

console.clear();


const a = 15;
function sum(b){
    return function (c){
        return function(d){
            return function(e){
                return b+c+d+e;
            }
        }
    }
}
const firstInvork= sum(a);
const secondInvork= firstInvork(5);
const thirdInvork= secondInvork(5);
const result= thirdInvork(5);
console.log(result);
console.log(sum(15)(5)(5)(5));