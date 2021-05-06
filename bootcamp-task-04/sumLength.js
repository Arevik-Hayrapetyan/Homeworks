function sumLength(array) {
  let maxLength = array[0].length;
  let minLength = array[0].length;

  for (let i = 1; i < array.length; i++) {
    if (maxLength < array[i].length) {
      maxLength = array[i].length;
    }
    if (minLength > array[i].length) {
      minLength = array[i].length;
    }
  }
  return maxLength + minLength;
}
console.log(sumLength(["anymore", "raven", "me", "communicate"]));
