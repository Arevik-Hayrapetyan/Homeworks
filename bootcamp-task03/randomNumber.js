//Write the function random(min, max) to generate a random floating-point number from min to max (not including max).
function randomNumber(minNumber, maxNumber) {
  return minNumber + Math.random() * (maxNumber - minNumer);
}
console.log("The random number is:" + randomNumber(10, 20));
//Math.random() always returns a number lower than 1.
