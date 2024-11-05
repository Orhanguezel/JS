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



