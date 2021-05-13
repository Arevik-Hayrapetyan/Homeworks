function someFunction(array, fn) {
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      return true;
    }
  }
  return false
}
console.log(someFunction([1, 2, 4, 7], (el) => el > 4));




