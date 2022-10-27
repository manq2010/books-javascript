// /* eslint-disable max-classes-per-file */

// Array Constructor
class Booklist {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Storage Functions

/* eslint max-classes-per-file: ["error", 4] */
class Storage {
  static getBooks = () => {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  };

  static addBookStr = (book) => {
    const books = Storage.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  };

  static deleteBookStr = (bookIndex) => {
    const books = this.getBooks();

    console.log(books)

    books.forEach((book, index) => {
      if (bookIndex === index) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  };
}

// Handle UI

class UserInterface {
  static displayBook() {
    const books = Storage.getBooks();
    books.forEach((book) => UserInterface.addBook(book));
  }

  static addBook = (book) => {
    const list = document.querySelector('.container-books');
    const div = document.createElement('div');
    div.classList.add('list-container');
    // list.appendChild(div);

    div.innerHTML = `
    <div class="book-details d-flex flex-row m-1 justify-content-between" id="book-details">
    <div class="d-flex flex-row">
    <h4>${book.title}</h4>
    <p class="ps-5 h6">${book.author}</p>
    </div>
    <a href="" class="btn btn-outline-dark btn-sm border-end border-bottom border-4 border-dark remove"> Remove </a>
    
    <hr>
    `;

    list.appendChild(div);
  };

  static deleteBookList = (element) => {
    if (element.classList.contains('remove')) {
      element.parentElement.remove();
    }
  };

  static clearFormInputs = () => {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    title.value = '';
    author.value = '';
  };
}

document.addEventListener('DOMContentLoaded', UserInterface.displayBook);

// Array UI

// const books = Storage.getBooks();

// const addBook = (book) => {
//   const list = document.querySelector('.container-books');
//   const div = document.createElement('div');
//   div.classList.add('list-container');
//   list.appendChild(div);

//   div.innerHTML = `
//   <div class="book-details d-flex flex-row m-1 justify-content-between">
//   <div class="d-flex flex-row">
//   <h4>${book.title}</h4>
//   <p class="ps-5 h6">${book.author}</p>
//   <a href="" class="btn btn-outline-dark btn-sm border-end border-bottom border-4 border-dark remove"> Remove </a>
//   <hr> `;
// };

// const title = document.querySelector('#title');
// const author = document.querySelector('#author');

// const clearFormInputs = () => {
//   const title = document.querySelector('#title');
//   const author = document.querySelector('#author');
//   title.value = '';
//   author.value = '';
// };

// const deleteBookList = (element) => {
//   if (element.classList.contains('remove')) {
//     element.parentElement.remove();
//   }
// };

// Events: Display Books

// books.forEach((book) => addBook(book));

// Event: add a book

const formBook = document.querySelector('#book-form');

formBook.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const booksObject = new Booklist(title.value, author.value);

  //  validation and Alerts
  if (title.value === '' || author.value === '') {
    //
  } else {
    // add book to defined array
    UserInterface.addBook(booksObject);

    // add book to storage
    Storage.addBookStr(booksObject);
    // clear form
    UserInterface.clearFormInputs();
  }

  window.location.reload();


});

// remove a book

// const remove = document.querySelectorAll('.list-container');

const remove = document.querySelector('#container-books');

console.log(remove);

remove.addEventListener('click', (e) => {
  e.preventDefault();
  UserInterface.deleteBookList(e.target);

  console.log(e.target.previousElementSibling.innerText);
  Storage.deleteBookStr(e.target);
});

// remove.forEach((deleteBook, index) => {
//   deleteBook.addEventListener('click', (e) => {
//     e.preventDefault();
//     page.deleteBookList(e.target);
//     Storage.deleteBookStr(index);
//   });
// });

