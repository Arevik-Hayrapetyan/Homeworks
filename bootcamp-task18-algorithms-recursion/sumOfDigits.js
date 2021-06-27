function recFunc(number, sum = 0) {
  if (number >= 0 && number < 10) {
    sum = sum + number;
    if (sum > 10) {
      return recFunc(sum, 0);
    } else {
      return sum;
    }
  } else {
    let digit = number % 10;
    number = Math.floor((number - digit) / 10);
    sum = sum + digit;
    return recFunc(number, sum);
  }
}
console.log(recFunc(523, 76));
