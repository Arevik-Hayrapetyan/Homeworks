function sumNum(input) {
  let sum = 0;
  let i = 0;
  for (; i < input.length; i++) {
    if (!isNaN(parseInt(input.slice(i)))) {
      sum += parseInt(input.slice(i));
      for (; i < input.length; i++) {
        if (!isNaN(parseInt(input.slice(i)))) {
          continue;
        } else {
          break;
        }
      }
    }
  }
  return sum;
}
console.log(sumNum("advsdv125avsd4"));
