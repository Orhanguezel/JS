// OOP
let name = "John";
let age = 25;
let address = "New York";
let isMarried = false;

// object ab baustellen

const person = {
    name: "John",
    age: 25,
    address: "New York",
    isMarried: false,
    sayHi: function () {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(person.name);
console.log(person.age);
console.log(person.address);
console.log(person.isMarried);
console.log(person.sayHi());
console.log(person["name"]);
console.log(person[1]);// undefined


const myDreamCar ={
    name: "BMW",
    model: "X6",
    sayHello: function () {
        console.log(`Hello, I am ${this.name} ${this.model}`);
    }
};

myDreamCar.sayHello();

const carShow = () => console.log(`Hello, I am ${myDreamCar.name} ${myDreamCar.model} ${myDreamCar.sayHello()}`);// Hello, I am BMW X6 Hello, I am BMW X6 undefined

carShow();

const bandNames ={
    band1:"Metallica",
    band2:"Iron Maiden",
    band3:"Led Zeppelin",
    band4:"Pink Floyd",
}

console.log(bandNames.band1);
console.log(bandNames["band2"]);

bandNames.band4 = "Queen";
console.log(bandNames.band4);

bandNames.band5 = "The Beatles";
console.log(bandNames.band5);
bandNames.func =() => console.log("Hello, I am a function");
bandNames.func();

// Object.keys() Object.values()
console.log(Object.keys(bandNames));
console.log(Object.values(bandNames));

// meine Objecte

const whoAmI = {
    name: "Orhan",
    age: 43,
    address: "Grevenbroich",
    isMarried: true,
    job: "Software Developer",
    hobbies: ["Reading", "Swimming", "Cycling"],
    sayHi: function () {
        return `Hello, my name is ${this.name} 
        and I am ${this.age} years old
        and I am from ${this.address}
        and I am ${this.isMarried ? "married" : "not married;"}
        and I am working as ${this.job}
        and my hobbies are ${this.hobbies.join(", ")}`;
    }
};

console.log(whoAmI.sayHi());

// Prof Object
const carInfo ={
    model: "BMW",
    year: 2021,
    colors: ["black","white","red", {color1:"yellow", color2:"green"}],
    isDiesel: false,
    lack: {
        shadeNum:222,
        farbe: "orange",
    },
    
}

console.log(carInfo.colors[0]);
console.log(carInfo.lack.farbe);

carInfo.colors.push("blue");
console.log(carInfo.colors);
console.log(carInfo.colors[3].color1);

const people =[{},{},{},{}];

const people1 =[
    {
        name: "John",
        age: 25,
        address: "New York",
        isMarried: false,
        hobbies: ["Reading", "Swimming", "Cycling"],
    },
    {
        name: "Jane",
        age: 30,
        address: "Los Angeles",
        isMarried: true,
        hobbies: ["Reading", "Swimming", "Cycling"],
    },
    {
        name: "Jake",
        age: 35,
        address: "Miami",
        isMarried: false,
        hobbies: ["Swimming", "Cycling"],
    },
    {
        name: "Jenny",
        age: 40,
        address: "Las Vegas",
        isMarried: true,
        hobbies: ["Reading", "Cycling"],
    }];

console.log(people1[3].name);
console.log(people1[0].hobbies[2]);

people1[0].hobbies.push("Playing Guitar");
console.log(people1[0].hobbies);

for (let i=0; i<people1.length; i++){
    console.log(people1[i].name);
    console.log(people1[i].age);
    console.log(people1[i].address);
    console.log(people1[i].isMarried);
    console.log(people1[i].hobbies);
}



