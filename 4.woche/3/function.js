function greet(){
    console.log("Hello");
}
greet(); // Hello
greet(); // Hello
greet(); // Hello
greet(); // Hello


function greet2(name){
   console.log("Hello, " + name) ;
}


greet2("John"); // Hello, John
greet2(); // Hello, undefined

const name = "John";
function greet3(name){  
    console.log("Hello, " + name) ;
}
greet3(); // Hello, undefined


function greet4(name){  
    return `Hello, ${name}`;
}
console.log(greet4('John')); // Hello: John

const greeting = greet4('Orhan');
console.log(greeting); // Hello: Orhan
console.log(greeting.toUpperCase());

// function zwei paramaters als nummern => summe

function sum(a,b){
    return a + b;
}
console.log(sum(2,3)); // 5
console.log(sum(5,10)); // 15

// 

