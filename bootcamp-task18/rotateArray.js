function recFunc(array, n) {
  let changedArray = array.slice(n, array.length + 1);
  let restArray = array.slice(0, n);
  //   console.log(`rest array:: ${restArray}`);
  //   console.log(`Changed array:: ${changedArray}`);
  let newArray = changedArray.concat(restArray);
  return newArray;
}
console.log(recFunc(["a", "b", "c", "d"], -2));
