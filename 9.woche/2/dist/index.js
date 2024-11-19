"use strict";
let myName = "Mehmet";
let mySurname = "Kara";
let maas = 5000;
let myAge = 30; // number oldugunu anlar. 
let isMan = true;
let myArray = [1, 2, 3, 4, 5];
let myArray2 = [1, 2, 3, 4, 5];
let myArray3 = ["a", "b", "c"];
let myArray4 = [true, false, true];
let myArray5 = [1, "a", true];
let myArray6 = [1, "a", 2, "b"];
let myArray7 = [1, true, 2, false];
let myArray8 = [1, true, 2, false, "a"];
let myArray9 = [1, true, 2, false, "a", [1, 2, 3]];
let myArray10 = [1, true, 2, false, "a", [1, "b", 3]];
let myArray11 = [1, true, 2, false, "a", [1, "b", 3, true]];
console.log(myName);
console.log(mySurname);
console.log(maas);
console.log(myAge);
console.log(isMan);
console.log(myArray);
console.log(myArray2);
//**5. Fonksiyonlar**
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!");
}
greet("Kemal"); // Hello, KEMAL!
greet("Ayse"); // Hello, AYSE!
// greet(10); // hata verir.
// #### Dönüş Türleri:
function getFavoriteNumber() {
    return 26;
}
function getFavoriteNumber2() {
    return "26";
}
function getFavoriteNumber3() {
    return true;
}
function getFavoriteNumber4() {
    return 26;
}
function getFavoriteNumber5() {
    return "26";
}
function getFavoriteNumber6() {
    return "26";
}
function getFavoriteNumber7() {
    return 26;
}
function getFavoriteNumber8() {
    return true;
}
function getFavoriteNumber9() {
    return 26;
}
function getFavoriteNumber10() {
    return "26";
}
// #### Parametreler:
function greet2(name, age) {
    console.log("Hello, " + name + "!");
    console.log("You are " + age + " years old.");
}
greet2("Kemal", 30); // Hello, Kemal! You are 30 years old.
greet2("Ayse", 25); // Hello, Ayse! You are 25 years old.
// greet2(10, 25); // hata verir.
// #### Parametrelerin Opsiyonel Olması:
function greet3(name, age) {
    console.log("Hello, " + name + "!");
    if (age !== undefined) { // age parametresi girilmişse
        console.log("You are " + age + " years old.");
    }
}
greet3("Kemal"); // Hello, Kemal!
greet3("Ayse", 25); // Hello, Ayse! You are 25 years old.
// greet3(10); // hata verir.
// #### Parametrelerin Varsayılan Değerleri:
function greet4(name, age = 30) {
    console.log("Hello, " + name + "!");
    console.log("You are " + age + " years old.");
}
greet4("Kemal"); // Hello, Kemal! You are 30 years old.
greet4("Ayse", 25); // Hello, Ayse! You are 25 years old.
// greet4(10); // hata verir.
// #### Rest Parametreler:
function greet5(name, ...names) {
    console.log("Hello, " + name + "!");
    console.log("You are " + names.join(", ") + ".");
}
greet5("Kemal", "Ayse", "Fatma", "Ali"); // Hello, Kemal! You are Ayse, Fatma, Ali.
greet5("Ayse", "Fatma", "Ali"); // Hello, Ayse! You are Fatma, Ali.
// #### Fonksiyonların Dönüş Türleri:
function greet6(name) {
    return "Hello, " + name + "!";
}
console.log(greet6("Kemal")); // Hello, Kemal!
console.log(greet6("Ayse")); // Hello, Ayse!
function greet7(name) {
    return name.length;
}
console.log(greet7("Kemal")); // 5
console.log(greet7("Ayse")); // 4
function greet8(name) {
    return name.length > 5;
}
console.log(greet8("Kemal")); // false
console.log(greet8("Ayse")); // false
function greet9(name) {
    return name.length > 5;
}
console.log(greet9("Kemal")); // false
// #### Fonksiyonların Parametre ve Dönüş Türleri:
function greet10(name, age) {
    return "Hello, " + name + "!";
}
console.log(greet10("Kemal", 30)); // Hello, Kemal!
console.log(greet10("Ayse", 25)); // Hello, Ayse!
function greet11(name, age) {
    return name.length;
}
console.log(greet11("Kemal", 30)); // 5
console.log(greet11("Ayse", 25)); // 4
function greet12(name, age) {
    return name.length > 5;
}
console.log(greet12("Kemal", 30)); // false
console.log(greet12("Ayse", 25)); // false
function greet13(name, age) {
    return name.length > 5;
}
console.log(greet13("Kemal", 30)); // false
//**6. Diziler**
let numbers = [1, 2, 3, 4, 5];
let numbers2 = [1, 2, 3, 4, 5];
let numbers3 = ["a", "b", "c"];
let numbers4 = [true, false, true];
let numbers5 = [1, "a", true];
let numbers6 = [1, "a", 2, "b"];
let numbers7 = [1, true, 2, false];
let numbers8 = [1, true, 2, false, "a"];
let numbers9 = [1, true, 2, false, "a", [1, 2, 3]];
let numbers10 = [1, true, 2, false, "a", [1, "b", 3]];
let numbers11 = [1, true, 2, false, "a", [1, "b", 3, true]];
console.log(numbers);
console.log(numbers2);
// #### Dizi Elemanlarına Erişim:
let numbers12 = [1, 2, 3, 4, 5];
console.log(numbers12[0]); // 1
console.log(numbers12[1]); // 2
// #### Dizi Elemanlarını Değiştirme:
let numbers13 = [1, 2, 3, 4, 5];
numbers13[0] = 10;
numbers13[1] = 20;
console.log(numbers13); // [10, 20, 3, 4, 5]
// #### Dizi Elemanlarını Silme:
let numbers14 = [1, 2, 3, 4, 5];
numbers14.pop();
numbers14.pop();
console.log(numbers14); // [1, 2, 3]
// #### Diziye Eleman Ekleme:
let numbers15 = [1, 2, 3, 4, 5];
numbers15.push(6);
numbers15.push(7);
console.log(numbers15); // [1, 2, 3, 4, 5, 6, 7]
// #### Diziyi Sıralama:
let numbers16 = [5, 3, 1, 4, 2];
numbers16.sort();
console.log(numbers16); // [1, 2, 3, 4, 5]
//**7. Nesneler**
let person = {
    name: "Mehmet",
    age: 30,
    isMan: true
};
console.log(person.name); // Mehmet
console.log(person.age); // 30
console.log(person.isMan); // true
// #### Nesne Elemanlarını Değiştirme:
let person2 = {
    name: "Mehmet",
    age: 30,
    isMan: true
};
person2.name = "Ahmet";
person2.age = 25;
person2.isMan = false;
console.log(person2.name); // Ahmet
console.log(person2.age); // 25
console.log(person2.isMan); // false
// #### Nesne Elemanlarını Silme:
let person3 = {
    name: "Mehmet",
    age: 30,
    isMan: true
};
delete person3.age;
console.log(person3.name); // Mehmet
console.log(person3.age); // undefined
console.log(person3.isMan); // true
// #### Nesne Eleman Ekleme:
let person4 = {
    name: "Mehmet",
    age: 30,
    isMan: true
};
person4.name = "Kara";
person4.age = 40;
person4.isMan = false;
console.log(person4.name); // Kara
console.log(person4.age); // 40
console.log(person4.isMan); // false
// #### Nesne Elemanlarını Sıralama:
let person5 = {
    name: "Mehmet",
    age: 30,
    isMan: true
};
let keys = Object.keys(person5);
keys.sort();
console.log(keys); // ["age", "isMan", "name"]
// #### Nesne Elemanlarını Dolaşma:
let person6 = {
    name: "Mehmet",
    age: 30,
    isMan: true,
};
for (let key in person6) {
    console.log(key + ": " + person6[key]);
}
// name: Mehmet
// age: 30
// isMan: true
//**8. Diziler ve Nesneler**
let persons = [
    { name: "Mehmet", age: 30, isMan: true },
    { name: "Ahmet", age: 25, isMan: false },
    { name: "Ayse", age: 20, isMan: false }
];
console.log(persons[0].name); // Mehmet
console.log(persons[0].age); // 30
console.log(persons[0].isMan); // true
console.log(persons[1].name); // Ahmet
//**9. Diziler ve Nesnelerin Kullanımı**
let persons2 = [
    { name: "Mehmet", age: 30, isMan: true },
    { name: "Ahmet", age: 25, isMan: false },
    { name: "Ayse", age: 20, isMan: false }
];
for (let person of persons2) {
    console.log(person.name + ": " + person.age);
}
let person7 = {
    name: "Mehmet",
    age: 30,
    isMan: true
};
console.log(person7.name); // Mehmet
let persons3 = [
    { name: "Mehmet", age: 30, isMan: true },
    { name: "Ahmet", age: 25, isMan: false },
    { name: "Ayse", age: 20, isMan: false }
];
for (let person of persons3) {
    console.log(person.name + ": " + person.age);
}
//**11. Sınıflar**
class Person3 {
    constructor(name, age, isMan) {
        this.name = name;
        this.age = age;
        this.isMan = isMan;
    }
    greet() {
        console.log("Hello, " + this.name + "!");
    }
}
let person8 = new Person3("Mehmet", 30, true);
person8.greet(); // Hello, Mehmet!
// #### Sınıfların Kalıtımı:
class Person4 {
    constructor(name, age, isMan) {
        this.name = name;
        this.age = age;
        this.isMan = isMan;
    }
    greet() {
        console.log("Hello, " + this.name + "!");
    }
}
class Employee extends Person4 {
    constructor(name, age, isMan, salary) {
        super(name, age, isMan);
        this.salary = salary;
    }
    greet() {
        console.log("Hello, " + this.name + "!");
        console.log("Your salary is " + this.salary + ".");
    }
}
let employee = new Employee("Mehmet", 30, true, 5000);
employee.greet(); // Hello, Mehmet! Your salary is 5000.
// #### Sınıfların Metotları:
class Person5 {
    constructor(name, age, isMan) {
        this.name = name;
        this.age = age;
        this.isMan = isMan;
    }
    greet() {
        console.log("Hello, " + this.name + "!");
    }
}
class Employee2 extends Person5 {
    constructor(name, age, isMan, salary) {
        super(name, age, isMan);
        this.salary = salary;
    }
    greet() {
        super.greet();
        console.log("Your salary is " + this.salary + ".");
    }
}
//**12. Sınıfların Metotları**
class Person6 {
    constructor(name, age, isMan) {
        this.name = name;
        this.age = age;
        this.isMan = isMan;
    }
    greet() {
        console.log("Hello, " + this.name + "!");
    }
}
class Employee3 extends Person6 {
    constructor(name, age, isMan, salary) {
        super(name, age, isMan);
        this.salary = salary;
    }
    greet() {
        super.greet();
        console.log("Your salary is " + this.salary + ".");
    }
}
let employee2 = new Employee3("Mehmet", 30, true, 5000);
employee2.greet(); // Hello, Mehmet! Your salary is 5000.
// #### Sınıfların Metotları ve Parametreler:
class Person7 {
    constructor(name, age, isMan) {
        this.name = name;
        this.age = age;
        this.isMan = isMan;
    }
    greet(greeting) {
        console.log(greeting + ", " + this.name + "!");
    }
}
let person9 = new Person7("Mehmet", 30, true);
person9.greet("Hello"); // Hello, Mehmet!
