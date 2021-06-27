function PersonConstructor(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
PersonConstructor.prototype.eat = function (someFood) {
  this.stomach.push(someFood);
  if (this.stomach.length < 10) {
    return "There is no effect";
  } else {
    return "Stomach is full";
  }
};
PersonConstructor.prototype.poop = function () {
  this.stomach = [];
};
PersonConstructor.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};
