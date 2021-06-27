let num = 10;
let number = [0, 1];
for (let i = 2; i < num; i++) {
  number.push(number[i - 1] + number[i - 2]);
}
console.log(number[number.length - 1]);
