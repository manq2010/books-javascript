const navigationLinks = (el) => {
  const listBtnId = document.querySelector('#home');
  const AddNewBtnId = document.querySelector('#add-book');
  const contactBtnId = document.querySelector('#contact');

  switch (el) {
    case 'home-li':
      window.location.reload();
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

export default navigationLinks;