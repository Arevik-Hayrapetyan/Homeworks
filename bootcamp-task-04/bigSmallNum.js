let number = 526;
let max = number % 10;
let min = number % 10;

while (number) {
  let lastDigit = number % 10;
  number = Math.floor(number / 10);
  if (lastDigit > max) {
    max = lastDigit;
  }
  if (lastDigit < min) {
    min = lastDigit;
  }
}
console.log("The difference is: " + (max - min));
