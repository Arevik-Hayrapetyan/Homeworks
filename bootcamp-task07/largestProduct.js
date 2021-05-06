function largestProduct(array) {
  let maxNum = array[0] * array[1];
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i] * array[i + 1] > maxNum){
    maxNum = array[i] * array[i + 1];
    }
  }
  return maxNum;
}
console.log(largestProduct([10, 4, 5, 0]));
