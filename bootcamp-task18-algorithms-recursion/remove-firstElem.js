function recFunc(array) {
  if (array.length === 0 || array.length === 1) {
    return [];
  }
  let [first, ...rest] = array;
  return rest;
}
console.log(recFunc([6, 78, "n", 0, 1]));
