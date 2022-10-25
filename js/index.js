class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const forLs = [];

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
      <div class="book-details d-flex flex-row m-1 justify-content-between">
       <div class=" d-flex flex-row">
       <h4>${newBook.title}</h4>
       <p class="ps-5 h6">${newBook.author}</p>
       </div>
       <button class="btn btn-outline-dark btn-sm delete border-end border-bottom border-4 border-dark" data-remove=${index}>Remove</button>
       </div>
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
