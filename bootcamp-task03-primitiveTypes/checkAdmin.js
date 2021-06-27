//Check the login
//If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
//The password is checked as follows:
//If it equals “TheMaster”, then show “Welcome!”,
//Another string – show “Wrong password”,
//For an empty string or cancelled input, show “Canceled”
let person = prompt(
  "WHO IS THERE?(Please enter something):", "  "
);
if (person === "Admin") {
  let password = prompt("Please enter your password:", "  ");
  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password === null || password === " ") {
    alert("Canceled!!: Please enter your password");
  } else {
    alert("Wrong password!! Please try again");
  }
} else if (person === null || password === " ") {
  alert("Canceled!!, Please enter something");
} else {
  alert("Sorry, I don't know you");
}
