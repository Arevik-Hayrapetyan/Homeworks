function sortOddEven(array) {
  let newArray = [[], []];
  for (i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      continue;
    }
    if (array[i] % 2 === 0) {
      newArray[0].push(array[i]);
    } else {
      newArray[1].push(array[i]);
    }
  }
  return newArray;
}
console.log(sortOddEven([45, 13, 3, 6, 17]));
