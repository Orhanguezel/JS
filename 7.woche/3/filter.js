// filter fonksiyonu ile bir array içerisindeki elemanları filtreleyebiliriz. Bu örnekte bir array içerisindeki sayıları filtreleyerek tek sayıları döndüren bir fonksiyon yazacağız.

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

// filter ile sadece Fiction türündeki kitapları döndür
const fictionBooks = booksShelf.filter(book => book.genre === "Fiction");
console.log(fictionBooks);

console.clear();

// filter ile sadece 1984 kitabını döndür
const book1984 = booksShelf.filter(book => book.title === "1984");
console.log(book1984);

console.clear();

const notFictionBooks = booksShelf.filter(book => book.genre !== "Fiction");
console.log(notFictionBooks);


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];