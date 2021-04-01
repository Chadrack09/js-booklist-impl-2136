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
