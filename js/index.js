// Array Constructor

// const booksObject = {};

class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

/* eslint max-classes-per-file: ["error", 6] */

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

// const books = Storage.getBooks();

class UserInterface {
  static addBook = (book) => {
    const list = document.querySelector('.container-books');
    const div = document.createElement('div');
    div.classList.add('list-container');
    list.appendChild(div);

    div.innerHTML = `
   <div class="book-details d-flex flex-row m-1 justify-content-between">
       <div class=" d-flex flex-row">
       <h4>${book.title}</h4>
       <p class="ps-5 h6">${book.author}</p>
       </div>
       <button class="btn btn-outline-dark btn-sm delete border-end border-bottom border-4 border-dark remove" }>Remove</button>
       </div>`;
  };

  static clearFormInputs = () => {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    title.value = '';
    author.value = '';
  };

  static deleteBookList = (element) => {
    if (element.classList.contains('remove')) {
      element.parentElement.remove();
      // window.location.reload();
    }
  };
}

// Display Books from LocalStorage
window.addEventListener('DOMContentLoaded', () => {
  const books = Storage.getBooks();
  books.forEach((book) => UserInterface.addBook(book));
});

// Event: add a book
const formBook = document.querySelector('#book-form');

formBook.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');

  const booksObject = new Books(title.value, author.value);

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

  const remove = document.querySelectorAll('.list-container');
  remove.forEach((deleteBook, index) => {
    deleteBook.addEventListener('click', (e) => {
      e.preventDefault();
      UserInterface.deleteBookList(e.target);
      Storage.deleteBookStr(index);
    });
  });
});

const navItems = Array.from(
  document.querySelectorAll('.nav-menu')[0].children,
);

const navigationLinks = (el) => {
  const listBtnId = document.querySelector('#home');
  const AddNewBtnId = document.querySelector('#add-book');
  const contactBtnId = document.querySelector('#contact');

  switch (el) {
    case 'home-li':
      AddNewBtnId.classList.add('close');
      contactBtnId.classList.add('close');
      listBtnId.classList.remove('close');
      break;
    case 'add-book-li':
      listBtnId.classList.add('close');
      contactBtnId.classList.add('close');
      AddNewBtnId.classList.remove('close');
      break;
    case 'contact-li':
      AddNewBtnId.classList.add('close');
      listBtnId.classList.add('close');
      contactBtnId.classList.remove('close');
      break;
    default:
      break;
  }
};

navItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    navigationLinks(e.target.parentElement.id);
  });
});

navItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    navigationLinks(e.target.parentElement.id);
  });
});
