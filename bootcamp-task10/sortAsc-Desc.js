function sortFunction(array, input) {
  let item = 0;
  if (input === "Asc") {
    for (let indx = 0; indx < array.length; indx++) {
      for (let indx1 = indx + 1; indx1 < array.length; indx1++) {
        if (array[indx] > array[indx1]) {
          item = array[indx];
          array[indx] = array[indx1];
          array[indx1] = item;
        }
      }
    }
  }
  if (input === "Desc") {
    for (let indx = 0; indx < array.length; indx++) {
      for (let indx1 = indx + 1; indx1 < array.length; indx1++) {
        if (array[indx] < array[indx1]) {
          item = array[indx1];
          array[indx1] = array[indx];
          array[indx] = item;
        }
      }
    }
  }
  return array;
}
console.log(sortFunction([4, 5, 1, 10, -1, 100], "Asc"));
