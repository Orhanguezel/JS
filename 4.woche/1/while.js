// while loop


let firstName= "John";

while (!firstName) {
    console.log("Enter please your name.");
}
console.log(firstName)

let randomNum= Math.floor(Math.random() * 10);

while (randomNum < 8) {
    console.log(randomNum);
    randomNum++;
}



// do {
// code here
// } while (condition);

let num=0;
do {
    console.log(num);
    num++;
} while (num < 8);


// for of loop
let cars= ["BMW", "Volvo", "Mini"];
let text= "";
for (let x of cars) {
    text += x + " ";
}
console.log(text);