function filterFunction2(users) {
  let filteredNumbers = [];
  filteredNumbers = users.filter((el) => el.lang !== "ru");
  return filteredNumbers;
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
console.log(filterFunction2(users));
