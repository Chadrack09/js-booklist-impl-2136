// Initializing a Book Class or object
class Book {
  constructor (title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  getTitle(){return this.title}
  setTitle(title){this.title = title}
  getAuthor(){return this.author}
  setAuthor(author){this.author = author}
  getIsbn(){return this.isbn}
  setIsbn(isbn){this.isbn = isbn}

  static displayBook() {
    const storingBook = [
      {title: 'Fall Calling Up', author: 'Sam Patt', isbn: '458-456'},
      {title: 'Telling The Truth', author: 'John Doe', isbn: '785-562'}
    ];
    storingBook.forEach(book => {
      const tBody = document.querySelector('#fullTable tbody');
      const tRow = document.createElement('tr');
      tRow.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td class="btn-delete">x</td>
      `;
      tBody.appendChild(tRow);
    }); 
  }

  static clearField() {
    const title = document.querySelector('#title').value = '';
    const author = document.querySelector('#author').value = '';
    const isbn = document.querySelector('#isbn').value = '';
  }

  static showAlert(message, className) {
    const container = document.querySelector('#main-container');
    const form = document.querySelector('.form-container');

    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.innerHTML = `<p>${message}</p>`;

    container.insertBefore(div, form);
    setTimeout(() => {
      document.querySelector(`.alert`).remove();
    }, 3500);
  }

  static updateBook(e) {
    e.preventDefault();
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const isbn = document.querySelector('#isbn');

    const tbody = document.querySelector('#fullTable tbody');
    if(title.value == '' || author.value == '' || isbn.value == ''){
      Book.showAlert('Please Fill All Field', 'danger');
    }
    else {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${title.value}</td>
        <td>${author.value}</td>
        <td>${isbn.value}</td>
        <td class="btn-delete">x</td>
      `;
      tbody.appendChild(row);
      Book.clearField();
      Book.showAlert('Book Added', 'success');
    }
  }

  static deleteBook(e) {
    const element = e.target;
    if (element.classList.contains('btn-delete')) {
      element.parentElement.remove();
      Book.showAlert('Book Deleted', 'danger');
    }
  }
}
// Event: Display Books
document.addEventListener('DOMContentLoaded', Book.displayBook);
document.addEventListener('submit', Book.updateBook);
const table = document.querySelector('#fullTable');
table.addEventListener('click', Book.deleteBook);