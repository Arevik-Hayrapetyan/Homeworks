function parseInteger(array) {
  let integerNumbers = [];
  integerNumbers.push(...array.map((input) => (Number(input) ? Number(input) : null)));
  return integerNumbers;
}
console.log(parseInteger(["1", "2", "A", "B", "1"]));
