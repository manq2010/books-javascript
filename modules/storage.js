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

export default Storage;