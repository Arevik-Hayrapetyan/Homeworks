function recFunc(number, acc = 1, quantity = 1) {
  if (quantity !== number) {
    acc = acc * quantity;
    quantity++;
    return recFunc(number, acc, quantity);
  } else {
    acc = acc * quantity;
    return acc;
  }
}
console.log(recFunc(5));
