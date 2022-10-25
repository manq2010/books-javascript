// Array Constructor
class BookList {
  constructor(author, title) {
    this.author = author;
    this.title = title;
  }

}

// const booksObject = {};

// Storage Functions

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
    const books = Storage.getBooks();

    books.forEach((book, index) => {
      if (bookIndex === index) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  };

}

// Array UI
class UserInterface {
  static renderBooks = () => {
    const booksDisp = Storage.getBooks();
    const books = booksDisp;
    books.forEach((book) => UserInterface.addBook(book));
  };

  static addBook = (book) => {
    const list = document.querySelector('.container-books');
    const div = document.createElement('div');
    div.classList.add('list-container');

    div.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <a href="" class="btn btn-danger btn-sm remove"> Remove </a>
        <hr> `;

    list.appendChild(div);
  };

  static deleteBookList = (element) => {
    if (element.classList.contains('remove')) {
      element.parentElement.remove();
    }
  };

  static clearFormInputs = () => {
    title.value = '';
    author.value = '';
  };
};

//Event renderBooks
document.addEventListener('DOMContentLoaded', UserInterface.renderBooks);

// const addBook = (book) => {
//   const list = document.querySelector('.container-books');
//   const div = document.createElement('div');
//   div.classList.add('list-container');
//   list.appendChild(div);

//   div.innerHTML = `
//   <h3>${book.title}</h3>
//   <p>${book.author}</p>
//   <a href="" class="btn btn-danger btn-sm remove"> Remove </a>
//   <hr> `;
// };

const title = document.querySelector('#title');
const author = document.querySelector('#author');

// const clearFormInputs = () => {
//   title.value = '';
//   author.value = '';
// };

// const deleteBookList = (element) => {
//   if (element.classList.contains('remove')) {
//     element.parentElement.remove();
//   }
// };

// Events: Display Books

// books.forEach((book) => BookList.addBook(book));

// Event: add a book

const formBook = document.querySelector('#book-form');

formBook.addEventListener('submit', (e) => {
  e.preventDefault();
  //   booksObject.title = title.value;
  //   booksObject.author = author.value;

  const booksObject = new BookList(author.value, title.value);

  console.log(booksObject)
  // validation and Alerts
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

  // window.location.reload();
});

// remove a book

const remove = document.querySelectorAll('.list-container');

remove.forEach((deleteBook, index) => {
  deleteBook.addEventListener('click', (e) => {
    e.preventDefault();
    UserInterface.deleteBookList(e.target);
    Storage.deleteBookStr(index);
    // window.location.reload();
    console.log('click');
  });
});
