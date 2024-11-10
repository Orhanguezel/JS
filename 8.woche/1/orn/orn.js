/*console.log(this);
const obj = {
    name: 'Example',
    showThis() {
        console.log(this); // obj nesnesini döndürür
    }
};

obj.showThis(); // { name: 'Example', showThis: [Function: showThis] }


const emt1 = {
    name: "Ali",
    age: 20,
    schowInfos: function(){
        console.log("bilgiler gösteriliyor");
    }
    };

const emt2 = {
    name: "Veli",
    age: 30,
    };
// { name: 'Ali', age: 20, showThis: [Function: showThis] }

emt1.salary = 4000;
console.log(emt1);

*

function Employee(name, age, salary) { // Yapıcı Fonksiyon - Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }
}

const emp1 = new Employee("Ali", 20, 4000);
const emp2 = new Employee("Veli", 30, 5000);
/*
console.log(emp1); // Employee { name: 'Ali', age: 20, salary: 4000 }
console.log(emp2); // Employee { name: 'Veli', age: 30, salary: 5000 }
*

emp1.showInfos();
emp2.showInfos();console.clear();



const object = new Object(); // object Literals
object.name = "Ali";

console.log(object); // {}
console.dir(object); // { name: 'Ali' }
console.log(Object.getPrototypeOf(object));
console.log(object.constructor);
*/

function Employee(name,age){
    this.name=name;
    this.age=age;
    this.showInfos=function(){
        console.log("bilgiler gösteriliyor");
    }
    this.toString=function(){
        console.log("Bu bir Employee objesidir");
    }
}
const emp1=new Employee("Ali",20);
console.log(emp1);
console.log(emp1.name);
console.log(emp1.toString());