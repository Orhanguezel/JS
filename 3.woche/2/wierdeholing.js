const num = "100.9px";// string
console.log(parseInt(num));//100
console.log(parseFloat(num));//100.9
console.log(Number(num));//100.9
console.log(+num);//100.9
console.log(typeof parseInt(num));//number
console.log(typeof parseFloat(num));//number
console.log(typeof Number(num));//number
console.log(typeof +num);//number
console.log(+"100");//100
console.log(+"100.9");//100.9

const num1 = "rs-100.9px";// string
console.log(parseInt(num1));//NaN
console.log(parseFloat(num1));//NaN
console.log(Number(num1));//NaN

