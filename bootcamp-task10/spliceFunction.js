function spliceFunction(array, start, count, ...add) {
    
  if (start < 0) {
    start = array.length + start;
  }
  let end = count + start
  let spliceArray = [];
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i > start - 1 && i < end ) {
      spliceArray.push(array[i]);
    } else if (i === end) {
      newArray.push(...add);
      newArray.push(array[i]);
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(spliceFunction([0, 1, 2, 3, 4, 5, 6, 7, 8], -3, 2, "aa", "rrrr"));
