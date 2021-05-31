function recFunc(number) {
  let digit = number % 10;
  if (digit % 2 === 0) {
    return false;
  } else {
    let newNumber = Math.floor((number - digit) / 10);
    if (newNumber === 0) {
      return true;
    }
    return recFunc(newNumber);
  }
}
console.log(recFunc(723));
