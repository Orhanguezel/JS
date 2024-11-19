function add(
    num1: number, 
    num2: number, 
    showResult: boolean, 
    phrase: string
): number |string | void{
  //  let result = num1 + num2;
  //  if (typeof num1!=='number' || typeof num2!=='number') {
   //     console.log('Invalid input'); }
   const result= num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }else {
        return `${result}`;
    }

}

const number1 = 5;
const number2 = 4;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);


function printData(num:number):void {
    console.log('Result: ' + num);
}

function addAndHandel(
    num1: number, 
    num2: number, 
    cb: (num: number) => void
){
    const result = num1 + num2;
    cb(result);
}
addAndHandel(10, 20, printData);