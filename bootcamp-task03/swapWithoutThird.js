//Swap two variables without using the third one
let a = 10,
  b = 3;
console.log(`Unswaped variables are: a = ${a}` + ` b = ${b}`);
a = a + b;
b = a - b;
a = a - b;
console.log(`Swaped variables are: a = ${a}` + ` b = ${b}`);
