//Create a RegExp myRegExp to test if a string is a valid pin or not. A valid pin has:
function myRegExp(string) {
  const includeNum = /^(\d{4}|\d{6})$/;
  const checkSpace = /^\S*$/;
  const bool = checkSpace.test(string) && includeNum.test(string);
  return bool;
}
console.log(myRegExp("1234aa"));
