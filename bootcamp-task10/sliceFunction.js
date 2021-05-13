function sliceFunction(array, start = 0, end = array.length) {
  if (start < 0) {
    start = array.length + start;
  }
  if (end < 0) {
    end = array.length + end;
  }

  let sliceArray = [];
  for (let i = start; i < end; i++) {
    sliceArray.push(array[i]);
  }
  return sliceArray;
}
console.log(sliceFunction([1, 2, 3, 4, 5, 6, 7], -6, 3));
