let input = "125.6a";
let parse = "";
let stringPoint = true

if (!Number(input[0])) {
  console.log(NaN);
} else {
  for (i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      
    } else {
      parse += input[i];
    }
  }
}
console.log(parse);