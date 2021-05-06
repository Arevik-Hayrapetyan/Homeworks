function possibleSubsets(array) {
  if (array.length <= 3) {
    return array;
  }
  let newArray = [];
  for (let i = 0; i < array.length - 2; i++) {
    let secondArray = [];
    secondArray.push(array[i]);
    for (let j = i + 1; j < array.length - 1; j++) {
      let thirdArray = secondArray.concat(array[j]);
      for (let d = j + 1; d < array.length; d++) {
        let fourthArray = thirdArray.concat(array[d]);
        newArray.push(fourthArray);
      }
    }
  }
  return newArray;
}
console.log(possibleSubsets([1, 2, 2, 5, 6, 7, 8, 94]));
