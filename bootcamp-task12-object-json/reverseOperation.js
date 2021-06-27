function reverseOperation(array) {
  let obj = array.reduce((acc, [key, value]) => {
    return { ...acc, [key]: value };
  }, {});
  return obj;
}
console.log(reverseOperation(["a", 1], ["b", 2]));
