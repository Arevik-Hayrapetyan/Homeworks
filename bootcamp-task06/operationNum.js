function findSumNum(elem1, elem2) {
  let array = [3, 5, 10, 8, 1];
  if (elem1 > array.length - 1 || elem2 > array.length - 1) {
    return "Error";
  }
  return array[elem1] + array[elem2];
}

function findDifferenceNum(elem1, elem2) {
  let array = [4, 5, 10, 8, 1];
  if (elem1 > array.length - 1 || elem2 > array.length - 1) {
    return "Error";
  }
  return array[elem1] - array[elem2];
}

function findMultiNum(elem1, elem2) {
  let array = [4, 5, 10, 8, 1];
  if (elem1 > array.length - 1 || elem2 > array.length - 1) {
    return "Error";
  }
  return array[elem1] * array[elem2];
}
function findDivisionNum(elem1, elem2) {
  if (array[elem2] === 0) {
    return "The result is infinity";
  }
  let array = [4, 5, 10, 8, 1];
  if (elem1 > array.length - 1 || elem2 > array.length - 1) {
    return "Error";
  }
  return array[elem1] / array[elem2];
}
