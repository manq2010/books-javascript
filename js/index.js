// Array Constructor
class Booklist {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Storage Functions

/* eslint max-classes-per-file: ["error", 2] */
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
    const books = this.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  };

  static deleteBookStr = (bookIndex) => {
    const books = this.getBooks();

    books.forEach((book, index) => {
      if (bookIndex === index) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  };
}

// Array UI

const books = Storage.getBooks();

const addBook = (book) => {
  const list = document.querySelector('.container-books');
  const div = document.createElement('div');
  div.classList.add('list-container');
  list.appendChild(div);

  div.innerHTML = `
  <div class="book-details d-flex flex-row m-1 justify-content-between">
  <div class="d-flex flex-row">
  <h4>${book.title}</h4>
  <p class="ps-5 h6">${book.author}</p>
  <a href="" class="btn btn-outline-dark btn-sm border-end border-bottom border-4 border-dark remove"> Remove </a>
  <hr> `;
};

const title = document.querySelector('#title');
const author = document.querySelector('#author');

const clearFormInputs = () => {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  title.value = '';
  author.value = '';
};

const deleteBookList = (element) => {
  if (element.classList.contains('remove')) {
    element.parentElement.remove();
  }
};

// Events: Display Books

books.forEach((book) => addBook(book));

// Event: add a book

const formBook = document.querySelector('#book-form');

formBook.addEventListener('submit', (e) => {
  e.preventDefault();

  const booksObject = new Booklist(title.value, author.value);

  // validation and Alerts
  if (title.value === '' || author.value === '') {
    //
  } else {
    // add book to defined array
    addBook(booksObject);

    // add book to storage
    Storage.addBookStr(booksObject);
    // clear form
    clearFormInputs();
  }

  window.location.reload();
});

// remove a book

const remove = document.querySelectorAll('.list-container');

remove.forEach((deleteBook, index) => {
  deleteBook.addEventListener('click', (e) => {
    e.preventDefault();
    deleteBookList(e.target);
    Storage.deleteBookStr(index);
  });
});