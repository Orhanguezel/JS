// soru 1

const products = [
    { name: "Laptop", price: 999 },
    { name: "Telefon", price: 499 },
    { name: "Tablet", price: 299 },
  ];

  const discountedPrices = products.map((product) => product.price * 0.9);
  console.log(discountedPrices); // Beklenen Çıktı: [899.1, 449.1, 269.1]

  console.clear();  
  // soru 2

const products1 = ["t-shirt", "jeans", "hat", "sneakers"];

const capitalizedProducts = products1.map((product) => product.charAt(0).toUpperCase() + product.slice(1));
console.log(capitalizedProducts); // Beklenen Çıktı: ["T-shirt", "Jeans", "Hat", "Sneakers"]

console.clear();

// soru 3
const products2 = [
    { name: "Laptop", price: 999 },
    { name: "Telefon", price: 499 },
  ];
  

  const productDescriptions = products2.map((product)=> `${product.name} ${product.price}$`);

  console.log(productDescriptions); // Beklenen Çıktı: ["Laptop: 999$", "Telefon: 499$"]
  console.log(products2); // Beklenen Çıktı: [{ name: "Laptop", price: 999 }, { name: "Telefon", price: 499 }]

    console.clear();

    const updatedProducts = products2.map((product) => {
        // Yeni bir nesne oluşturarak description ekliyoruz
        return {
            ...product, // Mevcut özellikleri kopyalıyoruz
            description: `${product.name}: ${product.price}$` // Yeni description özelliği ekliyoruz
        };
    });

    const updatedProducts2 = products2.map(function(product) {

        return product.description = `${product.name}: ${product.price}$`;
    });
    
    console.log(updatedProducts); 
    console.log(updatedProducts2);
    console.log(products2);

    console.clear();

    // soru 4
const numbers = [1, 2, 3, 4, 5];


const squares = numbers.map(num => num ** 2);
console.log(squares);// Beklenen Çıktı: [1, 4, 9, 16, 25]


console.clear();

// soru 5
const persons = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

const updatedAges = persons.map((person) => person.age + 5);
console.log(updatedAges); // Beklenen Çıktı: [30, 35]
console.log(persons); // Beklenen Çıktı: [{ name: "Alice", age: 25 }, { name: "Bob", age: 30}]
console.clear();


// soru 6
const animals = ["kedi", "köpek", "kuş"];

const animalDescriptions = animals.map((animal) => `Hayvan: ${animal}`);
console.log(animalDescriptions); // Beklenen Çıktı: ["Hayvan: kedi", "Hayvan: köpek", "Hayvan: kuş"]

console.clear();


// soru 7
const names = ["Ali", "Ayşe", "Mehmet"];

const greetings = names.map((name)=> `Merhaba, ${name}!`);
console.log(greetings); // Beklenen Çıktı: ["Merhaba, Ali!", "Merhaba, Ayşe!", "Merhaba, Mehmet!"]
console.clear();


// soru 8
const numbers3 = [1, 2, 3, 4, 5];

const isEvenArray = numbers3.map((number) => number % 2 === 0);
console.log(isEvenArray);// Beklenen Çıktı: [false, true, false, true, false]
console.clear();

// soru 9
const words = ["JavaScript", "Python", "C++"];

const wordLengths = words.map((word) => word.length);
console.log(wordLengths); // Beklenen Çıktı: [10, 6, 3]
console.clear();

// soru 10
const books = [
  { title: "Sapiens", author: "Yuval Noah Harari" },
  { title: "1984", author: "George Orwell" },
];

const bookDescriptions = books.map((book) => `${book.title} - ${book.author}`);
console.log(bookDescriptions); // Beklenen Çıktı: ["Sapiens - Yuval Noah Harari", "1984 - George Orwell"]