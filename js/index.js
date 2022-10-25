class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  
  const forLs = [];
  
  /* eslint max-classes-per-file: ["error", 2] */
  
  class DisplayBook {
    static addBook(newBook, index) {
      const library = document.querySelector('.container-books');
      if (!localStorage.getItem('books')) {
        const noBook = document.createElement('p');
        noBook.innerHTML = 'No books in library';
        library.appendChild(noBook);
      }
      const container = document.createElement('div');
      container.classList.add('book');
      container.classList.add('flex');
      container.innerHTML = `
      <div class="book-details">
       <h3>${newBook.title}</h3>
       <p>${newBook.author}</p>
      </div>
       <button class="btn btn-danger btn-sm delete" data-remove=${index}>Delete</button>
       `;
      library.appendChild(container);
  
      forLs.push(newBook);
    }
  
    // delete function
    static deleteBook(index) {
      forLs.splice(index, 1);
      DisplayBook.setLs();
    }
  
    // set local storage
    static setLs() {
      localStorage.setItem('books', JSON.stringify(forLs));
    }
  
    // fetch local storage
    static getLs() {
      if (localStorage.getItem('books')) {
        const books = JSON.parse(localStorage.getItem('books'));
        books.forEach((book, index) => {
          const newBook = new Book(book.title, book.author);
          DisplayBook.addBook(newBook, index);
        });
      } else {
        localStorage.setItem('books', JSON.stringify(forLs));
      }
      const deleteBtn = document.querySelectorAll('.delete');
      deleteBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          const index = e.target.dataset.remove;
          DisplayBook.deleteBook(index);
          DisplayBook.setLs();
          e.target.parentElement.remove();
        });
      });
    }
  }
  
  //formInput
  
  const form = document.querySelector('#book-form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
  
    if (title !== '' && author !== '') {
      const newBook = new Book(title, author);
      DisplayBook.addBook(newBook);
  
      DisplayBook.setLs(newBook);
  
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
  
      document.querySelector('#title').focus();
    }
  
    const deleteBtn = document.querySelectorAll('.delete');
    deleteBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const index = e.target.dataset.remove;
        DisplayBook.deleteBook(index);
        e.target.parentElement.remove();
      });
    });
  });
  
  DisplayBook.getLs();
  






// // Array Constructor
// class BookList {
//   constructor(author, title) {
//     this.author = author;
//     this.title = title;
//   }

// }

// // const booksObject = {};

// // Storage Functions

// class Storage {

//   static getBooks = () => {
//     let books;
//     if (localStorage.getItem('books') === null) {
//       books = [];
//     } else {
//       books = JSON.parse(localStorage.getItem('books'));
//     }
//     return books;
//   };

//   static addBookStr = (book) => {
//     const books = Storage.getBooks();
//     books.push(book);
//     localStorage.setItem('books', JSON.stringify(books));
//   };

//   static deleteBookStr = (bookIndex) => {
//     const books = Storage.getBooks();

//     books.forEach((book, index) => {
//       if (bookIndex === index) {
//         books.splice(index, 1);
//       }
//     });
//     localStorage.setItem('books', JSON.stringify(books));
//   };

// }

// // Array UI
// class UserInterface {
//   static renderBooks = () => {
//     const booksDisp = Storage.getBooks();
//     const books = booksDisp;
//     books.forEach((book) => UserInterface.addBook(book));
//   };

//   static addBook = (book) => {
//     const list = document.querySelector('.container-books');
//     const div = document.createElement('div');
//     div.classList.add('list-container');

//     div.innerHTML = `
//         <h3>${book.title}</h3>
//         <p>${book.author}</p>
//         <a href="" class="btn btn-danger btn-sm remove"> Remove </a>
//         <hr> `;

//     list.appendChild(div);
//   };

//   static deleteBookList = (element) => {
//     if (element.classList.contains('remove')) {
//       element.parentElement.remove();
//     }
//   };

//   static clearFormInputs = () => {
//     title.value = '';
//     author.value = '';
//   };
// };

// //Event renderBooks
// document.addEventListener('DOMContentLoaded', UserInterface.renderBooks);

// // const addBook = (book) => {
// //   const list = document.querySelector('.container-books');
// //   const div = document.createElement('div');
// //   div.classList.add('list-container');
// //   list.appendChild(div);

// //   div.innerHTML = `
// //   <h3>${book.title}</h3>
// //   <p>${book.author}</p>
// //   <a href="" class="btn btn-danger btn-sm remove"> Remove </a>
// //   <hr> `;
// // };

// const title = document.querySelector('#title');
// const author = document.querySelector('#author');

// // const clearFormInputs = () => {
// //   title.value = '';
// //   author.value = '';
// // };

// // const deleteBookList = (element) => {
// //   if (element.classList.contains('remove')) {
// //     element.parentElement.remove();
// //   }
// // };

// // Events: Display Books

// // books.forEach((book) => BookList.addBook(book));

// // Event: add a book

// const formBook = document.querySelector('#book-form');

// formBook.addEventListener('submit', (e) => {
//   e.preventDefault();
//   //   booksObject.title = title.value;
//   //   booksObject.author = author.value;

//   const booksObject = new BookList(author.value, title.value);

//   console.log(booksObject)
//   // validation and Alerts
//   if (title.value === '' || author.value === '') {
//     //
//   } else {
//     // add book to defined array
//     UserInterface.addBook(booksObject);

//     // add book to storage
//     Storage.addBookStr(booksObject);
//     // clear form
//     UserInterface.clearFormInputs();
//   }

//   // window.location.reload();
// });

// // remove a book

// const remove = document.querySelectorAll('.list-container');

// remove.forEach((deleteBook, index) => {
//   deleteBook.addEventListener('click', (e) => {
//     e.preventDefault();
//     UserInterface.deleteBookList(e.target);
//     Storage.deleteBookStr(index);
//     // window.location.reload();
//     console.log('click');
//   });
// });
