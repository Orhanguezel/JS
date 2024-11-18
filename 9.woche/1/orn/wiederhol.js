// ES6 ile gelen özellikler

const hesapla = (a,b)=>{
    const toplam = a + b
    const carpim = a * b
    const bolme = a / b
    const cikarma = a - b
    //return [toplam, carpim, bolme, cikarma]
    const dizi = [toplam, carpim, bolme, cikarma]
    return dizi
}

console.log(hesapla(10,5))

const person ={
    ad: 'Ali',
    soyad: 'Veli',
    yas: 25,
    salary: 5000
}

let {ad, soyad, yas, salary} = person
console.log(ad, soyad, yas, salary) // Ali Veli 25 5000

const {ad: isim, soyad: surname, yas: age, salary: maas} = person
console.log(isim, surname, age, maas) // Ali Veli 25 5000


// Speread Operator
let numbers = [1,2,3,4]
function  add (a, b, c, d){
    return a + b + c + d
}

// eski yöntem
//add(numbers[0], numbers[1], numbers[2], numbers[3])

// yeni yöntem
add(...numbers) // 10
console.log(add(...numbers)) // 10

const diller1 = ['Python', 'Java', 'C++']
const diller2 = ['JavaScript', 'C#', 'Go']

const diller = [...diller1, ...diller2]
console.log(diller) // ['Python', 'Java', 'C++', 'JavaScript', 'C#', 'Go']

const numbers2 = [1,2,3,4,5,6,7,8,9,10]
const [a,b, ...rest] = numbers2
console.log(a) // 1
console.log(b) // 2
console.log(rest) // [3, 4, 5, 6, 7, 8, 9, 10]


const array1 = ["enes", "ali", "veli", "mehmet"]
//let array2 = []

const array2 = [...array1]
console.log(array2) // ["enes", "ali", "veli", "mehmet"]

// for in - for of
let names = ['Ali', 'Veli', 'Mehmet', 'Ahmet']
names.forEach(name=>console.log(name))

// for in
for (let name in names){
    console.log(name, names[name])
}

// for of
for (let name of names){
    console.log(name, names.indexOf(name))
}


// map kullanimi
const map1 = new Map()
map1.set('a', 1)
map1.set('b', 2)
map1.set('c', 3)

// GET
console.log(map1.get('a')) // 1
console.log(map1.get('b')) // 2
console.log(map1.get('c')) // 3
const donenDeger = map1.get('a')
console.log(donenDeger) // 1

// size
console.log(map1.size) // 3

// delete
let value = map1.delete('a')
console.log(map1.size) // 2
console.log(value) // true

// has
console.log(map1.has('b')) // true
console.log(map1.has('a')) // false

// for of
for (let [key, value] of map1){ // descructing
    console.log(key, value)
}

for (let value of map1){ 
    console.log(value) // ['b', 2], ['c', 3]

}

const keys1 = map1.keys()
console.log(keys1) // MapIterator {'b', 'c'}

const keys2 =Array.from(map1.keys())
keys2.forEach((key)=>console.log(key)) // b c

for (let key of map1.keys()){
    console.log(key)
}

const values1 = map1.values()
console.log(values1) // MapIterator {2, 3}

for(let value of map1.values()){
    console.log(value)
}
// mapten arreya çevirme
const arr = Array.from(map1)
console.log(arr) // [['b', 2], ['c', 3]]

// mapten objeye çevirme
const obj = Object.fromEntries(map1)

console.log(obj) // {b: 2, c: 3}

const array3 = [['a', 1], ['b', 2], ['c', 3]]
const map3 = new Map(array3)
console.log(map3) // Map {'a' => 1, 'b' => 2, 'c' => 3}

// Set kullanimi
const set = new Set()
set.add(1)
set.add(2)
set.add(2)
set.add(2)
set.add(2)
set.add(2)
set.add(2)
set.add("orhan")
set.add("orhan")
set.add({name: 'ali'})
set.add([1,2,3])
set.add(3)
set.add(4)

console.log(set) // Set {1, 2, 'orhan', {name: 'ali'}, [1, 2, 3], 3, 4}

//size 
console.log(set.size) // 7
// delete
set.delete(1)
console.log(set.size) // 6
set.delete({name: 'ali'}) // silmez

// has
console.log(set.has(2)) // true

// for of
for (let value of set){
    console.log(value)
}

const values = set.values()
console.log(values) // SetIterator {1, 2, 'orhan', {name: 'ali'}, [1, 2, 3], 3, 4}

// Template literals 

function write(firsName, lastName){
    // console.log('Merhaba ' + firsName + ' ' + lastName) önceden bu sekilde yaziliyordu.
    console.log(`Merhaba ${firsName} ${lastName}`) 

}
write('Ali', 'Veli') // Merhaba Ali Veli

// OOP Nedir? (Object Oriented Programming)
// Nesne Yönelimli Programlama
// Bir programlama paradigmasıdır.
// Programlama dilleri bu paradigmayı kullanarak yazılır.
// Programlama dilleri bu paradigmayı kullanarak yazılır.
// Programlama dilleri bu paradigmayı kullanarak yazılır.

// OOP'nin 4 temel prensibi vardır.
// Encapsulation (Kapsülleme)
// Inheritance (Kalıtım)
// Polymorphism (Çok Biçimlilik)
// Abstraction (Soyutlama)

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    showInfos(){
        console.log('İsim: ' + this.name + ' Yaş: ' + this.age)
    }
}

const person1 = new Person('Ali', 25)
const person2 = new Person('Veli', 30)

person1.showInfos() // İsim: Ali Yaş: 25
person2.showInfos() // İsim: Veli Yaş: 30

// Static Metodlar
class Matematik {
    cube(x){
        console.log(x * x * x)
    }
    static cube2(x){
        console.log(x * x * x)
    }
}

const math = new Matematik()
math.cube(3) // 27  statik olarak tanimlanmamissa nesne uzerinden
Matematik.cube2(3) // 27 statik olarak tanimlandiysa sinif uzerinden

// math.cube2(3) // hata verir


// Inheritance (Kalıtım)
class Person2 {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    showInfos(){
        console.log('İsim: ' + this.name + ' Yaş: ' + this.age)
    }
}

class Employee extends Person2 {
    constructor(name, age, salary){
        super(name, age)
        this.salary = salary
    }
    showInfos(){
        console.log('İsim: ' + this.name + ' Yaş: ' + this.age + ' Maaş: ' + this.salary)
    }
    raiseSalary(amount){
        this.salary += amount
    }
}

const emp = new Employee('Ali', 25, 4000)
emp.showInfos() // İsim: Ali Yaş: 25 Maaş: 4000
emp.raiseSalary(500)
emp.showInfos() // İsim: Ali Yaş: 25 Maaş: 4500


// This & Super & Super()

class Person3 {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    showInfos(){
        console.log('İsim: ' + this.name + ' Yaş: ' + this.age)
    }
}

class Employee2 extends Person3 {
    constructor(name, age, salary){
        super(name, age)
        this.salary = salary
    }
    showInfos(){
        super.showInfos()
        console.log('Maaş: ' + this.salary)
    }
    raiseSalary(amount){
        this.salary += amount
    }
}

const emp2 = new Employee2('Ali', 25, 4000)
emp2.showInfos() // İsim: Ali Yaş: 25 Maaş: 4000
emp2.raiseSalary(500)
emp2.showInfos() // İsim: Ali Yaş: 25 Maaş: 4500













