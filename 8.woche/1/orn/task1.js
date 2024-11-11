// task 1
class Book {
  constructor(title, author, pages, publisher) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publisher = publisher;
  }
  summary() {
    return `${this.title} is written by ${this.author} and ${this.publisher} published it.`;
  }
}

const book = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  180,
  "Charles Scribner's Sons"
);

console.log(book.summary());
console.clear();

// task 2

class Car {
  constructor(make, model, year, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
  }
  description() {
    return `This ${this.year} ${this.make} ${this.model} has ${this.mileage} miles.`;
  }
  drive(miles) {
    this.mileage += miles;
  }
}

const car = new Car("Honda", "Accord", 2022, 15000);

console.log(car.description()); // This 2022 Honda Accord has 15000 miles.
car.drive(100);
console.log(car.mileage);//15100

console.clear();

// task 3

class Movie {
  constructor(title, director, duration, genre) {
    this.title = title;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
  }
  getDurationInHours(){
    return `${this.title} is ${(this.duration / 60).toFixed(2)} hours long.`;
  }
  summary() {
    return `${this.title} is directed by ${this.director} and it is ${Math.round(this.duration/60)} hours ${this.duration%60} minutes long.`;
  }
}
const movie = new Movie("Inception", "Christopher Nolan", 148, "Sci-Fi");

console.log(movie.getDurationInHours()); // Inception is 2.47 hours long.
console.log(movie.summary());//Inception is directed by Christopher Nolan and it is 2 hours 28 minutes long.

console.clear();

// task 4

class Laptop{
    constructor(brand, model, ram, storage){
        this.brand = brand;
        this.model = model;
        this.ram = ram;
        this.storage = storage;
    }
    specs(){
        return `This ${this.brand} laptop has ${this.ram}GB RAM and ${this.storage}GB storage.`;
    }
    upgradeRam(additionalRam){
        this.ram += additionalRam;
    }
}

const laptop = new Laptop("Dell", "Inspiron", 16, 512);

console.log(laptop.specs());//This Dell laptop has 16GB RAM and 512GB storage.
laptop.upgradeRam(8);
console.log(laptop.ram); //24

console.clear();

// task 5
class Employee{
    constructor(name, position, salary, hireDate){
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.hireDate = new Date(hireDate);
    }
    yearsworked() {
        const currentYear = new Date().getFullYear();
        const hireYear = this.hireDate.getFullYear();
        return currentYear - hireYear;
    }

    info(){
        return `${this.name} is a ${this.position} and has been working for ${this.yearsworked()} years.`;
    }
}

const employee = new Employee("Ali", "Software Engineer", 80000, "2020-03-15");

console.log(employee.yearsworked());//4
console.log(employee.info()); // Ali is a Software Engineer and has been working for 4 years.
