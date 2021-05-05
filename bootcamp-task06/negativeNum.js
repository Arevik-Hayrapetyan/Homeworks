function findLargerNegativeNum(array) {
  let sumArray = [];
  let a = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length === undefined) {
      return "Invalid argument";
    }

    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] < 0) {
        a += array[i][j];
      }
    }
    sumArray.push(a);
    a = 0;
  }
  if (sumArray.length === 0) {
    return "No negatives";
  }
  let maxValue = -Infinity;

  for (let i = 0; i < sumArray.length; i++) {
    if (sumArray[i] < 0 && sumArray[i] > maxValue) {
      maxValue = sumArray[i];
    }
  }
  return Math.abs(maxValue);
}

console.log(findLargerNegativeNum([[-20, 44], [-4, 15]]));
