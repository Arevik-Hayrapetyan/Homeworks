let input = "125.77aa7a";
let parse = "";
let indx = true;
if (isNaN(input[0]) && input[0] !== ".") {
  console.log(NaN);
} else {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "." && indx) {
      parse += input[i];
      indx = false;
      continue;
    }
    if (isNaN(input[i])) {
      break;
    }
    parse += input[i];
  }
  console.log(Number(parse));
}
