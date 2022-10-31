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
      }
    };
}

export default UserInterface;