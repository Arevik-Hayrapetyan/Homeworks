function findLargerNum(number, array) {
  let arraySecond = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) {
      arraySecond.push(array[i]);
    }
  }
  return arraySecond;
}
console.log(findLargerNum(16, [45, 15, 100]));
