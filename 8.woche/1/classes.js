
class Pet{
    constructor(name, type){
        this.name=name;
        this.type=type;
    }
    showInfo(){
        console.log(`${this.name} is a ${this.type}`);
    }
}

const amy = new Pet("Amy", "cat");
console.log(amy);
amy.showInfo();//Amy is a cat

const fido = new Pet("Fido", "dog");
console.log(fido);
fido.showInfo();//Fido is a dog

console.log(typeof Pet);//function

class Person{
    #age;//private property
    constructor(name, age){
        this.name=name;
        this.#age=age;
    }
    get age(){
        return this.#age;
    }
}

const alice = new Person("Alice", 30);
console.log(alice);
console.log(alice.age);//undefined
// console.log(alice.#age);//SyntaxError: Private field '#age' must be declared in an enclosing class
alice.name="Alice Smith";
console.log(alice);
alice.age=31;
console.log(alice.age);//undefined
console.log(alice);//Person { name: 'Alice Smith' }

console.log(alice.age);
