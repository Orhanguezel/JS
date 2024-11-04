// if Anweisungen
/* if(Bedingung) {4>3 true => if block wird ausgeführt.
 code: wird durch gefuert wenn die Bedingung true ist.
}*/

const geld=10;
const brotPreis=6;

if(geld>=brotPreis){
    console.log('Ich kaufe Brot');
}
if(geld<brotPreis){
    console.log('Ich kaufe kein Brot');
}
if(true){
    console.log('Ich bin immer true');
}

//if - else Anweisungen
const age=20;

if(age>=18){
    console.log('Du kannst Führerschein machen');
} else {
    console.log('Du kannst Führerschein nicht machen');
}

//nested if - else Anweisungen

const firstName='Janina';
const tall = 1.70;

if(tall>=1.70){
    if(firstName==='Janine'){
        console.log('Du bist Janine und groß');
    } else {
        console.log('Du bist nicht Janine aber groß');
    }
}console.log('Guten Tag');

// example

const alter=20;

if(alter>=90){
    console.log('Du bist alt');
} else if(alter>70){
    console.log('Du bist mittel alt');
} else if(alter>50){
    console.log('Du bist jung');
} else if(alter>30){
    console.log('Du bist sehr jung');
} else if(alter>18){
    console.log('Du bist jugendlich');
} else if(alter>12){
    console.log('Du bist kind');
}else {
    console.log('Du bist baby');
}

// 


