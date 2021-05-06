//Write a function that implements filtering in array:
function filterArray(inputArray) {
  let newArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i]) {
      newArray.push(inputArray[i]);
    }
  }
  return newArray;
}
console.log(filterArray([null, true, {}, { name: "Elon" }, "", NaN, 0]));
