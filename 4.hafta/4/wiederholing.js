// 5 => 10
function double(a){
    return a*2;
}
console.log(double(2)); // 4
double(5); // 10

//
function greet(name){
    return `Hallo ${name}`;
    console.log('Hallo'); // nicht ausgeführt. weil return beendet die Funktion
}

greet("John"); // Hallo John
console.log(greet("John")); // Hallo John
const greeting = greet("Orhan");
console.log(greeting); // Hallo Orhan

// ....................

function whoIsTheFirst(first, second){
    return second +first;
}
console.log(whoIsTheFirst("second", "first")); // firstsecond

// ....................

function testParameter1(a,b,c){
    return a,b,c;
}
console.log(testParameter1(1,2,3,4,5)); // 3


function testParameter2(a,b,c){
    return [a,b,c];
}
console.log(testParameter2(1,2,3,4,5,6)); // [1,2,3]

function testParameter3(a,b,c){
    return [a,b,c];
}
console.log(testParameter3(1,2)); // [1,2,undefined]

function testParameter4(a,b,c){
    return a,b;
}
console.log(testParameter4(1,2,3)); // 2

function testParameter5(a,b,c){
    return [a,b];
}
console.log(testParameter5(1,2,3)); // [1,2]

function testParameter6(a,b,c){
    return a+"," +b;
}
console.log(testParameter6(1,2, 3)); // 1,2

function testParameter7(a,b,c){
    return [a,b,c];
}
console.log(testParameter7(1,2)); // [1,2,undefined]
