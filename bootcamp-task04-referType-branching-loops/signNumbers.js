let number1 = 5
let number2 = -10
let number3 = 0
if (number1 === 0 || number2 === 0 || number3 === 0) {
    console.log("unsigned")
} else if ((number1 > 0 && number2 > 0 && number3 > 0) || 
(number1 > 0 && number2 < 0 && number3 < 0) || 
(number1 < 0 && number2 > 0 && number3 > 0) || 
(number1 < 0 && number2 > 0 && number3 < 0)) {
    console.log("+")
} else {
    console.log("-")
}

