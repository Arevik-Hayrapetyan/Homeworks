//Write a function which receives two strings and removes appearances of the second string from the first
// one.
function removeSecondString(sentence, letter) {
  let newString = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.slice(i, letter.length + i) === letter) {
      i += letter.length - 1;
    } else {
      newString += sentence[i];
    }
  }
  return newString
}
console.log(removeSecondString("This is some text", "is"));
