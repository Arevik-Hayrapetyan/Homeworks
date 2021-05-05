function checkNumber(number) {
  let phoneNum = "";
  for (let i = 0; i < number.length; i++) {
    if (number[i] === " ") {
      continue;
    }
    phoneNum += number[i];
  }
  if(!isNaN(phoneNum) && phoneNum.length === 10 && phoneNum[0] !== "+"){
      return phoneNum
  }
  if(phoneNum.length === 11 && phoneNum[0] === "+" && !isNaN(phoneNum)){
      return phoneNum.substr(1, phoneNum.length - 1)
  }
  return "It is bad phone-number"
}

console.log(checkNumber("+54789567"));

    