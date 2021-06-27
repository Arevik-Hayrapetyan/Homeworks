function recFunc(array) {
  let posArr = array.filter((item) => item >= 0);
  let [first, ...rest] = posArr;
  let minPosNum = first;
  if (first <= rest[0]) {
    rest[0] = first;
  } else {
    minPosNum = rest[0];
  }
  if (posArr.length === 0) {
    return -1;
  }
  if (posArr.length === 1) {
    return first;
  } else {
    return recFunc(rest);
  }
}
console.log(recFunc([-5, -9, -111, -1000, -7]));
