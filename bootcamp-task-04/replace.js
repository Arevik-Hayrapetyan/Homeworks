function replace(sentence, input) {
  newSentence = " ";
  let idx = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "_") {
      newSentence += input[idx];
      idx++;
    } else {
      newSentence += sentence[i];
    }
  }
  return newSentence;
}
console.log(replace("_ name is _", ["My", "Arev"]));
