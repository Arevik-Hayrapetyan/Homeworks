// function recFunc(number, acc = 1, quantity = 1) {
//   if (number !== quantity) {
//     acc = (acc - 1) ;
//     quantity++;
//     return recFunc(number, acc, quantity);
//   } else {
//     acc = acc + quantity;
//     return acc;
//   }
// }
// console.log(recFunc(3));
function fibon(n) {
  if (n === 0) {
    return 0
  }

  if (n === 1) {
    return 1
  }

  return fibon(n - 1) + fibon(n - 2);
}

console.log(fibon(6));
