function recFunc(array, index = 0) {
  let array2 = array;
  if (array2.length === 0) {
    return -1;
  }
  if (array2[0] <= array2[1]) {
    array2.splice(0, 1);
    index++;
    return recFunc(array2, index);
  } else {
    return ++index;
  }
}
console.log(recFunc([2, 12, 13, 14, 6]));
