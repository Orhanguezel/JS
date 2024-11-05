let num=9;

// num>5 und num /2=> good number => bad nummer

if(num>5){
    if(num%2==0){
    console.log("good number");
    } else{
    console.log("bad number");  
    }
  
} else{ 
    console.log("bad number");
}

// &&=> and
/* 
true && true => true
true && false => false
false && true => false
false && false => false
*/

if(num>5 && num%2==0){
    console.log("good number");
}else{
    console.log("bad number");
}

// name: string>7 and string =Johannes and first letter=J => you are Johannes => you are Hacker
let firstName="johannes";
if(firstName.length>7 && firstName=="Johannes" && firstName[0]=="J"){
    console.log("you are Johannes ");
} else{
    console.log("you are a Hacker");
}

// ||=> or
/*
true || true => true
true || false => true
false || true => true
false || false => false
*/

// Car : GTI oder 220 oder BJ>2019 => fast Car => slow car
let car="GTI";
let speed=290;
let year=2013;
if(car==="GTI" || speed>220 || year>2019){
    console.log("fast car");
} else{
    console.log("slow car");
}

// ! => not
/*
!true => false
!false => true
*/

let isThere =false;
// wenn da ist, angekommen, ist unterwegs
if(!isThere){
    console.log("is unterwegs");
} else{
    console.log("ist angekommen");
}
