// görev- 6
const books = [
  { title: "Sapiens", author: "Yuval Noah Harari", year: 2011 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
];

const [firstBook, ...otherBooks] = books;

console.log(`First book: ${firstBook.title}
First author: ${firstBook.author}
Other books: ${JSON.stringify(otherBooks)}`);

console.log(`ilk kitap: ${books[0].title}
Ilk yazar: ${books[0].author}
Diger kitaplar: ${books[1].title}, ${books[2].title}, ${books[3].title}`);


// görev-7

const employees = ["John", "Sarah", "Tim", "Kate", "Anna"];

const [first, second, ...rest] = employees;

console.log(`First: ${first}, 
Second: ${second},
Rest: ${JSON.stringify(rest)}`);

console.log(`Employees: ${employees[0]}, 
${employees[1]}, 
${employees[2]}, ${employees[3]}, ${employees[4]}`);

// görev-8
const student = {
  name: "Michael",
  grades: [90, 85, 92],
  address: "123 Main St",
  hobbies: ["football", "reading"]
};

const { name, grades, ...otherInfo } = student;

console.log(`Student name: ${student.name}`);
console.log(`Student grades: ${student.grades}`);
console.log(`Other info: ${JSON.stringify(otherInfo)}`);

// görev-9

const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"]
};

const {title, director, cast} = movie;
const [firstActor, ...otherActors] = cast;

console.log(`Movie title: ${title},
Movie director: ${director},
ilk oyuncu: ${firstActor},
son oyuncu: ${cast[cast.length-1]},
diger oyuncular: ${JSON.stringify(otherActors)}`);

// görev-10

const library = {
  book: {
     title: "The Great Gatsby",
     author: {
        firstName: "F. Scott",
        lastName: "Fitzgerald"
     }
  }
};

console.log(`Book title: ${library.book.title}
Author last name: ${library.book.author.lastName}`);


// görev-11
const product = {
  name: "Laptop",
  stock: 100,
  price: 999,
  manufacturer: "Dell",
  color: "Black"
};

const {stock, price, ...otherProps} = product;

console.log(`Stock: ${stock}
Price: ${price}
Diger bilgiler: ${JSON.stringify(otherProps)}`);
console.clear();

// görev-12
const salaries = {
  CEO: 150000,
  CFO: 130000,
  CTO: 120000,
  manager: 90000,
  engineer: 80000
};

const {CEO, CFO, ...otherSalaries} = salaries;

console.log(`CEO salary: ${CEO}
CFO salary: ${CFO}
Other salaries: ${JSON.stringify(otherSalaries)}`);

// görev-13
const students = ["Ayşe", "Mehmet", "Fatma", "Ali", "Veli", "Can"];

const[firstStudent, secondStudent, ...otherStudents] = students;

console.log(`First student: ${firstStudent}
Second student: ${secondStudent}
Other students: ${JSON.stringify(otherStudents)}`);

// görev-14
const car = {
  model: "Tesla Model S",
  engine: {
     type: "Electric",
     horsepower: 670
  },
  year: 2021
};

const {model, engine, year} = car;

console.log(`Car model: ${model}
Engine type: ${engine.type}
Beygir Gücü: ${engine.horsepower}
Year: ${year}`);

// görev-15
const cart = [
  { name: "Phone", price: 699 },
  { name: "Tablet", price: 499 },
  { name: "Laptop", price: 999 },
];

const [firstItem, ...otherItems] = cart;

console.log(`First item: ${firstItem.name}
First item price: ${firstItem.price}
Other items: ${JSON.stringify(otherItems)}`);


