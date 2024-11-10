/*
const user ={
    name: "Norman",
    age: 25,
    books: ["Harry Potter", "Hunger Games"],
}

console.log(user.name);
console.log(user.age);
console.log(user.books[0]);
console.log(typeof user);

console.log(user["name"]); // console.log(user.name); ile ayni
console.log(user["age"]); // console.log(user.age); ile ayni

user["age"] = 26; //user.age = 26; ile ayni
console.log(user["age"]);

user["adress"] = "Berlin";
console.log(user["adress"]);

console.log(user);

delete user["adress"]; //delete user.adress; ile ayni
console.log(user);

delete user.adress;
console.log(user);//adress is not defined

const key = "name";
console.log(user.key);//undefined
console.log(user[key]);//Norman

user.hobbies = ["swimming", "reading"];
console.log(user);

delete user.hobbies;
console.log(user);

console.clear();

const user1 = {
    name: "Orhan",
    age: 25,
    books: ["Harry Potter", "Hunger Games"],
    adress: {
        city: "Berlin",
        street: "Kudamm",
    },
    speak() { 
        console.log(`Hello I am ${this.name}`);
    }
}

console.log(user1.adress.city);   // "Berlin"
console.log(user1.adress.street); // "Kudamm"
user1.speak(); // "Hello I am Orhan"

// Shallow clone

user.adress ={
    street: "Friedrichstr",
    zip: 12345,
}

const clone = {...user};
console.log("clone", clone);
console.log("user", user);

clone.name = "Max";
console.log("clone", clone);
console.log("user", user);

clone.adress.street = "Karl Marx Str";
console.log("clone", clone);
console.log("user", user);//adress is changed in user object

// Deep cloning, tief

// Deep cloning, tief

const user = {
    name: "Norman",
    age: 25,
    books: ["Harry Potter", "Hunger Games"],
};

// Deep clone işlemi
const deepClone = structuredClone(user);

console.log("deepClone", deepClone);
console.log("user", user);

// Adres özelliğini user nesnesine ekleyelim
user.adress = { street: "Alexander Platz" };
user.name = "Ali";

console.log("deepClone", deepClone); // deepClone değişmeden kalır
console.log("user", user); // user nesnesinde değişiklik yapılmıştır


*/
const user2 = {
    name: "Anna",
    age: 35,
    books: ["Harry", "Games"],
    adress: {
        city: "Dusseldorf",
        street: "Kudamm",
    },
    speak() {
        console.log(`Hello I am ${this.name}`);
    }
}
const copyUser2 = Object.assign({}, user2);

user2.name ="sophie";
user2.adress.street = "Alexander Platz";
console.log("copyUser2", copyUser2);
console.log("user2", user2);

console.clear();

const deepCopyUser2 = JSON.parse(JSON.stringify(user2));
user2.name = "Max";
user2.adress.street = "Karl Marx Str";
console.log("deepCopyUser2", deepCopyUser2);
console.log("user2", user2);


