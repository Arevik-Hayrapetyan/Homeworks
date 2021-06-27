let input = "0.6777a";
let parse = "";

if (isNaN(input[0])) {
  console.log(NaN);
} else {
  for (i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      break;
    } else {
      parse += input[i];
    }
  }
}
console.log(parse);

