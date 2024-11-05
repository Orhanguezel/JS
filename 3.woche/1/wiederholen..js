// if else statement 
// random number 0, 100=> number < Lucy => 50 unlucky.

let luckyNumber = Math.floor(Math.random() * 100);// 0-100 arasında random sayı üretir.

if (luckyNumber < 50) {
    console.log("Lucky");
} else {
    console.log("unLucky");
}
// tearner operator

let Number = Math.floor(Math.random() * 100);// 0-100 arasında random sayı üretir.
let result = Number < 50 ? "Lucky" : "unLucky";
console.log(result);

