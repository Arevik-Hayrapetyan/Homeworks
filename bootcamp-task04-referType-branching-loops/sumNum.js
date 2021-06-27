let num = 1203
let sum = 0;
let product = 1;
while (num) {
    let lastDigit = num % 10
    num = (num - lastDigit) / 10
    sum += lastDigit
    product *= lastDigit
}
if (product === 0) {
    console.log("Can not calculate")
} else if (product % sum === 0) {
    console.log(`${product / sum} is Quotient`)
} else {
    console.log(`${product % sum} is Reminder`)
}
