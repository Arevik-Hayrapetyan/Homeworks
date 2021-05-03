let number = 2510;
if (number % 10 === 0 || number < 10) {
  console.log(number);
} else {
  let lastDigit = number % 10;
  let count = 0;
  let cloneNumber = number;
  cloneNumber = Math.floor(cloneNumber / 10);
  while (number) {
    number = Math.floor(number / 10);
    count++;
  }
  let newNumber = lastDigit * Math.pow(10, count - 1) + cloneNumber;
  console.log(newNumber);
}
