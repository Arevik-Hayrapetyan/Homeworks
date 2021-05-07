function findNegativeNum(array) {
  let multiplier = 1;
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (typeof array[i] !== "object") {
      return "Invalid argument";
    } else {
      multiplier = multiplier * negativeNum(item);
    }
  }
  if (multiplier === 1) {
    return "No negative numbers";
  } else {
    return multiplier;
  }
}
console.log(findNegativeNum([[5, -3],[2, 3, -5],]));
function negativeNum(array) {
  let negativeArray = [];
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      negativeArray.push(array[i]);
    }
  }
  if (!negativeArray.length) {
    return 1;
  }
  max = Math.max(...negativeArray);
  return max;
}
