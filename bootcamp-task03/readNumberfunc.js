//Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
//The resulting value must be returned as a number.
//The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.
function readNumber() {
  let number;
  do {
    number = prompt("Please enter any number:", 0);
  } while (!isFinite(number));
  //The isFinite() function determines whether a number is a finite, legal number.
  if (number === null || number === " ") return null;
  return number;
}
