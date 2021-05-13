function usersAverageAge(users) {
  let averageAge = users.reduce((total, age) => {
    return total + age.age / users.length;
  }, 0);
  return Math.round(averageAge);
}
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

console.log(usersAverageAge(users));
