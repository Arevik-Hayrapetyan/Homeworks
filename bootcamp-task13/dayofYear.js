function dayofYear(input) {
  let now = new Date(input);
  let start = new Date(now.getFullYear(), 0, 0);
  let diff = now - start;
  let oneDay = 1000 * 60 * 60 * 24;
  let day = Math.floor(diff / oneDay);
  return day;
}
console.log(dayofYear("12/17/2020"));
