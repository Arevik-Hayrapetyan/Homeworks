function Person(name, age, favoriteToy) {
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
}
Person.prototype.play = function () {
  return `${this.name} playing with ${this.favoriteToy}`;
};
const baby = new Person("Anna", 5, "Panda");
console.log(baby.play());
