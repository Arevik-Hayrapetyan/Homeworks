function findEvenNum(num1, num2) {
  str = "";

  for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
      let a = Math.floor(i / 10);
      while (a) {
        let digit = a % 10;
        if (digit % 2 !== 0) {
          break;
        } else {
          a = Math.floor(a / 10);
        }
      }
      if (a === 0) {
        str += i + ", ";
      }
    }
  }
  return str.slice(0, str.length - 2);
}
console.log(findEvenNum(119, 442));
