# JavaScript BookList App
This App was built using JavaScript Document Object Oriented (DOM) and Object Oriented JS

```js
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
}
```

[Click To Go Domain](https://jsbookapp.netlify.app/)