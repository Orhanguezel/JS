// task-1

class Library{
    constructor(){
        this.books = [];
    }

    addBook(book){
        this.books.push(book);
    }
    findBookByTitle(title){
        return this.books.filter(book => book.title === title);
    }
    listBooksByAuthor(author){
        return this.books.filter(book => book.author === author);
    }
}

class Book{
    constructor(title, author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getInfo(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

const library = new Library();
const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("Animal Farm", "George Orwell", 1945);

library.addBook(book1);
library.addBook(book2);

console.log(library.findBookByTitle("1984")); //
console.log(library.listBooksByAuthor("George Orwell"));

console.clear();

// task-2

class Product{
    constructor(name, price, stock){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    ubdateStock(quantity){
        this.stock += quantity;
    }

    getInfo(){
        return `${this.name} (${this.price}) - ${this.stock} pieces`;
    }
}

class Inventory{
    constructor(){
        this.products = [];
    }

    addProduct(product){
        this.products.push(product);
    }

    findProductByName(name){
        return this.products.filter(product => product.name === name);
    }

    listOutOfStock(){
        return this.products.filter(product => product.stock === 0);
    }
}

const inventory = new Inventory();
const product1 = new Product("Laptop", 1500, 10);
const product2 = new Product("Mouse", 20, 0);

inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(inventory.findProductByName("Laptop"));//[Product]
console.log(inventory.listOutOfStock());//[Product]


// task-3

class Student{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
    getInfo(){
        return `${this.name} (${this.id})`;
    }
}

class Course{
    constructor(courseName){
        this.courseName = courseName;
        this.students = [];
    }
    addStudent(student){
        this.students.push(student);
    }
    listStudents(){
        return this.students.map(student => student.getInfo());
    }
    findStudentById(id){
        return this.students.filter(student => student.id === id);
    }
}

const course = new Course("Mathematics");
const student1 = new Student("Alice", "1234");
const student2 = new Student("Bob", "5678");

course.addStudent(student1);
course.addStudent(student2);

console.log(course.listStudents()); //["Alice (1234)", "Bob (5678)"]
console.log(course.findStudentById("1234"));//[Student]

console.clear();

// task-4

class Account{
    constructor(accountNumber, owner, balance){
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
    }
    withdraw(amount){
        if(amount > this.balance){
            console.log("Insufficient funds");
            return;
        }
        this.balance -= amount;
    }
}

class Bank{
    constructor(){
        this.accounts = [];
    }
    addAccount(account){
        this.accounts.push(account);
    }
    findAccount(accountNumber){
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }
    totalAssets(){
        return this.accounts.reduce((total, account) => total + account.balance, 0);
    }
}

const bank = new Bank();
const account1 = new Account("123456", "Ali", 1000);
const account2 = new Account("654321", "Veli", 500);

bank.addAccount(account1);
bank.addAccount(account2);

console.log(bank.findAccount("123456")); //Account { accountNumber: '123456', owner: 'Ali', balance: 1000 }
console.log(bank.totalAssets()); //1500

console.clear();

// task-5

class Vehicle{
    constructor(licensePlate, brand, year){
        this.licensePlate = licensePlate;
        this.brand = brand;
        this.year = year;
    }
    getInfo(){
        return `${this.brand} (${this.year}) - ${this.licensePlate}`;
    }
}

class Garage{
    constructor(){
        this.vehicles = [];
    }
    addVehicle(vehicle){
        this.vehicles.push(vehicle);
    }
    listVehiclesOlderThan(year){
        return this.vehicles.filter(vehicle => vehicle.year < year);
    }
    findVehicleByLicense(licensePlate){
        return this.vehicles.find(vehicle => vehicle.licensePlate === licensePlate);
    }
}

const garage = new Garage();
const vehicle1 = new Vehicle("34AB123", "Toyota", 2010);
const vehicle2 = new Vehicle("34CD456", "Honda", 2005);

garage.addVehicle(vehicle1);
garage.addVehicle(vehicle2);

console.log(garage.findVehicleByLicense("34AB123")); // Toyota bilgilerini döndürür
console.log(garage.listVehiclesOlderThan(2008));