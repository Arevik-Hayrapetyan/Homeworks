let password = prompt("Please enter password");

let arrayNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let arrayLet = ["a", "b", "c", "d", "f", "j"];
let arrayChar = ["$", "#", "@"];
for (let i = 0; i < password.length; i++) {
  if (password.length < 6 && password.length > 16) {
    console.log(false);
    break;
  }
  if (arrayNum.includes(password[i])) {
    break;
  }
  if (i === password.length) {
    console.log("Please enter number");
  }
}
for (let i = 0; i < password.length; i++) {
  if (arrayLet.includes(password[i])) {
    break;
  }
  if (i === password.length) {
    console.log("Please enter letter");
  }
}
for (let i = 0; i < password.length; i++) {
  if (arrayChar.includes(password[i])) {
    break;
  }
  if (i === password.length) {
    console.log("Please enter characters");
  }
}
