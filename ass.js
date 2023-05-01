// Create a function called getAvailableBooks that returns an array of all available
// books.


const getAvailableBooks = () => {
  return books.filter((book) => book.isAvailable);
};


const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true }
]
console.log(getAvailableBooks(books)); 


// Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
function  getBooksByAuthor(books){
    const BooksByAuthor={};
    for (let i=0;i<books.length;i++){
      const book=books[i];
      if(!BooksByAuthor[book.author]){
        BooksByAuthor[book.author]=[];
      }
    BooksByAuthor[book.author].push[books];
    }
    return BooksByAuthor;
    
}
const Books = [
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
  isAvailable: true },
  { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
  isAvailable: false },
  { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
  1866, isAvailable: true },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
  isAvailable: false },
  { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true }
  ]
  console.log(getBooksByAuthor(Books)); 
  




// Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
  // publicationYear, and isAvailable).

const addNewBook = (book) => {
 
  if (!book.title || !book.author || !book.publicationYear || !book.isAvailable) {
    console.log("This can't be added to the library.");
    return;
  }
else{


  books.push(book);
  console.log(book);
}
return;
};

const book=[
{ title:"Love Birds",author:"Clever Kayita",publicationYear:2023,isAvailable: true

}
]
console.log(addNewBook(book))

//   Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.


const checkoutBook = (books) => {
  const x= books.filter((book) => book.isAvailable);
  if (!x[books.title]){
    return false
  }

}
const boookss = [
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
  isAvailable: true },
  { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
  isAvailable: false },
  { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
  1866, isAvailable: true },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
  isAvailable: false },
  { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true }
  ]

  console.log(returnBook(boookss))


// Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.


function returnBook(title) {
  for (let i = 0; i < books.length; i++) {
      if (books[i].title === title) {
          books[i].isAvailable = true;
          return `The book "${title}" has been returned.`;
      }
  }
  return `The book "${title}" does not belong to the library.`;
}

const boooks = [
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
  isAvailable: true },
  { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
  isAvailable: false },
  { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
  1866, isAvailable: true },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
  isAvailable: false },
  { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true }
  ]

  console.log(returnBook(boooks))