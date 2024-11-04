// array methods


//unshift
let arr = ["audi", "bmw", "mercedes"];
let element= arr.unshift("opel");
console.log(arr);//["opel", "audi", "bmw", "mercedes"]

//push
let element2= arr.push("fiat");
console.log(arr);//["opel", "audi", "bmw", "mercedes", "fiat"]

//shift
let element3= arr.shift();
console.log(arr);//["audi", "bmw", "mercedes", "fiat"]

//pop
let element4= arr.pop();
console.log(arr);//["audi", "bmw", "mercedes"]
const test =delete arr[0];
console.log(arr);//[empty, "bmw", "mercedes"]   delete arr[0]; aber den Platz bleibt reserviert

//splice
const tiere =["Hund", "Katze", "Maus", "Elefant", "Tiger", "Löwe"];
const deletedElements= tiere.splice(1,2);
console.log(deletedElements);//["Katze", "Maus"]

const deletedElements2= tiere.splice(0,1, "Hund", "Katze");
console.log(deletedElements2);//["Hund"]
console.log(tiere);//["Hund", "Katze", "Elefant", "Tiger", "Löwe"]

// slice

const numArrays= [0,1,2,3,4,5,6];
const copyOfNums= numArrays.slice(1,4);
console.log(copyOfNums);//[1,2,3]
console.log(numArrays);//[0,1,2,3,4,5,6] orginal bleibt unverändert

//reverse

numArrays.reverse();
console.log(numArrays);//[6,5,4,3,2,1,0]

// sort
const randomArray= [1, 5, 3, 2, 4, 6, 7, 8, 9, 10];
randomArray.sort();
console.log(randomArray);//[1,10,2,3,4,5,6,7,8,9]  sortiert die Zahlen als string

//concat
const arr1= [1,2,3];
const arr2= [4,5,6];
const arr3= arr1.concat(arr2);
console.log(arr3);//[1,2,3,4,5,6]
console.log(arr1);//[1,2,3] orginal bleibt unverändert
console.log(arr2);//[4,5,6] orginal bleibt unverändert

//join
const arr4= ["a", "b", "c"];
const str= arr4.join();
console.log(str);//a,b,c
console.log(typeof str);//string
const str2= arr4.join("-");
console.log(str2);//a-b-c

// toString
const str3= arr4.toString();
console.log(str3);//a,b,c

//indexOf

const arr5= ["a", "b", "c", "d", "e"];
const index= arr5.indexOf("c");
console.log(index);//2

//split

const str4= "a,b,c,d,e";
const arr6= str4.split(",");
console.log(arr6);//["a", "b", "c", "d", "e"]





