function regex(str) {
  //const REGEXP = /abc/;

  let array = str.split(" <");
  return array;
  // str.match(REGEXP);
  // '<a href="/">', '<input type="radio" checked>', "<b>";
}
console.log(regex('<> <a href="/"> <input type="radio" checked> <b>'));
