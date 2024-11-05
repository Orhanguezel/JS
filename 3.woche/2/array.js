
const string= "Hallo";
//string.lenght
//string[0]
// index

const tiere= ["Hund", "Katze", "Maus"];
const zahlen= [1,2,3,4,5,6,7,8,9,10];
const produktInfo= [
    "Apfel", 
    2.5, 
    true, 
    "Apfel ist gesund", 
    ["Vitamine", "Mineralien"], 
    {name: "Apfel", preis: 4.5, verfuegbar: true}
];

console.log(produktInfo[1]);//2.5
console.log(tiere.length);//3
console.log(typeof tiere);//object

let newWord= string[0].toLowerCase()+ string.slice(1);
console.log(newWord);//hallo

tiere[0]= "Elefant"

console.log(tiere)
// tiere="try"; error

produktInfo[4][0]="weiß";
console.log(produktInfo);

console.log(produktInfo[0][0]);//A
console.log(produktInfo[4][0]);//weiß

produktInfo[0][0]="i";
console.log(produktInfo[0]); //Apfel

console.log("\n\n");

const arr= new Array(1, 2, 3); // sehr selten
console.log(arr);// [1,2,3]
