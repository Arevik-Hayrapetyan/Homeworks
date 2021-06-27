class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }
  get name() {
    return `Author name is: ${this._name}`;
  }
  set name(name) {
    if (typeof name === "string") {
      return this._name;
    }
  }

  get email() {
    return `Author's email is: ${this._email}`;
  }
  get gender() {
    let gender = this._gender.toLowerCase();
    return gender;
  }
  toString() {
    if (this._gender === "male") {
      return `Mtr ${this._name}`;
    } else {
      return `Ms ${this._name}`;
    }
  }
}
let author1 = new Author("R.A", "abc@gmail.com", "fEmaLe");
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling

class Book {
  constructor(title, author, price, quantity) {
    this._title = title;
    this._author = author;
    this._price = price;
    this._quantity = quantity;
  }
  get title() {
    return `This is book title: ${this._title}`;
  }
  get author() {
    return `Author is: ${this._author}`;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    if (typeof value === "number") {
      this._price = value;
    }
  }

  get quantity() {
    return `Book quantity is: ${this._quantity}`;
  }
  getProfit() {
    let profit = this._price * this._quantity;
    return profit;
  }
  toString() {
    return `
    Author name:: ${this._author} 
    Book title:: ${this._title}`;
  }
}
const book = new Book("Anlreli zangakatun", "Paruyr Sevak", 5000, 50);
console.log(book.toString());
book.price = "aaaa";
console.log(book.price);
