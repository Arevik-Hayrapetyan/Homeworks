let array = [8, 0, 1, "hey", "2", true, 7];
let evenArray = [];
let oddArray = [];
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "number" && !isNaN(array[i])) {
    if (array[i] % 2 === 0) {
      evenArray.push(array[i]);
    } else {
      oddArray.push(array[i]);
    }
  }
}
console.log(evenArray.concat(oddArray));
