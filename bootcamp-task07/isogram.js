function isogram (string) {
  for (let i = 0; i < string.length; i++) {
    if (string.includes(string[i], i + 1)) {
      return false;
    }
  }
  return true;
}
console.log(isogram("add"));
