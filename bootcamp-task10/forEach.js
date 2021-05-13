function forEach(array, fn) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    newArray.push(fn(array[index]));
  }
  return newArray;
}
console.log(forEach(["Bootcamp", "ACA", "JS"], (el) => el + "A"));
