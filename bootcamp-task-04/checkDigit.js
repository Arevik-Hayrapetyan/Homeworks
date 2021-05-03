let num = 2434123;
let digit = 5;
while (num) {
  let lastDigit = num % 10;
  num = Math.floor(num / 10);
  if (digit === lastDigit) {
    console.log("yes");
    break;
  }
}
if(num === 0){
    console.log("No")
}