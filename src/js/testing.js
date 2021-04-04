class Person {
  constructor(name, age, gender, interest){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interest = [interest];
  }

  bio() {
    return `${this.name} is ${this.age} Years Old. He Likes ${this.interest}`;
  }
  greeting() {`Hi I am ${this.name}`}
}

class Teacher extends Person {
  constructor(name, age, gender, interest, subject) {
    super(name, age, gender, interest);
    this.subject = subject;
  }
  bio(){return super.bio()}
}

let person1 = new Person('John', 27, 'M', ['Gaming', 'Pooling']);
let teacher1 = new Teacher('Carl', 25, 'M', ['Gaming', 'Swimming'], 'Math');

function newPerson(name, surname) {
  const obj = {};
  obj.name = name;
  obj.surname = surname;
  obj.greeting = function(){
    return `Hello I am ${obj.name}`;
  }
  return obj;
}

let object =newPerson('Carl', 'Kevin');

class Shape {
  constructor(name, width, length){
    this.name = name;
    this.width = width;
    this.length = length;
  }

  calcPerimeter() {
    const result = 2 * (this.width + this.length);
    return result;
  }

  calcArea() {
    return this.calcPerimeter() ** 2;
  }
}

const squared = new Shape('Square', 5, 5);
const rectangle = new Shape('Rectangle', 12, 5);

