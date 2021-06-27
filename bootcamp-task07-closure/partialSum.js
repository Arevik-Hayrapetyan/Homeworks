function sum(number) {
  return function addingNum(number1) {
    return number + number1;
  };
}
console.log(sum(1)(2));
const addOne = sum(10);
console.log(addOne(2));
const addTen = sum(10);
console.log(addTen(2));
console.log(addOne(4));
console.log(addTen(10));
