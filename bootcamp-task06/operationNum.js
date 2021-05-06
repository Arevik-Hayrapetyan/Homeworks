function findSumNum(elem1, elem2) {
  let array = [3, 5, 10, 8, 1];
  if (elem1 > array.length - 1 || elem2 > array.length - 1) {
    return "Error";
  }
  return array[elem1] + array[elem2];
}
console.log(findSumNum(1, 2))

function findDifferenceNum(elem1, elem2) {
  let array = [4, 5, 10, 8, 1];
  if (elem1 > array.length - 1 || elem2 > array.length - 1) {
    return "Error";
  }
  return array[elem1] - array[elem2];
}
console.log(findDifferenceNum(0, 4))

function findMultiNum(elem1, elem2) {
  let array = [4, 5, 10, 8, 1];
  if (elem1 > array.length - 1 || elem2 > array.length - 1) {
    return "Error";
  }
  return array[elem1] * array[elem2];
}
console.log(findMultiNum(0, 4))

function findDivisionNum(elem1, elem2) {
  let array = [4, 5, 10, 8, 1];
  if (array[elem2] === 0) {
    return "The result is infinity";
  }
  if (elem1 > array.length - 1 || elem2 > array.length - 1) {
    return "Error";
  }
  return array[elem1] / array[elem2];
}
console.log(findDivisionNum(1, 4))