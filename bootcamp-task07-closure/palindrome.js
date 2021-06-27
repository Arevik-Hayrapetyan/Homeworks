function palindrome(input) {
  for (let i = 0; i < input.length / 2; i++) {
    if (input[i] === input[input.length - 1 - i]) {
      return true;
    }
    return false;
  }
}
console.log(palindrome("fahaf"));
