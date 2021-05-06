function computeNewString(input) {
  let result = "";
  let length = input.length % 3;

  for (let i = 0; i < input.length - length; i += 3) {
    result += input.slice(i + 1, i + 3) + input[i];
  }
  return result + input.slice(input.length - length);
}

console.log(computeNewString("abcdfgaaff"));
