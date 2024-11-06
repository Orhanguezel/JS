// foreach() methodu, bir dizi üzerinde her bir eleman için belirtilen bir fonksiyonu çalıştırır.

const booksShelf = [
    { title: "The Silent Spring", author: "Rachel Carson", genre: "Science" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
    { title: "1984", author: "George Orwell", genre: "Fiction" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction" },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction" },
    { title: "Faust", author: "Johann Wolfgang von Goethe", genre: "Drama" },
];

// forEach ile kitap başlıklarını ve yazarlarını yazdır
booksShelf.forEach(printTitle);

function printTitle(book){
    console.log(`${book.title} by ${book.author}`);

}


// forEach ile kitap türlerini yazdır

booksShelf.forEach(function(book){
    console.log(book.genre);
}
);

// forEach ile kitap türlerini yazdır
booksShelf.forEach(x => console.log(x.author));

const result = booksShelf.forEach(x => x.author);
console.log(result); // undefined

// neu Array mt alle title

const titles = [];
booksShelf.forEach(x => titles.push(x.title));
console.log(titles);



const persons = [
    { name: "Peter", age: 16, country: "Germany" },
    { name: "Mark", age: 88, country: "UK" },
    { name: "John", age: 27, country: "USA" },
    { name: "Jane", age: 14, country: "Germany" },
    { name: "Tony", age: 44, country: "UK" },
    { name: "Mike", age: 32, country: "USA" }
];

/*
// forEach ile kişilerin adlarını, yaşlarını ve ülkelerini yazdır
persons.forEach(person => {
    console.log(`Ad: ${person.name}, Yaş: ${person.age}, Ülke: ${person.country}`);
});
*/

// great all person and tell them if they are allowed to drive or not in Germany
// example : Hallo Peter, welkome in DE. You are not allowed to drive a car in Germany

persons.forEach(person => {
    if(person.age >= 18 ){
        console.log(`Hallo ${person.name}, You are allowed to drive`);
    } else {
        console.log(`Hallo ${person.name}, welcome to DE. You are not allowed to drive`);
    }
}
);

persons.forEach(person => {
    const greeting = person.age >= 18 ? "You are allowed to drive" : "You are not allowed to drive";
    console.log(`Hallo ${person.name}, ${greeting}`);
}
);