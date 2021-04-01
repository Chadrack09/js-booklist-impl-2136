// Book Class
class Book {
  constructor (title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  // Methods that display Book
  static displayBook(){
    const name = 'John';
  }
  getAge() {
    return `This Book: ${this.title} was written by ${this.author}`;
  }
}

const form = document.querySelector('#form');
// form.addEventListener('submit', e => {
//   e.preventDefault();
//   const title = document.querySelector('#title').value;
//   const author = document.querySelector('#author').value;
//   const isbn = document.querySelector('#isbn').value;
//   const row = document.createElement('tr');
//   const rData = document.createElement('td');
//   rData.innerHTML = `${title}`;
//   row.appendChild(rData);
//   console.log(row);
// });
