function consistsUniques(array) {
  for (let i = 0; i < array.length; i++) {
    if (array.includes(array[i], i + 1)) {
      return false;
    }
  }
  return true;
}
console.log(consistsUniques(["arrr", "yaaa", 1, 1]));
