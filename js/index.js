// Array Object

const booksObject = new Object();
// const booksObject = new Object.create();

// Storage
const getBooks = () =>{
    let books;
    if (localStorage.getItem('books')===null){
        books= [];
    }else{
        books = JSON.parse(localStorage.getItem('books'))
    }
    return books;
}

const addBookStr = (book) => {
const books = getBooks();
books.push(book)
localStorage.setItem('books', JSON.stringify(books));
}

const deleteBookStr = (bookIndex) => {
const books = getBooks();
books.forEach((book, index)=>{
    console.log(index, book)
    if(bookIndex===index){
        books.splice(index, 1)
    } 
})
localStorage.setItem('books', JSON.stringify(books));
}

// Array UI
const books = getBooks();
// const books = [
//     {
//         title: 'Man',
//         author: 'Two',
//     },
//     {
//         title: 'Festus',
//         author: 'One',
//     }
// ]

// function: Add book
const addBook = (book) => {

    const list = document.querySelector('.container-books');
    const div = document.createElement('div');
    div.classList.add('list-container');
    list.appendChild(div);

    div.innerHTML = `
    <h3>${book.title}</h3>
    <p>${book.author}</p>
    <a href="" class="btn btn-danger btn-sm remove"> Remove </a>
    <hr>
    `
};

const clearFormInputs = () => {
    title.value = '';
    author.value = '';
}

const deleteBookList = (element) => {
    if (element.classList.contains('remove')) {
        element.parentElement.remove();
    }
}

const showAlert = () => {

}

// Events: Display Books

books.forEach((book) => addBook(book));

// Event: add a book

const formBook = document.querySelector('#book-form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');

formBook.addEventListener('submit', (e) => {
    e.preventDefault();

    booksObject.title = title.value;
    booksObject.author = author.value;

    // validation and Alerts

    if (title.value === '' || author.value === '') {
        alert('please fill in missing details');

    } else {
        // add book to defined array
        addBook(booksObject);
        //add book to storage
        addBookStr(booksObject);
        // clear form
        clearFormInputs();
    }

})

// remove a book

const remove = document.querySelectorAll('.list-container');

remove.forEach((deleteBook, index) => {

    deleteBook.addEventListener('click', (e) => {
        e.preventDefault();
        // console.log(e.target.classList.contains('remove'))

        deleteBookList(e.target);
        deleteBookStr(index)
    })
});

