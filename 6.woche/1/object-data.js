const user1 = {
    userFirstName: "Nancy",
    userLastName: "Doe",
    userAge: 32,
    add: "DÜS",
    hob: ["swimming", "reading", "travelling"],
};

const user2 = {
    userFirstName: "John",
    userLastName: "Doe",
    userAge: 28,
    add: "IST",
    hob: ["football", "reading", "travelling"],
};

function printData() {
    console.log(`My name is ${this.userFirstName} ${this.userLastName}. I am ${this.userAge} years old. I live in ${this.add}. My hobbies are ${this.hob.join(", ")}.`);
}

// printData fonksiyonunu user1 ve user2 nesnelerine metod olarak ekleyin:
user1.printData = printData;
user2.printData = printData;

// Fonksiyonları çağırarak nesne bilgilerini ekrana yazdırın:
user1.printData();
user2.printData();

// user1 nesnesinin anahtarlarını görüntüleyin:
console.log(Object.keys(user1));
console.log(Object.values(user2));

console.clear();

const pet={
    name:"Haskey",
    sort:"Golden Retriever",
    age:3,
    speack: function(){
        return `I'm ${this.sort}, my owner like to call me ${this.name}. I am ${this.age} years old.`
    },
        
    };
console.log(pet.speack());

const users =[{
    userName:"Nancy",
    userPass:"1234",
    userEmail:"nancy@example.com",
    hasKids:true
},{
    userName:"John",
    userPass:"5234john",
    userEmail:"john@example.com",
    hasKids:1
},{
    userName:"Doe",
    userPass:"623pass",
    userEmail:"doe@example.com",
    hasKids:0
}];

for(let i=0; i<users.length; i++){
    console.log(users[i].userName);
    console.log(users[i].userPass);
    console.log(
        `${users[i].userName} has a very good password: ${users[i].userPass}
        ${users[i].hasKids? "Yes :)":"No :("}
        ------------------------
        `
    );
};


