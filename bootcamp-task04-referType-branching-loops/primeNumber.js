let number = 15;
let i = 2;
for (; i < number; i++) {
  if (number % i === 0) {
    console.log("no");
    break;
  }
}
if (i === number) {
  console.log("yes");
}
