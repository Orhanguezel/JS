
// Object Constructor
const person23 = new Object();
person23.name = "Ali";
person23.age = 30;
person23.city = "Istanbul";
person23.country = "Turkey";
console.log(person23);

const person24 = new Object({
  name: "Ali",
  age: 30,
  city: "Istanbul",
  country: "Turkey",
});
console.log(person24);

console.clear();

function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

const person25 = new Person("Ali", 30, "Istanbul");
console.log(person25);
const person26 = new Person("Veli", 25, "Ankara");
console.log(person26);

//Constructor Fonksiyonlarına Metot Ekleme
function Person2(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.showInfos = function () {
    console.log(`Name: ${this.name} Age: ${this.age} City: ${this.city}`);
  };
}

const person27 = new Person2("Ali", 30, "Istanbul");
person27.showInfos();

console.clear();

//Constructor Fonksiyonlarına Prototype Metot Ekleme
function Person3(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

Person3.prototype.showInfos = function () {
    console.log(`Name: ${this.name} Age: ${this.age} City: ${this.city}`);
    }

const person28 = new Person3("Ali", 30, "Istanbul");
person28.showInfos();

console.clear();

//Sınıf (Class) Tanımlama

class Person4 {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    showInfos() {
        console.log(`Name: ${this.name} Age: ${this.age} City: ${this.city}`);
    }
}

const person29 = new Person4("Ali", 30, "Istanbul");
person29.showInfos();

console.clear();

class Person5 {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    greet() {
        console.log(`Merhaba, benim adım ${this.name} ve ${this.city}'da yaşıyorum.`);
    }

    // Yeni bir metot: yaş güncelleme
    updateAge(newAge) {
        this.age = newAge;
        console.log(`${this.name} artık ${this.age} yaşında.`);
    }
}

const person1 = new Person5("Ali", 30, "Istanbul");
person1.greet(); // Çıktı: "Merhaba, benim adım Ali ve Istanbul'da yaşıyorum."

person1.updateAge(31); // Çıktı: "Ali artık 31 yaşında."


// Object.create() Metodu
// Object Prototype
// Object Inheritance
// Object Methodları
// Object Kullanım Alanları
// Object Örnekleri
// Object Özellikleri
// Object Yapısı
// Object İçinde Object
// Object İçinde Array
// Object İçinde Function
// Object İçinde Method
// Object İçinde Property
// Object İçinde Constructor
// Object İçinde Prototype

// Yüzeysel (Shallow) ve Derin (Deep) Kopyalama Farkı, Object.assign() ve Spread Operator, JSON.stringify() ve JSON.parse() Metodları, structuredClone(obj), Object Destructuring, Object Literal, Object Constructor, Object.create() Metodu, Object Prototype, Object Inheritance, Object Methodları, Object Metodları, Object Kullanım Alanları, Object Örnekleri, Object Özellikleri, Object Yapısı, Object İçinde Object, Object İçinde Array, Object İçinde Function, Object İçinde Method, Object İçinde Property, Object İçinde Constructor, Object İçinde Prototype, Object İçinde Inheritance
const person8 = {
  name: "Ali",
  age: 30,
  city: "Istanbul",
  country: "Turkey",
  job: {
    title: "Engineer",
    salary: 5000,
  },
};
