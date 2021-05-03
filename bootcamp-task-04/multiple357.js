let number = 15;
if (number % 3 === 0 && number % 5 === 0 && number % 7 === 0) {
  console.log(number + " is a multiple of 3, 5 ,7");
} else if (number % 3 === 0 && number % 5 === 0) {
  console.log(number + " is a multiple of 3 and 5");
} else if (number % 3 === 0 && number % 7 === 0) {
  console.log(number + " is a multiple of 3 and 7");
} else if (number % 5 === 0 && number % 7 === 0) {
  console.log(number + " is a multiple of 5 and 7");
} else if (number % 3 === 0) {
  console.log(number + " is a multiple of 3");
} else if (number % 5 === 0) {
  console.log(number + " is a multiple of 5");
} else if(number % 7 === 0) {
  console.log(number + " is a multiple of 7");
} else {
  console.log(" ")
}
