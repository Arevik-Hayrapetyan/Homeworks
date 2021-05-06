function findLargerString(input) {
  input = input.split(" ");
  let largerString = input[0];
  for (let i = 0; i < input.length; i++) {
    if (input[i].length >= largerString.length) {
      largerString = input[i];
    }
  }
  return largerString;
}
console.log(findLargerString("Revolution without dancing is a revolution not worth having:"));
