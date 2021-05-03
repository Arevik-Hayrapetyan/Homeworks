let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
function sum(salaries) {
  let sumSecond = 0;
  for (let key in salaries) {
    sumSecond += salaries[key];
  }
  return sumSecond;
}
console.log(sum(salaries));
