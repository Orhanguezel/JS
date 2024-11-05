// function gibt uns zurück ein function

function greeting(name){
    return function(){
        console.log('Hello ' + name);
    }
}

greeting('Ali')();

const makeGreet = greeting("Olga");
makeGreet(); // Hello Olga

// function als parameter
function count(n,showCounting){
    for(let i = 0; i <= n; i++){
        showCounting(i);
    }

}
function logNums(number){
    console.log(number);
}

count(10, logNums);

console.clear();

//function name, age, age controlling function
function person(name,age,abc){
    console.log(`hallo ${name}`);
    abc(age);
}

function checkAge(age){
    age >= 18 ? console.log('You are allowed to drive') : console.log('You are not allowed to drive');
}

person('Ali', 17, checkAge);

console.clear();

// function parameter1 : number, parameter2 : addFive function
// check the number is greater than 10 dann wird adding 5 orherwise log the number without adding

function sumFive(num, addFive){
    num > 10 ? addFive(num) : console.log(num);

}

function plusFive(n){
    console.log(n + 5);
}

sumFive(9, plusFive);//9
sumFive(11, plusFive);//16



