function everyFunction(array, item) {
  for (let indx = 0; indx < array.length; indx++) {
    if (item(array[indx])) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
console.log(everyFunction([1, 2, 3], (input) => input > 2));
