let number = "123";
let lastDigit = number.slice(number.length - 1);

let firstDigit = number.slice(0, 1);

let middle = number.slice(1, number.length - 1);

let newnum = +(lastDigit + middle + firstDigit);
console.log("Reversed number is" + newnum);
