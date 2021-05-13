function filterObject(users, fn) {
  let filteredNumbers = [];
  filteredNumbers = users.filter(fn);
  return filteredNumbers;
}
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",

    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];
console.log(filterObject(users, (el) => el.isAstronaut));
