//Write a function redundant that takes in a string strand returns a function that return string:
function returnString(input) {
  return function () {
    return input;
  };
}

const f1 = returnString("Bootcamp");
console.log(f1());
