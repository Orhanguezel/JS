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