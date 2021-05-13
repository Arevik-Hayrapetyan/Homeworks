function reduceFunction(array) {
    let result = array.reduce((accumulator, currentValue) => {
      if (currentValue > 2) {
        return accumulator + currentValue;
      } else {
        return accumulator;
      }
    }, 0);
    return result
  }
  
  const array = [1, 2, 3, 4];
  console.log(reduceFunction(array));
