function findFunction(item, array) {
    for (let indx = 0; indx < array.length; indx++) {
      if (item(array[indx])) {
        return array[indx];
      }
    }
    return undefined;
  }
  
  console.log(findFunction((input) => input === "b", ["b", "a", "3", "c"]));