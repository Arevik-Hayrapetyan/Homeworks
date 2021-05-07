function removeElements(input) {
  let newArray = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i].length > 3) {
      newArray.push(input[i]);
    }
  }
  return newArray;
}
console.log(removeElements(["kia", "tesla", "bmw", "mercedes"]));
