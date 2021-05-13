function mapFunction(array, inputFn) {
  let newArray = [];

  for (let indx = 0; indx < array.length; indx++) {
    newArray.push(inputFn(array[indx]));
  }
  return newArray;
}
array = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 },
];

console.log(mapFunction(array, (el) => el.name));
