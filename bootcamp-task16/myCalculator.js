function myCalculator() {}
myCalculator.prototype.add = function (firstNum, secondNum) {
  let addNumbers = firstNum + secondNum;
  return addNumbers;
};
myCalculator.prototype.subtract = function (firstNum, secondNum) {
  let subtractNumbers = firstNum + secondNum;
  return subtractNumbers;
};
myCalculator.prototype.multiply = function (firstNum, secondNum) {
  let multiplyNumbers = firstNum * secondNum;
  return multiplyNumbers;
};
myCalculator.prototype.divide = function (firstNum, secondNum) {
  let divideNumbers = firstNum / secondNum;
  return divideNumbers;
};
const calculator = new myCalculator();
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));
