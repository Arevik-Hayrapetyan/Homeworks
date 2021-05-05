function selectCorrectSublist(input, array) {
  let anagram = [];
  input = input.split("").sort().join("");
  for (let i = 0; i < array.length; i++) {
    let sortedArray = array[i].split("").sort().join("");
    if (input === sortedArray) {
      anagram.push(array[i]);
    }
  }
  return anagram;
}

console.log(
  selectCorrectSublist("listen", ["enlists","google","inlets","banana",]));
