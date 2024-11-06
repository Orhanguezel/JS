// map() methodu, bir dizi üzerinde bir fonksiyon çağırır ve bu fonksiyonun her bir öğesini yeni bir diziye ekler.

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

// map ile kitap başlıklarını ve yazarlarını yazdır
const bookTitles = booksShelf.map(book => `${book.title} by ${book.author}`);
console.log(bookTitles);


const nums =[4,6,8,10];

const newNums = nums.map(x => x / 2);
console.log(newNums);

nums.map((x,index) => {
    console.log(index);
});