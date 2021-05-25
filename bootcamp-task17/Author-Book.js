class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }
  set name(name) {
    if (!isNaN(this._name)) {
      throw new Error("Name cant contain numnber");
    } else {
      this._name = name;
    }
  }
  get name() {
    return this._name;
  }
  get email() {
    return this._email;
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
let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");
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
  get title(){
      return this._title
  }
  get author(){
      return this._author
  }
  get price(){
      return this._price
  }
  get quantity(){
      return this._quantity
  }
  getProfit(){
      let profit = this._price * this._quantity
      return profit
  }
  toString(){
      return `${this._author} ${this._title}`
  }
}
