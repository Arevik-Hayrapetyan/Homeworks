let num = [1, 1, 1, 0];
let secondNum = 0;
let indx = 0;
for (let i = num.length - 1; i >= 0; i--) {
  secondNum += num[i] * Math.pow(2, indx);
  indx++;
}
console.log(secondNum);
