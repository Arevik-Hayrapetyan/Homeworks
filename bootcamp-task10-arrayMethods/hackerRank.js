function balancePharentheses(input) {
  let phar1 = [];
  let phar2 = [];
  let normal = [];
  for (let indx = 0; indx < input.length; indx++) {
    if (input[indx] === "(" && input[indx + 1] === ")") {
      normal.push(input[indx]);
      normal.push(input[indx + 1]);
      indx++
    } else if (input[indx] === "(") {
      phar1.push(input[indx]);
    } else {
      phar2.push(input[indx]);
    }
  }
  for (let indx = 0; indx < phar1.length; indx++) {
    if (phar1.length === phar2.length) {
      normal.push(phar1[indx]);
      normal.push(phar2[indx]);
    }
  }
  return normal;
}
console.log(balancePharentheses("()))(("));
