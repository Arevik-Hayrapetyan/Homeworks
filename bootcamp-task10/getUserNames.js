function getUserNames(array, fn) {
  let userNames = [];
  for (let indx = 0; indx < array.length; indx++) {
    userNames.push(fn(array[indx]));
  }
  return userNames;
}
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];
console.log(getUserNames(users, (el) => el.username));
console.log(getUserNames(users, (el) => el.username.length));
