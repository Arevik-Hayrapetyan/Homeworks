function filterFunction(array) {
  let filteredNumbers = [];
  filteredNumbers = array.filter((el) => Number(el));
  return filteredNumbers;
}
console.log(filterFunction([1, 2, "a", 6, null]));
