import Books from '../modules/book.js';
import Storage from '../modules/storage.js';
import UserInterface from '../modules/userinterface.js';
import navigationLinks from '../modules/navigation.js';
import currentTime from '../modules/current-time.js';

// Display Books from LocalStorage
window.addEventListener('DOMContentLoaded', () => {
  const books = Storage.getBooks();
  books.forEach((book) => UserInterface.addBook(book));

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
  });

  const remove = document.querySelectorAll('.list-container');
  remove.forEach((deleteBook, index) => {
    deleteBook.addEventListener('click', (e) => {
      UserInterface.deleteBookList(e.target);
      window.location.reload();
      Storage.deleteBookStr(index);
    });
  });

  // Navigation
  const navItems = Array.from(
    document.querySelectorAll('.nav-menu')[0].children,
  );

  navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      navigationLinks(e.target.parentElement.id);
    });
  });

  // Display Time
  setInterval(() => {
    currentTime();
  }, 1000);
});
