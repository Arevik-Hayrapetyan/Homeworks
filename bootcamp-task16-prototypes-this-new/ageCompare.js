function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.compareAge = function (anotherPerson) {
  if (this.age < anotherPerson.age) {
    return `${anotherPerson.name} is older then me`;
  } else if (this.age > anotherPerson.age) {
    return `${anotherPerson.name} is younger then me`;
  } else {
    return `${anotherPerson.name} is the same age as me`;
  }
};
const person1 = new Person("Samuel", 24);
const person2 = new Person("Joel", 36);
const person3 = new Person("Lily", 24);

console.log(person1.compareAge(person2));
console.log(person2.compareAge(person1));
console.log(person1.compareAge(person3));
