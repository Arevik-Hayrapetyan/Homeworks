//The input is object, which keys are student's names and values are array of their scores. Find the
//student with the best average score.
// {
//     John: [100, 90, 80],
//     Bob: [100, 70, 80],
//     }
function getBestStudent(object) {
  let averages = [];
  for (let index in object) {
    let avg = object[index].reduce(function (a, b) {
      return a + b;
    }, 0);
    averages.push(avg / object[index].length);
  }
  //return averages;
  for (let i = 1; i < averages.length; i++) {
    let maxScore = averages[0];
    if (maxScore < averages[i]) {
      maxScore = averages[i];
    }
    return maxScore;
  }
  
}

console.log(
  getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80],
  })
);
