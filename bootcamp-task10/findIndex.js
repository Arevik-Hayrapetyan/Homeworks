function findIndex(item, array) {
  for (let indx = 0; indx < array.length; indx++) {
    if (item(array[indx])) {
      return indx;
    }
  }
  return -1;
}

console.log(findIndex((input) => input === "b", ["b", "a", "3", "c"]));
