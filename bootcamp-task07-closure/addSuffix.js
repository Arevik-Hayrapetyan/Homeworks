function addSuffix(input) {
  return function addingSuffix(input1) {
    return (input = input + input1);
  };
}
console.log(addSuffix("Boot")("Camp"));
