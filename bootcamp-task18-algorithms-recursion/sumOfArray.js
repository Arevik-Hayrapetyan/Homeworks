function recFunc(array, sum = 0) {
  if (array.length !== 0) {
    sum = sum + array[0];
    array.shift(array[0]);

    return recFunc(array, sum);
  } else {
    return `The sum is ${sum}`;
  }
}

console.log(recFunc([1, 2, 3]));
