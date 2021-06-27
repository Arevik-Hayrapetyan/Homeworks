//Check the range between
//Write an if condition to check that age is between 14 and 90 inclusively.“Inclusively” means that age can reach the edges 14 or 90.
//First solution
let age = 4;
if (!(age >= 14 && age <= 90)) {
  console.log("ok");
}
//Second solution
if (age < 14 || age > 90) {
  console.log("ok");
}
