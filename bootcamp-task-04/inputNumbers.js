
function sumInput() {
    let array = [];

  while (true) {
    let input = prompt("Please enter value", 0);
    if (input === "" || input === null || !isFinite(input)) break;
      array.push(+input);
  }

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum
}
alert(sumInput())